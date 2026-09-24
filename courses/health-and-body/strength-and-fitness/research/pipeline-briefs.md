# Pipeline briefs used for this course's Stage 3 and Stage 4

Kept so a later session can run the remaining lessons the same way. Each lesson: one drafting subagent (DRAFT brief), two fresh-context reviewers F and P (REVIEW brief), one fixer in a third context (FIX brief). Paths to a scratchpad in these briefs did not survive the session; the raw downloads they mention are gone, and `SOURCES.md` carries every quotation the lessons use.

---

## Drafting brief: Strength and Fitness, Stage 3

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course: `courses/health-and-body/strength-and-fitness`.
You are drafting ONE lesson (number given in your task). Another session is building the Nutrition
course in the same tree: never touch any file outside the one lesson file you are writing. Do not
commit, do not run git add. Do not edit SOURCES.md, OUTLINE.md, build.mjs or anything else.

## Read first, in full, in this order
1. `.claude/commands/draft-lesson.md` (the whole thing, especially "Defects this drafter repeats":
   read your draft against it before you finish).
2. `docs/EDITORIAL_STANDARDS.md` and `docs/STYLE_GUIDE.md`.
3. `courses/CLAUDE.md` (lesson format, block grammar).
4. The course's `course.yaml`, `research/OUTLINE.md` (all of it: the eight decisions bind you; then
   your lesson's section and the ones either side).
5. `research/SOURCES.md`: the front matter and synthesis at the top and foot, then **every entry your
   lesson's outline section cites, read in full**. The file is long (53k words); read the parts you
   need, but read them fully, not by grep snippets.
6. Run `npm run taught courses/health-and-body/strength-and-fitness` and read what earlier courses
   taught (build on them by name, e.g. "Mental Fitness lesson 5", "Nutrition lesson 3").
7. Any lessons of this course already in `lessons/` (for connections and to avoid repeating their
   examples, figures and phrasing).
8. One published health lesson as a model of house format and voice, e.g.
   `courses/health-and-body/sleep/lessons/02-fourteen-nights.md` (read it; do not copy its shape).

## Hard requirements
- File: `courses/health-and-body/strength-and-fitness/lessons/NN-slug.md` (slug from the lesson
  title, short, lowercase, hyphens).
- **The safety callout** from OUTLINE decision 1, byte for byte, directly after the opening
  paragraph(s). `npm run validate` fails if it differs by one character.
- Every required element of standards 1.2; 2 to 3 `:::predict`, at least 2 `:::checkpoint`, at least
  one `:::exercise` with a timing that opens "Take NN minutes" (digits), one worked example with a gap.
- Footnote markers `[1]` on checkable claims and a `## Sources` section. Each source entry states its
  read level **copied from SOURCES.md** in plain words, with the SOURCES entry id only in an HTML comment (`<!-- SOURCES R2.2 -->`).
- **Quotation marks only around text you copied out of SOURCES.md's own quotations.** Your summary of a
  source is your sentence. Keep every hedge and scope. Run `npm run quotes courses/health-and-body/strength-and-fitness`
  if it exists and fix anything it flags.
- Links in the teaching prose where a source is quoted (not only in Go deeper); use the URLs recorded in
  SOURCES. Videos: `:::video` with a YouTube URL from SOURCES R5 Part G only. Images: only the Commons
  files recorded in R5 Part H, with credit and licence in the caption.
- No em dashes, no spaced en dashes, nothing from the banned list. Contractions at roughly 5 to 8 per
  1,000 body words. Bold under about 25 spans per 1,000 words, key terms only.
- Quiz: 4 to 6 items, at least half application with new cases (no people or numbers from the body),
  option lengths within about 15 characters, all four positions used, no adjacent repeat, an irregular
  key sequence of your own, explanations naming distractors by content, never by position.
- `minutes:` from `npm run minutes` (use its measured value; `npm run minutes -- --write` may be used
  only if it touches only your file; otherwise edit the number by hand).
- A self-check never prints its own answer in body text.
- Charts (optional, only if one teaches better than prose): inline SVG per the rules in
  `.claude/commands/review-lesson.md` (no `<g>`, every size an attribute ≥ 15, viewBox near 420, no
  blank lines inside, `var(--token, #literal)` fills, a `<desc>`), drawn only from numbers in SOURCES.

## Before you finish
Run `npm run validate` (check the exit code; warnings about other courses are not yours) and fix every
line that names your file. Re-read your draft against the defect list. Then reply with: the file path,
word count, measured minutes, the quiz key sequence, the SOURCES entries used, anything you were unsure
of, and any place where the lesson wanted something SOURCES did not have (and what you did instead).
## Course conventions settled so far
- The course has TEN lessons: 1 How much, and what it rests on; 2 How hard; 3 Building endurance;
  4 How strength adapts; 5 What the variables do; 6 Technique; 7 Writing and progressing a plan;
  8 Warm-up, stretching, soreness and recovery; 9 Training across a life; 10 Reading a claim about
  your training. Cross-references must use these numbers.
- ACSM 2026's effort target is "2–3 repetitions in reserve (RIR)"; RIR/effort-setting for lifting
  is taught in lesson 5.
- Internal pipeline words ("the research file", "this course's researcher", "SOURCES R3.2a") do
  not belong in learner-facing text. Sources entries may keep an HTML comment `<!-- SOURCES R3.2a -->`
  if useful, not visible IDs; say "this course read the abstract only" instead of naming the file.
- Measured patterns from the first four drafts' reviews: exercise timings overstated (a walk of three
  5-minute blocks written as "Take 30 minutes"); quiz keys that are the only hedged or most cautious
  option (a reader passes by picking the careful answer: make distractors equally careful); quiz items
  that restate body examples; claims about a source's content that the source does not make, carried
  in from SOURCES summaries (open the primary where SOURCES gives a free URL); every heart-rate or
  percentage example redone against the paper's own table, not a summary range.
- A lifting or effort exercise always carries its set-up safety line (stable support, keep breathing,
  stop at the callout's signs).

---

## Stage 4 review brief: Strength and Fitness (Tier B, split, two reviewers)

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course: `courses/health-and-body/strength-and-fitness`.
You are one of two reviewers of one lesson, each in a fresh context. **You report; you do not edit
anything in the repo.** Write your findings to the scratch file named in your task, then reply with a
short summary (verdicts per pass and the count of findings by severity).

A sensitive domain (medicine) under standards 3.4. Assume the lesson contains errors and find them.

## Read first
- `.claude/commands/review-lesson.md` (the passes and the traps; you run the passes assigned below).
- `.claude/commands/draft-lesson.md`, the whole "Defects this drafter repeats" list. It is the record
  of what actually ships wrong; check the lesson against each item.
- `docs/EDITORIAL_STANDARDS.md`, `docs/STYLE_GUIDE.md`.
- The course's `research/OUTLINE.md` (the eight decisions bind the lesson) and `research/SOURCES.md`
  (the entries the lesson cites, read in full, plus the head and foot sections).
- The lesson itself.

## Reviewer F: facts, neutrality, safety
1. **Fact-check** every number, name, date, quotation, read level and mechanism against SOURCES.md.
   String-match every quotation against SOURCES (a quotation not in SOURCES is a finding). Check every
   unquoted lead-in for a dropped hedge or scope (defect 19). Check every read-level statement against
   SOURCES (defect 22) and ask what it licenses. For each mechanistic claim in the course's own voice,
   ask which source it came from (defect 22, third form). **Redo every sum and conversion by hand**
   and say that you did. Where SOURCES gives a free URL or PMC id for a primary the lesson leans on,
   fetch it (curl, pdftotext) and check the lesson against the primary too; SOURCES can carry trims
   (defect 26). Record each claim checked with a verdict.
2. **Neutrality**: sort contested and value claims (3.1); Turing test each position; count citations,
   last words, who is explained versus quoted, whose errors are in the misconception list, across the
   whole lesson; loaded language; omitted facts. Name the perspectives you checked against.
3. **Safety**: the callout present and byte-identical (run `npm run validate` and look for this file);
   every place a reader might take description as instruction for a condition, a pregnancy, a child or
   an injury; every safety warning a competent instructor would give present; no prescription outside
   OUTLINE decision 3.

## Reviewer P: depth, pedagogy, cold start, voice and media
1. **Depth**: specificity, expert and transfer tests per section; required elements of 1.2; padding.
2. **Pedagogy**: objectives testable; worked examples before problems; one worked example with a gap;
   exercises real; predict and checkpoint blocks placed well and not spoiled by their headings. **Quiz:
   measure option lengths** (report the character counts), key positions, adjacent repeats, absolutes;
   check items don't reuse the body's own people or numbers; at least half application; read each
   explanation against the option its key selects; no distractor named by position. Execute every
   stem against its model answer. Trace every "if you got X, you did Y" backwards. Redo every sum.
3. **Cold start**: run `npm run taught courses/health-and-body/strength-and-fitness`, read the lesson
   as someone who has done exactly those courses, walk every instruction literally, flag every
   assumed term, tool, piece of equipment or habit never explained. For a practical lesson: could a
   beginner actually do each exercise as written, safely?
4. **Voice and media**: em and en dashes, banned words and shapes (quote line numbers), contractions
   per 1,000 body words (band 5 to 8), bold spans per 1,000 (over 25 is a finding), bolded paragraph
   openers, one-line morals; `minutes:` against `npm run minutes`; links in teaching prose; every
   video and image URL and credit against SOURCES R5 Parts G and H; **open every SVG and read it**.

## Findings format
Numbered with your letter (F1, F2... or P1, P2...), each with severity [critical/major/minor], the
quoted passage with its line number, the problem, the evidence, and a specific fix (replacement text
where you can). End with your verdicts per pass.
## Course conventions settled so far
- The course has TEN lessons: 1 How much, and what it rests on; 2 How hard; 3 Building endurance;
  4 How strength adapts; 5 What the variables do; 6 Technique; 7 Writing and progressing a plan;
  8 Warm-up, stretching, soreness and recovery; 9 Training across a life; 10 Reading a claim about
  your training. Cross-references must use these numbers.
- ACSM 2026's effort target is "2–3 repetitions in reserve (RIR)"; RIR/effort-setting for lifting
  is taught in lesson 5.
- Internal pipeline words ("the research file", "this course's researcher", "SOURCES R3.2a") do
  not belong in learner-facing text. Sources entries may keep an HTML comment `<!-- SOURCES R3.2a -->`
  if useful, not visible IDs; say "this course read the abstract only" instead of naming the file.

---

## Fix brief: Strength and Fitness, Stage 4 fix pass and voice checks

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course: `courses/health-and-body/strength-and-fitness`.
You apply two reviewers' findings to one lesson, in a context that neither wrote nor reviewed it.
Touch only: the lesson file, and its review file `research/reviews/<lesson-id>.md` (create it), and
`research/reviews/course-wide.md` and `research/reviews/README.md` if they need an entry (create them
if absent; the README follows `courses/health-and-body/sleep/research/reviews/README.md` in shape).
Do not commit or git add. Do not touch any other file (another session works in this tree).

## Read first
`.claude/commands/review-lesson.md` ("After the review"), the "Defects this drafter repeats" list in
`.claude/commands/draft-lesson.md`, `docs/STYLE_GUIDE.md`, `templates/REVIEWS.md`, the course's
`research/OUTLINE.md`, the SOURCES.md entries the lesson cites, the lesson, and both findings files.

## Do
1. Write the review file: a dated entry "## 2026-09-24 — Lesson NN — Stage 4, two reviewers in
   parallel, Tier B (split)" (that header's dash is the template's and is allowed in review files),
   naming reviewers F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and media),
   their verdicts, every finding with its ID in one or two lines.
2. Apply every finding you agree with. Verify a factual finding against SOURCES.md before applying it;
   if a reviewer is wrong, decline it and say why. Rewrite generic passages with specifics from
   SOURCES; never add a fact that is not in SOURCES.
3. Then the voice checks, in the same pass: dashes and banned words; bold to key terms (under 25 per
   1,000 body words); contractions in the 5 to 8 band; two or three `:::predict`, a `:::checkpoint`
   after each hard idea, one worked example with a gap; every `[n]` has a footnote; read the opening.
4. After any quiz edit, read each explanation against the option its key now selects. Re-measure
   option lengths.
5. `npm run minutes` and set `minutes:` to the measured value for this file. `npm run validate` and
   check its exit code; fix every line naming this file. `npm run quotes courses/health-and-body/strength-and-fitness`
   and fix anything for this lesson.
6. Append "### Resolutions applied" to the review entry: each finding fixed or declined with a reason,
   and the final measures (words, minutes, bold and contraction densities, quiz key sequence and
   option-length spread). "**Status after review:** clean" or "needs second pass".
7. Reply with a 6-line summary, including anything a later lesson or the course-wide file should know.

## When a finding is in SOURCES.md too
If a reviewer shows that `research/SOURCES.md` itself carries the error (a trimmed quotation, a
misread figure, a claim about a source that the source does not make), correct the SOURCES.md entry
first, then the lesson (drafting defect 26). Verify against the primary text before editing: the
reviewer's saved downloads, or fetch it yourself (curl with a browser User-Agent, pdftotext). Edit
SOURCES.md only with small targeted Edit-tool replacements, never by rewriting the file, because
other fixers may be editing other entries at the same time. Add a dated note in the entry saying what
was corrected and why, and list the SOURCES corrections in the review file.

## Course conventions settled so far
- The course has TEN lessons: 1 How much, and what it rests on; 2 How hard; 3 Building endurance;
  4 How strength adapts; 5 What the variables do; 6 Technique; 7 Writing and progressing a plan;
  8 Warm-up, stretching, soreness and recovery; 9 Training across a life; 10 Reading a claim about
  your training. Cross-references must use these numbers.
- ACSM 2026's effort target is "2–3 repetitions in reserve (RIR)"; RIR/effort-setting for lifting
  is taught in lesson 5.
- Internal pipeline words ("the research file", "this course's researcher", "SOURCES R3.2a") do
  not belong in learner-facing text. Sources entries may keep an HTML comment `<!-- SOURCES R3.2a -->`
  if useful, not visible IDs; say "this course read the abstract only" instead of naming the file.
