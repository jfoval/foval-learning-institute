# Reviews: lesson 09, "Does active listening work?"

## 2026-09-26 — Lesson 09 — Stage 4, Tier B, Reviewer P

**Reviewer P:** passes 4, 5 and 6 (depth and pedagogy, cold start, voice and media), fresh context,
no edits. Read against the Tier B brief, review-lesson passes 1/4/5/6, standards Parts 1 and 4, the
style guide, the drafter's defect list, OUTLINE lesson 9 and lessons 03, 04, 07 and 08.

**Checks run.** `npm run minutes`: 90 measured, 90 stated (the ceiling). `npm run taught`: 21 courses,
238 lessons; r is taught in Time Management 8, standardised effects in Mental Fitness 2, the four
readings of a correlation in Logic 5, "one group's programme" in this course's lesson 1. Quiz option
lengths by script: spreads 5, 4, 6, 5, 1, 0 characters; the key is never the sole longest. **Actual
keys are 3,2,3,1,2,0**, not the notes' "3,2,0,1,3,1": all four positions, no adjacent repeat, no match
with lesson 08 (2,0,3,0,3,1). No em dashes; ten unspaced en dashes, all page ranges in Sources, which
is this course's settled convention (lessons 01 to 08 do the same). No banned word. Block bodies:
none collapses (every multi-paragraph body has blank lines; lists open after a blank line). SVG
opened and rendered headless (Chrome via playwright) in light and dark at 375 and 720 px: no label
outside the viewBox, every row named in text, both themes legible; at 375 px the 15-unit labels
render at about 12 px, which is the course's normal for a 420 viewBox. Positions redone by hand at
x = 60 + 640r: .39 → 309.6, .36 → 290.4, .43 → 335.2, .21 → 194.4, .13 → 143.2, .29 → 245.6; ticks 0,
.2, .4 at 60, 188, 316. All correct. **Sums redone by hand:** 100 + 80 = 180; 41 + 130 = 171 pairs;
15 minutes = 900 s; 46% as "nearly half"; three quarters of 664; R² .14 as "about 14%". No
arithmetic error found.

### P1. Major: the exercise's "five questions this lesson used" are not the five the lesson used

Line 157: "five questions in order: who was studied, what was compared, how it was measured, what
was found, and what the result can and can't support." Line 606: "Write the five questions this
lesson used: what was taught, compared with what, measured how, rated by whom, and replicated
where." The headline trace (lines 320 to 327) uses a third sequence (find the study, who, the
comparison, supports, doesn't). A reader told to write down "the five questions this lesson used"
will write line 157's and then fail the model answer.
**Fix:** make one list and use it three times. Either change line 157 to the exercise's five (what
was tested, compared with what, measured how, rated by whom, replicated where) and lay Weger 2010's
labels out under them, or change the exercise to "Use the five questions from 'An experiment, read
as a design', adding one: rated by whom?" and adjust the model answer. The trace can stay shorter but
should say it uses the first three of the same list.

### P2. Major: the Weger 2010 predict block asks for a result lesson 8 already gave

Lesson 8, lines 424 to 429, tells the reader that the paraphrases were associated with "the listener
seeming more likeable ... but not with the students feeling more understood". Lesson 9's predict at
line 177 then asks exactly that, and the first `If you predicted` line assumes the reader didn't know.
Quiz item 6 then grades the same result. This re-teaches lesson 8 and turns the lesson's first
predict into recall.
**Fix:** say so and build on it: "Lesson 8 gave you this experiment's headline from its abstract:
more likeable, not more understood. The full text lets you ask why." Replace the predict with one
lesson 8 couldn't answer, e.g. "The interviewers kept the same eye contact, lean and relaxation in
both conditions. Why would the authors do that, and what does it let the result say about Headlee's
case?" (answer: it isolates the words; the authors' own first explanation for the null was that
people "may attend more to nonverbal than verbal cues", which were the same in both). Keep the r = .15
and the "their first hypothesis" point in the answer.

### P3. Major: checkpoint model answer item 4 gives a difference that cannot explain the split

Line 234: "4. The comparison. 2010 had only bare acknowledgement; 2014 also had advice, which may have
made active listening look better on understanding by contrast." The conditions are separate groups:
adding an advice group cannot change how active listening compares with acknowledgement, and in 2014
active listening beat bare acknowledgement on feeling understood too (line 217). The comparison
parallel to 2010 exists in 2014 and still came out the other way, so the comparison is precisely the
difference that is *not* a candidate. The item teaches a between-groups error in the lesson whose
subject is what the comparison group got.
**Fix:** replace item 4 with a valid difference, e.g. "4. The listeners. 2010 had three interviewers
running a scripted interview; 2014 had ten confederates in a turn-taking conversation." Better still,
add a closing line that uses the error as teaching: "One difference that can't explain it: the
comparison. Both studies had a bare-acknowledgement group, and in 2014 active listening beat it on
feeling understood as well."

### P4. Moderate: the headline trace's step 1 skips a nearer match the lesson itself gave

Line 320: "The nearest match this course read is the 112-student experiment from the *Harvard
Business Review* article". Line 276 says the 2017 PSPB experiments found high-quality listening
"reduced speakers' social anxiety", a closer match to "less anxious". A reader who remembers
line 276 will stall at step 1.
**Fix:** "Two things this course read match it: the 2017 experiments, known only from an abstract
that doesn't say what the listeners were compared with, and the 112-student experiment lesson 4
described, whose comparison we do know. Trace the second." That also makes the step teach something
(prefer the study whose design you can see).

### P5. Moderate: quiz option shapes give away items 3 and 4

- **Item 4:** the key ("The instruction didn't change what it aimed at, so the test says little
  about the idea") is the only option with no absolute; the others carry "no difference", "only
  works" and "must have been". Defect 5 wants at least two options free of absolutes.
  **Fix:** soften two distractors, e.g. "Listening in a disagreement is better judged by an outside
  observer than by partners" and "The partners were probably rating their own views rather than
  the listening they got", keeping lengths within 15 characters of 85.
- **Item 3:** the key is the only hedged option ("could inflate"); the other three are flat
  assertions. **Fix:** hedge one distractor, e.g. "Nurses who listen well probably raise patients'
  ratings of their care by around 30 percent".

### P6. Moderate: quiz item 6's key says "one study" where the lesson's own explanation gives two

Key: "In one study of student interviews it raised liking a little; dates weren't studied". The
explanation then says "in the 2014 study active listening beat bare acknowledgement on liking",
and lines 218 to 219 say the same. The distractor "two experiments found the same effect" is
therefore partly true and the key partly false, so a careful reader is penalised for reading the
2014 section.
**Fix:** key "Two student studies found small liking gains over bare replies; dates weren't
studied" (85 characters against the others' 83), and make the
distractor's error the word "proven": "It's proven to raise liking in any setting, since two
experiments both found it".

### P7. Minor: items 2, 4 and 5 re-dress the body's own designs

Item 2 is the HBR texting design against Weger 2010 ("'right' and 'OK' with the same eye
contact"); item 4 is the four-lab design with its failed manipulation check, almost step for step;
item 5's key ("listening training, soothing training, both, or neither") is line 567's sentence.
With item 6 recalling Weger 2010, four of six test recognition of the page (defect 5b). Items 1 and
3 are the model. **Fix:** move at least two to new settings: item 4 could be a study telling
teachers to "praise effort" whose teachers report praising no more than controls; item 5 could ask
about a different intervention (say, a parenting class) where the reader must name the dismantling
design unprompted by the lesson's wording.

### P8. Minor: the Conflict Blueprint is not connected to lesson 8's rule, which it restates

Line 559: "Postpone persuasion until each person can state their partner's position to their
partner's satisfaction." Lesson 8 (lines 181 to 186, and its Connections at 491) taught Rogers and
Farson's ground rule, "accurate enough to satisfy the speaker", and Rapoport's rule. The
Gottman-Rapoport Blueprint carries Rapoport's name. This is the lesson's best chance to build on
lesson 8, and it passes it by. **Fix:** one sentence after the quotation: "That is Rogers and
Farson's ground rule from lesson 8, with the same judge: the partner." (Reviewer F to confirm
nothing more is claimed about the Blueprint's lineage than the name on it.)

### P9. Minor: the chart compares two numbers that differ in two ways at once

The top row is all outcomes, all effects (.39); the bottom row is job performance only,
different-source effects only (.21). A reader comparing the dots will read the drop as the
same-source correction, when half of it may be the change of outcome; the like-for-like pair is
performance .36 against .21, which the caption gives only in words. The outline asked for .39 and
.21 and the drafter kept them faithfully, so this is a teaching improvement, not an error.
**Fix:** add a middle row, "Job performance, all effects", at .36 (x = 290.4), with its interval if
Kluger et al. print one (Reviewer F), or as a bare point marked "interval not read" if not; move the
axis and bottom labels down 44 units and the viewBox to 420 by 284. Optionally add a tick and label
at .5 (x = 380), where the axis already ends.

### P10. Minor: cold-start clauses

- **d = 0.98** (line 378) appears once with no gloss. Mental Fitness 2 taught standardised
  effects in standard deviations but not the letter. **Fix:** "(d = 0.98, a gap of about one
  standard deviation, the kind of effect size Mental Fitness lesson 2 taught you to read)".
- **"manipulation check"** is used in quiz item 4's explanation ("When the manipulation check shows
  the instruction didn't take") but never named in the body. **Fix:** line 357, "A check built into
  the study, what researchers call a manipulation check, explains part of it."
- **"95% interval"** (chart and caption) is not glossed. **Fix:** in the caption, "(the range the
  true average probably lies in, .36 to .43)".
- **r first appears at line 179** ("r = .15"), 220 lines before the correlation is defined at 401.
  Time Management 8 taught r, so this is survivable; better, point back at line 401: "A
  correlation, which Time Management lesson 8 introduced as r, says how closely ..." and cut the
  re-definition to one sentence.
- **"polarization outcomes"** in the four-lab quotation (line 352) has no gloss. One clause: "(how
  far apart and how hostile the two sides felt)".

### P11. Minor: the checkpoint on the consultant's slide invites an answer the model rejects

Line 458: "A meta-analysis of 400,000 observations proves ...". The real figure is 155,143
participants (line 392), so a reader who names the wrong number as one of the "two things wrong"
gets no credit from the model. **Fix:** use "155,000 people" in the slide, so the reader works on the
reasoning, or add a fifth model item: "The number is wrong too: 155,143 participants."

### P12. Minor: voice

- Line 318: "Here is the trace, as far as it goes before it's your turn." (defect 7, "Here is"
  opener). **Rewrite:** "The trace runs three steps before it's your turn."
- Line 382: "It is worth noticing who ran this test." (the "it's worth noting" shape).
  **Rewrite:** "Notice who ran this test."
- Lines 124 to 125: "This lesson takes the main studies in turn, reads each one as a design, and
  ends with the one setting where the argument has been loudest" (the "In this lesson, we will"
  shape). **Rewrite:** cut it, or "The studies come one at a time, each read as a design, and the
  loudest argument, about couples who are fighting, comes last." Cutting is better; the headings
  carry the plan.
- Line 470: "This is **contested**: serious researchers read the same evidence differently, and it
  isn't settled." The last clause restates "contested". **Rewrite:** "This is **contested**:
  serious researchers read the same evidence differently."
- Lines 564 to 565: "Whether it counts as convergence is a reading, and each side could make it."
  Unclear what "make it" refers to. **Rewrite:** "Whether that counts as the two sides coming
  together is a matter of reading, and either side could claim it."
- Line 427: "That caution is the right one to keep." A one-line moral closing the paragraph, and it
  sides with one of the authors' two sentences in the course's voice. **Rewrite:** cut it; the
  quotation already ends the paragraph well.
- Lines 640 to 641: "the 'one group's programme' label from lessons 4 and 6, fits" has a stray comma,
  a line break mid-paragraph, and the label was introduced in lesson 1. **Rewrite:** "the 'one
  group's programme' label from lesson 1 fits the Itzchakov and Kluger work throughout."

### P13. Padding at the 90-minute ceiling: what could go

Nothing is over, but at the ceiling, these are the candidates, in order:
1. **The "Stance or words?" exercise and "For your journal" ask the same thing** (restate, then
   judge whether words or stance did the work). Keep the exercise and cut the journal paragraph to
   one sentence pointing at it, or the reverse.
2. **Misconceptions that repeat a block verbatim:** "Happy couples use active listening" repeats the
   4-in-900 predict; "Paraphrasing makes people feel understood" repeats the 2010/2014 checkpoint.
   One line each would do.
3. **Go deeper's read-level sentences** ("This course read the full text") duplicate Sources.
4. Line 166, the debrief sentence ("That cover story was the researchers' own; students were
   debriefed afterwards"), carries nothing the lesson uses.

### P14. Note: drafter's notes out of date

The notes give keys "3,2,0,1,3,1 (D C A B D B)"; the file's keys are 3,2,3,1,2,0. Both pass every
check; the notes should be corrected so the fixer's sequence check uses the real keys.

**Depth verdict (pass 1 and 4, apart from the above):** the specificity and transfer tests pass
throughout; every study carries its design, comparison and population; the "what did the other
group get" thread is the right organising idea and is carried consistently; objectives are each
tested (1 by item 2; 2 by items 2 and 6; 3 by items 3 and 4; 4 by item 5). Think-blocks: three
predicts, four checkpoints, two exercises, one worked example with a gap. The four-lab section is
the lesson's strongest: it teaches reading a failed manipulation without defending the programme.

## 2026-09-26 — Lesson 09 — Stage 4, Tier B, Reviewer F

**Reviewer F:** passes 2 and 3 (facts, neutrality, safety), fresh context, no edits. Read against the
Tier B brief (lesson 9 bullet), review-lesson passes 2 and 3, standards Parts 2 and 3, the drafter's
defect list, OUTLINE lesson 9, SOURCES Part C §§2 to 4 and "Gate closures, lesson 09", and the
drafter's notes.

**Primaries downloaded today** (curl, generic browser User-Agent, no personal data) and
string-matched: Weger 2010 and Weger 2014 full text (Internet Archive captures of the Taylor and
Francis full-text pages, 2023-10-29 and 2025-07-02); Kluger et al. 2024 full text (Internet Archive
capture of the Springer page, 2025-12-30); DeMarree et al. 2026 preprint v2 (osf.io/download);
Bodie et al. 2015 and Itzchakov and Bodie 2026 (grahambodie.com); the HBR article (authors' hosted
PDF); the Gottman-Rapoport Blueprint (gottman.com); Gottman et al. 1998 (the johngottman.net scan,
rendered at 200 dpi and OCR'd with tesseract); and the abstracts of Stanley et al. 2000, the Gottman
et al. 2000 reply, the two PSPB papers and Itzchakov et al. 2024 [14] through the OpenAlex API.
`node scripts/quotes.mjs conversation-and-listening`: 142 checked, 0 missing.

**Every quotation in the lesson matches its primary**, including all three Gottman quotations with
their hedges ("we are led to the hypothesis that"; "If we are right"), the four DeMarree strings, the
five Kluger strings, both Weger 2010 explanations and its conclusion, Weger 2014's four strings and
its Markman report, Bodie's "not a panacea", Itzchakov and Bodie's "risky intervention", the PSPB 2017
abstract's "merely providing high quality listening", Stanley et al.'s two abstract strings, and the
Blueprint's "Postpone persuasion" sentence. No recantation is claimed. Kluger's r̄ is never given as a
cause or a percentage.

**Numbers redone by hand.** Weger 2010: 180 = 100 + 80, mean age 18.5, t(178) = 2.00, r = .15;
feeling understood p = .25, satisfaction p = .48. Weger 2014: 115, ten of twelve confederates, M = 4.9
minutes, the die, the three conditions and the prompts. Bodie: 41 + 130 = 171 dyads, 8 listeners (7
women), final year, R² = .14 and .13 (Table 5), paraphrasing about half of the .14. Four-lab: 330 +
354 + 369 + 354 = 1,407; 107 pilot dyads; d = 0.98 (M 6.09 against 4.91). Kluger: 664 / 144 / 122 /
155,143; 46% US; r̄ .39 [.36, .43], relationship .51, performance .36; same source .43 against
different .26; performance by different sources or methods .21 [.13, .29]; 30 experimental effects;
"three quarters of the effect sizes" were same method and same source (Kluger's own words, which
supports the lesson's description). SVG at x = 60 + 640r: 309.6, 290.4, 335.2, 194.4, 143.2, 245.6;
ticks 60, 188, 316. All correct. Gottman: 130 couples, Puget Sound, newspaper adverts, first marriage,
15 minutes, 3 to 6 years, 17 divorces, "approximately 4 seconds out of 900". HBR: 112 and 114
undergraduates, 12 minutes.

**What each "active listening" condition contained and what it was set against** (brief item):
correct for Weger 2010 (paraphrase against "O.K." / "That's great", nonverbal held constant), Weger
2014 (paraphrase plus requests to elaborate, against advice and back-channels), Bodie (a regression
across all 171 dyads, not a trained-against-untrained comparison), DeMarree (learning goal against
persuasion goal; pilot against a nonverbal-only listener) and Gottman (any warm response to
negativity). **Not correct for the HBR 114-student study** (F1).

**Read levels** in Sources match SOURCES and the gate closure line by line: Weger 2010, 2014, Kluger
and DeMarree full text; PSPB 2017 and 2018, Stanley 2000, the 2000 reply and [14] abstract only;
HBR the article's description; Bodie, Itzchakov and Bodie, the Blueprint full text; Gottman OCR
checked against the image. The two abstract-only PSPB papers are not stretched past their abstracts,
except in the generalisation in F1.

### Findings

**F1. Major (fact and neutrality; the organising claim).** "In the programme's studies that this
course could read in any detail, the comparison was a listener told to be distracted, or a moderate
one, which is a strong contrast.[6]" (and "A texting listener is a low bar"; and in "So does it
work?": "the positive programme mostly compares a whole stance of attention with distraction").
*Evidence:* the HBR article's second study describes the moderate listener as "another undergraduate
at the business school who was instructed to listen as he or she usually does", and reports that
"speakers who talked to a good listener saw both strengths and weaknesses more than those in the
other conditions", i.e. the good listener beat the ordinary one too. An ordinary listener is the
opposite of a strong contrast. The same passage says the good listeners were asked "to use all their
listening skills, such as asking questions and reflecting", so technique was part of the stance. And
the abstract of [14], which the lesson cites, says "Four experiments manipulated poor, moderate, and
high-quality listening"; the PSPB abstracts say only that listening was manipulated "in different
ways" and "in a variety of ways", not by distraction. So the reconciliation that carries the whole
lesson ("they mostly answer different questions") generalises from one magazine-described study and
mis-describes the other. An Itzchakov and Kluger programme researcher would reject it at once. *Fix:*
at the "comparison" paragraph: "The comparisons in the two studies the magazine describes were a
listener visibly texting and, in the second, also an ordinary one: an undergraduate told to listen as
usual. As the article reports it, the trained listeners, who asked questions and reflected, beat both
on two-sided thinking. [14]'s abstract shows the programme has used poor, moderate and high-quality
conditions more generally." Keep "a texting listener is a low bar" for the 112-student study only.
Re-word the reconciliation to what the sources support: much of the programme's evidence sets
trained listeners, who combine full attention with technique, against distracted or ordinary
listening, so it can't say which part does the work; the sceptical studies hold attention steady and
vary one technique. The headline checkpoint is fine as it stands (it is about the 112-student study).

**F2. Major (neutrality: the PREP author's Turing test).** In "The reply from the couples-education
side", PREP's side is only a critique of Gottman. It has no positive case, though one is available in
a source the course read in full. *Evidence:* Weger 2010 reports that "Stanley, Bradbury, and Markman
(2000) argue that active listening plays an important role in communication skills training courses
aimed at improving marital functioning. A review of studies suggests that measurable improvements in
marital functioning in communication result from communication skills training", and adds, fairly to
Gottman, "However, improvements in marital functioning tied specifically to active listening do not
dominate the literature." A PREP author would name this first. *Fix:* add one or two sentences citing
[1] as reporting it: Stanley and colleagues argued that communication-skills programmes produce
measurable improvements; Weger and colleagues add that improvements tied specifically to active
listening don't dominate that literature. Both halves, so neither side gets a free point.

**F3. Major (a claim beyond the abstract; defect 10).** "Their deeper point, in its strongest form, is
that a study of what happy couples do naturally cannot test a technique designed for when things go
wrong. Weger's 2014 paper reports Markman and colleagues making exactly this argument". *Evidence:*
the course read only Stanley et al.'s abstract, which says nothing about this. The gate closure
itself found that SOURCES' secondary attribution of this point (to Kim et al.) was wrong. The Markman
et al. 2001 report in Weger 2014 is from a different work, and says the speaker-listener technique
"feels unnatural to couples because it is designed to help couples avoid natural conversation
pitfalls". That is a claim about the technique being unnatural by design. It is not an argument that
Gottman's observational study can't test it, so "exactly this argument" overstates what it says.
*Fix:* "A point made from their side, though not in the abstract this course read, is that ...
Weger's 2014 paper reports Markman and colleagues writing elsewhere that the technique 'feels
unnatural ...'; on that view ...". Drop "Their deeper point" and "exactly". The emergency-brake
analogy is fair to that view, but it is the course's, so say so ("to put it in this course's
terms").

**F4. Moderate (selection; defect 14).** "And experiments were rare: 30 of the 664 effects came from
experimental designs". *Evidence:* Kluger et al.'s H8a result is that "the correlation coefficient
between perceived listening and work outcomes in experimental designs, r̄ = 0.39, is similar to
correlational designs, r̄ = 0.40". That is the broad side's strongest reply to "it's all
correlational", and the lesson leaves it out. It also leaves out a finding that favours the sceptics:
predictive designs .27 against concurrent .42. *Fix:* one sentence giving both, then "rare" and the
single performance experiment as now.

**F5. Moderate (fact: attribution across studies).** "Put the three together and the technique has a
consistent profile in these students: small effects, some outcomes and not others, and nothing for
solving the problem." and "do nothing for solving problems.[1][2][3]". *Evidence:* only Bodie et al.
measured problem-solving utility. Weger 2010 and 2014 measured feeling understood, social attraction
and satisfaction. *Fix:* "and, in the one study that measured it, nothing for solving the problem";
move the problem-solving clause's citation to [3] alone. (Also "compared with ordinary alternatives"
fits Weger but not Bodie's regression; "isolated as a technique" alone is accurate.)

**F6. Moderate (citation).** "What would settle it, as the course's research framed it, is experiments
that cross attention with technique ... with later outcomes measured.[7]". *Evidence:* Itzchakov and
Bodie's "Future Research" section recommends process-tracing, eye-tracking, physiological data and
manipulating a listener's power. It says researchers should "move beyond the confines of static
self-report measures and binary listening manipulations", but proposes no crossed attention-by-
technique design. *Fix:* drop [7] from that sentence, or split it: "The review calls for moving
beyond 'binary listening manipulations'.[7] The design that would settle this question, as this
course reads it, is ...".

**F7. Moderate (neutrality: contested presented as agreed).** Quiz item 5's explanation says:
"Counting what happy couples do naturally is the design both sides agree can't test training" and "is
what the sources name as the missing evidence". *Evidence:* Gottman et al. 1998 drew a therapy
recommendation from exactly that design ("marital therapy needs ... to abandon the active listening
model"), and the reply abstract concedes nothing on it. So "both sides agree" takes the PREP side of
the dispute. No read source names a dismantling trial as the missing evidence: SOURCES lists "any RCT
dismantling couples' listening training" as unread, and the body's own sentence ("What would settle
the question is randomised trials ...") is unlabelled. *Fix:* "is the design whose reach is the heart
of the dispute"; "is what this course's reading names as the missing evidence"; and in the body, "As
this course reads it, what would settle the question is ...".

**F8. Moderate (omission a PREP author would insist on).** "a study of 130 newlywed couples ... 17 had
divorced". The results are then given as though they came from all 130 couples. *Evidence:* "We then
took 20 comparable couples with high marital satisfaction and 20 with low marital satisfaction as
comparison groups". The process analyses compare 17 divorced couples with 40 extreme-group stable
couples. That is part of what Stanley et al.'s "nonrandom selection" and failure-to-control concerns
are about. *Fix:* one clause: "and compared the 17 who divorced with the 20 happiest and 20 unhappiest
of the couples who stayed together".

**F9. Minor (Gottman-tradition Turing test).** In "What has happened since", the Blueprint is
described by its listener rules and its breaks only. *Evidence:* its Speaker rules are "No blaming,
no 'you' statements" and "Only use 'I statements' about a specific situation". That is the softened,
gentle start-up the 1998 paper prescribed. A Gottman-tradition researcher would say the Blueprint
carries out the 1998 recommendation as much as it borrows restating. *Fix:* add "and the speaker is
told not to blame, which is the gentle start-up the 1998 paper recommended". The "each side could
make it" sentence then reads true both ways.

**F10. Minor (fact).** "in its workplace studies, listening is measured by how listened-to the speaker
felt.[4][5][9]". *Evidence:* [9] is a meta-analysis of 122 papers, mostly by other researchers
(salespeople, healthcare staff, managers), not the programme's own workplace studies. *Fix:* "and in a
meta-analysis of workplace studies that Kluger led, listening is measured by how listened-to the
speaker felt."

**F11. Minor (date).** "In 2023, Kluger and a team of colleagues published" contradicts Sources "(2024)"
and the chart caption "2024". *Fix:* "published online in 2023 and in print in 2024", or 2024
throughout.

**F12. Minor (trimmed quotation).** "'First, it needs to abandon the active listening model in favor
of a model of increased softening and gentleness in start-up, de-escalating', with more soothing."
*Evidence:* the sentence continues "changing the balance of power in favor of the husband's increased
acceptance of influence from his wife, and increasing physiological soothing (by self and partner)",
and a "Second" item follows. The cut is not directional, but the quotation opens "two things. First"
and never gives the second. *Fix:* end the quotation at "First, it needs to abandon the active
listening model" and paraphrase the rest, including acceptance of influence. Or say "two things",
then give both in paraphrase.

**F13. Minor (fact).** "So they watched every tape of the stable, happy couples again." *Evidence:* the
qualitative analyses covered "the data from this study and from another longitudinal cohort we have
been following for 13 years. We examined in detail every videotape and transcript of every stable,
happy couple." *Fix:* "So they went back through every tape and transcript of the stable, happy
couples, in this study and in an older one".

**F14. Minor (uncited claim; drafter's item 8).** "Markman and Stanley are among the developers of
PREP". *Evidence:* no read source says so in terms. Weger 2014 cites Stanley, Markman and Blumberg
(1997) and Markman, Stanley and Blumberg (2001) for the speaker-listener technique and for adapting
active listening "to regulate negativity in marital conflict". *Fix:* "Markman and Stanley are
authors of PREP, a couples-education programme whose speaker-listener exercise Weger's 2014 paper
cites to them[2]", or soften to SOURCES' "authors of a couples-education programme".

**F15. Minor (a reading stated as fact).** Opening: "The studies ... have meant different things by it
and compared it with different alternatives, and that is most of why they seem to disagree." The
later sections label this "this course's reading". *Fix:* "and, as this course reads them, that is
most of why they seem to disagree."

**F16. Minor (fact).** Weger 2014: "Nonverbal involvement was held moderate in all three, and raters
who watched the videos confirmed that the confederates did what their condition asked." *Evidence:*
confederates were "instructed to maintain a moderate level of nonverbal involvement". The raters
checked paraphrasing, advice and back-channels on 107 of the videos, not nonverbal involvement, and
found the advice confederates gave somewhat fewer back-channels than the acknowledgement ones. *Fix:*
"Confederates were told to keep nonverbal involvement moderate in all three, and raters who watched
107 of the videos confirmed they paraphrased or advised as their condition asked."

**F17. Minor (qualifier; defect 9, mild).** "they concluded that active listening in first meetings is
'a low-risk response strategy with some potential dyadic rewards'". *Evidence:* the sentence reads
"It appears that active listening, at least in terms of these outcomes, is a low-risk response
strategy ... compared to responding with advice and minimal feedback." *Fix:* "concluded that, at
least on these outcomes, active listening in first meetings is ...".

**F18. Minor (loaded word).** "A listener forbidden to speak is another low bar". *Evidence:* the pilot's
control listeners were "asked to listen attentively without verbally responding". *Fix:* "A listener
told not to reply in words is another low bar".

**F19. Minor (precision).** Consultant checkpoint, item 2: ".21 when listening and performance are
rated by different sources". *Evidence:* the .21 is "different sources, different methods, or both".
*Fix:* "by different sources or methods", as in the chart.

### Neutrality audit (standards 3.5)

**Classification.** Contested 1 (does active listening help?) and contested 2 (in couples' conflict)
are each labelled **contested** in the text. Kluger's figures are given as correlations. The "four
things called active listening" list is labelled the course's reading. Established claims (what a
correlation is, what a failed manipulation check means) are stated plainly, correctly. Misclassified:
the opening "most of why" (F15), the settling trial (F7), the reconciliation's premise (F1).

**Counts, contested 1 (whole lesson, not just "So does it work?").** Narrow side: [1], [2], [3], [7]:
three full design readings, about 9 quotations, two predicts and a checkpoint. Broad side: [4], [5],
[6], [9], [14], plus the four-lab paper's correlational paths: abstracts, the magazine, and a
meta-analysis given with more caveat quotations (4) than claim quotations (2). Explained against
quoted: both are explained. The narrow studies are read as designs; the broad programme is described
at abstract level (honestly labelled), then "low bar" twice, a traced-headline exercise, a failed
manipulation and the same-source caveat. The tilt is carried by F1 (a mis-described comparison) and
F4 (the experimental-equals-correlational result left out). With those fixed, the architecture is
fair: each side gets its best case in its own terms. Last word in the section: the settling
experiment, which is neutral (fix its citation, F6). Misconceptions: errors from each side
("paraphrasing makes people feel understood", ".39 means 39%", "advice is always worse" against
"active listening doesn't work", "the four-lab study shows it's pointless"). Balanced.

**Counts, contested 2.** Gottman: [10] cited about seven times, three quotations with hedges kept,
the definition, the 4 seconds, the re-watch, the divorce pattern and the conceptual leap, all
explained. Reply [12] fairly reported as unread beyond its abstract. PREP: [11] once, with two
quotations and the concerns listed; [2] once; the course's analogy. PREP is quoted and argued
against Gottman but never given its own evidence (F2), and its "deeper point" is attributed without a
source (F3). Last word: the settling trial, neutral, but unlabelled (F7). Misconceptions: "happy
couples use active listening" (the popular active-listening error) against "Gottman proved it harms"
and "Gottman took it back" (errors that flatter each side in turn). Balanced.

**Ideological Turing test.**
- *An Itzchakov and Kluger programme researcher:* fails on F1 (they would point to the moderate
  conditions and to [14]'s poor/moderate/high design) and on F4. Otherwise their case is stated in
  their terms; the four-lab section is scrupulous and does not overcorrect into defending them. It
  says what the authors say, including their "difficult to induce".
- *A sceptical communication scholar (Bodie before the joint review):* passes. The small effects, the
  no-panacea line, the ill-defined construct and the risky-intervention quotation are all present.
- *A Gottman-tradition couples researcher:* passes on the 1998 paper (hedges kept, no recantation,
  "each side could make it"). Weak on the Blueprint (F9), and on quiz 5's "both sides agree" (F7).
- *A PREP author:* fails on F2 (no positive evidence) and F8 (extreme groups not mentioned). The
  unsourced "deeper point" (F3) is sympathetic to them but unsupported, which does them no service.
- *A counsellor who teaches reflective listening:* passes. The lesson limits every study to strangers,
  low-stakes topics or students, says the Weger findings say nothing about "emotional topics, friends,
  or conversations the speaker cared about", and does not extend lab nulls to therapy. They would
  want the Weger 2010 literature review's training evidence (helpline volunteers, hostage
  negotiators), but that is about learning the skill, not about its effect on the speaker; no
  finding.
- *A sceptic of both:* served by the correlational caveats, the single-study labels, the preprint
  label and the "found no such study" sentences.

**Loaded language:** "forbidden" (F18). No sneering, no presentism; the Gottman wife/husband pattern
uses the paper's wording, attributed.

### Safety (pass 3)

No finding. There is no distress content beyond Bodie's everyday student problems, no advice to
couples in conflict, and nothing that assesses or counsels. The notice exercise names nobody and
records nothing; the paper exercise is labelled invented. No crisis pointer is needed.

### Summary

19 findings: 3 Major (F1 to F3), 5 Moderate (F4 to F8), 11 Minor. No wrong quotation and no wrong
number. The defects are one mis-described comparison that the reconciliation rests on, and selection
and attribution on the PREP side. F1 to F8 should be fixed before publishing; every fix is one or two
sentences.

### Resolutions applied

Fixer, fresh context, 2026-09-26. Primaries re-fetched and string-matched before any sourced change
(Internet Archive captures for Weger 2010, Weger 2014 and Kluger; authors' copies for HBR, Bodie and
Itzchakov and Bodie; OSF for DeMarree; OpenAlex for the abstracts; OCR of the Gottman scan). Recorded
in SOURCES.md, "Gate closures, lesson 09 review (2026-09-26)", appended at the end. Weger 2010 is a
full-text read (as its gate closure says), so F2's use of its literature review stands; the two PSPB
papers and Stanley et al. 2000 are carried at abstract level only.

- **P1 fixed.** One list, used three times: the Weger 2010 walk-through now runs under "what was
  tested, compared with what, measured how, rated by whom, replicated where"; the headline trace uses
  the first three and hands the reader the next two; the exercise and its model use the same words.
- **P2 fixed.** The lesson says lesson 8 gave the headline; the predict now asks why nonverbal
  behaviour was held constant, and its answer keeps r = .15, the first hypothesis and the authors'
  nonverbal explanation (moved there from "What it can't", which merged into "What it supports").
- **P3 fixed.** Item 4 is now the listeners (three interviewers against ten confederates), and the
  model adds that the comparison can't explain the split.
- **P4 fixed.** Step 1 names both matches and says why the traced one is chosen.
- **P5 fixed.** Item 3: one distractor hedged ("probably raise"). Item 4 rewritten (P7) with two
  hedged distractors.
- **P6 fixed.** Key: "Two student studies found small liking gains over bare replies"; the
  distractor's error is "proven ... in any setting"; explanation rewritten to match.
- **P7 fixed for items 4 and 5.** Item 4 moved to a school telling teachers to praise effort; item 5
  to a parenting course with two parts. Item 2 kept: it tests the lesson's central distinction and
  its designs are generic; declined to move a third.
- **P8 fixed.** One sentence ties the Blueprint's first rule to Rogers and Farson's ground rule; no
  lineage claimed beyond that.
- **P9 fixed.** Middle row added (performance, all effects, .36, "interval not read": Kluger's running
  text gives no interval and the tables were not read); .5 tick added; viewBox 420 by 296. Rendered
  headless in both themes at 375 and 720 px: no text outside the viewBox, rows clear of each other.
- **P10 fixed.** Glosses for d, manipulation check, 95% interval and polarization; r pointed forward at
  .15 and back to Time Management lesson 8 at the definition.
- **P11 fixed.** Slide now says "155,000 people".
- **P12 fixed**, all seven (the "Here is" opener, "It is worth noticing", the plan paragraph cut, the
  restated "isn't settled", the "make it" sentence, the closing moral cut, the Connections comma and
  lesson number).
- **P13 applied** to hold 90 minutes after the additions: journal paragraph cut to one sentence
  pointing at the exercise; the two repeating misconceptions cut to one line each; Go deeper's four
  read-level sentences cut; the debrief sentence cut.
- **P14 fixed.** Notes' keys line corrected to 3,2,3,1,2,0.
- **F1 fixed.** The 114-student study now gives all three listeners in the article's words, with the
  good listener beating the ordinary one; [14]'s "poor, moderate, and high-quality" design added;
  "a texting listener is a low bar" confined to the 112-student study; the claims list and the
  reconciliation in "So does it work?" now say the programme sets a package of attention and
  technique against distracted or ordinary listening, so it can't say which part works.
  Misconception "Active listening doesn't work" amended to match.
- **F2 fixed.** PREP's positive case added from Weger 2010's report of Stanley et al., with Weger's
  qualification that active-listening-specific improvements "do not dominate the literature".
- **F3 fixed.** "Their deeper point" and "exactly" removed; the objection labelled as this course's
  reading; Markman et al. 2001 given as Weger 2014 sets it beside Gottman; the brake analogy labelled
  the course's.
- **F4 fixed.** Experimental .39 against correlational .40, and predictive .27 against concurrent .42,
  both added; the broad-side summary notes the first.
- **F5 fixed.** Problem-solving limited to "the one study that measured it", cited [3] alone;
  "compared with ordinary alternatives" dropped.
- **F6 fixed.** [7] now carries only its "binary listening manipulations" call; the crossed design is
  labelled this course's reading.
- **F7 fixed.** Quiz 5 no longer says "both sides agree" or "the sources name"; the body's settling
  trial is labelled "as this course reads it".
- **F8 fixed.** The 17 divorced against 20 high- and 20 low-satisfaction married couples added.
- **F9 fixed.** The Blueprint's speaker rules (no blaming, "I statements") added as, in shape, the
  1998 paper's gentler start-up.
- **F10 fixed.** "In a meta-analysis of workplace studies that Kluger led".
- **F11 fixed.** "Online in 2023 and in print in 2024" (Springer: published 17 July 2023, volume 39,
  2024).
- **F12 fixed.** Quotation ends at "the active listening model"; both items paraphrased, including
  acceptance of influence.
- **F13 fixed.** Tapes and transcripts, this study and a cohort followed for 13 years.
- **F14 fixed.** "Authors of PREP", with Weger 2014's citations of the leader manual and technique.
- **F15, F16, F17, F18, F19 fixed** as the reviewer proposed (F16 now says 107 videos and that
  raters checked paraphrase and advice; F18 "told not to reply in words").

**Final measures.** Body 7,504 words by `npm run minutes`; minutes 90 measured, 90 stated.
Contractions 6.8 per 1,000 (build's count); bold 6.7 per 1,000; no em dashes; no banned word.
Three `:::predict`, four `:::checkpoint`, two exercises, one worked example with a gap (the headline
trace). Quiz keys **3,2,3,1,2,0** (unchanged): all four positions, no adjacent repeat, no identical or
value-shifted sequence against 01 to 08 or the draft of 10; the only shared run of four is with 01
(2,3,1,2), outside the five nearest. Option-length spreads 5, 4, 4, 2, 2, 5 characters; the key is
never the sole longest. New names and places: none (the two new quiz scenarios name nobody).
`npm run quotes conversation-and-listening`: 168 checked, 0 missing. `npm run validate`: exit 0, no
line names this file.

**Status after review:** clean
