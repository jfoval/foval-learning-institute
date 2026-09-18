# Reviews: Digital Literacy lesson 4, "Opening a terminal, and standing somewhere"

## 2026-09-18 — Lesson 04 — depth, fact-check, neutrality, pedagogy, cold-start, voice, Tier A
**Reviewer:** one fresh-context subagent, all six passes, briefed with the closing note from lesson
2's review: two of that lesson's three wrong facts were claims about Windows written from a Mac.
This lesson is far more exposed, because it tells Windows readers to install software, so every
Windows and Linux instruction was checked against the vendor's own current documentation and
labelled confirmed, unconfirmable, or wrong. The macOS claims were executed here.

**Findings:**

1. [critical] L4-01 "their notes say it plainly: keep the terminal and the graphical file browser
   open together, so the learner can see they are two views of one thing.[1]" The reviewer
   downloaded the Software Carpentry instructor notes and searched the full text: no "side by
   side", no "file browser", no "two views", no such recommendation anywhere. The claim came down
   from SOURCES.md, which asserts it. This is the pass-2 trap of a sentence attributed to a body
   that never wrote it, and it was the lesson's opening authority claim and the stated
   justification for its whole design.
2. [critical] L4-02 "the terminal may show you one or two extra names beginning with a dot" is
   backwards. Executed: plain `ls` printed zero dot-prefixed names and `ls -a` printed 39. `ls`
   hides them; the file browser, after lesson 3's setting, shows them. A reader who did lesson 3
   properly sees fewer names in the terminal and is told they have miscounted.
3. [critical] L4-03 "The absolute path it prints should be the one showing in your file browser."
   In Git Bash, `pwd` prints `/c/Users/you` while File Explorer prints `C:\Users\you`, which is the
   form lesson 2 taught. So the lesson's central proof that the two windows are one tree fails, in
   the first command, for exactly the readers it has just made install software. Under WSL it fails
   harder: `pwd` prints `/home/you` and the Windows files are under `/mnt/c`.
4. [major] L4-04 the worked example, the predict block and the `ls Documents` reversal all assume
   `~/Documents` exists. It does not for a Windows reader with OneDrive Known Folder Move, a WSL
   reader whose Linux home starts empty, or a non-English Linux desktop where xdg-user-dirs has
   created `Dokumente`. Carpentry's instructor notes, recorded as read in full, carry the OneDrive
   warning verbatim and the lesson dropped it: defect 1.
5. [major] L4-05 the WSL route is a dead end as written. It never says how to run PowerShell as an
   administrator, never mentions the Linux user name and password the first launch demands, never
   says how to open Ubuntu, and leaves the reader's Windows files on a filesystem the file browser
   is not looking at, so the side-by-side arrangement the lesson depends on cannot be set up.
6. [major] L4-06 "almost never fail cleanly" about POSIX-shaped commands in PowerShell is wrong.
   `grep`, `touch`, `man` and `which` fail loudly and precisely. The quiet-difference class is real
   and narrower. The outline's own version was narrower and true, and the draft escalated it.
7. [major] L4-07 **the neutrality pass failed**, on selection rather than tone. Counted first, as
   the pass requires: POSIX's case carries two footnotes and an appeal to every course the reader
   could go to next; the PowerShell callout carries zero citations in a lesson that footnotes every
   other platform claim. POSIX gets the last word twice. POSIX is explained; PowerShell is only
   characterised. And PowerShell's strongest practical argument is never stated: it is already
   installed, which matters most in a lesson whose own callout has just made installing software a
   thing to stop and think about. Its object pipeline appears only as a liability. Compounding it,
   "every free course you could go to after this one teaches these commands, and none of them
   teaches the Windows alternative" is false in its second half, and the outline's version named
   three curricula and was true. No sneering anywhere.
8. [major] L4-08 "a freshly opened terminal starts in your home directory" is stated as a universal
   and is not one: Git Bash Here, a code editor's integrated terminal and a file manager's Open
   Terminal Here all start you elsewhere. The exercise built to prove the claim would disprove it.
9. [major] L4-09 the checkpoint says "two commands will do it" and supplies three, and claims `ls .`
   is where the single dot "earns its keep" four lines before saying bare `ls` does the same thing.
10. [major] L4-10 zero verb contractions in 3,384 words. Lesson 2's review found the identical
    defect and fixed it; lesson 4 had regressed to zero.
11 to 25. [minor] Quiz 1's explanation citing teaching the lesson does not contain; no guidance on
    telling x64 from ARM64; two SOURCES.md editorial characterisations worn as the lesson's own
    observations; the Missing Semester set mischaracterised; bare citation markers with no inline
    link; one predict and one checkpoint in 3,384 words; two "Here is" openers; a sentence
    duplicated six lines apart; two quiz keys passable by phrase-matching the body; objective 3
    promising `~` and `.` that the practice never exercises; `mkdir` used before it is taught; a
    tutor character reused from lesson 2's quiz; "paths use backslashes" stated as a PowerShell
    requirement rather than a Windows convention; Ctrl+Alt+T claimed for "most" desktops when XFCE
    ships none; and zsh's default described without the pre-2019-account caveat.

**Verification table the reviewer produced** is the useful artefact here and is worth keeping:
confirmed against live sources were the git-scm.com download options, gitforwindows.org's own "BASH
emulation" wording, all four WSL claims, the macOS Terminal routes, zsh as default since 10.15, and
PowerShell's `ls`/`cat`/`pwd` aliases and object pipeline. Wrong were L4-01, L4-02, L4-03 and L4-06.
Partly confirmed was the Ctrl+Alt+T claim.

**Resolutions applied, same day:**

1. L4-01 fixed by dropping the attribution entirely and owning the device: the side-by-side
   arrangement is not attributed to anybody, it is simply what makes the hour work. Footnote 1 now
   claims only what the notes supply. **SOURCES.md is the origin and is corrected separately**, so
   lesson 6 does not inherit it.
2. L4-02 reversed, and turned into teaching: the file browser may show dot-names after lesson 3's
   setting, plain `ls` leaves them out, and `ls -a` asks for the unfiltered list. That also makes
   lesson 3's forward promise true.
3. L4-03 fixed with a new callout, "What `pwd` prints on Windows", giving both spellings as one
   address and naming WSL's separate tree as the other reason to take Git Bash first.
4. L4-04 fixed. The reader is told to look at what `ls` printed before the first `cd`, and given the
   three ordinary reasons `Documents` may be missing, none of which is a broken machine.
5. L4-05 demoted, as the reviewer's second option. WSL is named as the better long-term home with
   what it actually costs to set up, and the lesson says plainly: take Git Bash today.
6. L4-06 fixed, and made concrete: `grep` and `touch` are simply not there and PowerShell says so;
   the middle case is the command that half works.
7. L4-07 fixed. The choice is now stated as a choice about where you can go next rather than as a
   fact about which shell is better; the three curricula are named instead of "every free course";
   and the callout opens with PowerShell's two real advantages, that it is already on the machine
   and that an object pipeline removes a class of bug POSIX shells still have.
8. L4-08 scoped, with the general rule carried instead: a new terminal starts wherever it was told
   to, and `pwd` is how you find out.
9. L4-09 fixed. The stem asks how many the reader can find, and the answer says plainly that the dot
   buys nothing here and points at the one place in lesson 5 where it does.
10. L4-10 fixed. Nineteen contractions through the body.
11 to 25. All applied. Two quiz items rebuilt as application questions that the body cannot be
    phrase-matched for; a step added to the practice for `cd ~` against bare `cd`; `mkdir` replaced
    by a move the reader can already make; the tutor swapped for a workshop handout; and every
    platform wording corrected as listed.

**Status after review:** fixed, and **sent for a second pass on the two dimensions that failed**,
which is the proportionate response to a neutrality failure plus wrong facts where the fixes were
sentence-level. Not escalated to full Tier B: the reviewer's own verdict was that every fix except
the WSL route was sentence-level, and the five-agent shape is for lessons that were heavily
rewritten.

**Handed to `docs/QUEUE.md`, not fixed here.** The cold-start pass found that a Windows reader put
inside Git Bash by this lesson will meet `python3 --version` as lesson 5's first worked example and
will usually not have `python3` on `PATH` there, because a python.org install registers `python` and
`py`. That is created by this lesson and belongs to lesson 5, and it is a real gap in the criterion
outline decision 2 sets.
