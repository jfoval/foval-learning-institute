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

## 2026-09-06 — Lesson 04 (Compounding) — Stage 4 full review

Five fresh-context reviewers (depth, fact-check, neutrality, pedagogy, voice) ran against
`lessons/04-compounding.md` as it stood before this session, measured against
`research/SOURCES.md`, the standards, and the rewritten lessons 1 to 3 it must build on
(lesson 1 owns the Big Three diagnostic including the compounding and inflation questions;
lesson 3 owns compounding working against you and hands this lesson the mechanism-reversed
baton in its Connections section). Like the others, this lesson predates the standards and
the research.

### Depth (Part 1)

- **D1 (severe).** No mechanism anywhere: "Growth is slow, then sudden" restates the
  phenomenon; the lesson never says why (each year's growth is proportional to the current
  balance, so the growth itself grows). Exactly the failure 1.2 warns about.
- **D2 (severe).** No worked examples in the 1.2 sense: the $1,000 table and the
  $245,000/$104,000 figures are asserted end results with no reasoning, no formula, and no
  stated compounding frequency. No simple-plus-wrinkle pair.
- **D3 (severe).** Zero sources, zero links: 7% never attributed, "2 to 3%" inflation
  uncited, rule of 72 bare, placement heuristics bare. Confirms the draft predates the
  research (1.4).
- **D4 (severe).** Required elements missing wholesale: no misconceptions section, no
  connections, no go deeper, no free recall.
- **D5 (severe).** Quiz fails the transfer test: no explain fields, Q2 passable by phrase
  recognition, Q3 re-asks lesson 1's Big Three inflation question almost verbatim.
- **D6 (severe).** "Inflation: the silent tax" and "Where to keep what" are noun-swappable
  generic passages; no data, no named example, no worked case.
- **D7 (moderate).** Expert-test failures: rule of 72 stated with no accuracy bounds (at
  24% the true doubling time is 3.2 years, not "just 3"); "5+ years: invested, so it can
  outpace inflation" presents a contested rule of thumb as settled and hides the risk side;
  the 7% assumption never defended while SOURCES.md stores the Ramsey-12% criticism unused.
- **D8 (moderate).** Overlap instead of connection: the 24%-card example re-treads lesson
  3's ground rather than referencing it, and the lesson never picks up lesson 3's explicit
  handoff ("the identical mechanism, running on savings").
- **D9 (moderate).** SOURCES.md evidence earmarked for this lesson unused: Investor.gov
  calculator ("for lesson 4's exercises"), OpenStax TVM chapters, Kapoor chs. 1 and 18, the
  real-vs-nominal Big Three thread, the costs-compound bridge to lesson 5.
- **D10 (moderate).** Reason to care weak and second-hand; the strongest hook (the last
  decade beats the first three combined) is buried under the table.
- **D11 (moderate).** "Real terms" asserted, not taught: no real ≈ nominal minus inflation
  approximation, and the lesson never resolves whether its own 7% is nominal or real,
  leaving the headline figures internally incoherent.
- **D12 (minor).** ~350 words of body against 25 claimed minutes; thinness as symptom.
- **D13 (minor).** No frontmatter objectives, no quiz explain fields (pattern confirmation
  of the pre-standard draft).

### Fact-check (Part 2)

- **F1 (severe).** The 7% used throughout is never attributed and never identified as real
  or nominal, in a lesson that also teaches inflation. Long-run US equities: about 10%
  nominal, about 7% real, compounded (Damodaran/NYU 1928-2025; Shiller agrees). The fix is
  to state 7% as roughly the long-run inflation-adjusted average for broad US stocks, with
  a source and the past-is-not-promise hedge. The lesson's single most important defect.
- **F2 (severe).** Zero citations, no Sources section, despite SOURCES.md offering exactly
  the right ones.
- **F3 (moderate).** The $200/month example states no compounding assumption and its split
  is internally inconsistent by about $1,000: at 7%/12 monthly the 30-year value is
  $243,994 (growth $171,994, not "$173,000"); with annual compounding it would be only
  $226,706. The 20-year "$104,000" verifies ($104,185).
- **F4 (moderate).** "Prices rise, typically 2 to 3% a year" unsourced and slightly stale:
  defensible long-run, but 2021-2023 hit 8 to 9% and the honest sentence says so; the Fed
  targets 2%.
- **F5 (minor).** Rule of 72 accuracy: exact doubling at 6% is 11.90 years (rule 12.00),
  at 24% is 3.22 (rule 3.00, understating by about 7%); fine as an estimate but the drift
  at high rates deserves a clause.
- **F6 (minor).** Real-rate arithmetic: exact is 1.01/1.03 minus 1 = minus 1.94%; "about
  2%" acceptable.
- **F7 (minor).** Exercise says "any free compound-interest calculator"; SOURCES.md
  designates Investor.gov's, verified live.
- **Verified correct:** every row of the $1,000-at-7% table to the dollar; "the last decade
  adds more than the first three combined" ($7,362 versus $6,612); all three quiz answer
  indices under 0-indexing; the $104,000 20-year figure.

### Neutrality (Part 3; money is a 3.4 domain)

Perspectives checked: mainstream academic finance; Bogleheads/passive practitioners;
Ramsey adherents; risk-averse savers and people who invested through 2000-2009; CFPB
education-not-advice framing; non-US readers.

- **N1 (severe).** The 7% return assumption used throughout as unattributed, unhedged
  fact: the same overreach pattern SOURCES.md flags in Ramsey's 12%, differing only in
  degree. The mechanism is established (3.1); future returns of any magnitude are not.
- **N2 (severe).** Nominal versus real never stated for the 7%: the lesson hands the
  reader the exact tool to interrogate its own headline number and doesn't apply it.
- **N3 (severe).** "Long-term money needs to be invested, not just saved" is prescriptive
  advice asserted in the author's voice (2.5, 3.3); the mainstream position should be
  attributed as consensus with the trade-off stated.
- **N4 (severe).** "Where to keep what" gives flat allocation prescriptions with no
  attribution and no risk acknowledgment; "5+ years... so it can outpace inflation"
  presumes the outcome, and markets have been down over 5- and even 10-year real windows
  (2000-2009). The 2-to-5-year gap between its two bullets is silently skipped.
- **N5 (moderate).** "Typically 2 to 3%" inflation miscalibrated as an unqualified
  "typically" after 2021-2023; one honest clause fixes it.
- **N6 (moderate).** No education-not-advice note on a lesson making allocation
  prescriptions (lesson 1 carries the course note; this lesson must at minimum stop adding
  unhedged prescriptions on top).
- **N7 (minor).** Implicitly US throughout with no label; a sourced 7% should say which
  market's history it comes from.
- **N8 (minor).** Asymmetry a skeptic would spot: the debt-side rate is realistic and
  current, the asset-side rate is the unsourced one. Fixing N1 resolves it.

### Pedagogy (Part 4)

- **P1 (severe).** No objectives key in frontmatter (4.1).
- **P2 (severe).** No explain field on any quiz question (4.3).
- **P3 (severe).** Quiz is three questions, mostly recall, none applying to a genuinely
  new case; Q3 reuses the text's own example verbatim.
- **P4 (severe).** Q2 answerable by option shape: the correct option is the only long,
  serious, mechanism-stating one ("Banks reward loyalty" is a throwaway).
- **P5 (moderate).** Answer indices 1, 1, 2: indices 0 and 3 never used; middle-picking
  wins. (0-indexing itself verified correct.)
- **P6 (severe).** Zero predict/checkpoint blocks, and the two canonical reveals are
  printed in body text: the $245k-versus-$104k cost-of-waiting gap and the year-40 table
  value are textbook predict-then-reveal moments, given away for free. The known drafter
  defect, confirmed.
- **P7 (moderate).** No free recall before the quiz.
- **P8 (severe).** No chart, and a compounding curve is the canonical case where a chart
  from real computed numbers is the point: "slow, then sudden" is a claim about a curve's
  shape, asserted in prose over a six-row table.
- **P9 (severe).** Zero links, no sources, no go deeper (4.5).
- **P10 (moderate).** Exercise ignores the Investor.gov calculator SOURCES.md mandates
  for this lesson, sending learners to ad-laden search results instead.
- **P11 (moderate).** No connections: lesson 3's explicit handoff never picked up, no
  backward link to lesson 2's savings line, no forward bridge to lesson 5 (costs compound
  too).
- **P12 (minor).** minutes: 25 not honest for the current text (about 4 minutes of
  reading); set from the finished lesson.
- **P13 (minor).** No worked-example-with-a-gap, no misconceptions section (obvious
  material: "I'll start when I earn more", linear-growth intuition, nominal-versus-real
  confusion).

### Voice (style guide)

- **V1 (severe).** Listicle register throughout: six headings, a table, and a bullet list
  carry nearly all content; formatting substitutes for writing; fails the read-aloud test.
- **V2 (severe).** Definition-first opening ("Compound interest is interest on interest")
  where the style guide's own second exemplar is literally a model rewrite of this exact
  lesson's opening.
- **V3 (severe).** One-line morals and drama: "Growth is slow, then sudden. That's why
  *time* matters more than *amount*."; "The cost of waiting is enormous."; the
  negation-then-reframe close "invested, not just saved".
- **V4 (severe).** "Inflation: the silent tax" is dramatic salesy framing; "The maths,
  gently" is the cutesy self-aware heading style.
- **V5 (severe).** No think-while-reading apparatus at all; the table's year-40 value is
  the single best predict opportunity in the course and it is given away.
- **V6 (moderate).** No admitted limits: 7% used four times with no word on where it comes
  from or that past returns aren't a promise; no common mistake named anywhere.
- **V7 (moderate).** Zero links or citations against lessons 1 and 3's footnoted register.
- **V8 (moderate).** Frontmatter and quiz below the course's new standard.
- **V9 (minor).** "Where to keep what" is bold-plus-bullets where a paragraph would carry
  the reasoning (why horizon changes the answer).
- **V10 (minor).** Read-aloud failures: "Safety over return." as fragment-profundity;
  "(a credit card, against you)" telegraphic.
- **V11 (minor, clean checks).** No em dashes, no en dashes, no banned vocabulary. Worth
  preserving: the three core demonstrations (the $1,000 table values, the rule of 72 with
  the card inversion, the contribution comparison), "over long periods it does most of the
  work", the last-decade observation (as a predict), and the exercise concept of moving
  your own start date.

### Verdict

Severe findings in all five passes; every reviewer independently reached "pre-research
placeholder". Rewrite from SOURCES.md, not a patch. Kept from the old lesson: the title,
the verified $1,000-at-7% table, the rule of 72 (now with error bounds), the
start-earlier-versus-later comparison (now computed fresh as the 25-versus-35 worked
example), the real-versus-nominal thread (now taught, sourced, and applied to the lesson's
own numbers), and the move-your-start-date exercise (now on Investor.gov's calculator).

### Resolutions applied (2026-09-06, same session)

The lesson was rewritten in full from SOURCES.md, built on the rewritten lessons 1 to 3
(it opens by picking up lesson 3's handoff, grows lesson 2's savings line, and closes
lesson 1's Big Three compounding and inflation questions). Finding by finding:

- **D1/V3**: the mechanism is now the first section and stated precisely: each year's
  gain is proportional to the current balance, every gain joins the balance, so growth
  produces balance and balance produces growth. The $70-then-$74.90 second-year
  computation shows it happening, and a checkpoint ($20,000 versus $40,000 balances)
  tests exactly the proportionality.
- **D2/F3/P13**: two fully worked examples with stated assumptions ($200 a month, 7%
  real compounded monthly at 7%/12, no taxes or fees, all computed this session).
  Example 1: Ava starts at 25 ($524,963 on $96,000) versus Ben at 35 ($243,994 on
  $72,000). Example 2, the wrinkle: Ava saves only from 25 to 35 and stops ($24,000
  contributed) and still finishes ahead of Ben, $280,968 against $243,994. The old
  inconsistent "$245,000/$173,000" figures are gone; every number now matches its own
  stated assumptions to the dollar and the computation note in Sources records the
  method.
- **D3/F2/P9/V7**: body links primary sources throughout (Lusardi, Stango and Zinman
  DOI, Damodaran/NYU dataset, BLS CPI, Investor.gov, OpenStax, the Ramsey critique);
  six-item Sources section plus a computation note; Go deeper added (OpenStax chs. 7-9,
  Investor.gov, Kapoor chs. 1 and 18, the Damodaran dataset).
- **D4/P13**: What people get wrong section added (small amounts, grew-so-richer
  nominal confusion, too-late-to-start, projection-as-promise), each corrected with the
  evidence; Connections and Go deeper sections added; free recall added to the exercise.
- **D5/P2/P3/P4/P5**: quiz rebuilt: five 4-option questions, all application to cases
  not in the text (Keiko, the 36% loan, the 12% seminar, Dev's funds, Milo's deposit),
  every question with an explain field teaching the wrong answers, plausible
  half-understanding distractors, answer indices 2, 0, 3, 1, 2 (all four indices used,
  no pattern). The old Q3 that duplicated lesson 1's Big Three item is gone; the
  inflation idea is now tested through application (Milo, and the 12% projection).
- **D6/V4/V9**: "Inflation: the silent tax" replaced by "Real versus nominal", which
  teaches the conversion (real is roughly nominal minus inflation, exact figure given),
  sources the CPI history including the 2022 spike, and ties inflation to the rule of
  72 (3% halves buying power in about 24 years). "Where to keep what" replaced by
  "Matching money to timescales", a reasoned paragraph on which risk operates on which
  horizon instead of two bare bullets.
- **D7/F5**: rule of 72 now carries its accuracy bounds (near-exact at 8%, 35 versus 36
  years at 2%, 3.2 versus 3.0 years at 24%) and the doubling-count reading of the
  40-year table.
- **D8/P11**: the lesson now opens from lesson 3's handoff (the $5,000 card as the
  sign-flipped case), the 22%-card checkpoint references lesson 3 instead of re-teaching
  it, and the Connections section runs backwards to lessons 1 to 3 and forwards to
  lesson 5.
- **D9/F7/P10**: Investor.gov's calculator is now the exercise's named tool, with the
  regulator's no-ads rationale; OpenStax TVM chapters linked in the exercise and Go
  deeper; Kapoor chs. 1 and 18 in Go deeper; the costs-compound bridge to lesson 5 is
  its own section, computed (7% versus 6% over 40 years: $524,963 versus $398,298, the
  1% fee costing about $127,000, a quarter of final wealth).
- **D10/V2**: the definition-first opening is gone; the lesson opens from lesson 3's
  19-year card and the claim the lesson will earn (the compounding does more of the
  work than you do), with the Stango-Zinman exponential-growth-bias evidence for why
  the reader's intuition needs the lesson.
- **D11/F1/F6/N1/N2**: the 7% is now attributed and defined before it is built on:
  "Where the 7% comes from, and what it isn't" states it as the 1928-2025 US
  large-cap real compounded average (about 10% nominal minus about 3% inflation),
  Damodaran-linked, with the hedges given as content, not fine print (minus 37% to
  plus 50% single years, the negative real 2000-2009 decade, one country's unusually
  successful market, no obligation to repeat). The lesson states its convention (all
  figures in today's buying power) and the exercise's step 5 makes the reader apply
  the nominal-versus-real correction themselves.
- **F4/N5**: inflation now sourced (BLS CPI): about 3% century average, Fed-adjacent
  2% expectations dropped in favour of the checkable history, and the 2022 spike above
  9% named so "typical" no longer overclaims.
- **N3/N4/N6**: prescriptions removed or attributed. "Needs to be invested, not just
  saved" is gone; the honest case for investing long-term money is argued from the
  certainty of inflation loss versus the historical (explicitly unpromised) washing-out
  of market wobbles. Timescale guidance is attributed to "planners and regulators
  alike", the 2000-2009 counterexample is in the text, the awkward 2-to-5-year middle
  is acknowledged as genuinely contested, and the section ends by restating lesson 1's
  education-not-advice position ("that decision stays yours").
- **N7/N8**: the return figure is labelled as US stock history; the chart caption and
  the "one country's" hedge carry the label; the asset-side rate is now the sourced one.
- **P1**: three verb-first testable objectives added to frontmatter.
- **P6/P7/V5**: two predict blocks, both hiding this lesson's canonical reveals (the
  year-40 table value, shown only through year 30 in the table; and the Ava-stops-at-35
  wrinkle), two checkpoints (the balance-proportionality pair; the 22% card doubling
  time), and free recall before the quiz.
- **P8**: an SVG chart of the two computed curves added (Ava from 25 in navy, Ben from
  35 in oxblood, yearly points computed this session), site palette tokens with
  fallbacks, 15px+ text, title and desc, labels inside the viewBox, caption stating
  every assumption and the illustration-not-forecast hedge.
- **P12**: minutes set to 40 from the finished lesson (about 15 minutes of reading plus
  the five-step calculator exercise and recall).
- **V1/V6/V10**: full voice rewrite: prose carries the reasoning, examples before
  rules, second person, contractions, admitted limits throughout (the hedges section,
  "no one can promise it", "'historically' is doing real work in that sentence");
  "Safety over return" and the telegraphic parentheticals are gone.
- **V3**: the one-line morals are gone; "slow, then sudden" survives only as the
  mechanism's explained consequence ("the early years feel pointless... the late years
  feel like magic... both are the same loop observed at different points").

Chose not to fix, and why:

- **Duplicate education-not-advice callout**: not added, consistent with lessons 2 and
  3; lesson 1 carries the once-per-course note (standards 2.5) and this lesson now
  references it in the timescales section instead of re-printing it.
- **Video**: none added. The chart carries the curve, and no candidate video teaches
  the mechanism better than the worked numbers here; lesson 5's media pass is the
  natural home for an investing explainer if one earns its place.
- **The 45-to-55-year-old reader**: handled in-text (the "not a deadline" caution and
  misconception) rather than with a separate worked example, to keep the lesson to one
  sitting; if learner feedback asks for a late-starter example, the feedback loop owns
  that addition.

## 2026-09-06 — Lesson 05 (Investing) — Stage 4 full review

Five fresh-context reviewers (depth, fact-check, neutrality, pedagogy, voice) ran against
`lessons/05-investing.md` as it stood before this session, measured against
`research/SOURCES.md`, the standards, and the rewritten lessons 1 to 4 it must build on
(lesson 1 owns the Big Three diagnostic including the diversification question; lesson 4
owns compounding, the attributed 7% real return, and hands this lesson the
costs-compound thread and the where-should-long-term-money-sit question). Like the
others, this lesson predates the standards and the research.

### Depth (Part 1)

- **D1 (severe).** The SPIVA evidence, earmarked in SOURCES.md as this lesson's primary
  data, is entirely unused: "decades of evidence show that most professional fund
  managers fail to beat the index" is the unsourced, noun-swappable gesture, with the
  79%-in-2025 figure, the no-category-majority-over-15-years result, the 94% over 20
  years, the persistence scorecard, and Sharpe's arithmetic all sitting in the research
  file uncited.
- **D2 (severe).** No mechanisms anywhere: a stock, bond, and fund get one bullet each
  with no account of what a share actually is, why a bond is steadier, why
  diversification removes single-company risk without giving up expected return (the
  third Big Three question), or why fees compound. Rules with no way to adapt them.
- **D3 (severe).** Zero worked examples (1.2 requires two, one with a wrinkle); the fee
  claim, the match arithmetic, and the expense-ratio comparison all arrive unworked.
- **D4 (severe).** No Sources section, no Go deeper, not a single link; the ready list
  in SOURCES.md (Sharpe free on Stanford's site, Bogle, Bernstein's free If You Can,
  Bogleheads wiki, FINRA analyzer, Investor.gov) is completely absent. Written from
  general knowledge, which 1.4 forbids.
- **D5 (severe).** Misconceptions section missing, with two owned by this lesson in
  SOURCES.md (you need to pick stocks; past performance picks winners) and the honest
  active-versus-passive scope caveat also absent.
- **D6 (moderate).** Quiz is phrase recognition throughout; zero application; fails the
  transfer test.
- **D7 (moderate).** "Risk and time" asserts three checkable statistics with no source
  and no mechanism, and no honest scope note on "essentially always up".
- **D8 (moderate).** "Big decisions: a framework" is an orphaned noun-swappable stub;
  rent-versus-buy belongs to the course re-outline SOURCES.md already logs, not to
  three generic questions here.
- **D9 (moderate).** Tax-advantaged accounts get one paragraph with no machinery: no
  account-versus-fund-inside-it distinction, no US labelling of the mechanics.
- **D10 (minor).** Connections implicit at best; no callback to lesson 1's
  diversification question or lesson 4's fee arithmetic.
- **D11 (minor).** Weak reason to care; no stakes in the opening.

### Fact-check (Part 2)

- **F1 (severe).** Zero links and no Sources section against at least six checkable
  claims (2.1, 4.5).
- **F2 (moderate).** "Over 20-year periods, broad markets have essentially always been
  up" true only of the US market in nominal terms: the worst US 20-year windows were
  barely positive after inflation, and Japan's main index did not regain its December
  1989 peak until February 2024, 34 years later. The lesson recommends global funds, so
  the claim needs its scope.
- **F3 (moderate).** "A 1% fee over 30 years at 7% consumes roughly a quarter of your
  final balance" is true only for a lump sum (24.5% computed); with monthly
  contributions the 30-year loss is about 17%, and lesson 4's "about a quarter" figure
  came from 40 years of monthly contributions (22.8 to 24.1%, verified). Neither lesson
  stated its assumptions; the two reach "a quarter" by different routes.
- **F4 (minor).** "Markets drop 10% most years" defensible (about six years in ten) but
  the citable framing is that the average year sees an intra-year decline of about 14%;
  "30% or more every decade or so" checks out (1968-70, 1973-74, 1987, 2000-02,
  2007-09, 2020).
- **F5 (minor).** Bogle quote genuine but from *The Little Book of Common Sense
  Investing* (2007), which should be named; original ends with an exclamation mark.
- **F6 (minor).** Match "50 to 100% instant return" right in range (most common formula
  is 50 cents per dollar up to 6% of pay, per Vanguard's research) but ignores the cap
  and vesting.
- **F7 (minor).** No objectives in frontmatter, and the prose ("take all of it before
  anything else") contradicts the numbered plan's ordering without explanation.
- **Verified correct:** the Bogle quote's substance and attribution; "fees often under
  0.1%" (ICI 2025: index equity mutual funds averaged 0.05% asset-weighted); the
  stock/bond/fund and 401(k)/IRA/ISA definitions; all three quiz answer keys; SPIVA
  supports "most managers fail to beat the index". Exact current SPIVA figures pulled
  from the primary PDF this session (SPIVA U.S. Mid-Year 2025, periods to 30 June
  2025): active large-cap funds underperforming the S&P 500: 72.61% over 1 year,
  64.87% over 3, 86.91% over 5, 85.98% over 10, 88.29% over 15, 91.03% over 20; all
  domestic funds versus the S&P 1500 over 20 years: 93.81%; no US equity category has
  a majority of active funds ahead over 15 years. Year-End 2025 scorecard: 79% of
  active large-cap funds underperformed the S&P 500 in calendar 2025. Persistence
  Scorecard (Year-End 2024): of large-cap funds in the top quartile as of 2020, 0.0%
  remained top-quartile four years later; 2.42% of top-half large-cap funds stayed in
  the top half over five years.

### Neutrality (Part 3; money is a 3.4 domain)

Perspectives checked: active-management professionals; factor/dimensional investors;
Ramsey adherents; risk-averse savers near retirement; non-US readers (including the
Japanese counterexample); sceptics of US-return extrapolation; behavioural-finance
readers.

- **N1 (severe).** The 20-year-returns claim is a contested-scope claim presented as
  settled, with no source and no US label (3.1, 3.3); the main way bias enters, on the
  lesson's most consequential empirical claim.
- **N2 (moderate).** The active-versus-passive core is correctly not false-balanced,
  but the honest-scope sentences SOURCES.md explicitly requires are all missing: the
  claim is about the average investor after costs; factor views get their sentence;
  the market-can't-be-100%-indexed argument gets its sentence. An active professional
  or factor investor fails the 3.2 Turing test by omission.
- **N3 (moderate).** "Take all of it before anything else" is a flat command that
  contradicts the lesson's own plan two paragraphs later, glosses vesting, and quiz Q3
  marks the Ramsey position (pause all investing until debt is gone) simply wrong
  instead of presenting the consensus as attributed consensus with the named dissent.
- **N4 (moderate).** Risk side under-weighted relative to the prescriptions: 7% used
  without its label, "not panicking" universalised, bonds defined and then never used
  (the more-bonds-as-the-goal-nears standard move is absent).
- **N5 (minor).** "Founder of Vanguard" beside buy-index-funds advice functions as soft
  provider endorsement; SOURCES.md says teach the category and point at regulators'
  tools, and no regulator tool is linked.
- **N6 (minor).** "Big decisions made on feel are where most financial damage happens"
  is unfalsifiable and unattributed.
- **N7 (minor).** "The largest 500 in a country" is a US-shaped description presented
  as generic; the accounts paragraph otherwise labels countries correctly.
- **Checked, no finding:** the education-not-advice callout is not a duplicate
  (lesson 1 carries the course note; this lesson touches investment decisions most
  directly), and the lesson correctly declines to false-balance indexing.

### Pedagogy (Part 4)

- **P1 (severe).** No learning objectives (4.1).
- **P2 (severe).** Quiz fails 4.3 on every criterion at once: no explain fields, all
  three answers index 1, zero application, shape-guessable distractors ("It is
  refunded on withdrawal").
- **P3 (severe).** No predict or checkpoint blocks, and both canonical reveals (how
  few professionals beat the index; what a 1% fee costs) are printed in plain body
  text. No free recall before the quiz.
- **P4 (severe).** No worked examples anywhere; the exercise asks the reader to judge
  an expense ratio against 0.5% without ever seeing the arithmetic that makes that
  number meaningful.
- **P5 (severe).** Media absent entirely: no link, figure, or chart; the canonical
  chart (SPIVA underperformance shares by horizon, from the actual scorecard) is
  exactly 4.5's numbers-are-the-point case and is missing.
- **P6 (moderate).** No Connections section; lesson 4's costs-compound handoff arrives
  as one unelaborated sentence; lesson 1's diversification setup never called back.
- **P7 (moderate).** No Go deeper section.
- **P8 (moderate).** minutes: 30 misstates the current ~450-word lesson (about 10
  minutes as shipped); set honestly from the finished lesson.
- **P9 (minor).** The rent-versus-buy paragraph is a bolted-on second topic with no
  worked case and no practice; cut or spin out.
- **P10 (minor).** Rule-first bullet definitions open the body against
  examples-before-rules.

### Voice (style guide)

- **V1 (severe).** No think-while-reading apparatus at all.
- **V2 (severe).** Formatting substitutes for writing: seven headings over ~45 lines,
  bullet-definition teaching, single-paragraph sections.
- **V3 (severe).** Rules without examples; fact-stating without teaching; the guide's
  own compound-interest exemplar shows exactly what the fee paragraph should be and
  isn't.
- **V4 (moderate).** Professor register missing: no teacherly "I", no named
  misconception, no admitted limits beyond the legal callout.
- **V5 (moderate).** The opening is negation-then-reframe landing on a triad; right
  stance, banned shape.
- **V6 (minor).** One-line-moral tic twice ("Fees compound too, against you."; "Big
  decisions made on feel...").
- **V7 (minor).** En dash in quiz Q3 ("50–100%") where the body writes "50 to 100%".
- **V8 (minor).** No objectives in frontmatter; minutes optimistic.
- **Clean checks:** no em dashes, no banned AI vocabulary, no salesy talk, contractions
  present, Bogle blockquote legitimately a quotation, bold confined to first uses, the
  callout used correctly, a real do-it-now exercise. Worth preserving: the opening's
  stance (reshaped), the haystack quote (properly cited), the five-step plan, the
  match framing, the education-not-advice callout, the exercise's concrete actions,
  and the three quiz topics (as application items).

### Verdict

Severe findings in all five passes; every reviewer independently reached "pre-research
placeholder", and the depth reviewer's arithmetic is decisive: at ~660 words against
siblings at 2,900 to 4,700, patching means writing most of the lesson anyway. Rewrite
from SOURCES.md. Kept from the old lesson: the title, the stance, the haystack quote,
the plan's ordering, the callout, the exercise's two concrete actions, and the quiz's
three topics rebuilt as application.

### Resolutions applied (2026-09-06, same session)

The lesson was rewritten in full from SOURCES.md, built on the rewritten lessons 1 to 4
(it opens from lesson 4's fee handoff, closes lesson 1's third Big Three question, and
recaps lesson 3's match ordering with this lesson's machinery attached). Finding by
finding:

- **D1/F1/P5**: the SPIVA record is now the lesson's evidential spine, with real
  figures verified this session against the primary scorecard PDF (SPIVA U.S. Mid-Year
  2025, downloaded from spglobal.com and read directly; the year-end 2025 PDF is
  bot-blocked, so its 79% calendar-2025 figure was cross-checked through press
  coverage of the release and is attributed to its edition). An SVG bar chart of the
  six-horizon underperformance shares (73/65/87/86/88/91% at 1/3/5/10/15/20 years,
  with the 50% coin-flip reference line) is drawn from the scorecard's Report 1a,
  caption naming the edition, palette tokens with fallbacks, 15px+ text, title and
  desc, no blank lines.
- **D2**: mechanisms throughout: what a share actually is (a claim on future profits
  and residual assets, which is why its value exists and why it swings), why a bond is
  steadier (contractual payments senior to equity), the fund as container, and the
  compensated-versus-uncompensated risk mechanism behind diversification (the market
  pays only for risk you can't diversify away, so single-stock risk is
  lottery-ticket risk without lottery-ticket expected winnings).
- **D3/P4/F3**: two fully worked examples. Example 1 (simple): Rosa's two funds
  tracking the same index at 0.05% versus 1.00%, computed this session at stated
  assumptions ($300/month, 30 years, 7% gross compounded monthly): $362,401 versus
  $301,355, a $61,046 gap, about 17% of the larger balance, with the
  assumption-dependence taught explicitly (lesson 4's 40-year version gives about
  24%, resolving the two lessons' previously unstated and inconsistent "a quarter"
  claims). Example 2 (the wrinkle): the brochure fund, worked through the persistence
  scorecard's 0.0% top-quartile-repeat result to show why the one thing an ad can
  prove is the one thing that doesn't transfer.
- **D4/P7**: body links primary sources throughout; fourteen-item Sources section
  plus a computation note; Go deeper added (Bernstein's If You Can via Bogleheads,
  Sharpe's paper, Bogle's Little Book, Bogleheads getting-started wiki, the SPIVA
  scorecards themselves).
- **D5/N2**: What people get wrong section added (picking stocks, past performance,
  the account-is-an-investment confusion, cheap-means-worse), and the honest-scope
  paragraph delivers all three required sentences: the claim is about the average
  investor after costs; the factor/dimensional view gets its sentence; the
  markets-need-active-traders argument gets its sentence, attributed to active
  managers and marked correct. Index funds are framed as the evidence-backed default,
  not a revealed truth.
- **D6/P2**: quiz rebuilt: five 4-option questions, all application to cases not in
  the text (Tomas, the advertised fund, Ines, Lena, Priya), every question with an
  explain field teaching the wrong answers, plausible half-understanding distractors,
  answer indices 3, 0, 2, 1, 3 (all four indices used, no pattern, correct options
  not shape-guessable).
- **D7/F4/N1/F2**: the risk section is now sourced and scoped: average intra-year
  decline about 14% (LPL), 30%+ falls about once a decade with the actual episode
  list verified, the 20-year claim restated as the US nominal record with the
  barely-beat-inflation caveat and the Japan 1990-2024 counterexample
  (Bloomberg-linked), which is also given as the argument for world funds. The
  minus-37% year and negative real 2000-2009 decade carry over from lesson 4's
  Damodaran sourcing.
- **D8/N6/P9**: the rent-versus-buy stub is cut entirely; big-decision frameworks
  belong to the course re-outline SOURCES.md already logs, and the unfalsifiable
  "most financial damage" line went with it.
- **D9/N7**: accounts are now an explicitly US-labelled machinery section: the 401(k)
  as container-not-investment (the plan-menu point), the match with its most-common
  formula sourced to Vanguard's research, the cap and vesting caveats, the IRA in a
  sentence, no contribution limits quoted (IRS.gov linked instead per SOURCES.md),
  Investor.gov linked, UK parallel named in passing; "the largest 500 in a country"
  replaced by the S&P 500 named as what it is.
- **D10/P6**: Connections section added (Big Three closed; lesson 2's savings line
  and cushion; lesson 3's ordering as the on-ramp; the course's honest remaining
  gaps pointed at Khan Academy per SOURCES.md's link-don't-duplicate note).
- **D11**: the opening now carries stakes: lesson 4's $127,000 fee number and the
  open where-does-long-term-money-sit question.
- **F5**: the Bogle quote is cited to The Little Book of Common Sense Investing with
  the original exclamation mark restored, and Bogle is identified as the builder of
  the first index fund for ordinary investors rather than by his company (also
  resolving N5's soft-endorsement concern; the only tools named are regulators':
  FINRA's analyzer, Investor.gov, IRS.gov).
- **F6/N3**: the match is taught with its cap and vesting footnotes, the "take all of
  it before anything else" command is gone, the ordering is presented as lesson 3's
  worked analysis with the Ramsey pause-everything position named fairly as the main
  dissent (and again in quiz Q5's explain), and the internal contradiction with the
  old numbered plan is resolved by removing the plan in favour of the
  ordering-with-reasons.
- **F7/P1/V8**: three verb-first testable objectives added.
- **N4**: the risk side now gets its own section ahead of any action: the 7% carries
  its lesson-4 attribution and illustration-not-promise label, bonds return in the
  shift-toward-bonds-near-the-goal guidance (attributed to standard planner and
  regulator advice, with the judgment left to the reader per lesson 1's callout),
  and the cushion is named as what makes holding through a crash possible.
- **P3/V1/V5**: two predict blocks, both hiding this lesson's canonical reveals (the
  20-year SPIVA share; the 0.0% persistence result), two checkpoints (the
  employer-stock cousin; the 0.9%-fund hurdle), and free recall before the quiz. The
  negation-then-reframe triad opener is gone; the stance survives as a plain
  sentence.
- **P8**: minutes set to 45 from the finished lesson (about 18 minutes of reading
  plus the three-look-up exercise and recall).
- **P10/V2/V3/V4/V6**: full voice rewrite: examples before rules (the profit-claim
  walk-through before "share" is defined), prose carrying the reasoning, teacherly
  admissions ("that sounds like settling", the honest-scope paragraph, "nobody knows
  which country's history the next forty years will resemble"), second person,
  contractions, the one-line morals gone.
- **V7**: the en dash in quiz Q3 is gone with the old quiz; ranges are written in
  words throughout.

Also done, per the safety-critical guidance in SOURCES.md:

- **Scams callout added** (the course's first): the SEC's three red flags
  (guaranteed returns, urgency, unregistered sellers) with Investor.gov and FTC
  links; the full fraud lesson remains an open scope gap for the re-outline.
- **No funds, tickers, or providers named**, and the lesson says so explicitly and
  says why.
- **Education-not-advice**: not duplicated; lesson 1 carries the once-per-course
  note (the neutrality reviewer's grep missed it because lesson 1's callout is
  titled "Education, not advice") and this lesson references it at the
  allocation-judgment moment, consistent with lessons 2 to 4.

Chose not to fix, and why:

- **The persistence scorecard edition**: the Year-End 2024 persistence figures are
  cited rather than the newer Year-End 2025 edition, because the 2024 numbers were
  verified this session and the 2025 PDF is bot-blocked; the Go deeper entry sends
  readers to the live scorecard page, and the annual SPIVA refresh is a natural
  feedback-loop maintenance task for this lesson.
- **No video**: no candidate teaches Sharpe's subtraction or the SPIVA bars better
  than the worked text and chart; if a media pass later wants one, an index-fund
  explainer would go beside the "Two ways to run a fund" section.
- **Course-end test**: standards 4.4 requires one for courses of six or more
  lessons; the course has five, and the assessment question belongs with the
  re-outline that will add the missing topics (insurance, taxes, housing, fraud),
  as SOURCES.md already logs.

---

## Lesson 6, "What you actually keep" (taxes). Stage 4, 2026-09-06

First Stage 4 on a lesson drafted from OUTLINE.md rather than inherited from the placeholder
course. Five reviewers in fresh context: depth, fact-check, neutrality, voice, pedagogy. Verdict:
substance strong, arithmetic wrong in two places, voice not yet the course's voice, and one
process failure worth recording.

### The process failure, recorded first because it is the reusable lesson

The neutrality auditor pointed out that this lesson was drafted for a 3.4-sensitive domain with
**no tax research in SOURCES.md at all**. SOURCES.md listed taxes as a scope gap and gave one
instruction ("IRS.gov for anything tax-adjacent, state the year"), so every source in the draft was
found during drafting. That is the direct cause of the lesson's worst neutrality finding: it
asserted a contested claim about top-end effective rates because no research entry existed saying
the claim was contested or who the parties were. **Fixed by adding a full "Taxes" section to
SOURCES.md before applying any lesson fix**, covering the mechanics sources, the benefit-cliff
literature, and four contested questions with their positions. Lessons 7 to 10 should get the same
treatment before drafting: check that SOURCES.md actually covers the lesson's domain, and run
Stage 1 on the gap if it does not.

### Blocking findings, all fixed

1. **Wrong arithmetic in a predict block.** The draft claimed a $95,000 to $110,000 bonus crossed
   from the 22% into the 24% bracket. It does not: $110,000 minus the standard deduction is
   $94,250 of taxable income and the 22% bracket runs to $103,350. The tax figure ($15,997) and the
   kept amount ($11,350) were both wrong; correct are $15,649 and $11,700. Caught independently by
   depth, fact-check, voice and pedagogy. Fixed by rewriting the block as a checkpoint whose
   teaching point is now the better one: she is not where she thinks she is on the table, because
   people forget the standard deduction sits underneath everything.
2. **Wrong answer key in the practice exercise.** Two of three stated answers were wrong
   ($2,271 and $8,169 against the correct $2,071.50 and $7,949.00) in the exercise whose whole
   purpose is checking your own hand arithmetic. Fixed, and every derived figure in the lesson was
   recomputed from one script rather than by hand.
3. **Deductions taught without itemising.** "A deduction is worth your marginal rate" is false for
   the roughly nine in ten filers who take the standard deduction and gain nothing from another
   itemised dollar. Fixed with a paragraph distinguishing above-the-line from itemised, which also
   hands lesson 7 its hook.
4. **Credits taught without refundability.** "A credit is worth its face value" is true only of
   refundable credits, and the group the error mis-describes is exactly low-income filers. Fixed,
   with the checkpoint answer corrected to carry both questions.
5. **"Neither is a reward or a penalty" was a safety gap.** Under-withhold far enough and the IRS
   charges an underpayment penalty. The lesson had priced over-withholding precisely and never
   priced under-withholding, which also meant an objective from OUTLINE.md had quietly gone
   missing. Fixed with the safe harbours, and the objective restored to the frontmatter.
6. **Opening overclaim.** "For most people that gap is the single largest line in their financial
   life, larger than rent" is unsourced and the lesson's own worked case ($9,661.50 on $60,000)
   refutes it. Replaced with Nadia's actual number.

### Neutrality findings, all fixed

- **Top-end effective rates were asserted, then labelled contested.** Now presented as what it is:
  three methods (IRS SOI via Tax Foundation, Saez and Zucman, Auten and Splinter) that disagree
  about what counts as income and who bears a tax, with all three cited and none adopted.
- **Cliffs were taught using only the ACA example**, the politically live case, while the large and
  bipartisan literature on phase-outs facing low earners went unmentioned. Now leads with CBO's 31%
  average effective marginal rate for low- and moderate-income workers, then gives the ACA cliff as
  the dated current example. This also fixed a pedagogy finding, since a reader on $30,000 got
  nothing actionable from a section about a $62,600 threshold.
- **The deduction-progressivity paragraph gave the fact in one side's framing only.** Now carries
  the upside-down-subsidy description and the income-definition reply, plus the two facts each side
  would add (nine in ten take the standard deduction; many provisions phase out at the top).
- **"Payroll tax stops above the cap" was inaccurate in one direction.** Medicare is uncapped and
  gains 0.9% above $200,000. Fixed, and the benefit-cap rationale made concrete rather than
  gestured at, so the criticism and the defence are equally specific.
- **"Her true marginal rate is 19.65%"** adjudicated a definition the lesson elsewhere refuses to
  adjudicate, and was inconsistent with the lesson's own claim about employer incidence. Now names
  all three defensible numbers and says the point is to state which taxes you are counting.
- **"The middle class paying a third of their income"** was offered as a claim to test against a
  federal-income-tax-only figure, which sets the reader up to reject it wrongly. Now carries the
  trap: ask which taxes are counted.
- Dropped "gentle" as an adjective on a politically charged quantity; attributed employer payroll
  incidence to CBO rather than to "most economists" alone.

### Fact-check findings

Everything else verified: all seven 2025 bracket thresholds, the $15,750 standard deduction, the
$176,100 cap, both SVGs checked to the pixel (largest error 0.5px on the effective-rate curve), and
all URLs live. Three corrections applied: the video is 4 minutes 8 seconds, not the five and eight
the draft said in two places; the $62,600 threshold is arithmetic on the HHS poverty guideline and
is now cited there rather than to KFF, which does not state it; and IRS Topic 751 now shows only
the 2026 wage base, so the payroll citation moved to SSA's contribution and benefit base page,
which carries the rates and every year's cap.

Priya's avoided interest was stated as $240, and the two reviewers who recomputed it got $257 and
$286 using different payment-timing conventions. Settled at about $260 by month-by-month simulation
(interest at 22% APR divided by 12 on the remaining balance, extra $200 applied at each month end),
with the method now implicit in the text and the no-high-rate-debt case (about $50) given beside it.

### Pedagogy findings

Three of five quiz items were recall of the lesson's own worked examples, which 4.3 forbids as the
majority. Replaced items 1, 2 and 4 with new cases (Ines at $58,000 to $70,000; Dev at $45,000 and
Renata at $250,000; Tomas and the changed W-4), all verified. Added a sixth item on bracket
indexing that retrieves lesson 4's real-versus-nominal habit, closing the spacing gap: the draft
had told the reader about earlier lessons and never asked them to recall anything. Every `explain`
now addresses all four options. Objective 2 no longer lists two rates and a mechanism as one set.

### Voice findings

The measurable one: 12 contractions in 4,483 words, against 71 in 3,512 for lesson 4. Full pass
done. Also fixed: the banned "It is not X, it is Y" shape; five punchy one-line morals cut to two;
three sentences that announced the lesson's own carefulness instead of being careful; the central
character given the name the quiz already used (Nadia); a 700-word stretch over the payroll section
with nothing for the reader to do, now carrying a checkpoint; the practice list wrapped in an
`:::exercise` block with the free-recall prompt the site expects; and a promise in the scope note
about "questions to ask your own system" that the lesson never kept, now kept as practice item 5.

### Media findings

Chart 1 labelled one row with two different units (an income figure beside two tax figures), now
labelled "$15,750 income" and "$1,193 tax" so the unit travels with the number. It also gained the
thing the outline asked for and the draft lacked: the whole tax bill drawn as a short bar on the
same scale as the salary, which is the effective rate made visible as a length. Chart 2's
"effective rate" label overlapped the curve it named and moved down 16 units. Both charts
re-checked at 375px in both themes.

### Still open

- No image anywhere in the lesson, and exercise 3 sends the reader to a paystub the lesson never
  shows them. US federal forms are public domain, so a `:::figure` of a W-4 or a sample W-2 would
  teach directly. Left for the media pass rather than done here.
- The lesson is 55 minutes and US-heavy in a way lessons 1 to 5 are not. Practice item 5 is the
  mitigation, not a cure. Recorded in OUTLINE.md's risks section as a known cost of the topic.
