# Working in `scripts/`

Node ESM, no framework, run with plain `node`. These are the checks and the tools; there is no
compile step anywhere in this repo.

| Script | npm | What it does |
|---|---|---|
| `core-path.mjs` | `path` | Keeps `TAXONOMY.md` and `core-path.yaml` agreeing; generates the Core list |
| `build.mjs` | `build`, `validate`, `build:drafts` | Compiles `courses/` to `site/data/courses.js`, and lints everything |
| `reading-time.mjs` | `minutes` | Measures every lesson's real `minutes:`; `--write` fixes them |
| `podcast.mjs` | — | `/make-podcast`'s engine: plan, script, render, voice-check, upload, stamp |
| `check-quiz-letters.cjs` | `quiz` | Finds explanations that contradict their own `answer` |
| `check-quiz-shape.cjs` | `quiz` | Finds quizzes a reader could pass without reading the lesson |
| `quiz-permute.cjs` | — | Reorders one item's options, fixing `answer` and the letters in `explain` |
| `screenshots.mjs` | `shots` | Renders the site in both themes at both widths |
| `feedback.mjs` | `feedback` | Reads the learner feedback table out of D1; `feedback:deploy` ships the Worker |
| `social-card.mjs` | `card` | Renders `site/assets/media/social-card.png` |
| `net-quotes.mjs` | `net` | Fetches NET Bible verses for quotation (standards 4.7) |
| `text-width.mjs` | — | Arial advance widths for the SVG overflow check; imported by `build.mjs` |
| `mailstub.mjs` | — | Local stand-in for the accounts Worker's email sender, for `workers/api/test.mjs` |
| `podcast-compare.mjs` | — | Historical: the TTS engine bake-off that settled on Gemini via fal. Not run |
| `tests/` | `test` | `node --test`: fixtures that must fail each lint, and a renderer snapshot |

`npm run validate` is `core-path.mjs` then `build.mjs --check`. Run it before every commit.
`npm run build` is the same two without `--check`, and it writes `site/data/courses.js`.

`npm run quiz` runs both quiz checks over every lesson and assessment. It is **not** part of
`validate`, deliberately: both are heuristics that need a human to read each hit, and a heuristic
wired into a gate either gets weakened until it passes or gets routed around. Run it when you touch
a quiz. Either script also takes explicit paths, which is how to use it at Stage 4 on one lesson.

`quiz-permute.cjs <file> <item> <order>` does the reordering, because doing it by hand means
re-lettering every "Option C" in the explanation and that is how a lesson ends up telling a correct
learner they were wrong. It handles single-line options and folded block scalars, and it prints any
letter it could not confidently remap. **Always read the explanation against its new options
afterwards**: three separate bugs in this tool each produced plausible, wrong text, and only
reading caught them.

## What `npm run validate` enforces

**From `core-path.mjs`, the contract between `curriculum/TAXONOMY.md` and `curriculum/core-path.yaml`.**
These two files record the same decision and neither is allowed to drift:

1. Every course row in TAXONOMY.md has a valid `Path` cell (`T1`, `T2`, ... ). A blank cell fails.
   **There is no elective tier**, because the Foval Core is the whole curriculum in order rather
   than a subset of it, so adding a course to the map means deciding its term in the same edit.
2. Every row marked `Tn` appears in term n of `core-path.yaml`.
3. Every `core-path.yaml` entry has a row in TAXONOMY.md marked with its term.
4. No duplicate course titles inside a school.
5. The generated numbered term list in TAXONOMY.md matches `core-path.yaml`. **That section is
   generated**: `npm run path -- --write`, never edited by hand.

**From `build.mjs`, the course and lesson checks.** Course records carry every required field,
including `sensitive_domain`, with `standpoint: christian` required under `christian-studies` and
refused elsewhere, and no `estimated_hours` (the site sums the measured minutes); the `id` matches
the folder and the `school` matches its parent; `course.yaml`'s `status` matches the Status cell of
its TAXONOMY.md row, and the row exists; a published course of six or more lessons has a final
test; a published course owes an `audio:` stamp on every lesson, beyond the debt recorded in
`curriculum/audio-debt.yaml`, and that debt may not rise against the committed version of the file
(see its header); and every `audio:` stamp has a `podcast/<id>.script.md` beside it with a
`checked:` entry.

**And the lesson lint**, which runs over assessments and over drafts too, because a draft is where
a defect is cheap to fix. Findings fail the build on a published course and warn with "[draft: fix
before publishing]" on a draft: em dashes and spaced en dashes; CR line endings; ESV quotations;
frontmatter and quiz items that did not parse as text; SVG fills hardcoded dark; SVG labels under
font-size 15, with inheritance resolved, and the effective phone size of the smallest label; SVG
labels running past their own viewBox, with rotation projected; blank lines inside an `<svg>`;
`:::` blocks unclosed, nested, or with text on the fence line; bodies with no links; argument
displays whose conclusion folds into the last premise; self-checks that print their own answer;
and citations to works the course's SOURCES.md marks unread.

**`npm test` covers the lints.** `scripts/tests/build.test.mjs` builds a throwaway course tree and
runs the build over one bad lesson per check, asserting each fails and names its defect. Add a case
whenever you add a check; a check that stops firing is exactly the bug a green build hides.

## The rule this directory exists to serve

**A rule that a script can check should be a check, not a paragraph.** Two rules in the root
`CLAUDE.md` were shouting paragraphs because they had each been broken once, and shouting does not
prevent a repeat. If you find yourself writing emphasis into a doc to stop something happening
again, write the check instead and cut the prose to one line naming it.

Two lints exist because a validator bug was hiding a real defect, and both are worth remembering
when you write a new one: the SVG checks once matched only the `<text>` tag, so a chart could put
every `font-size` on a `<g>` wrapper and ship 24 illegible labels clean; and the answers-in-prose
check looked only eight lines ahead, so it fired on six lessons doing it right and missed two doing
it wrong. **A check that is easy to route around is worse than no check**, because a green build
gets trusted.

A third case, 2026-09-10: `check-quiz-letters.cjs` had thrown `ENOTDIR` since `courses/CLAUDE.md`
landed, because it walked `courses/*/*` assuming every entry was a directory. Nobody noticed,
because nothing runs it. Fixed, and it cried wolf on twenty items when it finally ran, which is the
same as silence; its heuristics were rewritten until a clean run means something. **A check nobody
runs is not a check**, which is why both quiz scripts now have an `npm` name.

## Conventions

- No dependencies beyond `js-yaml` and `marked`, and `playwright-core` for screenshots. Adding one
  is a decision, not a convenience.
- Errors fail the build (exit 1) and warnings do not. Put a finding in the right bucket: a warning
  nobody can act on today trains everyone to ignore the output.
- Every message says the file, what is wrong, and what to do about it. Several name the rule they
  come from, which is the point of writing them as checks.
- Secrets live in `.env.local`, which is git-ignored. `podcast.mjs` reads `FAL_KEY` from it.
- `podcast.mjs`'s guards are deliberate: dry-run by default, no render without a `checked:`
  fact-check entry in the script frontmatter, a $2 cost cap without `--force`, a pitch-band voice
  check after every render, and an upload that verifies the public URL answers before anything is
  stamped into a lesson. A stamped URL that 404s is worse than no audio.
