# Adult Enteral Formula Guide (ONS Guide)
### คู่มืออาหารทางการแพทย์สำหรับผู้ใหญ่

A bedside reference for adult oral nutritional supplements (ONS) and enteral formulas available in Thailand, by Warodom Phaenthong, M.D.
It is one self-contained HTML page (`enteral-formula-guide.html`, opened by `index.html`) that runs in the browser, in Thai and English,
with no installation and no data sent anywhere.

It is decision support for healthcare professionals, not a substitute for product labels, local guidelines or clinical judgement.

**Open it:** https://sirmarkthemighty-ctrl.github.io/ONS_Guide/

## What it contains

- 48 adult formulas and protein supplements with caloric distribution (P:C:F), scoop and serving size, protein per 1,000 kcal,
  protein, fat and fiber sources, osmolality, Na, K, P, Ca, Mg, vitamin A and C. Every composition value and product photo comes from
  the Phramongkutklao Hospital table *Enteral Nutrition Formulas for Adults: Composition of Commercial Enteral Formula (update 3/2024)*;
  values the table does not give show "NA", and values worked out from the table are marked "calc.".
- Registration in Thailand (Thai FDA food or drug register) and the UK (NHS dm+d), linked to each product's own record.
  The US, EU and Japan show "Unknown" because no public register lists these foods.
- Calorie & protein guide with presets from named guidelines (NICE CG32, ESPEN geriatrics, ICU, cancer, surgery and liver guidelines,
  KDOQI 2020, ADA 2026), each shown with its source; ideal and adjusted body weight as proposed by ESPEN ICU 2023; matching formulas
  with scoop or bottle counts.
- Nitrogen balance calculator, protein supplement doser, and a tolerance guide (diarrhea and gastric residual volume from
  ASPEN/SCCM 2016, refeeding from NICE CG32).
- Side-by-side comparison of up to 3 formulas, filters, light and dark themes.

Tap the version badge next to the title for the changelog.

## Source and build

`enteral-formula-guide.html` is generated; edit the files in `enteral-formula-src/` instead:

- `app.jsx`: the React app, its data, text (Thai and English), references and changelog
- `product-images.json`: the product photos (from the PMK table) as data URIs
- `shell.html`, `styles.css`, `tailwind.config.js`: page skeleton and styles
- `.claude/enteral-pmk.js`: the PMK table transcribed; the test compares every value in the page against it

Build and test with Node.js (the build tools are installed into `%LOCALAPPDATA%\med-apps-build` on first run;
the test needs Microsoft Edge or Google Chrome):

```
node .claude/build-enteral.js
node .claude/test-enteral.js
```

## Licence

Copyright (c) 2026 Warodom Phaenthong, M.D. The app's code and text are licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/): share and adapt for non-commercial use,
with credit, under the same licence. Product names, packaging photos and the PMK composition table belong to their owners;
see `NOTICE`.
