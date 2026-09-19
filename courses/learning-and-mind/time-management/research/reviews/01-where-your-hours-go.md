# Reviews: Time Management lesson 1

## 2026-09-19 — Lesson 01 — Stage 4, all passes, Tier A
**Reviewer:** one subagent in a fresh context, running depth, fact-check, neutrality, pedagogy,
cold start, and voice and media. Tier A per `/review-lesson`: the course is `sensitive_domain:
false` with no standpoint. The neutrality pass was run rather than skipped, because the lesson
carries one genuinely contested empirical question and one value question.

**Verdicts as returned:** depth FAIL, fact-check FAIL, neutrality FAIL, pedagogy FAIL, cold start
PASS, voice and media PASS with minors.

### Findings

1. **[critical] L1-01. Both think-blocks render a truncated question.** `renderBlocks` in
   `scripts/build.mjs` captures a block header with `(.*)`, which does not match a newline, so a
   header wrapped at 100 columns shows only its first physical line. The predict block showed
   "Write down now, in four" and hid the four numbers it was asking for; the checkpoint showed
   "What is the" and hid "finding that is not obvious?". Exercise 1 then told the reader their four
   numbers were already written.
2. **[critical] L1-02. "The estimate is the larger one" was stated universally**, and the source
   reports the opposite direction for two of the four categories the lesson asks the reader to
   predict: sleep and free time are underestimated relative to the diary. A reader following the
   exercise would have concluded their own record was wrong.
3. **[critical] L1-03. The lesson asserted the opposite of its source on why the gap exists.** It
   said the research does not treat the gap as an accusation of dishonesty; the article offers
   social desirability as one of two mechanisms, in terms, and says respondents may fear looking
   "lazy or irresponsible". The lesson's own quiz item 3 already contradicted the body on this.
4. **[critical] L1-04. Priya and Daniel were unlabelled as constructed in the body**, and footnote
   4, which said they were, had no marker anywhere in the text. Defect 20 in its compounding form.
5. **[major] L1-05. The scope claim was false of the source supplying the headline figures.** The
   time-diary data is a representative national household survey that includes shift workers and
   the unemployed; it is the time-management training literature that is students and office
   workers. The lesson's own Go deeper contradicted the bolded sentence four paragraphs above it.
6. **[major] L1-06. A mechanism prediction the source explicitly pre-empts.** The lesson inferred
   that the diary differs least where the week is fixed and repetitive; the authors say the
   estimation task is difficult "even for a respondent with regular and clear work hours and a
   repetitive daily routine", and Daniel's whole case rested on the inference.
7. **[major] L1-07. Daniel's housework finding ran against the measured direction**, and its
   justification ("the research measured paid work") was false: the same article measures housework
   and finds larger overestimates there, 23 against 10 hours for men and 32 against 17 for women.
8. **[major] L1-08. The diary's own documented limitations were absent**, and the outline's named
   misconception, "the diary is just as unreliable", was missing from the misconception list. The
   artefact side of the contested question was quoted and never explained, so a reader could not
   state Jacobs's position back.
9. **[major] L1-09. Outline decision 3 was not honoured.** The value question of whether a person
   should aim to do more or less was never named, the course summary's stance was never surfaced,
   and misconception 2 treated the reader's aim as a factual error the evidence refutes, which is a
   standards 3.1 misclassification.
10. **[major] L1-10. A quotation re-worded inside its own marks**: the source's "5–10 percent"
    printed as "5 to 10 percent". Defect 18. The same alteration had already travelled into lesson 2.
11. **[major] L1-11. The club study carried no researchers, no country and no date**, in the lesson
    that teaches dating figures and whose exercise 2 makes the reader ask those three questions.
12. **[major] L1-12. Contested question 2 was given one side.** Claessens 2007's "the relationship
    with work and academic performance is not clear" is in the research file, the lesson cites that
    source three times, and never for that.
13. **[minor] L1-13 to L1-25.** Three hedges dropped in unquoted lead-ins ("tend to follow the
    pattern of", "makes it difficult to argue", "misleading"); Frazis and Stewart's own regression
    argument dropped from their quotation; Priya's arithmetic not checkable from the page and an
    internal contradiction in her third finding; "six hours and one" for 6.2 and 1.3; "substantially
    larger" for a measured 72 percent; "a productivity technique wearing a disguise" against
    decision 1; a pipeline word in a learner-facing heading; "a dozen countries" for ten; "where the
    research says the two instruments agree" for "relatively similar"; an unsourced historical claim
    inside a quiz explanation; no links in the teaching prose; and no chart for the decade series.

### Clean on inspection
Every other quotation string-matched against the source. Go deeper's description of the article's
italic-argument layout is true and inside the recorded read level. Quiz shape measured clean: all
four indices used, no adjacent repeat, spreads of 6 to 9 characters, key the longest in 3 of 6, at
least two options per item carrying no absolute, four of six application. `minutes: 85` matched the
measurement. Zero dashes. Contractions 6.6 per 1,000, in band. No trade-canon citation. Both
exercises produce a number and both work for a reader whose week is entirely fixed. Cold start
passed: nothing assumed beyond the six existing Core courses.

### Resolutions applied, same day

- **L1-01: fixed, and a check written.** All nine wrapped headers across the four drafted lessons
  joined onto one line, and `scripts/build.mjs` now fails a published course and warns a draft on a
  header whose body opens with a lowercase continuation. Root `CLAUDE.md` rule 10.
- **L1-02: fixed.** The direction is now stated for paid work specifically, with the sleep and free
  time counter-cases and their figures, and with the underestimation by short-week and unemployed
  respondents. The lesson now tells the reader what to expect in each of the four categories.
- **L1-03: fixed.** Both mechanisms are given, with the article's "inflate estimates" and "lazy or
  irresponsible" sentences quoted, and the lesson says which one it leads with and why rather than
  denying the other exists.
- **L1-04: fixed.** The worked section now opens by saying both people are constructed, with the
  footnote marker on that sentence.
- **L1-05: fixed.** The two bodies of evidence are now separated and each given its own reach.
- **L1-06: fixed.** The inference is stated, labelled as the course's own, and then knocked down
  with the authors' own sentence. It makes a better paragraph than the unqualified version did.
- **L1-07: fixed by flipping Daniel.** He now predicts fourteen hours of domestic work and records
  six, which is the direction and roughly the magnitude the article measures, and the housework
  figures are quoted. His case is stronger for it: his paid hours had a clock and came out right,
  his unpaid hours had nothing counting them, and that is where the gap was.
- **L1-08: fixed.** The diary's own problems are quoted in a new misconception entry, and a
  regression-to-the-mean argument is now explained in a sentence before it is attributed.
- **L1-09: fixed.** A new section names the value question, gives both positions at strength, says
  the evidence does not decide it, and names the course summary's own stance so a reader can
  discount it. Misconception 2 rewritten so the evidence bears on what the course may promise
  rather than on what the reader should want.
- **L1-10 to L1-25: fixed**, except as follows.
- **L1-22, the chart of the decade series: declined for now and written into `docs/QUEUE.md`.** The
  reviewer is right that six numbers making the lesson's own argument for dating figures are better
  drawn than listed. It is a media addition rather than a defect, it has to clear the repo's SVG
  rules by eye in both themes, and this session's remaining budget is better spent on the lessons
  still unwritten.
- **`minutes:` left at 85.** It measured 85 at review and 95 after the additions, which
  `npm run minutes` reports as inside its own precision.

**Status after review:** clean. No second full pass: the trigger is wrong facts surviving, a failed
neutrality check surviving, or a heavy rewrite, and the fixes above are applied rather than pending.
