# Changelog

What has shipped, newest first. Courses published, platform changes, and decisions that changed how
the institute works. Items move here out of `docs/QUEUE.md` when they are done.

Everything from the founding onwards is here. Entries before 2026-09-06 came from the old root
`CHANGELOG.md`, which was merged into this file on 2026-09-06 so there is only one changelog.

Older entries refer to `docs/BACKLOG.md`, which was split on 2026-09-09 into `docs/QUEUE.md`
(the marching order), `docs/DECISIONS.md` (what is settled), `docs/PLATFORM_ROADMAP.md` (specs for
unstarted work) and this file. Its section numbers survive only in those entries and in a few
split-seam comments inside Bible Basics lessons, which point at `docs/DECISIONS.md` §5.

## 2026-09-18 — Using AI Effectively started, and two papers opened that everybody quotes second-hand

**Sixth of seven in Term 1, immediately after Digital Literacy, where the Core map already had it.**
Scaffolded, researched, outlined and two lessons drafted in one session. 6,800 words of research,
a 9,600-word outline planning eleven lessons, a 24-item test blueprint and a project, and lessons 1
and 2 through Stage 3 with fresh-context reviews running.

**The course carries `sensitive_domain: true` on the institute's own call rather than the standards'
list.** Standards 3.4 names education and any recent event, and an honest treatment of this subject
needs both.

**Seven decisions are settled in the outline** so that eleven lessons written in different sessions
agree. The two that most change what a drafter may write: the course names no product and prints no
interface instruction, and no lesson body states a capability as a standing fact. Every capability
figure carries a model name as well as a date, which is Digital Literacy's convention with one field
added. And everything perishable is quarantined in lesson 11, which is the revision point for the
whole course, so a future session can bring it up to date without re-opening ten lessons.

**The hardest design problem was that the course cannot predict what any reader's system will say**,
so no exercise can have a key. The answer, used in every lesson: the reader writes a prediction
first, then runs it, then records the gap, and the gap is the deliverable. That is assessable
without a key, it works on any product, and it is retrieval practice, which Term 1 position 1 taught
them.

**Two papers were opened that the whole internet quotes second-hand, and both had been summarised
wrongly in the same direction.**

Dell'Acqua et al. on the jagged frontier: the publisher's HTML returns 403 and the PDF does not, so
the paper is open access and readable after all. Opening it corrected the headline from "19% less
likely" to **19 percentage points**, which is what the results section says and the abstract does
not; killed the 43%-against-17% skill figures, which are not in the published text; and turned up
the result nobody carries. The study had **three** conditions, and the third was GPT-4 plus a prompt
engineering overview. That group did best inside the frontier and **worst outside it**, 24.5%
against 13.9%. The people taught to use the tool better were the ones most damaged by using it on
the wrong task. That is now the spine of lesson 6.

Noy and Zhang on writing productivity: the MIT working paper extracts cleanly. The "18% higher
quality" figure that circulates **is not in the paper**; quality is reported in standard deviations
and the number is 0.45 SD. And the compression finding is better than its summary: low-scoring
workers got faster *and* better, while high-scoring workers kept their grade and got much faster, so
the gap closed because the already-good stopped spending as long.

**The general lesson, now written into both research files: a summary keeps the figures that make a
clean story and drops the one that complicates it.** Both papers came off the `unread:` line, and
so did chapter 2 of Jurafsky and Martin, which gave the mechanism lesson a real source for tokens
instead of general knowledge.

## 2026-09-18 — Digital Literacy's assessments, and a test that had to be written twice

The machine audit and a 32-item course-end test. The course now has everything except lesson 13,
which is blocked on John running a real data export.

**Both failed their first Stage 4 review, and the two failures were different in a way worth
keeping.**

The project failed on **fidelity**. It was drafted from the lesson objectives rather than the lesson
bodies, and the result was structurally right and factually wrong in a way that reads as fine: it
named the wrong five questions from lesson 1, halved Wash's eight folk models to five, told the
learner that the one party who cannot see them is covered by encryption when lesson 7 spends a
predict block ruling exactly that out, promised every learner a permission-denied that Git Bash on
Windows will not give, and carried Reading Well's "lesson 9" across into a course where lesson 9 is
about installing software. **Objectives are an index, not a source.**

The test failed on **the one requirement that made it a test**. The outline asks for at least
fifteen items of application to material appearing in no lesson; it had about five. Twenty-six of
thirty-two handed back a scenario the learner had already been walked through, and seven were a
lesson's own predict block or quiz item with the pronouns changed and the key in the next sentence.
Standards 1.1 says a quiz passable by recognising phrases from the text has failed the transfer
test. Rewritten with a new person, a new file and a new number in every item.

**Three measured tells came out of the same rewrite**, and they are now defects 15 to 17 on the
drafter's list because this drafter produced all three on every draft it wrote that day: the key was
the strictly longest option in 15 of 32 items, answer positions ran 9/11/8/4, and contraction rates
came in at 2.9, 0.0 and 0.3 per 1,000 words against a band of 5 to 8. All three are measured by
`npm run validate`, so the only cost is a fix pass that should not be needed.

**And the test found a contradiction inside a published lesson.** Lesson 7's diagnostic ladder said
a trace answering at hop one and nowhere after means the trouble is at or just past your provider.
Its own earlier section says asterisks are not a fault and a trace to a healthy site is full of
them. A learner obeying the ladder reached a conclusion the lesson elsewhere calls an overread. The
ladder now says what a stop past hop one is worth, which is nothing on its own, and gives the
comparison that does carry information.

## 2026-09-18 — Three queue items closed by checking rather than by building

None of the three needed code. Two of them described a defect that was not there.

**Items 4 and 5, "the repetition warning does not run on the course that needs it most", are
wrong.** The claim was that `npm run validate`'s repeated-sentence warning is skipped on any
course whose status is not yet `published`, which is exactly the drafting window when lessons
written in one context reuse each other. Tested rather than read: a single 15-word sentence was
planted in Digital Literacy lessons 1 and 2, a course with status `drafting`, and validate warned
on it by name. `checkRepetition` walks the courses directory off disk and never looks at
`status`. The warning has been covering drafts the whole time.

**How the wrong belief survived nine days is the part worth keeping.** The check was added the same
day Digital Literacy lessons 2 and 3 were found to have duplicated a whole argument by eye, and the
two facts were written down together as cause and effect: the reviewer found it *because* the
machine could not. The plausible story was never tested against the code. The first attempt to test
it here also failed, and instructively: the planted sentence was appended to the end of the lesson
files, where it sits below `## Sources` and is stripped before the comparison by design. A check
that appears not to fire is two hypotheses, not one.

**Item 1, the script-length target, has no disagreement left to settle.**
`docs/PODCAST_PIPELINE.md` section 4a says write to about 1,200 words, `/make-podcast` says a
band of 1,000 to 1,200, and the 1,300 that disagreed with them was the duplicate in
`docs/QUEUE.md` that was deleted on 2026-09-19. One target, stated twice, consistently. The
separate observation that scripts land against the 1,417-word wall rather than near 1,200 is a
drafting habit, not a documentation conflict, and section 4a already says what it costs.

`docs/VERIFICATION.md`'s repetition row now records the draft-course test.

## 2026-09-18 — The app-store column of Digital Literacy now has research under it

Lesson 9 teaches a three-route comparison for installing software, app store against package
manager against browser download, and its Stage 4 review found that `research/SOURCES.md` had **no
app-store entry at all**. The whole column, and the course's "if it is in the app store it is safe"
misconception, rested on general knowledge, against `courses/CLAUDE.md` rule 1. Nothing false was
printed; the gap was that nothing stopped something false being printed next.

Stage 1 ran on it. Seven sources, about 1,700 words, in a new block under "Primary sources and
official guidance": Apple's App Review Guidelines, Apple's 2025 fraud-prevention analysis, Google's
2025 Play ecosystem post, the Gatekeeper section of the Apple Platform Security guide, Apple's
notary service description, Microsoft's SmartScreen overview, and Kotzias, Caballero and Bilge at
IEEE S&P 2021 on unwanted app distribution.

**The measurement is the find.** Kotzias et al., on 7.9 million apps across 12 million devices in
2019, report that the Play market has the best defences of any install route **and** is the source
of 67% of unwanted app installs, because it is the source of 87% of installs full stop. Safest per
install, largest in absolute terms, both true at once. That is the exact shape of reasoning lesson 9
wants and it is now sourced rather than argued.

**Two more misconceptions came out of it**, both about warnings rather than stores. Microsoft states
plainly that SmartScreen warns when a file, app or certificate has *no established reputation*, so a
new honest program is warned about and a popular bad one need not be. And Apple's own definition of
the notary service, an automated scan for *known* malicious content, is the clean illustration that
a signature answers "who" and not "is this good". Both are now in the misconceptions list.

Six of the seven were read directly; every entry carries what it can and cannot support, and the
two vendor self-reports are labelled as such, with the note that Apple and Google publish different
metrics on different schedules and cannot be compared. The block ends with the gap it does not
close, which is the cryptographic mechanics of signing, for whoever needs it.

Fixed in the same pass: the misconceptions list still printed "over 90% of phishing sites served
HTTPS by 2023", which the APWG entry forty lines above it had already corrected to 82% in Q2 2021
with no 2023 figure existing anywhere in the series. One file, two numbers, disagreeing.

Closes the Stage 1 gap in `docs/QUEUE.md`.

## 2026-09-18 — The frontmatter parse error now says where

`npm run validate` reported "frontmatter does not parse as YAML" with a guess at the cause and no
location, and `js-yaml` had the line and column the whole time. It was the most frequently hit
defect in the repo: three Digital Literacy lessons tripped it five times in one session, and every
hunt started the same way, by re-parsing the file by hand in node to find out where.

The message now carries the file and line, the text of the offending line, **and the line before
it**, which is the one to edit. That last part is the non-obvious half: YAML only notices a
malformed value when it reaches the next mapping entry, so the line it names is reliably one past
the mistake. It also lists the three causes seen so far rather than one, in order of frequency: a
colon followed by a space inside an unquoted value; a value beginning with a quotation mark, which
YAML reads as a quoted scalar so anything after the closing quote is a syntax error; and a value
beginning with a backtick. The second of those was new that day and is what prompted the fix.

Verified against two of the three causes by breaking a real lesson's frontmatter each way and
reading the output. `docs/VERIFICATION.md` carries the row. Closes `docs/QUEUE.md` item 5.

## 2026-09-19 — Reading Well written, Digital Literacy started, and the queue pruned

**Reading Well is written.** Ten lessons, a twenty-item course-end test, a project, and ten
fact-checked scripts. The eighth live course and the second on the Foval Core. Its ten episodes are
on the debt ledger; it is not finished and the word is not used for it.

**Digital Literacy through Stage 2.** Scaffolded at T1, 8,800 words of research, and a 15,900-word
outline planning thirteen lessons, a course-end test and a machine-audit project. Six decisions are
settled in the outline rather than left to the drafter, including teaching POSIX shell rather than
PowerShell and having lesson 1 state that the course's own premise is only partly supported by its
own sources.

**Three checks stopped saying false things, each with tests.** `npm run state` and `npm run
validate` counted script *files* and called them fact-checked, so ten unread drafts read as a
written course; it had already misrouted this session past an unchecked script. `npm run state`
also named a stage a course was not ready for, telling a session to draft lesson 1 of a course that
had only been researched. And `npm run quiz` reported eighteen quizzes under the headline "a reader
could game" when not one was beaten by any strategy, which is why those eighteen had sat unactioned
for days.

**Two silent failures in the audio budget block**, both found by John asking why no episodes were
rendered. The "THE CAP IS SPENT" banner sat after an early `return` from 2026-09-09 and had never
run once, through the month a runaway retry loop ate $23.39 of a $30 cap. And the block reported
five views of what had been spent and none of what finishing costs, though it was derivable from
two numbers printed a few lines apart. It now prints the debt and what clears it, from one measured
per-episode rate instead of three hardcoded copies of $0.22.

**Four defects closed in published courses.** Python Basics 1's Patitsas arithmetic, which said
"most of the 45 may well be noise" when the chance rate applies to the 323 sections tested, about
sixteen, so it was undercutting a real result threefold; its script carried the same error and its
`checked:` block recorded that two reviewers had confirmed the wrong denominator. Personal Finance
6's citations, and then the five claims that had no source at all, two of which did not survive
contact with the evidence. That lesson's quiz, the worst in the repo. And a neutrality lean in
Reading Well 9's uncontested frame.

**The queue was pruned back to what is actionable.** It had grown from 847 words on 9 September to
4,109, and a third of it was history and craft that every session read before deciding what to work
on. Closed items are below; the script craft moved to `docs/PODCAST_PIPELINE.md` section 8 and the
lesson-drafting craft to the defect list in `.claude/commands/draft-lesson.md`, which are the files
the pipeline already tells you to read at those moments. Nothing was deleted.

### Closed queue items, moved here verbatim

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

**How to Learn Anything is done**, finished 2026-09-18: eight episodes, $1.61, every one passing on
its first attempt, all eight live in R2. It is the first course finished by the institute's own
definition.

**Adler's third stage is now recorded verbatim in Reading Well's SOURCES.md, re-read from the scan
on 2026-09-18.** Four lessons had been leaning on `OUTLINE.md` for it, which is a plan and not a
citation, and one of them invented a distinction Adler explicitly rules out. Two things came back
stronger than the course had been recording. The demanding rule is blunter: "You have no freedom of
will about this ... you simply cannot disagree. You must agree." And **Adler's own illustration of an
uninformed author is Darwin lacking genetics**, which he calls "one of the major defects in *The
Origin of Species*", so lesson 7's example now comes from the book lesson 5 worked.

**The seven existing scripts are renderable as they are.** The speaker prompt that made How to
Learn Anything come out right is built by `scripts/podcast.mjs` at render time, not stored in the
script, so every script gets it. They only run long and ping-pong, which is taste and about seven
cents. `/make-podcast` says what could be improved and that neither thing blocks a render.
**Nothing on a course already through Stage 4 is to be re-opened.**


## 2026-09-18 — `npm run state`: the facts are computed, not written down

John, after the third correction in one session: *"we keep going in circles... it seems like no
matter what I try you keep tripping over yourself."* He is right about the symptom and the cause is
worth writing down, because it is not the size of the repo. The code is 2,749 lines and the docs
3,369; Bible Basics alone is bigger than all of it.

**The cause is that the facts a session needs at startup were prose, in several files, and prose
drifts.** This one review found five places still telling a session to commit a build that had
moved the day before, two different cost tables for the same courses, `/make-podcast` contradicting
its own length rule three bullets later, and `CONTENT_PIPELINE.md` naming the TTS engine that had
been replaced for fading. Each is somewhere a session reads confidently and acts wrongly, and then
has to be corrected, which is the circling. `/status`, the command meant to prevent exactly this,
was itself prose: it asked the model to read fifteen files and reason, freshly and differently
every session.

**So `scripts/state.mjs` computes it instead.** One second, from the filesystem: every course with
term, state, lessons, review files, scripts, episodes and average body words; the totals; and the
next action per course in Core term order. It is the first thing a session runs, ahead of
`docs/QUEUE.md`. The hand-maintained status table is deleted from the queue, and the rule is now in
both `CLAUDE.md` and `scripts/CLAUDE.md`: **a fact a script can derive is not written down in prose
anywhere in this repo**, and when you want to record a count or a status, you add it to
`state.mjs`. That is the same rule as "if a rule needs shouting, write a check instead", applied to
facts rather than to rules.

It found two things on its first run, which is the argument for it. **Logic and Argument lessons 9
and 10 have no review file**, though both were reviewed (commits `0258956`, `e0832bb`); the
findings went into `course-wide.md` and the per-lesson record was never written. And the first
draft of the script itself named the wrong next lesson for Bible Basics, because it counted scripts
rather than finding the first lesson missing one, and that course's single script is lesson 2. Both
were caught by reading the output against the tree before shipping it.

**Also corrected here: the seven older podcast scripts need no work.** The previous entry said they
had to be brought up to the new prompt. That was wrong, asserted without reading
`scripts/podcast.mjs`. The speaker framing that made How to Learn Anything come out right
(`TTS the following conversation between John and Haley:`, with `S1:`/`S2:` rewritten to the names
in `multiSpeakerVoiceConfig`) is built at render time and applies to every script. A script only
has to open with Haley and carry a `checked:` entry. All fifteen do.

---

## 2026-09-18 — Two courses are short, and the outline says why

John, reading Python lesson 1: *"it starts off telling you python commands but do you know how to
use a terminal and where to write those commands?"* Confirmed, and the finding is in
`courses/computer-science-and-ai/python-basics/research/reviews/course-wide.md` as CW-04.

Lesson 1 says the interpreter is "what you get by typing `python3` at a terminal" and tells the
reader to "put the same line in a file called `sums.py`". It assumes the reader can open a
terminal, has Python installed, and knows where a file has to live. None of it is taught anywhere
in the course.

**The six lessons are not at fault; the outline is.** Its decision 3 reads: *"The file names do not
change. `01-first-program.md` through `06-collections.md` stay, because the course is live and
those URLs are in the site's data."* Sound for a rebuild, but it froze the course at six inherited
slots, and the stubs had never had a setup lesson. The same decision set the target at "1,800 to
2,600 words a lesson, against the stubs' 463", which is why this course averages 2,904 body words
where courses designed from scratch average 5,794. **Both numbers were set relative to what was
being replaced rather than to the institute's standard.** That is the lesson worth keeping: a
rebuild inherits the shape of the thing it replaces unless the outline is made to justify the
shape, and this outline was asked only to justify the contents of each slot.

Algebra Essentials is the same size for a different reason. Its outline *did* reason about scope
and added a sixth lesson rather than inheriting five, so the six it has are the right six. What it
never asked is whether six covers what the Core puts downstream: exponents and roots, which
Geometry needs, and quadratics. Recorded in its `course-wide.md`.

**Nothing is re-opened.** Two moves instead:

- **Digital Literacy carries the terminal.** Its TAXONOMY scope line was widened today to say so.
  It is Term 1 position 5 and unwritten, five terms ahead of Python, so it is the right home and it
  costs nothing now.
- **Each course gains lessons at its own Core turn**, and loses none. Adding is not re-opening.

---

## 2026-09-18 — A course has three states, and only the last one costs money

Written the same day as the entry below and refining it. John's correction: the podcast **script**
belongs to writing the course, not to rendering it. Writing one costs nothing at the API; only the
render spends. Sorting it under "podcast" left every course half-made, with a free piece of work
deferred behind a budget it does not need.

So the definition is three states, not two. **Published:** every lesson through Stage 4, live on
the site. **Written:** every lesson also has a fact-checked script. **Finished:** every lesson also
has an episode. A course is taken all the way to *written* before the next one starts, and what is
left behind is a pure spending step that needs only budget and no context.

- Root `CLAUDE.md` rule 6, `docs/DECISIONS.md` §2 and `docs/QUEUE.md` all say it.
- **`npm run validate` prints the gap**: one line, the outstanding script count per published
  course, never a failure. One line rather than a warning per course, because a warning nobody can
  clear today trains everyone to ignore the output. Today it reads 46 of 61 lessons with no script.
- **`/make-podcast` is split into two halves.** Part A, write and fact-check, is free, and several
  in a session is fine. Part B, render, spends and stays one at a time. The command used to read as
  one flow ending in a render, which is why script-writing kept being treated as spending.

**The seven pre-settlement scripts get brought up as Part A work**, with a checklist in the command:
length (they run 1,259 to 1,539 against a 1,000 to 1,200 band), turn shape (`logic-and-argument/02`
has 68 turns where the settled shape has about 33, and short turns make the hosts sound like a
quiz), and two `about:` fields still naming the retired engine's voices. **That is the only thing to
go back for.** The course process settled before the podcast prompt did, so lesson content on a
course already through Stage 4 is done and is not re-opened.

---

## 2026-09-18 — Audio gates "finished", not "published", and a docs pass over the dist/ move

**The decision.** John set the plan out directly: writing a course spends tokens and rendering its
episodes spends money, and the two budgets refill on different clocks. Holding finished lessons off
the site until their audio is paid for spends the scarce budget to withhold the plentiful one. So a
course now goes live when every lesson has passed Stage 4, and the word **finished** keeps its
meaning: a course is not finished until every lesson has an episode. `docs/DECISIONS.md` §2 was
rewritten, replacing the narrower exception decided the day before (which let only the *next*
course draft ahead of its audio), and root `CLAUDE.md` rule 6 with it.

**The ledger follows the decision.** `curriculum/audio-debt.yaml` previously refused any entry that
was not already in the committed file, which would have made publishing a course impossible under
the new rule. It now accepts a **new** entry at the course's **exact lesson count** and nothing
else, so a course may open a line on the commit that publishes it, owing every episode, and cannot
slip in already missing some with nobody counting them. An existing number still only shrinks.
Two tests pin both halves, per the rule in `scripts/CLAUDE.md` that a check without a test is a
check that can stop firing quietly.

**The docs pass.** Yesterday's move of the build into git-ignored `dist/` left five places still
telling a session to commit the generated site. The worst was `courses/CLAUDE.md` rule 7, which
loads automatically in every content session: it said to run `npm run build` and commit whatever
changed under `site/`, so a session would build, find a clean tree, and go looking for what it had
missed. Also fixed: `docs/PODCAST_PIPELINE.md` §7 step 9 and its `git add` example, the Stage 5
instructions in `docs/CONTENT_PIPELINE.md`, and two comments in `scripts/build.mjs` including the
`--drafts` warning printed to the console, which named a file that is no longer in git.

**Two other drifts closed.** `docs/CONTENT_PIPELINE.md` still named **Gemini 3.1 Flash TTS** as the
engine, which is the one that was replaced on 2026-09-18 for fading; it is Gemini 2.5 Pro.
And `/make-podcast` pointed the drafter at `bible-basics/02-one-story.script.md` as the model
episode. That script was written for the retired engine, still names its voices, and at 1,303 words
breaks the length rule stated three bullets below it. The exemplar is now How to Learn Anything
lesson 1, the episode John approved by ear and the one `scripts/podcast/hosts.json` is fingerprinted
from, and the length band is the measured one: 1,000 to 1,200 words, which is what the eight
episodes that billed $0.20 each actually ran.

**Recorded, not fixed.** The seven scripts written before the settled pipeline run 1,259 to 1,539
words against that band. They pass the gate; they just cost about seven cents more each and run
long. `docs/QUEUE.md` says to trim each to about 1,150 when its render comes up.

---

## 2026-09-18 — Reading Well is started: researched, outlined, and its first lesson at standard

**The first course the institute has built from nothing.** Everything before it was either a
pre-pipeline placeholder being rebuilt or a course that already existed. Reading Well went from an
empty folder to a researched, outlined course with one finished lesson in a day, which is the first
real measurement of what the pipeline costs on a clean start.

**Stage 1.** `research/SOURCES.md`, 4,000 words. Read in full: Adler and Van Doren's 1972 text (the
four levels, the six steps of systematic skimming, the four questions and all fifteen analytical
rules are recorded verbatim), Bacon's "Of Studies" from Gutenberg, Keshav's three-pass method,
Carey and colleagues' ten rules for reading a paper, and Harvard Library's six reading habits. Read
in part or at abstract level, and labelled as such: Brysbaert's reading-rate meta-analysis, the
Rayner speed-reading monograph, Wineburg 1991 through his own 1992 account, Reisman 2012, Recht and
Leslie 1988 with the 2025 critique of it, and Delgado 2018.

Two findings shaped the course. **There is no assigned undergraduate textbook for this subject**,
because reading is taught inside writing programmes, first-year seminars and the methods courses of
history and the sciences, so the course is built from primary texts plus the reading psychology. And
**Keshav rebuilt Adler's inspectional and analytical levels from scratch in 2007** without knowing
the book, which is the best evidence available that the levels are real rather than one man's taste.

**Stage 2.** Ten lessons, a twenty-item test blueprint and a project, sequenced by how the skills
depend on each other rather than by Adler's chapter order.

**Stage 3 and 4.** Lesson 1 written, then two review rounds. The first found 23 problems. The second
was asked to check the fix pass rather than the lesson, and found that three of its four substantive
findings had been introduced by that fix pass, which is exactly what a second pass is for.

**The finding worth keeping.** The lesson handed readers Carver's five reading gears as the thing to
remember, citing Brysbaert for them. Brysbaert's general discussion, which `SOURCES.md` had recorded
as unread, is headed "There is no evidence for reading gears except for the distinction between
reading and scanning". So the course was citing a paper for a model that paper rejects. Reading it
improved the lesson: what Brysbaert does find is that reading for recall is slower through
"an increased structuring and organization of text information" seen as "many regressions and
rereadings", which is the lesson's own claim arriving from the measurement side.

**A licensing block that outlives this lesson.** The lesson linked the Internet Archive copy of
Adler twice and called it free. That item is a community upload with no licence for a book still in
copyright, so both links are gone and readers are sent to Open Library or a library; the scan stays
in Sources as the text consulted. That also killed the outline's plan to survey Adler's own book as
lesson 2's worked example, so lesson 2 surveys Darwin's *On the Origin of Species* at Project
Gutenberg instead, checked against all six of Adler's skimming steps. Both rules are recorded in
`research/reviews/course-wide.md`, which every session drafting this course is told to read first.

**Two pipeline decisions John delegated the same day**, both in `docs/DECISIONS.md`:

- **§13, the voice pass runs inside Stage 4.** Fifteen lessons went through `/voice-pass` as a
  separate stage that day and it found no em dashes and six banned phrases, because the Stage 4 fix
  step had already rewritten the prose. The checks now sit in `review-lesson.md`'s fix step and the
  stage is gone; `/voice-pass` stays as a tool for a lesson sent back.
- **§2 gains an exception.** When episodes are blocked on something outside the repo, the next
  course may be drafted through Stage 4 but is not published until the courses ahead of it have
  their episodes. That is what let Reading Well start while audio was waiting on a key.

**And a rule that was wrong.** Both `CLAUDE.md` files said to run `npm run build` and commit its
output "when publishing". That is not when the build output changes: the Path page lists every
course whatever its status, so scaffolding Reading Well and then moving it from research to drafting
each changed the generated site. Two commits failed CI on a stale build before the rule was
corrected to say what the check actually enforces.

## 2026-09-18 — Every chart now readable on a phone

**All thirty undersized charts are fixed.** They were viewBox 584 (one at 640) with 15px labels,
which renders at 8.8px on the 340px-wide phone the validator models, against a 10px floor. They are
now 420 wide and render at 12.1px, and every one was opened in the browser at 375px as well as run
past the validator.

**The arithmetic, for the next time.** A label renders at `font-size * 340 / viewBox width`. For
15px labels to clear 10px the viewBox must be 510 or narrower; 420 is the house width.

**Two kinds of chart, two methods.** Bar and line charts take a mechanical rescale: multiply every
x-coordinate by 420/584 and leave y alone. The text then keeps its size on a smaller canvas, so some
labels no longer fit, and the validator names each one. **Box and argument diagrams cannot be
rescaled at all**, because shrinking a box while its text stays the same size bursts it. Those were
redrawn stacked top to bottom with downward arrows, which is the shape a phone wants: How to Learn
Anything lessons 2 and 6, and Logic and Argument lesson 7's three argument diagrams, including
Toulmin's six-slot layout, which was two-dimensional and is now a column.

**What the validator does not see, and the browser did.** Segment labels colliding under a bar
(Personal Finance 6). A caption printed straight through its own bar (the same chart). Three columns
of labels each running into the next column (Personal Finance 7). Y-axis labels clipped off the
*left* edge, which no check looks for and which a left-edge scan now catches (Personal Finance 3).
Branch labels sitting on top of their own connecting lines (Logic 8). Every one of those passed a
green validate.

**One method mistake worth recording.** Wrapping each long footnote line on its own puts the new
second line exactly where the next original line already sits. The taxes chart shipped that way for
a few minutes. The fix is to treat a chart's whole footnote block as one unit: join it, rewrap it,
re-emit it at even spacing. And the character-width estimate has to be generous, because the
validator's "fits in a narrow system font but not a wide one" warning is the one that catches you.

**A live defect found by opening the page.** Bible Basics lesson 9 listed the literal text
"object Object" as one of the five things the learner would learn. An objective contained a colon,
so YAML parsed it as a mapping. The build already checked quiz fields for exactly that trap and did
not check objectives; it does now, with a test. One instance repo-wide.

## 2026-09-18 (second session) — How to Learn Anything is finished, and the gate is calibrated by ear

**The institute has its first course finished by its own definition:** eight lessons at standard,
eight episodes live and stamped, and `how-to-learn-anything` deleted from `curriculum/audio-debt.yaml`.
All eight rendered on the settled pipeline, **$1.61 in total, $0.20 each, every one passing on its
first attempt.** The predicted figure was $1.52, so the estimator is honest.

**John listened to all eight and approved them.** That listening also settled how the gate should be
tuned, which matters more than the episodes themselves, because it is what the next fifty-three run
through. Across the eight, John's voice drifted 0.0, 1.8, 1.9, 4.1, 5.2, 5.3, 7.2 and 9.9% from the
first third of an episode to the last, and his overall pitch ranged 85 to 103 Hz. Every one sounds
like the same man to the only ear that counts.

So the two pitch checks were doing different jobs and only one of them was worth money:

- **Drift within an episode stays tight at 10%.** It is the only figure a listener can hear, since
  nobody compares minute six of one episode with minute two of another. Lesson 5 at 9.9% sounds
  right, so the threshold sits just above the audible edge. What John *did* hear on the retired
  engine was a 12% jump at a chunk seam, and a step is far more audible than the same number spread
  smoothly over seven minutes.
- **Difference between episodes goes from 12% to 20%, and stops being a similarity test.** It had
  never caught a real defect and had cost money being wrong: it rejected lesson 2 at 6.2%, which
  John then approved by ear, wasting $0.20 and a round trip. At 20% it is an identity test, which is
  where a genuinely different voice lives (Pro's Charon and Flash's are 20% apart), and normal
  variation will never reach it again.

**The gate now prints its own drift figure.** The first version of that check had its threshold set
from an ad-hoc script measuring the file duration while the gate measured the span to the last
audible frame. The two disagreed by about a point, which is enough to matter at a 10% threshold. A
threshold whose number nobody can see is a threshold nobody can calibrate.

**The checks were re-verified rather than trusted.** All eight live episodes pass the retuned gate;
the retired faded render of lesson 2 still fails on four counts (voices swapped at the open, 16 dB
of fade, 164 seconds of speech where 458 were expected, and 13% drift). That is the point of the
gate: it is worthless on a good render and it is the only thing standing between R2 and another
catalogue like the one that had to be deleted.

Also this session: `upload` re-runs the gate on the exact file it is about to publish, after `plan`
offered to upload a retired fal-era MP3 for a lesson whose new render had just failed; the thirteen
retired renders moved to `audio-out/retired/`; and `scripts/podcast-compare.mjs`, the 2026-09-06
engine bake-off, was deleted along with its samples, because it named two retired engines and read a
key nothing uses.

## 2026-09-18 — The podcast method is settled: one Pro call an episode, and the catalogue reset

**John approved a rendered episode by ear, and the institute has a podcast pipeline that works.**
How to Learn Anything lesson 1 is live, rendered in a single call to Gemini 2.5 Pro TTS on Google's
own API, billed $0.19. It holds both hosts flat from the first line to the last: no fade, no
whisper, no seam. `docs/PODCAST_PIPELINE.md` is the new operating manual and carries the method, the
measured cost, the order to render the remaining sixty episodes in, and the rules below.

**What the two days of measurement actually found.** The defect John reported, episodes that start
right and end with a host whispering, was not randomness and was not the model's presets. It was the
length of the call. Every episode the institute had shipped was one request of 6,000 to 8,300
characters, and the level decayed about 20 dB across it while the male band emptied. Three fixes
were tried in order and all three are worth recording, because each looked right at the time:

- **Temperature.** 0.25, then 0. No effect on the spread, and 0 is not deterministic on this model.
- **Chunking on Gemini 3.1 Flash.** Fixed the fade completely, and John confirmed it by ear. But
  every chunk is a fresh casting of Charon, a spread of about 12% in pitch call to call, which he
  heard at once as the voice changing around minute four.
- **Rerolling chunks against a reference fingerprint.** Cost about a dollar an episode and still
  failed: across 27 attempts John's median ran 92 to 119 Hz, wider than any workable tolerance.

What worked was a different model. **Gemini 2.5 Pro holds a whole episode in one call**, which Flash
cannot do at any setting. ElevenLabs was listened to again and lost again; John finds Gemini plainly
better on energy and podcast feel, and that is the test that decides.

**Haley speaks first in every script now.** Pro gives the first turn of a transcript to the second
speaker's voice whatever the label says, measured over five renders and never once correct. Written
John-first, Haley's voice reads his intro and then her own, and the episode comes out in one voice.
John caught this by ear on the first Pro render. The pitch tracker had missed it because a female
voice at 200 Hz reads as a male voice at 100 Hz on an octave error; the tracker now checks for that.
All fifteen existing scripts were swapped, and the parser refuses an S1 opening before any money is
spent.

**About $25 went out in one afternoon, and almost none of it became audio.** The cause was a retry
loop wrapped around Node's `fetch`, which abandons a response whose headers take more than five
minutes. A Pro episode takes five to six, so every render "timed out", was re-sent, and Google kept
rendering and billing the abandoned one. With `temperature` and `seed` in the request, which make
this model return silence, each of those was up to $1.70 of nothing. Five rules are now enforced in
`scripts/podcast.mjs`: never send `temperature` or `seed`, always cap `maxOutputTokens` from the
word count, use curl not fetch, **never re-send automatically**, and one request at a time. A render
that already passed is copied rather than paid for again, and every attempt is logged with what it
was billed.

**The catalogue was reset, John's call.** All thirteen remaining pre-2026-09-18 episodes were
deleted from R2 and unstamped from their lessons; they come back one at a time as budget allows. The
local MP3s stay in git-ignored `audio-out/` as a backup. This is the first time the audio debt has
grown, so `curriculum/audio-debt.yaml` gained a **reset** mechanism: a dated, reasoned block naming
the exact raises, which `npm run validate` accepts only in the commit that introduces it. The commit
after, the ratchet is back on. Sixty episodes are now owed against one live, and finishing them all
costs about $13.

**`scripts/podcast/hosts.json`** holds the reference fingerprint of the two voices, taken from the
episode John approved, and every future render is matched against it within 6%. It is what will keep
episode 40 sounding like episode 1.

## 2026-09-17 — Algebra Essentials: the voice pass on all six lessons

The same pass as Writing Clearly's, the same day, and lighter still: no em dashes, two banned
phrases in six lessons, and the prose already in voice. What it did find was not voice:

- **Lesson 2 cited a footnote that did not exist.** Two `[1]` markers and no Sources section. The
  source is in `research/SOURCES.md` (McNeil and colleagues 2006, reporting Carpenter's box
  question) and is restored. Stage 4 missed it, and `npm run validate` does not check that a
  `[n]` marker has a matching footnote. That is the next check to write.
- **Lesson 1 referred to "Maya's plan"** with no Maya anywhere in the lesson. Lesson 4's second-taxi
  checkpoint pointed "below" at a worked example above it, and its answers block said six for seven
  questions. All fixed.
- **Body links added to lessons 1, 2 and 3**, so the validator's last two content warnings are gone.
- Eight think-blocks added from existing content, and bold trimmed to key terms throughout.
- **One thing went wrong.** Lesson 4's new predict was committed with its closing `:::` run into the
  next sentence, so the block swallowed the rest of the lesson. The validator caught it, but the
  session's check grepped the output for "ok" and "error" and passed on a match. Fixed in the next
  commit; validation is now checked by exit code. Rule 9 applies: the validator was right, the
  wrapper around it was wrong.

**Every live course is now through Stage 4 and the voice pass.** What the seven still owe is 47
episodes, all blocked on the Gemini key. The next lesson work is Reading Well, and rule 6 holds it
until Writing Clearly and Algebra have their episodes.

## 2026-09-17 — Writing Clearly: the voice pass on all nine lessons

All nine lessons went through `/voice-pass` in one session, one commit each. It was as light as
the queue predicted, and lighter. Not one em dash, and across nine lessons the banned-word search
found four hits outside quotations (one "worth noting", one "not just", two "not only"), which is
what Stage 4's contraction and voice rewrites had already bought. No fact, figure, citation or quiz
item changed. What the pass did do:

- **Unbolded every emphasis that was not a key term.** Quotations carried added bold in seven
  lessons, and single "moral" sentences were bolded in most; both are what the style guide calls
  formatting as a substitute for writing. Key terms (topic position, nominalisation, description
  and prohibition) and structural labels (the six kinds, the misconception headings) keep theirs.
- **Added sixteen think-while-reading blocks**, always from content already in the lesson: nine
  checkpoints, five predicts, and in six lessons a gap opened in a worked example so the reader does
  the next step before it is shown (the landlord's email arithmetic, the rewritten launch email's
  first sentence, the last two rows of the diagnosis table, the supplier sentence's gap count, the
  fire-door sentence turned round, the cut-by-cut table's first sentence, the shaped consultation
  note, the council tax diagnosis).
- **Lesson 9's `minutes:` was 50 against a measured 85** and is now 85. The other eight were within
  precision.

**What this says about the pipeline.** The third pass over each lesson earned about a tenth of what
the second did, because Stage 4's fix pass now rewrites in the Foval voice as it goes. For Algebra
Essentials and every course after it, the voice checks (em dashes, the banned list, bold, the block
count) should run inside the Stage 4 fix pass and the separate stage should go. That is a change to
`docs/CONTENT_PIPELINE.md` and is proposed here rather than made, since John asked today whether
the same lessons were being worked over repeatedly. The answer was no (three touches per lesson,
each a different stage, all in git), but the third touch is no longer worth a stage of its own.

## 2026-09-17 — The podcast fade found and fixed: episodes render in gated chunks

**Every episode the institute had shipped fades.** John said the episodes start right and then a
host drops to a whisper, and that he would rather start the catalogue over than keep shipping it.
Profiling the fourteen local episodes per 30 seconds showed the same curve in every one: the level
decays from about -20 dBFS at the top to -40 or worse by the end (Personal Finance 2 fell 24 dB),
John's pitch band empties with it, and several finish in two minutes of near silence. The cause is
not randomness, which is what the 2026-09-09 diagnosis assumed when it set the temperature and
accepted the drift. It is that each episode was one call of 6,000 to 8,300 characters, and Google's
own TTS docs say consistency drifts on outputs longer than a few minutes; production reports put the
two-speaker ceiling near 3,000 characters.

- `scripts/podcast.mjs` now cuts the script at turn boundaries into chunks of about 1,100
  characters, renders each as its own fal call with the same hosts and settings, and gates every
  chunk before stitching: mean level no quieter than -30 dBFS and within 6 dB of the median chunk,
  both hosts' pitch bands populated, and speech length within 0.6 to 1.7 of what the word count
  predicts. A failing chunk is re-rendered alone, up to three times, for about six cents. Chunks are
  gain-matched to -20 dBFS, tail silence trimmed, and joined with a 0.35 s gap.
- **Nothing is paid for twice.** Every attempt is kept under `audio-out/work/<school>/<course>/<id>/`
  with a manifest keyed on a hash of the chunk text; a rerun or a crash reuses what passed.
  `--fresh` discards it. `profile` prints the per-30-second report on any finished MP3.
- **Personal Finance 2 re-rendered chunked as the test, $0.37, all seven chunks passing first
  time.** Level held at -20 dBFS within 1.5 dB from the first line to the last; John's median pitch
  sat between 103 and 113 Hz in every chunk and Haley's between 190 and 216 Hz. Cost is unchanged
  because billing is per character. The file waits on John's ear for the seams before it is uploaded.
- `docs/DECISIONS.md` §7 rewritten: the drift is no longer accepted, the fourteen pre-2026-09-17
  episodes are to be re-rendered (about $5), and the engine and hosts stay as they were.

## 2026-09-11 — Writing Clearly through Stage 4, all nine lessons

**The last of the three pre-pipeline placeholder courses is now at standard.** All nine lessons
went through Stage 4 on 10 and 11 September, one fresh-context reviewer each, and **all nine were
largely rewritten.** The course averaged 3,676 words a lesson before and averages 4,646 now, every
`minutes:` is measured rather than guessed, and every chart is redrawn at a viewBox a phone can
read. Findings and resolutions are in `research/reviews/`, one file per lesson plus
`course-wide.md`.

What nine rounds found, because the pattern matters more than any single fix:

**A figure that no source contained, carried by four lessons.** Lesson 1 told readers "a reader
will finish about 130 words" and drew a chart saying so. The number came from crossing Nielsen's
25-second cost of *arriving* at a page with the time it takes to *read* one, which are not
comparable quantities. Lessons 2, 7 and 8 had all picked it up, one of them citing it to lesson 1
and linking Nielsen for it. Twelve occurrences. Replaced with Nielsen's real pair: about a fifth of
an average page, and half the information read only on pages of about 111 words or fewer.

**Four lessons trimmed a quotation in the direction that helped the argument**, and one went
further. Nielsen's "if they devote all of their time to reading" was cut from his 28 percent. Gopen
and Swan's "In general" was cut from principle 6, their "and therefore as something of lesser
importance" from principle 1, and their "None of these reader-expectation principles should be
considered 'rules.'" from four lessons in a row, in a course whose research file says in bold that
the caveat must survive into the lessons. Lesson 5 cut Strunk's own "This rule does not, of course,
mean that the writer should entirely discard the passive voice" and then called his rule a
prohibition he disclaims one paragraph earlier. Lesson 6 stopped rule 13 one sentence early and
built its whole thesis on the gap, asserting that "Omit needless words" "says nothing about how to
get there" when the rule itself supplies about fifteen substitutions. And lesson 9 block-quoted a
sentence Sommers never wrote: the wrapper was the course's own research file paraphrasing her.

**Three lessons got their own counts wrong**, including the two lessons whose method is counting.
Lesson 4 teaches "replace the judgement with a count" and miscounted four of its own figures.
Lesson 6 got six of eight wrong. Lesson 7 broke 412 responses into 260, 140 and 38.

**Two lessons failed the neutrality pass without containing a false sentence.** Lesson 8's 22
Pullum quotations and 5 Strunk quotations were all verbatim; it failed on selection, with Pullum
explained and Strunk adjudicated, and Strunk's best card asserted twice and never shown. Lesson 3
leaned on GOV.UK for a detector while passing over that the same page disagrees with it about the
active voice.

**And a rendering defect that had shipped.** A hand-lettered list inside a `:::` block collapses
into one run-on paragraph, because block bodies parse with `breaks: false` and Markdown only
rescues the markers it knows. Writing Clearly lesson 3's ten-item diagnosis exercise, the whole of
that lesson's practice, was a wall of text on a phone. Three more blocks in two courses did the
same. Now a build check with three tests behind it.

**What the pipeline should take from it.** Two things are now in `/review-lesson`'s working
knowledge and in the course's `course-wide.md`. First, **measure a quiz both ways after rewriting
it, and again after fixing it**: in four of nine rounds the rewrite introduced a gameable shape the
draft did not have, and once the repair introduced a different one. Second, **counting the
citations each side gets, before reading a word for tone, is what catches a neutrality failure in
a lesson where every sentence is true.** A reviewer who only verifies quotations passes lesson 8.

## 2026-09-10 — A review of the whole project, and the fixes it called for

A full review of the repo, the site and the docs, with three fresh-context reviewers, followed by
the fixes in one branch. What changed, by the reader it serves:

**For a learner.** Every course and lesson now has a plain HTML page under `/courses/<id>/`, with
its own title, description and canonical URL, plus `sitemap.xml` and `robots.txt`. The app was one
hash-routed page, so a search engine or a shared link saw one title for all sixty-one lessons;
nothing here could be found by searching for it. The app now loads a 102 KB index instead of a
3.4 MB file before the home page could paint; each course's content is fetched when opened. The
Foval Core page shows all 25 terms and 174 courses open, in order, nothing folded away (John's
call). Every citation marker links to its entry in the Sources list, 1,321 of them, and six Python
lessons' ninety-eight `[^n]` footnotes, which the renderer never supported and which reached the
reader as literal text, are `[n]` links. The course tile's hours now include the assessments and
no longer disagree with the syllabus below it. Quiz and review answers are marked with a word as
well as a colour. Small text and gold-as-words clear 4.5:1 in the light theme. Page changes move
focus to the content; the lesson list follows the article in reading order; tables keep their
semantics inside a scrolling wrapper; nav links on a phone are 35px tall; the service worker no
longer caches error responses or serves HTML for a missing image; storage failures are reported
once instead of swallowed; a retake never lowers a recorded score; practice mode reschedules only
what was missed, as its copy says; iOS gets a PNG touch icon; the theme colour is the navy, not a
green from the rejected palette.

**For the build.** The SVG overflow check located a label's chart by the first occurrence of its
text anywhere in the file, which sent 263 of 873 labels to the wrong chart or none; it now uses the
tag's position. The lint runs over assessments. New checks, each with a test: spaced en dashes,
CR line endings, Markdown footnotes, nested `:::` blocks, a required `sensitive_domain`,
`standpoint` only under `christian-studies`, a final test on any published course of six or more
lessons, an `audio:` stamp needing a fact-checked script beside it, the audio-debt ledger
ratcheting against the committed file, a missing TAXONOMY row as an error, an empty `course.yaml`
reported instead of crashing. `estimated_hours` is gone; the build sums measured minutes.
`npm test` runs 28 cases and CI runs it first. The quiz checkers run from any directory and report
a frontmatter that does not parse.

**For the next session.** Rule numbers cited outside the root `CLAUDE.md` were from an older
numbering and now match. `/new-course` no longer offers eight terms, an elective tier or an
ask-the-owner step. `/status` no longer offers a sign-off. The pipeline names `/voice-pass`,
`/fact-check` and `/neutrality-audit`. The feedback loop says who exports the feedback and how.
`docs/QUEUE.md` is back to its marching-order shape, with the closed-defect history moved here:

- *Code blocks corrupted on the live site by the Markdown pass running twice.* Closed 2026-09-10;
  `renderBlocks` holds rendered blocks behind placeholders and `checkRenderedHtml` fails the build
  on a `<p>` inside a `<pre>`.
- *Quiz explanations naming the wrong option letter.* Closed 2026-09-10; the checker was rewritten
  and reports clean.
- *Fourteen live lessons with a quiz passable without reading them.* Closed 2026-09-10; all
  rebalanced, found by `npm run quiz`.
- *Eight answer leaks in drafts.* One real, in Bible Basics 9, now a `:::predict`; seven false.
- *Greys outside the palette in SVG fills.* Not a defect: `--text-2` and `--surface-2` are tokens.
- *A figure eating 800 words of Bible Basics 9.* Closed 2026-09-10 with three checks behind it.

## 2026-09-10 — Python Basics has its assessments, and is no longer a stub course

**The rebuild finished its content.** All six lessons of Introduction to Programming with Python
are drafted from the Stage 1 research and through Stage 4, replacing the 463-word stubs at the
same URLs. The six now measure 420 minutes against the stubs' 60. Each Stage 4 fact-check was
executed rather than fetched: every code block written to a file, run on CPython 3.14.7 and
byte-compared, and it found something real in every lesson. It also found a build defect that had
shipped, the Markdown pass re-parsing the HTML the `:::` blocks emit, which is fixed with a check
behind it.

**The two assessments landed.** `assessments/final-test.md` is fifteen items to the outline's
blueprint, two to three per lesson, ten of them application, interleaved rather than in lesson
order, with every code claim and every distractor's claim executed before the item was written.
Both quiz heuristics report clean. `assessments/project-readings-summary.md` is Soloway's
rainfall problem reworded: sentinel, rejected negatives, count, total, average to one decimal
place, highest and lowest, and the empty case, built in five steps, with a five-criterion rubric
that names composition as the check most first attempts miss. A 35-line reference solution was
run on four transcripts and the two transcripts printed in the brief are its output. Lesson 4's
reference to "the course project" is no longer dangling. `estimated_hours` is 9.7, from 580
measured minutes. Details in the course's `research/reviews/course-wide.md`, CW-06.

**The voice pass ran on all six lessons the same day.** One fresh-context pass per lesson, six in
parallel, against CW-05's measured contraction counts, with code, output, SVGs, quizzes,
frontmatter and footnote definitions byte-compared against the committed version afterwards and
found identical. Lessons 5 and 6, which had drifted a full step more formal than the four before
them, now sit in the same register. The pass also put the footnote markers of lessons 3 to 6 into
their bodies (CW-04) and caught one factual slip in a lesson 2 checkpoint. Numbers in CW-05.

**Still owed on the course:** six podcast episodes, which wait on fal like the other 47.

## 2026-09-09 (third session) — the docs were costing every session more than they were worth

A documentation and tooling refactor. No lesson content, `course.yaml`, `TAXONOMY.md` or
`core-path.yaml` was touched.

**The problem.** Every session read `CLAUDE.md` then `docs/BACKLOG.md` before it could start, and
BACKLOG.md had reached 967 lines. Most of it was not backlog. It was organised by when something
was learned rather than by when it is needed, so every session paid for every past session's
lessons, and the file only grew. The mandatory session-start read is now 129 lines: 48 of
`CLAUDE.md` and 81 of `docs/QUEUE.md`.

**BACKLOG.md is gone, split four ways by when each part is needed.** `docs/QUEUE.md` is the
marching order and nothing else, opening with a five-line mechanical handoff block (current course,
current lesson, current stage, blocked on what, next action) in place of the narrative "where things
stand". `docs/DECISIONS.md` holds what is settled and must not be re-opened, and is referenced from
`CLAUDE.md` rather than read by default. The specs for unstarted work folded into
`docs/PLATFORM_ROADMAP.md`, which existed for exactly that. The session diary came here.

**The craft knowledge moved into the commands that need it.** BACKLOG.md section 8 was about 140
lines on the defects the drafter repeats, what a Stage 4 cycle costs and how to run one, all of it
loading at session start where it was noise. The defect list is now in `/draft-lesson`, which was 22
lines and is the place where it is the point; the cycle mechanics and what the linter can and cannot
catch are in `/review-lesson`. Both gained the rules the last two sessions established: count the
whole lesson rather than the disagreement, execute a stem against its own model answer, trace every
"if you got X" backwards, and open exercise timings with a cue word followed immediately by a digit.

**Nested `CLAUDE.md` files.** There were none, so every rule loaded always. `courses/CLAUDE.md`
carries the lesson format, the block grammar, the em dash rule, one lesson per session and the
SOURCES requirement; `site/CLAUDE.md` the no-framework rule, the generated `courses.js` and checking
both themes at both widths; `scripts/CLAUDE.md` what validate and build enforce and the contract
between TAXONOMY.md and core-path.yaml. The root file points at each and no longer restates them.

**Two prose rules became checks.** Rule 5b was a shouting paragraph because it had been ignored
once, and shouting does not prevent a repeat. `npm run validate` now fails when a published course
has a lesson with no `audio:` stamp; the 47 episodes already owed are written down in
`curriculum/audio-debt.yaml` as a per-course ceiling that can only shrink. Rule 5 got the same
treatment: `course.yaml`'s status and the Status cell in TAXONOMY.md must agree. Rule 5b is now one
line naming the check.

**Every `research/REVIEWS.md` was split into `research/reviews/<lesson-id>.md`.** Bible Basics' was
5,314 lines of append-only history in a directory sessions read from, so a session working on one
lesson paid for the whole course. A line-by-line diff of the six old files against the split output
shows zero missing lines.

**One thing found while doing it.** The old file contradicted itself about Personal Finance in two
places, the queue saying lessons 9 and 10 and both assessments were still owed while the handoff
three sections later recorded all four as done that same day. That is what a file organised by when
something was learned does: the same fact gets stated twice at different times and nothing makes the
older statement wrong. The status table in `docs/QUEUE.md` is now the single place a course's state
is recorded.


## 2026-09-09 (second session) — Personal Finance finished, Algebra rebuilt, the voice drift diagnosed

Recorded here from the old handoff, which had been carrying it as a session diary.

**The one thing that went wrong.** The session finished Personal Finance's content, declared the
course done, and started the next course **with zero of its ten podcast episodes made.** John caught
it. His definition, stated many times: a course is finished when every lesson is at standard AND
every lesson has a podcast episode. It became `CLAUDE.md` rule 5b, the first section of
`docs/CONTENT_PIPELINE.md`, and, later that day, a check in `npm run validate`, because two prose
statements of it had not been enough.

**Personal Finance is content-complete**, ten lessons and two assessments. Lesson 7 (accounts and
the tax-timing choice, Tier A), lesson 8 (insurance, Tier B), lesson 9 (renting against buying, Tier
B) and lesson 10 (scams, Tier A), each with its own Stage 1 research written first. Lesson 8 earned
its tier twice over: the fact-check found **a fabricated quotation attributed to the NAIC**, a
sentence about cash value that appears neither in the buyer's guide the lesson's own footnote links
to nor anywhere on the web, and an invented car-insurance claim frequency off by about four times,
doing the arithmetic in a worked example. Its neutrality audit returned **a plain fail** on three
blocking findings, the sharpest being that the lesson's organising claim, that insurance is negative
expected value by construction, is false for employer coverage, where the employer pays roughly six
sevenths of the premium untaxed, and employer coverage is most of what the lesson teaches.

**Algebra Essentials was rebuilt to six lessons**, all through Stage 4, with an eighteen-item final
test, the rate-in-your-own-life project, `estimated_hours` measured at 4.3 against the stub era's
2.3, and outcomes rewritten to what the six lessons deliver. Lesson 5's review caught a defect that
would have taught the reversal error as the cure for it: the final practice item asked the reader to
show that a correct equation was wrong, and its model answer reached the "correct version" by
swapping the letters. The stem was a typo for a different equation and the answer text was
internally consistent, which is why the drafter's own arithmetic check missed it.

**Logic and Argument's final test had seventeen items whose explanations named the wrong option
letter.** Found by John. The scan is now a script, `node scripts/check-quiz-letters.cjs`.

**The podcast voice drift was diagnosed and settled.** Gemini's presets are a strong steer rather
than a hard constraint, and `temperature` was never being set, whose default on fal is 1. It is now
0.25, the host descriptions are out of `style_instructions`, and a pitch-band voice check runs after
every render. John was asked with the alternatives costed and chose to stay on Gemini and accept the
drift; the hosts were briefly changed to Iapetus and Erinome and he reversed it within the hour, so
they remain Charon and Aoede. Settled: `docs/DECISIONS.md` §7.

**Three review rules came out of these cycles**, and all three are now in `/draft-lesson` and
`/review-lesson`: count the whole lesson rather than only the two-position section, because lesson 9
passed the citation count inside its disagreement and still failed on one side's case being the
architecture and the other's an annexe; trace every "if you got X, you probably did Y" backwards
before it ships; and open an exercise timing with a cue word **immediately** followed by a digit, or
`npm run minutes` cannot see it, which shipped two Algebra lessons 25 minutes light. And one more: a
wide viewBox shrinks every label on a phone, and the linter cannot see it because it does not model
the scale factor.

**The fal balance ran out mid-session**, after Personal Finance episodes 1 and 2 got out. Lesson 3's
script is written and fact-checked and waiting. Its lesson had been briefly stamped with an audio URL
before the render failed and **that stamp was reverted**, because a stamped URL answering 404 is
worse than no audio.

## 2026-09-09 (later) — handoff rewritten, and a defect class found in published quizzes

`docs/BACKLOG.md` section 4 is now a real handoff rather than a session diary: what happened over two
days, the three rules added to the pipeline commands, the finding that generalises, the two
corrections to secondary literature, what to do next, and the small jobs. The status table now carries
a "what it still owes" column against John's definition of done, which is lessons at standard plus a
podcast episode for every lesson. Only How to Learn Anything meets it.

**A defect class was found while writing that handoff.** Scanning every quiz on the site for a
mismatch between the `answer` index and the option letter the `explain` field names as correct turns
up several, and Logic and Argument's final test is the worst: item 1's answer is A and its explanation
says "So B", and item 2's answer is C while its explanation says "so B" and then discusses options A
and B as though the order were different. That last detail is the tell, since it means options were
reordered after the explanation was written, which is exactly what happens during a fix pass that
rebalances answer indices. Bible Basics lesson 3 and Logic lesson 4 also flag.

A learner who answers one of these correctly is told they were wrong, so it is worse than cosmetic. It
is recorded in backlog section 14 with the detection method and the caution that the scan has false
positives. Not fixed in this session, because the ask was a handoff and fixing five items across two
published courses is its own job.

## 2026-09-09 — Writing Clearly is rebuilt: nine lessons, a test and a project

Queue item 2 is content-complete. The course that was four pre-pipeline placeholders averaging 452
words is now nine lessons written from research, 405 minutes of teaching, with a twenty-item final
test and a four-hour project. Every placeholder is deleted.

The sequence puts the evidence first and the advice second: what actually happens when someone reads
you, put the point where the reader is looking, characters and actions, keep the subject next to the
verb, topic position and stress position, concision that is actually teachable, shape at the document
level, rules and where they come from, and revising and finding out whether it worked.

**Three courses' worth of primary-source work sits underneath it**, and two findings are worth
recording because they correct things in circulation.

*Strunk 1918 corrects both sides.* Two of Pullum's sharpest charges, the rule that *none* takes a
singular verb and the ban on *which* in restrictive clauses, are absent from Strunk's original and so
belong to White's revision. And Pullum writes that "Strunk's original version never even mentioned
split infinitives", where the 1918 glossary carries an entry. Lesson 8 reports both.

*Sommers' sample is not what the summaries say.* Her 1980 article is a scan with no extractable text,
but her 1982 report to the National Institute of Education is 198 pages of the same work and can be
decoded. Every secondary summary consulted says the study used twenty students and twenty experienced
writers; the report's own abstract says eight and seven. Lesson 9 reports the figures the course has
read and says why they differ from the ones in circulation.

**The lesson 8 fairness check is the thing to carry forward.** `research/OUTLINE.md` had flagged that
lesson as the one that could become a hit piece, and set the test: would a reader who loves *The
Elements of Style* finish it feeling fairly treated? A fresh-context reviewer found the draft passed
that test comfortably and failed the opposite one. It presented as its own discovery a qualification
Pullum quotes and credits in his essay; it conceded the half of his case he says is "not what I am
most concerned about"; and it left out the evidence he actually builds on, which is the book breaking
its own rules on the same page. Nothing in the draft was inaccurate. **Fairness failed at the level of
selection.** Twelve findings and their resolutions are in the course's `research/REVIEWS.md`, along
with that general lesson, which applies to every contested lesson still to be written.

Also fixed along the way: quiz answer indices and option lengths were audited on every new lesson and
on the final test, after the reviewer found lesson 8 using only three of the four indices with two
keys that were the longest option, one by sixteen characters.

Still owed on this course: Stage 4 cycles on all nine lessons, the voice pass, and nine podcast
episodes.

## 2026-09-08 (night, later) — Stage 2 outline for Writing Clearly, and a mistake worth recording

**Nine lessons**, in `research/OUTLINE.md`, with a twenty-item test blueprint and a project. The
sequence puts the evidence first and the advice second: what actually happens when someone reads you,
then put the point where the reader is looking, characters and actions, keep the subject next to the
verb, topic and stress position, concision that is actually teachable, shape at the document level,
rules and where they come from, and revising and testing it on a real reader. The four placeholder
lessons survive only as parts of four of those.

Two lessons are flagged as hard. Lesson 5 carries the deepest idea in the course and will come out as
hand-waving unless its central example, a paragraph that repairs itself with nothing added or deleted,
is genuinely convincing; build the example first. Lesson 8 tells the Strunk and Pullum story and could
easily become a hit piece; the test is whether a reader who loves *The Elements of Style* finishes it
feeling fairly treated.

**The mistake.** Stage 2's command says to update `course.yaml` outcomes to match the outline, and
doing that put eight promises describing nine unwritten lessons onto a live course page serving four
placeholders. That is the same defect as an overstated `minutes:`, committed within hours of fixing
every overstated `minutes:` on the site. It was caught before pushing and reverted: `course.yaml` again
describes what the course actually delivers, and the outline's copy waits in OUTLINE.md to land lesson
by lesson. `.claude/commands/outline-course.md` now carries the exception, alongside the one added to
`research-course.md` earlier for `status: drafting`. **The general rule for the two rebuilds still to
come: on a live course, every field a learner can see describes the lessons that exist today.**

## 2026-09-08 (night) — Stage 1 research for Writing Clearly

Queue item 2 begins. The course about writing well has been live since launch as four placeholder
lessons averaging 452 words with no citations, no links and no research behind them, so it is being
replaced rather than improved. `courses/communication-and-people/clear-writing/research/SOURCES.md`
is the first research it has ever had.

**The spine is the reader-expectation tradition rather than the rule tradition.** Gopen and Swan's
"The Science of Scientific Writing" (1990) was read in full and its seven structural principles are
quoted verbatim, along with the caveat that matters as much as they do: "None of these
reader-expectation principles should be considered 'rules.'" Williams' *Style* supplies the same core
from another direction, characters as subjects and actions as verbs. The concrete, testable rules come
from GOV.UK, which writes for a country where "1 in 6 adults in England have very poor literacy
skills" and which answers the clever writer's objection directly: "people with higher levels of
literacy prefer plain English because it allows them to understand the information as quickly as
possible." The US federal plain-language guide adds the thing no popular writing course teaches, how
to test a draft on real readers, with paraphrase testing needing six to nine people.

**The file records what was not read, and why that governs the drafting.** Strunk and White has not
been opened, and the only source in the file that quotes it is Pullum, who is attacking it: that is
defect 10 in the backlog's own list, sitting on the course's central contested question. Sommers
(1980) has not been read because the free copy is a scanned image with no extractable text, and it is
the load-bearing source for the editing lesson. No primary peer-reviewed critique of readability
formulas was reachable. All three are marked as gaps to close before the lessons that depend on them.
Pullum's own qualifier is recorded too, because it is the kind that gets trimmed: his objection is
"not the style advice in *Elements*, which might best be described the way The Hitchhiker's Guide to
the Galaxy describes Earth: mostly harmless." His charge is against the grammar.

**Two process notes.** The course stays `status: published` while it is rebuilt, because the build
ships only published courses and setting it to `drafting` would delete a live course from the site;
`.claude/commands/research-course.md` now carries that exception. And four `course.yaml` files were
showing learners a level vocabulary the map does not use, "Beginner" and "All levels" against
Foundation/Core/Advanced; all seven courses now agree with their row in TAXONOMY.md.

## 2026-09-08 (evening) — the honesty pass: reading times, images, and every chart defect

Queue item 1. Nothing here needed research and all of it was a small lie to a learner.

**`minutes:` is now measured, and the measurement is a script.** `npm run minutes`
(`scripts/reading-time.mjs`) reports claimed against modelled time for every lesson; `--write` fixes
the ones that are materially out. **31 of 51 lessons were rewritten.** How to Learn Anything was
understated by 20 to 30 minutes a lesson, Logic lesson 8 by 45, Bible Basics lesson 11 by 80 (it
claimed 75 minutes for 14,908 words), and the three pre-pipeline stub courses were overstated by up
to five times, one claiming 30 minutes for 274 words.

The model is documented in the script's header. Two things about it are worth keeping. Its reading
rate was not picked, it was **solved for from the values a human had already measured by hand**
during Stage 4: 988 reading minutes over 111,027 words in Bible Basics gives 110 wpm for a course
read with a Bible open, and 540 over 74,961 in Logic gives 140 for everything else. And an exercise
is costed **per numbered step plus any duration it states about itself**, not at a flat rate: a first
version priced every exercise at three minutes and wanted to cut forty minutes off lessons that were
already right, which is how the flat rate was caught. A second version read "twenty minutes" out of
How to Learn Anything's *subject matter* and added ninety minutes to a lesson about study
scheduling, so the duration parser now requires a cue word at the start of a sentence and caps its
contribution. Where the model and a hand-set number disagree by less than ten minutes, or by less
than fifteen percent, the hand-set number stands.

**Images: 294 MB down to 2.8 MB.** Ten Bible Basics `:::figure` blocks hotlinked full-size Wikimedia
originals, including a **256 MB** Google Art Project scan of Rembrandt's *Return of the Prodigal Son*
and the 6.7 MB Treaty of Kadesh, on a site whose rule 9 says it must run fast on cheap phones. They
now use the `/thumb/.../960px-` form. Three were left alone: their originals are already smaller than
the thumbnail would be, which is why they were measured rather than converted blindly.

**Every SVG defect on the site is cleared.** Bible Basics lesson 1's four sub-legible labels are at
font-size 15. All ten `--line-strong`/`--navy` token collisions are gone, across lessons 2, 6, 7 and
8, not just the two the backlog named. The pair is byte-identical in both themes, so an axis, a
spine or a legend swatch was rendering in the same colour as a category. In every case the author
had already written a grey literal fallback beside the token, so the intent was on record and the
fix was `--text-2`. Two charts needed more: lesson 7's idealist bar and lesson 2's eleven-chapter
Acts 1 and 2 sliver would then have collided with a category already on `--text-2`, so both are now
outlines rather than solid blocks. That reads better in both cases, and gives a general rule: **when
a chart needs a fifth treatment and the palette has four strong colours, the fifth is an outline,
not a second grey.** Two clipped labels were also brought inside their viewBoxes. Every changed
chart was checked by eye in both themes.

The site's remaining sixteen validator warnings are all in the three stub courses and go away when
those are rebuilt. Bible Basics, Logic and Argument, How to Learn Anything and Personal Finance are
warning-free.

## 2026-09-08 (later still) — the whole map goes on the Core, and a real map page

**John's model, and it is now the frame every doc uses.** There are three ways into the institute:
the **Foval Core** is the way through all of the knowledge, in order; the **courses** are there for
anyone to take whatever they want; and a **questionnaire** will build a path shaped to the person.

**Every course is on the Core. The elective tier is gone.** John's call, made after asking why Data
Analysis and Project Management were nowhere on the path. They were marked `elective`, which the map
defined as deliberately off the spine and forbidden from `core-path.yaml`, and 122 of the 174
courses were in that state, which meant 122 courses with no ordering at all. The tradeoff was put to
him plainly, that the Core stops being a two-year general-education spine and becomes the whole
curriculum, and he chose to place everything.

- `curriculum/core-path.yaml` rewritten: **174 courses across 25 terms of seven**, sequenced so
  nothing arrives before what it needs. Tools, then the habits of running yourself, then the body and
  the household, people, quantitative foundations, computing, and from there the world in
  chronological order with the sciences, business, mathematics and computer science slotted after the
  courses they continue. Every term mixes at least two schools.
- `curriculum/TAXONOMY.md`: every Path cell is now a term. The intro, the design principles, the
  status key and "Placing a course on the Core" are rewritten; the term-choosing rule now leads with
  prerequisites and "how soon is it useful" rather than "does the Core need it".
- `scripts/core-path.mjs` no longer accepts `elective` and says so in the failure message. It still
  fails on a blank cell, on the two files disagreeing, and on a course that is on one and not the
  other, so all 174 stay placed.
- `CLAUDE.md` rule 4b and `docs/CONTENT_PIPELINE.md` Stage 0 updated to match.

**`#/map` is a real page.** The homepage's "the full map" link and the Courses page's "curriculum"
link both went to `curriculum/TAXONOMY.md` on GitHub, which asked a learner to read a Markdown table
in someone else's product to find out what was coming. `scripts/build.mjs` now parses TAXONOMY.md
into `window.FOVAL_MAP` and the site renders all 174 courses grouped by school, each with its term,
level, standpoint and one-line note, live ones linked and the rest marked as being written, with a
school filter. No GitHub links remain on the homepage. This also closes two of the six repo links
that were blocking the repo going private (backlog §13); `#/standards` is the last one.

**The Path page holds 25 terms without becoming a wall.** A term with nothing written yet folds into
a `<details>`, so the full route stays visible and in order while the page opens on the five terms a
learner can start today. Checked at phone and desktop width in both themes.

**`docs/BACKLOG.md` cut from 1,063 lines to 680.** Its own rule says shipped work moves to this file
and gets deleted there, and that had been ignored for weeks. The custom domain, the About page, the
homepage redesign, the core-path enforcement work and the renaissance-man gap review were all
already recorded here and are gone from the backlog. The lesson-splits rule and the scripture
licensing policy stayed, trimmed to the operative rule with the reasoning left here. What remains is
live work only.

## 2026-09-08 (later) — Stage 4 cut from five reviewers to one, and the marching order reset

**Why.** John asked whether any review steps were overkill for moving forward. They were. This file
had recorded since Bible Basics lesson 6 that one subagent doing all five review passes in its own
fresh context ran about 100k tokens and found everything the five-agent version found on the same
lesson, and the command still launched five every time, at 600k to 900k a lesson. That measurement
sat unacted-on through two courses' worth of reviews.

**What changed.**
- `.claude/commands/review-lesson.md` rewritten around two tiers. Tier A, one reviewer in a fresh
  context running every applicable pass, is now the default. Tier B, five reviewers in parallel, is
  reserved for sensitive domains under standards 3.4, standpoint courses, and lessons a Tier A pass
  sent back for heavy rewriting.
- The neutrality pass is skipped, with a line in REVIEWS.md recording the call, on lessons with no
  contested or value claims.
- On procedural courses the fact-check is executed rather than fetched: run the code, work the
  arithmetic.
- The second full review pass is no longer the default; it runs on a trigger.
- A pre-pipeline stub is replaced, not reviewed.
- `CLAUDE.md` rules 2 and 3 and `docs/CONTENT_PIPELINE.md` Stage 4 updated to match. Rule 2 now
  allows two lessons a session on procedural courses.

Nothing was cut that had caught something real: the fresh context, the adversarial fact-check, the
en-dash and em-dash sweep, reading every SVG by eye, measuring quiz option shapes, and full Tier B
on anything contested all stand.

**Also this session.** An audit of all seven live courses against John's read of the site. He was
right that the three pre-pipeline courses are the weak point: Clear Writing, Algebra Essentials and
Python Basics average 452, 444 and 464 words a lesson against Bible Basics' 13,160 and Logic's
9,380, and all three are Core courses. He was already served on three things he thought were
outstanding: every existing podcast episode was re-rendered on Gemini earlier the same day, the
Foval Core is laid out and validator-enforced across 52 courses in 8 terms, and How to Learn
Anything is complete with all eight episodes. `docs/BACKLOG.md` section 0b is rewritten around that.

**Two decisions from John, both closed.** Charon and Aoede stay as the host voices, so the twenty-one
owed episodes render on them and the question does not come back. And the three stub courses stay
live while they are rebuilt in place, rather than being unpublished, because taking them down would
drop the site to four courses and hole Terms 1 and 2 of the Core for weeks.

## 2026-09-08 (later the same day)

**The Bible: What It Is and How to Read It is published.** Twelve lessons, a twenty-two item final
test and a two-week reading project. It is the second course to go live this week and the first with a
`standpoint: christian` label, which means every lesson had to state the positions it disagrees with in
their own holders' terms, and that is where most of the review effort went.

- **Lessons 9 to 12 went through Stage 4**, five fresh-context reviewers each for 9 and 10, seven across
  11 and 12, plus four targeted Stage 1 research tasks to close gaps the reviews found.
- **What the reviews caught, in order of seriousness.** Lesson 11 ran Byzantine Text priority together
  with Received Text priority and attributed the merged position to a scholar who has published against
  one of them, sourcing both to two books written *against* the position that nobody here had opened; it
  now has a section in Robinson's and Hodges's own words, with the roughly 1,800 places the two texts
  differ verified from three independent counts. Lesson 10's argument from Jesus' view of Scripture, the
  course's own load-bearing claim, faced no objection while every other position in the lesson had a
  reply printed against it. Lesson 11 gave the complementarian side of the gender-language dispute a
  preface and gave the other side its corpus research. Lesson 10 promised "what others make of it" and
  delivered the academy, with no Jewish or Islamic doctrine of these books at all. Lesson 12 justified
  daily reading with the spacing literature, which measures re-study of the same material and does not
  support a linear reading plan. Lesson 12 also quoted Augustine saying what his correspondent said.
- **The Chicago Statement was quoted in its permissive half for the third time in this course**, against
  a standing instruction the research file had recorded twice. Both limiting clauses are now cited, and
  the research file's own article number for the 1982 statement turned out to be wrong, which is part of
  why the instruction kept being hard to follow.
- **Two validator bugs, both of which had been hiding real defects.** The SVG legibility checks matched
  only on the `<text>` tag, so a chart could put every font size on a `<g>` wrapper and pass with 24
  sub-legible labels while other lessons were flagged for the same fault; the check now resolves
  inheritance. And the answers-in-plain-prose check looked only eight lines ahead and missed one common
  phrasing, so it fired on six lessons doing it correctly and missed two that were not. Both fixed in
  `scripts/build.mjs`.
- **Four of the twelve lessons understated their own reading time**, one by a factor of three. A learner
  plans an evening around that number.
- **One item was left open rather than papered over**: the strongest King James Only position is named
  and distinguished but not stated in its advocates' own words, because that research did not land in
  time. The lesson says so in the text instead of summarising the view from its critics.

## 2026-09-08

**The podcast engine changed: Gemini 3.1 Flash TTS on fal, replacing VibeVoice 7B.** John listened
to Gemini-rendered episodes on fal and called them leaps and bounds better. Same scripts on both
sides, so it was a fair comparison, and the decision took one listen.

- `scripts/podcast.mjs` now posts to `fal-ai/gemini-3.1-flash-tts` in multi-speaker mode. Billing
  changed shape with it, from $0.04 a generated minute to $0.05 per 1,000 characters in, which is
  about $0.30 to $0.50 an episode. Near enough that cost played no part in the choice.
- The hosts are unchanged, their voices are new, because the VibeVoice presets do not exist on this
  model: **John is Charon** (calm, professional male), **Haley is Aoede** (warm female).
- The request gained `style_instructions`, which VibeVoice had no equivalent for: two hosts in
  conversation, unhurried and warm, thinking aloud rather than reading, never announcer-bright.
- **All nine live episodes were re-rendered** from their existing fact-checked scripts and uploaded
  over the same R2 keys, so no lesson frontmatter changed and no page needed rebuilding. Cost $2.96.
- `docs/PODCAST_OPTIONS.md` records that its own recommendation lost, and why the reasoning was
  wrong: it argued from what each model was built for and from reviews of an older Gemini
  generation, and neither survived one listen. Architecture picks the candidates; ears decide.

## 2026-09-06 (priority reset session)

**Priority reset by John.** He asked why a session was improving Personal Finance when Logic and
Argument and Bible Basics were nearly finished and still invisible. The marching order in
`docs/BACKLOG.md` had the placeholder courses ahead of the two drafted ones; it was wrong, and it
is rewritten. Publishing a finished course now outranks improving a live one. The backlog also
gained the course status table that would have made the mistake obvious, and a rule to update the
backlog in the same commit as the work rather than at session end, which this session had not been
doing.

**Personal Finance lesson 6, "What you actually keep" (taxes)**

- New lesson, the first of the five that `research/OUTLINE.md` planned. Bracket slicing, marginal
  versus effective rate, deductions versus credits, payroll tax, phase-outs and cliffs, withholding.
- Every figure computed from the IRS 2025 brackets, the $15,750 standard deduction and the SSA
  contribution and benefit base, with two charts drawn from those numbers and checked at 375px in
  both themes. One of them draws the whole tax bill on the same scale as the salary, which is the
  effective rate made visible as a length.
- Five fresh-context reviewers found two arithmetic errors that mattered (a predict block claiming
  a bracket crossing that does not happen, and two wrong answers in the practice key), three
  mechanism gaps (itemising, refundable credits, the underpayment penalty), seven neutrality
  findings, and a voice that was not yet the course's voice (12 contractions per 4,500 words
  against lesson 4's 71 per 3,500). All applied. Full log in the course's `research/REVIEWS.md`.
- **A process finding worth repeating:** the neutrality audit caught that this lesson had been
  drafted for a 3.4-sensitive domain with no tax research in `SOURCES.md` at all, and traced the
  lesson's worst finding straight to that gap. A "Taxes" section was added to `SOURCES.md` before
  any fix was applied, covering the mechanics sources, the benefit-cliff literature, and four
  contested questions with their positions.

**Personal Finance: Stage 2 re-outline and an honest course.yaml**

- `research/OUTLINE.md`: the five live lessons recorded and left unrenumbered, then lessons 6 to 10
  planned in full to close the scope gaps `SOURCES.md` had logged (taxes, retirement-account
  machinery, insurance, housing, scams). Taxes precedes accounts because the Roth choice is a bet
  on a marginal rate; scams closes the course because it defends everything before it. Plus the
  24-item course-end test blueprint and the one-page-plan project with its rubric, which standard
  4.4 requires once a course passes six lessons.
- `course.yaml` now describes the course a learner can actually take today. It had been promising a
  renting-versus-buying outcome that no lesson delivered, so that came out until lesson 9 delivers
  it, and `estimated_hours` went from 2.1 to 4.2 to 5.0 as lesson 6 landed.

**Homepage: the One ask panel keeps its side padding on phones**

- The `max-width: 860px` rule flattened every `.why-row` to `padding: 1.75rem 0`, and `.why-ask`
  was caught by it. But `.why-ask` is a tinted panel with a 4px oxblood rule down its left edge,
  not a plain row, so zeroing the horizontal padding put its text hard against that rule at phone
  width. Reported by John with a screenshot. Fixed at 1.15rem, checked at 375px in both themes.

## 2026-09-06 (podcast pipeline session)

**How to Learn Anything lesson 8: media pass (eighth of eight; item 2b complete)**

- The Dewald sleep-and-grades correlations (0.07, 0.10, −0.13) drawn at actual size on the
  full −1..1 scale a correlation can take, which is the section's own argument made visible.
- Barbara Oakley's TEDx talk embedded in the procrastination section with its length stated
  (18 minutes, flagged as save-for-after).
- Ten verified links: the open-access May & Elder review, Gollwitzer 1999 and the 2006
  meta-analysis, Steel 2007, Duckworth 2016, Rasch & Born free on PMC, Dewald, Lim &
  Dinges, the Guzey critique of Why We Sleep, and linked Go deeper entries.
- With this, every lesson of the flagship course carries media per standards 4.5: five data
  charts, two teaching diagrams, six videos (four of them the cited researchers speaking),
  and verified links throughout. The gocognitive channel (interviews with Bjork, Baddeley
  and others) proved to be the course's video goldmine and is noted in the backlog.

**How to Learn Anything lesson 7: media pass (seventh of eight)**

- A horizontal bar chart of Macnamara, Hambrick and Oswald (2014): variance in performance
  explained by practice, by domain (26/21/18/4/under 1), with the professions bar in
  oxblood and its "not distinguishable from zero" caveat on the bar. Drawn from figures
  already fact-checked into the lesson's debate section.
- Verified links: the Ericsson 1993 paper as a free PDF, the 2014 meta-analysis DOI, the
  open-access Ericsson & Harwell reply at Frontiers, and the open-access preregistered
  replication at Royal Society Open Science, in body and Go deeper.
- No embed: Ericsson short-form video does not exist except an Amazon-branded clip, which
  the no-sponsored-content rule excludes; his 27-minute final interview is linked in Go
  deeper with its length stated.

**How to Learn Anything lesson 6: media pass (sixth of eight)**

- A fading-the-guidance diagram (worked example → completion problem → problems alone →
  mixed types) with the three-in-a-row rule under the arrows, placed in the fade stage of
  the worked example. No data chart: the lesson's key numbers live inside predict blocks
  and a chart beside them would print the hidden answers.
- No video embedded: the only Sweller material on YouTube is hour-long podcasts, which fail
  the "say why to watch and how long" test for an embed; Ollie Lovell's free written
  interview series with Sweller went into Go deeper instead.
- Nine verified links: Sweller & Cooper 1985, Kalyuga 2003, both Chi papers (DOIs),
  open-access Bisra 2018 and Sweller 2019 at Springer, Dunlosky at AFT, and the Lovell
  series.

**How to Learn Anything lesson 5: media pass (fifth of eight)**

- A grouped bar chart of Rohrer and Taylor (2007) experiment 2: blocked versus interleaved,
  during practice (89/60) and a week later (20/63), placed after the worked example so it
  does not spoil the predict block that holds the same numbers.
- Bjork's gocognitive clip on the benefits of interleaving practice (6 minutes).
- Verified links: the 2007 paper at Springer, the 2015 classroom study free on ERIC, DOIs
  for the 2020 trial and Brunmair & Richter, the EEF review page, and linked Go deeper
  entries including RetrievalPractice.org and Learning Scientists interleaving guides.

**How to Learn Anything lesson 4: media pass (fourth of eight)**

- A bar chart of the ridgeline study's four horizons: best gap 1/11/21/21 days for tests
  7/35/70/350 days out, with each gap's share of the horizon under the axis, drawn from the
  lesson's own verified table.
- Bjork's gocognitive clip on the theory of disuse and the role of forgetting (7 minutes),
  embedded at the top of the mechanism section it argues for.
- Verified links: both Cepeda papers as free PDFs from Cepeda's own York site (2006 review
  and 2008 ridgeline), Latimier 2021 at Springer, and DOIs for the Carpenter 2012, Kang
  2016, and Carpenter 2022 Go deeper entries.

**How to Learn Anything lesson 3: media pass (third of eight)**

- A stacked-bar chart of Karpicke and Blunt (2011) experiment 2, Table 1: the same 120
  students as two bars, what happened on the test (101/6/13) against what they predicted
  (30/31/59). The exact counts were verified against the paper's PDF before drawing.
- Bjork's "The Power of Testing" (LastingLearning, 3½ minutes) embedded after the founding
  study; verified via oEmbed.
- Seven verified links: Dunlosky 2013 DOI, both Purdue learning-lab PDFs (Roediger &
  Karpicke 2006, Karpicke & Blunt 2011), Yang 2021 DOI, Agarwal 2021 at Springer, plus
  linked Go deeper entries including RetrievalPractice.org and its main guide PDF.

**How to Learn Anything lesson 2: media pass (second of eight)**

- A two-stores bottleneck diagram (new material → working memory → long-term memory, with the
  gold return arrow for stored chunks), drawn inline with theme tokens and checked in both
  themes at both widths.
- Alan Baddeley's five-minute gocognitive interview on how long-term and working memory
  relate, embedded where the two stores are introduced; availability verified via oEmbed.
- Body links, all verified live: Miller 1956 full text at Classics in the History of
  Psychology, Cowan 2001 on PubMed, Willingham's "What Will Improve a Student's Memory?" at
  AFT, and the open-access Sweller, van Merriënboer & Paas 2019 at Springer. The lesson's
  no-links warning is gone.

**How to Learn Anything lesson 1: media pass (marching-order item 2b, first of eight)**

- A line chart of the Roediger and Karpicke (2006) crossover, drawn inline from the six real
  percentages with theme tokens, direct value labels, and the source in the caption. The
  standards name this exact chart as the kind worth drawing.
- Robert Bjork explaining storage versus retrieval strength in his own words: a five-minute
  gocognitive interview embedded where the model is introduced. Availability verified via
  YouTube oEmbed before embedding.
- Six links in the body, each to a verified free copy: Bjork & Bjork 2011 and Soderstrom &
  Bjork 2015 (Bjork lab PDFs), Roediger & Karpicke 2006 and Karpicke & Blunt 2011 (Purdue
  learning-lab PDFs), Kornell & Bjork 2008 (Bjork lab), Dunlosky et al. 2013 (DOI). Go deeper
  entries linked too. The lesson's "no links in the body" lint warning is gone.
- Verified by headless capture in both themes at phone and desktop width: chart legible
  everywhere, video poster loads, no token collisions (one --navy/--line-strong collision the
  linter caught was fixed before commit).

**How to Learn Anything: the six shipped answer leaks fixed; the lint now bites**

- Marching-order item 2(a). The six prompts in the live course that told the reader to answer
  before reading on and then printed the answer in plain prose (lessons 1, 2, 3, 5 twice, 7)
  are `:::checkpoint` blocks now, so the answer sits behind the button the way the pedagogy
  intends. Wording preserved; in lesson 3 the answer was split from the narrative that follows
  it so only the answer hides.
- The answer-leak lint in `scripts/build.mjs` was promoted from a warning to a build failure on
  published courses, now that no published course trips it. Drafts still warn (eight remain,
  in Bible Basics and Logic 9) and those will block publishing until fixed.
- Verified in the served site: the new blocks render as the standard Check-yourself component
  with the answer in a closed details element, and no stray `:::` fences reached the build.

**The podcast pipeline is built: marching-order item 1 is done**

- `scripts/podcast.mjs`: plan / render / upload / stamp, all driven by the lesson path alone
  (script, MP3, R2 key and public URL derived from it). Dry-run by default; refuses to render
  a script whose frontmatter carries no `checked:` fact-check entry; $2 cost cap without
  `--force`; upload verifies the public R2 URL answers before stamping; `FAL_KEY` read from
  `.env.local` automatically. The fal request shape is the one that rendered the first episode.
- `/make-podcast <lesson>` command: gates on the lesson being settled (review, voice pass,
  media pass), writes the six-minute John/Haley script from the lesson only, fact-checks it in
  a fresh-context subagent before any money is spent, then renders, uploads, and stamps.
- Stage 6 (podcast) added to `docs/CONTENT_PIPELINE.md`; the feedback loop became Stage 7.
- Episode scripts are content and now live in git at
  `courses/<school>/<course>/podcast/<id>.script.md`; the lesson 2 script moved there from
  `scripts/podcast/samples/`. Rendered MP3s go to git-ignored `audio-out/` and R2, never git.
- Verified against the live lesson 2 episode: plan reports it done end to end, the dry-run
  estimate ($0.34) matches the real spend ($0.32), and stamping is idempotent.

## 2026-09-06 (podcast setup session)

**The first podcast episode exists, and the plumbing around it**

- Fourth research pass on the engine question after John asked "are you sure?": VibeVoice on
  fal.ai confirmed (memo updated with the community-fork provenance, the reseller pricing, and
  ElevenLabs v3 promoted to challenger); John then chose fal himself.
- fal.ai account created by John with $10 credits; API key in git-ignored `.env.local`.
- Bible Basics lesson 2 rendered as a 6-minute two-host episode for $0.32: script written by hand
  from the lesson, fact-checked in a fresh-context subagent (five nits found and fixed before
  rendering), rendered on VibeVoice 7B.
- R2 activated by John; bucket `foval-audio` created, public dev URL enabled, episode uploaded.
- Lessons take `audio:` frontmatter; the lesson page renders a gold-topped Listen block with the
  synthetic-voices disclosure. Live when Bible Basics publishes.
- Homepage feature card 08 became a real capture of the player (new `tile-podcast` screenshot
  target); the typographic teaser and its `feature-soon` CSS removed.
- `podcast-compare.mjs` request shapes verified against live docs; ElevenLabs binary response and
  2,000-character batching fixed, Gemini default bumped to 3.1 Flash TTS, poll budget raised to
  20 minutes after a 13-minute cold start.

## 2026-09-06

**Homepage redesign (approved by John, live)**

- The hero keeps Oxford navy but the library video shows through more, closed by a gold rule.
  Motion throughout, all gated on prefers-reduced-motion: staggered hero entrance, scroll-reveal
  on sections and cards, count-up stats, sliding nav underlines.
- The "more than words" strip became eight numbered feature cards: dimmed screenshots that come
  forward on hover with a sliding description; a two-column grid on phones. Card 08 is a
  typographic teaser for the podcast (no mockups of unbuilt features).
- Three credited Pexels photographs as full-bleed bands with navy scrims and gold rules; a
  centred closing CTA band. Credit files sit beside each image in `site/assets/media/`.
- Copy cut roughly in half across the hero, panels, and the ask. Gold and oxblood now do
  structural work: section-rule tabs, panel dashes, card subject lines, hero stats.
- Link previews (iMessage etc.) had been grabbing a quiz screenshot; `index.html` now carries
  Open Graph and Twitter tags pointing at a branded card, regenerated with `npm run card`
  (`scripts/social-card.mjs`).
- Housekeeping: the stranded `claude/foval-platform-work-zllo4u` branch (homepage screenshots,
  accounts worker) was merged into `main`; FLI shirt ideas noted in the backlog for the swag store.

**Curriculum map**

- Added 12 courses. Four were requested by name: Graphic Design Fundamentals (M. Wesley),
  Computer Science Foundations and Technology Leadership: CTO and CIO (John), and a widened
  Statistics for Citizens covering the normal distribution. Eight more filled breadth gaps:
  Forecasting, Why Nations Diverged, How Things Work, Drawing and Visual Thinking, Practical Civics,
  Project Management, Process Improvement, How Markets Work, How to Learn a Language.
- Practical Civics: Being Useful in Public Life joined the Foval Core in term 6. The Core is
  52 courses; the map is 174.
- Added the Capstone row, which had been on the Core with no row on the map.

**Placement is now enforced**

- Every course row in `curriculum/TAXONOMY.md` carries a **Path** cell: a term (`T1` to `T8`) or
  `elective`. `scripts/core-path.mjs` checks that the map and `curriculum/core-path.yaml` agree in
  both directions and fails the build on a blank or invalid cell, so a course cannot reach the map
  without a placement decision. It runs inside `npm run validate` and `npm run build`.
- The numbered Core list in TAXONOMY.md is generated from `core-path.yaml`
  (`npm run path -- --write`). Maintained by hand it had drifted: two courses numbered 18, term 5
  out by one, and two philosophy courses collapsed into one line.
- "Placing a course on the Core" in TAXONOMY.md documents how to choose a term. `/new-course` makes
  it the first step and CLAUDE.md carries it as rule 4b.

**Fixed on the live site**

- Four entries in `core-path.yaml` had unquoted titles containing commas, which YAML read as extra
  keys. The Path page had been showing "Early Modern World", "The Age of Revolutions", "The Modern
  World" and "Meaning" with their titles cut off at the comma. The checker now rejects unexpected
  keys so it cannot recur.

**Docs**

- `docs/CONTENT_PIPELINE.md` said nothing publishes without a human sign-off, which contradicts
  CLAUDE.md rule 5. Corrected.
- Backlog section 13 records how to use Alex Hormozi's material in the business courses: what to
  take from his teaching craft, what he is as a source under standards 2.2 and 2.5, and what to
  cross-check every claim against.

**Platform: homepage, accounts, and the funding promise**

- Homepage: a "What makes this different" section below the hero. Three panels (thinking while you read, spaced review, the Christian Standpoint label) and John's one ask about the feedback form. Every picture is a real screenshot of the live site, captured at phone and desktop width in both themes and swapped with `<picture>` on `prefers-color-scheme`, so a dark reader never gets a photograph of a light page.
- Fixed: the Review card's "Next" button was visible before the reader answered, because `.btn { display: inline-flex }` outranks the user agent's `[hidden]` rule.
- Researched what to put in front of D1 for accounts and wrote `docs/AUTH_OPTIONS.md`, a decision memo with four options and a recommendation. Corrected `BACKLOG.md` 8b, which still said accounts were blocked on a Supabase project slot; they are not, and have not been since the move to Cloudflare.
- Accounts and cross-device sync built as a Cloudflare Worker over D1 (`workers/api/`): sign in with Google or a six-digit code by email, and progress, review schedule and streak merge across devices. Signing in cannot lose local progress. Written and tested (28 Worker checks, 12 browser checks); not deployed, and inert until `window.FOVAL_API` is set. Deploy steps in `workers/api/README.md`.
- Homepage: added "A lesson page is more than words", a strip of four real captures from published courses (a marked quiz with its explanation, an exercise, a Python code block, the transcript). Swipeable on phones. Charts and video still have no published course to photograph; that panel is queued on Bible Basics or Logic publishing.
- Researched the podcast question properly and wrote `docs/PODCAST_OPTIONS.md`. Gemini Notebook does now have an audio-overview API, but only on the Enterprise tier at about $135 a month, so the workable path is a script written and fact-checked here, rendered by a two-voice TTS at about $0.13 a lesson.
- Homepage: a fourth panel showing a real chart from a lesson, and the strip grown to six tiles including the six-act map and the free-recall box. The chart and the map come from Bible Basics, which is still drafting; publishing it is now a dependency of the homepage being honest. The video embed still cannot be captured from a web session, because the network policy there blocks YouTube.
- `npm run build:drafts` compiles drafting courses into the site so a draft can be read in the real thing. Preview only; never commit the output.
- The linter now catches SVG labels wider than their own viewBox, which the browser clips silently. Nine of them across Bible Basics and Logic, including both chart source captions in Bible Basics lesson 2. `scripts/text-width.mjs` holds real Arial metrics, checked against Chromium over all 252 labels in the repo; because `system-ui` differs by platform, a label can fit on a Mac and be clipped on Android, so the check has a hard tier and a warning tier.
- `docs/PODCAST_OPTIONS.md` rewritten after a harder look at the unofficial and open-source routes. Recommendation changed from Gemini Flash TTS to VibeVoice on fal.ai: open weights, built for multi-speaker long-form, $0.04 a generated minute, about $13 for every lesson currently live, and no lock-in because the model can be self-hosted later.
- `npm run shots` regenerates every homepage screenshot from one script (`scripts/screenshots.mjs`), driving the Chrome already installed on the machine. It refuses to write a file when the thing it is photographing did not load, so a blocked YouTube embed cannot ship as a blank player. Adds `playwright-core` as the first devDependency.
- Copy: "No accounts" in the footer and "No account" in the page description became "no account needed to learn", which stays true once accounts ship, and the README no longer promises "no ads, ever" while that is under discussion.
- Funding promise narrowed rather than broken. The site said "no ads" flatly in five places, which would have become a lie the day any sponsorship appeared. It now promises the part that is worth something and can be held forever: nothing about you tracked, profiled or sold, nothing you read used to decide what you get shown, and no advertisement, sponsor slot, affiliate link or paid placement in any lesson, assessment or review card. That last one is Editorial Standards 4.5 now, not just marketing copy. Changed together across VALUES.md, the standards, the roadmap, the About page, the footer and the README. No advertising has been built and none is planned yet.
- Dropped the tracking promise as well, on John's call: the site no longer promises that nothing about a learner is tracked, profiled or sold. The one forward-looking promise left about funding is the editorial one, that no lesson, assessment or review card ever carries an advertisement or paid placement. Present-tense statements of fact about what is actually stored were kept, because accurate disclosure is not the same thing as a promise.
- Third pass on the podcast research after John pushed back that it was not deep enough. Play.ai PlayNote, the closest thing to a commercial NotebookLM API, shut down permanently on 31 December 2025 after Meta acquired PlayAI, taking around 40,000 customers' accounts and audio with it and offering no migration. Browser automation of NotebookLM works but authenticates as a real Google account, and NotebookLM has no suspension of its own, so a flag disables the whole account, which is the same account the sign-in backend depends on. Recommendation is unchanged and better supported: our own script, rendered by an open-weights voice model.
- Fixed the hero never going full width. It was written as a full-bleed band but its negative margins only cancelled the page padding, so above about 1200px the header ran edge to edge and the hero stopped dead with white either side. Content column widened from 1100 to 1280 at the same time.
- Pilot podcast script written by hand from How to Learn Anything lesson 3, and `scripts/podcast-compare.mjs` to render it on VibeVoice, Gemini and ElevenLabs. Dry run by default, $0.79 for all three engines on the four minute sample. Writing the script by hand rather than generating it means the comparison needs no LLM key and demonstrates the point that the script is the half the editorial standards apply to.

## 2026-09-05 (later)
- Hero video (Pexels, free licence), quieter type, no italics, larger tagline, schools section.
- Media in lessons: figure and video blocks, standards 4.5, drafting brief updated; all new drafts include charts, images, videos, and links.
- Logic and Argument: 10 lessons drafted, lesson 1 reviewed. Bible Basics: lessons 1–8 drafted, 9–12 in progress.
- Custom domain www.fovallearninginstitute.org configured on Pages (DNS pending at Namecheap).
- `docs/BACKLOG.md` added as the handoff document.

## 2026-09-05
- Custom domain live and secure at https://www.fovallearninginstitute.org, with HTTPS enforced.
- Bible Basics switched from the ESV to the NET Bible across all twelve lessons; Editorial Standards 4.7 added, covering which translation to quote and why. The ESV's free allowance excludes Creative Commons works and Bible reference works, and this course is both.
- Bible Basics lessons 1 and 2 through Stage 4 review and fixed. Logic and Argument lesson 2 reviewed, findings recorded, fixes pending.
- `scripts/build.mjs` now lints every lesson including drafts: em dashes, ESV quotations, unparseable frontmatter, dark SVG fills, sub-15px SVG labels, link-free bodies, and argument displays whose conclusion would render inside the previous premise.
- Nine argument displays in Logic lessons 4, 5 and 7 fixed; they had been rendering with the conclusion folded into the last premise.
- SVG text and shape fills across 13 lessons converted to theme tokens so diagrams follow the reader's light or dark theme.
- Feedback endpoint live: Cloudflare Worker (`workers/feedback/`) backed by a D1 database, wired into the site. Write-only, origin-restricted, stores no IP or user agent. Read with `npm run feedback`.
- Value 9 reworded from open source code to openness about the teaching, in `docs/VALUES.md` and on the About page.
- "About" added to the main navigation; footer rebuilt as a real two-column menu.
- Custom domain DNS added at Namecheap: parking records removed, four GitHub Pages A records on `@` and `www` CNAME to `jfoval.github.io`. Waiting on propagation before HTTPS is enforced.
- Added the About John page at `#/about-john`, linked from the About page and the footer, with his headshot at `site/assets/media/john-foval.jpg`.
- Renamed to **Foval Learning Institute**. Tagline: Faith. Knowledge. Life. Free for everyone. Repo is now github.com/jfoval/foval-learning-institute; site at jfoval.github.io/foval-learning-institute.
- Added `docs/VALUES.md`, the nine values every decision and every piece of feedback runs against. Shown on the About page.
- Removed the "review" status and the owner sign-off gate. Courses go live when they finish the pipeline and improve through the feedback loop; the owner reads them as a learner.

## 2026-09-04 (later)
- *How to Learn Anything* (8 lessons, final test, two-week project) completed through the full pipeline: research, outline, drafts, four-pass reviews with primary-source fact-checks, style-guide voice pass. Status: review, awaiting the owner's read-through.
- Added `docs/STYLE_GUIDE.md` and a fifth "voice" reviewer; `/voice-pass` command.
- Feedback ask on every lesson; `docs/FEEDBACK_LOOP.md`; `/triage-feedback` command.
- Predict-first and checkpoint blocks, worked-example gaps, and free recall before every quiz.
- Revised Keystone Arch mark installed (header, icon, certificate seal).

## 2026-09-04
- Repository made public; site live at https://jfoval.github.io/foval-learning-institute/
- Added the School of Christian Studies (15th school) and standpoint-course rules (Editorial Standards 3.7)
- Incorporated Peterson Academy research into the roadmap: audio mode, "Ask this lesson", public changelog, community rules before social features
- Began *How to Learn Anything* through the full content pipeline
- Founded: curriculum map, editorial standards, content pipeline, static site with Path, Review, and transcript, four placeholder courses
