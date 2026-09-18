# Outline: Digital Literacy

*Stage 2, 2026-09-18. Built from SOURCES.md. Thirteen lessons, a course-end test, one project.*

**What a learner already has.** `npm run taught` puts this course fifth in Term 1, after How to Learn
Anything, Reading Well, Writing Clearly and Logic and Argument, all four written and published, 37
lessons between them. Nothing earlier on the path is unwritten, so this course is not standing in for
anybody. It can lean on: retrieval and spacing (How to Learn Anything), diagnosing a text that
defeats you and reading a source from its attribution outward (Reading Well 3 and 9), front-loading a
document (Writing Clearly 2), and the four rules for sources, the base-rate arithmetic and the
structure of an appeal to authority (Logic and Argument 6, 8 and 9). Those are used, linked, and not
re-taught. In particular, **lesson 11 does not re-teach how to evaluate a source**; Logic and Argument
9 owns that, and this course applies it to a message that is trying to move you.

**What comes after, and needs this.** Using AI Effectively is the next course in Term 1 and is
unwritten. The whole Computing term (Python Basics, How Computers Work, Cybersecurity for Everyone,
Databases and SQL, Data Analysis, Web Development) sits at Term 6, and of those only Python Basics
exists. Python Basics is the binding constraint and has its own section below. The others are planned
against this course's terminal and network material, so the specific things they will need are listed
under "What downstream courses will need" at the end.

---

## The sequence, and why it is this one

The dependency runs in one line and the line is the course. **You cannot address a machine until you
know it is a place** (2), and you cannot recover a file until you know what an address is and what a
name does (3). **The terminal is the same place addressed differently** (4), which only makes sense
after the graphical view has been taught, and Carpentry's instructor notes say to show the two side by
side. A command is a grammar before it is a vocabulary (5), and reading its error is the skill that
makes the rest survivable. Then the terminal earns its keep by doing something the mouse cannot (6).

The second half is the same move on the network. **Start at what the learner sees and work down**
(7), which is the top-down instinct the standard networking text uses in its first chapter and which
we take without citing it, because that book is in the unread line. Once you know who sits in the
path, you can ask what each of three popular tools hides from which of them (8). Then trust: in the
software you install (9), in the credential that stands between you and your accounts (10), in the
message asking you to act (11). Then the two things that survive a bad day: a copy a mistake cannot
reach (12), and a clear-eyed reading of what somebody else already holds about you (13).

Security comes last, not first, and that is deliberate. Wash's finding is that people reject security
advice **rationally, given a wrong model of the machine**. Fix the model in lessons 2 to 7 and the
advice in 9 to 13 stops being arbitrary.

---

## Six decisions this outline settles

### Decision 1: the course teaches POSIX shell, and names what PowerShell does differently

**Settled: teach POSIX (bash or zsh) as the course's shell. Windows learners install Git Bash in
lesson 4, with WSL named as the fuller alternative. PowerShell's differences are named explicitly in
a callout in lessons 4 and 5, never hidden.**

The reasoning, in the order it actually decided the question:

1. **The transferable artefact is the POSIX command vocabulary.** Every free curriculum the learner
   can go to next teaches it: Software Carpentry's shell-novice, MIT's Missing Semester, and the free
   internet edition of the standard command-line book at linuxcommand.org. A learner who finishes
   this course knowing PowerShell has nowhere free to go next, and that is the whole point of a
   foundation course.
2. **It is also the shell the rest of the Core needs.** Python Basics runs `python3 sums.py` at a
   prompt; every later Computing course assumes the same commands; and server and cloud environments
   a learner might meet are overwhelmingly POSIX.
3. **The Windows cost is real and it is smaller than it looks.** Carpentry's instructor notes name
   Windows as their leading source of workshop failure, and the three named failures are home
   directory confusion, no plain text editor, and DOS line endings. Git Bash removes the first and
   the third outright and lesson 3 handles the second. Teaching PowerShell alongside would not fix
   any of them; it would add a second vocabulary to a course that already carries two halves.
4. **The course's own description already commits us.** It promises the course "is the same on
   Windows, macOS and Linux where that matters", which is a promise to name the difference, not to
   teach both.

**What the learner is asked to install, and how that is handled.** Git Bash is the default
recommendation: it is small, needs no virtualisation and no reboot, and installs from
git-scm.com. WSL is named as the option for anyone who wants a real Linux and is willing to spend
longer. The install is lesson 4's first worked example and is treated as the first instance of "name
what you are trusting", with a forward reference to lesson 9 rather than a rushed version of it. Per
the safety guidance in SOURCES, no lesson tells anyone to switch off SmartScreen to complete it.

**What the PowerShell callout must say**, because a half-truth here is worse than silence. PowerShell
is a capable shell and this course is not judging it; standards 3.3 rules out sneering and there is
nothing to sneer at. What it does differently, and what will bite: `ls`, `cat` and `pwd` exist as
aliases for cmdlets and mostly do what a POSIX user expects until they do not; `Get-ChildItem`
returns objects rather than lines of text, so a pipeline carries structured objects and the
text-filtering habits in lesson 6 do not transfer; paths use backslashes; and a POSIX-shaped command
typed into PowerShell will sometimes work and sometimes silently do something else, which is harder
to diagnose than a clean failure. That last sentence is the reason for the whole decision and it
belongs in the callout.

**Consequence for Python Basics, noted and not planned here.** `python-basics/lessons/01-first-program.md`
currently sends Windows learners to PowerShell. Once this course ships, that lesson disagrees with its
own prerequisite and will need updating. **That work is not planned in this outline and must not be
done under cover of it.** It belongs in `docs/QUEUE.md` as its own item.

### Decision 2: the Python Basics debt, and which lesson discharges each part

SOURCES.md's criterion, copied verbatim as instructed:

> **a learner who finishes it can create a folder, save `hello.py` into it, `cd` there, run
> `python3 hello.py`, and, when it fails, say from the message alone whether the fault is in the
> location, the program name, or the program.**

That criterion is not decoration. **It is lesson 5's final exercise, run exactly as written**, and if
a draft of lessons 4 and 5 would not get a reader to it, the draft is wrong and not the criterion.

The seven debts from SOURCES, and where each is discharged:

| # | What Python Basics needs | Discharged in |
|---|---|---|
| (a) | A terminal opened on all three operating systems, PowerShell versus POSIX named rather than papered over | **Lesson 4**, opening section and the PowerShell callout |
| (b) | The working directory as persistent state, graphical browser and terminal side by side | **Lesson 4**, core mechanism; set up by **lesson 2**, which teaches the same tree in the file browser first |
| (c) | `pwd`, `ls`, `cd`, `~`, `.`, `..`, absolute against relative, tab completion | **Lesson 4**, the whole body; absolute against relative is introduced in **lesson 2** as an idea and used in 4 as a command |
| (d) | Commands, arguments and flags as a grammar, so `--version` and `--help` are recognisable rather than magic | **Lesson 5**, opening; `python3 --version` is one of its two worked examples |
| (e) | File extensions, plain text against rich text, including the TextEdit and Notepad trap | **Lesson 3**, the whole first half |
| (f) | Reading an error: "command not found" (the computer cannot find the *program*) against "no such file" (the program cannot find the *file*) | **Lesson 5**, the closing third, and it is the lesson's hardest objective |
| (g) | Installing software from a source you have a reason to trust | **Lesson 4** in its short form, for the shell itself; **lesson 9** in full |

### Decision 3: lesson 1 states the course's premise honestly, and claims something else instead

The problem is real. Kang et al. (2015) found technical background predicted **perceiving** more
threats and did not predict **doing** more about them. Ho et al. (2025) ran an eight-month randomised
experiment over ten simulated campaigns at a healthcare organisation of more than 19,500 employees and
found no significant relationship between recent completion of awareness training and failing a
simulation, and a **2 percentage point** absolute reduction from embedded training. A course that
promises "understand this and you will be safer" is promising something two of its own load-bearing
sources decline to support.

**What lesson 1 does about it.** It says all of that, in the body, in the first third, with the
numbers and the years. Then it makes the claim it can defend, which has two parts and no third:

1. **Understanding changes diagnosis.** When something goes wrong, a model of where files live and
   who sits in a network path is the difference between a person who can say what failed and a person
   who can only say that it broke. Nothing in Kang or Ho touches this; they measured protective
   behaviour, not diagnosis, and the course should say that distinction out loud rather than hide
   behind it.
2. **Understanding supports one-time structural choices.** The defensible conclusion in SOURCES is
   that structural defences (a password manager, a passkey, multi-factor authentication, automatic
   updates, a backup that restores) outperform vigilance. Those are decisions made once, and a person
   who understands why makes them and keeps them. That is a claim about setup, not about
   attentiveness, and the Ho result is specifically about attentiveness.

**The shape of the sentence to aim for**, so the drafter is not left to invent it: this course will
not make you a person who never clicks the wrong thing, because over half the trained employees in
the best-measured study clicked at least once in eight months. It will make you a person who can tell
what happened, and who set five things up so that the click costs less.

Standards 2.4 asks for exactly this kind of sentence and this course gets to write it about itself.

### Decision 4: the backup lesson narrows its claims, and Stage 1 owes it two specific documents

**Settled: the backup lesson teaches the property and not the numerals, and two named claims are
gated behind primary sourcing.**

Three claims were separated by how well they are supported:

- **"A sync client cannot distinguish a person saving a file from a program damaging one, so it
  faithfully uploads the damaged version."** This needs no citation at all. It is a description of
  what sync does, and **the learner verifies it themselves** in the lesson's exercise by editing a
  file on one device and watching the old content go. Teach it as mechanism, demonstrate it, cite
  nothing.
- **"Version history has a bounded retention window."** Gated. It must come from the provider's own
  documented retention page, which is primary for a claim about that provider's product, and every
  figure carries the provider's name and the year it was checked.
- **"Ransomware can defeat versioning by renaming files."** Gated, and the harder of the two. It must
  come from CISA's ransomware guidance or equivalent official material, not from a backup vendor.
  **Standards 2.2 excludes vendor marketing, and a backup company writing about why sync is not
  backup is marketing for a product category.**

**The 3-2-1 rule is dropped as a rule and kept as a shape.** Its popular attribution runs through a
photography book that SOURCES records as not opened, and the surname is in the `unread:` line, so a
lesson naming it fails the build. That is a convenient enforcement of the right decision: the numerals
are a mnemonic, the extended vendor form (3-2-1-1-0) is marketing, and the property underneath is what
transfers. **A backup is a copy that a mistake on the original cannot reach, and the only way to know
you have one is to restore from it.** The lesson teaches that sentence and derives the copies, the
media and the off-site location from it.

**If Stage 1 cannot get the two gated claims**, the lesson still works: it states the property, and
its exercise has the learner find and read their own provider's documented retention window, which
teaches the more useful habit anyway. Write the lesson so that path is not a mutilation.

### Decision 5: every figure carries its year in the sentence

**Settled convention, applying to every lesson, every quiz item, every assessment and every podcast
script in this course.** A number is written with its year inside the sentence a learner reads, not in
a footnote and not only in the `## Sources` list. "NIST's 2025 revision requires at least 15
characters." "By 2023, over 90% of phishing sites served HTTPS." "Okta reported phishing-resistant
authenticator use at 14.0% of users as of January 2025."

Three supporting rules:

- **A figure that cannot be dated is not printed.** If the drafter cannot say what year it describes,
  the claim is reworded qualitatively or dropped.
- **Vendor figures are attributed as vendor figures, with the year.** The Microsoft "more than 99.9%
  less likely" line is a vendor blog claim without published methodology, and SOURCES says so. It may
  appear only as "Microsoft has said", never as a study.
- **The course-wide review file lists every dated figure by lesson**, so the feedback loop has a
  single page to revisit. This course's numbers go stale faster than anything else in the institute
  and should be re-checked on a shorter cycle than the rest.

### Decision 6: this course teaches the desktop model, and says so on the record

**Settled: the course teaches the desktop and laptop model. Lesson 1 says so in plain words. Lessons
2 to 7 are desktop-only. Lessons 8 to 13 apply to a phone and each names in one short passage what
changes there.**

The gap, stated plainly so it is on the record rather than discovered later: **a learner whose only
computer is a phone cannot do lessons 2 to 7 or the terminal strand of the project.** There is no
visible file system to teach, no terminal to open, and the paths that lessons 2 and 4 are built on are
hidden by the operating system on purpose. That is a large share of the world's internet users and
this course does not serve them for its first half.

**Why the desktop model is still the one to teach**, which lesson 1 must argue rather than assert: the
phone hides a file system, it does not lack one, and every service the learner meets (a web server, a
shared drive, a code repository, an email attachment) is organised on the model lessons 2 and 3 teach.
A learner who has the model can use a phone's document picker and understand why it behaves oddly. A
learner who has only the phone's model has no account of where anything is.

**Recommendation, not actioned here.** A mobile-first counterpart is missing from the Core map. That
is a taxonomy question and Stage 2 of one course is the wrong place to settle it; this outline records
it and stops.

---

## Conventions for every lesson

- **Every lesson has the learner do the thing on their own machine before it explains it.** This is a
  practical course and a lesson that can be completed by reading has failed.
- **Every figure carries its year** (decision 5).
- **Three operating systems, one body text.** Where a step differs, the difference goes in one
  `:::callout` per lesson, not scattered inline. macOS and Linux share the body; Windows gets the
  callout, and after lesson 4 the Windows learner is inside Git Bash and the callouts get short.
- **Destructive commands get a warning and a safe rehearsal in the same breath.** `rm` has no undo
  and no recycle bin. Any lesson that opens a command-line editor says how to get out of it in the
  same paragraph, because Carpentry's instructor notes record learners trapped inside one.
- **Never a checklist of current scams.** Ho et al. found lure quality dominated everything, and
  lures change. Teach structure, date every example.
- **Never imply that being phished reflects on intelligence.** Over half of trained employees clicked
  at least once in eight months, and that fact is both the argument and the compassion.
- **Jurisdiction is named wherever a right is.** The right of access and the right to erasure are
  European. US readers have a patchwork of state laws. Say which is which every time.
- **Sources named by author and year in the body**, listed under `## Sources`, with the read level
  said out loud where SOURCES.md records one.

### Standing hazards from the `unread:` line

Twelve works are named in SOURCES.md's `unread:` line and the build fails on a lesson that prints any
of those surnames. Four of them bite this outline directly:

- **Lesson 7 must not name the authors of the standard networking text.** The course uses their
  top-down sequencing, which is a pedagogical choice and not a citation. If a draft wants to quote or
  attribute, Stage 1 opens the book first.
- **Lesson 10 must not print the Google login-challenge percentages** (100 / 96 / 76 for SMS, and the
  rest of that table), because the underlying paper is unread. **The lesson is designed to work
  without them**: the ladder is carried by NIST SP 800-63B-4 §3.1.3.3 and CISA's phishing-resistance
  criteria, which are read and primary, plus the FBI IC3 complaint and loss figures with their years.
  If Stage 1 opens the paper, the numbers are a good addition, not a rescue.
- **Lesson 10 must not attribute the SIM-swap carrier study.** The mechanism is named in NIST
  §3.1.3.3 (device swap, SIM change, number porting) and that is enough to teach it.
- **Lesson 12 must not name the 3-2-1 attribution** (decision 4 settles this anyway).
- **The free command-line book at linuxcommand.org may be linked as a further resource**, described
  as what it is, with no claim attributed to it and its author's surname not printed. Anything more
  than a link needs Stage 1 to open it. Its licence forbids adaptation in any case.

---

## Lesson sequence

### 1. What you are up against, and what this course can honestly do (~45 min)

- **Objectives:** explain what the evidence says technical understanding does and does not predict
  about protective behaviour; build a threat model for yourself naming what you have, who would want
  it, and what it would cost you; identify the folk model behind a piece of security advice somebody
  actually follows.
- **Core ideas:** the honest premise, per decision 3, with the Kang and Ho findings and their years.
  The two claims this course can defend: diagnosis, and one-time structural choices. Then the single
  most consequential wrong belief in the subject, from Wash (2010): the *big fish* model, held by 9 of
  33 interviewees, which concludes "I am not a target, so this is not my problem". Wash's Table 3 is
  the idea to teach: twelve standard pieces of expert advice mapped against eight folk models, showing
  that **the advice is not rejected out of laziness, it is rejected rationally given a wrong model**.
  Then threat modelling, in the shape of EFF's "Your Security Plan": what do you have, who wants it,
  how likely are they to try, how bad if they succeed, how much trouble will you go to. The course
  scope and what it leaves out, including the desktop decision (decision 6) and the dating convention
  (decision 5) shown in use rather than announced.
- **Mechanism to explain:** why a wrong model produces confident wrong behaviour. Advice is stored as
  a rule; a rule is applied by asking whether the situation is the kind the rule is for; that judgement
  runs on the model. So the model, not the advice, decides what a person does. This is also why
  handing someone a longer list of rules changes nothing, which is the Ho result from the other side.
- **Worked examples:**
  (a) *Simple:* a threat model built in front of the reader for an ordinary person with a laptop, an
  email account, a bank app and family photos. Five questions, five written answers, and one honest
  conclusion that some threats are not worth defending against.
  (b) *With a wrinkle:* the botnet case from Wash section 4. **No respondent in the study could
  conceive of an attacker who wanted only their internet connection**, did no damage to the machine,
  spread with nobody at a keyboard, and used them to attack somebody else. Run that attacker against
  the threat model just built and watch it slip through every question, because the question "what do
  I have that anyone would want" has the wrong subject. The fix is to add a row: what can my machine
  be *used for*, not just what is *on* it.
- **Misconceptions:** "I am not a target" (Wash's big fish, corrected by the botnet argument); "an
  infection announces itself" (Wash's *mischief* model, 12 of 33; the economically rational malware is
  quiet); "if they want in they will get in, so why bother" (Wash's *graffiti* model, which produces
  fatalism and is the failure mode this whole course must avoid); "security is a personality trait,
  and careful people are safe".
- **Practice:** write your own security plan, five questions, on one page. Then take one piece of
  security advice you have been given and do not follow, and write which model of the threat would
  have to be true for your non-compliance to be sensible. Keep the page; lessons 8 to 13 all refer
  back to it.
- **Sources:** Wash 2010 (read in full), models and Table 3 and section 4; Kang et al. 2015 (read in
  full), the no-relationship finding; Ho et al. 2025 (abstract and first two pages read, and the
  lesson says so); EFF Surveillance Self-Defense, "Your Security Plan", linked and not rebuilt;
  UNESCO's DLGF area 0 for the one-sentence point that "devices and software operations" had to be
  added below everything else because outside high-income countries it cannot be assumed.
- **Connects:** governs everything. The threat model is picked up again in 8, 10, 11 and 13. Leads to
  2, where the model of the machine starts being built.
- **Neutrality note:** this lesson reports a measured weakness in its own genre. It must not
  overcorrect into "training is useless": Ho et al. themselves distinguish "people cannot learn to
  spot phishing" (not claimed) from "the products as deployed do not move the outcome much" (claimed),
  and earlier lab studies did find learning. Both go in, per standards 3.1 case 2.

### 2. Where a file actually is (~55 min)

- **Objectives:** explain the difference between a file and a directory in terms a beginner can use;
  construct absolute and relative paths that identify particular files on your own machine, and
  translate one into the other; identify your own home directory and say what "home" means.
- **Core ideas:** the tree. Directories contain files and other directories; there is a root; every
  file has a position in the tree and that position is its address. Paths as addresses, with the two
  kinds: **absolute** (from the root, unambiguous anywhere) and **relative** (from where you are
  standing, shorter and only meaningful with a standing point). The home directory and why the
  operating system gives you one. Where the three systems differ and where they do not: `/Users/name`,
  `/home/name`, `C:\Users\name`, all the same idea with different spellings and one different
  separator. Carpentry's stated prerequisite is the honest one and should be quoted to reassure the
  reader: if you have stored files on a computer and recognise the word "file" and either "directory"
  or "folder", you are ready.
- **Mechanism to explain:** why the tree exists rather than one big pile. Names must be unique to be
  addresses, and unique names across a whole machine are impossible, so uniqueness is bought with
  position: two files called `notes.txt` are different files because they sit in different places.
  That one sentence explains folders, paths, why moving a file changes its address, and why two
  programs can both have a `config` file.
- **Worked examples:**
  (a) *Simple:* one file on the reader's own machine, located in the graphical browser, then written
  out as an absolute path, then as a relative path from two different starting points, then the
  question "which of these three still identifies the file if I email it to you" answered.
  (b) *With a wrinkle:* the same file after the folder above it is renamed. Every absolute path to it
  is now wrong, the file has not moved and nothing is lost, and the reader works out what did change.
  This is the single most common cause of a broken link, a broken backup script and a program that
  cannot find its data, and it is one rename.
- **Misconceptions:** "a file lives in the application I made it in" (The Verge reported instructors
  meeting students who could not say where their files were, in 2021; treat it as journalism about a
  teaching experience and **do not claim a generation cannot use folders**, because no study is cited
  for the prevalence); "the desktop is a place" (it is a directory, and showing its path is the
  demonstration); "search means I do not need structure" (search finds what you can name; structure
  finds what you forgot the name of); "the cloud folder is somewhere else" (it is a directory on this
  machine with a program watching it, which lesson 12 needs).
- **Practice:** open the graphical file browser and, without using search, walk from the root to a file
  you made last month, writing down each directory you pass. Then write that file's absolute path and
  two different relative paths, and say what each relative path assumes. Then find one file whose
  location surprises you and say why it is there.
- **Sources:** Software Carpentry shell-novice episode 2 (read in full), its objectives and its
  file-and-directory framing; Carpentry's instructor notes (read in full) on the graphical browser and
  terminal side by side; The Verge, "File Not Found", 2021 (search-summary level, and the lesson says
  so).
- **Connects:** built on by 3 (names), 4 (the same tree from a prompt) and 12 (a backup is a copy of
  a subtree). Leads to 4 directly.
- **Spaced review of:** lesson 1's model idea, now applied to the machine rather than the threat: the
  reader's own model of where files live is about to be tested against the real tree.
- **Figure:** one diagram of a tree with the same file marked by an absolute path and by two relative
  paths from different starting points. One idea, phone-legible, per standards 4.5.

### 3. Names, extensions, and the file that went missing (~50 min)

- **Objectives:** explain what a file extension does and does not determine; compare plain text with
  rich text and say which one a program will accept; identify, for a file you cannot find, which of
  five causes explains it, and recover it.
- **Core ideas:** the extension is a convention for choosing which program opens a file, and it is not
  what the file *is*. Renaming `photo.jpg` to `photo.txt` changes nothing inside it. This cuts both
  ways and both matter: a program can refuse a perfectly good file because of its name, and a
  dangerous file can carry a harmless-looking name. Then the trap Carpentry lists among the top three
  Windows failures: **a text editor that does not produce plain text**. TextEdit opens in rich text by
  default and saves `.rtf`; Word saves `.docx`, which is not a text file at all; Notepad is plain but
  writes DOS line endings that a shell will later refuse. Then the five reasons a file "disappears":
  it was moved or renamed; it was saved by an application into its own container; it is in a synced
  folder that is not currently synced; it was saved to a default location the person never chose; or
  it was never given a location at all and lives only inside an app. Search as a supplement to
  structure, not a replacement: what each one can find, and what neither can.
- **Mechanism to explain:** why a name can be both a label and an instruction. The operating system
  keeps a table from extension to program, so the name is data that the system executes a decision on.
  Understanding that one indirection explains the "open with" menu, the wrong-program-opened problem,
  and why hiding extensions by default (which two of the three systems do) removes information the
  user needs.
- **Worked examples:**
  (a) *Simple:* make `hello.txt` in a plain text editor, rename it `hello.py`, watch the icon and the
  default program change, open it and see the same content. Nothing inside changed. Then the reverse:
  save the same content from a rich-text editor and look at what is actually in the file.
  (b) *With a wrinkle:* the file that is not missing. A document saved from a phone app, or by a
  program into its own container, which search does find but whose location makes no sense and which
  the reader must decide whether to move. The wrinkle is that moving it can break the app that owns
  it, so the answer is "copy it out, do not move it", and the reasoning is more useful than the rule.
- **Misconceptions:** "the extension is what the file is"; "hiding extensions makes things simpler"
  (it removes the one piece of evidence about what a file is, which lesson 9 needs when an
  attachment is named `invoice.pdf.exe`); "a Word document is a text file"; "if search cannot find it,
  it is gone"; "saving is saving" (an application's own save location is a choice somebody made for
  you).
- **Practice:** set your system to show file extensions, and say what changed on your screen. Then
  make one plain text file with each editor you have, and check which produced plain text. Then take
  one file you lost in the last year and diagnose it against the five causes in writing, even if you
  have since found it.
- **Sources:** Carpentry instructor notes (read in full) on the plain-text-editor failure and DOS line
  endings; Missing Semester lecture 1 (read in full) for the command grammar this sets up; the
  operating systems' own settings for showing extensions, which is where the practice step comes from.
- **Connects:** discharges Python Basics debt (e). Builds on 2's tree. Needed by 5 (`hello.py` must be
  plain text or nothing works) and by 9 (the double-extension attachment) and 12 (what is worth
  backing up).
- **Spaced review of:** lesson 2's paths, since three of the five disappearance causes are address
  problems.

### 4. Opening a terminal, and standing somewhere (~60 min)

- **Objectives:** open a POSIX shell on your own operating system, including installing one if you are
  on Windows; explain what the working directory is and predict what a command will do from it;
  construct and run `pwd`, `ls` and `cd` with `~`, `.` and `..` to reach a directory you name in
  advance.
- **Core ideas:** the terminal is the same tree as lesson 2, addressed by typing instead of clicking.
  Carpentry's instructional device is the whole lesson's design: **the graphical file browser and the
  terminal open side by side, showing the same directory**, so the reader sees two views of one thing
  rather than a second, mysterious place. The prompt, and what the parts of it usually mean. The
  **working directory as persistent state**, which is the single idea the rest of the terminal half
  and all of Python Basics lesson 1 depend on: a terminal is always standing in exactly one directory,
  and a relative path means nothing until you know which. `pwd` answers where you are, `ls` answers
  what is here, `cd` moves. `~` for home, `.` for here, `..` for up. Tab completion, taught as a
  correctness tool and not a speed tool: it only completes what exists, so a name that will not
  complete is a name that is not there.
- **Mechanism to explain:** why the shell needs a standing point at all. A command is a program handed
  some words; the words are usually names; a name without a position is ambiguous; so the shell keeps
  one position and resolves every relative name against it. That is the whole of the working
  directory, and once a reader has it, "no such file" stops being mysterious.
- **Worked examples:**
  (a) *Simple:* install (Windows) or open (macOS, Linux) a shell, run `pwd`, and find the same
  directory in the graphical browser, side by side. Then `ls`, and check the listing against the
  window. Then `cd` into a subdirectory and watch the two views agree.
  (b) *With a wrinkle:* the same `ls Documents` typed from two different working directories, one of
  which works and one of which errors. Nothing about the command changed. Then the case that catches
  everybody, taken straight from what Python Basics needs: **a freshly opened terminal starts in your
  home directory, not where you were yesterday**, so the command that worked last night fails this
  morning.
- **Misconceptions:** "the terminal is a different computer"; "the terminal is for experts" (Carpentry
  has taught this to thousands of working scientists in two-day workshops, and its stated prerequisite
  is knowing the word "file"); "typing is faster than clicking" (that is not yet the argument; lesson 6
  makes the real one); "`cd` with no argument is an error" (it goes home, and reading the manual is
  how you find that out, which sets up lesson 5); "tab completion is a shortcut" (it is a check).
- **Practice:** with the file browser open beside the terminal, navigate to three directories you
  choose in advance, using an absolute path for one, a relative path for the second and `..` for the
  third. Then predict, before pressing return each time, what `pwd` will print. Then close the
  terminal, open a new one, and say why `pwd` prints what it now prints.
- **Sources:** Carpentry shell-novice episode 2 (read in full), objectives and commands; Carpentry
  instructor notes (read in full), the side-by-side device and the Windows home directory failure;
  Missing Semester lecture 1 (read in full) for the scope of commands; git-scm.com and Microsoft's own
  WSL documentation for the install instructions, which must be checked at drafting time and dated.
- **Connects:** discharges debts (a), (b), (c) and part of (g). Builds on 2 and 3. Leads to 5.
- **Spaced review of:** lesson 2's absolute and relative paths, now typed rather than described, which
  is the retrieval-practice version of the same idea.
- **Safety:** the Windows install is the first time this course asks anybody to install anything. It
  gets the short version of lesson 9's rule (you are trusting the project and the site you downloaded
  from, and here is how to check you are on the right site) and a forward reference, not a rushed
  version of the whole lesson.

### 5. Commands, arguments, flags, and reading an error (~60 min)

- **Objectives:** explain the grammar of a command and identify the program, the arguments and the
  flags in one you have never seen; apply `--help` and `man` to find out what an unfamiliar command
  does before running it; identify, from an error message alone, whether the fault is the location,
  the program name, or the program.
- **Core ideas:** a command is a sentence with a fixed grammar: the program first, then flags that
  change how it behaves, then arguments that say what to do it to. Once that is visible, `ls -l
  Documents` and `python3 --version` stop being incantations. `man` and `--help` as the two ways in,
  with the escape from `man` said in the same breath as the way into it, because Carpentry's notes
  record learners trapped in a pager or an editor with no idea how to leave. Making and moving things:
  `mkdir`, `touch`, `cp`, `mv`, and `rm` with its warning. Then the lesson's real subject: **errors as
  information**. "command not found" means the computer could not find the *program*; "no such file or
  directory" means the program ran and could not find the *file*. Those are different failures with
  different fixes and telling them apart is the most useful single skill in the terminal half.
- **Mechanism to explain:** what actually happens when you press return. The shell splits your line
  into words, treats the first as a program name, looks for that program in a list of directories, and
  if it finds one, hands it the remaining words. Two of those steps can fail and they fail with
  different messages. That is why the two errors mean what they mean, and a reader who has this can
  diagnose an error they have never seen.
- **Worked examples:**
  (a) *Simple:* `python3 --version`, run on the reader's machine, which answers with a version number
  or says the command is not found. Both outcomes are worked: what each one tells you, and what you do
  next in each case. This is precisely the moment Python Basics lesson 1 currently has to teach
  itself.
  (b) *With a wrinkle:* the criterion run in full. Make a directory, save `hello.py` into it with a
  plain text editor (lesson 3), `cd` there, run `python3 hello.py`. Then break it three ways on
  purpose: run it from the wrong directory, misspell the program as `pythn3`, and put a typo inside
  the file. Three different messages, three different faults, one per failure category, and the reader
  names each from the message before being told.
- **Misconceptions:** "an error means I broke something" (most errors are the computer telling you
  precisely what it could not do); "the error is the last line, so the rest is noise"; "if the command
  is right it will work anywhere" (the working directory again); "`rm` puts things in the bin" (it does
  not, and this is said with the warning and rehearsed on a file made for the purpose); "flags are
  optional decoration" (`rm -r` is a different command from `rm`).
- **Practice:** the criterion exercise above, written out as the lesson's main task, including the
  three deliberate breakages and a written diagnosis of each from the message alone. Then take one
  command you have never used, read its `--help`, and say in one sentence what it does and what would
  happen if you ran it with no arguments. Then get into `man` and get out of it.
- **Sources:** Missing Semester lecture 1 (read in full), the command grammar, `man`, `--help`, and
  the exercise design of hitting an error and working out why; Carpentry shell-novice episode 2 (read
  in full) and the instructor notes on trapped learners; Python Basics lesson 1, read in full, which
  is what the criterion is measured against.
- **Connects:** discharges debts (d) and (f), and completes the criterion in decision 2. Builds on 3
  (plain text) and 4 (working directory). Leads to 6.
- **Spaced review of:** lesson 3's extensions, since `hello.py` must be plain text, and lesson 4's
  working directory, which is one of the three deliberate breakages.
- **Safety:** `rm` gets its warning and its rehearsal. No lesson in this course runs `rm -rf` as a
  demonstration, and the word `sudo` does not appear until lesson 9, where what it means to grant a
  program full power is taught before the word is used, per the SOURCES safety guidance.

### 6. Doing something you could not do by clicking (~55 min)

- **Objectives:** explain what a stream is and predict where a command's output will go; build a
  pipeline of three commands that answers a question about your own files; apply a loop or a short
  script to repeat one operation over many files, and explain why the file needs permission to run.
- **Core ideas:** this is the lesson that justifies the previous two. A command reads an input stream
  and writes an output stream; redirection (`>`, `>>`, `<`) points those at files; a pipe (`|`) points
  one command's output at the next command's input. Because the stream is text, any command composes
  with any other, which is the property that makes a small vocabulary large. Then the counting and
  filtering tools that make this visible: `grep`, `wc`, `sort`, `head`, `cut`. Then repetition: a loop
  over a set of files, or a three-line script saved and run, and the permission that a file needs to be
  executable, which is where read, write and execute for owner, group and others gets its one honest
  outing in this course.
- **Mechanism to explain:** why composition works here and not in a graphical interface. Each program
  agrees to read lines of text and write lines of text, so no program needs to know about any other.
  A graphical application owns its window and its data and exposes only the operations its author
  drew, which is why "do this to all 400 of them" is often simply not available. That is the argument
  for the terminal, and it is an argument about interfaces rather than about speed.
- **Worked examples:**
  (a) *Simple:* a real question about the reader's own files answered in one pipeline, for instance
  how many files in a directory were changed this month, or which of your text files mention a word.
  Built one command at a time, running each stage and looking at the intermediate output before adding
  the next pipe, which is both the right habit and the right teaching order.
  (b) *With a wrinkle:* a three-line script that does the same job, saved to a file, which then
  refuses to run. The reader diagnoses it as a permission problem rather than a program problem
  (lesson 5's skill on a new case), fixes it with `chmod`, and can now say what the execute bit is. On
  Windows inside Git Bash this behaves differently enough to need its callout, and that is the honest
  version of the three-systems promise.
- **Misconceptions:** "a pipe saves a file somewhere" (nothing is written unless you redirect); "`>`
  and `>>` are the same" (one truncates, and demonstrating that on a file made for the purpose is
  safer than warning about it); "scripting is programming and I am not a programmer" (three lines you
  already typed, saved); "the output on screen is the output" (the screen is one destination among
  several, which is the whole idea of a stream).
- **Practice:** answer one question about your own files that you could not answer by clicking, in a
  pipeline, and write down what each stage contributed. Then save it as a script, make it executable,
  and run it. Then delete a stage and predict the error before you see it.
- **Sources:** Missing Semester lecture 1 (read in full), streams, redirection, pipes, permissions;
  Carpentry shell-novice episodes 4 to 6 as the structure for pipes, loops and scripts, and linked as
  the "go deeper" for anyone who wants the fuller treatment (the lesson homepage and episode 2 were
  read in full; the later episodes are listed in SOURCES at structure level, and the lesson may not
  claim more of them than that).
- **Connects:** closes the terminal half. Builds on 4 and 5. Its output feeds the project. Lesson 7
  uses its command-running habit for `dig` and `traceroute`.
- **Spaced review of:** lesson 5's error categories, applied to a permission error, which is a fourth
  category and is introduced as such rather than smuggled in.
- **Deliberate omission, stated in the lesson:** version control, SSH, job control and regular
  expressions beyond literal text are not taught here. Carpentry's instructor notes say permissions,
  job control and SSH are the first things cut from a four-hour workshop, and this course cuts the
  same things for the same reason. Link Missing Semester and Carpentry and say so.

### 7. From an address to a page (~60 min)

- **Objectives:** explain, in order, what happens between typing a web address and seeing a page;
  identify which step has failed from a described symptom; apply `dig` (or `nslookup`) and a
  traceroute tool to a real domain and read what comes back.
- **Core ideas:** top-down, starting at the thing the learner already does. You type a name. A name is
  not an address, so something must translate it (DNS), and that translation is a request to a server
  that may be cached, wrong, or blocked. Then a connection is opened to the address, over a path of
  intermediate machines that neither end chose. Then a request is sent and a response comes back, and
  the page is often dozens of such exchanges with different companies. Who is in the path, named
  concretely: your device, your router, your internet provider, whoever runs the name service you use,
  a series of networks in between, probably a content delivery network, and the service itself. Kang's
  result is the reason this lesson exists: **14 of 28 participants drew the internet as a single box
  that receives requests and sends answers**, 13 of them lay users, and participants with articulated
  models named more parties who could see their data (mean 4 against 2.56). **You cannot worry about
  something your model does not contain.**
- **Mechanism to explain:** layering, taught as division of labour rather than as a diagram of seven
  boxes. Each step knows only its own job and trusts the layer below to deliver, which is why the
  system scales, and why a failure at one layer produces a symptom at another that looks unrelated.
  The name lookup does not know about the page; the connection does not know about the name.
- **Worked examples:**
  (a) *Simple:* one domain taken from name to page in front of the reader, with `dig` showing the
  answer and the traceroute showing the hops, and every step narrated. The reader runs the same two
  commands on a domain they choose, using the terminal they now have.
  (b) *With a wrinkle:* a failure diagnosed. "The site does not load, but it works on my phone." Walk
  the same ladder and find which rung: the name resolves or it does not; the connection opens or it
  does not; the response arrives with an error code or nothing arrives. The wrinkle is that the phone
  on mobile data is using a different network **and a different name server**, which is what makes it
  a diagnostic rather than a mystery, and the reader ends able to say which layer failed.
- **Misconceptions:** "the internet is a place I send things to" (Kang's simple service model); "the
  website is a computer somewhere and I am talking to it" (mostly a content delivery network nearer
  than that, and a page usually contacts many companies); "home Wi-Fi is safe because it has a
  password" (Kang section 4.1.2.1: it changes who can join the local network and nothing about the
  path afterwards); "my internet provider just carries the data" (it resolves your names unless you
  changed that, and it sees every destination); "if the site is slow, my connection is slow".
- **Practice:** draw the internet, on paper, before reading the lesson, exactly as Kang's participants
  did. Then run the two commands on your own most-visited domain and redraw it. Then write down three
  parties who can see that you visited it, and one who cannot.
- **Sources:** Kang et al. 2015 (read in full), the drawing method, the counts, and the
  articulated-model finding; the top-down sequencing of the standard networking text's chapter 1,
  **used as a pedagogical choice and not cited, because that book is in the `unread:` line**;
  CS50's Understanding Technology unit list (read at homepage level) as a second witness that the
  internet and security are the two load-bearing topics.
- **Connects:** builds on 6's habit of running a command and reading what comes back. Leads directly
  to 8, which asks what each party in the path can actually see. Needed by 11 (a link goes somewhere)
  and 13 (who holds copies).
- **Spaced review of:** lesson 1's threat model, which now gains named parties it did not have, which
  is Kang's finding demonstrated on the reader.
- **Figure:** one diagram of the path with each party named, drawn once and reused in lesson 8 with
  the visible and hidden parts marked. Reusing one figure across two lessons is deliberate: the second
  lesson is the same picture with an overlay.

### 8. The padlock, the VPN and the private window (~70 min)

- **Objectives:** explain what HTTPS certifies and what it does not; compare private browsing, a
  consumer VPN and HTTPS by what each hides, from whom, and where; identify which of them, if any,
  addresses a stated worry from your own threat model.
- **Core ideas:** three tools, one question. Take lesson 7's path and ask, for each party on it, what
  each tool changes. **HTTPS** encrypts the content between your device and the site, so the parties
  in between see that you connected to a domain and not what you did there. It certifies that the
  connection to *whatever domain is in the address bar* is encrypted, and **nothing whatever about who
  owns that domain or whether they are honest**. That is why the padlock is finished as a safety
  signal: by 2023, over 90% of phishing sites served HTTPS. **Private browsing** is local: the
  session's history, cookies and form data are not kept on that device afterwards. It does not hide
  you from the site, your provider, your employer's network or an advertiser, and it does nothing
  about malware. The measured belief gap is the lesson, from Habib et al. (2018): of private-browsing
  users, 24% (MTurk) and 26% (SBO) correctly answered that it does not stop all cookies; 39% of both
  populations believed it made them anonymous; and **12% of SBO and 5% of MTurk participants expected
  it to protect them from malware and hacking**. Private browsing occurred in 4% of observed sessions
  across 167,128 sessions. A **consumer VPN** moves the visible origin of your traffic from your
  provider or the café network to the VPN company: a trust transfer, not a trust elimination.
  Consumer Reports' evaluation of 16 VPNs found 12 of 16 either inaccurately represented their
  products or made hyperbolic or overly broad claims; 8 of 16 had current third-party security audits
  of the core product, 6 had reproducible builds, 4 mentioned internal audits, and one shipped 1990s
  era PPTP. Four described their limits accurately.
- **Mechanism to explain:** each tool operates at exactly one point on the path, and every
  misconception in this lesson is somebody applying a tool at a point it does not touch. Encryption
  changes what the middle can read and not who the ends are. A private window changes what is kept on
  your disk and not what leaves it. A VPN changes which company sees the first hop and not whether you
  are logged in to the service you are visiting. Once a reader can place each tool on lesson 7's
  diagram, every one of the measured misconceptions answers itself.
- **Worked examples:**
  (a) *Simple:* one browsing session run three ways on the reader's own machine (ordinary, private
  window, and, described rather than required, through a VPN), with a table: what your provider sees,
  what the site sees, what stays on the machine, what your employer's network sees if you are on it.
  Same session, three rows, and the reader fills the table before reading the answer.
  (b) *With a wrinkle:* a padlocked phishing site. A domain that is not the bank, with a valid
  certificate, a perfect padlock and a copied page. Every technical signal the folklore names is
  present and correct. The reader works out what the padlock actually asserted, which was true the
  whole time, and what they should have read instead, which is the domain. This sets up lesson 11 and
  is its best single example.
- **Misconceptions:** "the padlock means the site is safe"; "incognito hides me" (the Habib figures,
  quoted with their year); "incognito protects me from viruses" (the one with a safety consequence);
  "a VPN makes me anonymous"; "military-grade encryption" (a phrase security professionals treat as a
  red flag because it means nothing, per Consumer Reports); "HTTP sites are the dangerous ones" (that
  was a useful heuristic once and is now nearly useless, and saying when it stopped being true is
  better teaching than either version of the rule).
- **Practice:** take the threat model from lesson 1 and, for each worry on it, say which of the three
  tools touches it and which does not. Most worries will be touched by none of them, and that is the
  finding. Then find one product page for a VPN and mark each claim on it as measurable, unmeasurable,
  or false.
- **Sources:** Habib et al. 2018 (pages 159 to 169 and Tables 3, 5 and 6 read in full), the behaviour
  and misconception numbers; APWG phishing trends for the HTTPS share of phishing sites (**search
  summary level; SOURCES says verify this specific figure against a named quarterly report before it
  is printed**); Consumer Reports' VPN evaluation (read in full); Kang et al. 2015 for the home Wi-Fi
  belief.
- **Connects:** applies lesson 7's path. Feeds 11 (the padlocked phish) and 13 (what is kept, and by
  whom). Uses lesson 1's threat model as its practice.
- **Spaced review of:** lesson 7's parties in the path, now asked what each can see.
- **Why this one is long.** Seventy minutes is the top of this course's range and it is deliberate.
  Splitting the three tools into separate lessons would teach them as three separate pieces of magic,
  which is exactly the mistake being corrected: the misconceptions have one shape, and they dissolve
  only when the three are placed on one diagram together. If a draft runs past 90 measured minutes,
  the split to make is VPN and private browsing into a fourteenth lesson, keeping HTTPS with the
  padlock, and the course ends at fourteen rather than thirteen.
- **Neutrality note:** the VPN material is the sneering risk in this course. Standards 3.3 applies:
  report Consumer Reports' counts and the four providers that described their limits accurately, name
  the legitimate uses (an untrusted local network, hiding a destination from a provider, changing
  apparent country), and do not editorialise about an industry.

### 9. Installing software, and what you are trusting (~55 min)

- **Objectives:** explain what you are trusting when you install a program, naming each party in the
  chain; compare an app store, an operating system package manager, and a download from a website by
  what each checks; apply a check before installing something, and say what an administrator password
  actually grants.
- **Core ideas:** installing is the one routine act that hands somebody else full control of your
  machine, and almost nobody can say who. The chain: whoever wrote the code, whoever built it into the
  thing you downloaded, whoever hosts it, and whoever told you where to find it. Those are four
  different parties and they fail differently. Stores and package managers check some of that and not
  all of it; a download from a website checks none of it unless you do. Signatures and what they prove
  (this build came from the holder of that key, which is not the same as this program is safe). Then
  the two current attack shapes, both of which are name attacks rather than code attacks:
  **search-ad malvertising**, where the top result is a paid advertisement for a copy of the software
  you wanted, and **typosquatting**, where a package one letter away from the one you meant installs
  something else (SOURCES gives `pygaqme` for `pygame` as the standard illustration and records
  Sonatype's 2025 malicious-package count at search-summary level, so **the count is not printed until
  the report is opened**; the technique needs no count). Then privilege: what an administrator
  password grants, taught before the word `sudo` is used, per the SOURCES safety rule. Then updates,
  which are the practitioners' top answer and consumer advice's last: in Ion et al. (2015), 231
  experts' three most-reported practices were installing software updates, using two-factor
  authentication and using a password manager, while 294 non-experts reported antivirus, visiting only
  known websites, and changing passwords frequently. **Nothing appears on both lists.** Antivirus,
  handled per SOURCES: built-in protection on a current operating system is the sensible default, the
  marginal value of a third-party suite is small, and the interesting argument against a paid suite is
  a security argument (a privileged parser of hostile input is a large attack surface) rather than a
  money-saving one.
- **Mechanism to explain:** why installation is different from every other thing you do with a
  computer. Running a program means handing it your identity: it can read what you can read and write
  what you can write, and with an administrator prompt it can change the system itself. Nothing about
  clicking "install" communicates that, which is why the decision has to be made before the click and
  cannot be recovered afterwards.
- **Worked examples:**
  (a) *Simple:* install one thing, narrated, naming all four parties in the chain out loud, checking
  the address bar against the project's real domain, and refusing the advertisement at the top of the
  search results. The reader does this with a program they actually want.
  (b) *With a wrinkle:* the administrator prompt. Something asks for the password, and the honest
  answer is that the prompt tells you almost nothing about what will be done with it. The reader works
  out what they can check beforehand (what this program is, where it came from, whether it plausibly
  needs system-level access) and what they cannot check at all. Ending on "and you cannot verify the
  rest" is the truthful ending and the one that teaches, and it is also where the Ion et al. list
  earns its place: **since you cannot verify, the thing that helps is having fewer unpatched holes,
  not more vigilance at the prompt.**
- **Misconceptions:** "if it is in the app store it is safe"; "the first search result is the official
  site"; "a signed installer is a safe installer"; "I will run it and see" (there is no seeing);
  "antivirus will catch it" (the *buggy software* folk model from Wash, 9 of 33, which concludes that
  care makes antivirus unnecessary, and which is half right and dangerous exactly because it is half
  right); "updates are how they force new features on you" (which is a real complaint and should be
  acknowledged rather than dismissed, then answered with what a security update is).
- **Practice:** pick one program on your machine and write down all four parties in its chain, and how
  you would check each. Then turn on automatic updates wherever they are off, and write down what you
  gave up by doing so, honestly. Then look at what asks for administrator rights on your machine and
  ask, for one of them, whether it plausibly needs them.
- **Sources:** Ion, Reeder and Consolvo 2015 (**USENIX abstract page read in full; the PDF was not
  opened, so the ranking may be used and per-practice percentages may not, and the lesson says so**);
  Wash 2010 (read in full) for the antivirus folk models; SOURCES' safety guidance on `sudo` and on
  never disabling a security feature to complete an exercise; the AV-TEST and AV-Comparatives position
  and the Project Zero attack-surface argument (**search-summary level throughout, so the lesson
  reports the shape of the disagreement and prints no lab scores**).
- **Connects:** completes debt (g), which lesson 4 opened. Builds on 3 (a name is not a thing, so
  `invoice.pdf.exe` is an executable) and 8 (a valid certificate is not a vouching). Leads to 11,
  where the same four-party question is asked about a message rather than a program.
- **Spaced review of:** lesson 1's folk models, now with Wash's antivirus rows as the worked case, and
  lesson 3's extensions.
- **Neutrality note:** the antivirus question is a contested empirical question under standards 3.1
  and gets both positions at strength. The lesson must not read as "antivirus is a scam"; it reads as
  "the floor is high and free, the marginal product adds little, and there is a real security argument
  against adding a privileged parser".

### 10. Passwords, and the ladder above them (~65 min)

- **Objectives:** explain why length beats composition and why forced rotation was withdrawn as
  advice, citing the guidance by section; compare the rungs of the authentication ladder by what
  attack each one stops; apply a password manager and a second factor to your own five most important
  accounts, including their recovery paths.
- **Core ideas:** the current guidance, quoted in its own SHALL and SHOULD language from NIST SP
  800-63B-4 (final, August 2025), §3.1.1.2, with the renumbering noted because everyone quotes the old
  section: a minimum of **15 characters** for a password used as a single factor (eight where it is
  one factor of several), at least 64 permitted, **no composition rules**, **no periodic rotation**, no
  hints available to an unauthenticated claimant, no knowledge-based security questions, comparison
  against blocklists of compromised values with the reason for rejection given, and password managers
  and autofill permitted. Then the UK NCSC's argument for withdrawing expiry, which is behavioural
  rather than cryptographic: the new password resembles the old one, may be reused elsewhere, is more
  likely to be written down and forgotten, and an attacker with the old one can often work out the
  new. Then reuse as the actual risk, and Have I Been Pwned as the exercise that makes it real. Then
  **the ladder, not the binary**: nothing, SMS, app code, passkey or security key, in that order, with
  what each stops. NIST designates telephone-network out-of-band **restricted** (§3.1.3.3) and names
  device swap, SIM change and number porting as the risks; CISA names FIDO/WebAuthn and PKI as the
  only phishing-resistant approaches and places SMS, email links, app codes and push notifications
  outside that bar; the FBI's complaint centre recorded 982 SIM-swap complaints and about $26.0m in
  reported US losses in 2024, against 1,611 complaints and over $68m in 2021. And the sentence the
  ladder exists to support: **the step from nothing to SMS is larger, for most people's threat model,
  than the step from SMS to a key.** Then recovery flows as the soft underbelly, because an account is
  only as strong as the way back into it.
- **Mechanism to explain:** what an attacker actually does, which decides which defence matters. They
  do not guess your password at the login page; they take a list from somebody else's breach and try
  it everywhere, at machine speed. That is why reuse is the risk and composition is not, why a
  blocklist of known-compromised values works, and why a second factor changes the arithmetic even
  when the password is already known. The whole guidance falls out of one accurate picture of the
  attack.
- **Worked examples:**
  (a) *Simple:* one account taken up the ladder, live. Look the address up on Have I Been Pwned, find
  which breach, set a long unique password in a manager, turn on the strongest second factor the
  service offers, and then **check the recovery path**, which is where most of these exercises stop
  and should not.
  (b) *With a wrinkle:* the account whose recovery path undoes the work. A strong password, an app
  code, and a "forgot password" flow that sends a code to an email address protected by a password
  from 2014, or asks for your mother's maiden name, which NIST's §3.1.1.2 forbids verifiers to use and
  which plenty still do. The lesson's point is that the ladder has to be climbed on the recovery path
  too, and that this is the most commonly missed step in consumer security advice.
- **Misconceptions:** "complex beats long"; "changing passwords regularly is good practice" (retired,
  by NIST and NCSC, with the year); "a password manager is a single point of failure so it is worse"
  (name the concentration risk plainly, then state the real alternative, which is not memorised unique
  passwords but reuse); "the browser's built-in manager does not count" (present it as a real option,
  since the evidence says the manager people actually use beats the one they should have used);
  "two-factor means I am safe" (phishing-resistant is a specific property, and app codes do not have
  it); "SMS is useless because experts say it is broken" (the ladder answers this).
- **Practice:** five accounts, in order of what losing them would cost, from your lesson 1 threat
  model. For each: unique password in a manager, best available second factor, recovery path checked
  and recorded. Write down which of the five you could not fully protect and what the service's
  limitation was, because that list is the honest output.
- **Sources:** NIST SP 800-63B-4 §3.1.1.2, §3.1.1 and §3.1.3.3 (fetched directly and quoted verbatim),
  linked so a sceptical reader can read the SHALL statements; UK NCSC on password expiry (read in
  full); CISA and FIDO on phishing resistance (search-summary level, said so); Okta's 2025 report for
  adoption (about 70% workforce MFA as of January 2025, phishing-resistant authenticator use 14.0% of
  users, up from 8.6% a year earlier), with the year in the sentence; Have I Been Pwned as the
  exercise. **Not used:** the Google login-challenge percentages and the SIM-swap carrier study, both
  in the `unread:` line. If Stage 1 opens either, the lesson gains numbers it does not currently need.
- **Connects:** builds on 1 (the threat model orders the five accounts) and 9 (the expert practices
  list named a manager and two-factor). Leads to 11, where the attacker stops guessing and starts
  asking.
- **Spaced review of:** lesson 8's padlock, since a phished password defeats every rung below a
  passkey, which is the bridge into lesson 11.
- **Neutrality note:** the rotation question is an established position with a live minority under
  standards 3.1. Position B goes in at strength: expiry bounds the lifetime of an undetected
  compromise, and "change it on evidence of compromise" assumes a detection capability most
  organisations lack. NCSC itself calls that case oversimplified rather than refuting it, and the
  lesson says so. It also warns that many employers still enforce rotation and that "the guidance says
  otherwise" is not an answer their IT department will accept.

### 11. Recognising a con, and the ten minutes after you clicked (~55 min)

- **Objectives:** identify the three structural parts of a con in a message you have received, without
  reference to any list of current scams; explain what the evidence does and does not show about
  security awareness training; apply a recovery procedure in the right order after clicking something
  you should not have.
- **Core ideas:** the structure, which is stable, rather than the lures, which are not: **contact you
  did not initiate, pressure that makes thinking expensive, and a requested action that is hard to
  reverse.** Everything else is decoration, and the decoration is the part that changes monthly. Then
  the honest evidence, which this course has already promised in lesson 1 and now pays: Ho et al.
  (2025), eight months, ten campaigns, more than 19,500 employees, control groups, randomised
  assignment. No significant relationship between recent training completion and failing a simulation;
  embedded training produced a 2 percentage point absolute reduction; **over 56% of users clicked at
  some point**, with a median per-campaign failure rate around 10%; **lure quality dominated
  everything**, from 1 to 2% on some lures to upwards of 30% on others; and the training is largely not
  consumed, with over half of embedded sessions ending within 10 seconds and under 24% completing the
  material. Set against it, at strength: earlier lab and small-scale work consistently found training
  improves the accuracy of sorting phishing from legitimate mail, and Kweon et al. found a correlation
  between training time and fewer incidents across 7,089 Korean organisations. **Those are different
  claims and the lesson must not conflate them.** Then the conclusion that follows: since vigilance
  measures poorly and lures dominate, the defences that pay are structural (the manager, the passkey,
  multi-factor, automatic updates, an account without administrator rights) and the second half of the
  skill is **recovery**, which almost nothing teaches: change the password for that service from a
  different device, revoke active sessions, check the recovery email and phone for changes, check mail
  forwarding rules, tell whoever else is affected, and watch for the follow-up contact that pretends to
  be the clean-up.
- **Mechanism to explain:** why pressure works, in terms the learner can feel rather than be told.
  Judging a message takes attention; a con creates a situation where attention is expensive (you are
  late, it is your bank, the parcel is about to go back) and offers a cheap action instead. The median
  time to fall for a phishing email in Verizon's 2025 report was under 60 seconds (**search-summary
  level, and the report must be opened before that figure is printed**). The defence is therefore a
  rule about the *shape of the situation*, not about the content of the message: any contact that
  creates urgency and asks for an irreversible action is answered by going to the service yourself, by
  a route you already had.
- **Worked examples:**
  (a) *Simple:* a real message, dated, taken apart into the three structural parts, with the
  observation that not one of the standard tells is needed to reach the verdict. Then the same message
  with the tells removed (perfect spelling, real logo, valid certificate, padlocked domain that is not
  the bank, straight out of lesson 8) and the verdict is unchanged, because the structure did not
  change.
  (b) *With a wrinkle:* a legitimate message with the same three parts. A real bank does call, a real
  employer does send an urgent form, and a rule that flags every urgent message is a rule nobody can
  use. The reader works out the move that resolves both cases without judging the message at all:
  **do the thing, but by your own route.** That is the transferable skill and it survives whatever the
  next lure looks like.
- **Misconceptions:** "I can spot a phish" (over half of trained employees clicked at least once in
  eight months, 2025 study, and the lesson says this without a hint that clicking is stupid); "bad
  spelling is the tell"; "it came from a real address, so it is real"; "the link showed the right
  domain when I hovered"; "training fixes this" (2 percentage points); "if I clicked, it is over"
  (the recovery half of the lesson exists to answer exactly this, because fatalism is the failure mode
  SOURCES warns about).
- **Practice:** take three messages you have actually received this month, and mark each for the three
  parts, and for each say what your own route to the same thing would be. Then write your own recovery
  procedure, in order, for the account that would hurt most, and put it where you could follow it while
  frightened.
- **Sources:** Ho et al. 2025 (**abstract and pages 1 to 2 read in full; the results sections were
  not, and the lesson says so**), with Back and Guerette and the negative corporate study cited as Ho
  et al. report them, **and the 15-month corporate study's own authors not named, because that surname
  is in the `unread:` line**; Verizon's 2025 breach report for the human-element and credential
  figures (**search-summary level; open the PDF before printing any of them**); Logic and Argument
  lesson 9 linked for evaluating a source, not re-taught.
- **Connects:** builds on 8 (a padlocked phishing site) and 10 (what a stolen password costs, and why
  a passkey changes it). Closes the loop opened in lesson 1 with the honest premise.
- **Spaced review of:** lesson 1's claim about structural defences over vigilance, which this lesson
  is the evidence for, and lesson 10's ladder, revisited as "what would have happened if".
- **Safety:** no checklist of current scams. Every example dated. Nothing that implies being phished
  reflects on intelligence, which is both the SOURCES rule and the finding.

### 12. Keeping your own data alive (~50 min)

- **Objectives:** explain the property that makes a copy a backup, and identify which of your current
  copies has it; compare sync with backup by the failure each one does not survive; apply a restore,
  timed, and say what you learned from the attempt.
- **Core ideas:** one sentence carries this lesson. **A backup is a copy that a mistake on the
  original cannot reach, and the only way to know you have one is to restore from it.** Everything else
  is derived: more than one copy because copies fail, different kinds of storage because one kind fails
  in one way, somewhere else because fire and theft take a building. That derivation is taught, and the
  numeric mnemonic is not, per decision 4. Then the mechanism that surprises people: **sync is not
  backup**, because a sync client cannot tell a person saving a file from a program damaging one, so it
  faithfully uploads the damaged version, and a deletion propagates the same way. Version history is a
  real and partial defence with two documented limits (a retention window, and its behaviour when files
  are renamed rather than modified), both **gated behind primary sourcing per decision 4**. Then what
  is worth keeping, which is a shorter list than people assume and which lesson 3's file-location
  skills are needed to find.
- **Mechanism to explain:** why a restore is the only test. A backup system has many parts (a
  schedule, a selection, a destination, a format, credentials) and every part can fail silently while
  the indicator stays green. The restore is the only operation that exercises all of them at once,
  which is why "I have backups" and "I have tested a restore" are different statements and only the
  second one is about the future.
- **Worked examples:**
  (a) *Simple:* one file, restored. The reader picks a real file, deletes their working copy (safely,
  with a copy made first, which is the rehearsal this course gives every destructive step), restores it
  from wherever they believe their backup is, and times it. Most readers will discover either that they
  cannot, or that it takes far longer than they thought, and either discovery is the lesson.
  (b) *With a wrinkle:* the sync demonstration. Change a file on one device, watch the previous content
  disappear from the other, and then try to get the old content back from version history. The reader
  finds out whether their provider has it, how far back it goes, and how many clicks it took, by
  reading the provider's own documentation rather than being told a number. This turns the weakest
  sourced claim in the course into the reader's own primary research, which is the better lesson in
  any case.
- **Misconceptions:** "sync is backup"; "it is on two devices so it is safe" (both are reachable by
  the same mistake); "the important thing is how many copies" (the property, not the count); "my
  backup runs, so I have a backup" (no restore, no backup); "photos are backed up because they are in
  the phone's gallery" (which is the one point in the first half of the course where the phone case is
  addressed directly, per decision 6).
- **Practice:** list what you would actually miss, which is usually shorter than you expect. For each
  item say where the copies are and which mistakes each copy survives. Then restore one file and time
  it. Then find and read your provider's documented retention window and write down the date you
  checked it.
- **Sources:** CISA's ransomware guidance and the providers' own documented retention pages
  (**Stage 1 must fetch both before this lesson is drafted; decision 4 sets out what happens if it
  cannot**); the sync mechanism, demonstrated rather than cited; NIST's backup controls for the
  shape of the practice. **Not used:** the popular attribution for the 3-2-1 mnemonic, whose source is
  in the `unread:` line and which decision 4 drops on the merits anyway.
- **Connects:** builds on 2 and 3 (you cannot back up what you cannot locate) and 9 (a compromise is
  one of the mistakes a backup has to survive). Leads to 13, which is the same question about copies
  somebody else holds.
- **Spaced review of:** lesson 3's five causes of a missing file, four of which a backup does not help
  with, which is a useful corrective to backing up as a reflex.

### 13. What services keep about you, and how to look (~55 min)

- **Objectives:** apply a service's own data export and activity record and say what it actually
  contains; explain what deleting does and does not do, and who else holds copies; identify one
  setting worth changing and one convenience worth keeping, with the reason for each from your own
  threat model.
- **Core ideas:** the course ends where its evidence is thinnest and is honest about it. Kang's
  participants split between "once something is online it is there forever" and a vague belief that
  deletion works, and **neither group could say who held copies**. The fix is not a rule but a
  procedure: look. Every large service has an export and most have an activity record, and a learner
  who has run one knows more about their own exposure than any lesson could tell them. Then what
  deletion means in practice: removed from your view, removed from the service's active systems,
  removed from backups, and removed from the parties the service already shared it with, which are
  four different things with four different timescales. Then the jurisdiction rule, stated plainly:
  the right of access and the right to erasure are European rights, US readers have a patchwork of
  state laws, and the course says which is which every time it says what you can demand. Then the
  weighing, which is the real skill and which is why this lesson is last: convenience against
  exposure, judged against the threat model from lesson 1 and not against a slogan.
- **Mechanism to explain:** why a service holds far more than you gave it. Most of what is kept is
  observed rather than provided (what you opened, from where, on what, and when), because that is what
  makes the product work and what makes it sellable. That is the gap between what people expect in an
  export and what arrives, and it is also why "I never posted anything" is not an answer.
- **Worked examples:**
  (a) *Simple:* one export requested and read, in front of the reader, with what arrived described
  concretely: how long it took, how big it was, what format it was in, which parts were readable and
  which were not. The reader runs their own on a service they use, using lesson 2 and 3's skills to
  find and open what arrives, which is a quiet demonstration that the first half of the course is
  needed by the second.
  (b) *With a wrinkle:* an activity record that contains something the reader did not know was kept,
  and the decision that follows. Turning it off usually costs a feature. The reader makes the trade
  explicitly, writes down what they gave up, and the lesson refuses to make the choice for them, per
  standards 3.1 case 3: what a person should trade for convenience is a value question.
- **Misconceptions:** "deleting removes it"; "I have nothing to hide, so it does not matter" (answered
  with the threat model rather than with a slogan, and answered fairly: for some readers and some
  threats, the honest answer is that it does not matter much, and saying so is what makes the rest
  credible); "a paid service will not sell my data because I paid" (Kang, quoted); "private browsing
  means the service does not have it" (lesson 8, revisited); "I can ask any company to delete
  everything" (jurisdiction).
- **Practice:** request one export and read it when it arrives. Open the activity record on the
  service you use most, and find the oldest entry in it. Then change one setting and write down what
  you gave up and what you gained, by reference to your lesson 1 threat model.
- **Sources:** Kang et al. 2015 (read in full) for the copies-and-deletion finding; the services' own
  export and privacy documentation, which is primary for what a given service does and gets dated;
  the European and US legal positions, named as such. **Stage 1 gate: SOURCES records this as the
  thinnest-researched outcome in the course. Before this lesson is drafted, Stage 1 must run a real
  data export end to end and record what arrived, and should open at least one of the privacy
  dashboard papers named in SOURCES' open concerns.** If the papers cannot be obtained, the lesson
  still stands on the learner's own export and makes no prevalence claims about dashboards in general.
- **Connects:** completes the course. Uses 1 (threat model), 2 and 3 (finding and opening what
  arrives), 7 (who was in the path to begin with), 8 (what the private window did not stop) and 12
  (copies, now somebody else's).
- **Spaced review of:** the whole course, deliberately. This lesson's practice cannot be done without
  four earlier lessons, which is the strongest kind of spacing available.
- **Neutrality note:** privacy is a value question under standards 3.1. The lesson describes, gives
  the mechanisms and the rights by jurisdiction, and does not prescribe how much exposure a person
  should accept.

---

## Assessments

### Course-end test

Twenty-six items. At least fifteen must be application to material that appears in no lesson.
Distractors are drawn from the named misconceptions, not invented.

| Area | Items | Kind |
|---|---|---|
| What understanding does and does not predict; threat modelling (L1) | 2 | 1 recall of the finding, 1 application to a described person |
| Paths, absolute against relative, the tree (L2) | 3 | 1 recall, 2 application on a supplied directory listing |
| Extensions, plain against rich text, the missing file (L3) | 3 | 1 recall, 2 application including one diagnosis from symptoms |
| Working directory and navigation (L4) | 2 | both application: predict the output of a command from a stated standing point |
| Command grammar and error diagnosis (L5) | 3 | all application; one item per error category, from the message alone |
| Streams, pipes, permission (L6) | 2 | both application: predict what a pipeline produces, and diagnose a refusal to run |
| Name to page, and where a failure sits (L7) | 3 | 1 recall of the order, 2 application to described symptoms |
| What HTTPS, a VPN and a private window each hide (L8) | 3 | all application: a stated worry, which tool if any touches it |
| The chain of trust in an install (L9) | 2 | 1 recall of the four parties, 1 application |
| Password guidance and the ladder (L10) | 3 | 1 recall of the 2025 guidance with its section, 2 application including a recovery-path item |
| The structure of a con, and recovery (L11) | 3 | all application, one on a message showing every folklore tell as clean |
| What makes a copy a backup (L12) | 2 | 1 recall of the property, 1 application to a described setup |
| What is kept, deletion, jurisdiction (L13) | 2 | 1 recall of the jurisdiction split, 1 application |

**Three items must be cross-lesson**: one pairing lesson 5's error categories with lesson 7's failure
ladder (the same diagnostic habit on a different subject); one pairing lesson 8's padlock with lesson
11's structural reading of a message; and one pairing lesson 3's extensions with lesson 9's
attachment. **One item must be a "which of these is not dated, and why does that matter" item**, which
is the only way to test decision 5 rather than announce it.

### Project: the machine audit

**Deliverable.** A single plain text or Markdown file of roughly 1,500 to 2,500 words, written by the
learner, containing seven sections and the transcripts to back them. It is deliberately a plain text
file: producing it exercises lesson 3, and the learner ends the course holding a document they made
with the skills the course taught.

**Steps.**

1. **The plan.** Your threat model from lesson 1, revised now that you have finished the course, with
   at least one row you could not have written in week one.
2. **The map.** A directory you designed and built from the terminal, with the transcript. Say why it
   is shaped the way it is, in terms of lesson 2's addresses.
3. **The criterion.** `hello.py` created, run, and broken three ways, with the three error messages
   pasted and each one diagnosed as location, program name, or program, from the message alone.
4. **The pipeline.** One question about your own files that you could not have answered by clicking,
   answered, with the pipeline and the output, and one sentence on what each stage contributed.
5. **The trace.** One domain taken from name to page, with `dig` and traceroute output, and a list of
   the parties who can see that you went there, and one who cannot, with the reason.
6. **The hardening.** Five accounts, ordered by what losing them would cost. For each: what you
   changed, which rung of the ladder you reached, what the recovery path looks like now, and **what
   you could not fix and why**. Plus one install, with its four parties named.
7. **The restore.** One file restored from a backup, timed, with what went wrong or what surprised
   you. And your provider's documented retention window with the date you checked it.

**Rubric.**

| Criterion | What full marks look like |
|---|---|
| Diagnosis, not recipe | Every error and failure in the file is explained by which step failed and why, not by what fixed it |
| The transcripts are real | Output is pasted from the learner's own machine, including the parts that did not work |
| The criterion is met | All three breakages produce different messages and all three are correctly categorised from the message alone |
| The pipeline earns itself | The question genuinely could not be answered by clicking, and the file says why |
| The trace is read, not run | The `dig` and traceroute output is interpreted, and the list of parties is derived from it rather than recited |
| Structural over vigilant | The hardening section is about setup that persists, not about intentions to be careful |
| Honesty about failure | What could not be fixed is listed with the reason, and the restore section reports what actually happened rather than what should have |
| Dated | Every figure and every checked setting carries the date it was checked |

The last two rows are the course's own standards applied to the learner, which is the same move
Reading Well makes with its honesty row, and it is deliberate.

---

## Neutrality notes

This course is **not** a sensitive domain under standards 3.4, and `sensitive_domain` stays false. Four
lessons still carry a live risk and the drafter should treat each as named here.

- **Lesson 8 (VPNs)** is the sneering risk. Report Consumer Reports' counts, name the four providers
  that described their limits accurately, state the legitimate uses, and do not editorialise about an
  industry. Standards 3.3.
- **Lesson 9 (antivirus)** is a contested empirical question under 3.1 and both positions go in at
  strength, with the Project Zero attack-surface argument stated as the interesting objection rather
  than as a verdict, and no lab scores printed while the labs are unread.
- **Lesson 10 (rotation)** is an established position with a live minority. Position B is stated in
  the terms its holders would recognise: expiry bounds the lifetime of an undetected compromise, and
  the "on evidence of compromise" trigger assumes detection most organisations do not have.
- **Lesson 11 (training)** requires the course to report a measured weakness in its own genre without
  overcorrecting. Ho et al.'s two claims are kept apart, the earlier positive evidence is reported, and
  the lesson does not conclude that people cannot learn.
- **Lesson 13 (privacy)** is a value question. Describe, do not prescribe, and let "for me and my
  threats, this does not matter much" be an available answer.
- **Across the course**, no lesson implies that a person who was compromised was foolish, and no
  lesson leaves a reader with the *graffiti* model's fatalism. Every security lesson ends on something
  the reader does once.

---

## How many lessons, what is left out, and what comes next

**Thirteen lessons, roughly 730 measured minutes, is the largest Term 1 course on the Core**, against
ten for Reading Well and Logic and Argument. The reason is the scope decision made on 2026-09-18: this
course carries two half-courses, because the Python Basics debt put the whole terminal half here
rather than five terms later. Splitting it into two courses was considered and rejected: the file
system half and the security half are not independent, since lesson 9's install, lesson 12's backup
and lesson 13's export all need lesson 2's paths and lesson 3's names, and a learner who took only the
second course would be exactly the learner Kang described, holding advice with no model under it.

**Eight is the number of lessons in the terminal-and-machine half (1 to 6, plus 3 and 9 partly), and
it is not negotiable downward** without failing the criterion in decision 2.

**Deliberately left out**, each because something else owns it or because it does not survive the one
sitting rule:

- **Content creation and digital wellbeing**, which the European framework treats as core areas, and
  **career-related competencies**, which UNESCO does. Stated as a choice in lesson 1, not an accident.
- **Version control, SSH, job control, and regular expressions beyond literal text.** Carpentry's
  instructor notes record permissions, job control and SSH as the first things cut from a four-hour
  workshop; this course cuts the same things and links Missing Semester and Carpentry for them.
- **Hardware, bits, gates and what a processor does.** How Computers Work owns that at Term 6.
- **Cryptography below the level of "what does this guarantee".** Cybersecurity for Everyone owns it
  at Term 6.
- **Spreadsheets, office software, and web authoring.** Web Development owns the third at Term 6; the
  first two have no home on the map and this outline does not create one.
- **Any checklist of current scams.** Explicitly, on the evidence, in lesson 11.
- **The mobile-only learner's first half** (decision 6), which is the largest gap and is on the record
  above.

**What downstream courses will need this one to have taught**, stated so a later outline can check:

- **Using AI Effectively** (Term 1, next course, unwritten) needs lessons 2 and 3 for files and
  formats, lesson 7 for what a request to a service is, and lesson 13 for what a service keeps.
- **Python Basics** (Term 6, written) needs the seven items in decision 2, and its lesson 1 will
  contradict decision 1 until somebody updates it.
- **How Computers Work** (Term 6, unwritten) needs the file-system model from 2 and 3 and should not
  re-teach it.
- **Cybersecurity for Everyone** (Term 6, unwritten) needs lessons 8 to 11 as its floor and should
  start above them, not repeat them. It inherits the folk-model framing from lesson 1.
- **Databases and SQL, Data Analysis, Web Development** (Term 6, unwritten) all assume a terminal, a
  working directory and a path, which is lessons 4 to 6.
- **Research Skills** (Term 5, unwritten) assumes lesson 7's model of where a source lives and lesson
  8's account of what a domain does and does not certify.
- **Personal Finance Fundamentals** (Term 2, unwritten) assumes lesson 10's authentication ladder for
  anything it says about banking online.

---

## Concerns to flag

- **Lesson 8 is the length risk**, at seventy minutes with four large topics and the course's densest
  set of measured misconceptions. The planned split is written into the lesson entry so a drafter who
  runs long has a decision already made rather than an improvisation.
- **Three lessons are gated on Stage 1 returning**: lesson 12 for the two backup claims (decision 4),
  lesson 13 for a real data export and ideally one dashboard paper, and lesson 11 for the Verizon
  figures. **None of the three is blocked from being drafted**, because each has a fallback written
  into its entry, but a drafter who ignores the gate will print a claim this research cannot support.
- **The `unread:` line will bite the drafter at least four times** (lessons 7, 10, 11 and 12), and
  three of those are surnames a drafter would reach for without thinking. The standing-hazards section
  above exists to be re-read before each of those four lessons, not once at the start.
- **Every lesson needs the reader at a computer**, which is a harder demand than any other Term 1
  course makes and is the main reason a learner will stop. The mitigation is that the first thing in
  every lesson is something small they can do in two minutes, and that lessons 2 and 3 need nothing
  installed at all.
- **Instructions for three operating systems go stale**, faster than the numbers do. The Git Bash and
  WSL install steps in lesson 4 and the show-extensions steps in lesson 3 are the most perishable
  prose in the institute and should be dated and checked on the same cycle as the figures.
- **The hardest thing to do well is lesson 1.** It has to state, in a first lesson, that the evidence
  for the course's own premise is partial, and then leave the reader wanting the other twelve. Written
  badly it reads as either an apology or a boast. The shape to aim for is the sentence in decision 3,
  written early and plainly, followed immediately by something concrete the reader does.
- **The second-hardest is lesson 11's tone.** It must report that over half of trained employees
  clicked, tell the reader that this includes them, and not leave them fatalistic. The recovery half
  of the lesson is what makes that possible, and it must not be squeezed if the lesson runs long.
