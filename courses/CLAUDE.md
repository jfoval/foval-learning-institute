# Working in `courses/`

These rules load when you touch a course. The pipeline that produces one is in
`docs/CONTENT_PIPELINE.md`; what a lesson has to be is in `docs/EDITORIAL_STANDARDS.md`; how it has
to sound is in `docs/STYLE_GUIDE.md`. The stage commands in `.claude/commands/` carry the craft
knowledge for each stage, including the list of defects this drafter repeats.

## Layout

    courses/<school>/<course-id>/
      course.yaml        the course record: id, title, school, subject, level, status,
                         summary, description, outcomes, sensitive_domain (no hours field:
                         the site sums the measured minutes)
      research/
        SOURCES.md       stage 1. What was actually read, with an <!-- unread: ... --> line
                         naming what was not. The build fails on a citation to anything there.
        OUTLINE.md       stage 2. The lesson-by-lesson plan, the test blueprint, the project
        reviews/         stage 4. One file per lesson, plus course-wide.md and a README
      lessons/NN-slug.md the lessons, zero-padded
      assessments/       the course-end test and the project, once there are six or more lessons
      podcast/           stage 6. One fact-checked script per lesson, `<id>.script.md`

## Rules

1. **Never draft a lesson without the course's `research/SOURCES.md` in context.** If it does not
   exist, run Stage 1 first. Check that it covers *this lesson's* domain, not just the course's: a
   lesson drafted into a research gap fails its neutrality audit on exactly that gap.
2. **One lesson per drafting session on a prose course.** Do not batch-generate lessons. On a
   procedural course whose lessons are short and mechanical (programming, arithmetic, algebra), two
   per session is allowed.
3. **Reviews run in fresh-context subagents**, never in the same context as the draft. Stage 4 is
   tiered: one reviewer by default, five in parallel only for sensitive domains, standpoint courses,
   and lessons sent back for heavy rewriting. A pre-pipeline stub is replaced, never reviewed.
   `/review-lesson` has the whole of it.
4. **Never use an em dash in anything a learner reads**, and never a spaced en dash ` – ` as
   punctuation; the convention is " to ", a comma, or a full stop. An unspaced en dash in a range
   or a pair (Mark 16:9–20, Macnamara–Hambrick) is fine, and quoted text keeps what its author
   wrote. The build fails on both.
5. **A course is not finished until every lesson has a podcast episode.** `npm run validate`
   enforces it against `curriculum/audio-debt.yaml`. See root `CLAUDE.md` rule 6.
6. **Sensitive domains** (standards Part 3.4) get the neutrality audit before publish. No
   exceptions. School of Christian Studies courses carry `standpoint: christian` and follow
   standards 3.7: taught from within the faith, labelled as such, objections engaged at full
   strength. Neutral schools never assert or mock religious claims either way.
7. **Run `npm run validate` before committing any lesson change.** Run `npm run build` and commit
   `site/data/courses.js` when publishing.

## Lesson file format

YAML frontmatter, then a Markdown body.

    ---
    title:      the lesson title
    minutes:    measured, not guessed. `npm run minutes` reports it; --write fixes it
    objectives: a list
    audio:      the episode's public URL, stamped by /make-podcast once it is live
    video:      optional
    quiz:       3 to 6 items, each with q, options, answer, explain
    ---

Five block types render as styled elements. Each opens with `:::<kind>` and closes with a bare
`:::` on its own line.

| Block | Header line | Body |
|---|---|---|
| `:::callout` | Title | the callout text |
| `:::exercise` | Title | the task |
| `:::predict` | Question | the answer, hidden behind a button |
| `:::checkpoint` | Question | the answer, hidden behind a button |
| `:::figure` | `<url> \| <alt text>` | the caption, with credit and licence |
| `:::video` | `<youtube url> \| <title>` | why to watch it |

**Blank lines are required inside a block body.** Bodies parse with `breaks: false`, so single
newlines collapse into one run-on paragraph. `:::figure` and `:::video` are the opposite case: they
parse inline and must stay a single paragraph. Poetry needs two trailing spaces per line.

**Never put a blank line inside an `<svg>`.** Markdown ends a raw HTML block there, so the rest of
the chart never draws. The build fails on it now, but it once silently took ten labels out of one
chart and thirty-nine out of another.

A self-check must hide its answer behind `:::predict` or `:::checkpoint`. Printing it in plain body
text ("Now do it yourself. Here's mine.") fails the build on a published course.

Media rules are standards 4.5: real images with credits, YouTube only for video, charts drawn from
real data, nothing decorative and nothing AI-generated. Raw HTML is allowed but discouraged.
