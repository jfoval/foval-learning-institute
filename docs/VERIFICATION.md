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
| SVG: dark/light hardcoded fills, labels under 15px, labels past the viewBox, blank lines inside `<svg>`, two tokens that are the same colour in one theme | `npm run validate` | Five distinct routes have got past earlier versions; `/review-lesson` lists them |
| Self-checks that print their own answer in prose | `npm run validate` | |
| Frontmatter that does not parse as YAML, **with the line number and the offending text** | `npm run validate` | Fails on published, warns on drafts. The message names the line YAML choked on *and* the line before it, because a malformed value is only noticed at the next mapping entry, so the one to edit is the earlier one. It also lists the three known causes: a colon followed by a space in an unquoted value, a value beginning with a quotation mark, a value beginning with a backtick. The location was added 2026-09-18 after this defect was hit five times in three lessons in one session and every hunt began by re-parsing the file by hand |
| Citations to works SOURCES.md marks unread | `npm run validate` | |
| A `[n]` marker with no Sources entry; a majority of sources never cited | `npm run validate` | Added 2026-09-18 |
| Bodies with no links | `npm run validate` | |
| A render that was started and never came back, which is money that may have been spent with nothing kept | `node scripts/podcast.mjs render <lesson>` | Warns loudly before spending again, and does not block. `attempt-N.request.json` is written just before curl runs and deleted the instant it returns, so a leftover one is the signature of a killed call. Google bills on audio it generated whether or not we received it, so this is otherwise invisible: no mp3, no manifest entry, nothing in budget.json. Added 2026-09-18, after exactly that happened |
| A quiz whose correct option is the sole longest in more than half its items; a quiz using two or fewer of the four answer positions; a quiz whose answer positions mostly repeat the one before | `npm run validate` | Warns. This is `/draft-lesson` defect 5, measured rather than eyeballed, because eyeballing is what missed it: Bible Basics lesson 8 shipped with the key longest in five of six items, so "pick the longest" scored 83% against a 70% pass mark. Ties do not count, since the failure is the key being the *sole* longest often enough to be a strategy. Added 2026-09-18; it found five live lessons on its first run |
| Lessons whose prose has gone stiff, measured as contractions per 1,000 body words | `npm run validate` | Warns **once for the whole run**, not per lesson, and names the three stiffest. Four consecutive Digital Literacy lessons were sent back by Stage 4 for this and three reviews closed it by hand before it was worth a check. The floor is 2.5 per 1,000 against a house rate of 5 to 8, deliberately generous: it catches prose that has gone stiff rather than setting a target. Possessives are excluded. It reports once because twenty separate warnings is a wall a session learns to scroll past, which this file already records as worse than no warning. Added 2026-09-18; 20 lessons are below the floor and that is pre-existing debt |
| A sentence of twelve words or more repeated across two lessons of one course | `npm run validate` | Warns. Two deliberate repetitions are exempt by name in `REPETITION_EXEMPT`, with the reason: Clear Writing 6 quoting lesson 5's paragraph on purpose, and Bible Basics repeating its standpoint disclosure. Added 2026-09-18, because a warning a session learns to ignore is worse than no warning |
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
