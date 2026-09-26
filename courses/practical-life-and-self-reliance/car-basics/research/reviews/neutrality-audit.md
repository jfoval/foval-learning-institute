# Neutrality audit: Car Basics, course-wide

## 2026-09-26 — Course-wide neutrality audit (standards 3.5)

**Scope.** All 25 lessons were read in full: body, blocks, quiz items and explanations, Go deeper and
Sources. So were the project, `assessments/project-your-car-file.md`, and each lesson's review file.
The course's commitments come from three places: OUTLINE's twenty-two decisions, the conventions in
`pipeline-briefs.md`, and the notes in `reviews/course-wide.md`. The final test (untracked, another
session's) was not audited.

**Method.** Four readers each took a block: lessons 1 to 6, 7 to 12, 13 to 18, and 19 to 25 with the
project. Each kept a ledger with line numbers of:

- every source voice, with a count of its uses;
- every use of a commercial or industry-funded body, with or without its label, and every wording of
  the label;
- every grade given to a source in the course's voice;
- every sentence leaning on the six axes (dealer or independent, early replacement or full use, EV or
  combustion, UK or US, regulation, industry or consumer);
- every "handbook governs" statement, every job and its label, and every "this course's reading";
- money and free routes.

The auditor compared the ledgers across lessons and re-read every passage cited below. The auditor
also ran course-wide greps for source mentions, grading words and "dealer" in the course's voice. Two
pages were read live on 26 September 2026: National Highways' fourth-year report (PDF) and Which?'s
"Car servicing and repair costs". Lessons 8, 17, 22 and 24 each passed their own neutrality pass. This
audit looks for patterns no single lesson shows.

**Perspectives checked.**
- Roads and regulation: National Highways and the DfT; a driver who uses an all-lane running motorway
  every day; a state inspection official and a repeal advocate.
- Commercial voices: the AA and the RAC as critics and as sellers.
- Garages: a franchised dealer; an independent garage.
- Tyres: a tyre maker arguing for full use; a road-safety charity.
- Kinds of car: an EV owner; a diesel owner.
- Readers by place: a UK reader, a US reader and a Northern Ireland reader.
- A low-income owner.

**Verdict: NEEDS FIXES.**
- **Nothing is wrong in substance.** No contested question is settled in the course's voice. No
  country's advice is called wrong. The four contested blocks each end without a verdict:
  - lesson 8: "the law in each place is the only fixed line";
  - lesson 17: "This course takes no side on either";
  - lesson 22: "The course stops there";
  - lesson 24: "this course takes no side".
- **Where it leans, the lean is small and cumulative.** It comes from the choice of voices and from
  labels that drop after first use, not from the course's voice:
  - commercial labels are missing at many later uses, worst in quiz explanations and checkpoints (N4);
  - the Met Office's name carries the RAC's advice (N4);
  - grades in the course's voice praise some sources, commercial ones included (N6);
  - an interest is named for the AA but not for AAA beside it (N7);
  - "the dealer" is the only route named in three course-voice lines (N8);
  - smart motorways: the operator's strongest evidence is missing (N1), and the misconceptions
    correct only one side's over-claim (N9).
- **Fixes.** N1 to N12 each have an exact fix. N1, N4 and N9 come first. None blocks publication:
  none touches a safety step, and no lesson settles a contested question. N3 was applied in commit
  fb4a902 while this audit ran.

---

## First count of voices (course-wide, grep, lesson bodies before "## Sources")

Mentions, not weighted uses: NHTSA 223, the Highway Code 143, the AA 127, AAA 132, fueleconomy.gov
101, the RAC 91, National Highways 73, DVSA 67, GOV.UK 65, TyreSafe 59. With the makers' handbooks
(Nissan, Ford, Toyota, Mazda, Honda) counted apart, official and regulatory mentions outnumber the
commercial ones (the AA, the RAC, AAA, TyreSafe, Green Flag, Michelin, DENSO, ASE, the IMI, The Motor
Ombudsman) by roughly two to one. The AA, the RAC and AAA together are the largest non-official block,
so the per-use label check (brief item 2) matters most for them. Label wording varies ("sells breakdown
cover", "sells breakdown cover and repairs", "sells tyres" in tyre contexts); the tyre-context variant
names the interest that bears on the claim and is defensible. The ledgers' hand counts agree with the
two-to-one figure overall, but not lesson by lesson:

- **Lessons led by commercial voices:** lessons 3, 5 and 8, and the replacement argument in lesson 8.
  In lesson 3, the AA and the RAC make about 48 uses against about 20 official ones. Lesson 5 has
  about 46 commercial uses against about 30 official ones.
- **Lessons led by official voices:** lessons 6, 12 and 20 to 23.
- **What the gap means:** where a commercial voice is the only source for something a reader does, it
  is a gap in what was read, not bias in the voice. Examples: the RAC on cambelts (lesson 2); the AA
  and the RAC on every DPF and AdBlue action (lesson 3); the AA and AAA on battery life and testing
  (lessons 5 and 15); the AA on the dipstick (lesson 9); the RAC on the oil light (lesson 11); AAA's
  40 feet (lessons 16 and 17). The label at the point of use (N4) is what keeps it honest.

---

## Findings

### N1. Lesson 17: the report's before-and-after line is missing from the case for smart motorways [major]

Read live, 26 September 2026: National Highways, "Smart motorways stocktake: Fourth year progress
report" (PDF linked in the lesson's source 7), executive summary, p. 8: "This shows that in most cases
smart motorways are safer than the roads they replaced." The next sentences: most schemes "(25 out of
39) have seen a reduction in personal injury collision (PIC) rates after they were constructed both
against the before and the counterfactual"; FWI rates fell at "37 out of 39" and KSI rates at "27 out
of 39". On p. 48 the report adds that "some locations in their after period show increased rates
compared to the before period".

**Judgement: its absence tilts the section, mildly.** The lesson gives the pro side only the
cross-sectional comparison of motorway types. Its own caveats then show that this comparison's KSI
headline "cannot be tested". The before-and-after strand is different evidence: each road compared
with itself. It is the operator's own summary line and sits in the executive summary, which the lesson
lists as read. A National Highways or DfT reader would say the strongest version of the case (Logic and
Argument lesson 7, which the section names as its rule) had been left out. The critics' strongest
material is all present (the coroner, the committee, the stopped-vehicle table and its significance
test). A critic's point, that the rates rose at some schemes, should travel with the line.

**Fix (lesson 17):**

- **Add** a new paragraph after line 426 (the end of the hard-shoulder paragraph, "...in an emergency
  area."[7]): "Comparing each scheme with the same road before its upgrade, the report finds that "in
  most cases smart motorways are safer than the roads they replaced": of 39 schemes of the three types,
  25 had lower injury-collision rates afterwards and 27 lower killed-or-seriously-injured rates; at some,
  rates rose.[7]" (about 45 words).
- **Matching cut.** Delete the Grant Shapps sentence, lines 429 to 431 ("The Transport Secretary then,
  Grant Shapps: ... using them."[8]"), about 35 words. It repeats the DfT line before it and stays on the
  pro side, so the cut does not move the balance. Also, in line 407, cut "and its report is the most
  detailed evidence this course read" (11 words). It grades a source in the course's voice.
- **The net is about 0 words**, so `minutes:` stays at 90. The lesson already measures 95, inside
  precision, so the fixer re-runs `npm run minutes` to confirm.
- **Records.** Record the quotation [V] in SOURCES as a dated "Stage 4 note, lesson 17 (neutrality
  audit)" first. `npm run quotes` must pass. Script 17 (line 64) carries the headline, so add one
  matching sentence there and mark its `checked:` entry. The report does not say, in the part read,
  whether the scheme counts were tested for significance, so the fixer checks Annex B before adding
  any wording about testing. If nothing is found, add none.

### N2. Lesson 24: Which?'s narrower pair for cars sold new is missing [minor]

Read live, 26 September 2026 (which.co.uk, "Car servicing and repair costs", 9 Jun 2026): "Across all
cars in our survey, a service from a franchised dealer costs £361, while a local independent costs just
£260 on average. Looking at the average across cars available to buy new, franchised dealer services
cost £331, compared with local garages at £262." The lesson (lines 233 to 236) quotes only the first
sentence.

**Judgement: a small tilt by selection.** The pair for cars still sold new is the closer like-for-like
comparison, and its gap is £69 instead of £101. Quoting only the wider gap, with Which?'s "just", gives
the independents' side the stronger number, while the dealers' side gets one qualitative line (the
fixed-price deal). A franchised dealer would insist on the second pair. The fixed-price line and the
"reported yearly totals" caveat stay.

**Fix (lesson 24):**

- **Add** after line 236's "on average."": "For cars still sold new, it gives "franchised dealer services
  cost £331, compared with local garages at £262."" (about 17 words; the quotation is recorded in
  SOURCES first).
- **Matching cut** in Connections (line 587): "Lesson 1 made the handbook the authority for every
  per-car figure; lesson 12 showed how advice gets revised." becomes "Lesson 1 made the handbook the
  authority for every per-car figure." Then cut "Home Repair lessons 22 and 23 set out licensing and
  hiring for the house." (about 21 words cut in all). The pointer to Home Repair 22 and 23 survives
  in the dealer section's context via OUTLINE decision 15 only if the fixer judges it needed. If so,
  cut the Scottsdale case's longest sentence instead.
- **Conventions.** The pipeline-briefs decision 11 exception (dated bullet) should name both pairs.
  Script 24 does not print the figures, so it needs no change.

### N3. The project's tyre line assumes a replacement point above the legal floor [minor]

Project lines 208 to 210: "your own replacement line, with whose advice it follows. Lesson 8 set out the
positions above the legal floor and who holds each; your line names one". Lesson 8 (line 621) gives
the full-use position as a position ("the legal floor with Michelin's case that the tyre's design
matters more than depth alone"). The project's wording leaves a reader who follows that position no
line to name, so it builds the replace-early side into the file. A tyre maker arguing for full use
would object.

**Fix (project, line 209):** "Lesson 8 set out the positions, from the legal floor with Michelin's case
to the earlier replacement points, and who holds each; your line names one". Nothing else changes.

**Applied 2026-09-26** in the project's tyre record (Part 2), wording as given; recorded in
`reviews/project-your-car-file.md`, "Resolutions (2026-09-26)".

---

### N4. Labels drop after first use, above all in quizzes and checkpoints, and the Met Office carries the RAC's words [major, course-wide]

**What the rule says and what the course does.** Decision 11 says every commercial or industry-funded
source "carries its label in the sentence, at each use". What the course actually does is label at
first use and then cite the body bare. The ledgers counted bare uses at these points:

| Body | Lessons and lines |
|---|---|
| The AA | L3 (labelled at 4 of about 50 uses; bare at all six quiz items and the checkpoint at 356 to 366); L4 (labelled once in about 9; quiz 2); L5 (every quiz item, the checkpoints at 293 to 295 and 480, the misconceptions at 447 to 459); L8 (about 16, including quiz 1 and quiz 4 and line 600); L9 (about 18); L13 (17, including quiz explanations at 98 and 100) |
| The RAC | L2 (quiz 2; the misconceptions at 546 to 552); L8 (quiz 4, quiz 6 at 110 and 118, the predict at 402, line 611); L11 (about 15, including quiz 5); L15 (195, 199) |
| AAA | L7 (238, 245, 288, 561, quiz 6); L8 (332 table, 346, 629, quiz 1, and the Go deeper line at 660 to 662, which calls it only "a club with a stated position"); L15 (157, 404); L16 and L17 (about 13, the L16 table cells included) |
| TyreSafe | L8 (204, 332, 338, 349, 600, quiz 2, quiz 4); L18 (406, 413, 457) |
| DENSO | L2 (238; quiz 4 explanation at 80; misconception at 539 to 541) |
| The Motor Ombudsman | L24 (8 uses); L25 (3 uses) |
| Which? | L24 line 292; Sources entry 30 has no commission label |
| The ABI | L21 line 239 |

**The Met Office case is the most misleading.** Lessons 9 and 10 quote a Met Office page that
reproduces the RAC's checklist. The course labels this at first use ("reproducing the RAC's list").
Later uses give the words to "the Met Office" alone: L9 lines 403, 439 and 462, and L10 quiz 5 (lines
88 to 97). A reader then sees a weather service's authority behind a breakdown seller's advice.

**Why it matters.** A reader who meets a body first through a quiz, a checkpoint or a misconception
sees no label, and those are the places a reader acts from. The Home Repair audit treated this pattern
as open, not blocking, and so does this one.

**Fix, in two steps.**
1. **Settle the convention** with a dated bullet in `pipeline-briefs.md` "Course conventions". A
   commercial or industry-funded body carries its label:
   - at its first use in each H2 section;
   - in each quiz item (stem or explanation);
   - in each predict or checkpoint answer;
   - in each misconception;
   - in each table that quotes it, once in the table;
   - in each Go deeper entry.

   A Met Office line that reproduces the RAC always says "the Met Office, reproducing the RAC".
2. **Sweep the lines above to that convention.** The Met Office lines come first:
   - L9 403: "The Met Office page, reproducing the RAC:";
   - L9 439: "the Met Office page (the RAC's list)";
   - L9 462: "**The Met Office**, reproducing the RAC's list, for winter:";
   - L10 quiz 5: repeat "reproducing the RAC's checklist" in the explanation;
   - L8 Go deeper 660 to 662: "from AAA, whose clubs sell roadside assistance and run a repair
     network".

   The sweep is mechanical. Where a line is also in a podcast script, the script mirrors it.

### N5. The same body is labelled in different words across lessons [minor, course-wide]

**The variants found.**
- **The RAC:**
  - "sells breakdown cover and repairs" (L2, L5, L9 to 11, L15, L16, L21);
  - "sells breakdown cover" (L3 441, L15 139 and 469, L17, L18, L19 63, 329 and 432, L25 469);
  - "sells breakdown cover and tyres" (L8);
  - "breakdown cover and cambelt changes" (L2 386);
  - "breakdown cover and mobile mechanics" (L11 431);
  - "Motoring organisation, UK" (L5 351).
- **AAA:** six wordings. Some include the repair network, some drop it; "an approved repair network"
  appears only at L8 508; L5's table says "Motoring club, US" (352).
- **The AA:** "breakdown cover and repairs" in most places; "breakdown cover" alone at L3 119 and 441,
  L13 and L25 468.
- **The IMI:** "sells" its qualifications at L14 206 and "awards" them in L14's Sources.

The interest-specific variants (tyres in lesson 8, cambelt changes in lesson 2) name the interest
behind the claim, and they stay. The problem is the drift between the plain labels.

**Fix, in two steps.**
1. **Add a dated convention bullet** that gives one base label per body:
   - the AA and the RAC: "sells breakdown cover and repairs";
   - AAA: "whose clubs sell roadside assistance and run a repair network".

   A lesson may add the interest that bears on the claim ("and, on that page, tyres").
2. **Apply it at the next open of each lesson.** Two table cells change now:
   - L5 351: "Motoring organisation, UK" becomes "Motoring organisation, UK; sells breakdown cover and
     repairs";
   - L5 352: "Motoring club, US" becomes "US motoring club; sells roadside assistance".

   L14 206 and its Source 8 should both say "awards, and sells training for".

### N6. Grades in the course's voice [minor, course-wide]

About twenty sentences grade a source, or a country's text, rather than describe it. Home Repair's N5
found the same pattern. The ones that matter most are those that praise a commercial source or rank a
country:

| Where | Was | Now |
|---|---|---|
| L5 300 | "AAA's list is the most complete the course read, and it's written for owners:" | "AAA, whose clubs sell roadside assistance and battery service, gives this list for owners:" |
| L5 122 to 123 | "puts it bluntly on its maintenance page" | "says on its maintenance page" |
| L9 616 (Go deeper, the AA) | "The clearest plain account read of the dipstick, the colour of oil and what low oil does." | "Covers the dipstick, the colour of oil and what low oil does." |
| L14 159 | ASE's list "is the fullest account of the hazards this course read" | "ASE's list, from the body that certifies technicians, names the hazards:" |
| L6 205 | "The clearest statement of it is in US law:" | "US law puts it on the label:" |
| L3 482 to 483 | "The US name, DEF, says what it is more plainly." | "The US name, DEF (diesel exhaust fluid), says what it is." |
| L24 277 | "the route is competition law, and it's worded more carefully." | "the route is competition law, and it speaks of what is likely." |
| L15 195 | "the RAC says it plainly: "Winter tyres aren't mandatory in the UK." It's advice." | "the RAC, which sells breakdown cover and repairs, says "Winter tyres aren't mandatory in the UK."" (the RAC's statement, with its label; "It's advice" is wrong of a statement about the law, so it goes) |
| L15 277 | "These are advice, and good advice, since" | "These are advice, and the reason given is that" |
| L2 428 | "Asking is sensible." | cut |

**Go deeper superlatives.** "Clearest", "plainest" and "most complete" also appear at L7 590, L8 658,
L12 460, L13 505 and 508, L15 517, L18 529 and L25 555, and "is blunt" at L18 159. Each should be
replaced with what the page covers and for whom. L17 407's "most detailed evidence" is in N1's cut.

### N7. An interest is named for one seller and not for the one beside it [minor, lesson 5; lesson 15 and the project follow]

**The imbalance.** Lesson 5 names the AA's motive in the course's voice: "It sells batteries on all three
pages" (280). But the course's own reading then takes its test points from AAA's page: "tested from
about three years old, and before winter" (285 to 287). That page advertises AAA's own battery service,
as lesson 5's Go deeper says (508 to 509), yet the body says nothing of it. Lesson 15 carries AAA's
"Get your battery tested annually before winter" into the autumn list without a label (157). The
project then puts "the battery tested before winter" on every reader's winter list (project 407).
One seller's advice ends up as the course's default, unlabelled.

**Fix.**
- **L5 280:** after "It sells batteries on all three pages." add "AAA's page advertises its own battery
  service too."
- **L5 285 to 287:** make the reading say whose points it uses: "...and AAA, whose clubs sell battery
  service, advises a test from three to five years old and every year before winter. The AA's
  jump-start page says to change one only when it shows signs of deterioration."
- **L15 157:** "That's why the same club, which sells battery service, says..."
- **Project 407:** "the battery tested before winter if you follow AAA's advice (lesson 15), which is
  **Call someone**".

Net words in lesson 5 are about +25. The lesson measures 85.

### N8. "The dealer" as the only route, in the course's voice [minor, lessons 3, 6, 7, 13]

**The pattern.** The makers' handbooks route owners to their own dealers, and quoting them is right.
But in three places the course's own voice names the dealer as the only route:

- **L3 406:** "only his handbook and his dealer can tell him that";
- **L7 391 to 392:** "the fix is the dealer's inspection";
- **L13 348 to 349:** "this course's reading is that it's a question for the maker's dealer".

Lesson 6's signs table (425 to 432) quotes five dealer instructions with no note. Lesson 24 teaches
that neither country's law ties servicing to the dealer, and it gives the FTC's test of any shop. An
independent garage would object that the earlier lessons had already sent the reader to the dealer.

**Fix.**
- **L3 406:** "only his handbook, and the maker's dealer or a garage that works on that make, can tell
  him that."
- **L7 392:** "the fix is an inspection of the system (NHTSA says the dealer's)."
- **L13 349:** "a question for the maker's dealer or a garage that works on that make".
- **L6, after the table at 434:** "Where a handbook says "dealer", that's the maker's own network;
  lesson 24 sets out what each country's law says about using another garage." (about 25 words;
  lesson 6 measures 90.)

Recall repairs (lesson 23) go to the maker's dealer by law and by the notice, and they stay.

### N9. Lesson 17: the misconceptions and the quiz correct only the critics' over-claim, and the operator's reason for the roads is missing [major]

**The misconceptions and the quiz.** Both misconceptions that touch the smart motorway question correct
a belief held on the critics' side. One is "The hard shoulder is a safe place" (575 to 578), which ends
on the RAC. The other is "cancelled because they were shown to be less safe" (586 to 587). So does quiz
5 (89 to 105). No item corrects the operator side's over-claim: the DfT's 2022 "comparatively the
safest roads in the country" (428) stands without a reply beside it. The lesson's own numbers section
shows that the killed-or-seriously-injured headline "cannot be tested at this time". This is the
lesson-level form of Home Repair's A12 (one overstatement from each side).

**The missing reason.** The operator's case also leaves out the reason the roads exist, which SOURCES
holds [V]: "Smart motorways were introduced as they increase capacity without the disruption and
environmental impact of physically widening the road." The value half (383 to 385, 563 to 565)
therefore weighs only collisions against confidence. A National Highways reader would insist that
capacity is the other side of the trade. The Transport Committee's "reduction in capacity" (497) is the
only trace of it.

**Fix (lesson 17):**
- **Add** a misconception after 587 (about 40 words): "**"National Highways' figures prove smart
  motorways are safer."** The killed-or-seriously-injured rates behind its headline "cannot be tested
  at this time", and injury collisions involving a stopped vehicle are higher on all-lane running, a
  difference the report says "we can be confident" about."
- **Add** to the operator's case, after the first National Highways paragraph (after 413), about 25
  words: "Its report gives the reason the roads were built: "Smart motorways were introduced as they
  increase capacity without the disruption and environmental impact of physically widening the
  road.""[7]
- **Change** the value half at 564: "...but has more injury collisions with stopped cars is the better
  road, what its extra capacity is worth, and how much drivers' confidence should count."
- **Matching cuts** (about 68 words):
  - lines 402 to 403, "The government's stated reasons ... found less safe.[9]", which repeats the
    paragraph before it and the misconception;
  - in Go deeper, "This course read the executive summary and the safety sections." (626 to 627) and
    "This course read its introduction and its conclusions." (629), which repeat the Sources entries;
  - in Connections, "The table in the US section sets the two countries' first steps side by side,
    as lesson 1 promised." (614 to 615);
  - "These are facts, dated, and the words matter." (392).
- **Timing.** With N1's net zero, the lesson stays near 8,160 words and 90 minutes. The fixer re-runs
  `npm run minutes`. Script 17 mirrors the capacity line if it gives the operator's case.

### N10. Lesson 24: the rebuttal of AAA's monitor claim uses a car with no engine oil, and doubt is cast on one side only [minor]

**The problem.** Line 179 to 181 reads: "That's **contested**, and partly commercial: AAA's "newer cars" is a
generalisation, a 2024 handbook, Nissan's, still prints a severe schedule, and garages are paid by the
service." AAA's claim is about the oil change interval. Nissan's handbook is the LEAF's, which "has no
engine oil" (145), so it doesn't answer the claim. "Garages are paid by the service" casts doubt on
shorter intervals only, and AAA, which runs a repair network, is arguing against its own sales.

**Fix (L24 179 to 181):** "That's **contested**. AAA's "newer cars" is a generalisation; Ford's 2024
handbook still names the driving that works against the oil, and Nissan's still prints a severe
schedule, though for a car with no engine oil. No source read measured how accurate monitors are."
(Net about 0 words; cut the existing "No source read measured how accurate monitors are." that
follows.)

### N11. The regulation axis: two small one-sided spots [minor]

- **Lesson 21 (185 to 192).** "Why three years, and not four" gives only the government's reasons for
  keeping three years. The case for four years (the 2017 and 2023 consultations) is on the unread line.
  **Fix:** after "Those are the government's reasons, in its words." add "This course didn't read the
  consultations' own case for four years." (13 words)
- **Lesson 7 (304).** "the trigger is set well below the right pressure" reads the federal standard
  as a shortfall. The standard defines the trigger as "significantly under-inflated". **Fix:** "well
  below the placard pressure".

These do not change the overall picture: inspection (lesson 22), smart motorways (lesson 17, after N1
and N9), right to repair (lesson 24) and the DEF derate (lesson 3) are each reported with both sides
or as settled fact.

### N12. The project's roadside fail binds a GB reader and not a US one [minor]

**The problem.** Project 515 to 516 fails "a repair, wheel change, jump start or warning triangle on a
motorway, its hard shoulder or an emergency area". A US reader who writes a wheel change on a freeway
shoulder into the plan passes. Yet lesson 25's stop table lists "A wheel change on a US freeway
shoulder" as a stop (this course's reading, lesson 18).

**Fix (project 515 to 516):** "...on a motorway, its hard shoulder or an emergency area, or a wheel
change on a US freeway shoulder (lessons 13, 16, 18 and 19)".

---

## Axis by axis: what the ledgers show

- **Dealers or independents.** No lesson prefers either in the course's voice except N8's three lines.
  Lesson 24's block gives the makers' case and the independents' case, each with its interest (Auto
  Care and YourCar-YourChoice against Mazda and Ford). It also gives the neutral voices (the FTC, The
  Motor Ombudsman's list). Both worked warranty cases in lesson 24 have a dealer refusing a claim
  (327 to 368). That is where the law bites, and each case ends on the law, so it stays.
- **Replacing early or using fully.** This is the course's strongest lean, and it comes from what was
  read.
  - **Tyres:** four early voices against Michelin alone in lesson 8. The lesson 8 re-check judged it
    BALANCED because the gap is disclosed, NHTSA sits at the floor, and the evidence section doubts
    both sides. This audit agrees.
  - **Battery testing:** the course's reading follows AAA (N7).
  - **Cambelt:** the no-record rule (lesson 2, 442 to 444) is the course's reading, labelled.
    Treating an unknown belt as original is a safety-conservative choice, and it stays.
  - **Brake fluid:** by date only (lesson 6), because every handbook read says so.
  - **Tyre age:** only replace-side voices (lesson 8, 406 to 425). No source read argues for running
    old tyres.

  Only N7 and N10 need an edit.
- **EVs or combustion.** No comparative claim anywhere. Lesson 14's fire misconception runs both ways;
  lesson 4's energy comparison ends on "don't, on their own, settle"; lesson 3's diesel buying advice
  is attributed and followed by "takes no side". The EV-specific rows gather at the end (lesson 25's
  table, lesson 16's towing, lesson 14's flood), but each rests on a handbook's instruction for that
  kind of car. The one lean is small: every misconception in lesson 4 corrects an over-optimistic
  belief about EVs or hybrids. **Fix (L4, after 535, about 35 words):** "**"Electric cars mostly break
  down because they run out of charge."** In the AA's 2021 call-outs (one provider, one year), running
  out of charge "doesn't feature within the top three"; the 12 V battery and tyres were the top two."
  Lesson 4 measures 90.
- **UK or US.**
  - **Quizzes:** items across the course come out about even (roughly 45 UK, 40 US, the rest both or
    neither), but single lessons skew. Lessons 2 and 4 are all US-sourced; lessons 3, 16 and 17 are
    mostly UK.
  - **Sections:** US sources lead the mechanical lessons (1 to 7) because the official mechanical
    sources read are American. UK sources lead the roadside and law lessons.
  - **Handbooks:** every named handbook except the Mazda3 (European) and one LEAF (UK) is a US-market
    car's. Decision 6 fixed that set; each lesson says whose handbook it is.
  - **Wrong or better:** no country's advice is called wrong or better anywhere, apart from N6's L6 205
    and L3 482.
  - **Unglossed words:** car park, lay-by, pavement, kerb, torch, spanner, saloon, estate, number
    plates, windscreen, handbrake, carriageway, lorries. **Fix at each lesson's next open:** gloss at
    first use per decision 3. Convert one quiz item in lesson 2 and one in lesson 4 to a UK case, and
    one in lesson 17 to a US case.
- **Regulation or deregulation.** Balanced; see N11. Lesson 22's block ends "The course stops there"
  and has one misconception from each side. Lesson 22's "a political group that began as a tea party"
  is the group's own account (review R2) and stays.
- **Industry or consumer.**
  - **Consumer voices:** Which?, Citizens Advice, BAR, the FTC and the NY DMV speak only in lessons
    24 and 25. That fits the subject.
  - **Makers:** their dealer routing is quoted like any source (N8).
  - **Sole-source commercial advice:** see the voice count above. The label (N4) is the remedy; a
    source gap is not a voice problem.

## Consistency

- **"The handbook governs" is said the same way everywhere.** The ledgers found about 60 statements,
  from lesson 1's "Why the handbook comes first" to lesson 24's "your handbook first, then the monitor".
  Every per-car figure is a named maker's for a named car and market. No lesson prints a figure as
  universal.
- **The three job labels hold** in every case compared across lessons:
  - high voltage, a falling brake-fluid level, a jump start, topping up AdBlue, coolant and oil,
    screenwash, and a wheel change off the road all match;
  - lesson 25's closing summary matches all of them.

  Two small slips remain:
  - **Pulls when braking.** L1 514 (checkpoint K) says plain **Call someone**, while L6 426 says
    "Check the tyre pressures (**Yours**); then **Call someone**". **Fix L1 514:** "K. Check the tyre
    pressures (**Yours**, lesson 7); then **Call someone**. The Highway Code's advice (Great Britain):
    "Consult a garage or mechanic immediately"."
  - **Oil top-up condition.** L1 434's "screenwash, oil and coolant (cold)" can be read as putting
    "cold" on oil too, while L2 379 to 380 gives oil's conditions as the handbook's grade, level ground
    and engine off. **Fix L1 434:** "topping up screenwash, oil, and coolant (cold)".
- **The same claim is treated the same way.** The following each travel with their pairs as
  `course-wide.md` requires, in every place the ledgers found them: GAO's 16 states ("as of July
  2015", "fewer since"), the 1.6 mm band, the space saver's 50 mph as an exemption, the TPMS 25 per
  cent "on standard-load passenger tyres", 3 mm as the RAC's and TyreSafe's report of experts, and the
  RAC's EML pair.
- **"This course's reading" is labelled** at every conclusion the ledgers flagged, including the
  project's.
- **Found in passing, not neutrality.** L23 447 says lesson 22 showed "that California's Smog Check
  report lists open safety recalls". Lesson 22 no longer says so. BAR's line is in SOURCES [V] (line
  8266). **Fix:** cut the clause, or have lesson 23 give BAR's words itself.

## The last word in each contested block

| Lesson | Block | Last word | Verdict |
|---|---|---|---|
| 8 | Replacing above the floor | Course voice: "the law in each place is the only fixed line"; the checkpoint puts each position in its holder's mouth | Balanced. The "driver paying" figures are early-side only, disclosed. |
| 17 | Smart motorways | Course voice: "This course takes no side on either" | Balanced in the body; N1 and N9 fix what was left out. |
| 22 | Periodic inspection | Course voice: "The course stops there"; one misconception from each side | Balanced. |
| 24 | Dealer or independent; right to repair | "What would settle it is a comparison nobody here has published"; "this course takes no side" | Balanced after N2. |

---

## What holds

- **Lesson 25's stop-points table** smuggles in no verdict on a contested question:
  - The tread row is law only. No advice point (3 mm, 2 mm, 4/32) is made a stop.
  - No row prefers a dealer to an independent. "Servicing and repairs beyond the owner's checks" is
    the course's scope, labelled as such.
  - The three hybrid and EV rows (high voltage, damaged or flooded, towing) each rest on a handbook or
    an official source. No row compares risk between kinds of car.
  - Two small points for its next open, not findings:
    - The warning-light row rests on "Handbooks (Ford, Nissan) and the RAC's advice". Highway Code
      Annex 6 ("stop and investigate") is an official source for the same stop, and course-wide.md
      calls it a stop source. Adding "Highway Code Annex 6 advice (Great Britain)" would put an
      official voice beside the commercial one.
    - The 12 V battery row's advice is the AA's alone, labelled. HSE's workplace leaflet could stand
      beside it if lesson 13 uses it for the same condition.
  - The table leaves out lesson 21's and 22's test-related stops. It calls itself "the main ones", so
    this is not a finding.
- **The project** builds no verdict into a full-marks criterion on dealer or independent, replacing
  early or using fully (after N3), EV or combustion, or inspection. Its automatic fails are neutral
  between kinds of car and incomes:
  - the extension-lead fail is now worded as "written into your charging setup as what you'll use";
  - the donor fail keeps "unless its own handbook says it can be one".

  N12 is the one country asymmetry. The UK garage check relies on The Motor Ombudsman, labelled with
  its funding, because it is the only UK register this course read.
