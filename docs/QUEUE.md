# Queue

The marching order, and nothing else. Read this at session start, after `CLAUDE.md`. Keep it
current **in the same commit as the work**, not at the end of the session.

What happened and why belongs in `docs/CHANGELOG.md` and in git history. What is settled and must
not be re-opened is in `docs/DECISIONS.md`. Specs for work not started are in
`docs/PLATFORM_ROADMAP.md`. A closed defect moves to the changelog; it does not stay here struck
through.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Current course:** Writing Clearly (Stage 4 and voice pass complete; owes nine episodes).
- **Current lesson:** Algebra Essentials voice pass, lesson 1 done (2026-09-17); lesson 2 is next.
- **Current stage:** episodes, blocked on the Gemini key below. Content work moves to the Algebra Essentials voice pass (queue item 3) meanwhile.
- **Blocked on:** a Google AI Studio API key from John (`GEMINI_API_KEY` in `.env.local`, billing
  enabled), so Gemini 2.5 Pro TTS and the direct API's `seed` can be tested. John heard the chunked
  Gemini 3.1 Flash render on 2026-09-17: the fade is gone, but John's voice still changes between
  chunks, and rerolling to match a reference costs a dollar an episode and still fails, because the
  call-to-call spread is about twelve percent. Every knob fal exposes has now been measured.
- **Next action:** with the key, render Personal Finance 2 three ways for about $1: 3.1 Flash
  direct with a fixed seed, 2.5 Pro TTS as one call (Google positions Pro for podcasts and its cap
  is about eleven minutes, so a whole episode fits), and 2.5 Pro chunked with a seed. Profile each
  and send John the ones that hold. Nothing is uploaded until he approves one by ear. The Algebra
  Essentials voice pass (`/voice-pass courses/mathematics/algebra-essentials 1`) runs alongside.

## The queue, top to bottom

A course is done when every lesson is at standard **and** every lesson has an episode. `npm run
validate` enforces the second half against `curriculum/audio-debt.yaml`, which only shrinks.

1. **Writing Clearly: its nine episodes.** The voice pass finished 2026-09-17 on all nine, and was
   light: see the changelog for what it found and for the proposal to fold the voice checks into
   Stage 4 from Algebra onwards. Blocked on the key below; scripts can be written without it.
   **Stage 4 finished 2026-09-11.** All nine lessons went through it on 10 and 11 September and all
   nine were largely rewritten. What it found, across the nine, is in
   `research/reviews/course-wide.md` and is worth reading before the voice pass touches anything:
   a figure four lessons carried that no source contained; six defects the drafter repeated in
   every lesson; four lessons that trimmed a quotation in the direction that helped the argument,
   one of them quoting a paraphrase from the course's own research file as if it were the source;
   three lessons that got their own counts wrong; and two lessons that failed the neutrality pass
   on selection rather than on any false sentence.
   The lessons now average 4,700 words against 3,676 before, and every `minutes:` is measured.

2. **Re-render the fourteen live episodes chunked, then the 47 owed.** Every episode rendered before
   2026-09-17 fades and loses John's voice by the end; the cause and the fix are in
   `docs/DECISIONS.md` §7. Personal Finance 2 is re-rendered locally and waits on John's ear before
   upload. The other thirteen follow at about $0.37 each, uploaded over the same R2 keys so no
   lesson changes. Then the owed 47. 26 are ready to render: Personal Finance 3 to 10,
   Logic and Argument 4 to 10, Bible Basics 2 to 12, about $11 in total. Personal Finance 3's
   script is written and fact-checked at `courses/money/personal-finance/podcast/03-debt.script.md`.
   Python Basics' 6 need scripts, which is the first step of `/make-podcast` and needs no fal.
   Writing Clearly's 9 and Algebra's 6 wait on their Stage 4 cycles and voice pass.
3. **Algebra Essentials: the voice pass on six lessons, then episodes.** Rebuilt 2026-09-09 and
   through Stage 4 with both assessments; the voice pass has not run. Lesson 3 is the only warning
   `npm run validate` still prints (no links in the body); add the links in the pass. Lesson 1 done 2026-09-17.
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
| Writing Clearly | T1 | 9 | 4,646 | 9 | 2 | 0 of 9 | voice pass, 9 episodes |
| Python Basics | T6 | 6 | 3,095 | 6 | 2 | 0 of 6 | 6 episodes |

Sixty-one lessons live, fourteen with audio. `/status` recomputes this table and rewrites it here
when it has drifted.

## Waiting on John

- **A Google AI Studio API key** at aistudio.google.com, with billing enabled (Pro TTS has no free
  tier; a test is about $1), saved as `GEMINI_API_KEY=` in `.env.local`. It releases the three-way
  Gemini test above, and after that about $16 of rendering.
- **Deploy the accounts Worker.** It needs credentials and two free accounts; steps in
  `workers/api/README.md`.
- **A store account and a donations account**, if he wants either. Artwork and copy can be prepared
  without him; see `docs/PLATFORM_ROADMAP.md`.
