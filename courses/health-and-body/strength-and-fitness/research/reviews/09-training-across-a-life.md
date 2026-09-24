# Reviews: Strength and Fitness lesson 9

## 2026-09-24 — Lesson 09 — Stage 4, two reviewers in parallel, Tier B (split)

The session that ran these reviews ended before the fix pass. The two reviewers' findings are kept below verbatim. The fix pass ran later the same day in a fresh context; see "Resolutions applied" at the foot.

---

## Lesson 9, Training across a life: Reviewer F (facts, neutrality, safety), 2026-09-24

Read: course-wide.md, review-lesson.md, draft-lesson.md defect list, OUTLINE (decisions, lesson 9,
neutrality notes), SOURCES R1.1, R2.2, R2.12, R2.14, R2.16, R3.6b, R4.1 to R4.3, R4.10, R4.20 to R4.26,
R5.15, and the primaries in `scratchpad/research/raw/`: PMC11209834 (AHA 2023), PMC3483033
(Faigenbaum), acog804.txt, csep_preg.txt, ada_pmc.txt, PMC6360922 (Sherrington), PMC8477273 (Hayden),
nice226.txt, r2/peterson2010.txt, the LIFTMOR abstract in abstracts1.txt.

Mechanical: `npm run validate` exits 0 with no warning on this file. The callout block hashes
identically in all nine lessons (byte-identical). `npm run quotes strength-and-fitness`: 361 sourced
quotations, 0 not found. No em or en dashes in prose; the one en dash (line 498, "2–3") is inside the
ADA quotation, verbatim.

### The three points the drafter took from primaries beyond SOURCES

1. **AHA osteoporosis sentence among groups who should see a doctor first: VERIFIED.** PMC11209834
   line 74, the paragraph opens "Relative contraindications may apply to clinical subpopulations in
   which they should seek physician consultation and medical clearance before starting an RT program
   (Figure 1)", and the "severe osteoporosis ... may benefit from low- to moderate-intensity RT" and
   "Machines are likely safer" sentences are in it. The sentence the lesson leaves out goes on: "and
   the guidance of an exercise professional may provide enhanced benefit" (see F12). SOURCES should
   carry the paragraph's opening sentence, dated.
2. **−4/−2 mm Hg for healthy adults over 40: VERIFIED.** Line 10: "For middle-aged and older healthy
   adults (>40 years), RT results in larger reductions in systolic BP (−4 mm Hg) and diastolic BP
   (−2 mm Hg)." The scope is right. The selection isn't: see F6.
3. **Faigenbaum's injury rates were adolescents: VERIFIED.** Line 15: "In one retrospective evaluation
   of injury rates in adolescents ... 0.8000 for rugby and 0.0035 and 0.0017". Arithmetic redone:
   0.8000 / 0.0035 = 228.6 and 0.8000 / 0.0017 = 470.6, so "more than two hundredfold" holds.

### Findings

**F1 [major, safety and neutrality] Pregnancy: ACOG's own caution about lifting is left out, and it's
the strongest statement of the "shouldn't lift" side's reason.** Lines 365 to 402, and quiz item 4
(a woman who "has lifted for years").
The section gives the permission and states the belief ("pregnant women shouldn't lift") without its
reason. ACOG 804, read in full, gives both (acog804.txt line 216): resistance training "was not
considered a safe activity in early guidelines for exercise during pregnancy because of potential
injury and possible fetal heart decelerations resulting from Valsalva maneuvers. Consequently, there
is sparse literature on this topic." And, for athletes continuing strenuous work, "to obtain approval
from their health care providers, and to consider decreasing resistance load compared with
prepregnant conditions." Also line 196: "Pregnant women who were sedentary before pregnancy should
follow a more gradual progression of exercise." A competent instructor would give the load and
breath-holding point to any pregnant lifter; as written, the lesson reads as "encouraged, no load
limit", which fails the "never as limitless" note, and it leaves the cautious side's position
un-Turing-tested.
Fix: add to R4.20 first (dated, from acog804.txt), then after the ACOG hydration paragraph: "ACOG is
open about what's missing on heavy lifting. Early guidelines didn't count resistance training as
safe in pregnancy 'because of potential injury and possible fetal heart decelerations resulting from
Valsalva maneuvers', and 'Consequently, there is sparse literature on this topic.' For athletes who
want to keep training hard it advises them 'to obtain approval from their health care providers, and
to consider decreasing resistance load compared with prepregnant conditions.' Lesson 6's rule about
not holding your breath applies here too." Add the load point to the Pregnancy table row.

**F2 [major, safety] Ines's checkpoint makes ACOG's lying-flat advice depend on symptoms.** Line
655 to 656: "no long periods lying flat if it makes her unwell".
ACOG's advice has no condition: "avoid long periods of lying flat on their backs" (line 398 of the
lesson quotes it correctly). The symptom version is the Canadian guideline's. The checkpoint merges
the two into the weaker one.
Fix: "no long periods lying flat on her back (ACOG), and a change of position if lying flat makes
her light-headed or unwell (the Canadian guideline)".

**F3 [major, fact] Quiz item 6's explanation is contradicted by the ADA statement the lesson says it
read in full.** Line 116 to 117: "Nothing read here tells him to skip sessions when readings are high."
ada_pmc.txt line 400: "heavy powerlifting (146,147) may promote hyperglycemia, especially if starting
blood glucose levels are elevated", and the recommendations (line 382): "Exercising with
hyperglycemia and elevated blood ketones is not recommended." The distractor ("skip sessions on the
days his readings run too high") is partly what the ADA says, so the explanation teaches something
false about the source.
Fix: rewrite the distractor so it's clearly wrong on the source, e.g. "Lifting raising his blood
sugar, so the only risk to plan for is readings running too high", and rewrite the explanation
sentence: "High readings do matter (the ADA notes heavy lifting can raise glucose), but the risk the
statement stresses for insulin users is the late low." Or drop the high-sugar option entirely.

**F4 [major, neutrality, omitted fact] Falls: the AHA statement the lesson cites 10 times says
resistance training reduces falls, and the lesson gives only Cochrane's uncertainty.** Lines 252 to
262, misconception at 610, quiz item 2.
PMC11209834 line 43: "RT can reduce the risk of falls and injury from falls (eg, fractures) in older
adults. RT programs that incorporate balance-challenge exercises (eg, feet closer together, minimal
hand support) may be the most effective in fall prevention." Someone who believes strength training
prevents falls would cite exactly this. The lesson's reading is still defensible (Cochrane is the
graded evidence; the AHA sentence carries no citation of its own, and its next sentence points
toward balance), but a well-informed reader would insist it's there.
Fix: add to R4.21 or R4.26 (dated, verbatim), then after "Uncertain is not the same as ineffective":
"The AHA's 2023 statement is more confident: 'RT can reduce the risk of falls and injury from falls
(eg, fractures) in older adults', and it adds that programmes with balance challenges built in 'may
be the most effective'. It gives no grade for that sentence, and the Cochrane review is the graded
test, so this course reads the two as agreeing where they overlap: strength work helps most with
balance built into it." Adjust the misconception at 610 to name the AHA view too.

**F5 [major, neutrality] The misconception list only ever corrects the fragile error, never the
limitless one.** Lines 601 to 624.
All seven entries are "X shouldn't/can't lift". OUTLINE's neutrality note is "never as fragile and
never as without limits". The body does handle the limitless headline for low bone mass (line 350),
but the list, which is what readers carry away, doesn't. Count: 7 fragile, 0 limitless.
Fix: add one, e.g. **"The LIFTMOR trial shows heavy lifting is safe with osteoporosis."** "In
otherwise healthy women with low to very low bone mass, under close supervision. It doesn't reach
severe osteoporosis, and it isn't a reason to start alone." Or a pregnancy one using F1: **"Cleared
for exercise means train as before."** "ACOG advises experienced lifters to get approval and consider
lighter loads, and to stop at any of ten signs."

**F6 [minor, fact, selection] High blood pressure: the benefit figure is the healthy-adult one, in the
section written for people with high blood pressure.** Lines 530 to 531.
Scope is stated correctly, so this isn't wrong. But the same AHA sentence run gives the figure for
the section's reader: "hypertension8 (−6 mm Hg systolic BP; −5 mm Hg diastolic BP)". Reporting only
−4/−2 in this section understates the effect for the person reading it.
Fix: add to R4.24 (dated), then: "For healthy adults over 40, about 4 mm Hg systolic and 2 diastolic;
in people with hypertension, about 6 and 5." Leave out the AHA's next sentence comparing RT with
blood-pressure medicines, or if it's used, say at once that it's no reason to change medication
without the doctor. That would be a safety problem otherwise.

**F7 [minor, fact, scope] The 6 to 15 hour figure is from type 1 evidence and is applied to a type 2
insulin user.** Lines 505 to 508, quiz item 6 explanation lines 114 to 116.
In the ADA text the timing sentence sits in the nocturnal-hypoglycaemia paragraph (line 394), with
refs 138 to 140 all in type 1 ("children with type 1 diabetes", "insulin-dependent"). The quiz
explanation fuses two sentences: "happens in people with type 2 diabetes who use insulin, typically 6
to 15 hours after exercise". The ADA doesn't say that about type 2.
Fix: in the body, "It can come late: in the ADA's section on hypoglycaemia, events 'occur typically
within 6−15 h postexercise' ..." (keeping it general). In the explanation: "The statement says
exercise-induced hypoglycaemia happens in type 2 diabetes when people use insulin, and that it can
come late, typically 6 to 15 hours after exercise and possibly up to 48 ...".

**F8 [minor, fact] HiRIT is heavy lifting plus impact work, not "heavy lifting".** Line 324 to 325
("which is heavy lifting"), and the table and misconception.
The abstract expands HiRIT as "High-intensity resistance and impact training", and the trial title
says "resistance and impact training". Its women were also "screened for conditions and medications
that influence bone and physical function", which supports "otherwise healthy".
Fix: "which is heavy lifting with impact work added (HiRIT stands for high-intensity resistance and
impact training)". Add the screening clause to the scope paragraph at line 341.

**F9 [minor, fact, dropped hedge, defect 19] "the AHA advises" for "may benefit from".** Lines 614
and quiz item 3 explanation line 66 ("advises low to moderate loads for severe osteoporosis").
AHA: people with severe osteoporosis "may benefit from low- to moderate-intensity RT". Line 344 to
345 quotes it correctly; the two paraphrases harden it.
Fix: "the AHA says people with severe osteoporosis may benefit from low to moderate loads" in both.

**F10 [minor, neutrality, framing] The AHA is set up as "a statement that seems to agree with the
belief" (line 318), but in its own voice it supports lifting for bone.** PMC11209834 line 35: "RT
improves bone mineral density in the femoral neck and the lumbar spine in pre- and postmenopausal
women." The "seems" carries some of this, but a reader leaves thinking the AHA is on the cautious
side about bone.
Fix: add the AHA's bone sentence to SOURCES and to line 343: "The AHA's statement also says 'RT
improves bone mineral density in the femoral neck and the lumbar spine in pre- and postmenopausal
women.' Its caution is for one group: ..."

**F11 [minor, fact, dropped hedge] "On the basis of limited data" left out before the heart-patient
complication counts.** Lines 571 to 575.
PMC11209834 line 69: "On the basis of limited data, a review of exercise randomized controlled
trials in adults with coronary heart disease concluded ...", then "across 23 trials reporting on
adverse events (n=1174 total participants)". The lesson keeps the one-third hedge, but not the
lead-in or the denominator.
Fix: "On what the authors call limited data, a review of trials in people with coronary heart
disease (23 trials reporting adverse events, 1,174 people) found ...". Add the lead-in to R4.26.

**F12 [minor, fact] The AHA's professional-guidance clause is missing from the osteoporosis
quotation, though the table relies on it.** Line 345 to 346; table row "Doctor and a qualified
professional".
The sentence continues "and the guidance of an exercise professional may provide enhanced benefit".
Fix: extend the quotation, which then supports the table's "Who to ask" directly.

**F13 [minor, scope] NIA's condition is dropped in Margit's Step 1.** Line 274 to 275: "says the same
for older adults without an injury or chronic condition".
The NIA sentence (as lesson 1 quotes it) also requires that they "plan to gradually increase their
amounts of physical activity".
Fix: "... without an injury or chronic condition who build up gradually".

**F14 [minor, mechanism in the course's own voice, defect 22] "a count of injuries people recalled
rather than ones followed as they happened".** Line 445 to 446.
The review says only "retrospective evaluation". Retrospective could mean records, not recall.
Fix: "That is one retrospective study, as the review says, so it looked back at injuries after the
fact rather than following people forward".

**F15 [minor, neutrality, "never as limitless"] "The danger the evidence points to is not lifting. It
is unsupervised equipment."** Line 454.
The review's causes are "improper lifting techniques, poorly chosen training loads or lack of
qualified adult supervision", and it reports lower-back injuries in unsupervised adolescent
powerlifters (PMC3483033 line 20). The danger it points to is lifting without qualified supervision,
of which home equipment is the extreme case.
Fix: "The danger the evidence points to isn't lifting as such. It's lifting without qualified
supervision, and at its worst, equipment left where a child can play with it."

**F16 [minor, dropped hedge] Wen: "more aching in week two is something the guideline expects".**
Line 661 to 662. NICE says pain "may increase". Fix: "is something the guideline warns may happen".

**F17 [minor, overclaim] The opening's "says the opposite" includes the bulky claim, which the
lesson itself says nothing tested.** Lines 121 to 124 against 191 to 195.
Fix: "For most of those groups, the guidance read for this course says yes, with conditions, and
the one about women getting bulky is a claim nobody here measured."

**F18 [minor, mechanism in the course's own voice] "the body adapts at every age and in each of these
states".** Lines 597 to 598 (and 228).
It's labelled as the course's summary, which is good, but "in each of these states" goes past what
was read: nothing read measured strength adaptation in pregnancy, back pain or osteoarthritis. The
guidance there is about safety and symptoms.
Fix: "none of the guidance read says these states stop the body adapting, and the conditions exist
because each state has its own way of going wrong."

**F19 [minor, citation] Line 525 to 527 cites [9] (AHA) for "the ADA's advice to avoid the Valsalva
manoeuvre".** Fix: "[9][14]".

**F20 [minor, citation] Line 227: "Every analysis of older adults read for this course found ...,[4]"**
cites only Peterson. Borde and Grgic are in lesson 4. Fix: "(Peterson here, and Borde and Grgic in
lesson 4's exercise)".

**F21 [minor, read level at point of use, decision 4] Hubal's read level and measure are missing.**
Lines 182 to 189. Hubal is abstract-only in SOURCES and measured one muscle, the non-dominant elbow
flexors (R2.12). A lesson built on "measured on what?" should say it. Fix: add "(this course read its
abstract; it trained one arm's elbow flexors for 12 weeks)".

**F22 [minor, overclaim] Line 151: "it is true of most of the literature behind lessons 4 to 7".**
Montero's limitation is about "healthy young males". Lesson 4's own table says "more often men" and
Currier 2023 is 45 per cent women. Fix: "and a similar caution fits much of the literature behind
lessons 4 to 7, which is young and more often male."

**F23 [minor, unsourced prescription] Line 291: "She hasn't tested a one-rep maximum and shouldn't".**
No source read says a healthy 72-year-old shouldn't. The AHA reports no significant cardiovascular
events during 1-RM testing in several groups. Fix: "and has no need to" or label it: "and this
course doesn't ask beginners to".

**F24 [minor, safety line a competent instructor would give] Margit's strength part has no stable
set-up line.** Line 285 to 292. She's 72, starting because of a fall, working lesson 7's home
versions. The course-wide standing note asks for a stable set-up (a chair without wheels, back to a
wall). Fix: one sentence: "Anything done standing, she does beside a counter or a sturdy chair
without wheels that she can hold."

**F25 [minor, safety] Pregnancy has no word on intensity measures.** ACOG (line 166) says heart-rate
responses are blunted in pregnancy and RPE or the talk test "may be a more effective means" than
heart rate. Lesson 2 teaches heart-rate targets. Fix: one sentence in the Pregnancy section pointing
back to lesson 2's talk test and RPE, quoting ACOG after adding the line to R4.20.

**F26 [minor, table] The table has no heart-disease row, though the section and Leon's case do, and
the older adults' "Who to ask" leaves out the professional who designs the balance work (Step 4).**
Fix: add "Heart disease | Supervised rehabilitation and resistance work | Clearance first; pacemaker
check before upper-body work | Events a course can't see | Cardiologist or GP, cardiac rehab". Add
"physiotherapist for the balance part" to older adults.

### Claims checked (verdicts)

Verified against SOURCES and, where marked (P), the primary:
- ACSM 2026 "evidence-based across all ages", "safe for healthy adults of all ages", the fatigue
  caution: verified (R2.2).
- Montero and Lundby limitation, young men, lesson 3 used it: verified (R3.6b; lesson 3 line 382).
- Lesson 4's table, "two to three months ... twenties, more often men": verified (lesson 4 lines
  398 to 414, R2.16).
- Roberts outcome counts 12/10, 19/17, 23/23, summary sentence, read level: verified (R5.15). Lesson 4
  carries the "artifact" hedge (line 489).
- Hubal 585 and sex sentence: verified (R2.12). See F21.
- Peterson 47 studies, 1,079, 50+, mixed designs, 9.8 to 31.6 kg as per-lift mean gains (P: leg press
  31.63 kg), per cents, conclusion: verified. Conversions by hand: 9.8 × 2.2046 = 21.6 → 22 lb;
  31.6 × 2.2046 = 69.7 → 70 lb. "A quarter to a third": 24 to 33 per cent, correct.
- Lesson 4's exercise: Borde mean age 70.4, Grgic 75+ with 80+ subgroup: verified.
- WHO older-adult multicomponent quote and pregnancy clinical-guidance sentence: verified (R1.1).
- Sherrington 108 RCTs, 23,407, 60+, mean 76, 77 per cent women; RaR 0.77 = 23 per cent (1 − 0.77,
  checked); by type; uncertain for resistance; adverse events: verified (P).
- ACSM screening branches, PAR-Q+ over-45 and pregnancy delay, 160/90 and "Answer YES": verified
  (R4.1, R4.2).
- AHA 40 to 60 per cent 1-RM "When beginning a new RT program": verified (P, line 66; general
  population).
- LIFTMOR 101, 65 ± 5, 8 months, twice weekly, 30 min, HiRIT spec, BMD figures, adverse event, scope
  sentence: verified (P). See F8.
- AHA severe osteoporosis and machines: verified (P). See F9, F12.
- ACOG uncomplicated-pregnancy recommendation, clinical evaluation, Box 1 resistance line, hydration
  and lying flat, contact activities, stop at any Box 3 sign: verified (P lines 58, 60, 90, 166, 202).
- **ACOG Box 3: all ten items verbatim and in order, title verbatim** (P, lines 172 to 193).
- Canadian guideline recommendations, abstract sentence, absolute contraindications (five of twelve
  quoted, "include" is accurate), ADL sentence, supine sentence: verified (P). ACOG tables not read:
  the lesson says so.
- Faigenbaum growth cartilage and height sentences, causes, rates, 9-year-old case (curly quotes
  preserved), supervision condition, Lloyd abstract-only: verified (P).
- Hayden 249 trials, >12 weeks, mean 43.7; MD −15.2 (−18.3 to −12.2); threshold 15 (P: "a 15‐point
  difference in pain and a 10‐point difference in functional limitations"); −6.8 below the 10-point
  function threshold; conclusion; harms: verified.
- ADA 2–3 sessions, clearance sentence, hypoglycaemia sentences, medications, foot care, silent
  ischaemia: verified (P). See F3, F7.
- AHA glucose monitoring, neuropathy, controlled hypertension, extended cooldowns, pacemakers,
  63 vs 1 complications and the one-third hedge: verified (P). See F11.
- ACSM 2004 hypertension (abstract): verified (R4.10).
- NICE 1.2.2, 1.3.1, 1.3.3: verified (P). See F16.
- Lesson 6 carries the ADA and AHA eye limits (lesson 6 lines 606 to 611): verified.
- Cross-references (lessons 1, 3, 4, 5, 6, 7, 10) all match the ten-lesson numbering.

### Safety pass

- The callout is present, directly after the opening paragraph, byte-identical (hash-matched across
  all nine lessons), and validate is green.
- **No plan is written for a condition, a pregnancy, a child or an injury.** Margit's plan is for a
  healthy 72-year-old inside general guidance, which decision 3 allows. Her diabetes variant, and
  Kofi, Ines, Wen and Leon, get what the guidance supports and who to ask, and no programme. The
  children's section says outright that the coach writes the programme.
- **Every permission carries its condition where it's used**, with the exceptions in F1 (pregnancy
  load), F2 (lying flat), F9 (osteoporosis hedge) and F15 (children).
- **Every practice case ends with who to ask** (Kofi: doctor or physio; Ines: midwife or obstetric
  team, before the first class; Wen: physiotherapist, before stopping; Leon: cardiologist or GP and
  cardiac rehab). Every table row has a "Who to ask".
- Missing warnings a competent instructor would give: F1 (pregnancy load and Valsalva), F24 (stable
  set-up for a 72-year-old), F25 (heart rate in pregnancy).

### Neutrality pass

Perspectives checked: cautious clinicians (the traditional "don't lift" view in pregnancy,
osteoporosis and youth); the strength-training advocacy view (strength training prevents falls,
heavy lifting for bone); patients and older adults reading about themselves; the fitness-industry
"anyone can do anything" framing.
- Classification: the LIFTMOR/AHA pairing is correctly called established within each scope. The
  falls question is framed as settled on Cochrane alone (F4).
- Turing test: the cautious side's reasons are given for osteoporosis (the AHA) and youth (case
  reports), but not for pregnancy (F1). The advocacy side for falls isn't given (F4).
- Counts: in the misconception list, 7 fragile-side errors and 0 limitless-side (F5). Last words:
  the permissive reading closes every section, which is right on the evidence. The cautious reading
  is explained, not just quoted, for osteoporosis and children, and not for pregnancy.
- Loaded language: none found. No group is described as fragile. The lean toward limitless is in
  F5, F15 and F18.
- Omitted facts: F1, F4, F6, F10.

### Verdicts

- **Fact-check: pass with fixes.** No invented quotation; all 10 Box 3 items verbatim; every sum
  redone. One quiz explanation is contradicted by its source (F3). Several hedges are dropped in
  paraphrase (F7, F9, F11, F13, F16).
- **Neutrality: fails until F4 and F5 are fixed,** because one side of the falls question and the
  limitless half of the population note are missing. F1 also bears on it.
- **Safety: pass with fixes.** The callout is right and no condition gets a plan, but F1 and F2 need
  fixing before publish.

Counts: 0 critical, 5 major (F1 to F5), 21 minor (F6 to F26).

---

## Lesson 9, Training across a life: Reviewer P (depth, pedagogy, cold start, voice and media)

Reviewed 2026-09-24 in a fresh context. Read first: `research/reviews/course-wide.md`, the review-lesson
passes, the whole drafting defect list, EDITORIAL_STANDARDS 1.2 and 1.3, STYLE_GUIDE, OUTLINE (the
eight decisions, the lesson-length paragraph, lesson 9's plan), SOURCES R1.1 (older adults), R2.14,
R4.20 to R4.26, R5.15, the NIA entry under R4.3, and lessons 1, 4, 6, 7 and 8 where lesson 9 points
at them or repeats them. Line numbers are the lesson file's.

Measurements taken, not eyeballed:

- `npm run minutes`: 100 claimed, 100 measured ("ok"). OUTLINE plans about 65.
- Words by section (body after frontmatter): whose evidence 269, Women 413, Older adults 1,379, Low
  bone mass 512, Pregnancy 644, Children 403, Common conditions 1,129, The pattern 353, What people
  get wrong 193, Practice 490, Connections 151, Go deeper 174, **Sources 1,416** (about 10 minutes at
  the course's 140 wpm). Frontmatter (objectives and quiz) 1,341.
- Contractions, outside quotation marks, per 1,000 body words (Sources excluded): 42 in 6,460 = **6.5**
  (band 5 to 8, fine).
- Bold spans per 1,000 body words: 30 / 6,460 = **4.6** (fine). Paragraphs opening bold: 21 of 83,
  all of them the misconception list, Margit's steps, the exercise names and the checkpoint answers,
  which is what bold is for.
- Em dashes: none. En dash: one, line 498, inside the ADA quotation ("2–3 sessions/week"), verbatim
  from SOURCES; leave it. Line 507's "6−15 h" is a minus sign, also verbatim.
- Banned words and shapes: none of the listed words found by search.
- `npm run quotes strength-and-fitness`: 361 sourced quotations, 0 not found. `npm run validate` exits
  0, but the course is `drafting` and not linted as a built course, so the callout and quiz-shape
  checks were not exercised on this file by it.
- Quiz option lengths in characters (key marked *):
  1. 95, **94***, 93, 93 (spread 2)
  2. 89, 94, 90, **94*** (spread 5)
  3. 96, 83, **89***, 94 (spread 13)
  4. **91***, 89, 88, 93 (spread 5)
  5. 98, 102, **100***, 101 (spread 4)
  6. 97, **96***, 92, 92 (spread 5)
  Keys 1, 3, 2, 0, 2, 1: all four positions, no adjacent repeat, the key is never the sole longest.
  Differs from lesson 8 (3, 0, 2, 0, 1, 3) and lesson 7 (0, 2, 0, 3, 1, 3). All six items are
  applications with new people. At least two options per item carry no absolute in every item.
- Sums redone by hand: Peterson 9.8 kg x 2.2046 = 21.6 lb (22), 31.6 kg = 69.7 lb (70), and 24 to 33
  per cent as "a quarter to a third": right. Rugby against resistance training, 0.8000 / 0.0035 = 229
  and 0.8000 / 0.0017 = 471, so "more than two hundredfold": right. Hayden 15.2 against a threshold of
  15, "just past the line": right (note the CI's upper end, 12.2, is under it; the lesson's "modestly"
  covers that). Sherrington RaR 0.77 = 23 per cent: right. ACOG's Box 3 has ten items and dyspnoea is
  the fifth: right. LIFTMOR 2.9 against -1.2 and 0.3 against -1.9: copied correctly. No "if you got
  X" diagnoses in the lesson to trace.
- Links: every PMC, NICE, ACOG, CSEP, WHO and PAR-Q+ URL returned 200. The doi.org links for Wiley,
  BMJ, AHA and ADA returned 403 to curl (publisher bot blocks; normal). The NIA PDF returned 405 to
  curl with a browser user agent, so I couldn't open it; lesson 1 links the same URL.
- Media: no figures, videos or SVGs in this lesson, so nothing to open. One table (line 584).

### Findings

#### P1 [major] Padding: about 5 to 7 minutes of the 100 are repeats of lessons 1, 3, 4, 5, 6 and 7

The lesson isn't too long for what it covers (nine groups, a 20-minute exercise and a 10-minute
Sources list), but these passages re-teach rather than retrieve:

1. **"First, whose evidence is it?" (lines 139 to 162), about 270 words, is almost all repeat.**
   Lesson 4's table (lines 402 to 409 there) already shows the young, male, short-study literature;
   lesson 3 already quotes Montero and Lundby's "Findings were obtained from a sample of healthy young
   males" (lesson 3, line 416); lesson 4 already quotes "evidence-based across all ages" (lesson 4,
   line 419); lesson 6 already quotes "Resistance training is safe for healthy adults" (lesson 6,
   line 651). Montero is also an *endurance* study, used here as the emblem of "most of the literature
   behind lessons 4 to 7", which are strength lessons; lesson 4's table is the right evidence for that
   claim. **Fix:** cut to one paragraph of retrieval, e.g.: "Lesson 4's table showed who the main
   strength literature trained: untrained people in their twenties, more often men, for two or three
   months. The groups in this lesson are mostly outside it, so each section below names a different
   body of evidence, written by the specialists for that group. The 2026 ACSM stand says 'Resistance
   training is safe for healthy adults of all ages'.[1] The word to hold on to is *healthy*." Drop the
   Montero passage (and its source 2) or keep only its second sentence, which lesson 3 didn't quote.
   Saves about 150 words.
2. **Women (lines 164 to 189): the predict is answered by lesson 4 and by the sentence above it.**
   See P4. The Roberts summary and the Hubal quotation re-teach lesson 4 lines 485 to 492; what's new
   here is the outcome counts, the CSA half of Hubal's sentence and the "bulky" paragraph. Keep those,
   cut "Lesson 4 gave you the authors' own hedges..." (lines 178 to 179), and turn the predict into a
   retrieval checkpoint (P4). Saves about 60 words and stops the section reading as lesson 4 again.
3. **High blood pressure (lines 523 to 543): two of the "three things to add" were in lesson 6.** The
   extended-cooldown quotation (line 531) is lesson 6 line 603, and the PAR-Q+ 160/90 line (541 to
   543) is lesson 6's predict and line 609. Only the AHA's -4/-2 mm Hg and the ACSM 2004 stand are new.
   **Fix:** "Lesson 6 covered the breathing side, the cooldown and the PAR-Q+'s 160/90 threshold. Two
   things to add." Then keep the benefit sentence and the 2004 stand. Saves about 70 words.
4. **The clearance line appears for the third time in the course's diabetes material.** Lesson 1
   (lines 703 to 707) already worked WHO against ACSM for "someone with type 2 diabetes starting to
   walk"; the Margit checkpoint repeats it (lines 302 to 305); the diabetes section repeats it with the
   ADA (lines 499 to 501). **Fix:** keep it once, in the checkpoint, and in the diabetes section say
   only "The ADA's own clearance line is looser than ACSM's, like WHO's in lesson 1; this course keeps
   the cautious one."
5. **The failure caution is quoted in full a fourth time** (lines 233 to 235; also lessons 5, 6 and 7,
   the last at lesson 7 lines 156 to 157). Lesson 9 is the right home for it (course-wide asks lesson 9
   to carry it), so keep the quotation here but cut "it is the reason this course keeps saying stop
   short of failure", which re-explains lessons 5 and 7.
6. **The pacemaker sentence** (lines 575 to 577) is lesson 6 line 543 word for word. A clause pointing
   back ("and lesson 6's pacemaker caution applies") does it.
7. **"The pattern" plus "What people get wrong" restate the lesson twice in a row** (lines 579 to 624,
   about 550 words). The table is the better summary; the misconception list then repeats each row in
   prose. Standards 1.2 requires the misconceptions, so keep the list but cut each entry to its
   correction in one sentence. Saves about 80 words.
8. **The consensus-statement sentence** (lines 460 to 462) tells the learner about a document the
   course didn't read and then reports nothing from it. It is honest but it teaches nothing; move it to
   source 12, which already says it.

Total: roughly 600 to 700 words, about 5 minutes of reading plus the re-quoted blocks. After the cuts
the lesson would measure about 92 to 95. **Record the exception in OUTLINE's "Lesson length"
paragraph** rather than cutting further: nine groups each needing its own source and its own
condition, a 20-minute exercise, a 10-minute Sources list, and a natural break at "Common conditions"
(line 468) for a reader in two sittings (standards 1.3). The outline's ~65 was set before the lesson
knew it would need seventeen sources.

#### P2 [major] The Margit worked example has no gap, and the lesson has none anywhere

Lines 264 to 297. All four steps are shown in full before the reader does anything; the checkpoint at
line 299 is a transfer question ("change one fact"), not a gap in the example. The LIFTMOR "wrinkle"
example (lines 348 to 354) also gives both headlines before asking anything. The style guide and the
fix-pass instruction both require one worked example with a gap the reader fills before the next step.

**Fix (the cheapest, and the step the reader is equipped for):** turn Step 1 into the gap. After
Margit's description, before "Step 1":

> :::checkpoint Before the steps. You have lesson 1's screening model. Which branch is Margit in, and does she need a doctor's clearance to start at light to moderate intensity? Does the PAR-Q+ add anything for her at 72?
>
> (then the present Step 1 text as the answer)
> :::

and leave Steps 2 to 4 shown. Alternatively, give the first LIFTMOR headline bullet and hide the
second behind a checkpoint ("Now the opposite headline. What does it have to drop?").

#### P3 [major] The Margit checkpoint asks for knowledge the lesson hasn't taught yet

Line 299: "what would you want her to ask her doctor about the tablet?" The answer (lines 307 to 311)
rests on hypoglycaemia, the ADA's "insulin secretagogues" and the point that some tablets are in that
group. None of that has been taught at this point: the diabetes section is 200 lines later (line 494).
A cold reader who has done Nutrition and lessons 1 to 8 can't answer it, so the checkpoint becomes a
reveal. **Fix:** cut the tablet question from this checkpoint (keep the branch question, which lesson
1 equips them for), and move the tablet paragraph into the diabetes section's "Low blood sugar"
bullet as a closing line: "Margit, from the earlier checkpoint, takes a tablet: whether it's one of
these, and whether its dose needs changing, is the question for her doctor." That also removes one of
the three clearance repeats (P1.4).

#### P4 [major] The Women predict is spoiled twice over

Line 170 asks the reader to predict relative muscle gain by sex. Line 166, two lines above, says
"Lesson 4 took the belief that women gain strength poorly and found it wrong in relative terms", and
lesson 4 (lines 485 to 488 and its misconception at 510) gave the same Roberts answer. Defect 4, the
compounding form: the lead-in states what the block asks for. **Fix:** make it an honest retrieval
checkpoint instead of a predict: ":::checkpoint From lesson 4: as a share of where each person started,
did men or women gain more muscle on the same programme, and what did Roberts and colleagues' authors
say might explain the one difference they found?" and move line 166's first sentence below it. The
reveal can then carry the outcome counts, which are new.

#### P5 [major] "The body adapts ... in each of these states" is labelled as the course's summary, but nothing in the sections supports it for most of them

Lines 228 to 230 ("What changes with age, and with pregnancy, childhood or illness, is not whether the
body adapts ... That reading is this course's summary of the sections that follow") and lines 596 to
599 ("the body adapts at every age and in each of these states"). The label is present, which is
right, but the sections it summarises don't show adaptation for pregnancy, diabetes, high blood
pressure, back pain or osteoarthritis: those sections are about permission and conditions. Only
older adults (Peterson, lesson 4's Borde and Grgic) and children (Faigenbaum's "safe, effective")
carry evidence of adaptation. This is drafting defect 22's first form: a hedge ("this course's
summary") dressing a claim the summarised material doesn't contain. It is also the lesson's organising
mechanism (OUTLINE's "why the same stimulus is adapted to at every age"), and the heading "Why age
doesn't stop the adaptation" (line 223) promises a mechanism that the section doesn't give beyond "the
stimulus is the same" (a restatement, not an explanation, and unsourced).

**Fix:** narrow both passages to what was read. Lines 225 to 230: "Every analysis of older adults read
for this course found strength still rises with training, into the eighties.[4] The review read on
children calls supervised training effective as well as safe.[12] For pregnancy and the conditions
below, the sources read are about whether training is safe and what it needs, not about how much it
builds. So this lesson's working reading, which is the course's and not any one source's, is that
what changes from group to group is mostly what can go wrong along the way." Retitle the subsection
"What changes with age" or fold it into the failure paragraph. At line 598, replace "It is the
mechanism in one line: the body adapts at every age and in each of these states" with "Where the
sources measured it, the body adapted; the conditions exist because each group has its own way of
going wrong."

#### P6 [major] Margit's strength step gives two incompatible stopping points and presents a general AHA rule as a change for her

Lines 285 to 292. Step 3 adopts lesson 7's plan, "stopping two or three reps short of failure", then
says "Two things change for her" and gives the AHA's "initial intensity should correspond to 40% to
60% of 1-RM", which it renders as "loads that feel light to moderate, with plenty left in reserve".
Three problems:

1. At 40 to 60 per cent of a one-rep maximum an 8-to-12-rep set leaves far more than two or three in
   reserve, so the reader is told both "2 to 3 in reserve" and "plenty left". Which one applies, and
   for how long ("the first few weeks"), isn't said.
2. The AHA sentence (R4.26) is about anyone "beginning a new RT program", not about older adults, so
   it isn't a thing that "changes for her". It would apply to lesson 7's Dele too, and lesson 7 didn't
   use it (no lesson 1 to 8 mentions 40 to 60 per cent). The reader who compares the two plans will
   notice.
3. The translation of per cent of 1RM into "light to moderate, with plenty left in reserve" and "She
   hasn't tested a one-rep maximum and shouldn't" are the course's own judgements, unlabelled.

**Fix:** "One thing changes for her, and one thing is worth adding. The stopping point matters more,
because of the stand's caution about older people and failure. And the AHA's statement gives a
lighter starting point for anyone new to resistance training than lesson 7's plan used: 'When
beginning a new RT program, an initial intensity should correspond to 40% to 60% of 1-RM'.[9] Margit
has no one-rep maximum to take a percentage of, and this course wouldn't have a beginner of 72 test
one, so on this course's reading that means loads she could lift many more times than she does for
the first few weeks, working towards lesson 7's two or three in reserve." Add a course-wide note that
lesson 7's plan and the AHA starting intensity should be reconciled from lesson 7's side.

#### P7 [major] "A first month at 72" doesn't show a month

Line 264's heading and OUTLINE's worked example (a) ("what a first month could look like inside the
guidance") promise a month. The example gives screening, the evidence, a pointer to lesson 7's plan
and a hand-off for balance, but no weeks, no days and no sessions. Margit is healthy (no condition, no
symptoms), so decision 3 allows the course to lay out the strength and walking parts. **Fix:** either
add a short week-by-week sketch the course is entitled to write (for example: two strength days on
lesson 7's four slots at the light start from P6, her usual walks kept, a third day for a balance
class found through her doctor or a qualified professional, each line labelled with what it rests on,
as lesson 7 does), or retitle the section "Margit: starting at 72" so it doesn't promise what it
doesn't give. The first is better and costs about 120 words, which P1's cuts pay for.

#### P8 [minor] The summary table narrows WHO, omits heart disease, and puts its label after the table

Line 587: "Strength work, plus balance on 3+ days if falls are the worry." WHO's recommendation (R1.1)
is for *all* older adults, "to enhance functional capacity and to prevent falls"; "if falls are the
worry" narrows it. **Fix:** "Strength work, and WHO's multicomponent balance and strength on 3+ days."
The same row's "Who to ask" gives only the PAR-Q+'s over-45 rule, which isn't specific to older adults,
and leaves out Step 4's physiotherapist for the balance part: "An exercise professional before
vigorous work; a physiotherapist or qualified professional for balance." The table has no row for
known heart disease, which has its own section and an exercise case (Leon): add "Known heart disease |
Resistance training, per the AHA | Medical clearance before any intensity | Events a course can't see
| Cardiologist or GP; ask about cardiac rehabilitation". Line 593's "breathing out" is this course's
convention, not the AHA's "proper breathing techniques"; write "proper breathing, no breath-holding".
And the label for the constructed column comes after the table (lines 596 to 597); defect 20 says label
it where the reader meets it. Move it into the lead-in at line 581: "The fourth column is this
course's reading of what each condition is for, not a source's."

#### P9 [minor] Source 17 says the exercise cases are labelled in the body; they aren't

Lines 834 to 836: "each labelled where it appears in the body ... Kofi, Ines, Wen and Leon in the
exercise are invented cases." The exercise (lines 628 to 643) doesn't say so. Defect 22's third check
("for every Sources entry that begins 'this is the course's own', go and find the sentence"). The cases
are obviously exercises, so the fix is one clause at line 630: "For each of these four invented
people, write three things".

#### P10 [minor] Cold-start terms not glossed

`npm run taught` lists lessons 1 to 8 of this course and fifteen earlier courses.

- Line 290, "RT" inside the AHA quotation, first use in this lesson; lesson 6 glossed it, but lesson 9
  never does ("AT" is glossed at 574, "RT" isn't). Add "RT is resistance training" after the
  quotation.
- Line 481, "MD" (mean difference) is unglossed.
- Line 669, "GP" (British term) unglossed; "family doctor" or "GP (family doctor)".
- Line 392, "ruptured membranes" and "preeclampsia" are in a quoted list the reader can't interpret.
  One gloss each is enough ("the waters breaking early"; "a pregnancy condition of high blood pressure
  and organ strain"). The list is a clinician's, so this is minor.
- Line 177, "effect sizes": lesson 4's exercise explains SMD; a back-reference ("lesson 4's
  standardised effect sizes") helps.

#### P11 [minor] Sources and citations

- Borde and Grgic are named or relied on at lines 203 to 204, 227 and 607 but aren't in lesson 9's
  Sources; source 4 cites Peterson only. Add them to source 4 ("and, from lesson 4, Borde 2015 and
  Grgic 2020").
- Line 527: "the ADA's advice to avoid the Valsalva manoeuvre.[9]" cites the AHA; it should be [14].
- Line 159: "which lessons 4, 5 and 7 used" (lesson 6 also used the stand).
- Line 607: "lesson 4 found large gains past 75 and 80". Lesson 4 said Grgic's training "improved
  strength clearly, including in those aged 80 and over"; "large" isn't in lesson 4's description.
  "clear gains past 75 and 80".
- Line 395: "did not survive this course's download" is pipeline talk in learner text (course
  convention). "ACOG's contraindication tables weren't in the version this course read, so the list
  above is the Canadian one."
- Go deeper, line 691: the NIA booklet is "read here in full" and "written for older adults", yet Step
  4 (lines 294 to 297) says "this course read no programme's detail" on balance. If the booklet
  contains balance exercises (the NIA's usually does; I couldn't open the PDF, 405 to curl), that
  sentence is wrong and Step 4 should point Margit to it as a starting place, labelled. If it doesn't,
  fine. Reviewer F or the fix pass should open the PDF and settle it.

#### P12 [minor] Cross-flag for Reviewer F: "in proportion" rests on effect sizes

Line 193 ("women build muscle in proportion much as men do"), line 603 and quiz 1's explanation
("similar relative muscle growth") gloss Roberts' "similar effect sizes for hypertrophy" as a
proportional (per cent) result. A standardised effect size isn't a per cent of starting size. The
gloss is SOURCES R5.15's own ("It shows women gain muscle at a similar *relative* rate"), so it may
be defect 26. Safer wording: "women's muscle grew by a similar standardised amount, which is how the
meta-analysis compares people of different sizes".

#### P13 [minor] Quiz: two weak distractors and one ambiguous stem

- Item 6, option D ("keep to walking unless his doctor agrees") is eliminated by the stem, which says
  he "has his doctor's go-ahead". Replace with a plausible wrong plan, e.g. "Low blood sugar only on
  days he lifts heavy, so light sessions need no change to his doses" (90 characters).
- Item 4, option C ("the list is about pain in the abdomen and the chest") is implausible for anyone
  who read the section. Try "Finish the set she's on, then stop, since calf pain is common after lifting
  legs" (length within 15 of the others).
- Item 1's stem, "a larger percentage of her starting weight", reads as body weight. "a larger
  percentage of what she could lift at the start".
- Item 4 tests the one warning sign the checkpoint at line 428 singles out ("worth remembering
  precisely"), so it partly tests recall of the page (defect 5b). Acceptable, but "headache" or "muscle
  weakness affecting balance" would test the list rather than the checkpoint's emphasis.
- Each explanation read against its key: all six agree.

#### P14 [minor] Ines's model answer merges ACOG and the Canadian guideline

Line 655: "no long periods lying flat if it makes her unwell". ACOG says avoid long periods lying flat,
without condition (line 397); the "if unwell" is the Canadian guideline's symptom trigger (line 400).
"no long periods lying flat on her back (ACOG), and change position if lying back makes her unwell
(the Canadian guideline)".

#### P15 [minor] Voice

- The "not X. It is Y" shape three times: line 228 ("is not whether the body adapts. It is what can go
  wrong"), line 453 ("The danger ... is not lifting. It is unsupervised equipment."), and the table's
  lead-in logic at 581. Once is fine; rewrite line 453: "The danger the evidence points to is
  unsupervised equipment."
- One-line morals closing paragraphs: line 236 ("so the caution costs nothing"), line 341 ("Highly
  supervised. Otherwise healthy. This sample."), line 361 ("It is not a reason to start alone."), line
  598 ("It is the mechanism in one line", which also uses the pipeline word "mechanism", defect 7),
  line 632 ("That is the point of the third question."). Keep 341, which earns it; cut or fold the
  others.
- "Now X." as a paragraph opener four times (145, 191, 338, 382). Vary two.
- Line 218 to 219 has a stray line break mid-sentence ("So read it as" / "older adults..."); harmless
  in render, tidy in source.

#### P16 [minor] Connections

Back-links name lessons 1, 4, 5 and 6 and Memory, but not lesson 7 (whose plan Margit uses) or lesson
8. Wen's week-two knee ache is exactly where lesson 8's soreness-versus-warning-sign material would
help the reader, and the exercise answer could point there in a clause ("lesson 8's line between
soreness and a warning sign applies"). Add lesson 7 to Back.

### Checked and fine

- Objectives: all four testable, each tested (quiz 1 and 3 for objective 1, 4 for 2, 5 for 3, 6 and
  the exercise for 4).
- Opening paragraph gives a reason to care; the callout directly follows it.
- Misconceptions: all six from OUTLINE present, plus the falls one.
- Exercise: real practice, timed with a cue the measurer reads ("Take 20 minutes"), cases none of
  which the reader can settle alone, as OUTLINE asks; model answers match the body.
- Predict blocks at 327 (LIFTMOR) and 441 (rugby) are placed before results. The LIFTMOR direction is
  hinted by lines 317 to 319 ("a trial that seems to say the opposite"), but the magnitude and the
  injury count are still open, so it works.
- Cross-references against the ten-lesson numbering: all correct.
- Links in teaching prose: present throughout.
- No Borde, Grgic or Montero figure is misused for women or older adults (course-wide notes); Montero
  is used only for its own limitation.

### Verdicts

- **Depth:** pass with fixes. Specific and sourced section by section; P5 (the organising claim
  outruns the sections) and P7 (the month isn't shown) are the two depth defects. Padding named in P1,
  about 5 minutes of reading.
- **Pedagogy:** fail until P2, P3 and P4 are fixed (no gap anywhere; one checkpoint asks for material
  taught later; one predict answered by the sentence above it). P6 is a coherence defect in the worked
  example. Quiz shape passes on every measure.
- **Cold start:** pass with minor glosses (P10).
- **Voice and media:** pass with minor fixes (P15). Contractions 6.5, bold 4.6, no em dashes, the one
  en dash is inside a verbatim quotation. No media to check; links resolve.
- **Length:** 100 measured against OUTLINE's ~65. About 5 to 7 minutes is padding (P1); the rest is
  earned. Record the exception in OUTLINE's length paragraph after the cuts.

Findings: 7 major (P1 to P7), 9 minor (P8 to P16), 0 critical.

---

### Resolutions applied

Fix pass, 2026-09-24, in a context that neither drafted nor reviewed the lesson. Findings: 42 (F: 5
major, 21 minor; P: 7 major, 9 minor; none critical). The reviewers' saved primaries had not
survived, so every factual finding was checked against a fresh fetch: PMC11209834 (AHA 2023),
PMC6908414 (ADA 2016), PMC3483033 (Faigenbaum), the ACOG 804 web page, the NIA booklet PDF
(pdftotext), and the PubMed abstracts of LIFTMOR (PMID 28975661), Roberts 2020 and Hubal 2005.

**SOURCES.md corrections and additions (each dated in its entry):**
- R2.12: Hubal's conclusion sentence on sex ("Men had only a slight advantage in relative size gains
  ..."), the source read for a per-cent size comparison. (P12)
- R5.15: correction. Roberts reports effect sizes, not per cent change; "similar *relative* rate" and
  "in proportion" were this file's gloss. (P12, defect 26)
- R4.20: ACOG's perceived-exertion and talk-test sentences, the gradual progression for sedentary
  women, and the resistance-training passage, **scoped to its section on elite athletes**. (F1, F25)
- R4.21: LIFTMOR's "High-intensity resistance and impact training", the screening clause and the
  "perceived high risk of fracture" sentence; the AHA's paragraph opener, the whole osteoporosis
  sentence pair with "the guidance of an exercise professional", the bone-density sentence, and the
  falls sentences (noted as a narrative statement citing one reference). (F4, F8, F10, F12)
- R4.24: the AHA hypertension figures (−6/−5) with the ">40" scope; the ADA's hyperglycaemia and
  ketones sentences; the note that "6−15 h" sits in the nocturnal-hypoglycaemia paragraph with type 1
  references. (F3, F6, F7)
- R4.26: "On the basis of limited data" and "23 trials ... (n=1174 total participants)". (F11)
- R4.3 (NIA): the booklet's balance section (about three sessions a week, six examples, the
  sturdy-chair tip), which settles P11's open question: the booklet does have balance material, as
  examples rather than a programme. (P11)

**Reviewer F**
- F1 fixed, with a scope correction. The reviewer framed ACOG's load and Valsalva passage as advice
  for "athletes who want to keep training hard"; in the primary it is in the section on **elite
  athletes**. The lesson now quotes it with that scope, says it isn't written for every pregnant
  lifter, and presents it as the cautious side's strongest reason (sparse literature). Added the
  gradual-progression sentence and a table line ("athletes training hard get approval and consider
  lighter loads").
- F2 fixed (Ines: ACOG unconditional; the Canadian symptom rule separately). Also P14.
- F3 fixed. Quiz 6's high-sugar distractor now says high readings are "the only risk worth
  planning his doses around", which the source contradicts; the explanation says high readings
  matter too. The body adds a "High blood sugar" bullet with the ADA's recommendation.
- F4 fixed. The AHA's falls sentences are quoted after "Uncertain isn't the same as ineffective",
  with the note that it is a narrative statement and Cochrane the graded test, and that both point
  to balance built in. The misconception and quiz 2's explanation now name the AHA view. (The
  reviewer said the AHA sentence carries no citation; the next sentence cites ref 20, so the lesson
  says "citing one reference".)
- F5 fixed: added "The LIFTMOR trial shows heavy lifting is safe with osteoporosis" to the
  misconception list. Count now 7 fragile, 1 limitless, plus the falls entry, which corrects an
  over-reading on the strength side.
- F6 fixed: −6/−5 in hypertension added beside −4/−2. The AHA's medication comparison is left out.
- F7 fixed in body ("in the statement's paragraph on low blood sugar at night") and in quiz 6's
  explanation (the type 2 clause and the timing clause are now separate).
- F8 fixed: HiRIT expanded, "heavy lifting with impact work" in body, predict, table, misconception;
  screening clause quoted.
- F9 fixed ("may benefit from") in misconception and quiz 3's explanation.
- F10 fixed: the AHA's bone sentence opens the caution paragraph; "a statement that seems to agree"
  is now "a caution that seems to agree".
- F11 fixed in the body and in Leon's model answer.
- F12 fixed: quotation extended to "may provide enhanced benefit".
- F13 fixed ("who plan to build up gradually").
- F14 fixed ("it looked back at injuries after the fact rather than following people forward").
- F15 fixed, in P15's shape (no "not X. It is Y."): "The danger the evidence points to is lifting
  without qualified supervision, and at its worst, equipment left where a child can play with it."
- F16 fixed ("something the guideline warns may happen").
- F17 fixed in the opening.
- F18 fixed with P5 (below).
- F19 fixed: [9][14][7] on the condensed breathing sentence.
- F20 fixed with P11: Borde and Grgic named in the body and added to source 4 with their read levels
  (Borde full text, Grgic abstract only, per R2.14).
- F21 fixed: Hubal's read level and measure (one arm's elbow flexors, 12 weeks) at point of use.
- F22 fixed: "A similar caution fits much of the literature behind lessons 4 to 7."
- F23 fixed: "this course doesn't ask a beginner to test one".
- F24 fixed: the squat chair is "one without wheels, backed against a wall" (the course-wide set-up
  line), and the NIA sturdy-chair tip covers the balance work.
- F25 fixed: ACOG's perceived-exertion sentence, scoped to what it says (it names perceived
  exertion as possibly better than heart rate, and the talk test as "another way"; the reviewer had
  both as "more effective"). Points to lesson 2's tools.
- F26 fixed with P8: heart-disease row added; older adults' "Who to ask" now names the balance
  professional.

**Reviewer P**
- P1 taken in part. Cut: the whose-evidence section to retrieval plus one Montero sentence (the
  second, which lesson 3 didn't quote; F22's wording); the Women predict's lead-in (P4); the high
  blood pressure section's repeats (now one pointer sentence to lesson 6); the ADA clearance repeat
  (one sentence); "it is the reason this course keeps saying stop short of failure"; the pacemaker
  quotation (now a pointer to lesson 6, with the table keeping the condition); the consensus
  sentence (moved into source 12); misconception entries to one line each. **Not cut further**,
  because F1, F4, F6, F10, F25, P2, P6 and P7 added more than P1 removed. Length: see below.
- P2 fixed: Step 1 is now a checkpoint the reader answers from lesson 1 before the other steps are
  shown.
- P3 fixed: the tablet question left the Margit checkpoint; the secretagogue gloss and "ask her
  doctor which kind hers is" now close the diabetes section's low-blood-sugar bullet, pointing back
  to Margit.
- P4 fixed: the Women predict is a retrieval checkpoint from lesson 4, and its answer glosses effect
  size. The lesson now has two predicts (LIFTMOR, rugby), inside the 2 to 3 band.
- P5 fixed with F18: the subsection is "What changes with age"; it now says which groups the sources
  show adapting (older adults, children) and which sources are about safety only, and labels the
  working reading as the course's. The table's closing sentence is P5's wording, and "It is the
  mechanism in one line" is gone.
- P6 fixed: Step 3 now says "one thing changes, one is worth adding", presents the AHA's 40 to 60
  per cent as a starting point for anyone new, labels "loads she could lift many more times" as the
  course's reading, and works towards lesson 7's two or three in reserve. **For course-wide.md:**
  lesson 7's plan and the AHA starting intensity should be reconciled from lesson 7's side (lesson 7
  starts sets of about five "well short of hard", which is compatible, but doesn't cite the AHA).
- P7 fixed: a labelled month sketch (weeks 1 and 2, weeks 3 and 4, after the month), each line
  saying what it rests on (lesson 7's conventions, the AHA's light start, the NIA's frequency, the
  stand's caution). Healthy 72-year-old, inside general guidance, so decision 3 allows it.
- P8 fixed: WHO row no longer narrowed; heart-disease row added; "proper breathing"; the fourth
  column's label moved into the table's lead-in.
- P9 fixed ("For each of these four invented people").
- P10 fixed: RT, MD, GP (family doctor), ruptured membranes, preeclampsia and effect size glossed;
  mm Hg glossed too.
- P11 fixed: Borde and Grgic in source 4; [14] on the Valsalva line; "lessons 4 to 7"; "clear gains
  past 75 and 80"; the download sentence reworded; NIA opened and used for Step 4 (see SOURCES).
- P12 fixed at SOURCES first (R5.15, R2.12), then the lesson: Roberts is "similar effect sizes", and
  the per-cent comparison comes from Hubal's conclusion. Quiz 1's explanation and the misconception
  follow.
- P13 fixed: quiz 6's weak "keep to walking" option replaced with "Low blood sugar only on days he
  lifts heavy"; quiz 1's stem now says "of what she could lift at the start"; quiz 4 now tests
  headache rather than the calf sign the checkpoint singled out, so its implausible "abdomen and
  chest" option went with it.
- P14 fixed with F2.
- P15 fixed: the three "not X. It is Y." shapes rewritten; morals at "costs nothing", "not a reason
  to start alone", "the mechanism in one line" and "the point of the third question" cut or folded;
  two "Now X." openers varied; stray line break fixed. "Highly supervised. Otherwise healthy. This
  sample." kept, as P advised.
- P16 fixed: lessons 7 and 8 in Connections; Wen's answer points to lesson 8's soreness line.

**Declined:** none outright. Two findings were applied with a correction to the reviewer's
wording (F1's scope, F25's claim about the talk test), and one reviewer factual aside was wrong
(F4: the falls passage does cite a reference).

**Final measures.**
- Body words (before Sources): about 7,250; `npm run minutes`: 110 modelled, `minutes: 110` set by
  hand (was 100; OUTLINE plans ~65).
- Bold 35 spans, 4.8 per 1,000 body words. Contractions outside quotation marks 53, 7.3 per 1,000.
- No em dashes, no spaced en dashes; banned-word search clean (one hit is inside the ADA's own
  "recommended").
- Quiz keys 1,3,2,0,2,1 (unchanged; differs from lessons 7, 8 and 10). Option lengths: 95/94/93/93,
  89/94/90/94, 96/83/89/94, 92/89/92/93, 98/102/100/101, 97/96/92/94; widest spread 13 (item 3).
  Every explanation read against the option its key now selects. `check-quiz-shape`: passes.
- Callout byte-identical to lesson 8's (md5 match). `npm run validate` exits 0 with no line naming
  this file (the course is `drafting`, so the built-course lints don't run on it).
  `npm run quotes strength-and-fitness`: 386 sourced quotations, 0 not found.

**For course-wide.md (not edited here; this pass could touch only lesson 9, this file and
SOURCES.md):**
- Lesson 9 measures 110 against OUTLINE's ~65: nine groups each with its own source and condition,
  the month sketch, a 20-minute exercise, a Sources list of about 10 minutes, and a marked break at
  "Common conditions". Record it in OUTLINE's "Lesson length" paragraph beside lessons 1 to 3 and 5
  to 8.
- R5.15's "relative rate" gloss is corrected: any lesson or script saying women's muscle grows
  "in proportion" on Roberts's authority should cite Hubal's conclusion instead (lesson 4's
  misconception at its line 510 is worth a check).
- ACOG's resistance-load caution is for elite athletes; don't generalise it.
- The AHA statement supports resistance training for falls and for bone in its own voice (R4.21);
  lesson 10 should carry that beside Cochrane's "uncertain" if it touches falls.
- Lesson 7 and the AHA's 40 to 60 per cent starting intensity (P6).

**Status after review:** clean.
