# Review: lesson 10, Stock and sauces

## 2026-09-24, Stage 4, Tier A (one fresh-context reviewer, all passes)

Tier A: not a sensitive domain, not a standpoint course. Passes run: depth, fact-check (primaries
re-fetched: the Bad Bug Book chapter PDF, the Food Code 2026 PDF, the Koreen abstract through
PubMed, the Mouritsen paper through the Internet Archive, and three ATK pages), neutrality (short),
pedagogy with every sum redone by hand, cold-start, voice and media (the chart rendered in both
themes).

**Neutrality: run briefly, not skipped.** The only contested ground is the US/UK split on hot food
and the fridge. Both are given in their own words, side by side, neither called wrong, and the
lesson declines to guess at either agency's reasons (decision 1). The neighbour's thirty years is
answered without sneering. Examples come from Japanese, Chinese-American, Thai and Greek cooking
besides French and American (decision 5), and no dish is called authentic. Pass.

### Arithmetic, redone by hand

| Sum | Lesson | Worked | Verdict |
|---|---|---|---|
| ATK water to bones | 4 lb (1.8 kg), 3½ qt (3.3 L), ~1.8:1 | 1.814 kg; 3.312 L; 1.83 | right |
| Ruhlman water to bones | 2 to 3 kg, 3 to 4 L, ~1.4:1 at the middles | 3.5 / 2.5 = 1.40 (in pounds and quarts: 3.31 / 2.49 = 1.33) | right |
| Doubling | 6 an hour, 64-fold; 18 in 3 h, >250,000-fold | 2^6 = 64; 2^18 = 262,144 | right, and labelled as the course's |
| 109 to 113°F | about 43 to 45°C | 42.8, 45.0 | right ("warm bathwater" was wrong for it, V2) |
| Food Code stages | 57°C (135°F), 21°C (70°F), 5°C (41°F) | 57.2, 21.1, 5.0 | right, and the code's own order and rounding |
| 6 L pot | 24 cm pot, ~450 cm², ~13 cm deep | π × 12² = 452; 6,000 / 452 = 13.3 | right |
| 6 L at 5 cm | 1,200 cm² | 6,000 / 5 | right |
| 9 × 13 tin | 23 × 33 cm, ~760 cm², ~3.8 L at 5 cm | 759; 3,795 cm³ | right; two tins hold 7.6 L |
| 2 in | about 5 cm | 5.08 | right |
| Chart, time in warm band | dashed "about three hours"; solid "about an hour" | straight lines: dashed enters 125°F at 0.46 h, leaves at 3 h = 2.5 h; solid 0.15 to 1 h = 0.85 h | dashed wrong (F7) |
| Checkpoint cooling log | below 21°C between 40 and 90 min | yes; and the clock starts at 57°C, later than the 88°C reading, so more margin | right |
| Gravy thin / thick | 4 or 6 tbsp per quart; 1 or 1½ per cup | 4/4, 6/4 | right |
| Béchamel to pour | 3 tbsp / 2 cups; 1½ | right |
| Moussaka | ¾ cup (12 tbsp) / quart; 3 | right |
| Egg foo young | 2 tbsp in "a little under 2 cups"; ~1 per cup | 2 cups less 5 tbsp in the two slurries = 27 tbsp, plus the 2 tbsp back in = 29 tbsp = 1.8 cups; 2 / 1.8 = 1.1 | right |
| Béchamel fat against flour | 2 oz (57 g) butter, 3 tbsp flour | 3 × ~8 g = ~24 g flour | right, but the other two recipes are the same way round (F3) |
| Gravy checkpoint | 1½ cups at 1½ tbsp/cup = 2 to 2½ tbsp flour; ~1½ tbsp cornstarch | 2.25; 1.5 | right |
| Vinaigrette quiz | 50 ml juice, 150 ml oil; 200 ml = 4:1; 17 ml upside down | right |
| Exercise vinaigrette | 2 tbsp acid, 6 tbsp oil | 3:1 | right |
| Konbu | 20 g in 2 L | 10 g/L, the paper's figure | right |
| 160°F | about 71°C | 71.1 | right; the unit is an inference (F6) |
| Simmer | 180 to 190°F, 82 to 88°C; Ruhlman 180 to 200°F, 80 to 90°C | 82.2 to 87.8; 82.2 to 93.3 (Ruhlman's own rounding) | right |
| Pépin video | about two and a half minutes | 159 s | right |
| Leftover days | Sunday to Wed or Thu (US 3 to 4 days); Tuesday (UK 48 h) | right |

### The cooling chart, read by eye

Rendered with rsvg-convert in the light fallbacks and the dark tokens from `site/assets/styles.css`.
Scale: y = 360 − 2T (135°F at 90, 70°F at 220, 41°F at 278), x = 70 + 56.67 × hours. Every point
checks: the band 70 to 125°F (y 110 to 220), the strip 109 to 113°F (y 134 to 142), both gold
limit markers, both polylines (1 h at x 127, 3 h at x 240). The labels match the Food Code's
limits and its two Annex examples. Two small layout faults (V4), fixed. No `<g>`, sizes on every
`<text>`, 15px throughout, viewBox 440 wide, `<desc>` present, both lines named in text as well as
by colour and dash.

### Findings

**Serious:** none.

**Moderate**

- **F1. The overnight-pot predict gave the UK limit as "4 at most".** The FSA's C. perfringens page
  does say food shouldn't be left out for more than 4 hours, but its instruction for cooling
  leftovers is "within 2 hours", and the chill page says one to two hours. Against a stew left
  overnight to cool, 4 hours is the wrong UK figure and understates the UK rule by half. Fix: both
  countries given as 2 hours.
- **F2. An unsourced mechanism in the course's own voice** (defect 22, third form): "That is one
  reason a stock gets its depth from long cooking and from the vegetables that go in with the
  bones". No source read says long cooking frees glutamate or that the vegetables supply it. Fix:
  the sentence now says no source here measures it, and moves on to dashi.
- **F3. "Ruhlman's own recipes don't all keep his 3:2 roux either"** described carelessly. None of
  the three does: the gravy (¼ cup fat, 4 to 6 tbsp flour), the béchamel (57 g butter, ~24 g flour)
  and the moussaka (113 g butter, ~95 g flour) all use more fat than flour. Fix: says none, with
  the weights, labelled as the course's arithmetic.
- **F4. The Bad Bug Book's doubling time quoted without its qualifier.** The source says "<10
  minutes for vegetative cells), depending on temperature and food matrix", and the lesson's
  quotation stopped at the bracket. Defect 9 in a small way, and it is the figure the doubling
  arithmetic runs on. Fix: the qualifier restored inside the quotation, and recorded in SOURCES
  (Stage 4 note, lesson 10), because Part B 5.3 had abbreviated it.
- **F5. The chart caption overclaimed.** It said the FDA gives "the 41°F point for each example".
  For the passing example the Annex says only that "5 hours remain" to reach 41°F; the chart draws
  it arriving at the 6-hour limit, which is a construction. Fix: caption and `<desc>` say so.

**Minor**

- **F6. 160 degrees.** Drafter's flag 1. The ATK page, re-read, gives no unit anywhere. Fahrenheit
  is the right reading (ATK's house unit, and a sauce that is mostly water cannot reach 160°C), but
  the lesson stated it as fact. Fix: the body now says the page gives no unit and gives the reason
  for reading it as °F; the Sources entry says the same.
- **F7. "It spends about three hours in it"** for the dashed line. On the lines as drawn it is two
  and a half. Fixed.
- **F8. Quiz 2's explanation said the FDA gives the 3-hour case "as a failure".** The Annex says the
  hazards "may not be adequately controlled". The key (it fails) is right under § 3-501.14 itself,
  which the stage-one limit makes a priority item. Fix: the explanation quotes the Annex's words.
- **F9. "adds that the spores 'can thrive'"**: in the joint paper the subject is "these
  organisms", not the spores. Defect 19. Fixed.
- **F10. "A stew is exactly that kind of medium"** for the Bad Bug Book's "cooked-meat medium".
  Reasonable, but the course's reading stated flatly. Softened and labelled.
- **F11. "some cooks now heat it only to 60°C"**: the paper says the classic recipe "has been
  optimised" to 60°C, not that some cooks do it. Reworded to the paper's claim.
- **F12. Vinaigrette weight against volume.** "ATK's recipes, by volume, land on the same 3 to 1"
  as Ruhlman's by weight. The number is the same and the proportion is not quite (oil is lighter).
  Reworded.
- **F13. The Koreen authors** were described as "a Minneapolis health department officer, a data
  scientist and a Rutgers food scientist", with no affiliations in SOURCES. PubMed confirms the
  Minneapolis Health Department, Stockton University's data science unit and Rutgers food science;
  "officer" was not supported. Reworded to the institutions and recorded in SOURCES.
- **F14. Quiz 1 stem grammar**: "Which step does both ... agree on". Fixed to "do".

**Pedagogy.** Objectives are testable and each is exercised. Two `:::predict` blocks before results
(the tall pot, the neighbour) and three checkpoints; worked examples (the carcass stock, the 6-litre
stew) come before the exercise. Quiz option lengths within 7 characters in every item (79 to 89),
keys 3, 2, 0, 1, 2, 0: all four used, no adjacent repeat, no neighbour warning from the validator.
Four of six items are application. No item reuses the body's numbers or people (the split pea soup,
the café log, the friend, the 50 ml of lime are all new). No self-check prints its answer in body
text. The "if yours didn't set" diagnosis in the last checkpoint traces back correctly (fewer
collagen-rich parts, more water, less time all lower gelatin concentration).

**Cold start.** The reader has lessons 1 to 9 of this course and the earlier Core. Thermometer
(lesson 2), the cooling rules (lesson 4), emulsions (lesson 5), the pan sauce (lesson 6), the
carcass (lesson 7), the simmer (lesson 8) and starch swelling (lesson 9) are all in place.
- **C1.** "Cornstarch" throughout, while lesson 9 said "cornflour", and in the UK corn flour is
  the name for cornstarch. Fixed at first use.
- **C2.** "Ice wand" appeared in a quotation and was never explained. One sentence added.
- US cups and tablespoons are converted in the table note; the 9 × 13 tin is given in cm. Konbu
  and dried shiitake are named without saying where to buy them, which is normal for a cookery
  lesson and not fixed.

**Voice and media.** No em or en dashes. No banned vocabulary. Bold at 1.5 per 1,000, misconception
labels and the two country labels only. Contractions by the build's own measure about 6.9 per 1,000
after the fix pass, inside the band (the drafter's 8.4 was a different count). Links real: Food Code
landing page returns 200; the Bad Bug Book PDF, the Mouritsen paper (via the Internet Archive; the
live link redirects to Springer), and the ATK and Ruhlman pages checked. The Pépin video's title,
channel and length match SOURCES and the lesson says it has not been watched.

**Drafter's flags, judged.** (1) 160 degrees: see F6. (2) Straight chart lines: captioned, and the
caption now also covers the constructed 41°F point (F5). (3) The course's own constructions (the
doubling arithmetic, the 6-litre sums, the home fridge as the same kind of machine, the set stock
as savoury Jell-O) are each labelled in the body where the reader meets them; no change. (4) Egg foo
young: Ruhlman's page tags it American and Chinese, and the lesson calls it Chinese-American,
which is accurate; it stands in for the outline's "Chinese starch-thickened sauce" honestly, and
ATK's stir-fry line carries the rest. No change. (5) The lesson 9 pointer: lesson 9's current
text describes granules that "absorb water and expand" and hands off to lesson 10 by name; lesson
10's "take up water and swell" matches. No change.

**Minutes.** The drafter set 110; the tool measured 80, because "Take 5 hours" and "About an hour"
do not match its cue pattern. Honest figure: the page and its blocks are about 80 minutes by the
model (8,766 words at 140 wpm plus blocks), and the exercise has roughly an hour of hands-on work
(skimming and straining, the cooling log's checks, two thickened portions, the dressing) on top of
the ten minutes the model already prices for its four steps. That is about 130. Set to 130, and
the exercise's hands-on line rewritten as "About 60 minutes of it is hands-on" so the tool sees
part of it: it now models 115, inside precision, so no EXCEPTIONS entry is needed.

## Resolutions applied

- F1 to F14, C1 and C2 fixed in the lesson as described above.
- V4 (chart layout): "70°F by 2 h" was right-anchored 5px left of its marker; centred under it.
  The "y" of "41°F by 6 h" touched the x-axis line; raised 3px. Re-rendered in both themes and
  read by eye: no overlaps.
- V2: "warm bathwater" for 43 to 45°C changed to "a little hotter than a hot bath".
- Sources entries 6, 8 and 19 updated to point at the new SOURCES note; SOURCES.md has a
  "Stage 4 note, lesson 10" appended with the primaries re-read at this review.
- `minutes:` set to 130 by hand.
- After the quiz edits (items 1 and 2, stem and explanation only), each explanation was read
  against the option its key selects: all still match. No options or keys moved.
- **Not fixed:** the unread-page hedge on *Ratio*'s 3:2 stock ratio stays as the drafter wrote it,
  since SOURCES records the search that failed. The Food Code's "41°F or 45°F" in the Annex
  examples is given as 41°F only, which is the current limit and the one lesson 4 teaches; not
  worth a clause. Where to buy konbu and shiitake: left, as above.
- `npm run validate` exits 0 with no warning for this lesson; `npm run quotes` finds every sourced
  quotation in SOURCES.md.
