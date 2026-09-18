# Reviews: Digital Literacy lesson 2, "Where a file actually is"

## 2026-09-18 — Lesson 02 — depth, fact-check, pedagogy, cold-start, voice, media, Tier A
**Reviewer:** one fresh-context subagent, all applicable passes. The neutrality pass was **skipped
and correctly so**: the lesson has no contested empirical claim and no value claim in it, and
auditing "where is your home directory" for ideological balance is money spent on nothing.

The fact-check was executed rather than fetched, on a macOS host: `$HOME`, `Desktop` and `Documents`
as real directories, the `/` listing, an `mv` name collision, an APFS case collision, and the whole
`/Users/tomas/Documents/letters/landlord.md` tree with the rename. The SVG was rendered to PNG at
three widths and read element by element. Windows and Linux claims were checked against Microsoft
and Apple documentation and flagged where they could not be confirmed from a Mac.

**Findings:**

1. [critical] L2-01 "On Windows, open File Explorer and click your user name in the left sidebar."
   The user profile folder appears in the File Explorer navigation pane only when View, Show,
   Navigation pane, Show all folders is on, and it is **off by default** in Windows 10 and 11. A
   Windows reader following the lesson's only mandatory exercise finds nothing to click, on the
   course's first practical instruction.
2. [major] L2-02 "On all three systems it ordinarily sits directly inside your home directory, and
   you can prove it in a minute." False for any reader with OneDrive Known Folder Move or iCloud
   Drive's Desktop and Documents option on, both of which move the directory out of the home
   directory. The lesson tells them to go and prove it, and they find nothing.
3. [major] L2-03 the three rules say the shape never varies, and forty lines later the lesson says
   Windows has a root per drive. Both true, and together they contradict. The SVG draws a single
   `/` root, so a Windows reader gets no picture of their own machine.
4. [major] L2-04 "Walk the tree" opens at the root of the drive, and the lesson never says how to
   get there on any of the three systems. It is not obvious on any of them.
5. [major] L2-05 Q1's explanation misdiagnoses distractor B against its own stem: the stem puts an
   `invoices` folder inside every client folder, so B's first step succeeds and its second fails.
   The real failure is more instructive than the one the explanation gave.
6. [major] L2-06 the predict block lists three outcomes for a name collision and all three are the
   safe ones. Executed on this machine, `mv` into a directory holding the same name replaced the
   file silently with no way back. The reader meets `mv` in lesson 5.
7. [major] L2-07 "lesson 3 shows you how to unfilter it", about hidden files. Lesson 3 teaches
   hidden **extensions**, which is a different thing, and neither it nor the outline plans hidden
   files. Defect 12: pointing at material that does not exist.
8. [major] L2-08 Option-Command-P is right, and the Finder path bar shows a row of folder names
   starting with the disk name, not a slash-separated address. A reader told to write down exactly
   what it says writes something that is not the form the lesson teaches.
9. [major] L2-09 zero verb contractions in 3,982 words, in a course whose lesson 1 has more than
   thirty. Read aloud it is noticeably stiffer than the lesson before it.
10. [minor] L2-10 the outline's convention is one `:::callout` per lesson for what differs on
    Windows. This lesson had none, and the Windows material was scattered across four places.
11. [minor] L2-11 the "search gives you a file, structure gives you its neighbours" argument,
    including the contract example, is near-verbatim in lesson 3, which gives it a whole section.
    Rule 2(c): lessons drafted in one context reuse each other's examples.
12. [minor] L2-12 "usually ones whose names begin with a dot" is true of macOS and Linux; Windows
    hides by a file attribute, and `.config` is perfectly visible in File Explorer.
13. [minor] L2-13 "unique among its siblings" is case-insensitive on two of the three systems, and
    Q4's explanation invites the reader to disprove a rule by a test that, on a Mac, produces the
    opposite of what it promises.
14. [minor] L2-14 Q3 lifts "four hundred files" and the rename scenario straight from the body's
    own worked example. Defect 5b.
15. [minor] L2-15 two quiz keys were near-verbatim from the body, passable by phrase matching.
16. [minor] L2-16 objective 1 is taught well and never retrieved: no predict, checkpoint, quiz item
    or exercise step asks for it.
17. [minor] L2-17 the forward reference for `.` points at lesson 5; `.` is introduced in lesson 4.
18. [minor] L2-18 "It is worth the hour" against a measured 100 minutes.
19. [minor] L2-19 seven paragraphs end on a compressed one-line moral, one of them the banned
    "It is not X, it is Y" shape spread across two sentences.
20. [minor] L2-20 two "Here is" section openers.
21. [minor] L2-21 the body carries no links; both sit in Go deeper, and the Carpentry citation in
    the body is a bare marker.
22. [minor] L2-22 three claims lean past what was read or observed: "states its prerequisite more
    honestly than anybody else in the field" is SOURCES.md's editorial judgement worn as the
    lesson's own observation; "widely read" about The Verge piece, whose reach SOURCES.md records
    nothing about; and "most file browsers" put the folder under each search result, which is not
    reliably true of Finder.
23. [minor] L2-23 the SVG is sound. The drawn tree matches all three printed addresses exactly, no
    text overlaps another or a connector, the longest label ends at about x=393 against a viewBox
    of 420, every font-size is an attribute and none is below 15, no `<g>`, no inline style, no
    blank line inside the `<svg>`, and the `<desc>` stands alone. Three small things: `var(--text)`
    and `var(--text-2)` had no fallback literals; the `--line-strong` fallback was another token's
    value; and at 340px the monospace path renders near 12px, which is legible and is forced by the
    42-character address.
24. [minor] L2-24 Q4 distracts with a shortcut or link, a thing the lesson never defines, so the
    reader can only eliminate it. It is also the one place the lesson brushes against a file having
    more than one address, which its own "position plus name" framing invites a reader to ask about.

**Resolutions applied, same day:**

1. L2-01 fixed. The Windows route is now `%userprofile%` typed into the File Explorer address bar,
   which works whatever the navigation pane is set to, and it lives in the new Windows callout.
2. L2-02 fixed. The claim keeps its "ordinarily", and the OneDrive and iCloud Drive exception is
   spelled out with what the reader will actually see, which sets up lesson 12. The quiz item is
   rebuilt around the exception as an application question.
3. L2-03 fixed. Rule three now reads "every tree has exactly one root" and names Windows' root per
   drive in the same breath, so the later paragraph reads as the promised detail.
4. L2-04 fixed. The three routes to the root are given in the exercise, in the same shape as the
   routes to home.
5. L2-05 fixed, with the two-step failure named as the thing to watch for.
6. L2-06 fixed. The collision outcomes are labelled as the graphical ones and named accurately
   (`report 2.docx` in Finder, `report (2).docx` in File Explorer), and the terminal's silent
   replacement is stated with its forward reference.
7. L2-07 fixed by cutting the forward reference; the lesson now says every system has a setting and
   leaves it there. **Not** raised as a lesson 3 item: the outline does not plan hidden files, and
   adding them is a scope change rather than a fix.
8. L2-08 fixed. The path bar is described as what it is, and Copy as Pathname is given as the route
   to the address in the form this lesson teaches.
9. L2-09 fixed. Twenty-five contractions through the body.
10. L2-10 fixed. One `:::callout What is different on Windows` now carries the separator, the root
    per drive and the route to home.
11. L2-11 fixed on lesson 2's side: it keeps the one-line distinction and hands the neighbours
    argument to lesson 3, which owns it. The quiz item went with it, replaced by a relative-path
    application item about sibling directories.
12. L2-12 fixed, with the Windows mechanism named.
13. L2-13 fixed. The case-insensitivity wrinkle is in the body, and the invitation now points at
    the test that works.
14. L2-14 fixed. Sixty files on a shared drive, renamed by a colleague, which tests transfer harder
    than the body's own case.
15. L2-15 fixed by the two replacements above.
16. L2-16 fixed. A `:::checkpoint` now asks for the file-and-directory distinction in the reader's
    own words, right after it is taught.
17. L2-17 fixed: lesson 4 introduces it, lesson 5 explains why it earns its place.
18. L2-18 fixed.
19. L2-19 partly fixed. The banned shape is gone and two morals were flattened. The rest were kept
    deliberately: they carry content rather than rhythm, and stripping all seven would have cost
    more than it saved.
20. L2-20 fixed, both.
21. L2-21 fixed. Carpentry's episode 2 is linked inline at the prerequisite, which is where a
    reader who doubts the claim would go.
22. L2-22 fixed, all three. The prerequisite is now quoted closer to the source's own wording, as
    the outline asked, rather than paraphrased with an editorial judgement attached.
23. L2-23 fixed (a) and (b): fallback literals added to `var(--text)` and `var(--text-2)`, and the
    `--line-strong` fallback corrected to `#0f2a4a`. (c) declined: the viewBox is already at the
    recommended 420 and the address is what forces the width.
24. L2-24 fixed. A sentence in the body names shortcuts, aliases and symbolic links as a second
    address for one file, so the distractor is now a real discrimination.

**Status after review:** clean. Wrong facts were found (L2-01, L2-02, L2-05) and the fixes were
sentence-level rather than a rewrite, so the Tier B trigger is not met.

**Worth carrying forward.** Two of the three wrong facts were **claims about Windows written from a
Mac**, and both were wrong in the same way: the lesson described a default that is not the default.
A reviewer of lessons 3 to 6 of this course should treat every unverified Windows instruction as
suspect until it is checked against Microsoft's own documentation, and a drafter should prefer a
route that works whatever the settings are (`%userprofile%` in the address bar) over one that
depends on a pane being switched on.
