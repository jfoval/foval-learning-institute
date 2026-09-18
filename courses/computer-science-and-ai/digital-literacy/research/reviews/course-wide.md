# Course-wide review findings: Digital Literacy

Findings that belong to no single lesson. Read this before reviewing any lesson in this course.

## Standing hazards this course's research creates

**The `unread:` line has twelve works in it** and the build fails on a lesson that prints any of
those surnames: Dale, Lewis, Kurose, Ross, Shotts, Krogh, Lain, Pearman, Ray, Mayer, Lee, Doerfler.
Four bite particular lessons and `research/OUTLINE.md` lists which under "Standing hazards from the
`unread:` line". Check this with a whole-word search rather than by eye.

**Every figure carries its year inside the sentence a learner reads** (outline decision 5), not in a
footnote and not only in `## Sources`. A figure that cannot be dated is not printed. Vendor figures
are attributed as vendor figures. This course's numbers go stale faster than anything else in the
institute and the feedback loop should revisit them on a shorter cycle than the rest.

**Every dated figure, by lesson**, so the feedback loop has one page to work from:

| Lesson | Figure | Year stated |
|---|---|---|
| 1 | 231 security professionals and 294 others, and the two lists of three practices | 2015 |
| 1 | 28 participants drew the internet; 14 drew a single box; about 4 parties named against about 2.5 | 2015 |
| 1 | 33 interviews, 8 folk models and their counts, 12 pieces of advice in Table 3 | published 2010, interviews 2007 and 2008 |
| 1 | 19,500+ employees, ten campaigns, no significant effect of annual training, about 2 points from embedded training, over 56% clicked at least once | 2025 |
| 1 | 7,089 Korean organisations, a correlation between training time and fewer incidents | reported by the 2025 authors |
| 1 | UNESCO adds competence area 0 below the European framework's five | 2018 |
| 1 | NIST's minimum password length changed | 2025 |
| 3 | Rename and checksum check run on the machine the lesson was written on | 2026 |

## Standing decisions about how this course is reviewed

**Tier A is the default and has been sufficient so far.** The course carries
`sensitive_domain: false` and is not a standpoint course. Lesson 1 reports a measured weakness in
its own genre and still came back with neutrality passed at Tier A. Escalate on the written triggers
only.

**The fact-check on the terminal and file-system lessons is executed, not fetched.** Lessons 2 to 6
make claims about what a machine does, and those are checkable in seconds on the machine the review
is running on. Check them there, say which you checked, and flag the Windows and Linux claims you
could not verify from a macOS host as unverified rather than as wrong.

## Findings

**2026-09-18 — the outline's per-lesson minute estimates run low, systematically.** Lesson 1 planned
at 45 and measures 115; lesson 2 at 55 and measures 100; lesson 3 at 50 and measures 125. The cause
is the course's own convention that every lesson has the reader do the thing on their own machine:
`npm run minutes` adds a stated exercise duration on top of the reading, and this course's exercises
state long durations honestly. **Resolution:** the outline now says so at the top and the headings
are not to be trusted. `npm run minutes` is the number. No lesson was shortened, because the load is
real; but a reviewer should watch for a lesson whose exercises have grown past what one sitting can
hold, and say so rather than letting the number climb.

**2026-09-18 — the outline propagated a misattributed figure into a lesson.** Outline decision 3
supplied a model sentence reading "over half the trained employees", where the study's finding is
over 56% of employees **trained or not**, against untrained control groups. The lesson 1 draft
copied it twice. **Resolution:** the outline paragraph is corrected and carries a note saying what
happened, so the next drafter does not inherit it. The general lesson: a sentence handed down by
Stage 2 is not pre-checked, and Stage 4's fact-check has to read it as suspiciously as anything the
drafter wrote itself.
