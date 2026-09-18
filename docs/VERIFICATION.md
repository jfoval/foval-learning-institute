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
| Em dashes, spaced en dashes, CR line endings, ESV quotations | `npm run validate` | Fails on published, warns on drafts |
| `:::` blocks unclosed, nested, or with text on the fence | `npm run validate` | |
| SVG: dark/light hardcoded fills, labels under 15px, labels past the viewBox, blank lines inside `<svg>`, two tokens that are the same colour in one theme | `npm run validate` | Five distinct routes have got past earlier versions; `/review-lesson` lists them |
| Self-checks that print their own answer in prose | `npm run validate` | |
| Citations to works SOURCES.md marks unread | `npm run validate` | |
| A `[n]` marker with no Sources entry; a majority of sources never cited | `npm run validate` | Added 2026-09-18 |
| Bodies with no links | `npm run validate` | |
| A published course owing more episodes than the debt ledger allows, and the ledger's ratchet | `npm run validate` | Tested, because it broke twice on the day it was written |
| An `audio:` stamp with no fact-checked script beside it | `npm run validate` | |
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
| Quizzes winnable by shape alone; explanations contradicting their own key | `npm run quiz` | 2026-09-18: 18 flagged, undecided |
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
