# Reviews: Note-Taking lesson 4

## 2026-09-19 — Lesson 04 — Stage 4, all passes, Tier A
**Verdicts as returned:** depth pass with reservations, **fact-check FAIL**, neutrality pass with
one finding, **pedagogy FAIL**, cold start pass with two findings, voice pass with fixes.

### Findings

1. **[critical] "Twice, in two labs, with hundreds of people between them" is not what the two
   abstracts report.** Only one of the two replications measured note contents at all; the other's
   abstract reports nothing about them. And 74 plus 68 is a hundred and forty-two, not hundreds.
   The error appeared in three places, one of them the checkpoint, which also said the difference
   was reproduced "at the sizes it reported" when neither abstract gives a size.
2. **[critical] The four cases rendered as three.** The fourth item sat mid-line after the third,
   so Markdown never opened a new list item, and nine lines later the lesson referred to case 3
   with no visible case 4 above it. `npm run validate` exits 0 and the defect is invisible in a
   diff. Defect 25's family: it came from editing, not from writing.
3. **[critical] The pivot quotation does not say what the lesson said it says.** The abstract's
   "did not perform better" is consistent with performing worse, which would be the original
   replicating. What closes the gap is the abstract's last sentence, and the lesson did not quote
   it. A quiz explanation then stated the research file's own unquoted gloss as the abstract's
   finding.
4. **[major] The author count was wrong by one**, in the heading, the body and a quiz stem. The
   record lists 88. The research file was the source of the error.
5. **[major] "A professor" and "undergraduates" are not in the record**, which shows four distinct
   affiliations.
6. **[major] "The study was preregistered" was nowhere in the research file.** It is true, and it
   entered the draft from outside the research, and it sat inside a paragraph labelled as the
   course's own reading, which made a hard fact read as commentary.
7. **[major] "The commonest state of affairs in applied research" was an unsourced empirical claim
   in the course's voice**, with no marker and no label.
8. **[major] The mechanism-and-outcome split and the four cases carried no in-body label** while
   the Sources entry promised one, and the four cases had no marker either.
9. **[major] A quiz explanation contradicted the research file**, saying no split by question type
   appears in what this course read; one does, at summary level.
10. **[major] Standards 4.3 missed: two of six items applied outside the lesson**, and four ran on
    this lesson's own study, its own numbers and its own author count.
11. **[major] A quotation trimmed without an ellipsis**, dropping "than did longhand participants",
    which is the clause that makes it a between-groups finding. `npm run quotes` cannot see it
    because a substring still matches.
12. **[major] Two expectations stated as results**, one of them with a Sources entry promising a
    label the exercise did not carry. Fourth occurrence of this in four lessons.
13. **[major] Neither research team was named in the teaching prose**, and a quiz item named one
    cold in a graded question.
14 to 21. **[medium]** The population was never restated in the lesson's own voice, against outline
    decision 2; a judgement carried a source marker; the lesson 5 forward reference gave only the
    half favouring no difference; two flat sentences dropped a qualification the lesson had quoted
    correctly forty lines earlier; one `:::predict` and no worked example with a gap, for the fourth
    consecutive lesson; no link in the teaching prose, also the fourth; a bolded one-line moral that
    did not parse aloud; and a scope dropped from a paraphrase.
22 to 28. **[low]** Two option spreads; one sentence byte-identical to lesson 3's; a ranking across
    a literature the course has read six items of; a missing fallback in an exercise; "preregistered"
    unglossed; and `minutes` five under, in the safe direction.

### Clean on inspection
**The block-quoted abstract is byte-identical to the research file, 963 characters, diffed
programmatically**, and the reviewer went further and checked the research file's transcription
against the PubMed record itself: every character of the abstract is faithful. Nine sourced
quotations string-matched individually. **Defect 19 is clean at the place it was most likely to
appear**: the Morehead quotation is introduced with the "some trends favoured longhand"
qualification that lesson 1 was sent back for dropping. Outline decision 4 holds and the checkpoint
holds it in both directions. **Defect 25's mis-keying form is clean**: all six explanations read
against the option each key selects, and every distractor is named by content. Every footnote is
reachable. Read levels are copied rather than inflated. "Read the third sentence and then the
fourth" is correct, which lesson 3 got wrong in the equivalent place. Every cross-reference opened
and confirmed. Bold 18.6 per 1,000 with 12 percent of paragraphs opening bold, the lowest in the
course; contractions 6.5; no dashes; no banned words. Rendered through the build's own renderer:
zero literal asterisks in the output.

### Applied
All of them. The two-labs claim is a hundred and forty-two people in one replication. The four cases
render as four. The pivot quotation keeps its odd phrasing and gains the sentence that closes the
gap, and the quiz explanation no longer states the research file's gloss as the abstract's. The
author count is eighty-eight in three places and in the research file, which now records how it was
counted and that "her class" is the file's shorthand. Preregistration has its own marker and the
record's keyword line is in the research file. Both teams are named in the prose and the replication
is linked there. The split and the four cases are labelled inline. Quiz item 2 is recast onto a
tutoring trial, and a `:::predict` before the four cases gives the list its gap. The population, the
dropped clause, the lesson 5 forward reference, the two expectations and the moral are all
corrected.

### Carried forward
The reviewer found, while checking a forward reference, that `SOURCES.md` and `OUTLINE.md` both said
two of five syntheses cleared zero where the table says three. **That was found and corrected
independently while lesson 5 was being drafted**, in all four places it had reached, and the
research file now records the correction and what it was checked against.
