# Reviews: Personal Finance Fundamentals

Append-only log of review findings and resolutions. Newest at the bottom.

## 2026-09-06 — Lesson 01 (Where money goes) — Stage 4 full review

Five fresh-context reviewers (depth, fact-check, neutrality, pedagogy, voice) ran against
`lessons/01-where-money-goes.md` as it stood before this session, measured against
`research/SOURCES.md` (written 2026-09-06) and the editorial standards. The lesson predates
both the standards and the research; it was one of the five placeholder lessons SOURCES.md
describes.

### Depth (Part 1)

- **D1 (severe).** No frontmatter objectives at all (4.1 requires 2 to 4 testable ones).
- **D2 (severe).** Zero worked examples. 1.2 requires two fully worked, one simple and one
  with a wrinkle; the lesson assigns the categorisation task without ever showing one done.
- **D3 (severe).** No Sources section and no citations; the two numeric claims it makes
  (60% threshold, 50/30/20) are uncited.
- **D4 (severe).** No go-deeper resources, despite SOURCES.md naming ready candidates
  (CFPB Your Money Your Goals, Khan Academy, Kapoor ch. 3).
- **D5 (severe).** Lusardi/Mitchell Big Three unused, though SOURCES.md explicitly says they
  make "an excellent diagnostic self-test for lesson 1".
- **D6 (severe).** CFPB financial well-being definition unused; the course's definition of
  winning is never stated where the learner enters.
- **D7 (severe).** JPMC $400-shock data and the mangled "40% can't cover $400" factoid
  unused, though SOURCES.md flags it as a worked example in reading statistics.
- **D8 (severe).** Fails all three 1.1 tests: nearly every paragraph is noun-swappable
  (specificity), an instructor would call it the simplified beginner version (expert), and
  the quiz is passable by phrase recognition (transfer).
- **D9 (moderate).** No connections section; the only forward link is one clause.
- **D10 (moderate).** Reason to care is assertion-only ("single highest-return activity").
- **D11 (moderate).** Misconceptions element absent; SOURCES.md lists lesson-1-adjacent ones.
- **D12 (moderate).** Kaiser et al. 2022 unused; the honest answer to "why bother" is absent.
- **D13 (moderate).** "Cash flow awareness" under-delivered: flows only, never assets and
  debts (the Kapoor ch. 3 personal-financial-statements framing).
- **D14 (moderate).** "Most people are surprised twice" is an unfalsifiable folk claim as
  written; "Fixed versus variable" and the 50/30/20 section are textbook-shaped boilerplate.
- **D15 (minor).** CFPB worksheets not linked; exercise reinvents a bucket list.
- **D16 (minor).** Practice exists but minimal, no predict-then-count contrast.
- **D17 (minor).** ~400 words, under the ~800 "almost always too thin" line, as a symptom of
  the missing elements rather than a length problem per se.

### Fact-check (Part 2)

- **F1 (severe).** The "about 60% of take-home pay" fixed-cost threshold matches no source.
  The real benchmarks differ in number and definition: Warren and Tyagi's *All Your Worth*
  (2005) warns when must-haves exceed 50% of after-tax income (must-haves is broader than
  fixed costs), and Jenkins's 2002 "60% solution" caps committed expenses at 60% of gross.
  The lesson's hybrid matches neither. Apparently invented.
- **F2 (severe).** "The single highest-return activity in personal finance" is an
  unverifiable superlative, and SOURCES.md itself calls the employer 401(k) match "the
  highest-return dollar available", so the repo contradicts itself.
- **F3 (moderate).** 50/30/20 description is accurate in substance but unattributed
  (Warren and Tyagi, *All Your Worth*, 2005; 20% includes debt paydown beyond minimums).
- **F4 (moderate).** "Most people are surprised twice" is half-supportable: C+R Research
  2022 found consumers estimated $86/month of subscriptions against an actual $219, and 42%
  paid for a forgotten one; that supports "many underestimate subscriptions", not "most are
  surprised twice", and nothing supports the eating-out half.
- **F5 (moderate).** "You cannot manage what you do not measure" carries attribution risk
  (famously misattributed to Drucker; Deming said roughly the opposite). Quiz Q3 made the
  aphorism a correct answer, giving it more weight than it can carry.
- **F6 (minor).** Fixed/variable definitions match the standard texts; verified.
- **F7 (minor).** Quiz answer indices correct under 0-indexing; verified against the build.
- **F8 (severe as a class).** No Sources section at all (2.1 violation).

### Neutrality (Part 3; money is a 3.4 domain)

- **N1 (moderate).** "Single highest-return activity" asserted as fact in the author's
  voice; motivational claim misclassified as established (3.1).
- **N2 (moderate).** The 60% threshold presented as settled; contested practical guidance
  with no attribution.
- **N3 (moderate).** 50/30/20 elevated as the budgeting heuristic without naming its origin
  or the rival frameworks (zero-based, pay-yourself-first, Ramsey-style plans), and then
  tested in the quiz as course content.
- **N4 (moderate).** The "education, not personalised advice" note (2.5) lives in
  course.yaml and lesson 5; lesson 1 is where a linear learner enters and where the first
  prescriptive guidance appears, so it belongs here too.
- **N5 (moderate).** Zero links and no sources: unsourced folk claims read as settled fact.
- **N6 (minor).** The lesson gestures at heuristic breakage for high-cost cities but omits
  the point a poverty-aware reader would insist on: at low incomes percentage rules fail
  arithmetically, because needs are floor-priced.
- **N7 (minor, recorded as checked).** No US-specific machinery in this lesson, so no
  in-text US label needed. Perspectives checked: textbook/CFPB mainstream, behavioural and
  Ramsey-style practitioners, low-income and high-cost-city readers, non-US readers,
  sceptical consumer advocates.

### Pedagogy (Part 4)

- **P1 (severe).** No objectives key in frontmatter.
- **P2 (severe).** `minutes: 20` dishonest: the lesson's own first sentence assigns an hour
  of statement work; real load is 60 to 75 minutes.
- **P3 (severe).** No `explain` field on any quiz question.
- **P4 (severe).** Quiz is all recall, zero application (4.3 requires at least half
  application); Q3 is literally "Why does the lesson say...".
- **P5 (severe).** No :::predict or :::checkpoint blocks anywhere.
- **P6 (severe).** No worked example before the problem (4.2).
- **P7 (severe).** Zero links in the body.
- **P8 (moderate).** Q3's distractors are silly ("Banks require it") and answerable by
  option shape; Q2 partly answerable by elimination.
- **P9 (moderate).** No chart where one would teach: household spending shares are the
  point and no benchmark data appears (BLS Consumer Expenditure Survey is the source).
- **P10 (moderate).** Unhedged, uncited claims (60%, "most people"); no Big Three
  diagnostic.
- **P11 (minor).** Quiz at the floor (3 questions), answers 1, 2, 1: indices 0 and 3 never
  used, pattern-guessing index 1 scores 67%.
- **P12 (minor).** Forward connection minimal, course-arc connections absent.
- **P13 (minor).** 50/30/20 never applied to a concrete income.

### Voice (style guide)

- **V1 (severe).** Think-while-reading blocks absent (no predict, no checkpoint).
- **V2 (severe).** The professor voice is not present: clipped listicle prose, rules first,
  no example, no person, no numbers; too compressed to sound like anyone.
- **V3 (moderate).** Abstract-aphorism opener; the guide's exemplars open with a concrete
  scene. "Single highest-return activity" brushes salesy framing.
- **V4 (moderate).** Bare blockquote used for a tip while :::callout is used twenty lines
  later; inconsistent and unstyled.
- **V5 (moderate).** "The fix is structural, not willpower" is the one-line-moral tic in
  form; the idea earns its place, the delivery doesn't.
- **V6 (minor).** "It is a sketch, not a law": same epigram shape, uncontracted "It is"
  reads like a manual; contractions largely missing throughout.
- **V7 (minor, clean checks).** No em dashes, no banned vocabulary, no "Here's" openers, no
  pipeline vocabulary in headings. Worth preserving in the rewrite: the "surprised twice"
  observation (with a real source), the high-cost-cities hedge, and the "Don't judge, just
  look" callout.

### Verdict

Severe findings in four of five passes; every reviewer independently reached "this is the
placeholder SOURCES.md describes". The findings amount to "rewrite from the research", not
patching. Kept from the old lesson: the title, the bucket-audit exercise as the core task,
the fixed/variable distinction (verified correct), the don't-judge framing, and the
surprised-by-subscriptions observation, now sourced.

### Resolutions applied (2026-09-06, same session)

The lesson was rewritten in full from SOURCES.md. What the rewrite does, finding by
finding:

- **D1/P1**: three testable objectives added to frontmatter.
- **D2/P6/P13**: two fully worked examples added. Example 1 walks Maya's complete month
  (real bucket totals against $3,400 take-home, fixed/variable split, 50/30/20 computed).
  Example 2 adds the wrinkle: Dan's irregular freelance income and a lumpy annual bill,
  with the annualising move shown, grounded in JPMC Institute's income-volatility finding.
- **D3/F8/N5/P7**: body now links primary sources throughout (CFPB reports and toolkit,
  Lusardi open-access paper, NBER, JPMC Institute, BLS, C+R Research) and ends with a
  numbered Sources section.
- **D4**: Go deeper added: CFPB toolkit, Khan Academy unit, Kapoor ch. 3, Lusardi paper.
- **D5/P10**: the Big Three are now the lesson's opening diagnostic, inside a predict
  block, with the ~30% worldwide statistic and what performance predicts.
- **D6**: CFPB's four-part well-being definition stated as what winning means, with the
  "budget that ignores enjoyment fails" consequence drawn from it.
- **D7**: the $400 factoid is now a worked misconception: the SHED survey question versus
  JPMC's transaction data (92% overall, 77% of the lowest income quartile), taught as
  calibrated reading of statistics.
- **D8**: the rewrite is built from named studies, named people, real numbers; the quiz is
  application-first (see P4).
- **D9/P12**: Connections section added (lesson 2 uses the three numbers; the 20% slice
  points at lessons 3 to 5; where the course goes).
- **D11**: What people get wrong section: the $400 factoid, budget-as-diet, and
  tracking-is-only-for-people-in-trouble, each corrected with evidence.
- **D12**: Kaiser et al. 2022 cited for why the exercise is worth an hour, with the honest
  behaviour-versus-knowledge caveat kept.
- **D13**: partially addressed: the lesson now frames the audit as one of the two personal
  financial statements and names net worth as the other, deferring the full balance-sheet
  treatment. Recorded as a scope decision, not silently dropped (see below).
- **F1/N2**: the invented 60% threshold is gone. Replaced with Warren and Tyagi's actual
  50%-of-after-tax-income must-haves benchmark, attributed, with its definition given
  correctly (must-haves, broader than fixed costs).
- **F2/N1/V3**: the superlative opener is gone; the opening is now the C+R
  estimated-versus-actual subscription gap, a concrete scene with a source.
- **F4**: "surprised twice" replaced by the sourced version: the $86 versus $219 gap and
  the 42% forgotten-subscription figure, with "many" not "most".
- **F5**: the measurement aphorism removed from body and quiz entirely; the point is now
  made concretely (a guess is off by 2.5x; a count isn't).
- **N3**: 50/30/20 attributed to Warren and Tyagi, dated, computed on a worked case, and
  set beside the rival frameworks (zero-based, pay-yourself-first) so it reads as one
  heuristic among several.
- **N4**: education-not-advice callout added to this lesson.
- **N6**: the low-income arithmetic point is now explicit (percentages fail when needs are
  floor-priced; the audit's value there is information, not a 20% savings rate).
- **P2**: minutes raised to 60, and the lesson says plainly that the audit is most of it.
- **P3/P4/P8/P11**: quiz rebuilt: five 4-option questions, every one with an explain field
  that teaches the wrong answers, four of five application-to-a-new-case, distractors are
  half-understanding mistakes, answer indices 2, 0, 3, 1, 3 (index 3 used twice, no
  guessable pattern).
- **P5/V1**: two predict blocks (the Big Three; guess the average household's housing
  share before the chart) and two checkpoints (the gym-membership fixed-or-variable case;
  the phone-repair annualising case) added, and the exercise's first step is now
  guess-every-bucket-before-counting, the prediction move applied to the reader's own data.
- **P9**: an SVG bar chart of the real BLS Consumer Expenditure Survey 2024 shares
  (housing 33.4%, transport 17.0%, food 12.9%, insurance and pensions 12.5%, healthcare
  7.9%) added as the benchmark the reader compares their own buckets against, data verified
  against the BLS news release during this session.
- **V2/V6**: full voice rewrite: second person, contractions, examples before rules, the
  professor register.
- **V4**: the blockquote tip is gone; callouts used consistently.
- **V5**: the structural-not-willpower idea kept and delivered as a full explanation
  (what a structural fix looks like) instead of an epigram.

Chose not to fix, and why:

- **D13 in full**: the complete personal-balance-sheet (assets and debts, net worth)
  treatment stays out of lesson 1. The lesson is already at the honest limit of one
  sitting with the audit exercise in it, and net worth is one line of framing here; where
  it gets its own treatment is a course-structure question that belongs with the scope
  gaps SOURCES.md already logs (insurance, taxes, scams, housing, retirement machinery)
  for a Stage 2 re-outline of the course, not inside this lesson.
- **F7**: nothing to fix; recorded that quiz answers are 0-indexed, and the new quiz was
  written against that convention.
- **N7**: nothing to fix; this lesson still touches no US-specific machinery beyond the
  BLS chart, which is labelled as US data in its caption.

## 2026-09-06 — Lesson 02 (A budget that survives) — Stage 4 full review

Five fresh-context reviewers (depth, fact-check, neutrality, pedagogy, voice) ran against
`lessons/02-budget.md` as it stood before this session, measured against
`research/SOURCES.md` and the standards, and against the rewritten lesson 1 it must build
on. Like lesson 1, this lesson predates both the standards and the research.

### Depth (Part 1)

- **D1 (severe).** No worked examples at all. 1.2 requires two fully worked with one
  wrinkle; the lesson never builds a single budget with real numbers. The closest thing is
  two one-line sinking-fund divisions.
- **D2 (severe).** Mechanisms asserted, never explained: "Automation beats discipline" and
  "people who wait to save almost always have nothing left" state that, never why (no
  default effects, no evidence), so a learner cannot adapt them.
- **D3 (severe).** None of the SOURCES.md budgeting evidence used: Kaiser et al. 2022
  (budgeting is where education effects are strongest), the CFPB well-being fourth element
  (the evidence-grade version of "leave room for fun"), CFPB Your Money Your Goals
  worksheets, JPMC income-volatility data. Zero links, zero citations, no Sources section.
- **D4 (severe).** The $1,000 starter emergency fund presented as settled; SOURCES.md
  classifies it as contested (Ramsey's Baby Step 1; critics; Vanguard's $2,000 threshold
  research). The "(or one month of line 1)" variant is the drafter's own invention.
- **D5 (moderate).** Specificity test partially failed: "Why budgets fail" is
  noun-swappable, "37 categories" is invented flavour, no named person, study, or number
  from a source anywhere.
- **D6 (moderate).** Expert test failed: the four-line budget presented as the method with
  no landscape (zero-based, 50/30/20 from lesson 1 never reconciled, envelope), no
  complication for measured income volatility.
- **D7 (moderate).** Transfer test failed: all three quiz questions answerable by phrase
  recognition from the text.
- **D8 (moderate).** Missing elements beyond examples: no named misconceptions, no
  forward connections, no Go deeper, no Sources.
- **D9 (minor).** Reason-to-care thin; never says what the reader will be able to do.
- **D10 (minor).** Practice exists and precedes the quiz (to its credit) but depends on
  lesson 1's numbers without restating them and has no worked model to imitate.
- Body runs about 340 words of prose, well under the ~800 "almost always too thin" line,
  as a symptom of the missing elements.

### Fact-check (Part 2)

- **F1 (severe).** No Sources section, no citations, no links anywhere (2.1, 4.5), despite
  checkable claims with ready sources sitting in SOURCES.md.
- **F2 (severe).** The $1,000 starter is Dave Ramsey's Baby Step 1 taught as settled and
  unnamed (2.5: "never present a guru's claim as settled"); the better-evidenced Vanguard
  $2,000 threshold ignored.
- **F3 (moderate).** "3 to 6 months" given as bare fact; SOURCES.md notes it has
  consensus status but thin direct evidence for the specific range (2.4 calibration).
- **F4 (moderate).** "People who wait to save 'whatever is left' almost always have
  nothing left" unsupported as stated; the evidenced claim is weaker and better: automatic
  pre-commitment raises saving substantially (Thaler and Benartzi's Save More Tomorrow
  raised contribution rates from 3.5% to 13.6%). Not in SOURCES.md either; add it.
- **F5 (minor).** "Pay yourself first" unattributed (generally credited to George S.
  Clason, *The Richest Man in Babylon*, 1926).
- **F6 (minor).** "Its real product is not money; it's sleep" is rhetoric sitting on an
  unused real source (Vanguard's well-being findings).
- **F7 (verified).** Sinking-fund arithmetic correct: $600 twice a year is $100 a month;
  $1,200 a year is $100 a month.
- **F8 (verified).** Quiz answer keys factually correct under 0-indexing; but all recall,
  no explain fields (relayed to pedagogy).

### Neutrality (Part 3; money is a 3.4 domain)

Perspectives checked: Ramsey adherents; mainstream CFP/academic planners; behavioural
critics of momentum plans; low-income and irregular-income workers; non-US readers;
zero-based/YNAB and 50/30/20 budgeters; debt-optimiser readers.

- **N1 (severe).** Ramsey's Baby Step 1 asserted in the author's voice, unnamed, no rival
  position (3.1 misclassification, 2.5 violation); quiz Q3 reinforces the sequence as fact.
- **N2 (moderate).** "Before investing, before paying extra on low-rate debt" and
  "emergency fund first" assert a contested ordering as settled; many planners put the
  employer match first, and SOURCES.md itself calls the match the highest-return dollar
  available.
- **N3 (moderate).** The four-line budget presented as the budget with no attribution and
  no rivals named; "37 categories nobody will update" is a strawman of zero-based
  budgeting that fails the 3.2 Turing test for its adherents.
- **N4 (moderate).** Irregular and low-income perspective omitted entirely; the lesson
  assumes a stable monthly paycheck against SOURCES.md's own JPMC volatility evidence.
- **N5 (minor).** Unsourced behavioural claims stated flatly; direction defensible,
  calibration ("almost always") stronger than the evidence.
- **N6 (minor).** US-dollar examples unlabelled for non-US readers (amounts illustrative,
  so minor).
- **N7 (checked, no finding).** Education-not-advice note: lesson 1 carries the
  once-per-course callout, so lesson 2 does not need its own.

### Pedagogy (Part 4)

- **P1 (severe).** No objectives key in frontmatter (4.1).
- **P2 (severe).** Quiz all recall, zero application (4.3 requires at least half).
- **P3 (severe).** No explain field on any question.
- **P4 (severe).** Answer indices 1, 1, 2: indices 0 and 3 never used, middle-picking
  scores 100%; Q1 and Q3 answerable by option shape (one long serious option among
  throwaways like "A failing investment" and "Holidays").
- **P5 (severe).** No worked example before the problem: the exercise asks for a complete
  budget the lesson never shows built (4.2).
- **P6 (severe).** No links, no Sources, no Go deeper (4.5).
- **P7 (severe).** No predict, checkpoint, or free-recall blocks anywhere.
- **P8 (moderate).** `minutes: 25` dishonest: the exercise is an hour-plus of real work
  (retrieve numbers, build the budget, enumerate a year of irregulars, set up a transfer).
- **P9 (moderate).** Contested starter-fund guidance taught as settled, wasting the
  lesson's best elaboration moment (also N1/F2).
- **P10 (moderate).** Backward connection one clause ("last lesson's numbers"), never
  built on; no forward connections to debt or compounding.
- **P11 (minor).** Thin overall; no misconceptions section beyond three bare bullets.

### Voice (style guide)

- **V1 (severe).** No think-while-reading blocks at all: zero predicts, zero checkpoints.
- **V2 (severe).** "Sinking funds: the secret weapon" uses banned salesy vocabulary
  ("secret").
- **V3 (severe).** Reads as a listicle, not a professor: headings, bullets, a table,
  numbered steps, no connected reasoning, no person, no admitted limits; fails the
  read-aloud test.
- **V4 (moderate).** One-line-moral tic three times in 40 lines: "When it's gone, it's
  gone", "Automation beats discipline", "Its real product is not money; it's sleep".
- **V5 (moderate).** "A budget is not a punishment. It's a plan..." is the banned
  negation-then-reframe shape, and the lesson opens with the abstract rule, no example.
- **V6 (moderate).** Facts without teaching: failure modes stated without one shown
  happening; the save-whatever-is-left claim carries nothing behind it.
- **V7 (minor).** "Job loss, medical bills, and the boiler breaking" triad; content-ish
  but check in rewrite.
- **V8 (minor).** Contractions present but thin; no teacherly "I", manual-lite register.
- **V9 (minor, clean checks).** No em dashes, no other banned vocabulary. Worth
  preserving: the four-line simplification and its arithmetic sentence, the sinking-fund
  divisions, "One number. Spend it however you like.", the sleep line (at most one moral),
  the exercise's "even if it's $20" tone.

### Verdict

Severe findings in all five passes. The bones (a simple structure, sinking funds,
automation, a cushion) are the right content and survive into the rewrite, but every
section needs its evidence, mechanism, worked cases, attribution, and contested-question
handling built from SOURCES.md. Rewrite from research, not a patch.

### Resolutions applied (2026-09-06, same session)

The lesson was rewritten in full from SOURCES.md, built explicitly on the rewritten
lesson 1 (its audit output, Maya's numbers, and Dan's irregular income are this lesson's
inputs). Finding by finding:

- **D1/P5**: two fully worked examples added. Example 1 is Maya's complete budget, built
  line by line from her lesson-1 audit numbers, in an audit-versus-plan-versus-decision
  table that sums exactly to her $3,400 income. Example 2 is the wrinkle: Dan's irregular
  freelance income, solved with a baseline salary from a holding account plus buffer,
  with the numbers shown.
- **D2/F4/N5/V6**: mechanisms now explained with evidence. Automation is grounded in
  Thaler and Benartzi's Save More Tomorrow (3.5% to 13.6% contribution rates), with the
  why (defaults don't consume willpower) stated; the save-whatever-is-left claim is
  reworded to the calibrated version (saving placed last in line, not "almost always
  nothing left"). Envelope budgeting gets its mechanism (pain of paying, Prelec and
  Simester's roughly-double willingness to pay by card).
- **D3/F1/P6**: body links primary sources throughout (NBER, CFPB report and toolkit,
  JPMC Institute, University of Chicago Press, Springer, Vanguard, Ramsey Solutions as
  primary statement of his own plan) and ends with a ten-item Sources section, plus a Go
  deeper section (CFPB toolkit, Khan Academy budgeting unit, Thaler and Benartzi, Kapoor
  ch. 3).
- **D4/F2/F3/N1/P9**: the emergency-fund material is now taught as the contested question
  SOURCES.md classifies it as: the $1,000 starter attributed to Ramsey's Baby Steps
  (linked), presented fairly (most-followed plan, real results) alongside the criticism,
  with Vanguard's $2,000 threshold evidence as what the data firmly support and the
  3-to-6-month range labelled convention with thin direct evidence. The invented
  "(or one month of line 1)" variant is gone. Quiz Q5 now tests exactly this
  evidence-versus-convention distinction instead of reinforcing the sequence as fact.
- **D5/D6/N3**: the lesson now names and fairly presents the four major methods
  (50/30/20, zero-based, pay-yourself-first with Clason attribution, envelope/cash
  stuffing), each with its mechanism and who it suits. The "37 categories" strawman is
  gone; zero-based budgeting is presented as Maya's own method with the overbuilding
  failure attributed to overbuilding, not the method. The four-line table is replaced by
  the worked zero-based budget.
- **D7/P2/P3/P4**: quiz rebuilt: five 4-option questions, all application to cases not in
  the text (Leah, Omar, Tanya, Rosa, the friend's claim), every question with an explain
  field that teaches the wrong answers, plausible half-understanding distractors, answer
  indices 2, 0, 3, 1, 2 (indices 0, 1, and 3 all used, no guessable pattern, no
  shape-guessable options).
- **D8**: What people get wrong section added with three misconceptions not covered in
  lesson 1 (perfect balance or failure, method over adherence, one broken month means
  start over), each corrected with reasoning; Connections section added (lesson 3 takes
  the debt line and the cushion-versus-debt ordering, lessons 4 and 5 take the savings
  line).
- **D9**: the opening now states the deliverable (the audit run forwards) and cites
  Kaiser et al. for why this specific hour is the course's best bet.
- **D10**: the exercise restates the three lesson-1 numbers it needs and follows two
  fully worked models.
- **N2**: the prescriptive ordering ("before investing, before paying extra on debt") is
  no longer asserted; the cushion-versus-extra-debt-versus-employer-match trade-off is
  named as genuinely contested and explicitly deferred to lesson 3, with the match
  flagged as very hard to beat per SOURCES.md.
- **N4**: irregular income is now a full worked section (Dan), grounded in the JPMC
  volatility evidence, and the exercise tells irregular earners to use a conservative
  baseline rather than an average.
- **N6**: a callout states the amounts are US-scaled examples and the machinery is
  currency-neutral.
- **N7**: confirmed, no duplicate education-not-advice note added; lesson 1's covers the
  course.
- **P1**: three verb-first testable objectives added to frontmatter.
- **P7/V1**: one predict block (the too-aggressive version of Maya's budget) and two
  checkpoints (method-matching for the clothes-shopping friend; Dan's $4,900 month), plus
  free recall before the quiz in the exercise.
- **P8**: minutes raised to 50; the exercise is the bulk of it.
- **P10**: backward connection is now the lesson's spine (Maya's and Dan's numbers carry
  over); forward connections written.
- **V2**: "secret weapon" heading gone; sinking funds taught inside "Months that lie"
  with the term attributed as an accounting term.
- **V3/V5/V8**: full voice rewrite: prose carries the reasoning, examples before rules,
  second person, contractions, the professor register; the negation-then-reframe opener
  replaced by the audit-run-forwards opening.
- **V4**: the moral-per-section tic removed. "One number. Spend it however you like."
  survives in spirit in Maya's eating-out decision; the sleep line was cut with the
  Ramsey section rewrite (the Vanguard well-being number now does that work with
  evidence).
- **V7**: the boiler triad went with the section it lived in.

Also fixed, outside this lesson: lesson 1's stated Maya fixed total was $1,937/57%, but
its own components (1,050 + 180 + 15 + 95 + 310 + 180 + 87) sum to $1,917, 56% of
take-home. Corrected in 01-where-money-goes.md so lesson 2 can build on consistent
numbers.

Chose not to fix, and why:

- **No chart added.** The lesson's numbers are one household's plan, not a distribution
  or trend; the audit-versus-plan table is the right visual form under 4.5's "can you say
  why the reader needs it" test. If a media pass later wants a visual, the
  four-methods-by-who-they-suit comparison is the candidate.
- **Emergency funds kept to one section.** Per the course structure, the budget needs
  only a savings line and its first destination; the cushion-sizing evidence appears
  exactly as far as the contested-question handling requires, and the
  cushion-versus-debt ordering is deferred to lesson 3, which owns the debt trade-offs.
Also done: Thaler and Benartzi (2004) and Prelec and Simester (2001), both cited in the
rewritten lesson and verified this session (the fact-checker independently surfaced Save
More Tomorrow), were added to SOURCES.md under primary sources.

## 2026-09-06 — Lesson 03 (Debt) — Stage 4 full review

Five fresh-context reviewers (depth, fact-check, neutrality, pedagogy, voice) ran against
`lessons/03-debt.md` as it stood before this session, measured against
`research/SOURCES.md`, the standards, and the rewritten lessons 1 and 2 it must build on
(lesson 2 explicitly deferred the cushion-versus-debt ordering to this lesson). Like
lessons 1 and 2, this lesson predates both the standards and the research.

### Depth (Part 1)

- **D1 (severe).** Body about 330 words for a claimed 25 minutes; under half the ~800
  "almost always too thin" line, for a lesson meant to cover APR, minimum payments,
  payoff strategy, good/bad debt, and credit scores.
- **D2 (severe).** Zero worked examples, and the one SOURCES.md mandates ("show the
  arithmetic of a real minimum-payment schedule") is missing: the 20-year claim is
  asserted with no formula, no schedule, no reproducible numbers.
- **D3 (severe).** Avalanche versus snowball fails the expert test: two bullet
  definitions plus "Either works", with none of the contested-question evidence
  (Gal & McShane 2012; Kettle et al. 2016), no mechanism, no failure-mode framing.
- **D4 (severe).** Credit-score content is a generic three-line callout; every myth in
  the research (carrying a balance, soft versus hard pulls, income in the score) absent;
  no mechanism (utilisation as reported on the statement); noun-swappable.
- **D5 (severe).** No misconceptions section at all, with four debt-relevant ones
  sitting ready in SOURCES.md.
- **D6 (severe).** No Sources section, no links, no Go deeper. AnnualCreditReport.com
  ("name it; imitators abound"), CFPB pages and worksheets, and the FTC/IdentityTheft.gov
  link SOURCES.md mandates for this lesson all missing.
- **D7 (severe).** Secured versus unsecured never distinguished; the safety framing
  SOURCES.md calls mandatory is absent (the table mixes the two kinds without the
  concept; nothing arms the reader against equity/retirement consolidation traps).
- **D8 (severe).** Quiz fails the transfer test: all three questions are phrase
  recognition of sentences in the text.
- **D9 (moderate).** Cushion-versus-debt ordering settled in six table words ("Pay off
  before saving beyond the starter fund"), with "starter fund" undefined; the contested
  treatment deferred here from lesson 2 never happens.
- **D10 (moderate).** Mechanisms missing throughout: how issuers compute minimums, why
  percent-of-balance minimums shrink, how daily compounding on a card works.
- **D11 (moderate).** "Good debt, bad debt" is stock two-paragraph framing that survives
  noun-swapping; no number, named example, or expert nuance.
- **D12 (moderate).** No connections to lessons 1, 2, or forward to lesson 4's
  compounding (the natural "same force, working for you" link).
- **D13 (minor).** Reason-to-care thin; no stake in the opening.
- **D14 (minor).** Practice present but weak; no worked-example-then-problem sequence;
  no predict/checkpoint blocks.
- **D15 (minor).** US-specificity of credit scores unlabelled.

### Fact-check (Part 2)

- **F1 (severe).** No sources anywhere: a dozen checkable claims, zero citations, zero
  links, no Sources section (2.1, 4.5).
- **F2 (moderate).** Student loan "3–8%" stale and wrong at both ends: federal rates for
  2026–27 are 6.52% undergraduate, 8.07% graduate, 9.07% PLUS; nothing near 3% is
  available to a new borrower.
- **F3 (moderate).** "Mortgage 3–7%... usually the cheapest debt you'll ever have" stale
  and currently false comparatively: 30-year fixed averaged about 6.7% (Freddie Mac PMMS,
  Sep 2026), above average new-car loans (6.39%, Experian Q1 2026) and undergraduate
  federal loans (6.52%).
- **F4 (moderate).** The "$5,000 at 22%, over 20 years" claim true only under unstated
  assumptions: with the common interest-plus-1%-of-balance minimum ($25 floor) it is
  19.2 years and $8,100 interest (just under 20); with a flat 2%-of-balance minimum,
  80.7 years and $43,419. Verified: adding $50/month drops it to 5.6 years and $2,830.
- **F5 (minor).** Card interest mechanics simplified without saying so: cards charge a
  daily periodic rate on average daily balance, and carrying a balance forfeits the
  grace period; "before reducing the balance by a cent" slightly overstates.
- **F6 (moderate).** Secured/unsecured distinction absent (safety warning a competent
  instructor would give; 2.5).
- **F7 (minor).** Payday "300%+" understates the typical case: CFPB puts the standard
  $15-per-$100 two-week loan at 391% APR.
- **F8 (minor).** Credit callout accurate but omits the carrying-a-balance myth and the
  statement-utilisation mechanism.
- **Verified correct:** 24% APR ≈ 2%/month and the $40-on-$2,000 arithmetic (daily-rate
  method gives $39.45); card range 18–30% brackets the Fed G.19 average (22.15%, Q2
  2026); car 5–12% matches Experian Q1 2026 (6.39% new, 11.43% used); avalanche and
  snowball definitions; the three credit factors named cover ~75% of the FICO model;
  quiz answer indices match their intended options.

### Neutrality (Part 3; money is a 3.4 domain)

Perspectives checked: Ramsey adherents; behavioural researchers; mainstream CFP/academic
planners; debtors in hardship; consumer advocates; non-US readers; lenders' side.

- **N1 (severe).** Avalanche versus snowball resolved by shrug with the behavioural
  evidence omitted: avalanche gets its full argument, snowball gets folk psychology
  ("quick wins"), and "Either works" dissolves a real measured trade-off (snowball
  completes more often; avalanche costs less when completed). Fails 3.1, 3.2, and 3.3's
  motivated-framing rule.
- **N2 (severe).** Ramsey-derived sequencing asserted as settled and unattributed:
  "Pay off before saving beyond the starter fund" embeds one guru's answer as a table
  fact (2.5 violation), uses his vocabulary as neutral terminology, and never takes up
  the deferred cushion-versus-debt question or the employer match.
- **N3 (moderate).** "Good debt, bad debt" moralises ("almost always a bad trade")
  instead of describing the mechanism; "a home" as an asset "likely to grow" imports the
  contested rent-versus-buy question as settled.
- **N4 (moderate).** Contested characterisations stated as fact in the table: student
  loans "often manageable" (millions in hardship would not sign it), mortgage character
  label undated, "get out at any cost" hyperbole that read literally endorses the moves
  the safety guidance forbids.
- **N5 (moderate).** US credit-score machinery presented as universal, unlabelled.
- **N6 (moderate).** Mandated safety framing missing: secured versus unsecured, the
  consolidation-into-secured-debt trap, no CFPB/FTC links.
- **N7 (minor).** The only payoff-method quiz question tests the avalanche definition;
  the assessment layer quietly privileges avalanche.
- **N8 (minor).** "Minimum payments are designed to keep you in debt" attributes intent
  as established fact; attribute or replace with the mechanism.

### Pedagogy (Part 4)

- **P1 (severe).** No objectives in frontmatter (4.1).
- **P2 (severe).** Quiz all recall, zero application (4.3 requires at least half).
- **P3 (severe).** No explain field on any question.
- **P4 (severe).** No :::predict or :::checkpoint blocks; no free recall before the quiz.
- **P5 (severe).** No media at all: zero links, zero figures; the canonical chart
  (balance over time under minimum-only versus minimum-plus-$50, from real amortisation
  arithmetic) missing where the numbers are the point.
- **P6 (moderate).** Answer indices 1, 2, 1: indices 0 and 3 never used;
  "never-first-never-last" scores 100%; Q3's correct option is the one long serious
  sentence among throwaways ("They are illegal").
- **P7 (moderate).** Exercise asks for a debt inventory and method choice never shown
  done; zero fully worked examples precede it (4.2, 1.2).
- **P8 (moderate).** Snowball taught without its evidence (elaboration failure; also N1).
- **P9 (moderate).** No connections to lessons 1–2 or forward to lesson 4; no Go deeper.
- **P10 (moderate).** minutes: 25 wrong in both directions: ~3 minutes of prose, but the
  exercise is 30–60 minutes of real statement work.
- **P11 (minor).** Credit callout misses the top misconception and the US label.
- **P12 (minor).** No desirable difficulty: nothing makes the learner compute or compare
  methods on a concrete debt set.

### Voice (style guide)

- **V1 (severe).** Fails the read-aloud test: a listicle, not a professor; nearly
  everything asserted, almost nothing explained ("No professor explains avalanche vs
  snowball in 40 words").
- **V2 (severe).** Zero think-while-reading blocks; the minimum-payment trap is a
  perfect predict candidate and the lesson wastes it.
- **V3 (severe).** Rules before examples throughout; definitions first, cases second,
  against the guide's own exemplars.
- **V4 (moderate).** One-line-moral tic as the dominant register ("Either works.",
  "Emergency. Get out at any cost."); "paying a fee for the privilege" restates with
  drama.
- **V5 (moderate).** Bullets and table fragments carry the teaching; formatting
  substitutes for writing.
- **V6 (moderate).** No teacherly "I", no admitted limits (the genuinely contested
  payoff-order evidence goes unadmitted), thin second person.
- **V7 (minor).** "Trap" twice; genre-cliché heading, borderline not violation.
- **V8 (minor).** Bold-as-emphasis tips past first-definition use.
- **V9 (minor, clean checks).** No em dashes, no banned AI vocabulary; en dashes only in
  numeric ranges. Worth preserving: the 24%-to-2%/month translation and $2,000/$40
  example; the APR-by-debt-type table's substance; "the best method is the one you will
  actually stick to" as a sentence (not as the whole explanation); the $5,000 at 22%
  scenario as a predict block; the exercise's content; the quiz's topic targeting.
- **V10 (minor).** Heading density: five H2s over ~370 words.

### Verdict

Severe findings in all five passes; every reviewer independently reached "pre-research
placeholder". Rewrite from SOURCES.md, not a patch. Kept from the old lesson: the title,
the 2%-per-month translation, the $2,000/$40 arithmetic, the $5,000-at-22% scenario (now
actually worked), the debt-type table's skeleton (rebuilt with dated 2026 figures and a
secured/unsecured column), the honest stick-to-it sentence, and the debt-inventory
exercise.

### Resolutions applied (2026-09-06, same session)

The lesson was rewritten in full from SOURCES.md, built on the rewritten lessons 1 and 2
(it opens from lesson 2's debt line and closes the cushion-versus-debt question lesson 2
deferred here). Finding by finding:

- **D1/D13/P10**: full rewrite, ~2,900 words of body; the opening stakes are the CARD
  Act disclosure box (decades, interest exceeding the debt); minutes raised to 55 with
  the exercise's 20-to-40-minute look-up named in the exercise itself.
- **D2/F4/P5/P7/V2**: the minimum-payment schedule is now the lesson's central worked
  example, computed month by month during this session (minimum = interest + 1% of
  balance, $25 floor, 22% APR ÷ 12): first-month split shown ($142 paid, $50 to
  principal), 230 months / 19.2 years / $8,100 interest at the minimum, 67 months /
  $2,830 with $50 extra, delivered as a predict block plus an SVG two-line chart drawn
  from the computed series (site palette tokens with fallbacks, 15px+ labels, title and
  desc, caption naming every assumption). The old unstated-assumptions "over 20 years"
  claim is replaced by the computed 19-years-2-months figure, with the 2%-flat-minimum
  80-year variant noted.
- **D3/N1/P8**: avalanche versus snowball is now the contested empirical question
  SOURCES.md classifies: both positions in their proponents' terms, the snowball side
  carrying its actual evidence (Gal and McShane 2012, DOI-linked and resolution-checked;
  Kettle, Trudel, Blanchard and Häubl 2016, correct JCR citation found and verified this
  session after the drafted DOI proved wrong), the honest summary ("avalanche costs less
  if you finish, snowball makes finishing more likely"), what would settle it (an RCT on
  completion and interest), and a computed worked comparison (Sam's two cards: identical
  15 months, $781 versus $873, first account closed month 13 versus month 4) so the
  snowball premium is a number, not a vibe.
- **D4/D5/F8/P11/N5**: credit scores are now a full US-labelled machinery section
  (payment history, statement utilisation, soft versus hard pulls, income not in the
  score), CFPB-linked, with the carrying-a-balance myth killed inside a predict block
  and again in What people get wrong; AnnualCreditReport.com named as the one federally
  mandated free source with the imitator warning.
- **D6/F1/P5/P9**: body links primary sources throughout (CFPB Ask pages and hubs, Fed
  G.19, Freddie Mac PMMS, Experian, studentaid.gov, both studies' DOIs,
  AnnualCreditReport.com, IdentityTheft.gov); eleven-item Sources section plus a
  computation note; Go deeper added (CFPB credit hub, Khan Academy Loans and Debt, Gal
  and McShane, Kapoor chs. 6-7). The FTC/IdentityTheft.gov fraud link SOURCES.md
  mandates for this lesson is in, tied to report-checking and debt-collector
  verification (CFPB debt-collection rights linked).
- **D7/F6/N6**: secured versus unsecured is now its own section and a column in the
  rates table, and the consolidation trap callout delivers the mandated safety
  guidance: home-equity consolidation converts unsecured debt to foreclosure exposure;
  retirement withdrawals trigger taxes, penalties, and loss of creditor protection;
  "run the worst case, not just the interest saved."
- **D9/N2**: the cushion-versus-card-versus-match section answers what lesson 2
  deferred: the employer match presented as the near-consensus first claim (instant
  50-to-100% return), and past it the three positions (Ramsey's Baby Steps, the
  arithmetic school, the behavioural-resilience school with lesson 2's Vanguard
  evidence) presented fairly with the choose-by-failure-mode framing. "Starter fund"
  no longer appears as unattributed vocabulary.
- **D10/F5**: mechanisms added: daily periodic rate on average daily balance, grace
  period forfeiture, why a percent-of-balance minimum shrinks with the balance. The
  "before reducing the balance by a cent" overstatement is gone (the $142/$50 split
  replaces it).
- **D11/N3/N4**: "Good debt, bad debt" replaced by "When borrowing makes sense":
  borrowing framed as a price for moving a purchase in time, mortgage described by its
  mechanics (secured, long-term) rather than a character label, student debt given the
  run-the-specific-numbers treatment instead of "often manageable", rent-versus-buy
  explicitly left open, and the moralising ("almost always a bad trade") replaced by
  three neutral questions to ask before borrowing.
- **D12/P9**: Connections section added (lesson 2's debt line backwards; lesson 4's
  identical compounding mechanism forwards; lesson 5).
- **F2**: student loan rates corrected and dated: 6.52% / 8.07% / 9.07% for 2026-27,
  linked to studentaid.gov.
- **F3**: mortgage row rebuilt: about 6.7% (Freddie Mac, September 2026), "among the
  cheapest ways to borrow" with the secured mechanism, not "usually the cheapest debt
  you'll ever have".
- **F7**: payday row now "about 400% APR is typical", CFPB-linked (391% for the
  standard $15-per-$100 two-week loan).
- **N4 (payday hyperbole)**: "Get out at any cost" replaced with "priced so that
  borrowers roll over; treat as an emergency to exit", which no longer literally
  endorses the moves the safety callout warns against.
- **N7**: the payoff-order quiz question now tests the trade-off itself (Jae's case)
  rather than the avalanche definition.
- **N8**: the design-intent claim is attributed ("consumer advocates argue...") and the
  mechanism carries the weight, with the CARD Act disclosure as the checkable fact.
- **P1**: three verb-first testable objectives added.
- **P2/P3/P6**: quiz rebuilt: five 4-option questions, all five application to cases
  not in the text (Nadia, Jae, Priya, the balance-carrying friend, Rosa), every
  question with an explain field teaching the wrong answers, plausible
  half-understanding distractors, answer indices 1, 3, 0, 2, 1 (three indices used, no
  never-first-never-last pattern, correct options not shape-guessable).
- **P4**: two predict blocks (the minimum-payment payoff time; the carrying-a-balance
  myth) and two checkpoints (the 27%/$1,800 mental arithmetic; the "snowball is a
  scam" pushback), plus free recall before the quiz.
- **P12**: desirable difficulty added: the checkpoint makes the reader compute, the
  exercise makes them compute the holding cost of each of their own debts, and the
  quiz's Jae and Rosa items mix method choice with the evidence.
- **D14/P7**: the exercise now follows two fully worked models (the $5,000 schedule;
  Sam's comparison) and asks for the same moves on the reader's own debts, ending with
  the one-sentence commitment and the match look-up.
- **V1/V3/V5/V6/V8/V10**: full voice rewrite: prose carries the reasoning, examples
  before rules, teacherly admissions of what's unsettled and why, second person
  throughout, bold reserved for first definitions (secured/unsecured and the two
  method names), heading density normal for the length.
- **V4**: the one-line-moral register is gone; "the best method is the one you will
  actually stick to" survives in spirit as the worked-out choose-by-failure-mode
  principle rather than a shrug.
- **V7**: "trap" kept once, repointed at the consolidation callout where it names a
  real structural hazard; the "minimum payment trap" heading is gone.

Chose not to fix, and why:

- **The en-dash question (V9)**: ranges are written in words ("6.5 to 9.1%") matching
  lessons 1 and 2; no en or em dashes anywhere.
- **Education-not-advice note**: lesson 1 carries the once-per-course callout (standards
  2.5 requires it once per course); not duplicated here, consistent with the lesson 2
  decision.
- **Scams get a link, not a section**: SOURCES.md's minimum for this course is the
  FTC/IdentityTheft.gov link in the debt or banking lesson, now present; a full fraud
  lesson remains an open scope gap SOURCES.md already logs for the course re-outline.
