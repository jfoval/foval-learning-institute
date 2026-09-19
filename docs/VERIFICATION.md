# What is checked, what is not, and who checks it

Written 2026-09-18, after John asked four times in one session whether the system was sound and got
four answers that were each followed by another finding. The findings were real. The problem was
that nobody had written down **what had been checked**, so every answer meant "sound as far as I
happened to look", and each new look found a new dimension nobody had looked at before.

This file is the map of the territory. When you want to know whether something is verified, read
this rather than asking. When you add a check, add its row. When you find a defect in a dimension
marked "checked", the check is wrong and fixing the check comes before fixing the defect.

**The rule that follows from it:** a claim that the repo is in good shape means *every row below is
green and the human rows have been done recently*. Nothing else counts as an answer.

---

## Checked by a script, every run

These fail or warn automatically. Nobody has to remember them.

| What | Enforced by | Notes |
|---|---|---|
| Course record fields, `status` vs its TAXONOMY row, `sensitive_domain`, `standpoint` | `npm run validate` | Fails the build |
| TAXONOMY ↔ core-path agreement, every course placed in a term | `npm run validate` | No elective tier by design |
| Em dashes, spaced en dashes, CR line endings, ESV quotations | `npm run validate` | Fails on published, warns on drafts. Both dash checks skip blockquotes and quoted strings, because rule 4 lets quoted text keep what its author wrote; only the en dash half did until 2026-09-18 |
| `:::` blocks unclosed, nested, or with text on the fence | `npm run validate` | |
| A `:::` block header wrapped onto a second line, so the reader is shown a fragment and the rest is hidden behind the reveal button | `npm run validate` | Fails on published, warns on drafts. The header is captured with `(.*)`, which cannot match a newline. The defect does not exist in the source, only in the rendered page, so nothing else could catch it. Added 2026-09-19, after nine of them across four drafts of one course |
| A course whose next action is blocked on something no script can see | `npm run state` | A `blocked:` line in `course.yaml` takes the course out of the one-next-action choice and prints the reason instead. Deleting the line picks it back up. Added 2026-09-19, after a session spent its first move on a lesson gated on a data export only John can run |
| Renders refused because the day's quota is spent, rather than because the money is gone | `npm run state` | Reads the last 429 out of the attempt manifests and takes Google's own `retryDelay`. While the window is open it skips the render branch and moves the one next action on to content. A 429 is refused before any audio is generated, so it costs nothing and is not an incident. Added 2026-09-19 |
| SVG: dark/light hardcoded fills, labels under 15px, labels past the viewBox, blank lines inside `<svg>`, two tokens that are the same colour in one theme | `npm run validate` | Five distinct routes have got past earlier versions; `/review-lesson` lists them |
| Self-checks that print their own answer in prose | `npm run validate` | |
| Frontmatter that does not parse as YAML, **with the line number and the offending text** | `npm run validate` | Fails on published, warns on drafts. The message names the line YAML choked on *and* the line before it, because a malformed value is only noticed at the next mapping entry, so the one to edit is the earlier one. It also lists the three known causes: a colon followed by a space in an unquoted value, a value beginning with a quotation mark, a value beginning with a backtick. The location was added 2026-09-18 after this defect was hit five times in three lessons in one session and every hunt began by re-parsing the file by hand |
| Citations to works SOURCES.md marks unread | `npm run validate` | |
| A `[n]` marker with no Sources entry; a majority of sources never cited | `npm run validate` | Added 2026-09-18 |
| Bodies with no links | `npm run validate` | |
| A render that was started and never came back, which is money that may have been spent with nothing kept | `node scripts/podcast.mjs render <lesson>` | Warns loudly before spending again, and does not block. `attempt-N.request.json` is written just before curl runs and deleted the instant it returns, so a leftover one is the signature of a killed call. Google bills on audio it generated whether or not we received it, so this is otherwise invisible: no mp3, no manifest entry, nothing in budget.json. Added 2026-09-18, after exactly that happened |
| A quiz whose correct option is the sole longest in more than half its items; a quiz using two or fewer of the four answer positions; a quiz whose answer positions mostly repeat the one before | `npm run validate` | Warns. This is `/draft-lesson` defect 5, measured rather than eyeballed, because eyeballing is what missed it: Bible Basics lesson 8 shipped with the key longest in five of six items, so "pick the longest" scored 83% against a 70% pass mark. Ties do not count, since the failure is the key being the *sole* longest often enough to be a strategy. Added 2026-09-18; it found five live lessons on its first run, **and all five are fixed as of 2026-09-19, so the check is quiet across the repo.** The fix the warning asks for is the right one: lengthen the distractors, never trim the key, because the key is usually longest for the honest reason that it is the option carrying the reasoning |
| Two lessons next to each other in a course whose quizzes use the same sequence of answer positions | `npm run validate` | Warns. Every lesson's quiz can pass all three checks in the row above and the course can still hand a learner one key: Habits and Self-Discipline shipped seven lessons all running 0,2,1,3,0,2, so a reader who noticed the pattern in lesson 1 had the key to forty-two items. Found by a Stage 4 reviewer on 2026-09-19, which is a check's job. It compares neighbours rather than the whole course, because a learner takes lessons in order and two matching sequences five lessons apart carry nothing. Quiet across the repo on its first run, having been fixed by hand first |
| Every lesson in a course carrying the same cycle of answer positions, rotated by lesson number | `npm run validate` | Warns. The neighbour check above is the obvious failure and not the one that keeps happening. Stage 4 on Memory found all six lessons running 0,2,1,3 started one position later each time, so no two neighbours matched and the neighbour check passed on the whole course, while a reader who worked the cycle out once held the key to thirty items. It is what `/draft-lesson` defect 16's instruction to rotate by the lesson number produces when it is followed mechanically. The check builds every rotation of the first lesson's repeating unit and warns if every lesson is one of them. On its first run, 2026-09-19, it found the same defect in Focus and Deep Work and in Habits and Self-Discipline, both published; both are fixed and the check is quiet across the repo |
| A podcast script sent to `--go` whose `checked:` frontmatter is a placeholder rather than a fact-check | `node scripts/podcast.mjs render <lesson> --go` | Refuses, and the dry run lists it as a blocker. The gate used to test only that a `checked:` key existed, so `checked: pending` satisfied it and seven unchecked scripts would have been rendered with money. Found by two independent fact-checking subagents on the same day, 2026-09-19, both of which reported it rather than editing. It now also rejects `todo`, `tbd`, `none`, `n/a`, `false`, a bare dash and an empty value, and requires at least about forty characters, because a real entry records the date, the verdict and what was fixed. Audited across the repo when it landed: 109 scripts pass and the only seven that failed were the placeholders it was written for |
| Lessons whose prose has gone stiff, measured as contractions per 1,000 body words | `npm run validate` | Warns **once for the whole run**, not per lesson, and names the three stiffest. Four consecutive Digital Literacy lessons were sent back by Stage 4 for this and three reviews closed it by hand before it was worth a check. The floor is 2.5 per 1,000 against a house rate of 5 to 8, deliberately generous: it catches prose that has gone stiff rather than setting a target. Possessives are excluded. It reports once because twenty separate warnings is a wall a session learns to scroll past, which this file already records as worse than no warning. Added 2026-09-18. It found twenty lessons below the floor, **and on 2026-09-19 the last of them was cleared, so the floor is quiet too.** The mechanical part of that clearance is worth knowing: contracting or expanding every nth occurrence lands a file in the band in one pass, and the one thing it gets wrong is "of it is" and "with it is", where the "it" belongs to the preposition rather than to the verb. Read the diff. **A ceiling was added on 2026-09-18 and warns on drafts above 14 per 1,000.** The floor had only ever caught prose that reads like a manual, and a drafter told to fix it overshot: three consecutive Using AI Effectively drafts came in at 12.2, 15.4 and 17.4 while a fourth written the same afternoon sat at 0.0. Two separate reviews found the oscillation by hand before anybody wrote the check, which is root CLAUDE.md rule 10 arriving late. The ceiling is 14 rather than 8 because the band is where this repo sits rather than a rule; it caught four drafts on its first run and no published lesson. |
| A sentence of twelve words or more repeated across two lessons of one course | `npm run validate` | Warns. Two deliberate repetitions are exempt by name in `REPETITION_EXEMPT`, with the reason: Clear Writing 6 quoting lesson 5's paragraph on purpose, and Bible Basics repeating its standpoint disclosure. Added 2026-09-18, because a warning a session learns to ignore is worse than no warning. **Tested on a drafting course on 2026-09-18** by planting one 15-word sentence in Digital Literacy lessons 1 and 2 and reading the output: the check runs on every course on disk regardless of `status`, so it covers the drafting window, which is when the defect actually happens. `docs/QUEUE.md` had claimed the opposite for nine days |
| A published course owing more episodes than the debt ledger allows, and the ledger's ratchet | `npm run validate` | Tested, because it broke twice on the day it was written |
| An `audio:` stamp with no fact-checked script beside it | `npm run validate` | |
| Whether a course is *written*: a script counts only with a `checked:` entry | `npm run validate`, `npm run state` | Both counted script files until 2026-09-18, so a course with an unchecked draft beside every lesson reported as written and `npm run state` moved the session on to the next course |
| The next action names a stage the course is actually ready for | `npm run state` | Stage 1 then Stage 2 then drafting. It tracked `OUTLINE.md` and never looked at it, so on 2026-09-19 it told a session to draft lesson 1 of a course that had only been researched |
| John is told when his Gemini cap is spent | `npm run state` | The banner sat after an early `return` from 2026-09-09 to 2026-09-19 and never ran, through the month an accident ate $23.39 of a $30 cap. Tested |
| What it costs to clear the whole audio debt | `npm run state` | One rate measured from the render manifests, used by the per-course column, the outstanding total and the budget block. It was hardcoded at $0.22 in three places against a measured $0.24 |
| Script coverage per published course | `npm run validate` | One summary line, never a failure |
| The lints themselves still fire | `npm test` | One fixture per check |
| The spend guards in `podcast.mjs` | `npm test` | Added 2026-09-18 |
| The audio gate, against generated fixture audio | `npm test` | Added 2026-09-18; needs ffmpeg, skips without it |
| Build runs and the site compiles | CI, `.github/workflows/validate.yml` | |

## Checked by a script, run deliberately

Network, slow, or heuristic. A gate would get them weakened or routed around.

| What | Command | Last run |
|---|---|---|
| State of every course, and the next action for each | `npm run state` | Every session start |
| Every external link in every lesson | `npm run links` | 2026-09-18: 482 links, 7 dead |
| Quizzes winnable by shape alone; explanations contradicting their own key | `npm run quiz` | Exits non-zero only on a quiz a strategy actually beats. **None in the repo is, as of 2026-09-19.** The 18 flagged on 2026-09-18 were all advisory and are now reported under "Advice only", with the number that matters: how many wide items have the key as the longest option |
| A quotation in a lesson that its own `SOURCES.md` does not contain | `npm run quotes [course]` | **A reviewer's tool, deliberately not a build check.** Memory lesson 5 printed a passage in quotation marks, attributed to the authors and carrying a source marker, that nobody wrote: it was the research file's own unquoted commentary turned into a quotation. Every other quotation in that lesson matched character for character, which is why reading for sense would not catch it. It is the one class of error the institute's method exists to make impossible, and it is mechanical to find. It is not a build gate because a repo-wide run reports 148 misses in 458 quotations and nearly all are legitimate: Bible Basics quotes scripture, Logic and Argument quotes the arguments it analyses, Reading Well quotes the passages it teaches on, and none of those belong in `SOURCES.md`. A check that cried wolf on a third of the repo would be ignored within a week. Run it on any course whose sources are papers. On its first run, 2026-09-19, it found one live defect in Focus and Deep Work lesson 6, a quoted sentence about what training does produce that the research file does not hold; that lesson now paraphrases the abstract sentence it did read and says so |
| Measured reading time vs the `minutes:` field | `npm run minutes` | 2026-09-18: 62 lessons, 0 materially out |
| What a learner already knows at a given point on the Core, and which earlier courses are unwritten | `npm run taught <course>` | Run at Stage 2 and Stage 3 |
| The one next action, and the audio budget | `npm run state` | Session start; `/keep-going` loops on it |
| The site in both themes at both widths | `npm run shots` | 2026-09-18: ran, 14 of 15 targets; `chart` finds nothing and is a selector fault, not a site one |

## Checked once, by hand, and recorded

Not automated, because automating them is worth less than the check cost. Re-run when the thing
they cover changes.

- **Internal links in the built site** — 441 checked, 0 dead, 2026-09-18.
- **Every reference in the instruction surface** (paths, `npm run` targets, slash commands, `§`
  cross-references) — clean 2026-09-18. The one-off script is not kept: it produced 29 hits and all
  29 were false positives, and a check nobody trusts is worse than none.
- **Assessments present on every published course** — 7 of 7, two each, 2026-09-18.
- **The render path end to end** — dry run, 2026-09-18.

## Not checked by anything, and cannot be

This is the real boundary. Everything here depends on a person or a reviewing agent, and no green
build says anything about it.

- **Whether a lesson teaches well.** Depth, worked examples, whether a reader can do something
  afterwards they could not before. `/review-lesson` pass 1.
- **Whether a lesson is true.** `/review-lesson` pass 2 and `/fact-check`. The linter checks that a
  citation resolves, never that it supports the claim.
- **Whether a lesson is fair.** `/neutrality-audit` and `/review-lesson` pass 3.
- **Whether a course covers enough, or too much.** Nothing checks scope, and it has gone wrong in
  both directions. Python Basics froze at the six lesson files its live URLs already used and came
  out assuming a terminal it never teaches; Bible Basics runs 137 measured minutes a lesson, which
  is not a sitting, with the lowest think-block density in the institute. Every later review looked
  at the lessons rather than at the shape. **When an outline inherits its shape, make it justify
  the shape, not just the contents.** `npm run taught` now covers the half of this that is
  mechanical: what came before, and what has not been written.
- **Whether an episode sounds right.** The gate measures level, fade, both voices, length and
  pitch. It cannot hear a bad reading. John listens.
- **Whether the site is usable on a phone.** `npm run shots` renders it; somebody has to look.
- **Whether a learner gets anything out of it.** The feedback form. **John is not the reviewer**,
  decided 2026-09-18: he wants to be able to take these courses rather than proof them, and the
  pipeline has to be good enough that he can. Two things carry the weight that his reading would
  have: the **cold-start pass** in `/review-lesson`, which reads a lesson as someone who has done
  exactly the courses `npm run taught` lists and nothing else, and the feedback loop once learners
  arrive. The cold-start pass exists because the one defect John caught by eye, Python assuming a
  terminal, was a cold-start defect that every other pass read straight past.

## Known gaps in this file's own coverage

Honest list, so the next person does not have to rediscover them.

- ~~`podcast.mjs`'s audio gate is untested.~~ **Closed 2026-09-18.** ffmpeg generates the fixture
  audio, so the excuse did not survive contact. Three tests: silence is called broken, a truncated
  file is called truncated rather than silence (saying silence sends the reader after the wrong
  cause), and audio that is nothing like two hosts talking still passes, because wrong pitch and one
  voice and a flat level are not Google returning broken audio and used to fail it on four counts.
- **The `chart` screenshot target finds nothing.** `npm run shots` produces 14 of its 15 targets;
  `svgBox(p, 0)` on Bible Basics lesson 2 matches no element while `svgBox(p, 1)` on the same page
  works. It is a marketing screenshot for the homepage, not learner-facing content, and the lesson
  itself renders both charts correctly in a browser. Worth ten minutes when somebody is in there.
- **No check reads a quiz answer for correctness**, only its shape. `check-quiz-letters.cjs`
  catches an explanation that contradicts its own key, which is not the same thing.
