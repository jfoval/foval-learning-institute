/* Check every sourced quotation in a course's lessons against its research/SOURCES.md.
 *
 * Stage 4 on Memory lesson 5 found a passage printed in quotation marks, attributed to the
 * authors and carrying a source marker, that nobody wrote: it was the research file's own
 * unquoted commentary, turned into a quotation by a drafter. Every other quotation in that
 * lesson matched character for character, which is why a reviewer reading for sense would not
 * have caught it. That is the one class of error this institute's whole method is built to make
 * impossible, and it is mechanical to find.
 *
 * This is a reviewer's tool and NOT a build check, deliberately. A repo-wide run reports 212
 * misses out of 458 quotations, and almost all of them are legitimate: Bible Basics quotes
 * scripture, Logic and Argument quotes the arguments it analyses, and Reading Well quotes the
 * passages it teaches on. None of those live in SOURCES.md and none of them should. A check that
 * cried wolf on half the repo would be ignored within a week, which is worse than no check.
 *
 * What it looks for: a quoted passage of 40 characters or more followed by a source marker, which
 * is a lesson saying "the source I am citing says this". Run it on any course whose sources are
 * papers rather than primary texts.
 *
 *   npm run quotes                    every course
 *   npm run quotes memory             one course, by directory name
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COURSES_DIR = path.join(ROOT, "courses");
const only = process.argv[2];

// Normalise away everything that is presentation rather than wording: markdown emphasis, link
// syntax, curly quotes, the [B]racketed capital a quoter uses when they start mid-sentence, and
// line wrapping. What is left is the words, which is what has to match.
const norm = s => s
  .replace(/\*\*/g, "")
  .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
  .replace(/\[([A-Za-z])\]/g, "$1")
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/[−–]/g, "-")
  .replace(/\s+/g, " ")
  .trim()
  .toLowerCase();

let checked = 0, missing = 0, courses = 0;
for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory()))
for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
  if (only && cdir.name !== only) continue;
  const base = path.join(COURSES_DIR, school.name, cdir.name);
  const sourcesPath = path.join(base, "research", "SOURCES.md");
  const lessonsDir = path.join(base, "lessons");
  if (!fs.existsSync(sourcesPath) || !fs.existsSync(lessonsDir)) continue;
  courses++;
  const sources = norm(fs.readFileSync(sourcesPath, "utf8"));
  for (const f of fs.readdirSync(lessonsDir).filter(x => x.endsWith(".md")).sort()) {
    const body = fs.readFileSync(path.join(lessonsDir, f), "utf8").split(/^---$/m).slice(2).join("---");
    // The marker can sit after a closing bold span, and a load-bearing quotation is often short.
    // Both were found by a Stage 4 review on 2026-09-19: the one quotation a whole course rested
    // on was invisible here because it was bolded, which is exactly why it was bolded.
    // A quotation long enough to need a block quote wraps, and every continuation line then starts
    // with "> ". Those markers are presentation, not wording, and leaving them in made three
    // verbatim quotations of two real documents read as misses on 2026-09-19. Strip the marker
    // from the start of every line before matching; norm() collapses the whitespace that is left.
    const flat = body.replace(/\*\*/g, "").replace(/^>[ \t]?/gm, "");
    for (const m of flat.matchAll(/["“]([^"“”]{25,})["”][.,;:]?\s*\[\d+\]/g)) {
      checked++;
      // A quoter legitimately moves the closing full stop inside the quotation marks and
      // capitalises the first letter of a passage they start mid-sentence. Neither is a change of
      // wording, so neither should be reported.
      const q = norm(m[1]);
      if (sources.includes(q) || sources.includes(q.replace(/\.$/, ""))) continue;
      missing++;
      console.log(`MISS ${path.relative(ROOT, path.join(lessonsDir, f))}`);
      const shown = m[1].replace(/\s+/g, " ").trim();
      console.log(`     ${shown.slice(0, 150)}${shown.length > 150 ? "..." : ""}`);
    }
  }
}

if (!courses) { console.log(only ? `no course directory named "${only}"` : "no courses with both SOURCES.md and lessons"); process.exit(1); }
console.log(`\n${checked} sourced quotation${checked === 1 ? "" : "s"} across ${courses} course${courses === 1 ? "" : "s"}, ${missing} not found in SOURCES.md`);
console.log(missing
  ? "A miss is not automatically a defect: a primary text, a scripture reference or a quotation\nfrom something the course quotes rather than cites will not be in SOURCES.md. Read each one and\nask whether the source entry it points at actually contains it."
  : "Every sourced quotation appears in the research file.");
