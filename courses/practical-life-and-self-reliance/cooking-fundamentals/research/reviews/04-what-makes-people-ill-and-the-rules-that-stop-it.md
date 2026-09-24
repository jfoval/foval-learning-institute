# Reviews: Lesson 4, What makes people ill, and the rules that stop it

## 2026-09-24 — Lesson 04 — all passes, Tier A, with the outline's neutrality audit
**Reviewer:** one fresh-context reviewer: depth, fact-check, neutrality (full), pedagogy, cold start, voice and media.

Tier A: not a sensitive domain under standards 3.4, not a standpoint course. The outline assigns
this lesson a neutrality audit on washing chicken and on the US and UK framing; it was run in full.
The fact-check was treated as the priority, because a wrong number here can make someone ill.

**What was checked, and how.**

- **Primaries re-downloaded and read, not taken from SOURCES.md.** FSIS Appendix A (2021) from the
  NCDA mirror, Tables 3 and 4 rendered at page level and read from the images; FDA Food Code 2026
  PDF (byte size matches the FDA download), searched for the roast table, the 2-inch depth and the
  cross-contact definition; the FSA pages "Cooking your food", "How to chill, freeze and defrost",
  "Campylobacter", "Listeria", "Why avoiding cross-contamination is important", the allergy page
  and the burger guidance, through the GOV.UK Content API; the GOV.UK date-label page; FSIS "Danger
  Zone", "Leftovers", "The Big Thaw", "Washing Food", the temperature chart, "Food Thermometers",
  "Doneness Versus Safety" and "Food Product Dating", CDC "Chicken and Food Poisoning",
  "Preventing Food Poisoning", both Listeria pages and the burden Q&A, foodsafety.gov "4 Steps" and
  the USDA 2019 release, all through 2026 Internet Archive captures; the Salon copy of Desalu;
  Drexel's page; PubMed abstracts for Shumaker 2022, Kosa 2015 and Henley 2012; the Henley 2018
  abstract; CIDRAP 2011.
- **Every temperature, time, day count and conversion**, against the page it cites and for the
  right country. 150°F = 65.6°C; 145°F = 62.8°C; 165°F = 73.9°C (74°C in the objective, which is
  foodsafety.gov's rounding); 65°C = 149°F; 70°C = 158°F; 75°C = 167°F; 80°C = 176°F; 60°C = 140°F;
  130°F = 54.4°C; 90°F = 32.2°C; 35°C = 95°F; 40°F = 4.4°C against the FSA's 5°C (41°F), "about a
  degree"; 1 US tbsp = 14.8 ml, 1 US gal = 3.79 L; 2 in = 5.1 cm. Baldwin: 2 × 5.48 = 10.96 min
  (hundredfold at 11), 4 × 5.48 = 21.92 (ten-thousandfold at 22). FSIS chicken Table 3 at 136, 140,
  145, 150, 155, 160 and 162°F for 1% and 12% fat, and turkey Table 4 at 145°F (10.5 to 13.8 min),
  all match the images. 150°F plus 4°F thermometer error = 146°F. Sunday evening to Wednesday
  evening = 3 days (quiz 6). Friday night to Monday lunch = 2.6 to 2.7 days (F27). Monday thaw to
  Wednesday cook = 2 days, the end of FSIS's "day or two" (F27).
- **The chart, by hand.** x = 100 + 8(T − 140) for T in °F; y = 235 − 65·log10(minutes). Every
  polyline vertex for both fat levels and every FSA square centre (with 60, 65, 70, 75, 80°C
  converted to 140, 149, 158, 167, 176°F) is within 0.1 px of its table value. The Celsius tick
  labels sit at 140, 158 and 176°F. Every FSA square is above both FSIS lines at its temperature
  (for 75 and 80°C the lines have already reached zero). The chart agrees with the text. Rendered
  in both themes with rsvg-convert and read by eye (F22).
- `npm run quotes cooking-fundamentals`: every quotation in lesson 4 found in SOURCES.md after the
  Stage 4 note was appended. Every read level in the Sources list string-matched against SOURCES.md.
- **Quiz shape, measured.** Keys 2, 1, 3, 0, 2, 3: all four used, no adjacent repeat, differs from
  lesson 3's 3, 0, 2, 1, 3. Option lengths within 4 to 7 characters per item; the key is never the
  sole longest. Every item has at least two options with no absolute. Every explanation read against
  the option its key selects after the edits.
- `npm run taught`: the reader has done Terms 1 and 2 and, in Term 3, Nutrition: The Evidence and
  Strength and Fitness (both drafting), plus lessons 1 to 3 of this course.

**Neutrality: counted before read.** Perspectives checked against: a cook from a family that washes
meat (Desalu's position); a US food-safety educator; a UK reader who has always judged chicken by
cutting into it; a US reader who has eaten pink pork chops since 2011.

- *Washing chicken, before fixes.* Regulator and researcher side: FSIS 1, FSA 1, CDC 2, USDA
  release 3, Shumaker 2, Kosa 1, Henley 2018 1, Chapman 1 (trimmed). Practitioners: Desalu 3,
  Bobbi 2, Jackson 3, plus Quinlan and Henley 2012 describing them. The microbiology is established,
  so the imbalance of citations on the facts is right. On the value question (keep washing?), the
  practitioners were quoted in their own words but their strongest reasons were thinned: Desalu's
  own purpose ("wash away the germs") was cut off her method sentence, Jackson's historical reason
  was omitted, and the practitioners' own attention to the sink (Bobbi's lemons on the sink and
  counters) was left out, so the only person shown thinking about cross-contamination was the
  scientist. Last word: the course, then the USDA's paper towel. Chapman's quotation was trimmed of
  his concession that vinegar "does [help]" (F3). The misconception list carries the washers' error
  only, which is correct on established microbiology and is balanced by the lesson saying the
  choice is the cook's.
- *The study itself* was reported only in its press-release pair (non-washers 31%, washers 26%),
  which flatters "washing isn't the problem". The peer-reviewed abstract's other group runs the
  other way (F1). Selection, not accuracy: defect 14's shape.
- *US against UK.* Neither rule is called wrong anywhere. Two tilts: the UK was described as putting
  cues first with the thermometer optional, which the FSA page does not support (F4), and a reason
  was supplied for the UK cooling rule one sentence before saying the course would not guess (F7).
  Both countries' misconceptions appear in the list ("hot food will ruin the fridge", "never leave
  food out to cool"). The pork paragraph labels the course's reading as its own in the body.
- **After fixes: passes.** Practitioners now appear with their reasons (care and ritual, market
  hygiene, history, family practice) and their own risk controls, Chapman appears whole, the study
  appears with both groups, and the section's last word is Desalu's own conclusion.

**Findings:**

1. **[high] The USDA study reported by its press release only, and its design misdescribed.**
   Predict block: "Which group ... more often ... The people who did not", with 31% against 26%.
   The Shumaker 2022 abstract (read level: abstract, cited in the same section) gives those figures
   for the control group only; in the group sent USDA's don't-wash messages, 30% of washers' lettuce
   and 15% of non-washers' was contaminated. Every participant "self-reported washing poultry", and
   142 of 300 were sent messages, so "the researchers watched what people did ... rather than
   assigning who washed it" hides an intervention. SOURCES D3e recorded two sentences of an abstract
   whose remainder changes the teaching (defect 26). Fix: describe the design, confine the predict
   to the control group, give the treatment pair, and keep the conclusion that not washing didn't
   keep the salad clean. Record the abstract in SOURCES.
2. **[high] FSIS's smell conclusion trimmed of its second half (defect 9).** "Its conclusion: 'Food
   that has been left too long on the counter may be dangerous to eat, but could look fine.'" FSIS
   goes straight on: "Food that has been stored too long in the refrigerator or freezer may be of
   lessened quality, but most likely would not make anyone sick", with Listeria as the exception.
   The cut runs in the lesson's direction (the stew checkpoint). Quote both halves, name the Listeria
   exception, and point to FSIS's own 3 to 4 day leftovers rule.
3. **[high] Chapman trimmed, and paraphrased off his words.** "bleach solutions are safest for the
   sink, and 'We don't have good data that proves vinegar kills what's in your sink.'" He said
   "safest for cleaning", and the next sentence is "It does [help], but lemons and vinegar don't do
   enough." The cut removes the concession to the practitioners' practice. Quote it whole.
4. **[high] The UK's method misdescribed.** "The UK puts cues first ... a thermometer is something
   to 'consider using'", and the table's "visual cues; thermometer optional". The FSA page's
   detailed advice gives the thermometer first and introduces the cues with "If you don't have a
   food thermometer". The real difference is that the FSA treats the cues as a sound check and the
   CDC says colour and texture can't tell you. Part B 3.1's "Primary cue is visual" is where it came
   from; corrected in the Stage 4 note.
5. **[high] Two exercise answers rest on rules the body never teaches** (drafter's flag 4). (g)
   uses FSIS's "additional day or two" after fridge thawing and (h) uses the FSA's "2 hours on a
   very warm day"; neither appears before the checkpoint, so a reader who did the exercise from the
   lesson could not reach the printed answers. Teach both in "The clock", and add both to the table.
6. **[medium] "Both say never on the counter."** The FSA page read doesn't say it; it lists the
   fridge and the microwave and calls the fridge "the safest way to defrost food". Reword.
7. **[medium] A guess at the UK's reasoning next to a promise not to guess.** "the UK answer does
   it outside and keeps the fridge cold for everything else. Neither page read gives its reasoning,
   so this course won't guess at it." Cut the reason.
8. **[medium] The FSA's own cooling and storage advice left out.** The FSA says "divide food into
   smaller portions" to cool it and puts raw meat on the bottom shelf; the lesson credited both only
   to FSIS and the CDC, and quiz 3's explanation grounded the FSA answer's "shallow tubs" in lesson 2
   rather than in the FSA. Add the FSA's sentence; key option now "small tubs"; explanation cites the
   FSA.
9. **[medium] Harm-reduction step 4 labelled the course's own when a read source says it**
   (drafter's flag 1). Chapman, in the piece already cited: "Look at the liquid like it's a
   pathogen". FSIS on a soak: "Carefully pour out the soak and do not reuse it." Cite both; only step
   2 (clear the sink first) remains the course's, labelled in the body.
10. **[medium] Practitioners' own reasons and controls thinned (neutrality).** See the count above:
    Desalu's purpose, Jackson's historical reason, Bobbi's sink cleaning and Desalu's conclusion
    added, all in their own words from the Salon copy and recorded in SOURCES.
11. **[medium] "The researchers behind the study that made the rule famous"** is unsourced. Now
    "the USDA's own study".
12. **[medium] US pink pork with no read source cited.** "pink in the middle, since 2011" and the
    table's "pink is fine" rested on Part B's summary table. CIDRAP (read in full, D3d) reports the
    agency saying pork at 145°F with the rest "may still be pink but is safe to eat". Footnote 10 now
    says so; recorded in SOURCES.
13. **[medium] The six-log point reads as an explanation of the gap** (drafter's flag 2). The FSA's
    six-log is a smaller kill than FSIS's seven, so it points the other way. Say so, then keep the
    lesson's refusal to guess.
14. **[low] "9.9 million illnesses a year ... from seven major germs".** A 2019 estimate, and CDC
    counted illnesses for six of the seven. Reworded to "covers seven major germs and counts 9.9
    million illnesses in the US that year".
15. **[low] Henley 2018: "10% lemon juice and in vinegar".** Both washes were 10%. Fixed.
16. **[low] The 4Cs printed in quotation marks as a run-on** ("cleaning chilling cooking avoiding
    cross-contamination"), a list flattened into a sentence. Written as a list, unquoted.
17. **[low] "found mostly in chilled ready-to-eat foods" and "the same everywhere".** The FSA says
    "more common in ready-to-eat foods"; the lesson read two countries. Fixed.
18. **[low] Misconception "For US burgers, no".** Both agencies say colour can't be the only check
    on a burger. Reworded to both, and the UK chicken cues described as the FSA frames them.
19. **[low] "adds a rule the US does not have".** The FSIS pages read don't give one; that is the
    claim the sources support. Fixed.
20. **[low] Quiz 4 explanation put "maker's guess at quality" in quotation marks** as though it were
    FSIS's phrase. Now FSIS's own words, "when food is of best quality".
21. **[low] No worked example with a gap.** Step 5 of the one-board dinner is now a checkpoint the
    reader fills before step 6.
22. **[low] Chart tick labels "100m", "10m", "1m", "6s"** read as metres and mix units. Now 100, 10,
    1, 0.1 with the title "Minutes held (log scale)". The 45-minute square at 60°C sits on the 12% fat
    line (35 minutes at 140°F); it is above it, but the gap is 8 px. Left.
23. **[low] Shumaker quotation with double quotes nested in double quotes.** Restructured so the
    quoted words match the abstract without altering its punctuation.
24. **[low] "Steps 5 and 7 are this course's application ... not instructions copied from a
    regulator"** understated FSIS's and the FSA's hand-washing advice, and "the reason it's there"
    had no referent. Reworded.
25. **[low] Contractions at 10.3 per 1,000 outside quotations**, above the 5 to 8 band. Thirteen
    expanded, in the flattest statements of rule.
26. **[low] `minutes: 100`**; measured 105 after the fix pass.
27. **[low] Scenario sums.** (a) "about two and a half days" for Friday night to Monday lunch, which
    is 2.6 to 2.7: now "between two and a half and three". (g) "just inside" for the last day of
    "a day or two": now "the last day of that". Both conclusions unchanged; (h)'s diagnosis traced
    backwards and holds (the US one-hour rule gives "over" in the UK; the ordinary two hours gives
    "fine" in the US).
28. **[low] Two stiff sentences.** "Bacteria grow fastest at the temperatures food spends time at
    between the fridge and the plate"; "Eat leftovers within 48 hours or freeze them." with its full
    stop inside a trimmed quotation. Fixed.

**Depth.** Passes. Every section carries specifics a non-expert could not have written (Table 3's
fat levels, the Food Code roast equivalence, the FSA's equivalence list, the date-label law in each
country). The transfer test is met by the eight-scenario exercise and quiz 1's turkey. Nothing
generic found.

**Cold start.** Passes. Kit: the instant-read thermometer was set up in lessons 1 and 2; the fridge
check gives a workaround for readers with no fridge thermometer, labelled as the course's. A log
scale is explained under the chart. "Water bath" was met in lesson 1. The bleach sanitiser recipe
is given in full. No step assumes knowledge the listed courses don't give.

**Drafter's flags, decided.** (1) Resolved by F9. (2) Kept as "doesn't explain", with F13 added.
(3) Printing neither CDC Listeria count is right: the two CDC pages disagree (1,600 and 1,250) and
nothing in the lesson turns on the number. (4) Resolved by F5. (5) **Keep whole.** 105 minutes,
about 7,000 body words, no padding found: every section is an outline core idea or a gate the
course may not publish without (G1 allergens, G3 smell, G4 higher-risk foods). It reads as one long
sitting, like lesson 2 at 100. No split recommended.

### Resolutions applied

All findings 1 to 28 fixed in the lesson except the half of F22 noted below. A "Stage 4 note,
lesson 4" section was appended to SOURCES.md recording every passage the lesson now relies on that
the file did not hold: the rest of the Shumaker abstract, the FSA "Cooking your food" thermometer
framing, the FSA chill page's portions, bottom shelf and defrosting sentences, Henley 2018's two 10%
washes, the fuller Chapman, Jackson and Desalu passages, the FSIS soak and Big Thaw sentences,
CIDRAP's pink-pork sentence and the FSIS dating sentence. Sources entries 3, 10, 14, 16, 19, 20, 23,
25, 28 and 31 updated to what they now support. `npm run validate` exits 0; the lesson's only
warnings are the three repeated-sentence notices for the higher-risk callout, which is word for word
across lessons 4, 5 and 7 by design (outline decision 3). `npm run quotes`: no misses in lesson 4.
`minutes` set by hand to 105 (measured).

**Not fixed, and why.**

- *The 45-minute square overlapping the 12% line (F22).* It is drawn at the right value; moving it
  would misplot it. The text and the `<desc>` both say every square sits above the lines.
- *The objective's "165°F (74°C)"* is foodsafety.gov's rounding and the outline's wording; the body
  uses FSIS's 73.9°C where it quotes FSIS. Left.
- *Chapman and the 2022 paper.* PubMed lists a "Chapman B" at NC State as senior author of Shumaker
  2022, very likely the same Benjamin Chapman Desalu quotes. Not stated in the lesson, because
  nothing read confirms the identity and nothing in the lesson depends on it; a later session could
  check the paper's author list.
- *The repeated-sentence warnings with lesson 5.* Deliberate; the callout is meant to be identical.
