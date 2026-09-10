# Queue

The marching order, and nothing else. Read this at session start, after `CLAUDE.md`. Keep it
current **in the same commit as the work**, not at the end of the session.

What happened and why belongs in `docs/CHANGELOG.md` and in git history. What is settled and must
not be re-opened is in `docs/DECISIONS.md`. Specs for work not started are in
`docs/PLATFORM_ROADMAP.md`.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Current course:** Python Basics (rebuild)
- **Current lesson:** 1 and 2 drafted and through Stage 4. Lessons 3 and 4 are next.
- **Current stage:** Stage 3 and 4 interleaved. Two of six lessons done bar the voice pass.
- **Blocked on:** fal balance exhausted. Only John can top up, at fal.ai/dashboard/billing.
- **Next action:** draft Python Basics lessons 3 and 4 from `research/OUTLINE.md`, then Stage 4 on
  each. Two a session, and Stage 4 in the same session while the code is fresh, which worked well
  on 1 and 2. If fal has been topped up, that outranks it: render the 26 ready episodes, Personal
  Finance 3 to 10 first.

## The queue, top to bottom

A course is done when every lesson is at standard **and** every lesson has an episode. `npm run
validate` enforces the second half against `curriculum/audio-debt.yaml`.

1. **The 47 owed podcast episodes.** Blocked on fal. 26 are ready to render now: Personal Finance
   3 to 10, Logic and Argument 4 to 10, Bible Basics 2 to 12. About $0.40 each, roughly $11.
   Writing Clearly's 9 and Algebra's 6 wait on their Stage 4 cycles and voice pass.
   Personal Finance lesson 3's script is written and fact-checked (PASS WITH NITS, all five fixed)
   at `courses/money/personal-finance/podcast/03-debt.script.md`, ready to render.
2. **Python Basics, rebuilt.** T6, six stubs, 463 words a lesson. **Stage 1 and Stage 2 done
   2026-09-10**: `research/SOURCES.md` and `research/OUTLINE.md` are written. Six lessons keep
   their file names, so the live URLs hold. Remaining: draft all six (two a session, procedural),
   Stage 4 on each, the two assessments, `estimated_hours` to about 6 as they land (see
   `research/reviews/course-wide.md`, CW-01), six episodes.
   **Lessons 1 and 2 are drafted and through Stage 4** (2,830 and 2,280 words, from 479 and 462).
   Reviews are Tier A, one reviewer, and the fact-check is executed: every code block gets run and
   byte-compared. That is worth keeping, because it caught seven claims across the two lessons that
   were simply false, including one a reader would have disproved in the first minute of lesson 2.
   The fact-check is executed rather than fetched: every code sample is run before it ships. The
   neutrality pass is skipped with a line in the review file saying why.
3. **Writing Clearly: Stage 4 on all nine lessons, then the voice pass.** The lessons are drafted
   and the assessments exist. This is what stands between the course and its nine episodes.
4. **Personal Finance and Bible Basics and Logic:** episodes only. Nothing else owed.
5. **Then the Foval Core in order, one course at a time, each finished before the next starts.**
   Reading Well (Term 1, position 2), then Digital Literacy, then Using AI Effectively, then Term
   2. Start each with `/new-course`.

Why items 2 and 3 come before Core order is settled: `docs/DECISIONS.md` §9.

## Status

| Course | Term | Lessons | Avg words | Stage 4 | Assessments | Episodes | Owes |
|---|---|---|---|---|---|---|---|
| How to Learn Anything | T1 | 8 | 7,216 | 8 | 2 | 8 of 8 | **nothing** |
| Logic and Argument | T1 | 10 | 9,380 | 10 | 2 | 3 of 10 | 7 episodes |
| Bible Basics | T8 | 12 | 13,163 | 12 | 2 | 1 of 12 | 11 episodes |
| Personal Finance | T2 | 10 | 5,932 | 10 | 2 | 2 of 10 | 8 episodes |
| Algebra Essentials | T5 | 6 | 2,400 | 6 | 2 | 0 of 6 | 6 episodes |
| Writing Clearly | T1 | 9 | 3,676 | 0 | 2 | 0 of 9 | Stage 4, voice pass, 9 episodes |
| Python Basics | T6 | 6 | 463 | 0 | 0 | 0 of 6 | everything; still a stub course |

Sixty-one lessons live, twelve with audio. Writing Clearly's low average was a deliberate call,
that a practical writing course carries its depth in exercises rather than exposition, and **John
has not read one yet.** If he says they are thin, the fix is more worked examples, not more prose.

## Open defects

- ~~Quiz explanations naming the wrong option letter.~~ **Closed 2026-09-10.** All seven named
  items read correctly; they had been fixed and the entry here was stale. The checker had also
  been broken since `courses/CLAUDE.md` landed, and cried wolf on twenty items when it ran. It is
  rewritten: it now looks for a verdict that contradicts the key, or the key rejected as a
  distractor, and reports clean across all sixty-one lessons. `node scripts/check-quiz-letters.cjs`
- ~~Fourteen live lessons with a quiz a reader could pass without reading them.~~ **Closed
  2026-09-10.** Found by the new `npm run quiz`, which scores four cheat strategies against the 70%
  pass mark. All fourteen are rebalanced: How to Learn Anything 2, 4, 5 and 7; Clear Writing 6;
  Personal Finance 1 to 5; Bible Basics 9 and its 22-item final test. **No quiz in the repo is now
  passable by option shape**, bar Python Basics lesson 3, which is a stub due for replacement.
  The cause was one habit: the key was written as the full argument and the distractors as
  one-line brush-offs, so the answer was visible in the typography. On Bible Basics' final test the
  key was the longest option in 21 of 22 items. The fix was to put the reasoning in `explain`,
  where it belongs, and give the distractors the weight standard 4.3 asks of them.
- **9 lessons with no links in the body**, all in Algebra and Python; closes when those are
  rebuilt. Every other course is warning-free.
- **Eight answer leaks in drafts** (seven Bible Basics, one Logic 9). They block those courses'
  publishing, which is the point. `npm run validate | grep "prints the answer"`.
- **Five lessons carry greys outside the palette** in SVG fills.
- **Bible Basics 9 to 12** carry the SVG size problems the linter reports, and lesson 12 has a
  `## Worked example 1` heading and a "Here's mine." that prints its own answer. Known, not new;
  each gets handled in its own Stage 4 cycle.

## Waiting on John

- **Top up fal** at fal.ai/dashboard/billing. `403 {"detail":"User is locked. Reason: Exhausted
  balance."}` Nothing else in the project is blocked by this.
- **Deploy the accounts Worker.** It needs credentials and two free accounts; steps in
  `workers/api/README.md`.
- **A store account and a donations account**, if he wants either. Artwork and copy can be prepared
  without him; see `docs/PLATFORM_ROADMAP.md`.
