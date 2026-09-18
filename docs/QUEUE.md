# Queue

The marching order, and nothing else. Read this at session start, after `CLAUDE.md`. Keep it
current **in the same commit as the work**, not at the end of the session.

What happened and why belongs in `docs/CHANGELOG.md` and in git history. What is settled and must
not be re-opened is in `docs/DECISIONS.md`. Specs for work not started are in
`docs/PLATFORM_ROADMAP.md`. A closed defect moves to the changelog; it does not stay here struck
through.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Current course:** How to Learn Anything is **finished**: eight lessons, eight episodes, off the
  debt ledger. Next is Logic and Argument. Reading Well's drafting runs alongside.
- **Current lesson:** none in flight. Logic and Argument lessons 1 to 3 have scripts written and
  fact-checked; lessons 4 to 10 need scripts, which cost nothing.
- **Current stage:** Stage 6, one episode at a time. `docs/PODCAST_PIPELINE.md` is the manual.
- **Blocked on:** nothing. September's Gemini cap has about $4.40 left of $30, resetting on the 1st;
  Logic and Argument's ten episodes need about $2.
- **Next action:** `node scripts/podcast.mjs render courses/foundations/logic-and-argument/lessons/01-what-an-argument-is.md`
  then `--go`. Its script is ready. After lessons 1 to 3, write the remaining seven with
  `/make-podcast`, one per session.

## The queue, top to bottom

A course is done when every lesson is at standard **and** every lesson has an episode. `npm run
validate` enforces the second half against `curriculum/audio-debt.yaml`, which only shrinks.

**All seven live courses are through Stage 4 and the voice pass, so every one is ready for
episodes.** Fifty-three are owed, about $11 in total, at a measured $0.20 each. The order is Core
term order, costed per course in `docs/PODCAST_PIPELINE.md` section 3. Finish a course before
starting the next.

**How to Learn Anything is done**, finished 2026-09-18: eight episodes, $1.61, every one passing on
its first attempt. It is the first course finished by the institute's own definition.

1. **Logic and Argument, all ten.** Term 1, about $2.00. Lessons 1 to 3 have scripts; seven need
   writing, which costs nothing at the API.
2. **Writing Clearly, all nine.** Term 1, about $1.80. Voice pass finished 2026-09-17 and was light.
   No scripts yet. Finishing this one **completes Term 1 of the Core**.
3. **Personal Finance, all ten.** Term 2, about $2.00. Lessons 1 to 3 have scripts.
4. **Algebra Essentials, all six.** Term 5, about $1.20.
5. **Python Basics, all six.** Term 6, about $1.20.
6. **Bible Basics, all twelve.** Term 8, about $2.40. Lesson 2 has a script.

8. **Charts on a phone. 28 left**, all of them viewBox 584 with 15px labels, which render at 8.8px
   against a 10px floor. The validator names each one, by course: Personal Finance 13, How to Learn
   Anything 8, Logic and Argument 5, Bible Basics 2.
   **Two are done and between them cover most of what you will meet.** Bible Basics 9 was a
   timeline; Personal Finance 1 was a horizontal bar chart, and the move there is the standard phone
   one: put each category label on its own line above its bar so the bars get the full width, keep
   the value inside the bar where it fits (`var(--bg)` on the fill colour, which inverts correctly
   in dark theme), and wrap the source note across lines.
   **Bible Basics 9 is done and is the worked example to copy.** It was the worst at 8.0px. The fix
   was not a font bump: the timeline was rebuilt at viewBox 420 in the house pattern (no `<g>`,
   every size an attribute on its own `<text>`, `var(--token, #literal)` everywhere, a real
   `<desc>`), laid out tall rather than wide, with each label on its own line led by a coloured
   swatch matching its marker so nothing depends on colour alone. Labels now render at 12.3px.
   **The arithmetic to aim at:** the validator measures at 340px phone width, so a label renders at
   `font-size * 340 / viewBox-width`. For 15px labels to clear 10px the viewBox must be 510 or
   narrower; 420 is the house width and gives 12.1px. **Do not bulk-edit font sizes**, and open the
   page at phone width before and after: the browser is the only thing that catches a collision.
9. **`npm run quiz` lists 19 quizzes tripping the shape heuristic** (option-length spread over 25
   characters, adjacent repeats, unused positions) without being winnable by a reader who read
   nothing. Worst is Personal Finance 6 at a 174-character spread. Decide one thing when it comes
   up: tighten the 19, or raise the threshold and say why. Not both.
10. **Then the Foval Core in order, one course at a time, each finished before the next starts.**
   **Reading Well: lesson 1 of ten is written and through two Stage 4 rounds as of 2026-09-17**,
   drafting ahead of its audio under the §2 exception. Ten lessons are planned in
   `research/OUTLINE.md`, with a course-end test and a project.
   **Next: `/draft-lesson courses/foundations/reading-well 2`, one lesson a session.**
   **Read `research/reviews/course-wide.md` before drafting anything here.** It carries two blocks
   that will bite. The Adler text this course researched from is an unlicensed scan of an
   in-copyright book, so it is never linked to learners, and that kills the outline's plan to survey
   Adler's own book as lesson 2's worked example: find a public-domain book with a real apparatus
   instead. And Brysbaert rejects Carver's five reading gears rather than confirming them, so lesson
   4 states the rejection rather than inheriting a settled picture.
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

Sixty-one lessons live, eight with audio, all eight rendered on 2026-09-18 on the settled pipeline.
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
