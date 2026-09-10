# Reviews: Logic and Argument — 02-valid-and-sound

Append-only. Newest at the bottom.

## Lesson 2, "Valid and sound" — Stage 4 round 1, 2026-09-06

All five reviewers recorded. Fixes below are NOT yet applied; this is a work order.

**Verdict: not clean for publish.** The prose is the best-written in either course (119 contractions
in 5,344 words, zero em dashes, zero banned vocabulary, no sneering). The failures are integrity,
media and quiz.

### BLOCKING

**L2-B1. The lesson cites two textbooks that were never read, and SOURCES.md says so.** Hurley is
cited three times and is the sole authority for the myth-correction section, described as "the most
widely assigned introduction to logic in the United States". Copi is cited once. SOURCES.md records
Hurley's content as "confirmed against several course summaries of the book rather than the 14th
edition itself", lists "Hurley's section numbers" among items still "via secondary source", and
records Copi ch. 4 as "from memory of the 14th ed." There is no draft-time entry for either. The
lesson's Sources notes then restate those unverified descriptions as though the books were read.
OUTLINE.md states the rule that was broken: **"the bar is read-it-or-omit-it."** Fix: read Hurley
ch. 1 and Copi ch. 1 and record them, or re-source to Van Cleave, which is free, CC BY, and whose
sections 1.6 Validity, 1.7 Soundness, 1.8 Deductive vs inductive cover exactly this syllabus.
Van Cleave is in SOURCES.md, is linked by lesson 1, and is absent from this lesson.

**L2-B2. "Counterexample" is defined one way, taught a second, practised a third.** Line 72 gives
the semantic notion (a possible case where premises are true and conclusion false, from *forall x*).
Line 98 teaches substitution into a form. Line 239 instructs "keep the shape, swap the content", and
the model answers at 248 then do not swap content, they describe possible cases with the same
content. Objective 1 commits to one reading and objective 2 to the other. Fix: name both, say how
they relate, and note Copi's term for the substitution technique, refutation by logical analogy.

**L2-B3. Three of six quiz items key on material lifted from the body**, giving 2 genuine
application items against 4.3's floor of 3. Q3's key is the lesson's own worked example with
premises reordered; Q5's key is line 140 verbatim; Q6's key is the opening example. Q5 additionally
leaks three ways: longest option, only option without a probability hedge (the three distractors say
"almost certainly" or "probably"), and recognisable from the text. Q4 contains a self-refuting
distractor ("prompts closer checking" predicts lower acceptance, not higher) and a believability
pair that does not split, since both conclusions are widely believed. Q1's stem asks "which verdict
is right" when two options give the correct verdict and differ only in reason. Full replacement
items for Q3, Q4, Q5 and Q6 are in the pedagogy report. **Answer keys are `1,2,3,1,2,0`, properly
spread with index 3 used; the never-D habit seen in Bible Basics does not appear here.**

**L2-B4. The Practice section prints a 174-word answer key in plain body text**, immediately under
"Do the work on paper before you read the answers." Six good retrieval items with the retrieval
removed. Lesson 1 does this correctly with `:::checkpoint Open this when your five answers are
written.` Same defect as Bible Basics lessons 1 and 2.

**L2-B5. Three standard-form argument displays render with the conclusion inside a premise.**
Already fixed in lessons 4, 5 and 7 and caught by the linter; lesson 2's three remain. Fence them
with a rule as Logic lesson 1 does.

### Neutrality (Part 3, neutral ground)

**L2-N1. "The practical fact, which no one disputes: a conclusion you agree with gets less checking
from you than one you don't."** Asserted as undisputed one sentence after citing the people who
dispute it. Dube, Rotello and Heit argue belief shifts the criterion for saying "follows", not the
accuracy of reasoning: on their account you check just as hard and are more willing to say yes.
This is the lesson's load-bearing takeaway. Fix: state the actual shared ground (a believed
conclusion is more likely to get endorsement, whether or not the argument earns it), and note the
practical advice survives either account.

**L2-N2.** Dube, Rotello and Heit are unnamed in the body while Evans is named a dozen times, and
their reason is omitted, so a live challenge reads as a contrarian aside. The framing clause also
misdescribes them: they do not say "we cannot tell", they say "we can tell, and the answer is
response bias."

**L2-N3.** "It's larger on invalid arguments" is placed in the established column, but that
interaction is precisely the quantity Dube et al. argue is a measurement artefact.

**L2-N4.** The lesson calls 71% vs 10% "a sixty-point gap" and then cites a replication as support
while omitting that replication's own figures, which SOURCES.md records: 70% and 29%, a 41-point
gap. Including it makes the lesson stronger; the direction is robust, the magnitude moves.

**L2-N5.** Practice item 6 uses voting eligibility for a foreign national. Immigration is a named
3.4 domain and the course's own convention restricts examples to everyday hypotheticals. The
logical point (a necessary condition mistaken for sufficient) needs no immigration content. Suggested
replacement: library borrowing and a borough resident who never registered.

**L2-N6.** Minor, all with fixes in the report: the Evans cell labels ("believable"/"unbelievable")
stated in the author's voice rather than as the experimenters' 1980 norming; "prejudiced" quoted
from 1983 usage without glossing that it meant pre-judged; "Where the two disagreed, judgement fell
to a coin toss" (participants were not guessing, they were systematically following belief, which is
worse); "you can't switch belief bias off" as an unsourced absolute; "the part the textbooks were
slower to admit" imputing motive; "the subjects in 1983 had the definition in the instructions"
(they were told to accept only what necessarily follows, which is not the same, and the difference
is exactly what the misinterpreted-necessity account turns on).

### Depth and media

**L2-D1. No figure, chart, diagram or video anywhere**, in a lesson whose central object is a 2x2
table the reader is explicitly told to memorise. The four cells are rendered as four bold
paragraphs. 4.5 says draw a structure when the structure is the point, and the teaching point here
is *which cell is empty*, which is a spatial fact prose cannot carry. Caution from the reviewers:
SOURCES.md records that Evans 2003 Figure I has no printed numbers and the valid-cell figures are
unverified, so a four-bar chart of the 1983 data **cannot honestly be drawn**. Draw either the two
verified bars (71 vs 10) or Lambell's replication 2x2 (74/59/70/29) captioned as the replication.
Do not copy lesson 10's SVG as a template; it hardcodes colours and uses font-size 9 and 10, and the
linter warns on it.

**L2-D2. Zero links in 4,713 words**, the only lesson in the course with none (lesson 1 has 13,
lesson 8 has 23). *forall x* is quoted five times and never linked; line 272 prints its URL as dead
text. Evans 2003 and the Lambell PDF are both free and recorded as read.

**L2-D3. "A failed attempt proves nothing, and a successful one proves everything"** is the
simplified version. Massey's asymmetry is in SOURCES.md, verbatim from SEP: "no argument can be
convicted of being a fallacy on logical grounds", because an argument instantiates many forms.
Three sentences convert a claim an expert would flag into a set-up for lesson 8.

**L2-D4. The Evans demonstration is pre-labelled**, so the learner cannot feel the effect the lesson
is about. The four syllogisms appear under headings that give away their cells, four lines after the
lesson promises "you'll feel the pull". OUTLINE specified the opposite and it was dropped: "The
learner rates both before the pattern is named."

**L2-D5. The verified replication 2x2 sits unused** (74/59/70/29), while the lesson asserts the
valid-row claim bare. **L2-D6.** The presentation-order manipulation in the paper the lesson cites
as [6], whose title names it, is never reported, while the lesson's practical payoff is "the fix is
an order of operations". **L2-D7.** No free-recall block before the quiz, which lessons 5, 6, 7 and
10 all have. **L2-D8.** "Misinterpreted necessity" is described and never named. **L2-D9.** Klauer
and Dube cited by decade rather than author, against the outline's own convention.

### Voice and pedagogy

Four "Here is" openers, the first being the lesson's opening words. Pipeline vocabulary in four
headings and twice inside sentences, including "The mechanism the outline of this course uses",
which references a document the learner has never seen. Five paragraphs ending on a compressed
one-line moral. An invented statistic ("a quarter") with no source in a lesson that footnotes
everything else. A 57-word sentence. The spaced-review item answers itself in six words.
`minutes: 40` against a measured 70.

### Split verdict: DO NOT SPLIT

Both reviewers who considered it agreed, for different reasons. The halves are one-directional
dependants: every Evans syllogism requires the validity method from the first half, and the
cigarettes counterexample is worked with it. The opening damp-versus-cats pair sets a promise that
only the second half cashes, so a split leaves 2A promising what it never delivers and 2B with no
opening. At 6,738 words it is the second-shortest of the ten lessons in this course, and no padding
was found. **Instead:** set minutes to 70, add one sentence marking where to stop and come back,
and move the detachable 257-word "myth worth clearing away" section to lesson 5, where the
deductive/inductive contrast is working rather than an aside.

### What is working, and must survive

The opening two paragraphs (damp argument, then the same skeleton in cats and dogs, then "Same
skeleton. The second version is obviously broken, and that means the first one was broken too"):
example before rule done exactly right, and the best teaching move in either course so far.
"A valid argument with a false premise is a perfectly built bridge starting from the wrong bank."
"Your neighbour might still be right about the damp. Their argument didn't show it." The Symmetry
callout ("It's tempting to read belief bias as something other people have. It isn't"), which
satisfies the outline's neutrality note 4 and which most treatments of this material fail. The
honest limits at lines 190 and 200 ("I'm not going to pretend that's resolved"). Every `explain`
field teaches all three distractors and every letter reference is correct, with no off-by-one
anywhere. Both halves of the 1983 result are reported, including "equally substantial effects of
logic", which is what an ecological-rationality reader would insist on against a deficit narrative.

### Fact-check (all quotations verified; the 1983 primary paper was obtained and read)

**L2-F1. [major] The 71% and 10% figures are attributed to the wrong things.** They are correct as
**cell means for the four problem types**, sample-weighted across three experiments (n=120), but the
lesson presents them as acceptance rates for the cigarettes and millionaires items specifically.
Each subject solved four problems, one per content topic, in a Latin square; Experiment 1's
invalid-believable item was the **police-dogs** passage, not the cigarettes one. Confirmed two ways:
Lambell et al. attach the same "71% across three experiments" to a police-dogs pair, while Evans &
Stanovich 2013 Table 3 attach the same figures to the cigarettes/millionaires pair. Same numbers,
different illustrative items. Fix: "71% of the invalid arguments with a believable conclusion, the
type the cigarettes one illustrates, were accepted as valid, against 10% of the invalid arguments
with an unbelievable conclusion." Same correction needed in quiz item 4's explanation.

**L2-F2. [major] Source [6] has no year, volume or pages, and is the wrong source for those
figures.** Full citation verified: Lambell, N. J., Evans, J. St. B. T. & Handley, S. J. (1999),
*Proceedings of the 21st Annual Conference of the Cognitive Science Society*, 282-287, Erlbaum.
Better sources now available: the 1983 paper itself (Tables 2, 4, 6) and Evans & Stanovich 2013
Table 3, whose caption states the rates are "Combined Over 3 Experiments".

**L2-F3. [major] The *forall x* ellipsis hides a footnote boundary and a qualification.** Both halves
are verbatim, but the first is body text in section 2.3 and the second is footnote 2. The ellipsis
swallows the footnote's opening, which qualifies the very claim being quoted: "Well, there is one
case where it does: if the premises are in fact true and the conclusion is in fact not true, then we
live in a counterexample; so the argument is invalid."

**L2-F4. [major] "The most widely assigned introduction to logic in the United States"** is sourced
only to Cengage's own marketing copy, which 2.2 bars, and drifts the geography (the publisher says
North America). See also L2-B1: this is the textbook the lesson cites without having read.

**L2-F5. [major] The 1983 General Discussion offers three accounts, not two**, and the omitted third
is the authors' own caveat about their materials: unbelievable conclusions were rated only about a
point below the scale midpoint, so the conflict they create may be weaker than the believable ones.
That is exactly the fact a well-informed sceptic would insist on, and the "what's unsettled" section
is its natural home.

**L2-F6. [minor]** "Evans's group called this selective scrutiny" is later usage; the 1983 paper
describes the mechanism unnamed. **L2-F7.** Misinterpreted necessity is described without saying
what is misinterpreted (treating a conclusion *consistent with* the premises as one that *follows
from* them). **L2-F8.** Klauer et al. did not stop at "too sparse"; they ran four experiments and
proposed their own account. **L2-F9.** Dube et al.'s sharpest claim targets specifically the
logic-by-belief interaction the lesson places in the established column. **L2-F10.** Quiz item 3
option A uses "The Moon orbits a star", true only in the heliocentric sense the explanation has to
concede, and calls "the Moon is a planet" a "true-sounding conclusion", which it is not.
**L2-F11.** The 1983 premises were embedded in roughly 80-word current-affairs prose passages, not
presented as bare syllogisms. **L2-F12.** "In *forall x*'s words" introduces a paraphrase.
**L2-F13.** The reductio aside sits awkwardly beside the checkpoint, since in a reductio you have
nominated the suspect premise in advance.

**Verified correct and not to be re-audited:** all six quiz answer indices match the option their
explanation names; the central logic claim and every worked counterexample; all four Evans 2003
Box 1 syllogisms verbatim, plus the instruction wording; the 1983 abstract's four quoted fragments;
the authors' names and Plymouth Polytechnic affiliation; **the 87% / 48% figures and their
attribution to Experiment 2** (verified from p. 300); the three other *forall x* quotations; the
Copi and Klauer and Dube bibliographic details; that Hurley does correct the general-to-particular
myth explicitly; all six practice answers; the four-cell table; zero em dashes.

---

## Lesson 2, "Valid and sound". Work order PARTLY APPLIED, 2026-09-06

The work order recorded earlier in this file said "Fixes below are NOT yet applied". Two of the
five blocking items are now applied. Recording that here rather than at session end, because the
earlier entry sat unapplied for a whole session precisely because nobody wrote down where it stood.

**L2-B1 DONE. The unread textbooks are gone.** Hurley and Copi were cited four times in the body,
once in Go deeper with a description of contents, and as sources [2] and [3], for material
SOURCES.md records as "confirmed against several course summaries of the book rather than the 14th
edition itself" and "from memory of the 14th ed." Zero references to either remain. Replaced with
three sources that were actually read this session, all free and openly licensed:

- **Knachel, *Fundamental Methods of Logic*, section 1.4** (CC BY 4.0, LibreTexts), now source [2],
  carrying the four-cell table's load. It states validity three ways in a row, ending "it is
  impossible for its premises to be true and its conclusion false", which is a better statement of
  the empty cell than the attribution it replaces, and soundness as valid "AND ... its premises are
  in fact true".
- **Van Cleave, *Introduction to Logic and Critical Thinking* 2e, sections 1.6 to 1.8** (CC BY 4.0,
  LibreTexts), folded into source [2], for the deductive/inductive definitions by certainty versus
  probability and for defeasibility.
- **The *Internet Encyclopedia of Philosophy*, "Deductive and Inductive Arguments", section 9**, now
  source [3], for the myth correction. This is a better source than the one it replaces: it states
  the general-to-particular proposal in its strongest form and rejects it as "much too crude for
  drawing a categorical distinction", which is an argument rather than an assertion of authority.

Note for whoever does lessons 3 and 4: Van Cleave 1.8 defines the distinction by certainty versus
probability but does **not** explicitly correct the general-to-particular myth, and neither does
Knachel 1.4. The IEP entry is the one that does. Do not cite the two textbooks for that claim.

**L2-B5 DONE.** The three standard-form displays are fenced, with a rule between the premises and
the conclusion, matching lesson 1's pattern. The linter warning is gone.

**Still open on this lesson**: L2-B2 (counterexample defined one way, taught a second, practised a
third), L2-B3 (three of six quiz items keyed on material lifted from the body), L2-B4 (a 174-word
answer key printed in plain body text under the instruction to answer first), and the two
neutrality items L2-N1 and L2-N2 about Dube, Rotello and Heit.

## Lesson 2, "Valid and sound". Remaining work-order items APPLIED, work order CLOSED, 2026-09-06

The five items left open by the PARTLY APPLIED entry above are now applied. With L2-B1 and L2-B5
already done, all five blocking items and both assigned neutrality items are closed.

**L2-B2 DONE. One definition of counterexample, used everywhere.** The semantic definition (a
possible case in which every premise is true and the conclusion false, from *forall x*) is now the
only definition. A new paragraph in the worked-example-with-a-gap section says explicitly that the
swap is a technique for finding one, that the parallel argument's actual world is the possible case
the shape was supposed to rule out, and names the move refutation by logical analogy (named without
a citation, since the textbook that supplies the term is on the unread list). Objective 2 rewritten
to match. The practice instruction now asks for "a possible case in which every premise is true and
the conclusion is false", with the swap offered as the route when belief is in the way, which is
what its own model answers were already doing.

**L2-B3 DONE. Quiz rewritten to six application items.** Q3 (sound identification) replaced: fresh
cases (primes, copper, spiders, triangles), with the true-premises-true-conclusion-invalid
distractor and the valid-but-false-premise distractor as the half-understanding errors. Q5
(deductive identification) replaced: fresh cases (kettle switch, restaurant reviews, four houses
sold over asking, carnival rain); the particular-to-general deductive key is no longer the body's
choir example, one distractor (the kettle) carries no probability hedge so the missing-hedge leak
is closed, and the key is no longer the longest option. Q6 (counterexample construction) replaced:
same target shape, botany content instead of the body's cats and dogs, with a trivially-true
conclusion, a failed attempt (true conclusion), and a false-premise substitution as the three
distractors. Q4's self-refuting distractor ("prompts closer checking" predicting higher acceptance)
replaced and the believability pair now splits (fast food high in salt vs fresh fruit high in salt);
its explanation now attributes 71%/10% to the invalid-believable and invalid-unbelievable types
rather than to the cigarettes and millionaires items, which also discharges L2-F1's correction in
the quiz (the predict block in the body already ties the figures to the type). Q1's stem now asks
for the verdict and the reason, since two options shared the right verdict. Answer keys are now
1,2,3,0,2,1: varied, index 0 and 3 both used, no position repeated three times.

**L2-B4 DONE.** The 174-word practice answer key is behind `:::checkpoint Open this when your six
answers are written.`, together with the follow-up note about item (4), matching lesson 1's pattern.

**L2-N1 and L2-N2 DONE.** Dube, Rotello and Heit are now named in the body, with their actual claim
at full strength: belief does not degrade reasoning, it shifts the threshold for saying "follows",
so the classic experiments may have measured a response habit, not a reasoning failure. The lesson
says what would settle it (designs that trace accuracy and willingness separately: confidence-rating
curves, forced choices between matched arguments) and that each camp currently claims those results.
Klauer's team is named too, closing the by-decade citation for [7] (L2-D9 partially discharged; [8]
was already author-named in Sources, now the body names both). The load-bearing takeaway is
restated as the ground every account shares: a believed conclusion is more likely to get your yes
whether or not the argument earned it, with both readings stated and the fix framed as working
under either, since it asks for a fixed order, not harder checking. Two consistency edits so the
lesson stops reasserting the account it now marks contested: the Symmetry callout's "you check
less" is now account-neutral, and "refuse to let the fast check be the last one" is now "stop your
first reaction to the conclusion from being the last word". Source note [8] updated to state their
position rather than file it as dissent.

**Also: `minutes: 40` set to 70**, the figure the pedagogy pass measured, since this session's
edits add roughly 400 words on top of that measurement.

**Still open on this lesson** (not part of the closed work order): the N3 to N6 neutrality minors,
the depth and media items L2-D1 to L2-D8 (figure, links, Massey, pre-labelled Evans demonstration,
replication 2x2, presentation order, free recall, "misinterpreted necessity" unnamed), the
fact-check items L2-F2 to L2-F13, the voice and pedagogy sweep, and the split-verdict edits (the
stop-and-come-back sentence; moving the myth section to lesson 5, which must be sequenced with
lesson 5's cross-reference per the coordination note above).

`npm run validate` run after the edits: result recorded in the session log; grep for em dashes in
the lesson: zero.

---
