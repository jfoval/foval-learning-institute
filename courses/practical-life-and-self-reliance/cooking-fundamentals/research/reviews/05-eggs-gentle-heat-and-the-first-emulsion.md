# Reviews: Lesson 5, Eggs: gentle heat and the first emulsion

## 2026-09-24, Lesson 05, all passes, Tier A
**Reviewer:** one fresh-context reviewer: depth, fact-check, neutrality, pedagogy, cold start, voice and media.

Tier A: not a sensitive domain and not a standpoint course. The one contested-looking stretch is the
US and UK egg advice, which is a policy difference between two regulators rather than a value
dispute; the neutrality pass was run on it (below).

**What was checked.** Primaries re-downloaded and read in their extracted text: the Egg Safety
Center page (live), the American Egg Board coagulation page (fetch tool), the FSIS "Shell Eggs from
Farm to Table" Internet Archive capture of 29 August 2026, the Anton PDF header, and, for drafter
flag 2, the FSA's own announcement of 11 October 2017 (Internet Archive capture of 17 October 2017)
and the ACMSF 2016 report (Internet Archive capture of 20 December 2016; the overall risk assessment
and paragraph 5.47). Both videos and the playlist confirmed by oEmbed (titles and channels match).
`npm run quotes`: every sourced quotation found in SOURCES.md, before and after the fix pass. Every
read-level statement in Sources string-matched against SOURCES.md. `npm run taught`: 146 lessons
across 16 courses, none on cooking; the course's own lessons 1 to 4 are the only kitchen knowledge.

**Sums redone by hand.** 144°F = 62.2°C, 149°F = 65°C, 158°F = 70°C, 64°C = 147°F, 145°F = 62.8°C
(the Food Code rounds to 63), 160°F = 71.1°C, 165°F = 73.9°C ("71 to 74°C"), 212°F = 100°C: all
correct. 3 tbsp = 44 ml ("about 45"), 4 tsp = 19.7 ml ("about 20"), 1½ cups = 355 ml, ¼ cup = 59 ml
("about 60"), 1¼ cups = 296 ml ("about 295"), ½ cup = 118 ml ("about 120"): all correct. ATK base
45 + 20 ml plus two yolks (about 35 ml) against 355 ml of oil, about 3.5 times ("several times"):
correct. Practice step 4 halving (drafter flag 6): 3 tbsp to 1½ tbsp, 4 tsp to 2 tsp, two yolks to
one: correct, and labelled as ATK's quantities halved. Oil per yolk in step 5: 355 / 2 = 177 ml
against "about 180": correct. Oil in the kit list: 180 + 30 (step 6) + a little for frying, inside
250 ml. 3-log = a thousandfold, 7-log = ten million: correct. **Eggs in the kit list: wrong** (F5).

**Quiz measured.** Keys 2,0,1,3,1,0: all four positions, no adjacent repeat, differs from lessons 4
(2,1,3,0,2,3) and 6 (1,3,0,2,3,1). Option lengths within 11 characters per item. Item 6 failed the
absolutes check (F11).

**Drafter's flags.** (1) Industry sources labelled at point of use (Egg Board "the US egg
industry's promotion body"; Egg Safety Center "represents US egg producers", page: "represents
commercial egg producers"), with IFST agreeing: fine. (2) Resolved: FSA original and ACMSF report
read (F2). (3) Unsourced material: the tortilla, tamagoyaki and shakshuka descriptions are labelled
in the paragraph ("has not read a source on how any of them is made") and stay at the level of
mechanism, fine; the 64°C predict is labelled "a prediction from the figures, not something this
course has seen tested", fine; the fresh-yolk rescue is labelled "common practice", fine; the
hollandaise label read as pipeline talk (F19); curd size had no label and promised a practice step
that does not exist (F7). (4) The Kuang inference is labelled in the body at the point it is made:
fine. (5) The PDF header reads "M. ANTON", address marc.anton@nantes.inra.fr: "Marc" stands, now
recorded in SOURCES. (6) Correct, see above. Minutes: see F9.

### Findings

1. **[high] F1. A quotation attributed to the wrong row of its source (defect 26).** Lesson: "The
   Egg Safety Center's version is 'Cook until no visible liquid egg remains.'" for scrambled eggs.
   The live page's table gives that wording for an *egg white omelet*. Scrambled eggs share a row
   with fried eggs, "Cook until whites are completely set, and the yolks begin to thicken but are
   not hard", and omelettes and frittatas get "Eggs will be thickened with no visible liquid egg
   remaining." The error is in SOURCES.md's gate-closure entry, which the lesson inherited; the
   Sources entry [2] repeated it ("doneness wording for ... scrambled eggs"). Fix the body and
   Sources, and append a correction to SOURCES.md.
2. **[medium] F2. UK egg advice read at one remove (drafter flag 2).** The FSA original, dated
   "Last updated: 11 October 2017", matches the IFST copy word for word in every quoted passage.
   Two refinements. The list of Lion measures is the FSA's list, but the lesson's "The measures it
   listed" hung it on the expert group. And the ACMSF report says more than the lesson could: Lion
   eggs "or under demonstrably-equivalent comprehensive schemes" rated "VERY LOW", other shell
   eggs "LOW", and such eggs "can be served raw or lightly cooked to all groups in society,
   including those that are more vulnerable". Link the FSA original, attribute the list to the
   FSA, add the committee's own words as a new source, drop the "read at one remove" parenthesis,
   and narrow "None of the pages read ... compares" to what was read (the report compares Lion with
   other eggs, not with US eggs).
3. **[medium] F3. Lesson 2 misquoted.** "Lesson 2's three modes of heat are all here: the pan for
   frying, water for boiling and poaching, and a mix of the pan and steam". Lesson 2's three modes
   are conduction, convection and radiation; the sentence lists three media, and no egg method here
   uses radiation. Rewrite as conduction and convection.
4. **[medium] F4. Nosrat credited with the course's extension.** "the tart contrast, in Nosrat's
   phrase, that stops a rich sauce tasting heavy", and Connections "doing the job Nosrat
   described". Lesson 3 says her example is sweetness and that using acid against richness "is this
   course's extension of her point". Credit her with "tart contrast" only.
5. **[medium] F5. Egg count wrong in the kit list.** "six or seven eggs that suit your country's
   rule for raw eggs". Steps use four (boiled) + two (fried) + one (yolk) = seven, eight with the
   optional spare in step 2; and only the mayonnaise egg needs to suit the raw-egg rule.
6. **[medium] F6. Step 1's times have no zero.** "Boil four eggs ... by the method you like. Take
   the first out at 5 minutes". Both methods the lesson gives start the eggs in cold water, so "5
   minutes" means nothing until the reader knows when the clock starts, and "the method you like"
   makes the logged time useless to compare. Fix to the USDA route (cold water, bring to the boil,
   turn to a simmer, start timing) and log the time to the boil.
7. **[medium] F7. A promised practice step that doesn't exist.** Scrambling: "the practice is the
   place to see how". The practice has no scrambled egg. Replace with a two-batch comparison the
   reader can do next time, labelled as unsourced.
8. **[medium] F8. Cold start: two things never taught.** Separating a yolk from its white is
   needed in steps 4 and 5 and never described. And the heated-yolk route assumes a microwave,
   which lesson 1's kit list does not include; FSIS's own route (low heat in a pan, stirring) is
   in the lesson and not offered. Also add a line on getting a thermometer tip into a shallow
   base.
9. **[medium] F9. `minutes: 90` understates by about 60.** `npm run minutes` models 90 because
   its stated-minutes parser drops any figure over 60 (`if (n && n <= 60)`), so "Take 75 minutes"
   priced at zero, not at the 30 cap. Real load: about 66 minutes of reading at 140 wpm after the
   fix pass, about 9 of think-blocks and quiz, and the exercise. The exercise's 75 is honest when
   worked through: water to the boil and 12 minutes of simmering, cooling and peeling four eggs,
   about 35; two fried eggs, 10; separating, heating the base, whisking 180 ml by hand, 20; break
   and rescue, 10. Set 150 by hand, and restate the timing as "Allow 45 minutes for the eggs ...
   and 30 for the mayonnaise" so a reader can plan two sittings.
10. **[medium] F10. ATK's recipe contradicts the lesson's rule and the lesson doesn't notice.** The
    lesson teaches oil "a few drops at a time" at the start because a pour arrives "faster than the
    yolk can coat" it, then presents ATK's method, which whisks the first ¼ cup in at once. A reader
    who notices will distrust one or the other. Add a labelled reading: ATK's base is about 100 ml,
    so the first 60 ml is less oil than base.
11. **[medium] F11. Quiz 6 key answerable by shape.** The key was the only option without an
    absolute ("must", "no egg at all", "only if"). Rewrite the "no egg at all" distractor without
    one.
12. **[low] F12. Quiz 5 reuses the body's scenario** (defect 5b): "poured in the last of the oil in
    one go" is "The one that splits" nearly word for word. Move it to a failure at the start of a
    mayonnaise, which tests the same mechanism in a case the body doesn't walk through; adjust the
    explanation, since that sauce never became an emulsion.
13. **[low] F13. "one that breaks if it boils, for reasons you now know."** This lesson explains a
    yolk emulsion; a butter-finished pan sauce has no yolk, and its breaking is lesson 6's to
    explain. Point forward instead.
14. **[low] F14. FSIS grades.** "its top two grades, with thick, firm whites": FSIS gives Grade A
    whites as only "reasonably" firm.
15. **[low] F15. Washing reasoned from the US only.** The ACMSF report (5.47) says washing Class A
    table eggs "is not permitted in the UK", so a UK reader's eggs still have their coating. Add a
    sentence.
16. **[low] F16. Pipeline vocabulary and an unsupported adjective** (defect 7): "That predict block
    is the whole idea"; "it makes a good worked example"; "Two tested methods" (neither source
    describes testing).
17. **[low] F17. En dash** in "Nebraska-Lincoln", twice (body and Sources). Hyphen.
18. **[low] F18. "the carryover you saw when a hot egg kept cooking"**: nothing in the practice
    shows carryover. "Described", not "saw".
19. **[low] F19. Hollandaise label** "comes from this course's own research notes" is pipeline
    talk to a learner. Say the course hasn't read a source that tests either break, and that the
    account is reasoned from the lesson's setting temperatures.
20. **[low] F20. Quiz 4 explanation**: "The Lion mark is the UK regulator's rule". The mark is a
    scheme's; the exemption is the regulator's advice.
21. **[low] F21. "Two minutes for that much oil is slow, and that is the point."** A one-line moral,
    and 295 ml in two minutes (about 150 ml a minute) is a steady stream, not slow. Say what it is.
22. **[low] F22. "This is the first place in the course where the two countries' rules change what
    you'd cook."** Lesson 4 already applied several differing rules; this is the first dish. Narrow.
23. **[info] F23. The callout says "follow your country's rule on runny eggs in lesson 5" inside
    lesson 5.** Expected: decision 3 requires the text word for word, and the orchestrator re-syncs
    it from lesson 4. Not edited here.

**Neutrality.** Checked from a UK regulator's, a US regulator's and an egg industry's standpoint.
Each country's position is given in its own regulator's words and with its own reasoning (FSIS on
Salmonella inside the egg and the Egg Safety Rule; the FSA and ACMSF on the Lion controls). Citation
count in the two-country section roughly even (US: FSIS, foodsafety.gov, the Food Code; UK: FSA
twice, NHS, ACMSF). The closing word ("Neither country is wrong") goes to neither side, and no
misconception belongs to either. Industry sources are labelled as industry each time. Pass.

**Depth, voice and media.** Specific throughout; the Kuang two-protein passage and the Anton
coalescence distinction pass the expert test. Two predicts, two checkpoints, one exercise. No
banned vocabulary; "Here's why" once. Contractions 7.2 per 1,000 (outside quotations), bold 5.5 per
1,000. No SVG. Links in the body at the point of use; videos real and labelled as unwatched.

### Resolutions applied

1. F1: body rewritten to give the Egg Safety Center's actual rows (scrambled with fried; omelettes
   and frittatas "thickened with no visible liquid egg remaining"), framed as looser than FSIS;
   Sources [2] corrected; correction appended to SOURCES.md ("Stage 4 note, lesson 5").
2. F2: the UK paragraph now links the FSA's 11 October 2017 announcement (archived), attributes the
   measures list to the FSA, and adds the ACMSF report's "VERY LOW" / "LOW" ratings, its
   equivalent-schemes clause and its "all groups in society" recommendation, as new Sources [18];
   Sources [12] now cites the FSA original with the IFST copy as a second witness; the "Neither
   country is wrong" sentence narrowed to what was read. Read levels recorded in SOURCES.md.
3. F3, F4, F13, F14, F16, F17, F18, F19, F20, F21, F22: reworded as described.
4. F5, F6, F8: kit list gives seven eggs (eight with the spare) and says only the mayonnaise egg
   needs to suit the raw-egg rule; step 1 uses the USDA cold-start route with a defined zero and
   logs the time to the boil; step 4 now teaches separating an egg, gives FSIS's hob route beside
   ATK's microwave, and says to tilt the bowl for the thermometer.
5. F7: the scrambling sentence now sends the reader to a two-batch comparison at their next
   scramble, labelled as unsourced, instead of to a step that did not exist.
6. F9: `minutes: 150` set by hand, and the exercise restated as 45 + 30 minutes. `npm run minutes`
   now models 120 (it caps a stated duration at 30), so it will report this lesson as materially
   out. **Not fixed here, for the orchestrator:** either add an EXCEPTIONS entry in
   `scripts/reading-time.mjs` ("states 75 minutes of cooking across two parts, which the
   stated-minutes cap prices at 30"), or accept the model's figure. Separately, the parser's
   `n <= 60` guard dropped "Take 75 minutes" to zero rather than capping it, which is a bug worth
   a line in the queue. Lesson 2 ("Take 60 minutes", `minutes: 100`) is priced the same way and
   may be understated too; not checked here.
7. F10: a labelled three-sentence reading added after ATK's step 2.
8. F11, F12: quiz 6's third option rewritten without an absolute; quiz 5 moved to a mayonnaise that
   never thickens, explanation rewritten to match. Every explanation re-read against the option its
   key selects: keys unchanged (2,0,1,3,1,0), each explanation supports its key.
9. F15: one sentence added from ACMSF 5.47 on UK eggs not being washed.
10. **Not fixed:** F23, per instruction (the callout is synced from lesson 4). The "cooks know how
    to make mayonnaise work better than scientists can fully explain why" line is a gloss on
    Anton's "still used empirically" and was left. The poaching section still gives no reason for
    simmering over boiling, because no source read gives one; it now just defines the simmer.

`npm run validate`: exit 0; the only warnings for this lesson are the three expected callout
repetitions. `npm run quotes`: 210 sourced quotations, 0 not found. Measured minutes: model 120,
set by hand to 150.
