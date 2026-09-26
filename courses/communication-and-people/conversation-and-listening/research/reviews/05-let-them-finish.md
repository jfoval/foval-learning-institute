# Reviews: lesson 05, "Let them finish"

## 2026-09-26 — Lesson 05 — Stage 4, Tier B, Reviewer P

**Reviewer:** Reviewer P (depth, pedagogy, cold start, voice and media), fresh context. Read
`review-lesson.md` passes 1, 4, 5, 6, standards Parts 1 and 4, the style guide, the drafter defect
list, `courses/CLAUDE.md`, the drafter's notes and OUTLINE lesson 5. Ran `npm run taught` (Mental
Fitness and Logic and Argument both published; the course's `prerequisites:` names both),
`npm run minutes` (80 measured, 80 stated, ok), a quiz-shape script, and rendered the one SVG
headless at 375 and 720 px in both themes with Libre Caslon / IBM Plex loaded.

**Mechanical checks, all clean:** no em dash; en dashes only unspaced page ranges in Sources; no
banned word; no `:::` body collapses (every multi-paragraph body has blank lines; the numbered list
in "Wait a breath" is loose); no blank line in the SVG; both exercise timings open "Take 10" so
`npm run minutes` sees them; bold 10.3 and contractions 7.8 per 1,000 as the notes say.

**Arithmetic, redone by hand:** 27 of 40 = 67.5%, so "two times out of three" holds; 40 of 112 =
35.7%, "36%" holds; 46 of 48 = 95.8%, "96%" holds; 20 + 11 = 31 conversations; 7 of 335 = 2.1%;
Radka at 58 falls in the 50 to 87 band (108 s); Φ(0.33) = 0.629, "about 63%" holds; Φ(0.15) =
0.560, "about 56%" holds; SVG bar widths at 900 px per unit (.15 = 135, .33 = 297, .24 = 216,
.11 = 99) and the 0.2 line at x = 200 are all exact. No arithmetic error found.

**Quiz shape (measured):** keys 3,0,1,3,2,1, all four positions, no adjacent repeat; spreads 5,
3, 1, 4, 4, 6 characters; key longest in items 1, 3, 6 by 1 to 6 characters. Absolutes and hedges
are the problem (P2).

**Think-blocks:** three `:::predict`, two `:::checkpoint`, two exercises. No worked example with a
gap (P7). One predict hides no answer (P3).

**Verdicts:** depth, pass with minor findings; pedagogy, two majors in the quiz; cold start, minor
gaps; voice, minor; media, pass with minor. **0 critical, 2 major, 12 minor.**

**Findings:**

1. **P1 [major] Quiz item 1 is keyed on a criterion the body says it lacks.** The body makes the
   invitation decisive: "The difference from line 4 is who asked. Idris invited help ("what's the
   word"); Gwilym didn't. **This course's reading** is that the invitation is what makes help with a
   word cooperative". Ottoline's stem has no invitation, only "She pauses, searching", yet the key
   is "Help with a word", i.e. cooperative. A reader who applies the body's rule literally can argue
   for "intrusive". **Fix both ends:** (a) add a verbal invitation to the stem ("and then we finally
   found the right... what's it called?"), and (b) sharpen the body's contrast so it survives: a
   word search is visible and the speaker is looking for a word they don't have; a stammer block is
   not a search, the speaker knows the word. Suggested body line after the STAMMA paragraph: "The
   difference from line 4 is what the pause was. Idris had lost the word and said so ('what's the
   word'); Gwilym knew his word and was blocked on saying it. **This course's reading** is that an
   invited search is what makes help with a word cooperative..."

2. **P2 [major] Three keys are findable by shape, and one by page recall.** Item 2: the key is the
   only option with no absolute ("every", "No difference at all", "only"), failing the "at least
   two options without an absolute" rule; it also repeats the body's own summary nearly verbatim
   ("a small average difference in floor-taking interruptions, which varies strongly with the
   setting", l.375; "a small average difference, larger for floor-taking interruptions", l.472).
   Item 3: the key is the only hedged option ("may still carry across"). Item 5: the key is the only
   hedged option ("the pause may be her thinking"). A reader choosing "the only unhedged-absolute-free
   option" gets items 2, 3 and 5 outright and half of item 6, about 4 of 6 with guessing, next to the
   70% pass mark. **Fix by softening distractors, not the key:** item 2 C to "Little overall
   difference, and what there is disappears once the definitions are made consistent"; D to "A
   difference mainly in mixed-gender pairs, where men took the floor from women more often"; item 3
   A to "She's probably right, since a finding from hundreds of patients is likely to hold for most
   talk"; item 5 A to "Ask it now, since a pause may be a transition place where you can take the
   turn"; item 5 D to "Change the subject gently, since a pause like this may mean she's said enough".
   Recheck spreads after the edit.

3. **P3 [minor] A predict with no answer, and a teaser.** L.277 to 280: the body is "Read on. The
   answer to the second part surprises most people." The reveal button reveals nothing, and
   "surprises most people" is an unsourced claim in a salesy register. **Fix:** "Small overall: d =
   .15, which the authors call negligible, and .33 for floor-taking interruptions. And no, the
   difference was not largest when men talked with women: in mixed-gender talk it was the smallest of
   the four, .11. The next section gives the figures."

4. **P4 [minor] The overall d is given the name of one of the three definition levels.** L.297 to
   298: "0.15 puts his rate of interruption broadly defined above about 56%". Four lines earlier
   "broad" is the name of one of the three definition levels; .15 is the figure across all studies
   and all definitions. **Fix:** "and the overall 0.15, across every definition, puts his rate above
   about 56%".

5. **P5 [minor] "Overlap almost entirely" overstates at d = .33.** L.300 to 301: "the two groups
   overlap almost entirely." On the same normal-curve arithmetic the shared area is about 94% at
   .15 but about 87% at .33, the figure the sentence follows. **Fix:** "the two groups overlap far
   more than they differ", or keep the claim for .15 only.

6. **P6 [minor] Cold start: d, "significant" and Cohen's bands.** Mental Fitness lesson 2, the
   lesson this one points to, teaches Hedges' g and a table at 0.2 / 0.3 / 0.5 / 0.8; it never names
   d or Cohen's bands. L.291 uses "d = .15" bare, and l.311 to 316 use "significant moderator"
   three times without a gloss. **Fix:** at l.291, "d = .15 (d is the same kind of standardised
   difference as the g in that lesson)"; at l.310, "Gender composition was not a significant
   moderator (the difference between the two figures could have been chance)"; the caption's
   "Cohen's conventions" is fine once the body says where the bands come from.

7. **P7 [minor] No worked example with a gap.** The style guide asks for one; the campsite asks for
   all four classifications cold, and Radka and the colleagues are fully worked. **Fix:** work line 2
   in the body before the checkpoint ("Take line 2. Delphine's 'mm' lands mid-sentence and claims
   nothing: Idris doesn't pause. That's a continuer.") and ask for the other three in the checkpoint,
   deleting the line 2 paragraph from the answer.

8. **P8 [minor] The cost of an intrusive interruption is illustrated, not explained.** The outline's
   mechanism was "why an intrusive interruption costs more than its seconds". The lesson gives the
   definition (floor taken mid-unit) and Radka's constructed "the tiredness and the ankles don't come
   up again", but no sentence says why. **Fix**, labelled, after Radka's paragraph: "On **this
   course's reading**, the cost is not the 11 seconds. The doctor's question picks the topic, the
   patient answers it, and the rest of her list has to wait for a new opening she may not get."

9. **P9 [minor] Items 1 and 6 replay the body's own cases, and item 6's explain misattributes.**
   Ottoline's word search is the campsite's line 4 with names changed; Tamsin's "Yes! And..." is
   Tobiah's "Yes, and that means..." (defect 5b). Item 6's explain says "lesson 1 showed that people
   notice timing differences of a fraction of a second"; lesson 1 showed answers come within a
   fraction of a second, and it is lesson 2 that shows a delay being heard. **Fix:** move item 6 to a
   different surface (a family phone call; a quick "right, right, and" from a flatmate) and change
   the explain to "and lesson 2 showed that a pause of about a second is heard and read".

10. **P10 [minor] Item 5's key is cut off.** "Wait a moment, since the pause may be her thinking
    rather than the end of what she has". **Fix:** "...rather than the end of her story". (If P2's
    edits change lengths, rebalance.)

11. **P11 [minor] Voice: a roadmap paragraph and a teaser in the opening.** L.125 to 128: "turns
    out to be more interesting than either its defenders or its critics usually say. This lesson
    sorts the kinds of overlap, looks at what the gender research found, goes back to the clinic for
    the numbers, and ends with the practitioners' oldest advice: leave a silence." That is the
    "In this lesson we will" shape, and "usually say" is an unsourced claim about critics.
    **Rewrite:** "And one of the most repeated claims about conversation, that men interrupt women
    far more than the reverse, has an answer that fits neither slogan. The oldest advice on all of
    this is the practitioners': leave a silence."

12. **P12 [minor] Voice: sentences that sound written, not said.** Each with a rewrite:
    - L.137: "who spent a long paper on overlap" → "who wrote a sixty-page paper on overlap".
    - L.212: "Nobody in the room was trying to dominate anyone. Two habits met." One-line moral, and
      the first sentence goes beyond the quotation. → "On Tannen's account, nobody was trying to
      dominate anyone; two habits met."
    - L.242 to 243: "This is an advocacy body's advice, drawn from the people it speaks for, and the
      right source for it." → "This is advice from an advocacy body, and on how it feels to be
      talked over, the people it speaks for are the right source."
    - L.381 to 383: "Medicine is the one field that timed its own listening ... and that goes in every
      sentence." "The one field" is an unsupported absolute and "goes in every sentence" is pipeline
      talk. → "Medicine has timed its own listening, and its figures are the best this course found
      on interrupting and on letting people finish. Every one comes from a doctor with a clock and an
      agenda talking to a patient, which is not two friends talking, so each is given with its
      setting."
    - L.438 to 439: "These are **practitioner advice**" (number) → "This is **practitioner
      advice**".
    - L.489 to 490: "but it is the one this course found that let everyone finish and timed it." →
      "but it's the only study this course found that let every patient finish and timed them."

13. **P13 [minor] SVG: no axis title, and a label nearly touching the 0.2 line.** Renders
    legibly in both themes at 375 and 720 px; every row named in text; values exact; no `<g>`,
    `var(--token, #literal)` fills, `<desc>` present. But the axis carries only 0 / 0.2 / 0.4 with no
    title, so a reader landing on the chart does not know the unit. And with IBM Plex loaded, "Intrusive
    only (17 studies)" ends at x ≈ 196 against the dashed line at 200; a slightly wider face or a
    browser zoom puts the line through the label (defect 3's struck-through-label form). **Fix:** add
    `<text x="20" y="326" ...>Effect size d (positive: men interrupted more)</text>` and grow the viewBox
    height to 340, and start the dashed line at y="44" (below the first label) or shorten the label to
    "Intrusive only (17)".

14. **P14 [minor, course-wide] The course project is referenced and not written.** L.516 to 519:
    "The course project asks you to practise one habit for two weeks and measure it; waiting a breath
    is one of the options". `assessments/` does not exist (defect 12). Lessons 1 and 4 already refer
    to it, so the fix is the course's, not this lesson's: write the project (OUTLINE l.1688) before
    publish. Belongs in `course-wide.md`.

**Nit (not numbered):** item 3's explain ends "and the doctors had been trained to wait and told not
to ask questions, not to cut in", which reads as a slip; → "and the doctors had been told to wait,
not to cut in, which answers the last option."

**Checked and fine:** opening gives a reason to care in the first paragraph; the three gender
positions each have a best case in their own terms and the misconception list names an error on each
side (neutrality proper is Reviewer F's); every "if you got X" traces backwards (l.160, l.197, and
each quiz explain); objectives are testable and each has a quiz item; both exercises are real
practice with a safety carve-out; "compared with what?" is lesson 1's third question and resolves;
Personal Safety lesson 8 "Talking it down" exists and is published; lesson 15's title matches the
outline; Go deeper gives four items with read levels.

## 2026-09-26 — Lesson 05 — Stage 4, Tier B, Reviewer F

**Reviewer:** Reviewer F (facts, neutrality and safety), fresh context. Read `review-lesson.md`
passes 2 and 3, standards Parts 2 and 3, the drafter defect list, `courses/CLAUDE.md`, the drafter's
notes, OUTLINE lesson 5 and its neutrality notes, SOURCES Part B §1.5, §2.1 to 2.2, §3.1 to 3.3, D2,
D14 and "Gate closures, lesson 05/06". Primaries downloaded today with curl (generic browser
User-Agent) and converted with pdftotext or tesseract: Anderson and Leaper 1998 (eScholarship PDF,
29 pp.; the item page is behind a WAF challenge, the `/content/qt5ws13704/qt5ws13704.pdf` path is
not), Zimmerman and West 1975 (Stanford scan, OCR'd at 200 dpi, pp. 105, 111 to 117, 125 read),
Tannen 1989 (author's site, `/s/Interpreting-Interruption-in-Conversation.pdf`, text layer), Singh
Ospina et al. 2019 and Langewitz et al. 2002 (PMC), STAMMA, Samaritans, R U OK?, the
Calgary-Cambridge list, the Smithsonian guide, Poynter (Internet Archive 20260728140410) and
Essential Partners.

**Quotations, string-matched against the primaries (whitespace and punctuation normalised):** all
verified. Anderson and Leaper "negligible", "small but substantial", "should be considered with
caution", "potentially reflects some form of researcher bias"; Zimmerman and West p. 105 sentence
and "We are not claiming"; Tannen "supportive rather than obstructive, evidence not of domination
but of participation" and "hesitated, faltered, or stopped, feeling interrupted and, more to the
point, dominated"; Singh Ospina "may clarify or focus the conversation, and thus be beneficial to
patients"; both Langewitz sentences; all three STAMMA passages; Samaritans (both), R U OK?,
Calgary-Cambridge item 10, Smithsonian, Poynter, Essential Partners. No quotation is re-worded
inside its marks.

**Numbers, redone by hand:** Φ(0.33) = 0.629 and Φ(0.15) = 0.560, so "about 63%" and "about 56%"
hold (U3, normal, equal variances; labelled as the course's arithmetic). 27/40 = 67.5% ("two times
out of three"); 40/112 = 35.7%; 46/48 = 95.8%; 98% is on p. 115 and Table 2 on p. 116, confirmed;
13 of 48 in one segment; 20 + 11 = 31; 7/335 = 2.1%; 258/335 = 77.0% (paper prints 78%, which is 258/331, the
figure's denominator; lesson follows the paper); 234 s = 3.9 min ("nearly four minutes"); age bands 77 / 92 / 108 s; Table III
weighted d: overall .32 (abstract and discussion .33), women first authors .54, men −.21, same .24,
mixed .11, **both .56**, dyads .13, groups .63 (results text .31), strangers .38, familiar .19, lab
.31, naturalistic .76, unstructured .73, instrumental .05. SVG widths at 900 px per unit correct.
Every figure the lesson prints is right; the findings below are about which figures, and what is
drawn from them.

**Count before tone (whole lesson).** Dominance view: 2 quotations (Z&W), 5 citations, and five
limitations itemised (small, white and middle class, covert recording, 98 against 96, 13 of 48 in
one segment); its authors' own robustness check and its reply to the style objection absent; no
dominance scholar after 1975 speaks. Contextual view (A&L): 8 citations, explained at length, a
chart, one limitation (three naturalistic studies). Style view (Tannen): a whole section built on
her lens plus a position bullet; one limitation (she was a participant). Last word in the section:
"partly about what should be counted", which is Tannen's framing. Misconception list: one error
per side ("far more" and "myth"), balanced as the notes say, but the correction to the first rests
on F1. Every contestable inference drawn from A&L (F1, F2) runs against the dominance reading.
Verdict: **fails at the level of selection** (defect 14), not accuracy; every sentence is true or
nearly so.

**Findings:**

1. **F1 [major] The chart's punchline and the quiz key's explanation rest on a non-significant
   contrast, against the authors' own reading, with the third category left out.**
   L.353 to 355: "Look at the bottom bar. The specific claim, that men interrupt women, is the one
   the pooled data support least." Repeated in quiz 2's explain ("so the cross-sex version is the
   least supported"), in the misconception at l.472 to 473 ("negligible in mixed-gender talk"), and
   primed by the predict at l.277 to 279 ("The answer to the second part surprises most people",
   an unsourced claim; P3 covers its form).
   Evidence: A&L p. 240, "Contrary to expectation, gender composition did not act as a significant
   moderator", and "when same- and mixed-gender interactions were analyzed separately, combined
   significance levels were all nonsignificant". Discussion p. 245: "Our results are consistent with
   Aries' (1996) conclusion", which was "no pattern of gender difference related to gender
   composition". Table III: same-gender .24 (k = 5, N = 190), mixed .11 (k = 7, N = 291), **both
   .56 (k = 5, N = 378)**, which is why the overall intrusive d (.33) sits above both bars the chart
   shows. P. 228 frames the contrast as the test of the status-and-power mechanism (James and
   Clarke's prediction of a larger mixed-gender effect), so the lesson reads a null moderator result
   as a finding against the dominance view, which the authors do not.
   Fix: rewrite l.353 to 355 along these lines: "Look at the bottom two bars. In mixed-gender talk
   taken alone the difference was negligible (.11), smaller than in same-gender talk (.24). But the
   authors found the gap between the two wasn't statistically reliable, studies that reported both
   kinds of talk together showed .56, and their reading was that the gender make-up of the
   conversation made no consistent difference." Add the "both" bar to the SVG (width 504 at 900
   px/unit, so widen the scale to 0.6 or name it in the caption and desc). Quiz 2 explain: replace
   the cross-sex sentence with "and it made no reliable difference whether the talk was mixed or
   same-gender". Misconception l.472: "and not reliably different between mixed- and same-gender
   talk". Predict answer: drop the promised surprise.

2. **F2 [major] Moderator selection and significance-marking lean one way.** L.303 to 316 state
   significance only for the two non-significant moderators and for author gender ("This one was a
   significant moderator"), which reads as though it alone was. Setting and activity were also
   significant (p. 242 to 243: focused comparisons Z = 2.73 and 2.91 for setting, 2.52 and 3.18 for
   activity), and those are the moderators that favour the dominance reading. Group size, which the
   abstract names first under "Most notably" and the conclusion calls "a significant moderator"
   (p. 247), is omitted, while familiarity and gender composition, both non-significant, are listed.
   The authors' gloss on it is a dominance reading: "To the extent that intrusive interruption is a
   manifestation of dominance, larger and more public group settings may be especially likely to
   elicit this behavior in men" (p. 246). D2's inconsistency (.31 in the results, .63 in Table III
   and the discussion) is a reason to print no single number, not a reason to drop the moderator.
   The dominance bullet at l.359 to 362 likewise omits naturalistic .76, its largest figure.
   Fix: add "This was a significant moderator" to the Setting and Activity bullets and change
   "This one was" to "This too was". Add a bullet: "Group size. Larger in groups of three or more
   than in pairs (d = .13 in pairs; the paper prints both .31 and .63 for groups, so this course
   gives no single figure). The authors list it among their most notable results." Add ".76 in the
   few natural settings studied" to the dominance bullet's best case.

3. **F3 [major] Zimmerman and West's clustering is stated without their own answer to it.**
   L.267 to 268: "One conversation, between a female teaching assistant and a male undergraduate,
   held 13 of the 48." Standing bare, this is the critic's point. The authors raised it themselves
   (p. 116): "Ten of the 11 male-female segments exhibited interruptions, ranging from a low of 2 to
   a high of 13 and averaging 4.2 per transcript", against same-sex interruptions "concentrated in
   only 3 of the 20", so interruptions were "almost uniformly distributed across cross-sex pairs".
   And the 13-interruption segment is the one "formal status relationship" (p. 112, note 6) in which
   the woman was the superior, which they offer as evidence that sex outweighed status. The gate
   closure in SOURCES records "ten of the 11 cross-sex segments had interruptions, from 2 to 13";
   the research was gathered and dropped (defect 1), and the outline's instruction that Z&W not be
   dismissed is not met by the paragraph as it stands.
   Fix: "One conversation, between a female teaching assistant and the male undergraduate she was
   teaching, held 13 of the 48, but interruptions turned up in ten of the eleven cross-sex
   conversations, against three of the twenty same-sex ones, which the authors took as a pattern
   rather than one unusual pair."

4. **F4 [minor] Covert recording understated.** L.260 to 261: "Some of the public recordings were
   made without the speakers' knowledge; the authors sought consent afterwards where they could."
   Pp. 111 to 112: in public places whatever the authors "could hear ... was deemed eligible for
   taping", consent was sought "Whenever possible" afterwards, and in the private homes "consent was
   uniformly obtained after recording", with a reference to "the covert procedure". None of the
   speakers knew beforehand. Fix: "The recordings were made without the speakers' knowledge; the
   authors sought consent afterwards, which they could not always do in public places, and the tapes
   were erased once transcribed."

5. **F5 [major] The dominance view and the woman who is talked over fail the Turing test; Tannen
   gets the last word and her own concessions are cut.** L.359 to 362 give the dominance view only
   "the observation that launched the field" and the average; l.367 to 368 give Tannen's objection
   and nobody answers it; l.212 "Nobody in the room was trying to dominate anyone. Two habits met."
   Evidence: (a) the literature's reply to the cooperative-overlap objection is the intrusive
   category itself, and A&L found the difference concentrated there (p. 244: "any tendency for
   gender differences ... may be more likely to be detected when the more narrowly defined intrusive
   interruption category is used"); a dominance scholar would insist on that. (b) Tannen 1989 reports
   the dominance side's rejoinder to her, that treating gender differences as cultural difference is
   "covering up real domination with a cloth of cultural difference" (Henley and Kramarae 1988, as she
   gives it), and says "I am sympathetic to this view". (c) She writes that the felt interruption was
   real: "Neither, however, was it the creation of the imaginations of those who felt interrupted."
   (d) Her conclusion opens "As a woman who has personally experienced the difficulty many women
   report in getting heard in some interactions with men". The lesson has no sentence for that
   experience; a woman regularly talked over at work meets her complaint first as a slogan in the
   misconception list.
   Fix: dominance bullet, add: "Its answer to Tannen is that the intrusive category already sets
   cooperative overlap aside, and that is where the difference was concentrated." After l.212, add
   Tannen's point that the Californians' sense of being dominated was not imagined. In the gender
   section, one sentence: many women report difficulty being heard in talk with men, as Tannen
   herself writes, and an average over 43 mostly short lab studies cannot say what happened in any
   one woman's meetings. Optionally give the Henley and Kramarae rejoinder as Tannen reports it.
   Copy each of these strings into SOURCES Part B §3.1 first (all [V] from the author's PDF today).

6. **F6 [minor] The "no consistent difference" position appears only as a slogan.** L.476 to 478
   treat "the gender difference is a myth" as the opposite error, but its scholarly form was the
   standing conclusion before 1998: two narrative reviews (James and Clarke 1993; Aries 1996)
   "concluded that there is no consistent evidence that men do indeed interrupt more than women", and
   A&L say their result "both contradicted and confirmed" them (pp. 243 to 244). Fix: one sentence
   in "What 43 studies found" giving that, labelled as known via A&L, and record both reviews in
   SOURCES as read at one remove.

7. **F7 [major, one-line fix] Tannen's dinner is described with details her 1989 paper does not
   contain, attributed to that paper.** L.202 to 204: "In a 1989 paper she summarised her earlier
   book, built on about two and a half hours of a taped Thanksgiving dinner in 1978 among six
   friends"; l.214 to 215 "Tannen herself was one of the six"; Sources 7 "Her 1984 book is described
   as she summarises it here". The 1989 text says only "a two-and-a-half hour dinner table
   conversation that I analyzed at length (Tannen 1984)"; the one "Thanksgiving" in it is an ASL
   sign in a transcript, and "1978" and "six" do not occur. SOURCES Part B §3.1 says the book's
   details came "from search-result descriptions", and D14 says to check the book before giving
   "six speakers, dinner, 1978". Defect 22, second form. (That Tannen took part is in the 1989
   paper: she appears as "Deborah (the author)" in its transcripts.)
   Fix: "built on about two and a half hours of dinner-table conversation among friends, Tannen
   among them", and "Tannen herself took part" at l.214; or keep the details and say in the body
   that they come from descriptions of the book, which this course has not read.

8. **F8 [minor] The Basel protocol's five-minute ceiling is left out, and quiz 3 says the reverse.**
   Quiz 3 explain: "the doctors had been trained to wait and told not to ask questions, not to cut
   in". Langewitz: doctors "were advised to interrupt if a patient talked for more than five
   minutes"; for the seven who did, "doctors felt that the patients were giving important
   information and should not be interrupted". This bears on the "go on forever" misconception
   (l.488 to 490) and on l.433 to 434. Fix: add at l.407 "and to cut in only if a patient passed
   five minutes; for the seven who did, none of the doctors chose to"; in quiz 3 end at "told not to
   ask questions" and add the ceiling.

9. **F9 [minor] "Medicine is the one field that timed its own listening"** (l.381). A universal with
   no source; classroom wait-time research timed teachers' pauses, and nothing in SOURCES supports
   "the one". Fix: "Medicine is the field this course found that timed its own listening".

10. **F10 [minor] "Nobody treats it as a problem" overclaims Schegloff and contradicts the lesson.**
    Quiz 1 explain ("the kind Schegloff lists as help finding a word, and nobody treats it as a
    problem") and l.137 to 138 ("the kinds that nobody in his recordings treated as a problem").
    SOURCES §1.5: "Many overlaps are not treated as problems at all"; and the Gwilym case is this
    lesson's own example of help with a word treated as a problem. Fix: "which Schegloff lists among
    overlaps speakers don't usually treat as a problem" in both places.

11. **F11 [minor] "Studies after 1998 exist, in courts and meetings among other places"** (l.372 to
    373). No study is named in SOURCES; Part B's own line is an unsourced parenthesis. Defect 22,
    third form. Fix: "Later studies exist, but this course has not reviewed them."

12. **F12 [minor] Position labels are the course's, not the holders'.** "The small-and-contextual
    view": A&L call theirs a "contextual-interactive model of gender" set against "the essentialist
    model" (pp. 247 to 248), and their gloss on groups is itself a dominance reading (F2), so the
    label overstates their distance from the first position. "The badly-posed view" is SOURCES'
    label; Tannen's is conversational style. Standards 3.3. Fix: "The contextual view (Anderson and
    Leaper's 'contextual-interactive model')"; "The style view (Tannen)", keeping "badly posed" in
    the bullet's text as the claim it makes.

13. **F13 [minor] "Two decades"** (l.416). The papers are 17 years apart and the data nearer a
    decade (Basel c. 2001; the Mayo trials published 2008 to 2015). Fix: "two studies, two countries,
    and trials seven to fourteen years apart" or "published seventeen years apart".

14. **F14 [minor] A hedge firmed up in a lead-in** (defect 19). L.389 to 390: "which the authors put
    down partly to patients saying they had nothing else to raise". Singh Ospina: "Our estimate is
    much briefer perhaps because many completed statements correspond to patients indicating that
    they had no concerns." Fix: "which the authors suggest may be because many of these patients said
    they had no concerns".

**Verified with no finding:** the Langewitz design, sample, means, median, 78%, age bands, referral
caveat and both quotations; Singh Ospina's 112, 40 (36%), 27 of 40, 11 s, range, 6 s, settings,
limitation and counter-view; the 1984 figure given only as Singh Ospina report it (Beckman is on
the unread line and is not named); Z&W's 31 segments, three quarters public, 7 and 22 same-sex, 48
and 46 cross-sex, 98 against 96 with pages, conclusion and limit (the paraphrase of the clipped
p. 125 sentence matches the full sentence, "We are not claiming that male-female conversations
invariably exhibit the asymmetric patterns reported in this paper", readable in today's 200 dpi OCR with only line-final letters clipped); A&L's
43 studies, 17 intrusive, sample and interaction-length caveats, author-gender moderator and the
authors' symmetric reading, reported with no insinuation about either group (the outline's check
passes); Tannen's two styles and the counting argument; STAMMA's advice and its reasons; every
practitioner line, each labelled as practice. The three course readings (intrusive = self-selection
where no transition place was; invitation makes help cooperative; a pause leaves 1c open) are each
labelled where the reader meets them. The Radka case is labelled as constructed and its "if her
clinic were like Basel's" transfer is appropriately limited.

**Safety:** pass. The practice exercise excludes someone upset; the lesson points talk with someone
threatening to Personal Safety lesson 8; nothing assesses risk; the Samaritans and R U OK? lines are
used for ordinary pauses and labelled as their advice for supporting someone. No crisis callout is
needed at this lesson's content.

**Perspectives checked:** a scholar in the dominance tradition (fails: F1, F2, F3, F5); a scholar of
conversational style (passes; F12 label); Anderson and Leaper as they would describe their own
model (F12); a woman regularly talked over at work (fails: F5); a man told he interrupts (passes:
the style section and "says nothing about any particular man"); a high-involvement speaker (passes);
a person who stammers (passes: STAMMA in its own words, the course's reading labelled); a reader who
holds the pre-1998 "no consistent difference" view (F6); a clinician who interrupts to focus a visit
(passes: the authors' counter-view quoted).

**Totals:** 0 critical, 5 major (F1, F2, F3, F5, F7), 9 minor. No heavy rewrite: the gender section
needs about four paragraphs revised, one bar added to the chart and one quiz explanation changed;
F7 is one sentence.

### Resolutions applied

Fix pass 2026-09-26, fresh context (neither drafter nor reviewer). Primaries re-fetched with curl
and string-matched: Anderson and Leaper 1998, Tannen 1989, Zimmerman and West 1975 (pp. 111, 112,
116, 125, 126 OCR'd at 200 dpi), Langewitz 2002, Singh Ospina 2019. New reads appended to SOURCES as
"Gate closures, lesson 05 review (2026-09-26)", which also records three SOURCES corrections: Part B
§3.1 (Thanksgiving / 1978 / six friends are not in the 1989 paper), §3.2 (all recordings covert,
not "some"), §3.3 (the "both" row, .56, omitted; group-size sentence garbled; group size's focused
test only marginal).

**Reviewer P**
- **P1 fixed.** Item 1's stem now carries a verbal request ("oh, what are they called, the tall
  purple ones?") on a new surface (a garden, "Foxgloves?"); explain says she invited it. Body
  contrast sharpened as suggested: what the pause was (a lost word, said so) against a stammer block.
- **P2 fixed** by softening distractors, not the key: item 2 C ("Little overall difference, and what
  there is disappears...") and D ("mainly in mixed-gender pairs... more often"); item 3 A ("probably
  ... likely"); item 5 A and D ("may"). Item 2's key reworded away from the body's summary sentence.
- **P3 fixed.** Predict answer gives .15 and .33 and the mixed-gender result, framed per F1; teaser
  gone.
- **P4, P5 fixed.** "the overall 0.15, across every definition"; "overlap far more than they differ".
- **P6 fixed.** d glossed against Mental Fitness lesson 2's g; "significant" glossed once before the
  moderator list and again at gender composition.
- **P7 fixed.** Line 2 worked in the body before the checkpoint; the checkpoint asks for the other
  three and its line 2 answer is removed.
- **P8 fixed**, labelled "this course's reading", after Radka.
- **P9 fixed.** Item 6 moved to a family video call (Leofric, "Right, right, and...", aunt
  Winifred; names grep-clean); explain now cites lesson 2's heard silence, not lesson 1. Item 1
  moved to a garden (P1).
- **P10 fixed** ("rather than the end of her story").
- **P11 fixed** (roadmap and "usually say" removed; reviewer's rewrite).
- **P12 fixed**, all six (sixty-plus-page paper; Tannen's account; advocacy-body line; medicine
  opener, also F9; "This is practitioner advice"; "the only study this course found that let every
  patient finish").
- **P13 fixed.** Chart redrawn: axis title added, value labels moved into the row labels, the 0.2
  and 0.5 band lines drawn only across the bar rows so no label can cross them.
- **P14 referred** to `course-wide.md` (the project is the course's, not this lesson's).
- **Nit fixed** with F8 (item 3 explain).

**Reviewer F**
- **F1 fixed.** "Look at the bottom bar... least" replaced with the reviewer's reading: mixed .11
  and same .24 not reliably different, "not separated" .56, authors' reading of no consistent
  composition effect. Chart gains the .56 bar (scale widened to 0.6, a moderate band added at 0.5 as
  the authors call .54 and .63 moderate); caption and desc say the three are not reliably different.
  Quiz 2 explain and the misconception line changed as suggested.
- **F2 fixed.** Setting and Activity marked significant with the other two; "This too was"; a Group
  size bullet with no single groups figure (.31 / .63), the authors' dominance gloss quoted, and the
  fact the direct test was only borderline (Z = 1.47, p < .10; effect sizes n.s.), which the reviewer
  did not mention. Dominance bullet gains .73 and .76.
- **F3 fixed.** Zimmerman and West's own answer (ten of eleven cross-sex, three of twenty same-sex,
  "systematic") and footnote 5 (the TA outranked him; the study's only two female interruptions;
  eleven to two).
- **F4 fixed** (all covert; consent afterwards, not always obtainable in public).
- **F5 fixed.** Tannen's "Neither, however..." after the dinner; a paragraph after the positions with
  Henley and Kramarae's rejoinder as Tannen reports it, her reply quoted in full (not trimmed to
  "sympathetic"), the intrusive-category answer labelled as this course's reading (no post-1989
  dominance scholar has been read), and Tannen's "As a woman who has personally experienced..."
  with the average-cannot-speak-for-one-woman sentence. Section's last word changed from Tannen's
  framing to "what the difference means, whether power, situation or style, as about its size".
- **F6 fixed.** James and Clarke 1993 and Aries 1996 given as Anderson and Leaper report them, with
  "both contradicted and confirmed", and a line that the course has not read them.
- **F7 fixed.** "about two and a half hours of taped dinner-table conversation in which Tannen
  herself took part"; "took part in the conversation she analysed". SOURCES §3.1 corrected by note.
- **F8 fixed** in body (advised to cut in past five minutes, to keep to schedule) and quiz 3 explain
  (doctors judged the seven were giving important information).
- **F9 fixed** (with P12). **F10 fixed** in body and item 1 explain ("don't usually treat as a
  problem"). **F11 fixed** ("Later studies exist, but this course has not reviewed them").
- **F12 fixed.** "The contextual view (Anderson and Leaper's "contextual-interactive model of
  gender")"; "The style view (Tannen)", with "badly posed" kept as the claim.
- **F13 fixed** ("papers published seventeen years apart"). **F14 fixed** ("suggest may be because
  many of these patients said they had no concerns").

**Declined:** none.

**Final measures.** 6,451 body words (validator count); `minutes: 85` (measured 85, was 80). Bold
10.1 and contractions 7.6 per 1,000. Three `:::predict`, two `:::checkpoint`, one worked case with a
gap (campsite line 2). No em dash, no banned word (one "Fostering" is a title). Quiz keys 3,0,1,3,2,1
unchanged; all four positions, no adjacent repeat, no identity, value shift or shared run of four
with lessons 01 to 04 and 06 to 08 (script). Option-length spreads 2, 4, 6, 4, 12, 7; key sole
longest only in item 4 (by 4). Each explanation read against its keyed option. Chart rendered
headless with `site/assets/styles.css` in both themes at 343 and 720 px: nothing clipped, no line
through a label. New names: Leofric, Winifred (Tamsin and Hesper removed); Ottoline kept. `npm run
quotes conversation-and-listening`: no miss in lesson 05. `npm run validate`: exit 0, no line for
this file.

**Status after review:** clean.
