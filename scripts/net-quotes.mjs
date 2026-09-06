#!/usr/bin/env node
// Pull the NET wording for every scripture citation in a lesson, so quotations can be
// re-checked against the translation we are allowed to use (Editorial Standards 4.7).
//   node scripts/net-quotes.mjs courses/<school>/<course>/lessons/NN-name.md
import fs from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: node scripts/net-quotes.mjs <lesson.md>"); process.exit(1); }
const src = fs.readFileSync(file, "utf8");

// Citations look like "(Isaiah 53:1–2, ESV)" or "(1 Corinthians 13:4, NET)".
const cites = [...src.matchAll(/\(([1-3]?\s?[A-Z][A-Za-z ]+\.?\s+\d+:[\d–—,\- ]+),\s*(ESV|NET|NRSVue|KJV|JPS|NIV|CSB)\)/g)];
const refs = [...new Set(cites.map(m => m[1].replace(/[–—]/g, "-").replace(/\s+/g, " ").trim()))];

if (!refs.length) { console.log("no tagged scripture citations found"); process.exit(0); }
console.log(`${refs.length} distinct reference(s) in ${file}\n`);

for (const ref of refs) {
  const url = `https://labs.bible.org/api/?passage=${encodeURIComponent(ref)}&type=json`;
  try {
    const rows = await (await fetch(url)).json();
    if (!rows.length) { console.log(`${ref}\n  (NET API returned nothing; check the reference)\n`); continue; }
    console.log(`${ref}  [NET]`);
    for (const r of rows) console.log(`  ${r.verse}. ${r.text.trim()}`);
    console.log();
  } catch (e) { console.log(`${ref}\n  (fetch failed: ${e.message})\n`); }
}
console.log("Quotations designated (NET) are from the NET Bible(R) copyright (c)1996, 2019 by Biblical Studies Press, L.L.C.");
