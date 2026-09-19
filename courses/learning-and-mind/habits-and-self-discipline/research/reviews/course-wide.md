# Course-wide review notes: Habits and Self-Discipline

Findings that belong to the course rather than to one lesson. Per-lesson files carry the rest.

## 2026-09-19 — from the Stage 4 reviews of lessons 1 to 7

1. **Defect 22 has a second form, and this course is where it was measured.** The read level is
   itself a provenance claim, and the drafter raises it exactly where it is least entitled to.
   Lesson 2 turned "the abstract and the diary-study results" into "the abstract, the Method section
   and the diary-study results" and then printed a page of Method detail that existed nowhere.
   Lesson 3 turned "Study 1's design and participants" into "both studies" and printed Study 2's
   sample size. Lesson 6 turned "Abstract read verbatim" into "the abstract and the two passages
   stating the shifts" and hung four quotations on the difference. **In every case the inflation is
   what licenses the material the lesson needs.** Recorded in `/draft-lesson` as defect 22's second
   form, with the instruction to copy read levels out of `SOURCES.md` rather than from memory.
2. **Two of the three lessons whose read level was inflated were fixed by Stage 1 work, not by
   editing.** The Inzlicht and Schmeichel paper was opened and recorded properly, which repaired
   lessons 5 and 6 together and also supplied the resource model's own defence. **When a read level
   is the finding, opening the paper is usually cheaper than cutting the lesson**, and it is
   certainly better for the reader.
3. **All seven lessons shared one quiz answer sequence, 0,2,1,3,0,2.** Each met every individual
   requirement, and a learner who noticed the pattern had the key to forty-two items. `quizfix.py`
   now takes an offset and neighbouring lessons differ.
4. **Defect 20 recurred on every lesson of this course**, as it did on Time Management: the footnote
   is written honestly and in full, and the inline label at the point of use is missing. Lesson 6 is
   the first lesson in the repo to get it right unprompted, on two of its three constructions.
5. **Pedagogy 4.3 failed on four of seven lessons in the same way**: the quiz tested recall of the
   body rather than application to a new case, and in three places graded the reader on the lesson's
   own worked example. Every one of those has been recast.
6. **`research/reviews/` held only lesson 1's file** when the lessons 5 to 7 review ran. The other
   six and this file were written in the publishing commit. **Write the review file in the same
   commit as the fix pass**, which is what Time Management did and this course did not.
7. **Two stale cross-references in the research files**, both fixed: `SOURCES.md` §2 pointed at the
   wrong section number for the second Lally-authored paper, and `OUTLINE.md` named a term 2 course
   Mental Fitness where `curriculum/core-path.yaml` calls it Memory.
8. **Digital Literacy is cited twice by lesson 7 and is still `status: drafting`**, so a reader
   following the pointer finds nothing on the site. Left as it is: the reference is correct and the
   course is being written. Noted in `docs/QUEUE.md`.
