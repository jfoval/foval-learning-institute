// What a lesson actually takes, and rewriting `minutes:` to say so.
//
//   node scripts/reading-time.mjs           report every lesson: claimed, modelled, difference
//   node scripts/reading-time.mjs --write   rewrite `minutes:` where the difference is material
//
// Why this exists. `minutes:` was guessed when each lesson was drafted and then never checked.
// Across seventeen Stage 4 cycles it was understated every single time it was measured by hand,
// once by a factor of three, and on the three pre-pipeline placeholder courses it is overstated by
// a factor of four: 20 minutes claimed for 318 words. Both directions are a small lie to a learner
// planning an evening.
//
// The model, and how it was calibrated. Reading time is words over a rate, plus the work the page
// actually asks for. The rate is per course, because a course that sends you to open a Bible is
// genuinely slower than one you read straight through. The rates below were derived by solving for
// the rate that reproduces the values a human already measured by hand during Stage 4:
//
//   Bible Basics, lessons 1 to 10:  988 reading minutes over 111,027 words  ->  112 wpm
//   Logic and Argument, all ten:    540 reading minutes over  74,961 words  ->  139 wpm
//
// So 110 for a course read alongside a primary text, 140 for everything else. Applied back to the
// lessons it was derived from, the model lands within five minutes on most of them, which is the
// check that it is describing those lessons rather than inventing a number.
//
// What it cannot see: work that happens off the page. Bible Basics lesson 12 asks the reader to
// read three whole books of the Bible and write a fortnight's plan, which is why its 150 minutes is
// right and the model's 90 is wrong. Such lessons are listed in EXCEPTIONS with the reason.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WRITE = process.argv.includes("--write");

// Words a minute of careful reading, by course. 140 unless the course is read with something open
// beside it. Change one of these only with the arithmetic above redone.
const RATE = { "bible-basics": 110 };
const DEFAULT_RATE = 140;

// Minutes for the things a lesson asks the reader to do, on top of reading the words.
//
// An exercise is not a fixed cost. These range from "rewrite this sentence" to "open your bank
// statements and categorise a month" and "read Genesis 25 and 27, then mark every evaluative
// sentence". A flat figure priced the second kind at three minutes and made the model want to cut
// forty minutes off lessons a human had already measured correctly, which is how the flat figure was
// caught. So an exercise costs per numbered step, and any duration the block states about itself
// ("About fifteen minutes") is added on top, because that is the author telling you directly.
const COST = {
  exerciseStep: 2.5, // per numbered step in the block
  exerciseMin: 3,    // floor, for an exercise written as a single instruction
  predict: 1,        // stop and commit to an answer before reading on
  checkpoint: 1.25,  // answer, then check yourself against the hidden answer
  quiz: 0.75,        // per item, including reading the explanation
  svg: 0.75,         // reading a chart properly rather than glancing at it
  codeBlock: 0.5,    // per block, plus per line below
  codeLine: 0.1,
};

const WORD_NUM = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8,
  nine: 9, ten: 10, twelve: 12, fifteen: 15, twenty: 20, thirty: 30, forty: 40, "forty-five": 45, sixty: 60 };

// "About fifteen minutes.", "Take 20 minutes", "Spend half an hour" — the author pricing their own
// task. This has to be narrow. A first version matched any "N minutes" anywhere in the block and
// added ninety minutes to a How to Learn Anything lesson, because that course's subject *is* how
// long to study for and its exercises are full of "twenty minutes" as content rather than as
// instruction. So the phrase must open a sentence and carry a cue word, and the total is capped:
// this is a nudge on top of the step count, not a second estimate of the whole task.
const CUE = "(?:about|around|roughly|take|spend|allow|give (?:it|this|yourself))";
function statedMinutes(text) {
  let total = 0;
  for (const m of text.matchAll(new RegExp(`(?:^|[.\n]\\s*)${CUE}\\s+(\\d{1,3}|[a-z]+(?:-[a-z]+)?)\\s+minutes\\b`, "gim"))) {
    const raw = m[1].toLowerCase();
    const n = /^\d+$/.test(raw) ? Number(raw) : WORD_NUM[raw];
    if (n && n <= 60) total += n;
  }
  for (const _ of text.matchAll(new RegExp(`(?:^|[.\n]\\s*)${CUE}\\s+half an hour\\b`, "gim"))) total += 30;
  return Math.min(total, 30);
}

// The cost of one :::exercise block: its steps, plus whatever duration it claims for itself.
function exerciseCost(block) {
  const steps = (block.match(/^\s*\d+\.\s/gm) || []).length;
  return Math.max(COST.exerciseMin, steps * COST.exerciseStep) + statedMinutes(block);
}

// Lessons whose real load is not on the page. Keep the reason; do not add to this list to avoid a
// number you dislike.
const EXCEPTIONS = {
  "courses/christian-studies/bible-basics/lessons/12-method-tools-plan.md":
    "asks the reader to read three whole books of the Bible and write a fortnight's study plan",
};

const round5 = (n) => Math.max(5, Math.round(n / 5) * 5);

export function estimate(file, src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const [, fm, body] = m;

  const courseId = file.split("/")[2];
  const rate = RATE[courseId] ?? DEFAULT_RATE;

  const count = (re) => (body.match(re) || []).length;
  const svg = count(/<svg/g);

  // Code is read line by line, not at prose speed, so take it out of the word count first.
  const fences = body.match(/^```[\s\S]*?^```/gm) || [];
  const codeLines = fences.reduce((n, f) => n + f.split("\n").length - 2, 0);

  const prose = body.replace(/<svg[\s\S]*?<\/svg>/g, "").replace(/^```[\s\S]*?^```/gm, "");
  const words = (prose.match(/[A-Za-z0-9'\u2019-]+/g) || []).length;

  const quiz = (fm.match(/^\s*- q:/gm) || []).length;

  const exercises = body.match(/^:::exercise[\s\S]*?^:::/gm) || [];

  const minutes =
    words / rate +
    exercises.reduce((n, b) => n + exerciseCost(b), 0) +
    count(/^:::predict/gm) * COST.predict +
    count(/^:::checkpoint/gm) * COST.checkpoint +
    quiz * COST.quiz +
    svg * COST.svg +
    fences.length * COST.codeBlock +
    codeLines * COST.codeLine;

  const claimed = Number((fm.match(/^minutes:\s*(\d+)/m) || [])[1] || 0);
  return { rate, words, claimed, modelled: round5(minutes) };
}

const files = [];
for (const school of fs.readdirSync(path.join(ROOT, "courses"))) {
  const sdir = path.join(ROOT, "courses", school);
  if (!fs.statSync(sdir).isDirectory()) continue;
  for (const course of fs.readdirSync(sdir)) {
    const ldir = path.join(sdir, course, "lessons");
    if (!fs.existsSync(ldir)) continue;
    for (const f of fs.readdirSync(ldir).sort()) if (f.endsWith(".md")) files.push(path.join(ldir, f));
  }
}

let changed = 0;
const rows = [];
for (const abs of files) {
  const rel = path.relative(ROOT, abs);
  const src = fs.readFileSync(abs, "utf8");
  const e = estimate(rel, src);
  if (!e) continue;
  const skip = EXCEPTIONS[rel];
  // A disagreement has to be both absolutely and proportionally real before it overwrites a number
  // a human set. Ten minutes on a two-hour lesson is inside this model's precision and inside the
  // precision of the hand measurement it would be overruling; ten minutes on a twenty-minute lesson
  // is not. So: more than 10 minutes out, and more than 15 percent out.
  const diff = Math.abs(e.modelled - e.claimed);
  const material = !skip && diff > 10 && (e.claimed === 0 || diff / e.claimed > 0.15);
  rows.push({ rel, ...e, skip, material });
  if (material && WRITE) {
    fs.writeFileSync(abs, src.replace(/^minutes:\s*\d+/m, `minutes: ${e.modelled}`));
    changed++;
  }
}

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("lesson", 62) + "wpm  words  claimed  modelled  change");
for (const r of rows) {
  const d = r.modelled - r.claimed;
  const note = r.skip ? "  kept: " + r.skip
    : r.material ? `  ${d > 0 ? "+" : ""}${d}`
    : d ? `  (${d > 0 ? "+" : ""}${d}, inside precision)` : "  ok";
  console.log(pad(r.rel.replace("courses/", "").replace("/lessons/", "/"), 62) +
    pad(r.rate, 5) + pad(r.words, 7) + pad(r.claimed, 9) + pad(r.modelled, 10) + note);
}
const off = rows.filter((r) => r.material);
console.log(`\n${rows.length} lessons, ${off.length} materially out` +
  (WRITE ? `, ${changed} rewritten` : ". Run with --write to fix them."));
