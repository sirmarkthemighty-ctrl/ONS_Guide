#!/usr/bin/env node
// Builds enteral-formula-guide.html from enteral-formula-src/:
//   app.jsx  -> plain JavaScript (Babel, React preset), minified with terser
//   styles.css + tailwind.config.js -> static, minified CSS (Tailwind 3)
//   shell.html -> the page skeleton the two are inlined into
//
// Usage:  node .claude/build-enteral.js [--no-minify]

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync, execSync } = require('child_process');
process.env.BROWSERSLIST_IGNORE_OLD_DATA = '1';

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'enteral-formula-src');
const OUT = path.join(ROOT, 'enteral-formula-guide.html');
// The distribution folder (GitHub repo ONS_Guide) sits inside Med Applications; the old sibling path is a fallback.
// When this script runs inside that repo itself, there is nothing to mirror.
const DEDICATED_DIR = [path.join(ROOT, 'Adult-Enteral-Formula-Guide'), path.resolve(ROOT, '..', 'Adult-Enteral-Formula-Guide')]
  .find(d => fs.existsSync(d) && path.resolve(d) !== ROOT) || '';
const TOOLS = path.join(process.env.LOCALAPPDATA || os.homedir(), 'med-apps-build');
const DEPS = { tailwindcss: '3.4.17', '@babel/standalone': '7.26.4', react: '18.3.1', 'react-dom': '18.3.1', terser: '5.36.0' };
const VENDOR = ['react/umd/react.production.min.js', 'react-dom/umd/react-dom.production.min.js'];

function ensureTools() {
  const missing = Object.keys(DEPS).filter(d => !fs.existsSync(path.join(TOOLS, 'node_modules', d, 'package.json')));
  if (!missing.length) return;
  console.log(`Installing build tools into ${TOOLS} ...`);
  fs.mkdirSync(TOOLS, { recursive: true });
  if (!fs.existsSync(path.join(TOOLS, 'package.json'))) {
    fs.writeFileSync(path.join(TOOLS, 'package.json'), JSON.stringify({ name: 'med-apps-build', private: true }, null, 2));
  }
  const pkgs = Object.entries(DEPS).map(([n, v]) => `${n}@${v}`).join(' ');
  execSync(`npm install --no-audit --no-fund ${pkgs}`, { cwd: TOOLS, stdio: 'inherit' });
}

function buildCss() {
  const tmp = path.join(os.tmpdir(), `enteral-${process.pid}.css`);
  const cli = path.join(TOOLS, 'node_modules', 'tailwindcss', 'lib', 'cli.js');
  execFileSync(process.execPath, [cli, '-c', path.join(SRC, 'tailwind.config.js'), '-i', path.join(SRC, 'styles.css'), '-o', tmp, '--minify'], { stdio: 'ignore', env: process.env });
  const css = fs.readFileSync(tmp, 'utf8');
  fs.unlinkSync(tmp);
  return css;
}

async function buildJs() {
  const Babel = require(path.join(TOOLS, 'node_modules', '@babel', 'standalone'));
  const jsx = fs.readFileSync(path.join(SRC, 'app.jsx'), 'utf8');
  const plain = Babel.transform(jsx, { presets: ['react'], filename: 'app.jsx', compact: false }).code;
  if (process.argv.includes('--no-minify')) return plain;
  const { minify } = require(path.join(TOOLS, 'node_modules', 'terser'));
  const out = await minify(plain, { compress: { passes: 2 }, mangle: true, toplevel: false, format: { comments: false } });
  if (!out.code) throw new Error('terser produced no output');
  return out.code;
}

(async () => {
  ensureTools();
  const started = Date.now();
  const css = buildCss();
  const js = await buildJs();
  const shell = fs.readFileSync(path.join(SRC, 'shell.html'), 'utf8');
  const read = (v) => fs.readFileSync(path.join(TOOLS, 'node_modules', v), 'utf8').replace(/<\/script/gi, '<\\/script');
  const vendor = VENDOR.map(v => `<script>\n${read(v)}\n</script>`).join('\n');
  let imagesScript = '';
  const imagesJsonPath = path.join(SRC, 'product-images.json');
  if (fs.existsSync(imagesJsonPath)) {
    const rawImages = fs.readFileSync(imagesJsonPath, 'utf8');
    imagesScript = `\n<script>\nwindow.PRODUCT_IMAGES = ${rawImages};\n</script>\n`;
  }

  const html = shell
    .replace('<!--__VENDOR__-->', () => vendor + imagesScript)
    .replace('/*__CSS__*/', () => css)
    .replace('/*__JS__*/', () => js);
  
  fs.writeFileSync(OUT, html);
  const gz = require('zlib').gzipSync(html).length;
  console.log(`Built ${path.relative(ROOT, OUT)}: ${(html.length / 1024).toFixed(0)} KB (${(gz / 1024).toFixed(0)} KB gzipped; CSS ${(css.length / 1024).toFixed(0)} KB, JS ${(js.length / 1024).toFixed(0)} KB) in ${Date.now() - started} ms`);

  // Mirror to dedicated repository folder
  if (DEDICATED_DIR) {
    fs.writeFileSync(path.join(DEDICATED_DIR, 'enteral-formula-guide.html'), html);
    const srcCopy = path.join(DEDICATED_DIR, 'enteral-formula-src');
    if (fs.existsSync(srcCopy)) {
      for (const f of ['app.jsx', 'shell.html', 'styles.css', 'tailwind.config.js', 'product-images.json']) fs.copyFileSync(path.join(SRC, f), path.join(srcCopy, f));
    }
    fs.writeFileSync(path.join(DEDICATED_DIR, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Adult Enteral Formula Guide</title>
<meta http-equiv="refresh" content="0; url=enteral-formula-guide.html">
<link rel="canonical" href="enteral-formula-guide.html">
<script>location.replace('enteral-formula-guide.html' + location.search + location.hash);</script>
</head>
<body>
<p><a href="enteral-formula-guide.html">Open Adult Enteral Formula Guide</a></p>
</body>
</html>`);
    console.log(`Updated ${path.relative(ROOT, DEDICATED_DIR)} distribution.`);
  }
})().catch((e) => { console.error('Build failed:', e.message); process.exitCode = 1; });
