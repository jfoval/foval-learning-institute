# Changelog

What has shipped, newest first. Courses published, platform changes, and decisions that changed how
the institute works. Items move here out of `BACKLOG.md` when they are done.

This file starts on 2026-09-06. Anything earlier is in the git history and in the sections of
`BACKLOG.md` marked done.

## 2026-09-06

**Curriculum map**

- Added 12 courses. Four were requested by name: Graphic Design Fundamentals (M. Wesley),
  Computer Science Foundations and Technology Leadership: CTO and CIO (John), and a widened
  Statistics for Citizens covering the normal distribution. Eight more filled breadth gaps:
  Forecasting, Why Nations Diverged, How Things Work, Drawing and Visual Thinking, Practical Civics,
  Project Management, Process Improvement, How Markets Work, How to Learn a Language.
- Practical Civics: Being Useful in Public Life joined the Foval Core in term 6. The Core is
  52 courses; the map is 174.
- Added the Capstone row, which had been on the Core with no row on the map.

**Placement is now enforced**

- Every course row in `curriculum/TAXONOMY.md` carries a **Path** cell: a term (`T1` to `T8`) or
  `elective`. `scripts/core-path.mjs` checks that the map and `curriculum/core-path.yaml` agree in
  both directions and fails the build on a blank or invalid cell, so a course cannot reach the map
  without a placement decision. It runs inside `npm run validate` and `npm run build`.
- The numbered Core list in TAXONOMY.md is generated from `core-path.yaml`
  (`npm run path -- --write`). Maintained by hand it had drifted: two courses numbered 18, term 5
  out by one, and two philosophy courses collapsed into one line.
- "Placing a course on the Core" in TAXONOMY.md documents how to choose a term. `/new-course` makes
  it the first step and CLAUDE.md carries it as rule 4b.

**Fixed on the live site**

- Four entries in `core-path.yaml` had unquoted titles containing commas, which YAML read as extra
  keys. The Path page had been showing "Early Modern World", "The Age of Revolutions", "The Modern
  World" and "Meaning" with their titles cut off at the comma. The checker now rejects unexpected
  keys so it cannot recur.

**Docs**

- `docs/CONTENT_PIPELINE.md` said nothing publishes without a human sign-off, which contradicts
  CLAUDE.md rule 5. Corrected.
- Backlog section 13 records how to use Alex Hormozi's material in the business courses: what to
  take from his teaching craft, what he is as a source under standards 2.2 and 2.5, and what to
  cross-check every claim against.
