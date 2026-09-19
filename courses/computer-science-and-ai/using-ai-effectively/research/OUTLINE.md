# Outline: Using AI Effectively

*Stage 2, 2026-09-18. Built from `research/SOURCES.md`. Sequence for how the ideas build, not how a
syllabus lists them.*

**Eleven lessons, a course-end test and a project.** The reasoning for eleven is at the end, under
"How many lessons, what is left out, and what comes next".

**All minute figures in this file are measured minutes**, the scale `npm run minutes` reports, and
they are what the site shows a learner. This is said in capitals here because the Digital Literacy
outline planned in a different scale and ran low by a factor of two, and two drafters in a row had
to reason past it. If a drafted lesson measures wildly away from the figure here, the figure was
wrong and the lesson is probably fine; check it for padding and then move on.

---

## The sequence, and why it is this one

The obvious order is to teach prompting first, because that is what people came for. This course
does not, and the reason is the whole design.

**Every prompting move worth teaching is a consequence of one fact about the machinery**, which is
that the system produces the next piece of text given everything in front of it, and holds no
separate store of facts to consult. A learner who has that fact can derive most of the advice and
can work out what to do when the advice runs out. A learner who has the advice without the fact has
a list of rituals, and when one of them stops working, which they do, they have nothing.

So the mechanism comes second, straight after the course has been honest about itself, and
everything after it is that fact applied: to what a session is, to how to ask, to which tasks are
reliable, to why a confident false answer is not a bug, to how to check, and to when to put the
thing down.

The second ordering decision is that **checking comes before convenience**. Verification is lesson
8, before the lesson on what you hand over and before the lesson on reading claims, because a reader
who can verify can survive being wrong about everything else in the course.

The third is that **"when not to use one" is a lesson and not a caveat**. It is lesson 9, it has the
same weight as the lessons on using one well, and the reason is in SOURCES: the best-designed study
we have found says that an unguarded tool during practice leaves people worse off than never having
had it. A course at a university whose subject is learning cannot put that in a callout.

---

## Seven decisions this outline settles

A drafter should not re-open these. They exist so that eleven lessons written in different sessions
agree with each other.

### Decision 1: the course is product-neutral, and every exercise must work on any of them

The course never tells the reader which system to use, never assumes a particular one, and never
prints an interface instruction ("click the paperclip icon"). It says "the system you use" and
"whatever you have open".

**Why.** Three reasons and they compound. The market moves faster than the lessons: a course naming
buttons is a course that is wrong within a quarter. A reader is often not choosing, because their
employer chose. And a course that reads as a recommendation for a product is doing something this
institute does not do.

**What this costs, and it is a real cost.** The course cannot say "and here is what it will reply",
because it does not know. Decision 5 is the answer to that.

### Decision 2: capability claims are quarantined in one place, and every figure carries a model name and a date

No lesson body states what "these systems" can or cannot do as a standing fact. Where a capability
claim is unavoidable, it is written with the model and the date inside the sentence, in the same
convention Digital Literacy uses for years, extended by one field: **"GPT-4, tested in 2024"** and
not "current models".

**And a single lesson carries the perishable material.** Lesson 11 is the one that handles dated
claims, and it is the lesson to revise when the world moves. Lessons 2 to 10 are written so that
their arguments survive a model getting better, because the arguments are about mechanism, about
what a task requires, and about what a person should do.

**Test for a drafter:** if a model released next year would make a sentence false, that sentence
either carries its date and its model, or it does not belong in that lesson.

### Decision 3: the word is "hallucination", once, and then plain description

NIST's own profile records the objection that "hallucination" and "fabrication" anthropomorphise,
and that anthropomorphising is itself one of the risks. NIST's own replacement, "confabulation", has
the same problem in a longer word.

**So: lesson 7 names "hallucination" once, says it is the word everybody uses, says in one sentence
what is wrong with it, and then the course says what it means instead**, which is a confident false
answer, or a source that does not say what it is cited as saying. A course that invents private
vocabulary produces learners who cannot read anybody else's writing on the subject.

### Decision 4: the course declines the question of whether these systems reason, explicitly

Not by ducking it. Lesson 5 says that the question turns on what the word is being asked to do, that
the course is not going to settle it, and then answers the question a learner can act on: asking for
steps changes the answer rather than only the presentation, the steps can be wrong while the answer
is right and the reverse, and either way they are something to check.

**This is standards 3.1 case 3** and the honest handling of it is to name it as a definitional
dispute rather than to pick a side and pretend it is a finding.

### Decision 5: every exercise's deliverable is a comparison, not an answer

This is the hardest design problem in the course and SOURCES flagged it. Two learners on two
products will get different answers to one request, so no exercise can have a key.

**The solution, used in every lesson:** the reader writes down what they expect **before** they run
anything, then runs it, then records the gap. The deliverable is the gap. That is assessable by the
learner, it does not depend on which system they have, and it is the same habit the whole course is
teaching, which is that your impression of what happened is not evidence about what happened.

It also does a second job. **A reader who writes a prediction first is doing retrieval practice**,
which How to Learn Anything taught them in Term 1, position 1, and the course should say so out loud
the first time.

### Decision 6: the course assumes the reader has not decided to use these systems

It is written for somebody using one for real work, and that includes somebody required to use one
who would rather not. NIST names both failures in the same section, over-reliance and unnecessary
aversion, and the course is against both.

**Concretely:** no lesson may imply that declining to use one is a mistake. Lesson 9 is where this
is stated positively rather than merely avoided.

### Decision 7: scope is text, and lesson 1 says so

Images, audio, video, and systems that take actions on their own are out. So is anything about
building applications. The reason is that this is a Foundation course in Term 1 with a reader who
may never have thought about any of this, and because "Building with AI" at Term 20 is the course
that takes the rest.

**Say it in lesson 1** rather than let a reader find out in lesson 11 that the course was narrower
than the title.

---

## Conventions for every lesson

- **Second person, and the reader has a system open.** Every lesson has at least one thing they do
  in it rather than read about.
- **Prediction before running**, per decision 5. At least two per lesson, in `:::predict` blocks or
  in the exercise itself.
- **Every figure carries its year**, and every capability figure also carries its model.
- **Read levels are stated where a source's label matters.** Twelve works are on the `unread:` line
  in SOURCES. Lessons 1, 6, 9 and 11 all want Dell'Acqua, which is on it. **Whoever drafts lesson 1
  should open that paper first and move it off the line**, because four lessons are waiting on it.
- **No lesson prints a prompt template longer than three lines.** A template is a ritual; the course
  teaches the reasons that generate one.
- **Earlier courses are used and not re-taught.** How to Learn Anything (retrieval, spacing, the
  learning-against-performance distinction), Reading Well (judging a source before trusting it),
  Logic and Argument (what makes evidence bear on a claim), Digital Literacy (threat models, what a
  service holds about you, the habit of reading who is making a claim). All five are earlier on the
  Core and all five are written, so this course may lean on them, link them, and must not repeat
  them.

---

## Lesson sequence

### 1. What this is for, and what the evidence actually says (~70 min)

- **Objectives:**
  - State what the measured studies show about whether these systems make people more productive,
    including the two results that point opposite ways, and say what reconciles them.
  - Say what this course claims and what it refuses to claim, and identify a claim about AI as one
    the course could not support.
  - Write down one task you already use one of these systems for and one you would never use it for,
    with the reason for each, as a baseline to come back to in lesson 6.
- **Core ideas:** the course opens the way Digital Literacy opens, by testing its own premise in
  public. **Dell'Acqua's consultants were 25.1% faster and about 30% better inside the frontier and
  19 percentage points *less* likely to be right outside it. METR's sixteen experienced developers
  were 19% slower and believed they had been 20% faster.** Both are real and neither is the
  headline anybody quotes. The reconciliation, which the course commits to and states as its own
  reading rather than as a finding: the gains show up on work near the edge of what a person can
  already do, and the losses show up on work they had already mastered, where reading, checking and
  correcting costs more than doing it. Then what the course is for: not to make the reader faster,
  which it cannot promise, but to let them tell which kind of task they are on, and to check what
  comes back.
- **Mechanism to explain:** none yet, deliberately. This lesson explains the *shape of the evidence*
  instead: what a randomised trial can show, why self-report is not it, and why a study of sixteen
  people on familiar work cannot be generalised and is still worth knowing.
- **Worked examples:** (a) *Simple:* the two studies laid side by side in a small table, with the
  scope of each written into the row, so the reader sees that they measured different people doing
  different work. (b) *With a wrinkle:* the METR prediction gap worked through: developers predicted
  24% faster, were 19% slower, and afterwards still estimated 20% faster. Ask the reader what that
  implies about their own sense of whether the tool helps them, and answer it honestly, which is
  that it implies their sense is not evidence and not that it is wrong.
- **Misconceptions to address:** "it makes everybody faster"; "the studies show it does not work";
  "I can tell whether it is helping me"; "this course will teach me the prompts that work".
- **Practice:** the baseline. Two columns, tasks you use it for and tasks you would not, with a
  reason beside each. Kept, and revisited in lesson 6 against the frontier and in lesson 9 against
  the learning finding. **This is the course's spine and the project's first section.**
- **Sources:** Dell'Acqua et al. (**open it first**); Becker et al. (METR); Noy and Zhang, for the
  second instance of lower-skilled workers gaining more; EU AI Act Article 4 for one sentence on why
  an institution might require this.
- **Connects:** leads to 2, which explains why the frontier is jagged rather than merely uneven.
- **Neutrality note:** standards 3.1 case 2. Present both results at full strength and name the
  reconciliation as the course's own.

### 2. What you are actually talking to (~65 min)

- **Objectives:**
  - Describe, without mathematics, what the system does when it answers, in a way you could say to
    somebody else.
  - Predict, from that description alone, which of two described tasks it will be unreliable at.
  - Explain why a confident false answer follows from the design rather than indicating a fault.
- **Core ideas:** the one paragraph the rest of the course is built on. It produces text a piece at a
  time, each piece chosen given everything in front of it, from a model built to approximate the
  statistical shape of an enormous amount of writing. **NIST's own sentence is the anchor and should
  be quoted:** confabulations "are a natural result of the way generative models are designed: they
  generate outputs that approximate the statistical distribution of their training data; for
  example, LLMs predict the next token or word in a sentence or phrase." Then tokens, because the
  letter-counting failure is the cheapest possible demonstration that the thing is not reading the
  way the reader is. Then the consequence that surprises people most: **there is no separate store
  of facts to consult.** An answer is produced, not retrieved, and so is a citation.
- **Mechanism to explain:** what "no store of facts" means concretely. Contrast with two things the
  reader already knows from Digital Literacy: a file system, where a thing is in a place and can be
  fetched, and a search engine, which finds documents and shows them to you. This system is neither.
  That is the paragraph the whole course rests on, and it is worth a figure.
- **Worked examples:** (a) *Simple:* ask it how many times a particular letter appears in a
  moderately long word, and then ask why it got it wrong. Two things to notice: the answer, and
  whether the explanation it gives for its own error is itself reliable. (b) *With a wrinkle:* ask
  for a source on something obscure in the reader's own field, where they can check. The point is
  not to catch it out; it is that the citation is generated by the same process as the prose, which
  is why it has the shape of a real one.
- **Misconceptions to address:** "it looks things up"; "it has a database"; "it understands the
  question the way I do"; "it can count letters because it can write an essay"; "getting it wrong
  means it is broken".
- **Practice:** the letter exercise and the citation exercise, both with a prediction written first.
  Then: write the one-paragraph description in your own words, without looking, which is retrieval
  practice and the course should name it as such and point at How to Learn Anything lesson 3.
- **Sources:** NIST AI 600-1 §2.2, quoted; Jurafsky and Martin chapters 2 and 7 as the go-deeper
  link (**on the `unread:` line, so link it and do not cite it**).
- **Connects:** builds on nothing; everything after it depends on this. Leads to 3 (what it can see)
  and to 7 (why confident false answers happen).
- **Spaced review of:** lesson 1's baseline, used as the material for the prediction.

### 3. The session: what it can see, and what it keeps (~50 min)

- **Objectives:**
  - Say what the system can see when it answers, and explain why the same question can produce
    different answers at different times.
  - Find out, for the product you actually use, whether it keeps anything between conversations, and
    say where you found out.
  - Explain what happens when you correct it, and what that correction does and does not change.
- **Core ideas:** the context window, described as what is in front of it rather than as a number.
  Everything it can use is in the conversation, plus whatever the product has quietly added, plus
  whatever tools it has been given. Then three things that follow and that people get wrong in
  opposite directions: **it does not remember you unless somebody built it to**, and many products
  now have built it to, so the honest teaching is to go and find out rather than to assume either
  way; **a correction changes this conversation and usually nothing else**; and **the same request
  does not reliably give the same answer**, which is why testing something once tells you very
  little.
- **Mechanism to explain:** why a long conversation degrades. Earlier material is still there but it
  is competing with everything since, and the practical consequence, which is that starting a fresh
  conversation is often the fix and almost nobody tries it.
- **Worked examples:** (a) *Simple:* ask the same question three times in three fresh conversations
  and put the three answers side by side. The reader predicts first how similar they will be. (b)
  *With a wrinkle:* a conversation that has gone wrong and been corrected four times, against the
  same request made once in a clean conversation with the correction built into it. This is the
  single most useful practical habit in the lesson.
- **Misconceptions to address:** "it remembers what I told it last week"; "it never remembers
  anything"; "correcting it teaches it"; "the same prompt gives the same answer, so one test is
  enough"; "a longer conversation gives it more to work with".
- **Practice:** the three-conversations comparison; and finding the product's own documentation on
  what it retains, writing down the sentence and the date read. **The dated-reading habit is
  Digital Literacy lesson 12's retention-window exercise, and the lesson should say so.**
- **Sources:** provider documentation, which is primary and is read by the learner rather than by
  the lesson; NIST §2.4 for the privacy half, which lesson 10 takes properly.
- **Connects:** builds on 2. Leads to 4, because what you can control is what is in front of it.

### 4. Asking for something: context, constraints, and the form of the answer (~65 min)

- **Objectives:**
  - Rewrite a vague request so that it supplies the context, the constraints and the form of the
    answer, and say which of the three each change is.
  - Explain why giving the reason behind an instruction changes what comes back, in terms of what
    the system is doing.
  - Judge a request by the colleague test before you send it.
- **Core ideas:** the request is the specification, which is Brown et al.'s finding and is the whole
  reason any of this is a skill: the task is specified in the text, with no training, so what you
  write is the entire control surface. Then the three things a good request supplies, which are not
  a template but a checklist you can run in ten seconds: **context** (what this is for, who it is
  for, what has already been decided), **constraints** (length, what to avoid, what must be true),
  and **form** (what the answer should look like when it arrives). Then the move that surprises
  people: **give the reason for an instruction, not just the instruction.** Anthropic's own guidance
  has the worked pair, "NEVER use ellipses" against the same instruction plus the reason that the
  text will be read aloud by a speech engine.
- **Mechanism to explain:** why the reason helps, in terms of lesson 2. The system is continuing
  text given what is in front of it, and a stated purpose puts a great deal in front of it that a
  bare prohibition does not.
- **Worked examples:** (a) *Simple:* a one-line request and the same request with the three things
  supplied, and the two answers side by side. Chosen from ordinary work rather than from writing a
  poem: a message to a supplier, a summary of a document, a set of options for a decision. (b)
  *With a wrinkle:* a request that gets worse when you add more, because what was added was length
  rather than context. This is the lesson's most important example and it is the one that stops
  "more words is better" replacing "vague is bad".
- **Misconceptions to address:** "a longer prompt is a better prompt"; "there are magic words";
  "being polite changes the answer"; "you need to tell it what role to play"; "there is a correct
  prompt for a task".
- **Practice:** take a real request the reader made this week, apply the three-part checklist, and
  run both. Prediction first: which of the three do you think is missing, and what will change?
  Then the **colleague test**, from Anthropic's guidance and worth quoting: "Show your prompt to a
  colleague with minimal context on the task and ask them to follow it. If they'd be confused,
  Claude will be too." A reader with no colleague to hand can read it aloud to themselves, which is
  the same test the Foval style guide applies to lessons.
- **Sources:** Brown et al. for the specification idea; Anthropic's prompting guidance, named as a
  vendor's own document with the interest stated once.
- **Connects:** builds on 2 and 3. Leads to 5, which is the two techniques that go beyond stating
  what you want.

### 5. Examples, and asking for the steps (~60 min)

- **Objectives:**
  - Supply examples in a request and say what examples steer that an instruction does not.
  - Ask for intermediate steps, and explain what the published result does and does not show.
  - Identify a case where the steps are right and the answer wrong, and say what that means about
    what the steps are.
- **Core ideas:** two techniques, both with real evidence behind them, both routinely misunderstood.
  **Examples** steer form, tone and structure better than description does, which is Brown et al.'s
  few-shot finding arriving as practical advice, and Anthropic's guidance gives the shape: three to
  five, relevant, varied enough that the system does not pick up a pattern you did not mean.
  **Asking for steps** is Wei et al.: eight worked exemplars took a 540-billion-parameter model to
  the best published accuracy on grade-school maths word problems in 2022. And then the caveat that
  matters more than either, from NIST: models "sometimes provide logical steps for how they arrived
  at an answer even when the answer itself is incorrect."
- **Mechanism to explain:** what the steps actually are. They are output, produced the same way the
  answer is, not a transcript of a process that happened elsewhere. That is why they can be wrong
  while the answer is right, and right while the answer is wrong, and it is why they are useful:
  **steps you can read are steps you can check**, and an answer with no steps gives you nothing to
  check against.
- **Worked examples:** (a) *Simple:* a formatting task done by description and then by three
  examples, with the reader predicting which will hold the format better. (b) *With a wrinkle:* a
  multi-step calculation or a piece of reasoning where the printed steps contain an error that the
  final answer does not reflect, or the reverse. The reader has to find the seam. **This is the
  example the lesson exists for.**
- **Misconceptions to address:** "the steps are the reasoning"; "if it shows its working, it is
  right"; "chain-of-thought is a magic phrase"; "examples are for when you cannot describe what you
  want"; "asking for steps always helps".
- **Practice:** the seam-finding exercise, and one example-driven task on the reader's own work.
- **Sources:** Wei et al.; Brown et al.; NIST §2.2 for the caveat; the Prompt Report as the
  go-deeper link, with the course's own sentence about fifty-eight named techniques being what a
  field looks like before it knows which ones matter.
- **Connects:** builds on 4. Leads to 7, since the printed-steps caveat is the first appearance of
  the confident-wrong problem. **Decision 4 is stated in this lesson.**
- **Spaced review of:** lesson 2's mechanism, which is what makes the steps-are-output point land.

### 6. The jagged frontier (~60 min)

- **Objectives:**
  - Explain why the boundary between what these systems do well and badly does not follow how hard
    a person finds the task.
  - Sort a set of described tasks into likely-reliable and likely-unreliable, and give the reason
    from the mechanism rather than from experience.
  - Revise your lesson 1 baseline and say which entries moved and why.
- **Core ideas:** the single most useful predictive idea in the course. Dell'Acqua's term, and their
  finding that within one workflow two tasks of apparently similar difficulty sat on opposite sides
  of it. Then the part the study does not supply and the course has to: **what actually predicts
  which side a task falls on.** The course's own answer, offered as reasoning from lesson 2 rather
  than as a result: tasks where the answer is *constrained by the shape of the text*, such as
  rewriting, summarising, translating, generating options, are the reliable ones; tasks where the
  answer depends on a *fact that has to be right*, or on *counting, position or exact arithmetic*,
  or on *something nobody has written down*, are the unreliable ones. And the jagged part: those
  categories cut across human difficulty in a way that feels arbitrary until you know why.
- **Mechanism to explain:** why "how hard is this for a person" is the wrong axis. Difficulty for a
  person tracks working memory and practice, which lesson 2 of How to Learn Anything taught. This is
  a different machine with different limits, so its easy and hard are differently placed, and
  expecting them to line up is the error.
- **Worked examples:** (a) *Simple:* two tasks a person would call equally easy, one of each kind,
  with the prediction written first. (b) *With a wrinkle:* a task that looks like a text-shape task
  and is really a fact task underneath, such as "summarise this report" where the report contains
  figures the summary must carry accurately. The wrinkle is that most real work is mixed, and the
  skill is splitting a job into the parts that sit on each side.
- **Misconceptions to address:** "it is good at things in proportion to how hard they are"; "it is
  good at technical things and bad at creative things"; "it is good at creative things and bad at
  technical things"; "the frontier moves, so there is no point learning where it is".
- **Practice:** take one real piece of work and split it into parts by which side each falls on.
  Then revisit the lesson 1 baseline and mark what moved. **The split is the project's fourth
  section.**
- **Sources:** Dell'Acqua et al. (**on the `unread:` line**); lesson 2's mechanism, which is doing
  most of the work here.
- **Connects:** builds on 2 and 5. Leads to 7 and 8, which are what to do about the unreliable side.
- **Spaced review of:** lesson 1's baseline, explicitly.

### 7. Confident and wrong (~65 min)

- **Objectives:**
  - Explain, in two different ways, why a system like this produces confident false answers, and say
    what each explanation implies about whether it can be fixed.
  - Identify a confabulated citation and a confabulated justification, and say why the second is
    harder to spot.
  - State what retrieval does and does not do to the problem, citing the measurement.
- **Core ideas:** the lesson everybody needs and most material gets wrong by treating it as a
  temporary defect. **Two accounts, both named, both credited.** The structural one is NIST's: this
  is what a system that approximates the statistical shape of its training data does, and it is
  "particularly relevant when it comes to open-ended prompts for long-form responses and in domains
  which require highly contextual and/or domain expertise". The incentive one is Kalai et al.,
  September 2025: training and evaluation reward guessing over admitting uncertainty, in the way an
  exam with no negative marking rewards a student for filling in every box. **The two are
  complementary and they imply different things**: the first implies a floor, the second implies a
  lever nobody has pulled, and the honest answer to "will it be fixed" is that nobody knows.
  Then the two forms that bite: a **fabricated source**, and a **real source cited for something it
  does not say**, which is the harder one and the one Magesh et al.'s definition separates out.
- **Mechanism to explain:** why confidence is not a signal. The fluency of the text is a property of
  the text, not a measurement of anything, which is the same shape as Digital Literacy's point about
  the padlock: a signal that costs nothing to produce cannot tell you what you wanted to know.
  Kadavath et al. is the careful qualification and the lesson must include it: models are
  meaningfully calibrated on familiar closed-form questions and degrade on new tasks, so "it has no
  idea whether it is right" is as wrong as "just ask it".
- **Worked examples:** (a) *Simple:* ask for three sources on something in the reader's own field
  and check all three. Prediction first, on how many will be real, how many will be real-but-wrong,
  and how many invented. (b) *With a wrinkle:* the Magesh result. Purpose-built professional legal
  tools, with retrieval, whose vendors claimed to have eliminated the problem, hallucinating
  **between 17% and 33%** of the time when tested in 2024. Lexis+ AI answered 65% of queries
  accurately; Westlaw's AI-Assisted Research 42%; Ask Practical Law AI gave incomplete answers on
  more than 60%. **This is the answer to "but mine is connected to real documents", and it is a
  measurement rather than an argument.**
- **Misconceptions to address:** "hallucination is a bug they will fix"; "it only happens on obscure
  questions"; "if it cites a source, the source is real"; "if the source is real, it says what it is
  cited as saying"; "retrieval or a web connection solves it"; "telling it not to make things up
  works"; "a confident tone means it is on firm ground".
- **Practice:** the three-sources exercise, done on the reader's own subject where they can check.
  Then: find one case where the system gave a real source that does not support the claim, which is
  harder and is the point.
- **Sources:** NIST §2.2, quoted; Kalai et al.; Magesh et al., with the 2024 test date; Kadavath et
  al. for the calibration qualification. **Decision 3 is stated in this lesson.**
- **Connects:** builds on 2 and 6. Leads directly to 8.
- **Neutrality note:** standards 3.1 case 2. Two named accounts, neither presented as settled.

### 8. Checking an answer you could not have produced (~75 min)

- **Objectives:**
  - Apply a verification procedure that does not depend on already knowing the answer, and say at
    each step what it would have caught.
  - Decide how much checking a piece of work needs, from what it will be used for.
  - Explain why asking the system to check itself is worth something and is not sufficient.
- **Core ideas:** the hardest and most valuable lesson in the course, and the one with least written
  about it. The problem stated properly: you can check an answer you could have produced yourself,
  and the whole reason you asked was that you could not. So what procedures survive that? The course
  teaches four, in order of cost, and teaches when each is enough.
  1. **Check the parts you can.** Any name, number, date, quotation or citation in the answer is
     independently checkable, and these are exactly where the failures concentrate.
  2. **Ask for the steps and check the seam**, from lesson 5. You need not be able to produce the
     answer to notice that step three does not follow from step two.
  3. **Ask it a second time, cleanly**, and compare. Lesson 3 established that answers vary; that
     variation is usable. Where two clean conversations disagree, one of them is wrong and you have
     been told where to look. **Where they agree, you have learned much less than it feels like**,
     and the lesson must say so.
  4. **Take it to something that is not it.** A search engine, the actual document, a person who
     knows. This is the only one that can catch an error the system makes consistently, and it is
     the expensive one, which is why the decision about how much checking to do comes before it.
- **Mechanism to explain:** why self-checking works at all and why it is bounded. Kadavath et al.:
  asking the system to evaluate a claim is a different and easier task than producing it, which is
  why it catches things, and its calibration degrades on unfamiliar tasks, which is why it cannot be
  the last step. NIST's high-integrity-information definition is the standard to check against, and
  it is worth printing: information that "distinguishes fact from fiction, opinion, and inference;
  acknowledges uncertainties; and is transparent about its level of vetting".
- **Worked examples:** (a) *Simple:* a short factual answer taken through all four steps, with what
  each step caught written down. (b) *With a wrinkle:* an answer that survives steps one to three
  and fails step four, because the error was consistent. This is the example that justifies the
  expensive step and it is the one a reader will remember.
- **Misconceptions to address:** "if I cannot check it, I cannot use it"; "asking it to double-check
  is checking"; "two agreeing answers confirm each other"; "checking takes as long as doing it, so
  there is no point"; "the parts I can check being right means the rest is right".
- **Practice:** run the four steps on a real answer the reader needs for something. Write the
  checking budget down first: what will this be used for, and what does being wrong cost? Then check
  to that budget rather than to exhaustion.
- **Sources:** Kadavath et al.; NIST §2.8; Magesh et al.'s hallucination definition, which usefully
  splits a false fact from a misused source.
- **Connects:** builds on 3, 5, 6 and 7. Leads to 9, since the cost of checking is half of the
  decision about whether to use one at all.
- **Spaced review of:** lesson 5's steps, put to work.

### 9. When not to use one (~70 min)

- **Objectives:**
  - State what the evidence shows about using one of these systems while learning something, and
    give both figures from the study rather than one.
  - Identify a task where the doing was the point, and say what using a system on it would cost.
  - Decide, for one task of your own, to stop using one, and write down the reason and what you will
    do instead.
- **Core ideas:** the lesson that makes this course something other than an advertisement, and the
  one with the best evidence in the whole file behind it. **Bastani et al., PNAS 2025:** nearly a
  thousand high school mathematics students, two tutors. Unguarded access improved practice grades
  **48%**; a tutor designed to give teacher-written hints rather than answers improved them
  **127%**. And when access was taken away, the unguarded group scored **17% below students who had
  never had it at all**. The authors' own explanation: students used it "as a 'crutch' during
  practice problem sessions, and subsequently perform worse on their own."

  **Both numbers travel together, always.** The 127% is not a footnote: the same study shows that a
  well-designed tutor beat everything, so the finding is about how it is used and not about whether.
  And the scope travels too: high school mathematics, practice problems, GPT-4, 2025.

  Then the generalisation, offered as the course's reasoning and not as the study's: **the cost
  appears when the doing was the point.** Learning something, building a judgement you will need
  later, writing something whose value is that you thought it through. Against that: work where the
  output is the point, where the reader has already got the judgement, and where the task will not
  recur. Then the third category, which is neither, and which lesson 1's evidence and decision 6
  require the course to leave to the reader: tasks where the trade is real and the answer depends on
  what they want their life to look like.
- **Mechanism to explain:** why it happens, in terms the reader already has. How to Learn Anything
  taught that retrieval strength is built by retrieving and that a study method which feels fluent is
  often the one teaching least. Asking for the answer removes the retrieval. **This is the fluency
  illusion with a much better interface**, and saying it that way is the best use this course can
  make of Term 1, position 1.
- **Worked examples:** (a) *Simple:* two uses of the same system on the same subject, one that
  builds the reader's judgement and one that replaces it, made concrete. (b) *With a wrinkle:* the
  case where the honest answer is that it does not matter. Somebody who will never need to write
  that kind of email again, using it to write that email, is losing nothing, and a course that
  cannot say so has lost the reader's trust for the cases where it does matter.
- **Misconceptions to address:** "using it to do the work and using it to learn are the same
  thing"; "if I read the answer carefully I have learned it"; "the study shows these tools are bad
  for education"; "refusing to use one is just being difficult"; "I can tell whether I have learned
  something".
- **Practice:** pick one task and stop, with a reason written down and a replacement named. Then,
  the harder half: take one task where you do use it, and redesign how you use it so that you still
  do the part that builds the judgement. That is the GPT Tutor condition applied to yourself.
- **Sources:** Bastani et al., quoted; How to Learn Anything lessons 1 and 3, linked and not
  re-taught; NIST §2.7 on both over-reliance and unnecessary aversion.
- **Connects:** builds on 1, 6 and 8. Leads to 10.
- **Neutrality note:** standards 3.1 case 3. What a person should trade for convenience is a value
  question, and the lesson describes, gives the evidence, and does not prescribe. **Decision 6 is
  stated positively here.**

### 10. What you hand over (~50 min)

- **Objectives:**
  - Find out what the product you use does with what you type into it, and write down the sentence
    and the date you read it.
  - Decide what you are willing to put in, by category rather than case by case, and say what the
    decision rests on.
  - Say what changes when the account is your employer's rather than yours.
- **Core ideas:** the shortest lesson in the course and one of the two that can prevent something
  irreversible. Three things, all of which the reader can establish for themselves. **What the
  provider says it does**, which is a document with a date on it and differs by product and by plan.
  **What your employer's arrangement is**, which is usually different from the consumer one and is
  usually written down somewhere nobody reads. And **the decision**, which the course teaches as a
  procedure rather than a rule, because the right answer genuinely depends on the product, the plan
  and the employer.
- **Mechanism to explain:** why this is not the same question as Digital Literacy's. That course
  asked what a service keeps about you as a by-product of your using it. This asks what happens to
  something you deliberately handed over, which is a different and simpler question with a document
  behind it. Then NIST §2.4's harder half, which a reader will not have thought about: models "may
  be able to correctly infer" sensitive things "by stitching together information from disparate
  sources", and an inference can harm somebody even when it is wrong.
- **Worked examples:** (a) *Simple:* the reader finds the relevant page for their own product, reads
  the sentence, writes it down with the date. (b) *With a wrinkle:* a case where the answer differs
  between the free plan and the paid one, or between a personal account and a work account on the
  same product, which is the situation most readers are actually in and almost nobody has checked.
- **Misconceptions to address:** "anything I type is used to train it"; "nothing I type is used to
  train it"; "deleting the conversation removes it"; "a paid plan means it is private"; "it is fine
  because I did not give my name".
- **Practice:** the categories exercise. Three lists, written once: things you will put in, things
  you will not, and things that depend, with the condition named. **This is a threat model, and the
  lesson should say so and point at Digital Literacy lesson 1** rather than build one from scratch.
- **Sources:** provider documentation, read by the learner; NIST §2.4; ICO guidance on AI and data
  protection, named for a UK reader with its jurisdiction stated, exactly as Digital Literacy names
  the right to erasure as European.
- **Connects:** builds on 3. Leads to 11.
- **Neutrality note:** jurisdiction is named every time a right or an obligation is.

### 11. Reading a claim about AI (~55 min)

- **Objectives:**
  - Sort a set of claims about these systems into measurable, unmeasurable and false, and say what
    would settle each of the measurable ones.
  - Identify what is missing from a capability claim that carries no model name or date.
  - Explain why your own impression of whether a tool helped you is not evidence, and say what would
    be.
- **Core ideas:** the lesson that carries the perishable material, per decision 2, and the one to
  revise when the world moves. Three habits. **A benchmark result is not a demonstration and neither
  is a demonstration a benchmark result**, and most writing about this subject slides between them.
  **A capability claim with no model and no date is not a claim about anything**, which is this
  course's own convention turned on other people's writing. And **your own sense of whether it
  helped is not evidence**, which is METR's prediction gap arriving for the second time and landing
  much harder than it did in lesson 1, because by now the reader has spent nine lessons forming
  impressions.
- **Mechanism to explain:** why self-report fails here specifically. Using one of these systems feels
  fast, because the waiting is short and the output arrives complete, and the checking and
  correcting happen later and are not counted. That is a mechanism the reader can check against
  their own week.
- **Worked examples:** (a) *Simple:* four claims sorted, one of each kind plus one that is really two
  claims stuck together. The sorting is Digital Literacy lesson 8's move applied to a new subject,
  and the course should say so. (b) *With a wrinkle:* a real vendor claim about eliminating
  hallucination, set against Magesh et al.'s measurement of exactly that claim. The wrinkle is that
  the vendors were not lying, in the sense that retrieval genuinely reduced the rate; they were
  making a claim too broad to be true of any system of that kind, which is a different failure and a
  harder one to see. **Digital Literacy makes this exact point about VPN marketing and the parallel
  is worth drawing.**
- **Misconceptions to address:** "the benchmark score means it can do my job"; "if it worked in the
  demonstration it will work for me"; "the newest model is better at everything than the last one";
  "I have used it a lot, so I know what it is good at"; "the research is out of date so there is no
  point reading it".
- **Practice:** take one claim the reader has seen in the last week, from anywhere, and sort it,
  naming what is missing. Then, the course's last exercise: **write the two-column baseline from
  lesson 1 again, without looking at the original**, and only then compare. Retrieval first, then
  feedback, which is How to Learn Anything's whole argument used on the course's own material.
- **Sources:** METR; Magesh et al.; Dell'Acqua et al.; the Prompt Report for one sentence on what a
  young field's vocabulary looks like.
- **Connects:** builds on everything. Completes the course.
- **Spaced review of:** deliberately the whole course, through the baseline rewrite.

---

## Assessments

### Course-end test

**Twenty-four items.** At least sixteen must be application to material that appears in no lesson:
a described person, a described task, a described claim. Distractors come from the misconceptions
named above and from true sentences answering a question that was not asked, which is the harder
and commoner failure. **No item may turn on a capability claim about a named model**, because the
test would then need revising whenever the models change, and a test that rots is worse than a short
one.

| Area | Items | Kind |
|---|---|---|
| What the evidence shows, and what it does not (L1) | 2 | 1 recall of the two results with their scopes, 1 application to a described claim |
| The mechanism (L2) | 3 | 1 recall, 2 application: predict a failure from the mechanism alone |
| The session (L3) | 2 | both application |
| Context, constraints and form (L4) | 3 | all application: a described request, which of the three is missing |
| Examples and steps (L5) | 2 | both application, one on steps that are right where the answer is wrong |
| The jagged frontier (L6) | 3 | all application: sort described tasks and give the reason |
| Confident and wrong (L7) | 3 | 1 recall of the two accounts, 2 application including a real-source-misused item |
| Verification (L8) | 3 | all application: which step would have caught this |
| When not to use one (L9) | 2 | 1 recall of both figures with the scope, 1 application to a described learner |
| What you hand over (L10) | 1 | application |

**Three items must be cross-lesson:** one pairing lesson 2's mechanism with lesson 6's frontier,
because the second is derived from the first; one pairing lesson 5's steps with lesson 8's checking,
because the steps exist to be checked; and one pairing lesson 9's learning cost with lesson 1's
productivity evidence, because they are the two halves of the same decision.

**One item must be the sorting item**: a claim about AI, to be placed as measurable, unmeasurable or
false, with the reason. That is lesson 11's objective and the course's own standard applied to the
world.

### Project: the frontier map

**Deliverable.** One plain text or Markdown file of roughly 1,500 to 2,500 words, written by the
learner, in six sections, with the transcripts to back them. Plain text for the same reason Digital
Literacy's project is plain text: it exercises an earlier course and it leaves the learner holding a
document they made.

**Budget about twelve hours over two or three weeks.** Most of it is the trials in section 3, and
those are spread out on purpose.

**The design problem this solves.** The course cannot predict what any reader's system will say, so
no step below asks for an answer. **Every step asks for a prediction, then the outcome, then the
gap.** The gap is the deliverable and it is assessable without a key.

**Steps.**

1. **The baseline, rewritten.** Your two columns from lesson 1, written again now, plus a note on
   every entry that moved and which lesson moved it.
2. **The mechanism, in your own words.** One paragraph, written without looking, on what the system
   is doing when it answers. Then a second paragraph naming one thing you believed at the start of
   the course that this paragraph rules out.
3. **Six trials.** Six tasks from your own work, at least two you expect to be reliable, at least two
   you expect not to be, and at least one you genuinely cannot call. For each: the request you sent,
   your written prediction, what came back, and which side of the frontier it turned out to be on,
   with the reason from the mechanism rather than from the feeling.
4. **One job, split.** Take one real piece of work and divide it into the parts that sit on each side
   of the frontier. Say what you would use a system for and what you would not, and what you would
   do about the join.
5. **One answer, checked four ways.** An answer you could not have produced yourself, taken through
   the four verification steps, with what each step caught and what it cost you in minutes. Include
   the checking budget you set before you started and say whether you kept to it.
6. **One task you have stopped.** What it is, why the doing was the point, what you will do instead,
   and what you expect that to cost you. And, separately, one task you have kept but redesigned so
   that you still do the part that builds the judgement.

**Rubric.**

| Criterion | What full marks look like |
|---|---|
| Predictions are written first | Every trial has a prediction recorded before the outcome, and at least one of them is wrong |
| The reason comes from the mechanism | Each verdict is explained by what the system is doing, not by what happened last time |
| The transcripts are real | Requests and answers are pasted from the learner's own use, including the ones that went badly |
| The split is honest | Section 4 finds a genuine join rather than assigning the whole job to one side |
| Checking is budgeted | Section 5 sets a budget from what the work is for, and reports the cost as well as the catches |
| Something was given up | Section 6 names a real task that has been stopped, not a hypothetical one |
| Dated and named | Every capability observation carries the system used and the date it was tried |
| Honest about the gap | Where the prediction was wrong, the file says so and says what the mistake was |

**The first and last rows are the course's own standards applied to the learner.** A project whose
predictions were all correct is a project whose predictions were written afterwards, and the rubric
says so out loud.

---

## Neutrality notes

This course carries `sensitive_domain: true`. The call is the institute's rather than the standards'
list: standards 3.4 names education and any recent event, and this course cannot be written without
both. **The neutrality audit is mandatory.**

- **Lesson 1 (does it help?)** is 3.1 case 2, genuinely open. Both results at full strength, scopes
  stated, and the reconciliation named as the course's own reading rather than as a finding.
- **Lesson 5 (does it reason?)** is 3.1 case 3, partly definitional. The course declines the
  question explicitly, per decision 4, and answers the actionable one.
- **Lesson 7 (is it fixable?)** is 3.1 case 2. Two named accounts, complementary, neither settled.
- **Lesson 9 (when not to)** is 3.1 case 3. What somebody should trade for convenience is a value
  question. Describe, give the evidence, do not prescribe. **And do not prescribe in the other
  direction either:** decision 6 forbids implying that declining to use one is a mistake.
- **Throughout: the course is not for or against these systems**, and it has an obvious temptation
  in each direction. NIST names over-reliance and unnecessary aversion in the same section, and that
  sentence is the course's own standard.
- **Vendors.** Anthropic's prompting guidance is used and is a vendor document. Say so once, plainly,
  in lesson 4. The institute's position on declared interests is the one `docs/SOURCE_NOTES.md`
  takes with Hormozi: state it once, do not insinuate.

---

## How many lessons, what is left out, and what comes next

**Eleven, and the number comes from the ten essentials in SOURCES plus one.** Nine of the ten map
one to one. The tenth, reading a claim, became lesson 11. The extra is lesson 1, which is not on
that list because it is not about the subject; it is the course being honest about itself before it
asks for eleven hours, which is what Digital Literacy does and what this institute does.

**What is deliberately left out.**

- **Images, audio, video, and systems that take actions on their own.** Decision 7. "Building with
  AI" at Term 20 takes them.
- **Anything about building applications**: interfaces, pricing, tokens as a billing unit, running a
  model yourself. Same course, later.
- **The ethics of training data, copyright, and the labour questions.** These are real and they are
  a different course. Lesson 10 touches what happens to *your* data and stops there. **This is a
  scope decision worth flagging to John**, because a reader may reasonably expect a course called
  Using AI Effectively to say something about whether using one is a defensible thing to do.
- **Any ranking of products.** Decision 1.
- **Fifty-four of the Prompt Report's fifty-eight techniques.** The course teaches the ones that
  follow from the mechanism and links the catalogue.

**What downstream courses will need this one to have taught.** Building with AI at Term 20 should be
able to assume the mechanism, the frontier, verification and the failure modes, and should not have
to re-teach any of them. Nothing else on the Core currently depends on this course, which is worth
knowing: if a later course wants to *use* one of these systems as a tool, this is the course that
made that safe, and it is five to nineteen terms earlier.

**One risk on length.** Lesson 8 is planned at 75 measured minutes and is the one most likely to
grow, because verification is the thinnest-written subject in the research and the course is partly
constructing it rather than reporting it. **If it passes 90 measured minutes, split it** at the
natural seam, which is between the three cheap steps and the expensive one, and give the expensive
step its own lesson on going outside the system. Do not improvise a different split.

**One gap this outline hands to the queue.** SOURCES found no study of how any of this works for a
reader with no technical background, which is exactly this course's reader: every study above ran on
consultants, developers, professionals or a mathematics class. **Lesson 1 states that gap**, in the
way Digital Literacy lesson 1 states its own, and it stays a gap.

---

## Concerns to flag

1. **Dell'Acqua is on the `unread:` line and four lessons want it.** Whoever drafts lesson 1 must
   open the paper first and move it off, or those lessons lose the jagged frontier as a citable
   source and keep it only as an idea. Both publisher copies returned 403 on 2026-09-18 and the HBS
   PDF would not extract; a library copy or the accepted manuscript is the likely route.
2. **Lesson 8 is partly original.** The four-step procedure is assembled by this outline from
   Kadavath, NIST and ordinary practice, and no source states it as a procedure. That is allowed and
   it must be labelled: the lesson says it is the course's own construction, in the way Digital
   Literacy labels its three-part reading of a con.
3. **The course's central reconciliation in lesson 1 is also the course's own.** No source says that
   the gains sit near the edge of competence and the losses sit on mastered work. It is a reading of
   two studies, it is the best available, and it must be presented as a reading.
4. **This course will date faster than anything else the institute has published**, and decision 2 is
   the containment. It is worth a note in `docs/QUEUE.md` that lesson 11 is the revision point, so a
   future session does not re-open all eleven.
