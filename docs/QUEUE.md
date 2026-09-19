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

  **Four defects recurred across four or more of its lessons and are now drafting defects rather
  than lesson defects, numbered 18 to 21.** They are in `.claude/commands/draft-lesson.md`. Two are worth knowing
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

- **Thirty-four quiz explanations name a distractor by its position**, across seven courses. Found
  by a survey on 2026-09-19 after three courses had their answer sequences permuted, and written up
  here rather than fixed, under root rule 9. **This is `/draft-lesson` defect 17 and it is a trap
  rather than a wording problem**: the day somebody reorders a quiz's options, a sentence saying
  "the second answer overshoots" starts describing a different option, and nothing fails. Two Focus
  explanations survived today's permutation by luck and were rewritten; the rest were not touched.

  `npm run quiz` lists them with the sentence, so a session can work straight down the output. They
  are in Digital Literacy's final test (4), Using AI Effectively's final test (4) and three of its
  lessons, Time Management's final test (4), Habits and Self-Discipline's final test (2) and lesson
  7, How to Learn Anything's lessons 4, 6, 7 and 8 (8 in total), Focus and Deep Work's final test,
  Bible Basics lessons 4 and 9, Python Basics lesson 1, Logic and Argument lesson 10, and Digital
  Literacy lessons 1 and 3. **The fix is one edit each: name the distractor by its content.**

- **Memory is published**, seven lessons, an eighteen-item test and the project. Every lesson has
  been through Stage 4 in a fresh context and every finding is applied; `research/reviews/` has a
  file each. **It is also written**: seven fact-checked podcast scripts, two of which came back
  FAIL and both on the same defect, a sign-off naming as left out something the episode had just
  delivered. Audio debt stands at 7. **Nothing is owed for it but the rendering**, which waits on
  the daily quota with the other 34 episodes.

  Lesson 3 now carries the course's one chart, the three pooled figures with their confidence
  intervals, which is what two reviewers asked for.

  **The project was written before lesson 7 rather than after it**, on the course-wide review's
  note: lesson 1's first exercise stakes an irreversible instruction on the project existing, and a
  learner who reaches it before the project page has been told to save something without being told
  what it is for.

  **The scope decision is the one that matters and Stage 1 tested it rather than assuming it.**
  How to Learn Anything already teaches retrieval, spacing, interleaving, chunking and the two
  strengths, so a second memory course either takes the other half or is a restatement. The other
  half is memory as a thing reconstructed every time it is used, and **every strong literature the
  search found is about failure and distortion rather than acquisition**, which makes that boundary
  evidence rather than convenience.

  **The best lesson available is the eyewitness one, and not because it debunks anything.**
  Everybody knows a confident witness is no more accurate than an unconfident one. The 2017
  synthesis opens by saying that belief was entirely reasonable for the procedures that produced it,
  and then gives five conditions under which initial high confidence is remarkably accurate and
  initial low confidence signals a high risk of error. **The word "initial" is load-bearing** and
  the outline requires it wherever the claim appears.

  **Two gaps are recorded rather than filled, and both are deliberate.** The Loftus and Palmer
  figures come from a published teaching summary because the original could not be opened, which
  makes that study the course's own worked provenance case, the way Maltz was Habits lesson 4's. And
  a large misinformation-effect meta-analysis that search results keep attributing could not be
  found, verified or attributed across several attempts, so `SOURCES.md` says in terms that **no
  lesson may print its figure**.

  **This course's main refusal is sharper than the two before it.** It cannot tell a reader whether
  a particular thing they remember happened, and somebody will want to use lesson 4 on a person.
  Lesson 7 faces that rather than leaving it implied.

- **Focus and Deep Work is PUBLISHED and WRITTEN**, with seven lessons, both assessments, seven
  Stage 4 reviews applied with a review file for each, and seven fact-checked podcast scripts. T2,
  third of the term on running yourself. **Nothing on it is outstanding except seven episodes**,
  which is money and trails. `curriculum/audio-debt.yaml` opened its line at 7.

  **Its scripts found a hole in the money gate and it is now closed.** Two independent fact-checking
  subagents noticed on the same day that `scripts/podcast.mjs` tested only for the presence of a
  `checked:` key, so the placeholder `checked: pending` satisfied it. Seven unchecked scripts would
  have rendered. The gate now rejects placeholders and entries too short to be a real verdict, and
  an audit when it landed found 109 scripts passing and only those seven failing.

  **Two findings from its reviews are worth knowing before drafting anything anywhere.** The first
  is that a Stage 4 reviewer who opens the primary document finds things a reviewer working from the
  research file cannot: lesson 2 said three of five workload measures were significant because
  `SOURCES.md` had recorded only three, and the paper stars all five. **A research file is a summary,
  and a footnote pointing at a paper is an instruction to open it.** The second is that the drafter
  gives every lesson in a course the same quiz answer sequence; `npm run validate` now warns when two
  neighbouring lessons match.

  **The research found the shape of the course and it is unusual.** Three of the four best-known
  empirical claims in this subject have been meta-analysed in the last five years, and in each case
  the synthesis says something the popular literature has not caught up with. The
  media-multitasking association does not survive a publication-bias correction in the half measured
  by task performance, though it holds in the half measured by self-report. The brain-drain effect
  pools to g = −0.14, sits in memory rather than in attention, and is null in North American
  samples. Working-memory training shows no convincing far transfer, and its own meta-analysts write
  that there is no evidential value in the studies using treated controls.

  **The best single source is the least expected one.** In the CHI 2008 experiment people finished
  interrupted tasks *faster* than uninterrupted ones, with no difference in errors, and paid for it
  in stress, frustration, time pressure and effort. A lesson built on that teaches a reader to ask
  what a measure misses, which is worth more than any technique this course could hand out.

  **The spine is the difference between self-report and task performance**, planted in lesson 1 and
  paid off in lesson 4. It is the one idea the course most wants a learner to keep.

  **Two boundaries are written into the outline so nothing gets re-taught or improvised.** Time
  Management lesson 5 already has Mark's 2005 field study, the length of a work segment and the
  twenty-three-minute trace, and this course points there rather than repeating them. And flow is
  left out on purpose: Csikszentmihalyi is on the `unread:` line, the measurement literature was not
  read, and improvising it would be the thing the course exists to teach against.

  **Leroy's attention residue is the awkward case.** It is one of the two or three ideas a reader
  will bring, the 2009 paper is paywalled and could not be opened, and no replication turned up
  either way in twenty minutes of searching. It is on the `unread:` line and handled the way Habits
  lesson 4 handled the twenty-one days: named, placed, and load-bearing for nothing.

- **Habits and Self-Discipline is PUBLISHED and WRITTEN**, with seven lessons, both assessments,
  seven Stage 4 reviews applied with a review file for each, and seven fact-checked podcast scripts.
  T2, second of the term on running yourself. **Nothing on it is outstanding except seven episodes**,
  which is money and trails. `curriculum/audio-debt.yaml` opened its line at 7.

  **All seven fact-checks came back FAIL, and five of the seven failed in the sign-off.** That is
  now the most reliable defect in this stage: the sign-off names as left out something the episode
  delivered in full, because it is written from the lesson's headings rather than from the script
  that actually exists. `/make-podcast` already says to check the sign-off last, after every trim,
  and the instruction needs sharpening to say check it against the script rather than against the
  lesson. The other repeated failure was a dropped hedge: three scripts widened a claim their lesson
  had narrowed, and one ran a recorded quotation straight into two sentences the lesson marks as the
  course's own summary, which would have reached a listener as the paper's words.

  **This course is where defect 22's second form was measured, and it is the most useful thing the
  session produced.** The read level is itself a provenance claim, and the drafter raises it exactly
  where it is least entitled to: lesson 2 turned "the abstract and the diary-study results" into
  "the abstract, the Method section and the diary-study results" and then printed a page of Method
  detail that existed nowhere; lesson 3 turned "Study 1's design and participants" into "both
  studies" and printed Study 2's sample size; lesson 6 turned "Abstract read verbatim" into "the
  abstract and the two passages stating the shifts" and hung four quotations on the difference.
  **In every case the inflated read level is exactly what licenses the invented material**, which is
  why it needs its own check: the fabrication sits downstream of a sentence that reads as
  scrupulousness. It is now in `/draft-lesson` under defect 22, with the instruction to copy read
  levels out of `SOURCES.md` rather than write them from memory.

  **Two of the three were fixed by Stage 1 work rather than by editing**, and that is the lesson for
  the next course. The Inzlicht and Schmeichel paper was opened from the copy its first author
  posts, and its abstract, process-model overview, motivation section, conclusion and footnote 2 are
  now recorded in `SOURCES.md` with every quotation checked character by character. That repaired
  lessons 5 and 6 at once. **When a read level is the finding, opening the paper is usually cheaper
  than cutting the lesson.**

  **It also fixed the course's one neutrality failure.** Lesson 5 described the resource model
  entirely in the words of the papers that undercut it, because no proponent source had been read.
  Footnote 2 of that same paper carries the best statement of the defence available: partial
  depletion, and what looks like depletion being unwillingness to draw further on the reserve, the
  energy-conservation account. Lesson 5 now has a section for it, and lesson 6's predict block no
  longer describes the resource account as unable to predict something its defenders do predict.

  **Three numbers in this subject travel further than their evidence**, which gives the course its
  spine and its last lesson. Twenty-one days is an observation about plastic-surgery patients in a
  1960 self-help book, with "a minimum of about" lost in transmission. Sixty-six days is an average
  with a range of 18 to 254. And forty-three percent is the higher of two figures in one paper that
  says "between a third and a half" and explains why its own two studies disagree. **None of the
  three was invented**, which is the point lesson 7 assembles them to make, and a harder failure to
  catch than invention.

  **The highest-value fact in the subject is the least repeated one**, and lesson 4 delivers it:
  missing a single opportunity did not seriously impair habit formation, and automaticity gains
  resumed afterwards.

  **The Lally study itself is paywalled and was not opened**, and is reported at one remove through
  two open-access papers by its own author. Outline decision 3 requires lessons to say so in the
  body wherever the 66 days appears.

  **The four trade books carry `(except 07)` on the `unread:` line**, on the precedent Time
  Management set with its lesson 8: the last lesson names what a reader will actually be handed, and
  rests no claim on any of them. `research/SOURCES.md` holds the four titles at search-summary level
  so a lesson naming them takes them from the research file.

  **Two smaller things left open.** Lesson 5 quotes the 2016 replication's statement of the resource
  model and its opening sentence about outcomes as the course's own summary rather than as
  quotations, because `SOURCES.md` does not carry those strings and no open copy of the paper could
  be reached this session; a later session with access should verify and record them. And lesson 7
  cites Digital Literacy twice, which is still `status: drafting`, so the pointer goes nowhere on
  the live site until that course publishes.

- **Time Management is PUBLISHED**, with eight lessons, both assessments, eight Stage 4 reviews
  applied, and eight podcast scripts drafted. T1, seventh and last of the Tools term. It owes eight
  episodes, which is $1.60 and is money and trails; `curriculum/audio-debt.yaml` opened at eight in
  the publishing commit. **It reaches *written* when the last of its scripts is fact-checked**, and
  five of eight are stamped.

  **Stage 4 failed the fact-check on all eight lessons, and in the same way every time.** Every
  quotation in the course string-matched its source character for character and every figure matched
  the research file digit for digit. **Every single failure was in a sentence with no quotation marks
  in it.** `/draft-lesson`'s note that this drafter quotes accurately and describes carelessly is now
  confirmed on a third course, and the instruction that follows is already written there: point the
  review at the sentences with no quotation marks in them.

  **Arithmetic is the second pattern and it is the one to add to a review prompt.** Five sums in this
  course were wrong and each was the only sum in its lesson: lesson 5 double-counted a lunch break
  and divided by the wrong number of stretches, lesson 7 got a total wrong and then built a
  conclusion on a figure that came from nowhere, lesson 2 printed the waking hours *inside* a
  reader's categories as the hours outside them, and lesson 3 called six tenths of a day "within
  half a day". **Two of those five survived their Stage 4 review and were caught by the podcast
  fact-check instead**, which is the strongest evidence this repo has for writing scripts promptly.
  Asking a reviewer in terms to redo every number by hand found the other three; nothing else did.

  **Defect 20 recurred five times in one course**, which produced the note now in `/draft-lesson`
  about why: the drafter writes the honest footnote first and the footnote then feels like the job
  done. Twice the footnote had no marker in the body at all.

  **Two defects were this session's tooling rather than the drafter's.** A re-wrapping helper joined
  a closing `:::` onto the end of the previous line, so a checkpoint swallowed half of lesson 6
  including its whole statement of the value question; `npm run validate` caught it and the
  session's grep did not, because that check reports against the directory rather than the file. And
  a whitespace-tolerant regex used for edits collapses YAML block scalars onto one line, which broke
  frontmatter five times. A quiz option containing a colon parses as a YAML map and would reach a
  learner as `[object Object]`; that happened three times and the validator caught every one.

  **The contraction repair is unstable in both directions**, going under the band four times and over
  it four times across eight lessons, and a mechanical expansion leaves clauses like "you've
  discretionary hours" that the validator cannot see. Measure after the repair, read what the pass
  touched, and note that a hand count reads about double because the validator excludes possessives;
  one reviewer reported the whole course as over band on that mistake.

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

- **The day's allowance is out, and `npm run state` now knows it rather than each session finding
  out by hand.** One refusal on 2026-09-19 at 03:19, quoting **20h40m**, so rendering is done until
  roughly midnight on the 20th. Sixteen episodes are still owed across Using AI Effectively (11) and
  Bible Basics (5), and $3.20 clears them; the money was never the constraint.

  **What changed in the tooling.** `scripts/state.mjs` reads the last 429 out of the attempt
  manifests, takes Google's own `retryDelay`, and if the window has not cleared it skips the render
  branch entirely and moves the one next action on to content, printing one line saying why. Before
  this it named a render as the one thing to do for the whole twenty hours the quota was out, and
  every session had to reason its way past its own marching order. **Nothing is billed for a
  refusal**, so a session that wants to test the window may still try one; it costs a minute.

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

- **BLOCKED ON JOHN, and the block is now in `course.yaml` rather than only here.** With the
  scripts done, lesson 13 is the single thing between Digital Literacy and publication. The course
  carries a `blocked:` line saying so, `npm run state` skips a blocked course when it picks the one
  next action and prints the reason instead, and **deleting that line is all it takes to pick the
  course back up**. This is the fix for a session spending its first move on work it cannot do:
  on 2026-09-19 the marching order named lesson 13 while the queue two hundred lines down said it
  was stopped on John. Time Management is the unblocked course and has seven lessons to draft.
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

- **Found on 2026-09-19 and written down rather than fixed, per root rule 9.** A chart of the
  estimate-against-diary gap by decade (1.3 in 1965, 3.6 in 1975, 6.2 in 1985, 2.7 for 1993 to
  1995, 3.7 for 1998 to 2001, 2.4 for 2003 to 2007) belongs in Time Management lesson 1. Six numbers
  that make the lesson's own argument for dating every figure, currently a list. It is a media
  addition rather than a defect, and it has to clear the repo's SVG rules by eye in both themes.

- **Time Management's assessments are not written**, which is correct until the course has six
  lessons, and `OUTLINE.md` fully specifies both. Lessons 2 and 3 already point at the project.
  **This is drafting defect 12's shape and must not survive to publish**: write them at lesson 6.

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
