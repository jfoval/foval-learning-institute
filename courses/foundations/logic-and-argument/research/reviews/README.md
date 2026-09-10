# Reviews: Logic and Argument

Append-only log of review findings and resolutions. Newest at the bottom.

## How this directory is laid out

One file per lesson, named for the lesson file it reviews: `research/reviews/<lesson-id>.md`.
Read the one file for the lesson you are working on. Do not read the whole directory; the point of
the split is that a session pays for one lesson's history rather than the course's.

- `<lesson-id>.md` — every Stage 4 round, finding and resolution for that lesson, oldest at the top.
- `course-wide.md` — findings that belong to no single lesson (course-wide sweeps, assessments,
  standing decisions for this course). Present only where the course has any.
- A lesson reviewed together with another carries a pointer to the file holding the full entry.

Append to the lesson's own file. `/review-lesson` writes here; `templates/REVIEWS.md` is the shape
of a single entry. These files were one `research/REVIEWS.md` per course until 2026-09-09; the
split lost nothing and the git history of the old file still has the combined form.
