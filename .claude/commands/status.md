---
description: Report the status of every course and the next action for each
---
Read `curriculum/TAXONOMY.md` and every `courses/**/course.yaml`. For each course folder, check which of `research/SOURCES.md`, `research/OUTLINE.md` and `research/reviews/` exist, count lessons in `lessons/`, and count how many lessons have a review file and how many have an `audio:` stamp. Run `npm run validate` and include its output.

Print a table: course, school, status, lessons, research done?, outline done?, last review, next action (e.g. "/research-course", "/draft-lesson 4", "/review-lesson 2", "/voice-pass 3", "/make-podcast 5", "publish"; there is no sign-off step, see root `CLAUDE.md` rule 5). Flag any course whose `status` in course.yaml disagrees with its TAXONOMY.md row. Compare the table against the `## Status` table in `docs/QUEUE.md` and rewrite that table if it has drifted. Then list the three highest-value next actions across the project.
