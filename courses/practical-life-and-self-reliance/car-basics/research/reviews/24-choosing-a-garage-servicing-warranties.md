# Reviews: Car Basics lesson 24, "Choosing a garage, servicing and warranties"

## 2026-09-26 — Lesson 24 — Stage 4, Tier A, with the neutrality audit
**Reviewers:** one Tier A reviewer (passes 1 to 6; findings R1 to R18) and a separate fresh-context
neutrality auditor (standards Part 3; findings N1 to N9), each in a fresh context. The reviewer re-read
with curl (generic browser User-Agent, no personal data) or the Internet Archive: the CMA guidance
(1.1, 2.4, 5.34 to 5.41 with footnotes 50 to 53), S.I. 2023/586 art. 13, 16 CFR 700.10, 15 U.S.C.
2302(c), the FTC's three pages, EPA-420-F-15-035, the Nissan, Ford and Toyota handbook pages, AAA, ASE
(capture 20260614094747), the IMI pages, BAR, Citizens Advice, TMO's code and pages, ch. 93K § 2, the
election statistics, the 2020 Information for Voters, the Alliance complaint (capture 20260530044526),
Auto Care's page and the CourtListener docket. Every quotation string-matched; the vote percentages
and quiz keys were redone by hand and by script.
**Verdict (reviewer):** pass with fixes. 0 critical, 3 major (R1 to R3), 15 minor (R4 to R18, of which
R17 is a SOURCES edit and R18 an OUTLINE edit). Facts and law pass after R2 to R4, R6 to R8, R10;
safety passes; depth and pedagogy pass; cold start passes after R16; voice and media pass.
**Verdict (neutrality auditor):** NEEDS FIXES. Every quotation accurate; the defects are context and
selection. 2 major (N1, N2), 3 moderate (N3 to N5), 4 minor (N6 to N9). Perspectives checked: a UK
independent garage and its trade body; a carmaker and franchised dealer; a right-to-repair supporter
and the US aftermarket; a privacy and domestic-violence advocate; an owner choosing where to service a
car under warranty. The auditor read two new sources for the fixer (YourCar-YourChoice; two Which?
pages).

**Findings (reviewer):**
1. R1 [major] The right-to-repair section opened in the supporters' framing ("the dealer-or-independent
   question").
2. R2 [major] "It doesn't ... give the owner a right" contradicted the lesson's own mechanism and the
   CMA's "the consumer's right" (5.40, 5.41).
3. R3 [major] The "policy hook" sentence is the event participants', not the IMI's; "just over a third"
   repeats lesson 14.
4. R4 [minor] "whether standard or extended" quoted without 5.39 on extended warranties sold years
   later.
5. R5 [minor] The Ulverston conclusion was labelled two paragraphs after it was drawn.
6. R6 [minor] "The rule says the same" overstated 700.10(c)'s last sentence; "so caused" lost its
   antecedent.
7. R7 [minor] CalRecycle quoted without a footnote and with "most cars" dropped.
8. R8 [minor] Quiz 5's explanation quoted a California BAR guide not in the sources, as if general.
9. R9 [minor] Quiz 5's key was the only hedged option; stem "on" for "in".
10. R10 [minor] Ford's "Never exceed" read as a general cap beside Ford's hybrid line.
11. R11 [minor] "Still in court" is a present-tense claim the course didn't read.
12. R12 [minor] Nissan's read level understated (pp. 9-7 to 9-9 were read).
13. R13 [minor] "makers advertise longer ones" unsourced, in the course's voice.
14. R14 [minor] "the law leaves the choice to you" overstated, unlabelled.
15. R15 [minor] The warranty misconception restated the law instead of pointing back.
16. R16 [minor] CTSI unexpanded; ASE shop line not on the page; a one-sided funding hedge; "settles"
    beside a pending challenge; Sources 24 and 26 name one case two ways; quiz 1's "sits" reads as
    parked.
17. R17 [minor, SOURCES] The IMI mandate line is still in the release; SOURCES said it wasn't.
18. R18 [minor, OUTLINE] OUTLINE's lesson 24 entry cited two ASE lines no longer on ASE's page.

**Findings (neutrality auditor):**
1. N1 [major] The Mazda quotation is its maker's advice to an owner unsure of a DIY procedure,
   presented without its lead-in as a case against independents.
2. N2 [major] The independents had no UK voice and no argument on the merits (82 words against 142).
3. N3 [moderate] "No source ... compares ... price" is wrong once Which? is read; no consumer body in
   the block.
4. N4 [moderate] CMA 5.39 and the dealer-only extended warranty omitted, leaning the UK section to the
   independents.
5. N5 [moderate] The security case quoted without its mechanism (commands to the car) or its strongest
   support (NHTSA, as the complaint quotes it).
6. N6 [minor] The section's opening adopted the supporters' framing (as R1).
7. N7 [minor] The funding hedge fell on one committee; the predict named the sides without their
   interests.
8. N8 [minor] The dealer block's last word ("the law leaves the choice to you") read as a verdict.
9. N9 [minor] The makers' interest line carries a responsibility, the independents' only gain; N2's
   revised interest sentence squares it.

### Resolutions applied
**Re-read by the fixer before editing** (curl, generic browser User-Agent, no personal data, 26
September 2026; no in-app browser): YourCar-YourChoice's home page and the IAAF's home page; Which?'s
"Car servicing and repair costs" (9 June 2026) and "How to find a good garage" (28 April 2026), paragraph
text extracted from the HTML; the Mazda3 maintenance introduction page; the 2020 Information for Voters
(PDF, pdftotext); ch. 93K § 2 on malegislature.gov; the Alliance complaint (capture 20260530044526);
Auto Care's page; the CMA guidance 5.39 to 5.41; 16 CFR 700.10 (eCFR renderer, current); the IMI
release; CalRecycle's "Check Your Number" page. Every string added to the lesson was matched on those
texts, and `npm run quotes car-basics` finds all of them in SOURCES.
**SOURCES:** "Stage 4 note, lesson 24 (2026-09-26)" appended at the end with the four new sources and
every new string. **In place:** the "Lesson 24: credentials" IMI bullet now says the mandate line is in
the release, with a dated correction marker (R17).
**OUTLINE:** lesson 24's ASE entry replaced with R18's text, exactly as given (R18).

**Merged findings, and where a fix was adjusted.**
- R1, R11 and N6 fixed together: "One US state has passed a law on access to a car's repair information
  and data, which its supporters call right to repair and the carmakers' complaint calls the "Data
  Law", and the argument over it went to court." (R1's neutral subject, N6's two names for it, R11's
  past tense.) The opening's "an argument the law hasn't finished with" went with a cut (below).
- R2 fixed with R2's text, **adjusted** in one phrase: "is likely to be caught by competition law" for
  R2's "is likely to break competition law", because "caught by the Chapter I prohibition" is the
  guidance's own wording and "break" goes past it.
- R3 fixed with R3's text, "IMI-hosted" checked on the release. "Just over a third" is gone from this
  lesson; lesson 14 keeps it.
- R4 and N4 fixed together: after the 5.41 sentence, "where an extended warranty is sold "years after
  the purchase of the vehicle", independent garages are less likely to be shut out "even if" it
  carries servicing or parts restrictions (5.39)", then "Which? notes that some extended warranties
  require a main dealer." **Adjusted:** Which?'s example product (Toyota/Lexus Relax) isn't named
  (decision 11), so Which? is paraphrased, not quoted. N4 (c): the practical line adds "though an
  extended warranty bought later may require the dealer, so read its terms" (N4's "lawfully" dropped:
  5.39 says only "seems less likely"). N4 (d): Ulverston's car is "inside the maker's original new-car
  warranty". N4 (e) goes into R15's rewritten misconception.
- R5 fixed: "so, on this course's reading, the independent service by itself shouldn't be a reason to
  refuse"; the trailing "That's the course's reading." deleted.
- R6 fixed with R6's text at both places ("denying liability for damage caused by "unauthorized" parts
  or service"; "The rule points the same way from the warrantor's side").
- R7 fixed: CalRecycle "says "no longer applies to most cars"", with a new Sources entry [27] (page
  re-read live; the hedge is on it).
- R8 fixed with R8's text ("nothing read ties certification to a guarantee").
- R9 fixed with R9's option B ("That the shop's work is usually guaranteed, since most certified shops
  offer a written guarantee") and "in the FTC's ... own words". The explanation's last sentence answers
  B by content.
- R10 fixed with R10's text ("resets early or stops working ... with, in the same paragraph").
- R12 fixed in Sources 1 (pp. 9-5 to 9-9). The optional body clause was not added (minutes).
- R13 fixed with R13's text ("garages are paid by the service").
- R14 and N8 fixed with N8's text, which is the more exact of the two: "The next section shows what the
  law in each country lets a maker's warranty require, and what it doesn't."
- R15 fixed with R15's text plus N4 (e): "Not by itself, in either country, though a claim can still be
  refused for damage caused by bad work or a failed part, and some extended warranties bought later do
  require a main dealer. The warranty section above has each country's rule."
- R16: CTSI expanded (now in the table's "What it tells you" cell, after the table cut below); the ASE
  misconception reads "a shop can qualify for a separate recognition programme"; the funding hedge as
  N7; "that decided what the statute says, not whether it survives the court challenge or whether it
  is wise"; quiz 1 "is driven on gritted roads all winter". Sources 26, **adjusted**: "the same case as
  24, under its earlier caption", because the reason for the change of name wasn't read and R16's "the
  attorney general's earlier name" supplies one.
- R17 fixed in SOURCES (above). No lesson change; lesson 14's use stands.
- R18 fixed in OUTLINE, exactly as given.
- N1 fixed with N1's text: Mazda "tells an owner unsure of a maintenance procedure: "we strongly urge
  you to have a reliable and qualified technician perform the work, we recommend an Authorised Mazda
  Repairer." Its reason: ...", the rest unchanged.
- N2 fixed, **adjusted** on the page's own wording: YourCar-YourChoice is "a campaign by the
  independent aftermarket administered by its trade body, the Independent Automotive Aftermarket
  Federation" (the page says "administered by the IAAF", not "run by"); its case quoted whole. The
  interest line is N2's, with Auto Care's self-description ("the interests of all drivers, and the
  independent aftermarket industry that serves them"). The "This course read no UK independent
  garages' body" sentence is deleted. Neither the campaign's legal claims (the EU regulation; "you will
  NOT invalidate") nor Which?'s ("consumer law dictates") are used; the Sources entries say so.
- N3 fixed: (a) "No source this course read compares dealers and independents on quality or safety;
  the one price comparison below is of owners' reported spending." (b) In "Voices with no side in it",
  Which? with its commission label, its method as its page gives it (63,334 owners, April to June 2025,
  total spent on servicing over 12 months, parts included), the £361 and £260 averages quoted, "Those
  are owners' reported yearly totals, not the same job priced at each", and its point for dealers
  (fixed-price servicing at a main dealer) quoted. (c) "a comparison nobody here has published on
  quality". New Sources [29] and [30]. **Note for the course:** decision 11 allows "no prices except the
  dated fees OUTLINE decision 9 lists"; these are survey averages, dated and attributed, used on the
  orchestrator's instruction for the neutrality fix, not prices for a service. Flagged here so the
  test and script treat them as Which?'s survey figures and nothing else.
- N5 fixed: (a) at the end of the subsection (f) sentence, "Access "shall include the ability to send
  commands to in-vehicle components if needed ..."" and a repairer's access "limited to the time to
  complete the repair or for a period of time agreed to by the vehicle owner", both re-read on the
  live statute. (b) In the case against: "The complaint leans on the federal vehicle safety regulator,
  NHTSA, quoting its 2020 testimony to the state legislature that the measure would force "vehicle
  manufacturers to redesign their vehicles in a manner that necessarily introduces cybersecurity risks
  ..." This course read the complaint's quotation, not NHTSA's letter." **Adjusted:** the quotation starts
  at "vehicle manufacturers", as the complaint prints it, rather than N5's "to redesign". "NHTSA 2023
  letter on Massachusetts data access law" is on the `unread:` line and is not named. (c) The case for
  gains the Yes argument's "Vote YES to protect independent repair shops and preserve your ability to
  shop around." and Auto Care's whole sentence, "This law means Massachusetts car owners keep deciding
  where their vehicle gets maintained and repaired, which keeps the state's repair market competitive."
  (the whole sentence rather than N5's fragment, to keep the sides level after (b)). (d) "neither
  argument quoted here cites a measurement" kept, as N5 says.
- N7 fixed: the one-sided funding line deleted; "This course didn't read who funded either ballot
  committee, and says nothing about it." after the case against's interest sentence; the predict now
  says "The ballot committee for the law makes it its conclusion; the carmakers' trade association's
  complaint says".
- N9: squared by N2's interest sentence, as the auditor said; no further change.
- **Fixed inline, found in passing:** the opening's "it's where most of the money in car ownership
  quietly goes" had no source; now "A service is the one thing almost every car owner pays a garage
  for, year after year."

**Words per side of the two contested questions** (the `npm run minutes` tokeniser):
- *Dealer or independent:* the makers' case 144 before, 174 after (+30, Mazda's lead-in, N1); the
  independents' case 83 before, 130 after (+47, YourCar-YourChoice and Auto Care's self-description,
  N2, less the deleted gap sentence); "Voices with no side in it" 90 before, 196 after (+106, Which?,
  which carries one point for each side: the independents' lower average, the dealers' fixed-price
  deals); "Where they meet" 65 to 71. No verdict; the block ends pointing to the law section.
- *Right to repair:* the case for 212 before, 249 after (+37: the Yes argument's shop-around line and
  Auto Care's competition sentence); the case against 249 before, 315 after (+66: NHTSA as the
  complaint quotes it, 51, and the both-committees funding line, 15, which is neutral and moved here
  from the case against's first paragraph). Sides' own material: about 249 against 300, a ratio of
  0.83, against 0.85 before. "What kind of question" 232 to 243 ("settles" fixed). Order unchanged:
  law, votes, court, for, against, what kind of question; no verdict; "this course takes no side".

**Cuts to hold 90 minutes** (the fixes added about 620 words; the modelled time went to 95 before the
cuts): the telematics detail (the quoted platform clause, replaced by one plain sentence carrying N5's
two statutory strings); the six-year records sentence; the opening's preview sentence and label
preamble; AAA's severe list (Nissan's list stays); the FTC's dispute advice in the Scottsdale
checkpoint (lesson 25 has the dispute routes); "Its page lists the questions" (Go deeper has it); the
extended-warranty definitions' gloss (to "Neither usage is wrong; read the contract."); "Each needs its
own caution"; the credentials table's "What it is" column (the body says each thing); the credentials
section's second opening sentence (to one clause); Connections to four sentences; Go deeper's "Read
here" lines and the CMA item's gloss; two Sources notes about refusing automated readers. No cut
touched either side's case in either contested block.

**Voice checks:** no em dashes or spaced en dashes; no banned word; bold 37 spans in about 7,400 words
(about 5 per 1,000); two `:::predict`, two `:::checkpoint`, one exercise, one worked example with a gap
(Scottsdale); footnotes [1] to [30] all used; callout byte-identical (validate). Every law section and
the exercise keep the short label; the full label once, after the callout.

**Final measures:** 7,444 words as `npm run minutes` counts them (7,115 before); `minutes: 90` (measured
90; raw about 92.2, so about 45 words of headroom before it rounds to 95). Quiz keys 1,0,3,2,3,1
(unchanged): all four positions, no adjacent repeat, no identical sequence or value shift with any
lesson on disk (01 to 25), no shared run of four at offsets 0 or ±1 with lessons 19 to 25, by script.
Option spreads 5, 8, 5, 11, 8, 2 characters; the key is never the sole longest. Every explanation
read against its options after the quiz 1 and 5 edits. Places: Ulverston, Scottsdale (unchanged).
`npm run quotes car-basics`: no miss in this lesson (the one miss is lesson 25's). `npm run validate`:
exit 0, no line naming this file. `npm run quiz`: exits 1 on other courses' lessons (Reading Well 02,
First Aid 07); nothing for this file.

**Status after review:** needs second pass and neutrality re-check. The second reader re-verifies the
new strings (the statute's (f) clauses, the NHTSA quotation, 5.39, the Which? method and figures,
YourCar-YourChoice's sentence and administration line); the re-checker re-runs balance on both
contested blocks with the counts above.

### Neutrality re-check (2026-09-26)

**Re-checker:** fresh context, following `.claude/commands/neutrality-audit.md` and standards Part 3,
against N1 to N9 and the resolutions above. Quotations re-read live (curl, generic browser
User-Agent, no personal data; no in-app browser): Which? costs and garage pages; YourCar-YourChoice
and IAAF home pages; Auto Care's page; CMA guidance 5.35 to 5.41 (PDF); ch. 93K § 2 on
malegislature.gov; the 2020 Information for Voters (PDF); the Alliance complaint (IA capture
20260530044526). **Every added string matches**, including the (f) clauses, the NHTSA quotation as the
complaint prints it (July 2020 testimony to the Joint Committee, so "2020 testimony to the state
legislature" is right), the Yes argument's "shop around" line, 5.39, and YourCar-YourChoice's sentence
and "administered by the IAAF". Which? has no quality or satisfaction comparison, so "no source ...
compares ... on quality or safety" stands.

**N1 to N9: all resolved as intended.** Mazda now reads as its advice to an unsure owner; the
independents have a UK voice; 5.39 is in, paraphrased accurately ("seems less likely ... significant
foreclosure effect" as "less likely to be shut out"); the Massachusetts opening gives both names; the
funding line covers both committees; the predict names each side's interest; the dealer block ends
on the law, not on "choice".

**Which? figures:** described exactly. The method is 63,334 owners surveyed April to June 2025, asked
the total spent on servicing "including replacement parts" in the past 12 months; the lesson's "owners'
reported yearly totals, not the same job priced at each" is right. Its commission label is given at
first use; the second mention, in the UK warranty section, is unlabelled but concerns a point for the
dealer side, so nothing turns on it.

**Balance.**
- *Dealer or independent:* makers 174, independents 130, neutral 196. No tilt: each side has two
  labelled holders in their own words, and Which? carries one concrete point each way. The makers'
  words run longer because Mazda's warning is long, not because the independents lack an argument.
- *Right to repair:* the fixer's "for 249" includes about 45 words of neutral framing (the guide's
  word limit and the state's disclaimer, which covers both sides), so the sides' own words are nearer
  190 to 290. **Accepted:** the gap is the NHTSA quotation, reported through the complaint with its
  caveat. Distinct arguments are level (for: loophole, steering to dealers, shop around, privacy
  limited to mechanical data, "your car", Auto Care's cybersecurity and competition lines; against:
  data grab and location, security, NHTSA, freedom already exists, no evidence of blocking), and the
  for side's strongest points are all present. Do not add to it.

**Further findings, fixed inline (net words -1):**
- **NR1 [minor]** "Where they meet" said the voices differ on whether the maker's network is "the
  only reliable way" to get the right schedule and parts. No maker quoted says that: Mazda asks for "a
  reliable and qualified technician" and recommends its network; Toyota says "dealer or qualified
  service shop". Now "the best way".
- **NR2 [minor]** The right-to-repair interest lines were uneven: the independents "gain the work",
  the makers "build the systems, run the dealer networks, and answer for the cars' security", which
  names a responsibility for one side and only gain for the other. Now "the makers' dealers compete
  for the work, and the makers answer for the systems' security" (same word count).

**Noted, not fixed:**
- **NR3 [minor, for the second pass]** "Voters answered it twice for Massachusetts": the value question
  as the lesson states it is who controls "the data a car sends", which only the 2020 vote was on (the
  2012 question was repair information). Not a tilt, since the sentence goes on to say the vote did not
  decide whether the law is wise, but "twice" is loose. A same-length fix: "Voters answered it in 2020,
  by a large margin;".
- Order (law, votes, court, for, against, what kind of question, predict) and last word (the course's
  own "takes no side", then a predict naming what both sides agree on) are sound. No verdict anywhere,
  quiz 6 included. Every interest holder is labelled at use: YourCar-YourChoice and the IAAF, Which?,
  Mazda and Ford, the Alliance (court, case against, predict, quiz), Auto Care (both sections), both
  ballot committees.

**Perspectives checked:** a UK independent garage; a carmaker and franchised dealer; a right-to-repair
supporter; a privacy and domestic-violence advocate; an owner under warranty. None would now say its
case is missing or put in an opponent's terms.

**Verdict: BALANCED.**

### Second pass (2026-09-26)
**Reviewer:** a fresh-context second reader (truth, law, pedagogy, format; balance is the parallel
neutrality re-check's). Re-read today by curl (generic browser User-Agent, no personal data) or the
Internet Archive: YourCar-YourChoice and the IAAF home page; Which?'s costs page (9 Jun 2026) and garage
page (28 Apr 2026); the Mazda3 introduction page; the CMA guidance PDF (5.35 to 5.41, fns 50 to 53);
16 CFR 700.10 (eCFR renderer, current); 15 U.S.C. 2302(c); S.I. 2023/586 art. 13; ch. 93K § 2 (a), (c),
(f); the 2020 Information for Voters; the Alliance complaint (capture 20260530044526); Auto Care's page;
CalRecycle; the IMI release and TechSafe page; Ford's Maverick PDF (capture 20250505042038, printed
pp. 456 to 458); ASE (capture 20260614094747); the FTC's three pages; Citizens Advice; the Toyota and
Nissan handbooks. Every quotation in the lesson that these carry was string-matched.

**Verified:** YourCar-YourChoice's sentence and "administered by the IAAF"; the IAAF is a trade
association. Which?: 63,334 owners, April to June 2025, total spent on servicing including parts over
12 months, the £361 and £260 sentence exact, the affiliate-commission line, the fixed-price sentence,
and "some extended warranties ... require you to use a main dealer". Mazda's lead-in ("If you are unsure
about any procedure it describes") matches "an owner unsure of a maintenance procedure". CMA 5.35 to 5.41
as quoted. 93K § 2(a), (c) and (f) strings exact; (f) is model year 2022 on. Votes 85.7/14.3 and 75.0/25.0
redone by hand. The NHTSA string is exact as the complaint prints it (p. 2: written testimony to the
Joint Committee "last July", i.e. 2020). Auto Care's three strings exact. R2 (the UK caution) matches
5.40 and 5.41. R3: "participants calling on government to mandate its use" is the release's; lesson 14
lines 213 to 216 say it, and its "graded by training ... none of it is owner work" backs the pointer.
R6: 700.10(c)'s last sentence as quoted. R7: CalRecycle's "no longer applies to most cars" on the live
page, footnoted [27]. R8: quiz 5's explanation now cites nothing outside the lesson's sources. R10: Ford's
"Never exceed" is in the display-failure paragraph (printed p. 457). OUTLINE's ASE entry (line 1949)
matches the capture, Blue Seal included. Quiz: every explanation answers its key and each distractor by
content; option spreads 5, 8, 5, 11, 8, 2; the key is never the sole longest. Keys 1,0,3,2,3,1 pass
decision 20's relaxed rule by script against lessons 01 to 25 (all four used, no adjacent repeat, no
identical or shifted sequence, no run of four at offsets 0 or ±1 with 19 to 25). No em dash, no spaced
en dash; callout byte-identical to the brief's and to `CAR_BASICS_SAFETY`. Cross-referenced titles
(Personal Finance 8 and 10, Digital Literacy 11, Home Repair 22) checked on disk. Places unique.

**Fixed (one edit each, both obviously right, net -2 words):**
- S1 [minor] 5.39's hedge dropped: "independent garages are less likely to be shut out" now "seem less
  likely", as the CMA's "it seems less likely".
- S2 [minor] The warranty misconception said "some extended warranties bought later do require a main
  dealer"; Which?'s sentence has no "bought later" (its example is a dealer-renewed plan), and 5.39 speaks
  only of what "seems less likely". Now "some extended warranties do require a main dealer".

**Noted, not fixed:**
- S3 [note, for the neutrality re-check] Which?'s costs page gives a second pair beside the quoted one:
  cars available new, £331 franchised against £262 local. The lesson quotes the all-cars pair only,
  which shows the wider gap. Decision 11's exception names only £361 and £260, so adding the second pair
  is a convention change; the balance call is the re-check's.
- S4 [minor, OUTLINE] OUTLINE line 580 (Home Repair boundary) still reports ASE's "kept the government
  from licensing jobs", which R18 found gone from ASE's page. The lesson doesn't use it.
- S5 [trivial] The FTC robocall quotation nests straight double quotes ("extended warranty") inside a
  double-quoted string; left, since the quotes checker matches the string as is.

**Measures after the fixes:** 7,441 words, `npm run minutes` 90 (claimed 90). `npm run quotes car-basics`:
935 quotations, 0 not found. `npm run validate`: exit 0, no line naming this file.

**Verdict: CLEAN.**

## Neutrality audit fixes (2026-09-26)

From the course-wide neutrality audit (`neutrality-audit.md`), applied by a fixer in a fresh context.
Quotations are recorded in SOURCES, "Stage 4 note, course-wide neutrality fixes, lessons 17 to 24
(2026-09-26)", re-read live that day.

- **N2, applied as written.** Which?'s second pair added: for cars still sold new, "franchised dealer
  services cost £331, compared with local garages at £262." The yearly-totals caveat and the
  fixed-price line stay. Cut from Connections: the lesson 12 clause and the Home Repair 22 and 23
  sentence. The Home Repair lesson 22 pointer at the Michigan paragraph stays; the hiring pointer
  (Home Repair 23) is not needed in a lesson about garages, so the Scottsdale case is untouched. The
  pipeline-briefs decision 11 exception still names only the first pair. That file is outside this
  fixer's scope and is left for the orchestrator.
- **N10, applied as written.** Ford's handbook and Nissan's severe schedule for a car with no engine
  oil; "partly commercial" and "garages are paid by the service" are gone.
- **N4.** The Motor Ombudsman carries "funded by the garages it accredits" at its first use in each
  H2 section, in the credentials table, the checkpoint answer, the misconception and the exercise.
  Which? carries its commission label at line 292 and in Source 30. AAA has the base label (N5) in
  the body and in Source 4.
- **N6.** "it's worded more carefully" became "it speaks of what is likely"; "puts it plainly"
  (the FTC) became "says". Script 24's own "puts it plainly" is spoken style and was left.
- **Cuts for time:** "Lesson 6 used the same handbook for brake fluid" and the signpost sentence
  ending the dealer-or-independent section.
- **Measures.** 7,479 words (was 7,443); `npm run minutes` 90. Words per side in the dealer or
  independent block: the makers' case is 174 and the independents' case is 130, both unchanged. The
  neutral voices paragraph is 217 (was 196), and the new words are the dealer-side pair. The
  oil-monitor paragraph is 86 (was 78). The quiz is unchanged.
- **Script 24** needs no change: it prints none of the figures, and it leaves out the monitor and AAA.
