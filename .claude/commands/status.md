---
description: Report the state of every course and the next action for each
---
Run `npm run state`. It computes everything from the filesystem in under a second: every course
with its term, state, lesson count, review files, scripts, episodes and average body words, the
totals, and the next action for each course in Core term order.

**Print its output and stop there.** Do not re-derive any of it by reading files, and do not
"check" it against `docs/QUEUE.md`. If the two disagree, the script is right and the queue has
drifted: fix the queue.

Then add only what a script cannot know: whether a number looks wrong for a reason worth chasing,
and which one thing John should do next given what he last said he was doing. Two sentences, not
a report.

Run `npm run validate` as well if anything is about to be committed.
