# Reviews: Car Basics course project, "Your car file"

## 2026-09-26 — Project — fresh-context review

**Reviewer:** one fresh-context reviewer. Read CLAUDE.md, courses/CLAUDE.md, standards 4.4, the
style guide, this course's `pipeline-briefs.md` (conventions and the Stage 4 passes), OUTLINE
decision 1 and "Assessments", `reviews/course-wide.md` in full, Home Repair's `reviews/project.md`
for the shape, and the drafter's notes. Every lesson's "For your plan" and every lesson's exercise
read in full (lessons 1 to 25, after their second passes), and every lesson the project cites opened
at the sentence it relies on: lessons 1 (torque table, not-yours line, pressure intervals), 3
(emission law, filter paperwork), 4, 5 (charge-light table), 6, 9 (coolant, oil and brake-fluid
labels and checkpoint), 10 (garage line), 11, 13 (where, conditions, donor), 14 (extension leads,
fire advice, distances, Call someone lines), 15, 16 (Rules 275 and 276, NI line), 17 (NI, Scotland
and Wales), 18 (conditions, darkness, freeway, NI line), 19 (the jack), 20 (Scotland's scale, NI
section), 21 (appeals, 2017), 23 (airbag, free check), 24 (credentials table, schedule) and 25
(every H2, the dispute routes, the bill and the car, the stop-points table).

**Checked and sound.**
- **Callout:** byte-identical to `CAR_BASICS_SAFETY` in `scripts/build.mjs` (checked by script with
  `includes()`, true) and to lesson 1's block (string-compared, identical). The build checks only
  `lessons/`, so this check is the record.
- **Dashes:** no em dash, no en dash of any kind in the file (grepped).
- **Time:** 90 + 120 + 20 + 45 + 60 + 100 + 30 + 40 + 20 = 525 = eight and three quarter hours, as
  stated. Each share is in line with the exercises it collects: the breakdown plan's lessons 13, 14,
  16, 17, 18 and 19 state 20 + 25 + 15 + 15 + 15 + 20 = 110; the legal page's lessons 21 to 23 state
  10 + 15 + 15; the card's lesson 11 states 15; a first checks round from lessons 7 to 10 and the
  bounce test is about 65 to 70. Two wording points in R15.
- **Decision 1:** walked every part as an owner standing by the car. Nothing lifts, loosens, jumps,
  changes a wheel, goes under the car, touches anything high-voltage, drives or stands at a roadside.
  The only things handled are those lesson 9's exercise allows (dipstick, screenwash cap, oil filler
  on the handbook's word), and the only engine running is lesson 10's for the lights. The coolant
  line in Part 2 is lesson 9's own checkpoint ("a separate job after this exercise, not during it")
  and sits outside the project, consistent with the rule list. The start-up check is lesson 11's,
  parked.
- **Outright-fail list against OUTLINE's twelve and its lessons:** the jack (lesson 19, "do not put
  an object on or under the jack", Toyota, with Honda and Mazda); the motorway item (Rule 277's
  advice in lessons 13 and 18, Rule 276's triangle line in lesson 16); other country's steps (16,
  17); hot coolant cap (9, 11); high voltage (4, 14); multi-socket lead (lesson 14: "a household
  multi-socket lead is ruled out by all three"); EV or hybrid donor with the handbook exception
  (lesson 13's conditions list, word for word in substance); frozen, damaged or leaking battery (13);
  emission delete (lesson 3, "A repair leaves the filter working"; 42 U.S.C. 7522 covers any emission
  part, reg 61A the DPF); airbag (23, NHTSA's 100-percent line); snow-blocked exhaust (15); child or
  animal (15: NHTSA "for any length of time", AAA "not even for a short period of time", animals
  included). All match. One wording point in R14.
- **Pointers verified exactly:** lesson 1's four handbooks and three torque figures (103, 108, 108 to
  147 N·m); lesson 1's ten figures (counted: ten); lesson 1's three bodies' pressure intervals;
  lesson 2's Mazda and Nissan UK handbook line; lesson 4's four kinds and the LEAF's remaining parts;
  lesson 5's Ford and Toyota rows ("two cars with petrol engines, sold in the same country"); lesson
  6's Nissan MIN line, for the LEAF; lesson 7's step 4 trigger; lesson 13's "DO NOT attempt repairs"
  as advice and the jump start as a repair on the course's reading, and the freeway reading; lesson
  14's Highway Code fire advice "for any car in Great Britain", the whose-figure rule on Ford's 15 m
  and NHTSA's 50 feet, and "Call someone in both" for the circuit; lesson 15's three labelled winter
  items and the unread NI Code; lesson 16's three things for the recovery service; lesson 17's
  Scotland and Wales "plan for both"; lesson 18's lay-by and darkness readings, and its NI line
  ("Northern Ireland's rules weren't read"); lesson 20's England and Wales pound figures, Articles 54,
  56 and 58, NI reg 32 and the unread NI penalties and section 48 counterpart; lesson 21's
  month-minus-a-day rule, the NI appeal limit ("within 14 days") and "since 2017"; lesson 22's .gov
  rule and no-inspection line; lesson 23's six-month reminders and "tell the keeper in writing
  today"; lesson 24's Yours and Call someone lines, the Motor Ombudsman's funding and non-statutory
  status, BAR as California's regulator; lesson 25's asking list and table.
- **No new facts:** the only numbers are 999 and 911 and figures quoted from lessons. The four facts
  the drafter flagged (MOT history since 2017, Rule 277's words, Rule 276's triangle line, no road
  operator's page for Scotland or Wales) each match their lesson.
- **Course's-reading labels:** present for the not-yours line, the jump start as a repair, the
  lay-by, the freeway, darkness, the dated log and "no reasonable cause to suspect", and exhaust
  fumes inside. One missing (R11).
- **Bold:** 91 spans in about 6,200 body words, about 15 per 1,000. Under the ceiling.

## Findings

- **R1 (critical, other country's roadside steps).** Part 6, item 2, lines 325 to 326: "For
  ordinary roads, lesson 16's: where to stop, where everyone stands, and, in Great Britain, which of
  Rule 276's lines are advice." Only the Rule 276 clause is limited to Great Britain; the stopping
  and standing steps reach every reader. Lesson 16's are Great Britain's Rules 275 and 276, and
  lesson 16 says of Northern Ireland: "Its breakdown rules are close to these but not the same, this
  lesson doesn't teach them, and a reader there follows that Code" (lines 191 to 193). So a Northern
  Ireland reader is handed Great Britain's ordinary-road steps, which the project's own table and
  fail list forbid. **Fix:** replace the sentence with: "For ordinary roads: in Great Britain, lesson
  16's Rules 275 and 276, where to stop and where everyone stands, with which of Rule 276's lines are
  advice; in Northern Ireland, the same steps copied from its own Code's 'Breakdowns and incidents'
  page, as lesson 16's exercise asks, not Great Britain's; in a US state, lesson 16's US advice, with
  the callout's exceptions." In item 3 (line 334), after "where everyone would stand (lesson 16)",
  add "by your own country's steps".

- **R2 (major, Northern Ireland given steps it has none of).** Part 3, lines 232 to 233: "stopping
  'in a safe place' means the places lessons 16 and 17 teach, and on a motorway or other fast road
  the callout's steps for your country come first." The callout carries steps for Great Britain and
  the US only, and lessons 16 and 17 teach Great Britain's places and say a Northern Ireland reader
  follows its own Code (lesson 17, lines 124 to 125). A Northern Ireland reader looking for "the
  callout's steps for your country" finds only Great Britain's. **Fix:** "Across the top, one line:
  stopping 'in a safe place' means the steps for your own country on your breakdown plan (Part 6):
  the callout's and lessons 16 and 17's in Great Britain, your state handbook's and the callout's in
  the US, and Northern Ireland's own Code's in Northern Ireland."

- **R3 (major, the month rule: unlabelled and inconsistent).** Part 2, lines 180 to 182: "The log
  covers four weeks, and each check below appears at least twice, at the start and at the end", but
  the list then sets tread "at least once in the month" (line 188) and the bounce test "Once in the
  month" (line 198), and the rubric's Thorough (lines 456 to 457) asks for "each check at least
  twice". A reader can't satisfy both. And no lesson sets a month or a count: OUTLINE says "a month of
  recorded checks", and the figures are the project's own, which the text doesn't say (lesson 7
  leaves the interval to the reader). **Fix:** replace lines 180 to 182 with: "**A month of
  readings.** How many is this project's own requirement, not a lesson's: the log covers four weeks;
  the pressure check, the under-bonnet check and the walk-round each appear at least twice, at the
  start and at the end, and more often if your interval is shorter; the tread check and the bounce
  test at least once. Each entry has the date, and for the under-bonnet check the mileage." In the
  rubric's Thorough, replace "each check at least twice" with "each check as often as Part 2 asks".

- **R4 (major, rubric a reader can't reach).** The same defect Home Repair's R4 found. The no-car
  route (lines 95 to 97) says a line written "no car to check" "counts as complete", and the renter
  route (lines 84 to 88) says a reader can "reach the top level on every part" with "keeper
  declined", but three levels name things those readers can't do: the checks log's Not yet includes
  "fewer than two rounds" (line 459); the card's Thorough needs "the start-up check done" (line 464);
  the legal page's Thorough needs "the recall check done" and its Not yet includes "no recall check"
  (lines 473 to 475), which a named car with no registration can't have. The closing sentence (lines
  490 to 491) says a skipped item "counts as complete", but "complete" is not a level, and a Not yet
  criterion that names the gap reads as overriding it. **Fix:** add after "at one of three levels."
  (line 449): "Wherever a level asks for a reading, a check or a lookup, a line written 'no car to
  check', 'not taken: keeper not asked yet' or 'keeper declined', with its date, meets that level."
  and change the checks log's Not yet to "fewer than two rounds without a reason written".

- **R5 (minor, pointer changed at review).** Line 122: 'lesson 25's table, "The course's stop points,
  in one place"'. Lesson 25's H2 is now "The course's main stop points, in one place" (line 453), and
  its intro says these are "the main ones". **Fix:** 'lesson 25's table, "The course's main stop
  points, in one place"'.

- **R6 (minor, an untaught job implied).** Part 2, line 202: "Brake fluid below MIN, or a level you
  keep making up, is **Call someone**". The course never has a reader add brake fluid (lesson 6:
  adding it is a step "this course doesn't teach"); lesson 9's checkpoint and lesson 25's table both
  say "a level that keeps falling". **Fix:** "Brake fluid below MIN, or a level that keeps falling
  from week to week, is **Call someone**".

- **R7 (minor, "not read" where the lesson gives a route).** Part 8, lines 421 to 422: 'Where the
  course read nothing (Scotland's consumer law, Northern Ireland's consumer advice service, a state
  outside the five), write "not read by this course"'. Lesson 25's dispute routes cover California
  and New York by name and every other state by the FTC's route ("contact your Attorney General or
  local consumer protection agency", or small claims court); the five are the estimate table's
  states, not the dispute routes'. A Florida, Michigan or Ohio reader following the project writes
  nothing where lesson 25 gives a route. **Fix:** "Where the course read nothing (Scotland's consumer
  law, Northern Ireland's consumer advice service), write 'not read by this course' and whom you'd
  ask. In a US state other than California and New York, the route is lesson 25's 'elsewhere' one,
  the FTC's."

- **R8 (minor, England's page given as the UK's).** Part 8, lines 416 to 417: "In the UK, the
  difference between a quote and an estimate, as lesson 25 set it out, with whose words each line
  is." Lesson 25's section has two sources: Citizens Advice, on its page "for England", and The
  Motor Ombudsman's code for its accredited garages. The course-wide rule is that Citizens Advice's
  England page is never applied to Wales or Northern Ireland. **Fix:** "In the UK, the difference
  between a quote and an estimate as lesson 25 set it out: The Motor Ombudsman's code for the garages
  it accredits, and, in England, Citizens Advice's page, each line with whose words it is."

- **R9 (minor, Great Britain's rules unlabelled for every reader).** Part 6, lines 368 to 371: "Rule
  277's advice is 'DO NOT attempt repairs on your vehicle' ... Rule 276's advice is never to use one
  on a motorway". Neither names Great Britain, and the paragraph goes to Northern Ireland and US
  readers. Lesson 25's stop-points row gives the split: "Highway Code advice, Rule 277 (Great
  Britain) ... elsewhere, this course's reading". **Fix:** "In Great Britain, the Highway Code's
  Rule 277 advises 'DO NOT attempt repairs on your vehicle' ... and Rule 276 advises never using a
  triangle on a motorway (lesson 16). Elsewhere, Northern Ireland included, the same stop is this
  course's reading (lesson 25's table)."

- **R10 (minor, law label).** Part 6 states law (Rule 277's lines "marked MUST or should", Rule
  278's MUST behind lesson 17's list, regulation 27(3) in item 7) but carries no "This is general
  information, not legal advice." line, unlike Parts 5, 7 and 8. **Fix:** add it before "**7. The
  wheel page**"'s law clause, or as the first line of item 2.

- **R11 (minor, the course's own precaution unlabelled).** Lines 57 to 58: "it runs outdoors, never
  inside a garage, even with the door open (lesson 10)." Lesson 10 labels the every-garage part as
  its own (CDC's words are about an attached garage; "this course keeps a running engine out of
  every garage"), and the project's own fifth rule says a file keeps such labels. **Fix:** "it runs
  outdoors, never inside a garage, even with the door open, which for a detached garage is this
  course's own precaution (lesson 10)."

- **R12 (minor).** Part 3 lists ABS twice (line 225, "the amber ABS light"; line 226, "ABS;").
  **Fix:** line 226 becomes "The check-engine light, steady and flashing, or 'not stated' (lesson
  11); the airbag light; the tyre pressure light." In line 228, point the glow-plug light to "lessons
  2 and 11" (lesson 11's exercise lists it and teaches the light).

- **R13 (minor, the renter route against lesson 24).** Lesson 24's exercise: for a leased, financed
  or company car, "do only step 1 and note who arranges the rest", which excludes the severe-list
  sentence, the next three items and the garage check. Part 4 and Part 8 ask for all of them with no
  such note, and "Every reading in this file is made the way its lesson's exercise made it" (line
  41) then contradicts them. **Fix:** add to Part 4's opening: "If the car is leased, financed or a
  company car, lesson 24 has you find the schedule and note who arranges the rest; the other lines
  are 'the keeper's'." Part 8's last paragraph already covers the garage; with R4, both parts stay
  reachable.

- **R14 (minor, fairness in the fail list).** Line 508: "a domestic multi-socket extension lead in
  your charging setup (lesson 14)", read with "Each counts whether it's written into the file". A
  reader who honestly records the lead they use today (lesson 14 cites ESF's 2019 survey: 73.7% of
  the drivers who didn't charge only at public points had used one) fails the project for telling the truth, which rewards leaving it out.
  **Fix:** "a domestic multi-socket extension lead written into your charging setup as what you'll
  use (one you find there goes on the page as something to stop, with lesson 14's sources)".

- **R15 (minor, time wording).** Line 17: "figures from a dozen lessons' handbook hunts": Part 1
  names ten (1 to 6, 9, 12, 14, 16). **Fix:** "from ten lessons' handbook hunts". Lines 17 to 18:
  the checks log's two hours is honest for the minimum rounds but a reader on the Highway Code's
  weekly fluid check does four under-bonnet and walk-round rounds. **Fix:** after "later rounds
  less", add "(each extra round adds about half an hour)".

- **R16 (minor, voice).** About 79 contractions in about 6,200 body words, 12.7 per 1,000; "you'd"
  alone is 21 of them, a tic in the list items. The style guide wants contractions, so this is
  optional, but the "you'd" run is worth cutting. **Fix, which brings it to about 8.5:** line 85
  "what you would arrange"; 118 "the official body to ask"; 154 "if it is hidden"; 157 "whether it
  says"; 166 "the questions to put to an electrician"; 186 "only if it is carried"; 241 "where it is
  printed"; 269 "whom to ask"; 297 "how it is measured"; 302 "and it costs nothing"; 320 "how to find
  a recovery service"; 331 to 332 "the one sentence for the operator ... with how to tell them where
  you are"; 334 "where on it to try to stop"; 341 "what to use instead"; 344 "**5. What to tell a
  recovery service**" and "whether it is electric or hybrid"; 356 "where you would change a wheel";
  358 "the number to call"; 392 "the page on nidirect to read" and "which agency's page to check";
  393 "the question to ask it"; 398 "in your own words"; 407 "The garage you would use"; 422 "whom to
  ask"; 427 "what to do if a fault turned up".

- **R17 (minor, a Great Britain term for all).** Line 331 to 332: "if you were stuck in a live lane".
  Lesson 17's step 4 is "stuck in a lane", for a 999 or 911 operator; "live lane" is Great Britain's
  term. **Fix:** "if you were stuck in a lane of traffic".

## For another session (not the project's file)

- The build checks `CAR_BASICS_SAFETY` only in `lessons/`. The project's callout is checked here by
  script; a line in `scripts/build.mjs` extending the check to `assessments/project-*.md` would make
  it permanent.
- `npm run build:drafts` still fails on the missing `assessments/final-test.md`, so the project's
  table (six rows, four columns) hasn't been seen at 375 px in either theme.

## Verdict

**NEEDS FIXES.** One critical (R1), three major (R2 to R4), thirteen minor. Every fix is a
replacement sentence given above; none adds a fact. After R1 to R4, a targeted re-check of Parts 2,
3 and 6 and the rubric is enough; no second full review is needed.

## Resolutions (2026-09-26)

Applied to `assessments/project-your-car-file.md` in the drafting context, each pointer re-read in
its lesson. Callout re-checked byte-identical to `CAR_BASICS_SAFETY` (script, `includes()` true); no
em or en dash in the file.

- **R1:** applied. Item 2's ordinary-road steps now split Great Britain (lesson 16's Rules 275 and
  276), Northern Ireland (its own Code's "Breakdowns and incidents" page) and a US state (lesson
  16's US advice with the callout's exceptions). One adjustment: the reviewer's "as lesson 16's
  exercise asks" became "which lesson 16's exercise has you open", because lesson 16's exercise
  (step 4) has a Northern Ireland reader open that page and list its MUST lines, not copy its steps;
  the copying instruction is lesson 17's, for the motorway steps. Item 3 now ends "by your own
  country's steps".
- **R2:** applied as given in Part 3's top line.
- **R3:** applied as given; the month rule is labelled the project's own, pressures, under-bonnet
  and walk-round at least twice, tread and bounce test at least once. The rubric's Thorough now reads
  "each check as often as Part 2 asks".
- **R4:** applied as given: the reason-line sentence after "at one of three levels.", and the checks
  log's Not yet is now "fewer than two rounds without a reason written".
- **R5:** applied; "The course's main stop points, in one place", matching lesson 25's H2.
- **R6:** applied; "a level that keeps falling from week to week".
- **R7:** applied as given; lesson 25's "Elsewhere" route is the FTC's, confirmed.
- **R8:** applied as given; lesson 25 cites The Motor Ombudsman's code and Citizens Advice's England
  page, confirmed.
- **R9:** applied, with one adjustment: the reviewer's "the same stop is this course's reading
  (lesson 25's table)" is now "the same stops are this course's reading (lesson 25's table gives it
  for a repair, wheel change or jump start)", because lesson 25's row covers repairs, wheel changes
  and jump starts but has no triangle line.
- **R10:** applied, placed as its own line at the head of Part 6, as Parts 5 and 8 carry theirs, so
  it covers items 2 and 7 and the cautions together.
- **R11:** applied as given; lesson 10 lines 146 to 148 confirmed.
- **R12:** applied; the duplicate ABS removed, the glow-plug light points to lessons 2 and 11 (lesson
  11's exercise, step 2, lists it).
- **R13:** applied to Part 4's opening; lesson 24's exercise wording ("do only step 1 and note who
  arranges the rest") confirmed.
- **R14:** applied as given.
- **R15:** applied: "ten lessons' handbook hunts", and "(each extra round adds about half an hour)".
- **R16:** partly applied, as optional: about twenty of the stiffest "you'd" and "it's" forms
  swapped (lines the reviewer listed for Parts 1, 2, 4, 5, 6, 7 and 8, and "Five rules" and the
  renter route). Two "you'd" remain, in the intro to "What this project is not" and in the jump
  page's "where you'd never do it", where they read naturally.
- **R17:** applied; "stuck in a lane of traffic", in line with lesson 17's step 4.
- **Neutrality audit N3:** applied as given in the tyre record (Part 2).

**Verdict: needs targeted re-check (Parts 2, 3 and 6 and the rubric).**

## Re-check (2026-09-26)

**Reviewer:** one fresh-context reviewer, targeted at Parts 2, 3 and 6 and the rubric, after the
resolutions above. Read CLAUDE.md, courses/CLAUDE.md, the style guide, this file and the
neutrality audit's N3; opened lessons 8 (exercise step 3 and the positions), 10 (lines 140 to 149),
11 (exercise and card), 16 (the NI paragraph and exercise step 4), 17 (the NI paragraph, exercise
steps 2 to 4, source 17), 18 (space-saver law), 24 (exercise opening and step 1) and 25 (the
stop-points table and the "Elsewhere" route) at the sentences the project relies on.

- **R1 and R2, sound.** Part 6 item 2 gives Great Britain, Northern Ireland and a US state their own
  ordinary-road and fast-road steps; item 3 ends "by your own country's steps"; Part 3's top line
  sends each reader to their own country's steps. No Great Britain roadside or motorway step reaches
  a Northern Ireland reader: the Part 6 cautions name Rules 276 and 277 for Great Britain only and
  give Northern Ireland the stop as this course's reading, as lesson 25's table does. Checked live
  (curl, 26 September 2026) against nidirect's "Breakdowns and incidents (274 to 287)": the page
  carries both an ordinary-road breakdown rule (274: where to stop, where people stand) and
  "Additional rules for the motorway" (275, 277), so the project's two NI instructions each have
  something to copy, and its motorway rule does differ from Great Britain's Rule 277 (the emergency
  telephone, waiting near the vehicle, animals left in it), as lesson 17 says. Consistent with lesson
  16 ("a reader there follows that Code") and lesson 16's exercise step 4 (open the NI page).
  **Fixed inline (one edit):** item 2's "the same steps copied from its own Code's page" could be
  read as Great Britain's steps; it now reads "where to stop and where everyone stands as its own
  Code's 'Breakdowns and incidents' page gives them".
- **R3, sound.** The month rule is labelled "this project's own requirement, not a lesson's";
  twice for pressures, under-bonnet and walk-round, at least once for tread and the bounce test; the
  rubric's Thorough says "as often as Part 2 asks" and its Not yet "fewer than two rounds without a
  reason written". No conflict.
- **R4, sound.** The rubric's reason-line sentence covers every reading, check and lookup a level
  names (start-up check, recall check, rounds), and the closing sentence agrees. **Fixed inline (one
  edit):** the no-car route now asks for "no car to check" "with the date", which the rubric's
  sentence requires.
- **N3, sound.** The tyre line now runs "from the legal floor with Michelin's case to the earlier
  replacement points", matching lesson 8's exercise step 3, so the full-use position can be named.
- **Pointers, sound.** Lesson 8 (positions and holders), 10 (every garage, the course's own
  precaution), 11 (stop-now four, the rest, the start-up check, glovebox), 16, 17 ("stuck in a
  lane"), 24 ("do only step 1 and note who arranges the rest"), 25 (H2 "The course's main stop
  points, in one place", the Rule 277 row's "elsewhere, this course's reading", the FTC route). **Fixed
  inline (one edit):** Part 3's top line named no lesson for the US; it now reads "lesson 16's, your
  state handbook's and the callout's in the US", matching Part 6 item 2.
- **Decision 1, sound.** Walked Parts 2, 3 and 6 again: nothing lifts, loosens, jumps, changes a
  wheel, goes under the car, touches high voltage, drives or stands at a roadside; the only engine
  running is lesson 10's, outdoors.
- **Callout and dashes.** Callout byte-identical to `CAR_BASICS_SAFETY` (`includes()`, true); no em
  or en dash in the file. `npm run validate` exits 0.

**Verdict: CLEAN.**

## Neutrality audit fixes (2026-09-26)

Applied from `reviews/neutrality-audit.md` (course-wide, 2026-09-26) by a fixer in a fresh context.

- **N7 (Part 7, winter list):** "the battery tested before winter if you follow the advice of AAA,
  whose clubs sell roadside assistance and battery service (lesson 15), which is **Call someone**",
  so one seller's test point is no longer every reader's default.
- **N12 (fail list):** the roadside line now also fails "a wheel change on a US freeway shoulder",
  so a US reader is held to the same stop as a Great Britain reader on a motorway (lessons 18 and 19;
  lesson 25's stop table). Not changed, for a later open: Part 6 (line 384) and lesson 13 also make a
  jump start on a US freeway shoulder a call, and the fail line, as the audit worded it, names only
  the wheel change.
- **Fail line, jump start (2026-09-26):** the roadside line now reads "a wheel change or jump start
  on a US freeway shoulder", closing the gap above: Part 6 and lesson 13 already make that jump
  start a call. Three words added; the callout is unchanged.

`npm run validate` exit 0.
