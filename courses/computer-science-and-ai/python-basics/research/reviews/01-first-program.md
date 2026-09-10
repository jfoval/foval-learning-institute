# Review history: 01 Your first program, and your first error

## 2026-09-10, Stage 4, Tier A

**Tier A**, one reviewer in a fresh context running every applicable pass. Tier A is correct here
by the rule in `.claude/commands/review-lesson.md`: Python Basics is not a sensitive domain, not a
standpoint course, and this is a first review rather than a re-review after a heavy rewrite.

**The fact-check was executed, not fetched**, per the procedural-course rule. Every code block and
both verbatim tracebacks were run on CPython 3.14.7 and compared character by character. The
non-code claims (Bornat, Patitsas, PEP 657, the 3.10 suggestions, the version dates) were checked
against their sources.

**The neutrality pass was NOT skipped.** It would have been, for a programming lesson, except that
this one carries two genuinely contested empirical claims: the "geek gene", and whether beginners
should use AI assistants. Both are type-2 questions under standard 3.1 and both were audited. The
rest of the lesson has no contested claims and was not audited for them.

### Findings

Seventeen findings. Passes that returned clean: mechanical block traps, dashes (zero of either),
banned vocabulary, quiz option shape as measured by `check-quiz-shape.cjs`, executed code output,
external link status, version facts, `minutes:`, `npm run validate`, the `unread:` line, and
padding.

| ID | Pass | Severity | Finding |
|---|---|---|---|
| L1-01 | Media | high | Internal link to a course that does not exist (`using-ai-effectively` is `planned`), and in a URL form the site does not use. The site routes `#/course/<id>`, not `/courses/<id>/`. |
| L1-02 | Fact-check | high | The AI callout announced "it comes from evidence rather than taste" and cited nothing. Its load-bearing claim was Lister 2004, which is on the `unread:` line. Meanwhile Denny et al., which is available and abstract-read, went unused. Defect 1 on top of a 2.1 violation. |
| L1-03 | Neutrality | high | The AI callout gave one position only. Citations 0 to 0; last word to the course's own line; the permissive case not stated at all, though SOURCES records that Denny et al. treat these models as **both** an opportunity and a challenge. Defect 14: every sentence true, the selection unfair. |
| L1-04 | Fact-check | med-high | "The camel has two humps" is Dehnadi **and** Bornat. The lesson called Bornat "its author" and never named Dehnadi. |
| L1-05 | Pedagogy | medium | Quiz item 2's key said a SyntaxError produces "a traceback and nothing else". Both halves wrong: a SyntaxError prints **no** `Traceback` header, and it does print an error message. The lesson's own two code blocks show the distinction and the quiz erased it. |
| L1-06 | Fact-check | medium | "The interpreter echoes the value of anything you type" is false and falsifiable in a minute: `x = 5` echoes nothing. It echoes expressions with a value. Lesson 2 is about assignment, so the reader would have hit this at once. |
| L1-07 | Voice | medium | "Python will not run `print` for you because you meant `print`" reads as a typo; both names are the same word. |
| L1-08 | Fact-check | medium | "They tested each distribution" glossed a two-stage method as one. 455 were ruled out on kurtosis before any test ran. SOURCES explicitly said to include the authors' false-positive caveat and it was dropped. Defect 1 on the lesson's strongest number. |
| L1-09 | Neutrality | medium | The heading stated the contested conclusion flatly in the author's voice. And the geek-gene position failed the ideological Turing test: it appeared only as folklore in nobody's words, with the obvious objection (final grades are not aptitude: dropout censors them, curving reshapes them, 100% caps them) never raised. |
| L1-10 | Fact-check | med-low | CS50P's week 0 is "Functions, Variables", not the same ground as this lesson. "Three times the length" had no source anywhere. |
| L1-11 | Pedagogy | med-low | One predict and one checkpoint in a 55-minute lesson, both in the first two thirds. The traceback-reading section, the most transferable thing in the lesson, was never practised. And the one `:::predict` answered a question the body had already answered forty lines above, making it a checkpoint in a predict's clothing. |
| L1-12 | Voice | med-low | Six known tics: two "Here is" openers, "the mechanism" as learner-facing pipeline vocabulary, a punchy one-line moral, and two salesy superlative promises. **And not one contraction in the entire body.** |
| L1-13 | Voice | low | "not the number of errors, it is the time between" is the banned "not X, it's Y" shape, carrying an unsourced claim about how experts differ from novices. |
| L1-14 | Links | low | Labelled "chapters 1 and 2", linked chapter 2 only. |
| L1-15 | Pedagogy | low | Objective 1 (running Python two ways) had no quiz item, while item 3 was pure recognition of a phrase from the body. The two problems solved each other. |
| L1-16 | Media | low | Suggested an SVG of one of Patitsas's histograms. |
| L1-17 | Fact-check | low | SOURCES said the absence of the newer error messages on older Pythons must be mentioned. It was not. |

### Resolutions applied

**Fixed: L1-01 through L1-15 and L1-17.**

- L1-01. Link and promise both cut. The sentence now stands alone.
- L1-02, L1-03. The callout is rewritten. It now states the split in the research, cites Denny et
  al. with a new footnote 6 marked "only the abstract has been read", gives the opportunity side
  before the concern, and labels the course's own line as a teaching judgement rather than a
  finding. The Lister claim is gone, since the paper is unread.
- L1-04. Dehnadi named, Bornat described as "one of its two authors".
- L1-05. Option A now reads "An error message and nothing else", and the explanation points out the
  missing `Traceback` header, which turns the fix into extra teaching.
- L1-06. Rewritten to "the value of any expression you type", with `x = 5` named as the case that
  shows nothing.
- L1-07, L1-12, L1-13. Rewritten. A contraction pass over the whole body took the count from **0 to
  38**.
- L1-08. Both stages of the method described, and the false-positive caveat added in the authors'
  own direction: it makes the result stronger, not weaker.
- L1-09. Heading changed to "Where the 'you either have it or you don't' story came from", which
  describes rather than concludes. A paragraph now puts the opposing case at its strongest (large
  variation in aptitude that teaching does not close) and gives the three real objections to using
  final grades as evidence, before the lesson states the narrow claim it is actually making.
- L1-10, L1-14. Corrected against the pages themselves.
- L1-11. A third block added: a `:::checkpoint` after the traceback section showing a real
  `IndexError` traceback from an idea the course has not reached, so it cannot be answered from
  memory. It asks which line to read first and whether anything printed before it.
- L1-15. Item 3 replaced with an application item: the same two lines typed at the prompt and run
  from a file, and why only one of them shows anything. Both behaviours were run and confirmed
  before the item was written.
- L1-17. One clause added: the carets arrived in 3.11, so an older Python shows the same error
  without them.

**Not fixed: L1-16**, the suggested chart, and the reason is the reviewer's own caveat. The only
honest chart here would be one of the six histograms actually shown to the 53 professors, and the
paper gives the generating parameters rather than the sample. Drawing a histogram from those
parameters would produce a plausible-looking picture of data that was never in the paper, which is
standards 4.5's "no generated imagery that merely looks like a chart". Linking or omitting is the
correct call, and the paragraph is doing its work in prose.

**Not fixed: the outline's stale time estimates**, noted by the reviewer. `research/OUTLINE.md`
sizes the lessons at 14 to 20 minutes and the measured figure for this one is 60. That belongs to
the outline rather than the lesson and is recorded in `course-wide.md`.

### After the fixes

`npm run validate` clean. `check-quiz-shape.cjs`: no quiz passable by option shape alone.
`check-quiz-letters.cjs`: no explanation contradicts its key. `npm run minutes`: 60 against a stated
55, inside its own precision. Body 2,830 words, zero em dashes, zero en dashes, three
predict/checkpoint blocks, 38 contractions.

One YAML break was introduced and caught while applying L1-15: a quiz option beginning `'ADA'`
parses as a quoted scalar and takes the rest of the line with it. Options that open with a quote
character need the whole string quoted.

**Still owed on this lesson:** the voice pass, and its podcast episode.
