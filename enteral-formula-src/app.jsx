const { useState, useEffect, useMemo, useRef } = React;

// --- Native SVG Icons ---
const Search = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const LayoutGrid = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
const TableIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="16" rx="1.5"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="14.5" x2="21" y2="14.5"></line><line x1="9.5" y1="9" x2="9.5" y2="20"></line></svg>);
const ListIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>);
const SortIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="15" y1="18" x2="15" y2="6"></line><polyline points="11 10 15 6 19 10"></polyline><line x1="9" y1="6" x2="9" y2="18"></line><polyline points="5 14 9 18 13 14"></polyline></svg>);
const ActivityIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>);
const BoxIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>);
const Check = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>);
const X = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const Sparkles = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275-1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M3 5h4M19 3v4M17 5h4"/></svg>);
const CompareIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="14" x="3" y="5" rx="2"></rect><rect width="8" height="14" x="13" y="5" rx="2"></rect><line x1="11" x2="13" y1="12" y2="12"></line></svg>);
const Stethoscope = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>);
const ShieldPlus = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M8 11h8"></path><path d="M12 7v8"></path></svg>);
const HistoryIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>);
const BookOpen = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>);
const SunIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>);
const MoonIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>);
const AlertTriangle = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>);
const InfoIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>);
const FlameIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>);
const ScaleIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>);
const DropletIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>);
const FilterIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>);
const CalculatorIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>);
const BeakerIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>);
const HeartPulse = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>);
const ArrowRight = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>);
const GlobeIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>);
const PrinterIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>);

// --- Dark theme layer ---
(() => {
  const tints = {
    amber: ['252,211,77', '251,191,36', '245,158,11'], blue: ['147,197,253', '96,165,250', '59,130,246'],
    cyan: ['103,232,249', '34,211,238', '6,182,212'], emerald: ['110,231,183', '52,211,153', '16,185,129'],
    fuchsia: ['240,171,252', '232,121,249', '217,70,239'], green: ['134,239,172', '74,222,128', '34,197,94'],
    indigo: ['165,180,252', '129,140,248', '99,102,241'], lime: ['190,242,100', '163,230,53', '132,204,22'],
    orange: ['253,186,116', '251,146,60', '249,115,22'], pink: ['249,168,212', '244,114,182', '236,72,153'],
    purple: ['216,180,254', '192,132,252', '168,85,247'], red: ['252,165,165', '248,113,113', '239,68,68'],
    rose: ['253,164,175', '251,113,133', '244,63,94'], sky: ['125,211,252', '56,189,248', '14,165,233'],
    stone: ['214,211,209', '168,162,158', '120,113,108'], teal: ['94,234,212', '45,212,191', '20,184,166'],
    violet: ['196,181,253', '167,139,250', '139,92,246'], yellow: ['253,224,71', '250,204,21', '234,179,8'],
  };
  const neutrals = {
    'bg-white': 'background-color:#151f32', 'bg-slate-50': 'background-color:#101a2b',
    'bg-slate-50/50': 'background-color:rgba(16,26,43,.5)', 'bg-slate-50/60': 'background-color:rgba(16,26,43,.6)',
    'bg-slate-50/70': 'background-color:rgba(16,26,43,.7)', 'bg-white/70': 'background-color:rgba(21,31,50,.7)', 'bg-white/90': 'background-color:rgba(21,31,50,.9)', 'bg-slate-100': 'background-color:#0b1220',
    'bg-slate-100/95': 'background-color:rgba(11,18,32,.95)', 'bg-slate-200': 'background-color:#24324a',
    'text-slate-900': 'color:#f1f5f9', 'text-slate-800': 'color:#e2e8f0', 'text-slate-700': 'color:#cbd5e1',
    'text-slate-600': 'color:#a8b4c6', 'text-slate-500': 'color:#94a3b8', 'text-slate-400': 'color:#7d8ba1',
    'text-slate-300': 'color:#4a5a73', 'text-slate-200': 'color:#33425a',
    'border-slate-100': 'border-color:#1d2940', 'border-slate-200': 'border-color:#263449',
    'border-slate-200/50': 'border-color:rgba(38,52,73,.5)', 'border-slate-300': 'border-color:#33435c',
  };
  const hoverNeutrals = {
    'hover:bg-white': 'background-color:#1b2740', 'hover:bg-slate-50': 'background-color:#1b2740',
    'hover:bg-slate-100': 'background-color:#1f2c45', 'hover:bg-slate-300': 'background-color:#2f3e58',
    'hover:text-slate-600': 'color:#cbd5e1', 'hover:text-slate-700': 'color:#e2e8f0',
  };
  const esc = (c) => c.replace(/[:/]/g, (m) => '\\' + m);
  const rules = [];
  // .light-lock (e.g. the donate QR card) and everything inside it keep their light colours
  const add = (cls, decl, hover) => rules.push(`html.dark .${esc(cls)}${hover ? ':hover' : ''}:not(.light-lock):not(.light-lock *){${decl}}`);
  Object.entries(neutrals).forEach(([c, d]) => add(c, d));
  Object.entries(hoverNeutrals).forEach(([c, d]) => add(c, d, true));
  Object.entries(tints).forEach(([f, [c300, c400, c500]]) => {
    [['50', 0.12], ['100', 0.2]].forEach(([shade, a]) => {
      add(`bg-${f}-${shade}`, `background-color:rgba(${c500},${a})`);
      [10, 50, 60, 70, 80].forEach((o) => add(`bg-${f}-${shade}/${o}`, `background-color:rgba(${c500},${(a * o / 100).toFixed(3)})`));
      add(`hover:bg-${f}-${shade}`, `background-color:rgba(${c500},${a + 0.06})`, true);
    });
    ['500', '600'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c400})`));
    ['700', '800', '900'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c300})`));
    ['500', '600'].forEach((s) => add(`hover:text-${f}-${s}`, `color:rgb(${c300})`, true));
    [['100', 0.28], ['200', 0.35], ['300', 0.45]].forEach(([s, a]) => {
      add(`border-${f}-${s}`, `border-color:rgba(${c500},${a})`);
      add(`hover:border-${f}-${s}`, `border-color:rgba(${c500},.6)`, true);
    });
  });
  const style = document.createElement('style');
  style.id = 'dark-theme-layer';
  style.textContent = rules.join('\n');
  document.head.appendChild(style);
})();

// Every product photo is the picture printed above that product's column in the PMK table (update 3/2024);
// PHOTO_PAGE is its page there (checked image by image on 20 Oct 2026). No photo = an N/A box, never a drawn stand-in.
const PHOTO_PAGE = {"blendera-mf":2,"once-complete":2,"ensure-powder":2,"ensure-liquid":2,"ensure-wheat-less-sweet":3,"ensure-gold-wheat":3,"ensure-gold-plant-based":3,"boost-optimum":4,"boost-fiber":4,"pan-enteral":4,"isocal":5,"fresubin-2kcal-drink":5,"ensure-plus-advance":5,"jevity":5,"ma-beedee":6,"optifast":6,"glucerna-liquid-can":7,"glucerna-sr-liquid-box":7,"glucerna-sr-powder":7,"glucerna-plus":7,"once-pro":8,"gen-dm-mf":8,"nutren-balance":8,"boost-care":8,"fresubin-dm-drink":9,"d-care":9,"once-renal":9,"aminoleban-oral":9,"nepro-powder":10,"nepro-liquid":10,"once-dialyze":10,"neo-mune":11,"oral-impact":11,"nutricia-forticare":11,"prosure-powder":12,"prosure-liquid":12,"supportan":12,"peptamen":13,"vital-peptide":13,"fresubin-protein":14,"boost-beneprotein":14,"immuplex":14,"ma-pro":15,"nutrica-whey":15,"novipro":15,"nephra-whey":15,"glutamine-plus":16,"ketosteril":16};

const ProductPhoto = ({ id, name, form, color = '#059669', className = "w-12 h-12" }) => {
  const [hasError, setHasError] = useState(false);
  const images = (typeof window !== 'undefined' && window.PRODUCT_IMAGES) || {};
  const src = images[id];

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={name || id}
        className={`${className} object-contain rounded-lg bg-white p-0.5 border border-slate-200/80 shadow-sm`}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    );
  }
  return (
    <span className={`${className} inline-flex items-center justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-600 text-[10px] font-bold text-slate-400`} role="img" aria-label={`${name || id}: no photo`} data-photo-na>N/A</span>
  );
};

// =====================================================================
// Complete Master Data: 48 Adult Enteral Formulas & Protein Supplements
// Source: Clinical Nutrition, Phramongkutklao Hospital (Update 3/2024)
// =====================================================================
const ENTERAL_FORMULAS = [
  // --- Standard Polymeric (Page 2) ---
  {
    id: 'blendera-mf',
    name: 'Blendera-MF',
    company: 'Thai otsuka',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [15, 55, 30],
    gi: null,
    scoopKcal: 38,
    scoopGrams: 8.3,
    servingKcal: 224,
    servingProtein: 8.4,
    servingDesc: "5.9 scoops (≈48.9 g powder) → 224 kcal, 8.4 g protein",
    proteinPer1000Kcal: 37.3,
    proteinSource: 'Casein, Soy',
    fatSource: 'MCT oil (2% total calorie), Rice bran oil',
    mctPercent: 2,
    fiberPer1000Kcal: 5.04,
    fiberDetails: '5.04 g FOS (soluble fiber)',
    hasFiber: true,
    osmolality: 320,
    dilution: '1:1',
    na: 794, k: 1103, p: 565, ca: 540, mg: 250, vitA: 1674, vitC: 574, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'sky',
    notes: {
      en: "Thai FDA: “Complete formula for those who require nutritional supplement (medical food)”. PMK: MCT oil 2% of energy; 5.04 g FOS/1,000 kcal.",
      th: "อย.: “อาหารสูตรครบถ้วนสำหรับผู้ต้องการเสริมโภชนาการ (อาหารทางการแพทย์)” PMK: MCT oil 2% ของพลังงาน; FOS 5.04 ก./1,000 kcal"
    }
  },
  {
    id: 'once-complete',
    name: 'ONCE Complete',
    company: 'Thai otsuka',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [18, 47, 35],
    gi: null,
    scoopKcal: 34.29,
    scoopGrams: 8.0,
    servingKcal: 240,
    servingProtein: 10.7,
    servingDesc: "7 scoops (≈56 g powder) → 240 kcal, 10.7 g protein",
    proteinPer1000Kcal: 44.8,
    proteinSource: 'Whey, Casein',
    fatSource: 'Safflower oil, Canola oil, Rice bran oil, MCT oil (13% total calorie)',
    mctPercent: 13,
    fiberPer1000Kcal: 5.98,
    fiberDetails: '5.98 g FOS (soluble fiber)',
    hasFiber: true,
    osmolality: 480,
    dilution: '1:1',
    na: 672, k: 995, p: 398, ca: 537, mg: 174, vitA: 1327, vitC: 199, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'emerald',
    notes: {
      en: "Thai FDA: “Complete nutritional formula with fiber, medical food”. PMK: MCT oil 13% of energy.",
      th: "อย.: “อาหารทางการแพทย์สูตรครบถ้วนผสมใยอาหาร” PMK: MCT oil 13% ของพลังงาน"
    }
  },
  {
    id: 'ensure-powder',
    name: 'Ensure (powder)',
    company: 'Abbott',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [15, 56, 29],
    gi: null,
    scoopKcal: 38,
    scoopGrams: 9.0,
    servingKcal: 230,
    servingProtein: 8.6,
    servingDesc: "6 scoops (≈54 g powder) → 230 kcal, 8.6 g protein",
    proteinPer1000Kcal: 37.0,
    proteinSource: 'Casein, Whey, Soy',
    fatSource: 'Sunflower oil, Canola oil, Soy bean oil',
    mctPercent: 0,
    fiberPer1000Kcal: 10.0,
    fiberDetails: '10.0 g FOS(s) + Inulin(s)',
    hasFiber: true,
    osmolality: 418,
    dilution: '1:1',
    na: 841, k: 1565, p: 549, ca: 1051, mg: 80, vitA: 3508, vitC: 126, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'blue',
    notes: {
      en: "Thai FDA (transl.): “Complete formula providing the nutrients the body needs, with vitamins, minerals and fiber (medical food)”. PMK: fiber 10.0 g/1,000 kcal (FOS + inulin).",
      th: "อย.: “อาหารสูตรครบถ้วนที่ให้สารอาหารที่ร่างกายต้องการ พร้อมวิตามิน แร่ธาตุและใยอาหาร (อาหารทางการแพทย์)” PMK: ใยอาหาร 10.0 ก./1,000 kcal (FOS + inulin)"
    }
  },
  {
    id: 'ensure-liquid',
    name: 'Ensure (liquid can)',
    company: 'Abbott',
    category: 'polymeric',
    form: 'liquid_can',
    pcfRatio: [14, 64, 22],
    gi: null,
    scoopKcal: 266,
    scoopGrams: 250,
    servingKcal: 266,
    servingProtein: 9.3,
    servingDesc: "266 kcal / 250 mL → 9.3 g protein",
    proteinPer1000Kcal: 35.0,
    proteinSource: 'Casein, Whey, Soy',
    fatSource: 'Sunflower oil, Canola oil, Corn oil',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 590,
    dilution: '1:1',
    na: 789, k: 1466, p: 1195, ca: 1195, mg: 395, vitA: 4954, vitC: 124, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'blue',
    notes: {
      en: "Thai FDA (transl.): “Complete formula with vitamins and minerals, liquid (medical food)”. PMK: no fiber; 266 kcal per 250 mL can.",
      th: "อย.: “อาหารสูตรครบถ้วนที่ให้สารอาหารที่ร่างกายต้องการพร้อมวิตามินและแร่ธาตุ ชนิดน้ำ (อาหารทางการแพทย์)” PMK: ไม่มีใยอาหาร; 266 kcal ต่อกระป๋อง 250 มล."
    }
  },

  // --- Standard Polymeric (Page 3) ---
  {
    id: 'ensure-wheat-less-sweet',
    name: 'Ensure Wheat Less Sweet (powder)',
    company: 'Abbott',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [15, 59, 26],
    gi: null,
    scoopKcal: 38,
    scoopGrams: 9.0,
    servingKcal: 230,
    servingProtein: 8.6,
    servingDesc: "6 scoops (≈54 g powder) → 230 kcal, 8.6 g protein",
    proteinPer1000Kcal: 37.0,
    proteinSource: 'Casein, Whey, Soy',
    fatSource: 'Sunflower oil, Canola oil, Soy bean oil',
    mctPercent: 0,
    fiberPer1000Kcal: 10.0,
    fiberDetails: '10.0 g FOS (soluble)',
    hasFiber: true,
    osmolality: 418,
    dilution: '1:1',
    na: 853, k: 1592, p: 548, ca: 1044, mg: 183, vitA: 3510, vitC: 126, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'amber',
    notes: {
      en: "Thai FDA (transl.): “Complete formula with vitamins, minerals and fiber, grain flavor (medical food)”. The record does not say “less sweet”. PMK: fiber 10.0 g/1,000 kcal (FOS).",
      th: "อย.: “อาหารสูตรครบถ้วน… พร้อมวิตามิน แร่ธาตุ และใยอาหาร กลิ่นธัญพืช (อาหารทางการแพทย์)” ทะเบียนไม่ได้ระบุว่าหวานน้อย PMK: ใยอาหาร 10.0 ก./1,000 kcal (FOS)"
    }
  },
  {
    id: 'ensure-gold-wheat',
    name: 'Ensure Gold Wheat',
    company: 'Abbott',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [17, 53, 30],
    gi: null,
    scoopKcal: 43.67,
    scoopGrams: 10.10,
    servingKcal: 262,
    servingProtein: 10.5,
    servingDesc: "6 scoops (≈60.6 g powder) → 262 kcal, 10.5 g protein",
    proteinPer1000Kcal: 40.0,
    proteinSource: 'Casein, Whey, Soy',
    fatSource: 'Sunflower oil, Canola oil, Soy bean oil, Non-vegetable oil',
    mctPercent: 0,
    fiberPer1000Kcal: 10.9,
    fiberDetails: '10.9 g FOS (soluble)',
    hasFiber: true,
    osmolality: 445,
    dilution: '1:1',
    na: 840, k: 1765, p: 687, ca: 1186, mg: 242, vitA: 3952, vitC: 143, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'amber',
    notes: {
      en: "Thai FDA (transl.): “Complete formula with HMB, vitamins, minerals and fiber, grain flavor (medical food)”. PMK: protein 40 g/1,000 kcal.",
      th: "อย.: “อาหารสูตรครบถ้วนเสริม เอช เอ็ม บี พร้อมวิตามิน แร่ธาตุ และใยอาหาร กลิ่นธัญพืช (อาหารทางการแพทย์)” PMK: โปรตีน 40 ก./1,000 kcal"
    }
  },
  {
    id: 'ensure-gold-plant-based',
    name: 'Ensure Gold Plant-Based',
    company: 'Abbott',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [17, 53, 30],
    gi: null,
    scoopKcal: 43.67,
    scoopGrams: 10.10,
    servingKcal: 262,
    servingProtein: 10.5,
    servingDesc: "6 scoops (≈60.6 g powder) → 262 kcal, 10.5 g protein",
    proteinPer1000Kcal: 40.0,
    proteinSource: "Soy, Quinoa, Rice",
    fatSource: 'Sunflower oil, Soy bean oil, Canola oil',
    mctPercent: 0,
    fiberPer1000Kcal: 10.9,
    fiberDetails: '10.9 g FOS (soluble)',
    hasFiber: true,
    osmolality: 452,
    dilution: '1:1',
    na: 878, k: 2030, p: 921, ca: 1186, mg: 244, vitA: 3952, vitC: 124, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'green',
    notes: {
      en: "Thai FDA (transl.): “Complete formula with protein from 3 grains, vitamins and minerals, almond flavor (medical food)”. PMK: protein from soy, quinoa and rice.",
      th: "อย.: “อาหารสูตรครบถ้วน สูตรโปรตีนจากธัญพืช 3 ชนิด ผสมวิตามินและแร่ธาตุ กลิ่นอัลมอนด์ (อาหารทางการแพทย์)” PMK: โปรตีนจากถั่วเหลือง ควินัว และข้าว"
    }
  },

  // --- Standard Polymeric (Page 4) ---
  {
    id: 'boost-optimum',
    name: 'Boost Optimum',
    company: 'Nestle',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [16, 50, 34],
    gi: null,
    scoopKcal: 35,
    scoopGrams: 7.8,
    servingKcal: 251,
    servingProtein: 10.2,
    servingDesc: "7.2 scoops (≈55.9 g powder) → 251 kcal, 10.2 g protein",
    proteinPer1000Kcal: 40.0,
    proteinSource: 'Whey, Casein',
    fatSource: 'Sunflower oil high oleic, Rapeseed oil, MUFA (22% total calorie)',
    mctPercent: 0,
    fiberPer1000Kcal: 13.2,
    fiberDetails: '13.2 g [FOS 8.8 g + Inulin 4.4 g]',
    hasFiber: true,
    osmolality: 340,
    dilution: '1:1',
    na: 368, k: 1200, p: 468, ca: 864, mg: 198, vitA: 2275, vitC: 83, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'teal',
    notes: {
      en: "Thai FDA: “Complete nutrition food, proportionate to nutrient requirements (medical food)”. PMK: contains probiotic L. paracasei; mix below 45 °C. MUFA 22% of energy.",
      th: "อย.: “อาหารสูตรครบถ้วนที่มีสารอาหารที่ร่างกายต้องการ (อาหารทางการแพทย์)” PMK: มีโพรไบโอติก L. paracasei ผสมน้ำอุณหภูมิต่ำกว่า 45 °C; MUFA 22% ของพลังงาน"
    }
  },
  {
    id: 'boost-fiber',
    name: 'Boost Fiber',
    company: 'Nestle',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [16, 50, 34],
    gi: null,
    scoopKcal: 32.5,
    scoopGrams: 7.3,
    servingKcal: 260,
    servingProtein: 10.1,
    servingDesc: "8 scoops (≈58.4 g powder) → 260 kcal, 10.1 g protein",
    proteinPer1000Kcal: 40.0,
    proteinSource: 'Whey, Casein',
    fatSource: 'Sunflower oil high oleic, Rapeseed oil, MUFA (19% total calorie)',
    mctPercent: 0,
    fiberPer1000Kcal: 14.6,
    fiberDetails: "14.6 g [FOS 2.8 g + Inulin 2.2 g]",
    hasFiber: true,
    osmolality: 343,
    dilution: '1:1',
    na: 804, k: 1231, p: 446, ca: 769, mg: 169, vitA: 2326, vitC: 52, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'orange',
    notes: {
      en: "Thai FDA: “Medical food powder, complete nutritional formula with fiber”. PMK: fiber 14.6 g/1,000 kcal.",
      th: "อย.: “อาหารทางการแพทย์ชนิดผงสูตรครบถ้วน เสริมใยอาหาร” PMK: ใยอาหาร 14.6 ก./1,000 kcal"
    }
  },
  {
    id: 'pan-enteral',
    name: 'Pan-enteral',
    company: 'Thai otsuka',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [12, 43, 45],
    gi: null,
    scoopKcal: 40,
    scoopGrams: 8.3,
    servingKcal: 204,
    servingProtein: 6.1,
    servingDesc: "5.1 scoops (≈42.3 g powder) → 204 kcal, 6.1 g protein",
    proteinPer1000Kcal: 30.0,
    proteinSource: 'Casein',
    fatSource: 'Soy bean oil, MCT oil (20% total calorie)',
    mctPercent: 20,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 270,
    dilution: '1:1',
    na: 440, k: 1100, p: 430, ca: 860, mg: 80, vitA: 2620, vitC: 98, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'rose',
    notes: {
      en: "Thai FDA: “PAN-ENTERAL (vanilla flavor)”. Another current record (74-1-21431-1-0001) describes it as “medical food for tube feeding for paediatric patients with digestive and absorptive problems”. PMK: MCT oil 20% of energy; no fiber; 270 mOsm/kg.",
      th: "อย.: “PAN-ENTERAL (VANILLA FLAVOR)” อีกทะเบียนหนึ่งที่ยังคงอยู่ (74-1-21431-1-0001) ระบุว่าเป็นอาหารทางการแพทย์ให้ทางสายสำหรับผู้ป่วยเด็กที่มีปัญหาการย่อยและการดูดซึม PMK: MCT oil 20% ของพลังงาน; ไม่มีใยอาหาร; 270 mOsm/kg"
    }
  },

  // --- Standard Polymeric (Page 5) ---
  {
    id: 'isocal',
    name: 'Isocal',
    company: 'Nestle',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [13, 50, 37],
    gi: null,
    scoopKcal: 83,
    scoopGrams: 17.8,
    servingKcal: 250,
    servingProtein: 8.1,
    servingDesc: "3 scoops (≈53.4 g powder) → 250 kcal, 8.1 g protein",
    proteinPer1000Kcal: 32.0,
    proteinSource: 'Casein, Soy',
    fatSource: 'Vegetable oil, MCT oil (7% total calorie)',
    mctPercent: 7,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 300,
    dilution: '1:1',
    na: 500, k: 1250, p: 500, ca: 919, mg: 180, vitA: 2500, vitC: 150, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'cyan',
    notes: {
      en: "Thai FDA: “Medical food powder (complete nutritional formula for health maintenance)”. PMK: MCT oil 7% of energy; no fiber; 300 mOsm/kg.",
      th: "อย.: “อาหารทางการแพทย์ชนิดผง (อาหารที่มีปริมาณสารอาหารเพียงพอต่อความต้องการของร่างกาย)” PMK: MCT oil 7% ของพลังงาน; ไม่มีใยอาหาร; 300 mOsm/kg"
    }
  },
  {
    id: 'fresubin-2kcal-drink',
    name: 'Fresubin 2 kcal Drink',
    company: 'Fresenius kabi',
    category: 'polymeric',
    form: 'liquid_bottle',
    pcfRatio: [20, 45, 35],
    gi: null,
    scoopKcal: 400,
    scoopGrams: 200,
    servingKcal: 400,
    servingProtein: 20.0,
    servingDesc: "400 kcal / 200 mL → 20 g protein",
    proteinPer1000Kcal: 50.0,
    proteinSource: 'Casein, Milk protein',
    fatSource: 'Sunflower oil, Rapeseed oil',
    mctPercent: 0,
    fiberPer1000Kcal: 7.5,
    fiberDetails: '7.5 g Inulin (soluble)',
    hasFiber: true,
    osmolality: 510,
    dilution: '2:1',
    na: 230, k: 800, p: 600, ca: 762, mg: 80, vitA: 2500, vitC: 102, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'indigo',
    notes: {
      en: "Thai FDA: “Liquid complete, balanced nutrition diet (medical food)”. PMK: 400 kcal and 20 g protein per 200 mL bottle (2 kcal/mL).",
      th: "อย.: “อาหารสูตรครบถ้วนพร้อมดื่ม (อาหารทางการแพทย์)” PMK: 400 kcal และโปรตีน 20 ก. ต่อขวด 200 มล. (2 kcal/มล.)"
    }
  },
  {
    id: 'ensure-plus-advance',
    name: 'Ensure Plus Advance (liquid)',
    company: 'Abbott',
    category: 'polymeric',
    form: 'liquid_bottle',
    pcfRatio: [25, 46, 29],
    gi: null,
    scoopKcal: 330,
    scoopGrams: 220,
    servingKcal: 330,
    servingProtein: 20.0,
    servingDesc: "330 kcal / 220 mL → 20 g protein",
    proteinPer1000Kcal: 60.0,
    proteinSource: 'Casein, Whey, Soy',
    fatSource: 'Canola oil, Corn oil',
    mctPercent: 0,
    fiberPer1000Kcal: 5.2,
    fiberDetails: '5.2 g FOS (soluble)',
    hasFiber: true,
    osmolality: null,
    dilution: '1.5:1',
    na: 1500, k: 1800, p: 788, ca: 1512, mg: 167, vitA: 4954, vitC: 106, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'purple',
    notes: {
      en: "Thai FDA (transl.): “Complete formula with calcium HMB, vitamins, minerals and fiber, liquid (medical food)”. PMK: protein 60 g/1,000 kcal; 330 kcal per 220 mL bottle; osmolality NA.",
      th: "อย.: “อาหารสูตรครบถ้วนเสริมแคลเซียม เอชเอ็มบี พร้อมวิตามิน แร่ธาตุ และใยอาหาร ชนิดน้ำ (อาหารทางการแพทย์)” PMK: โปรตีน 60 ก./1,000 kcal; 330 kcal ต่อขวด 220 มล.; ไม่มีข้อมูลออสโมลาลิตี"
    }
  },
  {
    id: 'jevity',
    name: 'Jevity',
    company: 'Abbott',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [15, 53, 29],
    gi: null,
    scoopKcal: 44,
    scoopGrams: 10.5,
    servingKcal: 264,
    servingProtein: 10.2,
    servingDesc: "6 scoops (≈63 g powder) → 264 kcal, 10.2 g protein",
    proteinPer1000Kcal: 38.0,
    proteinSource: 'Casein',
    fatSource: 'Vegetable oil, Corn oil, MCT oil (5.7% total calorie)',
    mctPercent: 5.7,
    fiberPer1000Kcal: 16.9,
    fiberDetails: '16.9 g fiber (7.0 g FOS)',
    hasFiber: true,
    osmolality: 304,
    dilution: '1:1',
    na: 895, k: 1510, p: 577, ca: 883, mg: 173, vitA: 653, vitC: 96, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'emerald',
    notes: {
      en: "Thai FDA (transl.): “Complete formula with mixed fibers and fructo-oligosaccharides (medical food)”. PMK: fiber 16.9 g/1,000 kcal, of which 7.0 g FOS; 304 mOsm/kg.",
      th: "อย.: “อาหารสูตรครบถ้วนผสมใยอาหารหลายชนิดและฟรุคโตโอลิโกแซคคาไรด์ (อาหารทางการแพทย์)” PMK: ใยอาหาร 16.9 ก./1,000 kcal (FOS 7.0 ก.); 304 mOsm/kg"
    }
  },

  // --- Standard Polymeric (Page 6) ---
  {
    id: 'ma-beedee',
    name: 'MA-BEEDEE',
    company: 'MA-JUSMIN',
    category: 'polymeric',
    form: 'powder',
    pcfRatio: [16, 52, 32],
    gi: null,
    scoopKcal: 100,
    scoopGrams: 22.0,
    servingKcal: 200,
    servingProtein: 8.0,
    servingDesc: "2 scoops (≈44 g powder) → 200 kcal, 8 g protein",
    proteinPer1000Kcal: 40.0,
    proteinSource: 'Soy protein',
    fatSource: 'Vegetable oil',
    mctPercent: 0,
    fiberPer1000Kcal: 4.4,
    fiberDetails: '4.4 g fiber',
    hasFiber: true,
    osmolality: null,
    dilution: null,
    na: 616, k: 748, p: 704, ca: 704, mg: 185, vitA: 5227, vitC: 158, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'cyan',
    notes: {
      en: "Thai FDA: “Complete nutrition formula with soy protein (medical food)”. PMK: osmolality NA.",
      th: "อย.: “อาหารสูตรครบถ้วนจากโปรตีนถั่วเหลือง (อาหารทางการแพทย์)” PMK: ไม่มีข้อมูลออสโมลาลิตี"
    }
  },
  {
    id: 'optifast',
    name: 'Optifast',
    company: 'Nestle',
    category: 'polymeric',
    form: 'sachet',
    pcfRatio: [37, 38, 25],
    gi: null,
    scoopKcal: 215,
    scoopGrams: 55.0,
    servingKcal: 215,
    servingProtein: 20.0,
    servingDesc: "215 kcal / sachet (55 g) → 20 g protein",
    proteinPer1000Kcal: 93.0,
    proteinSource: 'Casein, Milk protein',
    fatSource: 'Canola oil, Sunflower oil, Tuna oil',
    mctPercent: 0,
    fiberPer1000Kcal: 14.3,
    fiberDetails: '14.3 g [FOS 7.3 g + Inulin 3.6 g]',
    hasFiber: true,
    osmolality: null,
    dilution: null,
    na: 1253, k: 3604, p: 1072, ca: 1297, mg: 524, vitA: 1116, vitC: 121, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'purple',
    notes: {
      en: "Thai FDA: “Medical food for weight reduction”. PMK: 215 kcal and 20 g protein per sachet (93 g/1,000 kcal); osmolality NA.",
      th: "อย.: “อาหารทางการแพทย์ เพื่อลดน้ำหนัก” PMK: 215 kcal และโปรตีน 20 ก. ต่อซอง (93 ก./1,000 kcal); ไม่มีข้อมูลออสโมลาลิตี"
    }
  },

  // --- Diabetes Specific (Page 7) ---
  {
    id: 'glucerna-liquid-can',
    name: 'Glucerna (Liquid can)',
    company: 'Abbott',
    category: 'diabetes',
    form: 'liquid_can',
    pcfRatio: [16, 34, 50],
    gi: 19,
    scoopKcal: 250,
    scoopGrams: 250,
    servingKcal: 250,
    servingProtein: 10.0,
    servingDesc: "250 kcal / 250 mL → 10 g protein",
    proteinPer1000Kcal: 40.0,
    proteinSource: 'Casein',
    fatSource: "Sunflower oil, Canola oil",
    mctPercent: 0,
    fiberPer1000Kcal: 14.4,
    fiberDetails: '3.6 g fiber/can; 14.4 g/1,000 kcal calc.',
    hasFiber: true,
    osmolality: 354,
    dilution: '1:1',
    na: 932, k: 1560, p: 720, ca: 720, mg: 280, vitA: 3520, vitC: 212, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'sky',
    notes: {
      en: "Thai FDA: “Specialized nutrition with fiber for patients with abnormal glucose tolerance, complete liquid nutrition (medical food)”. PMK: GI 19; fat 50% of energy.",
      th: "อย.: “อาหารสูตรครบถ้วนผสมใยอาหารสำหรับผู้ป่วยโรคเบาหวาน ชนิดน้ำ (อาหารทางการแพทย์)” PMK: GI 19; ไขมัน 50% ของพลังงาน"
    }
  },
  {
    id: 'glucerna-sr-liquid-box',
    name: 'Glucerna SR Triple Care (Liquid box)',
    company: 'Abbott',
    category: 'diabetes',
    form: 'liquid_box',
    pcfRatio: [18, 49, 33],
    gi: 38,
    scoopKcal: 223,
    scoopGrams: 230,
    servingKcal: 223,
    servingProtein: 10.0,
    servingDesc: "223 kcal / 230 mL → 10 g protein",
    proteinPer1000Kcal: 45.0,
    proteinSource: 'Casein, Soy',
    fatSource: 'Soy bean oil, Sunflower oil',
    mctPercent: 0,
    fiberPer1000Kcal: 9.4,
    fiberDetails: '2.1 g fiber/box (0.92 g FOS); 9.4 g/1,000 kcal calc.',
    hasFiber: true,
    osmolality: 725,
    dilution: '1:1',
    na: 982, k: 1547, p: 876, ca: 619, mg: 185, vitA: 3433, vitC: 94, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'violet',
    notes: {
      en: "Thai FDA (transl.): “Complete meal replacement or between-meal formula with fiber, helps control blood sugar in diabetic patients, liquid (medical food)”. PMK: GI 38; 725 mOsm/kg.",
      th: "อย.: “อาหารทดแทนหรืออาหารระหว่างมื้อสูตรครบถ้วนผสมใยอาหาร ช่วยควบคุมระดับน้ำตาลสำหรับผู้ป่วยโรคเบาหวาน ชนิดน้ำ (อาหารทางการแพทย์)” PMK: GI 38; 725 mOsm/kg"
    }
  },
  {
    id: 'glucerna-sr-powder',
    name: 'Glucerna SR Triple Care (Powder)',
    company: 'Abbott',
    category: 'diabetes',
    form: 'powder',
    pcfRatio: [20, 43, 37],
    gi: 41,
    scoopKcal: 45.2,
    scoopGrams: 10.42,
    servingKcal: 226,
    servingProtein: 10.17,
    servingDesc: "5 scoops (≈52.1 g powder) → 226 kcal, 10.17 g protein",
    proteinPer1000Kcal: 45.0,
    proteinSource: 'Casein, Soy',
    fatSource: 'Soy bean oil, Sunflower oil',
    mctPercent: 0,
    fiberPer1000Kcal: 9.45,
    fiberDetails: '9.45 g fiber (4.7 g FOS, Fibersol-2, Sucromalt)',
    hasFiber: true,
    osmolality: 592,
    dilution: '1:1',
    na: 935, k: 1640, p: 746, ca: 746, mg: 263, vitA: 2450, vitC: 95, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'amber',
    notes: {
      en: "Thai FDA (transl.): “Complete meal replacement or between-meal formula with fiber, helps control blood sugar in diabetic patients (medical food)”. PMK: GI 41; fiber 9.45 g/1,000 kcal (FOS, Fibersol-2, sucromalt).",
      th: "อย.: “อาหารทดแทนหรืออาหารระหว่างมื้อสูตรครบถ้วนผสมใยอาหาร ช่วยควบคุมระดับน้ำตาล สำหรับผู้ป่วยโรคเบาหวาน (อาหารทางการแพทย์)” PMK: GI 41; ใยอาหาร 9.45 ก./1,000 kcal (FOS, Fibersol-2, sucromalt)"
    }
  },
  {
    id: 'glucerna-plus',
    name: 'Glucerna Plus',
    company: 'Abbott',
    category: 'diabetes',
    form: 'powder',
    pcfRatio: [17, 50, 33],
    gi: 38,
    scoopKcal: 41.7,
    scoopGrams: 10.42,
    servingKcal: 180,
    servingProtein: 8.0,
    servingDesc: "4.3 scoops (≈45 g powder) → 180 kcal, 8 g protein",
    proteinPer1000Kcal: 44.0,
    proteinSource: 'Casein, Soy',
    fatSource: 'Soy bean oil, Sunflower oil',
    mctPercent: 0,
    fiberPer1000Kcal: 16.67,
    fiberDetails: '16.67 g fiber (6.7 g FOS, Fibersol-2, Sucromalt)',
    hasFiber: true,
    osmolality: 592,
    dilution: '1:1',
    na: 944, k: 1333, p: 666, ca: 888, mg: 194, vitA: 666, vitC: 83, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'amber',
    notes: {
      en: "Thai FDA: “Beverage with milk protein, soy protein, mixed vitamins and minerals, and oat fiber”. Registered as a beverage, not as a medical food. PMK: GI 38; fiber 16.67 g/1,000 kcal.",
      th: "อย.: “เครื่องดื่มผสม โปรตีนนม โปรตีนถั่วเหลือง วิตามินรวม แร่ธาตุรวม และใยอาหารจากข้าวโอ๊ต” ขึ้นทะเบียนเป็นเครื่องดื่ม ไม่ใช่อาหารทางการแพทย์ PMK: GI 38; ใยอาหาร 16.67 ก./1,000 kcal"
    }
  },

  // --- Diabetes Specific (Page 8) ---
  {
    id: 'once-pro',
    name: 'Once Pro',
    company: 'Thai otsuka',
    category: 'diabetes',
    form: 'powder',
    pcfRatio: [20, 40, 40],
    gi: 27,
    scoopKcal: 34,
    scoopGrams: 8.0,
    servingKcal: 204,
    servingProtein: 10.0,
    servingDesc: "6 scoops (≈48 g powder) → 204 kcal, 10 g protein",
    proteinPer1000Kcal: 48.8,
    proteinSource: 'Whey, Soy',
    fatSource: 'Rice bran oil, Safflower oil, Fish oil',
    mctPercent: 0,
    fiberPer1000Kcal: 16.3,
    fiberDetails: '16.3 g fiber (5.4 g FOS)',
    hasFiber: true,
    osmolality: 320,
    dilution: '1:1',
    na: 974, k: 1626, p: 665, ca: 651, mg: 216, vitA: 2887, vitC: 217, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'emerald',
    notes: {
      en: "Thai FDA: “Low glycemic index medical food”. PMK: GI 27; protein 48.8 g/1,000 kcal; fish oil in the fat blend.",
      th: "อย.: “อาหารทางการแพทย์ที่มีค่าดัชนีน้ำตาลต่ำ” PMK: GI 27; โปรตีน 48.8 ก./1,000 kcal; มีน้ำมันปลา"
    }
  },
  {
    id: 'gen-dm-mf',
    name: 'Gen-DM MF',
    company: 'Thai otsuka',
    category: 'diabetes',
    form: 'powder',
    pcfRatio: [17, 52, 31],
    gi: 50,
    scoopKcal: 36,
    scoopGrams: 8.0,
    servingKcal: 180,
    servingProtein: 7.7,
    servingDesc: "5 scoops (≈40 g powder) → 180 kcal, 7.7 g protein",
    proteinPer1000Kcal: 42.6,
    proteinSource: 'Casein, Soy',
    fatSource: 'Soy bean oil',
    mctPercent: 0,
    fiberPer1000Kcal: 16.1,
    fiberDetails: '16.1 g fiber (13.88 g FOS soluble)',
    hasFiber: true,
    osmolality: 380,
    dilution: '1:1',
    na: 662, k: 1400, p: 407, ca: 538, mg: 211, vitA: 3062, vitC: 110, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'yellow',
    notes: {
      en: "Thai FDA: “Medical food”. PMK: GI 50; fiber 16.1 g/1,000 kcal, of which 13.88 g FOS.",
      th: "อย.: “อาหารทางการแพทย์” PMK: GI 50; ใยอาหาร 16.1 ก./1,000 kcal (FOS 13.88 ก.)"
    }
  },
  {
    id: 'nutren-balance',
    name: 'Nutren Balance',
    company: 'Nestle',
    category: 'diabetes',
    form: 'powder',
    pcfRatio: [15, 45, 40],
    gi: 34,
    scoopKcal: 36,
    scoopGrams: 8.3,
    servingKcal: 250,
    servingProtein: 9.5,
    servingDesc: "7 scoops (≈58.1 g powder) → 250 kcal, 9.5 g protein",
    proteinPer1000Kcal: 38.1,
    proteinSource: 'Whey, Casein',
    fatSource: 'Sunflower, Rapeseed oil, MUFA (27% total calorie)',
    mctPercent: 0,
    fiberPer1000Kcal: 15.2,
    fiberDetails: '15.2 g fiber (5.0 g Inulin)',
    hasFiber: true,
    osmolality: 250,
    dilution: '1:1',
    na: 870, k: 1260, p: 680, ca: 680, mg: 272, vitA: 4014, vitC: 140, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'teal',
    notes: {
      en: "No Thai FDA record found (searched 19 Oct 2026). PMK: GI 34; MUFA 27% of energy; 250 mOsm/kg.",
      th: "ไม่พบทะเบียน อย. (ค้นเมื่อ 19 ต.ค. 2569) PMK: GI 34; MUFA 27% ของพลังงาน; 250 mOsm/kg"
    }
  },
  {
    id: 'boost-care',
    name: 'Boost Care',
    company: 'Nestle',
    category: 'diabetes',
    form: 'powder',
    pcfRatio: [18, 42, 40],
    gi: 28,
    scoopKcal: 36,
    scoopGrams: 7.8,
    servingKcal: 250,
    servingProtein: 11.0,
    servingDesc: "7 scoops (≈54.6 g powder) → 250 kcal, 11 g protein",
    proteinPer1000Kcal: 44.0,
    proteinSource: 'Whey, Casein',
    fatSource: 'High Oleic sunflower, Canola oil, Sunflower oil',
    mctPercent: 0,
    fiberPer1000Kcal: 13.2,
    fiberDetails: '13.2 g fiber (FOS + Inulin)',
    hasFiber: true,
    osmolality: null,
    dilution: null,
    na: 760, k: 960, p: null, ca: null, mg: null, vitA: null, vitC: null, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'teal',
    notes: {
      en: "Thai FDA: “Instant beverage with whey protein, vitamins and minerals”. Registered as a beverage, not as a medical food. PMK: GI 28; P, Ca, Mg, vitamin A, vitamin C and osmolality NA.",
      th: "อย.: “เครื่องดื่มเสริมเวย์โปรตีน วิตามิน และแร่ธาตุ” ขึ้นทะเบียนเป็นเครื่องดื่ม ไม่ใช่อาหารทางการแพทย์ PMK: GI 28; ไม่มีข้อมูล P, Ca, Mg, วิตามินเอ, วิตามินซี และออสโมลาลิตี"
    }
  },

  // --- Diabetes & Disease Specific (Page 9) ---
  {
    id: 'fresubin-dm-drink',
    name: 'Fresubin DM Drink',
    company: 'Fresenius kabi',
    category: 'diabetes',
    form: 'liquid_bottle',
    pcfRatio: [20, 35, 45],
    gi: 37,
    scoopKcal: 300,
    scoopGrams: 200,
    servingKcal: 300,
    servingProtein: 15.0,
    servingDesc: "300 kcal / 200 mL → 15 g protein",
    proteinPer1000Kcal: 50.0,
    proteinSource: 'Milk protein',
    fatSource: 'Fish oil, Safflower oil, MCT oil',
    mctPercent: 5,
    fiberPer1000Kcal: 16.0,
    fiberDetails: '16.0 g fiber (Inulin, wheat dextrin)',
    hasFiber: true,
    osmolality: 390,
    dilution: '1.5:1',
    na: 466, k: 833, p: 583, ca: 953, mg: 93, vitA: 799, vitC: 200, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'cyan',
    notes: {
      en: "Thai FDA: “Liquid complete, balanced nutrition diet, medical food”. PMK: GI 37; 300 kcal and 15 g protein per 200 mL bottle.",
      th: "อย.: “อาหารทางการแพทย์ สูตรครบถ้วนพร้อมดื่ม” PMK: GI 37; 300 kcal และโปรตีน 15 ก. ต่อขวด 200 มล."
    }
  },
  {
    id: 'd-care',
    name: 'D-care',
    company: 'MA-JUSMIN',
    category: 'diabetes',
    form: 'powder',
    pcfRatio: [20, 49, 31],
    gi: null,
    scoopKcal: 100,
    scoopGrams: 22.0,
    servingKcal: 200,
    servingProtein: 10.0,
    servingDesc: "2 scoops (≈44 g powder) → 200 kcal, 10 g protein",
    proteinPer1000Kcal: 50.0,
    proteinSource: 'Soy protein isolate 100%',
    fatSource: 'Vegetable oil',
    mctPercent: 0,
    fiberPer1000Kcal: 5.0,
    fiberDetails: '5.0 g fiber',
    hasFiber: true,
    osmolality: null,
    dilution: null,
    na: 836, k: 2244, p: 704, ca: 704, mg: 154, vitA: 4795, vitC: 185, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'lime',
    notes: {
      en: "No Thai FDA record found (searched 19 Oct 2026). PMK: soy protein isolate 100%; osmolality NA.",
      th: "ไม่พบทะเบียน อย. (ค้นเมื่อ 19 ต.ค. 2569) PMK: โปรตีนถั่วเหลืองสกัด 100%; ไม่มีข้อมูลออสโมลาลิตี"
    }
  },
  {
    id: 'once-renal',
    name: 'Once Renal (Pre-dialysis CKD)',
    company: 'Thai otsuka',
    category: 'renal_pre',
    form: 'powder',
    pcfRatio: [8, 52, 40],
    gi: null,
    scoopKcal: 72,
    scoopGrams: 15.2,
    servingKcal: 360,
    servingProtein: 7.19,
    servingDesc: "5 scoops (≈76 g powder) → 360 kcal, 7.19 g protein",
    proteinPer1000Kcal: 20.0,
    proteinSource: 'Casein',
    fatSource: 'Safflower oil, Canola oil, MCT oil (13% total calorie)',
    mctPercent: 13,
    fiberPer1000Kcal: 8.3,
    fiberDetails: '8.3 g fiber (2.8 g FOS, Fibersol-2)',
    hasFiber: true,
    osmolality: 793,
    dilution: '1.8:1',
    na: 370, k: 550, p: 400, ca: 400, mg: 109, vitA: 626, vitC: 101, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'purple',
    notes: {
      en: "Thai FDA: “Medical food for pre-dialysis patients”. PMK: protein 20 g/1,000 kcal (8% of energy); K 550 and P 400 mg/1,000 kcal; 793 mOsm/kg at 1.8:1.",
      th: "อย.: “อาหารทางการแพทย์สำหรับผู้ป่วยโรคไตระยะก่อนล้างไต” PMK: โปรตีน 20 ก./1,000 kcal (8% ของพลังงาน); K 550 และ P 400 มก./1,000 kcal; 793 mOsm/kg ที่ 1.8:1"
    }
  },
  {
    id: 'aminoleban-oral',
    name: 'Aminoleban Oral',
    company: 'Thai otsuka',
    category: 'hepatic',
    form: 'powder',
    pcfRatio: [25, 60, 15],
    gi: null,
    scoopKcal: 42,
    scoopGrams: 10.0,
    servingKcal: 210,
    servingProtein: 13.5,
    servingDesc: "5 scoops (≈50 g powder) → 210 kcal, 13.5 g protein (BCAA 5.4 g)",
    proteinPer1000Kcal: 64.0,
    proteinSource: "Gelatin hydrolysate, Amino acid, Casein",
    fatSource: 'Rice bran oil',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 600,
    dilution: '1:1',
    na: 226, k: 771, p: 399, ca: 328, mg: 202, vitA: 665, vitC: 34, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'amber',
    notes: {
      en: "Thai FDA: “Medical food for patients with hepatic impairment”. PMK: BCAA 25.9 g/1,000 kcal (5.4 g per 210 kcal serving); Na 226 mg/1,000 kcal.",
      th: "อย.: “อาหารทางการแพทย์ชนิดโภชนาการครบถ้วนเฉพาะผู้ป่วยด้วยโรคตับ” PMK: BCAA 25.9 ก./1,000 kcal (5.4 ก. ต่อ 210 kcal); Na 226 มก./1,000 kcal"
    }
  },

  // --- Renal Dialysis (Page 10) ---
  {
    id: 'nepro-powder',
    name: 'Nepro (Powder)',
    company: 'Abbott',
    category: 'renal_dialysis',
    form: 'powder',
    pcfRatio: [18, 35, 47],
    gi: null,
    scoopKcal: 44.6,
    scoopGrams: 8.9,
    servingKcal: 446,
    servingProtein: 19.23,
    servingDesc: "10 scoops (≈89 g powder) → 446 kcal, 19.23 g protein",
    proteinPer1000Kcal: 43.1,
    proteinSource: 'Casein, Milk protein',
    fatSource: "Safflower oil, Canola oil",
    mctPercent: 0,
    fiberPer1000Kcal: 10.44,
    fiberDetails: '10.44 g fiber (5 g FOS)',
    hasFiber: true,
    osmolality: 403,
    dilution: '1.8:1',
    na: 376, k: 562, p: 381, ca: 562, mg: 111, vitA: 1598, vitC: 56, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'emerald',
    notes: {
      en: "Thai FDA (transl.): “Formula for dialysis patients with controlled minerals and fluid (medical food)” (Nepro HP). PMK: 19.23 g protein per 446 kcal serving; 403 mOsm/kg at 1.8:1.",
      th: "อย.: “อาหารสูตรสำหรับผู้ป่วยล้างไตที่ควบคุมปริมาณเกลือแร่และของเหลว (อาหารทางการแพทย์)” (เนบโปร เอชพี) PMK: โปรตีน 19.23 ก. ต่อ 446 kcal; 403 mOsm/kg ที่ 1.8:1"
    }
  },
  {
    id: 'nepro-liquid',
    name: 'Nepro HP (Liquid can)',
    company: 'Abbott',
    category: 'renal_dialysis',
    form: 'liquid_can',
    pcfRatio: [18, 35, 47],
    gi: 34,
    scoopKcal: 425,
    scoopGrams: 237,
    servingKcal: 425,
    servingProtein: 19.1,
    servingDesc: "425 kcal / 237 mL → 19.1 g protein",
    proteinPer1000Kcal: 44.9,
    proteinSource: 'Casein, Milk protein',
    fatSource: 'Safflower oil, Canola oil',
    mctPercent: 0,
    fiberPer1000Kcal: 7.1,
    fiberDetails: '3.0 g fiber/can (2.0 g FOS); 7.1 g/1,000 kcal calc.',
    hasFiber: true,
    osmolality: 735,
    dilution: '1.8:1',
    na: 588, k: 588, p: 400, ca: 588, mg: 118, vitA: 1765, vitC: 59, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'emerald',
    notes: {
      en: "Thai FDA (transl.): “Formula for dialysis patients with controlled minerals and fluid, liquid (medical food)” (Nepro HP). PMK: GI 34; 425 kcal and 19.1 g protein per 237 mL can.",
      th: "อย.: “อาหารสูตรสำหรับผู้ป่วยล้างไตที่ควบคุมปริมาณเกลือแร่และของเหลวชนิดน้ำ (อาหารทางการแพทย์)” (เนบโปร เอชพี) PMK: GI 34; 425 kcal และโปรตีน 19.1 ก. ต่อกระป๋อง 237 มล."
    }
  },
  {
    id: 'once-dialyze',
    name: 'Once Dialyze',
    company: 'Thai otsuka',
    category: 'renal_dialysis',
    form: 'powder',
    pcfRatio: [18, 42, 40],
    gi: null,
    scoopKcal: 74,
    scoopGrams: 16.0,
    servingKcal: 370,
    servingProtein: 16.98,
    servingDesc: "5 scoops (≈80 g powder) → 370 kcal, 16.98 g protein",
    proteinPer1000Kcal: 45.89,
    proteinSource: 'Whey, Casein',
    fatSource: 'MCT oil, Rice bran oil, Canola oil',
    mctPercent: 10,
    fiberPer1000Kcal: 13.51,
    fiberDetails: '13.51 g fiber (7.4 g FOS, Fibersol-2)',
    hasFiber: true,
    osmolality: 501,
    dilution: '1.48:1',
    na: 417.3, k: 557.3, p: 405.1, ca: 405.1, mg: 110.3, vitA: 190.2, vitC: 101.3, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'amber',
    notes: {
      en: "Thai FDA: “Medical food for dialysis patients”. PMK: protein 45.89 g/1,000 kcal; 501 mOsm/kg at 1.48:1.",
      th: "อย.: “อาหารทางการแพทย์สำหรับผู้ป่วยล้างไต” PMK: โปรตีน 45.89 ก./1,000 kcal; 501 mOsm/kg ที่ 1.48:1"
    }
  },

  // --- Immune-Modulating & Cancer (Page 11) ---
  {
    id: 'neo-mune',
    name: 'NEO-MUNE',
    company: 'Thai otsuka',
    category: 'immune',
    form: 'powder',
    pcfRatio: [25, 50, 25],
    gi: null,
    scoopKcal: 35,
    scoopGrams: 8.5,
    servingKcal: 250,
    servingProtein: 15.4,
    servingDesc: "7.1 scoops (≈60.7 g powder) → 250 kcal, 15.4 g protein",
    proteinPer1000Kcal: 61.5,
    proteinSource: 'Casein, Glutamine (6.16 g), Arginine (12.3 g)',
    fatSource: 'Fish oil (5.5 g/1,000 kcal), MCT oil (12% total calorie)',
    mctPercent: 12,
    fiberPer1000Kcal: 9.4,
    fiberDetails: '9.4 g Polydextrose (soluble)',
    hasFiber: true,
    osmolality: 400,
    dilution: '1:1',
    na: 785, k: 993, p: 224, ca: 588, mg: 280, vitA: 3255, vitC: 376, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'rose',
    notes: {
      en: "Thai FDA: “NEO-MUNE”. Another current record (74-1-21431-1-0003) describes it as “medical food for patients who need high protein and high calories”. PMK per 1,000 kcal: arginine 12.3 g, glutamine 6.16 g, fish oil 5.5 g; MCT oil 12% of energy.",
      th: "อย.: “NEO-MUNE” อีกทะเบียนหนึ่งที่ยังคงอยู่ (74-1-21431-1-0003) ระบุว่าเป็นอาหารทางการแพทย์สำหรับผู้ป่วยที่ต้องการโปรตีนและพลังงานสูง PMK ต่อ 1,000 kcal: arginine 12.3 ก., glutamine 6.16 ก., น้ำมันปลา 5.5 ก.; MCT oil 12% ของพลังงาน"
    }
  },
  {
    id: 'oral-impact',
    name: 'Oral Impact',
    company: 'Nestle',
    category: 'immune',
    form: 'sachet',
    pcfRatio: [23, 56, 21],
    gi: null,
    scoopKcal: 310,
    scoopGrams: 74.0,
    servingKcal: 310,
    servingProtein: 17.5,
    servingDesc: "310 kcal / sachet (74 g) → 17.5 g protein",
    proteinPer1000Kcal: 58.3,
    proteinSource: 'Whey, L-arginine (12.5 g), Dietary Nucleotides (1.5 g)',
    fatSource: 'Fish oil (3.3 g/L), MCT oil (8% total calorie)',
    mctPercent: 8,
    fiberPer1000Kcal: 10.0,
    fiberDetails: '10.0 g soluble fiber',
    hasFiber: true,
    osmolality: 623,
    dilution: '1:1',
    na: 829, k: 1026, p: 548, ca: 597, mg: 119, vitA: 2861, vitC: 191, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'blue',
    notes: {
      en: "Thai FDA: “Nutritionally complete with high protein, contains arginine, nucleotides and omega-3, reduced sugar formula (medical food)”. PMK per 1,000 kcal: L-arginine 12.5 g, nucleotides 1.5 g; fish oil 3.3 g/L.",
      th: "อย.: “อาหารสูตรครบถ้วนที่มีโปรตีนสูง ประกอบด้วย อาร์จินีน นิวคลีโอไทด์ และโอเมก้า 3 สูตรน้ำตาลน้อย (อาหารทางการแพทย์)” PMK ต่อ 1,000 kcal: L-arginine 12.5 ก., nucleotides 1.5 ก.; น้ำมันปลา 3.3 ก./ลิตร"
    }
  },
  {
    id: 'nutricia-forticare',
    name: 'Nutricia Forticare',
    company: 'BJC HEALTHCARE',
    category: 'immune',
    form: 'liquid_bottle',
    pcfRatio: [22, 49, 29],
    gi: null,
    scoopKcal: 204,
    scoopGrams: 125,
    servingKcal: 204,
    servingProtein: 11.0,
    servingDesc: "204 kcal / 125 mL → 11 g protein",
    proteinPer1000Kcal: 54.0,
    proteinSource: 'Milk protein isolate',
    fatSource: 'Fish oil (EPA 0.751 g, DHA 0.373 g / bottle)',
    mctPercent: 0,
    fiberPer1000Kcal: 2.6,
    fiberDetails: '2.6 g fiber (FOS, Inulin, Cellulose, Resistant starch)',
    hasFiber: true,
    osmolality: 730,
    dilution: '1.6:1',
    na: 676, k: 1319, p: 735, ca: 1044, mg: 172, vitA: 2663, vitC: 186, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'purple',
    notes: {
      en: "Thai FDA: “Nutritionally complete liquid formula for cancer patients (medical food)”. PMK per 125 mL bottle: 204 kcal; EPA 0.751 g, DHA 0.373 g.",
      th: "อย.: “อาหารสูตรครบถ้วน ชนิดเหลว สำหรับผู้ป่วยโรคมะเร็ง (อาหารทางการแพทย์)” PMK ต่อขวด 125 มล.: 204 kcal; EPA 0.751 ก., DHA 0.373 ก."
    }
  },

  // --- Immune-Modulating & Cancer (Page 12) ---
  {
    id: 'prosure-powder',
    name: 'Prosure (Powder)',
    company: 'Abbott',
    category: 'immune',
    form: 'powder',
    pcfRatio: [21, 64, 15],
    gi: null,
    scoopKcal: 34,
    scoopGrams: 8.3,
    servingKcal: 304,
    servingProtein: 16.0,
    servingDesc: "9 scoops (≈74.7 g powder) → 304 kcal, 16 g protein",
    proteinPer1000Kcal: 52.5,
    proteinSource: 'Whey, Casein',
    fatSource: 'EPA (3.6 g/1,000 kcal), DHA (1.6 g/1,000 kcal), MCT oil',
    mctPercent: 5,
    fiberPer1000Kcal: 16.3,
    fiberDetails: '16.3 g fiber (8.7 g FOS)',
    hasFiber: true,
    osmolality: 500,
    dilution: '1.27:1',
    na: 1185, k: 1587, p: 830, ca: 1170, mg: 224, vitA: 1061, vitC: 272, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'cyan',
    notes: {
      en: "Thai FDA (transl.): “Complete formula high in protein and EPA for patients with weight loss (medical food)”. PMK per 1,000 kcal: EPA 3.6 g, DHA 1.6 g; protein 52.5 g.",
      th: "อย.: “อาหารสูตรครบถ้วนให้โปรตีนและอีพีเอสูง สำหรับผู้ป่วยที่มีปัญหาน้ำหนักตัวลดลง (อาหารทางการแพทย์)” PMK ต่อ 1,000 kcal: EPA 3.6 ก., DHA 1.6 ก.; โปรตีน 52.5 ก."
    }
  },
  {
    id: 'prosure-liquid',
    name: 'Prosure (Liquid bottle)',
    company: 'Abbott',
    category: 'immune',
    form: 'liquid_bottle',
    pcfRatio: [21, 61, 18],
    gi: null,
    scoopKcal: 280,
    scoopGrams: 220,
    servingKcal: 280,
    servingProtein: 14.6,
    servingDesc: "280 kcal / 220 mL → 14.6 g protein",
    proteinPer1000Kcal: 52.3,
    proteinSource: 'Whey, Casein',
    fatSource: 'Fish oil (EPA 1.0 g, DHA 0.43 g / bottle), MCT oil',
    mctPercent: 4,
    fiberPer1000Kcal: 16.1,
    fiberDetails: '4.5 g fiber/bottle (2.4 g FOS); 16.1 g/1,000 kcal calc.',
    hasFiber: true,
    osmolality: 753,
    dilution: '1.27:1',
    na: 1190, k: 1587, p: 833, ca: 1175, mg: 333, vitA: 3571, vitC: 341, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'cyan',
    notes: {
      en: "Thai FDA (transl.): “Complete formula high in protein and EPA for cancer patients with weight loss, liquid (medical food)”. PMK per 220 mL bottle: 280 kcal; EPA 1.0 g, DHA 0.43 g.",
      th: "อย.: “อาหารสูตรครบถ้วน ให้โปรตีนและอีพีเอสูง สำหรับผู้ป่วยมะเร็งที่มีน้ำหนักตัวลดลง ชนิดน้ำ (อาหารทางการแพทย์)” PMK ต่อขวด 220 มล.: 280 kcal; EPA 1.0 ก., DHA 0.43 ก."
    }
  },
  {
    id: 'supportan',
    name: 'Supportan Drink',
    company: 'Fresenius kabi',
    category: 'immune',
    form: 'liquid_bottle',
    pcfRatio: [27, 31, 40],
    gi: null,
    scoopKcal: 300,
    scoopGrams: 200,
    servingKcal: 300,
    servingProtein: 20.0,
    servingDesc: "300 kcal / 200 mL → 20 g protein",
    proteinPer1000Kcal: 66.0,
    proteinSource: 'Milk protein',
    fatSource: 'Fish oil (EPA 1.0 g, DHA 0.52 g / bottle), MCT oil, Safflower oil',
    mctPercent: 10,
    fiberPer1000Kcal: 13.3,
    fiberDetails: '4 g fiber/bottle (Inulin, wheat dextrin); 13.3 g/1,000 kcal calc.',
    hasFiber: true,
    osmolality: 435,
    dilution: '1.5:1',
    na: 316, k: 853, p: 800, ca: 1293, mg: 156, vitA: 1100, vitC: 180, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'blue',
    notes: {
      en: "Thai FDA: “Liquid complete, balanced nutrition diet, medical food”. PMK per 200 mL bottle: 300 kcal, 20 g protein; EPA 1.0 g, DHA 0.52 g. P:C:F 27:31:40.",
      th: "อย.: “อาหารทางการแพทย์สูตรครบถ้วนพร้อมดื่ม” PMK ต่อขวด 200 มล.: 300 kcal, โปรตีน 20 ก.; EPA 1.0 ก., DHA 0.52 ก.; P:C:F 27:31:40"
    }
  },

  // --- Semi-Elemental / Peptides (Page 13) ---
  {
    id: 'peptamen',
    name: 'Peptamen',
    company: 'Nestle',
    category: 'semi_elemental',
    form: 'powder',
    pcfRatio: [16, 49, 35],
    gi: 36,
    scoopKcal: 36,
    scoopGrams: 8.0,
    servingKcal: 256,
    servingProtein: 10.2,
    servingDesc: "7.1 scoops (≈56.9 g powder) → 256 kcal, 10.2 g protein",
    proteinPer1000Kcal: 40.8,
    proteinSource: "Whey protein hydrolysate",
    fatSource: 'Canola oil, MCT oil (23% total calorie)',
    mctPercent: 23,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 374,
    dilution: '1:1',
    na: 680, k: 895, p: 558, ca: 801, mg: 195, vitA: 3949, vitC: 103, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'sky',
    notes: {
      en: "Thai FDA: “Complete balanced nutrition powder, peptide formula (medical food)”; the Thai name adds “for patients with digestive and absorption problems”. PMK: whey protein hydrolysate; MCT oil 23% of energy; no fiber.",
      th: "อย.: “อาหารสูตรครบถ้วนชนิดผงสูตรเป็ปไทด์ (สำหรับผู้ป่วยที่มีปัญหาเกี่ยวกับระบบการย่อยอาหารและการดูดซึม) (อาหารทางการแพทย์)” PMK: whey protein hydrolysate; MCT oil 23% ของพลังงาน; ไม่มีใยอาหาร"
    }
  },
  {
    id: 'vital-peptide',
    name: 'Vital Peptide 1.5 kcal',
    company: 'Abbott',
    category: 'semi_elemental',
    form: 'liquid_bottle',
    pcfRatio: [18, 49, 33],
    gi: null,
    scoopKcal: 300,
    scoopGrams: 200,
    servingKcal: 300,
    servingProtein: 13.5,
    servingDesc: "300 kcal / 200 mL → 13.5 g protein",
    proteinPer1000Kcal: 45.0,
    proteinSource: "Whey protein hydrolysate",
    fatSource: 'Canola oil, MCT oil (23% total calorie)',
    mctPercent: 23,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 487,
    dilution: '1.5:1',
    na: 1127, k: 1200, p: 600, ca: 600, mg: 180, vitA: 3000, vitC: 107, zn: null, se: null,
    isProteinSupp: false,
    colorTone: 'purple',
    notes: {
      en: "Thai FDA (transl.): “Complete formula with peptide protein for patients with digestion and absorption problems, liquid (medical food)”. PMK: 300 kcal and 13.5 g protein per 200 mL bottle; MCT oil 23% of energy; no fiber.",
      th: "อย.: “อาหารสูตรครบถ้วน ที่มีโปรตีนชนิดเปปไทด์ สำหรับผู้ป่วยที่มีปัญหาเกี่ยวกับการย่อยและดูดซึมอาหาร ชนิดน้ำ (อาหารทางการแพทย์)” PMK: 300 kcal และโปรตีน 13.5 ก. ต่อขวด 200 มล.; MCT oil 23% ของพลังงาน; ไม่มีใยอาหาร"
    }
  },

  // --- Protein Supplements (Page 14) ---
  {
    id: 'fresubin-protein',
    name: 'Fresubin Protein (powder)',
    company: 'Fresenius Kabi',
    category: 'protein_supp',
    form: 'powder',
    pcfRatio: null,
    gi: null,
    scoopKcal: 20,
    scoopGrams: 6.0,
    servingKcal: 20,
    servingProtein: 5.0,
    servingDesc: "1 scoop (6.0 g) → 20 kcal, 5.0 g protein",
    proteinPer1000Kcal: 250.0,
    proteinSource: 'Whey Protein Isolate (98.7%)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 134,
    dilution: '10g in 100mL',
    na: 30, k: 72, p: 14.4, ca: 3.6, mg: null, vitA: null, vitC: null, zn: null, se: null,
    isProteinSupp: true,
    wheyIsolatePercent: 98.7,
    colorTone: 'blue',
    notes: {
      en: "Thai FDA: “Whey protein isolate powder (milk product)”. PMK: whey protein isolate 98.7%; 5.0 g protein per 6.0 g scoop; 134 mOsm/kg (10 g in 100 mL water).",
      th: "อย.: “เวย์โปรตีน ไอโซเลต ชนิดผง (ผลิตภัณฑ์ของนม)” PMK: เวย์โปรตีนไอโซเลต 98.7%; โปรตีน 5.0 ก. ต่อช้อน 6.0 ก.; 134 mOsm/kg (10 ก. ในน้ำ 100 มล.)"
    }
  },
  {
    id: 'boost-beneprotein',
    name: 'Boost Beneprotein (powder)',
    company: 'Nestle',
    category: 'protein_supp',
    form: 'powder',
    pcfRatio: null,
    gi: null,
    scoopKcal: 25,
    scoopGrams: 7.0,
    servingKcal: 25,
    servingProtein: 6.0,
    servingDesc: "1 scoop (7.0 g) → 25 kcal, 6.0 g protein",
    proteinPer1000Kcal: 240.0,
    proteinSource: 'Whey Protein Isolate (99%)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: null,
    dilution: 'Modular',
    na: 10, k: 30, p: null, ca: 20, mg: null, vitA: null, vitC: null, zn: null, se: null,
    isProteinSupp: true,
    wheyIsolatePercent: 99.0,
    colorTone: 'red',
    notes: {
      en: "Thai FDA: “Instant whey protein isolate (milk product)”. PMK: whey protein isolate 99%; 6.0 g protein per 7.0 g scoop; Na 10, K 30 mg per scoop.",
      th: "อย.: “อินสแตนท์ เวย์โปรตีนไอโซเลต (ผลิตภัณฑ์ของนม)” PMK: เวย์โปรตีนไอโซเลต 99%; โปรตีน 6.0 ก. ต่อช้อน 7.0 ก.; Na 10, K 30 มก. ต่อช้อน"
    }
  },
  {
    id: 'immuplex',
    name: 'Immuplex (powder)',
    company: 'MEGA We care',
    category: 'protein_supp',
    form: 'powder',
    pcfRatio: null,
    gi: null,
    scoopKcal: 36,
    scoopGrams: 11.0,
    servingKcal: 36,
    servingProtein: 9.0,
    servingDesc: "1 scoop (11.0 g) → 36 kcal, 9.0 g protein; Zn 7.5 mg, Se 35 mcg",
    proteinPer1000Kcal: 250.0,
    proteinSource: 'Whey Protein Isolate (90%)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: null,
    dilution: 'Modular',
    na: null, k: null, p: null, ca: null, mg: null, vitA: null, vitC: null, zn: 7.5, se: 35,
    isProteinSupp: true,
    wheyIsolatePercent: 90.0,
    colorTone: 'teal',
    notes: {
      en: "Thai FDA: “IMMUPLEX (milk product)”. PMK: whey protein isolate 90%; 9.0 g protein, Zn 7.5 mg, Se 35 mcg per 11.0 g scoop.",
      th: "อย.: “อิมมูเพล็กซ์ (ผลิตภัณฑ์ของนม)” PMK: เวย์โปรตีนไอโซเลต 90%; โปรตีน 9.0 ก., Zn 7.5 มก., Se 35 มคก. ต่อช้อน 11.0 ก."
    }
  },

  // --- Protein Supplements (Page 15) ---
  {
    id: 'ma-pro',
    name: 'MA-PRO (powder)',
    company: 'KOVIC KATE International',
    category: 'protein_supp',
    form: 'powder',
    pcfRatio: null,
    gi: null,
    scoopKcal: 35,
    scoopGrams: 8.4,
    servingKcal: 35,
    servingProtein: 7.0,
    servingDesc: "1 scoop (8.4 g) → 35 kcal, 7.0 g protein",
    proteinPer1000Kcal: 200.0,
    proteinSource: 'Whey Protein Isolate (29.1%)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: null,
    dilution: 'Modular',
    na: 25, k: 38, p: 25, ca: 14, mg: null, vitA: null, vitC: null, zn: 0.05, se: 0.03,
    isProteinSupp: true,
    wheyIsolatePercent: 29.1,
    colorTone: 'purple',
    notes: {
      en: "No Thai FDA record found (searched 19 Oct 2026). PMK: whey protein isolate 29.1%; 7.0 g protein per 8.4 g scoop.",
      th: "ไม่พบทะเบียน อย. (ค้นเมื่อ 19 ต.ค. 2569) PMK: เวย์โปรตีนไอโซเลต 29.1%; โปรตีน 7.0 ก. ต่อช้อน 8.4 ก."
    }
  },
  {
    id: 'nutrica-whey',
    name: 'NUTRICA Whey Protein Isolate',
    company: 'NUTRICA ASIA',
    category: 'protein_supp',
    form: 'powder',
    pcfRatio: null,
    gi: null,
    scoopKcal: 20,
    scoopGrams: 5.0,
    servingKcal: 20,
    servingProtein: 4.3,
    servingDesc: "1 scoop (5.0 g) → 20 kcal, 4.3 g protein",
    proteinPer1000Kcal: 215.0,
    proteinSource: 'Whey Protein Isolate (99.2%)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: null,
    dilution: 'Modular',
    na: 20, k: null, p: null, ca: 51, mg: null, vitA: null, vitC: null, zn: null, se: null,
    isProteinSupp: true,
    wheyIsolatePercent: 99.2,
    colorTone: 'yellow',
    notes: {
      en: "Thai FDA: “Whey protein isolate powder (milk product)”. PMK: whey protein isolate 99.2%; 4.3 g protein per 5.0 g scoop.",
      th: "อย.: “เวย์โปรตีนไอโซเลตพาวเดอร์ (ผลิตภัณฑ์ของนม)” PMK: เวย์โปรตีนไอโซเลต 99.2%; โปรตีน 4.3 ก. ต่อช้อน 5.0 ก."
    }
  },
  {
    id: 'novipro',
    name: 'Novipro',
    company: 'Novical',
    category: 'protein_supp',
    form: 'powder',
    pcfRatio: null,
    gi: null,
    scoopKcal: 20,
    scoopGrams: 5.5,
    servingKcal: 20,
    servingProtein: 5.0,
    servingDesc: "1 scoop (5.5 g) → 20 kcal, 5.0 g protein",
    proteinPer1000Kcal: 250.0,
    proteinSource: 'Whey Protein Isolate (98.5%)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: null,
    dilution: 'Modular',
    na: 40, k: 1.8, p: 2.2, ca: 0, mg: null, vitA: null, vitC: null, zn: null, se: null,
    isProteinSupp: true,
    wheyIsolatePercent: 98.5,
    colorTone: 'blue',
    notes: {
      en: "No Thai FDA record found (searched 19 Oct 2026). PMK: whey protein isolate 98.5%; 5.0 g protein per 5.5 g scoop; K 1.8 and P 2.2 mg per scoop.",
      th: "ไม่พบทะเบียน อย. (ค้นเมื่อ 19 ต.ค. 2569) PMK: เวย์โปรตีนไอโซเลต 98.5%; โปรตีน 5.0 ก. ต่อช้อน 5.5 ก.; K 1.8 และ P 2.2 มก. ต่อช้อน"
    }
  },
  {
    id: 'nephra-whey',
    name: 'Nephra Whey (powder)',
    company: 'KOKORI',
    category: 'protein_supp',
    form: 'sachet',
    pcfRatio: null,
    gi: null,
    scoopKcal: 44,
    scoopGrams: 12.0,
    servingKcal: 44,
    servingProtein: 11.0,
    servingDesc: "1 sachet (12.0 g) → 44 kcal, 11.0 g protein",
    proteinPer1000Kcal: 250.0,
    proteinSource: 'Whey Protein Isolate (45.8%)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: null,
    dilution: 'Modular sachet',
    na: null, k: null, p: null, ca: null, mg: null, vitA: null, vitC: null, zn: null, se: null,
    isProteinSupp: true,
    wheyIsolatePercent: 45.8,
    colorTone: 'sky',
    notes: {
      en: "Thai FDA: “Nephra Whey (dietary supplement product)”. Registered as a dietary supplement, not as a medical food. PMK: whey protein isolate 45.8%; 11.0 g protein per 12.0 g sachet; electrolytes NA.",
      th: "อย.: “เนฟรา เวย์ (ผลิตภัณฑ์เสริมอาหาร)” ขึ้นทะเบียนเป็นผลิตภัณฑ์เสริมอาหาร ไม่ใช่อาหารทางการแพทย์ PMK: เวย์โปรตีนไอโซเลต 45.8%; โปรตีน 11.0 ก. ต่อซอง 12.0 ก.; ไม่มีข้อมูลแร่ธาตุ"
    }
  },

  // --- Specialty Supplements (Page 16) ---
  {
    id: 'glutamine-plus',
    name: 'Glutamine Plus',
    company: 'Fresenius Kabi',
    category: 'specialty',
    form: 'sachet',
    pcfRatio: null,
    gi: null,
    scoopKcal: 80,
    scoopGrams: 22.4,
    servingKcal: 80,
    servingProtein: 10.0,
    servingDesc: "1 sachet → 80 kcal, 10.0 g; beta-carotene 1,600 IU, vit C 250 mg, Zn 3.3 mg, Se 47 mcg",
    proteinPer1000Kcal: 125.0,
    proteinSource: 'L-Glutamine (10 g / sachet)',
    fatSource: 'NA',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: 235,
    dilution: null,
    na: null, k: null, p: null, ca: null, mg: null, vitA: null, vitC: 250, zn: 3.3, se: 47,
    isProteinSupp: true,
    colorTone: 'rose',
    notes: {
      en: "Thai FDA: “Supplementary food for the dietary management of patients in need of high glutamine and antioxidants due to oxidative stress after surgery or in chronic inflammatory disease (medical food)”. PMK per sachet: 80 kcal, 10.0 g; beta-carotene 1,600 IU, vitamin C 250 mg, Zn 3.3 mg, Se 47 mcg; 235 mOsm/kg.",
      th: "อย.: “อาหารเสริมสำหรับผู้ป่วยที่ต้องการกลูตามีนและสารต้านอนุมูลอิสระปริมาณสูงเนื่องจากภาวะเครียดออกซิเดชั่นหลังการผ่าตัดหรือจากการอักเสบเรื้อรัง (อาหารทางการแพทย์)” PMK ต่อซอง: 80 kcal, 10.0 ก.; เบต้าแคโรทีน 1,600 IU, วิตามินซี 250 มก., Zn 3.3 มก., Se 47 มคก.; 235 mOsm/kg"
    }
  },
  {
    id: 'ketosteril',
    name: 'Ketosteril tablets',
    company: 'Fresenius Kabi',
    category: 'specialty',
    form: 'tablet',
    pcfRatio: null,
    gi: null,
    scoopKcal: null,
    scoopGrams: 0.63,
    servingKcal: null,
    servingProtein: 0.63,
    servingDesc: "1 tablet → amino acids 630 mg (total N 36 mg), Ca 50 mg",
    proteinPer1000Kcal: null,
    proteinSource: "Amino acid 630 mg per tablet: isoleucine 67 mg, leucine 101 mg, phenylalanine 68 mg, valine 86 mg, methionine 59 mg, L-lysine 105 mg, L-threonine 53 mg, L-tryptophan 23 mg, L-histidine 38 mg, tyrosine 30 mg",
    fatSource: 'None',
    mctPercent: 0,
    fiberPer1000Kcal: 0,
    fiberDetails: 'No fiber',
    hasFiber: false,
    osmolality: null,
    dilution: 'Oral tablet',
    na: null, k: null, p: null, ca: 50, mg: null, vitA: null, vitC: null, zn: null, se: null,
    isProteinSupp: true,
    colorTone: 'indigo',
    notes: {
      en: "Registered in Thailand as a medicine (licence 2C1/58), not as a food. PMK per tablet: amino acids 630 mg (total N 36 mg), Ca 50 mg.",
      th: "ขึ้นทะเบียนในไทยเป็นยา (ทะเบียน 2C1/58) ไม่ใช่อาหาร PMK ต่อเม็ด: กรดอะมิโน 630 มก. (ไนโตรเจนรวม 36 มก.), Ca 50 มก."
    }
  }
];

// --- Update Changelog Data ---
const changelogData = [
  {
    version: "v1.7.1",
    date: "November 9, 2026",
    features: [],
    improvements: [
      "Softer colours like the Bronchodilator Guide: the four guide buttons and the Filters button are pale tinted; category and filter chips show coloured text with a light tint, and only the selected chip is solid. Each category keeps the colour it has in the Key."
    ]
  },
  {
    version: "v1.7.0",
    date: "November 5, 2026",
    features: [
      "Donate button (heart) next to the language switch: opens the PromptPay QR code for voluntary support. It does not change any content.",
      "New list view: one compact row per product with its photo, serving, protein per 1,000 kcal, P:C:F, GI and osmolality. The former list view, a table, is now called Table view and has a table icon."
    ],
    improvements: []
  },
  {
    version: "v1.5.0",
    date: "October 20, 2026",
    features: [
      "Calorie & Protein guide presets now follow named guidelines, each shown with its source under the menu: NICE CG32 (adults not severely ill), ESPEN geriatrics 2022, ESPEN ICU 2023, ESPEN cancer 2021, KDOQI 2020 (CKD and dialysis), ESPEN liver 2020 (cirrhosis), ADA 2026 (diabetes). Diabetes energy, surgery and malabsorption have no weight-based figure in their guidelines, so those presets leave the sliders as they are.",
      "Ideal and adjusted body weight follow ESPEN ICU 2023: IBW = 0.9 × height − 100 (men) or − 106 (women); above BMI 25 the targets use IBW + 25% of the excess weight.",
      "Osmolality & Tolerance guide rewritten in English and Thai: diarrhea and gastric residual volume advice from ASPEN/SCCM 2016, and refeeding risk criteria, starting rate, vitamins and electrolytes from NICE CG32.",
      "Every product photo is the picture printed for that product in the PMK table (checked image by image); the detail view names the table page. A product without a referenced photo shows an N/A box instead of a drawn stand-in."
    ],
    improvements: [
      "Preset values corrected to their sources, e.g. CKD not on dialysis 0.55–0.60 g/kg (was 0.7), dialysis 1.0–1.2 g/kg (was 1.3), older persons 30 kcal/kg and at least 1.0 g/kg (was 1.3), ICU 20–25 kcal/kg and 1.3 g/kg.",
      "Nitrogen balance: the fixed add-ons for diarrhea, fistula, burns and dialysis, the catabolism/anabolism bands and the +2 g N target had no source and were removed. The result now shows negative, zero or positive balance, the protein that would bring it to zero, and an optional box for other measured losses.",
      "Osmolality labels: \"Isotonic / Moderate / Hypertonic\" replaced by the plain mOsm/kg groups, marked as the app's own display groups.",
      "Key window: unsourced statements (electrolyte \"safety\" cut-offs, NPC:N ratios, mechanism claims) removed; categories are described by their PMK table headings.",
      "Protein Booster shows NA, not \"Negligible\", when the table gives no K, P or Na value.",
      "14 product photos had a black box where the original image is transparent; they now use the transparent image from the table.",
      "References: NICE CG32 and the ESPEN cancer, surgery and liver guidelines added; the ADA 2026 citation pages corrected (S89–S131); the SPENT and general \"manufacturer labels\" entries, which no content used, removed.",
      "Dark mode: guide window headers and a few boxes stayed light and hard to read; they now follow the dark theme."
    ]
  },
  {
    version: "v1.4.1",
    date: "October 19, 2026",
    features: [
      "Every registration status now has a source: each product's detail view links to its own Thai FDA register record (licence number) and, where one exists, its NHS dm+d record in the UK.",
      "New \"Unknown\" status (?) for a country where no record was found or no public product register exists; it replaces \"Never\", which no register can prove.",
      "Licence holders are shown exactly as the Thai FDA register prints them, and as the dm+d supplier for the UK."
    ],
    improvements: [
      "Registration data re-checked against the registers on 19 Oct 2026. Thailand: 44 of 48 products have a current record; no record was found for Nutren Balance, D-care, MA-PRO or Novipro (now Unknown, hidden while the filter is on TH + Currently). UK: 7 current and 5 discontinued dm+d products. US, EU and Japan are Unknown for all products, because no public register lists these foods; the earlier statuses and holders for those countries had no source and were removed.",
      "The Thai FDA reference now links to the register's product search (it pointed to the drug-only search).",
      "Phone: the four guide buttons show their full short names under the icon, and the Protein and Fiber lines on cards wrap instead of being cut off.",
      "Every composition value (732 values, 48 products) checked against the PMK table (update 3/2024). Osmolality of Ensure Plus Advance, MA-BEEDEE, Optifast, Boost Care and D-care is now NA as in the table (the earlier numbers had no source).",
      "Prosure liquid and Supportan fiber: the table gives grams per bottle, now converted to 16.1 and 13.3 g/1,000 kcal like the other bottles and cans (calc.).",
      "Serving lines show only table values (scoops, grams, kcal, protein); the water volumes had no source and were removed. Protein supplements no longer show a made-up P:C:F split, and Ketosteril no longer shows kcal.",
      "Product notes rewritten: each gives the product's description on its Thai FDA record plus facts from the PMK table. Notes on Boost Care, Glucerna Plus and Nephra Whey say they are registered as a beverage or dietary supplement, not as a medical food.",
      "Products with no GI in the table show \"GI NA\" instead of \"Standard\"; protein supplement minerals are labelled per scoop, sachet or tablet (not per 1,000 kcal); the detail view names every category and its subtitle wraps on phones."
    ]
  },
  {
    version: "v1.3.0",
    date: "October 16, 2026",
    features: [
      "Calorie & Protein Requirements Guide: weight-based energy and protein targets by clinical preset, intake deficit calculator, and ONS matching with can/scoop dosing.",
      "Nitrogen Balance Calculator: 24-hr UUN direct input or concentration × volume calculation.",
      "Protein Booster: scoops of 9 protein and amino acid supplements needed for an extra protein amount.",
      "Osmolality & Tolerance Guide.",
      "Side-by-Side Comparison Matrix: compare up to 3 formulas across macronutrient and micronutrient profiles.",
      "Product photos embedded in the page.",
      "Update Changelog: version history opened from the version badge at the top right.",
      "Filter layout from the Bronchodilator Guide: active filter chips with one-tap removal, a collapsible advanced filter drawer with a counter, search that expands on phones, and a Key / Legend window.",
      "Country and register-status filters (TH, US, UK, EU, JP; Currently / Past), a licence holder switch for cards and table rows, and a registration panel in the detail view."
    ],
    improvements: [
      "Sorting by calories, protein per 1,000 kcal, osmolality, fiber, potassium and phosphorus.",
      "Full English and Thai text.",
      "Reference buttons removed from the header; references and guidelines stay in the footer.",
      "Phone layout: pinned guide buttons and search bar fit narrow screens.",
      "Escape closes any open window."
    ]
  },
  {
    version: "v1.0.0",
    date: "October 15, 2026",
    features: [
      "Initial Release: 48 commercial adult enteral nutrition formulas and modular supplements from Phramongkutklao Hospital (Update 3/2024).",
      "Clinical categories: Standard Polymeric, Diabetes / Low GI, Renal Pre-dialysis, Renal Dialysis, Hepatic (BCAA), Cancer / Immune-modulating, Semi-Elemental Peptides, and Modular Supplements.",
      "Grid and Table views with instant search.",
      "Light and Dark mode with a saved preference."
    ],
    improvements: []
  }
];

const CHANGELOG_TH = {
  "v1.7.1": {
    features: [],
    improvements: [
      "ปรับสีให้นุ่มนวลแบบคู่มือยาสูด: ปุ่มคู่มือทั้งสี่และปุ่มตัวกรองเป็นสีอ่อน ชิปหมวดหมู่และตัวกรองแสดงตัวอักษรสีพร้อมพื้นอ่อนเมื่อชี้ และเป็นสีเข้มเฉพาะเมื่อเลือก แต่ละหมวดใช้สีเดียวกับในหน้าคำอธิบายสัญลักษณ์"
    ]
  },
  "v1.7.0": {
    features: [
      "ปุ่มสนับสนุน (รูปหัวใจ) ข้างปุ่มเปลี่ยนภาษา เปิด QR พร้อมเพย์สำหรับการสนับสนุนโดยสมัครใจ ไม่มีผลต่อเนื้อหา",
      "เพิ่มมุมมองรายการ: แถวกระชับหนึ่งแถวต่อผลิตภัณฑ์ พร้อมภาพ ปริมาณต่อมื้อ โปรตีนต่อ 1,000 kcal, P:C:F, GI และออสโมลาลิตี มุมมองรายการเดิมซึ่งเป็นตาราง เปลี่ยนชื่อเป็นมุมมองตารางและใช้ไอคอนตาราง"
    ],
    improvements: []
  },
  "v1.5.0": {
    features: [
      "ค่าตั้งต้นของคู่มือพลังงานและโปรตีนอิงแนวทางที่ระบุชื่อ แสดงแหล่งข้อมูลใต้เมนู: NICE CG32 (ผู้ใหญ่ที่ไม่ได้ป่วยหนัก), ESPEN geriatrics 2022, ESPEN ICU 2023, ESPEN cancer 2021, KDOQI 2020 (โรคไตและล้างไต), ESPEN liver 2020 (ตับแข็ง), ADA 2026 (เบาหวาน) พลังงานในเบาหวาน การผ่าตัด และการดูดซึมผิดปกติ ไม่มีค่าตามน้ำหนักในแนวทาง จึงไม่เปลี่ยนค่าตัวเลื่อน",
      "น้ำหนักมาตรฐานและน้ำหนักปรับตาม ESPEN ICU 2023: IBW = 0.9 × ส่วนสูง − 100 (ชาย) หรือ − 106 (หญิง); BMI เกิน 25 ใช้ IBW + 25% ของน้ำหนักส่วนเกิน",
      "เขียนคู่มือออสโมลาลิตีและการทนอาหารใหม่ทั้งภาษาไทยและอังกฤษ: คำแนะนำเรื่องท้องเสียและ GRV จาก ASPEN/SCCM 2016 และเกณฑ์เสี่ยง refeeding อัตราเริ่มต้น วิตามินและเกลือแร่จาก NICE CG32",
      "ภาพผลิตภัณฑ์ทุกภาพเป็นภาพที่พิมพ์ในตาราง PMK ของผลิตภัณฑ์นั้น (ตรวจทีละภาพ) หน้ารายละเอียดระบุหน้าของตาราง ผลิตภัณฑ์ที่ไม่มีภาพที่มีแหล่งอ้างอิงจะแสดงกรอบ N/A แทนภาพวาด"
    ],
    improvements: [
      "แก้ค่าตั้งต้นให้ตรงแหล่งข้อมูล เช่น โรคไตที่ยังไม่ล้างไต 0.55–0.60 ก./กก. (เดิม 0.7), ล้างไต 1.0–1.2 ก./กก. (เดิม 1.3), ผู้สูงอายุ 30 kcal/กก. และอย่างน้อย 1.0 ก./กก. (เดิม 1.3), ICU 20–25 kcal/กก. และ 1.3 ก./กก.",
      "ดุลไนโตรเจน: ลบค่าคงที่สำหรับท้องเสีย รูรั่ว แผลไฟไหม้ และล้างไต ช่วงภาวะ catabolism/anabolism และเป้า +2 ก.N ที่ไม่มีแหล่งข้อมูล ผลลัพธ์แสดงดุลเป็นลบ ศูนย์ หรือบวก โปรตีนที่ต้องเพิ่มให้ดุลเป็นศูนย์ และช่องกรอกการสูญเสียอื่นที่วัดได้",
      "ป้ายออสโมลาลิตี: เปลี่ยน \"Isotonic / Moderate / Hypertonic\" เป็นกลุ่มตามค่า mOsm/kg และระบุว่าเป็นการจัดกลุ่มของแอปเอง",
      "หน้าต่างคำอธิบายสัญลักษณ์: ลบข้อความที่ไม่มีแหล่งข้อมูล (เกณฑ์ความปลอดภัยแร่ธาตุ, อัตราส่วน NPC:N, คำอธิบายกลไก) หมวดหมู่อธิบายตามหัวข้อในตาราง PMK",
      "เครื่องมือเสริมโปรตีนแสดง NA แทน \"Negligible\" เมื่อตารางไม่ระบุค่า K, P หรือ Na",
      "ภาพผลิตภัณฑ์ 14 ภาพมีกรอบสีดำในส่วนที่ภาพต้นฉบับโปร่งใส เปลี่ยนเป็นภาพโปร่งใสจากตาราง",
      "เอกสารอ้างอิง: เพิ่ม NICE CG32 และแนวทาง ESPEN ด้านมะเร็ง การผ่าตัด และโรคตับ; แก้หน้าของ ADA 2026 (S89–S131); ลบรายการ SPENT และ \"ฉลากผู้ผลิต\" ที่ไม่มีเนื้อหาใดใช้",
      "โหมดมืด: ส่วนหัวของหน้าต่างคู่มือและกล่องบางส่วนยังเป็นสีสว่างและอ่านยาก ตอนนี้เป็นสีตามธีมมืดแล้ว"
    ]
  },
  "v1.4.1": {
    features: [
      "สถานะทะเบียนทุกรายการมีแหล่งข้อมูล: หน้ารายละเอียดของแต่ละผลิตภัณฑ์ลิงก์ไปยังทะเบียน อย. ของผลิตภัณฑ์นั้นโดยตรง (เลขสารบบ) และทะเบียน NHS dm+d ของสหราชอาณาจักรถ้ามี",
      "เพิ่มสถานะ \"ไม่ทราบ\" (?) สำหรับประเทศที่ไม่พบทะเบียนหรือไม่มีทะเบียนผลิตภัณฑ์สาธารณะ แทนสถานะ \"ไม่เคยมี\" ซึ่งไม่มีทะเบียนใดยืนยันได้",
      "ผู้ถือทะเบียนแสดงตามที่ทะเบียน อย. ระบุ และตามผู้จำหน่ายใน dm+d สำหรับสหราชอาณาจักร"
    ],
    improvements: [
      "ตรวจข้อมูลทะเบียนใหม่กับทะเบียนจริงเมื่อ 19 ต.ค. 2569 ไทย: 44 จาก 48 ผลิตภัณฑ์มีทะเบียนปัจจุบัน ไม่พบทะเบียนของ Nutren Balance, D-care, MA-PRO และ Novipro (แสดงเป็น ไม่ทราบ และซ่อนเมื่อกรองที่ ไทย + ปัจจุบัน) สหราชอาณาจักร: ปัจจุบัน 7 รายการ เลิกจำหน่าย 5 รายการใน dm+d สหรัฐฯ สหภาพยุโรป และญี่ปุ่น แสดงเป็น ไม่ทราบ ทุกรายการ เพราะไม่มีทะเบียนสาธารณะที่รวบรวมอาหารกลุ่มนี้ สถานะและผู้ถือทะเบียนเดิมของประเทศเหล่านี้ไม่มีแหล่งข้อมูลจึงถูกลบออก",
      "เอกสารอ้างอิงทะเบียน อย. ลิงก์ไปยังหน้าค้นหาผลิตภัณฑ์ (เดิมลิงก์ไปหน้าค้นหายาเท่านั้น)",
      "มือถือ: ปุ่มคู่มือทั้งสี่แสดงชื่อย่อเต็มใต้ไอคอน และบรรทัด Protein / Fiber บนการ์ดขึ้นบรรทัดใหม่แทนการถูกตัด",
      "ตรวจค่าองค์ประกอบทุกค่า (732 ค่า 48 ผลิตภัณฑ์) กับตาราง PMK (update 3/2024) ค่าออสโมลาลิตีของ Ensure Plus Advance, MA-BEEDEE, Optifast, Boost Care และ D-care เปลี่ยนเป็น NA ตามตาราง (ค่าเดิมไม่มีแหล่งข้อมูล)",
      "ใยอาหารของ Prosure ชนิดน้ำและ Supportan: ตารางระบุเป็นกรัมต่อขวด จึงแปลงเป็น 16.1 และ 13.3 ก./1,000 kcal เหมือนขวดและกระป๋องอื่น (คำนวณ)",
      "บรรทัดปริมาณต่อมื้อแสดงเฉพาะค่าจากตาราง (ช้อน กรัม kcal โปรตีน) ลบปริมาณน้ำที่ไม่มีแหล่งข้อมูลออก โปรตีนเสริมไม่แสดงสัดส่วน P:C:F ที่ไม่มีที่มาอีกต่อไป และ Ketosteril ไม่แสดงค่า kcal",
      "เขียนหมายเหตุผลิตภัณฑ์ใหม่: แต่ละรายการแสดงคำบรรยายตามทะเบียน อย. ของผลิตภัณฑ์นั้นพร้อมข้อมูลจากตาราง PMK หมายเหตุของ Boost Care, Glucerna Plus และ Nephra Whey ระบุว่าขึ้นทะเบียนเป็นเครื่องดื่มหรือผลิตภัณฑ์เสริมอาหาร ไม่ใช่อาหารทางการแพทย์",
      "ผลิตภัณฑ์ที่ตารางไม่มีค่า GI แสดง \"GI NA\" แทน \"Standard\"; แร่ธาตุของโปรตีนเสริมระบุเป็นต่อช้อน ซอง หรือเม็ด (ไม่ใช่ต่อ 1,000 kcal); หน้ารายละเอียดแสดงชื่อหมวดหมู่ทุกหมวด และหัวข้อย่อยขึ้นบรรทัดใหม่บนมือถือ"
    ]
  },
  "v1.3.0": {
    features: [
      "คู่มือคำนวณพลังงานและโปรตีน: เป้าหมายพลังงานและโปรตีนตามน้ำหนักแยกตามกลุ่มโรค คำนวณปริมาณที่ขาด และแนะนำสูตร ONS พร้อมขนาดกระป๋อง/ช้อนตวง",
      "เครื่องคำนวณดุลไนโตรเจน: ป้อนค่า UUN 24 ชม. โดยตรง หรือคำนวณจากความเข้มข้นและปริมาตรปัสสาวะ",
      "เครื่องมือคำนวณเสริมโปรตีน: จำนวนช้อนของโปรตีนเสริมและกรดอะมิโน 9 ชนิดที่ต้องใช้เพื่อเพิ่มโปรตีนตามที่ต้องการ",
      "คู่มือความเข้มข้น & การทนต่ออาหารทางสาย",
      "ตารางเปรียบเทียบสูตร: เปรียบเทียบสารอาหารแบบเคียงข้างกันได้สูงสุด 3 สูตร",
      "ภาพผลิตภัณฑ์ฝังในหน้า",
      "ประวัติการอัปเดต (Changelog): เปิดดูได้จากปุ่มเวอร์ชันด้านบนขวา",
      "รูปแบบตัวกรองตามแอป Bronchodilator: ชิปตัวกรองที่เลือกอยู่พร้อมปุ่มลบทีละตัว ลิ้นชักตัวกรองขั้นสูงพร้อมตัวนับ ช่องค้นหาขยายบนมือถือ และหน้าต่างคำอธิบายสัญลักษณ์",
      "ตัวกรองประเทศและสถานะทะเบียน (TH, US, UK, EU, JP; ปัจจุบัน / เคยมี), สวิตช์แสดงผู้ถือทะเบียนบนการ์ดและตาราง และแผงข้อมูลทะเบียนในหน้ารายละเอียด"
    ],
    improvements: [
      "จัดเรียงตามพลังงาน, โปรตีนต่อ 1,000 kcal, ออสโมลาลิตี, ใยอาหาร, โพแทสเซียม และฟอสฟอรัส",
      "รองรับภาษาไทยและอังกฤษครบทุกหน้าต่าง",
      "ลบปุ่มอ้างอิงจากส่วนหัว โดยคงเอกสารอ้างอิงและแนวทางเวชปฏิบัติไว้ที่ส่วนท้าย",
      "มือถือ: แถบปุ่มคู่มือและช่องค้นหาที่ปักไว้พอดีกับจอแคบ",
      "กด Escape เพื่อปิดหน้าต่างใดๆ"
    ]
  },
  "v1.0.0": {
    features: [
      "เปิดตัวระบบ: อาหารทางการแพทย์สำหรับผู้ใหญ่และโปรตีนเสริม 48 สูตร จาก รพ. พระมงกุฎเกล้า (ปรับปรุง 3/2567)",
      "จำแนกหมวดคลินิก: มาตรฐาน (Polymeric), เบาหวาน, โรคไตก่อนฟอกเลือด, โรคไตฟอกเลือด, โรคตับ, มะเร็ง/กระตุ้นภูมิคุ้มกัน, เปปไทด์ดูดซึมง่าย, และโปรตีนเสริมเฉพาะทาง",
      "มุมมองการ์ดและมุมมองตาราง พร้อมค้นหาแบบทันที",
      "โหมดสว่างและมืด พร้อมบันทึกการตั้งค่า"
    ],
    improvements: []
  }
};

const APP_VERSION = changelogData[0].version;

// --- Bilingual Translations ---
const translations = {
  en: {
    isTh: false,
    noCountry: 'No country selected. Choose a country in the Countries filter.',
    countriesLabel: 'Countries',
    countriesTitle: 'Show enteral products licensed in any of the selected countries.',
    countriesAll: 'All',
    countriesAllTitle: 'Select every country. Press again to clear them all.',
    countryCodes: { th: 'TH', us: 'US', uk: 'UK', eu: 'EU', jp: 'JP' },
    countryNames: { th: 'Thailand', us: 'United States', uk: 'United Kingdom', eu: 'European Union', jp: 'Japan' },
    thRegLabel: 'FDA',
    thRegTitle: 'Register status in the selected countries. Currently: a current record. Past: a cancelled or discontinued record (†). Unknown: no record found in that country\'s register (?).',
    thRegOpts: { current: 'Currently', past: 'Past', unknown: 'Unknown' },
    sourceLabel: 'Source',
    holderLabel: 'Licence Holder',
    holderToggleTitle: 'Show or hide the licence holder / marketing authorization line on cards',
    detailReg: 'Country Registration & Regulatory Status',
    makerLabel: 'Manufacturer',
    unknown: 'Unknown',
    chipNone: 'None',
    legendReg: 'Registration & Regulatory Status by Country',
    legendRegNow: 'A current record in that country\'s register. Chip takes the country color.',
    legendRegPast: 'The register shows the record as cancelled, expired or discontinued.',
    legendRegUnknown: 'No record found, or the country keeps no public product register. Not proof that the product was never sold there.',
    legendCountries: 'TH = Thai FDA food register (อย., medical food serial numbers). UK = NHS Dictionary of medicines and devices (dm+d), which lists the enteral products prescribable on the NHS. US: medical foods have no FDA product register. EU: foods for special medical purposes are notified to each member state; there is no EU-wide public register. JP: only enteral products approved as medicines appear in the PMDA list, and none of these products was matched to one. US, EU and JP are therefore Unknown.',
    appTitle: 'Adult Enteral Formula Guide',
    appSubtitle: 'Clinical Oral Nutritional Supplements & Enteral Nutrition Decision Suite',
    sourceCredit: 'Clinical Nutrition, Phramongkutklao Hospital (Update 3/2024)',
    doctorCredit: 'Made by Warodom Phaenthong, M.D.',
    disclaimer: 'For healthcare professionals. Clinical judgement and individualized patient assessment must guide medical nutrition therapy.',
    
    // Top guides & action buttons
    btnCalorieGuide: 'Calorie & Protein Guide',
    btnNitrogenCalc: 'Nitrogen Balance',
    btnProteinBooster: 'Protein Booster',
    btnOsmolality: 'Osmolality Guide',
    btnCompare: 'Compare (up to 3)',
    btnReferences: 'References',
    
    // Search & views
    searchPlaceholder: 'Search formulas, brands, companies, protein sources, fiber...',
    searchPlaceholderShort: 'Search ONS...',
    filtersBtn: 'Filters',
    clearAll: 'Clear All',
    totalFound: 'formulas found',
    gridView: 'Grid view',
    listView: 'List view',
    tableView: 'Table view',
    perKcal: 'per 1,000 kcal',
    sortLabel: 'Sort By',
    
    // Sort options
    sortNameAsc: 'Name (A - Z)',
    sortNameDesc: 'Name (Z - A)',
    sortKcalAsc: 'Calories / serving (Low to High)',
    sortKcalDesc: 'Calories / serving (High to Low)',
    sortProtDesc: 'Protein / 1,000 kcal (High to Low)',
    sortProtAsc: 'Protein / 1,000 kcal (Low to High)',
    sortOsmAsc: 'Osmolality (Low to High)',
    sortOsmDesc: 'Osmolality (High to Low)',
    sortFiberDesc: 'Fiber (High to Low)',
    sortKLow: 'Potassium (Low to High)',
    sortPLow: 'Phosphorus (Low to High)',

    // Categories
    catAll: 'All Formulas',
    catPolymeric: 'Standard Polymeric',
    catDiabetes: 'Diabetes / Low GI',
    catRenalPre: 'Renal (Pre-Dialysis)',
    catRenalDialysis: 'Renal (Dialysis)',
    catHepatic: 'Hepatic / BCAA',
    catImmune: 'Immune & Cancer',
    catSemiElemental: 'Semi-Elemental / Peptides',
    catProteinSupp: 'Protein Supplements',
    catSpecialty: 'Specialty / Ketoanalogues',

    // Filter Chips
    filterCategory: 'Category',
    filterForm: 'Form',
    formPowder: 'Powder',
    formLiquid: 'Liquid (Can/Bottle)',
    formSachet: 'Sachet',
    filterProteinDensity: 'Protein Density',
    protStandard: 'Standard (<40g/1000kcal)',
    protHigh: 'High (40-55g/1000kcal)',
    protVeryHigh: 'Very High (>55g/1000kcal)',
    filterFiber: 'Fiber',
    fiberWith: 'With Fiber',
    fiberFree: 'Fiber Free',
    filterOsmolality: 'Osmolality',
    osmIso: '≤ 350 mOsm/kg',
    osmMod: '351–500 mOsm/kg',
    osmHyper: '> 500 mOsm/kg',
    filterFeatures: 'Clinical Highlights',
    featLowGI: 'Low GI',
    featMCT: 'MCT Oil',
    featFishOil: 'Fish Oil (EPA/DHA)',
    featLowElectrolyte: 'Renal formulas',
    featPeptides: 'Hydrolyzed Peptides',
    featPlant: 'Plant-based',
    featImmune: 'Arginine / Glutamine',

    // Card & Details
    scoop: 'Scoop',
    serving: 'Serving',
    caloricDist: 'Caloric Distribution (P:C:F)',
    proteinPer1000: 'Protein / 1,000 kcal',
    proteinSources: 'Protein Source',
    fatSources: 'Fat Source',
    fiberContent: 'Dietary Fiber',
    osmolalityLabel: 'Osmolality',
    micronutrientsTitle: 'Micronutrients / 1,000 kcal',
    micronutrientsTitleUnit: 'Micronutrients per scoop, sachet or tablet',
    clinicalIndications: 'Clinical Indications & Notes',
    compareAdd: 'Compare',
    compareRemove: 'Remove',
    viewDetails: 'Full Details',
    close: 'Close',
    selectMaxNotice: 'You can compare up to 3 formulas simultaneously.',

    // Calorie & Protein Guide Wizard
    wizardTitle: 'Calorie & Protein Requirements Guide & ONS Matcher',
    wizardSub: 'Estimate energy and protein targets and list formulas from the matching category',
    step1Patient: '1. Patient Demographics & Anthropometry',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    age: 'Age (years)',
    height: 'Height (cm)',
    actualWeight: 'Actual Weight (kg)',
    bmi: 'BMI',
    ibw: 'Ideal Body Weight (IBW, ESPEN)',
    abw: 'Adjusted Body Weight',
    weightUsedNotice: 'BMI above 25: targets use IBW + 25% of the excess weight (ESPEN ICU 2023 proposes adding 20–25%).',
    step2Condition: '2. Clinical Condition & Prescribed Targets',
    clinicalPreset: 'Clinical Disease Category',
    condNormal: 'Adults not severely ill (25–35 kcal/kg, 0.8–1.5 g/kg protein)',
    condElderly: 'Older persons (30 kcal/kg, at least 1.0 g/kg protein)',
    condDiabetes: 'Diabetes (no weight-based energy target; protein 0.8–1.5 g/kg)',
    condICU: 'Critically ill, no indirect calorimetry (20–25 kcal/kg, 1.3 g/kg protein)',
    condSurgery: 'Major surgery (no weight-based target in the guideline)',
    condCancer: 'Cancer (25–30 kcal/kg, protein above 1.0 up to 1.5 g/kg)',
    condCKDPre: 'CKD 3–5 not on dialysis (25–35 kcal/kg, 0.55–0.60 g/kg protein)',
    condDialysis: 'CKD on hemodialysis or PD (25–35 kcal/kg, 1.0–1.2 g/kg protein)',
    condHepatic: 'Cirrhosis with malnutrition (30–35 kcal/kg, 1.5 g/kg protein)',
    condGI: 'Malabsorption / persistent diarrhea (no weight-based target in the guideline)',
    condCustom: 'Custom Entry (manual kcal/kg and protein g/kg)',
    baseWt: 'Weight used',
    condSrc: {
      normal: 'NICE CG32 (2006, rec. 1.4.2): 25–35 kcal/kg/day (lower if BMI over 25) and 0.8–1.5 g protein/kg/day for people not severely ill or at risk of refeeding.',
      elderly: 'ESPEN geriatrics 2022: guiding value 30 kcal/kg/day (R1) and at least 1.0 g protein/kg/day (R2), both adjusted to the individual.',
      diabetes: 'ADA Standards of Care 2026, section 5: no ideal percentage of calories from carbohydrate, protein or fat; protein as recommended for the general public (typically 0.8–1.5 g/kg/day). No weight-based energy figure is given.',
      icu: 'ESPEN ICU 2023: measure energy expenditure by indirect calorimetry; without it, simple weight-based equations (20–25 kcal/kg/day) may be preferred. Protein 1.3 g/kg/day delivered progressively.',
      surgery: 'ESPEN surgery 2021 (practical) gives no weight-based energy or protein target. It recommends a formula enriched with arginine, omega-3 fatty acids and ribonucleotides for malnourished patients having major cancer surgery.',
      cancer: 'ESPEN cancer 2021 (practical): energy generally 25–30 kcal/kg/day (B2-1); protein above 1 g/kg/day and, if possible, up to 1.5 g/kg/day (B2-2).',
      ckd_pre: 'KDOQI 2020: energy 25–35 kcal/kg/day (3.1.1); protein 0.55–0.60 g/kg/day, or 0.28–0.43 g/kg/day with keto acid analogs (3.0.1); 0.6–0.8 g/kg/day if the patient has diabetes (3.0.2).',
      dialysis: 'KDOQI 2020: energy 25–35 kcal/kg/day (3.1.1); protein 1.0–1.2 g/kg/day on hemodialysis or peritoneal dialysis (3.0.3, 3.0.4).',
      hepatic: 'ESPEN liver 2020 (practical): cirrhosis with malnutrition 30–35 kcal/kg/day and 1.5 g protein/kg/day (rec. 57); do not restrict protein in hepatic encephalopathy (rec. 54); oral BCAA 0.25 g/kg/day if protein-intolerant (rec. 59).',
      gi: 'No weight-based target in the cited guidelines. ASPEN/SCCM 2016 (E4b): consider a small peptide formula for persistent diarrhea with suspected malabsorption or no response to fiber.',
      custom: 'Targets entered by hand.',
    },
    targetKcalKg: 'Target Energy (kcal/kg/day)',
    targetProtKg: 'Target Protein (g/kg/day)',
    step3Intake: '3. Current Oral Dietary Intake',
    intakePercent: 'Current Oral Diet Intake (%)',
    totalDailyNeeds: 'Total Daily Needs',
    intakeFromDiet: 'Provided by Diet',
    netDeficit: 'Net Deficit (Prescription Target for ONS)',
    step4Results: '4. Recommended Medical Nutrition Regimens',
    regimenNotice: 'Calculated to fulfill the caloric deficit. Shows exact scoops/volume and protein delivered.',
    servingsNeeded: 'Daily Dose to Meet Energy Deficit',
    proteinDelivered: 'Protein Delivered by Formula',
    proteinGap: 'Protein Gap Remaining',
    proteinSurplus: 'Protein Target Fully Met',
    addProteinSuppRec: 'Recommendation: Add Modular Whey Protein',
    feedingScheduleTitle: 'Suggested Feeding Regimen',

    // Nitrogen Balance Calculator
    nbTitle: 'Nitrogen Balance Calculator',
    nbSub: 'Nitrogen intake minus urinary urea nitrogen and other losses',
    nbProteinIntake: 'Total Daily Protein Intake (g/day)',
    nbUunMethod: 'Urine Urea Nitrogen (UUN) Input Method',
    nbUunDirect: 'Direct 24-hr UUN (g/day)',
    nbUunConcentration: 'Urine UUN Concentration (mg/dL) & Volume (mL)',
    nbUunValue: '24-hr Urine Urea Nitrogen (UUN)',
    nbUunConc: 'Urine Urea Nitrogen Concentration (mg/dL)',
    nbUrineVol: '24-hr Urine Output Volume (mL)',
    nbInsensibleLoss: 'Fixed allowance: 4 g N/day',
    nbInsensibleNote: 'The 4 g covers non-urea urinary, fecal and skin nitrogen in the classic equation (Blackburn 1977).',
    nbExtraLosses: 'Other measured nitrogen losses (optional)',
    nbExtraNote: 'Enter only losses you have measured or estimated yourself (e.g. fistula, drain or dialysate nitrogen). The app adds no default amounts.',
    nbCalcButton: 'Calculate Nitrogen Balance',
    nbResultTitle: 'Nitrogen Balance Result',
    nbIn: 'Nitrogen Intake (Nin)',
    nbOut: 'Nitrogen Output (Nout)',
    nbBalance: 'Net Nitrogen Balance (NB)',
    nbStatusNegative: 'Negative balance: output exceeds intake',
    nbStatusZero: 'Zero balance',
    nbStatusPositive: 'Positive balance: intake exceeds output',
    nbDeficitProtein: 'Extra protein that would bring the balance to zero',
    nbNoDeficit: 'Balance is zero or positive at the current intake.',
    nbScoopsLine: (bene, fres) => `That is about ${bene} scoops of Boost Beneprotein (6.0 g protein/scoop) or ${fres} scoops of Fresubin Protein (5.0 g/scoop), from the PMK table.`,
    nbFormulaNote: 'Nitrogen balance = protein intake (g) ÷ 6.25 − (24-h UUN (g) + 4 g + other measured losses). Equation from Blackburn 1977 (cited; its full text could not be opened for checking on 20 Oct 2026). 6.25 g protein = 1 g nitrogen (NICE CG32 gives 0.8–1.5 g protein as 0.13–0.24 g nitrogen/kg). ASPEN/SCCM 2016: nitrogen balance is of limited value in the ICU.',

    // Protein Booster
    pbTitle: 'Protein Supplement Doser',
    pbSub: 'Scoops needed for an extra protein amount, with the kcal, K, P and Na they add (PMK values per scoop)',
    targetProtToAdd: 'Target Extra Protein Needed (g/day)',
    electrolytesNotice: 'Electrolyte load (K+, P, Na+) per dose is critical in renal and cardiac patients.',

    // Osmolality Guide
    osmoTitle: 'Osmolality & Enteral Feeding Tolerance Guide',
    osmoSub: 'Osmolality groups, diarrhea and GRV (ASPEN/SCCM 2016), refeeding (NICE CG32)',
    
    // Comparison
    compareTitle: 'Formula Comparison Matrix',
    compParameter: 'Parameter',
    compEnergyDensity: 'Energy Density',
    compProteinKcal: 'Protein / 1,000 kcal',
    compProteinSource: 'Protein Source',
    compFatSource: 'Fat Source & MCT',
    compFiber: 'Dietary Fiber',
    compOsmolality: 'Osmolality (mOsm/kg)',
    compElectrolytes: 'Electrolytes (Na / K / P)',
    compVitamins: 'Vitamins (Vit A / Vit C)',

    // Toast
    toastAddedCompare: 'Added to comparison list',
    toastRemovedCompare: 'Removed from comparison list',
    toastMaxCompare: 'Maximum 3 formulas can be compared at once',
    toastCopied: 'Copied to clipboard',
    printSheet: 'Print Nutrition Sheet',

    // Changelog & Legend UI
    changelogTitle: 'Update Changelog',
    changelogSub: 'Version history and clinical features',
    latest: 'Latest',
    newFeatures: 'New Features',
    improvements: 'Improvements & Refinements',
    legendBtn: 'Key',
    legendTitle: 'Symbols & Clinical Key',
    legendSub: 'Categories, marks and app groupings, with their sources',
    chipsLabel: 'Active filters',
    clearShort: 'Clear',
    countShowing: 'Showing',
    countOf: 'of',
    countFormulas: 'formulas',
    searchClose: 'Close search',
    noFormulasFound: 'No formulas found matching your criteria',
    clearFiltersToSeeAll: 'Clear your search or filters to see all 48 formulas',
    legendCat: 'Clinical Formula Categories',
    legendMacro: 'Values and marks',
    legendOsm: 'Osmolality groups',
    legendFats: 'Lipid & Fiber Types',

    // References & Disclaimer
    refTitle: 'References',
    refUsedFor: 'Used for',
    refAuthorNote: 'Compiled by Warodom Phaenthong, M.D. Formula nutrient compositions are derived from official clinical nutrition data and manufacturer product monographs. Individual patient electrolyte balance, renal clearance, and volume tolerances should always be evaluated clinically.',
    refUsed: {
      pmk: 'Every composition value and product photo (checked value by value and image by image, 19–20 Oct 2026).',
      fda_th: 'Thai registration status, licence number, licence holder and registered description of each product (search done 19 Oct 2026; each product links to its own record).',
      dmd: 'United Kingdom status: the product with the same name and form in dm+d, and whether it is marked discontinued (data of 15 Oct 2026).',
      nice_cg32: 'Calorie guide preset for adults not severely ill (25–35 kcal/kg, 0.8–1.5 g/kg); refeeding risk criteria, starting rate, vitamins and electrolytes; 6.25 g protein per g nitrogen.',
      espen_icu: 'ICU preset (20–25 kcal/kg without indirect calorimetry; 1.3 g/kg protein) and the ideal / adjusted body weight method.',
      espen_geriatrics: 'Older persons preset: 30 kcal/kg and at least 1.0 g protein/kg.',
      espen_cancer: 'Cancer preset: 25–30 kcal/kg; protein above 1 and up to 1.5 g/kg.',
      espen_surgery: 'Surgery preset: no weight-based target; immune-enhanced formula for malnourished patients having major cancer surgery.',
      espen_liver: 'Cirrhosis preset: 30–35 kcal/kg and 1.5 g/kg protein when malnourished; no protein restriction in encephalopathy; BCAA 0.25 g/kg if protein-intolerant.',
      aspen_crit: 'Diarrhea and gastric residual volume advice; peptide formula for persistent diarrhea; soluble fiber mechanism; nitrogen balance of limited value in the ICU.',
      kdoqi: 'CKD presets: energy 25–35 kcal/kg; protein 0.55–0.60 g/kg not on dialysis (0.6–0.8 with diabetes) and 1.0–1.2 g/kg on dialysis.',
      ada: 'Diabetes preset: no ideal macronutrient split; protein as for the general public (typically 0.8–1.5 g/kg).',
      blackburn: 'Nitrogen balance equation: protein ÷ 6.25 − (24-h urine urea nitrogen + 4 g).'
    },
    discTitle: 'Clinical Disclaimer',
    discPoints: [
      'This clinical suite is designed for physicians, dietitians, clinical nutritionists, and healthcare professionals as a point-of-care decision aid.',
      'Check every dose and nutritional volume against the current product label, and individualize nutrition therapy according to organ function, volume tolerance, and laboratory trends.',
      'Always verify potential food allergens (milk protein/casein, soy, fish oil) and local hospital formulary availability before prescribing.'
    ],
    discReviewed: 'Sources last checked: 20 October 2026'
  },
  th: {
    isTh: true,
    noCountry: 'ไม่ได้เลือกประเทศ กรุณาเลือกประเทศในตัวกรองประเทศ',
    countriesLabel: 'ประเทศ',
    countriesTitle: 'แสดงสูตรอาหารทางการแพทย์ที่มีทะเบียนหรือจำหน่ายในประเทศที่เลือก',
    countriesAll: 'ทั้งหมด',
    countriesAllTitle: 'เลือกทุกประเทศ กดอีกครั้งเพื่อล้างทั้งหมด',
    countryCodes: { th: 'TH', us: 'US', uk: 'UK', eu: 'EU', jp: 'JP' },
    countryNames: { th: 'ไทย', us: 'สหรัฐฯ', uk: 'สหราชอาณาจักร', eu: 'สหภาพยุโรป', jp: 'ญี่ปุ่น' },
    thRegLabel: 'อย.',
    thRegTitle: 'สถานะในทะเบียนของประเทศที่เลือก ปัจจุบัน: มีทะเบียนที่ยังคงอยู่ เคยมี: ทะเบียนถูกยกเลิก/สิ้นสภาพ/เลิกจำหน่าย (†) ไม่ทราบ: ไม่พบในทะเบียนของประเทศนั้น (?)',
    thRegOpts: { current: 'ปัจจุบัน', past: 'เคยมี', unknown: 'ไม่ทราบ' },
    sourceLabel: 'แหล่งข้อมูล',
    holderLabel: 'ผู้ถือทะเบียน',
    holderToggleTitle: 'แสดงหรือซ่อนแถบผู้ถือทะเบียน/ตัวแทนจำหน่ายบนการ์ด',
    detailReg: 'การขึ้นทะเบียนและสถานะ อย. รายประเทศ',
    makerLabel: 'ผู้ผลิต',
    unknown: 'ไม่มีข้อมูล',
    chipNone: 'ไม่เลือก',
    legendReg: 'การขึ้นทะเบียนและสถานะ อย. รายประเทศ',
    legendRegNow: 'มีทะเบียนที่ยังคงอยู่ในประเทศนั้น ป้ายเป็นสีของประเทศนั้น',
    legendRegPast: 'ทะเบียนแสดงสถานะยกเลิก สิ้นสภาพ หรือเลิกจำหน่าย',
    legendRegUnknown: 'ไม่พบในทะเบียน หรือประเทศนั้นไม่มีทะเบียนผลิตภัณฑ์สาธารณะ ไม่ได้หมายความว่าไม่เคยจำหน่าย',
    legendCountries: 'TH = ทะเบียนอาหาร อย. (เลขสารบบอาหารทางการแพทย์) UK = NHS dm+d ซึ่งรวบรวมอาหารทางการแพทย์ที่สั่งจ่ายได้ใน NHS สหรัฐฯ: อาหารทางการแพทย์ไม่มีทะเบียนผลิตภัณฑ์กับ US FDA สหภาพยุโรป: อาหารทางการแพทย์ (FSMP) แจ้งแยกรายประเทศสมาชิก ไม่มีทะเบียนกลาง ญี่ปุ่น: ทะเบียน PMDA มีเฉพาะอาหารทางสายที่อนุมัติเป็นยา และไม่พบรายการที่ตรงกับผลิตภัณฑ์เหล่านี้ จึงแสดงเป็น ไม่ทราบ',
    appTitle: 'คู่มืออาหารทางการแพทย์สำหรับผู้ใหญ่',
    appSubtitle: 'ระบบช่วยตัดสินใจและคำนวณสูตรอาหารทางการแพทย์ (Enteral & Oral Nutritional Supplements)',
    sourceCredit: 'กลุ่มงานโภชนาการคลินิก โรงพยาบาลพระมงกุฎเกล้า (ปรับปรุง มีนาคม 2567)',
    doctorCredit: 'Made by Warodom Phaenthong, M.D.',
    disclaimer: 'สำหรับบุคลากรทางการแพทย์ การเลือกสูตรอาหารต้องพิจารณาตามสภาวะทางคลินิกและการทำงานของอวัยวะของผู้ป่วยแต่ละราย',

    // Top guides & action buttons
    btnCalorieGuide: 'คำนวณพลังงาน & เลือกสูตร',
    btnNitrogenCalc: 'ดุลไนโตรเจน (Nitrogen Balance)',
    btnProteinBooster: 'คำนวณเสริมโปรตีน',
    btnOsmolality: 'คู่มือความเข้มข้น & ท้องเสีย',
    btnCompare: 'เปรียบเทียบสูตร (สูงสุด 3)',
    btnReferences: 'ข้อมูลอ้างอิง',

    // Search & views
    searchPlaceholder: 'ค้นหาชื่อสูตรอาหาร, บริษัท, ชนิดโปรตีน, ใยอาหาร, โรค...',
    searchPlaceholderShort: 'ค้นหาสูตรอาหาร...',
    filtersBtn: 'ตัวกรอง',
    clearAll: 'ล้างตัวกรอง',
    totalFound: 'สูตรที่พบ',
    gridView: 'มุมมองการ์ด',
    listView: 'มุมมองรายการ',
    tableView: 'มุมมองตาราง',
    perKcal: 'ต่อ 1,000 kcal',
    sortLabel: 'เรียงตาม',

    // Sort options
    sortNameAsc: 'ชื่อสูตร (A - Z)',
    sortNameDesc: 'ชื่อสูตร (Z - A)',
    sortKcalAsc: 'พลังงานต่อเสิร์ฟ (น้อยไปมาก)',
    sortKcalDesc: 'พลังงานต่อเสิร์ฟ (มากไปน้อย)',
    sortProtDesc: 'โปรตีนต่อ 1,000 kcal (มากไปน้อย)',
    sortProtAsc: 'โปรตีนต่อ 1,000 kcal (น้อยไปมาก)',
    sortOsmAsc: 'ออสโมลาริตี (น้อยไปมาก)',
    sortOsmDesc: 'ออสโมลาริตี (มากไปน้อย)',
    sortFiberDesc: 'ใยอาหาร (มากไปน้อย)',
    sortKLow: 'โพแทสเซียม (น้อยไปมาก - โรคไต)',
    sortPLow: 'ฟอสฟอรัส (น้อยไปมาก - โรคไต)',

    // Categories
    catAll: 'ทุกหมวดหมู่',
    catPolymeric: 'สูตรมาตรฐานครบถ้วน (Standard)',
    catDiabetes: 'สูตรเบาหวาน / น้ำตาลต่ำ (Diabetes)',
    catRenalPre: 'สูตรโรคไตก่อนฟอกเลือด (Pre-dialysis)',
    catRenalDialysis: 'สูตรโรคไตระยะฟอกเลือด (Dialysis)',
    catHepatic: 'สูตรโรคตับ / BCAA (Hepatic)',
    catImmune: 'สูตรเสริมภูมิคุ้มกัน & มะเร็ง (Immune/Cancer)',
    catSemiElemental: 'สูตรเปปไทด์กึ่งย่อย (Semi-Elemental)',
    catProteinSupp: 'โปรตีนเสริม / เวย์ผง (Protein Modular)',
    catSpecialty: 'สารเสริมเฉพาะโรค / คีโตแอนะล็อก',

    // Filter Chips
    filterCategory: 'หมวดหมู่อาหาร',
    filterForm: 'รูปแบบผลิตภัณฑ์',
    formPowder: 'ชนิดผงชง',
    formLiquid: 'ชนิดน้ำพร้อมดื่ม (กระป๋อง/ขวด/กล่อง)',
    formSachet: 'ชนิดซอง',
    filterProteinDensity: 'ความหนาแน่นโปรตีน',
    protStandard: 'มาตรฐาน (<40 ก./1000 kcal)',
    protHigh: 'โปรตีนสูง (40-55 ก./1000 kcal)',
    protVeryHigh: 'โปรตีนสูงพิเศษ (>55 ก./1000 kcal)',
    filterFiber: 'ใยอาหาร',
    fiberWith: 'มีใยอาหาร',
    fiberFree: 'ไม่มีใยอาหาร',
    filterOsmolality: 'ความดันออสโมลาริตี',
    osmIso: '≤ 350 mOsm/kg',
    osmMod: '351–500 mOsm/kg',
    osmHyper: '> 500 mOsm/kg',
    filterFeatures: 'จุดเด่นทางคลินิก',
    featLowGI: 'ดัชนีน้ำตาลต่ำ (Low GI)',
    featMCT: 'มีน้ำมัน MCT',
    featFishOil: 'มีน้ำมันปลา (EPA/DHA)',
    featLowElectrolyte: 'สูตรโรคไต',
    featPeptides: 'โปรตีนย่อยแล้ว (Peptides)',
    featPlant: 'โปรตีนจากพืช (Plant-based)',
    featImmune: 'เสริมอาร์จินีน / กลูตามีน',

    // Card & Details
    scoop: 'ช้อน',
    serving: 'หนึ่งหน่วยบริโภค',
    caloricDist: 'สัดส่วนพลังงาน (P:C:F %)',
    proteinPer1000: 'โปรตีน / 1,000 kcal',
    proteinSources: 'แหล่งโปรตีน',
    fatSources: 'แหล่งไขมัน',
    fiberContent: 'ปริมาณใยอาหาร',
    osmolalityLabel: 'ออสโมลาริตี',
    micronutrientsTitle: 'เกลือแร่และวิตามิน / 1,000 kcal',
    micronutrientsTitleUnit: 'เกลือแร่และวิตามิน ต่อช้อน ซอง หรือเม็ด',
    clinicalIndications: 'ข้อบ่งใช้และคำแนะนำทางคลินิก',
    compareAdd: 'เปรียบเทียบ',
    compareRemove: 'ยกเลิก',
    viewDetails: 'ดูรายละเอียดเชิงลึก',
    close: 'ปิด',
    selectMaxNotice: 'สามารถเลือกเปรียบเทียบได้สูงสุด 3 สูตรพร้อมกัน',

    // Calorie & Protein Guide Wizard
    wizardTitle: 'คู่มือคำนวณพลังงาน โปรตีน & ตัวช่วยเลือกสูตร ONS',
    wizardSub: 'ประมาณเป้าหมายพลังงานและโปรตีน และแสดงสูตรในหมวดที่ตรงกัน',
    step1Patient: '1. ข้อมูลผู้ป่วยและสัดส่วนร่างกาย',
    gender: 'เพศ',
    male: 'ชาย',
    female: 'หญิง',
    age: 'อายุ (ปี)',
    height: 'ส่วนสูง (ซม.)',
    actualWeight: 'น้ำหนักจริง (กก.)',
    bmi: 'ดัชนีมวลกาย (BMI)',
    ibw: 'น้ำหนักมาตรฐาน (IBW ตาม ESPEN)',
    abw: 'น้ำหนักปรับ (Adjusted BW)',
    weightUsedNotice: 'BMI เกิน 25: ใช้ IBW + 25% ของน้ำหนักส่วนเกินในการคำนวณ (ESPEN ICU 2023 เสนอให้บวก 20–25%)',
    step2Condition: '2. ภาวะทางคลินิกและเป้าหมายสารอาหาร',
    clinicalPreset: 'เลือกกลุ่มโรค / ภาวะของผู้ป่วย',
    condNormal: 'ผู้ใหญ่ที่ไม่ได้ป่วยหนัก (25–35 kcal/kg, โปรตีน 0.8–1.5 g/kg)',
    condElderly: 'ผู้สูงอายุ (30 kcal/kg, โปรตีนอย่างน้อย 1.0 g/kg)',
    condDiabetes: 'เบาหวาน (ไม่มีเป้าพลังงานตามน้ำหนัก; โปรตีน 0.8–1.5 g/kg)',
    condICU: 'ผู้ป่วยวิกฤต ไม่มี indirect calorimetry (20–25 kcal/kg, โปรตีน 1.3 g/kg)',
    condSurgery: 'ผ่าตัดใหญ่ (แนวทางไม่ได้ระบุเป้าตามน้ำหนัก)',
    condCancer: 'โรคมะเร็ง (25–30 kcal/kg, โปรตีนมากกว่า 1.0 ถึง 1.5 g/kg)',
    condCKDPre: 'โรคไตเรื้อรังระยะ 3–5 ยังไม่ล้างไต (25–35 kcal/kg, โปรตีน 0.55–0.60 g/kg)',
    condDialysis: 'โรคไตที่ฟอกเลือดหรือล้างไตทางช่องท้อง (25–35 kcal/kg, โปรตีน 1.0–1.2 g/kg)',
    condHepatic: 'ตับแข็งร่วมกับภาวะขาดสารอาหาร (30–35 kcal/kg, โปรตีน 1.5 g/kg)',
    condGI: 'การดูดซึมผิดปกติ / ท้องเสียต่อเนื่อง (แนวทางไม่ได้ระบุเป้าตามน้ำหนัก)',
    condCustom: 'กำหนดเป้าหมายเอง (ระบุ kcal/kg และโปรตีน g/kg)',
    baseWt: 'น้ำหนักที่ใช้',
    condSrc: {
      normal: 'NICE CG32 (2006, ข้อ 1.4.2): 25–35 kcal/กก./วัน (ลดลงถ้า BMI เกิน 25) และโปรตีน 0.8–1.5 ก./กก./วัน สำหรับผู้ที่ไม่ได้ป่วยหนักหรือเสี่ยง refeeding',
      elderly: 'ESPEN geriatrics 2022: ค่าแนะนำ 30 kcal/กก./วัน (R1) และโปรตีนอย่างน้อย 1.0 ก./กก./วัน (R2) ปรับตามผู้ป่วยแต่ละราย',
      diabetes: 'ADA Standards of Care 2026 หมวด 5: ไม่มีสัดส่วนคาร์โบไฮเดรต โปรตีน ไขมันที่เหมาะสมที่สุด; โปรตีนเท่ากับคนทั่วไป (โดยทั่วไป 0.8–1.5 ก./กก./วัน) ไม่ได้ระบุพลังงานตามน้ำหนัก',
      icu: 'ESPEN ICU 2023: วัดพลังงานด้วย indirect calorimetry; ถ้าไม่มี อาจใช้สมการตามน้ำหนัก 20–25 kcal/กก./วัน โปรตีน 1.3 ก./กก./วัน โดยค่อยๆ เพิ่ม',
      surgery: 'ESPEN surgery 2021 (practical) ไม่ได้ระบุเป้าพลังงานหรือโปรตีนตามน้ำหนัก แนะนำสูตรที่เสริม arginine, omega-3 และ ribonucleotides ในผู้ป่วยขาดสารอาหารที่ผ่าตัดมะเร็งใหญ่',
      cancer: 'ESPEN cancer 2021 (practical): พลังงานโดยทั่วไป 25–30 kcal/กก./วัน (B2-1); โปรตีนมากกว่า 1 ก./กก./วัน และถ้าทำได้ถึง 1.5 ก./กก./วัน (B2-2)',
      ckd_pre: 'KDOQI 2020: พลังงาน 25–35 kcal/กก./วัน (3.1.1); โปรตีน 0.55–0.60 ก./กก./วัน หรือ 0.28–0.43 ก./กก./วัน ร่วมกับ keto acid analogs (3.0.1); 0.6–0.8 ก./กก./วัน ถ้าเป็นเบาหวาน (3.0.2)',
      dialysis: 'KDOQI 2020: พลังงาน 25–35 kcal/กก./วัน (3.1.1); โปรตีน 1.0–1.2 ก./กก./วัน ในผู้ฟอกเลือดหรือล้างไตทางช่องท้อง (3.0.3, 3.0.4)',
      hepatic: 'ESPEN liver 2020 (practical): ตับแข็งร่วมกับขาดสารอาหาร 30–35 kcal/กก./วัน และโปรตีน 1.5 ก./กก./วัน (ข้อ 57); ไม่จำกัดโปรตีนในภาวะสมองจากโรคตับ (ข้อ 54); BCAA ทางปาก 0.25 ก./กก./วัน ถ้าทนโปรตีนไม่ได้ (ข้อ 59)',
      gi: 'แนวทางที่อ้างอิงไม่ได้ระบุเป้าตามน้ำหนัก ASPEN/SCCM 2016 (E4b): พิจารณาสูตรเปปไทด์เมื่อท้องเสียต่อเนื่องร่วมกับสงสัยการดูดซึมผิดปกติ หรือไม่ตอบสนองต่อใยอาหาร',
      custom: 'กำหนดเป้าหมายเอง',
    },
    targetKcalKg: 'เป้าหมายพลังงาน (kcal/กก./วัน)',
    targetProtKg: 'เป้าหมายโปรตีน (กรัม/กก./วัน)',
    step3Intake: '3. ปริมาณอาหารที่ผู้ป่วยรับประทานได้ในปัจจุบัน',
    intakePercent: 'รับประทานอาหารทางปากได้ (%)',
    totalDailyNeeds: 'ความต้องการทั้งวัน',
    intakeFromDiet: 'ได้รับจากอาหารปกติ',
    netDeficit: 'ส่วนขาดที่ต้องเสริมด้วย ONS (Prescription Target)',
    step4Results: '4. สูตรอาหารทางการแพทย์ที่แนะนำสำหรับผู้ป่วยรายนี้',
    regimenNotice: 'คำนวณปริมาณที่ต้องได้รับต่อวันเพื่อชดเชยพลังงานส่วนขาด พร้อมแสดงโปรตีนที่ได้รับและโปรตีนส่วนขาด',
    servingsNeeded: 'ปริมาณที่ต้องให้ต่อวันเพื่อปิดช่องว่างพลังงาน',
    proteinDelivered: 'โปรตีนที่จะได้รับจากสูตรนี้',
    proteinGap: 'ยังขาดโปรตีนอีก',
    proteinSurplus: 'โปรตีนครบตามเป้าหมายแล้ว',
    addProteinSuppRec: 'คำแนะนำ: เสริมด้วยโปรตีนโมดูลาร์ (เวย์ผงบริสุทธิ์)',
    feedingScheduleTitle: 'แนวทางการจัดตารางให้อาหาร',

    // Nitrogen Balance Calculator
    nbTitle: 'เครื่องคำนวณดุลไนโตรเจนทางคลินิก (Nitrogen Balance)',
    nbSub: 'ไนโตรเจนที่ได้รับ ลบด้วยยูเรียไนโตรเจนในปัสสาวะและการสูญเสียอื่น',
    nbProteinIntake: 'ปริมาณโปรตีนที่ได้รับต่อวัน (กรัม/วัน)',
    nbUunMethod: 'รูปแบบการกรอกค่าไนโตรเจนในปัสสาวะ 24 ชั่วโมง (UUN)',
    nbUunDirect: 'กรอกค่า UUN รวม 24 ชม. โดยตรง (กรัม/วัน)',
    nbUunConcentration: 'คำนวณจากความเข้มข้น UUN (mg/dL) และปริมาตรปัสสาวะ (มล.)',
    nbUunValue: 'Urine Urea Nitrogen 24 ชม. (UUN)',
    nbUunConc: 'ความเข้มข้นยูเรียไนโตรเจนในปัสสาวะ (UUN, mg/dL)',
    nbUrineVol: 'ปริมาตรปัสสาวะ 24 ชั่วโมง (มล.)',
    nbInsensibleLoss: 'ค่าคงที่: 4 กรัม N/วัน',
    nbInsensibleNote: '4 กรัมนี้แทนไนโตรเจนในปัสสาวะที่ไม่ใช่ยูเรีย อุจจาระ และผิวหนัง ตามสมการดั้งเดิม (Blackburn 1977)',
    nbExtraLosses: 'การสูญเสียไนโตรเจนอื่นที่วัดได้ (ไม่บังคับ)',
    nbExtraNote: 'กรอกเฉพาะค่าที่วัดหรือประเมินเอง (เช่น ไนโตรเจนจากรูรั่ว สายระบาย หรือน้ำยาล้างไต) แอปไม่เพิ่มค่าใดให้อัตโนมัติ',
    nbCalcButton: 'คำนวณดุลไนโตรเจน',
    nbResultTitle: 'ผลการประเมินดุลไนโตรเจน',
    nbIn: 'ไนโตรเจนที่ได้รับเข้าสู่ร่างกาย (Nin)',
    nbOut: 'ไนโตรเจนที่ขับออกจากร่างกาย (Nout)',
    nbBalance: 'ดุลไนโตรเจนสุทธิ (Nitrogen Balance: Nin - Nout)',
    nbStatusNegative: 'ดุลเป็นลบ: ขับออกมากกว่าที่ได้รับ',
    nbStatusZero: 'ดุลเป็นศูนย์',
    nbStatusPositive: 'ดุลเป็นบวก: ได้รับมากกว่าที่ขับออก',
    nbDeficitProtein: 'โปรตีนที่ต้องเพิ่มเพื่อให้ดุลเป็นศูนย์',
    nbNoDeficit: 'ดุลเป็นศูนย์หรือบวกที่ปริมาณโปรตีนปัจจุบัน',
    nbScoopsLine: (bene, fres) => `เท่ากับ Boost Beneprotein ประมาณ ${bene} ช้อน (โปรตีน 6.0 ก./ช้อน) หรือ Fresubin Protein ${fres} ช้อน (5.0 ก./ช้อน) ตามตาราง PMK`,
    nbFormulaNote: 'ดุลไนโตรเจน = โปรตีนที่ได้รับ (ก.) ÷ 6.25 − (UUN 24 ชม. (ก.) + 4 ก. + การสูญเสียอื่นที่วัดได้) สมการจาก Blackburn 1977 (อ้างอิงตามที่ใช้กันทั่วไป ไม่สามารถเปิดบทความฉบับเต็มเพื่อตรวจได้เมื่อ 20 ต.ค. 2569) โปรตีน 6.25 ก. = ไนโตรเจน 1 ก. (NICE CG32 ระบุโปรตีน 0.8–1.5 ก. เท่ากับไนโตรเจน 0.13–0.24 ก./กก.) ASPEN/SCCM 2016: ดุลไนโตรเจนมีประโยชน์จำกัดในผู้ป่วย ICU',

    // Protein Booster
    pbTitle: 'ระบบคำนวณและเลือกโปรตีนเสริม (Protein Modulars)',
    pbSub: 'จำนวนช้อนที่ต้องใช้เพื่อเพิ่มโปรตีนตามที่ต้องการ พร้อม kcal, K, P และ Na ที่ได้เพิ่ม (ค่าต่อช้อนจากตาราง PMK)',
    targetProtToAdd: 'ปริมาณโปรตีนที่ต้องการเสริมต่อวัน (กรัม/วัน)',
    electrolytesNotice: 'ปริมาณเกลือแร่ (โพแทสเซียม, ฟอสฟอรัส, โซเดียม) ต่อช้อนมีความสำคัญอย่างยิ่งในผู้ป่วยโรคไตและโรคหัวใจ',

    // Osmolality Guide
    osmoTitle: 'คู่มือความเข้มข้น (Osmolality) และการแก้ปัญหาทางเดินอาหาร',
    osmoSub: 'กลุ่มออสโมลาลิตี, ท้องเสียและ GRV (ASPEN/SCCM 2016), ภาวะ refeeding (NICE CG32)',

    // Comparison
    compareTitle: 'ตารางเปรียบเทียบสูตรอาหารทางการแพทย์',
    compParameter: 'ข้อมูลโภชนาการ',
    compEnergyDensity: 'ความหนาแน่นพลังงาน',
    compProteinKcal: 'โปรตีน / 1,000 kcal',
    compProteinSource: 'แหล่งโปรตีน',
    compFatSource: 'แหล่งไขมัน & MCT',
    compFiber: 'ใยอาหาร',
    compOsmolality: 'ออสโมลาริตี (mOsm/kg)',
    compElectrolytes: 'เกลือแร่ (โซเดียม / โพแทสเซียม / ฟอสฟอรัส)',
    compVitamins: 'วิตามิน (วิตามิน เอ / วิตามิน ซี)',

    // Toast
    toastAddedCompare: 'เพิ่มลงในตารางเปรียบเทียบแล้ว',
    toastRemovedCompare: 'นำออกจากตารางเปรียบเทียบแล้ว',
    toastMaxCompare: 'เปรียบเทียบได้สูงสุด 3 สูตรพร้อมกัน',
    toastCopied: 'คัดลอกลงคลิปบอร์ดแล้ว',
    printSheet: 'พิมพ์ใบสรุปโภชนาการ',

    // Changelog & Legend UI
    changelogTitle: 'ประวัติการอัปเดต',
    changelogSub: 'ประวัติเวอร์ชันและฟีเจอร์ใหม่',
    latest: 'ล่าสุด',
    newFeatures: 'ฟีเจอร์ใหม่',
    improvements: 'การปรับปรุงและแก้ไข',
    legendBtn: 'สัญลักษณ์',
    legendTitle: 'คำอธิบายสัญลักษณ์และเกณฑ์ทางคลินิก',
    legendSub: 'หมวดหมู่ สัญลักษณ์ และการจัดกลุ่มของแอป พร้อมแหล่งข้อมูล',
    chipsLabel: 'ตัวกรองที่เลือกอยู่',
    clearShort: 'ล้างทั้งหมด',
    countShowing: 'แสดง',
    countOf: 'จาก',
    countFormulas: 'รายการ',
    searchClose: 'ปิดการค้นหา',
    noFormulasFound: 'ไม่พบสูตรอาหารที่ตรงกับเงื่อนไขการค้นหา',
    clearFiltersToSeeAll: 'ล้างคำค้นหาหรือตัวกรองเพื่อดูสูตรทั้งหมด 48 รายการ',
    legendCat: 'หมวดหมู่อาหารทางการแพทย์ทางคลินิก',
    legendMacro: 'ค่าและสัญลักษณ์',
    legendOsm: 'กลุ่มออสโมลาลิตี',
    legendFats: 'ชนิดไขมันและใยอาหาร',

    // References & Disclaimer
    refTitle: 'เอกสารอ้างอิง',
    refUsedFor: 'ใช้สำหรับ',
    refAuthorNote: 'รวบรวมและเรียบเรียงโดย นพ.วโรดม แผ่นทอง ข้อมูลองค์ประกอบสารอาหารอ้างอิงจากการเจือจางมาตรฐานและฉลากข้อมูลโภชนาการทางการแพทย์จากผู้ผลิต การนำไปใช้ทางคลินิกควรประเมินการทำงานของอวัยวะและสมดุลสารน้ำของผู้ป่วยแต่ละราย',
    refUsed: {
      pmk: 'ค่าองค์ประกอบทุกค่าและภาพผลิตภัณฑ์ทุกภาพ (ตรวจทีละค่าและทีละภาพ 19–20 ต.ค. 2569)',
      fda_th: 'สถานะทะเบียน เลขสารบบ ผู้รับอนุญาต และคำบรรยายตามทะเบียนของแต่ละผลิตภัณฑ์ (ค้นเมื่อ 19 ต.ค. 2569 แต่ละผลิตภัณฑ์ลิงก์ไปยังทะเบียนของตนเอง)',
      dmd: 'สถานะในสหราชอาณาจักร: ผลิตภัณฑ์ชื่อและรูปแบบเดียวกันใน dm+d และสถานะเลิกจำหน่าย (ข้อมูล 15 ต.ค. 2569)',
      nice_cg32: 'ค่าตั้งต้นสำหรับผู้ใหญ่ที่ไม่ได้ป่วยหนัก (25–35 kcal/กก., 0.8–1.5 ก./กก.) เกณฑ์เสี่ยง refeeding อัตราเริ่มต้น วิตามินและเกลือแร่ และโปรตีน 6.25 ก. ต่อไนโตรเจน 1 ก.',
      espen_icu: 'ค่าตั้งต้นผู้ป่วยวิกฤต (20–25 kcal/กก. เมื่อไม่มี indirect calorimetry; โปรตีน 1.3 ก./กก.) และวิธีคำนวณน้ำหนักมาตรฐาน/น้ำหนักปรับ',
      espen_geriatrics: 'ค่าตั้งต้นผู้สูงอายุ: 30 kcal/กก. และโปรตีนอย่างน้อย 1.0 ก./กก.',
      espen_cancer: 'ค่าตั้งต้นโรคมะเร็ง: 25–30 kcal/กก.; โปรตีนมากกว่า 1 ถึง 1.5 ก./กก.',
      espen_surgery: 'ผ่าตัดใหญ่: ไม่มีเป้าตามน้ำหนัก; สูตรเสริมภูมิคุ้มกันในผู้ป่วยขาดสารอาหารที่ผ่าตัดมะเร็งใหญ่',
      espen_liver: 'ตับแข็ง: 30–35 kcal/กก. และโปรตีน 1.5 ก./กก. เมื่อขาดสารอาหาร; ไม่จำกัดโปรตีนในภาวะสมองจากโรคตับ; BCAA 0.25 ก./กก. ถ้าทนโปรตีนไม่ได้',
      aspen_crit: 'คำแนะนำเรื่องท้องเสียและ GRV; สูตรเปปไทด์เมื่อท้องเสียต่อเนื่อง; กลไกของใยอาหารละลายน้ำ; ดุลไนโตรเจนมีประโยชน์จำกัดใน ICU',
      kdoqi: 'ค่าตั้งต้นโรคไต: พลังงาน 25–35 kcal/กก.; โปรตีน 0.55–0.60 ก./กก. เมื่อยังไม่ล้างไต (0.6–0.8 ถ้าเป็นเบาหวาน) และ 1.0–1.2 ก./กก. เมื่อล้างไต',
      ada: 'เบาหวาน: ไม่มีสัดส่วนสารอาหารที่เหมาะสมที่สุด; โปรตีนเท่ากับคนทั่วไป (โดยทั่วไป 0.8–1.5 ก./กก.)',
      blackburn: 'สมการดุลไนโตรเจน: โปรตีน ÷ 6.25 − (ยูเรียไนโตรเจนในปัสสาวะ 24 ชม. + 4 ก.)'
    },
    discTitle: 'ข้อสงวนสิทธิ์ทางการแพทย์ (Clinical Disclaimer)',
    discPoints: [
      'คู่มือนี้จัดทำขึ้นเพื่อเป็นเครื่องมือสนับสนุนการตัดสินใจทางคลินิกสำหรับแพทย์ นักกำหนดอาหาร นักโภชนาการ และบุคลากรทางการแพทย์',
      'การเลือกใช้สูตรอาหารและปริมาณพลังงาน/โปรตีนต้องปรับให้เหมาะสมกับสภาวะโรค การทำงานของไต ตับ หัวใจ และเกลือแร่ของผู้ป่วยแต่ละราย',
      'โปรดตรวจสอบข้อมูลบนฉลากผลิตภัณฑ์ล่าสุด คำเตือนการแพ้อาหาร (เช่น นม, ถั่วเหลือง, ปลา) และสถานะการจำหน่ายของแต่ละโรงพยาบาล'
    ],
    discReviewed: 'ตรวจแหล่งข้อมูลล่าสุด: 20 ตุลาคม 2569'
  }
};

// =====================================================================
// Clinical Helper Functions & Formulas
// =====================================================================

// Ideal and adjusted body weight as proposed by ESPEN ICU 2023 (section 3.3.5, the obese patient):
// IBW = 0.9 x height (cm) - 100 (male) or - 106 (female); from BMI > 25 use IBW + 20-25% of the excess weight.
// The app adds 25% (upper end of that range).
const calculateIBW = (gender, heightCm) => {
  if (!heightCm || heightCm < 100) return 0;
  return Math.round((0.9 * heightCm - (gender === 'male' ? 100 : 106)) * 10) / 10;
};

const ADJ_FRACTION = 0.25;
const calculateABW = (actualWeight, ibw) => {
  if (actualWeight <= ibw) return actualWeight;
  return Math.round((ibw + ADJ_FRACTION * (actualWeight - ibw)) * 10) / 10;
};

// Weight-based targets per preset, each from the guideline named in t.condSrc. kcal/prot are [low, high]
// (one value = a single figure in the guideline); null = the guideline gives no weight-based figure,
// so the preset leaves the sliders where they are. Choosing a preset sets each slider to the low end.
const CONDITION_TARGETS = {
  normal: { kcal: [25, 35], prot: [0.8, 1.5] },
  elderly: { kcal: [30], prot: [1.0] },
  diabetes: { kcal: null, prot: [0.8, 1.5] },
  icu: { kcal: [20, 25], prot: [1.3] },
  surgery: { kcal: null, prot: null },
  cancer: { kcal: [25, 30], prot: [1.0, 1.5] },
  ckd_pre: { kcal: [25, 35], prot: [0.55, 0.6] },
  dialysis: { kcal: [25, 35], prot: [1.0, 1.2] },
  hepatic: { kcal: [30, 35], prot: [1.5] },
  gi: { kcal: null, prot: null },
};

// Calculate Nitrogen Balance
// NB = (Protein Intake / 6.25) - (24hr UUN + 4 + extra)
const calculateNitrogenBalance = (proteinGrams, uunGrams, extraLossGrams = 0) => {
  const nIn = proteinGrams / 6.25;
  const nOut = uunGrams + 4.0 + extraLossGrams;
  const nb = nIn - nOut;
  return {
    nIn: Math.round(nIn * 100) / 100,
    nOut: Math.round(nOut * 100) / 100,
    nb: Math.round(nb * 100) / 100
  };
};

// Format color helper
// Chip tones (bronchodilator-guide pattern): coloured text + light hover tint when off, solid when on.
// Category colours match the chips in the Key window.
const CHIP_TONE = {
  slate: ['text-slate-600 hover:bg-slate-50', 'bg-slate-600 text-white shadow-sm'],
  emerald: ['text-emerald-700 hover:bg-emerald-50', 'bg-emerald-600 text-white shadow-sm'],
  blue: ['text-blue-700 hover:bg-blue-50', 'bg-blue-600 text-white shadow-sm'],
  amber: ['text-amber-700 hover:bg-amber-50', 'bg-amber-500 text-white shadow-sm'],
  orange: ['text-orange-700 hover:bg-orange-50', 'bg-orange-500 text-white shadow-sm'],
  purple: ['text-purple-700 hover:bg-purple-50', 'bg-purple-600 text-white shadow-sm'],
  rose: ['text-rose-700 hover:bg-rose-50', 'bg-rose-600 text-white shadow-sm'],
  teal: ['text-teal-700 hover:bg-teal-50', 'bg-teal-600 text-white shadow-sm'],
  indigo: ['text-indigo-700 hover:bg-indigo-50', 'bg-indigo-600 text-white shadow-sm'],
  fuchsia: ['text-fuchsia-700 hover:bg-fuchsia-50', 'bg-fuchsia-600 text-white shadow-sm'],
  sky: ['text-sky-700 hover:bg-sky-50', 'bg-sky-600 text-white shadow-sm'],
  cyan: ['text-cyan-700 hover:bg-cyan-50', 'bg-cyan-600 text-white shadow-sm'],
  green: ['text-green-700 hover:bg-green-50', 'bg-green-600 text-white shadow-sm'],
};
const CAT_TONE = { all: 'slate', polymeric: 'emerald', diabetes: 'blue', renal_pre: 'amber', renal_dialysis: 'orange', hepatic: 'purple', immune: 'rose', semi_elemental: 'teal', protein_supp: 'indigo', specialty: 'fuchsia' };
const chipTone = (tone, on) => CHIP_TONE[tone][on ? 1 : 0];

const pcfText = (pcf, sep = ' : ') => pcf ? pcf.join(sep) : 'NA';
const kcalText = (k) => (k || k === 0) ? `${k} kcal` : 'NA kcal';

const getOsmolalityBadge = (osm) => {
  if (!osm) return { label: 'NA', tone: 'bg-slate-100 text-slate-600 border-slate-200' };
  if (osm <= 350) return { label: `${osm} mOsm/kg`, tone: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
  if (osm <= 500) return { label: `${osm} mOsm/kg`, tone: 'bg-blue-50 text-blue-700 border-blue-200' };
  return { label: `${osm} mOsm/kg`, tone: 'bg-amber-50 text-amber-700 border-amber-200' };
};


// =====================================================================
// Country Availability & Regulatory Registration Standards
// =====================================================================
const LABEL_REGIONS = ['th', 'us', 'uk', 'eu', 'jp'];
const TH_STATUSES = ['current', 'past', 'unknown'];

const COUNTRY_COLORS = {
  th: { on: 'bg-emerald-600 text-white shadow-sm', off: 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-700', chip: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300' },
  us: { on: 'bg-blue-600 text-white shadow-sm', off: 'text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700', chip: 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300' },
  uk: { on: 'bg-rose-600 text-white shadow-sm', off: 'text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-700', chip: 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-300' },
  eu: { on: 'bg-amber-500 text-white shadow-sm', off: 'text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700', chip: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300' },
  jp: { on: 'bg-violet-600 text-white shadow-sm', off: 'text-violet-700 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-slate-700', chip: 'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300' },
};

// Registration records, re-sourced 19 Oct 2026 (the earlier 5-country table had no sources).
// th: Thai FDA register (porta.fda.moph.go.th search centre): [status, licence no., food serial (fdpdtno) or drug Newcode, holder key].
//     Holder = the licence holder exactly as the register prints it (Thai only; the register gives no English name).
// uk: NHS dm+d (dmd-browser.nhsbsa.nhs.uk, data of 15 Oct 2026): [status, AMP id, AMP name, supplier]. Discontinued AMP = 'past'.
//     Only the same product name and form counts as a match.
// us / eu / jp: no public product register covers these foods (see legendCountries), so they stay Unknown.
// A product with no th / uk record is Unknown there; it was searched and not found.
const TH_HOLDER = {
  otsuka: 'บริษัท ไทยโอซูก้า จำกัด',
  abbott: 'บริษัท แอ๊บบอต ลาบอแรตอรีส จำกัด',
  nestle: 'บริษัท เนสท์เล่ (ไทย) จำกัด',
  fk: 'บริษัท เฟรเซนีอุส คาบี (ไทยแลนด์) จำกัด',
  danone: 'บริษัท ดานอน สเปเชียลไลซ์ นิวทริชั่น (ประเทศไทย) จำกัด',
  votic: 'บริษัท โวทิค อินเตอร์เนชั่นแนล จำกัด',
  mega: 'บริษัท เมก้า ไลฟ์ไซแอ็นซ์ จำกัด (มหาชน)',
  supportpack: 'บริษัท ซัพพอร์ท แพค จำกัด',
  fclab: 'บริษัท เอฟซี ลาบอราทอรี่ จำกัด',
};

const FORMULA_REG_DATA = {
  'blendera-mf': { th: ['current', '74-1-21431-1-0012', '7412143110012', 'otsuka'] },
  'once-complete': { th: ['current', '74-1-21431-5-0003', '7412143150003', 'otsuka'] },
  'ensure-powder': {
    th: ['current', '10-3-14623-1-0124', '1031462310124', 'abbott'],
    uk: ['past', '2141', 'Ensure powder vanilla', 'Abbott Laboratories Ltd'],
  },
  'ensure-liquid': {
    th: ['current', '10-3-14623-1-0065', '1031462310065', 'abbott'],
    uk: ['current', '2142', 'Ensure liquid vanilla', 'Abbott Laboratories Ltd'],
  },
  'ensure-wheat-less-sweet': { th: ['current', '10-3-14623-1-0149', '1031462310149', 'abbott'] },
  'ensure-gold-wheat': { th: ['current', '10-3-14623-5-0019', '1031462350019', 'abbott'] },
  'ensure-gold-plant-based': { th: ['current', '10-3-14623-5-0026', '1031462350026', 'abbott'] },
  'boost-optimum': { th: ['current', '10-3-10937-5-0503', '1031093750503', 'nestle'] },
  'boost-fiber': { th: ['current', '10-3-10937-5-0369', '1031093750369', 'nestle'] },
  'pan-enteral': { th: ['current', '74-1-21431-3-0001', '7412143130001', 'otsuka'] },
  'isocal': { th: ['current', '10-3-10937-1-0333', '1031093710333', 'nestle'] },
  'fresubin-2kcal-drink': {
    th: ['current', '10-3-17146-1-0008', '1031714610008', 'fk'],
    uk: ['current', '46064', 'Fresubin 2kcal drink vanilla', 'Fresenius Kabi Ltd'],
  },
  'ensure-plus-advance': {
    th: ['current', '10-3-14623-5-0011', '1031462350011', 'abbott'],
    uk: ['current', '92911', 'Ensure Plus Advance liquid vanilla', 'Abbott Laboratories Ltd'],
  },
  'jevity': {
    th: ['current', '10-3-14623-1-0092', '1031462310092', 'abbott'],
    uk: ['current', '2971', 'Jevity liquid', 'Abbott Laboratories Ltd'],
  },
  'ma-beedee': { th: ['current', '12-2-02062-5-0007', '1220206250007', 'votic'] },
  'optifast': {
    th: ['current', '10-3-10937-5-0530', '1031093750530', 'nestle'],
    uk: ['past', '157964', 'Optifast shake oral powder 55g sachets vanilla', 'Nestle Health Science'],
  },
  'glucerna-liquid-can': { th: ['current', '10-3-14623-1-0050', '1031462310050', 'abbott'] },
  'glucerna-sr-liquid-box': { th: ['current', '10-3-14623-1-0116', '1031462310116', 'abbott'] },
  'glucerna-sr-powder': { th: ['current', '10-3-14623-5-0006', '1031462350006', 'abbott'] },
  'glucerna-plus': { th: ['current', '10-3-14623-5-0018', '1031462350018', 'abbott'] },
  'once-pro': { th: ['current', '74-1-21431-5-0007', '7412143150007', 'otsuka'] },
  'gen-dm-mf': { th: ['current', '74-1-21431-5-0016', '7412143150016', 'otsuka'] },
  'boost-care': { th: ['current', '10-3-10937-5-0120', '1031093750120', 'nestle'] },
  'fresubin-dm-drink': { th: ['current', '10-3-17146-5-0001', '1031714650001', 'fk'] },
  'once-renal': { th: ['current', '74-1-21431-5-0005', '7412143150005', 'otsuka'] },
  'aminoleban-oral': { th: ['current', '74-1-21431-1-0005', '7412143110005', 'otsuka'] },
  'nepro-powder': { th: ['current', '10-3-14623-5-0027', '1031462350027', 'abbott'] },
  'nepro-liquid': {
    th: ['current', '10-3-14623-1-0132', '1031462310132', 'abbott'],
    uk: ['current', '84823', 'Nepro HP liquid vanilla', 'Abbott Laboratories Ltd'],
  },
  'once-dialyze': { th: ['current', '74-1-21431-5-0004', '7412143150004', 'otsuka'] },
  'neo-mune': { th: ['current', '74-1-21431-3-0002', '7412143130002', 'otsuka'] },
  'oral-impact': {
    th: ['current', '10-3-10937-5-0574', '1031093750574', 'nestle'],
    uk: ['past', '59599', 'Oral Impact oral powder 74g sachets citrus', 'Nestle Health Science'],
  },
  'nutricia-forticare': {
    th: ['current', '11-3-00823-1-0102', '1130082310102', 'danone'],
    uk: ['past', '33985', 'Forticare liquid cappuccino', 'Nutricia Ltd'],
  },
  'prosure-powder': { th: ['current', '10-3-14623-1-0099', '1031462310099', 'abbott'] },
  'prosure-liquid': {
    th: ['current', '10-3-14623-1-0144', '1031462310144', 'abbott'],
    uk: ['past', '3152', 'ProSure liquid', 'Abbott Laboratories Ltd'],
  },
  'supportan': {
    th: ['current', '10-3-17146-5-0002', '1031714650002', 'fk'],
    uk: ['current', '61956', 'Supportan drink tropical fruits', 'Fresenius Kabi Ltd'],
  },
  'peptamen': { th: ['current', '10-3-10937-1-0125', '1031093710125', 'nestle'] },
  'vital-peptide': {
    th: ['current', '10-3-14623-5-0028', '1031462350028', 'abbott'],
    uk: ['current', '73751', 'Vital 1.5kcal liquid vanilla', 'Abbott Laboratories Ltd'],
  },
  'fresubin-protein': { th: ['current', '10-3-17146-5-0004', '1031714650004', 'fk'] },
  'boost-beneprotein': { th: ['current', '10-3-10937-5-0697', '1031093750697', 'nestle'] },
  'immuplex': { th: ['current', '11-3-02432-1-0017', '1130243210017', 'mega'] },
  'nutrica-whey': { th: ['current', '11-1-10249-5-0144', '1111024950144', 'supportpack'] },
  'nephra-whey': { th: ['current', '20-1-13451-5-0030', '2011345150030', 'fclab'] },
  'glutamine-plus': { th: ['current', '10-3-17146-1-0009', '1031714610009', 'fk'] },
  'ketosteril': { th: ['current', '2C1/58', 'U1DR2C1022580000111C', 'fk'] },
};

const TH_FOOD_URL = 'https://porta.fda.moph.go.th/FDA_SEARCH_ALL/PRODUCT/FRM_PRODUCT_FOOD.aspx?fdpdtno=';
const TH_DRUG_URL = 'https://pertento.fda.moph.go.th/FDA_INFORMATION_DRUG/Home/Phar_Product_Inform_Page?Newcode=';
const TH_SEARCH_URL = 'https://porta.fda.moph.go.th/fda_search_center_new/';
const DMD_URL = 'https://dmd-browser.nhsbsa.nhs.uk/amp/view/';

const statusIn = (med, r) => FORMULA_REG_DATA[med.id]?.[r]?.[0] || 'unknown';

const holderIn = (med, r) => {
  const rec = FORMULA_REG_DATA[med.id]?.[r];
  if (!rec) return null;
  return r === 'th' ? TH_HOLDER[rec[3]] : rec[3];
};

// Where a country's status comes from: a link to the exact record, or what was searched.
const regSource = (med, r, t) => {
  const rec = FORMULA_REG_DATA[med.id]?.[r];
  const th = t?.isTh;
  if (r === 'th') {
    if (!rec) return { text: th ? 'ค้นในทะเบียน อย. แล้ว ไม่พบ' : 'Searched the Thai FDA register: no record found', url: TH_SEARCH_URL };
    const drug = rec[2].startsWith('U1DR');
    return { text: `${th ? 'ทะเบียน อย.' : 'Thai FDA register'} ${rec[1]}`, url: (drug ? TH_DRUG_URL : TH_FOOD_URL) + rec[2] };
  }
  if (r === 'uk') {
    if (!rec) return { text: th ? 'ค้นใน NHS dm+d แล้ว ไม่พบชื่อและรูปแบบเดียวกัน' : 'Searched NHS dm+d: no product with the same name and form', url: 'https://dmd-browser.nhsbsa.nhs.uk/' };
    return { text: `NHS dm+d: ${rec[2]}`, url: DMD_URL + rec[1] };
  }
  return { text: th ? 'ไม่มีทะเบียนผลิตภัณฑ์สาธารณะสำหรับอาหารกลุ่มนี้' : 'No public product register for these foods' };
};

const StatusChip = ({ med, r, t }) => {
  const st = statusIn(med, r);
  if (st === 'past') {
    return (
      <span
        title={`${t?.countryNames?.[r] || r.toUpperCase()}: ${t?.thRegOpts?.past || 'Past'}`}
        data-country={r}
        data-status="past"
        data-holder-country
        className="shrink-0 text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300"
      >
        {t?.countryCodes?.[r] || r.toUpperCase()} †
      </span>
    );
  }
  if (st === 'unknown') {
    return (
      <span
        title={`${t?.countryNames?.[r] || r.toUpperCase()}: ${t?.thRegOpts?.unknown || 'Unknown'}`}
        data-country={r}
        data-status="unknown"
        data-holder-country
        className="shrink-0 text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap border-dashed border-slate-300 text-slate-500 bg-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400"
      >
        {t?.countryCodes?.[r] || r.toUpperCase()} ?
      </span>
    );
  }
  return (
    <span
      title={`${t?.countryNames?.[r] || r.toUpperCase()}: ${t?.thRegOpts?.current || 'Currently'}`}
      data-country={r}
      data-status="current"
      data-holder-country
      className={`shrink-0 text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap ${COUNTRY_COLORS[r]?.chip || ''}`}
    >
      {t?.countryCodes?.[r] || r.toUpperCase()}
    </span>
  );
};

const CountryLines = ({ med, t, regions = ['th'], showHolder = true, className = '', listRow = false, children = null }) => {
  const regList = Array.isArray(regions) ? regions : ['th'];
  const all = LABEL_REGIONS.map(r => [r, statusIn(med, r)]);
  const lined = showHolder ? all.filter(([r, st]) => regList.includes(r) && st !== 'unknown') : [];
  const rest = all.filter(([r, st]) => !lined.some(([x]) => x === r) && (st !== 'unknown' || regList.includes(r)));
  return (
    <div className={`flex flex-col gap-1 min-w-0 ${className}`} data-countries {...(listRow ? { 'data-list-countries': '' } : {})}>
      {lined.length > 0 && (
        <div className="flex flex-col gap-1 min-w-0" data-holder>
          {lined.map(([r, st]) => (
            <p key={r} className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0 text-slate-500 font-medium leading-snug text-[11px]" data-holder-line={r}>
              <StatusChip med={med} r={r} t={t} />
              <span className="break-words min-w-0 text-slate-700 dark:text-slate-300" data-holder-name>{holderIn(med, r, t) || t?.unknown || 'Unknown'}</span>
            </p>
          ))}
        </div>
      )}
      {(rest.length > 0 || children) && (
        <div className="flex flex-wrap items-center gap-1 min-w-0" data-country-rest>
          {rest.map(([r, st]) => <React.Fragment key={r}><StatusChip med={med} r={r} t={t} /></React.Fragment>)}
          {children}
        </div>
      )}
    </div>
  );
};

// =====================================================================
// Component: P:C:F Caloric Distribution Bar
// =====================================================================
// pcf is null where the PMK table gives no P:C:F split (protein supplements): grey bar, no made-up split.
const PcfBar = ({ pcf, className = "h-2 w-full" }) => {
  if (!pcf) return <div className={`rounded-full bg-slate-200 dark:bg-slate-700 shadow-inner ${className}`} title="P:C:F NA" />;
  const [p, c, f] = pcf;
  return (
    <div className={`flex rounded-full overflow-hidden bg-slate-200 shadow-inner ${className}`} title={`Protein: ${p}%, Carb: ${c}%, Fat: ${f}%`}>
      <div style={{ width: `${p}%` }} className="bg-rose-500 transition-all duration-300" />
      <div style={{ width: `${c}%` }} className="bg-amber-400 transition-all duration-300" />
      <div style={{ width: `${f}%` }} className="bg-sky-500 transition-all duration-300" />
    </div>
  );
};

// =====================================================================
// Modal Wrapper
// =====================================================================
const Modal = ({ title, sub, onClose, children, footer, icon = null, wide = false, tone = 'bg-slate-50' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden animate-in fade-in duration-150">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`bg-white w-full ${wide ? 'max-w-5xl' : 'max-w-3xl'} rounded-2xl shadow-2xl flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200 overflow-hidden border border-slate-200`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 ${tone} rounded-t-2xl shrink-0`}>
          <div className="flex items-center gap-3 min-w-0 pr-2">
            {icon && <div className="p-2 rounded-xl bg-white shadow-sm shrink-0 border border-slate-200/60">{icon}</div>}
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-slate-800 leading-tight break-words">{title}</h2>
              {sub && <p className="text-xs text-slate-500 break-words mt-0.5">{sub}</p>}
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-full transition-colors shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50/60 flex flex-col gap-5">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl flex items-center justify-between shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
// =====================================================================
// Component: Calorie & Protein Requirement Guide & ONS Matcher
// =====================================================================
const CalorieProteinGuideModal = ({ t, lang, formulas, onClose, onSelectFormula }) => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(65);
  const [heightCm, setHeightCm] = useState(165);
  const [weightKg, setWeightKg] = useState(55);
  const [condition, setCondition] = useState('elderly');
  const [targetKcalKg, setTargetKcalKg] = useState(CONDITION_TARGETS.elderly.kcal[0]);
  const [targetProtKg, setTargetProtKg] = useState(CONDITION_TARGETS.elderly.prot[0]);
  const [dietIntakePct, setDietIntakePct] = useState(50); // eats 50% of regular food

  // Auto-calculated Anthropometry
  const bmi = useMemo(() => {
    if (!heightCm || !weightKg) return 0;
    const hM = heightCm / 100;
    return Math.round((weightKg / (hM * hM)) * 10) / 10;
  }, [heightCm, weightKg]);

  const ibw = useMemo(() => calculateIBW(gender, heightCm), [gender, heightCm]);
  const isObese = bmi > 25; // ESPEN ICU 2023: reference weight changes above BMI 25
  const abw = useMemo(() => calculateABW(weightKg, ibw), [weightKg, ibw]);

  // Which weight base to use for energy/protein goals
  const activeWeight = isObese ? abw : weightKg;

  // Preset conditions effect
  const handleConditionChange = (condKey) => {
    setCondition(condKey);
    const target = CONDITION_TARGETS[condKey];
    if (target) {
      if (target.kcal) setTargetKcalKg(target.kcal[0]);
      if (target.prot) setTargetProtKg(target.prot[0]);
    }
  };

  // Requirements & Deficit Math
  const totalDailyKcal = Math.round(activeWeight * targetKcalKg);
  const totalDailyProt = Math.round(activeWeight * targetProtKg * 10) / 10;

  const intakeKcal = Math.round(totalDailyKcal * (dietIntakePct / 100));
  const intakeProt = Math.round(totalDailyProt * (dietIntakePct / 100) * 10) / 10;

  const deficitKcal = Math.max(0, totalDailyKcal - intakeKcal);
  const deficitProt = Math.max(0, Math.round((totalDailyProt - intakeProt) * 10) / 10);

  // Filter matched formulas based on condition
  const matchedFormulas = useMemo(() => {
    let filterCategory = 'polymeric';
    if (condition === 'diabetes') filterCategory = 'diabetes';
    else if (condition === 'ckd_pre') filterCategory = 'renal_pre';
    else if (condition === 'dialysis') filterCategory = 'renal_dialysis';
    else if (condition === 'hepatic') filterCategory = 'hepatic';
    else if (condition === 'cancer' || condition === 'surgery') filterCategory = 'immune';
    else if (condition === 'gi') filterCategory = 'semi_elemental';

    // Get formulas of this target category
    let list = formulas.filter(f => f.category === filterCategory && !f.isProteinSupp);
    if (list.length === 0) list = formulas.filter(f => f.category === 'polymeric' && !f.isProteinSupp);

    return list.slice(0, 6);
  }, [condition, formulas]);

  return (
    <Modal
      title={t.wizardTitle}
      sub={t.wizardSub}
      onClose={onClose}
      wide={true}
      tone="bg-emerald-50/70"
      icon={<Stethoscope className="w-5 h-5 text-emerald-600" />}
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-slate-500">{t.disclaimer}</span>
          <button onClick={onClose} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors">
            {t.close}
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Step 1: Patient Data */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-extrabold text-sm text-slate-800 mb-3 flex items-center gap-2">
              <ScaleIcon className="w-4 h-4 text-emerald-600" /> {t.step1Patient}
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">{t.gender}</label>
                <div className="flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                  <button onClick={() => setGender('male')} className={`flex-1 py-1 rounded-md text-xs font-bold transition-all ${gender === 'male' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}>{t.male}</button>
                  <button onClick={() => setGender('female')} className={`flex-1 py-1 rounded-md text-xs font-bold transition-all ${gender === 'female' ? 'bg-white shadow text-rose-600' : 'text-slate-500'}`}>{t.female}</button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">{t.age}</label>
                <input type="number" min="15" max="110" value={age} onChange={(e) => setAge(parseInt(e.target.value) || 0)} className="w-full px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 bg-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">{t.height}</label>
                <input type="number" min="100" max="230" value={heightCm} onChange={(e) => setHeightCm(parseFloat(e.target.value) || 0)} className="w-full px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 bg-white" />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">{t.actualWeight}</label>
                <input type="number" min="25" max="250" step="0.5" value={weightKg} onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)} className="w-full px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 bg-white" />
              </div>
            </div>

            {/* Anthropometric Badges */}
            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-center">
              <div>
                <span className="text-[10px] text-slate-500 block">{t.bmi}</span>
                <span className={`text-xs font-black ${isObese ? 'text-amber-600' : 'text-slate-800'}`}>{bmi} kg/m²</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">{t.ibw}</span>
                <span className="text-xs font-black text-slate-800">{ibw} kg</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">{isObese ? t.abw : t.baseWt}</span>
                <span className="text-xs font-black text-emerald-600">{activeWeight} kg</span>
              </div>
            </div>

            {isObese && (
              <div className="mt-2 text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{t.weightUsedNotice}</span>
              </div>
            )}
          </div>

          {/* Step 2: Clinical Condition */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-extrabold text-sm text-slate-800 mb-2 flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-rose-600" /> {t.step2Condition}
            </h3>

            <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">{t.clinicalPreset}</label>
            <select
              value={condition}
              onChange={(e) => handleConditionChange(e.target.value)}
              className="w-full text-xs font-bold p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="normal">{t.condNormal}</option>
              <option value="elderly">{t.condElderly}</option>
              <option value="diabetes">{t.condDiabetes}</option>
              <option value="icu">{t.condICU}</option>
              <option value="surgery">{t.condSurgery}</option>
              <option value="cancer">{t.condCancer}</option>
              <option value="ckd_pre">{t.condCKDPre}</option>
              <option value="dialysis">{t.condDialysis}</option>
              <option value="hepatic">{t.condHepatic}</option>
              <option value="gi">{t.condGI}</option>
              <option value="custom">{t.condCustom}</option>
            </select>
            <p className="-mt-1 mb-3 text-[11px] leading-snug text-slate-500" data-cond-source>
              <span className="font-bold">{t.sourceLabel}:</span> {t.condSrc[condition] || t.condSrc.custom}
            </p>

            {/* Target Energy & Protein sliders */}
            <div className="space-y-3 pt-1">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">{t.targetKcalKg}</span>
                  <span className="text-emerald-700 font-extrabold">{targetKcalKg} kcal/kg/d</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="45"
                  step="1"
                  value={targetKcalKg}
                  onChange={(e) => { setTargetKcalKg(parseInt(e.target.value)); setCondition('custom'); }}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">{t.targetProtKg}</span>
                  <span className="text-rose-700 font-extrabold">{targetProtKg} g/kg/d</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.05"
                  value={targetProtKg}
                  onChange={(e) => { setTargetProtKg(parseFloat(e.target.value)); setCondition('custom'); }}
                  className="w-full accent-rose-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Current Oral Intake */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-extrabold text-sm text-slate-800 mb-2 flex items-center gap-2">
              <ActivityIcon className="w-4 h-4 text-blue-600" /> {t.step3Intake}
            </h3>

            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span className="text-slate-600">{t.intakePercent}</span>
              <span className="text-blue-700 font-black">{dietIntakePct}% {dietIntakePct === 0 ? '(NPO)' : ''}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={dietIntakePct}
              onChange={(e) => setDietIntakePct(parseInt(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg mb-3"
            />

            {/* Deficit Summary Card */}
            <div className="bg-slate-900 text-white p-3 rounded-xl flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs border-b border-slate-700 pb-1.5">
                <span className="text-slate-400">{t.totalDailyNeeds}</span>
                <span className="font-bold">{totalDailyKcal} kcal | {totalDailyProt} g protein</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-slate-700 pb-1.5">
                <span className="text-slate-400">{t.intakeFromDiet}</span>
                <span className="font-bold text-slate-300">{intakeKcal} kcal | {intakeProt} g protein</span>
              </div>
              <div className="flex justify-between items-center text-xs pt-0.5">
                <span className="text-emerald-400 font-extrabold">{t.netDeficit}</span>
                <span className="font-black text-sm text-emerald-300">{deficitKcal} kcal | {deficitProt} g protein</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recommendations */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-emerald-600 text-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200">{t.step4Results}</span>
              <span className="text-xs bg-emerald-700/80 px-2 py-0.5 rounded-full font-bold">Target: {deficitKcal} kcal</span>
            </div>
            <h4 className="text-lg font-black">{deficitKcal > 0 ? `${deficitKcal} kcal & ${deficitProt} g protein to supplement` : 'Patient meets 100% requirements from current diet'}</h4>
            <p className="text-xs text-emerald-100 mt-1 leading-relaxed">{t.regimenNotice}</p>
          </div>

          {deficitKcal === 0 ? (
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center text-slate-500">
              <Check className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <p className="font-bold text-slate-700">{t.proteinSurplus}</p>
              <p className="text-xs text-slate-500 mt-1">Oral diet intake is meeting 100% of calculated requirements. Continue monitoring nutritional intake.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {matchedFormulas.map((med) => {
                // Calculate servings to meet deficitKcal
                const servingKcal = med.servingKcal || 250;
                const servingsNeededFloat = deficitKcal / servingKcal;
                const servingsRounded = Math.max(1, Math.round(servingsNeededFloat * 10) / 10);
                const formulaProtDelivered = Math.round(servingsRounded * med.servingProtein * 10) / 10;
                const protGap = Math.max(0, Math.round((deficitProt - formulaProtDelivered) * 10) / 10);

                // If powder, calculate total scoops/day
                const scoopsPerDay = med.form === 'powder' && med.scoopKcal ? Math.round(deficitKcal / med.scoopKcal) : null;

                return (
                  <div key={med.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-all">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <ProductPhoto id={med.id} name={med.name} form={med.form} color="#059669" className="w-12 h-12 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">{med.name}</h5>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">{med.company}</span>
                          </div>
                          <span className="text-xs text-slate-500 block mt-0.5">
                            {med.servingKcal} kcal & {med.servingProtein}g protein per {med.form.includes('liquid') ? 'can/bottle' : 'serving'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => { onClose(); onSelectFormula(med); }}
                        className="text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg transition-colors shrink-0"
                      >
                        {t.viewDetails}
                      </button>
                    </div>

                    {/* Prescription Calculation Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs mb-2.5">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">{t.servingsNeeded}</span>
                        <span className="font-black text-slate-800 text-sm">
                          {med.form.includes('liquid') ? `${servingsRounded} bottle/can/day` : `${servingsRounded} servings/day`}
                        </span>
                        {scoopsPerDay && <span className="text-[10px] text-slate-500 block">({scoopsPerDay} scoops/day)</span>}
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">{t.proteinDelivered}</span>
                        <span className="font-black text-emerald-700 text-sm">+{formulaProtDelivered} g / day</span>
                        <span className="text-[10px] text-slate-400 block">({Math.round((formulaProtDelivered / deficitProt) * 100)}% of deficit)</span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">{t.proteinGap}</span>
                        {protGap > 0 ? (
                          <div>
                            <span className="font-black text-rose-600 text-sm">Short by {protGap} g</span>
                            <span className="text-[10px] text-rose-500 block">Add protein modular</span>
                          </div>
                        ) : (
                          <span className="font-black text-emerald-600 text-xs flex items-center gap-1 mt-1">
                            <Check className="w-3.5 h-3.5" /> Met (100%+)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Modular recommendation banner if short on protein */}
                    {protGap > 0 && (
                      <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-2.5 text-xs text-amber-900 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                          <span className="truncate">
                            <strong>{t.addProteinSuppRec}:</strong> +{Math.ceil(protGap / 6)} scoops Beneprotein (6g/scoop) or {Math.ceil(protGap / 5)} scoops Fresubin Protein (5g/scoop)
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

// =====================================================================
// Component: Nitrogen Balance Calculator
// =====================================================================
const NitrogenBalanceModal = ({ t, onClose }) => {
  const [proteinIntake, setProteinIntake] = useState(65); // g/day
  const [uunMethod, setUunMethod] = useState('direct'); // 'direct' or 'conc'
  const [uunDirect, setUunDirect] = useState(12); // g/24hr
  const [uunConcMgDl, setUunConcMgDl] = useState(800); // mg/dL
  const [urineVolMl, setUrineVolMl] = useState(1500); // mL/24hr
  // Other nitrogen losses the clinician has measured (g N/day). No default amounts: the earlier fixed
  // add-ons for diarrhea, fistula, burns and dialysis had no source and were removed (Oct 2026).
  const [extraLoss, setExtraLoss] = useState(0);

  // Compute 24hr UUN in grams
  const uunGrams = useMemo(() => {
    if (uunMethod === 'direct') return uunDirect;
    // conc (mg/dL) * vol (mL) / 100,000 = grams
    return Math.round(((uunConcMgDl * urineVolMl) / 100000) * 10) / 10;
  }, [uunMethod, uunDirect, uunConcMgDl, urineVolMl]);

  // Nitrogen Balance result
  const result = useMemo(() => {
    return calculateNitrogenBalance(proteinIntake, uunGrams, extraLoss);
  }, [proteinIntake, uunGrams, extraLoss]);

  // Protein that would bring the balance to zero: -NB x 6.25 (arithmetic only; no target band is cited)
  const additionalProteinNeeded = useMemo(() => {
    if (result.nb >= 0) return 0;
    return Math.round(-result.nb * 6.25 * 10) / 10;
  }, [result.nb]);

  // Sign only: the earlier catabolism / anabolism bands had no source.
  const getStatus = (nb) => {
    if (nb < 0) return { text: t.nbStatusNegative, color: 'text-rose-700 bg-rose-50 border-rose-300', dot: 'bg-rose-600' };
    if (nb === 0) return { text: t.nbStatusZero, color: 'text-blue-800 bg-blue-50 border-blue-300', dot: 'bg-blue-500' };
    return { text: t.nbStatusPositive, color: 'text-emerald-800 bg-emerald-50 border-emerald-300', dot: 'bg-emerald-600' };
  };

  const status = getStatus(result.nb);

  return (
    <Modal
      title={t.nbTitle}
      sub={t.nbSub}
      onClose={onClose}
      wide={true}
      tone="bg-blue-50/70"
      icon={<ScaleIcon className="w-5 h-5 text-blue-600" />}
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-slate-500">{t.disclaimer}</span>
          <button onClick={onClose} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors">
            {t.close}
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left Column: Calculation Inputs */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <label className="text-xs font-bold text-slate-700 block mb-1">{t.nbProteinIntake}</label>
            <div className="flex items-center gap-3 mb-4">
              <input
                type="number"
                min="0"
                max="300"
                value={proteinIntake}
                onChange={(e) => setProteinIntake(parseFloat(e.target.value) || 0)}
                className="w-32 px-3 py-1.5 text-sm font-bold rounded-lg border border-slate-200 bg-white"
              />
              <span className="text-xs text-slate-500 font-medium">grams / day (Food + ONS + TPN)</span>
            </div>

            {/* UUN Input */}
            <label className="text-xs font-bold text-slate-700 block mb-1">{t.nbUunMethod}</label>
            <div className="flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 mb-3">
              <button onClick={() => setUunMethod('direct')} className={`flex-1 py-1 text-xs font-bold rounded-md transition-all ${uunMethod === 'direct' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}>{t.nbUunDirect}</button>
              <button onClick={() => setUunMethod('conc')} className={`flex-1 py-1 text-xs font-bold rounded-md transition-all ${uunMethod === 'conc' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}>{t.nbUunConcentration}</button>
            </div>

            {uunMethod === 'direct' ? (
              <div className="mb-4">
                <label className="text-xs font-semibold text-slate-600 block mb-1">{t.nbUunValue} (g/24hr)</label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  step="0.5"
                  value={uunDirect}
                  onChange={(e) => setUunDirect(parseFloat(e.target.value) || 0)}
                  className="w-32 px-3 py-1.5 text-sm font-bold rounded-lg border border-slate-200 bg-white"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">{t.nbUunConc}</label>
                  <input
                    type="number"
                    min="50"
                    max="3000"
                    value={uunConcMgDl}
                    onChange={(e) => setUunConcMgDl(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">{t.nbUrineVol}</label>
                  <input
                    type="number"
                    min="100"
                    max="6000"
                    step="50"
                    value={urineVolMl}
                    onChange={(e) => setUrineVolMl(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 bg-white"
                  />
                </div>
              </div>
            )}

            {/* Insensible Loss Info */}
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-600 mb-4">
              <strong>{t.nbInsensibleLoss}</strong>
              <p className="text-[11px] text-slate-500 mt-0.5">{t.nbInsensibleNote}</p>
            </div>

            {/* Other measured losses */}
            <label className="text-xs font-bold text-slate-700 block mb-1">{t.nbExtraLosses}</label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="50"
                step="0.5"
                value={extraLoss}
                onChange={(e) => setExtraLoss(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-32 px-3 py-1.5 text-sm font-bold rounded-lg border border-slate-200 bg-white"
                data-nb-extra
              />
              <span className="text-xs text-slate-500 font-medium">g N / day</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{t.nbExtraNote}</p>
          </div>
        </div>

        {/* Right Column: Visual Result & Anabolic Prescription */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
            <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider">{t.nbResultTitle}</h4>

            {/* Big Net Nitrogen Balance Value */}
            <div className={`p-4 rounded-xl border text-center ${status.color}`}>
              <span className="text-xs font-bold uppercase tracking-widest block opacity-75">{t.nbBalance}</span>
              <span className="text-4xl font-black block my-1">
                {result.nb > 0 ? `+${result.nb}` : result.nb} <span className="text-lg font-bold">g N / day</span>
              </span>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className={`w-2.5 h-2.5 rounded-full ${status.dot}`} />
                <span className="font-extrabold text-xs">{status.text}</span>
              </div>
            </div>

            {/* Formula Breakdown Matrix */}
            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">{t.nbIn}</span>
                <span className="text-base font-black text-slate-800">{result.nIn} g N/d</span>
                <span className="text-[10px] text-slate-500 block">({proteinIntake} g Prot ÷ 6.25)</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">{t.nbOut}</span>
                <span className="text-base font-black text-slate-800">{result.nOut} g N/d</span>
                <span className="text-[10px] text-slate-500 block">({uunGrams}g UUN + 4g + {extraLoss}g)</span>
              </div>
            </div>

            {/* Target Goal & Action Plan */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col gap-2">
              {additionalProteinNeeded > 0 ? (
                <div data-nb-deficit>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs text-rose-300 font-extrabold">{t.nbDeficitProtein}</span>
                    <span className="text-lg font-black text-rose-400">+{additionalProteinNeeded} g protein/day</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    {t.nbScoopsLine(Math.ceil(additionalProteinNeeded / 6), Math.ceil(additionalProteinNeeded / 5))}
                  </p>
                </div>
              ) : (
                <div className="text-xs text-emerald-300 font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.nbNoDeficit}</span>
                </div>
              )}
            </div>

            {/* Formula Reference */}
            <div className="text-[10px] text-slate-400 bg-slate-50 p-2.5 rounded-lg border border-slate-200 leading-snug" data-nb-source>
              {t.nbFormulaNote}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// =====================================================================
// Component: Protein Booster & Modulars Tool
// =====================================================================
const ProteinBoosterModal = ({ t, formulas, onClose }) => {
  const [extraProteinGoal, setExtraProteinGoal] = useState(20); // g/day
  const proteinSupps = useMemo(() => formulas.filter(f => f.isProteinSupp), [formulas]);

  return (
    <Modal
      title={t.pbTitle}
      sub={t.pbSub}
      onClose={onClose}
      wide={true}
      tone="bg-rose-50/70"
      icon={<FlameIcon className="w-5 h-5 text-rose-600" />}
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-slate-500">{t.electrolytesNotice}</span>
          <button onClick={onClose} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors">
            {t.close}
          </button>
        </div>
      }
    >
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <div>
          <label className="text-xs font-extrabold text-slate-800 uppercase block mb-1">{t.targetProtToAdd}</label>
          <span className="text-xs text-slate-500">Calculate exact scoops, calories, and electrolyte load across all available modular protein powders.</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="number"
            min="5"
            max="100"
            step="5"
            value={extraProteinGoal}
            onChange={(e) => setExtraProteinGoal(parseFloat(e.target.value) || 0)}
            className="w-24 px-3 py-1.5 text-base font-black rounded-lg border border-slate-300 bg-slate-50 text-rose-700 text-center"
          />
          <span className="text-xs font-bold text-slate-600">g protein</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {proteinSupps.map((supp) => {
          const protPerUnit = supp.servingProtein || 5;
          const unitsNeeded = Math.ceil(extraProteinGoal / protPerUnit);
          const unitKcal = supp.scoopKcal || supp.servingKcal;
          const totalAddedKcal = unitKcal ? Math.round(unitsNeeded * unitKcal) : null;
          const totalK = supp.k != null ? Math.round(unitsNeeded * supp.k * 10) / 10 : null;
          const totalP = supp.p != null ? Math.round(unitsNeeded * supp.p * 10) / 10 : null;
          const totalNa = supp.na != null ? Math.round(unitsNeeded * supp.na * 10) / 10 : null;

          return (
            <div key={supp.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-rose-300 transition-all">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <ProductPhoto id={supp.id} name={supp.name} form={supp.form} color="#e11d48" className="w-10 h-10 shrink-0" />
                    <div>
                      <h5 className="font-extrabold text-slate-800 text-sm leading-tight">{supp.name}</h5>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{supp.company}</span>
                    </div>
                  </div>
                  {supp.wheyIsolatePercent && (
                    <span className="text-[10px] font-black bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded border border-rose-200 shrink-0">
                      {supp.wheyIsolatePercent}% Isolate
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 mb-3">{supp.servingDesc}</p>

                {/* Dosing Calculation */}
                <div className="bg-rose-50/60 p-3 rounded-lg border border-rose-200 text-xs mb-3">
                  <div className="flex justify-between font-extrabold text-rose-900 mb-1">
                    <span>Dosage to add {extraProteinGoal}g:</span>
                    <span className="text-sm">{unitsNeeded} {supp.form === 'tablet' ? 'tablets' : supp.form === 'sachet' ? 'sachets' : 'scoops'} / day</span>
                  </div>
                  <div className="flex justify-between text-rose-700 text-[11px]">
                    <span>Calories added:</span>
                    <span className="font-bold">{totalAddedKcal === null ? 'NA kcal' : `+${totalAddedKcal} kcal`}</span>
                  </div>
                </div>

                {/* Electrolyte safety breakdown */}
                <div className="grid grid-cols-3 gap-1 text-center bg-slate-50 p-2 rounded-lg border border-slate-100 text-[10px]">
                  <div>
                    <span className="text-slate-400 block font-bold">K+ load</span>
                    <span className="font-bold text-slate-700">{totalK != null ? `${totalK} mg` : 'NA'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold">P load</span>
                    <span className="font-bold text-slate-700">{totalP != null ? `${totalP} mg` : 'NA'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold">Na+ load</span>
                    <span className="font-bold text-slate-700">{totalNa != null ? `${totalNa} mg` : 'NA'}</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100 italic leading-snug">
                {supp.notes.en}
              </p>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

// =====================================================================
// Component: Osmolality & Tolerance Guide
// =====================================================================
// Tolerance guide text (20 Oct 2026). Diarrhea and GRV: ASPEN/SCCM 2016 (D2a, D2b, D6, E4b and the
// rationale listing contributing factors). Refeeding: NICE CG32 recommendations 1.4.6-1.4.8 and table 2.
// The osmolality groups are this app's own display groups; examples use PMK osmolality values.
const OSMO_GUIDE = {
  en: {
    bandsTitle: 'Osmolality groups used in this app',
    bandsNote: 'These cut-offs only group the formulas for display and filtering; none of the cited guidelines defines them. Values are from the PMK table at the dilution shown on each product.',
    bands: [
      ['≤ 350 mOsm/kg', 'Group 1', 'Pan-enteral 270, Isocal 300, Jevity 304, Blendera-MF 320, Once Pro 320', 'bg-emerald-50 border-emerald-200 text-emerald-900'],
      ['351 – 500 mOsm/kg', 'Group 2', 'Peptamen 374, Ensure powder 418, Supportan 435, Vital Peptide 487', 'bg-blue-50 border-blue-200 text-blue-900'],
      ['> 500 mOsm/kg', 'Group 3', 'Ensure liquid 590, Aminoleban Oral 600, Oral Impact 623, Nepro HP liquid 735', 'bg-amber-50 border-amber-200 text-amber-900'],
    ],
    diaTitle: 'Diarrhea during enteral nutrition',
    dia: [
      'Do not stop enteral nutrition automatically for diarrhea; keep feeding while the cause is found.',
      'Look for contributors: medications (antibiotics, proton-pump inhibitors, prokinetics, glucose-lowering agents, NSAIDs, SSRIs, laxatives and sorbitol-containing preparations in particular), type and amount of fiber in the formula, formula osmolality, delivery mode, and contamination of the feed. Exclude C. difficile.',
      'Persistent diarrhea: consider a commercial mixed fiber-containing formula, or a soluble fiber supplement (e.g. pectin, FOS, inulin, guar gum) added to a standard formula. Avoid both soluble and insoluble fiber in patients at high risk of bowel ischemia or with severe dysmotility.',
      'Persistent diarrhea with suspected malabsorption, or no response to fiber: consider a small peptide formula (in this guide: Peptamen, Vital Peptide 1.5 kcal).',
    ],
    grvTitle: 'Gastric residual volume (GRV)',
    grv: [
      'Do not use GRVs as part of routine care to monitor ICU patients receiving EN.',
      'Where GRVs are still used, avoid holding EN for GRVs below 500 mL when there are no other signs of intolerance.',
    ],
    diaSrc: 'ASPEN/SCCM 2016 guideline for critically ill adults (D2a, D2b, D6, E4b).',
    rfTitle: 'Refeeding problems',
    rfRiskA: 'High risk: one or more of',
    rfA: ['BMI below 16 kg/m²', 'Unintentional weight loss over 15% in the last 3–6 months', 'Little or no nutritional intake for more than 10 days', 'Low potassium, phosphate or magnesium before feeding'],
    rfRiskB: 'or two or more of',
    rfB: ['BMI below 18.5 kg/m²', 'Unintentional weight loss over 10% in the last 3–6 months', 'Little or no nutritional intake for more than 5 days', 'History of alcohol abuse, or drugs including insulin, chemotherapy, antacids or diuretics'],
    rfDo: [
      'Start at a maximum of 10 kcal/kg/day and increase slowly to meet or exceed full needs by 4–7 days. In extreme cases (e.g. BMI below 14 kg/m² or negligible intake for more than 15 days) use only 5 kcal/kg/day and monitor cardiac rhythm continuously.',
      'Immediately before and during the first 10 days of feeding: oral thiamin 200–300 mg daily, vitamin B co strong 1–2 tablets three times a day (or full-dose daily IV vitamin B if necessary), and a balanced multivitamin / trace element supplement once daily.',
      'Unless pre-feeding plasma levels are high, give potassium (likely 2–4 mmol/kg/day), phosphate (0.3–0.6 mmol/kg/day) and magnesium (0.2 mmol/kg/day IV, 0.4 mmol/kg/day oral); correcting low levels before feeding is unnecessary.',
      'Restore circulatory volume and monitor fluid balance closely; check electrolytes daily while there is a risk of refeeding syndrome.',
      'People who have eaten little or nothing for more than 5 days: start at no more than 50% of requirements for the first 2 days.',
    ],
    rfSrc: 'NICE CG32, Nutrition support for adults (2006, updated 2017): recommendations 1.4.5–1.4.8 and table 2.',
  },
  th: {
    bandsTitle: 'กลุ่มออสโมลาลิตีที่ใช้ในแอปนี้',
    bandsNote: 'จุดตัดเหล่านี้ใช้จัดกลุ่มสูตรเพื่อแสดงผลและกรองเท่านั้น ไม่มีแนวทางที่อ้างอิงกำหนดไว้ ค่าเป็นของตาราง PMK ที่ความเข้มข้นตามที่ระบุในแต่ละผลิตภัณฑ์',
    bands: [
      ['≤ 350 mOsm/kg', 'กลุ่ม 1', 'Pan-enteral 270, Isocal 300, Jevity 304, Blendera-MF 320, Once Pro 320', 'bg-emerald-50 border-emerald-200 text-emerald-900'],
      ['351 – 500 mOsm/kg', 'กลุ่ม 2', 'Peptamen 374, Ensure ชนิดผง 418, Supportan 435, Vital Peptide 487', 'bg-blue-50 border-blue-200 text-blue-900'],
      ['> 500 mOsm/kg', 'กลุ่ม 3', 'Ensure ชนิดน้ำ 590, Aminoleban Oral 600, Oral Impact 623, Nepro HP ชนิดน้ำ 735', 'bg-amber-50 border-amber-200 text-amber-900'],
    ],
    diaTitle: 'ท้องเสียระหว่างให้อาหารทางสาย',
    dia: [
      'ไม่ควรหยุดอาหารทางสายโดยอัตโนมัติเมื่อท้องเสีย ให้อาหารต่อระหว่างหาสาเหตุ',
      'หาปัจจัยร่วม: ยา (โดยเฉพาะยาปฏิชีวนะ, PPI, prokinetics, ยาลดน้ำตาล, NSAIDs, SSRIs, ยาระบาย และยาที่มีซอร์บิทอล), ชนิดและปริมาณใยอาหารในสูตร, ออสโมลาลิตีของสูตร, วิธีการให้ และการปนเปื้อนของอาหาร ตรวจแยก C. difficile',
      'ท้องเสียต่อเนื่อง: พิจารณาสูตรที่มีใยอาหารผสม หรือเสริมใยอาหารละลายน้ำ (เช่น pectin, FOS, inulin, guar gum) ในสูตรมาตรฐาน หลีกเลี่ยงใยอาหารทั้งสองชนิดในผู้ป่วยที่เสี่ยงลำไส้ขาดเลือดสูงหรือลำไส้เคลื่อนไหวผิดปกติรุนแรง',
      'ท้องเสียต่อเนื่องร่วมกับสงสัยการดูดซึมผิดปกติ หรือไม่ตอบสนองต่อใยอาหาร: พิจารณาสูตรเปปไทด์ (ในคู่มือนี้: Peptamen, Vital Peptide 1.5 kcal)',
    ],
    grvTitle: 'ปริมาณอาหารตกค้างในกระเพาะ (GRV)',
    grv: [
      'ไม่ควรใช้ GRV เป็นการติดตามประจำในผู้ป่วย ICU ที่ได้รับอาหารทางสาย',
      'ถ้ายังใช้ GRV อยู่ ไม่ควรหยุดให้อาหารเมื่อ GRV ต่ำกว่า 500 มล. หากไม่มีอาการอื่นของการทนอาหารไม่ได้',
    ],
    diaSrc: 'แนวทาง ASPEN/SCCM 2016 สำหรับผู้ป่วยวิกฤตผู้ใหญ่ (D2a, D2b, D6, E4b)',
    rfTitle: 'ภาวะ Refeeding',
    rfRiskA: 'เสี่ยงสูง: มีข้อใดข้อหนึ่ง',
    rfA: ['BMI ต่ำกว่า 16 กก./ม.²', 'น้ำหนักลดโดยไม่ตั้งใจมากกว่า 15% ใน 3–6 เดือน', 'แทบไม่ได้รับอาหารนานกว่า 10 วัน', 'โพแทสเซียม ฟอสเฟต หรือแมกนีเซียมต่ำก่อนเริ่มให้อาหาร'],
    rfRiskB: 'หรือมีตั้งแต่ 2 ข้อขึ้นไป',
    rfB: ['BMI ต่ำกว่า 18.5 กก./ม.²', 'น้ำหนักลดโดยไม่ตั้งใจมากกว่า 10% ใน 3–6 เดือน', 'แทบไม่ได้รับอาหารนานกว่า 5 วัน', 'ประวัติดื่มสุรา หรือใช้ยา เช่น อินซูลิน ยาเคมีบำบัด ยาลดกรด หรือยาขับปัสสาวะ'],
    rfDo: [
      'เริ่มไม่เกิน 10 kcal/กก./วัน แล้วค่อยๆ เพิ่มให้ถึงความต้องการเต็มภายใน 4–7 วัน กรณีรุนแรงมาก (เช่น BMI ต่ำกว่า 14 หรือแทบไม่ได้กินนานกว่า 15 วัน) ใช้เพียง 5 kcal/กก./วัน และติดตามคลื่นหัวใจต่อเนื่อง',
      'ทันทีก่อนและระหว่าง 10 วันแรก: thiamin ทางปาก 200–300 มก./วัน, vitamin B co strong 1–2 เม็ด วันละ 3 ครั้ง (หรือวิตามินบีทางหลอดเลือดขนาดเต็มวันละครั้งถ้าจำเป็น) และวิตามินรวม/แร่ธาตุวันละครั้ง',
      'ถ้าระดับในเลือดก่อนให้อาหารไม่สูง ให้โพแทสเซียม (ประมาณ 2–4 mmol/กก./วัน) ฟอสเฟต (0.3–0.6 mmol/กก./วัน) และแมกนีเซียม (0.2 mmol/กก./วัน ทางหลอดเลือด, 0.4 mmol/กก./วัน ทางปาก) ไม่จำเป็นต้องแก้ระดับต่ำก่อนเริ่มให้อาหาร',
      'ฟื้นฟูปริมาตรเลือด และติดตามสมดุลสารน้ำใกล้ชิด ตรวจเกลือแร่ทุกวันขณะที่ยังเสี่ยง refeeding',
      'ผู้ที่แทบไม่ได้กินนานกว่า 5 วัน: เริ่มไม่เกิน 50% ของความต้องการใน 2 วันแรก',
    ],
    rfSrc: 'NICE CG32 Nutrition support for adults (2006, ปรับปรุง 2017): ข้อ 1.4.5–1.4.8 และตาราง 2',
  },
};

const OsmolalityGuideModal = ({ t, onClose }) => {
  const G = t.isTh ? OSMO_GUIDE.th : OSMO_GUIDE.en;
  return (
    <Modal
      title={t.osmoTitle}
      sub={t.osmoSub}
      onClose={onClose}
      wide={true}
      tone="bg-cyan-50/70"
      icon={<DropletIcon className="w-5 h-5 text-cyan-600" />}
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-slate-500">{t.disclaimer}</span>
          <button onClick={onClose} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors">
            {t.close}
          </button>
        </div>
      }
    >
      {/* Osmolality groups (display only) */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3" data-osmo-bands>
        <h3 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider">{G.bandsTitle}</h3>
        <p className="text-[11px] text-slate-500 leading-snug">{G.bandsNote}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {G.bands.map(([range, name, examples, tone]) => (
            <div key={range} className={`p-3 rounded-xl border ${tone}`}>
              <span className="text-[10px] font-black uppercase tracking-wider">{range}</span>
              <h4 className="font-bold text-sm mt-0.5">{name}</h4>
              <p className="mt-2 text-[10px] bg-white/70 p-1.5 rounded font-bold break-words">{examples}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Diarrhea and GRV: ASPEN/SCCM 2016 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-xs" data-osmo-diarrhea>
          <h4 className="font-extrabold text-sm mb-2 text-rose-700 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" /> {G.diaTitle}
          </h4>
          <ol className="list-decimal pl-4 space-y-1.5 text-slate-600 leading-relaxed">
            {G.dia.map((x, i) => <li key={i}>{x}</li>)}
          </ol>
          <h5 className="font-extrabold text-xs mt-3 mb-1 text-slate-700">{G.grvTitle}</h5>
          <ul className="list-disc pl-4 space-y-1 text-slate-600 leading-relaxed">
            {G.grv.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
          <p className="mt-2 text-[10px] text-slate-400 leading-snug"><span className="font-bold">{t.sourceLabel}:</span> {G.diaSrc}</p>
        </div>

        {/* Refeeding: NICE CG32 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-xs" data-osmo-refeeding>
          <h4 className="font-extrabold text-sm mb-2 text-indigo-700 flex items-center gap-1.5">
            <ShieldPlus className="w-4 h-4 text-indigo-600 shrink-0" /> {G.rfTitle}
          </h4>
          <p className="font-bold text-slate-700">{G.rfRiskA}</p>
          <ul className="list-disc pl-4 space-y-0.5 text-slate-600 leading-relaxed mb-1.5">{G.rfA.map((x, i) => <li key={i}>{x}</li>)}</ul>
          <p className="font-bold text-slate-700">{G.rfRiskB}</p>
          <ul className="list-disc pl-4 space-y-0.5 text-slate-600 leading-relaxed mb-2">{G.rfB.map((x, i) => <li key={i}>{x}</li>)}</ul>
          <ul className="list-disc pl-4 space-y-1.5 text-slate-600 leading-relaxed">{G.rfDo.map((x, i) => <li key={i}>{x}</li>)}</ul>
          <p className="mt-2 text-[10px] text-slate-400 leading-snug"><span className="font-bold">{t.sourceLabel}:</span> {G.rfSrc}</p>
        </div>
      </div>
    </Modal>
  );
};

// =====================================================================
// Component: Formula Detail Modal
// =====================================================================
const FormulaDetailModal = ({ formula, t, onClose, isCompared, onToggleCompare }) => {
  if (!formula) return null;
  const osmInfo = getOsmolalityBadge(formula.osmolality);

  return (
    <Modal
      title={formula.name}
      sub={`${formula.company} • ${t[`cat${formula.category.replace(/(^|_)([a-z])/g, (m, u, c) => c.toUpperCase())}`] || formula.category}`}
      onClose={onClose}
      wide={true}
      tone="bg-slate-50"
      icon={<ProductPhoto id={formula.id} name={formula.name} form={formula.form} color="#0284c7" className="w-8 h-8" />}
      footer={
        <div className="flex justify-between items-center w-full">
          <button
            onClick={() => onToggleCompare(formula)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              isCompared
                ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
            }`}
          >
            <CompareIcon className="w-4 h-4" />
            {isCompared ? t.compareRemove : t.compareAdd}
          </button>
          <button onClick={onClose} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors">
            {t.close}
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left Column: Macronutrients & Caloric Breakdown */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center">
            <div className="w-full flex justify-center py-2.5 mb-3 bg-slate-50/70 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <ProductPhoto id={formula.id} name={formula.name} form={formula.form} color="#0284c7" className="w-28 h-28 sm:w-32 sm:h-32" />
            </div>
            <p className="-mt-2 mb-2 text-[10px] text-slate-400 dark:text-slate-500 text-center" data-photo-source>
              {PHOTO_PAGE[formula.id] ? (t.isTh ? `ภาพ: ตาราง PMK (update 3/2024) หน้า ${PHOTO_PAGE[formula.id]}` : `Photo: PMK table (update 3/2024), page ${PHOTO_PAGE[formula.id]}`) : (t.isTh ? 'ไม่มีภาพที่มีแหล่งอ้างอิง' : 'No referenced photo')}
            </p>

            <div className="w-full">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">{t.caloricDist}</h4>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-rose-600 dark:text-rose-400">Protein: {formula.pcfRatio ? formula.pcfRatio[0] + '%' : 'NA'}</span>
                <span className="text-amber-600 dark:text-amber-400">Carb: {formula.pcfRatio ? formula.pcfRatio[1] + '%' : 'NA'}</span>
                <span className="text-sky-600 dark:text-sky-400">Fat: {formula.pcfRatio ? formula.pcfRatio[2] + '%' : 'NA'}</span>
              </div>
              <PcfBar pcf={formula.pcfRatio} className="h-3 mb-3" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-center bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full">
              <div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-bold">{t.serving}</span>
                <span className="font-black text-slate-800 dark:text-slate-100 text-sm">{kcalText(formula.servingKcal)}</span>
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold block">{formula.servingProtein} g protein</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-bold">{t.proteinPer1000}</span>
                <span className="font-black text-rose-700 dark:text-rose-400 text-sm">{formula.proteinPer1000Kcal ?? 'NA'} g</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 block">{formula.gi ? `GI = ${formula.gi}` : 'GI NA'}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 w-full">
              <span className="font-bold block text-slate-700 dark:text-slate-200 mb-0.5">Serving Preparation:</span>
              <p className="leading-snug">{formula.servingDesc}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-xs space-y-2.5">
            <div>
              <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] block">{t.proteinSources}</span>
              <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">{formula.proteinSource}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] block">{t.fatSources}</span>
              <span className="font-medium text-slate-700 dark:text-slate-200">{formula.fatSource}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] block">{t.fiberContent}</span>
              <span className="font-medium text-slate-700 dark:text-slate-200">{formula.fiberDetails}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] block">{t.osmolalityLabel}</span>
              <span className={`inline-block px-2 py-0.5 mt-0.5 rounded text-xs font-bold border ${osmInfo.tone}`}>
                {osmInfo.label}{formula.dilution ? ` (${formula.dilution})` : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Micronutrients, Clinical Indications & Regulatory Registration */}
        <div className="md:col-span-7 flex flex-col gap-4">
          {/* Micronutrients 8-Grid */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">{formula.isProteinSupp ? t.micronutrientsTitleUnit : t.micronutrientsTitle}</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Sodium (Na)</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.na != null ? `${formula.na} mg` : 'NA'}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Potassium (K)</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.k != null ? `${formula.k} mg` : 'NA'}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Phosphorus (P)</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.p != null ? `${formula.p} mg` : 'NA'}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Calcium (Ca)</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.ca != null ? `${formula.ca} mg` : 'NA'}</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Magnesium (Mg)</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.mg != null ? `${formula.mg} mg` : 'NA'}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Vitamin A</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.vitA != null ? `${formula.vitA} IU` : 'NA'}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Vitamin C</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.vitC != null ? `${formula.vitC} mg` : 'NA'}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Trace Elements</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{formula.zn != null ? `Zn ${formula.zn}mg` : 'Complete'}</span>
              </div>
            </div>
          </div>

          {/* Clinical Indications */}
          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 p-4 rounded-xl text-emerald-950 dark:text-emerald-100 text-xs">
            <h4 className="font-extrabold text-sm text-emerald-900 dark:text-emerald-300 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> {t.clinicalIndications}
            </h4>
            <p className="leading-relaxed mt-1 text-slate-700 dark:text-emerald-200/90">{formula.notes.en}</p>
            <p className="leading-relaxed mt-2 text-emerald-800 dark:text-emerald-300 font-medium">{formula.notes.th}</p>
          </div>

          {/* Country Registration & Regulatory Status Section */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-xs space-y-2.5" data-detail-reg>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <GlobeIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {t.detailReg}
              </h4>
              <span className="text-[10px] font-bold text-slate-400">
                {LABEL_REGIONS.filter(r => statusIn(formula, r) === 'current').length} / 5 {t?.isTh ? 'ประเทศที่มีทะเบียนปัจจุบัน' : 'with a current record'}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              {LABEL_REGIONS.map(r => {
                const st = statusIn(formula, r);
                const holder = st === 'unknown' ? null : holderIn(formula, r, t);
                const src = regSource(formula, r, t);
                const stLabel = t.thRegOpts[st];
                const stBadge = st === 'current'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                  : st === 'past'
                  ? 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800'
                  : 'bg-slate-50 text-slate-400 border-slate-200 dark:bg-slate-800/80 dark:text-slate-500 dark:border-slate-700';

                return (
                  <div
                    key={r}
                    className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-1 sm:gap-x-2 py-2 px-3 rounded-lg border border-slate-100 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-800/50"
                    data-detail-country={r}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <StatusChip med={formula} r={r} t={t} />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-xs whitespace-nowrap">
                        {t.countryNames[r]}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap ${stBadge}`}>
                        {stLabel}
                      </span>
                    </div>
                    {holder ? (
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 text-left sm:text-right min-w-0">
                        <span className="text-slate-400 font-medium mr-1 text-[10px]">{t.holderLabel}:</span>
                        <strong className="text-slate-700 dark:text-slate-200">{holder}</strong>
                      </div>
                    ) : null}
                    <p className="sm:basis-full text-[10px] leading-snug text-slate-500 dark:text-slate-400 break-words min-w-0" data-reg-source={r}>
                      <span className="font-bold">{t.sourceLabel}:</span>{' '}
                      {src.url
                        ? <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline text-emerald-700 dark:text-emerald-400 hover:text-emerald-900">{src.text}</a>
                        : <span className="italic">{src.text}</span>}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// =====================================================================
// Component: Formula Comparison Modal (Side-by-side)
// =====================================================================
const CompareModal = ({ list, t, onClose, onRemove, countries = ['th'], showHolder = true }) => {
  if (!list || list.length === 0) return null;

  return (
    <Modal
      title={t.compareTitle}
      sub={`${list.length} formulas selected`}
      onClose={onClose}
      wide={true}
      tone="bg-indigo-50/70"
      icon={<CompareIcon className="w-5 h-5 text-indigo-600" />}
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-slate-500">{t.disclaimer}</span>
          <button onClick={onClose} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors">
            {t.close}
          </button>
        </div>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="p-3 bg-slate-100 text-slate-500 uppercase font-extrabold text-[10px] w-36">{t.compParameter}</th>
              {list.map(med => (
                <th key={med.id} className="p-3 bg-white border-l border-slate-200 min-w-[200px] align-top">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <ProductPhoto id={med.id} name={med.name} form={med.form} color="#4f46e5" className="w-10 h-10 shrink-0" />
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 leading-tight">{med.name}</h4>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">{med.company}</span>
                              <CountryLines med={med} t={t} regions={countries} showHolder={showHolder} listRow className="text-[11px] mt-1" />
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(med)}
                      data-remove-compare
                      aria-label="Remove from comparison"
                      className="text-slate-400 hover:text-rose-600 p-1 rounded-full transition-colors shrink-0 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.caloricDist}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200">
                  <div className="text-[11px] font-bold mb-1">{med.pcfRatio ? `P ${med.pcfRatio[0]}% : C ${med.pcfRatio[1]}% : F ${med.pcfRatio[2]}%` : 'P:C:F NA'}</div>
                  <PcfBar pcf={med.pcfRatio} className="h-2 w-32" />
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.compProteinKcal}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200 font-black text-rose-700 text-sm">
                  {med.proteinPer1000Kcal ?? 'NA'} g
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.compEnergyDensity}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200">
                  <span className="font-bold text-slate-800">{kcalText(med.servingKcal)}</span> ({med.servingProtein}g protein)
                  <span className="block text-[10px] text-slate-400 mt-0.5">{med.servingDesc}</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.compProteinSource}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200 font-semibold text-slate-700">
                  {med.proteinSource}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.compFatSource}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200 text-slate-600">
                  {med.fatSource}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.compFiber}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200">
                  {med.hasFiber ? <span className="font-bold text-emerald-700">{med.fiberDetails}</span> : <span className="text-slate-400">None</span>}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.compOsmolality}</td>
              {list.map(med => {
                const b = getOsmolalityBadge(med.osmolality);
                return (
                  <td key={med.id} className="p-3 border-l border-slate-200">
                    <span className={`inline-block px-1.5 py-0.5 rounded text-[11px] font-bold border ${b.tone}`}>
                      {b.label}
                    </span>
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.compElectrolytes}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200 text-[11px] space-y-0.5">
                  <div>Na: <strong className="text-slate-800">{med.na ?? 'NA'} mg</strong></div>
                  <div>K: <strong className="text-slate-800">{med.k ?? 'NA'} mg</strong></div>
                  <div>P: <strong className="text-slate-800">{med.p ?? 'NA'} mg</strong></div>
                  <div className="text-[10px] text-slate-400">{med.isProteinSupp ? (t.isTh ? 'ต่อช้อน/ซอง/เม็ด' : 'per scoop/sachet/tablet') : '/1,000 kcal'}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 bg-slate-50 font-bold text-slate-600">{t.clinicalIndications}</td>
              {list.map(med => (
                <td key={med.id} className="p-3 border-l border-slate-200 text-[11px] text-slate-600 leading-snug">
                  {med.notes.en}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

// =====================================================================
// Component: Update Changelog Modal
// =====================================================================
const ChangelogModal = ({ t, lang, onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true" aria-label={t.changelogTitle}>
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded-xl">
              <HistoryIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">{t.changelogTitle}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.changelogSub}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900">
          {changelogData.map((log, idx) => {
            const lt = lang === 'th' ? CHANGELOG_TH[log.version] : null;
            const feats = lt ? lt.features : log.features;
            const fixes = lt ? (lt.improvements || []) : (log.improvements || []);
            return (
              <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 shadow-sm relative">
                {idx === 0 && (
                  <div className="absolute top-0 right-0 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-widest">
                    {t.latest}
                  </div>
                )}
                <div className="flex items-baseline justify-between mb-3 border-b border-slate-100 dark:border-slate-700 pb-2">
                  <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100">{log.version}</h3>
                  <span className="text-xs font-bold text-slate-400">{log.date}</span>
                </div>

                {feats && feats.length > 0 && (
                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> {t.newFeatures}
                    </span>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-5 list-disc leading-relaxed">
                      {feats.map((feat, i) => <li key={i}>{feat}</li>)}
                    </ul>
                  </div>
                )}

                {fixes && fixes.length > 0 && (
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> {t.improvements}
                    </span>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-5 list-disc leading-relaxed">
                      {fixes.map((fix, i) => <li key={i}>{fix}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// <donate>
// Bedside UI donation button + PromptPay QR pop-up (source: shared/donate/Donate.jsx; installed by shared/donate/install.js).
// Self-contained: own open state, own Escape handling (it closes only itself), pop-up rendered in a portal so no parent
// stacking context can hide it. Needs React hooks (useState, useEffect) and ReactDOM in scope. Usage: <DonateButton isTh={lang === 'th'} />
const DONATE = {
  qr: 'data:image/jpeg;base64,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n/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8qOK/4U98Pv8AoSPDn/gqh/8AiaP+FPfD7/oSPDn/AIKof/ia7Wij2tT+Z/eHsqf8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',
  en: {
    btn: 'Donate', title: 'Support this guide', close: 'Close', alt: 'PromptPay QR code for donations',
    intro: 'This guide is free to use. If it helps your practice, you can support its development by scanning this PromptPay QR code with your banking app.',
    scan: 'Scan with a Thai banking app (PromptPay / Thai QR Payment).',
    note: 'Donations are voluntary and do not change the content of the guide.',
  },
  th: {
    btn: 'สนับสนุน', title: 'สนับสนุนคู่มือนี้', close: 'ปิด', alt: 'QR พร้อมเพย์สำหรับสนับสนุนผู้พัฒนา',
    intro: 'คู่มือนี้ใช้ได้ฟรี หากเป็นประโยชน์ต่อการทำงาน สามารถสนับสนุนการพัฒนาได้โดยสแกน QR พร้อมเพย์นี้ด้วยแอปธนาคาร',
    scan: 'สแกนด้วยแอปธนาคารของไทย (พร้อมเพย์ / Thai QR Payment)',
    note: 'การสนับสนุนเป็นความสมัครใจ และไม่มีผลต่อเนื้อหาของคู่มือ',
  },
};
const DonateButton = ({ isTh = false, className = '' }) => {
  const [open, setOpen] = useState(false);
  const d = DONATE[isTh ? 'th' : 'en'];
  useEffect(() => {
    if (!open) return;
    // capture phase: the page's own Escape handler never sees this key press, so only this pop-up closes
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); setOpen(false); } };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [open]);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} title={d.title} aria-label={d.title} aria-haspopup="dialog" data-donate-btn
        className={`text-[10px] font-bold text-slate-500 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all cursor-pointer ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-rose-500" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></svg>
        <span className="hidden sm:inline">{d.btn}</span>
      </button>
      {open && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }} data-donate-modal>
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true" aria-label={d.title}>
            <div className="flex items-center justify-between gap-3 p-4 border-b border-slate-100 bg-slate-50 rounded-t-2xl shrink-0">
              <h2 className="text-base font-extrabold text-slate-800 leading-tight flex items-center gap-2 min-w-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-rose-500 shrink-0" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></svg>
                <span className="break-words min-w-0">{d.title}</span>
              </h2>
              <button type="button" onClick={() => setOpen(false)} className="p-2 -m-1 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors shrink-0" aria-label={d.close}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-4 flex-grow overflow-y-auto flex flex-col items-center gap-3 bg-white">
              <p className="text-xs text-slate-600 leading-relaxed text-center">{d.intro}</p>
              {/* the QR keeps a white card in dark mode so it scans reliably */}
              <div className="light-lock rounded-xl border border-slate-200 bg-white p-1.5 max-w-full">
                <img src={DONATE.qr} alt={d.alt} className="block mx-auto w-auto max-w-full rounded-lg" style={{ maxHeight: '52vh' }} data-donate-qr />
              </div>
              <p className="text-[11px] font-semibold text-slate-600 text-center">{d.scan}</p>
              <p className="text-[11px] text-slate-500 leading-snug text-center">{d.note}</p>
            </div>
            <div className="flex items-center justify-end p-3 border-t border-slate-100 shrink-0">
              <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition-colors">{d.close}</button>
            </div>
          </div>
        </div>, document.body)}
    </>
  );
};
// </donate>

// =====================================================================
// Component: Symbols & Clinical Key Modal (Legend)
// =====================================================================
// Key window text (20 Oct 2026): definitions only, or statements with the source named.
const LEGEND_TEXT = {
  en: {
    catNote: 'Categories follow the section headings of the PMK table (standard polymeric, disease specific, immune-modulating, semi-elemental, protein supplement). Each product\'s registered purpose is in its notes.',
    polyT: 'Standard polymeric', polyD: 'PMK section "Standard Polymeric Formula".',
    dmT: 'Diabetes', dmD: 'PMK "Disease Specific Formula", diabetes products; GI values as printed in the table.',
    rpT: 'Renal, pre-dialysis', rpD: 'PMK "Disease Specific Formula"; registered for pre-dialysis patients (Once Renal). KDOQI 2020 protein for CKD 3–5 not on dialysis: 0.55–0.60 g/kg/day.',
    rdT: 'Renal, dialysis', rdD: 'PMK "Disease Specific Formula"; registered for dialysis patients (Nepro HP, Once Dialyze). KDOQI 2020 protein on dialysis: 1.0–1.2 g/kg/day.',
    hepT: 'Hepatic', hepD: 'PMK "Disease Specific Formula"; registered for patients with hepatic impairment (Aminoleban Oral; BCAA as given in the table).',
    immT: 'Immune-modulating', immD: 'PMK section "Immune-Modulating Formula" (arginine, nucleotides, fish oil or EPA as listed per product).',
    pepT: 'Semi-elemental', pepD: 'PMK section "Semi-elemental formula" (whey protein hydrolysate).',
    modT: 'Protein supplements', modD: 'PMK section "Other product: Protein supplement"; values are per scoop, sachet or tablet, not per 1,000 kcal.',
    pcfT: 'Caloric distribution', pcfD: 'Percent of energy from protein : carbohydrate : fat, as printed in the PMK table.',
    giT: 'Glycemic index', giD: 'As printed in the PMK table. The "Low GI" filter shows products with a printed GI of 45 or less (an app cut-off).',
    calcT: 'Calculated', calcD: 'Worked out by the app from table values (e.g. fiber per can converted to per 1,000 kcal).',
    naT: 'Not available', naD: 'The source gives no value; the app does not estimate one.',
    osmD: 'App display group only (no cited guideline defines these cut-offs). Osmolality values come from the PMK table.',
    osm1T: 'Group 1 (≤ 350 mOsm/kg)', osm2T: 'Group 2 (351–500 mOsm/kg)', osm3T: 'Group 3 (> 500 mOsm/kg)',
    mctT: 'Medium-chain triglyceride oil', mctD: 'Share of energy as given in the PMK table. The "MCT oil" filter shows products with 5% or more (an app cut-off).',
    epaT: 'Omega-3 fatty acids', epaD: 'Fish oil, EPA and DHA amounts as given in the PMK table.',
    fibT: 'Soluble fiber', fibD: 'ASPEN/SCCM 2016: soluble fiber (e.g. pectin, FOS, inulin, guar gum) is fermented to short-chain fatty acids, which stimulate colonocyte uptake of water and electrolytes.',
  },
  th: {
    catNote: 'หมวดหมู่ตามหัวข้อในตาราง PMK (สูตรมาตรฐาน, สูตรเฉพาะโรค, สูตรเสริมภูมิคุ้มกัน, สูตรเปปไทด์, โปรตีนเสริม) วัตถุประสงค์ตามทะเบียนของแต่ละผลิตภัณฑ์อยู่ในหมายเหตุ',
    polyT: 'สูตรมาตรฐาน', polyD: 'หัวข้อ "Standard Polymeric Formula" ในตาราง PMK',
    dmT: 'เบาหวาน', dmD: 'หัวข้อ "Disease Specific Formula" กลุ่มเบาหวาน ค่า GI ตามที่ตารางระบุ',
    rpT: 'โรคไตก่อนล้างไต', rpD: 'หัวข้อ "Disease Specific Formula" ขึ้นทะเบียนสำหรับผู้ป่วยก่อนล้างไต (Once Renal) KDOQI 2020: โปรตีนในโรคไตระยะ 3–5 ที่ยังไม่ล้างไต 0.55–0.60 ก./กก./วัน',
    rdT: 'โรคไตที่ล้างไต', rdD: 'หัวข้อ "Disease Specific Formula" ขึ้นทะเบียนสำหรับผู้ป่วยล้างไต (Nepro HP, Once Dialyze) KDOQI 2020: โปรตีนในผู้ล้างไต 1.0–1.2 ก./กก./วัน',
    hepT: 'โรคตับ', hepD: 'หัวข้อ "Disease Specific Formula" ขึ้นทะเบียนสำหรับผู้ป่วยโรคตับ (Aminoleban Oral; ปริมาณ BCAA ตามตาราง)',
    immT: 'สูตรเสริมภูมิคุ้มกัน', immD: 'หัวข้อ "Immune-Modulating Formula" ในตาราง PMK (arginine, nucleotides, น้ำมันปลา หรือ EPA ตามที่ระบุในแต่ละผลิตภัณฑ์)',
    pepT: 'สูตรเปปไทด์', pepD: 'หัวข้อ "Semi-elemental formula" ในตาราง PMK (whey protein hydrolysate)',
    modT: 'โปรตีนเสริม', modD: 'หัวข้อ "Other product: Protein supplement" ค่าเป็นต่อช้อน ซอง หรือเม็ด ไม่ใช่ต่อ 1,000 kcal',
    pcfT: 'สัดส่วนพลังงาน', pcfD: 'ร้อยละของพลังงานจากโปรตีน : คาร์โบไฮเดรต : ไขมัน ตามตาราง PMK',
    giT: 'ดัชนีน้ำตาล', giD: 'ตามที่ตาราง PMK ระบุ ตัวกรอง "Low GI" แสดงผลิตภัณฑ์ที่มี GI ไม่เกิน 45 (เกณฑ์ของแอป)',
    calcT: 'คำนวณ', calcD: 'แอปคำนวณจากค่าในตาราง (เช่น แปลงใยอาหารต่อกระป๋องเป็นต่อ 1,000 kcal)',
    naT: 'ไม่มีข้อมูล', naD: 'แหล่งข้อมูลไม่ได้ระบุค่า และแอปไม่ประมาณค่าให้',
    osmD: 'เป็นกลุ่มสำหรับแสดงผลของแอปเท่านั้น (ไม่มีแนวทางที่อ้างอิงกำหนดจุดตัดนี้) ค่าออสโมลาลิตีมาจากตาราง PMK',
    osm1T: 'กลุ่ม 1 (≤ 350 mOsm/kg)', osm2T: 'กลุ่ม 2 (351–500 mOsm/kg)', osm3T: 'กลุ่ม 3 (> 500 mOsm/kg)',
    mctT: 'น้ำมัน MCT', mctD: 'สัดส่วนพลังงานตามตาราง PMK ตัวกรอง "MCT" แสดงผลิตภัณฑ์ที่มีตั้งแต่ 5% (เกณฑ์ของแอป)',
    epaT: 'กรดไขมันโอเมก้า 3', epaD: 'ปริมาณน้ำมันปลา EPA และ DHA ตามตาราง PMK',
    fibT: 'ใยอาหารละลายน้ำ', fibD: 'ASPEN/SCCM 2016: ใยอาหารละลายน้ำ (เช่น pectin, FOS, inulin, guar gum) ถูกหมักเป็นกรดไขมันสายสั้น ซึ่งกระตุ้นการดูดซึมน้ำและเกลือแร่ของเซลล์ลำไส้ใหญ่',
  },
};

const LegendModal = ({ t, onClose }) => {
  const L = t.isTh ? LEGEND_TEXT.th : LEGEND_TEXT.en;
  const section = (title, children, attrs = {}) => (
    <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-3 sm:p-4" {...attrs}>
      <h3 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{title}</h3>
      <div className="flex flex-col gap-1.5">{children}</div>
    </section>
  );

  const row = (badge, title, desc, key) => (
    <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2.5 py-1.5 border-b border-slate-200/60 dark:border-slate-700/60 last:border-b-0 text-xs">
      <div className="shrink-0 pt-0.5">{badge}</div>
      <div className="min-w-0 flex-1">
        <span className="font-bold text-slate-800 dark:text-slate-100 mr-1.5">{title}:</span>
        <span className="text-slate-600 dark:text-slate-400 leading-snug">{desc}</span>
      </div>
    </div>
  );

  const chip = (cls, text) => (
    <span className={`text-[10px] font-bold rounded border px-1.5 py-0.5 whitespace-nowrap inline-block ${cls}`}>
      {text}
    </span>
  );

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true" aria-label={t.legendTitle}>
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 rounded-xl">
              <InfoIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">{t.legendTitle}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.legendSub}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 flex-grow overflow-y-auto flex flex-col gap-4 bg-white dark:bg-slate-900">
          {section(t.legendReg, <>
            {row(chip(COUNTRY_COLORS.th.chip, t.countryCodes.th), t.thRegOpts.current, t.legendRegNow, 'reg-now')}
            {row(chip('border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300', `${t.countryCodes.th} †`), t.thRegOpts.past, t.legendRegPast, 'reg-past')}
            {row(chip('border-dashed border-slate-300 text-slate-500 bg-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400', `${t.countryCodes.th} ?`), t.thRegOpts.unknown, t.legendRegUnknown, 'reg-unknown')}
            {row(
              <div className="flex flex-wrap gap-1">
                {LABEL_REGIONS.map(r => (
                  <span key={r} className={`text-[10px] font-bold rounded border px-1.5 py-0.5 ${COUNTRY_COLORS[r].chip}`}>
                    {t.countryCodes[r]}
                  </span>
                ))}
              </div>,
              t.countriesLabel,
              t.legendCountries,
              'reg-countries'
            )}
          </>, { 'data-legend-reg': '' })}

          {section(t.legendCat, <>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug" data-legend-cat-note>{L.catNote}</p>
            {row(chip('bg-emerald-50 text-emerald-800 border-emerald-300', t.catPolymeric), L.polyT, L.polyD, 'poly')}
            {row(chip('bg-blue-50 text-blue-800 border-blue-300', t.catDiabetes), L.dmT, L.dmD, 'dm')}
            {row(chip('bg-amber-50 text-amber-800 border-amber-300', t.catRenalPre), L.rpT, L.rpD, 'renal-pre')}
            {row(chip('bg-orange-50 text-orange-800 border-orange-300', t.catRenalDialysis), L.rdT, L.rdD, 'renal-hd')}
            {row(chip('bg-purple-50 text-purple-800 border-purple-300', t.catHepatic), L.hepT, L.hepD, 'hep')}
            {row(chip('bg-rose-50 text-rose-800 border-rose-300', t.catImmune), L.immT, L.immD, 'cancer')}
            {row(chip('bg-teal-50 text-teal-800 border-teal-300', t.catSemiElemental), L.pepT, L.pepD, 'pep')}
            {row(chip('bg-indigo-50 text-indigo-800 border-indigo-300', t.catProteinSupp), L.modT, L.modD, 'mod')}
          </>)}

          {section(t.legendMacro, <>
            {row(chip('bg-slate-100 text-slate-800 border-slate-300', 'P : C : F'), L.pcfT, L.pcfD, 'pcf')}
            {row(chip('bg-slate-100 text-slate-800 border-slate-300', 'GI'), L.giT, L.giD, 'gi')}
            {row(chip('bg-slate-100 text-slate-800 border-slate-300', 'calc.'), L.calcT, L.calcD, 'calc')}
            {row(chip('bg-slate-100 text-slate-800 border-slate-300', 'NA'), L.naT, L.naD, 'na')}
          </>)}

          {section(t.legendOsm, <>
            {row(chip('bg-emerald-100 text-emerald-800 border-emerald-300', t.osmIso), L.osm1T, L.osmD, 'iso')}
            {row(chip('bg-amber-100 text-amber-800 border-amber-300', t.osmMod), L.osm2T, L.osmD, 'mod')}
            {row(chip('bg-rose-100 text-rose-800 border-rose-300', t.osmHyper), L.osm3T, L.osmD, 'hyper')}
          </>)}

          {section(t.legendFats, <>
            {row(chip('bg-cyan-50 text-cyan-800 border-cyan-300', 'MCT'), L.mctT, L.mctD, 'mct')}
            {row(chip('bg-indigo-50 text-indigo-800 border-indigo-300', 'EPA / DHA'), L.epaT, L.epaD, 'epa')}
            {row(chip('bg-emerald-50 text-emerald-800 border-emerald-300', 'FOS / Inulin'), L.fibT, L.fibD, 'fiber')}
          </>)}
        </div>
      </div>
    </div>
  );
};

// =====================================================================
// Clinical References & Guideline Sources
// =====================================================================
const REFERENCES = [
  {
    key: 'pmk',
    cite: 'Phramongkutklao Hospital (โรงพยาบาลพระมงกุฎเกล้า). Enteral Nutrition Formulas for Adults: Composition of Commercial Enteral Formula (update 3/2024). 16 pages. Every composition value in this guide was checked against this table on 19 Oct 2026.'
  },
  {
    key: 'fda_th',
    cite: 'สำนักงานคณะกรรมการอาหารและยา (อย.). ระบบสืบค้นข้อมูลผลิตภัณฑ์ที่ได้รับอนุญาต (Thai FDA licensed product search). Accessed 19 October 2026.',
    url: 'https://porta.fda.moph.go.th/fda_search_center_new/'
  },
  {
    key: 'dmd',
    cite: 'NHS Business Services Authority. Dictionary of medicines and devices (dm+d) browser. Data up to date as of 15 October 2026.',
    url: 'https://dmd-browser.nhsbsa.nhs.uk/'
  },
  {
    key: 'nice_cg32',
    cite: 'National Institute for Health and Care Excellence. Nutrition support for adults: oral nutrition support, enteral tube feeding and parenteral nutrition. Clinical guideline CG32. London: NICE; 2006 (updated 2017).',
    url: 'https://www.nice.org.uk/guidance/cg32/chapter/Recommendations'
  },
  {
    key: 'espen_icu',
    cite: 'Singer P, Blaser AR, Berger MM, et al. ESPEN practical and partially revised guideline: Clinical nutrition in the intensive care unit. Clin Nutr. 2023;42(9):1671-1689.',
    url: 'https://doi.org/10.1016/j.clnu.2023.07.011'
  },
  {
    key: 'espen_geriatrics',
    cite: 'Volkert D, Beck AM, Cederholm T, et al. ESPEN practical guideline: Clinical nutrition and hydration in geriatrics. Clin Nutr. 2022;41(4):958-989.',
    url: 'https://doi.org/10.1016/j.clnu.2022.01.024'
  },
  {
    key: 'espen_cancer',
    cite: 'Muscaritoli M, Arends J, Bachmann P, et al. ESPEN practical guideline: Clinical Nutrition in cancer. Clin Nutr. 2021;40(5):2898-2913.',
    url: 'https://doi.org/10.1016/j.clnu.2021.02.005'
  },
  {
    key: 'espen_surgery',
    cite: 'Weimann A, Braga M, Carli F, et al. ESPEN practical guideline: Clinical nutrition in surgery. Clin Nutr. 2021;40(7):4745-4761.',
    url: 'https://doi.org/10.1016/j.clnu.2021.03.031'
  },
  {
    key: 'espen_liver',
    cite: 'Bischoff SC, Bernal W, Dasarathy S, et al. ESPEN practical guideline: Clinical nutrition in liver disease. Clin Nutr. 2020;39(12):3533-3562.',
    url: 'https://doi.org/10.1016/j.clnu.2020.09.001'
  },
  {
    key: 'aspen_crit',
    cite: 'McClave SA, Taylor BE, Martindale RG, et al. Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient: Society of Critical Care Medicine (SCCM) and American Society for Parenteral and Enteral Nutrition (A.S.P.E.N.). JPEN J Parenter Enteral Nutr. 2016;40(2):159-211.',
    url: 'https://doi.org/10.1177/0148607115621863'
  },
  {
    key: 'kdoqi',
    cite: 'Ikizler TA, Burrowes JD, Byham-Gray LD, et al.; KDOQI Work Group. KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update. Am J Kidney Dis. 2020;76(3)(Suppl 1):S1-S107.',
    url: 'https://doi.org/10.1053/j.ajkd.2020.05.006'
  },
  {
    key: 'ada',
    cite: 'American Diabetes Association Professional Practice Committee. 5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2026. Diabetes Care. 2026;49(Suppl 1):S89-S131.',
    url: 'https://doi.org/10.2337/dc26-S005'
  },
  {
    key: 'blackburn',
    cite: 'Blackburn GL, Bistrian BR, Maini BS, Schlamm HT, Smith MF. Nutritional and metabolic assessment of the hospitalized patient. JPEN J Parenter Enteral Nutr. 1977;1(1):11-22. (Full text could not be opened for checking on 20 Oct 2026.)',
    url: 'https://doi.org/10.1177/014860717700100111'
  }
];

// =====================================================================
// Clinical Disclaimer & Collapsible References Sections (Bronchodilator Pattern)
// =====================================================================
const DisclaimerSection = ({ t }) => (
  <section className="mt-10 md:mt-14 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 p-4 md:p-5 print:hidden" aria-labelledby="disclaimer-heading">
    <h2 id="disclaimer-heading" className="text-sm font-extrabold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-2">
      <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" /> {t.discTitle}
    </h2>
    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
      {t.discPoints.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
    <p className="mt-2 text-[11px] font-bold text-amber-700 dark:text-amber-400">{t.discReviewed}</p>
  </section>
);

// Collapsible: closed by default; the heading button opens the full list.
const ReferencesSection = ({ t }) => {
  const [open, setOpen] = useState(false);
  return (
    <section id="references-section" className="mt-4 md:mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 print:hidden" aria-labelledby="refs-heading">
      <h2 id="refs-heading" className="text-sm font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="refs-list"
          className="w-full flex items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors shadow-sm cursor-pointer"
        >
          <span className="uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            {t.refTitle} <span className="text-slate-400 dark:text-slate-400 font-bold normal-case tracking-normal">({REFERENCES.length})</span>
          </span>
          <span className={`text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
        </button>
      </h2>
      {open && (
        <div id="refs-list" className="mt-3 animate-in fade-in duration-150">
          <ol className="flex flex-col gap-2.5">
            {REFERENCES.map((r, i) => (
              <li key={r.key} className="flex gap-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <span className="shrink-0 font-bold text-slate-400 dark:text-slate-500 tabular-nums w-5 text-right">{i + 1}.</span>
                <span className="min-w-0">
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{r.cite}</span>{' '}
                  {r.url && (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline break-all">
                      {r.url}
                    </a>
                  )}
                  {t.refUsed && t.refUsed[r.key] && (
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      <span className="font-bold text-slate-600 dark:text-slate-300">{t.refUsedFor}:</span> {t.refUsed[r.key]}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ol>
          {t.refAuthorNote && (
            <p className="mt-4 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.refAuthorNote}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

// =====================================================================
// Main Application Component
// =====================================================================
function App() {
  const [lang, setLang] = useState('th'); // default Thai as clinical base is PMK Hospital, easily toggled

  // Theme state (localStorage persistent)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('enteral-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    const stamped = document.documentElement.getAttribute('data-theme');
    if (stamped === 'light' || stamped === 'dark') return stamped;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('enteral-theme', next); } catch (e) {}
  };

  const t = translations[lang];

  // State: Search, Sorting, Views, Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const [sortOrder, setSortOrder] = useState('nameAsc');
  const [viewMode, setViewMode] = useState('grid');
  const [filtersOpen, setFiltersOpen] = useState(true);

  // Country Availability & FDA Registration filter state (modeled after Bronchodilator)
  const [countries, setCountries] = useState(['th']);
  const [thStatus, setThStatus] = useState(['current']);
  const [showHolder, setShowHolder] = useState(true);

  const allCountries = countries.length === LABEL_REGIONS.length;
  const toggleAllCountries = () => setCountries(allCountries ? [] : [...LABEL_REGIONS]);
  const toggleCountry = (r) => setCountries(prev => (prev.includes(r) ? prev.filter(x => x !== r) : LABEL_REGIONS.filter(x => x === r || prev.includes(x))));
  const toggleThStatus = (k) => setThStatus(prev => (prev.includes(k) ? (prev.length > 1 ? prev.filter(x => x !== k) : prev) : [...prev, k]));
  const toggleHolder = () => setShowHolder(prev => !prev);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedForm, setSelectedForm] = useState('all');
  const [selectedProteinDensity, setSelectedProteinDensity] = useState('all');
  const [selectedFiber, setSelectedFiber] = useState('all');
  const [selectedOsmolality, setSelectedOsmolality] = useState('all');
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  // Modals & Selection
  const [isCalorieGuideOpen, setIsCalorieGuideOpen] = useState(false);
  const [isNitrogenCalcOpen, setIsNitrogenCalcOpen] = useState(false);
  const [isProteinBoosterOpen, setIsProteinBoosterOpen] = useState(false);
  const [isOsmolalityGuideOpen, setIsOsmolalityGuideOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [detailFormula, setDetailFormula] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  // Escape key closes open modals and search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isChangelogOpen) setIsChangelogOpen(false);
        else if (isLegendOpen) setIsLegendOpen(false);
        else if (isCalorieGuideOpen) setIsCalorieGuideOpen(false);
        else if (isNitrogenCalcOpen) setIsNitrogenCalcOpen(false);
        else if (isProteinBoosterOpen) setIsProteinBoosterOpen(false);
        else if (isOsmolalityGuideOpen) setIsOsmolalityGuideOpen(false);
        else if (isCompareOpen) setIsCompareOpen(false);
        else if (detailFormula) setDetailFormula(null);
        else if (searchOpen) setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isChangelogOpen, isLegendOpen, isCalorieGuideOpen, isNitrogenCalcOpen, isProteinBoosterOpen, isOsmolalityGuideOpen, isCompareOpen, detailFormula, searchOpen]);

  const showToast = (msg, ms = 3000) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), ms);
  };

  const toggleCompare = (med) => {
    if (compareList.some(c => c.id === med.id)) {
      setCompareList(compareList.filter(c => c.id !== med.id));
      showToast(t.toastRemovedCompare);
    } else {
      if (compareList.length >= 3) {
        showToast(t.toastMaxCompare);
        return;
      }
      setCompareList([...compareList, med]);
      showToast(t.toastAddedCompare);
    }
  };

  const toggleFeature = (featKey) => {
    if (selectedFeatures.includes(featKey)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== featKey));
    } else {
      setSelectedFeatures([...selectedFeatures, featKey]);
    }
  };

  const clearAllFilters = () => {
    setCountries(['th']);
    setThStatus(['current']);
    setSelectedCategory('all');
    setSelectedForm('all');
    setSelectedProteinDensity('all');
    setSelectedFiber('all');
    setSelectedOsmolality('all');
    setSelectedFeatures([]);
    setSearchTerm('');
  };

  // Active filter chips list (exactly matching Bronchodilator)
  const filterChips = useMemo(() => {
    const chips = [];
    if (countries.join() !== 'th') {
      chips.push({
        key: 'countries',
        label: `${t.countriesLabel}: ${countries.length ? countries.map(r => t.countryCodes[r]).join(', ') : t.chipNone}`,
        off: () => setCountries(['th'])
      });
    }
    if (thStatus.join() !== 'current') {
      chips.push({
        key: 'status',
        label: `${t.thRegLabel}: ${thStatus.map(k => t.thRegOpts[k]).join(', ')}`,
        off: () => setThStatus(['current'])
      });
    }
    if (selectedCategory !== 'all') {
      const catObj = [
        ['polymeric', t.catPolymeric],
        ['diabetes', t.catDiabetes],
        ['renal_pre', t.catRenalPre],
        ['renal_dialysis', t.catRenalDialysis],
        ['hepatic', t.catHepatic],
        ['immune', t.catImmune],
        ['semi_elemental', t.catSemiElemental],
        ['protein_supp', t.catProteinSupp],
        ['specialty', t.catSpecialty],
      ].find(([k]) => k === selectedCategory);
      chips.push({
        key: 'cat',
        label: catObj ? catObj[1] : selectedCategory,
        off: () => setSelectedCategory('all')
      });
    }
    if (selectedForm !== 'all') {
      const formLabels = { powder: t.formPowder, liquid: t.formLiquid, sachet: t.formSachet };
      chips.push({
        key: 'form',
        label: formLabels[selectedForm] || selectedForm,
        off: () => setSelectedForm('all')
      });
    }
    if (selectedProteinDensity !== 'all') {
      const protLabels = { standard: '<40g Prot', high: '40-55g Prot', very_high: '>55g Prot' };
      chips.push({
        key: 'prot',
        label: protLabels[selectedProteinDensity] || selectedProteinDensity,
        off: () => setSelectedProteinDensity('all')
      });
    }
    if (selectedFiber !== 'all') {
      chips.push({
        key: 'fiber',
        label: selectedFiber === 'with' ? t.fiberWith : t.fiberFree,
        off: () => setSelectedFiber('all')
      });
    }
    if (selectedOsmolality !== 'all') {
      const osmLabels = { iso: t.osmIso, mod: t.osmMod, hyper: t.osmHyper };
      chips.push({
        key: 'osm',
        label: osmLabels[selectedOsmolality] || selectedOsmolality,
        off: () => setSelectedOsmolality('all')
      });
    }
    selectedFeatures.forEach(feat => {
      const featLabels = {
        low_gi: t.featLowGI,
        mct: t.featMCT,
        fish_oil: t.featFishOil,
        low_electrolyte: t.featLowElectrolyte,
        peptides: t.featPeptides,
        plant: t.featPlant,
        immune: t.featImmune
      };
      chips.push({
        key: 'feat-' + feat,
        label: featLabels[feat] || feat,
        off: () => toggleFeature(feat)
      });
    });
    if (searchTerm.trim() !== '') {
      chips.push({
        key: 'search',
        label: `"${searchTerm.trim()}"`,
        off: () => setSearchTerm('')
      });
    }
    return chips;
  }, [countries, thStatus, selectedCategory, selectedForm, selectedProteinDensity, selectedFiber, selectedOsmolality, selectedFeatures, searchTerm, t]);

  const activeFilterCount = filterChips.length;

  // Filtering Logic
  const filteredFormulas = useMemo(() => {
    return ENTERAL_FORMULAS.filter((f) => {
      // Countries & FDA registration filter
      if (countries.length === 0) return false;
      const matchesCountry = countries.some(r => thStatus.includes(statusIn(f, r)));
      if (!matchesCountry) return false;

      // Search term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchName = f.name.toLowerCase().includes(q);
        const matchCompany = f.company.toLowerCase().includes(q);
        const matchProtSource = f.proteinSource.toLowerCase().includes(q);
        const matchFatSource = f.fatSource.toLowerCase().includes(q);
        const matchNotesEn = f.notes.en.toLowerCase().includes(q);
        const matchNotesTh = f.notes.th.toLowerCase().includes(q);
        if (!matchName && !matchCompany && !matchProtSource && !matchFatSource && !matchNotesEn && !matchNotesTh) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'all') {
        if (f.category !== selectedCategory) return false;
      }

      // Form
      if (selectedForm !== 'all') {
        if (selectedForm === 'powder' && f.form !== 'powder') return false;
        if (selectedForm === 'liquid' && !f.form.includes('liquid')) return false;
        if (selectedForm === 'sachet' && f.form !== 'sachet') return false;
      }

      // Protein Density
      if (selectedProteinDensity !== 'all') {
        const prot = f.proteinPer1000Kcal;
        if (selectedProteinDensity === 'standard' && prot >= 40) return false;
        if (selectedProteinDensity === 'high' && (prot < 40 || prot > 55)) return false;
        if (selectedProteinDensity === 'very_high' && prot <= 55) return false;
      }

      // Fiber
      if (selectedFiber !== 'all') {
        if (selectedFiber === 'with' && !f.hasFiber) return false;
        if (selectedFiber === 'free' && f.hasFiber) return false;
      }

      // Osmolality
      if (selectedOsmolality !== 'all') {
        const osm = f.osmolality;
        if (selectedOsmolality === 'iso' && (!osm || osm > 350)) return false;
        if (selectedOsmolality === 'mod' && (!osm || osm <= 350 || osm > 500)) return false;
        if (selectedOsmolality === 'hyper' && (!osm || osm <= 500)) return false;
      }

      // Features
      if (selectedFeatures.length > 0) {
        for (const feat of selectedFeatures) {
          if (feat === 'low_gi' && (!f.gi || f.gi > 45)) return false;
          if (feat === 'mct' && (!f.mctPercent || f.mctPercent < 5)) return false;
          if (feat === 'fish_oil' && !f.fatSource.toLowerCase().includes('fish oil') && !f.fatSource.toLowerCase().includes('tuna') && !f.fatSource.toLowerCase().includes('epa')) return false;
          if (feat === 'low_electrolyte' && (f.category !== 'renal_pre' && f.category !== 'renal_dialysis')) return false;
          if (feat === 'peptides' && f.category !== 'semi_elemental') return false;
          if (feat === 'plant' && !f.proteinSource.toLowerCase().includes('plant') && !f.proteinSource.toLowerCase().includes('quinoa') && !f.proteinSource.toLowerCase().includes('soy protein isolate')) return false;
          if (feat === 'immune' && f.category !== 'immune' && f.id !== 'glutamine-plus') return false;
        }
      }

      return true;
    });
  }, [countries, thStatus, searchTerm, selectedCategory, selectedForm, selectedProteinDensity, selectedFiber, selectedOsmolality, selectedFeatures]);

  // Sorting Logic
  const sortedFormulas = useMemo(() => {
    return [...filteredFormulas].sort((a, b) => {
      switch (sortOrder) {
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        case 'kcalAsc':
          return (a.servingKcal || 0) - (b.servingKcal || 0);
        case 'kcalDesc':
          return (b.servingKcal || 0) - (a.servingKcal || 0);
        case 'protDesc':
          return (b.proteinPer1000Kcal || 0) - (a.proteinPer1000Kcal || 0);
        case 'protAsc':
          return (a.proteinPer1000Kcal || 0) - (b.proteinPer1000Kcal || 0);
        case 'osmAsc':
          return (a.osmolality || 999) - (b.osmolality || 999);
        case 'osmDesc':
          return (b.osmolality || 0) - (a.osmolality || 0);
        case 'fiberDesc':
          return (b.fiberPer1000Kcal || 0) - (a.fiberPer1000Kcal || 0);
        case 'kLow':
          return (a.k || 9999) - (b.k || 9999);
        case 'pLow':
          return (a.p || 9999) - (b.p || 9999);
        default:
          return 0;
      }
    });
  }, [filteredFormulas, sortOrder]);

  return (
    <div id="main-app-container" className="min-h-screen bg-slate-100 p-2 sm:p-4 md:p-8 font-sans text-slate-900 pb-36 text-sm md:text-base w-full relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] w-max max-w-[calc(100vw-1rem)] animate-in fade-in slide-in-from-top-5">
          <div className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700">
            <span className="font-bold text-xs sm:text-sm">{toastMessage}</span>
            <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white shrink-0">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Top Floating Controls (Changelog Version, Language & Theme) */}
      <div className="max-w-6xl mx-auto relative pt-8 sm:pt-0">
        <div className="absolute top-0 right-0 flex items-center gap-1.5 sm:gap-2 z-20 print:hidden" data-top-controls>
          <button
            onClick={() => setIsChangelogOpen(true)}
            className="text-[10px] font-bold text-slate-500 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-slate-50 hover:text-emerald-700 hover:border-emerald-200 transition-all cursor-pointer"
            title={t.changelogTitle}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {APP_VERSION}
          </button>
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            className="text-[10px] md:text-xs font-bold text-slate-700 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1 hover:bg-slate-50 transition-all cursor-pointer"
          >
            {lang === 'en' ? 'ไทย' : 'EN'}
          </button>
          <DonateButton isTh={lang === 'th'} />
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-7 h-7 sm:w-8 sm:h-8 text-slate-600 bg-white shadow-sm rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer"
          >
            {theme === 'dark' ? <SunIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <MoonIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
        </div>

        {/* Header (Top Left) - Clean title, subtitle, credit; zero reference buttons */}
        <header className="mb-3 md:mb-4 pr-32 sm:pr-48">
          <div>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              {t.appTitle}
            </h1>
            <p className="hidden sm:block text-xs md:text-sm text-slate-600 mt-1 leading-snug">
              {t.appSubtitle}
            </p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:block mt-1">
              <p className="text-[10px] md:text-xs font-semibold text-emerald-600">{t.doctorCredit}</p>
            </div>
          </div>
        </header>

        {/* Pinned Action Row & Search Bar */}
        <div className="sticky top-0 z-30 pt-2 pb-2.5 bg-slate-100/95 backdrop-blur-md print:hidden">
          {/* Quick Guide Launchers: Pinned responsive row */}
          <div className="grid grid-cols-4 gap-1 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 mb-2 w-full print:hidden">
            <button
              onClick={() => setIsCalorieGuideOpen(true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 px-1 py-1.5 sm:px-3 sm:py-2 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate hidden sm:inline">{t.btnCalorieGuide}</span>
              <span className="sm:hidden text-[10px] leading-tight text-center break-words max-w-full">{lang === 'th' ? 'แคลอรี่' : 'Cal/Prot'}</span>
            </button>
            <button
              onClick={() => setIsNitrogenCalcOpen(true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 px-1 py-1.5 sm:px-3 sm:py-2 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <ScaleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate hidden sm:inline">{t.btnNitrogenCalc}</span>
              <span className="sm:hidden text-[10px] leading-tight text-center break-words max-w-full">{lang === 'th' ? 'ดุลไนโตรเจน' : 'Nitrogen'}</span>
            </button>
            <button
              onClick={() => setIsProteinBoosterOpen(true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 px-1 py-1.5 sm:px-3 sm:py-2 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <FlameIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate hidden sm:inline">{t.btnProteinBooster}</span>
              <span className="sm:hidden text-[10px] leading-tight text-center break-words max-w-full">{lang === 'th' ? 'เสริมโปรตีน' : 'Booster'}</span>
            </button>
            <button
              onClick={() => setIsOsmolalityGuideOpen(true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 px-1 py-1.5 sm:px-3 sm:py-2 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <DropletIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate hidden sm:inline">{t.btnOsmolality}</span>
              <span className="sm:hidden text-[10px] leading-tight text-center break-words max-w-full">{lang === 'th' ? 'ออสโมลาลิตี' : 'Osmolality'}</span>
            </button>
          </div>

          {/* Search + Sort + View Mode + Filter Toggle */}
          <div className="flex gap-1.5 sm:gap-2 w-full h-9 sm:h-10">
            {/* Mobile search toggle button */}
            <button
              onClick={() => { setSearchOpen(true); setTimeout(() => searchInputRef.current?.focus(), 50); }}
              className={`${searchOpen ? 'hidden' : 'flex sm:hidden'} shrink-0 h-full w-9 items-center justify-center rounded-xl border shadow-sm transition-colors ${
                searchTerm !== '' ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Search Input */}
            <div className={`${searchOpen ? 'block flex-1' : 'hidden sm:block'} relative min-w-0 sm:flex-1 h-full`}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => { if (!searchTerm) setSearchOpen(false); }}
                onKeyDown={(e) => { if (e.key === 'Escape') { setSearchTerm(''); setSearchOpen(false); } }}
                className="w-full h-full pl-9 pr-8 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-xs sm:text-sm transition-shadow"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => { setSearchTerm(''); setSearchOpen(false); }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className={`${searchOpen ? 'hidden sm:block' : 'block'} relative shrink-0 w-32 sm:w-44 h-full`}>
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-2.5 flex items-center pointer-events-none">
                <SortIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full h-full pl-7 sm:pl-8 pr-2 sm:pr-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-700 text-[11px] sm:text-xs font-bold appearance-none cursor-pointer truncate"
              >
                <option value="nameAsc">{t.sortNameAsc}</option>
                <option value="nameDesc">{t.sortNameDesc}</option>
                <option value="protDesc">{t.sortProtDesc}</option>
                <option value="protAsc">{t.sortProtAsc}</option>
                <option value="kcalDesc">{t.sortKcalDesc}</option>
                <option value="kcalAsc">{t.sortKcalAsc}</option>
                <option value="osmAsc">{t.sortOsmAsc}</option>
                <option value="osmDesc">{t.sortOsmDesc}</option>
                <option value="fiberDesc">{t.sortFiberDesc}</option>
                <option value="kLow">{t.sortKLow}</option>
                <option value="pLow">{t.sortPLow}</option>
              </select>
            </div>

            {/* Grid / List / Table View Toggle */}
            <div className={`${searchOpen ? 'hidden sm:flex' : 'hidden sm:flex'} bg-white rounded-xl border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-full`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`h-full px-2.5 rounded-lg transition-colors flex items-center justify-center ${viewMode === 'grid' ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                title={t.gridView}
                aria-label={t.gridView}
                aria-pressed={viewMode === 'grid'}
                data-view="grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`h-full px-2.5 rounded-lg transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                title={t.listView}
                aria-label={t.listView}
                aria-pressed={viewMode === 'list'}
                data-view="list"
              >
                <ListIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`h-full px-2.5 rounded-lg transition-colors flex items-center justify-center ${viewMode === 'table' ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                title={t.tableView}
                aria-label={t.tableView}
                aria-pressed={viewMode === 'table'}
                data-view="table"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`shrink-0 h-full px-2.5 sm:px-3 rounded-xl border shadow-sm flex items-center gap-1 sm:gap-1.5 text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeFilterCount > 0
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
                  : filtersOpen
                  ? 'bg-slate-100 border-slate-300 text-slate-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FilterIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.filtersBtn}</span>
              {activeFilterCount > 0 && (
                <span className="bg-emerald-600 text-white text-[10px] font-black rounded-full px-1.5 py-0.2">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Filter Panel */}
        {filtersOpen && (
          <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm mb-4 space-y-3 print:hidden animate-in fade-in duration-200">
            {/* Filter row 1: registration. Countries, FDA status and licence-holder switch */}
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full min-w-0 pb-2.5 border-b border-slate-100 dark:border-slate-800" data-filter-row="registration">
              {/* Countries */}
              <div className="flex bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" role="group" aria-label={t.countriesLabel} title={t.countriesTitle}>
                <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-400 whitespace-nowrap">{t.countriesLabel}:</span>
                <button
                  onClick={toggleAllCountries}
                  aria-pressed={allCountries}
                  title={t.countriesAllTitle}
                  data-country-all
                  className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                    allCountries ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {t.countriesAll}
                </button>
                {LABEL_REGIONS.map(key => (
                  <button
                    key={key}
                    onClick={() => toggleCountry(key)}
                    aria-pressed={countries.includes(key)}
                    title={t.countryNames[key]}
                    data-country={key}
                    className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                      countries.includes(key) ? COUNTRY_COLORS[key].on : COUNTRY_COLORS[key].off
                    }`}
                  >
                    {t.countryCodes[key]}
                  </button>
                ))}
              </div>

              {/* Registration status in the selected countries */}
              <div className="flex bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" role="group" aria-label={t.thRegLabel} title={t.thRegTitle} data-threg-group>
                <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-400 whitespace-nowrap inline-flex items-center gap-0.5" data-threg-label>
                  {t.thRegLabel}
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-600" />
                </span>
                {TH_STATUSES.map(k => {
                  const on = thStatus.includes(k);
                  const tone = k === 'current'
                    ? ['bg-emerald-600 text-white shadow-sm', 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-700']
                    : k === 'past'
                    ? ['bg-amber-500 text-white shadow-sm', 'text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700']
                    : ['bg-slate-600 text-white shadow-sm', 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'];
                  return (
                    <button
                      key={k}
                      onClick={() => toggleThStatus(k)}
                      aria-pressed={on}
                      data-threg={k}
                      className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                        on ? tone[0] : tone[1]
                      }`}
                    >
                      {k !== 'current' && <span aria-hidden="true">{k === 'past' ? '†' : '?'}</span>}
                      {t.thRegOpts[k]}
                    </button>
                  );
                })}
              </div>

              {/* Licence holder switch */}
              <div className="flex bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" data-holder-toggle>
                <button
                  onClick={toggleHolder}
                  aria-pressed={showHolder}
                  title={t.holderToggleTitle}
                  className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                    showHolder ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {showHolder ? <Check className="w-2.5 h-2.5 md:w-3 md:h-3" /> : <X className="w-2.5 h-2.5 md:w-3 md:h-3" />}
                  {t.holderLabel}
                </button>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div>
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-1.5">{t.filterCategory}</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  ['all', t.catAll],
                  ['polymeric', t.catPolymeric],
                  ['diabetes', t.catDiabetes],
                  ['renal_pre', t.catRenalPre],
                  ['renal_dialysis', t.catRenalDialysis],
                  ['hepatic', t.catHepatic],
                  ['immune', t.catImmune],
                  ['semi_elemental', t.catSemiElemental],
                  ['protein_supp', t.catProteinSupp],
                  ['specialty', t.catSpecialty],
                ].map(([k, label]) => (
                  <button
                    key={k}
                    onClick={() => setSelectedCategory(k)}
                    aria-pressed={selectedCategory === k}
                    data-cat={k}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      selectedCategory === k ? 'border-transparent ' + chipTone(CAT_TONE[k], true) : 'bg-white border-slate-200 ' + chipTone(CAT_TONE[k], false)
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Secondary Filter Rail */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 text-xs">
              {/* Form Filter */}
              <div className="flex flex-wrap items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterForm}:</span>
                <button onClick={() => setSelectedForm('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('slate', selectedForm === 'all')}`} aria-pressed={selectedForm === 'all'}>All</button>
                <button onClick={() => setSelectedForm('powder')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('sky', selectedForm === 'powder')}`} aria-pressed={selectedForm === 'powder'}>{t.formPowder}</button>
                <button onClick={() => setSelectedForm('liquid')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('sky', selectedForm === 'liquid')}`} aria-pressed={selectedForm === 'liquid'}>{t.formLiquid}</button>
                <button onClick={() => setSelectedForm('sachet')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('sky', selectedForm === 'sachet')}`} aria-pressed={selectedForm === 'sachet'}>{t.formSachet}</button>
              </div>

              {/* Protein Density */}
              <div className="flex flex-wrap items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterProteinDensity}:</span>
                <button onClick={() => setSelectedProteinDensity('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('slate', selectedProteinDensity === 'all')}`} aria-pressed={selectedProteinDensity === 'all'}>All</button>
                <button onClick={() => setSelectedProteinDensity('standard')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('rose', selectedProteinDensity === 'standard')}`} aria-pressed={selectedProteinDensity === 'standard'}>&lt;40g</button>
                <button onClick={() => setSelectedProteinDensity('high')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('rose', selectedProteinDensity === 'high')}`} aria-pressed={selectedProteinDensity === 'high'}>40-55g</button>
                <button onClick={() => setSelectedProteinDensity('very_high')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('rose', selectedProteinDensity === 'very_high')}`} aria-pressed={selectedProteinDensity === 'very_high'}>&gt;55g</button>
              </div>

              {/* Fiber */}
              <div className="flex flex-wrap items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterFiber}:</span>
                <button onClick={() => setSelectedFiber('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('slate', selectedFiber === 'all')}`} aria-pressed={selectedFiber === 'all'}>All</button>
                <button onClick={() => setSelectedFiber('with')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('green', selectedFiber === 'with')}`} aria-pressed={selectedFiber === 'with'}>{t.fiberWith}</button>
                <button onClick={() => setSelectedFiber('free')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('green', selectedFiber === 'free')}`} aria-pressed={selectedFiber === 'free'}>{t.fiberFree}</button>
              </div>

              {/* Osmolality */}
              <div className="flex flex-wrap items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterOsmolality}:</span>
                <button onClick={() => setSelectedOsmolality('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('slate', selectedOsmolality === 'all')}`} aria-pressed={selectedOsmolality === 'all'}>All</button>
                <button onClick={() => setSelectedOsmolality('iso')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('cyan', selectedOsmolality === 'iso')}`} aria-pressed={selectedOsmolality === 'iso'}>{t.osmIso}</button>
                <button onClick={() => setSelectedOsmolality('mod')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('cyan', selectedOsmolality === 'mod')}`} aria-pressed={selectedOsmolality === 'mod'}>{t.osmMod}</button>
                <button onClick={() => setSelectedOsmolality('hyper')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-all ${chipTone('cyan', selectedOsmolality === 'hyper')}`} aria-pressed={selectedOsmolality === 'hyper'}>{t.osmHyper}</button>
              </div>

              {/* Clear All button */}
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 ml-auto px-2 py-1 rounded hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  {t.clearAll}
                </button>
              )}
            </div>

            {/* Clinical Highlights Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 mr-1">{t.filterFeatures}:</span>
              {[
                ['low_gi', t.featLowGI],
                ['mct', t.featMCT],
                ['fish_oil', t.featFishOil],
                ['low_electrolyte', t.featLowElectrolyte],
                ['peptides', t.featPeptides],
                ['plant', t.featPlant],
                ['immune', t.featImmune],
              ].map(([k, label]) => {
                const on = selectedFeatures.includes(k);
                return (
                  <button
                    key={k}
                    onClick={() => toggleFeature(k)}
                    aria-pressed={on}
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                      on ? 'border-transparent ' + chipTone('indigo', true) : 'bg-white border-slate-200 ' + chipTone('indigo', false)
                    }`}
                  >
                    {on && '✓ '}{label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Filters Row (Chips) + Results Counter + Key / Legend Button */}
        <div className="mb-3 px-0.5 print:hidden">
          {filterChips.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-2" role="group" aria-label={t.chipsLabel}>
              <button
                onClick={clearAllFilters}
                title={t.clearAll}
                className="shrink-0 min-h-[26px] px-2.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 shadow-sm inline-flex items-center gap-1 text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer"
              >
                <X className="w-3 h-3" /> {t.clearShort}
              </button>
              {filterChips.map(c => (
                <button
                  key={c.key}
                  onClick={c.off}
                  title={`Remove ${c.label}`}
                  className="max-w-full min-h-[26px] inline-flex items-center gap-1 pl-2.5 pr-1.5 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-[11px] font-bold leading-tight text-left transition-colors cursor-pointer"
                >
                  <span className="break-words min-w-0">{c.label}</span>
                  <X className="w-3 h-3 shrink-0 opacity-60" />
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] md:text-xs text-slate-500 min-w-0 pt-0.5" aria-live="polite">
              {t.countShowing} <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums">{sortedFormulas.length}</span> {t.countOf} <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums">{ENTERAL_FORMULAS.length}</span> {t.countFormulas}
            </div>
            <button
              onClick={() => setIsLegendOpen(true)}
              title={t.legendTitle}
              className="shrink-0 inline-flex items-center gap-1.5 h-6 md:h-7 px-2.5 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-slate-500" aria-hidden="true"><circle cx="12" cy="12" r="9.5" /><path d="M9.3 9.2a2.8 2.8 0 1 1 4 2.6c-.8.5-1.3 1-1.3 2" /><path d="M12 17.2h.01" /></svg>
              {t.legendBtn}
            </button>
          </div>
        </div>

        {/* Empty State when no formulas match */}
        {countries.length === 0 ? (
          <div className="py-12 sm:py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 border-dashed p-6 print:hidden">
            <GlobeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm sm:text-base font-bold text-slate-700">{t.noCountry}</p>
            <button
              onClick={() => setCountries(['th'])}
              className="mt-3 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
            >
              {lang === 'th' ? 'เลือกประเทศไทย (TH)' : 'Select Thailand (TH)'}
            </button>
          </div>
        ) : sortedFormulas.length === 0 ? (
          <div className="py-12 sm:py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 border-dashed p-6 print:hidden">
            <Search className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm sm:text-base font-bold text-slate-700">{t.noFormulasFound}</p>
            <p className="text-xs text-slate-400 mt-1">{t.clearFiltersToSeeAll}</p>
            <button
              onClick={clearAllFilters}
              className="mt-3 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
            >
              {t.clearAll}
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {sortedFormulas.map((med) => {
              const isCompared = compareList.some(c => c.id === med.id);
              const osmBadge = getOsmolalityBadge(med.osmolality);

              return (
                <div
                  key={med.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-emerald-300 relative"
                >
                  {/* Category Pill */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-1 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50/50 transition-colors shrink-0">
                        <ProductPhoto id={med.id} name={med.name} form={med.form} color="#059669" className="w-12 h-12 sm:w-14 sm:h-14" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-base leading-tight group-hover:text-emerald-700 transition-colors">
                          {med.name}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                          {med.company}
                        </span>
                        <CountryLines med={med} t={t} regions={countries} showHolder={showHolder} className="text-[11px] mt-1.5" />
                      </div>
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); toggleCompare(med); }}
                      className={`p-1.5 rounded-lg border text-xs transition-all ${
                        isCompared
                          ? 'bg-rose-50 border-rose-300 text-rose-600 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                      }`}
                      title={isCompared ? t.compareRemove : t.compareAdd}
                    >
                      <CompareIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* P:C:F & Key Nutritional Stats */}
                  <div className="space-y-2.5 mb-3 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] font-bold mb-1">
                        <span className="text-slate-500">P:C:F %</span>
                        <span className="text-slate-800">{pcfText(med.pcfRatio)}</span>
                      </div>
                      <PcfBar pcf={med.pcfRatio} className="h-1.5" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">{t.serving}</span>
                        <span className="font-black text-slate-800 text-xs sm:text-sm">{kcalText(med.servingKcal)}</span>
                        <span className="text-[10px] text-emerald-700 font-bold block">{med.servingProtein}g protein</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">{t.proteinPer1000}</span>
                        <span className="font-black text-rose-700 text-xs sm:text-sm">{med.proteinPer1000Kcal ?? 'NA'} g</span>
                        <span className="text-[10px] text-slate-500 block">{med.gi ? `GI = ${med.gi}` : 'GI NA'}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-600 space-y-1">
                      <div className="break-words">
                        <strong className="text-slate-700">Protein:</strong> {med.proteinSource}
                      </div>
                      <div className="break-words">
                        <strong className="text-slate-700">Fiber:</strong> {med.hasFiber ? med.fiberDetails : 'None'}
                      </div>
                    </div>
                  </div>

                  {/* Badges & Action */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${osmBadge.tone} truncate max-w-[140px]`}>
                      {osmBadge.label}
                    </span>

                    <button
                      onClick={() => setDetailFormula(med)}
                      data-card-details
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {t.viewDetails} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : viewMode === 'list' ? (
          /* List View: one compact row per product */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100" data-list-view>
            {sortedFormulas.map((med) => {
              const isCompared = compareList.some(c => c.id === med.id);
              const osmBadge = getOsmolalityBadge(med.osmolality);
              return (
                <div key={med.id} className="flex items-start gap-3 p-3 hover:bg-slate-50 transition-colors" data-list-row>
                  <ProductPhoto id={med.id} name={med.name} form={med.form} color="#059669" className="w-11 h-11 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <button type="button" onClick={() => setDetailFormula(med)} className="min-w-0 text-left cursor-pointer" data-list-open>
                        <span className="font-extrabold text-slate-900 text-sm leading-tight block break-words hover:text-emerald-700">{med.name}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5 break-words">{med.company}</span>
                      </button>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => toggleCompare(med)}
                          className={`p-1.5 rounded-lg border transition-all ${isCompared ? 'bg-rose-50 border-rose-300 text-rose-600' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700'}`}
                          title={isCompared ? t.compareRemove : t.compareAdd}
                          aria-label={isCompared ? t.compareRemove : t.compareAdd}
                          aria-pressed={isCompared}
                        >
                          <CompareIcon className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDetailFormula(med)}
                          className="p-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors"
                          title={t.viewDetails}
                          aria-label={t.viewDetails}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
                      <span><strong className="text-slate-800">{kcalText(med.servingKcal)}</strong> · {med.servingProtein} g protein</span>
                      <span><strong className="text-rose-700">{med.proteinPer1000Kcal ?? 'NA'} g</strong> {t.perKcal}</span>
                      <span>P:C:F {pcfText(med.pcfRatio, ':')}</span>
                      {med.gi ? <span>GI {med.gi}</span> : null}
                      <span className={`px-1.5 py-px rounded text-[10px] font-bold border ${osmBadge.tone}`}>{osmBadge.label}</span>
                    </div>
                    <CountryLines med={med} t={t} regions={countries} showHolder={showHolder} listRow className="text-[11px] mt-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Table View Rendering */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" data-table-view>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase text-[10px]">
                    <th className="p-3 w-10 text-center"></th>
                    <th className="p-3">Formula / Company</th>
                    <th className="p-3">Serving & Caloric Density</th>
                    <th className="p-3">Protein / 1000 kcal</th>
                    <th className="p-3">P:C:F Ratio</th>
                    <th className="p-3">Protein & Fat Source</th>
                    <th className="p-3">Fiber</th>
                    <th className="p-3">Osmolality</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedFormulas.map((med) => {
                    const isCompared = compareList.some(c => c.id === med.id);
                    const osmBadge = getOsmolalityBadge(med.osmolality);

                    return (
                      <tr key={med.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 text-center">
                          <button
                            onClick={() => toggleCompare(med)}
                            className={`p-1 rounded ${isCompared ? 'text-rose-600' : 'text-slate-300 hover:text-slate-500'}`}
                            title={isCompared ? t.compareRemove : t.compareAdd}
                          >
                            <CompareIcon className="w-4 h-4" />
                          </button>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2.5">
                            <ProductPhoto id={med.id} name={med.name} form={med.form} color="#059669" className="w-9 h-9 shrink-0" />
                            <div>
                              <div className="font-extrabold text-slate-800 text-sm leading-tight">{med.name}</div>
                              <span className="text-[10px] text-slate-400 font-bold uppercase block">{med.company}</span>
                              <CountryLines med={med} t={t} regions={countries} showHolder={showHolder} listRow className="text-[11px] mt-1" />
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="font-bold text-slate-800">{kcalText(med.servingKcal)}</span> ({med.servingProtein}g protein)
                          <span className="block text-[10px] text-slate-400">{med.form}</span>
                        </td>
                        <td className="p-3 font-black text-rose-700 text-sm">
                          {med.proteinPer1000Kcal ?? 'NA'} g
                        </td>
                        <td className="p-3">
                          <span className="text-[11px] font-bold block mb-0.5">{pcfText(med.pcfRatio, ':')}</span>
                          <PcfBar pcf={med.pcfRatio} className="h-1.5 w-20" />
                        </td>
                        <td className="p-3 text-slate-600 min-w-[12rem] max-w-xs">
                          <span className="font-semibold block text-slate-800 break-words">{med.proteinSource}</span>
                          <span className="text-[10px] text-slate-400 block break-words">{med.fatSource}</span>
                        </td>
                        <td className="p-3 text-slate-700">
                          {med.hasFiber ? med.fiberDetails : <span className="text-slate-400">None</span>}
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${osmBadge.tone}`}>
                            {osmBadge.label}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => setDetailFormula(med)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 px-2 py-1 rounded transition-colors whitespace-nowrap"
                          >
                            {t.viewDetails}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Clinical Disclaimer & Collapsible References Section (Bronchodilator Pattern) */}
        <DisclaimerSection t={t} />
        <ReferencesSection t={t} />

        {/* Footer Doctor Credit */}
        <footer className="mt-8 mb-4 text-center text-xs text-slate-400 dark:text-slate-500 print:hidden">
          <p className="font-semibold text-slate-600 dark:text-slate-400">{t.doctorCredit}</p>
        </footer>

        {/* Floating Compare Banner (sticky at bottom when items selected) */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 p-3 z-40 flex justify-center animate-in slide-in-from-bottom-5 print:hidden">
            <div className="bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center justify-between gap-4 w-full max-w-3xl border border-slate-700">
              <div className="flex items-center gap-2 min-w-0">
                <span className="bg-emerald-500 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                  {compareList.length}
                </span>
                <span className="font-extrabold text-xs sm:text-sm whitespace-nowrap">Selected:</span>
                <span className="text-xs text-slate-300 truncate">
                  {compareList.map(m => m.name).join(', ')}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsCompareOpen(true)}
                  data-open-compare
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <CompareIcon className="w-4 h-4" />
                  {t.btnCompare}
                </button>
                <button
                  onClick={() => setCompareList([])}
                  className="text-slate-400 hover:text-white px-2 py-1 text-xs font-bold transition-colors"
                >
                  {t.clearAll}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modals */}
        {isCalorieGuideOpen && (
          <CalorieProteinGuideModal
            t={t}
            lang={lang}
            formulas={ENTERAL_FORMULAS}
            onClose={() => setIsCalorieGuideOpen(false)}
            onSelectFormula={(formula) => setDetailFormula(formula)}
          />
        )}

        {isNitrogenCalcOpen && (
          <NitrogenBalanceModal
            t={t}
            onClose={() => setIsNitrogenCalcOpen(false)}
          />
        )}

        {isProteinBoosterOpen && (
          <ProteinBoosterModal
            t={t}
            formulas={ENTERAL_FORMULAS}
            onClose={() => setIsProteinBoosterOpen(false)}
          />
        )}

        {isOsmolalityGuideOpen && (
          <OsmolalityGuideModal
            t={t}
            onClose={() => setIsOsmolalityGuideOpen(false)}
          />
        )}

        {isChangelogOpen && (
          <ChangelogModal
            t={t}
            lang={lang}
            onClose={() => setIsChangelogOpen(false)}
          />
        )}

        {isLegendOpen && (
          <LegendModal
            t={t}
            onClose={() => setIsLegendOpen(false)}
          />
        )}

        {isCompareOpen && (
          <CompareModal
            list={compareList}
            t={t}
            countries={countries}
            showHolder={showHolder}
            onClose={() => setIsCompareOpen(false)}
            onRemove={(med) => {
              const next = compareList.filter(c => c.id !== med.id);
              setCompareList(next);
              if (next.length === 0) setIsCompareOpen(false);
            }}
          />
        )}

        {detailFormula && (
          <FormulaDetailModal
            formula={detailFormula}
            t={t}
            onClose={() => setDetailFormula(null)}
            isCompared={compareList.some(c => c.id === detailFormula.id)}
            onToggleCompare={toggleCompare}
          />
        )}
      </div>
    </div>
  );
}

// Mount React application
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
