# Reviews: Lesson 3, Seasoning by taste

## 2026-09-24 — Lesson 03 — all passes, Tier A
**Reviewer:** one fresh-context reviewer: depth, fact-check, neutrality, pedagogy, cold start, voice and media.

Tier A: not a sensitive domain, not a standpoint course. The one contested stretch is MSG, which the
outline's neutrality notes place here; the neutrality pass was run on it in full.

**What was checked.** Every primary the lesson leans on was re-downloaded and its text extracted:
the FSANZ PDF (pdftotext), the FDA Q&A, Kean's article, both Geha abstracts (PubMed efetch), the UGA
circular, the Inverse page and the NPR transcript. `npm run quotes`: every quotation found in
SOURCES.md. Every read level in the Sources list string-matched against SOURCES.md. Sums redone by
hand: tomatoes' free glutamate against beef's, 140 / 33 = 4.2 ("about four times"), correct; beef's
total against tomatoes' total, (2,846 + 33) / (238 + 140) = 7.6, **not "more than ten times"** (F3);
cod total against carrot total, 2,110 / 251 = 8.4 ("roughly eight times"), correct; Geha 50/130 =
38.5%, 17/130 = 13.1%, 19/130 = 14.6%, 19/37 = 51% ("only half"), correct; MSG against placebo on
first test, 69 against 36 responders, correct; Olney's 7 mg/g against 0.01 mg/g a day = 700 times
("many hundreds"), correct but misattributed (F5). Chart bar widths against a 190 px / 1,960 scale:
all within a pixel (cow's milk drawn at 1 px for 0.2, a floor for visibility). Quiz shape measured:
keys 3,0,2,1,3; option lengths within 5 to 9 characters per item; lessons 1 and 2 run different
sequences.

**Neutrality: counted before read.** Perspectives checked against: a person who reports reactions to
MSG; a Chinese-American reader meeting the history of the name; a food scientist who thinks the
syndrome is folklore. Reporters' side gets the dose-response finding, Geha's "may elicit more
symptoms", the FDA/FASEB symptoms list, FSANZ's clinical-testing advice and the last word of the
section ("The symptoms can be real while the explanation is wrong"). The sceptical side gets the
retest and with-food results and both regulators' conclusions. The misconception list carried only
the reporters' error (F7). Kean's scorn was attributed for the "panic" and "foreign" lines but not
flagged for its tone or for his expectation explanation (F6). One quotation trimmed toward the
sceptical side (F1). After fixes: passes.

**Findings:**

1. **[high] FSANZ conclusion trimmed of the half that carries the reporters' case (defect 9).**
   "FSANZ concluded: 'There is no convincing evidence ... severe illness or mortality.'" The same
   Conclusion paragraph goes on: "Symptoms resembling those of CRS may be provoked in a clinical
   setting in small numbers of individuals by the administration of large doses of MSG without
   food." Quote both; record the sentence in SOURCES.
2. **[high] Provenance of the use-by quotation.** "The FSA, in its advice on use-by dates, puts it
   plainly" implies a separate use-by page; the quotation is from the botulism page, in its passage
   on use-by dates. Say "the same FSA page".
3. **[high] Wrong sum in checkpoint 1.** "beef carries more than ten times as much glutamate in
   total": 2,879 against 378 mg is 7.6 times. (Bound alone is 12 times, which is probably where the
   figure came from.) Fix to "more than seven times" and print the two totals.
4. **[medium] "In the largest such trial"** (predict block) is unsourced as a present-tense claim.
   The *J Nutr* abstract calls it "the largest to date" in 2000. Attribute it and date it.
5. **[medium] Olney's critics' figure attributed to Kean.** "many hundreds of times what Kean says a
   typical American diet supplied": the 0.01 mg/g is what "three physicians" who criticised Olney
   said, as Kean reports it. Reattribute; 700 times is the exact ratio.
6. **[medium] Kean's tone and his causal explanation not attributed (neutrality).** The lesson says
   "its tone is his" but never tells the reader what the tone is, and Kean explains reactions as
   expectation ("because they don't expect to and were never told they should"), which the trials
   did not test. A reader sent to the article by Go deeper meets that as settled. Name the scorn
   ("hysteria" is his word) and mark the expectation explanation as his argument.
7. **[medium] The misconception list names only the reporters' error (neutrality, the count).**
   "'MSG makes people ill'" is listed; its mirror, "people who react are imagining it", which the
   lesson argues against in the body and uses as a quiz distractor, is not. Add it to the same entry
   with the dose-response finding and FSANZ's clinical-testing advice.
8. **[medium] "Plenty of people avoid it anyway"** carries a sneer: "anyway" frames avoidance as
   unreasonable in the sentence after the FDA's chemistry. Replace, and give the reports in the
   FDA's words ("such as headache and nausea").
9. **[medium] Quiz 2 explanation relies on a fact the body never gives** (drafter flag 4): "FSANZ
   names mushrooms among the foods with relatively high free glutamate". True (FSANZ introduction:
   "tomatoes, mushrooms, peas and certain cheeses"), but not taught. Add the phrase to the body at
   the free/bound paragraph.
10. **[medium] `minutes: 100` against a real load nearer 90, and over the one-sitting ceiling.**
    The exercise said "Take 50 minutes" for weighing salt and a split broth tasting; worked through
    step by step it is about 30 (weigh three times, 5; warm and salt broth, 10; sizzle garlic,
    split, taste, 10; write, 5). The model caps a stated time at 30 and adds the step cost on top,
    so the 50 was priced at 42.5. Restate as "Allow 20 minutes for steps 2 to 4, and a few more for
    the weighing" (model: 32.5, the hand estimate). Body cuts: the lesson 2 / lesson 6 paragraph
    under the salt heading duplicated Connections, and Connections repeated the Nutrition lesson 1
    pointer from the trials section. Nothing else is padding or owned by another lesson: the
    avocado, Kean and garlic-in-oil material are all assigned here by the outline, and the UK half
    of the garlic section is required by decision 1.
11. **[low] Unlabelled course construction (drafter flag 1, defect 20 third form):** "salt does not
    evaporate with the water" in dal stage 1 and "salt stays behind" in the checkpoint. No source in
    SOURCES says it. It's elementary chemistry, but the rule is the rule: label once at point of use.
12. **[low] Dal stage 3 states the course's extension as Nosrat's prediction.** "Nosrat's garlic
    demonstration suggests what you'll notice: the turmeric ... tastes of little": she said nothing
    about turmeric or dal. Hedge and label as the course's extension.
13. **[low] "The third kind of thinness"** when only one kind (lack of body) had been named, and
    the fat paragraph offered "a spoon of yogurt" as a fix for thinness two sections after the acid
    paragraph listed yogurt as acid. Fix both.
14. **[low] "one of the commonest amino acids in food"**: FSANZ says "in nature", FDA says "common".
    Match the source.
15. **[low] "Sweetcorn ... 130 mg"**: FSANZ Table 1 says "Corn". Say corn.
16. **[low] "Here's the wrinkle:"** is a banned sentence shape (style guide). Rewrite.
17. **[low] UK garlic sentence, "stricter than nothing and consistent with that advice"**: the label
    is present (drafter flag 5), the phrasing is clumsy. Rewrite, keeping the label.
18. **[low] Connections promised lesson 4 "turns the garlic oil into a principle".** Lesson 4's
    outline doesn't mention garlic oil and lesson 4 is being drafted now. Point at time and
    temperature, which decision 2 does assign to lesson 4.
19. **[low] Cold start, exercise.** "a stock cube is fine" alongside "unsalted or lightly salted
    broth": cubes are usually salted, which spoils step 2. "Level teaspoon" is not explained.

**Drafter flags, each checked.**
- (1) Constructions labelled at point of use: flat / cloying or heavy / thin (line "as a working
  tool rather than anything a source defines", yes); acid against richness ("this course's
  extension of her point", yes); why a teaspoon differs ("That is this course's explanation", yes);
  the dal ("The recipe is this course's own", yes); spices that "haven't arrived" ("on this course's
  reading of her point", yes); salt staying behind as the pot reduces (no: F11).
- (2) Kean attribution: the quoted judgements were attributed; the tone and his causal explanation
  were not (F6); one figure was attributed to him that is his sources' (F5).
- (3) Unsourced common knowledge (soy sauce, fish sauce and Parmesan are salty; nam pla Thai;
  Marmite British; oyster sauce Chinese): left as common knowledge. The FDA page supports the
  saltiness in part ("free glutamate and sodium occur together naturally in ... soy extracts ... as
  well as in tomatoes and cheeses"). FSANZ Table 2 lists "Nam-pla" without a country; no reader
  will be misled by "Thai".
- (4) Quiz 2 and mushrooms: F9.
- (5) Garlic UK suggestion: labelled; wording fixed (F17).

**Verified and correct, not listed above:** every Nosrat quotation and the kosher-salt description;
the publisher's "four cardinal directions"; Ikeda, 1908, seaweed broth, patent and "commercial
production started the following year" (FDA); 13 g against 0.55 g; FASEB 3 g and under 0.5 g; Kwok
a Maryland paediatrician, April 1968, three suspects, ten replies a month later, "no two letter
writers"; canned soups and TV dinners (Kean: "without batting an eye"); every Geha figure and
quotation; FSANZ's 0.2 to 0.8%, "self-limiting", "some other food component", "appropriate clinical
testing", the unanswered with-food question; Schaich, polyphenol oxidase, damage-localised browning,
water or citrus layer, acid deactivating the enzyme; NCHFP 40°F and 4 days; UGA 180°F, 4 days,
dried garlic, citric acid warning, and "always start by sterilizing your containers ... boil them
for 10 min" (supports quiz 4's explanation; was not in SOURCES, now recorded); FSA spores, "can be
risky", foods preserved in oil, below 5°C, no day limit. Every SVG label and bar read by eye; token
fills throughout; oxblood for seasonings and `--line-strong` for foods, with the dashed rule and the
text saying which is which, so nothing depends on colour. Lesson 2's "water can't get hotter than
its boiling point" and lesson 1's claw and scale exist as cited; Nutrition lesson 7 is "Salt and
sugar". Dashes: the only two are inside quotations (FSANZ's "0.2 – 0.8%", UGA's em dash), kept as
printed.

**Resolutions applied:**

1. F1: both FSANZ Conclusion sentences quoted, with CRS glossed; sentence recorded in SOURCES
   ("Stage 4 note, lesson 3").
2. F2: "The same FSA page, explaining why use-by dates matter".
3. F3: "more than seven times as much glutamate in total (about 2,880 mg against 380)".
4. F4: "In a trial its authors called the largest to date when it was published".
5. F5: "which the study's critics at the time, as Kean reports them, put at about 700 times what a
   typical American ate in a day".
6. F6: Kean's scorn named with his word, his expectation explanation marked as his argument and
   not something the trials tested. "The name carried a stigma that had nothing to do with
   chemistry" (course voice, a judgement) replaced with the factual "The name tied a set of symptoms
   to one cuisine before anyone had shown what caused them".
7. F7: mirror claim added to the MSG misconception, with the dose-response finding and FSANZ's
   advice. Quiz 3's explanation also now says FSANZ calls the with-food question unanswered, rather
   than "the evidence doesn't point to MSG in a meal".
8. F8: "Many people avoid it because they believe it makes them ill, and the FDA says it has
   received reports of symptoms 'such as headache and nausea' over the years." The "regulators read
   the evidence the same way" line became "The two regulators read for this course land in the same
   place", since FASEB (1995) predates Geha.
9. F9: FSANZ's "tomatoes, mushrooms, peas and certain cheeses" added to the free/bound paragraph.
10. F10: exercise timing restated; two duplicated passages cut; `minutes:` set by hand to **90**,
    which `npm run minutes` now models exactly. Not cut further: see F10.
11. F11: "(plain chemistry, not something a source here measured)" at dal stage 1; the checkpoint
    relies on it.
12. F12: stage 3 rewritten as "If Nosrat's garlic demonstration carries over, and this is the
    course's extension of it rather than her claim ..."; turmeric dropped.
13. F13: "The other kind of thinness"; yogurt removed from the fat fix.
14. F14 to F18: as proposed.
15. F19: broth line now asks for a low-salt carton or a weaker-made cube; "level" glossed as heaped
    then scraped flat with the back of a knife.

**Not fixed, and why:**
- Drafter flag 3 (common knowledge on saltiness and national origins): left; see above.
- The dal has no quantities. It's a worked example of staging, not a recipe the practice asks the
  reader to cook, and the body says it makes no claim about how dal is made. A reader who wants to
  cook it has lesson 9's legumes and lesson 12's ratios ahead.
- The FSA page "Applies to England, Northern Ireland and Wales"; the lesson says "the UK". This is
  the course-wide framing of decision 1, not a lesson 3 matter; lesson 4 is the place for a
  sentence on Food Standards Scotland if one is wanted.
- The chart floors cow's milk at 1 px for 0.2 px. Invisible otherwise; the value label says 2.
- The chickpea predict overlaps the soup section's point that soy sauce brings salt. Kept: it is
  one of three predict blocks and tests the point from the other direction (leaving it out).

**Status after review:** clean. No wrong facts beyond one arithmetic slip, no failed neutrality
check after fixes, so no Tier B escalation.
