# Reviews: Using AI Effectively, course-wide

*Findings that belong to no single lesson. Read this before reviewing any lesson in this course.*

## 2026-09-18 — Standing hazards a reviewer of this course has to check against

**The seven decisions in `research/OUTLINE.md` are review criteria, not suggestions.** A reviewer
who does not open them will miss the two breaches that are easiest to commit and hardest to see.
Decision 1: the course names no product and prints no interface instruction, and it *does* name a
model where a study used one, which is a different thing and is required. Decision 2: no lesson body
states a capability as a standing fact, and every capability figure carries a model name as well as
a date. Both were breached in lesson 1's first draft, in opposite directions, and one of the
breaches was a sentence claiming to honour the other.

**The `unread:` line carries an exemption keyed to a lesson number.** It reads
`Jurafsky (except 02), Martin (except 02), Russell, Norvig`, because chapter 2 of Jurafsky and
Martin was read in full and the rest of the book was not. **That mechanism keys to a lesson rather
than to a chapter**, so a lesson 2 citing chapter 7 would pass `npm run validate` and would be
wrong. A reviewer of lesson 2 has to check which chapter is being cited by eye.

**Two of the four studies this course rests on were opened on 2026-09-18 after being summarised
wrongly everywhere**, and both corrections run the same way: the summary keeps the figures that make
a clean story and drops the one that complicates it. Dell'Acqua's outside-frontier result is 19
**percentage points**, not 19%, and its 43-against-17 skill figures are not in the published text at
all. Noy and Zhang report quality in standard deviations and the circulating "18% higher quality"
figure is not in the paper. **A reviewer meeting either figure in its common form should treat it as
a defect rather than check it against the internet**, because the internet is where it came from.

**The third recurrence, and it cost a rewrite.** Dell'Acqua's study has three conditions, and the
third, GPT-4 plus a prompt engineering overview, did best inside the frontier and worst outside it,
24.5 percentage points against 13.9. No summary carries that. It is the spine of lesson 6 and it
appears in lesson 1's callout, and both places must keep it.

## 2026-09-18 — What this drafter does to this course in particular

Three defects showed up in both drafted lessons and are now items 15 to 17 on `.claude/commands/draft-lesson.md`. They are all measured by `npm run validate`, so a reviewer should not have to find them; if a draft reaches review with any of them still in it, the drafter skipped the check.

- **Contractions at 0.0 and 0.3 per 1,000 body words** against the repo's 5 to 8.
- **The quiz key as the sole longest option** in 4 of 6 and 5 of 6 items, and one lesson using only two of the four answer positions.
- **Explanations referring to options by position** while the same explanation referred to something else by position. Both lessons now name each distractor by its content instead, which is the convention for this course from here on.

One further pattern, which a check cannot catch and a reviewer must: **this drafter quotes
accurately and attributes carelessly.** Lesson 1's first draft attached the provenance of the *one*
outside-the-frontier task, built from BCG's job-interview cases, to the *eighteen* tasks inside the
frontier. Every quotation in the lesson was verbatim. The false sentence had no quotation marks in
it. **Point a review at the sentences with no quotation marks.**

## 2026-09-18 — Course-wide neutrality audit, standards Part 3

**STATUS: AUDITED AND APPLIED, same session. VERDICT: PASS. This course meets standards Part 3 and
may publish.** `sensitive_domain: true` makes this audit mandatory under `courses/CLAUDE.md` rule 6
and standards 3.5, and it is now done. Six fixes applied, all of them a clause or a sentence. Nothing
a Stage 4 review recorded as closed was reopened.

Fresh context. Read: standards Part 3 in full, `.claude/commands/neutrality-audit.md`,
`research/OUTLINE.md` with its neutrality notes and its seven decisions, all eleven lessons, both
assessments, `course.yaml`, `docs/SOURCE_NOTES.md`, and all thirteen files in this directory.

### The four perspectives checked against, and what each objected to

**Somebody enthusiastic about these systems, who thinks the course understates them.** Objected to
the balance of the course: six of eleven lessons are about limits, failure and restraint. That
objection does not survive reading lesson 1, which prints 25.1% faster, 12.2% more tasks completed,
quality up 29.9% and 33.9%, 37% faster on writing tasks, and 48% and 127% grade improvements, none of
them hedged. It also does not survive lesson 2's misconception entry on understanding, which
explicitly refuses to say the thing this reader most fears ("this course isn't going to tell you it's
merely pattern matching, because that phrase does no work"). What did survive was narrower and is
fixed below: the course criticises three named commercial products with 2024 figures and never said
that those figures date the test rather than the product.

**Somebody who thinks these systems are harmful and that the course normalises them.** The strongest
objection in the audit, and the one that produced the biggest fix. The course excluded the ethics of
training data, copyright and displaced work in one honest paragraph in lesson 1, and named nothing
else. **Energy and water, and bias in the outputs, were not named anywhere in the course**, including
in the list of what it leaves out, in a course whose lesson 6 has a recruiter summarising forty job
applications and whose lesson 11 quiz turns on a screening tool's bias claim. A well-informed critic
would insist those be at least named, and they are right. Fixed below.

**A teacher or academic worried about what these do to learning.** Lesson 9 is theirs and gives them
Bastani at full strength, including the 17% deficit, with the no-access group named as the comparison
it is measured against. What they would reject is the quiz item that marked "these systems should be
kept out of schools" as a misreading. The empirical half of that sentence is a misreading of that
study. The policy half is a value question under 3.1 case 3, and the item resolved it by editorial
preference. Fixed below.

**A vendor whose product claims the course criticises.** Two of these. LexisNexis and Thomson
Reuters are named with damaging per-tool figures in lesson 7 and their claims are quoted in lesson 11.
The treatment is fair in the one place that matters most, lesson 11's "the vendors weren't simply
lying", which puts their case at its strongest before it is tested, and the lesson 11 review already
recorded that as the ideological Turing test done properly. The gap was the date, fixed below.
Anthropic is the second, and the handling is compliant: see the clean list.

### The six fixes

**N-01 the course named no cost of these systems beyond what happens to the reader's own data.**
Lesson 1's exclusion paragraph named training data, copyright and jobs. **Closed:** it now also names
what training and running take in energy and water, and whether the answers carry the biases of the
writing they were built from, and it points at NIST's own list of twelve risks, of which Environmental
Impacts, Harmful Bias and Homogenization, and Intellectual Property are three the course does not
take. A new source 6 records the read level, and the excluded risks are now named as excluded rather
than absent. **This is the fix that answers perspective (b), and it costs the course nothing**, because
naming what you do not cover is the same discipline lesson 1 already applies to images, agents and
product recommendations.

**N-02 lesson 7 criticised three named products with no sentence saying the figures date the test.**
Decision 2's own rule is that a claim about a named thing carries its date, and the course applied it
to vendors' claims and not to its own measurement of them. The checkpoint said "your product isn't one
of them" and left the three named products as though the numbers were standing facts about them.
**Closed** with two sentences after the per-tool figures, in the body rather than behind the
checkpoint's button, because a fairness point about named companies should not be hidden.

**N-03 lesson 9's quiz item 5 resolved a value question by editorial preference.** The stem bundled an
empirical misreading with a policy conclusion ("these systems are bad for education **and should be
kept out of schools**") and asked what was wrong with "that reading", which marks the policy position
as an error. **Closed:** the stem is narrowed to the empirical claim, the explanation now says that
what a school should do is a further question about policy and supervision that neither the study nor
this course answers, and one distractor lost the word "policy" with it. The key stays at index 1 and
the keys still run ACBDBC, so L9-03's four-of-six application count is untouched.

**N-04 the same prescription, milder, in lesson 9's misconception list.** "The finding is about
design, not about whether" left a teacher with the impression that the course had ruled on schools.
**Closed** with one sentence saying it has not.

**N-05 `course.yaml`'s description could be read as a verdict on declining to use one.** "It is
against both trusting everything and refusing to look" is NIST's over-reliance and unnecessary
aversion pair compressed, and in a sentence that has just welcomed the reader who would rather not
use one, "refusing to look" reads as refusing to use. That contradicts lesson 9's careful
"Declining to use one of these systems isn't a mistake, and it isn't a virtue either", in the
course's most-read sentence about its own stance. **Closed:** the object of "look" is now how these
systems work, and a sentence says that whether to use one at all is a decision the course describes
and does not make.

**N-06 the project did not carry lesson 9's own decision 6 fix.** L9-06 closed both lesson 9 exercises
so a reader who has declined to use one can do them, and the project's section 6 still required "one
task you still use a system for". A reader who uses none could not write half of section 6. **Closed**
by carrying lesson 9's exercise 2 allowance across verbatim in substance: take a task you would use
one for if you were going to, and design that shape now.

### The two temptations, and the sentences that come closest

**Quietly for.** The closest is lesson 6's "Refuse to hand any of it over and you've written two pages
of prose yourself for the sake of eight figures." It frames a refusal as waste. It is left, and the
reason is recorded so it is not re-litigated: it is a costing of one task inside a task-sorting
lesson, and the same exercise ends "If checking costs more, that part stays with you, and saying so is
a result rather than a failure." Lesson 8's "The answer was worth asking for and it was not worth
trusting" is the other candidate and it is balanced inside its own lesson by the school business
manager, whose three clean steps hide a superseded document.

**Quietly against.** Lesson 11's "If what you're given is an adjective, you've been given marketing"
is the sharpest sentence in the course and it is about a claim rather than about a system or a
company, so it stays. The repeated "the people selling them" in lessons 2 and 6, where lessons 7 and
11 say "the vendors", foregrounds commercial motive in the author's voice. **Considered and kept**:
the underlying fact is Magesh's and is quoted accurately in lesson 7, and the phrasing is plain
English rather than a loaded adjective under 3.3. Recorded here so the next auditor does not reopen it.

**Neither temptation is being indulged structurally.** The course prints its best pro-evidence in
lesson 1 and its worst finding about itself in the same lesson, and lesson 9 opens by naming its own
temptation out loud.

### Checked and found clean, recorded so it is not re-checked

**Classification under 3.1.** Every claim touching a contested or value question was sorted and the
outline's four calls all hold. Lesson 1 (does it help) is case 2 and is handled at full strength in
both directions, with the reconciliation labelled as the course's own. Lesson 5 (does it reason) is
case 3, declined explicitly, with the symmetric sentence "If somebody tells you these systems can't
reason, or that they obviously do, ask what would count as evidence either way." Lesson 7 (is it
fixable) is case 2, two named accounts, neither settled, "nobody knows". Lesson 9 (what to trade) is
case 3, described and not prescribed. **No misclassification found in either direction**: nothing
contested is stated as settled, and nothing settled is both-sided. The mechanism, tokenization, the
context window, sampling and every study figure are correctly treated as established within their
stated scope, and every one of them carries that scope.

**The best single instance of 3.1 in the course**, worth copying elsewhere: lesson 11's quiz item 1
offers "a system built from past hiring decisions will reproduce whatever was in those decisions" and
its explanation calls it "a reasonable expectation stated as an established fact". That is a course
declining to assert a contested empirical claim it would have been popular to assert.

**The Anthropic vendor declaration.** Declared once, plainly, in lesson 4's callout, with the read
date, the reason the material is used anyway, and the sentence "quoted here rather than endorsed".
Lesson 5 cross-refers to that declaration rather than making a second one, which is right. This is
`docs/SOURCE_NOTES.md`'s Hormozi position exactly: state it once, do not insinuate. **No insinuation
found anywhere in the course.** L4-09 already recorded this as the part to copy and this audit agrees.

**Decision 3, the vocabulary.** Checked every occurrence of both words in all eleven lessons and both
assessments. The course names "hallucination" once in its own voice, in lesson 7's first line, with
NIST's anthropomorphising objection beside it. Every other occurrence is inside quotation marks, is
attributed in the lead-in ("In NIST's word"), reports a vendor's own claim, or sits in a Go deeper or
Sources entry naming a NIST section. **Decision 3 holds.**

**Decision 6.** Checked in all eleven lessons, both assessments and `course.yaml`. Two breaches found
and both fixed above (N-05, N-06). Everywhere else it is honoured, and lesson 9 states it positively
as the outline requires, with L9-07's fix intact: the course points at the word "unnecessarily",
names grounds it has no standing to weigh, and ends "This lesson supplies one consideration. It
doesn't supply the licence." Lesson 1's quiz item 6 handles the fourteen-year-old's homework the same
way, which is the right answer given in the right place.

**Language under 3.3.** No loaded adjectives in the author's voice. No sneering: the four instances of
"obviously" are all inside distractors or inside the symmetric decline sentence. No presentism, and
nothing historical to be presentist about. Numbers over adjectives throughout, which is the course's
own convention turned on itself. Opinions attributed: "NIST's profile", "Kalai and colleagues",
"Anthropic's own comment", "the providers had claimed", and the course's own readings labelled at the
point of use in lessons 1, 2, 3, 5, 6, 8, 9 and 11.

**The assessments.** The course-end test carries no value question and no capability claim about a
named model. Its L9 pair item is the cleanest thing in it: "They measure different things, output now
against capability later, so both can be true at once." The project's rubric row "Something was given
up" is about the stopped task and works for a reader who uses none.

### Left for the queue, not fixed here

**1. The institute does not say anywhere that its lessons are written by an AI.** Nothing in `site/`,
`README.md` or `docs/VALUES.md` names Claude or Anthropic. That is a repo-wide question rather than a
defect in this course, and **this is the course where it bites hardest**: it cites a vendor's
documentation as a primary source, it teaches readers to ask who is making a claim, and it was written
by that vendor's model. `docs/SOURCE_NOTES.md`'s own rule is that a declared interest is stated once
rather than insinuated. **This changes what the institute claims about itself, so it is John's call
and not a drafter's.** In `docs/QUEUE.md`.

**2. Five lessons sit above the contraction band.** Measured by the validator's own method after this
audit's fixes: lesson 1 at 13.5, lesson 3 at 12.2, lesson 4 at 11.2, lesson 5 at 11.3, lesson 6 at
9.6, against the repo's 5 to 8. All are under the validator's ceiling of 14 so `npm run validate`
exits 0, and lesson 1 is 0.5 from tripping it. This is the oscillation L3-15 and L5-15 both named and
neither closed, and lesson 6 has drifted up from the 7.6 L6-17 recorded. It is one `/voice-pass`
sitting, it is not a neutrality finding, and rule 9 says an audit records rather than rebuilds. In
`docs/QUEUE.md`.

**3. L4's open item stands.** Four fifths of lesson 4's practitioner material comes from one company's
documentation and no second source of comparable quality was found at Stage 1. Every sentence
disclaims it and the declaration is correct, so this is not a Part 3 failure. It is a Stage 1 gap and
it should be looked for before the course publishes.

### After the fixes

`npm run validate` exits 0. `npm run minutes` reports every declared figure still correct. Contraction
rates on the three lessons edited: 01 at 13.5 (was 13.9, pre-existing and under the ceiling), 07 at
6.9, 09 at 5.6, the project at 6.6, all three of those inside the band. No em dash and no spaced en
dash added.
