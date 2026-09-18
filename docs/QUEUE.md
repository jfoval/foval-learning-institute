# Queue

**Say "keep going" and a session works this on its own.** `npm run state` computes the one next
action; `.claude/commands/keep-going.md` is the loop. This file holds what a script cannot know:
what is in flight, what is blocked, and what is waiting on John. **No counts live here.** Keep it
current **in the same commit as the work**, not at the end of the session.

What happened and why belongs in `docs/CHANGELOG.md` and in git history. What is settled and must
not be re-opened is in `docs/DECISIONS.md`. What is checked and what is not is in
`docs/VERIFICATION.md`. Specs for work not started are in `docs/PLATFORM_ROADMAP.md`. A closed
defect moves to the changelog; it does not stay here struck through.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Current course:** Writing Clearly is **written** as of 2026-09-18: all nine lessons have a
  fact-checked script, so it needs only money now. How to Learn Anything is **finished**: eight
  lessons, eight episodes, all live in R2 and off the debt ledger. Reading Well is still the
  drafting job, at lesson 2 of ten.
- **Current lesson:** Logic and Argument's scripts, then Reading Well lesson 2 of ten. `/draft-lesson courses/foundations/reading-well 2`,
  as many lessons as the budget allows, after reading that course's `research/reviews/course-wide.md`.
- **Before drafting anything:** `npm run taught <course>`. It prints every objective a learner has
  already met earlier on the Core, and names the earlier courses that do not exist yet so nothing
  is assumed from them. Stage 2 and Stage 3 both call for it.
- **Current stage:** Stage 3 on content. Rendering trails, in Core term order, at whatever the
  month's Gemini cap allows. `docs/PODCAST_PIPELINE.md` is the manual.
- **The shape of the work, decided 2026-09-17** (`docs/DECISIONS.md` §2). Three states, and only
  the last costs money. **Published:** every lesson through Stage 4, live on the site.
  **Written:** every lesson also has a fact-checked script. **Finished:** every lesson also has an
  episode. **The script is part of writing the course, not part of rendering it** — it is free, so
  a course is taken all the way to *written* before the next starts, and what is left behind is a
  pure spending step that needs only budget. Keep writing courses whenever there are tokens;
  render whenever there is money. Never call a course finished while it owes episodes.
- **Blocked on:** nothing. September's Gemini cap is down to about $4.25 of $30 after Logic 1, 2
  and 3, resetting on the 1st. **Logic 4 to 10 have no scripts yet**, so the next renders wait on
  writing, not on money.
- **Next action, content:** scripts, in Core term order, starting with Writing Clearly. They are
  free at the API and they are what stands between six published courses and *written*.
  **Next action, audio:** `node scripts/podcast.mjs render courses/foundations/logic-and-argument/lessons/02-*.md`
  then `--go`.

## The queue, top to bottom

A course is done when every lesson is at standard **and** every lesson has an episode. `npm run
validate` enforces the second half against `curriculum/audio-debt.yaml`, which only shrinks.

**All seven live courses are through Stage 4, so every one is ready for episodes.** How many are
owed, by which course, and what each costs: **`npm run state`**. No count is written here, or in
`docs/PODCAST_PIPELINE.md`, or in `curriculum/TAXONOMY.md`. Two copies of these numbers drifted
within a day last time. `curriculum/audio-debt.yaml` remains the enforced ledger; the script is
what you read. Finish a course before starting the next.

**How to Learn Anything is done**, finished 2026-09-18: eight episodes, $1.61, every one passing on
its first attempt, all eight live in R2. It is the first course finished by the institute's own
definition.

Render order: **Logic and Argument**, then Writing Clearly, Personal Finance, Algebra Essentials,
Python Basics, Bible Basics. **Logic 1, 2 and 3 are live as of 2026-09-18**, rendered on the settled
pipeline, billed $0.23, $0.25 and $0.28, level flat and both hosts present to the last line in each.

**A script over about 1,417 spoken words is refused before any money is sent**, because the render
engine's sixteen thousand token output ceiling would cut it off. Logic 2 hit it on 2026-09-18 and
was shortened and re-fact-checked. `node scripts/podcast.mjs render <lesson>` now says so on the
dry run instead of only on `--go`, which is where the limit used to be invisible. **Write to about
1,300 and check the dry run before the fact-check**, because shortening is new text and the
fact-check has to run again after it.

**Scripts are the outstanding writing job, and they are free.** `npm run validate` prints the count every run. Write them with
`/make-podcast <lesson>`, stopping after the fact-check. Several a session is fine. Take one course
all the way to *written* before starting the next.

**The seven existing scripts are renderable as they are.** The speaker prompt that made How to
Learn Anything come out right is built by `scripts/podcast.mjs` at render time, not stored in the
script, so every script gets it. They only run long and ping-pong, which is taste and about seven
cents. `/make-podcast` says what could be improved and that neither thing blocks a render.
**Nothing on a course already through Stage 4 is to be re-opened.**

1. **A render was paid for twice on 2026-09-18, and the reason is worth keeping.** Writing Clearly
   lesson 4's script was shortened to fit the render ceiling and sent to render before its
   re-check came back. The re-check returned FAIL: the cut had dropped the closing clause of a
   thirty-six-word example while keeping the number, so the episode said "thirty six words" over a
   thirty-word sentence and then called eighteen "half the length". The episode was rendered,
   listened to on the profile, and **not uploaded**; the script was fixed and rendered again, at a
   cost of about $0.24. **The rule that follows: never start a render until the fact-check of the
   text you are about to send has come back.** A `checked:` entry from before a cut is not a check
   of what the cut left.
2. **Three small numbers in published lessons do not survive counting**, all found by script
   fact-checks on 2026-09-18 and none of them load-bearing. **Writing Clearly 6** calls its
   shortened paragraph 46 words and it is 47, which makes the reduction 58 percent rather than 59,
   and the lesson's own Sources note claims every count was recounted. **Writing Clearly 9** calls
   the council tax letter's subordinate clause twenty words long; the clause is eleven, and
   nineteen even counted through "within one month". The scripts for both were written around the
   figures rather than repeating them. One visit fixes all of these and re-reads the Sources notes
   that promise the counts were checked.
3. **Two lessons do not cite their own sources.** `npm run validate` warns on both, added
   2026-09-18. **Personal Finance 6 (taxes) has nine sources and not one `[n]` marker in its
   prose**, so every bracket figure in a tax lesson is uncited to the reader; Python 2 cites one
   of five. Both are content fixes on published courses and both are standards Part 2. Nine other
   lessons have one to three uncited entries, which is ordinary and stays under the threshold.
   Personal Finance 6 is also the worst quiz below, so it earns one visit for both.
4. **Seven dead links in published lessons.** `npm run links` finds them; standards 4.5 asks for
   primary sources linked in the body, and these do not answer. Four are
   `earlychristianwritings.com` pages in Bible Basics 6 and 7 (the site reorganised; the texts are
   still there under other paths), `corporate.vanguard.com/.../vemo.html` in Personal Finance 2,
   `en.wikipedia.org/wiki/All_Your_Worth` in Personal Finance 1 (the article was merged away), and
   `tenancydepositscheme.com/resources/tds-guides/` in Reading Well 1, which is still drafting.
   Replace each with a URL that answers, or drop the link and keep the citation in Sources. The
   32 links reporting 403 are publishers blocking scripts, not breakage; leave them.
5. **`npm run quiz` lists 18 quizzes tripping the shape heuristic** (option-length spread over 25
   characters, adjacent repeats, unused positions) without being winnable by a reader who read
   nothing. Worst is Personal Finance 6 at a 174-character spread. Decide one thing when it comes
   up: tighten the 18, or raise the threshold and say why. Not both.
6. **Then the Foval Core in order, one course at a time.**
   **Reading Well: lesson 1 of ten is written and through two Stage 4 rounds as of 2026-09-17.**
   It publishes when its ten lessons pass Stage 4, adding `reading-well: 10` to
   `curriculum/audio-debt.yaml` in the same commit. Ten lessons are planned in
   `research/OUTLINE.md`, with a course-end test and a project.
   **Next: `/draft-lesson courses/foundations/reading-well 2`, then 3, and on for as long as the budget lasts.**
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

**`npm run state`.** It computes every count from the filesystem: courses, lessons, review files,
scripts, episodes, average body words, and the next action for each course in Core term order.

The table that used to sit here is gone. It was hand-maintained, it drifted between sessions, and
reconciling it against the repo was the first thing every session did. **A fact a script can derive
is no longer written down in this repo.** If something above disagrees with `npm run state`, the
script is right.
