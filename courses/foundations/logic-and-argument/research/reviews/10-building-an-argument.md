# Review: 10 Building an argument

## 2026-09-07 — Stage 4, recorded retroactively 2026-09-18

**This file was missing until 2026-09-18.** The review happened; the per-lesson record was never
written, and the findings sat in the commit message for `e0832bb` instead. `npm run state` surfaced
the gap by counting review files. Nothing below is reconstructed from memory: it is the commit's
own account, filed where `courses/CLAUDE.md` says it belongs.

Lesson 10 was the only lesson neither Stage 4 session reached, and it held every remaining warning
on the course. All ten lessons validated clean after it.

**Source integrity: the course's largest unread-source item, closed.** The lesson is built on
Weston chapters I, VII and VIII and cited them 21 times while nobody had opened them. All three
were read in full from the 5th-edition PDF. Every claim the lesson makes about the rules checks
out, including rule 39, which it quotes ("Very seldom will you put all the objections to rest, and
anyway the world is an uncertain place"), and rules 32 and 36, which it characterises accurately.

That reading also **corrected SOURCES.md**: rule 1 is "Resolve premises and conclusion", not
"Identify premises and conclusion". The entry had the latter from the Amazon and Hackett summaries
and had flagged it unverified. No lesson had stated the title, so nothing shipped with the error.

**Media: the structure diagram was redrawn.** It was a three-column tree at font-size 8 to 12 on a
360 viewBox, with white text on a `--navy` fill; `--navy` inverts between themes, so that text was
invisible in dark. It is now five stacked stages at font-size 15, outlined rather than filled,
every stage named in its own text so nothing depends on colour, with the dashed return path the
prose refers to kept on the right. Verified in both themes at phone width.

**Quiz.** Item 4 was answerable by shape alone: its key was the longest option and the only one
carrying no absolute. Three distractors were reworded, so all four now carry no absolute and the
key is no longer longest. Item 1's key was longest by three characters and is now tied. All four
answer indices used, no adjacent repeats.

Reworking item 4's explanation reintroduced the `": "` YAML defect fixed earlier that day, and
`checkQuizTypes` caught it before commit, which is the guard working.

**`minutes:` 45 to 70.** Reading alone is about 53 at the course's own rate, and the lesson also
carries an eight-step exercise; 70 puts it in line with its neighbours rather than lowest in the
course, while being the capstone.

**Owed at the time, both since closed.** The voice pass (folded into Stage 4 on 2026-09-17,
`docs/DECISIONS.md` §13) and the assessments folder its practice section points readers at, which
now holds the final test and the project.
