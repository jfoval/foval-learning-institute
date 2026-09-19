# Reviews: Using AI Effectively, course-wide

*Findings that belong to no single lesson. Read this before reviewing any lesson in this course.*

## 2026-09-18 — Standing hazards a reviewer of this course has to check against

**The seven decisions in `research/OUTLINE.md` are review criteria, not suggestions.** A reviewer
who does not open them will miss the two breaches that are easiest to commit and hardest to see.
Decision 1: the course names no product and prints no interface instruction, and it *does* name a
model where a study used one, which is a different thing and is required. Decision 2: no lesson body
states a capability as a standing fact, and every capability figure carries a model name as well as
a date. Both were breached in lesson 1's first draft, in opposite directions, and one of the
breaches was a sentence claiming to honour the other.

**The `unread:` line carries an exemption keyed to a lesson number.** It reads
`Jurafsky (except 02), Martin (except 02), Russell, Norvig`, because chapter 2 of Jurafsky and
Martin was read in full and the rest of the book was not. **That mechanism keys to a lesson rather
than to a chapter**, so a lesson 2 citing chapter 7 would pass `npm run validate` and would be
wrong. A reviewer of lesson 2 has to check which chapter is being cited by eye.

**Two of the four studies this course rests on were opened on 2026-09-18 after being summarised
wrongly everywhere**, and both corrections run the same way: the summary keeps the figures that make
a clean story and drops the one that complicates it. Dell'Acqua's outside-frontier result is 19
**percentage points**, not 19%, and its 43-against-17 skill figures are not in the published text at
all. Noy and Zhang report quality in standard deviations and the circulating "18% higher quality"
figure is not in the paper. **A reviewer meeting either figure in its common form should treat it as
a defect rather than check it against the internet**, because the internet is where it came from.

**The third recurrence, and it cost a rewrite.** Dell'Acqua's study has three conditions, and the
third, GPT-4 plus a prompt engineering overview, did best inside the frontier and worst outside it,
24.5 percentage points against 13.9. No summary carries that. It is the spine of lesson 6 and it
appears in lesson 1's callout, and both places must keep it.

## 2026-09-18 — What this drafter does to this course in particular

Three defects showed up in both drafted lessons and are now items 15 to 17 on `.claude/commands/draft-lesson.md`. They are all measured by `npm run validate`, so a reviewer should not have to find them; if a draft reaches review with any of them still in it, the drafter skipped the check.

- **Contractions at 0.0 and 0.3 per 1,000 body words** against the repo's 5 to 8.
- **The quiz key as the sole longest option** in 4 of 6 and 5 of 6 items, and one lesson using only two of the four answer positions.
- **Explanations referring to options by position** while the same explanation referred to something else by position. Both lessons now name each distractor by its content instead, which is the convention for this course from here on.

One further pattern, which a check cannot catch and a reviewer must: **this drafter quotes
accurately and attributes carelessly.** Lesson 1's first draft attached the provenance of the *one*
outside-the-frontier task, built from BCG's job-interview cases, to the *eighteen* tasks inside the
frontier. Every quotation in the lesson was verbatim. The false sentence had no quotation marks in
it. **Point a review at the sentences with no quotation marks.**
