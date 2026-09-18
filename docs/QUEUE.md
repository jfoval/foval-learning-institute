# Queue

The marching order, and nothing else. Read this at session start, after `CLAUDE.md`. Keep it
current **in the same commit as the work**, not at the end of the session.

What happened and why belongs in `docs/CHANGELOG.md` and in git history. What is settled and must
not be re-opened is in `docs/DECISIONS.md`. Specs for work not started are in
`docs/PLATFORM_ROADMAP.md`. A closed defect moves to the changelog; it does not stay here struck
through.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Current course:** Reading Well, on content. How to Learn Anything is **finished**: eight
  lessons, eight episodes, all eight live in R2, off the debt ledger. It is the only course
  finished by the institute's own definition.
- **Current lesson:** Reading Well lesson 2 of ten. `/draft-lesson courses/foundations/reading-well 2`,
  one lesson a session, after reading that course's `research/reviews/course-wide.md`.
- **Current stage:** Stage 3 on content. Rendering trails, in Core term order, at whatever the
  month's Gemini cap allows. `docs/PODCAST_PIPELINE.md` is the manual.
- **The shape of the work, decided 2026-09-17** (`docs/DECISIONS.md` §2). Three states, and only
  the last costs money. **Published:** every lesson through Stage 4, live on the site.
  **Written:** every lesson also has a fact-checked script. **Finished:** every lesson also has an
  episode. **The script is part of writing the course, not part of rendering it** — it is free, so
  a course is taken all the way to *written* before the next starts, and what is left behind is a
  pure spending step that needs only budget. Keep writing courses whenever there are tokens;
  render whenever there is money. Never call a course finished while it owes episodes.
- **Blocked on:** nothing. September's Gemini cap has about $4.40 left of $30, resetting on the 1st.
- **Next action, content:** `/draft-lesson courses/foundations/reading-well 2`.
  **Next action, audio (when there is budget):**
  `node scripts/podcast.mjs render courses/foundations/logic-and-argument/lessons/01-what-an-argument-is.md`
  then `--go`. Its script is ready. Writing the remaining seven Logic scripts with `/make-podcast`
  costs nothing at the API and can happen any time.

## The queue, top to bottom

A course is done when every lesson is at standard **and** every lesson has an episode. `npm run
validate` enforces the second half against `curriculum/audio-debt.yaml`, which only shrinks.

**All seven live courses are through Stage 4, so every one is ready for episodes.** Fifty-three
are owed. **The order and the per-course costs live in `docs/PODCAST_PIPELINE.md` section 3 and
are not restated here**, because two copies drifted: this file said $2.00 for Logic and Argument
while the manual said $2.24, and a session has to stop and reconcile them before it can work.
`curriculum/audio-debt.yaml` is the ledger. Finish a course before starting the next.

**How to Learn Anything is done**, finished 2026-09-18: eight episodes, $1.61, every one passing on
its first attempt, all eight live in R2. It is the first course finished by the institute's own
definition.

Render order: **Logic and Argument**, then Writing Clearly, Personal Finance, Algebra Essentials,
Python Basics, Bible Basics.

**Scripts are the outstanding writing job, and they are free.** `npm run validate` prints the count
every run; today it is **46 of 61 lessons with no script**: bible-basics 11, clear-writing 9,
logic-and-argument 7, personal-finance 7, python-basics 6, algebra-essentials 6. Write them with
`/make-podcast <lesson>`, stopping after the fact-check. Several a session is fine. Take one course
all the way to *written* before starting the next.

**The seven existing pre-settlement scripts need bringing up**, which is the same free Part A work:
they run 1,259 to 1,539 words against a band of 1,000 to 1,200, and they ping-pong (68 turns where
the settled shape has about 33). `/make-podcast` has the checklist. **That is the only thing to go
back for. Lesson content on a course already through Stage 4 is done; do not re-open it.**

1. **`npm run quiz` lists 18 quizzes tripping the shape heuristic** (option-length spread over 25
   characters, adjacent repeats, unused positions) without being winnable by a reader who read
   nothing. Worst is Personal Finance 6 at a 174-character spread. Decide one thing when it comes
   up: tighten the 18, or raise the threshold and say why. Not both.
2. **Then the Foval Core in order, one course at a time.**
   **Reading Well: lesson 1 of ten is written and through two Stage 4 rounds as of 2026-09-17.**
   It publishes when its ten lessons pass Stage 4, adding `reading-well: 10` to
   `curriculum/audio-debt.yaml` in the same commit. Ten lessons are planned in
   `research/OUTLINE.md`, with a course-end test and a project.
   **Next: `/draft-lesson courses/foundations/reading-well 2`, one lesson a session.**
   **Read `research/reviews/course-wide.md` before drafting anything here.** It carries two standing
   rules. The Adler text this course researched from is an unlicensed scan of an in-copyright book,
   so it is cited in Sources and never linked to learners; lesson 2's worked survey is Darwin's *On
   the Origin of Species* at Project Gutenberg instead, checked against all six of Adler's skimming
   steps and recorded in the outline with its neutrality note. And Brysbaert rejects Carver's five
   reading gears rather than confirming them, so lesson 4 states the rejection rather than
   inheriting a settled picture.
   Two more the outline flags: lesson 4 leans on the Rayner speed-reading monograph, read only
   through its public summary, so either fetch it or stay inside what the summary supports; and
   lesson 6 on marginalia is thin and should be folded into lesson 5 rather than padded. Lesson 9 is
   in a 3.4 domain and its neutrality audit is mandatory.
   After Reading Well: Digital Literacy, then Using AI Effectively, then Term 2. Start each with
   `/new-course`.

## Standing items, every week

These have no session that owns them, which is how they were being skipped.

- **John reads one lesson as a learner, on a phone.** Writing Clearly first, since nobody has read
  one yet. The only human check in the pipeline is this reading; the reviewer and the drafter are
  the same model. Say what was thin, wrong or unclear in the lesson's feedback form or in a session.
- **John exports the feedback** with `npm run feedback -- --json > feedback.json` from a logged-in
  shell and hands the file to `/triage-feedback`. The form has been live since 2026-09-05 and
  nobody has read what came in.

## Status

| Course | Term | Lessons | Avg words | Stage 4 | Assessments | Episodes | Owes |
|---|---|---|---|---|---|---|---|
| How to Learn Anything | T1 | 8 | 7,216 | 8 | 2 | 8 of 8 | **nothing** |
| Logic and Argument | T1 | 10 | 9,380 | 10 | 2 | 0 of 10 | 10 episodes |
| Bible Basics | T8 | 12 | 13,163 | 12 | 2 | 0 of 12 | 12 episodes |
| Personal Finance | T2 | 10 | 5,932 | 10 | 2 | 0 of 10 | 10 episodes |
| Algebra Essentials | T5 | 6 | 3,689 | 6 | 2 | 0 of 6 | 6 episodes |
| Writing Clearly | T1 | 9 | 4,646 | 9 | 2 | 0 of 9 | 9 episodes |
| Python Basics | T6 | 6 | 3,095 | 6 | 2 | 0 of 6 | 6 episodes |
| Reading Well | T1 | 1 of 10 | 4,340 | 1 | 0 | 0 | **not live yet** |

Sixty-one lessons live, eight with audio, all eight rendered on 2026-09-18 on the settled pipeline.
Reading Well is the eighth course and is `status: drafting`, so its one finished lesson is not on the
site and is not counted above; it publishes when its ten lessons are through Stage 4, owing ten
episodes on the ledger (`docs/DECISIONS.md` §2).
The count had fallen to one that day: every episode shipped before it faded out by its end and was
deleted at John's instruction. They come back course by course. See `docs/DECISIONS.md` section 7. `/status` recomputes this table and rewrites it here
when it has drifted.

## Waiting on John

- **Regenerate the Gemini API key** at aistudio.google.com/apikey when convenient: the current one
  was pasted into a chat transcript on 2026-09-17. Put the new one in `.env.local`.
- **Raise the Gemini monthly spend cap** at aistudio.google.com/spend when you want a run longer
  than the month's headroom. All sixty owed episodes cost about $13 in total.
- **Deploy the accounts Worker.** It needs credentials and two free accounts; steps in
  `workers/api/README.md`.
- **A store account and a donations account**, if he wants either. Artwork and copy can be prepared
  without him; see `docs/PLATFORM_ROADMAP.md`.
