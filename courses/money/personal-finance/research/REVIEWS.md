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
