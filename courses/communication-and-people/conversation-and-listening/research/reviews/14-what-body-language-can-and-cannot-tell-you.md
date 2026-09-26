# Reviews: lesson 14, "What body language can and cannot tell you"

## 2026-09-26 — Lesson 14 — Stage 4, Tier B, Reviewer P

Passes 4 (depth and pedagogy), 5 (cold start, against `npm run taught conversation-and-listening`:
238 lessons across 21 courses, none unwritten) and 6 (voice and media). Facts, neutrality and safety
are Reviewer F's.

**Checked and clean.** No em dash or spaced en dash in learner-facing text (the en dashes are page
ranges in Sources). No banned vocabulary outside quotations except "essentially" (P7). No photograph
or image of a face or body anywhere (decision 19). Every `:::` body has blank lines between
paragraphs and none opens on "number-full-stop"; no self-check prints its answer. The two predicts
ask before telling (the first comes before Mehrabian's page is quoted). Bold 6.3 per 1,000 body
words; contractions comfortably in band. `minutes: 90` matches `npm run minutes` (7,754 words, 90).
`npm run validate` raises nothing on this lesson. All eight teaching-prose links return 200; GAO's
403s to curl but opens (200, correct title) in a headless Chrome. Quiz shapes by script: lengths
86/83/84/93, 78/78/75/75, 75/68/72/74, 86/90/82/84, 81/79/74/75, 76/82/74/77 (spreads 10, 3, 7, 8,
7, 8); keys 0,3,2,0,1,3 use all four positions with no adjacent repeat; the key is never the sole
longest. Five of six items are application.

**Arithmetic, redone by hand.** Checkpoint: 1,000 × 1/10 = 100 liars, 900 not; 30% of each = 30 and
270; 300 look away; 30/300 = 10%, equal to the prior. Generous case: 45 + 270 = 315; 45/315 = 14.3%;
270/315 = 6/7 exactly, so "six of every seven" is right. Quiz 3: 20 shoplifters, 6 glance; 980
honest, 245 glance; 6/251 = 2.39%, "a little over 2%" right. Bond and DePaulo: (61.34 + 47.55)/2 =
54.4, consistent with "about 54%". Normal-curve conversions: d = 0.2 gives 57.9% (58, matching
Mental Fitness lesson 2's table), d = 0.3 gives 61.8% (62), d = 0.03 gives 51.2% ("barely more than
half"). Chart: 4 px per point gives bars of 254.6, 112.6, 101.2, 100.2 px, drawn as 255, 113, 101,
100; value labels sit 8 px past each bar end. All correct. One number disagrees between body and quiz
(P4).

**SVG, rendered headless in Chrome in both themes at 375 and 720 px, and read by eye.** Draws
completely; oxblood and grey bars both legible in light and dark; every row named in text; nothing
clipped; labels about 12 px at phone width, the repo's norm for a 420 viewBox. Content issue in P5.

### P1. Medium. The correlation pointer names the wrong lesson, and the first r in the lesson is unglossed.

> "Read that correlation the way Mental Fitness lesson 2 taught: r = .32 is a real relationship
> and not a percentage."

Mental Fitness lesson 2 teaches effect sizes (the g/d table) and never mentions a correlation. r was
introduced in Time Management lesson 8 and taught properly in this course's lesson 9, "Does active
listening work?", whose section "What a correlation of .39 means" is exactly the point being made.
Separately, the lesson's first r appears 160 lines earlier, with a minus sign and no reminder of what
r is: "eye contact correlated only weakly with actual lie judgements, r = -.15."

Fix: "Read that correlation the way lesson 9, "Does active listening work?", taught: r = .32 is a real
relationship and not a percentage." And in the thin-slices paragraph, a spaced-review line that costs
one clause: "r = .39, the same size as the listening correlation in lesson 9." The r = -.15 is best cut
with its parenthesis (P6); if kept, gloss it: "(r = -.15, where the minus means less eye contact went
with more 'lie' judgements)".

### P2. Medium. The opening says every myth has a finding behind it, and the lesson later says one doesn't.

> "You've probably been told that most of what we communicate is nonverbal, that liars can't look you
> in the eye, and that crossed arms mean someone's closed off. Each of these has a real finding
> somewhere behind it, and each has been stretched well past what that finding showed."

The gestures section says "This course found no study that tests whether crossed arms mean
defensiveness", and the misconception entry repeats it. The opening's claim is the kind of tidy triad
the style guide warns about, and here it's untrue of the third item.

Fix: "The first two have a real finding behind them, stretched well past what it showed. The third,
as far as this course found, has no study behind it at all."

### P3. Medium. In two quiz items the key is the only option without an absolute; a third key overclaims.

Measured: item 1's distractors carry "all speech", "all of them" and "Nothing ... any message at
all"; the key has none. Item 5's distractors carry "all the 2010 results", "The whole idea" and
"only if held"; the key has none. A reader choosing "the one that isn't absolute" gets both. The rule
is at least two options per item with no absolute.

Fixes (lengths stay inside the band):
- Item 1, option 3: "His figures held in 1967, but larger modern studies have since overturned them"
  (drop "all of").
- Item 5, option 1: "The claims are sound, since a larger study in 2015 confirmed the 2010 results"
  (drop "all").

Item 6's key has the opposite problem: "since no gesture has a fixed meaning" is stronger than the
lesson, which is careful to say "no gesture has been shown to have one fixed meaning" and quotes
Harrigan's "few, if any". The graded key shouldn't teach the overclaim the body avoided. Fix: "Hold the
guess loosely and ask, since no gesture is shown to have one meaning" (77 characters, spread still 8).
Read the explanation against it afterwards (defect 25).

### P4. Low to medium (arithmetic consistency; Reviewer F to say which number the paper supports). 19 or 20?

Body: "In 19 studies that compared professionals ... with lay people, the difference was d = -.025".
Quiz 2 explanation: "Across 20 comparisons the difference between experts and others was d = -.025".
One of them is wrong, or they count different things; either way a reader sees two numbers for one
result. Make them match the paper (drafter's notes and outline say 19 studies).

### P5. Medium. The chart prints the misconceptions as bare statements, with the "belief" framing only in small grey type.

The four visible labels read "Liars look away (gaze aversion)", "Liars seem nervous", "Liars' stories
don't hang together", "Liars move their bodies more", in full-strength text with a long oxblood bar
on the first. That they're beliefs rather than findings lives only in the `<title>` (not displayed), the
grey footer and the italic caption. A skimmer, or a phone reader who scrolls past the caption, takes
away the misconception the lesson spends two sections dismantling (defect 3's risk). The outline asked
for the chart "beside DePaulo's d = 0.03".

Fix: make the framing part of the drawing. Change the footer to "Share who named each as a way to
spot a liar" and add a first line above the bars, "What people say liars do", or a closing line
under the footer, "Measured difference for looking away: d = 0.03 (DePaulo and others, 2003)",
raising the viewBox height by 25 per added line. Keep text at 15 and inside 420.

### P6. Low. Padding: the draft is 90 minutes against the outline's ~85. About 450 words, roughly five minutes, can go without losing teaching.

1. The illusion-of-transparency parenthesis after Solveig (about 70 words; see P13).
2. The Bond and DePaulo bullet "Results were strikingly consistent ... standard deviation ... 4.52
   percentage points" (about 40 words). Nothing later uses it, and "nearly all studies found a little
   better than a coin" is already implied by the 54% and the expert result.
3. The confidence interval "running from -.105 to .055" (12 words). "Close to zero" carries it.
4. The Hartwig and Bond "One puzzle remains" parenthesis (about 50 words). It opens a puzzle the
   lesson never closes and brings in the only unglossed r (P1).
5. "What people get wrong" (about 450 words, 13 entries). Eight of them restate a body paragraph
   nearly word for word (93%, eye contact, up and to the right, professionals, microexpressions,
   crossed arms, mirroring, hormones). The entries that earn their place are the four over-corrections
   ("nobody can ever tell", "faces tell you nothing", "posture does nothing", and "a face shows exactly
   what someone feels"), because the body doesn't frame them as errors. Compress the eight to one
   line each, or cut to the over-corrections plus three, saving about 200 words.
6. Connections (about 80 of its words) repeats pointers the body already made inline to lessons 3, 7,
   9 and 12 and Logic and Argument 6. Keep the forward pointers to 15, 17 and Public Speaking.

Items 1 to 4 plus half of 5 and 6 is about five minutes. The faces and power-posing sections should
stay whole: objective 3 and the neutrality balance depend on them.

### P7. Low. Voice: four sentences to rewrite.

- Line 237: "So the honest summary isn't "the body shows nothing". It's that the differences are small,
  and the famous one, the eyes, is essentially absent." The "isn't X, it's Y" shape plus a banned
  word. Rewrite: "So the body does show something. The differences are small, and the famous one, the
  eyes, is close to zero."
- Line 285: "That's the mechanism this lesson rests on, and it's theirs". Pipeline vocabulary (defect
  7). Rewrite: "That's the explanation this lesson leans on, and it comes from them, not from me."
- Lines 356-357: "demeanour-only lie detection is about as close to settled as this field gets:
  poor." The colon-verdict reads as compressed. Rewrite: "judging lies from demeanour alone is about
  as settled as anything in this field, and the verdict is that it does poorly."
- Verbless one-line morals closing four paragraphs: "Three small studies from one team, all null.",
  "Rare, and not specific to liars.", "Better than the eyes, and still far from a lie detector.", and
  "Then the replications came." (as its own paragraph). One lands; four is the tic. Keep "Then the
  replications came." and make the others sentences, e.g. "So microexpressions were rare, and truth
  tellers showed them too."

### P8. Low. Exercise 1's timing is short for what it asks.

"Take 10 minutes ... Play twelve rounds", each with a coin flip, the partner choosing a harmless
statement, two questions, a call and a note of the cue relied on. That's a minute a round at the
least, before swapping roles. Fix: "Play eight rounds" (the score is "a story, not a measurement"
either way, as the exercise says), which keeps 10 minutes honest and costs nothing in the model.

### P9. Low. The job-interview case leans on a section that comes after it.

> "On this course's reading of the findings below, the useful move is to ask for checkable detail"

The reader is given the conclusion before "What does better" supplies the evidence. Either move the
Tancredi case after "What does better", or change "the findings below" to "the findings in the next
section" so the forward reference is explicit. The second costs nothing.

### P10. Low. Quiz 4's distractors are weak and its key mirrors a body sentence; quiz 2 repeats the second predict.

Item 4: "A count of how many popular books and courses teach reading emotions from the face" and "A
survey of how sure people feel" are not tempting to anyone who read the section, so the item is
really a two-way choice. The key restates "What would settle it" almost word for word ("record what
people feel and what their faces do at the same moment, across many small-scale societies, letting
people answer freely"), which tests recall of the page (defect 5b). Replace the book-count option with
a tempting one: "A pooled analysis of many more posed-photo studies, with ten times the participants"
(bigger sample, same flawed method). Item 2 asks what the second predict already asked and answers it
with the same words ("averaged under 55%"); acceptable as the one recall item, but see P12.

### P11. Low. Quiz 3's explanation can name the route to the 55% distractor.

Traced backwards: 30/(30 + 25) = 54.5%, which is what you get by comparing the two glance rates and
forgetting that there are 49 honest customers for every shoplifter. The explanation's "a cue that's a
bit more common in one group doesn't make that group the majority when the group is small" is right
but vague. Fix: "The 55% comes from comparing 30 with 25 and forgetting there are 49 honest customers
for every shoplifter."

### P12. Low. Two objective parts go unquizzed.

Objective 2's "what does better" (content and questions) and objective 3's thin slices have no quiz
item. If any item is rewritten, item 2 (pure recall, P10) is the candidate: an application stem on a
first-impression claim ("She's known him thirty seconds and says she can tell he's trustworthy")
would test the "specific outcomes, not a verdict on a person" point.

### P13. Low. Re-teaching lesson 7: the transparency parenthesis defends against a reading nobody made.

> "(Lesson 7 also described the illusion of transparency: people hiding a feeling from strangers in a
> lab thought more of it showed than did. Whether Solveig, half-showing hers to a friend, thinks it
> shows more than it does is a different situation, and applying that finding to her would be this
> course's reading, not something those studies tested.)"

The one-sentence recap of lesson 7's asking-beats-imagining result before it is the right amount;
the parenthesis re-describes a second lesson 7 finding only to say it doesn't apply. Cut it (part of
P6's saving). If the course-wide note requires the illusion of transparency to be mentioned here,
keep only its first sentence.

### Cold start

Nothing blocks a reader who has done exactly the listed courses. Meta-analysis, d (lessons 5, 6 and
7 of this course, including a negative d), g and the normal-curve table (Mental Fitness lesson 2),
preregistration (lesson 9), natural frequencies (Logic and Argument lesson 6), NLP, METT, SPOT, GAO and
"stochastic mechanism" are all available or glossed. The two gaps are the r pointer (P1) and the
unglossed "lacked ecological and external validity", which the sentence's "because none of it was
about airports" rescues well enough to leave.

## 2026-09-26 — Lesson 14 — Stage 4, Tier B, Reviewer F

Passes 1 (facts), 2 (fact-check against primaries) and 3 (neutrality, full audit under standards 3.5,
and safety). Primaries fetched today with curl and a generic browser User-Agent, no personal data:
kaaj.com (live); GDRT 2006, Barrett et al. 2019 and Hale and Hamilton 2016 from Internet Archive
captures of PMC; Denault et al. 2020 (copmadrid, live); Carney's statement (Berkeley, live); the BPS
article (live); Wiseman et al. (PLoS, live); Zenger and Folkman (Internet Archive, 20 July 2016);
GAO-14-159 report PDF and product page (Internet Archive); DePaulo et al. 2003 (Internet Archive copy
of the MIT PDF); Vrij, Hartwig and Granhag 2019 (gwern PDF). Every quotation string-matched against
the fetched text; `npm run quotes conversation-and-listening` also reports 0 of 271 not found.

**Verified.** Mehrabian's three strings (formula, "were derived from experiments dealing with
communications of feelings and attitudes (i.e., like-dislike)", "Unless a communicator ... not
applicable") verbatim; no 1967 design detail beyond the G6 fallback. Zenger and Folkman's "80%"
sentence verbatim. GDRT: 63.66, 28.15, 25.30, 25.04; 2,320 in 58 countries; 51 of 58; 61 of 63;
75 countries and 43 languages; both quotations verbatim; chart bars at 4 px per point round
correctly (255, 113, 101, 100). DePaulo 2003: 1,338 / 158 / 120; median |0.10| of 88; two at |0.50|;
eye contact N 1,491, k 32, d 0.01; gaze aversion N 411, k 6, d 0.03; nervous 0.27, pitch 0.21, pupils
0.39 (k 4); both quotations verbatim. Barrett et al.: both quotations, 47 studies, r = .32,
proportion .19, all verbatim. Denault et al.: the 500,000 clause, Reid & Associates' description, the
manual's sentence **with "generally speaking"**, the manual's culture caution, "has even shown that it
is not a valid sign of lying", SPOT's "avoiding eye contact, looking down" and "about 30 seconds",
Harrigan's sentence, "the body language never lies": all verbatim. GAO: "over 400 studies from the
past 60 years", the chance sentence, "the absence of scientifically validated evidence" (product page
and report); "lacked ecological and external validity", "fear or stress" and "may appear suspicious"
(report pp. 48 to 51 and fn. 37). BPS: "virtually zero effect", "it is clear that an effect on felt
power was observed", Cuddy's tweet, six-minute poses, 21 added studies, Simmons and Simonsohn's
exclusion of felt power, 2012 TED talk. Carney: "I do not believe that “power pose” effects are real."
verbatim; "ran subjects in chunks and checked the effect along the way" supports the paraphrase.
Vrij 2019: "the first and, to date, only published experiment", 14 fragments, 2%, six by truth
tellers, NLP founders, 35 of 50 and 25 of 35. Bond and DePaulo 2006 figures (54%, 61.34, 47.55,
SD 4.52, 19 studies / 20 comparisons, d = -.025, CI -.105 to .055, under 55%, 206 / 24,483 / 4,435,
real time without aids or training) match SOURCES §2.1 (OCR source, paraphrased as the lesson says).
Read levels in Sources match SOURCES for all 33 entries. The illusion-of-transparency parenthesis
stays inside the course-wide note (concealment, strangers, lab; the application to Solveig labelled
as the course's reading).

**Arithmetic, redone by hand.** Φ(0.2) = 0.579 (58%); Φ(0.03) = 0.512 ("barely more than half");
Φ(0.3) = 0.618 (62%). Tancredi: 100 liars × 0.30 = 30; 900 × 0.30 = 270; 30 / 300 = 10%. Generous
case: 45 + 270 = 315; 45 / 315 = 14.3%; 270 / 315 = 85.7% = six in seven exactly. Quiz 3: 20 × 0.30 = 6;
980 × 0.25 = 245; 6 / 251 = 2.39%. All numbers labelled invented where the reader meets them. Clean.

### Findings

**F1 (major, fact). Vrij et al.'s verbal-cue average is misdescribed.** Lesson: "Verbal cues did
better, averaging d = 0.30, with 8 of 18 related to deception." Vrij, Hartwig and Granhag 2019,
p. 301: "Eight of the cues listed in Table 1 contain a verbal element, and the average effect size for
the eight cues is d = 0.30. Moreover, only a small majority of verbal cues (10 out of 18, or 55%) was
unrelated to deception." And, same page: "Ten of the 14 cues listed in Table 1 have a nonverbal
element, and the average effect size for these nine cues is d = 0.26." So 0.30 is the average of the
eight verbal cues that **were** diagnostic, not of verbal cues in general, and the diagnostic
nonverbal cues averaged 0.26. The lesson's contrast implies a gap in strength that the paper does not
report; the real difference is in the share of cues related (8 of 18 against 10 of 35). The error is
inherited from SOURCES §2.7 and repeated in Part D C2 ("Vrij et al.'s verbal-cue average d = 0.30").
Fix: "Of 18 verbal cues, 8 were related to deception, against 10 of 35 cues with a nonverbal element.
Among the cues that were related, the verbal ones averaged d = 0.30 and the nonverbal ones 0.26." Then
the Mental Fitness arithmetic can stand as "0.3 puts the average liar ahead of about 62% of truth
tellers on one of those eight cues". Correct SOURCES §2.7 and C2 in the same pass, with a gate-closure
note quoting p. 301.

**F2 (moderate, neutrality: selection). The mimicry paragraph omits the same paper's positive study.**
Lesson: "In 2016 Joanna Hale and Antonia Hamilton ran a preregistered test with 40 participants ...
being copied didn't raise rapport or trust." The abstract the course read: "In Study 1, 50
participants interacted with two avatars who ... mimicked ... Rapport was higher towards mimicking
avatars ... In Study 2, we aimed to replicate this effect in a pre-registered design ... We found no
effects of mimicry on rapport or trust". SOURCES §4.2 records Study 1. Dropping it (the drafter's notes
say it was cut for length) makes a contested question read as a clean null, which is defect 14, and a
Chartrand-and-Bargh-tradition researcher would insist on it. Fix, about 20 words: "In 2016 Joanna Hale
and Antonia Hamilton found, with avatars in virtual reality, that 50 people felt more rapport with
avatars that copied them; when they repeated the test with 40 people under a preregistered plan, being
copied didn't raise rapport or trust." Optionally note that Study 2 excluded the eight people who
noticed the copying (full text), so it tested unnoticed mimicry; only if a gate note records it.

**F3 (moderate, neutrality: trimmed list). Carney's reasons are listed without the one that bears on
felt power.** Lesson: "Among her reasons she listed a tiny sample, effects that were 'small and barely
there', data collected in batches and checked along the way, and experimenters who knew the
hypothesis." Her statement, item 10: "The self-report DV was p-hacked in that many different power
questions were asked and those chosen were the ones that “worked.”" Her opening also says the evidence
suggests no effect "on internal or psychological outcomes". SOURCES §4.6 records the "p-hacked"
fragment. The lesson then treats felt power as the live question, and quiz item 5 pairs her disbelief
with "Whether posture changes how powerful people say they feel is still argued", which reads as if
her retraction concerned hormones and behaviour only. Fix: add "and a self-report measure of power
that was, in her word, 'p-hacked'" to the list. The felt-power side keeps its citations and the last
quotation (Cuddy), so this doesn't tip the section; it removes a trim that favoured it.

**F4 (moderate, neutrality: the practitioners' side). "Here it is in their words first" is not kept
for SPOT, and each side's strongest point is missing.** (a) For SPOT the lesson gives GAO's verdict
and recommendation first and DHS's case after, with one DHS phrase. (b) GAO's own concession, which a
TSA officer would insist on and SOURCES records [V], is left out: "We acknowledge that behavior
detection holds promise for use in certain circumstances and in conjunction with certain other
technologies." (c) For Reid, Denault et al. (read in full) report that "the specific study often
presented as supporting the BAI foundations (Horvath, Jayne, & Buckley, 1994) suffers from fatal
methodological shortcomings (e.g., small sample, no comparison group of untrained or lay
evaluators)". That is the practitioners' evidence claim and its critique in one sentence of a paper
already cited; without it the Reid side has a description and a manual sentence but no evidence of its
own, which a Reid-trained interviewer would call the missing half. Fix: reword the promise to "Here
is their case, as far as this course has it in their words" or move DHS's objection ahead of GAO's
answer; add GAO's "holds promise" sentence to the DHS paragraph; add the Horvath sentence (after
recording it in a SOURCES gate-closure note, since §2.15 and the lesson 14 closure don't carry it).
Watch the minutes: (b) and (c) together are about 45 words.

**F5 (minor, fact). Mehrabian: "judging whether someone likes you".** Lesson line 143: "It's about
one narrow thing, judging whether someone likes you when their word and their tone disagree." The
predict answer says, correctly within G6, "how much a speaker seemed to like or dislike someone". The
secondary accounts in SOURCES §1.1 to 1.2 (unverified) describe an imagined addressee, not the
listener, and the second study as face against tone. "Likes you" is not supported, and "word and
their tone" drops the face. Fix: "judging how much a speaker seems to like someone when the word, the
tone and the face don't agree".

**F6 (minor, fact: stretches in the misconception list).** (a) "Believed in all 75 countries
surveyed": the paper says the belief "was expressed in every one of the 75 countries", i.e. by some
respondents in each; fix "Found in all 75 countries surveyed". (b) "Police and body language experts
can spot liars": Bond and DePaulo's experts were police, judges, psychiatrists, job interviewers and
auditors; "body language experts" were not a group in the meta-analysis. Fix: "Police and other
professionals can spot liars." (c) Quiz 6 explanation: "The review Denault and colleagues quote" is
Harrigan's handbook chapter, not a review; fix "The handbook chapter". (d) Quiz 2 explanation: "the
meta-analysis reports no expert advantage there" implies a by-medium expert analysis that SOURCES
doesn't record; fix "and nothing in the meta-analysis shows experts doing better there".

**F7 (minor, fact: dates). Elkjær et al.** "A 2022 meta-analysis ... Cuddy greeted the same
meta-analysis" with a tweet of June 2020 (BPS). The paper was online in 2020 (SOURCES §4.10). A reader
sees a 2020 reaction to a 2022 paper. Fix: "A meta-analysis of 73 studies by Emma Elkjær and
colleagues, published online in 2020". Also: the 73 were identified and 48 meta-analysed (BPS); the
g values come from the 48. Optional: "a review of 73 studies, 48 of them pooled".

**F8 (minor, provenance).** The Carney, Cuddy and Yap 2015 reply ("The original authors replied that
the study differed in method, including six-minute poses.[32]") is on the unread line and known only
through the BPS article, but Source 32's list of works "known only as this article reports them" omits
it. Fix: add "Carney, Cuddy and Yap's 2015 reply" to that list. (Source 2's read-level line also ends
on a stray comma: "**Read: the abstract only**,".)

**F9 (minor, organising claim).** Opening: "bodies and voices do carry information, mostly about
feelings and relationships". Nothing in SOURCES supports "mostly"; Ambady and Rosenthal's outcomes
included clinical and deception-detection outcomes and teacher ratings. Fix: "bodies and voices do
carry information, about feelings among other things". The other half of the organising claim
(content and questions do better than watching bodies, by an argued amount) is supported and labelled
contested. Connections' "asking beats reading" generalises Eyal et al., whose asking test (Experiment
25) was on partners' preferences and opinions; the body text already labels the Solveig application
as the course's reading, so the Connections line wants "on this course's reading" too.

### Neutrality: counts and perspectives

**Counts.** Faces: basic-emotion side 3 citations (Keltner in own words, Elfenbein and Ambady, Cowen);
constructionist 3 (Barrett in own words twice plus figures, Gendron, Crivelli); the r = .32 paragraph
guards against over-reading Barrett's own number, so it does not tip; last word is common ground and
what would settle it (SOURCES C1's criterion); misconceptions one each way. Lie detection: four
misconceptions against the popular view, one against the over-correction; Levine's high-accuracy
claims correctly held as unread and contested, not a hedge dressing anything (defect 22 checked
against SOURCES §2.14). Power posing: felt-power side has Cuddy et al. 2018, Jonas et al., Ranehill's
own felt-power result and Cuddy's last quotation; against, Credé and Elkjær; hormone and behaviour
null stated as settled per decision 12; Cuddy's defence acknowledged as unread, not dismissed. F3 is
the only trim. Mimicry fails the count as written (F2). Whole lesson: the architecture is "popular
claims traced back", which is SOURCES' classification (demeanour-only detection close to established)
rather than a side taken on a contested question; the contested questions each get both positions.

**Perspectives checked.** A basic-emotion researcher: represented in own words with the updated
"upwards of 20 ... multimodal" position, not the six-face caricature; satisfied. A constructionist:
represented in own words; satisfied. A police interviewer trained in behavioural cues: manual quoted
not characterised, hedge and culture caution kept, no sneering; wants the Horvath study named (F4c).
A deception researcher: figures accurate except the verbal-cue average (F1). A TSA/SPOT officer:
DHS's three objections reported fairly; wants GAO's "holds promise" concession and the promised order
(F4a, b). A power-posing researcher defending felt power: acknowledged, quoted last; F3 is a fair
addition, not a loss. A Chartrand-and-Bargh mimicry researcher: F2. A reader from a culture where
looking away is respectful: covered by the manual's caution, GAO fn. 37 and the lesson 15 pointer;
satisfied.

**Safety (pass 3).** The coin exercise is consensual, harmless and forbids covert testing; the journal
forbids labelling anyone a liar; covert mirroring is declined; Tancredi's example says the course
teaches no interview method. No image of a face or body. Nothing to fix.

**Verdict:** needs fixes (F1 to F4), no second review needed if they are applied as written; F1 also
corrects SOURCES §2.7 and C2.

### Resolutions applied

Fix pass, 2026-09-26, in a context that neither wrote nor reviewed the lesson. Primaries re-fetched
and string-matched: Vrij et al. 2019 (gwern PDF), Denault et al. 2020 (live), Carney 2016 (live),
GAO-14-159 report p. 51 (Internet Archive), Hale and Hamilton 2016 (Internet Archive capture of
PMC5064448; full text searched, not read end to end). Recorded in SOURCES.md, "Gate closures,
lesson 14 review (2026-09-26)".

**SOURCES corrections.** Part D §2.7 and C2 corrected in place for F1 (0.30 is the average of the
eight related verbal cues, against 0.26 for the related nonverbal ones). Horvath, Jayne and Buckley
1994 is not read and is named only as Denault et al. describe it.

- **F1** fixed: the Vrij bullet now gives 8 of 18 verbal against 10 of 35 nonverbal cues related, the
  authors' "more promising", and 0.30 against 0.26 among the related cues, with the Mental Fitness
  arithmetic restated as "one of those eight cues".
- **F2** fixed: Study 1 (50 people, higher rapport) added before the preregistered Study 2, with the
  authors' own judgement that Study 1 was exploratory and Study 2 the more definitive (General
  Discussion, recorded). Source 26's read level updated.
- **F3** fixed: "p-hacked" self-report measure added to Carney's list.
- **F4** fixed: promise reworded to "as far as this course has it in their words, with the answer to
  it"; GAO's "holds promise" concession added to the SPOT paragraph; the Horvath study added as the
  study "often presented as supporting" the interview, with Denault et al.'s critique, and their
  "some other aspects of BAI may offer avenues for research" (already [V] in the lesson 14 closure)
  as the Reid side's opening.
- **F5** fixed: "how much a speaker seems to like someone when the word, the tone and the face don't
  agree".
- **F6** fixed: (a) "A belief found in all 75 countries"; (b) "Police and other professionals";
  (c) "The handbook chapter"; (d) moot, the quiz 2 explanation was replaced (P12).
- **F7** fixed: "A review of 73 studies, 48 of them pooled, ... published online in 2020"; "the same
  review" in Cuddy's sentence.
- **F8** fixed: Carney, Cuddy and Yap's 2015 reply added to Source 32's list; Source 2's stray comma.
- **F9** fixed: "about feelings among other things"; Connections now says "on this course's
  reading".
- **P1** fixed: pointer is lesson 9; thin-slices r = .39 tied to lesson 9's correlation; the
  r = -.15 parenthesis cut (P6.4).
- **P2** fixed with the reviewer's wording.
- **P3** fixed: absolutes dropped from quiz 1 option 3 and quiz 5 option 1; quiz 6 key now "no
  gesture is shown to mean one thing", explanation adds that this isn't proof crossed arms mean
  nothing.
- **P4** fixed: body says "19 studies ..., 20 comparisons in all"; the quiz item carrying 20 was
  replaced.
- **P5** fixed: chart gains a heading line "What people say liars do", footer "Share who named each
  as a way to spot a liar", and a closing line "Measured gap for looking away: d = 0.03"; viewBox
  420 × 320; title, desc and caption updated (caption credits DePaulo 2003). Rendered headless at
  375 px in light and dark: nothing clipped.
- **P6** applied: items 1 to 4 cut; misconceptions compressed from 13 entries to 9 (pairs merged,
  all four over-corrections kept); Connections cut to the lesson 7 rule plus the forward pointers.
- **P7** fixed: all four rewrites; the three other verbless morals are now sentences; "Then the
  replications came." kept.
- **P8** fixed: eight rounds, in both places.
- **P9** fixed: "the findings in the next section".
- **P10** fixed: quiz 4's book-count option replaced by the larger pooled posed-photo analysis, key
  reworded away from the body's sentence, explanation updated. Quiz 2 replaced (P12).
- **P11** fixed with the reviewer's sentence.
- **P12** fixed: quiz 2 is now a thin-slices application item (Rosalind, a thirty-second glimpse,
  "specific outcomes, not a verdict on a person"). Objective 2's "what does better" is still
  unquizzed; declined to add a seventh item or displace another.
- **P13** fixed: parenthesis cut; the course-wide note constrains its use but doesn't require it.

**Final measures.** 7,747 words, `minutes: 90` (measured 90). Body 6,200 words; bold 5.5 per
1,000; contractions in band (validate raises none). Two `:::predict`, two `:::checkpoint`, one
worked example with a gap (Tancredi). Every `[n]` has a footnote and every source is cited. No em
dash or spaced en dash; no banned word ("essentially" gone). Quiz keys 0,3,2,0,1,3, unchanged; all
four positions, no adjacent repeat, no identical or shifted sequence and no run of four against
lessons 01 to 13 and 15, by script. Option lengths 86/83/90/93, 80/81/81/79, 75/68/72/74,
87/90/83/84, 77/79/74/75, 76/82/74/79 (spreads 10, 2, 7, 7, 5, 8); the key is never the sole
longest. New name: Rosalind (grep empty). `npm run quotes conversation-and-listening`: 0 not found.
`npm run validate`: exit 0, nothing on this file.

**Status after review:** clean

## Fresh second pass (2026-09-26)

**Checker:** one fresh-context re-checker (neither drafter, reviewer nor fixer), against a7e05ae,
diffing the lesson against a7e05ae~1, with a whole-lesson neutrality re-count. Re-fetched today by
curl (generic browser User-Agent, no personal data): Vrij, Hartwig and Granhag 2019 (gwern.net PDF,
pdftotext), Denault et al. 2020 (copmadrid, live), Carney 2016 (Berkeley Haas, live), GAO-14-159
report (Internet Archive capture of 25 November 2020), Hale and Hamilton 2016 (Internet Archive
capture of 2 February 2025 of PMC5064448) and the BPS article (live). **Every new or changed
quotation string-matched** after normalising quotes and spacing: "more promising"; Denault's "suffers
from fatal methodological shortcomings", "small sample, no comparison group of untrained or lay
evaluators", "some other aspects of BAI may offer avenues for research", and the unchanged Reid,
manual, SPOT and Harrigan strings; Carney's "p-hacked" (item 10: "The self-report DV was p-hacked");
GAO's "holds promise" sentence; Hale and Hamilton's abstract (50 in Study 1, "Rapport was higher
towards mimicking avatars", forty in the preregistered Study 2, "no effects of mimicry on rapport or
trust") and the General Discussion's "we consider Study 2 to be the more definitive. This is because
Study 1 was an exploratory study". `npm run quotes conversation-and-listening`: 292, 0 not found.

**F1, verified on the source.** The PDF text reads, verbatim: "Ten of the 14 cues listed in Table 1
have a nonverbal element, and the average effect size for these nine cues is d = 0.26", then "The
results for the verbal cues are more promising ... Eight of the cues listed in Table 1 contain a
verbal element, and the average effect size for the eight cues is d = 0.30. Moreover, only a small
majority of verbal cues (10 out of 18, or 55%) was unrelated to deception", with "35 of the 50 cues
... (25 out of 35, or 71%)" between them. The lesson's bullet (8 of 18 verbal against 10 of 35
nonverbal related; 0.30 against 0.26 among the related cues; 62% "on one of those eight cues"), §2.7
and C2 all now say this correctly. **One provenance slip:** the passage is on **p. 302**, after Table
1's page footer "301", not p. 301 as F1 and the SOURCES gate closure say. The lesson gives no page;
the correction is appended to SOURCES ("Gate closures, lesson 14 fresh second pass").

**F2 to F9 and P1 to P13: all resolved in the text as recorded,** checked line by line against the
diff. F5's "the word, the tone and the face don't agree" reads as a three-way conflict where each
1967 study set two channels against each other; the predict above it states the pairwise design, and
the papers are unread (G6), so it stands. The Vrij bullet's "So the difference is mostly in how many
cues work, not in how strong the working ones are" is the course's inference from the two figures
just given, and it follows from them directly; not a finding.

**Read levels.** Hale and Hamilton (Source 26, "the abstract ... and the full text searched for the
authors' judgement"): every clause the lesson gives is in the abstract except "exploratory" and "more
definitive", which are the searched General Discussion sentence; nothing else from the full text is
used (the eight Study 2 exclusions for noticing are not claimed). Horvath, Jayne and Buckley 1994:
named only as the study Denault et al. say is "often presented as supporting" the interview, flagged
"which this course hasn't read", with the critique in Denault's words; not a numbered source. Nothing
cited is on the unread line (validate enforces it and exits 0); the unread items the lesson names
(Harrigan, the Reid manual, Carney, Cuddy and Yap 2015, Cuddy et al. 2018, Credé, DHS's letter) are
each flagged in the body or in Sources 14 and 32 as known at one remove, and each chain is in
SOURCES.

**Two one-edit fixes made here.**
1. **Quiz 5's key was the sole longest option** (77/79/74/75), against the "Final measures" line,
   which recorded the same lengths and said the key never was. "failed to replicate" → "didn't
   replicate": now 77/76/74/75, spread 3.
2. **Elkjær's "48 of them pooled"** comes from the BPS article, not the abstract the lesson says it
   read; the sentence now carries [32] after "pooled,". Recorded in SOURCES.

**Numbers.** Chart re-extracted and rendered headless (Chrome, playwright-core) in light and dark at
375 and 720 px with the site's tokens: every `text` and `rect` `getBBox` inside the 420 × 320
viewBox (rightmost edge x = 333.9, lowest y = 316.7); labels 12.3 px at phone width, 24.3 at 720;
oxblood and grey bars legible in both themes; the heading, footer and d = 0.03 line all draw. Bars
at 4 px per point still 255, 113, 101, 100. Quiz keys **0,3,2,0,1,3**; lengths 86/83/90/93,
80/81/81/79, 75/68/72/74, 87/90/83/84, 77/76/74/75, 76/82/74/79 (spreads 10, 2, 7, 7, 3, 8); the
key is now never the sole longest; each item has at least two options with no absolute; each
explanation matches its key and answers every distractor by content (quiz 2's 39% and "face only"
routes, quiz 3's 55% route traced as 30 against 25, quiz 6's "handbook chapter").

**Neutrality, re-counted across the whole lesson.** *Faces:* basic-emotion side [19] in own words,
[20], [21]; constructionist [18] in own words twice, [22], [23]; the r = .32 guard applies to
Barrett's own number; common ground, then the settling design, then a checkpoint that states each
side's view in its own terms; misconceptions one each way. *Lie detection:* the demeanour-only
verdict is SOURCES' classification (C2), and the over-correction ("nobody can ever tell") is
corrected alongside the popular errors. *Practitioners:* Reid's description, the manual's hedged
sentence and culture caution, the Horvath study as their evidence and Denault's concession "some
other aspects of BAI may offer avenues"; SPOT's indicators, DHS's three objections, and GAO's "holds
promise" concession. *Mimicry:* Chartrand and Bargh, Hale and Hamilton Study 1 positive, Study 2
null, the authors' own weighting, the review's "may be fragile"; labelled contested. *Power posing:*
felt-power side has Ranehill's own felt-power result, the special issue's "clear" felt-power effect,
Cuddy et al. 2018 and Cuddy's quotation as the last word of the evidence; against, Carney (now with
"p-hacked"), Simmons and Simonsohn, Credé and Elkjær; hormones and behaviour settled per decision 12,
felt power contested with a settling design. Balanced.

**Turing test.** *Basic-emotion researcher:* passes; the "upwards of 20 ... multimodal" position,
not the six-face caricature. *Constructionist:* passes; "an expression of anger, but not the
expression" and the agreement "more than ... chance" are both there. *Reid-trained interviewer:*
passes; the manual is quoted with "generally speaking" and its own culture caution, their supporting
study is named, and the lesson says plainly that it read the critique and not the study or the
manual. They would still say their evidence is heard only through its critics, which the lesson
admits. *TSA/SPOT officer:* passes; DHS's case is set out in three points and GAO's concession is
quoted, though the order is GAO's verdict first. The promise now says "with the answer to it", not
"first", so the order doesn't break it. *Cuddy's side of power posing:* passes; felt power is given
as a live and legitimate outcome in their words, and her retraction-free defence is quoted last.

**Commands.** `npm run minutes`: 7,748 words, 90, matches. `npm run validate`: exit 0, nothing on
this file.

**Process note.** While this pass was running, another session's commit 67ee07b ("lesson 13: Stage
4 review applied") took in SOURCES.md with this pass's first appended bullet; the heading above it
was added afterwards and is uncommitted, with the two lesson edits.

**Verdict: SETTLED.**
