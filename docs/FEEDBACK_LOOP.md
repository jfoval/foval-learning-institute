# The Feedback Loop

Every lesson ends with a direct ask: how clear was it, what did you struggle with, what would make it better. This document is how those answers become better lessons. The goal is a university that gets easier to learn from every month, because the people learning from it are telling us exactly where it's hard.

## What we collect

Per lesson, from the form at the bottom of the page:

| Field | What |
|---|---|
| `course`, `lesson` | which lesson |
| `clarity` | 1 (lost) to 4 (clear throughout) |
| `struggled` | free text: what they had to reread, which section, which idea |
| `improve` | free text: what would have helped |
| `at` | timestamp |

No name, no email, no account. "Report an error" is a separate route (a prefilled GitHub issue) for factual mistakes.

## Where it goes

**Now, live since 2026-09-05.** The form on every lesson saves to the learner's browser and POSTs the same record as JSON to a Cloudflare Worker, set as `window.FOVAL_FEEDBACK_ENDPOINT` in `site/index.html`:

    https://foval-feedback.johnfoval.workers.dev

The Worker lives in `workers/feedback/` and writes to a D1 database called `foval-feedback`. It is deliberately **write-only**: a `GET` returns 405, so a leaked URL cannot be used to read learner feedback back out. It accepts requests only from the institute's own origins plus localhost, caps the body at 20 KB and each free-text field at 4,000 characters, ignores submissions where the learner said nothing, and **stores no IP address and no user agent**. Progress is private to the learner's browser, and feedback is held to the same standard.

**Reading it:**

    npm run feedback                     new feedback, oldest first
    npm run feedback -- --all            everything, including handled
    npm run feedback -- --triage 12 15   mark those rows dealt with

**Changing the Worker:** edit `workers/feedback/src/index.js`, then `npm run feedback:deploy`. Schema changes go in `workers/feedback/schema.sql` and are applied with `wrangler d1 execute foval-feedback --remote --file=schema.sql` from that directory.

**Phase 2:** feedback lives in the platform database next to progress, and the form can attach the learner's quiz score and time-on-lesson automatically, which makes "where did people struggle" answerable with data as well as words.

## How it becomes lesson changes

Weekly, or whenever a lesson has ten or more responses:

1. **Export** the feedback for a course to a JSON or CSV file.
2. **Run `/triage-feedback <file> <course-id>`.** Claude groups it by lesson, finds the recurring struggles and suggestions, and sorts each against `docs/VALUES.md` into: unclear passage, missing content, factual error (routed to `/fact-check`), a request the values or standards say no to (declined with a reason), or a site bug (logged as an issue). This is the filter: valuable feedback makes the lesson better; unhelpful feedback is set aside, and the reason is logged so the decision can be checked.
3. **Edits are made** to the lesson, in the style guide's voice, with each edit traced to the feedback it answers. Everything is logged in the course's `research/REVIEWS.md` under "Feedback triage".
4. **Review as normal.** Substantive changes go through `/review-lesson` again. Small clarifications don't.
5. **Publish** with a line in `CHANGELOG.md`: "Lesson X clarified based on learner feedback."

## What we don't do

- We don't change what's true because it's unpopular. Feedback that a fact is uncomfortable is not feedback that it's wrong; "Report an error" handles wrong.
- We don't add fluff because someone asked for encouragement. Warmth comes from clarity.
- We don't publish individual feedback or identify anyone.
- We don't let a lesson drift from its outline's objectives. If feedback says the objectives are wrong, that's a Stage 2 decision, made deliberately.

## Reading the numbers

- A lesson averaging under 3.0 on clarity needs a rewrite pass, not a patch.
- A lesson where "struggled" comments cluster on one section has a fixable problem; fix that section first.
- A lesson where the comments are all different probably has a pacing problem: too much, too fast. Consider splitting it.
- Watch the quiz-fail rate alongside clarity. High clarity and a high fail rate means the lesson is pleasant and not teaching.
