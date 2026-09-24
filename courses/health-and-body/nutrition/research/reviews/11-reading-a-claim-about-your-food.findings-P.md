# Stage 4 review, Nutrition lesson 11, "Reading a claim about your food": passes P (Depth, Pedagogy, Cold start, Voice and media)

Reviewer: fresh context, 2026-09-24. Lesson not edited. Line numbers are the file as read.

## What was measured

- **`minutes:`** 70; `node scripts/reading-time.mjs` gives 70 (5,462 words incl. the 10-minute exercise). Matches. See P3: the exercise timing is too short, so the honest figure is about 80.
- **Quiz option lengths (characters), key marked \*:**
  1: 86\* 88 85 88 | 2: 84 89 87 85\* | 3: 89 88\* 87 90 | 4: 92 89 85\* 83 | 5: 85 87\* 90 90 | 6: 88 85 87 86\*.
  Spread 3 to 9 in every item; the key is never the longest. Good.
- **Key sequence:** 0,3,1,2,1,3. All four positions, no adjacent repeat. Course: L1 2,3,0,2,1,0; L2 1,3,0,2,1,3; L3 2,0,3,1,0,2; L4 3,1,2,0,2; L5 1,3,2,0,3; L6 0,1,3,1,2,0; L7 3,0,2,1,3,1; L8 3,1,0,2,3,0; L9 1,2,3,2,0,1; L10 3,2,0,1,0,2. Lesson 11 matches none and is not a one-step rotation of lesson 10 or any other. Pass.
- **Absolutes:** items 5 and 6 have the key as the only option with no absolute (P7).
- **Dashes:** no em dash; one en dash, line 539, "2025–2030" inside a title range, which is allowed.
- **Banned words and shapes:** none of the style guide's list found by search.
- **Contractions:** about 38 outside quotations in about 4,800 body words, so about 7.9 per 1,000. Inside the 5 to 8 band.
- **Bold:** 53 spans, about 11 per 1,000 body words; 27 of 93 paragraphs open bold. Fine.
- **Media:** primary sources linked in the body throughout; no images, no SVG, so there was no chart to open. For a closing lesson with no data to draw, that's acceptable.
- **Think-blocks:** 3 predicts, 4 checkpoints plus the exercise's check. The headline predict ("Instead of what?") is a worked example with a gap. Good.
- **Hidden answers:** every self-check hides its answer; no stem states what it asks for.
- **Arithmetic, redone by hand:** 3.7 − 3.0 = 0.7 and 2.7 − 2.2 = 0.5 (a fifth: 0.7/3.7 = 19%, 0.5/2.7 = 19%; 3.0/3.7 = 81%, 2.2/2.7 = 81%, consistent with the quoted "approximately 81 percent"); 400/90 = 4.4 cups, so "about four and a half" is right; quiz 4: 2 × 160 + 90 = 410, "a little over 400" is right; 22 + 19 = 41 low or very low, plus 4 moderate, makes 45, matching lesson 8. All correct.
- **Cloning check** (script counting shared n-grams after stripping front matter and punctuation):
  - Mental Fitness 09: **0 shared 10-grams**. At 7 words, one shared run: "this course's own constructions, labelled where they appear" (Sources boilerplate).
  - Sleep 08: **0 shared 10-grams**. At 7 words, the same boilerplate.
  - So there's no clause-for-clause copying of the text. The **structure** of one section is shared, though: see P12.
- **Repetition with lessons 1 to 10** (same script at 10-grams): apart from the callout (exempt) and the shared DGA and Lane Sources entries, one run: "can pass the first test and start low on the second", verbatim from lesson 8 line 334 (P13). There are also two re-used cases (P5, P13).
- **Practice against `assessments/project-one-claim-you-acted-on.md`:** partly matches. See P3 and P4.

## Verdict by pass

- **Depth:** passes the specificity test almost everywhere: Valtin, the Academies' AI, the three caffeine framings, Lane's anxiety OR, the HCPC and CDR wording. It fails the expert test in two places, and both are the lesson's own central move: the corn-oil worked example answers "instead of what?" with evidence about a different swap (P5), and objective 1's "say what would settle it" is never taught (P2).
- **Pedagogy:** quiz shape is clean. Three problems: the headline example doesn't run the questions the table sets up (P1); the practice is timed at a third of the project's own estimate (P3); and it asks for a sort the project doesn't use (P4). Objective 3 and half of objective 1 are untested (P8).
- **Cold start:** mostly clean. Every earlier term the lesson leans on is taught earlier in this course or in Sleep, Logic, Mental Fitness or Note-Taking: odds ratio in L7; GRADE in L5 to L8; kappa, NOVA and umbrella review in L8; Adequate Intake in L5; hazard, relative risk and CI throughout; "welded" in Note-Taking 8 and Logic 9; direction in Sleep 3; absolute figures in Logic 9. A few small gaps are listed in P15. One quiz distractor relies on a figure the body never gives (P9).
- **Voice and media:** in band on contractions, bold and dashes. A roadmap sentence, one sweeping claim, a few morals and one fragment (P10, P11, P17). The refusal section follows the Mental Fitness and Sleep template move for move (P12).

**Counts: 0 critical, 5 major, 16 minor.**

---

## Findings

### P1. major (Pedagogy, Depth): the "every question at once" example doesn't run the table's questions, and relabels one of them

Line 264: "## A headline, with every question at once". Line 286: "Now the other questions." Then the lesson runs **Who?** (Memory), **Which instrument?** (Focus), **When?** (line 298), **How big?** (line 304), the grade and the advice.

- **"When?" isn't Sleep's question.** The table (line 140) gives Sleep's question as "How much, or when?", illustrated by Liu's eating window: the clock question, amount against timing. At line 298 "When?" means *which came first*, incident against prevalent, which is Sleep **lesson 3**'s direction problem. A reader who did Sleep will read "When?" as the clock question and find it answering a different one. The lesson borrows the label for a different idea.
- **"How big?" isn't one of the six**; it's Logic and Argument lesson 9's absolute-risk question.
- **Two of the table's six are skipped without a word**: Note-Taking's "Where was it measured?" and Mental Fitness's "What did the comparison group get?". Line 286 says "Not every one bites on every claim, and noticing which do is part of the skill", but the lesson never shows the noticing. Quiz item 1's explanation then relies on exactly that reasoning ("a cohort has no assigned control arm, so Mental Fitness's comparison-group question has no arm to ask about here").

**Fix.** Rename line 298's label and add the two missing questions in one short paragraph. Replace "**When?** The abstract calls some outcomes…" with "**Which came first?** This isn't one of the six; it's **Sleep** lesson 3's direction problem, and it bites here. The abstract calls some outcomes…". Keep "**How big?**", with "Logic and Argument's question, not one of the six" added. Then insert before "**The grade.**":

> **Where, and against what?** Two of the six barely bite. Note-Taking's setting question has no single answer for a review pooling studies from many countries, and the abstract doesn't list them. Mental Fitness's comparison-group question has nothing to grip: these are observational studies, so nobody was assigned to a comparison group. The "lower exposure" people are just people who ate less of it, and who they were is the "instead of what?" you've already asked.

That adds about 70 words, under a minute.

### P2. major (Depth, Pedagogy): objective 1's "say what would settle it" is never taught or practised

Objective (lines 6 and 7): "Sort a claim about food … and say what would settle it". The word "settle" appears in the body only as "settled" (lines 155 and 255) and in "A contested finding can't settle it" (line 440). Only the water section has a what-would-settle sentence ("you could look at what healthy people drink and whether those drinking less run short", line 178), and even that isn't labelled as one. The headline section, where a reader most needs it, never says what design would settle the UPF-anxiety link. The exercise doesn't ask for it, and no quiz item tests it. Project step 3 requires it ("what design, in whom, for how long, comparing what with what").

**Fix.** (a) Add to the end of the headline checkpoint answer (after line 325), as a fourth paragraph:

> And what would settle the first half: a cohort that measured diet before anyone had anxiety and counted only new cases, with the comparison diet stated. For cause, a trial, which lesson 1 showed is hard to run on a whole diet for years; Hall's two weeks on a ward is the nearest the course met.

(b) In the exercise, step 4, append: "If it's measurable, add one line on what would settle it: what design, in whom, comparing what with what." (c) Label the water sentence at line 178: "Measurable, and here's what would settle it: look at what healthy people drink…". Adds about 2 minutes, counted in P3's total.

### P3. major (Pedagogy): the exercise timing is a third of the project's own estimate

Line 484: "Take 10 minutes over this. It's step 1 of the course project". The project file says: "half an hour to choose the claim and write down where you met it". Choosing and writing down alone is the exercise's step 1, and the exercise then adds a split, two swap answers, a bin and a list of open questions (plus a what-would-settle line if P2 is taken).

**Fix.** "Take 20 minutes over this." (still under the project's 30, because the project's half hour includes finding the claim's origin more carefully). `minutes:` goes from 70 to about 80, or about 82 with P1 and P2, which is inside the 85 ceiling. Run `npm run minutes --write` after.

### P4. major (Pedagogy): the practice asks for a sort the project never uses, and a swap the project defines differently

Exercise step 4 (line 489): "Put the finding in one of the three bins" (measurable, unmeasurable as stated, false). The project doesn't use the bins anywhere. Its step 3 sorts into **established / contested / value**, the grade the lesson describes at lines 154 to 159. So "the project's first step" trains a classification the project never asks for, and skips the one it marks (Classification criterion).

Exercise step 3 (line 488): "what the claim says replaces the food, and what you actually ate". Project step 4: "once for the evidence (in the study you traced, what was eaten instead, or what was the comparison?) and once for you". Before tracing, "what the claim says" is the only thing a reader can answer, which is fine, but the reader should be told it will be redone against the study.

The exercise's step 1 exclusions and step 2 split match project step 1. "Stop there" matches the project's "week or two".

**Fix.** Step 3: "Ask 'instead of what?' twice: what the claim says replaces the food (the project's step 4 will ask again of the study itself, once you've traced it), and what you actually ate, or would eat, instead. …" Step 4: "Put the finding in one of the three bins. If it's measurable, pencil in the grade you expect (established, contested or a value question); the project's step 3 is where tracing tests that guess. Then list which of the six questions you can't answer yet…". Update the check at line 496 to add "a pencilled grade, marked as a guess".

### P5. major (Depth, expert test): the corn-oil worked example answers "instead of what?" with a different swap's evidence, and replays lesson 6's exercise

Line 165: "Minnesota fed people corn oil … and found no mortality benefit … Cochrane found little or no effect on death from any cause, and Steen possible reductions only in people at high risk. So 'live longer' is contested."

The Cochrane figure (lesson 6, lines 270 to 273) is for **reducing saturated fat** across trials with mixed replacements, not for the corn-oil or PUFA swap. This checkpoint is the lesson's first model of putting "instead of what?" first, and it answers with evidence that pools swaps. That's the error the lesson says the question exists to catch. The swap-specific evidence in the course is Ramsden's pooled linoleic-acid trials (lesson 6 chart: death from any cause 1.07, 0.90 to 1.27) alongside Minnesota.

It also reuses a practised case. Lesson 6's exercise (b), line 742, was "Switching from butter to a corn-oil spread will lower your LDL cholesterol", and its answer (line 760) is almost this checkpoint's last paragraph: "PUFA in place of saturated fat lowers LDL … whether this swap cuts events is contested." That's defect 5b in a checkpoint.

**Fix.** Keep the case, and say that it's revisited on purpose, since that makes it spaced retrieval rather than recall. Replace the second paragraph with:

> Measurable, and it has been measured, but check the evidence is about this swap. Minnesota fed people corn oil in place of animal fats and found no mortality benefit, though most stayed on the diet for months, not years, and Ramsden's pooled linoleic-acid trials put death from any cause at 1.07 (0.90 to 1.27), crossing 1. Cochrane's "little or no effect" on deaths is about cutting saturated fat with mixed replacements, so it's a different claim. On the swap-specific trials, "live longer" is contested.

And open the third paragraph with: "Lesson 6's exercise graded the narrower sentence…". If the fact-check pass confirms that Steen's high-risk finding is also mixed-replacement, drop Steen or qualify it the same way.

### P6. minor (Depth, expert test): the lesson's one "false" verdict rests on a hedged sentence, and the scope quotation is trimmed of its strongest clause

Line 218: "'Tea and coffee don't count' was checked and didn't hold in the studies he cites, which makes it the one false claim in this lesson, on the strength of an abstract." Valtin's words (line 192) are "may indeed be counted". The lesson does state the read level, but it moves from "may" to "false" without saying so.

Line 186: the fence quotation stops at "a largely sedentary existence". Valtin's sentence continues: "precisely the population and conditions that the 'at least' in 8 x 8 refers to" (SOURCES line 6521). That clause is the author's own argument that his limit covers the advice's target population. Dropping it makes the finding look narrower than he says it is (defect 9 in the direction against the lesson's verdict, so less harmful, but still a trim).

**Fix.** Line 186: extend the quotation through "…refers to". Line 218: "'Tea and coffee don't count' goes against both sources: the studies Valtin cites say caffeinated drinks 'may indeed be counted', and the Academies' figure counts every beverage. It's the nearest thing to a false claim in this lesson, on the strength of an abstract and a summary chapter." (Also see P20 on labelling the verdict.)

### P7. minor (Pedagogy): in items 5 and 6 the key is the only option with no absolute

Item 5 distractors: "Nothing important … rule out", "only a NOVA group decides", "Only the size … can name causes but not". Key: no absolute. Item 6 distractors: "any of the underlying facts", "only a few dissenters", "only about sugar and salt". Key: "most disputes".

**Fix** (lengths kept within the item's current range):
- Item 5, option 0: "Little, since 30,000 people is enough to make chance an unlikely reason for it" (80). Option 2: "Whether the drinks are ultra-processed, which a NOVA group would help to decide" (82).
- Item 6, option 1: "He's wrong, since the mainstream view is well supported and dissent is mostly fringe" (86). Also update item 6's explanation, "so is the opposite claim that the dissent is a fringe", which still fits.

### P8. minor (Pedagogy): two items re-use the body's cases, and objective 3 and "what would settle it" are untested

Item 2 is the body's UK "nutritionist" case, and its explanation re-quotes the body's BDA sentence (defect 5b). Item 6's key, "salt raising blood pressure", is the body's misconception text (line 469, "Salt raises blood pressure; the fight is over the low end"). No item tests objective 3 (deciding, and what the decision rests on) or the "settle" half of objective 1.

**Fix.** Move item 2 to the US half, which the body covers but the quiz doesn't:

> q: A wellness site in the US is written by someone signing as "Nutritionist, certified". What can you check, on this lesson's reading?
> - That the title guarantees a graduate degree, since the 2024 rule covers every nutritionist (86)
> - Whether she holds the RD or RDN credential, and what your state's licensing board says (86)
> - Nothing further, as US titles are federal and "certified" confirms the national standard (87)
> - Her HCPC registration, since that register covers nutrition titles on both sides of the Atlantic (98, trim "on both sides of the Atlantic" to "in the US too": 83)
> answer: 1

Replace item 6 with a decision item, for example: "A reader finds that a swap they'd actually make, fish for red meat twice a week, rests on contested evidence. On this lesson's reading, what does a decision to change rest on?" Key: "A premise of theirs about uncertain benefit, written down with what would show it wrong". Build three distractors of matching length: "The evidence alone, since contested still means more likely true than false"; "Nothing yet, as a contested finding can't bear any decision until it's settled"; "Whichever guide is newest, since the latest edition has weighed the dispute for them". Keep the key position at 3 so the sequence is unchanged.

### P9. minor (Cold start, Pedagogy): quiz item 4 relies on an EFSA figure the body never gives

Option 1: "each single drink stays under the 200 mg EFSA gives for one dose". The body (lines 230 to 235) gives only EFSA's daily 400 mg and the pregnancy 200 mg. A reader who has read only the lesson may take "200 mg" for the pregnancy figure. The figure is true (SOURCES line 6230), and the explanation relies on it.

**Fix.** After "about four and a half cups (this course's arithmetic).[5]" at line 235, add: "The page also gives a single-dose figure, 'Single doses of caffeine up to 200mg … do not raise safety concerns for the general healthy adult population', which is about one sitting, not the day." Quote it exactly from SOURCES line 6230, keeping the en dash inside the quotation or eliding it with "…".

### P10. minor (Voice): a roadmap sentence, with a wrong count

Lines 118 and 119: "This last lesson gives you the whole method for checking one, runs it on two claims, says what the course cannot do for you and who can, and ends with a decision that's yours." This is the "In this lesson we will…" shape the style guide bans, and the lesson actually runs three claims (water, caffeine, the headline) plus the corn-oil checkpoint.

**Fix.** Cut it, or replace it with something concrete: "You'll run the whole method on that sentence first, then on caffeine and a headline, and finish with a decision only you can make."

### P11. minor (Depth, Voice): an unsupported generalisation in the opening

Line 116: "That's what a claim about food usually turns out to be." The course never shows that most food claims have nothing behind them, and the lesson's own headline case (line 328: "Nothing in that headline is false, and the review is serious") is the other kind.

**Fix.** "That's one thing a claim about food can turn out to be." Or: "That's the first kind of claim this lesson takes apart. The second has a serious review behind it and goes wrong in the retelling."

### P12. minor (Cloning, structure): the refusal section follows the Mental Fitness and Sleep closers move for move

There are no shared 10-grams, so no text was copied. But lines 331 to 351 run the same four moves in the same order as Mental Fitness 09 (lines 276 to 282) and Sleep 08 (lines 211 to 247):
1. "The question most people bring to a course like this is short." (MF: "The question many readers bring to a course like this one is about themselves." Sleep: "Here's the question most readers came to this course hoping it would answer".)
2. A bold "**This course can't tell you**" (MF has the same bold sentence opening; Sleep has "This course can't tell you." unbolded).
3. "for three reasons it has shown you" (Sleep: "three facts that sit side by side").
4. "The refusal runs both ways: the course will not tell you the way you eat is fine, and it won't tell you it is wrong." (Sleep: "That refusal cuts both ways … It won't give you the reassuring number … And it won't give you the alarming one".)

The heading "What this course cannot tell you" is also MF's "What this course can't tell you". The rest of the lesson's architecture (method section with a course question, worked claims, titles, decision) is its own, and the three misconceptions are course-specific.

**Fix** (cheap): open the section on a case from this course instead of the template question, for example: "Lesson 4's Ornish dieters averaged 3.3 kg lost, and one standard deviation ran from a 4 kg gain to a 10.6 kg loss. Which of them would you be? This course can't tell you, and here's why, in three findings it has shown you." Drop the bold. Rewrite line 350 so it doesn't copy Sleep's "both ways" shape, for example: "So the course won't bless the way you eat, and it won't condemn it." Rename the heading, for example "## What no study here can tell you".

### P13. minor (Repetition): a verbatim sentence and a re-told point from lesson 8

Lines 309 and 310: "how a consistent observational association can pass the first test and start low on the second". Lesson 8 line 333 says "A big, consistent association from cohorts can pass the first test and start low on the second". Lane's double grading ("convincing" and "low"/"very low" on one finding) was lesson 8's section "Convincing and very low, at once" and also appears in lesson 8's quiz (line 57). Lesson 11 uses a new Lane finding (anxiety, prevalent), which is good, but the grade paragraph re-tells lesson 8's point in lesson 8's words.

**Fix.** Line 307 onward: "**The grade.** You've met this pair in lesson 8: 'convincing' on the authors' scheme, 'low' on GRADE. Across the whole review only four of the 45 analyses reached moderate; the other 41 were low or very low.[9]" Cut the last sentence (the verbatim one).

### P14. minor (Connections): "This lesson used all ten before it" overstates

Line 503. Lesson 3 (energy balance) isn't used anywhere in the body; the only energy content is lesson 4's spread. Lesson 9's guides appear only as "which the project asks you to read", and lesson 10 appears only as the "no" against "can't tell" difference, which the body never names. Its nearest point is Valtin's "prove a negative", which isn't marked as lesson 10's.

**Fix.** "This lesson drew on most of the ten before it: …", and drop "lessons 3 and 4's energy, diets and spread" in favour of "lesson 4's diets and spread". Or tie the Valtin line to lesson 10 in the body: "It is not shown false for everyone, lesson 10's difference between 'no' and 'can't tell', and Valtin says why…".

### P15. minor (Cold start): four small gaps

- Line 400: "Get help from 111". Readers outside the UK won't know it. Add "(NHS 111, the UK's non-urgent medical line)" outside the quotation.
- Line 312: "the welded second half" is its first use in this lesson, with no gloss. The term comes from Note-Taking 8 and Logic 9, but a reader needs the word tied back: "the welded second half, the advice joined to the finding by 'time to', in Note-Taking's word".
- Line 275: "(odds ratio 1.48, 1.37 to 1.59; low)". The interval isn't named. Add after the definition sentence: "The 1.37 to 1.59 is its 95 percent confidence interval, and 'low' is the GRADE rating."
- Line 138 (table): "A food questionnaire's calories matched the body's at 0.21" reads as though they matched. It's a correlation, and a poor one (lesson 2). Fix: "A food questionnaire's calories correlated with the body's at only 0.21 (lesson 2)".

### P16. minor (Pedagogy): the caffeine section grades outside the scheme and doesn't name its question

Lines 254 and 255: "So the honest grade for 200 mg in pregnancy is a number three bodies use, not a settled line." The lesson has just set up three grades, and this is none of them. Line 259 (checkpoint): "Ask 'for whom?' first." That isn't one of the six either, and it's Memory's sample question applied to a guideline. Neither "instead of what?" nor the sort is applied to caffeine, so the section sits beside the method rather than inside it.

**Fix.** Line 254: "So, on the lesson's grades, 'harm begins above 200 mg' is contested, and 'three bodies use 200 mg' is established: one number, two claims." Line 259: "Ask Memory's question first, who the finding is about. EFSA's own sentence excludes her…".

### P17. minor (Voice): a fragment, two morals, one contradiction in the worked case

- Line 154, a fragment: "Then, for a measurable claim about a known swap, the grade that lessons 6 to 8 used, the institute's three kinds of claim." Rewrite: "Then comes the grade lessons 6 to 8 used, for a measurable claim about a known swap: the institute's three kinds of claim."
- Lines 397 and 398: "The claim didn't change; the reader did." and line 390: "Here weight loss is itself the warning." These are one-line morals closing consecutive items. Cut the first, or fold it into the previous sentence: "…is a change to talk over first for someone on warfarin, though the claim is the same."
- Line 453: "Keeping a water habit deliberately is also fine, and costs nothing if he likes it." But line 449 says he "finds the water a chore". Fix: "…also fine if he'd rather, though he's told us it's a chore, which is a cost."

### P18. minor (Depth, outline): detox dropped silently

The outline's lesson 11 plan: '"detox" (whatever F and D support; if nothing, say the course has no source and drop it)'. SOURCES has nothing on detox, and the lesson drops it without the sentence.

**Fix.** One sentence, for example at the end of the water section: "'Detox' diets and drinks are the other claim people ask about most, and this course read no source on them, so it says nothing about them either way."

### P19. minor (Depth): "a kilogram or two" overstates lesson 4's gap

Line 337: "Lesson 4's diet trials found averages a kilogram or two apart". Lesson 4 line 219: "The biggest gap between any two diets' averages is 1.2 kg". **Fix:** "averages about a kilogram apart, 1.2 kg at most".

### P20. minor (Defect 20): two of the course's verdicts are labelled only in the footnote

Footnote 16 lists "the verdicts on the corn oil, water and headline examples" as the course's own. In the body, the headline gloss is labelled (line 298 "In this course's gloss", line 302), but the corn-oil verdict ("So 'live longer' is contested", line 165) and "**The verdict, half by half.**" (line 214) carry no label and no marker.

**Fix.** Line 165: "…is contested, on this course's reading.[16]" Line 214: "**The verdict, half by half**, in this course's reading.[16]"

### P21. minor (Voice): one textbook sentence

Line 132: "Each course then added a question for measurable claims. Here are all six, each with the place it did its work in this course." It reads as a caption. **Fix:** "Each course since has added one question. Here they are, with the place each one bit in this course."
