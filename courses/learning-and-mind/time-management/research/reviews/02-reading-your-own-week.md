# Reviews: Time Management lesson 2

## 2026-09-19 — Lesson 02 — Stage 4, all passes, Tier A
**Reviewer:** one subagent in a fresh context. Depth, fact-check, neutrality, pedagogy, cold start,
voice and media. Tier A: `sensitive_domain: false`, no standpoint.

**Verdicts as returned:** depth pass with fixes, **fact-check FAIL**, neutrality pass, **pedagogy
FAIL**, cold start pass with one fix, voice and media pass with fixes.

### Findings

1. **[critical] L2-01. Both think-blocks rendered a truncated question**, the same defect as lesson
   1. Fixed repo-wide in the commit that added the check to `npm run validate`.
2. **[critical] L2-02. Ade's "eleven missing hours" did not survive arithmetic, and the lesson's
   headline rule collapsed with it.** Eleven is the change in his predicted-category total, not a
   count of hours recorded outside the four categories. The real residue is 168 − 103 = 65 hours,
   of which 54 are waking. A reader running the exercise as written would compute forty to sixty
   hours of eating, washing and commuting and conclude the rule was false. "Missing" was also
   contradicted two sentences later by "he had recorded every one of them accurately".
3. **[major] L2-03. A quotation re-worded inside its own marks**: "5 to 10 percent" for the source's
   "5–10 percent". Carried in from lesson 1.
4. **[major] L2-04. A claim about the source the source does not make.** "The thing you claimed most
   of is the thing that shrinks" is a within-person, between-category claim; Robinson and colleagues
   measured a between-person relation on paid work. The unquoted lead-in attached the paper's
   authority to a different claim.
5. **[major] L2-05. The lesson's central figure carried no scope or date in the body**, against
   outline decision 2, while the Mark figure forty lines later carried its scope properly.
6. **[major] L2-06. Hannah and quiz item 1 predicted a quantity the course's instrument cannot
   produce.** "Discretionary" is defined for the first time in this lesson, after the week has been
   recorded, so neither could have written that prediction down beforehand.
7. **[major] L2-07. Quiz item 2's explanation contradicted the body's opening paragraph**, which
   asserted the distractor.
8. **[major] L2-08. The checkpoint's model answer did not answer its own stem.** The stem said zero
   discretionary hours; the answer worked from three, promised not to argue with him and then told
   him his third column was probably not empty.
9. **[major] L2-09 and L2-09b.** The value question was forwarded to lesson 8; the outline assigns
   it to lesson 6. And **Using AI Effectively** lesson 3 was credited with a habit that belongs to
   its lesson 11.
10. **[major] L2-10.** Lesson 5 called two lessons ahead when it is three.
11. **[major] L2-11.** Go deeper ranked and described the ATUS's category documentation, which
    `SOURCES.md` has no entry for at all, and called the article "four pages" when only pages 43 to
    45 are recorded as read.
12. **[major] L2-12.** Quiz item 1's rebuttal did not trace backwards from its own stem: it accused
    the reader of skipping a step the stem says is already done.
13. **[minor] L2-13 to L2-25.** A sentence missing its object; a fieldwork date inferred from a
    conference year; the standard deviation dropped from a mean in the one passage arguing that
    spread beats the mean; three unsourced claims about what most people find; three of six quiz
    items reusing the body's own people and numbers; the three-column instrument described and never
    shown; throat-clearing and one banned word; "route out" leaning on the value question the lesson
    declines; and a forward reference to a project that does not exist yet.

### Clean on inspection
Quiz shape measured the cleanest in the repo at review: spreads 4 to 13, all four indices, no
adjacent repeat, key the sole longest in 2 of 6, five of six application. `minutes: 110` correct.
Zero dashes. Contractions 7.8 per 1,000. The Mark quotation and both Robinson footnote quotations
string-matched exactly. Neutrality passed: the reviewer records the decline on the value question as
genuine and the low-discretion reader as better served here than in most of the repo. Cold start
passed apart from the misattributed cross-reference.

### Resolutions applied, same day

- **L2-01: fixed** with the rest, plus a check in `npm run validate`.
- **L2-02: fixed, and it made the lesson better.** Ade's week is now a five-row table with signed
  differences, followed by the arithmetic the lesson had been skipping: 54 waking hours sit outside
  his four predicted boxes, which is about eight hours a day, and that is normal. The rule is no
  longer "the residue is the finding" but **"go into the residue and name the biggest thing in
  it"**. The lesson now also points out that his eleven-hour leisure shortfall and his eleven hours
  of unnamed admin are the same eleven hours, and says why the category a reader was least sure
  about is the one that absorbs the error.
- **L2-03, L2-04, L2-05: fixed.** The quotation restored, the direction stated per category with
  lesson 1's figures behind it, and the scope and year moved into the body.
- **L2-06: fixed** by making both expectations explicitly unwritten guesses rather than recorded
  predictions.
- **L2-07: fixed** by qualifying the opening paragraph, which was the sentence in the wrong.
- **L2-08: rewritten.** The stem now says "almost none" rather than "all", and the answer grants the
  count first, then puts the second job in the fixed column where it belongs rather than insisting
  the third column is not empty.
- **L2-09, L2-09b, L2-10, L2-11, L2-12: fixed.**
- **L2-13 to L2-17, L2-19, L2-21, L2-23: fixed**, including the standard deviation restored with a
  sentence saying why it matters here, the unsourced expectations labelled as the course's own, and
  three quiz items given fresh numbers.
- **L2-18: fixed in part.** Ade's case is now the table the lesson had been describing, which is the
  substance of the finding. A chart is still not needed here.
- **L2-20: declined.** The reviewer is right that Ade's largest gap is the same category by hours and
  by proportion, but the predict block says the two are *often* not the same, not always, and the
  new paragraph about the remainder category explains why his coincide. Changing his numbers to make
  them diverge would cost the clearer point.
- **L2-22: declined.** Go deeper repeats two of lesson 1's entries, which is right when the lesson
  is read on its own and both are the sources it rests on. Their descriptions are now different and
  honest about read level, which was the substance of the finding.
- **L2-25: not a lesson defect.** The project is specified in `OUTLINE.md` and is written once the
  course has six lessons. Recorded in `docs/QUEUE.md` so it cannot survive to publish.

**Status after review:** clean. No second full pass.
