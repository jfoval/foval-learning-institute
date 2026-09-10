# Reviews: Logic and Argument — 04-syllogisms

Append-only. Newest at the bottom.

## Lesson 4, "All, no, some". Stage 4 round 1, 2026-09-06. NOT YET APPLIED

First review of this lesson. One reviewer, all five passes in a fresh context. **Verdict: the
prose, the quiz explanations and the interleaved practice are the strongest in the course; three
things block publish.** Recording in full so this does not repeat lesson 2's fate.

### Blocking

1. **No diagram, in a lesson about diagrams.** The reader is asked to hold three overlapping
   circles, seven regions, two shaded areas, and an X straddling a boundary line, in prose only.
   Go deeper then sends them to Knachel for "drawn Venn diagrams, which this lesson could only
   describe in words", so the lesson knows it failed 4.5. Three inline SVGs are specified in the
   review: the four categorical forms as four small panels; the dogs/cats/mammals three-circle
   diagram with the counterexample region called out; and the two applicant diagrams side by side
   showing the X forced into a half versus straddling the line. Constraints from earlier reviews in
   this course apply: font-size 15 or larger on every label, and never distinguish two things with
   `--line-strong` and `--navy`, which resolve to the same colour in both themes.
2. **No links at all in 6,985 words, and the body promises one that does not exist.** Line 266 says
   "the link is in Go deeper"; Go deeper prints `forallx.openlogicproject.org` as dead text. Six
   free sources are listed in the review with their verified URLs.
3. **L2-B1 repeating.** Hurley chs. 4 to 5, Copi chs. 5 to 6 and Govier are cited for content
   SOURCES.md records as never read, including a Go deeper paragraph describing the contents of an
   unopened book. Knachel covers all of it, free and already read. Fix the same way lesson 2 was
   fixed this session.

### Facts wrong

- **"Lagerlund, 2022" is an invented year.** The SEP entry *Medieval Theories of the Syllogism* was
  first published 2004 and last revised 26 January 2026. The 2022 looks copied from the Smith
  citation. Drop the year in text, put "rev. 2026" in the source entry.
- **"errors fell from 75% to 39%" misdescribes Cheng et al. 1986.** Those are two of four separate
  groups in Experiment 1 (rules and examples 39 ± 12; control 75 ± 12), measured once. Nothing
  fell. Rewrite as a between-groups comparison.
- **A truncated Groarke quotation changes what informal logic claims to be about**, cutting the
  definition at "public discussion and debate" and dropping the clause that says the field is not
  confined to it. SOURCES.md carries the same truncation and should be fixed too.
- **Trudy Govier is not among the movement's originators in the cited source.** Groarke names
  Johnson and Blair at Windsor and Kahane 1971. Move Govier to the following sentence.
- Smaller: "abstract" where the paper says "arbitrary"; wide confidence intervals attached to the
  wrong experiment; "the strategies that helped most" upgrading Abrami's "associated with larger
  effects" into causation; "Fall 2025" reasserted for *forall x: Calgary* after lesson 3's review
  had already dropped it as unconfirmable.

### Neutrality

**The contested question gets one side's evidence only.** The formal-first view is given two
clauses, no advocate and no citation; the informal-logic side gets a full paragraph with named
founders, a date, a quoted self-definition and three pieces of supporting evidence. The lesson is
entitled to state its own line, and does so honestly, but 3.1 forbids resolving a contested
question by presenting only one side's materials. Also, "symbolic logic is the only precise account
of what 'follows from' means" is a caricature no logician would sign, and the camp's strongest
argument (that logic is worth knowing on its own terms, and that a card-selection puzzle is a poor
proxy for what a logic course teaches) is never stated.

One example needs swapping: practice item 5 uses cyclists and red lights, which is a live public
argument in the UK and is excluded by the course's own example rules. A same-shape replacement is
in the review.

### Voice and pedagogy

Contractions, em dashes and banned vocabulary all pass comfortably. Two hidden answers are leaked
by the prose directly above them (the trains checkpoint and the students checkpoint), which is the
fourth lesson running with this defect. No free recall before the quiz. Objective 4 (choosing
between lesson 3's conditional shapes and the Venn check) is taught in one clause and tested by no
quiz item, while Q6 is the third pass at the same "only" translation the body and a checkpoint have
already done; a ready-to-paste replacement item that tests objective 4 is in the review output.
`minutes: 40` should be 60, the fourth lesson running to understate its own length.

### What is working and must survive

The lift-conversation opening and its callback; "shade first, then place the X" with its reason;
the X-on-the-line explanation and its checkpoint, which is the clearest treatment of the hardest
idea in the topic anywhere in this course; the interleaved practice that forces a tool choice;
every `explain` field; the honest "I don't know of a decisive one"; the empty-classes callout,
correctly declassified as convention rather than controversy; and the practice answers correctly
hidden behind a checkpoint, which is the defect lesson 2 still has.

## Lesson 4, "All, no, some". Stage 4 round 1 resolutions APPLIED, work order CLOSED, 2026-09-06

Every finding in the round 1 entry above is resolved. Per finding:

**Blocking 1 (no diagram) DONE.** Three inline SVGs added, each referred to in the prose beside it:
the four categorical forms as four two-circle panels with a shading/X legend, after the four-mark
list; the dogs/cats/mammals three-circle diagram with the open region marked in oxblood and a
leader line to "open: a dog that's a mammal and not a cat", in worked example 1; and the two
applicant diagrams stacked (stacked rather than side by side so the labels stay at font-size 15 at
phone width), the X forced inside all three circles in the first and straddling the Qualified line
in the second, after worked example 2. All labels font-size 15 to 20, all colours palette tokens
with fallbacks (`--navy` strokes, `--navy-soft` shading, `--surface` to cut shading back,
`--oxblood` accents, `--text-2` labels); `--line-strong` not used anywhere. The linter's first pass
caught five caption overflows at a wide system font; captions rewrapped and both tall viewBoxes
resized, second pass clean.

**Blocking 2 (no links, one promised link dead) DONE.** Eight body links added, all verified live
this session: Aristotle's *Prior Analytics* (MIT Classics), Knachel 3.6 and chapter 3 (LibreTexts),
the IEP "Fallacies" entry, *forall x* (twice, replacing "the link is in Go deeper", which now just
links it), SEP "Informal Logic", Cheng et al. 1986 (Deep Blue handle), and in Go deeper SEP
"Aristotle's Logic" and SEP "Medieval Theories of the Syllogism".

**Blocking 3 (unread sources, L2-B1 repeating) DONE.** Zero references to Hurley, Copi, Govier or
Weston remain; the linter confirms. Hurley/Copi on the four-forms-as-marks claim replaced by
Knachel 3.6 (re-verified this session: the Venn test, "draw the premises... does this picture
entail the truth of the conclusion?", 256/15, Xs straddling boundary lines). The undistributed
middle re-sourced to the IEP "Fallacies" entry (verified: it defines the fallacy and uses the very
dogs/cats/animals argument as its example, which the lesson now points out). The Go deeper
paragraph describing Hurley's unopened contents deleted; Lagerlund's SEP entry added in its place
(verified to carry the mnemonic names). "Textbooks like Hurley's give categorical logic two
chapters" replaced with *forall x* as the named full-course route. Two incidental "Copi" mentions
(the textbook one Michigan class used, a fact from the Cheng paper) reworded to "standard logic
textbooks of the day", because the linter matches bare names; the paper still names them for
anyone who follows the link.

**Facts, all DONE.** "Lagerlund, 2022" dropped in text; the source entry now reads "first published
2004; rev. 26 January 2026" (both dates re-verified against the entry). "Errors fell from 75% to
39%" rewritten as the between-groups comparison it is (39 ± 12% of the rules-and-examples group vs
75 ± 12% of the control, measured once), in body and source note, with the wide-CI caution moved
onto the lab experiment where the authors put it and "one study with wide confidence intervals"
corrected to "one classroom study". The Groarke definition restored in full through "'real-life'
contexts" (re-verified against SEP), in the lesson and in SOURCES.md line 53, which now warns
against re-truncating it. Govier removed from the originators sentence (Groarke names Johnson,
Blair and Kahane); since the linter also matches her bare name, the follow-on clause is "a family
of textbooks has carried the programme on since" rather than naming her, which is the one place
this pass trades a specific for the lint. "Abstract problems" corrected to the paper's "arbitrary
problems". "The strategies that helped most" downgraded to Abrami's own "associated with the
larger effects". "Fall 2025" removed from the *forall x* citation.

**Neutrality DONE.** The formal-first paragraph now carries the camp's strongest case: precision
and generality, trained rigour, logic as worth knowing on its own terms the way mathematics is,
and the argument that a card puzzle is a poor proxy for what a logic course teaches ("nobody tests
a mathematics degree with one brainteaser"). "The only precise account" caricature removed. The
informal side keeps its named founders and quoted definition, and its founding complaint is now
Johnson's own quoted words from the SEP entry rather than an unsourced transfer claim. Practice
item 5's cyclists-and-red-lights example replaced with hotel guests, conference delegates and
newspaper orders, same X-on-the-line shape, same believable-conclusion moral; answer rewritten to
match.

**Voice and pedagogy DONE.** The two leaked checkpoints replaced with transfer cases the prose
above does not answer: the "some students passed" checkpoint is now committee minutes offered as
proof a vote wasn't unanimous, and the "all the trains were late" checkpoint is now "not all the
invoices went out late", which makes the reader do the two-step translation (not all = some not;
contradictory = all were late) rather than reread the practical rule. Free recall block added
after the practice answers, before the exercise, in lesson 3's pattern. Quiz Q6 (the third pass at
the "only" translation) replaced with a two-argument tool-choice item testing objective 4: a
modus tollens conditional and a forced-X syllogism, keyed D, with the tool-mixup, shape-misnaming
and X-on-the-line errors as distractors; the "only" translation stays taught and checkpointed in
the body. Answer key now 3,2,1,0,2,3. `minutes: 40` set to 60.

**Deliberately not changed:** the citation style (author-in-parenthesis plus [n]) is left as
drafted, since no lesson 4 reviewer raised it; the "qualified applicants" premise is still drawn as
shading the whole Qualified circle outside Degrees, matching the lesson's own stated translation.

**Split seam:** the reviewers raised no split candidate for this lesson and none is flagged; the
review's verdict was that the prose, quiz explanations and interleaved practice must survive, and
they do, untouched except where a finding required an edit.

`npm run validate` after all edits: exit 0, and lesson 4 now produces zero warnings (it previously
carried the unread-source and no-links warnings). Em dashes in the lesson: zero.
