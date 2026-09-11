// Finds quiz explanations that contradict their own answer key.
//
// A learner who answers correctly and is then told they were wrong is the worst
// bug this project can ship, and it is invisible to `npm run validate`, which
// checks structure rather than sense. Two shapes of it are caught here.
//
//   VERDICT  the explanation announces a letter ("So A.", "That is B.", a bare
//            "D," opening) that is not the key.
//   REJECTED the explanation discusses the key as one of the wrong options
//            ("Option C confuses...", "Option A is too strong").
//
// Affirming the key by name is normal and correct prose, so "Option C is this
// course's reading" is not a finding. Only a negative verb next to the key is.
// The script still guesses; read each hit before changing anything.
const fs = require("fs"), path = require("path"), yaml = require("js-yaml");
const L = "ABCDEF";
// Paths are relative to the repo, not the shell's cwd, so this runs from anywhere.
const ROOT = path.resolve(__dirname, "..");
const dirs = p => fs.readdirSync(p, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name);

const files = [];
if (process.argv.length > 2) files.push(...process.argv.slice(2));
else for (const s of dirs(path.join(ROOT, "courses")))
  for (const c of dirs(path.join(ROOT, "courses", s)))
    for (const d of ["lessons", "assessments"]) {
      const p = path.join(ROOT, "courses", s, c, d);
      if (fs.existsSync(p)) for (const f of fs.readdirSync(p)) if (f.endsWith(".md")) files.push(path.relative(process.cwd(), path.join(p, f)));
    }

// Verbs that mark an option as one of the wrong ones.
const REJECT = /\b(?:is|are|was|were)\s+(?:the\s+)?(?:wrong|false|incorrect|too\s+\w+|not\b)|\b(?:confuses?|misstates?|reverses?|smuggles?|over-?corrects?|fails?|ignores?|mistakes?|conflates?|asserts what|evaluates an argument that was never|splits the difference|names the wrong|treats\b)/i;

let hits = 0;
for (const f of files) {
  const m = fs.readFileSync(f, "utf8").match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  // A quiz whose frontmatter does not parse must not be reported as clean.
  let d; try { d = yaml.load(m[1]); } catch (e) { hits++; console.log(`\n${f}  frontmatter does not parse: ${e.reason || e.message}`); continue; }
  const q = (d || {}).quiz || (d || {}).questions;
  if (!Array.isArray(q)) continue;

  q.forEach((it, i) => {
    const key = L[it.answer];
    const ex = String(it.explain || "").replace(/\s+/g, " ");
    if (!ex) return;
    const flags = [];

    // The verdict the explanation announces, if it announces one.
    const verdicts = [
      ...ex.matchAll(/\b(?:So|Hence|Therefore|That is|That's|so|that is)\s+([A-D])(?=[.;])/g),
      ...ex.matchAll(/^([A-D])[.,]\s/g),
    ].map(x => x[1]);
    if (verdicts.length && !verdicts.includes(key))
      flags.push(`VERDICT announces ${[...new Set(verdicts)].join("/")} but key is ${key}`);

    // Sentences that discuss the key with a rejecting verb.
    for (const sent of ex.split(/(?<=\.)\s+/)) {
      for (const mm of sent.matchAll(/\bOptions?\s+([A-D])(?:\s+and\s+([A-D]))?/g)) {
        if (![mm[1], mm[2]].includes(key)) continue;
        // Only a rejecting verb close behind the name is about that option.
        const near = sent.slice(mm.index + mm[0].length, mm.index + mm[0].length + 40);
        if (REJECT.test(near)) flags.push(`KEY ${key} REJECTED: ${sent.slice(0, 160)}`);
      }
    }

    if (flags.length) {
      hits++;
      console.log(`\n${f} item ${i + 1}  key=${key}`);
      for (const fl of flags) console.log("   " + fl);
    }
  });
}
console.log(hits ? `\n${hits} item(s) to read by eye.` : "No quiz explanation contradicts its key.");
