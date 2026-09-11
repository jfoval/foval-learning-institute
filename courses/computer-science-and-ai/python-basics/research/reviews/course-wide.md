# Course-wide review findings: Introduction to Programming with Python

Findings that belong to no single lesson. See the README in this directory for the layout.

## CW-01, 2026-09-10. The outline's per-lesson time estimates are worthless. **Closed 2026-09-10.**

`research/OUTLINE.md` sizes the six lessons at 14 to 20 minutes each. Lesson 1 measures **60** and
lesson 2 measures **60**, both from `npm run minutes`, which is the authority. The estimates were
guessed at Stage 2 from the stubs' own `minutes: 10`, and the stubs were 463 words.

Raised by the lesson 1 reviewer. Not fixed lesson by lesson, because editing one number in the
outline each time a lesson lands is busywork that will go stale again. **The outline's estimates
should be struck once all six lessons exist and `estimated_hours` is set from the measured total.**

**Done 2026-09-10**, when lessons 5 and 6 landed. All six estimates are struck from OUTLINE.md's
headings, with a note there saying why. Measured totals: 60, 60, 65, 65, 85, 95, which is 430
minutes, so `estimated_hours` goes from 2.8 to **7.2**. It will move again when the two assessments
land. Note that the outline's *word* targets, 1,800 to 2,600, were also beaten by every lesson, and
that is not a defect: the standards say there is no ceiling and that nothing is cut to hit a count.

The consequence worth watching: `course.yaml` still says `estimated_hours: 2.8`, describing the six
stubs, which is correct for now under `docs/DECISIONS.md` §8. The Stage 2 outline guessed the
finished course at about 5.5 hours. Two lessons in, the measured total is already 2.0 hours for a
third of the course, so **the finished figure is heading for 6 and the outline's 5.5 is low.** Set
it from the measurement, not from the guess.

## CW-02, 2026-09-10. Quiz options that open with a quote character break the frontmatter

Applying a lesson 1 fix introduced a YAML error: an option written

    - 'ADA' again, since the two lines do the same work either way

parses as the quoted scalar `ADA` followed by unexpected text, and the whole frontmatter fails with
"bad indentation of a sequence entry". `npm run validate` catches it, and its message names a colon
in an unquoted value as the usual cause, which is not what happened here.

This course will hit it more than most, because Python output is full of quoted strings. **An
option or a question that opens with `'` or `"` needs the whole string wrapped in the other kind of
quote.** Worth remembering when writing lessons 3 to 6 and the two assessments.

## CW-04, 2026-09-10. Four of six lessons keep their footnote markers out of the body

Raised by the lesson 6 reviewer. Lessons 1 and 2 put `[^n]` markers in the text, as standard 2.1
asks. Lessons 3, 4, 5 and 6 put all of them in the Sources list and none in the body. Not fixed in
lesson 6 alone, because fixing one of the four would be inconsistency rather than a fix. **Do all
four in one pass**, and the claims that most want a marker are the checkable ones: version numbers,
syllabus weeks, and anything a security vendor reported.

## CW-05, 2026-09-10. The voice pass has a number to work against

Both Stage 4 reviewers this session measured the register drift rather than asserting it.
Contractions in body prose, by lesson: **38, 28, 49, 43, 10, 8**. Lessons 5 and 6 are a full step
more formal than the four before them, and they are the two most recently drafted, so this is
drift in the drafter rather than a property of the subject matter. Both reviewers also counted
paragraphs ending on a compressed one-line moral: seven in lesson 5, nine in lesson 6.

**The voice pass is owed on all six lessons of this course** and these are the numbers to bring it
down to. Lessons 3 and 4 are the target, not lessons 5 and 6.
