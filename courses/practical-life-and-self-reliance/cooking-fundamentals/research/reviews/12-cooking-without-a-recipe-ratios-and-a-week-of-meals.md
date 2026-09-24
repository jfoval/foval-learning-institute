# Review: lesson 12, Cooking without a recipe: ratios and a week of meals

## 2026-09-24, Stage 4, Tier A (one fresh-context reviewer, all passes)

Tier A: not a sensitive domain, not a standpoint course. Passes run: depth (with length as the
first concern), fact-check (primaries re-downloaded: FSA "How to chill, freeze and defrost food
safely", "Cooking your food" and the "Home food fact checker" through the GOV.UK Content API; FSIS
"Freezing and Food Safety", "Leftovers and Food Safety" and the foodsafety.gov "Cold Food Storage
Chart" through Internet Archive 2026 captures), pedagogy with every sum redone by hand, cold-start
(`npm run taught`: 146 lessons across 16 earlier courses, none unwritten), voice and media. The
lesson has no chart or image.

**Neutrality: skipped.** Nothing contested or value-laden is taught. The two-country material is
agreed guidance set side by side, as the course's decision 1 requires, with neither called wrong;
the one place the lesson reads a regulator's sentence against its own point (the FSA on recipe
times) is F6 below, handled as a fairness question in the fact-check.

**Unread line: clean.** No lesson-12 citation touches a work on it. Ruhlman's *Ratio* is cited
only at the read level `SOURCES.md` records (catalogue contents and publisher's description).

**Quotations:** `npm run quotes` finds every sourced quotation in `SOURCES.md` (430 across the
course, 0 missing) before and after the fix pass. New quotations added at this review were read
at source today and recorded in "Stage 4 note, lesson 12" at the end of `SOURCES.md` first.

### The storage rules, checked against the primaries

| Rule as the lesson uses it | Primary, read today | Verdict |
|---|---|---|
| US leftovers 3 to 4 days | FSIS Leftovers: "Leftovers can be kept in the refrigerator for 3 to 4 days"; foodsafety.gov chart: soups and stews, and cooked meat leftovers, 3 to 4 days | right |
| UK leftovers 48 hours | FSA Cooking your food and the chill page: "Eat leftovers within 48 hours or freeze them"; chill page top line "within two days" | right |
| US cooling: hot food straight in, 2 hours | FSIS Leftovers: "Hot food can be placed directly in the refrigerator"; 2 hours, 1 hour above 90°F | right |
| UK cooling: cool first, 1 to 2 hours; cooked meat to fridge or freezer within 1 to 2 hours | FSA chill page, both sentences | right |
| UK freeze leftovers as soon as possible, cooled, in portions | FSA chill page | right |
| UK use within 24 hours of full defrost; partial defrost; microwave "directly before cooking" | FSA chill page. The microwave is offered "If this isn’t possible" (a drip container in the fridge), not as a rescue for a slow thaw | right, but the draft's use of it needed a label (F5) |
| UK reheat once | FSA Cooking your food; chill page for refrozen cooked food | right |
| UK rice: ideally within an hour; no more than one day; freeze within an hour; defrost in fridge, reheat steaming hot, eat immediately | FSA fact checker, all four | right |
| US reheat 165°F; sauces, soups and gravies to a rolling boil | FSIS Leftovers | right |
| US refreezing | FSIS Freezing, passage in full; FSIS Leftovers adds cold-water-thawed leftovers cooked before refreezing, microwave-thawed after heating to 165°F | right |
| US after thawing leftovers | FSIS Leftovers: "After thawing, the food should be used within 3 to 4 days or can be refrozen." | contradicts the draft's "doesn't wind it back" (F3) |
| Freezer times as quality | FSIS chart note and text; FSA freezer burn | right |
| Foods that freeze badly | FSIS lists them and, under "Freeze Rapidly", gives the emulsion reason | the draft said FSIS "only lists them" (F4) |
| Thawing time | FSIS Big Thaw: a pound of ground meat or boneless chicken breasts needs "a full day"; no other source gives one | the draft's schedule had no thaw time at all (F5) |

### The week, redone day by day

Braise cooked Sunday afternoon, eaten Sunday dinner; rice cooked Monday dinner.

| Meal | US (3 to 4 days) | UK (48 h; rice 24 h; reheat once) |
|---|---|---|
| Mon braise | day 1, fine | ~24 h, fine |
| Tue fried rice | day 1, fine | ~24 h: at the limit, not past it |
| Wed braise | day 3, fine | ~72 h: past |
| Thu braise | day 4, the far end, fine | ~96 h: past |
| Thu rice | day 3, fine | ~72 h: past |

So the UK plan breaks on **two dinners (three portions)**, not the draft's "four meals"; Tuesday's
rice is at the edge. The fixed UK schedule: portion the braise into three tubs at dinner, Monday's
to the fridge and two to the freezer within two hours of cooking; rice shares cold within the
hour, Thursday's frozen within the hour or a fresh pot; each tub moved to the fridge the evening
before (about 24 hours, matching FSIS's "a full day" per pound), so it cannot have been fully
defrosted more than 24 hours before it is eaten; check the middle, and finish in the microwave on
defrost directly before reheating if needed; reheat once. Under the US rules the plan holds with
no freezer; the Saturday checkpoint (Thursday becomes day 5; freeze by Tuesday or Wednesday) is
right.

### Arithmetic, redone by hand

| Sum | Lesson | Worked | Verdict |
|---|---|---|---|
| Stir-fry sauce | 3 + 4 + 1 tbsp = 8 tbsp = ½ cup; 1½ tsp = ½ tbsp; so 1 tbsp per cup | 16 tbsp to a cup; 3 tsp to a tbsp | right |
| Pasta, body | 57 × 1.5 ≈ 86 g | 85.5 | right |
| Pasta, quiz 2 | 104 × 1.5 = 156; distractors 69, 104, 208 | 104 × 2/3 = 69.3 (the ratio upside down), 1:1, 2:1 | right, each traces to its stated slip |
| Pancake recipe fits ratio | 8 oz milk : 2 eggs : 2 oz butter : 8 oz flour as 2 : 1 : ½ : 2 | one part = 4 oz; two large eggs are about 4 oz, which the post does not state | right as labelled |
| Pancake checkpoint | 150 g flour: part 75; milk 150; egg 75; butter 37 | butter is 37.5 | fixed to "about 38" |
| Pancake scaling | 150 of 227 g "a little under two-thirds" | 0.661 against 0.667 | true, reworded to "about two-thirds" |
| 8 oz | about 227 g | 226.8 | right |
| Braise portions | 1.5 kg makes about eight, four dinners for two | Sun, Mon, Wed, Thu × 2 = 8 | right |
| Temperatures | 165°F (74°C); 160°F (71°C); 90°F (32°C); 0°F about -18°C; 2 in about 5 cm | 73.9; 71.1; 32.2; -17.8; 5.08 | right |

### Findings

**Serious**

- **F1. Length: 170 measured minutes against the outline's ~80 and the one-sitting ceiling.**
  9,227 model words plus two exercises the model priced at about 90 minutes. The weight was not
  new teaching. It was: the project's full brief and rubric (about 350 words) restated from the
  outline, which belongs in the assessments file; an exercise, "Begin the project", that restated
  the brief's first three steps; lesson 4's thawing rules recited inside the stir-fry method;
  lesson 4's allergen quotations and its higher-risk callout restated nearly in full; a
  Connections section that recapped all eleven earlier lessons one by one; a second pass at the
  pancake recipe's quantities; and four Go deeper entries, two of which repeated links already in
  the body.
- **F2. "In the UK, four meals break."** Miscounted. Two dinners break (Wednesday, Thursday),
  carrying three portions; Tuesday's rice is at its limit, not past it. The count sits in the
  predict answer that the whole worked example turns on.
- **F3. "The freezer stops the leftover clock; it doesn't wind it back."** Stated in the course's
  voice with no source, and contradicted by FSIS's leftovers page, which gives fridge-thawed
  leftovers a fresh 3 to 4 days ("After thawing, the food should be used within 3 to 4 days or can
  be refrozen"). The UK sets a new, shorter clock (24 hours). Defect 22, third form.
- **F4. "FSIS only lists them" (mayonnaise and cream sauce).** The label understates the source.
  The same FSIS page gives the reason: slow freezing makes large crystals that "dissolve
  emulsions", and "Emulsions such as mayonnaise or cream will separate and appear curdled."
  (Drafter's flag 5.) The lesson's reading was right; it was FSIS's, not the course's.
- **F5. The UK freezer schedule had no thawing basis, and used the microwave as the FSA's
  fallback.** No source gave a thaw time for the braise; the schedule moved each tub the night
  before without saying why that timing, which is the one that keeps inside the 24-hour rule. And
  the FSA offers the microwave when fridge thawing with a drip container "isn’t possible", not as
  the remedy for a thaw that ran slow; using it that way is reasonable but is the course's
  application. (Drafter's flag 2.)
- **F6. The FSA's recipe-times sentence was read in the course's favour without its companion.**
  (Drafter's flag 3.) The draft quoted "follow the instructions for cooking times and temperatures
  carefully" and said the rest of the page checks by thermometer and cues, "not the clock". True,
  but the page's first top tip says the same thing again, "always follow cooking temperature
  guidelines according to the recipe or packet instructions carefully", and a reader who met only
  the draft's version would not know the FSA says it twice. The reading itself is fair (the
  sentence sits under the safe temperature-time table, and the page's second tip is to check food
  is cooked), but it has to be given with the FSA's case at full strength and labelled.

**Moderate**

- **F7. "Ratios you already have" against lessons 9 to 11's current text.** Rice, pasta water,
  bean soak, stock and flour-thickened sauce all match. Corrections: the vinaigrette row said only
  "lesson 10", hiding that lesson 10 has it from Ruhlman's publisher (by weight) and ATK's recipes
  (by volume); the bean-soak 1.4% is this course's conversion of ATK's spoon measure; bread salt
  is King Arthur's two ranges (1.8 to 2%, and Philip's 1.8 to 2.2%); the pasta-water row now gives
  the recipes' 0.6 to 1%. Lesson 10's cornstarch proportion, used in the stir-fry, was missing from
  the table and is added.
- **F8. Ratio labels.** (Drafter's flag 1.) Checked against `SOURCES.md`: pie dough 3-2-1 is not on
  the publisher's description as served today and is not printed; stock 3:2 is snippet-only and
  not printed; pancake eggs as "one part" is inference from quantities, labelled. All correct. The
  italic note's "attributed to the book elsewhere" was vague and is reworded.
- **F9. The mushroom predict stated Arnold's single test more firmly than lesson 6 does.** Now "in
  Arnold's one test".
- **F10. "Put 300 g of cold prawns into a frying pan at once and you get lesson 6's puddle."**
  (Drafter's flag 5.) ATK says a skillet cannot handle "large amounts"; that 300 g is one is the
  course's reading. Now labelled. Pak choi stems and leaves was already labelled; fine.
- **F11. UK refreezing of thawed raw food.** (Drafter's flag 4.) Confirmed at source: the FSA page
  says nothing about it. The draft correctly gave no rule, but then advised "If you are in the UK
  and unsure, cook it, then freeze it", which reads as a rule; now "cooking it and then freezing it
  is the route the page does cover".
- **F12. Quiz 3's explanation** refuted the whole-pot option only on reheating; Wednesday's share
  is also past 48 hours. Added.
- **F13. Quiz 1's explanation** said fat "carries flavour compounds that water doesn't (lesson 3)"
  flatly; lesson 3 has fat as a "carrier" in Nosrat's words and the cumin effect as the course's
  extension. Reworded to the lesson-3 claim.
- **F14. Objective 2** asked the learner to "say which ratios this course has read at source and
  which only in a description": provenance bookkeeping, not a cooking skill. Rewritten.
- **F15. Connections put Nutrition "after this course".** Nutrition: The Evidence comes earlier in
  the Core. Reworded.
- **F16. Contractions.** (Drafter's flag 5.) The draft's contractions had been expanded by script
  and several sentences read stiffly ("It is a report of", "it is where the food-safety rules",
  "which is why a note of what went in is worth keeping"). The rewrite was done in the voice; the
  build's measure is now 8.6 per 1,000 body words, at the top of the band.

**Minor**

- **F17.** "0°F is -18°C, which is the figure both countries give": FSIS gives 0°F and the FSA
  about -18°C. Reworded to "about -18°C, the figure the FSA gives".
- **F18.** Pancake butter 37 g for 37.5 g; now 38.
- **F19.** "Emergency Preparedness owns ... home canning": that course is not written, and its
  scope is this course's outline's pointer, not a checked fact. Kept as a pointer ("covers keeping
  food for the long term"), which the outline supports.
- **F20.** Cold start: the reader was told to "convert cups and spoons with a weight chart" without
  saying which; now points to King Arthur's chart from lesson 11. Otherwise nothing is assumed
  beyond the course's kit list (scale, thermometer) and a freezer.

## Resolutions applied

- **F1, length.** Cut to 95 measured minutes (`npm run minutes`, model and claim agree), about 5,400
  body words before the Sources list. What went, and why:
  - The project section: from the full brief (five steps) and the rubric to a four-sentence
    introduction naming it, "A week from five techniques", and pointing to the assessments. The
    brief and rubric are the assessments file's job; a second copy in the lesson is a second place
    to fall out of date.
  - The "Begin the project" exercise (seven steps, 50 minutes), which restated the brief. Replaced
    by "Check a week before you cook it" (four steps, 15 minutes): plan one batch item and check it
    day by day, which is this lesson's new skill.
  - The first exercise, from three recipes plus a cook to one recipe in three steps. Cooking one
    dinner from a rewritten card is already the project's step 5, so it is not asked twice.
  - Re-teaching of lesson 4: the stir-fry's thawing rules (now "by your country's rule in lesson
    4's table"), the allergen section's repeat of lesson 4's quotations (kept only the batch-plan
    application, which is new), the higher-risk callout recited in full (now a pointer plus the
    one new application), and the stir-fry's separate allergen paragraph.
  - Connections: from an eleven-lesson recap to one sentence of pointers plus the two
    cross-course links the outline asks for.
  - The second telling of the pancake recipe's quantities and halving (the checkpoint still does
    the scaling); the CIA's full topic list; the cooking-rule and safety-rule example lists cut to
    two each; Philip's quotation to its first sentence; the freezer chart figures to one; Go
    deeper from four entries to two; Sources "Supports" lines shortened.
  - Nothing new-to-this-lesson was cut: the stir-fry taken apart, both ratio anchors, the rules
    sorting and its checkpoint, the follow-to-the-letter cases, the week and both countries'
    handling of it, the freezer, refreezing, and the four outline misconceptions all stay. The
    fifth misconception ("once you know the ratio") went, since the vinaigrette point is made
    twice in the body.
- **F2.** Predict answer now says two dinners break, with Tuesday's rice at the limit.
- **F3.** Replaced with each country's clock after thawing, quoted: FSIS's 3 to 4 days and the
  FSA's 24 hours.
- **F4.** The emulsion reason is now quoted from FSIS and recorded in `SOURCES.md`.
- **F5.** UK schedule rewritten day by day: portioning at dinner, two tubs frozen within two hours
  of cooking; each tub to the fridge the evening before, with FSIS's "a full day" per pound as the
  only thawing time read and the flat-bag point labelled; the reason for the evening-before timing
  (the 24-hour clock) stated; the microwave finish labelled as the course's application of the
  FSA's second route. Thursday's rice: a fresh pot, or a share frozen within the hour.
- **F6.** Both FSA sentences quoted, where they sit said, and the course's reading labelled.
- **F7 to F20.** Applied as described in each finding.
- **Quiz.** Keys unchanged (0, 2, 3, 1, 3, 2): all four positions, no adjacent repeat, option
  lengths within 7 characters in every item. Two explanations edited (F12, F13); each was read
  against the option its key selects afterwards.
- **`SOURCES.md`.** "Stage 4 note, lesson 12" appended: the FSIS leftovers thawing lines, FSIS's
  emulsion reason, the FSA's cooked-meat, overnight-defrost and microwave sentences, the FSA top
  tip, and the foodsafety.gov chart.

**Not fixed, and why**

- **Quiz 3 is close to the worked example** (a pot frozen early under the UK rules). It changes the
  food, the day and the reheating pattern, and the skill it tests is the one the lesson exists to
  teach; a wholly different case would test something the lesson does not show.
- **95 minutes is a little over the ~90 ceiling.** The remaining load is the two worked examples
  and two short exercises, which the outline asks for. The first exercise carries no stated time,
  because its three steps price it at about the ten minutes it takes; stating "10 minutes" on top
  would double-count it.
- **Soy sauce and wheat.** Most soy sauce is brewed with wheat, which would add an allergen on both
  lists, but no source read for this course says so; the lesson counts only soy and sesame.
