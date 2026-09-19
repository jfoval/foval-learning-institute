# Course-wide review notes: Memory

## 2026-09-19 — from the Stage 4 review of lesson 1

1. **A new form of the provenance defect, and the reviewer named it.** The route that produced four
   of lesson 1's findings was **not an inflated read level but unsourced material with no read level
   at all**: a mechanism stated flatly in the course's own voice, with no marker, no source and no
   label, and then graded in the quiz. Defect 22's second form is a claim about what was read; this
   is the absence of any such claim. **It is harder to catch, because there is no sentence to
   string-match**, and the check is the reverse one: take each mechanistic claim in the body and ask
   which source it came from.
2. **The exercise in lesson 1 stakes an irreversible instruction on a project that does not exist
   yet.** `assessments/` is empty. The outline specifies the project fully and `courses/CLAUDE.md`
   allows assessments at six lessons, so this resolves at publishing; until then the lesson tells a
   reader not to re-read something for a project they cannot see. **Write the project before lesson
   7 rather than after it.**
3. **The bold count regressed against the course written the same day.** Time Management runs 11.7
   to 17.5 spans per thousand words and is the repo's best practice; lesson 1 arrived at 28.7. It is
   now 19.6 and the target for the rest of the course is under 20.

---

## 2026-09-19 — after lessons 2 to 7 were reviewed

**Four things recurred across the course and are worth carrying rather than repeating.**

**The footnote written honestly and then treated as the job done.** Lessons 2, 4, 5, 6 and 7 each
shipped a Sources entry claiming something was "marked inline where it appears" when it was not,
and three of them shipped a footnote with no marker anywhere in the body, so a reader could not
reach it at all. The entry is written while the drafter can still see what it is describing, and
the inline clause is what a reader actually meets. **Write the inline clause first and the footnote
second.**

**Restating another lesson is where a closing lesson goes wrong.** Four of lesson 7's six
fact-check findings were wrong restatements of this course's own lessons, none of which a reviewer
could have caught without opening them. A lesson that summarises six others has six more chances to
be wrong than a lesson that summarises none.

**The institute-wide superlative, four times in seven lessons.** "The clearest case in the
institute", "the best short example in this institute's reading lists", "the best-evidenced method
available", "the smallest samples in the institute". Each is a claim about a body of work nobody
surveyed, and the last was measurably false: Clear Writing records paraphrase testing at six to
nine participants and How to Learn Anything an experiment at eighteen. **The honest form is a
comparison with what this course met.**

**The quiz answer template, found independently by two reviewers.** Every lesson's sequence shared
one permutation pattern, a,b,c,d,b,a, so item 5 repeated item 2 and item 6 repeated item 1 in all
seven, while every per-lesson check passed. `npm run validate` now tests for it, on the general
form, and the same check found the same defect in Focus and Deep Work and in Habits and
Self-Discipline.

**And one defect this course contributed to the repo.** Lesson 5 printed a passage in quotation
marks, attributed to the authors, carrying a source marker, that nobody wrote: it was `SOURCES.md`'s
own unquoted commentary. `/draft-lesson` defect 24 and `npm run quotes` both exist because of it.

**Still open, and not a blocker.** The course has no chart, image or video in any lesson. Lesson 3's
three-row table with its confidence intervals is the obvious candidate. Two reviewers raised it and
neither called it a reason to hold the course.
