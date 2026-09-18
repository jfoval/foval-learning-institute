# Reviews: Digital Literacy lesson 6, "Doing what you could not do by clicking"

## 2026-09-18 — Lesson 06 — depth, fact-check, pedagogy, cold-start, voice, media, Tier A
**Reviewer:** one fresh-context subagent, briefed with the standing warning from lesson 5's review
about attributions to Software Carpentry's instructor notes. Every shell claim was executed on this
macOS host **in both zsh and bash**, the instructor notes were downloaded and searched in full, and
the Git Bash permissions claim was checked against Cygwin's and MSYS2's own documentation.
Neutrality skipped and correctly so.

**Findings:**

1. [critical] L6-01 the `ls > listing.txt | wc -l` predict block is wrong on the reader's own
   machine and teaches a false rule with it. Executed: bash prints `0`, and **zsh prints the count
   and writes the file**, because zsh's MULTIOS option is on by default and is not disabled by any
   macOS rc file. The block is a `:::predict`, so the reader is asked to guess, told an answer their
   machine contradicts, and then given a general rule ("the output stream goes to exactly one place,
   and the last thing to claim it wins") that is false in the shell this course put them in.
2. [critical] L6-02 the Carpentry attribution, **for the third lesson running**. The notes say "We
   have to leave out many important things because of time constraints, including file permissions,
   job control, and SSH", which is the curriculum saying what it permanently does not contain. The
   lesson turned that into instructors reporting a triage order, inventing both a ranking ("the
   first things cut") and an occasion ("when a workshop runs short", welded on from a separate note
   about four hours that names nothing). **And this time the reviewer found the source of the
   repeat**: `SOURCES.md` line 118 and `OUTLINE.md`'s lesson 6 entry both carry the same conflation.
   It is being handed down by Stage 1 and Stage 2 rather than reinvented at Stage 3.
3. [critical] L6-03 "both of the resources below teach all four" is false on the lesson's own quoted
   evidence one sentence earlier: Carpentry's shell lesson teaches none of version control, SSH or
   job control, and the notes the lesson has just cited say so.
4. [major] L6-04 objective 2 is neither taught nor demonstrated. "Stage three" is announced and
   abandoned as a paragraph of prose about why stage three is hard, with no command, no output and
   no answer, and the example chosen could not be done with the toolkit on the page anyway.
5. [major] L6-05 the permission error printed in the bash form to readers whose shell is zsh. Lesson
   5 was fixed for exactly this; lesson 6 regressed.
6. [major] L6-06 the `ls -l` sample is wrong in three columns on macOS and on a default Linux box:
   size 84 against a real 86, date written `18 Sep` where both systems write `Sep 18`, and no `@`,
   which current macOS puts on essentially every file and which is an eleventh character in a
   cluster the lesson has just told the reader to read as ten.
7. [major] L6-07 zero verb contractions in 3,359 words, all fifteen apostrophes possessive. Sixth
   consecutive lesson, and against 24 instances of "it is".
8. [major] L6-08 the toolkit lists five commands, uses two, and closes by saying you will remember
   them by using three of them once.
9. [major] L6-09 what the shell really says when `*.txt` matches nothing is an error, not an empty
   result, and on zsh it comes from the shell before `grep` runs, which is a different diagnosis
   from the one the checkpoint teaches.
10. [major] L6-10 the Git Bash callout is right in substance, **and the exercise contradicts it**:
    the lesson tells the reader to start the file with `#!/bin/bash`, which under the MSYS2 rule
    makes it executable on save, so three steps of a strictly sequenced exercise are dead on Windows.
11. [major] L6-11 lesson 2 and lesson 4 promise the single dot's payoff in lesson 5, three times
    between them; lesson 5 never mentions it; lesson 6 delivers it while misdescribing what lesson 4
    said.
12. [major] L6-12 cold start: the pipeline section has no files and no directory, the reader having
    been left in `practice6` with one file; no Save-box guidance for `count.sh`, which lesson 5 had
    to be fixed for; and `cat` used three times and never introduced.
13. [major] L6-13 Go deeper characterises episodes SOURCES.md records only by title, and the Sources
    entry's own hedge ("titles and stated topics") overstates what the homepage carries.
14. [major] L6-14 two quiz items reuse the body's own example and figure, one of them with its key
    four lines above it in the body.
15. [major] L6-15 objective 3's second half, the execute bit, is never retrieved.
16 to 25. [minor] The exercise's answer given away two lines above it; `ls | wc -l` described as
    counting everything in a directory when it omits dot-names; an unsourced frequency claim; loops
    missing from the list of what the lesson leaves out; `wc -c` called characters when it is bytes;
    no media; source 3 with no marker in the body and the instructor notes not linked inline; six
    compressed one-line morals; `staff` as a macOS-only group name; and the bare-name-versus-`./`
    result asserted rather than produced by the reader.

**Resolutions applied, same day.** All three criticals, all twelve majors, all ten minors.

The predict block now teaches the split it actually is, with both shells' answers and the rule that
survives both: a redirect and a pipe are two claims on one stream, and what happens when you make
both is a property of your shell. The Carpentry sentence is now the quotation. A three-stage
pipeline is worked to an answer using `sort` and `head`, which also gives the toolkit two more of
its five a real outing. The no-match errors are printed for both shells and read as a statement
about the working directory. Every printed output is now from a run on this machine, including the
real `ls -l` line with its `@` explained. Files and a directory are made before the pipeline
section; `cat` is introduced where it is first used; the Save-box guidance is lifted from lesson 5.
The Windows callout now gives the `#!` rule as the mechanism and says which documentation could and
could not confirm it, and the exercise tells the Windows reader their script may already run and
what to do about it. Two quiz items rebuilt off the body's examples, one added for the execute bit,
and one dropped to stay inside the six-item limit. Thirty contractions.

**The root cause was fixed, not just the symptom.** `SOURCES.md` and `OUTLINE.md` both carried the
"first things cut" conflation and both are corrected in the same commit, each with a note saying
what happened, so lessons 7 to 13 cannot inherit it a fourth time. `SOURCES.md` now carries the
general rule at the point of use: **these notes record what goes wrong, and they rarely recommend
anything; any sentence turning the first into the second is suspect until checked against the page.**
The three forward pointers to lesson 5 in lessons 2 and 4 are corrected to lesson 6.

**Declined:** none.

**Status after review:** clean.

**Worth carrying forward.** Three lessons in a row fabricated an attribution to one source, and the
third review found why: Stage 1 wrote a conflation, Stage 2 copied it, and Stage 3 printed it. The
drafter was not inventing. **A claim inherited from SOURCES.md or OUTLINE.md is not pre-checked, and
a reviewer should treat a sentence that arrives with an outline's authority exactly as suspiciously
as one the drafter wrote itself.** That was already written in `course-wide.md` after lesson 1, in
one line, about one figure. It is now demonstrated four times and it is the most expensive recurring
defect in this course.
