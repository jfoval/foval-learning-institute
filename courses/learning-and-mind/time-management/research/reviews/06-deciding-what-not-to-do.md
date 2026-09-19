# Reviews: Time Management lesson 6

## 2026-09-19 — Lesson 06 — Stage 4, all passes, Tier A
**Reviewer:** one subagent in a fresh context, briefed with the five review files written earlier in
the day and asked to make the neutrality pass the priority, since the outline assigns the course's
one value question to this lesson and the research file warns in terms that this is where the course
would become a sermon.

**Verdicts as returned:** depth pass with one reservation, **fact-check FAIL**, **neutrality FAIL on
architecture rather than on tone**, **pedagogy FAIL**, **cold start FAIL**, voice and media pass with
minors.

### Findings

1. **[critical] L6-01. A closing fence had been merged onto the end of the preceding line**, so the
   checkpoint opened at line 287 never closed and swallowed everything after it: the section naming
   the value question, the misconception list, both exercises, Connections, Go deeper and Sources.
   **The lesson's entire statement of the do-more case, its "no standing to choose", and its
   acknowledgement of the course description's lean were all behind a reveal button.** `npm run
   validate` did warn, and the warning was missed because the session grepped its output for the
   lesson's filename and that warning is emitted against the directory. **Cause: this session's own
   re-wrapping helper**, which joined a paragraph's lines without excluding a line consisting of
   `:::`.
2. **[critical] L6-02. The constructed man in the checkpoint was labelled nowhere**, not in the body
   and not in footnote 4, and quiz item 5 graded the reader on him. **Fourth recurrence of defect 20
   in this course.**
3. **[critical] L6-03.** "An if-then plan is supported by strong activated goal intentions" flattened
   the source's "are stronger when", which is **L4-02 recurring the same day on the next lesson**,
   and the `[3]` marker was carrying the course's own diagnostic as well as the cited condition.
4. **[major] L6-04.** Two sentences said lesson 4 left the question open and this lesson answers it.
   Lesson 4 answers it, for a goal the reader chose, and hands forward the goal that is *not* theirs
   to drop, which was the case this lesson never picked up.
5. **[major] L6-05.** "Neither review tests a method" is a flat negative about 22 pages this course
   has not opened. The footnote had the scope right and the body's headline sentence did not.
6. **[major] L6-06.** Six unsourced generalisations about readers, none labelled, and **four of the
   six argue in the do-less direction with none in the other**, which is defect 14's selection
   problem.
7. **[major] L6-07, the finding the review was commissioned for. Counted rather than read for
   tone.** Inside the two-position section the do-more case wins on every measure: 95 words against
   64, the sharper sentence, and the last word, and the reviewer records that it passes the
   ideological Turing test in both directions. **Across the whole lesson the counts invert**: 1,949
   words of subtraction machinery against a 340-word section, 2 worked cases to 0, 2 exercises to 0,
   4 unsourced generalisations to 0. **A reader who does the work of this lesson does subtraction
   twice and addition never**, while the lesson claims its form is direction-neutral.
8. **[major] L6-08, L6-09, L6-10.** Lesson 2 described as having asked the reader to count their
   hours "so that you would know how few there are", which is the opposite of its deliberately open
   instruction; a handover from lesson 5 promised by both lessons and delivered by neither; and the
   contested column called "a fourth time" when it was the second.
9. **[major] L6-11, L6-12.** Both exercises break for the reader they explicitly address. Exercise
   1 tells the low-discretion reader their refusal is a request and then asks four lines written for
   a withdrawal; exercise 2 addresses the reader with no discretion and then requires discretion in
   its only branch.
10. **[major] L6-13, L6-14.** A "who has to be told" requirement that appears in the exercise and
    nowhere in the body, justified by an unsourced psychological claim adjacent to the attention
    residue idea this course has on its unread line; and the promise that the course's own reasoning
    "is labelled where it appears" not kept in the two largest such sections.
11. **[major] L6-15.** The course description's lean was named without saying which way it leans,
    delegating the content to lesson 1, in the lesson lesson 1 itself names as where it matters most.
12. **[major] L6-16, L6-17.** A distractor named by position, and two of six items running on the
    body's own people and numbers, leaving genuine application at 1 of 6.
13. **[minor] L6-18 to L6-26.** Five clumsy contractions from the mechanical voice pass; bold at 14
    percent of body words, which is course-wide; a plural subject with a singular verb; an ambiguous
    "gave up five"; an unreintroduced Priya; a comparative claim about books the course has not
    opened; "the most taught scheme" asserted in a graded stem; a label saying "this paragraph" over
    a five-paragraph position; and the borrowing from **Using AI Effectively** lesson 9 under-credited
    at the point the form is claimed as the course's own.

### On the contraction measurement
The reviewer reported this lesson at 12.2 per 1,000 and the whole course above band. **That is the
hand-count error `docs/QUEUE.md` warns about**: counting every `'s` reads about double, because the
validator excludes possessives. Measured the validator's way this lesson was 6.1 before the fix pass
and is 6.0 after. **The five specific sentences the reviewer quoted are fair regardless of the rate**
and are fixed.

### Resolutions applied, same day

- **L6-01: fixed**, and recorded against this session's own tooling rather than against the drafter.
  The validator caught it; the session's grep did not.
- **L6-02 to L6-06, L6-08, L6-10, L6-13 to L6-17: fixed.** The six generalisations now say "this
  course expects" and cite footnote 4, the two large sections carry their label at the head, and the
  quiz's two recycled cases are re-peopled with a bus driver and a cello.
- **L6-07: fixed by giving the adding direction a branch it did not have.** Exercise 1 now has three
  branches taking the same four lines, and the third is explicitly for a reader who has decided to
  take something on, "which is a decision this course has no objection to and no view about". The
  third line is still the one not to skip: what comes out of the week to make room. **The cheapest
  version of this fix was four lines and it removes the architecture finding**, which is the
  reviewer's own recommendation.
- **L6-09: fixed in both directions.** Exercise 1 now uses the internal-against-external count as a
  source of candidates, which is what lesson 5 promised.
- **L6-11: fixed** by writing the request branch's four lines out in full, using Ruth's case in the
  same form Marcus got. The reader decision 6 protects had been shown a one-line answer while the
  reader who needs no help got the worked model.
- **L6-12: fixed** with the third ending the body already supplies.
- **L6-26: fixed.** Using AI Effectively lesson 9 is credited at the point the form is introduced,
  and the credit is widened: the pair is this course's, the cost-and-condition-and-date shape is
  lesson 9's. The reviewer checked that lesson and found the borrowing larger than the footnote said.
- **L6-19, bold density: declined here and queued** as one pass over the course, the way the missing
  links were handled on lesson 4.

**Status after review:** clean. No second full pass.
