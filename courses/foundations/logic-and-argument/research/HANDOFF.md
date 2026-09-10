# Logic and Argument — state of play

Written 2026-09-06 at the end of the lesson 9 fix pass, so a new session can pick the course up without
reading the whole of the review history first. Branch: `claude/logic-argument-course-3mbwv1`.

Read `docs/QUEUE.md` first, as CLAUDE.md says. Then this file. Then whichever of `OUTLINE.md`,
`SOURCES.md` and the `research/reviews/` files your task touches.

## Where the ten lessons are

| Lesson | Drafted | Stage 4 reviewed and fixed | Notes |
|---|---|---|---|
| 1. What an argument is | yes | yes | **Owes a targeted re-source pass**, below |
| 2. Valid and sound | yes | yes | split considered and refused |
| 3. Conditionals | yes | yes | confirmed seam, not yet renumbered |
| 4. All, no, some | yes | yes | split considered and refused |
| 5. Inductive strength | yes | yes | confirmed seam, not yet renumbered |
| 6. How much should the evidence move you | yes | yes | confirmed seam, not yet renumbered |
| 7. Reconstruction and charity | yes | yes | confirmed seam, not yet renumbered |
| 8. Fallacies | yes | yes | split considered and refused |
| 9. Bad reasoning in the news | yes | yes | split considered and refused |
| 10. Building an argument that holds up | yes | **no** | next in the queue |

Four confirmed seams (lessons 3, 5, 6, 7). Each carries an `<!-- SPLIT SEAM: ... -->` comment and a
`:::callout A good place to stop`. The four refused splits (2, 8, 9, and lesson 4) carry the callout
alone. **Nothing is renumbered yet**; that happens once, at publish, and the course becomes fourteen
lessons unless lesson 10 adds a fifth seam.

## What to do next, in order

1. **Lesson 10, full Stage 4 cycle.** Five reviewers in ONE message with `run_in_background: false`, per
   "How to run one" in `.claude/commands/review-lesson.md`. If you background them the orchestrator ends its
   turn and the work is lost; this has happened once. Read all five reports before changing anything:
   on every lesson so far, at least one reviewer has proposed a fix that another reviewer independently
   disproved. `npm run validate` must exit 0, and any SVG must be rendered headless at 340px in **both**
   themes before committing (see the recipe at the end of this file).
2. **Lesson 1's targeted re-source pass.** Its Sources entries 3 (Copi) and 4 (Hurley) cite books
   `SOURCES.md` records as never opened, which is the failure the whole course has been clearing since
   lesson 2. Either read them and record it, or re-source to Van Cleave, which is free, CC BY, already
   in `SOURCES.md` and already linked by lesson 1. The same pass owes fourteen SVG labels raised to
   font-size 15 and four argument-display rules brought to the 72-character house width (they sit at
   42, 64, 72 and 108).
3. **The assessments.** `assessments/` does not exist yet. `OUTLINE.md` lines 140 to 143 specify a
   20-item final test to a stated blueprint and a project rubric ("take an argument apart").
4. **Publish.** The renumbering pass for the four confirmed seams, then `status: published` in
   `course.yaml`, the row in `curriculum/TAXONOMY.md`, `npm run build`, and commit `site/data/courses.js`.
   **Note the collision:** this session's brief put `curriculum/` and `site/` on a do-not-edit list
   because another session owns them, while the publish step requires touching both. Pull and rebase
   first, regenerate from the merged tree so the other course's content is not clobbered, and say so in
   the commit. There is no owner review gate; the course goes live when the lessons have passed Stage 4
   and the voice pass.

## Two lists that outlive any one session

Both live in `research/reviews/03-conditionals.md`.

- **"Owed to a session with network access"**, now 31 items. This container's egress proxy denies
  general CONNECT, so `WebFetch` fails on almost every domain; `WebSearch` works, because it routes
  through the Anthropic API rather than the proxy, but a search engine's summary is a secondary source
  and `OUTLINE.md` line 14 sets the bar at read-it-or-omit-it, so search results go in `SOURCES.md` as
  hints and never into a lesson. Items 25 to 31 came out of lesson 9 and several are five minutes' work
  for anyone with a browser.
- **"Requests for the shared files"**, six items, for the session that owns `docs/`, `scripts/`,
  `curriculum/` and `site/`. Two of them are linter gaps in `scripts/build.mjs` that have each now cost
  a lesson.

## Three rules this course keeps relearning

1. **Never cite a source `SOURCES.md` does not record as read.** Six lessons in a row broke this, and in
   three of them the cause was our own `OUTLINE.md`, which still named the unread book in that lesson's
   source line. When you fix one, strike the outline line too, with the reason inside it.
2. **Never print a worked answer in plain body text.** Ten occurrences across nine lessons. If the
   reader is asked to work something out, the answer goes in a `:::predict` or `:::checkpoint` body,
   which the renderer hides behind a button.
3. **Never trust a figure you have not rendered.** The build linter cannot see a caption that overflows
   its viewBox, and it cannot see two theme tokens that resolve to the same colour. Both have shipped.

## The headless render recipe

Write the SVGs into an HTML wrapper that defines the light tokens on `:root` and the dark ones in a
second file, with the content in a `width: 340px` container, then:

```
/opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless --disable-gpu --no-sandbox \
  --hide-scrollbars --window-size=370,900 --screenshot=out.png file:///path/to/wrapper.html
```

Token values are at `site/assets/styles.css` lines 5 to 45. Look at both images before committing.
