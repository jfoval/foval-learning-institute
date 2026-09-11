# Queue

The marching order, and nothing else. Read this at session start, after `CLAUDE.md`. Keep it
current **in the same commit as the work**, not at the end of the session.

What happened and why belongs in `docs/CHANGELOG.md` and in git history. What is settled and must
not be re-opened is in `docs/DECISIONS.md`. Specs for work not started are in
`docs/PLATFORM_ROADMAP.md`. A closed defect moves to the changelog; it does not stay here struck
through.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Current course:** Writing Clearly (Stage 4 cycle on a published course).
- **Current lesson:** 1 to 7 are through Stage 4, all seven largely rewritten. 8 is next.
- **Current stage:** Stage 4, then the voice pass, lesson by lesson through all nine.
- **Blocked on:** nothing for content. Episodes across six courses wait on the fal balance.
- **Next action:** `/review-lesson courses/communication-and-people/clear-writing 8`. If fal has
  been topped up, that outranks it: render the 26 ready episodes, Personal Finance 3 to 10 first,
  then write Python Basics' six scripts.

## The queue, top to bottom

A course is done when every lesson is at standard **and** every lesson has an episode. `npm run
validate` enforces the second half against `curriculum/audio-debt.yaml`, which only shrinks.

1. **Writing Clearly: Stage 4 on all nine lessons, then the voice pass.** Drafted, assessments
   exist. **Lessons 1 to 5 done 2026-09-10, 6 and 7 on 2026-09-11**, all mostly rewritten. Two to go.
   `docs/DECISIONS.md` §9 puts this before the Core. Its low word count was a deliberate call: a
   practical writing course carries its depth in exercises. If John says they are thin, the fix is
   more worked examples, not more prose.
   **Read `research/reviews/course-wide.md` before reviewing lesson 8.** Seven rounds have shown
   what this drafter repeats: no Go deeper section, understated `minutes:` with no timing cue on
   the exercise, no contractions, "Here is" openers, and a quotation trimmed of the qualifier that
   limits it. Four or five recurred in every one of lessons 1 to 7, and every quotation trimmed so far was trimmed in the direction that helped the lesson's argument. It also records
   CW-01 (a figure four lessons carried that no source contained), CW-04 (the run-on list) and
   CW-05 (**recount every number the lesson states about a sentence printed beside it**: lesson 4
   got four of its own counts wrong in a lesson about counting).
   **And measure every quiz both ways after rewriting it, then again after fixing it.** Four
   rounds running, the rewrite introduced a tell the draft did not have, and on lesson 5 the fix
   introduced a different one.
2. **The 47 owed episodes.** Blocked on fal. 26 are ready to render: Personal Finance 3 to 10,
   Logic and Argument 4 to 10, Bible Basics 2 to 12, about $11 in total. Personal Finance 3's
   script is written and fact-checked at `courses/money/personal-finance/podcast/03-debt.script.md`.
   Python Basics' 6 need scripts, which is the first step of `/make-podcast` and needs no fal.
   Writing Clearly's 9 and Algebra's 6 wait on their Stage 4 cycles and voice pass.
3. **Algebra Essentials: the voice pass on six lessons, then episodes.** Rebuilt 2026-09-09 and
   through Stage 4 with both assessments; the voice pass has not run. Lessons 1 and 3 are the only
   warnings `npm run validate` still prints (no links in the body); add the links in the pass.
4. **Charts on a phone.** 34 charts render their smallest label at 8.8px and Bible Basics 9 at
   8.0px, against a 10px floor. The validator names each one. The fix is one chart at a time with
   the page open: narrow the viewBox and re-lay-out, or raise the font size and check nothing
   collides. Do not bulk-edit the font sizes.
5. **`npm run quiz` lists 19 quizzes tripping the shape heuristic** (option-length spread over 25
   characters, adjacent repeats, unused positions) without being winnable by a reader who read
   nothing. Worst is Personal Finance 6 at a 174-character spread. Decide one thing when it comes
   up: tighten the 19, or raise the threshold and say why. Not both.
6. **Then the Foval Core in order, one course at a time, each finished before the next starts.**
   Reading Well (Term 1, position 2), then Digital Literacy, then Using AI Effectively, then Term
   2. Start each with `/new-course`.

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
| Logic and Argument | T1 | 10 | 9,380 | 10 | 2 | 3 of 10 | 7 episodes |
| Bible Basics | T8 | 12 | 13,163 | 12 | 2 | 1 of 12 | 11 episodes |
| Personal Finance | T2 | 10 | 5,932 | 10 | 2 | 2 of 10 | 8 episodes |
| Algebra Essentials | T5 | 6 | 3,689 | 6 | 2 | 0 of 6 | voice pass, 6 episodes |
| Writing Clearly | T1 | 9 | 4,348 | 7 | 2 | 0 of 9 | Stage 4 on 2, voice pass, 9 episodes |
| Python Basics | T6 | 6 | 3,095 | 6 | 2 | 0 of 6 | 6 episodes |

Sixty-one lessons live, fourteen with audio. `/status` recomputes this table and rewrites it here
when it has drifted.

## Waiting on John

- **Top up fal** at fal.ai/dashboard/billing. `403 {"detail":"User is locked. Reason: Exhausted
  balance."}` Nothing else in the project is blocked by this.
- **Deploy the accounts Worker.** It needs credentials and two free accounts; steps in
  `workers/api/README.md`.
- **A store account and a donations account**, if he wants either. Artwork and copy can be prepared
  without him; see `docs/PLATFORM_ROADMAP.md`.
