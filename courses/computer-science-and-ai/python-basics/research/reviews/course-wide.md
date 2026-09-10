# Course-wide review findings: Introduction to Programming with Python

Findings that belong to no single lesson. See the README in this directory for the layout.

## CW-01, 2026-09-10. The outline's per-lesson time estimates are worthless

`research/OUTLINE.md` sizes the six lessons at 14 to 20 minutes each. Lesson 1 measures **60** and
lesson 2 measures **60**, both from `npm run minutes`, which is the authority. The estimates were
guessed at Stage 2 from the stubs' own `minutes: 10`, and the stubs were 463 words.

Raised by the lesson 1 reviewer. Not fixed lesson by lesson, because editing one number in the
outline each time a lesson lands is busywork that will go stale again. **The outline's estimates
should be struck once all six lessons exist and `estimated_hours` is set from the measured total.**

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
