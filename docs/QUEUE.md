# Queue

**Say "keep going" and a session works this on its own.** `npm run state` computes the one next
action; `.claude/commands/keep-going.md` is the whole loop and `/keep-going` runs it. This file
holds only what a script cannot know: what is in flight, what is blocked, and what is waiting on
John. **No counts live here, and no closed items.**

**What goes where, because this file grew from 847 words to 4,109 in ten days by ignoring it.**
What happened and why belongs in `docs/CHANGELOG.md`. What is settled and must not be re-opened is
in `docs/DECISIONS.md`. What is checked and what is not is in `docs/VERIFICATION.md`. Specs for
work not started are in `docs/PLATFORM_ROADMAP.md`. **Craft belongs with the stage that uses it**:
script and audio craft in `docs/PODCAST_PIPELINE.md`, lesson-drafting craft in the defect list in
`.claude/commands/draft-lesson.md`. A closed defect moves to the changelog in the commit that
closes it; it does not stay here with a note about what it taught.

**The test, before adding anything to this file:** does it make the next session's job smaller or
bigger? Code and tests absorb knowledge and make it smaller. Prose accumulates and makes it bigger,
and it never feels that way while you are writing it.

## Where things stand

Rewrite these five lines each session. Nothing else goes in this block.

- **Lessons 7 and 8 are both through Stage 4 and applied.** Lesson 9, "Installing software, and
  what you are trusting", is next; `npm run state` names it. **Read lesson 8's review file before
  drafting 9**, in particular its cold-start finding: six terms this course had never defined
  (encryption, HTTPS, cookie, certificate, padlock, and "IP address") were being used as though it
  had. Lesson 9 is about signatures, stores and package managers and will want several more. Check
  `npm run taught` and lessons 1 to 8 before assuming a word is available.

- **Where the audio stands, 2026-09-18. Reading Well is FINISHED.** All ten episodes rendered,
  uploaded and stamped in one session, one call each, every one passing the gate on its first
  attempt. Seven courses are now finished and **Bible Basics is the only one owing anything**:
  twelve episodes, and `npm run state` names the next lesson. When that entry leaves
  `curriculum/audio-debt.yaml` the file is empty and every live course is finished.

  **The render order below and `npm run state` disagreed, and the disagreement is now resolved in
  the script's favour.** This file said legacy courses first, then the Core in term order, which
  put Bible Basics ahead of Reading Well. `npm run state` and `docs/PODCAST_PIPELINE.md` section 3
  both say plain Core term order, which puts Reading Well first. Three documents against one, and
  `.claude/commands/keep-going.md` says the command wins when they differ, so Reading Well went
  first. **Nothing turned on it**: the month's headroom covers both courses, so both get finished
  either way, and the hand-written order is gone rather than left to be re-litigated.

  **Bible Basics lesson 1 is the one whose render was killed in flight**, on 2026-09-18, and it is
  worth knowing that nothing was paid for twice. `podcast.mjs` reports zero attempts on that
  script, so no billed attempt was ever recorded and no audio was kept. The misreading behind it:
  John said to wrap up before starting a fresh session and the session read that as "stop
  everything". **Wrap up means the four things at the foot of `.claude/commands/keep-going.md`:
  the queue true, the tree clean, everything pushed, a short report.**

  **Bible Basics scripts are the long ones** (1,259 to 1,539 words against the measured band of
  1,000 to 1,200), and lesson 1 sits at exactly 1,417, which is the guard's ceiling to the word.
  Expect its twelve renders to take noticeably longer than Reading Well's ten did; those ran 271
  to 484 seconds each and billed $0.18 to $0.24, averaging about $0.21.

- **Digital Literacy is written as far as it can be, and now is.** All twelve drafted lessons have
  a fact-checked script; `npm run state` shows 12 of 12. Nothing on this course is outstanding
  except lesson 13, which is blocked below.

  **What the twelve checks taught, because it is the same defect three ways.** Two came back FAIL
  and the rest PASS WITH NITS, and almost none of it was an invented fact. Lesson 1's script had
  offered Kang's single-box drawing as the result arguing against the course's own premise, when
  the lesson presents it as the encouraging half and puts the weight on the null result that
  technical background had no relationship with protective action. **A compression that keeps every
  figure can still invert the argument.** Lesson 6's script spoke one error message for both shells
  and then claimed they differed in word order, and after the repair it made the same unhearable
  claim one clause later; it took three rounds. **An episode is heard, not read, so a difference
  that lives in punctuation or a capital letter does not exist**, and that is worth adding to the
  fact-check prompt for any lesson that prints a terminal message. And four scripts running, the
  nits were dropped hedges: "will usually have changed" stated flat, "almost every" split across
  two sentences so three items became universals, "by default" removed from a claim the lesson's
  own callout contradicts. **What a compression removes first is a qualifier**, which the pipeline
  doc already says and which held on every lesson here.

  Every script in this course was also written long and cut against the free dry run before the
  check rather than after, per section 4a. Five of the six drafted today opened above the
  1,417-word wall.

- **BLOCKED ON JOHN, and it is now the only unblocked-work gap in the whole institute.** With the
  scripts done, lesson 13 is the single thing between Digital Literacy and publication, and no
  other course has content work outstanding. A session with no episodes left to render has nothing
  to write until this arrives.
  Lesson 13, the last one, has a Stage 1 gate the outline states as a **must**: "Stage 1 must run a
  real data export end to end and record what arrived". Its first worked example is that export,
  described concretely, how long it took, how big it was, what format it was in, which parts were
  readable. **A session cannot do this.** It needs a real account at a real service, John's
  credentials, and a wait of hours or days for the archive to be built.

  **What John does, and it is about ten minutes of his time plus a wait.** Go to one service he
  actually uses, Google Takeout being the easiest, request an export of one or two products rather
  than everything, and when the mail arrives, write down five things: how long it took, how large it
  was, what format it came in, what was inside that he expected, and what was inside that he did not.
  That last one is the lesson. Then hand the note to a session.

  **The paper half of that gate is done**, on 2026-09-18: Farke et al., USENIX Security 2021, on
  Google's My Activity, is now in `research/SOURCES.md` with a finding that changes how the lesson
  must be written rather than just what it cites. Dashboards make people *less* concerned after
  looking, and only 25% change anything.

  Everything else on the course is ready. Lessons 1 to 12 are drafted, reviewed and applied.

- **A Stage 1 gap, found by lesson 9's review and not filled.** The course teaches a three-route
  comparison for installing software (app store, package manager, browser download) and
  `research/SOURCES.md` **has no app-store entry at all**. Lesson 9's whole app-store column, and its
  "if it is in the app store it is safe" misconception, currently rest on general knowledge, against
  `courses/CLAUDE.md` rule 1. The lesson is written so that nothing false is claimed, and the gap is
  real. **Stage 1 on app-store review policies and code signing** would close it, and it would also
  serve lesson 12 and the project.

- **The outline disagrees with itself about lesson 11.** The lesson 9 entry promises that lesson 11
  asks the same four-party question about a message that lesson 9 asks about a program. The lesson 11
  entry has no four-party frame in it at all; it is contact, pressure, irreversible action, plus the
  training evidence, plus recovery. Lesson 11 as drafted honours the promise in one Connections
  sentence without building on it, which is the cheap reconciliation, but the two entries still
  disagree and somebody should pick one.

- **The same two defects have now recurred one lesson after being closed.** Lesson 8's review closed
  a cold-start finding (terms used that the course had never defined) and a contractions finding.
  **Both came back in lesson 9**, which makes it a pattern rather than an incident: a drafter working
  from an outline writes in the outline's register and assumes the outline's vocabulary, and neither
  the outline nor the drafter can see which words the course has actually taught. `npm run taught`
  reports objectives, not vocabulary. **If it happens a third time, write the check**: grep a draft's
  technical terms against lessons 1 to N-1 before it goes to review. Root `CLAUDE.md` rule 10.

- **Two things for John to decide, neither urgent, both written down rather than acted on.**
  **(a) The outline's minute estimates are in the wrong units and two lessons running have had to
  reason past them.** It plans each lesson at about half what `npm run minutes` measures (mean ratio
  2.05 across lessons 2 to 7), and it sets a "split past 90 measured minutes" trigger for lesson 8
  in that same wrong scale. Lesson 8 measures 145 and was **not** split, for the outline's own
  pedagogical reason, which holds: the three tools only stop looking like three pieces of magic when
  they are on one diagram. But 145 is now the longest lesson in the course, past lesson 5 at 135, and
  if John wants a fourteenth lesson that is the one to split. Restating the trigger in measured
  minutes would stop the next drafter making the same call.
  **(b) `Pearman (except 08)` in this course's SOURCES.md `unread:` line.** One author of the
  private-browsing paper, which was read in full and is lesson 8's principal source, shares a surname
  with a password-manager paper that was not opened and that lesson 10 wants. The exemption uses the
  build's existing `(except NN)` mechanism, which keys to a **lesson number rather than to a work**,
  so if lesson 8 ever cited the unread paper the check would pass silently. First case in the repo
  where that gap is real rather than theoretical.

- **Current course:** **Digital Literacy.** Stages 1 and 2 are done and drafting is under way.
  `npm run state` names the next lesson. Read the outline's **"Six decisions this outline settles"**
  before drafting anything: it settles the shell, lesson 1's honesty about the course's own premise,
  what the backup lesson may claim, dating every figure, and that the course teaches the desktop
  model. **The outline's per-lesson minute estimates run low by a factor of two**; take
  `npm run minutes` and ignore the heading.
- **Every published course is written.** Nothing on any live course is outstanding except
  episodes. Reading Well was the last, on 2026-09-19.
- **Before drafting anything:** `npm run taught <course>`. It prints every objective a learner has
  already met earlier on the Core, and names the earlier courses that do not exist yet so nothing
  is assumed from them. Stage 2 and Stage 3 both call for it.
- **Blocked on:** money, for audio only. `npm run state` prints the cap, what is owed, and what
  clearing it costs. When it says the cap is spent, **tell John in a line and carry on with
  content**: he raises it when he can and asked to be told, not asked. Writing is free and is never
  blocked by this.
- **The shape of the work** (`docs/DECISIONS.md` section 2). **Published:** every lesson through
  Stage 4, live on the site. **Written:** every lesson also has a fact-checked script, which is
  free. **Finished:** every lesson also has an episode, which costs money. A course goes all the
  way to *written* before the next starts. **Never call a course finished while it owes episodes**,
  and never use the word loosely in a report to John: on 2026-09-19 a session wrote "one course
  finished" about a course owing ten episodes, and he had to catch it.

## The queue, top to bottom

**Nothing on a course already through Stage 4 is to be re-opened** unless the feedback loop or a
check brings it back.

**Render order: `npm run state`, and nothing here.** It names the course and the first lesson
actually missing an episode, in Core term order, which is also what `docs/PODCAST_PIPELINE.md`
section 3 says. The hand-written order that used to sit here is gone; see the audio bullet above
for what it said, why it disagreed with the script, and the one line John can say to put it back.

**The script length ceiling lives in `docs/PODCAST_PIPELINE.md` section 4a**, which is the
authority. It was duplicated here until 2026-09-19 and the two copies had drifted to different
numbers, which is item 1 below.

1. **Two docs disagree about how long to write a script, and somebody has to pick.**
   `docs/PODCAST_PIPELINE.md` section 4a says write to about **1,200** words; this file said
   **1,300** until the duplicate was removed on 2026-09-19. The hard ceiling of 1,417 is not in
   dispute and is enforced in code. What is in dispute is the target, and it matters: every script
   written on 2026-09-19 landed between 1,396 and 1,415, right against the wall, which is exactly
   what section 4a warns costs two fact-checks instead of one. Section 4a also notes the wall is
   about 150 words tighter than the evidence requires, since the real rate is nearer 167 words a
   minute than the 150 the guard assumes. **Do not change the guard on that note.** Pick a target,
   put it in section 4a only, and delete the other.

2. **The only human check in the pipeline, and it has never run.** Both items under "Standing
   items" below have been open since 2026-09-05. The drafter and the reviewer are the same model,
   so until John reads a lesson as a learner nothing in this institute has been read by a person.
   This is the highest-value unstarted item in the file and no session can do it for him.

3. **Four things Digital Literacy's outline hands to this file rather than settling itself.**
   **(a) Python Basics lesson 1 will disagree with Digital Literacy about the shell.** Digital
   Literacy teaches POSIX and has Windows learners install Git Bash in lesson 4; Python Basics
   currently sends them to PowerShell. Digital Literacy is five terms earlier on the Core, so
   Python Basics is the one that moves. **Do not do it until Digital Literacy's terminal lessons
   exist**, because until then Python Basics' PowerShell instructions are the only ones a Windows
   learner has.
   **(b) Three Stage 1 gates block specific claims**, each with a written fallback in the outline
   so nothing is stopped: lesson 12 needs CISA or provider documentation for backup retention
   windows and for versioning defeating ransomware, lesson 13 needs a real data export actually run
   so the lesson says what one contains, and lesson 11 needs the Verizon figures read rather than
   taken at search-summary level. **A drafter who ignores a gate will print a claim the research
   cannot support**, which is the exact defect this repo keeps finding.
   **(c) Lesson 8 is the one length risk**, planned at 70 measured minutes. The split is decided in
   advance: past 90, the VPN and private browsing move to a fourteenth lesson and HTTPS stays with
   the padlock. Do not improvise a different split.
   **(d) A mobile-first counterpart is missing from the Core map.** Digital Literacy teaches the
   desktop model deliberately and says so, so a phone-only learner cannot do its lessons 2 to 7 or
   the terminal half of its project. That is a real gap in what the institute offers and it is
   John's call whether it becomes a course, not a drafter's. The outline did not touch the taxonomy.

4. **The repetition warning does not run on the course that needs it most.**
   `npm run validate` warns on passages repeated across a course's lessons, and that warning is the
   only automated defence against the specific failure of drafting several lessons in one context.
   It is skipped on any course whose status is not yet `published`, which is exactly the period when
   the drafting happens. Digital Literacy lessons 2 and 3 duplicated a whole argument, down to the
   same contract-and-amendment example, and a Stage 4 reviewer found it by eye. **One line of
   `scripts/build.mjs`, probably**; written here rather than fixed mid-draft, per root `CLAUDE.md`
   rule 9.

5. **The repetition warning still does not run on the course that needs it most.** See item 4.
   Renumbered when the old item 5 was closed on 2026-09-18: `npm run validate` now reports the
   line number and the offending text for a frontmatter parse failure, plus the line before it,
   which is where the mistake actually is. `docs/CHANGELOG.md` has it and `docs/VERIFICATION.md`
   carries the row.

6. **Python Basics lesson 1 will need the same Windows callout Digital Literacy lesson 5 now has.**
   Lesson 4 puts the Windows reader inside Git Bash and lesson 5 opens with `python3 --version`.
   Lesson 4's cold-start pass flagged that as a gap, on the understanding that a Windows install
   registers only `python` and `py`. **Checked, and that is out of date**: Python's own Windows
   documentation, read 2026-09-18, says a `python3` command is installed and is "intended to catch
   accidental uses of the typical POSIX command on Windows". The three things that really do produce
   a not-found on Windows are the optional `PATH` step being declined, an app execution alias
   opening the Microsoft Store, and the interactive prompt needing `winpty` under Git Bash. All
   three are now in a callout in Digital Literacy lesson 5. **Python Basics lesson 1 says none of
   it**, and it is five terms later, so it inherits the problem. Do it in the same pass as item 3(a),
   the PowerShell-to-Git-Bash change, and not before Digital Literacy's terminal lessons are live.

7. **Then the Foval Core in order, one course at a time.** After Digital Literacy: Using AI
   Effectively, then Term 2. Start each with `/new-course`. `npm run state` names the next action
   for every course, in term order, and is the authority over anything written here.

## Standing items, every week

These have no session that owns them, which is how they were being skipped.

- **John reads one lesson as a learner, on a phone.** Writing Clearly first, since nobody has read
  one yet. The only human check in the pipeline is this reading; the reviewer and the drafter are
  the same model. Say what was thin, wrong or unclear in the lesson's feedback form or in a session.
- **John exports the feedback** with `npm run feedback -- --json > feedback.json` from a logged-in
  shell and hands the file to `/triage-feedback`. The form has been live since 2026-09-05 and
  nobody has read what came in.

## Status

**`npm run state`.** It computes every count from the filesystem: courses, lessons, review files,
scripts, episodes, average body words, and the next action for each course in Core term order.

The table that used to sit here is gone. It was hand-maintained, it drifted between sessions, and
reconciling it against the repo was the first thing every session did. **A fact a script can derive
is no longer written down in this repo.** If something above disagrees with `npm run state`, the
script is right.
