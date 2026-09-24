# Stage 4 review, Nutrition lesson 11, "Reading a claim about your food": Facts, Neutrality, Safety

Reviewer: fresh context. Passes: Facts, Neutrality, Safety. The lesson was not edited.

## What was checked

- **Callout:** present word for word (line 122), matching `NUTRITION_SAFETY` in scripts/build.mjs line 820. No NEDA number anywhere. ANAD is described as peer support (lines 122, 422–423), as its own page says (SOURCES F 5.3).
- **Quotations checked by string match against SOURCES.md:** Valtin abstract (appendix, line ~6520), all six quoted fragments; NASEM water (F 8.2), all five; EFSA water press release (F 8.3); DGA hydration line (F 8.4); EFSA caffeine topic page (F 7.1); FDA "Spilling the Beans" (F 7.2), three; NHS foods to avoid in pregnancy (F 4.2), caffeine, amounts, 111 and reassurance; ACOG CO 462 (F 4.3), two; Lane 2024 abstract (D appendix, line ~4196), five; HCPC (F 6.1); BDA, two; CDR, two (F 6.2); NHS unintentional weight loss, warfarin (F 5.5); NHS eating disorders overview (F 5.2), six. All match. Footnote numbers all point at the right entries, and the read levels agree with SOURCES.
- **Arithmetic, redone by hand:** 2 × 160 + 90 = 410 mg; 400 / 90 = 4.44 cups, "about four and a half"; 3.7 − 3.0 = 0.7 and 0.7 / 3.7 = 18.9%, 2.7 − 2.2 = 0.5 and 0.5 / 2.7 = 18.5%, so "about a fifth" holds and fits the 81%; Lane 22 + 19 + 4 = 45, and 45 − 4 = 41. All correct.
- **Summaries of earlier lessons, checked against their current text:** lesson 1 (saturated-fat replacement table); lesson 2 (0.21); lesson 4 (registry enrols only maintainers; Liu's equal calories; Look AHEAD's control group lost 3.5%; diet averages about 1 kg apart against SDs of 4.8 to 7.3 kg); lesson 5 (the AI "provided when an EAR and RDA cannot be determined"; KDIGO on protein); lesson 6 (the three claims and their grades; Minnesota; Cochrane; Steen); lesson 7 (the potassium substitute caution); lesson 8 (Hall 2019 on a ward; kappa 0.32/0.34; Lane "convincing" against GRADE; the premises); lesson 9 (the ADA line); lesson 10 (the "can't tell" I statement); and the project file (three decisions, "ask first" scores in full, seven steps). Cross-course: Mental Fitness 9 (bins, its question last), Focus and Deep Work 7, Digital Literacy 8, Sleep 3, Logic 9, core-path.yaml (Strength and Fitness next, Cooking Fundamentals later this term, Statistics for Citizens and Medical Literacy later). Discrepancies are F4, F10 and F18 below.
- **Neutrality, the perspectives checked against:** (1) the NOVA proponents and public-health bodies (Monteiro, Lane's authors, WHO); (2) the NOVA and nutritional-epidemiology critics (Gibney, Astrup, Braesco); (3) the precautionary side of the meat dispute (WCRF, IARC) against the NutriRECS side; (4) supporters and critics of the 2026 DGA; (5) UK nutritionists on the voluntary register and US non-RD practitioners; (6) the three caffeine-in-pregnancy framings (NHS, ACOG, EFSA). Counts: the water section has no proponent of 8 × 8 to quote (none exists in SOURCES) and gives Valtin's own counter-caution in full, which is fair. Caffeine quotes all three bodies, one each, and flags the unread newer studies. The titles section flags the BDA's interest and uses the HCPC as neutral ground. Misconceptions: one public error, one sceptic's error ("nothing is known"), one general error, and quiz 6 rejects both "nobody knows anything" and "the dissent is a fringe". The imbalances are in the headline's advice half (F3) and the Deciding section (F5, F6).
- **Safety:** there is no prescription, calorie target, weight goal or supplement dose anywhere. Weight loss appears only as a warning sign (line 390). The eating-disorder paragraph at lines 425 to 428 is well judged. Findings F2, F7, F13, F19, F20 and F22 follow.

**Counts:** 0 critical, 7 major, 15 minor.
**Verdicts:** Facts pass with fixes. Neutrality fails until F3 and F5 are fixed. Safety passes with fixes, and F2 is the one that matters.

---

## Findings

**F1. Major (Facts / Neutrality).** Line 116: "That's what a claim about food usually turns out to be. Not a hoax: a sentence that travelled a long way from wherever it started, with nothing behind it when somebody finally looked."
The course's own central finding (SOURCES "The first thing Stage 1 found", quiz 6, the misconception at line 468) is that most food disputes sit on agreed evidence, such as salt and blood pressure or saturated fat and LDL. "Usually … nothing behind it" contradicts that. It also primes the reader for the "nobody knows anything" error that quiz 6 then marks wrong. Nothing sourced supports "usually".
Fix: "That's one thing a claim about food can turn out to be. Not a hoax: a sentence that travelled a long way from wherever it started, with nothing behind it when somebody finally looked. Others turn out to have a great deal behind them, and the method is how you tell which."

**F2. Major (Safety).** Lines 410–414: "This course found no official page telling people with either to see a dietitian, and says so. What it did read points the same way: the American Diabetes Association on reducing glucose-lowering medicines 'to prevent hypoglycemia' on a very low carbohydrate plan (lesson 9)…"
This is literally true about dietitians, but it undersells the strongest sourced line the course has. Lesson 9 (line 369) quotes the ADA saying "consultation with a knowledgeable practitioner at the onset is necessary to prevent dehydration and reduce insulin and hypoglycemic medications to prevent hypoglycemia." That is an official statement that professional input is necessary. A reader on insulin who skims "found no official page telling people … to see a dietitian" may take the point as weak.
Fix: "**Diabetes and kidney disease.** For diabetes, the American Diabetes Association says that on a very low carbohydrate plan 'consultation with a knowledgeable practitioner at the onset is necessary to prevent dehydration and reduce insulin and hypoglycemic medications to prevent hypoglycemia' (lesson 9). For kidney disease, the kidney guideline advises against high protein (lesson 5), and potassium salt substitutes carry a caution (lesson 7). This course found no official page on seeing a dietitian for either, and says so." Keep the footnote to lesson 9's source, or add the ADA report as a new numbered source.

**F3. Major (Neutrality).** Lines 312–317: "So they do want exposure reduced, through public measures that are tested first, and they ask for the causes to be studied. That's a different thing from telling one household to act on this finding." Checkpoint line 325: "the authors ask for public measures to be tested and causes studied, not for readers to act on one finding."
This is accurate about Lane. But the section treats the headline's advice half only as a gap. It never says that serious people do tell households to cut ultra-processed food. Monteiro, in the AJCN debate that lesson 8 quotes (line 342), holds that "existing evidence is sufficient to recommend the avoidance of ultra-processed foods". The 2025–2030 DGA tells readers to "Avoid highly processed packaged, prepared, ready-to-eat, or other foods that are salty or sweet" (SOURCES D 3.5). A NOVA proponent would not recognise their position here: the reader is left thinking that "clear out the cupboards" has no expert backing. The lesson also says "tested first", but the abstract says "develop and evaluate". "First" is the course's word.
Fix: after "…studied." add: "Others do go further. Carlos Monteiro, NOVA's originator, argues that existing evidence is already 'sufficient to recommend the avoidance of ultra-processed foods' (lesson 8), and the 2025–2030 US guidelines tell readers to avoid highly processed foods that are salty or sweet (lesson 9). They rest that advice on more than this one finding, and it still doesn't say what goes in the cupboard instead." Change "through public measures that are tested first" to "through public measures whose effectiveness is evaluated". In the checkpoint answer, change the last clause to "…not for readers to act on this one finding; those who do advise households to cut back, as lesson 8 showed, rest on more than it."

**F4. Major (Facts: summary of lesson 8).** Line 345–347: "Lesson 8's two meat panels gave opposite advice from overlapping evidence because each needed a premise about what matters, and the data couldn't supply it." Line 157–158: "A value question: one evidence can inform and not decide, as the meat panels showed."
Lesson 8 says the two bodies split on the evidence and on the value: "Its first half restates that body's reading of the evidence … That half is empirical, and the critics below argue it. … These two bodies split on both" (lesson 8 lines 524–527). The project (step 3) says "lesson 8 found the meat dispute was all three at once." Lesson 11 reduces this to values alone. Lesson 8 compared NutriRECS with WCRF (and IARC). "Two meat panels" is acceptable, but "overlapping evidence" should not suggest that their readings of it agreed.
Fix, line 345: "And much of the rest is value. Lesson 8's two meat bodies read overlapping evidence differently and also needed different premises about what matters, and the premises did work the data couldn't." Line 157: "…as the meat dispute showed, where a value question sat on top of an empirical one."

**F5. Major (Neutrality).** Lines 440–442: "A contested finding can't settle it, so the decision rests on a premise of yours, like the one lesson 8 reconstructed for the panel that said 'continue': a very small, uncertain benefit doesn't justify asking people to give up what they value. Or its opposite."
Only the NutriRECS premise is given, and in full. The opposing premise, which lesson 8 reconstructed with the same care for WCRF, gets two words. In the one place the course hands the reader a ready-made reason to decide, only the "don't change" side is spelled out (defect 14: explained against named).
Fix: "A contested finding can't settle it, so the decision rests on a premise of yours. Lesson 8 reconstructed one for each meat body: for NutriRECS, a very small, uncertain benefit doesn't justify asking people to give up what they value; for WCRF, when a food is a cause of serious disease and no safe level has been shown, eat little or none of it, because small risks add up across many people. Write yours down."

**F6. Minor (Neutrality).** Lines 444–445: "A swap that's 'not stated' means the claim cannot yet bear a change, and keeping what you do is a reasonable answer."
This makes the status quo the default, which is itself a premise (close to NutriRECS's). Line 350 says the course "will not tell you the way you eat is fine". Sam's case (line 453) also lands on "stop", so the lesson's worked decisions all tilt towards no change.
Fix: "…means the claim can't bear a change by itself. That doesn't show your present way of eating is fine either, so the decision rests on what else you found (the guides in step 5) or on a premise you write down."

**F7. Major (Facts / Safety; the quiz stem against its key).** Quiz item 3, lines 46–60. The stem says the uncle "puts it down to a new breakfast cereal". The key and explanation rest on the NHS definition, "without changing your diet or exercise routine". A new cereal is a change of diet, so on the stem's own facts the quoted definition arguably doesn't apply, and a careful reader can argue for option D. The safety point is right, but it rests on a definition the stem undermines.
Fix: build the explanation on the NHS line that fits "without trying" exactly (SOURCES F 5.5): "It's important to get it checked if you're losing weight without trying." Suggested explanation: "The NHS says 'It's important to get it checked if you're losing weight without trying,' and that unintentional weight loss 'can be a sign of stress or a serious illness. See a GP just in case.' A new cereal is too small a change to explain a noticeable loss with no effort, and only an examination can settle it. Tracing the cereal claim is fine later, but it isn't the first step." Change option B to "See a GP, since losing a noticeable amount without trying can be a sign of illness" (measure its length against the other options). You could also put the same NHS sentence in the body at line 389.

**F8. Minor (Facts).** Footnote 4, line 540: "The hydration line is dated September 2026." The document is dated January 2026. What line 211 dates to September 2026 is the "as of" of the lesson's claim that these are the newest guidelines.
Fix: "The hydration line is from the January 2026 edition, current as of September 2026."

**F9. Minor (Facts: read level).** Line 261: "The FDA does not print a pregnancy number at all".
SOURCES F 7.2 says only that the FDA "does not give its own pregnancy number on this page". The course read one FDA page.
Fix: "The FDA's page prints no pregnancy number; it recommends…".

**F10. Minor (Facts: summary of lesson 2).** Table, line 138: "A food questionnaire's calories matched the body's at 0.21".
"Matched … at 0.21" reads like a percentage match. Lesson 2 (line 122) calls it a correlation, where 1 would be perfect.
Fix: "Questionnaire calories correlated with the body's at only 0.21 (lesson 2)".

**F11. Minor (Facts: read level).** Line 304: "the review gives only relative measures".
Only the abstract was read (footnote 9).
Fix: "the abstract gives only relative measures".

**F12. Minor (Facts).** Checkpoint, line 323: "As an association it is consistent, 'convincing' on the authors' scheme…".
The abstract doesn't define what builds the classes (lesson 8 line 322: "The abstract names the classes but does not define what builds them"), so "consistent" is an inference the course cannot support at abstract level.
Fix: "As an association it is 'convincing' on the authors' scheme and 'low' on GRADE; as a cause it's contested…". Also consider replacing "which is lesson 8's dispute over the category" with "as lesson 8's disputes over the category and over confounding showed". Whether ultra-processed food causes anxiety is a causal question, not only a question about the category.

**F13. Minor (Safety).** Line 400: "Get help from 111 if you're pregnant and…".
111 is an NHS number and means nothing to a US reader, who gets no route here.
Fix: after the quotation add "(111 is the NHS's non-emergency line; elsewhere, your midwife, obstetrician or doctor)".

**F14. Minor (Facts: hedge dropped).** Lines 218–219: "'Tea and coffee don't count' was checked and didn't hold in the studies he cites, which makes it the one false claim in this lesson, on the strength of an abstract."
Valtin's wording is hedged: caffeinated drinks "may indeed be counted". "False" is a defensible sort, but the hedge should stay visible.
Fix: "…didn't hold in the studies he cites, which found caffeinated drinks 'may indeed be counted'. That makes it the one claim this lesson sorts as false, on the strength of an abstract."

**F15. Minor (Facts: paraphrase).** Line 114: "searching the databases and the older literature".
The abstract says "electronic modes" plus "a cursory examination of the older literature". Dropping "cursory" makes the search sound more thorough than Valtin says it was.
Fix: "searching the databases, taking a cursory look at older literature, and consulting…".

**F16. Minor (Facts).** Line 163: "corn oil, lesson 6's linoleic acid, a polyunsaturated fat".
Corn oil is rich in linoleic acid; it isn't linoleic acid.
Fix: "corn oil, rich in lesson 6's linoleic acid, a polyunsaturated fat".

**F17. Minor (Facts: unsourced).** Line 473: "The water rule was measurable for decades".
Nothing read dates the rule (Valtin's abstract says only "seemingly ubiquitous").
Fix: "The water rule was measurable all along, and when somebody looked…".

**F18. Minor (Facts: cross-course).** Line 128: "you've used it at the end of every course since."
Personal Finance, which sits on the Core between Time Management and Habits, does not end with the sort; its last lesson is on scams. Lines 146–151 also present "instead of what?" going in front of the sort as this course's ordering. Focus and Deep Work lesson 7 (line 113) already "adds a question in front of that one".
Fix: "and you've used it at the end of most courses since." At line 146, say that Focus and Deep Work also asked its question before the sort: "Focus and Deep Work asked its instrument question before the sort; Mental Fitness put its question last. This course puts 'instead of what?' first, like Focus…".

**F19. Minor (Safety).** Lines 214–223 and Sam (447–456). The lesson tells healthy readers they need not drink eight glasses, which is right. It says nothing about readers who have been given a fluid amount by a clinician, whether more (for example after kidney stones) or less (fluid restriction). Valtin's "some diseases" and Sam's "an illness his doctor says calls for more fluid" cover only half of that, and kidney disease is on the callout.
Fix, one sentence after line 219, with no new claim needing a source: "If a doctor has given you a fluid amount, more or less than usual, that number is about you, and this section isn't."

**F20. Minor (Safety).** The exercise, lines 482–492, asks the reader to pick a claim about food they have acted on. The project file (lines 22–30) warns readers for whom tracking or restriction is not neutral. The lesson's exercise has no such note, though the reader meets the "very strict habits" paragraph just before it.
Fix: add to step 1: "If the claims that come to mind are all about eating less or about weight, and the last paragraph of 'When it stops being a self-help question' sounded familiar, take that to the callout instead; the project will wait."

**F21. Minor (Neutrality / Facts).** Lines 377–380: "Neither title guarantees good advice. The protected one does guarantee training, a code of conduct and a regulator you can complain to."
This is exact for the UK. In the US the RD/RDN is a national credential rather than a legally protected title, and whether there is a state regulator depends on the state, which the lesson itself says it didn't read.
Fix: "…The protected UK title guarantees training, a code of conduct and a regulator you can complain to; the US credential guarantees the training and the commission's standards, and whether there is also a state regulator depends on the state."

**F22. Minor (Safety).** Line 422: "The helplines are in the callout".
The callout's Beat number is the England line (OUTLINE decision 1). SOURCES F 5.3 has Beat's Scotland, Wales and Northern Ireland numbers, and the body is the place for them, since the callout is fixed.
Fix: "The helplines are in the callout; Beat's number there is its England line, and [its helpline page](https://www.beateatingdisorders.org.uk/get-information-and-support/get-help-for-myself/i-need-support-now/helplines/) lists the numbers for Scotland, Wales and Northern Ireland. ANAD's is peer support, not treatment." Don't print hours, per F 5.3.

---

Not raised, and why: the "caffeine in pregnancy" framing (lines 240–255) is accurate to all three sources, says what wasn't read, and sends a pregnant reader to her provider. The titles section flags the BDA's interest correctly. Nothing in the lesson cites an unread-line work.
