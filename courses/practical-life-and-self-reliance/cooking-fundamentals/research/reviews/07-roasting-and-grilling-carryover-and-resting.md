# Reviews: Lesson 7, Roasting and grilling: carryover and resting

## 2026-09-24, Lesson 07, all passes, Tier A
**Reviewer:** one fresh-context reviewer: depth, fact-check, neutrality, pedagogy, cold start, voice and media.

Tier A: not a sensitive domain (standards 3.4) and not a standpoint course. The two contested
stretches, resting and acrylamide, got the neutrality pass (below), as the outline asks.

**What was checked.** The Gritzer article was downloaded again from its AOL copy and read in its
extracted text, because nearly half the lesson rests on it. Spiegelhalter's Cambridge page, Cancer
Research UK's page and the CIDRAP report were re-downloaded and the sentences used or proposed were
matched. All four videos were confirmed by oEmbed (titles and channels match, and the roast-potato
label leaves out "The Food Lab"). Eight cited URLs return 200. `npm run quotes`: every sourced
quotation found in SOURCES.md, before and after the fix pass. Every read-level statement in Sources
was matched against SOURCES.md. The callout was diffed against lesson 4's and is identical; it was
not touched. `npm run taught`: 146 lessons across 16 courses, none on cooking, and `prerequisites: []`.

**Sums redone by hand.** 15°F = 8.3°C ("about 8"); 1.5 in = 3.8 cm ("about 4"); 140°F = 60°C;
145°F = 62.8°C; 160°F = 71.1°C; 165°F = 73.9°C; 125°F = 51.7°C ("about 52"); 325°F = 162.8°C
("163"); 230°C = 446°F ("about 450"); 150°C = 302°F ("about 300"). All correct. Kenji's slices at
0, 2.5, 5, 7.5, 10 and 12.5 minutes: six steaks at 2.5-minute steps, matches the source. 16 of 30 =
53%, "almost perfect 50/50": correct. Trichinellosis: bear 41 against pork products 22, so "more
from bear meat than from pork" holds. The Food Code roast table against its non-intact rule, worked
out below (F4), is where the lesson went wrong.

**Quiz measured.** Keys 0,3,2,0,1,2: all four positions, no adjacent repeat, and different from
lesson 6 (1,3,0,2,3,1) and lesson 5 (2,0,1,3,1,0). Option lengths within 2 to 5 characters in every
item; the key is never the sole longest. Every item has at least two options without an absolute.
Application items: 1, 3, 4 and 5 (four of six). Items 3 and 4 lean on the body's own cases (a
rolled rib; expensive burgers) but ask the reader to apply the rule, not to recall a sentence.
Every explanation was read against the option its key selects: all match.

**Contractions** 7.7 per 1,000 body words (band 5 to 8). **Bold** 1.5 per 1,000. **Em dashes:** one,
inside Ibrahim's article title in Sources, which is quoted text and is kept. No banned vocabulary
found. No SVG.

### Findings

**F1 (High, fact/provenance, defect 1).** "The honest answer is that this course didn't read a
source it could cite for a range." False. Gritzer states the conventional range in the article the
lesson cites most, and the gate closures record it: "roughly 5–15°F shy of the desired final core
temperature" and a rest of "5 to 30 minutes"; for steaks and chops "5–10°F". His point is that his
chop beat the top of it. So the lesson withheld the one thing a reader needs to see why Gritzer's
chop matters, and made a false claim about what the course had read. *Fix:* give the usual advice in
his words, then his chop and his verdict ("Follow the conventional resting advice, and in many cases,
you're going to blow right past your target temp").

**F2 (High, fact, no source).** "Lesson 6 gave ATK's version, which is to tent meat loosely rather
than wrap it." Lesson 6 says nothing about tenting or wrapping, and nothing in SOURCES.md does
either. This is a made-up cross-reference carrying an unsourced ATK claim. *Fix:* delete it, and
drop "loosely covered if you like" from chicken step 6, since it has no source and pulls against
Meathead's point about crusts steaming.

**F3 (Medium, attribution).** "He also thinks cooks usually underestimate it: 'Carryover cooking is
greatly underestimated…'" Gritzer introduces that sentence as "one of Chris Young's main points",
which his own setup bore out. *Fix:* credit Young.

**F4 (Medium, fact).** The Food Code "puts 'non-intact' meat … under a stricter rule than an intact
roast." Worked against B2.1: the roast table needs 145°F for 4 minutes and 155°F for 22 seconds, but
the non-intact chart needs 145°F for 3 minutes and 155°F for 17 seconds. So at the same temperature
the roast needs longer, not less. The rule that is stricter than the non-intact one is the one for
intact meat in (A)(1), 145°F for 15 seconds. *Fix:* "than intact meat such as a steak".

**F5 (Medium, defect 19, dropped hedge).** "Gritzer's description of them is that 'when samples of
seared meat …'" The source sentence is "Young's tests **suggest** that when samples …". The lead-in
cut the verb that carries the hedge. *Fix:* quote from "suggest".

**F6 (Medium, safety framing, drafter flag 2).** The framing is correct and safe. The US chart says
to reach the minimum "before removing food from the heat source"; the Food Code, written for
restaurants, lets post-oven rise count towards holding time. The lesson keeps the two apart and never
mixes them in one sentence (decision 1). What was missing was the practical consequence of "pull
early" for a US home cook: pulling early is only something you do above the minimum. The UK side
also went unsaid: a seared whole cut of beef or lamb there has no core figure, so carryover is about
doneness alone. The final checkpoint's "take it out earlier" had no bound. *Fix:* one sentence on
each side, and "as far as your country's rule allows" in the checkpoint.

**F7 (Medium, drafter's pork flag).** Gritzer's 140°F target was flagged at the tasting test but not
in the opening paragraph, where the reader first meets it as a pork chop's goal. The later framing
(below the US 145°F with a rest, "a tasting test, not a recipe") is correct. The UK advises pork
cooked through, which the pork section covers. *Fix:* one clause in the opening. The opening was
also written as an instruction ("Take a thick pork chop off the heat…15°F short") and said "chops"
where the source says one chop; it now opens "Suppose you take…" and says one chop. Decision 8's
unit order was fixed too: 1.5 inches first, the source's unit.

**F8 (Medium, neutrality: selection, acrylamide).** The count before the fix: regulators (EFSA, FSA,
FDA) about twelve quotations, and Cancer Research UK plus Spiegelhalter seven. The dissent had the
last quoted word, and the course's own summary is even-handed. The misconception list names an error
at each end. What failed was selection, in both directions:
- The FSA's margins of exposure were printed without the FSA's own conclusion that they "indicated a
  concern for public health", which is the regulators' strongest point in their own words.
- Spiegelhalter's reading of the same margin ("160 times as much", and the 10,000 as "rather
  arbitrary") was left out. It is the dissent's strongest point, and Go deeper even recommends his
  piece for it.
- IARC's "probable human carcinogen", a fact a regulator-side reader would insist on, appeared
  nowhere. Spiegelhalter grants it himself.
*Fix:* add all three. After the fix both sides are explained, not only quoted.

**F9 (Low, neutrality, label).** The heading "The dissent: no reliable human evidence" labels Cancer
Research UK, a major cancer charity, as a minority dissenter. *Fix:* "The other reading: no reliable
human evidence".

**F10 (Low, neutrality, resting).** The count on resting: the new view has Gritzer, Young (via
Gritzer) and Ibrahim, and gets the last word. The old view gets Gritzer's fair statement of it,
Kenji's test and "the juice on the board was real". That is consistent with the outline's "current
best view, narrow base said", and the base is stated ("Eh, probably not"). Young's commercial
interest is stated once, without insinuation, as the outline asks. Two facts from the primary make
the disclosure complete and fairer to Young: Gritzer used Young's thermometer in his own test, with
"(and no, this isn't an ad)", and Young had long argued *for* resting and changed his mind. *Fix:*
add both. The claim that "part of his case is that carryover is bigger than cooks think" is
supported by the primary ("one of Chris Young's main points").

**F11 (Low, provenance).** Young's description ("chef and food scientist", co-author of the original
*Modernist Cuisine* books) was not in SOURCES.md, which had only "Modernist Cuisine alum". It is in
the primary, word for word. *Fix:* attribute it to Gritzer in the body and record it in a Stage 4
note in SOURCES.md.

**F12 (Low, fact).** "Discourage people from cooking burgers that way at home." The FSA guidance
says "discourage consumers from eating LTTC beef burgers at home". *Fix:* "eating".

**F13 (Low, fact).** The misconception "Gritzer's thick chops rose 15°F in under three minutes":
that was one chop. *Fix:* one chop, and tie it to the usual advice.

**F14 (Low, unsourced practice claim, defect 22 third form).** "Thick cuts are often started on a
hot grill and finished further from the heat, or in the oven." This is stated as common practice
with no source. *Fix:* recast as what lesson 2's mechanism implies.

**F15 (Low, unsourced).** The chicken checkpoint says the breast "can come out drier than the
thighs". No source supports it. *Fix:* cut; the point stands without it.

**F16 (Low, media).** "López-Alt's roast potato video is a good demonstration of how far cooks push
it" judges a video the course has not watched (defect 21). *Fix:* say only what the description
supports.

**F17 (Low, wording).** Step 1: "the floor is the safety figure", three paragraphs after the lesson
says FSIS gives no reason for the floor and "this course won't supply one". *Fix:* "FSIS's figure".

**F18 (Low, cold start).** "Joint" (UK, a roast), "mince" (US ground meat) and "parboil" are used
without a gloss for a reader who has done no cooking course. *Fix:* one gloss each at first use in
the body.

**F19 (Low, punctuation inside marks).** Spiegelhalter's "very nasty substance." was printed with a
comma inside the quotation marks while the fix was being made. *Fix:* comma outside.

### Checked and passed

- **Drafter flag 1, four labelled inferences.** Rolled joints on the FSA list (labelled in the body
  at the point of use, in the quiz explanation, and in Sources). Reverse sear leaves less carryover
  (labelled; ATK's test measured juice loss, correctly said). Hotter oven, more carryover (labelled in
  the predict block). Why not to stuff a bird (labelled; the FSIS page gives no reason). All four are
  labelled where the reader meets them, which is what defect 20 asks for.
- **Drafter flag 3, research-note sentences.** "What would settle it … measured in their blood"
  matches D3f's "biomarker-measured acrylamide exposure (haemoglobin adducts)". The pork reading
  ("how cautiously each agency phrases") matches D3d's "What the lesson can say" and lesson 4's own
  wording. Both are labelled.
- **Drafter flag 4, videos.** All four IDs resolve to the titles and channels stated. Each is
  labelled as checked for title and channel only, and none carries a claim. The potato label
  contains no "Food Lab".
- **Drafter flag 5, grill/broiler/barbecue.** This is correct, uncontroversial usage, and needs no
  citation under standards 2.1.
- **Fridge potatoes side by side.** The FSA's withdrawal, the FDA's current advice and EFSA's
  unvalidated literature note each get one quotation, and no regulator is called wrong. Balanced.
- **Pork.** The CIDRAP quotations and Hagen's title were checked against the live page. The MMWR
  figures match. The Food Code Annex sentence matches.

## Resolutions applied

Applied on 2026-09-24, in the same pass:

- F1: the carryover paragraph now gives Gritzer's statement of the usual advice (5 to 15°F; 5 to
  10°F for steaks and chops; 5 to 30 minutes' rest), his chop against it and his verdict. "Didn't
  read a source it could cite" is gone.
- F2: the tenting sentence is deleted, and "loosely covered if you like" is gone from step 6. The
  Meathead line now matches the source ("skipping the rest", "steaming and going soggy").
- F3, F5, F10, F11: Young credited for "greatly underestimated". "Suggest" restored. His credentials
  are attributed to Gritzer, with Gritzer's use of the thermometer and Young's change of mind added.
- F4: "than intact meat such as a steak".
- F6: one sentence on the US (pull early only above the minimum: 145°F out, not 135°F relying on the
  rest) and one on the UK (seared whole beef or lamb, doneness alone). The final checkpoint is
  bounded by "as far as your country's rule allows".
- F7: the opening is now "Suppose…", says one chop and 1.5 inches first, and flags that 140°F is a
  tasting-test target below the US pork figure.
- F8, F9: the FSA's "indicated a concern for public health" is added. Spiegelhalter's concession on
  large doses and IARC is added, along with his 160-times reading and "rather arbitrary". The heading
  is renamed. Recount: regulators about fifteen quotations and the other reading about eleven; each
  side's reasoning is explained; the course's summary and the practical choice stay even-handed.
- F12 to F19: applied as written above.
- Sources entries 1, 11 and 15 updated to what they now support. A "Stage 4 note, lesson 7" was
  appended to the end of SOURCES.md with the new Gritzer lines copied from the primary. `npm run
  quotes`: 280 sourced quotations, 0 not found.
- `minutes:` 75 to 80, set by hand from `npm run minutes` (measured 80 after the fix pass).

**Not fixed, and why.**
- The callout repetition warnings from `npm run validate`. The callout is word for word by decision
  3, and the brief says not to edit it.
- Quiz items 3 and 4 reuse the body's cases (a rolled rib; expensive burgers). Each still asks for
  the rule to be applied, the option shapes are clean, and rewriting them would touch keys the
  explanations currently match. Left as they are.
- "Its advice to home cooks, the heart of the 2017 campaign it called Go for Gold": the 2017 press
  release in D3f carries the same tips, so this is supported. Left as it is.
- The trussing video's caption gives no running time (standards 4.5). oEmbed does not report one and
  the video was not opened. Left for whoever watches it.
- Kenji's evolving view ("he's continued to evolve his thinking since then") is in the primary, but
  the lesson makes no claim about his current position, so it is not needed. Left out.

No escalation to Tier B: no wrong facts in the teaching of safety rules, and the neutrality findings
were about selection, not a failed Turing test. The lesson was not heavily rewritten.
