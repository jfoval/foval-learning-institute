# Review: 09 Reasoning in the news

## 2026-09-07 — Stage 4, recorded retroactively 2026-09-18

**This file was missing until 2026-09-18.** The review happened; the per-lesson record was never
written, and the findings sat in the commit message for `0258956` and in `course-wide.md` instead.
`npm run state` surfaced the gap by counting review files. Nothing below is reconstructed from
memory: it is the commit's own account, filed where `courses/CLAUDE.md` says it belongs.

**What happened.** This lesson was reviewed twice on 2026-09-06, once on `main` and once on the
branch `claude/logic-argument-course-3mbwv1`, and the two diverged. For lessons 2 to 8 main's
versions won, because main's session had working network access and verified against primary
sources while the branch's did not (the branch's own `HANDOFF.md` records "this container's egress
proxy denies general CONNECT" and carries 31 items owed to a session with network access).

**Lesson 9 is the one exception, and the branch's version was taken.** The comparison:

| | main | branch (taken) |
|---|---|---|
| Words | 7,909 | 12,252 |
| Body links | none | thirteen |
| Undersized SVG labels | eight | none |
| Answer printed in prose | yes | no |
| Source entries recording what was read and not read | — | seventeen |

**Its two load-bearing figures were verified here against the primary sources**, since the branch
could not: the IARC press release (Group 1, Group 2A, 50 g for 18%, Straif's "remains small"), and
Cancer Research UK's 61, 56 and 66 per 1,000, and 8,800 against 64,500.

**It surfaced a linter defect, which was fixed in the same commit.** The unread-works list was
flat, so it fired on any mention of a work, but a work can be partly read: Weston's chapter IV was
read from the 5th-edition PDF and recorded in SOURCES.md with its quotable lines, and lesson 9
cites nothing else from him. An entry may now name the lessons it does not apply to,
`Weston (except 09)`, so lesson 9 passes while lesson 10's 21 citations across unread chapters
still failed. **The exemption sits in SOURCES.md beside the entry recording which chapter was read,
so the two cannot drift.**

Course warnings dropped from 19 to 12 on this commit. `npm run validate` exited 0.

**Note for the record.** This lesson is in a sensitive domain (standards 3.4) and its neutrality
handling is what the IARC and Cancer Research UK verification above was serving.
