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

- **Current course:** **Every published course is now written**, as of the night of 2026-09-18:
  sixty-one lessons, sixty-one fact-checked scripts. Two are **finished**, How to Learn Anything and
  Writing Clearly, both off the debt ledger. Logic and Argument owes one episode and nothing else.
  Personal Finance, Algebra Essentials, Python Basics and Bible Basics owe only money. **So the
  writing job is now drafting, not scripts**, and Reading Well is it.
- **Current lesson:** Reading Well, lessons 1 to 5 drafted. **1, 2 and 4 are through Stage 4 and
  clean.** Lesson 3 has had all of its review findings applied, including the new
  opener, and its **second pass is out**, owed because the first found wrong facts. Lesson 5 has
  had its first review applied, six critical findings and all of them factual, and a **targeted
  re-check is out**. Lessons 3, 5, 6 and 7 have all been through a review and
  had every finding applied; lesson 3 has also passed a neutrality audit. Lessons 6 and 7 have also been through a second pass and
  **owe a third** on the passages those passes rewrote, which is where this course's defects now
  live: a repair fails in the opposite direction about half the time. Lessons 8 and 10 are drafted and their reviews are out. **All ten lessons are drafted**. Lesson 9 is in a 3.4 domain, its neutrality audit is mandatory and is out, and its two primary
  documents were sourced and verified first. **The project brief is written.** What is left of the
  assessments is the twenty-item course-end test, which `research/OUTLINE.md` blueprints by objective
  and which needs at least twelve application items and two cross-lesson ones; two of its items are
  on a supplied pair of documents and so wait on lesson 9.
- **Lesson 9's two documents are sourced and verified**, and the research is worth keeping.
  **Worked example (a): Captain John Parker's deposition of 25 April 1775 paired with Major John
  Pitcairn's report to Gage of 26 April 1775.** One day apart, each by the officer commanding at the
  point of contact, each addressed upward to his own side's authority, each written while his own
  conduct was in question, agreeing on nearly everything except the clause that matters. Parker is
  clean at both layers: the 1775 text is public domain and the National Archives transcription is a
  US government work marked unrestricted. **The British half is the problem and the lesson must say
  so**: nobody has seen the manuscript or Allen French's 1932 printing of it, the Clements Library
  and HathiTrust both refused access, every online transcription is unsourced and one says it has
  been edited for readability, and the archival citation comes from a footnote in a web magazine.
  Gage's own published account corroborates the wording clause by clause but is derived from
  Pitcairn's report, so it proves the text is real and proves nothing about the events. **Worked
  example (b): Sylvanus Wood's affidavit of 17 June 1826**, which is weak evidence about 1775 and
  excellent evidence about 1826, and whose sting is that it was gathered not by Lexington's friends
  but by Concord's, to take the priority away from Lexington.
- **Another licence trap, of the kind `course-wide.md` already records.** The Internet Archive copy
  of Peter Force's *American Archives* vol. 2 is a community upload carrying a CC BY badge applied by
  the uploader, who has no standing to license an 1839 public-domain text. The Ripley and Dawson
  scans of the same period are library-sponsored and marked not in copyright, which is the clean
  case. **A badge on an Archive item licenses the uploader's work, not the book.** The course publishes when those are done, adding `reading-well: 10` to
  `curriculum/audio-debt.yaml` in the same commit. Next is `/draft-lesson courses/foundations/reading-well 6`, as many lessons as the
  budget allows, after reading that course's `research/reviews/course-wide.md`.
- **Where to look for a real example when the obvious domains all fail.** Lesson 3 needed a short
  real text in which every word is ordinary and a newcomer still cannot say what happened. Cricket,
  beekeeping, gardening, bell-ringing and sailing were all tried and all fail the same way: their
  plain-looking words (*frame*, *struck*, *bob*, *course*, *slip*, *over*) are technical terms in
  disguise, which is exactly the objection that lesson teaches. **Institutional procedure is close
  to the only domain where the words stay in their plain senses and only the significance is
  assumed**, which is why the opener is now four lines of Hansard. Parliamentary records, court and
  tribunal records, and committee minutes are the place to go next time. Hansard's historic archive
  is openly licensed and Logic and Argument already cites it.
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
- **Next action, content:** scripts, in Core term order: Python Basics, then Bible Basics. They are
  free at the API and they are what stands between a published course and *written*.
  **Next action, audio:** whatever `npm run state` names, which is Logic and Argument 4 onward.

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

**Scripts are done.** All sixty-one lessons on the seven published courses have one, every one
fact-checked in a fresh context, most of them twice and several three times. `npm run validate`
prints nothing about scripts now because there is nothing left to print. What the night taught about
writing them is in the two craft notes above and in the ceiling note; what it taught about checking
them is the next paragraph.

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
2. **Two defects in Algebra Essentials lessons, found by script fact-checks on 2026-09-18.**
   **Lesson 3 says that of `3x` and `5x²`, "at x = 3, one is 9 and the other is 27".** Five x
   squared at three is 45; 27 would be three x squared. The point the sentence is making survives
   either way, so it is a number to correct rather than an argument to redo. **Lesson 2's heading
   says "Two more shapes" over a section that gives four.** Both are one-line fixes and neither is
   load-bearing; they are here rather than fixed inline because they are content changes on a
   published course.
3. **Three small numbers in published lessons do not survive counting**, all found by script
   fact-checks on 2026-09-18 and none of them load-bearing. **Writing Clearly 6** calls its
   shortened paragraph 46 words and it is 47, which makes the reduction 58 percent rather than 59,
   and the lesson's own Sources note claims every count was recounted. **Writing Clearly 9** calls
   the council tax letter's subordinate clause twenty words long; the clause is eleven, and
   nineteen even counted through "within one month". The scripts for both were written around the
   figures rather than repeating them. One visit fixes all of these and re-reads the Sources notes
   that promise the counts were checked.
4. **Three small things in Python Basics lessons, found by script fact-checks on 2026-09-18.**
   **Lesson 2 says "Two ways to live with it" and closes "Either is a real answer" over a section
   that gives three**: rounding before comparing, whole units of the smallest denomination, and the
   `decimal` module. Two words fix it. **Lesson 1's arithmetic about the Patitsas result deserves a
   second look.** The lesson says 45 of 778 sections came back positive, that about 5% would come
   back positive by chance, and so "most of the 45 may well be noise". But the 5% is a rate over the
   323 sections actually tested, which is about 16, not most of 45. Either the sentence wants a
   different word than "most" or the reasoning wants spelling out; the paper is the place to settle
   it, and the script was written so as not to repeat the inference. Neither is load-bearing and
   both are content changes on a published course.
5. **Two small slips in Bible Basics lessons, found by script fact-checks on 2026-09-18.**
   **Lesson 4** says Fee and Stuart's chapter title "says it in four words" over "Enforcing the
   Covenant in Israel", which is five. **Lesson 6's exercise heading** says "on Mark 4, three
   storms, and Acts 6", but the exercise's third task cites Luke 16, Acts 16 and 18, Amos 5, 1
   Samuel 14 and Acts 21; Acts 6 appears in the lot discussion rather than the exercise. Both are
   one-line fixes and both are content changes on a published course.
6. **Two lessons do not cite their own sources.** `npm run validate` warns on both, added
   2026-09-18. **Personal Finance 6 (taxes) has nine sources and not one `[n]` marker in its
   prose**, so every bracket figure in a tax lesson is uncited to the reader; Python 2 cites one
   of five. Both are content fixes on published courses and both are standards Part 2. Nine other
   lessons have one to three uncited entries, which is ordinary and stays under the threshold.
   Personal Finance 6 is also the worst quiz below, so it earns one visit for both.
7. **Seven dead links in published lessons.** `npm run links` finds them; standards 4.5 asks for
   primary sources linked in the body, and these do not answer. Four are
   `earlychristianwritings.com` pages in Bible Basics 6 and 7 (the site reorganised; the texts are
   still there under other paths), `corporate.vanguard.com/.../vemo.html` in Personal Finance 2,
   `en.wikipedia.org/wiki/All_Your_Worth` in Personal Finance 1 (the article was merged away), and
   `tenancydepositscheme.com/resources/tds-guides/` in Reading Well 1, which is still drafting.
   Replace each with a URL that answers, or drop the link and keep the citation in Sources. The
   32 links reporting 403 are publishers blocking scripts, not breakage; leave them.
8. **`npm run quiz` lists 18 quizzes tripping the shape heuristic** (option-length spread over 25
   characters, adjacent repeats, unused positions) without being winnable by a reader who read
   nothing. Worst is Personal Finance 6 at a 174-character spread. Decide one thing when it comes
   up: tighten the 18, or raise the threshold and say why. Not both.
9. **Then the Foval Core in order, one course at a time.**
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
