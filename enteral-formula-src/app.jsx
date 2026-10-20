const { useState, useEffect, useMemo, useRef } = React;

// --- Native SVG Icons ---
const Search = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const LayoutGrid = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
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
  const add = (cls, decl, hover) => rules.push(`html.dark .${esc(cls)}${hover ? ':hover' : ''}:not(.light-lock *){${decl}}`);
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
    listView: 'มุมมองตาราง',
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
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-emerald-600 hover:bg-emerald-700 border border-emerald-700 text-white px-1 py-1.5 sm:px-3 sm:py-2 rounded-xl font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate hidden sm:inline">{t.btnCalorieGuide}</span>
              <span className="sm:hidden text-[10px] leading-tight text-center break-words max-w-full">{lang === 'th' ? 'แคลอรี่' : 'Cal/Prot'}</span>
            </button>
            <button
              onClick={() => setIsNitrogenCalcOpen(true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-blue-600 hover:bg-blue-700 border border-blue-700 text-white px-1 py-1.5 sm:px-3 sm:py-2 rounded-xl font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <ScaleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate hidden sm:inline">{t.btnNitrogenCalc}</span>
              <span className="sm:hidden text-[10px] leading-tight text-center break-words max-w-full">{lang === 'th' ? 'ดุลไนโตรเจน' : 'Nitrogen'}</span>
            </button>
            <button
              onClick={() => setIsProteinBoosterOpen(true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-rose-600 hover:bg-rose-700 border border-rose-700 text-white px-1 py-1.5 sm:px-3 sm:py-2 rounded-xl font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <FlameIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate hidden sm:inline">{t.btnProteinBooster}</span>
              <span className="sm:hidden text-[10px] leading-tight text-center break-words max-w-full">{lang === 'th' ? 'เสริมโปรตีน' : 'Booster'}</span>
            </button>
            <button
              onClick={() => setIsOsmolalityGuideOpen(true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-0 bg-cyan-700 hover:bg-cyan-800 border border-cyan-800 text-white px-1 py-1.5 sm:px-3 sm:py-2 rounded-xl font-bold shadow-sm transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
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

            {/* Grid / List View Toggle */}
            <div className={`${searchOpen ? 'hidden sm:flex' : 'hidden sm:flex'} bg-white rounded-xl border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-full`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`h-full px-2.5 rounded-lg transition-colors flex items-center justify-center ${viewMode === 'grid' ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                title={t.gridView}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`h-full px-2.5 rounded-lg transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                title={t.listView}
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`shrink-0 h-full px-2.5 sm:px-3 rounded-xl border shadow-sm flex items-center gap-1 sm:gap-1.5 text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeFilterCount > 0
                  ? 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700'
                  : filtersOpen
                  ? 'bg-slate-100 border-slate-300 text-slate-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FilterIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.filtersBtn}</span>
              {activeFilterCount > 0 && (
                <span className="bg-white text-emerald-800 text-[10px] font-black rounded-full px-1.5 py-0.2">
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
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === k
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
              <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterForm}:</span>
                <button onClick={() => setSelectedForm('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedForm === 'all' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>All</button>
                <button onClick={() => setSelectedForm('powder')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedForm === 'powder' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.formPowder}</button>
                <button onClick={() => setSelectedForm('liquid')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedForm === 'liquid' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.formLiquid}</button>
                <button onClick={() => setSelectedForm('sachet')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedForm === 'sachet' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.formSachet}</button>
              </div>

              {/* Protein Density */}
              <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterProteinDensity}:</span>
                <button onClick={() => setSelectedProteinDensity('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedProteinDensity === 'all' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>All</button>
                <button onClick={() => setSelectedProteinDensity('standard')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedProteinDensity === 'standard' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>&lt;40g</button>
                <button onClick={() => setSelectedProteinDensity('high')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedProteinDensity === 'high' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>40-55g</button>
                <button onClick={() => setSelectedProteinDensity('very_high')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedProteinDensity === 'very_high' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>&gt;55g</button>
              </div>

              {/* Fiber */}
              <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterFiber}:</span>
                <button onClick={() => setSelectedFiber('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedFiber === 'all' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>All</button>
                <button onClick={() => setSelectedFiber('with')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedFiber === 'with' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.fiberWith}</button>
                <button onClick={() => setSelectedFiber('free')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedFiber === 'free' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.fiberFree}</button>
              </div>

              {/* Osmolality */}
              <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 px-1">{t.filterOsmolality}:</span>
                <button onClick={() => setSelectedOsmolality('all')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedOsmolality === 'all' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>All</button>
                <button onClick={() => setSelectedOsmolality('iso')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedOsmolality === 'iso' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.osmIso}</button>
                <button onClick={() => setSelectedOsmolality('mod')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedOsmolality === 'mod' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.osmMod}</button>
                <button onClick={() => setSelectedOsmolality('hyper')} className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${selectedOsmolality === 'hyper' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t.osmHyper}</button>
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
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                      on
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
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
        ) : (
          /* List View Rendering */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
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
                        <td className="p-3 text-slate-600 max-w-xs truncate">
                          <span className="font-semibold block text-slate-800 truncate">{med.proteinSource}</span>
                          <span className="text-[10px] text-slate-400 block truncate">{med.fatSource}</span>
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
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 px-2 py-1 rounded transition-colors"
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
