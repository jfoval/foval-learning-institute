---
description: Stage 4. Review a lesson in a fresh-context subagent, then apply the fixes
argument-hint: <courses/school/course-id> <lesson-number>
---
You are doing Stage 4 (Review) of the Foval Learning Institute content pipeline. Arguments: `$ARGUMENTS` (course path, then lesson number). Locate the lesson file `<course>/lessons/NN-*.md`.

## Pick the tier first, and say which you picked

Stage 4 used to run five reviewers in parallel on every lesson, at 600k to 900k tokens each time. On Bible Basics lesson 6 one reviewer doing all the passes in its own fresh context ran about 100k tokens and found everything the five found, because the passes share the reading. That is the default now. The five-agent shape is kept for the lessons that actually earn it.

**Tier A — one reviewer (the default).** Everything that is not Tier B. One subagent, fresh context, all applicable passes.

**Tier B — reviewers in parallel, one per pass.** Only when the lesson is in a **sensitive domain** under standards Part 3.4, or in a **standpoint course** (School of Christian Studies, `standpoint: christian`), or a Tier A review came back with wrong facts or a failed neutrality check and the lesson was heavily rewritten. Bible Basics and the contested stretches of Logic and Argument are Tier B. Nothing in Python Basics or Algebra Essentials is.

**Skip the neutrality pass entirely** on a lesson with no contested or value claims in it, and write one line in REVIEWS.md saying so and why. Auditing "solve for x" for ideological balance is money spent on nothing. If you are unsure whether a lesson is sensitive, it is Tier B.

**On a procedural course (programming, mathematics), the fact-check is executed, not fetched.** Run every code block and check every worked calculation by hand or with `node -e`. A Python lesson's claims are testable in seconds; do not send an agent to fetch sources to confirm that a `for` loop iterates.

**Do not review a stub.** If the lesson is under about 1,500 words and was written before the pipeline existed, it is not a lesson to be improved; it is a placeholder to be replaced. Stop, and run Stage 1 and Stage 2 on the course, then Stage 3, then come back here. Reviewing 400 words costs what reviewing 8,000 costs and returns nothing.

## The brief

Give the reviewer (or each reviewer, in Tier B) the full path to the lesson, to `docs/EDITORIAL_STANDARDS.md`, to `docs/STYLE_GUIDE.md`, to `<course>/research/SOURCES.md`, and to `<course>/research/REVIEWS.md`, with the instruction to read all of them before starting. Also give it the "Defects this drafter repeats" list in `docs/BACKLOG.md` section 1, which is the accumulated list of what actually goes wrong; it is the highest-yield thing a reviewer can read.

In Tier B, launch the reviewers **in a single message with `run_in_background: false`** so the orchestrator blocks until they return. Backgrounding them makes the orchestrator end its turn and lose the work.

The passes:

1. **Depth**, against Part 1. Apply the specificity, expert, and transfer tests to every section. Quote every passage that is generic, hedged, or could have been written without knowing the subject. Check every required element in 1.2 is present and substantive. Do not flag length: a lesson is as long as the teaching needs. Flag padding, which is different.
2. **Fact-check**, against Part 2. Assume the lesson contains errors and find them. Verify every number, date, name, quote, mechanism and claim against SOURCES.md or by fetching the source. List each claim, the verdict (verified / wrong / unverifiable), and the evidence. Flag claims that need a citation and lack one. Two specific traps, both caught repeatedly: a quotation trimmed of the qualifier that carries the other side's case, and a position described only in the words of people who oppose it.
3. **Neutrality**, against Part 3. Skip per the rule above when the lesson has no contested claims. Otherwise sort every claim touching a contested or value question into established / contested / value and flag misclassifications. Apply the ideological Turing test to every described position. Flag loaded language, sneering, presentism, motivated framing, and omitted facts a well-informed person from another perspective would insist on. State which perspectives you checked against.
4. **Pedagogy**, against Part 4. Objectives testable, worked examples before problems, exercises that are real practice, misconceptions addressed. Quiz against 4.3: at least half application questions, plausible distractors, teaching explanations. **Measure the option shapes, do not eyeball them**: option lengths within about 15 characters, all four answer indices used across the quiz, no adjacent repeat, at least two options per item carrying no absolute. Check that no self-check prints its own answer in plain body text instead of hiding it behind `:::predict` or `:::checkpoint`.
5. **Voice and media**, against `docs/STYLE_GUIDE.md` and standards 4.5. Quote every em dash (U+2014) **and every en dash (U+2013)**; the convention is " to ". Quote every banned word and sentence shape with its line. Then read it as a person talking to one student and quote every sentence that sounds like a textbook, a blog, a salesperson or a machine, rewriting each. Check the reader is made to think as they read: predict blocks, checkpoints, an exercise, not paragraphs then a quiz. Check `minutes:` against the real load, which has been understated in every lesson measured so far. Check media: primary sources linked in the body, real images with credits, nothing decorative or AI-generated. **Open every SVG and read it by eye** rather than trusting the validator, which has been passed by five different routes.

Each pass returns findings ranked by severity, with quoted passages and specific fixes.

## After the review

Append a dated entry to `<course>/research/REVIEWS.md` with every finding and a finding ID. Apply the fixes: rewrite generic passages with specifics from the sources, correct or remove wrong claims, add citations, fix neutrality problems, replace weak quiz items. Append "Resolutions applied", including what you chose **not** to fix and why. Run `npm run validate`, and open the lesson in the browser if it has a chart in it.

Escalate to Tier B and review again only if the review found wrong facts, a failed neutrality check, or more than a third of the lesson flagged as generic. Otherwise the lesson is done; do not run a second pass out of caution. Summarise: what was found, what was fixed, what still needs a decision from John.
