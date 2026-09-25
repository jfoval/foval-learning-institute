# Pipeline briefs used for this course's Stage 3 and Stage 4

Kept so a later session can run the remaining lessons the same way, adapted from
`strength-and-fitness/research/pipeline-briefs.md`. Each lesson: one drafting subagent (DRAFT
brief), two fresh-context reviewers F and P (REVIEW brief), one fixer in a third context (FIX
brief). Findings files live in the session's scratchpad and do not survive it; the lesson's review
file in `reviews/` is the record.

---

## Drafting brief: First Aid and CPR, Stage 3

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course: `courses/health-and-body/first-aid`.
You are drafting ONE lesson (number given in your task). Other agents are reviewing other lessons in
the same tree: never touch any file outside the one lesson file you are writing. Do not commit, do
not run git add. Do not edit SOURCES.md, OUTLINE.md, build.mjs or anything else.

## Read first, in full, in this order
1. `.claude/commands/draft-lesson.md` (the whole thing, especially "Defects this drafter repeats":
   read your draft against it before you finish).
2. `docs/EDITORIAL_STANDARDS.md` and `docs/STYLE_GUIDE.md`.
3. `courses/CLAUDE.md` (lesson format, block grammar).
4. The course's `course.yaml`, `research/OUTLINE.md`: the "How many lessons", "What is deliberately
   left out", and the **twelve decisions** (they bind you), then your lesson's section and the ones
   either side, then "Neutrality notes".
5. `research/SOURCES.md`: the synthesis at the top (through "Suggested lesson sequence"), then
   **every Part and section your lesson's outline section cites, read in full**. The file is long
   (68k words); read the parts you need, but read them fully, not by grep snippets. The `<!--
   unread: -->` line and the Stage 1 gates at the end of the file bind you: nothing named there is
   cited, and a gate that is not closed is not relied on.
6. Run `npm run taught courses/health-and-body/first-aid` and read what earlier courses taught
   (build on them by name, e.g. "Sleep lesson 4", "Strength and Fitness lesson 1").
7. Every lesson of this course already in `lessons/` (for connections, for the conventions they
   settled, and to avoid repeating their examples, figures and phrasing).
8. The two most recent review files in `research/reviews/` (the pattern of what got found).

## Hard requirements
- File: `courses/health-and-body/first-aid/lessons/NN-slug.md` (slug from the outline title,
  short, lowercase, hyphens).
- **The safety callout** from OUTLINE decision 4, byte for byte, directly after the opening
  paragraph(s). `npm run validate` fails if it differs by one character. Copy it from lesson 1.
- **Every guideline-based instruction carries its body and year in a parenthesis** (decision 3):
  "(RCUK 2025)", "(AHA 2025, COR 2b, C-LD)". One instruction, one attribution. Dated figures
  quarantined one per sentence with their date. Never "current" without a year.
- **US and UK/Europe side by side** where they differ (decision 2): a two-column table or an "In
  the US / In the UK and Europe" pair, never interleaved. Where they agree, one sentence says so.
  Neither called wrong; each side's reason in its own words, or say none is given.
- **Objectives use page-testable verbs only** (decision 1): state, describe, decide, recognise,
  sequence, explain, compare, identify. Never "perform". A physical-skill lesson ends by pointing
  at a hands-on class and the free practice tools (RevivR, Lifesaver), and to lesson 16 for where
  to train. **No exercise asks a reader to do a technique on a living person or to dial an
  emergency number**; rehearsals go into a cushion, a rolled towel or a doll, or are spoken aloud.
- **No mechanism from general knowledge** (decision 8): where SOURCES gives none, give the
  instruction and say the source gives no mechanism. No popular figures a read source does not print.
- Units in the source's own unit first with the conversion in brackets (decision 7).
- The law is general information, labelled in the body at the point of use (decision 9).
- Every required element of standards 1.2; 2 to 3 `:::predict`, at least 2 `:::checkpoint`, at
  least one `:::exercise` with a timing that opens "Take NN minutes" (digits), one worked example
  with a gap.
- Footnote markers `[1]` on checkable claims and a `## Sources` section. Each source entry states
  its read level **copied from SOURCES.md** in plain words, names the section read, and for the AHA
  and the AHA/Red Cross 2024 guideline the Wayback snapshot ID from SOURCES (decision 12), with the
  SOURCES part and section only in an HTML comment (`<!-- SOURCES Part A 2.4 -->`).
- **Quotation marks only around text you copied out of SOURCES.md's own quotations.** Your summary
  of a source is your sentence. Keep every hedge and scope. Run `npm run quotes
  courses/health-and-body/first-aid` and fix anything it flags.
- Links in the teaching prose where a source is quoted (not only in Go deeper); use the URLs
  recorded in SOURCES. Videos: `:::video` only with a YouTube URL from SOURCES and only if gate G4
  is closed for that video; images: only Commons files recorded in SOURCES and checked under gate
  G16, with credit and licence in the caption. Otherwise no media, which is allowed.
- No em dashes, no spaced en dashes, nothing from the banned list. Contractions at roughly 5 to 8
  per 1,000 body words. Bold under about 25 spans per 1,000 words, key terms only.
- Quiz: 4 to 6 items, at least half application with new cases (no people or numbers from the
  body), each safety-step item naming the country whose rule it asks about or correct under both
  (decision 12), option lengths within about 15 characters, all four positions used, no adjacent
  repeat, an irregular key sequence of your own that differs from the previous lesson's,
  explanations naming distractors by content, never by position.
- `minutes:` from `npm run minutes` (use its measured value; edit the number by hand).
- A self-check never prints its own answer in body text.
- Charts (optional, only if one teaches better than prose): inline SVG per the rules in
  `.claude/commands/review-lesson.md` (no `<g>`, every size an attribute ≥ 15, viewBox near 420, no
  blank lines inside, `var(--token, #literal)` fills, a `<desc>`), drawn only from numbers in
  SOURCES. A sequence diagram is allowed; no drawn body, hand or technique (decision 10).

## Before you finish
Run `npm run validate` (check the exit code; warnings about other courses are not yours) and fix
every line that names your file. Re-read your draft against the defect list. Then reply with: the
file path, word count, measured minutes, the quiz key sequence, the SOURCES sections used, anything
you were unsure of, and any place where the lesson wanted something SOURCES did not have (and what
you did instead).

## Course conventions settled so far
- Sixteen lessons, numbered as in OUTLINE "How many lessons, and why". Cross-references use those
  numbers and titles.
- "The call handler" is the course's term for both countries' dispatcher (decision 4); lesson 2
  said once that the terms are the same job.
- The grading key (COR, LOE, ILCOR strong/weak, certainty) was taught in lesson 4; later lessons use
  the labels in the parenthesis without re-teaching them.
- Internal pipeline words ("the research file", "SOURCES Part A", "gate G4") do not belong in
  learner-facing text; say "this course read the abstract only".
- Measured patterns from lessons 1 to 3's reviews (see `reviews/`): a quotation quoted by its
  reassuring half; a reason given for a guideline instruction that the guideline does not give;
  procedure invented in the course's own voice ("swap on thirty"); the AHA and RCUK credited with
  the same posture when each describes half of it; a predict block asking what the sentence above
  it said; pipeline talk in learner prose; a rehearsal exercise without a stop-if-it-hurts line;
  a description of a public page as "lagging" more than once.

---

## Stage 4 review brief: First Aid and CPR (Tier B, split, two reviewers)

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course: `courses/health-and-body/first-aid`.
You are one of two reviewers of one lesson, each in a fresh context. **You report; you do not edit
anything in the repo.** Write your findings to the scratch file named in your task, then reply with a
short summary (verdicts per pass and the count of findings by severity).

A sensitive, safety-critical domain (medicine) under standards 3.4. Assume the lesson contains
errors and find them. **Compression rate, depth, ratios, ages, weights and cooling times are the
numbers to check first, against the guideline text itself, not against SOURCES** (OUTLINE decisions
7 and 12).

## Read first
- `.claude/commands/review-lesson.md` (the passes and the traps; you run the passes assigned below).
- `.claude/commands/draft-lesson.md`, the whole "Defects this drafter repeats" list.
- `docs/EDITORIAL_STANDARDS.md`, `docs/STYLE_GUIDE.md`.
- The course's `research/OUTLINE.md` (the twelve decisions bind the lesson; then this lesson's
  section) and `research/SOURCES.md` (the sections the lesson cites, read in full, plus the
  synthesis at the top, the `<!-- unread: -->` line and the Stage 1 gates at the end).
- The earlier review files in `research/reviews/` (what got found before, so you check for repeats).
- The lesson itself.

## Reviewer F: facts, neutrality, safety
1. **Fact-check** every number, name, date, quotation, read level, guideline attribution, COR/LOE
   label and mechanism against SOURCES.md. String-match every quotation against SOURCES (a
   quotation not in SOURCES is a finding). Check every unquoted lead-in for a dropped hedge or
   scope (defect 19). Check every read-level statement against SOURCES (defect 22) and ask what it
   licenses. For each mechanistic claim in the course's own voice, ask which source it came from
   (defect 22, third form; OUTLINE decision 8). Check nothing on the unread line or behind an open
   gate is cited or named (decision 6). **Redo every sum and conversion by hand** and say that you
   did. Where SOURCES gives a URL, a Wayback snapshot ID or a PMC id for a primary the lesson leans
   on, fetch it (curl with a browser User-Agent, pdftotext) and check the lesson against the primary
   too; SOURCES can carry trims (defect 26). Record each claim checked with a verdict.
2. **Neutrality**: sort contested and value claims (3.1); Turing test each position; count citations,
   last words, who is explained versus quoted, whose errors are in the misconception list, across the
   whole lesson; loaded language; omitted facts. **Decision 2: neither country's guidance is called
   wrong, each side's reason is in its own words, and a lagging public page is named once, plainly,
   without mockery.** Name the perspectives you checked against.
3. **Safety**: the callout present and byte-identical (run `npm run validate` and look for this
   file); every place a reader might take description as instruction they cannot safely carry out
   from a page; every instruction carries its guideline and year (decision 3); every exercise stays
   within decision 1 (cushion, towel or doll; no living person; no real call); every safety warning
   a competent instructor would give is present; the law labelled at the point of use (decision 9).

## Reviewer P: depth, pedagogy, cold start, voice and media
1. **Depth**: specificity, expert and transfer tests per section; required elements of 1.2; padding.
2. **Pedagogy**: objectives testable from a page (decision 1: no "perform"); worked examples before
   problems; one worked example with a gap; the US/UK pair in a table or pair, never interleaved
   (decision 2); exercises real and within decision 1; predict and checkpoint blocks placed well and
   not spoiled by their headings or by the sentence above them. **Quiz: measure option lengths**
   (report the character counts), key positions, adjacent repeats, absolutes; check items don't
   reuse the body's own people or numbers; each safety-step item names its country or is right
   under both (decision 12); at least half application; read each explanation against the option
   its key selects; no distractor named by position; the key sequence differs from the previous
   lesson's. Execute every stem against its model answer. Trace every "if you got X, you did Y"
   backwards. Redo every sum.
3. **Cold start**: run `npm run taught courses/health-and-body/first-aid`, read the lesson as
   someone who has done exactly those courses and the earlier lessons of this one, walk every
   instruction literally, flag every assumed term, piece of anatomy (decision 8), tool or habit
   never explained.
4. **Voice and media**: em and en dashes, banned words and shapes (quote line numbers), contractions
   per 1,000 body words (band 5 to 8), bold spans per 1,000 (over 25 is a finding), bolded paragraph
   openers, one-line morals, pipeline talk in learner prose; `minutes:` against `npm run minutes`;
   links in teaching prose; every video and image against SOURCES and its gate (G4, G16); **open
   every SVG and read it**; build with `npm run build:drafts` if available and open the page.

## Findings format
Numbered with your letter (F1, F2... or P1, P2...), each with severity [critical/major/minor], the
quoted passage with its line number, the problem, the evidence, and a specific fix (replacement text
where you can). End with your verdicts per pass.

---

## Fix brief: First Aid and CPR, Stage 4 fix pass and voice checks

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course: `courses/health-and-body/first-aid`.
You apply two reviewers' findings to one lesson, in a context that neither wrote nor reviewed it.
Touch only: the lesson file, its review file `research/reviews/<lesson-id>.md` (create it), and
`research/reviews/course-wide.md` if it needs an entry (**append a dated section with one small
edit, never create or rewrite it**: on 2026-09-24 two fixers ran at once and the second recreated
the file over the first's four notes). SOURCES.md only as below. Do not commit or git add. Do not touch any other file (other agents work in this tree).

## Read first
`.claude/commands/review-lesson.md` ("After the review"), the "Defects this drafter repeats" list in
`.claude/commands/draft-lesson.md`, `docs/STYLE_GUIDE.md`, `templates/REVIEWS.md`, the course's
`research/OUTLINE.md` (the twelve decisions and this lesson's section), the SOURCES.md sections the
lesson cites, an earlier review file in `reviews/` for the shape, the lesson, and both findings files.

## Do
1. Write the review file: a dated entry "## 2026-09-24 — Lesson NN — Stage 4, two reviewers in
   parallel, Tier B (split)" (that header's dash is the template's and is allowed in review files),
   naming reviewers F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and
   media), their verdicts, every finding with its ID in one or two lines.
2. Apply every finding you agree with. Verify a factual finding against SOURCES.md (and the primary
   where the reviewer fetched it) before applying it; if a reviewer is wrong, decline it and say
   why. Rewrite generic passages with specifics from SOURCES; never add a fact that is not in
   SOURCES. Keep every instruction's guideline-and-year parenthesis (decision 3) and the safety
   callout byte-identical (decision 4).
3. Then the voice checks, in the same pass: dashes and banned words; bold to key terms (under 25 per
   1,000 body words); contractions in the 5 to 8 band; two or three `:::predict`, a `:::checkpoint`
   after each hard idea, one worked example with a gap; every `[n]` has a footnote; read the opening.
4. After any quiz edit, read each explanation against the option its key now selects. Re-measure
   option lengths.
5. `npm run minutes` and set `minutes:` to the measured value for this file. `npm run validate` and
   check its exit code; fix every line naming this file. `npm run quotes
   courses/health-and-body/first-aid` and fix anything for this lesson.
6. Append "### Resolutions applied" to the review entry: each finding fixed or declined with a
   reason, and the final measures (words, minutes, bold and contraction densities, quiz key sequence
   and option-length spread). "**Status after review:** clean" or "needs second pass".
7. Reply with a 6-line summary, including anything a later lesson or the course-wide file should know.

## When a finding is in SOURCES.md too
If a reviewer shows that `research/SOURCES.md` itself carries the error (a trimmed quotation, a
misread figure, a claim about a source that the source does not make), correct SOURCES.md first,
then the lesson (drafting defect 26). Verify against the primary text before editing. Edit
SOURCES.md only by appending a dated "Stage 4 note, lesson NN (date)" section at the end of the
file, as lesson 3's fix did, or with small targeted replacements, never by rewriting the file,
because other fixers may be editing other entries at the same time. List the SOURCES corrections in
the review file.
