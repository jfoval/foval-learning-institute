# Reviews: Car Basics, final test

## 2026-09-26 — Final test review (fresh context)

Fresh-context review of `assessments/final-test.md` (24 items, one for each of lessons 2 to 25),
read against every lesson as it stands after the course-wide neutrality fixes (commits 250c2e4,
3592f25, db0f58b), the conventions in `pipeline-briefs.md` (base labels included), `course-wide.md`
and `neutrality-audit.md`. The test was not edited; nothing was committed.

**What was run.**
- `node scripts/check-quiz-shape.cjs` and `node scripts/check-quiz-letters.cjs` on the file: both clean.
- Every quotation in the test string-matched against the lessons (scratchpad `qc.cjs`): all match a
  lesson. Nine match a lesson other than the item's own (item 3's AA line is lesson 5's; item 7's Part
  570 and New York lines are lesson 22's; item 8's restart box is quoted in lesson 14, and lesson 9
  describes it; item 10's AA and Ford lines are lesson 9's; item 19's reg 27(1)(e) is lessons 8 and 20).
  None is a new fact.
- Keys ACDCACBDBCDACDBCBABDADBA: six of each letter, no adjacent repeat, no xyxy run, no run of four
  shared with any of the 25 lessons' sequences (by script). Key never the sole longest option (tied
  longest in 5 and 16); option spread 1 to 9 characters. Absolute words average 0.50 per key and 0.56
  per distractor.
- Places: all 22 appear in no other file under `courses/`, `curriculum/`, `site/` or `docs/`
  (`grep -rlw`, bare names). UK towns carry their nation; non-law US cases name no state (item 16's
  California is the handbook's own jurisdiction, as in lesson 17).
- Callout: byte-identical to `CAR_BASICS_SAFETY` in `scripts/build.mjs`, which now checks
  `assessments/` too (evaluated the constant and tested `includes`). No em dash, no spaced en dash.
- `npm run validate`: exit 0 (the course is `drafting`, so it warns and skips). `node scripts/build.mjs
  --check --drafts`: no Car Basics line.

**Pass mark and time.** 17 of 24 (16.8 rounded up) and 45 minutes match Home Repair's settled test.
Stems and options are 2,739 words against Home Repair's 2,741; the explanations run longer (3,395
against 2,827) but are read after answering. Sensible as set.

**Countries.** Every law item (6, 7, 9, 14, 15, 17, 19, 20, 22, 23, 24) opens "As general
information" and names the place. Items 13 and 16 are rightly treated as not-law (a maker's handbook
and a regulator's advice; a state handbook's advice). No Northern Ireland item; no GB rule reaches
Northern Ireland and no US rule reaches a UK car. Item 23's US options are distractors, and its
explanation labels them US.

**Contested lessons.** Only item 21 touches a contested question, and it keys the kind of evidence,
not a side ("None of this says which side is right"). Items 7, 16 and 23 are on settled law or
advice, and item 7 says the replacement argument is separate (see R15 for its wording).

**Safety.** No key has anyone under a car or anything under a jack, near high voltage, at a hot cap,
or doing a job on a motorway or other fast road; no country's roadside steps reach the other's
reader. Conventions checked and holding: silent car not off, petrol included (8); the callout's US
exceptions (16); the 25 per cent point scoped to standard-load tyres and called the latest point (6);
reg 27(3) an exemption ending above 50 mph (17); s.48 an exemption, not a defence (19); Part 570 binds
states, not drivers (7); Ford's 49 ft and NHTSA's 50 feet never "the same advice", and moving the car
labelled the recovery service's (13); the RAC's cambelt signs with its check and no-symptoms lines
(1). One gap: R8 (the chock).

## Findings

### R1. Item 3 replays lesson 4's quiz 2, and its AA line is unlabelled and not lesson 4's [major]

Lesson 4 quiz 2: an electric car unused for three weeks, a traction battery showing plenty of charge,
"the screens stay dark", key the 12 V battery. Item 3: a full hybrid unused for a month, a hybrid
battery "nearly full", "the screens stay dark", key the 12 V battery. Same case, same key, same words.
The explanation also cites the AA's flat-battery line with no label (decision 11 and the N4 rule: each
quiz item that names a body), under a stem that says "On the sources lesson 4 read" while that page is
lesson 5's. (Drafter's uncertain point: the AA line itself is general to car batteries and would be
fair with its label; the replay is the problem.)

**Fix:** replace the item, keeping key D, on the blueprint's "charge its 12 V", which lesson 4 teaches
and no quiz item asks:

- q: "A full hybrid with no charging socket, in Tenby, Wales, is about to set off on a long run. Its
  owner says the engine's alternator will top up the 12 V battery on the way, as it did in his old
  petrol car. On the sources lesson 4 read, what typically recharges a hybrid's 12 V battery?"
- A "An alternator on the engine, as in a petrol car, whenever the engine is running"
- B "A mains charger clipped onto the 12 V battery at home, since there's no socket"
- C "Nothing while driving, so only a jump start from another car can top it up"
- D "Typically a DC-DC converter, stepping the big battery's voltage down, NHTSA says" (key)
- explain: NHTSA: "Typically, fully electric and many hybrid-electric vehicles do not use a
  conventional alternator to recharge the 12-volt battery. Instead, these vehicles use a DC-DC
  converter to step high-voltage from the battery pack down to low-voltage". "Many", not all, so the
  handbook for his car is the one that says for it. No source lesson 4 read gives a mains charger as
  how a hybrid keeps its 12 V battery up, and a jump start (lesson 13) is for a flat battery, by the
  handbook's method, not the routine charge. Nothing on the high-voltage side is touched: the
  converter is the car's own. Re-measure option lengths after the edit.

### R2. Item 4 replays lesson 5's quiz 2, and AAA's label is short [major]

Lesson 5 quiz 2: a charge light on a journey; this car's handbook says stop and call the dealer;
another model's says only have it checked; which governs. Item 4 is the same question with the two
handbooks named from lesson 5's own table (Toyota's and Ford's rows), and the same key. Separately,
"AAA's Mountain West club, which sells roadside assistance" drops the base label's "and runs a repair
network" (pipeline-briefs, N5; lesson 5 line 340 has it).

**Fix:** replace the item, keeping key C, with the LEAF's charge light, which lesson 4 teaches and no
quiz asks. Grep a new US town first.

- q: "In [new US town], the 12 V charge warning light on a 2024 Nissan LEAF sold in the US comes on
  while the car is in READY and stays on. The driver says an electric car has no alternator, so the
  light can't mean anything. What does Nissan's handbook say?"
- A "Carry on, since with no alternator the light can't be reporting a charging fault"
- B "Stop and plug in, since the light means the Li-ion battery is running out of range"
- C "Stop in a safe place right away and have the system checked, as its handbook says" (key)
- D "Fit a new 12 V battery first, since the light means that battery itself has failed"
- explain: Nissan: "Immediately stop the vehicle in a safe location and have the system checked."
  The LEAF has a 12 V charge warning light for the converter's job: NHTSA says such cars "use a
  DC-DC converter" instead of an alternator, so no alternator is no reason to ignore it. The range
  gauge reports the traction battery; this light is the 12 V side's. AAA, whose clubs sell roadside
  assistance and run a repair network, says a battery light "doesn't usually mean you need (just) a
  battery". Stopping somewhere safe is yours; the cause is Call someone.

If the fixer keeps the current item instead, at least give AAA its base label.

### R3. Item 15 replays lesson 16's checkpoint (a) and quiz 1 [major]

Checkpoint (a): "A car dies on a straight rural road in daylight, half on the verge, with a wide grass
bank"; its answer is "advised, 45 metres back on the same side, placed with great care". Item 15: "in
daylight on a straight B-road ... two wheels on the carriageway and a wide, firm verge"; its key is
"Advice, at least 45 metres behind on the same side, and placed with great care". Quiz 1 already asks
whether the triangle is a MUST. A learner who remembers the checkpoint needs nothing else.

**Fix:** move the case to the dark and to where people stand, which Rule 276 covers and no lesson
case asks (checkpoint (d) is a blind bend). Keep key B. Grep a new place.

- q: "As general information: after dark on a straight, unlit road near [new place], [nation], a car
  breaks down partly in its lane, with a firm verge beside it. The driver has a warning triangle and a
  passenger. Which describes the Highway Code's Rule 276 here?"
- A "A MUST after dark: the triangle 45 metres back, since Rule 276 turns to law at night"
- B "Advice: the triangle 45 m back with great care, sidelights on, nobody hiding the lights" (key)
- C "Advice: one person stands behind the car with a torch, where drivers coming up see them"
- D "Nothing more, since Rule 116 makes hazard lights a MUST for any car stopped at night"
- explain from Rule 276's lines as lesson 16 tables them: none uses MUST (the Code's convention);
  "at least 45 metres (147 feet) behind ... on the same side", "Always take great care"; "if possible,
  keep your sidelights on if it is dark or visibility is poor"; "do not stand (or let anybody else
  stand) between your vehicle and oncoming traffic"; "at night or in poor visibility do not stand where
  you will prevent other road users seeing your lights". Rule 116's MUST NOT is about hazard lights
  while driving; stopped, they "may be used" when the car is obstructing. Keep "This course read
  nothing on whether the law requires a car to carry one" and the job label with its conditions.
  Re-measure lengths (B is long as written).

### R4. Item 24 replays lesson 25's quiz 1, quiz 2 and exercise [major]

Lesson 25 quiz 1: "As general information: in Michigan, a shop gives a written estimate of $300 ...
the customer signs no waiver ... what is the most the shop may charge under MCL 257.1332 as read?",
with options "$50 over any estimate", "Florida's $10 borrowed", "no Michigan shop may charge a cent
above" and the key. Item 24 has the same stem shape and the same four option families; its twist (under
$100, Florida would give more) is lesson 25's exercise answer ("if you got $85 in Michigan, you borrowed
Florida's floor") and quiz 2's Florida floor.

**Fix:** keep Traverse City and key A, and test the clause no lesson case uses, "unless specifically
requested by the customer":

- q: "As general information: a shop in Traverse City, Michigan, gives a written estimate of $400. No
  waiver is signed, and when she leaves the car the customer asks to be phoned before anything over the
  estimate. The shop doesn't phone and bills $430. Under MCL 257.1332 as read, what's the most it may
  charge without her consent?"
- A "$400, since she asked to be consulted, which takes the allowance away" (key)
- B "$440, since the lesser of 10% or $50 is $40 on an estimate of $400"
- C "$450, since Michigan lets a shop add $50 to a written estimate"
- D "$430, since the bill is within 10 per cent of the estimate anyway"
- explain: Michigan: "the facility is not required to obtain the written or oral consent of the
  customer for the excess charge unless specifically requested by the customer". She asked, so on
  this course's reading of those words the allowance without consent doesn't reach this bill. Had she
  not asked, 10 per cent of $400 is $40, less than $50, so $440 (this course's arithmetic); that is also
  why $430 being within 10 per cent doesn't help. $50 over is Michigan's cap only from $500 up. Keep
  "Whose rule is it? Law, Michigan's", the labels, and the FTC routes sentence. The test's HTML comment
  names item 24 as a lesson 1 label item, so the labels stay in.

### R5. Item 22 ties GOV.UK's "must not drive" to this letter in the course's voice [major]

Lesson 23 and `course-wide.md` (lesson 23 notes): GOV.UK's page "doesn't say which recalls that last
sentence covers"; tying it to the letter and DVSA's table is this course's reading, labelled, with the
fallback. The key says "The code's Stop Drive row says the car must not be driven, and GOV.UK says so
too", and the explanation's "A wait for a slot changes neither" treats GOV.UK's line as about this
recall, unlabelled. (Drafter's uncertain point, "nothing read turns it into leave to drive": sound as
worded, a statement about what was read; keep it.)

**Fix:** key D: "The code's Stop Drive row says the car must not be driven; GOV.UK's line fits it
too" (re-measure). Explanation, after the GOV.UK quotation: "GOV.UK's page doesn't say which recalls
that sentence covers; on this course's reading it goes with the letter, and this letter is a Stop
Drive. A wait for a slot changes neither." Keep the fallback's sense in the last sentence: "On this
course's reading she doesn't drive it, and asks the maker and the dealer how the repair will be
arranged".

### R6. Item 21's key is the only option about crashes [major, with a minor replay note]

The stem asks what would settle "whether periodic safety inspection reduces crashes"; only the key
says "Crash data". A learner matches the word. Also minor: the item replays lesson 22's "Weighing one
claim from each side" (Pennsylvania's count against crash evidence; the Texas claim against "a count
of the defects found at inspection that the car had already flagged"), so it tests recall of that
section. It is the safest form for the one contested item, so keep the frame and fix the tell.

**Fix:** replace distractor C (the officials' survey) with a crash-data distractor the GAO gaps rule
out: "Police crash reports from states that ended inspection, before and after the change". Explain it
by content: GAO reports, from some literature and safety advocate organisations, that police officers
"often do not have the time and resources to conduct a thorough vehicle check", and its own
before-and-after look at two states "said other factors could explain" what it found (lesson 22
quiz 1's wording; check the lesson before quoting). Keep "None of this says which side is right."
Re-run the letters check.

### R7. Commercial labels missing or short in four items [major, course-wide convention N4/N5]

`pipeline-briefs.md` (2026-09-26, N4): a commercial body carries its label in each quiz item that
names it; (N5) the base labels.
- Item 3: the AA bare (moot if R1 is applied).
- Item 4: AAA short (moot if R2 is applied).
- Item 10, line 226: "the AA says too much oil is 'just as bad'". **Fix:** "the AA, which also sells
  breakdown cover and repairs, says". Same line: "and Ford that above the maximum" gives a Maverick
  handbook line as general; **fix:** "and Ford, in its Maverick handbook, that above the maximum".
- Item 16, line 357: "AAA Club Alliance, whose clubs sell roadside assistance". **Fix:** "whose clubs
  sell roadside assistance and run a repair network".
- Item 23, lines 515 and 519: Which? and The Motor Ombudsman bare. **Fix:** "Which?, which earns
  commission from some retailer links, notes" and "The Motor Ombudsman's code (it is funded by the
  garages it accredits) calls such cover a warranty" (lesson 24's wording).

### R8. Item 17 keys a wheel change with no chock in the car [major]

`course-wide.md` (lesson 19 notes): "A missing chock ends a wheel change ... No lesson, script or
test item treats the chock as the one step that can be skipped." Item 17's stem lists "a space saver,
a jack and a handbook with the method", and the key is "Change it". Item 18 names the chock; item 17
should too.

**Fix (stem):** "The car carries a space saver, a jack, a wheel chock and a handbook with the method."
Explanation: "the car's own kit, chock included, and a handbook with the method".

### R9. Item 17's law half replays lesson 18's quiz 1 option set [minor]

Lesson 18 quiz 1's four options are "sets 50 mph as the legal speed limit", "silent above 50", "excuses
... only up to 50 mph" and "bans ... roads over 50 mph". Item 17's A, C and D are those three wrong
readings again. **Fix:** make one distractor turn on the decision, which is lesson 18's blueprint
target, e.g. replace D with "Seal it rather than change it, since a sealed tyre can take the 60 mph
road" and answer it from lesson 18's sealant conditions (the kit's own speed limit and "to the nearest
tyre fitter"; check lesson 18's table before quoting). Keep key B.

### R10. Item 16 counts open ground as the handbook's third exception in the course's voice [minor]

"Two of those hold here" puts "flat open ground" under "An area for you to safely stay away from
freeway lanes" without the label decision 22 asks for. The key doesn't depend on it. **Fix:** "One of
those plainly holds here, not enough space, and any one is enough; on this course's reading the open
ground may meet the third as well. A guardrail is only one of them."

### R11. Item 2 is close to lesson 3's Ripon predict [minor]

Same car type, same light, low fuel, key "fill up first", and the stem copies Ripon's handbook line
("drive at a steady speed for a while"). The fifth of a tank, the filling station and the 60 mph road
are new, and the blueprint names this case, so keep it. **Fix:** reword the stem's handbook line
("the handbook's page on the light allows a steady run"); and in the explanation, "a light that won't
clear is a garage's" becomes "a light that won't clear is Call someone" (lesson 3's label).

### R12. Item 14's stem copies lesson 15 quiz 1's [minor]

"Against Rule 229, what's left undone?" is lesson 15 quiz 1's closing question word for word; the case
(lights and plate frosted, not the rear window) is the other half of the same rule. **Fix:** "Which of
Rule 229's lines does she still have to meet, and which of them are MUSTs?" and adjust option A's lead
accordingly.

### R13. Item 23's "no UK statute giving one" is wider than lesson 24 [minor]

Lesson 24 (line 300): "this course read no UK consumer statute on the point". **Fix:** "and this
course read no UK consumer statute on the point."

### R14. Item 7's last sentence sets a 1/32 tyre beside the replacement argument [minor]

`course-wide.md` (lesson 08 notes): "No lesson frames a groove under 2/32 inch ... as part of the
replacement argument; NHTSA's 'not safe' goes beside it." **Fix:** replace the last sentence with
"NHTSA's advice, for any car in the US, is that tyres 'are not safe and should be replaced' at 2/32
inch; that's advice, not law."

### R15. Items 18 and 19 have one option free of absolutes [minor]

`review-lesson.md` asks for at least two per item. Item 18: A "no handbook read", B "never", D
"Nothing"; item 19: A "no points", B "only ... no", D "only". (Items 14 and 22 fail the count only on
the sources' own MUST and "must not", which is not a tell.) **Fix:** item 18 A "The missing locking-nut
key, which the handbooks read don't cover, so it's Call someone"; item 19 A "Section 42, without
points, since the cut is in the sidewall, not in the tread itself". Re-run the shape check.

### R16. The intro says the cars are invented [minor]

Items 4, 5, 8, 12 and 13 name real models (2023 Corolla, 2024 Maverick, 2024 LEAF), whose handbook
lines are the real ones. **Fix:** "The people are invented, and so are any handbook figures a
question gives "for this question"; the cars named by maker and model are real, and the rules,
handbook lines, advice and findings in the explanations are the real ones the lessons read".

### R17. UK words in the course's voice [minor]

Item 8's explanation, "before the hood is opened", is the course's paraphrase of Ford, so it takes the
UK word: "before the bonnet (hood) is opened". The stem's "parking lot" and "petrol (gasoline)" in a
US scene are fine.

## Checked and left

- **Item 1:** the arithmetic (80,000 miles and 2 years since the change; 140,000 on the odometer in
  about six months at 40,000 a year) is right; lesson 2's label variant "cambelt changes" is allowed.
- **Item 5:** the complement of lesson 6 quiz 4, whose explanation ends "If the light had stayed on with
  the parking brake off, Ford's and Toyota's handbooks treat it as a fluid or system fault". Close, but
  the item tests the ABS-lamp and top-up readings the quiz doesn't. Leave.
- **Item 6:** 26 x 0.75 = 19.5; Table 1's 20 wins; 20 / 0.75 = 26.67, so "above about 26.7 psi" is
  right. New against lesson 7 quiz 1 (38 psi, 25 per cent wins).
- **Item 8:** the blueprint names a hybrid's bonnet; the petrol stop-start truck avoids lesson 9 quiz
  2's plug-in and uses lesson 9's own p. 170 point. Leave.
- **Item 9:** new against lesson 10's Welshpool checkpoint and quiz 1: here the lamp failed on this
  journey, so the words fit the daylight trip.
- **Item 13:** "Neither is limited to an attached garage" is what the two sentences say on their face;
  no label needed.
- **Item 20:** the GB half of lesson 21's worked example with a different Dangerous defect (pads under
  1.5 mm, Dangerous in lesson 6 and lesson 21's table), plus a new point: the expired-MOT repair journey
  is a different rule. Lesson 21's quiz 1 explanation keeps them apart the same way. Leave.
- **Item 22:** the UK twin of lesson 23 quiz 5 (US "Do Not Drive", parts weeks away). Leave, with R5.
- **Items 11, 12, 18, 19:** match their lessons, new cases, every option answered by content.
- Every explanation answers every option by content (read one by one).

## Verdict

**NEEDS FIXES.** No critical finding: the callout is exact, every safety convention but the chock
holds, no item settles a contested question, and the countries are kept apart. Eight major findings:
four replays of a lesson's own case (R1 to R4, each with a replacement that keeps its key letter, so
the key sequence and its checks stand), one unlabelled course reading on a stop-drive recall (R5), one
word-match tell (R6), the commercial labels (R7) and the missing chock (R8). Nine minor (R9 to R17). After the fixes,
re-run `check-quiz-shape.cjs`, `check-quiz-letters.cjs`, the run-of-four script, the place grep for
every new place, and read each rewritten explanation against its key.

## Resolutions (2026-09-26)

Fix pass in a further context, against the lessons as they stand, `pipeline-briefs.md` (N4 and N5 base
labels) and `course-wide.md`. Keys unchanged: ACDCACBDBCDACDBCBABDADBA.

- **R1 (item 3), applied.** The reviewer's item, key D, Tenby kept (grep: only this file). NHTSA's
  sentence checked against lesson 4 and quoted whole; "many", not all, kept as the hedge. Two option
  edits for shape: A lost "whenever" (the key was the only option without an absolute) and B was
  lengthened (D was the sole longest).
- **R2 (item 4), applied, with a note.** The reviewer's LEAF item, key C, in Kalispell (grep: unused).
  Nissan's two lines and NHTSA's are checked against lessons 4 and 5; AAA carries its base label. **Not
  corrected, but flagged:** lesson 5's Juneau predict already has a LEAF's charge light answered by the
  same Nissan line, so the key is not new; what is new is the no-alternator reasoning the item turns
  on (lesson 4's checkpoint misconception, now applied to the light). Worth a look in the re-check.
- **R3 (item 15), applied with a change: the reviewer was wrong on one point.** The suggested night
  case (unlit road, verge, where people stand, the lights not hidden) is lesson 16's quiz 2 (night,
  unlit single carriageway, verge, sheltering behind the car). The item now asks about **fog by day**
  near Llanidloes, Wales (grep: unused), which neither the checkpoint nor either quiz uses, and keys
  Rule 276's lights and clothing lines as advice: hazards (the car is obstructing), sidelights ("dark
  or visibility is poor"), reflective clothing ("at night or in poor visibility"), the triangle with
  great care. Key B kept. Options with a colon are quoted for YAML.
- **R4 (item 24), applied.** The reviewer's item, key A, Traverse City kept. Checked against lesson
  25's § 257.1332 quotation and table ("unless you asked to be consulted"); "on this course's reading"
  carries the conclusion. Key shortened to "which removes the allowance" so it isn't the sole longest.
- **R5 (item 22), applied.** Key D now "GOV.UK's line fits too" (shortened from the reviewer's "fits it
  too" for length); the explanation labels the link to the letter as this course's reading, and the
  last sentence has "she doesn't drive it".
- **R6 (item 21), applied, with one correction.** C is now police crash reports before and after a
  state ended inspection. "Said other factors could explain" is lesson 22 quiz 1's paraphrase, not a
  quotation, so the explanation quotes the lesson body instead ("does not provide sufficient evidence
  to conclude that inspection programs did not have an effect on crash rates"). The officials' survey
  sentence is gone with its option. The key gained "for every state" to balance absolutes.
- **R7, applied.** Items 3 and 4 moot (replaced; item 4's AAA carries the base label). Item 10: the AA's
  label and "Ford, in its Maverick handbook". Item 16: AAA's full base label. Item 23: Which?'s and The
  Motor Ombudsman's labels in lesson 24's wording.
- **R8 (item 17), applied.** "A wheel chock" in the stem; "the car's own kit, chock included" in the
  explanation.
- **R9 (item 17), applied.** D is now "Seal it rather than change it", answered from lesson 18's kit
  conditions (each kit's below-50 mph drive to spread the sealant; Nissan's "cannot permanently seal").
  The explanation drops "and not silence" with the old D.
- **R10 (item 16), applied** as worded.
- **R11 (item 2), applied.** Stem reworded; "a light that won't clear is Call someone". Also, for
  shape: A lost "whatever" (now "at this fuel level"), B ends "can't clear the filter", D opens "Wait".
- **R12 (item 14), applied.** New closing question; A now "The snow line alone, as Rule 229's one MUST
  is about clearing the windows" (the explanation's two MUSTs answer it).
- **R13 (item 23), applied** as worded.
- **R14 (item 7), applied** as worded (checked against lesson 8, line 289).
- **R15 (items 18 and 19), applied.** Item 18 A shortened to "... don't cover, so Call someone" to keep it
  off sole longest.
- **R16 (intro), applied** as worded.
- **R17 (item 8), applied:** "before the bonnet (hood) is opened".
- **Also, found by the re-run:** item 6 B's "any car's tyre" became "passenger tyres", because C (the
  key) was the only option without an absolute.

**Re-run after the fixes.** `check-quiz-shape.cjs` and `check-quiz-letters.cjs`: both clean. By script:
the key is never the sole longest option; absolute words average 0.50 per key and 0.54 per distractor;
no item has the key as its only absolute-free option; no run of four in the key sequence matches any
of the 25 lessons' sequences. Every quotation in the changed items string-matches a lesson. New places
(Kalispell, Llanidloes) and Tenby: `grep -rlw` finds only this test. Callout byte-identical to before;
no em dash or spaced en dash. `npm run validate`: exit 0.

**Verdict: needs targeted re-check of changed items** (3, 4, 15, 21, 22, 24 in full; the edited
options and explanations in 2, 6, 7, 8, 10, 14, 16, 17, 18, 19, 23; the intro).
