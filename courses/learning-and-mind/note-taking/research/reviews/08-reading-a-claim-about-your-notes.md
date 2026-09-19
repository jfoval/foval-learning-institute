# Reviews: Note-Taking lesson 8

## 2026-09-19 — Lesson 08 — Stage 4, all passes, Tier A
**Verdicts as returned:** depth pass with reservations, **fact-check FAIL**, **neutrality FAIL**,
**pedagogy FAIL on 4.3**, cold start pass with reservations, voice and media pass with reservations.
Nineteen findings, two critical.

**Defect 20 did not recur**, and the reviewer traced four of footnote 7's five claims to a sentence
in the body that labels each in words. The fifth is finding 1, for a different reason. It had been
the critical finding on lessons 1, 3 and 6.

### Findings

1. **[critical] The lesson's organising claim is false of one of its own six sources, and the
   lesson concedes it two paragraphs later.** "Every measurement behind these eight lessons happened
   in a lecture hall" is not true of the EEG study, which the lesson's own table describes as 36
   students writing single words with no learning measured. The next section then lists the possible
   settings as "a hall, a laboratory, a workplace, a scanner". It was the premise of the section, of
   the table and of a graded quiz key. **And it is a recurrence**: lesson 1's review recorded the
   same sentence at medium. It came from `OUTLINE.md` §8 rather than from a source, and the project
   carried it too. **Applied** in all four places, with the EEG study named as the exception and its
   gap identified as lesson 6's.
2. **[critical] The lesson was Memory lesson 7 rewritten rather than a second lesson in the same
   form.** Measured on normalised body text: 64 shared 7-grams, 45 shared 8-grams, **23 shared
   10-grams**, with a longest shared run of 16 words. The refusal section was a clause-for-clause
   clone; so were the books section, the opening, the misconception headings and the
   hold-firmly ladder. **No check in the repo can see this**: the repetition warning is per-course.
   **Applied:** all five rewritten from this subject's own material, including a refusal built on
   the fact that an average over a room says nothing about one person in it, which is this course's
   own and not Memory's. Shared 10-grams now 1, 8-grams 7, and the longest shared runs are the
   citation convention and the provenance formula.
3. **[major] The unread-line exemption was used to characterise the four books, not only to name
   them, and the characterisation was false of at least two.** Luhmann's card index is the
   Zettelkasten's case; it is not *Building a Second Brain*'s and it is not mind mapping's. Counted
   before reading for tone: zero citations to that side, zero passages quoted from it, zero
   statements of its own case, three of what it lacks, the last word sceptical, and two of three
   misconceptions attributable to it. **Applied:** the claim narrowed to the Zettelkasten with
   lesson 7 named, "confident" dropped as a tonal judgement about books nobody opened, and the
   unsourced claim about how readers meet the subject labelled inline.
4. **[major] Two endings of the trace exercise could not be told apart, and a quiz key rested on
   one of them.** A blog post is ending four by the lesson's own words, and the quiz stem keyed it
   to ending five. Both frequency claims in the list were unsourced assertions in the course's
   voice, and one was a graded key. The exercise also says to stop at twenty minutes while offering
   no ending for having stopped. **Applied:** endings four and five rewritten to be distinguishable,
   a sixth added for running out of time, both frequency claims cut, and the quiz item rebuilt.
5. **[major] Standards 4.3: two of six items applied outside the text.** The third lesson of this
   course to come back short. **Applied:** items 4, 5 and 6 rebuilt on a school newsletter about
   children, a trail ending at an uncited conference talk, and a colleague's four-year-old tagging
   scheme, none of which is in any lesson.
6. **[major] "The five meta-analyses are as good an argument for staying as for switching" is a
   symmetry the five do not have.** All five point the same way and three clear zero; none points
   the other way. The misconception list made the same selection, counting the two that include zero
   and dropping the clause that cuts against. **Applied** in both places.
7. **[major] "The second is inside the first" welded two errors.** Table 6 compares five
   meta-analyses rather than listing studies inside the 2024 pool, and the lesson's own row three is
   Urry's 142-participant replication, not the mini meta-analyses whose pooled figure is in the
   table. **Applied.**
8. **[medium] "which the abstract says twice" is three**, plus a fourth scoping phrase.
   **Applied.**
9. **[medium] "the forty people in one room" is a number in the course's voice carrying a source
   marker.** No sample of forty exists in the research file. **Applied.**
10. **[medium] Two Connections attributions pointed at the wrong course.** Tracing a claim as a
    method is Memory lesson 4 and this course's lesson 3, not Logic and Argument, which teaches
    source evaluation. And Note-Taking is fifth of seven in term 2, so it is not the last of its term.
    **Applied**, with the outline corrected.
11. **[medium] Sources entry 3 claimed the body says something it does not**, defect 22's first
    form and the third time in this course. **Applied:** the provenance moved into the table cell
    where the reader meets the counts.
12. **[medium] The Morehead row dropped the qualifier that cuts against the lesson**, which lesson
    1's review already recorded once as defect 19. **Applied.**
13. **[medium] "Open access" asserted of source 5**, where the research file records only an open
    copy of the PDF. **Applied.**
14. **[medium] The refusal called itself narrower than its predecessors and is not.** "Your notes"
    is a wider object than one remembered event. **Applied:** the comparative cut with the rewrite
    at finding 2.
15. **[medium] Exercise 2 offered a third ending the project it claims to be does not accept.**
    **Applied:** the lesson now says ending three is the exercise's and the project wants one of the
    first two, which keeps the project's rubric row intact.
16. **[low] Four unsourced circulation claims**, one of them load-bearing, and one count that does
    not hold for two of its rows. **Applied.**
17. **[low] "Three published objections stand against the design" was in the licence column**, and
    one of the three is about interpretation rather than design. **Applied:** the clause removed
    from the table.
18. **[low] "Here's the refusal" is a defect 7 opener**, inherited verbatim. **Applied** with
    finding 2.
19. **[low] The answer sequence was lesson 7's under a fixed relabelling**, so the repeat structure
    was identical. **Applied:** the rebuild at finding 5 gives it a different shape.

### One finding not applied, because it is not the case

The review reported that **`npm run validate` is blind to this course**, on the grounds that
`scripts/build.mjs` skips a course whose status is not `published`. That `continue` skips building
the course *into the site*; the lesson lint runs over every lesson whatever the status. Checked by
introducing an unbalanced `**` run into this lesson and running plain `npm run validate`, which
caught it, as `--drafts` did. The two runs differ only by the two "status drafting, not built"
lines. Nothing to change, and the correction is recorded here so the claim is not carried forward.

### Course-wide, from this review

- **The lecture-hall claim was corrected in `OUTLINE.md` and in the project** as well as in the
  lesson.
- **The Zettelkasten is not named after Luhmann**; Zettelkasten is German for slip box. Corrected in
  `SOURCES.md` first and then in lessons 7 and 8.
- **EEG called a scan or a scanner.** Lesson 6's title keeps the reader's own word, which is what it
  is for, but the two places in lesson 8 that implied an imaging machine now say what was actually
  done. Lesson 6 glosses EEG at first use.
- **Cross-course cloning is invisible to every check in the repo**, because the repetition warning
  is per-course. Written into `docs/QUEUE.md` under rule 9 rather than built here.
