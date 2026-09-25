# Reviews: First Aid and CPR, course-wide

Findings that belong to no single lesson. Lesson reviews are one file each in this directory.

## 2026-09-24 — from lesson 5's Stage 4

- **Quiz keys drift across lessons, not only within one.** Lesson 5's first four keys matched lesson
  2's and were a one-step rotation of lesson 4's (defect 16 spread over three lessons, which the
  neighbour check in `npm run validate` does not see). Fixers: compare the new sequence against
  every earlier lesson of the course, not the previous one only.
- **Law entries in SOURCES recorded the subsections that suited the lesson.** D36 carried (a)'s
  first half, (b)(1) and (c)(1)(B); the drafter then wrote "nothing in it requires training" and a
  gloss on "perceived" into the gap, and two reviewers caught it only by reading the statute. Any
  later lesson that quotes a statute (lesson 1's state laws, lesson 7's overdose laws) should have
  its fixer read the whole section once, not the recorded excerpts.
- **Lesson length.** Lessons 2, 3 and 5 each measure 100 to 140 minutes against the outline's
  roughly 65. Each is honest and not padded, and each review recorded a natural seam. A course-wide
  decision on whether to split any of them belongs to John, via `docs/QUEUE.md`, not to a fixer.

## 2026-09-24 — from lesson 4's Stage 4

Restored by the orchestrator: lesson 4's fixer wrote these first and lesson 5's fixer, running at
the same time, recreated the file over them. The fix brief now says to append, never create.

- **The AHA's "almost immediate" hedge has dropped in two lessons** (3 and 4, each restored at
  review). Any lesson quoting the AHA on compression-only survival should be checked for it.
- **S6 may not be described as "read in full"**; its read level is as SOURCES records it, and
  lesson 4's Sources entry was corrected to match.
- **Drowning's sequence splits by rescuer, not by country** (ILCOR 2025: compressions first for lay
  people, breaths first for trained duty-to-respond rescuers). Lesson 6 keeps that framing.
- **The course needs `assessments/final-test.md`** before `npm run build:drafts` will pass with six
  or more lessons, and before publishing. The outline's Assessments section has the blueprint.

## 2026-09-25 — from lesson 6's Stage 4

- **RCUK's "little or no harm" runs one way only**: an adult mistakenly given the paediatric
  algorithm. Lesson 6's exercise answer had it reversed, and a reviewer's suggested quiz key
  repeated the reversal. Any later lesson or script that paraphrases the age boundary should quote
  the sentence.
- **ILCOR's 2025 lay compression-first drowning statement covers adults only** (narrowed from the
  2023 "adults and children"). The lesson 4 entry above ("compressions first for lay people") is
  true for adults; for a drowned child in the UK the call handler coaches five breaths first.
- **"Both sides admit" recurred twice in one lesson** (minimal evidence on the child sequence; no
  human comparison on drowning order). Each time only the AHA said it. Reviewers: check every
  symmetric admission against each body's own text.

## 2026-09-25 — from lesson 7's Stage 4

- **Slow or snoring breathing is never normal breathing in this course.** Lesson 7's draft taught a
  slow, softly snoring man as breathing normally; RCUK Adult BLS, the AHA's "snoring respirations"
  and the British Red Cross all treat it as a warning sign, and lesson 2 already did. The error came
  from OUTLINE lesson 7's worked example (a), "breathing normally and snoring softly". Lesson 14
  (seizure recovery, low blood sugar), any podcast script and the final test should describe normal
  breathing as quiet and regular at an ordinary pace, and never as slow or snoring.
- **The AHA/Red Cross "leave as found" row is for a responsive injured person.** Table 14 has no
  row for an injured person who won't respond (SOURCES, "Gate closures, lesson 7"). For that person
  cite the ERC/RCUK exclusion and the ERC's "kept in supine position". Lesson 11 should start there.
- **The AHA says lay rescuers and the public can give naloxone** (Part 10 Top 10); its COR 1 is
  the narrower trained-rescuer line. RCUK is the body with the training condition.
- **RCUK's first aid page prints no recovery-position method;** the steps are the ERC's.
- **Quiz keys are running out of room.** Against lessons 1 to 6 and the lesson 8 draft, only 22 of
  4,096 six-item sequences have at most two positional matches and no two consecutive matches with
  any of them. Later fixers should search by script rather than by eye.
- **G16 was not worked for lesson 7** (Commons recovery-position images); the lesson describes the
  position in words and a table.

## 2026-09-25 — from lesson 8's Stage 4

- **A choking person who stops responding gets CPR with no breathing check.** Both guidelines go
  straight from "unresponsive" to CPR (the AHA: "regardless of whether or not the patient has a
  pulse"). Lesson 8's draft routed them through lesson 2's two-part test. Podcast scripts and the
  final test should never put a breathing check between the collapse and CPR in a choking case.
- **Quiz keys: 19 sequences left.** Against lessons 1 to 8, count by script before choosing
  (at most two positional matches, none consecutive, no constant-offset rotation); lesson 8 took
  3,1,2,0,2,3.
- **`npm run quotes` passes a whole-sentence quotation when SOURCES holds a fragment of it** (lesson
  8 P2: two full AHA recommendations passed on fragments). Worth a QUEUE note for the tool.
- **G16 was not worked for lesson 8** (three adult choking images named in OUTLINE); no UK source
  on self-rescue or a silent 999 call was found, a research gap for a later pass.
