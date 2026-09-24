# Review: lesson 9, Rice, grains, beans and pasta

## 2026-09-24, Stage 4, Tier A (one fresh-context reviewer, all passes)

Tier A: not a sensitive domain, not a standpoint course. Passes run: depth, fact-check, neutrality
(short), pedagogy with every sum redone by hand, cold-start, voice and media.

**Primaries re-read directly, not from SOURCES.md:** the FSA fact checker (GOV.UK Content API,
updated 21 August 2026); the FDA Bad Bug Book PDF, both chapters (pdftotext); both NHS "Beans and
pulses" captures (2015 review, capture 2018; July 2021 review, capture 2022) and the live URL's 301
to `/page-removed/`; ATK's rice-ratio article, three rice recipes, pressure-cooker page, rinsing
interview, bean brine, baking-soda test and chili note; Lam 2023 and Kathan 2022; McGee's hosted
PDF; NOAA; Colorado State; NDSU FN1939; the USDA HG-72 salt row; the Gray and Woo abstracts
(PubMed efetch); Pang and Renzetti full text (Europe PMC). **Every quotation matched its source.**
The two hazards are attributed to the right country throughout: FSA and NHS for the UK, FDA and
FSIS for the US.

**Neutrality: run briefly.** The only contested questions are craft ones (cold-start pasta,
"salty as the sea", soaking temperature). Bastianich and Hazan get their objections in their own
words and McGee concedes Hazan's cost; the soaking disagreement is set side by side. One framing
problem found (N1). Pass after the fix.

### Arithmetic, redone by hand

| Sum | Lesson | Worked | Verdict |
|---|---|---|---|
| Rice starch onset | 57.9 to 64.4°C, about 136 to 148°F | 136.2, 147.9 | right |
| B. cereus ranges (added) | 28 to 35°C, 4 to 48°C | 82.4 to 95°F; 39.2 to 118.4°F | right |
| 121°C (added) | about 250°F | 249.8 | right |
| 90°F; 165°F; 40°F; 350°F | 32°C; 74°C; 4°C; about 177°C | 32.2; 73.9; 4.4; 176.7 | right |
| Bean brine | 3 tbsp = 54 g in 3.8 L, about 1.4% | 18 × 3 = 54; 4 qt = 3,785 g; 1.43% | right |
| McGee pasta water | 12 g in 1.9 kg, about 0.6% | 2 × 6 = 12; 2 qt = 1,893 g; 0.63% | right |
| ATK cold start | 9 g in 946 g, about 1% | 1.5 × 6 = 9; 0.95% | right |
| Sea against the recipes | was "four to six times" | 3.5/0.95 = 3.7; 3.5/0.63 = 5.5 | slightly high at the low end; now "roughly four to five and a half" (P4) |
| Quiz 5 | 70 g, nearly 12 tsp; 7 g a tenth | 0.035 × 2,000 = 70; 70/6 = 11.7 | right |
| Checkpoint, 5 L | 12 g is about 0.25%, under half of 0.6% | 12/5,000 = 0.24%; 0.24/0.63 = 0.38 | right |
| McGee's 4 to 6 quarts | was "about 4 to 6 litres" | 3.79 to 5.68 L | loose; now 3.8 to 5.7 |
| ATK bean times and the chart | 45, 60, 105 minutes | scale 270 px / 120 min = 2.25 px/min: 45 → 101, 60 → 135, 105 → 236; gridlines 40, 80, 120 at 240, 330, 420 | bars and grid exact |
| Lam's time saving | as much as 45% | penne 29 → 16 = 44.8% | right |
| Rice ratio (quiz 1) | 3 × 1½ = 4½ | 4.5 | right |
| Kidney beans, 10 min vs 30 | a third | 10/30 | right |

The SVG was read by eye: three bars, each named in text and in the `<desc>`, every label 15px,
`var(--token, #literal)` fills, viewBox 440 wide, no `<g>`, no blank lines.

### Findings

**Wrong or overstated facts**

- **F1 (major). "Two of them lay a folded tea towel under the lid first" and "Take the pan off the
  heat".** Only Basic White Rice puts a folded towel under the lid for the rest; Fluffy White Rice
  lines the lid with a towel *while cooking* and rests "on burner, still covered" with the heat
  off; Everyday uses none.
- **F2 (major). The rice-ratio paragraph contradicted itself.** "ATK's white-rice recipes use 1 cup
  to 1½, or 2 cups to 3, the same proportion", then "ATK's own recipe" uses 2½ to 2¾ cups for 2 cups
  "not three". Both are true of different recipes in different pots, which is the lesson's actual
  point, but as written a reader sees ATK contradicting itself. Quiz 1's explanation also said
  exact scaling "gives you wet rice", stronger than ATK's "doesn't necessarily double".
- **F3 (major). "None of them explains the difference" (soaking).** NDSU gives its reason in the
  next sentence: beans "may contain bacteria that can grow to harmful levels or produce a toxin if
  they remain at room temperature too long". The drafter's three-way presentation was right; the
  summary sentence was not. SOURCES did not record NDSU's reason; now appended.
- **F4 (moderate). Footnote 19 said Colorado State supports "soaking at room temperature".** It
  says nothing of the kind; its only temperature statement is the fridge beyond 12 hours.
- **F5 (moderate). "Most cases came from the UK."** The Bad Bug Book says the syndrome "has
  occurred in the United Kingdom with some regularity" and US reports are "anecdotal"; it gives no
  share of cases.
- **F6 (moderate). "121°C is hotter than any pot of boiling water or any microwave."** Unsourced,
  and wrong for a pressure cooker at full pressure (about 121°C, lesson 8). Now labelled as this
  course's reading from lesson 2's 100°C open-pot ceiling, stated as "no reheating in a pan or a
  microwave comes near it" (30 minutes at 121°C), and quiz 2's "far beyond a microwave" matched.
- **F7 (moderate). Cannellini as white kidney beans was unsourced** here and in lesson 8 (the
  lesson 8 review sourced it to the Bad Bug Book, which says "white kidney beans" and never names
  cannellini). Now sourced: University of Illinois Extension, "Raw white (cannellini) kidney beans
  contain about one-third as much PHA", read directly and appended to SOURCES. **Lesson 8's
  footnote 18 still carries the cannellini point on the Bad Bug Book alone; left for that lesson's
  owner (see course-wide note below).**
- **F8 (minor). "When the page was revised in 2021, the numbers went."** The course has read two
  versions, 2015 and July 2021; it can't say the change happened in 2021. Now "By the version
  reviewed in July 2021". Same fix in quiz 3 and the misconception list.
- **F9 (minor). "Ten minutes at 100°C, throughout the bean, destroyed the toxin."** "Throughout the
  bean" is not in the Bad Bug Book. Cut.
- **F10 (minor). "Which ATK found slows softening" (chilli, ATK's chili page).** The page says
  "may slow down softening". Matched.
- **F11 (minor). Pang et al. described as "breeders at the International Rice Research
  Institute".** The paper's authors are at the Chinese Academy of Agricultural Sciences and IRRI.
- **F12 (minor). Quiz 3 explanation, "slow cookers in the FDA's studies".** They are studies the
  Bad Bug Book cites, not the FDA's own.

**Unsourced claims in the course's voice (defect 22, third form)**

- **U1.** "Most of the world's everyday rice is cooked the first way." Cut.
- **U2.** "Most cooks rinse white rice." Now "Many recipes rinse white rice first".
- **U3.** "The oldest rule about beans". Now "A familiar rule".
- **U4.** "The rule people have wrong is about salt. The one they tend not to know is about acid."
  Rewritten without the claim about what people know.
- **U5.** "Almost every pasta packet says..." Now McGee's own statement that the method is found
  "in Italian cookbooks and on pasta packages".
- **U6.** "What decides the texture is mostly the kind of starch." Softened to "Much of".
- **U7.** "A rice meant to be eaten in soft clumps is the low-amylose kind" asserted an identity
  (glutinous rice is below the paper's "low" band). Now "wants the texture the IRRI paper gives
  low-amylose rice".
- **U8.** "So it changes the texture more than the cooking temperature" (after Woo) was garbled and
  unlabelled. Rewritten and labelled as this course's reading.
- **U9.** "Pasta cooked in it would be very salty indeed" and "so the percentage stays the same".
  Labelled and softened.

The drafter's own labels (pilau and risotto descriptions, expected textures, why soaking helps,
the 1% starting point, rinsing pasta for cold dishes, resting's mechanism) are all present in the
body where the reader meets them. Checked, no change.

**Neutrality**

- **N1 (moderate). "Take 'salty as the sea' as a way of saying 'more than you'd think', which is
  Kathan's real point."** Kathan says in terms that the phrase is "accurate". Telling the reader what
  he really meant puts words in his mouth. Now "the part of Kathan's case the arithmetic supports".

**Pedagogy**

- **P1 (moderate). No worked example with a gap.** The style guide asks for one. The salt
  arithmetic was fully worked in the body. Now McGee's percentage is shown and ATK's is a
  `:::checkpoint` the reader works before opening.
- **P2 (minor). Quiz 5 distractor "About 35 g ... since the sea is 3.5% by volume" was incoherent**
  (by volume would still give about 70 g), so it trapped nobody. Replaced with the real slip, 3.5%
  of one litre instead of two, and the explanation names it.
- **P3 (minor). Quiz 3 key "boil them hard" gave no time**, while a distractor gave 10 minutes. Key
  now says 30 minutes.
- **P4 (minor). "Four to six times saltier"** is 3.7 to 5.5 by the lesson's own numbers. Fixed.
- Quiz shape after edits: keys at 1, 2, 0, 3, 0, 2 (all four used, no adjacent repeat, validate
  does not flag lesson 8's sequence); option lengths within 15 characters in every item; the key is
  the sole longest in two of six. At least two options per item carry no absolute. Quiz 1 and 5
  reuse the body's numbers, but as arithmetic to apply, not facts to recall; kept.

**Cold start**

- **C1 (moderate). US cups are used with no metric equivalent and no measure in the kit.** A UK
  reader with the course's scale has no "cup". Now: a US cup is about 240 ml, and for a ratio any
  cup-sized measure works if it's the same one for rice and water; "a cup measure" added to the
  exercise's kit list.
- **C2 (minor). pH used in the chart and caption, never introduced** in this course or its
  prerequisites. One sentence added.
- **C3 (minor). Every temperature in both scales (outline decision 8).** B. cereus ranges, 121°C,
  40°F, 100°C and 165°F now carry both.
- The exercise listed a thermometer that no step uses. Removed.

**Voice and media**

- No em dashes. One en dash, inside the Pang quotation (kept as the author wrote it). No banned
  words. Contractions 7.7 per 1,000 body words before the fix pass, inside the 5 to 8 band; bold
  1.8 per 1,000. Three `:::predict`, now four `:::checkpoint`, one exercise.
- **V1 (minor). Six footnotes had no URL** (17, 20, 21's hosted copy, 22, 23, 25, 26). Added from
  SOURCES.
- **V2 (minor). "Lesson 8 used a slow cooker..." paragraph restated the Bad Bug Book sentence
  before it.** Cut to two sentences.
- Links: ATK, FSA, NHS, FDA and Colorado State resolve; the NYT link returns 403 to scripts, as
  NYT does, and the column was read through the hosted copy the footnote names.

**Padding and minutes**

The drafter set 135 against the tool's 115 (now 120 after the edits), the gap being a 60-minute
evening at the stove that the stated-minutes cap prices at 30. Read for padding, especially
against lessons 4 and 8: the rice and leftover rules are lesson 4's applied in a sentence each, as
outline decision 2 asks; time plus temperature is named, not re-taught; the slow-cooker material
is new (the toxin), and the one paragraph that restated it was cut (V2). The lesson is long
because it carries two hazards in full and three foods, not because it repeats. **No further cut.
The seam after rice was not taken**, per the orchestrator's decision, and I agree: the reading is
about 55 minutes and the excess is stove time. Set by the same method as lesson 5's kept figure
(the model's 120, less the 30 it credits for the stated time, plus the 60 minutes the lesson
actually states, less some overlap with the step count): **140**.

## Resolutions applied

All findings above were applied to the lesson on 2026-09-24: F1 to F12, U1 to U9, N1, P1 to P4,
C1 to C3, V1, V2. `SOURCES.md` has a "Stage 4 note, lesson 9" appended with the NDSU reason, the
Colorado State correction, the Illinois Extension source for cannellini, the Pang affiliations, the
ATK towel and ratio details, McGee's hot-start and packet sentences, and the Bad Bug Book's UK and
US frequency sentences. `npm run validate` exits 0 with no warning for this lesson;
`npm run quotes` finds all 398 quotations in the course in the research file.

**Not fixed, and why:**

- **Lesson 8's cannellini footnote** (F7) still cites only the Bad Bug Book. It is another lesson's
  file and another agent may be working near it; the source is now in SOURCES for whoever touches
  it next. One-line fix: add the Illinois Extension source to lesson 8 footnote 18.
- **Quiz items 1 and 5 reuse the body's figures.** They ask the reader to apply a method to them,
  which is what the objective tests.
- **The resting mechanism and the rinsed-pasta advice** stay as the drafter labelled them; no test
  of either exists in the reading, and the lesson says so.
- **The minutes model's `EXCEPTIONS` list** is not edited (the script is outside this lesson); the
  tool reports the 140 as inside its precision, so no exception is needed.
