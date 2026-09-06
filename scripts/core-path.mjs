// Keeps curriculum/TAXONOMY.md and curriculum/core-path.yaml agreeing with each other.
//
// Every course row in TAXONOMY.md carries a Path cell that is either a term (T1..T8) or the
// word "elective". That cell is the placement decision, and this script is what makes it
// impossible to skip: a new row with a blank or invalid Path fails the check, so a course
// cannot be added to the map without someone deciding where it sits on the Foval Core.
//
//   node scripts/core-path.mjs          check only (what npm run validate calls)
//   node scripts/core-path.mjs --write  rewrite the generated Core section in TAXONOMY.md
//
// Checks:
//   1. every course row has a valid Path cell
//   2. every row marked Tn appears in term n of core-path.yaml
//   3. every core-path.yaml entry has a row in TAXONOMY.md marked with its term
//   4. every row marked elective is absent from core-path.yaml
//   5. no duplicate course titles inside a school
//   6. the generated Core section in TAXONOMY.md matches core-path.yaml

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TAX_FILE = path.join(ROOT, "curriculum", "TAXONOMY.md");
const PATH_FILE = path.join(ROOT, "curriculum", "core-path.yaml");
const WRITE = process.argv.includes("--write");

const START = "<!-- GENERATED from curriculum/core-path.yaml by scripts/core-path.mjs. Do not edit by hand: run `npm run path -- --write`. -->";
const END = "<!-- END GENERATED -->";

const errors = [];
const fail = (m) => errors.push(m);
const norm = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();
const key = (school, title) => `${school}::${norm(title)}`;

// --- read the taxonomy ------------------------------------------------------

const taxSource = fs.readFileSync(TAX_FILE, "utf8");
const taxLines = taxSource.split("\n");
const rows = [];
const schools = [];
let school = null;

taxLines.forEach((line, i) => {
  const h = line.match(/^## \d+\. School of .*? — `([a-z0-9-]+)`/);
  if (h) { school = h[1]; schools.push(school); return; }
  if (line.startsWith("## ")) { school = null; return; }
  if (!school || !line.startsWith("|")) return;

  const cells = line.split("|").slice(1, -1).map((c) => c.trim());
  if (cells[0] === "Course" || /^-+$/.test(cells[0])) return;
  const where = `TAXONOMY.md:${i + 1} (${school}, "${cells[0]}")`;

  if (cells.length !== 5) {
    fail(`${where}: expected 5 columns (Course | Level | Status | Path | Notes), found ${cells.length}`);
    return;
  }
  const [title, level, status, place] = cells;
  if (!/^(Foundation|Core|Advanced)$/.test(level)) fail(`${where}: level "${level}" is not Foundation, Core or Advanced`);
  if (!/^(planned|research|drafting|published)$/.test(status)) fail(`${where}: status "${status}" is not planned, research, drafting or published`);
  if (!/^(T\d+|elective)$/.test(place)) {
    fail(`${where}: Path cell is "${place}". Every course needs a placement decision: a term (T1, T2, ...) if it belongs on the Foval Core, or "elective" if it does not. See "Placing a course on the Core" in TAXONOMY.md.`);
    return;
  }
  rows.push({ school, title, level, status, place, where });
});

if (!rows.length) fail("TAXONOMY.md: no course rows found. Has the table format changed?");

const byKey = new Map();
for (const r of rows) {
  const k = key(r.school, r.title);
  if (byKey.has(k)) fail(`${r.where}: duplicate course title in this school`);
  else byKey.set(k, r);
}

// --- read the path ----------------------------------------------------------

const corePath = yaml.load(fs.readFileSync(PATH_FILE, "utf8"));
const terms = corePath?.terms ?? [];
if (!terms.length) fail("core-path.yaml: no terms found");

const ALLOWED = new Set(["id", "school", "title", "optional", "standpoint"]);
const onPath = new Map();

terms.forEach((term, i) => {
  const tag = `T${i + 1}`;
  for (const c of term.courses ?? []) {
    const where = `core-path.yaml ${tag} (${c.title ?? JSON.stringify(c)})`;
    const stray = Object.keys(c).filter((k) => !ALLOWED.has(k));
    // A title with a comma in an unquoted flow mapping silently becomes extra keys.
    if (stray.length) fail(`${where}: unexpected keys ${stray.join(", ")}. A title containing a comma must be quoted.`);
    if (!c.id || !c.school || !c.title) { fail(`${where}: needs id, school and title`); continue; }

    const k = key(c.school, c.title);
    if (onPath.has(k)) fail(`${where}: appears on the path twice`);
    onPath.set(k, tag);

    const row = byKey.get(k);
    if (!row) fail(`${where}: no row in TAXONOMY.md for "${c.title}" under ${c.school}. Every course on the Core must exist on the map.`);
    else if (row.place !== tag) fail(`${where}: TAXONOMY.md has this course as ${row.place}, the path has it in ${tag}`);
  }
});

for (const r of rows) {
  if (r.place === "elective") {
    if (onPath.has(key(r.school, r.title))) fail(`${r.where}: marked elective but core-path.yaml lists it in ${onPath.get(key(r.school, r.title))}`);
    continue;
  }
  const n = Number(r.place.slice(1));
  if (!terms[n - 1]) fail(`${r.where}: ${r.place} is not a term in core-path.yaml, which has ${terms.length}`);
  else if (!onPath.has(key(r.school, r.title))) fail(`${r.where}: marked ${r.place} but core-path.yaml does not list it. Add it to that term, in the position where it should be taken.`);
}

// --- the generated Core section --------------------------------------------

function renderCore() {
  const out = [START, ""];
  out.push("The Core is the general-education spine: the sequence a student takes to become broadly educated, in the order that builds best. Roughly two years at a few hours a week. Any course can be taken standalone; the Core is the recommended path.");
  out.push("");
  out.push(`It runs to ${terms.reduce((a, t) => a + (t.courses ?? []).length, 0)} courses across ${terms.length} terms. Everything not listed here is an elective, taken whenever it is wanted.`);
  let n = 0;
  terms.forEach((term, i) => {
    out.push("", `**Term ${i + 1}: ${term.title}**`, "");
    if (term.theme) out.push(`*${term.theme}*`, "");
    for (const c of term.courses ?? []) {
      n++;
      const tags = [];
      if (c.optional) tags.push("skip if strong");
      if (c.standpoint === "christian") tags.push("Christian Standpoint");
      out.push(`${n}. ${c.title}${tags.length ? ` *(${tags.join("; ")})*` : ""}`);
    }
  });
  out.push("", END);
  return out.join("\n");
}

const generated = renderCore();
const a = taxSource.indexOf(START);
const b = taxSource.indexOf(END);

if (a === -1 || b === -1 || b < a) {
  fail("TAXONOMY.md: the generated Core section markers are missing. Run `npm run path -- --write` after putting them back.");
} else {
  const current = taxSource.slice(a, b + END.length);
  if (current !== generated) {
    if (WRITE) {
      fs.writeFileSync(TAX_FILE, taxSource.slice(0, a) + generated + taxSource.slice(b + END.length));
      console.log("wrote the generated Core section into TAXONOMY.md");
    } else {
      fail("TAXONOMY.md: the generated Core section is out of date with core-path.yaml. Run `npm run path -- --write`.");
    }
  }
}

// --- report -----------------------------------------------------------------

if (errors.length) {
  for (const e of errors) console.error("error: " + e);
  console.error(`\n${errors.length} problem${errors.length === 1 ? "" : "s"} between TAXONOMY.md and core-path.yaml`);
  process.exit(1);
}

const placed = rows.filter((r) => r.place !== "elective").length;
console.log(`ok: ${rows.length} courses across ${schools.length} schools, ${placed} on the Core over ${terms.length} terms, ${rows.length - placed} electives`);
