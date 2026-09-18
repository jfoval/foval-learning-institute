# Reviews: Digital Literacy lesson 3, "Names, extensions, and the file that went missing"

## 2026-09-18 — Lesson 03 — depth, fact-check, pedagogy, cold-start, voice, media, Tier A
**Reviewer:** one fresh-context subagent, all applicable passes. The neutrality pass was **skipped
and correctly so**: every claim in the lesson is about what a named piece of software does, and all
of them are decidable by running it.

The fact-check was executed on a macOS host and the reviewer recorded what it ran: identical sha256
and identical inode across a rename; `file(1)` reporting content-based types while macOS's own type
table reports the extension-based one; `.docx` beginning `50 4b 03 04` and unpacking to
`word/document.xml`; the RTF the system's text engine writes; and `AppleShowAllExtensions` absent by
default. Windows and Linux claims were checked against current documentation and each labelled as
confirmed or unconfirmable from a Mac.

**Findings:**

1. [critical] L3-01 the opening said learners on Windows "cannot produce a plain text file, because
   the obvious program on the machine does not make one", and 68 lines later the lesson says
   Notepad does produce plain text. Notepad ships on every Windows machine. Carpentry's actual note
   is that learners have no *suitable* editor to hand, which is a different claim.
2. [critical] L3-02 quiz item 4's key contradicted the lesson's own predict block. The lesson says
   search reliably finds causes one and four, misses three and five, and finds cause two only
   sometimes; the item then made "search finds nothing" point most strongly at cause two, and its
   explanation disposed of the best rival by inventing a restart the stem never mentions. Defect 13.
3. [major] L3-03 quiz item 1's key required the site to be the kind that parses what it is given,
   which the lesson has just taught the reader they cannot know from the outside, and the
   explanation conceded the point.
4. [major] L3-04 footnote 3 called `file(1)` "the system's own file-type inspection", which inverts
   the lesson's central distinction. `file` reads the bytes; the system's own type decision goes by
   the name, and the reviewer demonstrated it both ways on one machine.
5. [major] L3-05 "the name was never evidence in the first place" two lines before "hiding
   extensions removes the one piece of visible evidence about what a file is".
6. [major] L3-06 lessons 2 and 4 both send the reader here for hidden files, and this lesson covers
   hidden extensions only. Defect 12 from the other direction.
7. [major] L3-07 the "Search and structure" section was a reword of lesson 2's own misconception,
   down to the same contract, amendment and email. Rule 2(c). The reviewer notes that
   `npm run validate` cannot see this class of defect on this course at all, because the repetition
   warning skips courses that are not yet published.
8. [major] L3-08 the rename experiment depended on a setting that the Practice section at the end
   of the lesson turns on. On Windows with the default in place, typing `test.py` into the rename
   field produces a file actually called `test.py.txt`, silently, and the step that follows is then
   false.
9. [major] L3-09 the step that asks the reader to open each saved file in a plain text editor does
   not work on macOS: TextEdit renders an `.rtf` as formatted text, so the reader sees a clean line
   and concludes RTF is plain text, which is the opposite of the lesson.
10. [major] L3-10 quiz item 2 was answerable only by recalling one sentence of the body, and its
    "wrong" option (export) is the right move for the commonest real instance of the case.
11. [major] L3-11 quiz item 5 was winnable by shape: the key was the longest option, the only
    hedged one, and the only one carrying no absolute.
12. [major] L3-12 "the three failures they see most often on Windows" is a frequency ranking
    SOURCES.md does not record. The instructor notes list four accumulated failures with no counts
    and no order. The selection of three came from the outline and was inherited without checking,
    which is exactly what course-wide.md warns about.
13. [minor] L3-13 "causes one, two and four are address problems" fits only cause one, where an
    address was actually recorded.
14. [minor] L3-14 an exercise step referred to "evidence about two of the five" and the lesson never
    says which two.
15. [minor] L3-15 no `:::callout`, against the outline's one-callout-per-lesson convention for
    operating-system differences.
16. [minor] L3-16 the checksum figure carried its year only in the footnote, against decision 5.
17. [minor] L3-17 the checkpoint offered a second Word behaviour that is not reachable from the
    action it describes, and hedged with "depending on how you did it".
18. [minor] L3-18 "The icon has changed" is not reliably true on a Mac with no program registered
    for `.py`.
19. [minor] L3-19 zero contractions in 3,534 words. Lesson 1's review found the same, so this is a
    pattern in this drafter rather than an instance.
20. [minor] L3-20 a 58-word sentence in the second paragraph, where the reader is deciding whether
    to stay.
21. [minor] L3-21 two "Here is" section openers and three "Now the" openers.
22. [minor] L3-22 no links in the body and no figure.
23. [minor] L3-23 two exercise steps asking for the same thing.
24. [minor] L3-24 footnote markers out of order.

**Resolutions applied, same day:**

1. L3-01 fixed, and L3-12 and L3-20 with it, by rewriting the opening as three sentences that say
   what Carpentry actually records: learners reach for the writing program they already have, it
   does not make a plain text file, and nobody has told them which program does.
2. L3-02 fixed. The stem now supplies the disambiguating evidence, a notes app on a phone that
   syncs, and the invented restart is gone.
3. L3-03 fixed by moving the question off the site and onto the file: what is actually inside the
   second person's upload.
4. L3-04 fixed, and turned into the stronger teaching point the reviewer proposed: `file` reads the
   bytes, macOS's own table believes the name, and a PNG named `.jpg` shows both at once.
5. L3-05 fixed. The name is not evidence about the contents; it is evidence about what the machine
   will do, and hiding it takes the system's own reasoning off the screen.
6. L3-06 fixed here rather than in two other lessons, as the reviewer advised: hidden files now have
   a step in the opening exercise with the route on all three systems. Lesson 2's forward reference
   was separately cut in its own review, and lesson 4's "as lesson 3 warned" is now true.
7. L3-07 fixed. The reword is gone. The space went to what is actually new here, which is what a
   failed search is worth: real evidence about two causes, and it rules out none of the five.
8. L3-08 fixed by moving the settings exercise to the top of the lesson, before the experiment that
   depends on it. Better pedagogy as well as a correction: the reader turns the evidence on first.
9. L3-09 fixed. The macOS instruction now includes Display RTF files as RTF code, and the exercise
   step says what happens without it.
10. L3-10 fixed. A different profession, a different storage shape, the stipulation moved into the
    stem, and the export option treated as right-for-a-different-case rather than wrong.
11. L3-11 fixed. Rebuilt as an application item about a default program, with the shapes measured.
12. L3-12 fixed in the body and in the Sources entry, which now says plainly that the notes give no
    ranking and no counts, so the lesson claims none.
13. L3-13 fixed by splitting the two kinds: a recorded address gone stale, against an assumed one
    that was never written down.
14. L3-14 fixed by naming the two, which the new section above it now supports.
15. L3-15 fixed. One `:::callout What is different on Windows, in this lesson`, carrying the
    hide-known-extensions setting and the Notepad line-endings wrinkle.
16. L3-16 fixed.
17. L3-17 fixed, and made stronger: what the reader is shown on a machine hiding extensions is
    `names.txt`, which is the attachment trick arriving by accident.
18. L3-18 fixed, with the no-program case taught as the table doing its job.
19. L3-19 fixed. Twenty contractions through the body.
20. L3-20 fixed with L3-01.
21. L3-21 fixed, both "Here is" openers and one of the "Now the" run.
22. L3-22 partly fixed: the instructor notes are now linked inline where the body leans on them.
    **The diagram was declined.** The name-to-table-to-program indirection is three sentences of
    prose and a box-and-arrow drawing of it would repeat the words rather than show a mechanism;
    lesson 2's tree earns its figure because the shape is the content.
23. L3-23 fixed by the move in L3-08, which merged the duplicated steps.
24. L3-24 fixed, markers now run in order.

**Status after review:** clean. Wrong facts were found (L3-01, L3-02, L3-03, L3-04, L3-05, L3-12)
and every fix was sentence-level or a block move rather than a rewrite, so the Tier B trigger is not
met.

**Worth carrying forward, and it is a tooling finding rather than a lesson one.** The reviewer
noticed that `npm run validate`'s cross-lesson repetition warning does not run on a course whose
status is not yet `published`, which is exactly the period when a drafter is writing several lessons
in one context and is least able to see the repetition. The defect it would have caught here (L3-07)
was found by a human-shaped read instead. **This is written into `docs/QUEUE.md` rather than fixed
in a drafting session**, per root `CLAUDE.md` rule 9.
