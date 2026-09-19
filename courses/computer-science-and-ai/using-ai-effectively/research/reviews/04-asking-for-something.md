# Reviews: Using AI Effectively lesson 4, "Asking for something"

## 2026-09-18 — Lesson 04 — facts, quotations, sourcing, decisions, pedagogy, quiz, voice, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **FAIL**, with bounded fixes rather than a
rewrite. The reviewer's summary is the one to keep: "The lesson passes every check a script can run,
and fails on exactly the things `npm run validate` was never able to see." All closed below.

Tier A, one reviewer, fresh context. The reviewer ran the quiz shape and the contraction rate by
hand, because this course is `status: drafting` and the build's quiz checks do not print for it, and
ran an exact-sentence and 7-gram overlap across all four lesson bodies.

### Two quotations a reviewer could not check

**L4-01 the lesson printed two strings inside quotation marks that `research/SOURCES.md` did not
record.** The ellipses instruction pair and the comment on it were in SOURCES only as a paraphrase
with three words quoted. The drafter had the page in front of it, which is why they are right, and
that is not the standard: the ceiling rule is that a lesson may not lean past what the research file
records, and a reviewer who cannot check a quotation has to treat it as unsupported. **Closed:** both
strings are now in the Anthropic entry verbatim, so the next reviewer can check them in one grep.

### The capability claim in the lesson's own voice

**L4-02 "The guidance's own comment on the pair is the right one: the system 'is smart enough to
generalize from the explanation'."** The quotation is a vendor's claim about its own model. "Is the
right one" makes it the lesson's, in the present tense, about "the system" generically, with no
model and no date, which is the exact sentence decision 2 exists to forbid, and it brushes decision
4 as well by attributing understanding a lesson ahead of where the course frames that question.
**Closed:** the comment is now attributed to Anthropic and explicitly quoted rather than endorsed,
and the reason a stated purpose helps is taken from lesson 2's mechanism, which does not need
anybody's word for it.

### The worked example that was not worked

**L4-03 standards 1.2 asks for two fully worked examples and the body had none.** The opening pair
showed two requests and no answers, and decision 1 forbids printing what a system will reply, so the
reviewer was right that the drafter resolved a real conflict correctly and that the consequence was
a lesson which asserts its central claim twelve times and demonstrates it never. The wrinkle
example, which the outline calls the most important in the lesson, was three narrated sentences.

**Closed, on the reviewer's own suggestion, which is the best idea in the review.** The wrinkle is
now worked **on the input side**, where decision 1 permits it. The consultant's request is printed,
the three added paragraphs are printed, and the lesson's own false-sentence test is run against each
one in turn, with a different verdict each time: one is length, one is a restatement competing with
the sentence that said it better, and one is genuinely context and is the sentence he should have
started with. The test was the best thing in the lesson and was never demonstrated on anything.

### The body and the quiz disagreeing

**L4-04 the body invoked long-input degradation for a three-paragraph addition while the quiz said
three paragraphs do not approach that limit**, and lesson 3's own footnote says the underlying result
does not support the conversation claim at all. **Closed:** the body no longer reaches for lesson 3's
result, and rests on the simpler and correct point, which is that two of the three paragraphs are
competing with the instruction rather than supporting it.

### Two forward references that were wrong

**L4-05 the lesson promised lesson 6 would ask whether the task was worth handing over**, which is
lesson 9, **and promised lesson 8 uses the form part of the checklist**, which it does not: lesson 8's
four steps are checking what you can, checking the seam, asking twice cleanly, and going outside the
system. This is defect 12's shape, and the reviewer's note about it is the one to remember: written
confidently enough that lesson 8's drafter might feel obliged to invent it. **Closed:** both now point
where the outline actually puts them, and the lesson 6 reference carries the overview finding, which
is the thing a reader of lesson 4 most needs to know is coming.

### Sourcing

**L4-06 two invented specifics.** "Most people find it was context, and most are surprised" is a
claim about people with nothing behind it, now rewritten as the lesson's own expectation. "It
catches perhaps half as much" quantified something nobody measured; "perhaps" does not rescue an
invented fraction. Both closed.

**L4-07 the Yin result printed without the model-name convention decision 2 requires.** The paper
names its models and this course has not read which, so the clause now says so, and SOURCES records
that a lesson citing it cannot meet the convention and must say so.

**L4-08 research gathered and dropped.** SOURCES carries the caution that the vendor's role examples
are set as a *system prompt*, which an ordinary chat user never sees. The lesson taught role
prompting without it. **Closed:** the lesson now says that in a chat window a role is simply the first
line of your request, which is to say one more piece of context competing with the rest.

**L4-09 the vendor interest was stated correctly**, once, plainly, with the read date and the reason
the material is used anyway. The reviewer called this compliant with standards 2.2 and with
`docs/SOURCE_NOTES.md`'s line on declared interests. Recorded because it is the part to copy.

### The quiz

**L4-10 three of six stems were the body's own examples handed back** (defect 5b), and one item was
answerable by picking the only hedged option (defect 5). **Closed:** the consultant item is now a vet
choosing which sentence to add to a leaflet request, the politeness item's options no longer differ
by hedging, and the request-quality item is now a school notice rather than the subject line the
body already discusses.

**L4-11 three explanations argued against their own material.** One said form and constraints were
"genuinely absent" from a stem that says "a short note to staff", which supplies a rough form and a
rough constraint. One said the politeness evidence "misstates the evidence" about impoliteness
costing accuracy, when that is exactly what the study found, and the distractor is wrong for a
different and better reason. And one said reading a request aloud "catches something else" while the
body calls it the same test with you standing in for the colleague. All three closed.

**L4-12 defect 17 twice**, options named by position in two explanations while every other
explanation in the lesson named them by content. Both renamed.

### Voice

**L4-13 twelve one-line morals, seven of them bolded**, including one the reviewer quoted back
against the style guide's own example of the banned shape: the guide names "And that changes
everything" and the lesson wrote "**And that changes far more than the one rule.**" as a standalone
bolded paragraph. Six removed or folded in.

**L4-14 "Here are two requests for the same thing" as the lesson's opening words**, which is defect
7's named tic in the most prominent position in the file. Cut to "Two requests for the same thing."

**L4-15 the banned "not X, it's Y" shape twice in three paragraphs**, and a triad where two of the
three words were doing no work. Both fixed.

**L4-16 defect 15 was not present**, and the reviewer said so: the contraction rate sits inside the
repo's band. That is the first lesson in this course where it did on the first pass.

### Recorded and not closed

**Proportion of vendor material.** Three of the lesson's four footnoted body claims, the whole of the
second exercise, and one of three Go deeper entries come from one company's documentation. Every
sentence disclaims it and the reviewer still flagged that a lesson drawing four fifths of its
practitioner material from one source can read as an endorsement. **No second source of comparable
quality was found at Stage 1.** Worth looking for one before this course publishes.
