# Reviews: Note-Taking lesson 1

## 2026-09-19 — Lesson 01 — Stage 4, all passes, Tier A
**Verdicts as returned:** depth pass with reservations, **fact-check FAIL**, neutrality pass,
**pedagogy FAIL**, cold start pass with reservations, **voice and media FAIL**.

### Findings

1. **[critical] Quiz item 5 was mis-keyed.** The key selected "most lecture ideas do not end up in
   any student's notes" while its own explanation described the meetings-at-work option.
2. **[critical] Quiz item 6 was mis-keyed.** The key selected the option its own explanation
   explicitly refutes.
3. **[critical] A quiz option reversed the sources, and the explanation certified it as sourced.**
   "Taking notes by hand produces more words in the notes than typing does" is backwards: the
   research file records typing benefiting note volume at g = 0.919 and handwriting having a large
   negative effect on word count.
4. **[critical] Footnote 7 claimed an inline label that did not exist**, for the observation that a
   note has two customers who want different things. The predict block stated it flatly in the
   course's voice with no marker. Defect 20's unreachable form, and the same finding Memory lesson
   1 shipped.
5. **[critical] The scope table stated a false chain of custody.** It said the 2022
   meta-analysis's counts came from the 2024 paper's table; they came from a search summary, and
   that table gives the paper a different number of effect sizes.
6. **[major] "This course reads six things properly" contradicted its own table three lines
   later**, one row of which says "Not read".
7. **[major] "Two of them are open access" was unsupported and named neither.**
8. **[major] The predict block attributed an overreach to "the research"**: the research says
   reviewing beats not reviewing, not that a note written for the future reader is the one that
   carries the benefit.
9. **[major] A four-asterisk span rendered two literal asterisks on the page**, and
10. **[major] an unclosed bold span in the checkpoint rendered two more.** Neither is caught by
    `npm run validate`. Both were introduced by a scripted bold-density cut.
11. **[major] Defect 19 in the lead-in to an accurate quotation.** The Morehead abstract's sentence
    opens "Some trends suggested longhand superiority; however,", and the dropped half is the one
    that cuts against the lesson's argument.
12. **[medium] Two "on whom" cells said "college students" where the abstracts say only
    "students".**
13. **[medium] "Every figure in this course was measured on college students in a lecture" was
    false for the EEG row**, and the next sentence said so.
14. **[medium] The scope table rows carried no footnote markers**, so four entries were reachable
    only through one bundle above the table.
15. **[medium] No link anywhere in the teaching prose.**
16. **[medium] Two unsourced mechanisms in the course's voice, unlabelled**: that a thin note fails
    both functions, and that rereading a note you cannot understand is worth nothing.
17. **[medium] "That's the usual result"** in an exercise, an empirical claim with no source, two
    hundred words after the same claim was correctly labelled in the other exercise.
18. **[medium] An exercise stakes an irreversible instruction on a project that does not exist**,
    which is Memory lesson 1's finding repeating. Recorded in `docs/QUEUE.md` rather than fixed.
19. **[medium] One `:::predict` and no worked example with a gap.**
20. **[medium] `npm run quotes` could not see the lesson's most load-bearing quotation**, because
    its marker followed a closing bold span and because a second real quotation fell under the
    40-character floor. The tool is fixed rather than the lesson.
21. **[medium] One labelled worked example rather than two.**
22 to 31. **[low]** Pipeline vocabulary in a heading; a "Here is" opener; one read-level cell
    under-claiming; Connections attributing the scope table's form to the wrong Memory lesson; a
    misconception stated and never corrected in place; no fallback in an exercise for a reader with
    fewer than five notes; an objective no quiz item tests; two option spreads over twenty
    characters; and one explanation stronger than the lesson's own evidence allows.

### Clean on inspection
Every source-attributed quotation verified character for character against `SOURCES.md`, all six,
after normalising whitespace and bold: **defect 24 is clean.** No read level is inflated; entry 1
narrows its own. Twenty-four scope-table cells checked and the defective ones are the three named
above. All six cross-course claims opened and confirmed, including that Focus lesson 1 is the
instrument question and How to Learn Anything lesson 3 is retrieval practice. Outline decisions 2
and 6 both hold, and two quiz items grade the refusal. Four of six quiz items apply outside the
lesson, against a minimum of three, and not one reuses a name or a number from the body. Bold at
17.4 per 1,000 with 8.5 percent of paragraphs opening bold; contractions at 7.8; no dashes; no
banned words or sentence shapes; block grammar clean; `minutes` exact, the first lesson measured in
this repo not to understate itself.

### On the length
The reviewer judged the 100-minute measurement justified and said not to cut: fifty of those
minutes are exercises, one of which is the project's own first section and cannot move, and the
alternative the outline names would produce a lesson containing one table.

### Applied
All of them except finding 18, which is a queue item rather than a lesson edit. Both mis-keyed
items are corrected and the reversed option is turned the right way round. The two-customers
observation, the thin-note claim and the rereading claim are labelled inline with markers. The
scope table has markers in every row, honest "on whom" cells, a corrected read level, a corrected
chain of custody for the 2022 meta-analysis, and a link to the one open-access source. The dropped
half of the Morehead sentence is restored. Both broken bold spans are repaired. A second
`:::predict` goes before the no-notes finding and gives it the gap it lacked, which answers
findings 19 and 21 together. And `scripts/quotes.mjs` now strips bold before matching and takes
quotations from 25 characters, which found four more in this course and seven more in the repo.
