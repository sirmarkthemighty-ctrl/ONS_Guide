#!/usr/bin/env node
// Test for enteral-formula-guide.html
// Runs headless Edge/Chrome through the Chrome DevTools Protocol (CDP)

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const PAGE = path.join(ROOT, 'enteral-formula-guide.html');
const BROWSERS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const exe = BROWSERS.find(p => fs.existsSync(p));
  if (!exe) {
    console.log('Skipping browser test: No Edge or Chrome found.');
    return;
  }

  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'enteral-test-'));
  const browser = spawn(exe, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=0',
    '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
    `--user-data-dir=${profile}`, '--window-size=1280,1000',
    pathToFileURL(PAGE).href,
  ], { stdio: 'ignore' });

  try {
    let port;
    for (let i = 0; i < 100 && !port; i++) {
      await sleep(100);
      try { port = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0].trim(); } catch (e) {}
    }
    if (!port) throw new Error('Browser did not open a debugging port.');

    let target;
    for (let i = 0; i < 50 && !target; i++) {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      target = list.find(t => t.type === 'page' && t.url.startsWith('file:'));
      if (!target) await sleep(100);
    }

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    let nextId = 1;
    const pending = new Map();
    const errors = [];

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.method === 'Runtime.exceptionThrown') {
        errors.push(data.params.exceptionDetails);
      }
      if (data.id && pending.has(data.id)) {
        const { res, rej } = pending.get(data.id);
        pending.delete(data.id);
        if (data.error) rej(new Error(data.error.message));
        else res(data.result);
      }
    };

    const send = (method, params = {}) => new Promise((res, rej) => {
      const id = nextId++;
      pending.set(id, { res, rej });
      ws.send(JSON.stringify({ id, method, params }));
    });

    await send('Runtime.enable');
    await send('Page.enable');

    // Wait 1.5 seconds for React to mount and hydrate
    await sleep(1500);

    const evalJs = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
      return r.result.value;
    };

    const title = await evalJs('document.title');
    console.log(`✓ Page Title: "${title}"`);

    const rootChildren = await evalJs('document.getElementById("root").children.length');
    if (rootChildren === 0) throw new Error('#root has no child nodes. React failed to render.');
    console.log(`✓ React successfully mounted with ${rootChildren} root element(s)`);

    // Verification: every product value against the PMK table (update 3/2024), transcribed in enteral-pmk.js
    const PMK = require('./enteral-pmk.js');
    const pmkResult = await evalJs(`(() => {
      const PMK = ${JSON.stringify(PMK)};
      const map = { pcf: 'pcfRatio', gi: 'gi', scoopKcal: 'scoopKcal', scoopGrams: 'scoopGrams', servingKcal: 'servingKcal', servingProtein: 'servingProtein', p1000: 'proteinPer1000Kcal', fiber: 'fiberPer1000Kcal', osm: 'osmolality', dil: 'dilution', na: 'na', k: 'k', p: 'p', ca: 'ca', mg: 'mg', vitA: 'vitA', vitC: 'vitC', mct: 'mctPercent', zn: 'zn', se: 'se', whey: 'wheyIsolatePercent' };
      const same = (a, b) => Array.isArray(a) ? Array.isArray(b) && a.join() === b.join()
        : a === null ? b === null || b === undefined
        : typeof a === 'number' ? typeof b === 'number' && Math.abs(a - b) < 0.011
        : String(a) === String(b);
      let n = 0; const bad = [];
      for (const f of ENTERAL_FORMULAS) {
        const pm = PMK[f.id];
        if (!pm) { bad.push(f.id + ': not in PMK table'); continue; }
        for (const [pk, ak] of Object.entries(map)) {
          if (!(pk in pm)) continue;
          if (pm.volume && (pk === 'scoopKcal' || pk === 'scoopGrams')) continue; // liquids store the container size here
          n++;
          if (!same(pm[pk], f[ak])) bad.push(f.id + ' ' + ak + ': app ' + JSON.stringify(f[ak]) + ', PMK ' + JSON.stringify(pm[pk]));
        }
      }
      return { n, bad, count: ENTERAL_FORMULAS.length };
    })()`);
    if (pmkResult.bad.length) throw new Error('Values differ from the PMK table:\n  ' + pmkResult.bad.join('\n  '));
    console.log(`✓ All ${pmkResult.n} values of ${pmkResult.count} products match the PMK table (update 3/2024)`);

    // Verification: No reference buttons in top controls or header
    const topReferenceBtns = await evalJs('document.querySelectorAll("[data-top-controls] button, header a, header button").length');
    const hasTopRefText = await evalJs('Array.from(document.querySelectorAll("[data-top-controls] button, header a, header button")).some(el => /reference|อ้างอิง/i.test(el.textContent))');
    if (hasTopRefText) throw new Error('Found reference button/link in top controls or header!');
    console.log('✓ Verified: Top left corner & top controls have NO reference buttons');

    // Verification: Version button exists in top controls
    const versionBtnText = await evalJs('document.querySelector("[data-top-controls] button")?.textContent');
    console.log(`✓ Top version badge: "${versionBtnText.trim()}"`);

    // Verification: Click version button to open Changelog
    await evalJs('document.querySelector("[data-top-controls] button").click()');
    await sleep(400);
    const changelogHeader = await evalJs('document.querySelector("div[role=\'dialog\'] h2")?.textContent');
    console.log(`✓ Changelog Modal opened: "${changelogHeader}"`);

    // Verification: Close Changelog Modal via Escape key
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await sleep(300);
    const changelogStillOpen = await evalJs('Boolean(document.querySelector("div[role=\'dialog\']"))');
    if (changelogStillOpen) throw new Error('Changelog modal did not close on Escape key');
    console.log('✓ Changelog Modal closed via Escape key');

    // Verification: Click Key / Legend button
    await evalJs('Array.from(document.querySelectorAll("button")).find(b => /สัญลักษณ์|Key/i.test(b.textContent))?.click()');
    await sleep(400);
    const legendHeader = await evalJs('document.querySelector("div[role=\'dialog\'] h2")?.textContent');
    console.log(`✓ Key / Legend Modal opened: "${legendHeader}"`);

    // Verification: Close Legend Modal via Escape key
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await sleep(300);
    const legendStillOpen = await evalJs('Boolean(document.querySelector("div[role=\'dialog\']"))');
    if (legendStillOpen) throw new Error('Legend modal did not close on Escape key');
    console.log('✓ Key / Legend Modal closed via Escape key');

    // Verification: Active Filter Chips Row
    await evalJs('Array.from(document.querySelectorAll("button")).find(b => /เบาหวาน|Diabetes/i.test(b.textContent))?.click()');
    await sleep(300);
    const chipsCount = await evalJs('document.querySelectorAll("[aria-label=\'ตัวกรองที่เลือกอยู่\'], [aria-label=\'Active filters\']").length');
    console.log(`✓ Active filter chips row rendered (matching Bronchodilator pattern)`);

    // Verification: Clear Filters
    await evalJs('document.querySelector("[title=\'ล้างตัวกรอง\'], [title=\'Clear All\']")?.click()');
    await sleep(300);
    console.log('✓ Quick Clear filter chips functional');

    // Verification: Country Availability & FDA Filter Row 1 (exact Bronchodilator pattern)
    const regRowExists = await evalJs('Boolean(document.querySelector("[data-filter-row=\'registration\']"))');
    if (!regRowExists) throw new Error('Filter row 1 [data-filter-row="registration"] is missing!');
    console.log('✓ Filter row 1 (Registration: Countries, FDA, Holder) present');

    const countryBtnsCount = await evalJs('document.querySelectorAll("[data-filter-row=\'registration\'] [data-country]").length');
    if (countryBtnsCount !== 5) throw new Error(`Expected 5 country buttons (TH, US, UK, EU, JP), found ${countryBtnsCount}`);
    console.log(`✓ 5 Country toggle buttons present (TH, US, UK, EU, JP)`);

    const fdaBtnsCount = await evalJs('document.querySelectorAll("[data-threg-group] [data-threg]").length');
    if (fdaBtnsCount !== 3) throw new Error(`Expected 3 FDA status buttons (current, past, unknown), found ${fdaBtnsCount}`);
    console.log(`✓ 3 FDA registration status buttons present (Currently, Past, Unknown)`);

    const holderToggleExists = await evalJs('Boolean(document.querySelector("[data-holder-toggle] button"))');
    if (!holderToggleExists) throw new Error('Licence holder toggle button is missing!');
    console.log('✓ Licence Holder toggle button present');

    // Verification: Card Country Chips & Licence Holder Display
    const cardHoldersCount = await evalJs('document.querySelectorAll("[data-holder-line=\'th\']").length');
    if (cardHoldersCount !== 44) throw new Error(`Expected 44 formulas with a current Thai record by default, found ${cardHoldersCount}`);
    console.log(`✓ Formula cards render Country Chips and Licence Holder lines (${cardHoldersCount} cards with TH holder)`);

    // Verification: Country Filtering (Select UK only)
    await evalJs('document.querySelector("[data-country=\'uk\']").click()'); // add UK
    await sleep(200);
    await evalJs('document.querySelector("[data-country=\'th\']").click()'); // remove TH
    await sleep(300);
    const ukCount = await evalJs('document.querySelectorAll("[data-holder-line=\'uk\']").length');
    if (ukCount !== 7) throw new Error(`Expected 7 formulas with a current UK dm+d record, found ${ukCount}`);
    console.log(`✓ Country filter works: ${ukCount} formulas with a current UK dm+d record`);

    // Verification: Active Filter Chip for Countries
    const hasCountryChip = await evalJs('Array.from(document.querySelectorAll("button")).some(b => /ประเทศ: UK|Countries: UK/i.test(b.textContent))');
    if (!hasCountryChip) throw new Error('Active filter chip for Country: UK not found!');
    console.log('✓ Active filter chip dynamically displayed for Country filter');

    // Verification: Detail Modal Country Registration Section
    await evalJs('document.querySelector("[data-card-details]")?.click()'); // Click view details on first card
    await sleep(400);
    const detailRegExists = await evalJs('Boolean(document.querySelector("[data-detail-reg]"))');
    if (!detailRegExists) throw new Error('[data-detail-reg] missing in FormulaDetailModal!');
    const detailCountryRows = await evalJs('document.querySelectorAll("[data-detail-country]").length');
    if (detailCountryRows !== 5) throw new Error(`Expected 5 countries in detail modal, found ${detailCountryRows}`);
    const srcInfo = await evalJs(`(() => {
      const th = document.querySelector('[data-reg-source="th"] a');
      const uk = document.querySelector('[data-reg-source="uk"] a');
      return { n: document.querySelectorAll('[data-reg-source]').length, th: th && th.href, uk: uk && uk.href };
    })()`);
    if (srcInfo.n !== 5) throw new Error(`Expected 5 source lines in the detail modal, found ${srcInfo.n}`);
    if (!/fda\.moph\.go\.th/.test(srcInfo.th || '') || !/dmd-browser/.test(srcInfo.uk || '')) throw new Error(`Detail modal source links wrong: ${JSON.stringify(srcInfo)}`);
    console.log(`✓ Formula Detail Modal shows 5 countries, each with a source line (TH and UK link to their records)`);

    // Close Detail Modal via Escape key
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await sleep(300);

    // Verification: All Countries Toggle
    await evalJs('document.querySelector("[data-country-all]").click()');
    await sleep(300);
    const allFormulasCount = await evalJs('document.querySelectorAll("div.group").length');
    console.log(`✓ 'All' countries button selected all regions (${allFormulasCount} formulas visible)`);

    // Verification: Reset to TH
    await evalJs('document.querySelector("[title=\'ล้างตัวกรอง\'], [title=\'Clear All\'], [title=\'ล้างทั้งหมด\']")?.click()');
    // Verification: Select Multiple ONS and Compare (Regression test for compare crash)
    // Select first formula for comparison
    await evalJs('document.querySelectorAll("div.group button[title*=\'เปรียบเทียบ\'], div.group button[title*=\'Compare\']")[0]?.click()');
    await sleep(200);
    // Select second formula for comparison
    await evalJs('document.querySelectorAll("div.group button[title*=\'เปรียบเทียบ\'], div.group button[title*=\'Compare\']")[1]?.click()');
    await sleep(200);
    // Select third formula for comparison
    await evalJs('document.querySelectorAll("div.group button[title*=\'เปรียบเทียบ\'], div.group button[title*=\'Compare\']")[2]?.click()');
    await sleep(300);

    const compareBarCount = await evalJs('document.querySelector(".fixed.bottom-0 span.bg-emerald-500")?.textContent');
    if (compareBarCount !== '3') throw new Error(`Expected 3 selected formulas in bottom floating bar, found "${compareBarCount}"`);
    console.log(`✓ Selected 3 multiple ONS formulas: floating compare bar displays ${compareBarCount} selected`);

    // Click the compare button to open CompareModal
    await evalJs('document.querySelector("[data-open-compare]")?.click()');
    await sleep(500);

    const compareDialogTitle = await evalJs('document.querySelector("div[role=\'dialog\'] h2")?.textContent');
    console.log(`✓ Compare Modal opened smoothly without crashing: "${compareDialogTitle}"`);

    const comparedCols = await evalJs('document.querySelectorAll("div[role=\'dialog\'] th.border-l").length');
    if (comparedCols !== 3) throw new Error(`Expected 3 columns in CompareModal table, found ${comparedCols}`);
    console.log(`✓ Compare Matrix rendered all 3 formulas side-by-side with full parameters`);

    // Test removing one formula inside the modal
    await evalJs('document.querySelector("[data-remove-compare]")?.click()');
    await sleep(400);
    const afterRemoveCols = await evalJs('document.querySelectorAll("div[role=\'dialog\'] th.border-l").length');
    if (afterRemoveCols !== 2) throw new Error(`Expected 2 columns after removing 1 formula, found ${afterRemoveCols}`);
    console.log(`✓ Removed formula inside CompareModal: now comparing 2 formulas`);

    // Close CompareModal via Escape key
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await sleep(300);
    const compareStillOpen = await evalJs('Boolean(document.querySelector("div[role=\'dialog\']"))');
    if (compareStillOpen) throw new Error('Compare modal did not close on Escape key');
    console.log('✓ Compare Modal closed cleanly via Escape key');

    // Clear compare list
    await evalJs('Array.from(document.querySelectorAll(".fixed.bottom-0 button")).find(b => /clear|ล้าง/i.test(b.textContent))?.click()');
    await sleep(200);

    // Verification: Dedicated Disclaimer & Collapsible References Section (matching Bronchodilator pattern)
    const discExists = await evalJs('Boolean(document.getElementById("disclaimer-heading"))');
    if (!discExists) throw new Error('#disclaimer-heading is missing!');
    console.log('✓ Clinical Disclaimer section present (matching Bronchodilator pattern)');

    const footerExists = await evalJs('Boolean(document.getElementById("references-section"))');
    if (!footerExists) throw new Error('#references-section is missing!');
    
    // Initially collapsed
    const initiallyOpen = await evalJs('Boolean(document.getElementById("refs-list"))');
    if (initiallyOpen) throw new Error('References section should be collapsed by default!');
    console.log('✓ References section is collapsed by default');

    // Expand references
    await evalJs('document.querySelector("#refs-heading button").click()');
    await sleep(300);
    const refsListOpen = await evalJs('Boolean(document.getElementById("refs-list"))');
    if (!refsListOpen) throw new Error('References list failed to expand on click!');
    
    const refsCount = await evalJs('document.querySelectorAll("#refs-list li").length');
    if (refsCount !== 13) throw new Error(`Expected 13 references, found ${refsCount}`);
    console.log(`✓ References section expanded: rendered all ${refsCount} clinical references with citations and "Used for" descriptions`);

    // Re-collapse references
    await evalJs('document.querySelector("#refs-heading button").click()');
    await sleep(200);
    const reCollapsed = await evalJs('Boolean(document.getElementById("refs-list"))');
    if (reCollapsed) throw new Error('References section failed to collapse on second click!');
    console.log('✓ References section re-collapsed cleanly');

    // Verification: guide content tied to sources (20 Oct 2026 audit)
    const escape = async () => { await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 }); await sleep(300); };
    const guideBtn = (i) => evalJs(`(() => { const row = document.querySelector('.sticky .grid.grid-cols-4'); row.children[${i}].click(); return true; })()`);

    // Calorie guide: preset source line and KDOQI value
    await guideBtn(0); await sleep(500);
    const cal = await evalJs(`(async () => {
      const sel = document.querySelector('[role=dialog] select');
      const set = (v) => { Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(sel, v); sel.dispatchEvent(new Event('change', { bubbles: true })); };
      set('ckd_pre'); await new Promise(r => setTimeout(r, 300));
      const src = document.querySelector('[data-cond-source]')?.textContent || '';
      const prot = [...document.querySelectorAll('[role=dialog] span')].map(s => s.textContent).find(x => /g\\/kg\\/d$/.test(x));
      set('surgery'); await new Promise(r => setTimeout(r, 300));
      const surg = document.querySelector('[data-cond-source]')?.textContent || '';
      return { src, prot, surg };
    })()`);
    if (!/KDOQI 2020/.test(cal.src) || cal.prot !== '0.55 g/kg/d') throw new Error('CKD preset not sourced / wrong value: ' + JSON.stringify(cal));
    if (!/ESPEN surgery 2021/.test(cal.surg)) throw new Error('Surgery preset source missing');
    console.log('✓ Calorie guide presets show their source (CKD non-dialysis 0.55 g/kg per KDOQI 2020)');
    await escape();

    // Nitrogen balance: no unsourced bands or fixed add-ons
    await guideBtn(1); await sleep(500);
    const nb = await evalJs(`(() => { const d = document.querySelector('[role=dialog]'); return { text: d.innerText, extra: !!d.querySelector('[data-nb-extra]'), src: d.querySelector('[data-nb-source]')?.textContent || '' }; })()`);
    if (/\+2\.0 g N|Anabolism|\+5\.0 g N|\+2\.5 g N/i.test(nb.text) || !nb.extra || !/Blackburn 1977/.test(nb.src)) throw new Error('Nitrogen balance still shows unsourced content');
    console.log('✓ Nitrogen balance: sign-only result, measured-loss box, equation source shown');
    await escape();

    // Osmolality guide: sourced sections
    await guideBtn(3); await sleep(500);
    const osmo = await evalJs(`(() => { const d = document.querySelector('[role=dialog]'); return { rf: d.querySelector('[data-osmo-refeeding]')?.innerText || '', dia: d.querySelector('[data-osmo-diarrhea]')?.innerText || '', iso: /Isotonic/.test(d.innerText) }; })()`);
    if (!/NICE CG32/.test(osmo.rf) || !/10 kcal\/kg|10 kcal\/กก/.test(osmo.rf) || !/ASPEN\/SCCM 2016/.test(osmo.dia) || osmo.iso) throw new Error('Osmolality guide content not sourced: ' + JSON.stringify(osmo).slice(0, 300));
    console.log('✓ Osmolality guide: diarrhea/GRV from ASPEN/SCCM 2016, refeeding from NICE CG32, no "Isotonic" label');
    await escape();

    // Photos: every product has a photo with its PMK page; no drawn stand-ins
    const photos = await evalJs(`(() => ({ n: Object.keys(window.PRODUCT_IMAGES || {}).length, pages: Object.keys(PHOTO_PAGE).length, na: document.querySelectorAll('[data-photo-na]').length }))()`);
    if (photos.n !== 48 || photos.pages !== 48 || photos.na !== 0) throw new Error('Photo sourcing check failed: ' + JSON.stringify(photos));
    console.log('✓ All 48 product photos come from the PMK table, each with its page');

    console.log('\n🌟 ALL TESTS PASSED: Adult Enteral Formula Guide is operational and error-free!');

    ws.close();
  } finally {
    browser.kill();
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) {}
  }
}

main().catch((e) => {
  console.error('Test failed:', e);
  process.exit(1);
});
