# Reviews: Digital Literacy lesson 5, "Commands, arguments, flags, and reading an error"

## 2026-09-18 — Lesson 05 — depth, fact-check, pedagogy, cold-start, voice, Tier A
**Reviewer:** one fresh-context subagent, briefed with the five defects the four previous reviews of
this course had already found in this drafter, and told to check all five explicitly. The
fact-check was executed on this macOS host rather than fetched. The neutrality pass was **skipped
and correctly so**: every claim in the lesson is about what a named program does when you run it,
and all of them are decidable by running it.

**Findings:**

1. [critical] L5-01 the lesson's flagship output is not what any current Python prints, and the
   lesson explicitly tells the reader which half to trust, pointing at the half that changes. The
   real message begins with the full path of the Python that ran, which on this machine is 130
   characters, and since Python 3.11 the filename it quotes is an absolute path, so it is never
   `'hello.py'`. This is the opening exhibit, repeated in "Break the location", and it is the exact
   text the criterion asks the reader to diagnose from.
2. [critical] L5-02 a whole instructional claim attributed to Software Carpentry's instructor notes,
   which say none of it. **This is an exact repeat of L4-01**, one lesson later. The notes say
   learners get trapped in Vim, Emacs or Nano and that closing the terminal is frustrating. They do
   not mention the manual or a pager, they do not say "thousands of workshops", and they do not say
   being stuck is what makes people close the laptop. Footnote 1 repeated the fabrication.
3. [critical] L5-03 `ls -h` offered as macOS's help flag. Executed: `ls --help` gives
   `unrecognized option` plus a usage line; `ls -h` prints **a directory listing**, because `-h` is
   BSD `ls`'s human-readable-sizes flag. A macOS reader is shown their files and concludes that is
   what help looks like, which is the silent half-success this course exists to teach against. The
   origin is visible: Missing Semester says `-h` or `--help` prints help text, and the drafter
   generalised it onto BSD `ls` without running it.
4. [critical] L5-04 `man` does not exist in Git Bash, and this lesson sends the Windows reader that
   lesson 4 created straight into it. Objective 2, exercise 2 steps 2 and 3, and quiz item 4 were
   all unreachable on Windows.
5. [major] L5-05 the traceback's file path is absolute too, since 3.9, and the lesson printed
   `File "hello.py"`.
6. [major] L5-06 `bash:` printed four times for readers whose shell is zsh, which is every current
   Mac and which lesson 4 itself teaches. zsh says `zsh: command not found: pythn3`, with a
   different prefix and a different word order.
7. [major] L5-07 quiz 6's stem asserted what its own key denied, and distractor D carried the key's
   substance, so a reader who understood the mechanism would reject the stem before choosing.
8. [major] L5-08 the Windows callout gives a different command name and then the rest of the lesson
   says `python3` eight more times with no substitution rule. The checkpoint thirty lines earlier
   offers three causes of `command not found` and excludes the one that is true on Windows, and the
   first exercise then forces the reader to choose among those three.
9. [major] L5-09 a false reassurance inside the destructive-command callout: `ls drafts` does not
   show "exactly" what `rm -r drafts` would take, because it shows one level and hides dot-files
   while `rm -r` takes every level.
10. [major] L5-10 footnote 5 claimed the outputs were reproduced exactly and two of the five were
    not, and it attributed a traceback to text the lesson does not show. A verification note that is
    itself unverified is worse than no note.
11. [major] L5-11 word splitting taught as complete, with no mention of what happens to a name
    containing a space, which is the commonest beginner failure the lesson did not cover, and one
    the lesson's own diagnosis table sends the reader in the wrong direction on.
12. [major] L5-12 the Windows callout is the most heavily sourced passage in the lesson, quotes
    docs.python.org verbatim, and carried no citation, while the Sources section said python.org was
    "not otherwise relied on". The reviewer verified the quotation and two other claims verbatim,
    could not confirm "the two recommended commands" against the docs' singular wording, and could
    not confirm the `winpty` point from Python's documentation at all.
13. [major] L5-13 nine contractions in 3,860 words, all sitting on three lines. Fourth lesson
    running.
14. [major] L5-14 Go deeper characterised the contents of a Carpentry episode SOURCES.md does not
    record as read.
15. [major] L5-15 "thousands of workshops" is SOURCES.md's characterisation worn as the lesson's
    observation, attributed to a footnote that does not carry it, and with no year.
16. [major] L5-16 the hardest objective's third branch, reading a traceback, was never retrieved in
    the quiz.
17 to 28. [minor] Three unsourced quantities in the author's voice; footnote markers out of order
    with two sources never cited; `which` described as decisive when a shell builtin answers oddly;
    the case-sensitivity predict block silent on Windows; six sections opening on a bare numeral
    plus two "Here is" openers and four compressed morals; `cp` and `mv` taught and never practised;
    the body never saying how to point a Save dialog at `practice`, which is the precise failure the
    criterion exists to prevent; no figure; `--help` failing for all seven commands named in
    exercise 2 on macOS; `/Volumes` notation in a three-platform quiz; `rm -r` described as deleting
    "a whole directory" when it makes `rm` recurse; and outline decision 1's instruction that
    PowerShell be named in a callout in lesson 5, which this lesson does not do.

**Cold-start verdict against outline decision 2, which is the point of the lesson:** macOS,
qualified yes, blocked on the printed messages not matching what the reader sees. Linux, qualified
yes, same. **Windows with Git Bash, no**, on three counts: the command name, the checkpoint that
excludes the true cause, and `man` not existing.

**Resolutions applied, same day.** All of 1 to 16 and all twelve minors.

The four criticals: every printed message is now what this machine actually produced, with the long
paths shown and the lesson saying plainly which parts hold everywhere and that the quoted address is
where Python looked, which is the useful half; the Carpentry claim is narrowed to the editors, with
the extension to the manual owned as the lesson's own judgement; `ls -h` is now a warning rather
than a recommendation, with the real macOS behaviour printed; and the Windows callout says `man` is
not installed in Git Bash and gives `--help` as the route, which produces a genuinely useful
three-system shape: on a Mac `--help` mostly fails and `man` works, in Git Bash `--help` works and
`man` is absent, on Linux both work.

The Windows reader now gets an explicit substitution rule and a fourth cause in the checkpoint. The
`rm` rehearsal is `ls -a` and says plainly that it shows the floor of what you would lose rather
than the total. Word splitting and names with spaces are taught with the real error, which names
only the first word. Footnote 5 is rewritten against the real transcript, footnote 4 now carries the
Windows callout with its read date, and the `winpty` point is marked as reported community practice
rather than documentation. Twenty-eight contractions. Quiz 6 rebuilt, quiz 5 replaced by a
traceback item so objective 3's third branch is retrieved, `rsync`'s destination made
platform-neutral, and `rm -r` described as working down a tree. `cp` and `mv` are now rehearsed in
the main exercise, and the body says to take the address from `pwd` and paste it into the Save box,
naming Command-Shift-G on macOS.

**Declined:** the figure (L5-24). The five-step account of what happens when you press return and
the three-row diagnosis table already carry the mechanism, and a drawing of them would repeat the
words rather than show anything. Recorded as a decision rather than an omission, which is what the
finding asked for.

**On outline decision 1 (L5-28):** the decision says PowerShell's differences are named in a callout
in lessons 4 **and** 5. Lesson 5 does not name PowerShell, and that is **deliberate and recorded
here rather than fixed**. By lesson 5 the Windows reader is inside Git Bash, which the outline's own
"Conventions" section anticipates when it says the Windows callouts get short after lesson 4. Naming
PowerShell again in a lesson nobody is reading in PowerShell would be noise. The lesson's Windows
callout carries what that reader actually needs, which is Python's command name and the absence of
`man`.

**Status after review:** clean.

**Worth carrying forward, and it is the same finding as lesson 4's second pass from a different
direction.** L5-02 is L4-01 committed again, one lesson later, by a drafter that had not seen the
first review. Both times the fabricated attribution was to Software Carpentry's instructor notes,
and both times the claim was plausible, useful and absent from the source. **Treat every sentence in
this course that attributes a pedagogical recommendation to those notes as unverified until it is
checked against the text.** The notes record what goes wrong; they rarely recommend anything, and
the drafter keeps turning the first into the second.
