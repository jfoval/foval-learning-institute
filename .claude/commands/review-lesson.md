---
description: Stage 4. Review a lesson in a fresh-context subagent, then apply the fixes
argument-hint: <courses/school/course-id> <lesson-number>
---
You are doing Stage 4 (Review) of the Foval Learning Institute content pipeline. Arguments: `$ARGUMENTS` (course path, then lesson number). Locate the lesson file `<course>/lessons/NN-*.md`.

## Pick the tier first, and say which you picked

Stage 4 used to run five reviewers in parallel on every lesson, at 600k to 900k tokens each time. On Bible Basics lesson 6 one reviewer doing all the passes in its own fresh context ran about 100k tokens and found everything the five found, because the passes share the reading. That is the default now. The five-agent shape is kept for the lessons that actually earn it.

**Tier A — one reviewer (the default).** Everything that is not Tier B. One subagent, fresh context, all applicable passes.

**Tier B — reviewers in parallel, one per pass.** Only when the lesson is in a **sensitive domain** under standards Part 3.4, or in a **standpoint course** (School of Christian Studies, `standpoint: christian`), or a Tier A review came back with wrong facts or a failed neutrality check and the lesson was heavily rewritten. Bible Basics and the contested stretches of Logic and Argument are Tier B. Nothing in Python Basics or Algebra Essentials is.

**Skip the neutrality pass entirely** on a lesson with no contested or value claims in it, and write one line in the lesson's review file saying so and why. Auditing "solve for x" for ideological balance is money spent on nothing. If you are unsure whether a lesson is sensitive, it is Tier B.

**On a procedural course (programming, mathematics), the fact-check is executed, not fetched.** Run every code block and check every worked calculation by hand or with `node -e`. A Python lesson's claims are testable in seconds; do not send an agent to fetch sources to confirm that a `for` loop iterates.

**Do not review a stub.** If the lesson is under about 1,500 words and was written before the pipeline existed, it is not a lesson to be improved; it is a placeholder to be replaced. Stop, and run Stage 1 and Stage 2 on the course, then Stage 3, then come back here. Reviewing 400 words costs what reviewing 8,000 costs and returns nothing.

**The second full pass is not the default.** It runs on a trigger, not out of caution: wrong facts, a failed neutrality check, or more than a third of the lesson flagged as generic.

## What a cycle costs

**Tier A: about 100k tokens** for one reviewer in a fresh context doing every applicable pass, plus the fix pass. **Tier B: 600k to 900k**, producing 30 to 45 findings. Rate limits are the real constraint and are shared across sessions; **two parallel sessions is the ceiling** before they starve each other. Picking the tier honestly is the single largest cost lever in the pipeline: choosing Tier A where it fits took the projected cost of the remaining rebuilds from roughly 25M subagent tokens to about 5M.

## How to run one

This works; earlier attempts stalled.

**Tier A:** one subagent that reads the lesson, `docs/EDITORIAL_STANDARDS.md`, `docs/STYLE_GUIDE.md`, `<course>/research/SOURCES.md`, `<course>/research/reviews/<lesson-id>.md`, and the **"Defects this drafter repeats"** list in `.claude/commands/draft-lesson.md`, which is the accumulated record of what actually goes wrong and the highest-yield thing a reviewer can read. It runs every applicable pass and returns findings. Then consolidate into the lesson's review file with finding IDs, apply the fixes, and append "Resolutions applied" including what you chose not to fix and why.

**Tier B:** the same, but launch the five reviewers **in a single message with `run_in_background: false`** so the orchestrator blocks until they return. Backgrounding them makes the orchestrator end its turn and lose the work.

Reviews run in a fresh context, never in the same context as the draft. That is not a formality: the context that wrote the lesson cannot see what it assumed.

## The passes

1. **Depth**, against Part 1. Apply the specificity, expert, and transfer tests to every section. Quote every passage that is generic, hedged, or could have been written without knowing the subject. Check every required element in 1.2 is present and substantive. Do not flag length: a lesson is as long as the teaching needs. Flag padding, which is different.
2. **Fact-check**, against Part 2. Assume the lesson contains errors and find them. Verify every number, date, name, quote, mechanism and claim against SOURCES.md or by fetching the source. List each claim, the verdict (verified / wrong / unverifiable), and the evidence. Flag claims that need a citation and lack one. Three traps, all caught repeatedly: a quotation trimmed of the qualifier that carries the other side's case; a position described only in the words of people who oppose it; and **a quotation attributed to a body that never wrote it** (an insurance lesson attributed a sentence to the NAIC that appears neither in the buyer's guide the lesson itself links to nor anywhere on the web). Download the document the footnote points at.
3. **Neutrality**, against Part 3. Skip per the rule above when the lesson has no contested claims. Otherwise sort every claim touching a contested or value question into established / contested / value and flag misclassifications. Apply the ideological Turing test to every described position. Flag loaded language, sneering, presentism, motivated framing, and omitted facts a well-informed person from another perspective would insist on. State which perspectives you checked against.
   **Count before you read for tone**, in this order, because three domains failed this way and all three read fine as prose: the citations each side gets, who gets the last word, who is *explained* against who is merely quoted, and whose errors are in the misconception list. Then **count the whole lesson, not just the two-position section**: Personal Finance lesson 9 passed that count inside its disagreement and still failed, because one side's case was the architecture of the lesson and the other's was an annexe.
   And check the organising claim itself, not only the sentences. That same course's insurance lesson was built on "insurance is negative expected value by construction", which is false for employer coverage, where the employer pays roughly six sevenths of the premium untaxed, and employer coverage is most of what the lesson teaches.
4. **Pedagogy**, against Part 4. Objectives testable, worked examples before problems, exercises that are real practice, misconceptions addressed. Quiz against 4.3: at least half application questions, plausible distractors, teaching explanations. **Measure the option shapes, do not eyeball them**: option lengths within about 15 characters, all four answer indices used across the quiz, no adjacent repeat, at least two options per item carrying no absolute. Check whether the items reuse the body's own people and numbers, which tests recall of the page rather than the idea. Check that no self-check prints its own answer in plain body text instead of hiding it behind `:::predict` or `:::checkpoint`.
   **Execute every stem against its own model answer, not only the answer against the source.** An Algebra practice item asked the reader to show that a correct equation was wrong and reached its "correct version" by swapping the letters, which teaches the reversal error as the cure for it. The stem was a typo for a different equation and the answer text was internally consistent, which is why the drafter's own arithmetic check missed it.
   **Trace every "if you got X, you probably did Y" backwards** from the wrong answer. Three in one rebuild blamed a slip that cannot produce the number, and one blamed a route that produces the right answer.
5. **Voice and media**, against `docs/STYLE_GUIDE.md` and standards 4.5. Quote every em dash (U+2014) **and every en dash (U+2013)**; the convention is " to ". Quote every banned word and sentence shape with its line. Then read it as a person talking to one student and quote every sentence that sounds like a textbook, a blog, a salesperson or a machine, rewriting each. Check the reader is made to think as they read: predict blocks, checkpoints, an exercise, not paragraphs then a quiz. Check `minutes:` against the real load, which has been understated in every lesson measured so far. Check media: primary sources linked in the body, real images with credits, nothing decorative or AI-generated. **Open every SVG and read it by eye.**

Each pass returns findings ranked by severity, with quoted passages and specific fixes.

## What the linter catches, so you need not

`scripts/build.mjs` lints every lesson including drafts. Findings fail the build on a published course and warn with "[draft: fix before publishing]" on a draft. It checks: em dashes; ESV quotations; frontmatter that does not parse, and quiz items that lost their question or options or whose text did not parse as text; SVG text and shape fills hardcoded dark; SVG labels under font-size 15 with inheritance resolved; SVG labels running past their own viewBox, with rotation projected; blank lines inside an `<svg>`; bodies with no links; argument displays whose conclusion line would be folded into the previous premise; self-checks that print their own answer, scanning to the next heading; citations to works the course's SOURCES.md marks unread; and, on a published course, any lesson with no `audio:` stamp beyond the debt recorded in `curriculum/audio-debt.yaml`.

## What the linter cannot catch, so you must

Recorded across five Stage 4 cycles. **Do not trust `npm run validate` on any of these.**

- **Every SVG, by eye, in both themes.** Five distinct routes have got past the SVG checks: a themed `fill="#ffffff"`, a `fill` on a `<g>` wrapper, an inline `<style>` block, a `style` attribute on the `<svg>` root, and a `font-size` on a `<g>` wrapper that hid 15 of 43 undersized labels. Inheritance is resolved now, but read the chart anyway. The working pattern is bible-basics lesson 8: no `<g>`, every size an attribute, `xmlns`, `var(--token, #literal)` fills, a `<desc>`, and every row named in text so nothing depends on colour.
- **A wide viewBox shrinks every label on a phone**, and the linter cannot see it because it does not model the scale factor. Keep chart viewBoxes near 420 unless the drawing genuinely needs the width.
- **A chart that needs a fifth treatment when the palette has four strong colours**: the fifth is an outline, not a second grey. `--line-strong` and `--navy` are byte-identical in both themes, so a chart using both to tell two things apart shows one thing.
- **`minutes:`.** Understated in every lesson so far. `npm run minutes` measures it, and is itself blind to an exercise timing that does not open with a cue word followed immediately by a digit.
- **Whether a block's body collapses.** Bodies parse with `breaks: false`, so single newlines inside `:::predict`, `:::checkpoint`, `:::callout` and `:::exercise` render as one run-on paragraph. A body opening `367. It's a letter` becomes `<ol start="367">`. `:::figure` and `:::video` are the opposite case and must stay one paragraph. Poetry needs two trailing spaces per line.
- **Anything in the defect list in `/draft-lesson`.** All fourteen entries are things a green build has shipped.

## After the review

Append a dated entry to `<course>/research/reviews/<lesson-id>.md` with every finding and a finding ID; `templates/REVIEWS.md` is the shape. Findings belonging to no single lesson go in that directory's `course-wide.md`. Apply the fixes: rewrite generic passages with specifics from the sources, correct or remove wrong claims, add citations, fix neutrality problems, replace weak quiz items. Append "Resolutions applied", including what you chose **not** to fix and why. Run `npm run validate`, and open the lesson in the browser if it has a chart in it.

If you measure something about how the pipeline behaves, change this command in the same commit. The one-reviewer finding sat written down and unacted on for two courses' worth of reviews before anyone edited the command, and every one of those reviews cost six to nine times what it needed to.

Escalate to Tier B and review again only on the triggers above. Otherwise the lesson is done. Then it needs the voice pass, and then its podcast episode: `curriculum/audio-debt.yaml` is what stops the course being called finished without one.
