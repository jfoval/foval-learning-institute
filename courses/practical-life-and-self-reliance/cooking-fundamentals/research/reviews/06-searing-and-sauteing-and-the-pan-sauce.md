# Reviews: Lesson 6, Searing and sautéing, and the pan sauce

## 2026-09-24, Lesson 06, all passes, Tier A
**Reviewer:** one fresh-context reviewer: depth, fact-check, neutrality (full, on the nonstick and
PFAS section and on the whole lesson), pedagogy, cold start, voice and media.

Tier A: not a sensitive domain, not a standpoint course. The contested stretch is nonstick and PFAS,
which the outline's neutrality notes place here; smaller contested points are room-temperature
steak (Bon Appétit against López-Alt) and the fridge-drying method against the regulators' rule.

**What was checked.** Every primary the lesson leans on was re-downloaded with curl and its text
extracted: ATK "Searing Steak", "Pan Sauces 101", "Should You Wash Mushrooms?", the stainless
skillet review, Lam's wok article, "Technique #20"; Arnold's post; Wilson's column; Colins on Yahoo;
Engineering ToolBox's table; FDA, EPA, EFSA; C&EN; the Cookware Sustainability Alliance home page;
The New Lede; Morgan Lewis; the Alzheimer's Society capture. New primaries opened for the date
conflicts: Connecticut DEEP "PFAS in Products", Shipman & Goodwin's Connecticut note, and the
*National Law Review* report of the California veto. The Farella Braun page still sits behind a
Cloudflare challenge. `npm run quotes`: no misses in this lesson before or after; a separate
string-match of every quoted passage in the body (marked or not) found two misses before the fixes
(F7, F8) and none after. Every read level in the Sources list string-matched against SOURCES.md.

**Sums redone by hand.** 1¼ in = 3.2 cm ("about 3 cm"); 250°F = 121°C ("about 120"); 125°F =
51.7°C ("about 52"); 110°F = 43.3°C ("about 43"); under 2°F = under 1.1°C ("under about 1°C");
10°F = 5.6°C ("about 5 or 6"); 8 in = 20.3 cm ("about 20 cm"); 450 to 500°F = 232 to 260°C ("about
230 to 260"); 165°F = 73.9°C; 90°F = 32.2°C; 250 ml ≈ 1 US cup; 125 ml ≈ ½ cup. Conductivity
ratios: 401 / 14.4 = 27.8 ("about 28"), 236 / 14.4 = 16.4 ("about 16", "about a sixteenth"),
52 / 236 = 0.22 and 54 / 236 = 0.23 ("about a quarter", slightly generous: F24). Chart bars against
240 px for 401: 141.2, 32.3, 31.1, 8.6 px drawn as 141, 32, 31, 9: all to scale. Every figure's
temperature in the caption matches the table (copper and aluminium at 0°C, the rest at 20°C).
Lodge's 45 minutes against the quiz's 15: correct. Lesson 2's "more than five times" (2,256 / 418
= 5.4): correct, so Wilson's "50 times" is about ten times too high and its omission is right.

**Serious Eats table.** Printed: Wilson's <2°F in 20 minutes and ~10°F in two hours (allowed,
attributed to her report, rechecked on the page); Colins's every 15 seconds, two-thirds the time,
about 40% (allowed, attributed, rechecked). Not printed, correctly: the salting minutes (the lesson
says why), 1.68%, 49.6°F, the cast-iron preheat, the cold-start sear, Ibrahim's "slightly more".
The reverse sear is described from ATK's test, as the table directs.

**Quiz shape, measured.** Keys 1,3,0,2,3,1: all four positions, no adjacent repeat, differs from
lesson 5 (2,0,1,3,1,0). Option lengths within 3 to 8 characters per item. Items 3 and 6 had the key
as the only option carrying no absolute (F13).

**Neutrality, counted before read.** Perspectives checked against: a cookware-industry scientist; an
environmental-health researcher; a water utility; a home cook who has been told Teflon is poison;
one who has been told the worry is a scare. Before the fixes: industry 3 quotations (CSA twice,
Burns), restriction 3 (Lohmann, Miller, the Sanitation Districts), plus Andrews on flakes on the
critics' side and the FDA and EFSA on the regulator side; last word in the policy stretch was the
course's "the two sides mostly aren't contradicting each other"; misconception list carried one
error from each side. The counts were even; the failures were of selection. The organising claim
(three questions, three answers) holds and matches the outline. After the fixes: industry 5
(CSA three times, Burns, Chemours on flakes), restriction 6 (Lohmann, Miller twice, the Sanitation
Districts, Andrews, GenX as reported), each side explained as well as quoted; the factual
disagreement named; the law paragraph dated, with a restriction that did not happen (the veto) and
one that left cookware out (France).

**Findings:**

1. **[critical] Connecticut's date and rule are wrong.** "Connecticut followed in July 2026 unless
   a seller notifies the state first." Connecticut DEEP's page: from 1 July 2026 cookware with
   intentionally added PFAS may be sold only with prior notification and a label; the ban proper is
   "On and after January 1, 2028". The New Lede's 2028 was right; the gate closures chose Morgan
   Lewis, whose paragraph runs the notification rule and the product list together. Fix: state both
   dates from DEEP, cite DEEP (new note 28), correct SOURCES.
2. **[high] Neutrality: "the two sides mostly aren't contradicting each other."** They contradict
   each other on one factual point: whether making PTFE today still pollutes. The CSA's own page
   says the problem PFAS "were banned from chemical production over a dozen years ago"; the other
   side points at GenX and at the processing aids. And the lesson promised "Those replacements are
   part of the third argument, below" and never delivered them. Fix: name the factual dispute in
   each side's words, with GenX (as The New Lede reports the EPA) and Miller as C&EN paraphrases her.
3. **[high] Flakes: one side only, and its quotation trimmed (defects 9 and 10).** The New Lede
   reports Chemours' statement that flakes are "non-toxic and would pass through the body without
   being absorbed"; the lesson gave only Andrews, and cut his first sentence, which half agrees
   ("The bulk plastic material will likely largely pass through the body, but ..."). He was also
   unnamed. Fix: both, in full, named.
4. **[high] EFSA made to answer a question it didn't ask.** "named the main food sources ... as
   ...; cookware wasn't on its list." The release says PFAS in food "are most often found in"
   those foods, for four named PFAS. A list of foods cannot contain a pan, so its silence is not
   evidence for the pan's side. Fix: quote the lead-in accurately and say the list says nothing
   about pans either way.
5. **[high] Continuity: "breaks for good once they merge."** Lesson 5 teaches rescuing a broken
   mayonnaise, and this lesson's own practice then asks the reader to rescue a broken sauce. Fix:
   "breaks when they merge, and can sometimes be brought back", tied to lesson 5's water rescue.
6. **[high] Decision 1 (US and UK every time a rule applies) broken three times.** The time-out
   rule is given as FSIS's 2 hours only, in the body, the checkpoint and the misconception note;
   the FSA's "a maximum of four hours" is in lesson 4 and SOURCES. The fridge rule is given as
   FSIS's only, while the FSA's "in their packaging or in clean sealed containers on the bottom
   shelf" is in SOURCES and makes the departure plainer. Fix: both, with a new note 27.
7. **[medium] Quotation altered inside its marks (defect 18).** Fond: "the browned bits, clinging
   ..." ATK wrote "the fond, or browned bits, clinging ...". Fix: quote the whole sentence.
8. **[medium] "tasted fine" quoted from a page but not in SOURCES.** Verified on ATK's page ("a
   sauce made in a well-seasoned cast-iron pan tasted fine"); recorded in the Stage 4 note.
9. **[medium] PFOA "not the coating itself", with C&EN's next sentence left out:** "The resulting
   coatings contained residual traces of the molecule." A critic would insist on it. Fix: added.
10. **[medium] The no-wok page the lesson cites is written for a nonstick skillet with the oil
    "until just smoking"**, which sits against the lesson's own rule for nonstick, and the reader
    who follows the link meets it. SOURCES recorded this; the lesson dropped it. Fix: one sentence,
    saying no source here compares that heat with 260°C.
11. **[medium] Lodge's acid rule trimmed of its condition (defect 9).** Lodge's seasoning page says
    acidic recipes "aren't the best choice for new cast iron". The lesson and quiz 4 stated the
    45-minute rule for any pan. Fix: condition added to the body. Quiz 4's stem is about "your"
    skillet and its answer is about washing, so left.
12. **[medium] Flag 2, the fridge-drying method.** Judged safe as the lesson arranges it (drips
    caught, bottom shelf, nothing touching) and honestly labelled, but the framing ("the two meet in
    the middle") understated that it departs from both regulators, and step 1 offered it for raw
    chicken as an equal option. Fix: say plainly it departs from both, that salting just before is
    the lesson's default, and make the overnight rack the alternative in step 1.
13. **[medium] Quiz items 3 and 6: key the only option without an absolute (defect 5).** Fix:
    "locks them in only if" became "keeps more juice in if"; "none of its flavour" became "too little
    of its flavour". Explanations read against the keys afterwards: both still fit.
14. **[medium] Misconception note cites Arnold [5] for onions.** Arnold tested mushrooms. Fix: the
    onions clause labelled as this course's reasoning.
15. **[medium] Cold start.** Step 5 offered "or in the oven, if they're thick" with no temperature,
    in a lesson before the oven lesson; the kit list left out the whisk, spatula, thermometer and
    jug the steps use; "shimmers" was never described; the exercise kit had no whisk. Fix: oven
    option replaced by turning the heat down; kit completed; shimmer described.
16. **[medium] EPA lead-in dropped "To commit to working toward" (defect 19)**, in the body and in
    quiz 5's explanation. Fix: quoted in full; explanation reworded.
17. **[medium] "a materials scientist"**: C&EN's source is Kevin Golovin, "a professor of
    mechanical engineering". Fix in body and quiz 5; his "fluorine-free" advice added.
18. **[low] "can take up a quarter of its weight"**: ATK says "as much as 25 percent". Fixed.
19. **[medium] "Cooks say it splits into a greasy layer"**: an unsourced attribution to unnamed
    people, where SOURCES records it as the researcher's reasoning; and Connections asserted "why a
    hard boil is a risk". Fix: labelled as the research notes' expectation, to be tested.
20. **[medium] No worked example with a gap.** Fix: a `:::predict` after the fond paragraph asking
    what to do with the fat and the fond before steps 6 and 7.
21. **[medium] Bon Appétit's view quoted but not explained.** Wilson gives its reasoning (a warmer
    centre reaches its target sooner, so the outside overcooks less). Fix: one sentence each way.
22. **[low] Chao's "Roughly speaking" dropped from the lead-in (defect 19).** Fixed.
23. **[low] Decision 8: Kansas State's figure printed °C first.** Fixed to 285°F (140°C).
24. **[low] "about a quarter as well as aluminium"** for 0.22. Fixed to "a little under a quarter
    as well as pure aluminium".
25. **[low] "trick" in Go deeper** (style guide). Fixed.
26. **[low] FDA: "the coating is made at very high temperatures"**; the FDA says applied. Fixed.
27. **[low] Grey band stated in the course's voice.** Colins says it; now attributed.
28. **[low] Law paragraph listed only restrictions and the veto.** C&EN (read in full) reports
    France's ban leaving cookware out. Added, dated.
29. **[low] California veto rested on a Stage 1 fetch-tool read.** Upgraded: *National Law Review*
    read direct, with the reason ("affordable cookware options").
30. **[low] "PTFE belongs to ... PFAS" asserted flatly**, while the CSA's page objects to exactly
    that classification. Fix: attributed to C&EN, and the objection flagged.
31. **[low] "Audrey Wilson puts it strongly"**: SOURCES warns that much of the column is in López-Alt's
    first person without quotation marks. Fix: "a 2019 newspaper column by Audrey Wilson ... puts it".

**Drafter's flags, answered.**
1. Wilson's "50 times": lesson 2's arithmetic is right (5.4 times) and leaving the figure out is
   right.
2. Fridge drying against FSIS: safe as arranged, now framed as a departure from both regulators
   with salting-just-before as the default (F12, F6).
3. Boiling the sauce and the cold-water rescue: honestly unsourced; wording tightened (F19, F5).
4. The two ATK pieces on stirring: correctly labelled inference. The more important thing the
   second page says (nonstick, "just smoking") is now in the lesson (F10).
5. PFOA 2012 (C&EN) against 2015 (EPA goal, New Lede on Chemours): not a contradiction the lesson
   needs to settle; it uses the EPA and The New Lede and says what each says. Connecticut: both dates
   real, the lesson had the wrong one (F1).
6. California: upgraded (F29). EU: stays at the Stage 1 read level, stated in note 26; the lesson
   claims only "not adopted when this course was researched". The water-droplet check is labelled
   common practice in the body; fine.
7. Chicken thighs in lesson 4 (roasted) and here (seared): kept. The outline names thighs for this
   worked example and lists lesson 4's raw-chicken routine as this lesson's spaced review, so the
   same cut is the callback. `npm run validate` raises no repetition warning on it.
8. Lesson 4's quote miss: ignored as instructed.

**Voice and media.** No em or en dashes. Banned words only inside quotations (Colins's
"transform", the Alzheimer's Society's "Importantly") and "trick" (F25). Contractions 8.6 per 1,000
body words after the fixes, a shade over the band; left. Bold 4.0 per 1,000. Predicts 3 after F20,
checkpoints 4, one exercise. The SVG read by eye: no `<g>`, every size an attribute, `var()` fills
with literals, a `<desc>`, every bar labelled with its value and name, viewBox 440. Every link
returned 200.

## Resolutions applied

All of F1 to F31 applied to the lesson as described above. SOURCES.md gained a "Stage 4 note,
lesson 6" section at the end: the Connecticut correction with DEEP and Shipman & Goodwin, the
nonstick note on the no-wok page, the veto read direct, and every new quotation the fixed lesson
prints. Sources list: notes 3, 7, 9, 11, 12, 13, 14, 15, 16, 18, 19, 24 and 25 updated; notes 27
(FSA chilling page) and 28 (Connecticut DEEP) added.

Not fixed, and why:
- Quiz 4's stem does not say the skillet is seasoned (F11). The item tests washing, not acid, and
  "your cast-iron skillet" reads as a pan in use.
- Contractions at 8.6 per 1,000, just over the band. Expanding them would stiffen sentences for a
  0.6 overrun; the validator does not warn.
- The Los Angeles County Sanitation Districts are described as treating the county's wastewater,
  which no source read here says. It is their name and function, and it is the interest the reader
  needs; left.
- The EU status stays at the Stage 1 read level (two law-firm advisories through a fetch tool). No
  newer primary was opened; note 26 says so.
- "Onions you want soft" in quiz 2 is a transfer item resting on the course's own reasoning. It is
  now labelled as such in the body (F14), which is the fair basis for asking it.

`npm run validate`: exit 0, no warnings for this lesson. `npm run quotes cooking-fundamentals`: no
misses in lesson 6. `npm run minutes`: 100, and `minutes:` set to 100 by hand.
