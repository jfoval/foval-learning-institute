# Reviews: Logic and Argument — 03-conditionals

Append-only. Newest at the bottom.

## Lesson 3, "Conditionals" — Stage 4 round 1, 2026-09-06

Five reviewers, fresh context: depth, fact-check, neutrality, voice, pedagogy. 40-odd findings.
The lesson's skeleton, its ten-item interleaved practice and its six-item quiz are the strongest
in the course so far; every reviewer said so independently. What failed was the second layer of
expertise on the two places a knowledgeable reader stops, and the media requirement.

### Fixed

- **Factual, and the lesson contradicted itself.** "The two you should turn are the two valid
  forms. The two people reach for are the two invalid ones." The lesson's own numbers two
  paragraphs later say the modal selection is P and Q at 39%, and P is modus ponens, which is
  valid. Wason's quoted line on the next page ("Nearly all subjects select P") says the same. The
  two sets also overlap, so presenting them as disjoint was wrong twice. Rewritten.
- **Wason 1966 vs 1968.** The lesson said Wason "published" the task in 1968. The selection task
  first appears in Wason, "Reasoning", *New Horizons in Psychology 1* (1966); the 1968 QJEP paper
  quotes the vowel rule inside its summary of that earlier study. Now cited as 1966 for the task
  and 1968 for the quote. **SOURCES.md line 30 carries the same conflation and still needs fixing
  at source**, or lessons 4 onward inherit it.
- **Griggs and Cox 1982 were uncited.** The drinking-age rule, its four cards and the whole deontic
  result are theirs (*Br J Psychol* 73, 407-420, Exp. 3). Crediting only the 2017 meta-analysis for
  someone else's experiment inverts the source hierarchy in 2.2. Now source [4].
- **The deontic claim was overstated.** "Researchers have run the same task" and "correctly means
  modus tollens" are wrong on the point the literature is clearest about: a regulation cannot be
  false, so participants are detecting violators, not testing a claim. Same four-card format,
  different question. Manktelow and Over's objection is now named in the text.
- **One account of the abstract failure was asserted as settled, five times** ("Confirming is the
  reflex; refuting is the skill"), while the lesson explicitly hedged the *deontic* explanation.
  That is backwards: both are contested. Evans' matching bias and Oaksford and Chater's
  information-gain account are now named alongside Wason's reading, and the practical advice, which
  does not depend on which is right, is unchanged.
- **"Some researchers... some... some..."** named three live positions with no name, date or
  citation, in a lesson that footnotes everything else. Now four named camps with the evidence that
  discriminates between them, including Cheng and Holyoak's abstract permission rule, which is the
  awkward result for the familiarity account. Source [7] added.
- **Two answer leaks in worked examples.** Third occurrence of this defect in three lessons (see
  lesson 1 and lesson 2 entries above). Worse here: the prompt itself gave away the verdict
  ("a situation where both premises are true **and the battery is fine**") before the reader
  started. Both now `:::predict` blocks. **A linter rule for this class is being added, since three
  hand reviews in a row have caught it and a fourth should not have to.**
- **Banned sentence shape**: "By the end of this lesson you'll be able to..." (style guide line 44).
  Replaced with a predict block, so the opening asks instead of promising.
- **No free recall before the quiz**, which the Definition of Done requires. Added as Practice Part 3.
- **Zero links in 5,800 words**, and a URL printed as dead text. 4.5: "a lesson with no links is a
  lesson that hides its sources."
- **No figure or chart**, in the lesson whose two central objects are a spatial layout and a set of
  percentages. Added two inline SVGs: the four cards mapped to their four moves, and the selection
  distribution. Both checked in a browser in both themes: four distinct fills each, no label
  clipped, no token collision.
- Smaller: "Latin names" narrowed to the two that are Latin; doubled citation apparatus reduced to
  footnotes alone; the unsourced "almost nobody wastes a look at the 22-year-old" cut; three
  one-line morals that restated the sentence before them removed; a value question ("was the parent
  misled?") separated from the logic that the lesson does settle.

### NOT fixed, and blocking publish

The fact-checker could not reach any primary source: the egress proxy returned 403 on every host,
so verification ran through search over source pages rather than the PDFs. **"Unverifiable from
here" is not "wrong", and nothing below was changed on that basis.** SOURCES.md marks all of these
"(PDF read)" at Stage 1, so someone with the PDFs must confirm them:

1. **36 + 39 + 5 + 19 = 99%.** That leaves ~1% for every other selection pattern, which is not how
   abstract selection-task data distribute. Re-read the table.
2. **n = 36 first-year psychology and statistics students at UCL** for Wason 1968 Exp. 1. UCL is
   confirmed; the rest is not corroborated anywhere accessible.
3. **The 104 / 44 / 80 breakdown** and **the 64% deontic figure**. Only the 19% has independent
   corroboration.
4. **Two verbatim quotations**: Wason's "Nearly all subjects select P..." (the head is confirmed,
   the tail is not, and it may read "nearly all *the* subjects"), and the *forall x: Calgary*
   validity sentence, where validity is defined in ch. 1 and counterexamples in ch. 2, so the
   chapter attribution needs checking along with the wording.
5. **The *forall x: Calgary* edition date.** "Fall 2025" could not be confirmed; the citation now
   omits it rather than asserting it.

### Deferred, worth doing before publish

- Objective 3 promises "necessary and sufficient" and the biconditional is never taught, although
  the lesson's own diagnosis of affirming the consequent ("treated the promise as running both
  ways") is exactly a conditional read as a biconditional.
- Objective 1 names four valid forms; hypothetical syllogism and disjunctive syllogism appear in no
  quiz item. The quiz is at the six-item ceiling, so this is a swap. Pedagogy proposed a full
  replacement item covering both plus denying the antecedent; it is in the review output.
- The selection task has no practice item, so the reader meets it once as a worked example and then
  cold in the quiz.
- `minutes: 50` understates a 5,800-word lesson with a four-part written exercise. Third lesson
  running with this. 65 is closer.

### Found in a different lesson while checking colours

**Lesson 09's processed-meat chart is broken on the live site.** It draws its 1,000-person track in
`var(--line-strong)` and its value bar in `var(--navy)`, and those two tokens are defined
*identically* in both themes (`#0f2a4a` light, `#c9d3e2` dark), so the chart renders as one solid
block and its caption describes a "grey bar" that is not grey. The `#9a9a9a` fallback never fires,
because the variable exists. Verified by reading the computed fills. Its labels are also font-size
10 to 12, under the linter's threshold. **A second linter rule is being added for two tokens that
resolve to the same colour being used to distinguish two things.** Lessons 01, 08 and 10 need the
same check.

## Lesson 3 verification items closed, 2026-09-06

The five items left "unverifiable from here" in the Stage 4 round 1 entry were checked against
the actual primary sources: the published PDF of Wason (1968), *QJEP* 20(3), 273-281 (retrieved
via web.mit.edu/curhan/www/docs/Articles/biases/); the CogSci 2017 proceedings PDF of Ragni,
Kola & Johnson-Laird (retrieved via escholarship.org/uc/item/3rv0k45d); and the live HTML of
*forall x: Calgary* chapter 2 (forallx.openlogicproject.org/html/Ch2.html).

1. **36/39/5/19 summing to 99. CONFIRMED**, Ragni et al. Table 2, abstract row: p 36, pq 39,
   pqq-bar 5, pq-bar 19, exactly as the lesson has them. The reviewer's worry about the missing
   ~1% dissolves on reading the table: these are the shares of the four *canonical* selections
   (the everyday and deontic rows sum to exactly 100; the abstract row's 99 is rounding), not of
   all response patterns. The chart's footer, which said "Each outlined bar is 100% of subjects",
   was the one thing wrong; it now reads "Bars are shares of the four canonical picks."
2. **n = 36, first-year psychology and statistics students, UCL. CONFIRMED verbatim**, Wason 1968
   p. 275: "Subjects. Thirty-six first year psychology and statistics students of University
   College London." Sources note [2] now quotes the line with its page number.
3. **104/44/80. CONFIRMED**, Ragni et al. Table 1 (abstract 104, everyday 44, deontic 80, total
   228). **64% deontic. CONFIRMED**, Table 2, deontic row, pq-bar column. But the lesson cited
   all of these figures, plus both uses of 19%-vs-64%, to footnote [2] (Wason 1968) instead of
   [3] (the meta-analysis): four citation-index errors, all corrected to [3]. A fifth had
   Hurley's "unless" rule cited to [3] instead of [5]; also corrected.
4. **Wason quotation. CORRECTED.** The head was exact ("subjects", not "the subjects"), but the
   lesson stopped the sentence early with no ellipsis. Full sentence, p. 273: "Nearly all
   subjects select P, from 60 to 75 per cent. select Q, only a minority select Q-bar and hardly
   any select P-bar." The lesson and Sources note [2] now carry the whole sentence, with the
   overbar symbols rendered as not-Q and not-P and the rendering declared in the note. The
   *forall x: Calgary* validity sentence is **CONFIRMED verbatim** against the live HTML, but
   both definitions (validity and counterexample) sit in chapter 2, "The scope of logic";
   chapter 1 is "Arguments". Sources note [8] no longer says "chapter 2 on counterexamples".
5. **Edition date**: the round 1 fix (omit it) stands; the site advertises a Fall 2023 print
   edition and an undated development version, so no date is assertable.

Also verified in passing: the vowel/even rule wording (Wason 1968 p. 273, exact) and the
Griggs and Cox drinking rule, which the lesson truncated; it now reads "must be over 19 years
of age" per the wording quoted in Ragni et al.

Two deferred items closed in the same pass:

- **Biconditional taught.** A short passage in the contrapositive/converse section now names
  "P if and only if Q", ties it to the necessary-and-sufficient vocabulary from earlier, and
  reframes affirming the consequent as a conditional silently upgraded to a biconditional,
  which is the lesson's own diagnosis. Objective 3 is now delivered.
- **Quiz covers all four named valid forms.** Q1 (affirming the consequent, gardener) swapped
  for a disjunctive syllogism item whose distractors carry the exclusive-"or" caution; Q4
  (denying the antecedent, courier) swapped for a hypothetical syllogism item. Both invalid
  forms remain tested through Q3's card choices and the distractors of Q5 and Q6, and both
  removed items' content survives in the practice set. Keys are now 1,0,3,2,0,3. A stale
  reference to the gardener item's black leaves in "What people get wrong" was replaced with
  examples still in the lesson.

Still open from the deferred list: no practice item on the selection task itself, and
`minutes: 50` on a 5,800-word lesson (65 is closer).
