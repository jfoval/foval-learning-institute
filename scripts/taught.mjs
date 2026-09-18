/* What a learner already knows by the time they reach a course. `npm run taught <course>`.
 *
 * The Foval Core is taken in order, so a course may build on everything earlier in the path and
 * must not assume anything later. Nothing recorded that, so each course was outlined against its
 * own sources and nothing else, and it showed: Python Basics assumes a terminal, and the first
 * answer to that was "Digital Literacy will cover it", which is a Term 1 course that does not
 * exist. This prints the difference between what is taught and what is merely planned, so that
 * particular mistake cannot be made by accident again.
 *
 *   npm run taught courses/foundations/reading-well      what a reader of this course knows
 *   npm run taught reading-well                          same, by id
 *   npm run taught --term 6                              everything before term 6
 *   npm run taught <course> --headings                   add each lesson's section headings
 *
 * Objectives are the unit, not prose: they are the course's own testable statement of what a
 * learner can now do, and they are what a new lesson should build on or deliberately revisit.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { fileURLToPath } from "node:url";

const ROOT = process.env.FOVAL_ROOT ? path.resolve(process.env.FOVAL_ROOT) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const HEADINGS = args.includes("--headings");
const termFlag = args.indexOf("--term");
// termFlag is -1 when --term is absent, and args[-1 + 1] is args[0], which excluded the course.
const termValue = termFlag >= 0 ? args[termFlag + 1] : null;
const target = args.find(a => !a.startsWith("--") && a !== termValue);

const cp = yaml.load(fs.readFileSync(path.join(ROOT, "curriculum", "core-path.yaml"), "utf8"));
const path_ = [];
(cp.terms || []).forEach((t, ti) => (t.courses || []).forEach((c, ci) =>
  path_.push({ ...c, term: ti + 1, pos: ci + 1, termTitle: t.title })));

let cutTerm, cutPos, self = null;
if (termFlag >= 0) { cutTerm = Number(args[termFlag + 1]); cutPos = 0; }
else {
  const id = target ? path.basename(target.replace(/\/$/, "")) : null;
  self = path_.find(c => c.id === id);
  if (!self) {
    console.error(`Not a course on the Core path: ${target || "(no course given)"}\nUsage: npm run taught <courses/school/course-id | course-id> [--headings]\n       npm run taught --term <n>`);
    process.exit(1);
  }
  cutTerm = self.term; cutPos = self.pos;
}

const before = path_.filter(c => c.term < cutTerm || (c.term === cutTerm && c.pos < cutPos));

const load = c => {
  const dir = path.join(ROOT, "courses", c.school, c.id);
  if (!fs.existsSync(path.join(dir, "course.yaml"))) return { ...c, state: "not scaffolded", lessons: [] };
  const meta = yaml.load(fs.readFileSync(path.join(dir, "course.yaml"), "utf8")) || {};
  const ld = path.join(dir, "lessons");
  const files = fs.existsSync(ld) ? fs.readdirSync(ld).filter(f => f.endsWith(".md")).sort() : [];
  const lessons = files.map(f => {
    const raw = fs.readFileSync(path.join(ld, f), "utf8");
    const fm = yaml.load(raw.split(/^---$/m)[1] || "") || {};
    const body = raw.split(/^---$/m).slice(2).join("---");
    return {
      title: fm.title || f,
      objectives: fm.objectives || [],
      headings: [...body.matchAll(/^## (.+)$/gm)].map(m => m[1]).filter(h => !/^(Sources|Go deeper|Connections|Practice|What people get wrong)$/.test(h)),
    };
  });
  return { ...c, state: meta.status, lessons, outcomes: meta.outcomes || [] };
};

const loaded = before.map(load);
const written = loaded.filter(c => c.lessons.length);
const empty = loaded.filter(c => !c.lessons.length);

console.log(`\nWhat a learner knows on reaching ${self ? `${self.title} (term ${self.term}, position ${self.pos})` : `term ${cutTerm}`}\n`);

if (!written.length) console.log("Nothing. This is the first course on the path with any lessons written.\n");

for (const c of written) {
  console.log(`\n=== ${c.title}  (term ${c.term}, ${c.lessons.length} lessons, ${c.state})`);
  for (const l of c.lessons) {
    console.log(`  ${l.title}`);
    for (const o of l.objectives) console.log(`      - ${o}`);
    if (HEADINGS && l.headings.length) console.log(`      sections: ${l.headings.join(" | ")}`);
  }
}

if (empty.length) {
  console.log(`\n\n=== EARLIER ON THE PATH BUT NOT WRITTEN. ASSUME NONE OF IT.`);
  console.log(`A learner reaching your course has not been taught any of this, whatever the map says`);
  console.log(`it will cover one day. If your course needs it, your course teaches it.\n`);
  for (const c of empty) console.log(`  term ${c.term}  ${c.title}  (${c.state})`);
}

console.log(`\n${written.reduce((n, c) => n + c.lessons.length, 0)} lessons taught before this point, across ${written.length} course(s); ${empty.length} earlier course(s) not written.`);
console.log(HEADINGS ? "" : "Add --headings for each lesson's section titles.");
