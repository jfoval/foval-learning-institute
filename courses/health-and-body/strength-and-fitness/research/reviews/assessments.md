# Reviews: Strength and Fitness assessments

Files: `assessments/final-test.md` (20 items) and `assessments/project-eight-weeks-written-down.md`.
Shape follows `courses/health-and-body/mental-fitness/research/reviews/assessments.md`.

## 2026-09-24 — Final test and project — Stage 4, one fresh-context reviewer

Wrote neither file. Read the ten lessons as they stood after the course-wide neutrality audit
(commit 225e6bf), `.claude/commands/review-lesson.md`, the draft-lesson defect list, standards Parts
3 and 4, the style guide, OUTLINE "Assessments", the pipeline briefs' conventions, `course-wide.md`
and the Mental Fitness model review. Answered all twenty items before reading the keys: all twenty
matched.

**Verdicts.** **Facts pass**: every key is right by what the lessons teach, every quotation in a stem
or explanation string-matches a lesson, and the worked numbers hold (item 4: 220 − 40 = 180 and
208 − 0.7 × 40 = 180; ±20 gives 160 to 200; 80 per cent of each end is 128 and 160). Four small
wording findings (F1 to F4). **Pedagogy fail, now fixed**: the test could be passed by picking the
careful middle option (P1), and one item reused a lesson quiz's set-up (P2). **Safety pass**: the
callout is word for word the `TRAINING_SAFETY` string in `scripts/build.mjs` in both files, and every
symptom item keys to stopping and getting the right person. **Project pass with fixes** (J1 to J5).
**Voice pass**: no em or spaced en dashes, no banned words.

Allocation matches OUTLINE's blueprint: lesson 1 three (items 1 to 3), lessons 2 to 8 two each, lesson
9 one, lesson 10 two, the second of them lesson 8's stretching claim run through lesson 10's sort.
Applied items: 18 of 20 give a new case (OUTLINE asks at least 13); 12 and 14 lean towards recall
(P5). No item relies on "in proportion" about women's muscle; the test has no item on sex
differences, and its only "proportion" is CHAMP's "out of proportion" sign.

**The known YAML issue did not reproduce.** At review, the colon-bearing options in items 6, 14, 17
and 20 were already double-quoted, and js-yaml parsed every option as a string. The one new option
with a colon (item 17's key) is quoted too, and the check was re-run after the fix pass.

### Findings

**Pedagogy**
- **P1 (high), the whole test.** Mechanically the shapes were fine: option spread at most 10
  characters, the key the sole longest once (item 9) and the sole shortest once (item 19). By
  judgement it failed the way Mental Fitness's did. The key was the only calibrated, "it depends,
  here's the scope" option against three confident ones in items 2, 3, 6 to 12, 15, 17, 18 and 20,
  and in the symptom items (5, 13, 16) the key was the only cautious option. "Pick the careful middle
  one" scored about 16 of 20 against a pass mark of 14.
- **P2 (medium), item 10.** Its set-up, heavy sets of about 5 against light sets of about 25, ten
  weeks, every set to failure, is lesson 5's quiz item 1 almost word for word. Defect 5b.
- **P3 (low), key sequence.** BDACDBACADBCBADCABDC: items 4, 8, 12, 16 and 20 were all keyed C, and
  every block of four was a permutation of ABCD. No adjacent repeat, so the validator would not see
  it.
- **P4 (low), item 16.** "Even when her partner tries to help" reused lesson 8's Tom, whose partner
  tries to bend his knees. The passive-range test itself is the guideline's sign and has to stay.
- **P5 (low), noted and not changed.** Item 12 (belts) is lesson 6's belt section put in an
  instructor's mouth, and item 14 asks which label lesson 7's table gave. Items 17 and 18 share
  themes with lesson 8's product checkpoint and lesson 9's Kofi exercise, each with a new twist
  (strength rather than recovery; an unexamined back rather than an examined one).
- **P6 (low), the test's closing paragraphs.** "The people, adverts and studies in them are
  invented" could be read as covering the real studies the explanations cite. "Pain or symptoms
  after training" didn't cover item 13 (pain during a set) or item 18 (a man who hasn't started).

**Facts**
- **F1 (low), item 3.** ACSM's definition of exercising is at least three days a week; the
  explanation said "on three days a week".
- **F2 (low), item 14.** The explanation called the 2009 stand's loading rule "untested". Lesson 7
  says it is an expert recommendation that nothing read tested against other rules.
- **F3 (low), item 17.** The key read "It's untested". Lesson 8's finding is narrower: "What this
  course found nothing on".
- **F4 (low), item 18.** The explanation gave "examination first" as the review's instruction.
  Lesson 9 labels it "this course's reading of the review's scope, not something the review tells
  readers to do".

**Safety**
- **S1 (pass).** Callout verbatim in both files. Items 5, 13, 16 and 18 key to the doctor, to
  stopping, to a same-day doctor and to an examination respectively; no item asks the reader to judge
  their own symptoms, and the closing paragraph says who to ask and how soon.

**Project**
- **J1 (medium), `minutes:` and its sentence.** The listed parts summed to 510 minutes (90 + 90 +
  8 × 15 + 90 + 120), against "about eight hours" and `minutes: 480`. The report, 2,000 to 3,000
  words in six sections with four limits weighed per measure, was priced at two hours, which is
  short.
- **J2 (medium), Part 2 "Days".** "With a day or more between them. That is the ACSM 2026 stand's
  primary recommendation" gave the stand the spacing. Lesson 7 labels the spacing older ACSM
  guidance (2011, via Kravitz), untested for beginners.
- **J3 (low), rubric row "The plan".** Full marks needed "a named source" on every line, but Part 2
  and lesson 7 both say "name the source wherever there is one", and convention lines have none.
- **J4 (low), Part 4 safety lines.** The stop-for-pain rule lessons 6 and 7 carry appeared only
  under Measure B and in "If the eight weeks go wrong", not in the lines that govern the eight weeks.
- **J5 (low), Part 2 "Numbers".** Lesson 7's exercise asks for the weekly total per region (sets ×
  days); the project's list dropped it.
- **J6 (noted).** Checked against lessons 1, 7 and 10 as they now stand: the any-yes screening rule,
  the three baselines, the log columns, the stall test, the restart rule, the litre-and-kilogram
  line, the rhabdomyolysis quotation, lesson 10's "What next" with its three lines, and "lesson 6 or
  7" (the course-wide note on this is already resolved). All match. The audit's new AHA sentence in
  lesson 7 (40 to 60 per cent of 1RM to start) is consistent with the project's "start below what you
  could do" and needs nothing added.
- **J7 (noted, not changed).** The rubric's honesty rows (a prediction "untouched", a log "recorded
  at the time") rest on the learner's word. Nobody grades this project but the learner, so that is
  the right design.

### Resolutions applied (2026-09-24)

- **P1.** Every item except 14 (four labels, no hedging possible) now has at least one hedged or
  cautious wrong option ("probably", "partly", "mostly", "roughly", "as a precaution", "stop for
  today and try the cue tomorrow", "rest a day or two and see a doctor if her urine turns dark",
  "start with light deadlifts"), each refuted in its explanation. In the symptom items the key is
  still the only option that stops now and gets the right person now, but it is no longer the only
  careful-sounding one. Measured after the fix: spread at most 10 characters, the key the sole
  longest in 0 of 20 and the sole shortest in 4 (7, 10, 18, 19). By judgement, "careful middle" now
  has a rival in 19 of 20 items.
- **P2.** Item 10 is now sets of about 4 against about 30, over twelve weeks, and its "Fair, since
  heavy won the one test used" option became "Mostly fair, since heavy's edge would probably show on
  any test", which the 2026 "inconclusive" finding refutes.
- **P3.** Keys went from BDACDBACADBCBADCABDC to **BDACDBADCABCBACDADBC**: A, B, C and D five each,
  no adjacent repeat, every fourth item C, D, C, D, C. Options in items 8, 9, 10, 15, 16, 18 and 19
  were reordered, and every explanation was re-read against the option its key now selects (defect
  25); all name options by content, not position. Left: the first four keys match lesson 2's first
  four, which only matters to someone comparing the two; not worth another reorder.
- **P4.** Item 16 now has "a friend tries to straighten them for her", in the arms.
- **P6.** "The people, adverts and studies in the questions are invented; the explanations draw on
  the real ones the lessons read." The symptom sentence now reads "during training or after it" and
  "stop, or not to start, and get the right person to look".
- **F1 to F4.** "On at least three days a week"; "an expert recommendation nothing read tested";
  the key "Untested in what was read: ..."; "on lesson 9's reading of the review's scope".
- **Item 3** also now says "the box above, the same one that opens every lesson", since the test
  page carries its own copy.
- **J1.** `minutes: 570`: the report is priced at three hours, and the sentence now says about nine
  and a half hours and adds up.
- **J2.** "Two or more is the ACSM 2026 stand's primary recommendation and WHO's ... The day between
  them is older ACSM guidance, untested for beginners, as lesson 7 labelled it."
- **J3.** "Carries its label, with a named source wherever there is one".
- **J4.** Safety line 2 now ends: "Stop any movement that hurts rather than pushing through it, and
  if the pain doesn't settle, see a physiotherapist or a doctor, as lessons 6 and 7 said."
- **J5.** "Two sets per exercise per session, the weekly total for each region (sets × days), ..."
- Not changed: P5 and J7, for the reasons given. `npm run validate` and
  `node scripts/build.mjs --check --drafts` both exit 0 after the fixes.
