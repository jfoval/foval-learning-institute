---
title: Checking an answer you could not have produced
minutes: 100
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/using-ai-effectively/08-checking-what-you-cannot-check.mp3
objectives:
  - >-
    Apply a four-step checking procedure that does not depend on already knowing the answer, and say
    at each step what it would have caught
  - >-
    Set a checking budget from what the work will be used for, before you start checking, and hold
    to it
  - >-
    Explain why asking the system to check itself is worth something and why it cannot be the last
    step
quiz:
  - q: >-
      A trustee has a page of analysis she could not have written, and forty minutes. What should she
      do before she starts checking it?
    options:
      - Read the whole thing once for sense, so that she knows what she is checking before she checks it
      - Decide what the analysis will be used for and what being wrong would cost, and check to that
      - Ask the system how confident it is, so that she knows which parts to spend her forty minutes on
      - Start with the cheapest checks, since spending the budget efficiently is the point of having one
    answer: 1
    explain: >-
      The budget comes from the consequence rather than from the clock, and setting it first is what
      stops checking expanding to fill whatever time there is. Reading for sense is a good first move
      inside a budget and is not the decision. Asking the system where to look is a step in the
      procedure and is not the thing that comes before it. And starting cheap is right and answers
      the wrong question, since it decides the order rather than the amount.
  - q: >-
      An analyst asks the same question in two clean conversations and gets the same answer both
      times. What has he established?
    options:
      - That the system is consistent here, which is compatible with its being consistently wrong
      - That the answer is probably right, since two independent runs agreeing is what corroboration means
      - Nothing at all, because the two runs came from the same model and cannot be independent of it
      - That the question is one the system finds easy, which is a useful signal about the task itself
    answer: 0
    explain: >-
      Agreement between two runs is evidence about the system rather than about the world, and the
      same model producing the same wrong thing twice is exactly what a consistent error looks like.
      The corroboration answer imports a word that requires independent sources. The nothing-at-all
      answer overshoots, since consistency does tell you the first answer was not a stray draw. And
      the easy-question answer reads a property of the task off a sample of two.
  - q: >-
      Which of the four steps is the only one that can catch an error the system makes every time?
    options:
      - Checking the names, numbers and citations, since a consistent error still has to get those right
      - Asking for the steps and reading the seam, since a consistent error will show in the working
      - Taking it to something that is not the system, such as the document, a search or a person
      - Asking the system to review its own answer, since evaluating is easier than producing
    answer: 2
    explain: >-
      Every step that stays inside the system inherits whatever the system gets consistently wrong,
      which is why the expensive step is the only one that can break out. Checking the names and
      numbers is the best value in the procedure and will miss a fault in the argument rather than
      in the facts. Reading the seam catches a break between two claims and not a wrong premise that
      both claims share. And asking the system to review itself is inside the system by definition.
  - q: >-
      A policy officer checks every figure and date in an answer, finds them all correct, and signs
      it off. What has she not established?
    options:
      - That the figures came from the right year, which a separate check would have to establish
      - "Nothing more is needed; correct figures throughout is the strongest signal short of rereading the source"
      - That the system was not simply repeating figures she had supplied in the request herself
      - That the claim the figures are assembled into actually follows from them
    answer: 3
    explain: >-
      The checkable parts are where failures concentrate and they are not the whole answer, and an
      argument can be built out of accurate components and still not follow. The right-year answer
      names a real check that is part of checking the figures rather than something beyond it. The
      repeating answer describes something that would be easy to see. And the nothing answer treats
      the cheapest step as the whole procedure.
  - q: >-
      Why is asking the system to evaluate its own answer worth doing at all, given that it cannot be
      the last step?
    options:
      - Because a system that has produced an answer has a record of how it produced it to consult
      - Because evaluating a claim is a different and easier task than producing it, so it catches things
      - Because it costs nothing, and any check that costs nothing is worth running before the paid ones
      - Because a system asked to check itself will be more cautious than one asked to answer
    answer: 1
    explain: >-
      There is a measured result behind this: larger models are meaningfully calibrated when asked to
      judge whether a claim is true, which is a different job from generating it. What limits it is
      that the calibration degrades on unfamiliar tasks, which is why it goes in the middle of the
      procedure rather than at the end. The record answer assumes an introspection lesson 2 ruled
      out. The costs-nothing answer is true of the time and not of the risk of being reassured. And
      the more-cautious answer invents a disposition.
  - q: >-
      A ward manager gets a two-page summary of a supplier's terms. She has an hour, and the summary
      will be quoted in a paper that a committee votes on next week. Which budget sentence is the
      one this lesson asks for?
    options:
      - "This is quoted in a committee paper, so every figure and every term has to be traced to the contract"
      - "I have an hour, so I will check as much as an hour allows and mark anything I did not get to"
      - "I will check the parts I am least sure about, since those are where my own reading is weakest"
      - "The supplier wrote the terms, so the summary is the thing to check and the terms can be taken as given"
    answer: 0
    explain: >-
      A budget set from what the work will be used for names what has to be true, and this one does:
      it is going into a paper that a decision rests on, so the traceable parts get traced. The
      hour-allows sentence sets the amount from the clock, which is the thing this lesson says not to
      do. Checking where your own reading is weakest is a fact about you rather than about the
      consequence. And taking the terms as given confuses the document being summarised with the
      summary being checked.
---

Everything the course has taught you so far assumes you can tell whether an answer is any good.

Lesson 6 told you which tasks to be careful on. Lesson 7 told you what going wrong looks like. Both leave the same question standing, and it is the one that actually matters at your desk on a Tuesday.

**You asked because you could not produce the answer yourself. So how do you check it?**

If you could check it by reading it and knowing, you would not have needed to ask. That's the whole difficulty, and it's why the honest answer to it has steps in it rather than a slogan.

Four steps follow. They run cheapest first. **None of them requires you to know the answer.**

**Say plainly where the four steps come from.** They are this course's construction, not a finding and not anybody's published method.[3] They are assembled out of things that are sourced: lesson 5's three readings, lesson 3's variation between runs, one measured result about self-assessment, and ordinary practice. Use them as a working method and judge them the way you would judge any working method. If one lets something through, the useful thing to say afterwards is which step it was.

## Before the steps: how much checking does this need?

Checking expands to fill whatever time you've given it, so decide the amount before you start, and decide it from the consequence rather than from the clock.

Two questions.

**What will this be used for?** A note to yourself, a paragraph in a report somebody else signs, a figure that goes to a client, a decision that costs money.

**What does being wrong cost?** Embarrassment, an afternoon, a relationship, a regulatory problem.

Write the budget down as a sentence. "This is going in an internal update, so twenty minutes and the figures have to be right." "This is going to a client, so I am checking everything and asking Ravi to read it."

Writing it down is not about discipline. It is that **the budget decides which of the four steps you run**, and without it you will either check nothing or check until you are tired, and neither of those is a decision.

## Step one: check the parts that are independently checkable

Names. Numbers. Dates. Quotations. Citations. Section numbers. Anything with an outside referent.

These are cheap to check and they are where failures concentrate, for the reason lesson 6 gave: they are the parts of the answer that have to match something outside the request. On a plain chat window nothing in the process goes and looks. On a product with a search tool something may have gone and looked, which lesson 6's callout is careful about, and it moves particular items across the line rather than moving the line.

**This step is the best value in the procedure and it isn't sufficient**, which is worth saying in the same breath, because people who do it well often stop here. An answer can be built out of entirely accurate components and still not follow.

## Step two: ask for the steps, and read the seam

Lesson 5 gave you this and it earns its place here for a particular reason: **you don't have to be able to produce the answer to notice that step three doesn't follow from step two.**

That's what makes it usable when the material is beyond you. You aren't checking the claims. You're checking the joins, which is a much smaller job and is sometimes the whole of it.

Three readings, from lesson 5: do the steps answer the question that was asked, is each step right in itself, and does the conclusion follow from the steps. The third is the cheapest of the three, and it is the one that gets left out, because by the time you have read two sound steps the conclusion feels established.

## Step three: ask it again, cleanly, and be careful what you conclude

Lesson 3 established that two runs are two draws. That variation is usable.

Ask the same question in a **fresh conversation**, not further down the same one, and compare.

**If the two disagree, you have learned something solid**: one of them is wrong, and you have been shown exactly where to look. That is worth a great deal for the few minutes it costs.

**If they agree, you've learned much less than it feels like.** Two runs of the same model on the same question agreeing tells you the system is consistent here. A system can be consistently wrong, and a consistent error is precisely the kind this step cannot see.

This step also covers self-review, which belongs here rather than at the end, and there is a measured reason to include it at all. A 2022 study found that larger models are well calibrated on multiple-choice and true-or-false questions, and can predict the probability that their own answer is right with "encouraging performance, calibration, and scaling".[1] The paper names the models it tested and this course has not read which ones, so read it as evidence that self-assessment of this kind exists rather than as a fact about the product in front of you.

Why it should work at all is a question the study does not answer, and the reading this course offers is that **evaluating a claim is a different and easier task than producing one**. That is an inference rather than a finding, and it is worth having because it predicts where self-review will be weakest.[1]

The same study says why this cannot be the last step: models "struggle with calibration of P(IK) on new tasks", and the predictions only partially generalise.[1] P(IK) is their shorthand for the probability the model assigns to knowing the answer. So asking the system to review its own answer catches real things, on familiar ground, and quietly reassures you everywhere else.

:::predict You ask twice and get two different answers. You ask a third time as a tie-breaker and it matches the first. What have you got?
Two of three, and that isn't a vote.

Each run is a draw from the same distribution. Two out of three is a very thin sample, and it isn't a vote either, and even a clean majority would only be telling you which output is more probable, which is not the same as which is true. On a question the system is consistently wrong about, the wrong answer wins every vote you hold.

What the disagreement did tell you is where the uncertainty sits, and that is the useful part. Take the point the two answers differ on to step four. **The tie-breaker is not a check. The disagreement was.**
:::

## Step four: take it to something that is not the system

A search engine. The actual document. The regulation itself. A colleague who knows.

This is the expensive step and it's the only one that can catch an error the system makes every time, because every other step stays inside the system and inherits whatever the system consistently gets wrong.

That's why the budget comes first. Step four is where the time goes, and the budget is what tells you whether this piece of work has earned it.

## Two answers, run through the procedure

Both cases below are constructed, and so is every figure in them. The subject matter is plausible and none of it is advice. The figures exist so that you can see which step catches what, which is a thing you cannot see in a case described from the outside.

### The short one: three clean steps and a wrong answer

A school business manager asks whether a particular equipment purchase can be spread across two budget years. Three paragraphs come back, confident, with one figure and a named policy document. It's the sort of answer nobody would think to doubt.

**Step one, four minutes.** The document exists under that name. The figure, a £10,000 capital threshold, is in it. Clean.

**Step two, three minutes.** She asks for the claims in order. Three of them: this equipment counts as capital; capital purchases above the threshold may be spread; therefore this purchase may be spread. Read the joins. The second claim does the work and the third follows from the first two. Clean.

**Step three, two minutes.** Fresh conversation, same question, same answer, same document. Clean.

**Step four, twenty minutes.** She rings the finance office. That policy was replaced eight months ago, and the rule now runs the other way.

**Nothing inside the system could have caught this**, because the system was not confused about anything. It was consistent, and it was consistently working from a document that had been superseded. This is the case that justifies the expensive step, and it is the reason the expensive step exists.

### The long one: all four steps, each catching something different

A community transport charity has been told it may be able to reclaim VAT on a minibus purchase. The finance volunteer asks, and gets back four paragraphs: confident, specific, with two figures, a reference to a VAT notice by number, and a conclusion that the charity can reclaim the VAT if the vehicle is used for a qualifying purpose.

**She sets the budget first.** This decides whether a £34,000 purchase goes ahead this quarter. Being wrong costs real money and an apology to the board, so everything gets checked, and nothing goes to the board until somebody outside has confirmed it.

**Step one, eleven minutes.** The VAT notice exists and carries that number. One of the two figures, a nine-seat threshold, is in the notice where the answer says it is. The other, a figure of 60% put against business use, is nowhere in the notice at all. That is one finding already, and it is exactly the sort step one is for.

**Step two, six minutes.** She asks it to set out the claims it is arguing from, in order. Four come back:

1. The charity is a relevant body for this relief.
2. A vehicle with nine or more seats is a qualifying vehicle.
3. The relief applies where a qualifying vehicle is bought by a relevant body.
4. Therefore this charity can reclaim on this minibus.

Each one reads soundly. Now read the joins. Three follows from one and two. Four follows from three. **The seam is inside claim two**, which asserts that the seat count is what makes a vehicle qualify and offers nothing for it, while the answer's own prose had said the qualifying test was about *use*. She doesn't need to know any VAT law to see that the load-bearing claim was asserted rather than derived. That is the point of this step.

**Step three, four minutes.** A fresh conversation, same question. The second answer reaches the same conclusion, cites the same notice, and gives a different percentage. Consistent on the conclusion, inconsistent on a figure. **That does not tell her which percentage is right.** It tells her that the percentage is where the uncertainty sits, which is the same place step one had already pointed, and she carries it into step four.

**Step four, an afternoon.** She reads the section of the notice the answer pointed at, and finds that the qualifying test is about how the vehicle is *used*, which is what claim two had quietly replaced with a seat count. Then she rings the charity's accountant, who says the answer is broadly right in direction, that the percentage is wrong in a way that changes the sum, and that there is a further condition about selling the vehicle on within a few years that no answer mentioned at all.

**What each step caught.** One: a figure that is in the answer and not in the notice. Two: a claim asserted rather than derived, which turned out to be the same fault seen from inside. Three: that the figure was unstable, which pointed back at step one's finding. Four: the condition nothing inside the system was ever going to produce, because it was consistently absent from every answer.

| Step | What it cost her | What it caught |
|---|---|---|
| One: the checkable parts | 11 minutes | A figure in the answer that is not in the notice |
| Two: the claims and their joins | 6 minutes | A load-bearing claim asserted rather than derived |
| Three: a second clean run | 4 minutes | That the figure was unstable, pointing back at step one |
| Four: outside the system | An afternoon | A condition absent from every answer |

**Notice that steps two and four found the same thing twice**, from opposite sides. Step two could see that a claim had no support under it. Only step four could say what the right claim was. That is the relationship between the cheap steps and the expensive one in one sentence: the cheap ones tell you where to spend the expensive one.

**And the honest accounting.** The whole thing took an afternoon, and writing it from scratch would have taken her a week she hasn't got. The answer was worth asking for and it was not worth trusting, and those are two judgements rather than one.

:::checkpoint Suppose her budget had been "this is for my own understanding, twenty minutes". Which steps does she run, and what is she knowingly accepting?
Steps one and two, and probably not three.

Step one because it is eleven minutes and catches the figure that is not in the notice, which is the failure most likely to embarrass her if she repeats it to somebody. Step two because it is six minutes and she would rather know the reasoning has a gap in it than carry a conclusion she cannot support.

What she accepts is the whole of step four's finding: the condition nobody mentioned. For her own understanding that's a reasonable trade, as long as she knows she's making it and doesn't treat what she has as settled. **Writing the budget down is what makes that a decision rather than a thing that happened.**

The trap is the one in the middle. If she runs step three and gets agreement, she may feel she has checked more than she has, and stop earlier than she would have without it. A step that produces false comfort is worth less than no step at all, which is why this lesson keeps saying what agreement does and doesn't mean.
:::

## The standard to check against

Verification is easier when you know what you are aiming at, and there is a definition worth having. NIST's generative AI profile quotes a definition of high-integrity information as information that "distinguishes fact from fiction, opinion, and inference; acknowledges uncertainties; and is transparent about its level of vetting", and that "can be linked to the original source(s) with appropriate evidence".[2] NIST took it from elsewhere rather than writing it, which is part of why it is useful here: it was not written about answers from these systems at all.

Read it as a checklist for the answer that's in front of you.

Does it distinguish what is established from what is inferred? Does it acknowledge where it's uncertain, or is everything in the same confident register, which lesson 7 said is the default? Can each claim be linked to a source, and does that source say it?

An answer that fails those tests is not necessarily wrong. What it is is an answer whose vetting you now have to supply yourself, which is exactly what the four steps are.

## What people get wrong

**"If I cannot check it, I cannot use it."** Every step above works without your knowing the answer, which is the whole of what they're for. The useful question is almost never whether you can check it. It is how much checking this particular piece of work has earned.

**"Asking it to double-check is checking."** It is step three of four. It catches real things on familiar ground, and it stays inside the system, so treating it as the end of the procedure leaves the whole of step four undone.

**"Two agreeing answers confirm each other."** They are two draws from the same distribution. Agreement is a fact about the system and it isn't one about the world.

**"Checking takes as long as doing it, so there is no point."** Exhaustive checking often does. Checking to a budget usually doesn't, and the difference between those two is why the budget comes first.

**"The parts I could check were right, so the rest is probably right."** The parts you can check and the argument they are assembled into are different objects, and step two exists because an answer can be accurate throughout and still not follow.

## Practice

:::exercise Run all four on something real
Take 45 minutes, and expect step four to run past it if the budget calls for step four at all.

Use a real answer you actually need, on something you could not have produced yourself.

1. **Write the budget first**, as a sentence, before you look at the answer again. What is it for, what does being wrong cost, how much checking has it earned. **Then predict, in one more sentence, which step you think will catch the most and how many minutes the whole thing will take.** That prediction is what you will compare against at the end.

2. **Step one.** List every name, number, date, quotation and citation. Check each. Write down what you found and how long it took.

3. **Step two.** Ask for the claims in order. Run the three readings. Write down which reading found what.

4. **Step three.** Fresh conversation, same question. Record whether the two agree, and **write one sentence on what that does and does not tell you.** If you can't write that sentence, reread the third section above.

5. **Step four**, only if the budget calls for it. Record what it cost and what it caught.

6. **Then the accounting**, which is the part to keep. Set it beside the prediction you wrote in step 1: which step actually caught the most, how long the whole thing actually took, how long doing it yourself would have taken, and what each step caught that the earlier ones did not. **The gap between the prediction and the accounting is the finding**, and it is usually about step four.
:::

:::exercise Find a consistent error
Take 20 minutes, and expect to fail, because failing is informative here.

Pick something in your own field where you know the standard answer is subtly wrong, out of date, or commonly misstated. Most fields have one.

**Predict first, in writing:** how many of three fresh conversations you expect to get it wrong.

Then ask about it in three fresh conversations, and write the count beside your prediction.

If you get the wrong answer all three times, you have a worked example of the thing steps one to three cannot catch, in your own subject, which is worth more than any example I could give you.

If you get it right, note that too, and note what the question was, because the interesting pattern is which kinds of commonly-misstated thing these systems get right. Either way, the gap between your predicted count and the real one is the part to keep.
:::

## Connections

**Back.** Lesson 3 gave you the variation this lesson's third step uses, and the warning about what agreement means. Lesson 5 gave you the steps and the three readings, and this is where they are put to work on material beyond you. Lesson 6 told you which tasks land you here, and lesson 7 told you what you are looking for.

**Forward.** Lesson 9 is the other half of the decision. This lesson tells you what checking costs, and that cost belongs in the calculation about whether to hand a task over at all. Lesson 10 is about what you hand over of a different kind. And lesson 11 turns the same four steps on claims about these systems rather than on answers from them.

## Go deeper

- **Kadavath and colleagues, ["Language Models (Mostly) Know What They Know"](https://arxiv.org/abs/2207.05221)** (2022). This course has read the abstract and not the paper. Read the abstract for the parenthesis in the title, which is the whole argument of step three in one word.
- **[NIST AI 600-1](https://doi.org/10.6028/NIST.AI.600-1)**, section 2.8 on information integrity. The definition quoted above is the best short standard to check an answer against, and it wasn't written about AI answers in particular, which is part of why it works.

## Sources

1. Saurav Kadavath and colleagues, ["Language Models (Mostly) Know What They Know"](https://arxiv.org/abs/2207.05221), arXiv 2207.05221, 2022. **Abstract read; the paper was not opened.** Supports: the finding that larger models are calibrated on multiple-choice and true-or-false questions, the quoted phrase about performance, calibration and scaling, and the stated limitation that calibration struggles on new tasks and generalises only partially. **The claim that evaluating is an easier task than producing is this course's reading of why that result holds, rather than a claim the abstract makes.**
2. [NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1), July 2024, section 2.8. Read in part. Supports: the quoted definition of high-integrity information. NIST takes that definition from a 2022 White House roadmap, which this course has not opened.
3. **The four-step procedure itself is this course's construction**, and the body says so where the steps are introduced. No source in `research/SOURCES.md` states it as a procedure. It is assembled from lesson 5's steps, lesson 3's variation, the calibration result in source 1, and ordinary practice. Treat it as a working method rather than as a finding, and if it fails you, the thing to report is which step let something through.
