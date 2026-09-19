# Queue

**Say "keep going" and a session works this on its own.** `npm run state` computes the one next
action; `.claude/commands/keep-going.md` is the whole loop and `/keep-going` runs it. This file
holds only what a script cannot know: what is in flight, what is blocked, and what is waiting on
John. **No counts live here, and no closed items.**

**What goes where, because this file grew from 847 words to 4,109 in ten days by ignoring it.**
What happened and why belongs in `docs/CHANGELOG.md`. What is settled and must not be re-opened is
in `docs/DECISIONS.md`. What is checked and what is not is in `docs/VERIFICATION.md`. Specs for
work not started are in `docs/PLATFORM_ROADMAP.md`. **Craft belongs with the stage that uses it**:
script and audio craft in `docs/PODCAST_PIPELINE.md`, lesson-drafting craft in the defect list in
`.claude/commands/draft-lesson.md`. A closed defect moves to the changelog in the commit that
closes it; it does not stay here with a note about what it taught.

**The test, before adding anything to this file:** does it make the next session's job smaller or
bigger? Code and tests absorb knowledge and make it smaller. Prose accumulates and makes it bigger,
and it never feels that way while you are writing it.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Using AI Effectively is published and written.** T1, sixth of seven. Eleven lessons, every one
  through Stage 4 with its review applied, the voice pass done, the neutrality audit passed, both
  assessments written, and eleven fact-checked podcast scripts. Nothing on it is outstanding except
  eleven episodes, which is money and trails. Every review file is in `research/reviews/`, and the
  audit is the last entry in `course-wide.md` and lists what it checked so nothing is re-checked.

  **Six defects recurred across four or more of its lessons and are now drafting defects rather
  than lesson defects.** They are in `.claude/commands/draft-lesson.md`. Two are worth knowing
  before anybody opens a lesson anywhere in this repo. **Anything a course constructed itself must
  be labelled as the course's own in the body at the point of use**, not only in a footnote:
  lessons 8 and 11 both had a Sources block claiming the body said so when it did not. And **a
  quotation gets re-worded inside its own marks** with striking regularity, in five lessons here and
  then again in a podcast script one stage later, so check quotations by string match rather than
  by eye.

  **Stage 6's fact-checks caught three defects in the lessons that all eleven Stage 4 reviews had
  missed**, which is the strongest argument this repo has for keeping the two stages separate and
  fresh-context. Lesson 1 credited a task design to the wrong study. Lesson 5's costing case, the
  one that teaches you to check the seam between the steps and the conclusion, printed a total that
  did not fit its own double-counting story. And lesson 10's Sources block had been renumbered by
  the neutrality audit, leaving a body cross-reference pointing at the wrong note. **Writing the
  script is a close reading of the lesson that nothing else in the pipeline performs**, which is a
  reason to write scripts promptly rather than to treat them as packaging.

  **Lesson 11 is the revision point for the whole course**, by design. Everything perishable is
  quarantined there so that a future session can bring the course up to date without re-opening ten
  lessons. Do not spread dated claims back through the others.

  **One scope question is John's and is not urgent.** The course deliberately leaves out the ethics
  of training data, copyright and the labour questions, on the grounds that they are a different
  course. A reader may reasonably expect a course called Using AI Effectively to say something about
  whether using one is a defensible thing to do. The outline flags it under "What is deliberately
  left out". The neutrality audit widened lesson 1's exclusion paragraph so that energy, water and
  bias in the outputs are at least named alongside copyright and jobs, with NIST's twelve risks
  pointed at, which answers the omission without taking the scope decision away from John.

  **A second question is John's, and it is bigger than this course.** Nothing in `site/`,
  `README.md` or `docs/VALUES.md` says that the institute's lessons are written by an AI. That is a
  repo-wide question, and **Using AI Effectively is where it bites hardest**: the course cites a
  vendor's own documentation as a primary source, it teaches readers to ask who is making a claim,
  and it was written by that vendor's model. `docs/SOURCE_NOTES.md`'s standing rule is that a
  declared interest is stated once rather than insinuated, and the course applies that rule to
  Anthropic's guidance in lesson 4 and not to its own authorship. This changes what the institute
  claims about itself, so under root rule 8 it is John's decision and not a drafter's. Nothing is
  blocked: the course is live without it.

- **Digital Literacy lessons 1 to 12 are drafted, reviewed, applied and scripted.** The only
  content work left on the course is lesson 13, which is blocked on John below. **Read lesson 8's
  review file before drafting anything else here**, in particular its cold-start finding: six terms
  this course had never defined (encryption, HTTPS, cookie, certificate, padlock, and "IP address")
  were being used as though it had, and the same defect came back in lesson 9. Check
  `npm run taught` and the earlier lessons before assuming a word is available.

- **One repo-wide convention nobody has written down, found by lesson 11's review.** Lesson bodies
  name other lessons and other courses constantly and link none of them, while Go deeper and
  Sources link everything. That is either a deliberate convention or an oversight in eighty lessons.
  **Settle it once and apply it everywhere**, rather than one lesson at a time.

- **The contraction check's ceiling is clear: nothing in the repo is over it.** All four files it
  caught on its first run are fixed, on 2026-09-18 and 19. `docs/VERIFICATION.md` carries the row.

  **Two things to know before anybody trips it again, because between them they cost seven second
  passes.** First, **stripping an overshoot overshoots the other way.** Five files today went from
  over the ceiling to under the floor on the first pass and needed a third. Second, **the validator
  counts a narrower set than a hand count does**: `it's`, `that's`, `there's`, `here's`, `what's`,
  `let's`, `he's`, `she's` and `who's` count, every other possessive does not, and the Sources block
  is in the word total, so a hand count that strips the sources and counts every `'s` reads about
  double. Measure the way the validator measures, and measure after the edit rather than before it.

  **The mechanical case has a tool now, in the scratchpad pattern rather than in `scripts/`:**
  expanding every contraction except every third one lands a file in the band in one pass and
  spreads what is left evenly, which is what fixed Digital Literacy lesson 11 (18.1 to 6.5) and the
  machine audit (22.8 to 5.6). It is only right for a file that is far out; a file near the band
  wants sentences chosen by hand.

- **Both assessments are written, so lesson 13 is now the whole of what is left.** The machine
  audit and a 32-item course-end test are in `assessments/`, and the test carries a note saying
  lesson 13's two items are still to come. Nothing else on this course is outstanding.

  **The outline's test blueprint disagrees with itself and the disagreement is resolved in the
  table's favour.** Its heading says twenty-six items; its own per-area table sums to thirty-three.
  The table is where somebody reasoned area by area, so it won, less lesson 13's two, plus the
  dating item the outline requires and the table has no row for. **Whoever drafts lesson 13 adds
  its two items and can then correct the heading.**

  **The project's Stage 4 review is worth reading before the next assessment anybody writes**, and
  the finding generalises past this file. A drafter working from lesson *objectives* rather than
  lesson *bodies* produces something that is structurally right and factually wrong in a way that
  looks fine: it named the wrong five questions from lesson 1, halved eight folk models to five,
  and instructed the learner to explain lesson 7's one blind party with encryption, which lesson 7
  spends a whole predict block ruling out. None of that is visible without the lesson open.
  **Objectives are an index, not a source.**

- **The app-store Stage 1 gap is closed, on 2026-09-18.** Seven sources are now under lesson 9's
  app-store column, and three new misconceptions came out of them. `docs/CHANGELOG.md` has it. The
  one figure worth carrying forward into any lesson that touches install routes: Kotzias et al.
  (IEEE S&P 2021) measured that Play has the best defences of any route **and** is the source of 67%
  of unwanted installs, because it is the source of 87% of installs. Safest per install, largest in
  absolute terms.

- **The day's allowance is spent again, on 2026-09-19 at 21:45, and the window's shape is now
  well established over three sessions.** Two more Bible Basics episodes went out this evening, 6
  and 7, both one call, both passing the gate first time. The debt is 9 down to 5. Then nine
  refusals in a row: 21h43m, and an hour later 21h14m. **Nothing is billed for a refusal**, which
  is why trying four in a row costs four minutes and is worth doing rather than reasoning about.

  **The rule that has held every time:** a refusal quoting twenty-something hours means stop
  rendering and spend the session on content. A refusal quoting one or two hours is worth waiting
  out, because slots free at the edge of the rolling window. On 2026-09-18 a 23h59m message at
  17:03 was followed by two successful renders four hours later.

  **Using AI Effectively now owes eleven episodes too**, added to `curriculum/audio-debt.yaml` when
  it published. Sixteen owed across two courses, and about $3.50 clears every one of them. A
  session opening after about 19:00 has the whole day's fifty.

- **The binding limit on audio is requests per day, not money, and that is new.** John opened
  [aistudio.google.com/rate-limit](https://aistudio.google.com/rate-limit) on 2026-09-18: the
  account is **Tier 1**, and **Gemini 2.5 Pro TTS is capped at 50 requests a day**, sitting at
  46 of 50. One render is one request. The spend page said **$37.82 of $45.00** at the same
  moment, so there was money left and the money was never the problem. `npm run state`'s estimate
  of $7.26 remaining was within nine cents of Google's own figure, so the manifest-derived number
  is trustworthy and does not need checking by hand.

  **The reasoning is in `docs/PODCAST_PIPELINE.md` section 2**, under "The other ceiling". The
  short version for a session that meets a 429: read the rate-limit page, not the spend page, and
  do not write an incident into `budget.json`, because a 429 is refused before any audio is
  generated and bills nothing.

  **It behaves as a rolling window, not a midnight reset, and Google says exactly when to come
  back.** With the error logging widened, the next refusal read in full:
  `generate_requests_per_model_per_day, limit: 50, model: gemini-2.5-pro-tts`, and
  `Please retry in 1h57m38s`. So it is fifty renders per project per model per day, counted per
  model, and the message carries a precise retry time. **Read that time and let it decide whether
  to wait**: two hours means a couple more episodes tonight, twenty-four means tomorrow.

  **Nine Bible Basics episodes are owed and $2.29 clears them.** A session that opens tomorrow
  clears all nine inside one day's allowance with forty to spare. Nothing needs redoing: the
  scripts are written and fact-checked, kept renders survive in `audio-out/`, and `npm run state`
  names the next lesson. Raising the tier would remove the constraint and is John's call, not a
  session's.

  **Reading Well is FINISHED**, all ten episodes rendered, uploaded and stamped in one session,
  one call each, every one passing the gate first time: 271 to 484 seconds, $0.18 to $0.24, about
  $0.21 an episode against the $0.22 the pipeline doc budgets, so that figure is holding across a
  second course. Bible Basics 1, the render killed in flight on 2026-09-18, is done, with zero
  prior attempts on the record, so nothing was paid for twice.

  **The render order below and `npm run state` disagreed, and it is resolved in the script's
  favour.** This file said legacy courses first, which put Bible Basics ahead of Reading Well;
  `npm run state`, `docs/PODCAST_PIPELINE.md` section 3 and `docs/DECISIONS.md` section 2
  ("episodes are rendered in Core term order") all say term order. Reading Well went first and the
  hand-written order is gone.

  **Bible Basics scripts are the long ones** (1,259 to 1,539 words against the measured band of
  1,000 to 1,200). Lesson 1 sits at exactly 1,417, the guard's ceiling to the word, and took 473
  seconds and $0.26, the longest and dearest render of the session.

- **Digital Literacy is written as far as it can be, and now is.** All twelve drafted lessons have
  a fact-checked script; `npm run state` shows 12 of 12. Nothing on this course is outstanding
  except lesson 13, which is blocked below.

  **What the twelve checks taught, because it is the same defect three ways.** Two came back FAIL
  and the rest PASS WITH NITS, and almost none of it was an invented fact. Lesson 1's script had
  offered Kang's single-box drawing as the result arguing against the course's own premise, when
  the lesson presents it as the encouraging half and puts the weight on the null result that
  technical background had no relationship with protective action. **A compression that keeps every
  figure can still invert the argument.** Lesson 6's script spoke one error message for both shells
  and then claimed they differed in word order, and after the repair it made the same unhearable
  claim one clause later; it took three rounds. **An episode is heard, not read, so a difference
  that lives in punctuation or a capital letter does not exist**, and that is worth adding to the
  fact-check prompt for any lesson that prints a terminal message. And four scripts running, the
  nits were dropped hedges: "will usually have changed" stated flat, "almost every" split across
  two sentences so three items became universals, "by default" removed from a claim the lesson's
  own callout contradicts. **What a compression removes first is a qualifier**, which the pipeline
  doc already says and which held on every lesson here.

  Every script in this course was also written long and cut against the free dry run before the
  check rather than after, per section 4a. Five of the six drafted today opened above the
  1,417-word wall.

- **BLOCKED ON JOHN, and it is now the only unblocked-work gap in the whole institute.** With the
  scripts done, lesson 13 is the single thing between Digital Literacy and publication, and no
  other course has content work outstanding. A session with no episodes left to render has nothing
  to write until this arrives.
  Lesson 13, the last one, has a Stage 1 gate the outline states as a **must**: "Stage 1 must run a
  real data export end to end and record what arrived". Its first worked example is that export,
  described concretely, how long it took, how big it was, what format it was in, which parts were
  readable. **A session cannot do this.** It needs a real account at a real service, John's
  credentials, and a wait of hours or days for the archive to be built.

  **What John does, and it is about ten minutes of his time plus a wait.** Go to one service he
  actually uses, Google Takeout being the easiest, request an export of one or two products rather
  than everything, and when the mail arrives, write down five things: how long it took, how large it
  was, what format it came in, what was inside that he expected, and what was inside that he did not.
  That last one is the lesson. Then hand the note to a session.

  **The paper half of that gate is done**, on 2026-09-18: Farke et al., USENIX Security 2021, on
  Google's My Activity, is now in `research/SOURCES.md` with a finding that changes how the lesson
  must be written rather than just what it cites. Dashboards make people *less* concerned after
  looking, and only 25% change anything.

  Everything else on the course is ready. Lessons 1 to 12 are drafted, reviewed and applied.

- **The same two defects have now recurred one lesson after being closed.** Lesson 8's review closed
  a cold-start finding (terms used that the course had never defined) and a contractions finding.
  **Both came back in lesson 9**, which makes it a pattern rather than an incident: a drafter working
  from an outline writes in the outline's register and assumes the outline's vocabulary, and neither
  the outline nor the drafter can see which words the course has actually taught. `npm run taught`
  reports objectives, not vocabulary. **If it happens a third time, write the check**: grep a draft's
  technical terms against lessons 1 to N-1 before it goes to review. Root `CLAUDE.md` rule 10.

- **Two things for John to decide, neither urgent, both written down rather than acted on.**
  **(a) The outline's minute estimates are in the wrong units and two lessons running have had to
  reason past them.** It plans each lesson at about half what `npm run minutes` measures (mean ratio
  2.05 across lessons 2 to 7), and it sets a "split past 90 measured minutes" trigger for lesson 8
  in that same wrong scale. Lesson 8 measures 145 and was **not** split, for the outline's own
  pedagogical reason, which holds: the three tools only stop looking like three pieces of magic when
  they are on one diagram. But 145 is now the longest lesson in the course, past lesson 5 at 135, and
  if John wants a fourteenth lesson that is the one to split. Restating the trigger in measured
  minutes would stop the next drafter making the same call.
  **(b) `Pearman (except 08)` in this course's SOURCES.md `unread:` line.** One author of the
  private-browsing paper, which was read in full and is lesson 8's principal source, shares a surname
  with a password-manager paper that was not opened and that lesson 10 wants. The exemption uses the
  build's existing `(except NN)` mechanism, which keys to a **lesson number rather than to a work**,
  so if lesson 8 ever cited the unread paper the check would pass silently. First case in the repo
  where that gap is real rather than theoretical.

- **Current course:** **Digital Literacy.** Stages 1 and 2 are done and drafting is under way.
  `npm run state` names the next lesson. Read the outline's **"Six decisions this outline settles"**
  before drafting anything: it settles the shell, lesson 1's honesty about the course's own premise,
  what the backup lesson may claim, dating every figure, and that the course teaches the desktop
  model. **The outline's per-lesson minute estimates run low by a factor of two**; take
  `npm run minutes` and ignore the heading.
- **Every published course is written.** Nothing on any live course is outstanding except
  episodes. Reading Well was the last, on 2026-09-19.
- **Before drafting anything:** `npm run taught <course>`. It prints every objective a learner has
  already met earlier on the Core, and names the earlier courses that do not exist yet so nothing
  is assumed from them. Stage 2 and Stage 3 both call for it.
- **Blocked on:** money, for audio only. `npm run state` prints the cap, what is owed, and what
  clearing it costs. When it says the cap is spent, **tell John in a line and carry on with
  content**: he raises it when he can and asked to be told, not asked. Writing is free and is never
  blocked by this.
- **The shape of the work** (`docs/DECISIONS.md` section 2). **Published:** every lesson through
  Stage 4, live on the site. **Written:** every lesson also has a fact-checked script, which is
  free. **Finished:** every lesson also has an episode, which costs money. A course goes all the
  way to *written* before the next starts. **Never call a course finished while it owes episodes**,
  and never use the word loosely in a report to John: on 2026-09-19 a session wrote "one course
  finished" about a course owing ten episodes, and he had to catch it.

## The queue, top to bottom

**Nothing on a course already through Stage 4 is to be re-opened** unless the feedback loop or a
check brings it back.

**Render order: `npm run state`, and nothing here.** It names the course and the first lesson
actually missing an episode, in Core term order, which is also what `docs/PODCAST_PIPELINE.md`
section 3 says. The hand-written order that used to sit here is gone; see the audio bullet above
for what it said, why it disagreed with the script, and the one line John can say to put it back.

**The script length ceiling lives in `docs/PODCAST_PIPELINE.md` section 4a**, which is the
authority. It was duplicated here until 2026-09-19 and the two copies had drifted to different
numbers. Resolved on 2026-09-18: 4a and `/make-podcast` both say 1,000 to 1,200 and nothing
states a different target, so there is no longer a disagreement to settle.

1. **The only human check in the pipeline, and it has never run.** Both items under "Standing
   items" below have been open since 2026-09-05. The drafter and the reviewer are the same model,
   so until John reads a lesson as a learner nothing in this institute has been read by a person.
   This is the highest-value unstarted item in the file and no session can do it for him.

2. **Four things Digital Literacy's outline hands to this file rather than settling itself.**
   **(a) Python Basics lesson 1 will disagree with Digital Literacy about the shell.** Digital
   Literacy teaches POSIX and has Windows learners install Git Bash in lesson 4; Python Basics
   currently sends them to PowerShell. Digital Literacy is five terms earlier on the Core, so
   Python Basics is the one that moves. **Do not do it until Digital Literacy's terminal lessons
   exist**, because until then Python Basics' PowerShell instructions are the only ones a Windows
   learner has.
   **(b) Three Stage 1 gates block specific claims**, each with a written fallback in the outline
   so nothing is stopped: lesson 12 needs CISA or provider documentation for backup retention
   windows and for versioning defeating ransomware, lesson 13 needs a real data export actually run
   so the lesson says what one contains, and lesson 11 needs the Verizon figures read rather than
   taken at search-summary level. **A drafter who ignores a gate will print a claim the research
   cannot support**, which is the exact defect this repo keeps finding.
   **(c) Lesson 8 is the one length risk**, planned at 70 measured minutes. The split is decided in
   advance: past 90, the VPN and private browsing move to a fourteenth lesson and HTTPS stays with
   the padlock. Do not improvise a different split.
   **(d) A mobile-first counterpart is missing from the Core map.** Digital Literacy teaches the
   desktop model deliberately and says so, so a phone-only learner cannot do its lessons 2 to 7 or
   the terminal half of its project. That is a real gap in what the institute offers and it is
   John's call whether it becomes a course, not a drafter's. The outline did not touch the taxonomy.

3. **Python Basics lesson 1 will need the same Windows callout Digital Literacy lesson 5 now has.**
   Lesson 4 puts the Windows reader inside Git Bash and lesson 5 opens with `python3 --version`.
   Lesson 4's cold-start pass flagged that as a gap, on the understanding that a Windows install
   registers only `python` and `py`. **Checked, and that is out of date**: Python's own Windows
   documentation, read 2026-09-18, says a `python3` command is installed and is "intended to catch
   accidental uses of the typical POSIX command on Windows". The three things that really do produce
   a not-found on Windows are the optional `PATH` step being declined, an app execution alias
   opening the Microsoft Store, and the interactive prompt needing `winpty` under Git Bash. All
   three are now in a callout in Digital Literacy lesson 5. **Python Basics lesson 1 says none of
   it**, and it is five terms later, so it inherits the problem. Do it in the same pass as item 2(a),
   the PowerShell-to-Git-Bash change, and not before Digital Literacy's terminal lessons are live.

4. **Then the Foval Core in order, one course at a time.** After Digital Literacy: Using AI
   Effectively, then Term 2. Start each with `/new-course`. `npm run state` names the next action
   for every course, in term order, and is the authority over anything written here.

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
