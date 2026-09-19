---
title: Confident and wrong
minutes: 100
objectives:
  - >-
    Explain in two different ways why a system like this produces confident false answers, and say
    what each explanation implies about whether it can be fixed
  - >-
    Tell an invented source from a real source cited for something it does not say, and say why the
    second is harder to catch
  - >-
    State what giving one of these systems a search tool does and does not do to the problem, citing
    the measurement rather than the argument
quiz:
  - q: >-
      A researcher asks for support for a claim and gets three references. She searches all three:
      two exist and one does not. She drops the one that does not exist and builds her paragraph on
      the other two. What is wrong with stopping there?
    options:
      - Nothing is wrong, since searching is the only check available to somebody outside the field she is writing about
      - She has run the first of the two checks on all three references, and has not run the second on either survivor
      - She should have asked the system which of the three it was most confident about before she went and searched for any of them
      - Three references is too thin a base for a claim of any size, so the number she started from was the real problem
    answer: 1
    explain: >-
      Existing and supporting are separate properties, and she has established the first for two
      references and the second for none. The nothing-is-wrong answer treats a cheap check as the
      only one there is. Asking the system which it is most confident about runs the question back
      through the thing being checked, which lesson 3 separated from truth. And the number of
      references is a fact about the shape of the answer rather than about its grounding.
  - q: >-
      Two explanations of confident false answers: one says they follow from a design that
      approximates the shape of its training data, and one says training and scoring reward guessing
      over admitting ignorance. What is the honest thing to say about the pair?
    options:
      - They are rivals, and the evidence currently favours the design account over the incentive one
      - They are the same account in different words, since the incentives are themselves part of the design
      - "They are complementary and imply different things: one a floor, the other a lever nobody has pulled"
      - The incentive account is the newer of the two, so it supersedes the design account for anything current
    answer: 2
    explain: >-
      The two are compatible, and the reason to keep both is that they answer "will this be fixed"
      differently, which is the question a reader actually has. Calling them rivals imports a
      contest that neither set of authors is running. Calling them the same account loses the
      distinction that makes the pair worth teaching. And treating the newer one as superseding is
      a habit worth breaking in a field this young.
  - q: >-
      A firm buys a research tool that searches a real document set before answering, and is told
      this removes the problem. What does the measured evidence say?
    options:
      - It reduces the rate against a general chatbot and leaves a substantial one, measured at 17% to 33% in 2024
      - It removes it, which is why professional tools are built that way rather than as plain chatbots of the ordinary kind
      - It makes no difference at all, since the answer is still produced rather than retrieved from anywhere
      - It cannot be measured from outside, because the tools are closed and their makers do not publish rates
    answer: 0
    explain: >-
      Both halves matter and most writing carries only one. The reduction is real and the remainder
      is large enough to change how the tool should be used. The removal answer is the vendors' claim
      and is what the study was run to test. The no-difference answer overcorrects. And the
      cannot-be-measured answer is contradicted by the study itself, which was preregistered, run from
      outside the companies, and published with the rates in it.
  - q: >-
      Somebody suggests adding "do not make anything up" to every request. On what this lesson says,
      what is the best response?
    options:
      - It is the single most effective habit available to an ordinary user, and it costs nothing at all to adopt
      - It cannot help in principle, because an instruction inside the request has no effect on what gets produced
      - It helps on factual questions and hurts on creative ones, so the thing to do is to use it selectively
      - It may or may not help on a given system, and it does not touch what produces the problem
    answer: 3
    explain: >-
      The instruction sits in the request and the problem sits upstream of it, in how the system
      produces text and in what its training and scoring reward. So this is not the lever, and
      whether it moves anything at all on your product is a question this course has no measurement
      for. The most-effective answer promises what nobody has shown. The cannot-help answer
      overstates, since instructions do change output. And the selective answer invents a pattern.
  - q: >-
      A reader concludes that since confidence is not a signal, the right approach is to distrust
      fluent answers and prefer hedged ones. What has gone wrong?
    options:
      - Nothing has gone wrong; hedged answers get produced when the system is less certain, so they carry real information
      - Hedging is a property of the text in the same way fluency is, so the reader has swapped one bad signal for another
      - Hedged answers turn out to be wrong more often, so the reader has inverted a rule that was right to begin with
      - The rule holds for questions of fact and fails for questions of opinion, so it needs a qualifier rather than dropping
    answer: 1
    explain: >-
      Both fluency and hedging are features of produced text rather than reports on anything, so
      reading either as a confidence meter reads a non-signal as a signal. The
      information answer assumes a link nobody has established for a chat window. The usually-wrong
      answer invents a correlation. And the facts-and-opinions answer rescues a rule that was never
      about the subject matter.
  - q: >-
      Which pair of questions is the most efficient check on an answer that carries three references?
    options:
      - Are the references recent, and are they from sources you would recognise as reputable ones
      - Are there enough references for a claim of this size, and do they come from more than one author
      - Do the references exist, and does each one say what it is cited as saying
      - Does the system repeat the same three when asked again, and does it stand by them when challenged
    answer: 2
    explain: >-
      Those two questions map onto the two failures exactly, and the second is the one that gets
      skipped, because the first has just passed and passing feels like finishing. Recency and reputation are real quality signals about
      sources and say nothing about whether this one supports this claim. Asking the system again
      tests consistency rather than truth, which lesson 3 separated. And counting references measures
      the shape of the answer rather than its grounding.
---

The word everybody uses is **hallucination**. This course will use it once, here, and then stop.

The objection is in the standards body's own profile, recorded in a footnote: some commenters have noted that the terms "hallucination" and "fabrication" "anthropomorphize GAI, which itself is a risk related to GAI systems as it can inappropriately attribute human characteristics to non-human entities".[1] That objection is right, and the replacement NIST itself uses, "confabulation", has the same problem in a longer word.

So the course says what it means instead: **a confident false answer**, or **a source cited for something it does not say**. Those are plainer and they name two different things, which turns out to matter.

You need the word once because everybody else uses it. You don't need it again.

## Two accounts, and they answer different questions

Ask why these systems produce confident false answers and you will be given one of two explanations. They are usually offered as rivals. In fact they are compatible, and the reason to hold both is that they disagree about whether the problem can be fixed.

**The first is structural.** NIST's profile puts it as the design working rather than failing. In NIST's word, confabulations "are a natural result of the way generative models are designed: they generate outputs that approximate the statistical distribution of their training data".[1] Lesson 2 built its whole argument on that sentence. On this account there's a floor, because producing text that fits the shape of writing will sometimes produce text that fits the shape of true writing without being true.

NIST also says where it bites hardest, and the sentence is worth having because it predicts your own experience: the dynamic "is particularly relevant when it comes to open-ended prompts for long-form responses and in domains which require highly contextual and/or domain expertise".[1] Open-ended, long, and specialist. That's most of the work anybody would want help with.

**The second is about incentives**, and it was posted in September 2025 by Kalai, Nachum, Vempala and Zhang. Their argument is that these systems guess because guessing is rewarded: training and evaluation score a confident wrong answer and an admission of ignorance the same way, which is to say at zero, so there's never a reason to say "I don't know".[2] Their own comparison is to a student sitting an exam with no negative marking, who should fill in every box.

What they propose follows from that, and it is not a change to how the systems are built. It is a change to how the dominant benchmarks score answers, so that admitting uncertainty is worth something.[2]

**Now put the two side by side.** The structural account implies a floor that better engineering lowers and does not remove. The incentive account implies a lever that nobody has pulled. So the honest answer to "will this be fixed" is that nobody knows, and that's a more useful answer than either confident version, because it tells you to keep checking without telling you to despair.

:::predict A vendor announces that its next model "largely solves hallucination". On the two accounts above, what would have to be true for that to be more than marketing, and what would you look for?
On the structural account, nothing a vendor does removes the floor, so "largely solves" would have to mean a measured rate on a named benchmark rather than an absence.

On the incentive account, something specific would have to have changed about how the model was trained or scored, in a direction that makes abstaining worth something. That's a claim you could check: what did they change, and what does the model now do when it has no answer?

So the thing to look for is the same in both cases. A rate, a task, a date, and a comparison. If what you're given is an adjective, you've been given marketing, and lesson 11 is about reading these claims properly.
:::

## Two failures, and the second is the one that gets people

The forms this takes aren't all the same, and telling them apart changes what you check.

**An invented source.** An author who may exist, a journal that does exist, a title in the right style for the field, a year, a volume. Lesson 2 explained why it looks so right. A citation has a shape, that shape is all over the material these systems are built from, and producing a well-formed citation is exactly what a system producing well-shaped text will do.

Worked, with the simplest case there is. A teacher asks for research on whether handwriting notes beats typing them, and gets, among others: *Reynolds, C. and Oduya, T., "Encoding Effects of Longhand and Keyboard Note-Taking", Journal of Educational Psychology, 2019, 111(4), 612 to 627.* Every part of that is the right shape. The journal is real, the volume is plausible for the year, the page range is the right length for an article, and the title is written the way titles in that field are written.

The check takes forty seconds, and it's the cheapest thing in this lesson. Search the title. Search the authors. Search the journal's own index for volume 111. Nothing. **The whole reference fails at the first question, which is why this kind is annoying rather than dangerous.** You lose a minute and you haven't lost anything else.

**A real source cited for something it does not say.** The paper exists. The section exists. You look it up, confirm it is real, and stop, because everything you thought to check has passed.

Worked, with a case that gets all the way through. A parish clerk asks how much notice the council has to give of an extraordinary meeting. The answer is fluent, it is about the right length, and it names an Act and a section.

She checks the way anybody sensible checks. The Act exists. The section number exists inside it. Two questions, two clean answers, and at this point she's done more than the checking most answers get.

Then she opens the section, and it is about something else. It is in the right Act, it is in roughly the right area of the right Act, and it does not say what it was cited as saying.

**Notice what caught it.** Not searching, which passed. Not checking that the section number was real, which passed. Only reading the section. Every check that was cheap came back clean, and the only check that worked was the one that cost her ten minutes and a trip to the legislation site.

That is why this is the one that ends up in published work, and the evaluation in the next section counts the two separately for exactly that reason.

NIST names a third member of the same family, which lesson 5 met: outputs "may also include confabulated logic or citations that purport to justify or explain the system's answer, which may further mislead humans into inappropriately trusting the system's output".[1] Reasoning that supports an answer, produced the same way as the answer.

**So the check is two questions rather than one.** Does this source exist? And does it say what it is being cited as saying? The first is cheap and the second is not, which is a good reason to expect the second to be skipped.

## What happens when you connect it to real documents

Every reader has the same objection by now, and it's a fair one. *Mine searches real documents before it answers. Surely that fixes it.*

It's been measured, and the measurement is worth more than any argument either way.

In 2024 a research team ran the first preregistered evaluation of commercial legal research tools: products built for professionals, connected to real case law, sold on the claim that the problem had been dealt with. The providers had claimed that retrieval "eliminat[es]" or "avoid[s]" hallucinations and guarantees "hallucination-free" citations.[3]

The result: "while hallucinations are reduced relative to general-purpose chatbots (GPT-4), we find that the AI research tools made by LexisNexis (Lexis+ AI) and Thomson Reuters (Westlaw AI-Assisted Research and Ask Practical Law AI) each hallucinate between 17% and 33% of the time."[3]

Both halves of that sentence matter, and a summary that carries one of them is not reporting the study.

**The reduction is real.** Connecting a system to a document set does help, measurably, against a general chatbot. Anybody telling you retrieval does nothing is wrong.

**And between 17% and 33% is not "solved".** On tools sold to lawyers, tested in 2024, that is between one answer in six and one answer in three.

The per-tool figures are worth having because they vary so much: Lexis+ AI answered 65% of queries accurately and was the best of the three; Westlaw's AI-Assisted Research was accurate 42% of the time; Ask Practical Law AI gave incomplete answers on more than 60% of queries.[3] Three products built for the same job, by serious companies, differing by more than twenty points.

Those figures belong to three products as they stood on the days they were tested, and none of them is a standing fact about any of those products now. The convention this course applies to a vendor's claim applies to a measurement of one: it carries its date, and the date is where it stops.

And note how the study had to define its terms to get a number at all. It counted "a response that contains either incorrect information or a false assertion that a source supports a proposition".[3] Two failures, separated, which is the distinction the previous section drew and is why it is worth drawing.

:::checkpoint Those figures are from 2024, on legal tools. What can you carry from them to your own product today, and what can you not?
Carry the shape: retrieval reduces and does not remove, and the remainder was large enough on professional products that a professional had to keep checking.

Carry the definition: two failures rather than one, and the second needs its own check.

Don't carry the numbers. 17% to 33% is a measurement of three named products on a particular task in a particular year, and your product isn't one of them. If somebody quotes those figures at you about a different system, they have done the thing this course keeps warning about.

And notice the one thing the study settles beyond its own scope. The vendors' claims were checkable and were checked, and they didn't survive. That is a fact about claims of that kind rather than about those three companies, and it is the reason lesson 11 exists.
:::

## Why a confident tone tells you nothing, and the careful version of that

NIST says plainly where the damage comes from: "Risks from confabulations may arise when users believe false content ... leading users to act upon or promote the false information."[1] The clause the ellipsis covers names the cause, and it is the confident nature of the response.

Fluency is a property of the text. That was lesson 6's sentence about benchmark scores and it transfers intact: it is not a measurement of anything, and it is not a report on the system's state. Digital Literacy made the same point about a padlock: a signal that costs nothing to produce cannot tell you what you wanted to know, and a well-shaped confident sentence costs a system that produces well-shaped text exactly nothing.

**Don't take that further than it goes, though, because there's a careful result here and it cuts both ways.** A 2022 study titled "Language Models (Mostly) Know What They Know" found that larger models are well calibrated on multiple-choice and true-or-false questions, and can predict the probability that their own answer is right with "encouraging performance, calibration, and scaling".[4] The paper names the models it tested and this course has not read which ones, so take the finding as evidence that self-assessment of this kind exists rather than as a fact about the product in front of you.

The parenthesis in that title is doing work, and so is the limitation the authors state: models "struggle with calibration of P(IK) on new tasks", and the predictions only partially generalise.[4]

So the honest position is neither of the two you'll hear. "It has no idea whether it's right" is wrong, and so is "just ask it how confident it is". **On the models that study tested, self-assessment was real, better on familiar closed-form questions than on unfamiliar open ones, and no substitute for checking.** Lesson 8 puts it to work as one step among four, which is the right weight to give it.

## Five things people believe about this

**"It is a bug and they will fix it."** Two accounts, one implying a floor and one implying an untried lever, and nobody knows. A vendor saying otherwise is making a claim you can ask for a number about.

**"It only happens on obscure questions."** NIST's own sentence says the dynamic is particularly relevant on open-ended prompts, long-form responses, and specialist domains.[1] Those are not the obscure corners of a subject. They are its depth, and they describe the work you most want help with.

**"If it cites a source, the source is real."** Sometimes, and the important half is the other question: if the source is real, does it say what it is cited as saying? The legal evaluation had to count both kinds to get a number at all, precisely because both happen.[3]

**"A confident tone means firm ground."** Fluency is a feature of produced text. So is hedging. A reader who learns to distrust the confident answers and trust the careful-sounding ones has changed which non-signal they are reading, and not much else.

**"Telling it not to make things up helps."** The instruction is in the request, and on both accounts above the problem is upstream of the request. Whether it does anything at all on your product is a measurement this course doesn't have. So the honest answer is that this is not the lever, and buying a sense of safety with it is buying nothing.

## Practice

:::exercise The citation exercise, back from lesson 2
Take 30 minutes. Lesson 2 promised this one would come back, so start by finding what you wrote then: three references, a prediction of how many would be real, and your sorting of what each turned out to be.

1. **Name the three kinds properly now.** Against the result you already have, label each reference: invented, real and supporting, or real and cited for something it does not say. Lesson 2 asked you to sort them before you had names for them.

2. **Look at which kind you under-predicted.** That is the finding, and it is usually the middle one.

3. Now the half lesson 2 did not teach. Take the references that were real and supporting, and **read enough of each source to be sure it says what it was cited as saying**. Not the title, not the abstract. The passage.

4. Write down how many survived step 3, and how long step 3 took.

If you did not do lesson 2's version, run it first: ask for three references on something specific and slightly obscure in your subject, predict how many will be real, and check all three by finding the sources rather than by asking the system. Then do steps 1 to 4.

The number from step 4 is the point. Keep it, because lesson 8 builds a checking procedure and asks you to budget for exactly that.
:::

:::exercise Find the harder failure on purpose
Take 20 minutes, and treat it as a hunt rather than a test.

1. **Predict first, in writing.** Pick a document, a paper or a report you know very well, and before you ask for anything, write down two numbers: whether you expect to find a true sentence resting on support that does not hold it up, and how many minutes you expect the hunt to take.

2. Ask for a summary of it.

3. Read the summary looking for one specific thing: **a sentence that is true, attached to a citation or a passage that does not support it.** Not a false claim, which you will spot easily. A true claim with the wrong support under it.

4. Stop the clock and **write the gap down**: predicted against found, predicted minutes against actual minutes.

The gap is the deliverable, not the catch. If you found one, note what made it survive your first reading. If you did not, the minutes you spent are the real cost of this kind of checking, and lesson 8 asks you to budget for that number.
:::

## Connections

**Back.** Lesson 2 gave you the mechanism this whole lesson rests on, and the explanation of why an invented citation looks right. Lesson 5 met the same thing from the other side, as printed steps you can check. Lesson 6 told you which tasks put you here in the first place, and the answer, the ones whose answers have to match something outside the request, is exactly where this lesson's failures live.

**Forward.** Lesson 8 is the procedure, and it is the lesson this one exists to make necessary. Lesson 11 takes the vendor claims this lesson brushes against and teaches you to read them properly.

## Go deeper

- **[NIST AI 600-1](https://doi.org/10.6028/NIST.AI.600-1)**, section 2.2. Short, and every sentence this lesson quotes comes from it. Worth reading whole, because it is from a standards body rather than from somebody selling or attacking a product.
- **Kalai, Nachum, Vempala and Zhang, ["Why Language Models Hallucinate"](https://arxiv.org/abs/2509.04664)** (2025). This course has read the abstract and not the paper. The exam analogy is in the abstract, and it is the part of the argument this course found most useful.
- **Magesh and colleagues, ["Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools"](https://doi.org/10.1111/jels.12413)** (2025). Open access. This course read the abstract, the introduction and the results summary, and the introduction is the part to start with: it sets the vendors' claims out in their own words before testing any of them.

## Sources

1. [NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1), July 2024, section 2.2. Read in part. Supports: the quoted objection to the word "hallucination" from NIST's own footnote; the "natural result of the way generative models are designed" sentence; the sentence about open-ended prompts, long-form responses and domains requiring contextual or domain expertise; the sentence about users believing false content due to the confident nature of the response; and the sentence about confabulated logic and citations.
2. Adam Tauman Kalai, Ofir Nachum, Santosh S. Vempala and Edwin Zhang, ["Why Language Models Hallucinate"](https://arxiv.org/abs/2509.04664), arXiv 2509.04664, September 2025. **Abstract read; the paper was not opened.** Supports: the incentive argument, the exam comparison, and the proposal to change how dominant benchmarks score rather than to add another benchmark. **This is one author group's argument and is not a consensus**, and the lesson presents it as an account alongside NIST's rather than as a finding.
3. Varun Magesh, Faiz Surani, Matthew Dahl, Mirac Suzgun, Christopher D. Manning and Daniel E. Ho, ["Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools"](https://doi.org/10.1111/jels.12413), *Journal of Empirical Legal Studies*, 2025. Read in part: the abstract, the introduction and the results summary. Supports: the quoted vendor claims; the quoted 17% to 33% finding with the reduction against GPT-4; the per-tool figures of 65%, 42% and more than 60% incomplete; and the quoted definition of a hallucination as either incorrect information or a false assertion that a source supports a proposition. **Tools were tested in 2024 and the figures carry that date.**
4. Saurav Kadavath and colleagues, ["Language Models (Mostly) Know What They Know"](https://arxiv.org/abs/2207.05221), arXiv 2207.05221, 2022. **Abstract read; the paper was not opened.** Supports: the calibration finding on multiple-choice and true-or-false questions, the quoted phrase about performance, calibration and scaling, and the stated limitation that calibration struggles on new tasks and generalises only partially.
