// Reorders one quiz item's options and fixes everything that points at them.
//
// Written because fourteen live lessons had quizzes a reader could pass by
// picking the longest option or always picking B, and fixing that by hand meant
// re-lettering the explanations too. Doing that by eye is how a lesson ends up
// telling a correct learner they were wrong.
//
// Usage:  node scripts/quiz-permute.cjs <file> <item-number> <newOrder>
//   e.g.  node scripts/quiz-permute.cjs lessons/02.md 1 CADB
// means the new option A is the old option C, the new B is the old A, and so on.
//
// It rewrites the option lines in place, recomputes `answer`, and remaps the
// letter references inside `explain` for the forms actually used in this repo:
// "(A)", "Option A", "Options A and B", and "A is/are/says/...".
// Any letter reference it could not confidently remap is reported, and the
// resulting explain is printed so you can read it. Always follow with
// `npm run quiz`.
const fs = require("fs");
const L = "ABCD";

const [file, itemArg, order] = process.argv.slice(2);
if (!file || !itemArg || !order) {
  console.error("usage: node scripts/quiz-permute.cjs <file> <item-number> <newOrder e.g. CADB>");
  process.exit(2);
}
const perm = [...order.toUpperCase()].map(c => L.indexOf(c));
if (perm.length < 2 || perm.some(i => i < 0) || new Set(perm).size !== perm.length) {
  console.error(`bad order "${order}": needs distinct letters from ${L.slice(0, perm.length)}`);
  process.exit(2);
}

const src = fs.readFileSync(file, "utf8");
const fmMatch = src.match(/^---\n([\s\S]*?)\n---/);
if (!fmMatch) { console.error("no frontmatter"); process.exit(1); }

// Split the frontmatter into items on the top-level "  - q:" lines.
const lines = fmMatch[1].split("\n");
const starts = [];
lines.forEach((l, i) => { if (/^  - q:/.test(l)) starts.push(i); });
const n = Number(itemArg);
if (!(n >= 1 && n <= starts.length)) {
  console.error(`item ${n} out of range; this file has ${starts.length} items`);
  process.exit(1);
}
const from = starts[n - 1];
const to = n < starts.length ? starts[n] : lines.length;

// Locate the option lines and the answer line inside this item.
let optStart = -1, optEnd = -1, ansLine = -1;
for (let i = from; i < to; i++) {
  if (/^    options:\s*$/.test(lines[i])) { optStart = i + 1; continue; }
  if (optStart >= 0 && optEnd < 0 && !/^      - /.test(lines[i])) optEnd = i;
  if (/^    answer:\s*\d+\s*$/.test(lines[i])) ansLine = i;
}
if (optStart < 0 || ansLine < 0) { console.error("could not find options: (must be one line each) and answer:"); process.exit(1); }
if (optEnd < 0) optEnd = to;
const opts = lines.slice(optStart, optEnd);
if (opts.length !== perm.length) {
  console.error(`item ${n} has ${opts.length} options but the order names ${perm.length}`);
  process.exit(1);
}

const oldAnswer = Number(lines[ansLine].match(/\d+/)[0]);
// newIndexOf[oldIndex] = where that option now sits
const newIndexOf = [];
perm.forEach((oldIdx, newIdx) => { newIndexOf[oldIdx] = newIdx; });

lines.splice(optStart, opts.length, ...perm.map(i => opts[i]));
lines[ansLine] = lines[ansLine].replace(/\d+/, String(newIndexOf[oldAnswer]));

// Remap letter references in this item's explain block.
//
// The bound matters. An earlier version walked from the item start using the
// pre-splice `starts` offsets, so it read into the following item and skipped
// lines in this one, and an explain that named a distractor by letter came out
// still pointing at the option that used to be there. Find the explain block
// explicitly instead, and stop at the next item.
const remap = c => L[newIndexOf[L.indexOf(c)]];
const VERBS = "is|are|was|were|says|said|treats|describes|names|reads|gets|misses|confuses|reverses|assumes|imagines|invents|makes|does|has|would|adds|drops|splits|fails|blames";
let unsure = [];
let itemEnd = lines.length;
for (let i = ansLine + 1; i < lines.length; i++) if (/^  - q:/.test(lines[i])) { itemEnd = i; break; }
let expStart = -1;
for (let i = ansLine + 1; i < itemEnd; i++) if (/^    explain:/.test(lines[i])) { expStart = i; break; }
if (expStart < 0) { console.error("warning: no explain: block found for this item"); }
// ONE pass, one combined pattern. Running the rules in sequence was a bug:
// "Option C invents" became "Option B invents" under the Option rule, and then
// the bare "<letter> <verb>" rule matched the B that had just been written and
// remapped it a second time. Two of the rules below overlap by design, so any
// letter must be rewritten exactly once.
const REFS = new RegExp(
  "\\(([A-D])\\)"                                   // (A)
  + "|\\bOptions\\s+([A-D])\\s+and\\s+([A-D])\\b"    // Options A and B
  + "|\\bOption\\s+([A-D])\\b"                        // Option A
  + `|\\b([A-D])(?=\\s+(?:${VERBS})\\b)`                // A is / A confuses
  + "|(?<=\\b(?:So|so|That is|that is|Hence|Therefore)\\s)([A-D])(?=[.;,])", // So A.
  "g");
for (let i = expStart < 0 ? itemEnd : expStart; i < itemEnd; i++) {
  let s = lines[i].replace(REFS, (m, paren, pairA, pairB, opt, bare, verdict) => {
    if (paren) return `(${remap(paren)})`;
    if (pairA) return `Options ${remap(pairA)} and ${remap(pairB)}`;
    if (opt) return `Option ${remap(opt)}`;
    if (bare) return remap(bare);
    return remap(verdict);
  });
  lines[i] = s;
  for (const mm of s.matchAll(/\b([A-D])\b/g)) {
    const before = s.slice(Math.max(0, mm.index - 12), mm.index);
    if (!/\(|Option[s]?\s+$|and\s+$/.test(before) && !new RegExp(`^\\s+(?:${VERBS})\\b`).test(s.slice(mm.index + 1)))
      unsure.push(`line ${i + 1}: "...${s.slice(Math.max(0, mm.index - 30), mm.index + 30)}..."`);
  }
}

fs.writeFileSync(file, src.replace(fmMatch[1], lines.join("\n")));
console.log(`${file} item ${n}: options reordered ${order}, answer ${L[oldAnswer]} -> ${L[newIndexOf[oldAnswer]]}`);
if (unsure.length) {
  console.log("\nLetter references it did NOT remap, read these by eye:");
  for (const u of [...new Set(unsure)]) console.log("   " + u);
}
