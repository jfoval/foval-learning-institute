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

- **Current course:** **Digital Literacy**. Stages 1 and 2 are done: `research/SOURCES.md` is
  8,800 words, `research/OUTLINE.md` is 15,900 and plans thirteen lessons, a course-end test and a
  machine-audit project. **Next is `/draft-lesson courses/computer-science-and-ai/digital-literacy 1`.**
  **Read the outline's "Six decisions this outline settles" before drafting anything**: the course
  teaches POSIX shell and names what PowerShell does differently, lesson 1 states the course's own
  premise honestly rather than claiming understanding makes you safer, the backup lesson is
  narrowed until Stage 1 goes back for two named documents, every figure carries its year, and the
  course teaches the desktop model and says so because none of the research is about phones.
- **Every published course is written**, Reading Well included as of 2026-09-19: ten lessons, a
  twenty-item course-end test, the project, and ten fact-checked scripts. It is the eighth live
  course and the second on the Foval Core, and its ten episodes are on the debt ledger. Nothing on
  any live course is outstanding except episodes, which are blocked on money.
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
- **Blocked on:** money. **September's cap is spent**, with about 22 cents left of $30 as of the
  night of the 18th, which is not enough for one more episode. Twenty eight episodes are owed
  across four courses. The cap resets on the 1st, and John raises it when he can; he asked to be
  told, not asked. **Writing scripts is free and is not blocked by any of this**, and it is what the
  rest of the month is for.
- **Next action, content:** whatever `npm run state` names, which is Digital Literacy's outline,
  then its lessons.
  **Next action, audio:** Logic and Argument 10, the moment the cap resets.
- **"Written" now means checked, as of 2026-09-19.** `npm run state` and `npm run validate` counted
  script *files*, so ten unread drafts read as a written course, and it had already happened: with
  script 9 drafted and unchecked, state said every live course was written and sent the session on
  to the next course. Both now require a `checked:` entry in the script's frontmatter, which is the
  gate `build.mjs` already puts in front of an audio stamp.

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

Render order: **Logic and Argument**, then Personal Finance, Algebra Essentials, Python Basics,
Bible Basics. **Logic 1 to 9 are live as of 2026-09-18**, rendered on the settled pipeline, every
one passing its gate on the first attempt, at an average of 24 cents. Writing Clearly's nine went
the same night and the course came off the ledger. **Logic 10 is the only episode that course still
owes**, and it is the first thing to render when the cap resets.

**A script over about 1,417 spoken words is refused before any money is sent**, because the render
engine's sixteen thousand token output ceiling would cut it off. Logic 2 hit it on 2026-09-18 and
was shortened and re-fact-checked. `node scripts/podcast.mjs render <lesson>` now says so on the
dry run instead of only on `--go`, which is where the limit used to be invisible. **Write to about
1,300 and check the dry run before the fact-check**, because shortening is new text and the
fact-check has to run again after it.

**Scripts: seventy-one of seventy-one, all fact-checked.** Every lesson on the eight published
courses has one, checked in a fresh context, most of them twice and several three times. What the night taught about writing them is in the two craft notes above and in the ceiling
note; what it taught about checking them is the next paragraph.

**A repair fails again about half the time, measured across two rounds on ten Reading Well scripts.**
Five of the six scripts sent for a second round had passed their first-round repairs, and the sixth
failed again on the same sentence in a quieter form: a sign-off telling the listener the lesson
carried a whole passage it does not. The fix that works is to brief the re-checker with **what the
repair was for**, not just to ask for another read. Three rounds is the point of diminishing return:
lesson 6's fourth pass returned a Latin spelling and two paragraph-distance slips and nothing else.

**Adler's third stage is now recorded verbatim in Reading Well's SOURCES.md, re-read from the scan
on 2026-09-18.** Four lessons had been leaning on `OUTLINE.md` for it, which is a plan and not a
citation, and one of them invented a distinction Adler explicitly rules out. Two things came back
stronger than the course had been recording. The demanding rule is blunter: "You have no freedom of
will about this ... you simply cannot disagree. You must agree." And **Adler's own illustration of an
uninformed author is Darwin lacking genetics**, which he calls "one of the major defects in *The
Origin of Species*", so lesson 7's example now comes from the book lesson 5 worked.

**This drafter quotes accurately and describes carelessly, measured over five Reading Well
lessons.** Every quotation in lesson 5 was verbatim, checked character by character against the
source. Six of its findings were critical and every one was a claim *about* the book rather than a
quotation from it: a sentence placed at the end of a chapter when it is in the second paragraph, a
chapter said to be about cabbage growers when cabbage appears twice in passing, three consecutive
sentences called distributed across three paragraphs in the very passage arguing that arguments are
distributed, and a premise called too obvious to state when the author states it flatly four pages
on. **Point a review at the sentences with no quotation marks in them**, and give it the source text
so it can check them.

**A lesson's Stage 4 review also catches this, measured over four Reading Well lessons.** Not
invented facts. Arithmetic the drafter did not redo (a marketed 1,500 wpm called "four to six times"
a band that makes it five to eight); a publisher's name half-remembered (the "American Psychological
Science"); a claim carried in from the outline rather than from a source, which then falsified the
lesson's own promise to claim nothing beyond its sources; a source's finding quietly rewritten to
match the course's theme ("vocabulary and practice" becoming "vocabulary and background knowledge");
two different things given one name across two lessons; two invented author first names; and a quiz
that could be passed without reading the lesson because every answer was B and every correct option
the longest. **Prompt a lesson review for those**, and give it the course's SOURCES.md, because
three of the eight were the drafter drifting off a source that was sitting right there.

**A script fact-check earns its keep, and the failures are not the ones you would guess.** Of the
twenty-odd scripts written on 2026-09-18, about half came back FAIL. Almost none of the failures
were invented facts. They were: a quotation spoken in words the cited translation does not have,
three separate times; a cross-reference to the wrong lesson in a course built on cross-references;
a count in a sign-off that the repair itself had falsified; a hedge dropped so that an argued claim
arrived settled; and, once, a whole direction, where every compression in an episode narrowed the
range of positions and weakened the side the course disagrees with. **Prompt the check for those**,
not for whether the numbers are right, and on a standpoint course ask explicitly whether anything
the episode keeps quietly takes a side.

**A maths script needs a different check from a prose one, learned on 2026-09-18.** A listener
cannot see a bracket, so every bracket is opened and closed aloud ("bracket, minus one, close
bracket, squared"), every product is spoken with its "times", and any expression that could parse
two ways by ear is said in pieces. The fact-check prompt for a maths lesson asks the reviewer to
redo every calculation **and** to read the script as a listener hears it: the first algebra script
said the same spoken phrase equalled plus one in one turn and minus one four turns later, which is
invisible on the page and fatal in audio.

**What a script for a long lesson looks like, learned over seventeen of them on 2026-09-18.** The
ceiling is about 1,417 spoken words and the dense lessons do not fit. Choose two or three of the
lesson's sections and take them properly, rather than touring all of them; then **say in the
sign-off what the episode left out**, by name. Logic 5 takes one of its four families of inductive
argument, Logic 6 takes two of its three errors, and both are better episodes for it. Cut whole
exchanges, never shave words: shaving costs a dozen edits and loses the hedges, and every
fact-check tonight found the same thing, that what a cut removes first is a qualifier. Write them with
`/make-podcast <lesson>`, stopping after the fact-check. Several a session is fine. Take one course
all the way to *written* before starting the next.

**The seven existing scripts are renderable as they are.** The speaker prompt that made How to
Learn Anything come out right is built by `scripts/podcast.mjs` at render time, not stored in the
script, so every script gets it. They only run long and ping-pong, which is taste and about seven
cents. `/make-podcast` says what could be improved and that neither thing blocks a render.
**Nothing on a course already through Stage 4 is to be re-opened.**

**The 1,417-word ceiling is about 150 words tighter than it needs to be, measured 2026-09-18.**
`scripts/podcast.mjs` computes the refusal from `WPM = 150`, and across the twenty one episodes
rendered with durations recorded the real rate is about 167 words a minute. Logic 4 is the clean
case: 1,413 words came back as 511 seconds of audio and 12,787 audio tokens, against the 14,745 the
guard assumed. So the true ceiling is nearer 1,570 words. **Do not raise the constant on this
note**: the guard is doing its job and a wrong ceiling in the other direction costs money. It is
here so that a session shortening a good script knows it is cutting against a conservative wall,
and so that whoever next touches that file can widen it on evidence. The same constant makes every
script's `approx_minutes` wrong; the six Python and Algebra scripts written tonight say 8, the
older ones still say 6 over 1,400 words.

1. **A render was paid for twice on 2026-09-18, and the reason is worth keeping.** Writing Clearly
   lesson 4's script was shortened to fit the render ceiling and sent to render before its
   re-check came back. The re-check returned FAIL: the cut had dropped the closing clause of a
   thirty-six-word example while keeping the number, so the episode said "thirty six words" over a
   thirty-word sentence and then called eighteen "half the length". The episode was rendered,
   listened to on the profile, and **not uploaded**; the script was fixed and rendered again, at a
   cost of about $0.24. **The rule that follows: never start a render until the fact-check of the
   text you are about to send has come back.** A `checked:` entry from before a cut is not a check
   of what the cut left.
2. **Seven small numbers and headings in published lessons, all found by script fact-checks on
   2026-09-18 and all fixed on the morning of the 19th.** Algebra 3's "at x = 3, one is 9 and the
   other is 27", which compared `3x` and `5x²` and then gave the values of `x` and `x²`; Algebra 2's
   heading "Two more shapes" over four; Python 2's "Two ways to live with it" and "Either is a real
   answer" over three; Bible Basics 4's "says it in four words" over a five-word chapter title;
   Bible Basics 6's exercise heading naming Acts 6, which appears in the lesson's discussion and not
   in the exercise; Writing Clearly 6's shortened paragraph called 46 words when it is 47, which
   makes the reduction 58 per cent rather than 59, in a lesson whose own Sources note promises every
   count was recounted; and Writing Clearly 9's "twenty-word subordinate clause" over a clause of
   eleven. **Two Algebra scripts named two of these slips in their sign-offs or their `checked:`
   blocks and have been updated**, which is the thing to remember: a fix to a published lesson can
   falsify a script written about it, so grep the podcast folder as well.
3. **Closed 2026-09-19, and the queue's reading of it was right.** Python Basics lesson 1 said
   "most of the 45 may well be noise" about the Patitsas dip-test result. The 5% is 5% of the 323
   sections actually tested, about sixteen, so it was undercutting a real result by a factor of
   nearly three. The paper was read directly: its own figures are "45 classes (13.9% of those
   tested, 5.8% of all the classes)", and the lesson had printed only the second, which is what
   made 5.8% look indistinguishable from the 5% chance rate. Both are now given, and the paper's
   own strengthening argument replaces the invented one. **The script carried the same error and
   its `checked:` block recorded that two reviewers had confirmed the denominator and called 13.9%
   "the misleading" figure.** Both rounds were wrong, and the block now says so. The lesson to keep:
   a `checked:` block is evidence about what was looked at, not proof that it was right.
**Two things `npm run state` was getting wrong, both fixed 2026-09-19 with tests.** It counted
script *files* rather than checked ones, so ten unread drafts read as a written course, and it had
already sent this session past an unchecked script to the next course. And it named a stage the
course was not ready for: it tracked `OUTLINE.md` and never looked at it, so it told a session to
draft lesson 1 of a course that had only been researched. **The line `npm run state` prints is the
one thing a session acts on without re-deriving, so a wrong line misdirects a whole session.** If
you find a third case, write the test first.

4. **Personal Finance 6 is cited, and citing it found something worse.** Thirteen markers went in
   on 2026-09-19 and the last `npm run validate` warning is cleared; every one of the nine entries
   now carries a claim the prose makes, and none was a candidate for removal. **The problem was the
   other way round.** Five claims in the lesson have no entry at all, two of them load-bearing: the
   "nine in ten filers take the standard deduction" figure, asserted four times and carrying the
   whole not-every-deduction-reaches-you argument, and a contested payroll-tax incidence assumption
   attributed to the CBO where the CBO entry cited is a different paper on a different subject. The
   capital-gains schedule, the refundable-credit paragraph and the state-tax range are the other
   three. Two sentences that reached past their sources were narrowed in the same commit. **The
   remaining five were closed on 2026-09-19 from primary documents**, and two did not survive
   contact with the evidence: "along with most economists" on payroll tax incidence was cut,
   because CBO's own appendix says the incidence could differ from its allocation and its working
   paper calls the empirical evidence limited; and "the EITC is the largest example" of a
   refundable credit was narrowed, because the Child Tax Credit is larger in total though only
   partly refundable. The lesson now says a newer tax table exists. Its quiz, the worst in the
   repo at a 174-character option spread with the key longest in three of six items, was rebalanced
   in the same pass. Nine other lessons have one to three uncited entries, which is ordinary and
   stays under the threshold. **Nothing is outstanding on this lesson.**
5. **Six of the seven dead links are fixed, and the seventh cannot be.** The
   `earlychristianwritings.com` pages had moved: the Thomas page is back at `/thomas.html`, and 1
   Enoch, 2 Baruch and 4 Ezra were never Christian writings and live on the sister site
   `earlyjewishwritings.com`, where 4 Ezra is filed as 2 Esdras and the lesson now says so. Personal
   Finance 1's Wikipedia link for *All Your Worth* is now Open Library. Reading Well 1's tenancy
   guides page is now the scheme's help centre. **The Vanguard emergency-savings report is gone with
   no replacement**, so its citation stands in both places without a link, which is what standards
   4.5 allows. The 32 links reporting 403 are publishers blocking scripts, not breakage; leave them.
6. **Settled 2026-09-19: the quiz check was reporting eighteen quizzes under a headline that was
   false.** Not one of the eighteen was beaten by pick-the-longest, pick-the-shortest, or
   always-pick-the-same-position, which are the strategies that actually make a quiz gameable.
   Every flag was an advisory note about shape. Verdict and advice are now separate, only a
   genuinely gameable quiz exits non-zero, and the spread line carries the number worth acting on:
   how many wide items have the key as the longest option. Seventeen quizzes remain lumpy in shape
   and none is winnable by it. **Rebalance one when its lesson is next open; do not make a session
   of it.**
7. **Then the Foval Core in order, one course at a time.**
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
   One more the outline flags: lesson 6 on marginalia is thin and should be folded into lesson 5
   rather than padded. Lesson 9 is in a 3.4 domain and its neutrality audit is mandatory. The Rayner
   speed-reading monograph was read only through its public summary; **lesson 4 settled that by
   disclosing it in the body, above the first thing attributed to it**, and by staying inside what
   the summary carries. Its review caught the lesson claiming a fixation's perceptual span, which
   the summary does not support and the outline does, so **treat OUTLINE.md as a plan and never as a
   source.**
   **Reading Well is published, and is one fact-check from written.**
   **Digital Literacy is the current course**, scaffolded 2026-09-19 at T1 with `status: research`.
   Its scope was widened on 2026-09-18 to carry the terminal, because Term 6's Python course assumes
   it and never teaches it, so Stage 1 has to reach as far as running a file and reading the error.
   After it: Using AI Effectively, then Term 2. Start each with `/new-course`.

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
