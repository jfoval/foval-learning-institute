# Queue

The marching order, and nothing else. Read this at session start, after `CLAUDE.md`. Keep it
current **in the same commit as the work**, not at the end of the session.

What happened and why belongs in `docs/CHANGELOG.md` and in git history. What is settled and must
not be re-opened is in `docs/DECISIONS.md`. Specs for work not started are in
`docs/PLATFORM_ROADMAP.md`. A closed defect moves to the changelog; it does not stay here struck
through.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Current course:** How to Learn Anything, finishing its episodes on the new pipeline. Reading
  Well runs alongside under the `docs/DECISIONS.md` §2 exception, now at Stage 3.
- **Current lesson:** How to Learn Anything lesson 1's episode is live and approved by John; lessons
  2 to 8 are next, and their scripts are already written and fact-checked.
- **Current stage:** Stage 6, one episode at a time. **`docs/PODCAST_PIPELINE.md` is the manual**:
  method, measured cost, the order, and the five rules that keep the spending sane.
- **Blocked on:** nothing. The Gemini spend cap is the only limit: $23.39 of $30 used in September,
  about $6.61 left, resetting on the 1st. That is roughly thirty episodes of headroom.
- **Next action:** `node scripts/podcast.mjs render courses/learning-and-mind/how-to-learn-anything/lessons/02-how-memory-works.md`
  to see the cost, then the same with `--go`. Pure render, about $0.24. Then lessons 3 to 8, which
  finishes the course.

## The queue, top to bottom

A course is done when every lesson is at standard **and** every lesson has an episode. `npm run
validate` enforces the second half against `curriculum/audio-debt.yaml`, which only shrinks.

**All seven live courses are through Stage 4 and the voice pass, so every one is ready for
episodes.** Sixty are owed, about $13 in total. The order below is Core term order, costed per
course in `docs/PODCAST_PIPELINE.md` section 3. Finish a course before starting the next.

1. **How to Learn Anything, lessons 2 to 8.** Term 1, about $1.33. All seven scripts are written,
   fact-checked and open with Haley: pure rendering. First because it returns the institute's first
   complete course to complete.
2. **Logic and Argument, all ten.** Term 1, about $2.24. Lessons 1 to 3 have scripts; seven need
   writing, which costs nothing at the API.
3. **Writing Clearly, all nine.** Term 1, about $1.96. Voice pass finished 2026-09-17 and was light.
   No scripts yet. Finishing this one **completes Term 1 of the Core**.
4. **Personal Finance, all ten.** Term 2, about $2.16. Lessons 1 to 3 have scripts.
5. **Algebra Essentials, all six.** Term 5, about $1.31. Voice pass finished 2026-09-17 and
   `npm run validate` prints no warnings for it now.
6. **Python Basics, all six.** Term 6, about $1.31.
7. **Bible Basics, all twelve.** Term 8, about $2.61. Lesson 2 has a script.

8. **Charts on a phone.** 34 charts render their smallest label at 8.8px and Bible Basics 9 at
   8.0px, against a 10px floor. The validator names each one. The fix is one chart at a time with
   the page open: narrow the viewBox and re-lay-out, or raise the font size and check nothing
   collides. Do not bulk-edit the font sizes.
9. **`npm run quiz` lists 19 quizzes tripping the shape heuristic** (option-length spread over 25
   characters, adjacent repeats, unused positions) without being winnable by a reader who read
   nothing. Worst is Personal Finance 6 at a 174-character spread. Decide one thing when it comes
   up: tighten the 19, or raise the threshold and say why. Not both.
10. **Then the Foval Core in order, one course at a time, each finished before the next starts.**
   **Reading Well is researched and outlined as of 2026-09-17** and is drafting, ahead of its audio
   under the §2 exception. Ten lessons planned in `research/OUTLINE.md`, with a course-end test and a
   project; `/draft-lesson courses/foundations/reading-well 1` is the next step, one lesson a
   session. Three things the outline flags for whoever drafts: lesson 4 leans on the Rayner
   speed-reading monograph, which was read only through its public summary; lesson 6 on marginalia is
   thin and should be folded into lesson 5 rather than padded; lesson 9 is in a 3.4 domain and its
   neutrality audit is mandatory. After Reading Well: Digital Literacy, then Using AI Effectively,
   then Term 2. Start each with `/new-course`.

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
| How to Learn Anything | T1 | 8 | 7,216 | 8 | 2 | 1 of 8 | 7 episodes |
| Logic and Argument | T1 | 10 | 9,380 | 10 | 2 | 0 of 10 | 10 episodes |
| Bible Basics | T8 | 12 | 13,163 | 12 | 2 | 0 of 12 | 12 episodes |
| Personal Finance | T2 | 10 | 5,932 | 10 | 2 | 0 of 10 | 10 episodes |
| Algebra Essentials | T5 | 6 | 3,689 | 6 | 2 | 0 of 6 | 6 episodes |
| Writing Clearly | T1 | 9 | 4,646 | 9 | 2 | 0 of 9 | 9 episodes |
| Python Basics | T6 | 6 | 3,095 | 6 | 2 | 0 of 6 | 6 episodes |

Sixty-one lessons live, one with audio. The count fell from fourteen on 2026-09-18: every episode
shipped before that date faded out by its end and was deleted at John's instruction, and they come
back one at a time on the pipeline that works. See `docs/DECISIONS.md` section 7. `/status` recomputes this table and rewrites it here
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
