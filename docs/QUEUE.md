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

Render order, when there is money: **Logic and Argument**, then Personal Finance, Algebra
Essentials, Python Basics, Bible Basics, then Reading Well. Logic 10 is the first episode to render
when the cap resets. `npm run state` has the counts and the costs.

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

5. **The build tells you the frontmatter does not parse and not where.** Every lesson drafted on
   2026-09-18 tripped this at least once, and the cause each time was a colon followed by a space
   inside an unquoted quiz `explain`, or a value beginning with a backtick. `js-yaml` already
   returns the line and column in its error; the build swallows them and prints a guess at the cause
   instead. Passing the line number through would turn a two-minute hunt into a two-second fix.

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
