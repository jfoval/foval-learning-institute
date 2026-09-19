---
title: The session, and what it can see
minutes: 115
objectives:
  - >-
    Say what the system can see when it answers, and explain from the mechanism why the same
    question can produce different answers
  - >-
    Find out, for the product you actually use, whether anything you type is kept between
    conversations, and write down where you found out and when
  - >-
    Explain what a correction does and does not change, and decide from that when to start again
    rather than keep correcting
quiz:
  - q: >-
      A teacher tests a marking rubric by asking a system to apply it to one essay. The result is
      good, so she rolls the rubric out to her department. What has she not established, and why?
    options:
      - Nothing; one clean test of a rubric on a real essay is exactly what a trial should be
      - That it works on a second essay, because rubrics are written for a genre and not for a text
      - That the result was typical, because the same request does not reliably give the same answer
      - That her colleagues will phrase the request as carefully as she did when they come to use it
    answer: 2
    explain: >-
      Each next word is sampled from a distribution rather than always taken from the top of it, so
      one run is one draw. Running it three times would have told her whether the good result was
      the rule or the lucky one. The second-essay answer names a real limitation of a one-essay trial
      and not the one the mechanism explains. The phrasing answer is a good point about rollout that
      has nothing to do with what she established here. And the nothing-is-wrong answer treats a
      single draw as a trial.
  - q: >-
      Somebody corrects a system four times in one long conversation about a spreadsheet, and it
      keeps making the same mistake in new places. What is the likeliest useful move?
    options:
      - Correct it a fifth time but more firmly, so the instruction carries more weight than the earlier text
      - Start a fresh conversation with the correction written into the request from the beginning
      - Accept that this product has learned the wrong thing and try a different product instead
      - Break the spreadsheet into halves and run the same conversation twice, once on each half
    answer: 1
    explain: >-
      Everything in the conversation is in front of the system at once, including four rounds of the
      mistake it is being asked not to make, so a fresh start puts the instruction somewhere nothing
      competes with it. **Note what that reasoning is:** the measured finding is about position
      inside a long input, and applying it to a long conversation is this course's inference, which
      the body flags. The firmer correction adds a fifth round to the same pile. The change of
      product assumes learning that did not happen, since nothing persisted anywhere. And splitting
      the spreadsheet treats a conversation problem as a size problem.
  - q: >-
      A reader asks whether these systems remember what you told them last month. What is the honest
      answer?
    options:
      - No, and anybody who thinks otherwise has confused training with conversation
      - Yes, because the conversation is stored on the company's servers and can be looked at again
      - Only if you paid for it, since retained memory is what the paid plans are actually selling
      - It depends on the product, so the useful move is to go and read what yours says it does
    answer: 3
    explain: >-
      Nothing in the machinery requires memory between conversations and nothing forbids a product
      from adding it, and plenty have. So the answer is a fact about the product rather than about
      the technology, and the only reliable way to have it is to read the product's own page and
      write down the date. The flat no was right about most products a few years ago and is a
      confident wrong answer now. The servers answer confuses what is stored with what is put in
      front of the system. And the paid-plan answer invents a rule.
  - q: >-
      A researcher pastes a forty-page report and asks a question whose answer is on page twenty-one.
      What does the measured evidence say about where she should have put that page?
    options:
      - Near the beginning or the end, because performance degrades on material in the middle of long inputs
      - It makes no difference, because the whole report is equally available once it is in the window
      - The middle is best, because material there is surrounded on both sides by supporting context
      - Page twenty-one is fine; what matters is whether the report exceeded the window at all
    answer: 0
    explain: >-
      Position within a long input changes how well the information is used, and the degradation in
      the middle was found even in models built for long contexts. The equal-availability answer is
      what everybody assumes and is what the study was run to test. The middle-is-best answer invents
      a mechanism. And the exceeding-the-window answer names the one thing that would certainly matter
      while treating everything short of it as safe, which is the belief the study contradicts.
  - q: >-
      A developer wants a system's answers to be identical every time, for a process that has to be
      auditable. On the account in this lesson, what would that actually cost him?
    options:
      - Nothing; identical answers are what a well-specified request produces in any case
      - The text would come out noticeably more generic and repetitive, which is why nobody ships it that way
      - It cannot be had at all, since the variation is added deliberately and cannot be removed
      - The answers would become less accurate, since variety is what allows a better option to surface
    answer: 1
    explain: >-
      Always taking the most probable next word is deterministic and is precisely what these systems
      avoid, because what it produces reads as generic and repetitive. So the trade he is asking for
      is real and it has a price, and the price is the thing he may not have priced. The
      well-specified-request answer confuses clarity with determinism. The cannot-be-had answer
      overstates it, since the behaviour is a setting rather than a law. And the accuracy answer
      inverts the trade: sticking to the most probable words is the more factual end of it.
  - q: >-
      Which pair of habits follows from what this lesson says, for somebody using one of these
      systems for real work?
    options:
      - Keep one long conversation per project, and correct it whenever it goes wrong
      - Ask once and carefully, since a well-built request makes a second attempt unnecessary
      - Ask many times and take the answer that appears most often, since agreement is the test
      - Ask twice before trusting a surprising answer, and start again rather than correct repeatedly
    answer: 3
    explain: >-
      Asking twice uses the variability instead of being surprised by it, and starting again removes
      the pile of wrong turns a long correction thread builds up. The one-long-conversation habit is
      what most people do and it accumulates exactly what a fresh start clears. The ask-once habit
      treats a single draw as reliable. And taking the commonest answer sounds rigorous but tests
      agreement rather than truth, which is a distinction lesson 8 takes properly.
---

You can put the same question to one of these systems twice and get two different answers. Most people notice this, decide it's a glitch, and stop thinking about it.

It isn't a glitch. It's a decision somebody made on purpose, and once you know why it was made you can turn asking twice into a technique instead of a nuisance.

That's one of three things in this lesson, and all three are about the same question: **what can the system actually see when it answers you?**

## Everything in front of it, and nothing else

Lesson 2 gave you the core paragraph and flagged its middle sentence as this lesson's business: each piece of text the system produces is chosen given **everything in front of it**. Not everything it has ever read, which is finished and folded into the model. Not everything you've ever typed. Everything in front of it, right now.

The textbook's version is precise about the shape of that. When the model is working on a piece of text, it "has access to `xi` as well as the representations of all the prior tokens in the context window ... but no tokens after `i`."[1] The name for that span is the **context window**.

How big is it? The same chapter gives two figures, and the difference between them is instructive rather than a contradiction. The passage defining the mechanism says context windows "consist of thousands of tokens", which is the scale at which the idea was described. The chapter's own summary, characterising transformer language models in general in that draft, says they "have a wide context window (hundreds of thousands to millions of tokens)".[1]

**Neither is a measurement of any particular product**, and that is the thing to take. It is a textbook's characterisation of a class of system in a draft dated August 2026, and the number has moved every year for several years. Treat it as a snapshot. What does not move is the shape: a span, with everything in it available and nothing outside it available at all.

What goes into the window is more than you typed. Depending on the product, it may include instructions from the company that built it, some record of earlier conversations, the contents of a file you attached, and the results of any search the system was allowed to run. **You cannot see most of that**, and you should assume it is there rather than assume it is not.

:::predict Before you read on: a colleague says a long conversation is better than a short one, because the system has more to work with. What is right about that, and what is wrong?
Right: the material really is all available at once. Something you said forty messages ago hasn't been forgotten and doesn't need repeating.

Wrong: available isn't the same as used well. The next section has a measurement of how much where something sits inside a long input affects whether it gets used.

There's also a second, quieter problem with a long conversation, and it's the one that catches people. Everything in it is available, including the four wrong turns. A thread in which the system has misunderstood you three times contains three worked examples of the misunderstanding.
:::

## Where it sits in the window matters

In 2023 Nelson Liu and six colleagues ran a study to find out how well these systems actually use long inputs, on two tasks: answering a question from a set of documents, and looking a value up by its key. They moved the relevant information around inside the input and watched what happened.[2]

Their finding: "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts, even for explicitly long-context models."[2]

Read that last clause twice, because a system advertised as handling an enormous window isn't thereby a system that uses all of one evenly.

**Be exact about what was measured, because this is easy to stretch and I am about to stretch it myself.** What they varied was the *position* of the information inside one input. They didn't study conversations, and they didn't measure whether long conversations get worse over time. The result supports one sentence: where something sits in a long input changes how well it is used.

**Here is the stretch, marked as mine.** If position matters that much inside one input, then a long conversation, which is one long input by the time you reach the end of it, is a place where things get buried. That's reasoning from the study rather than a finding of it, and it happens to match what people report. Treat it as a good working assumption and not as a measurement.

Two things follow, and both are practical. **When a request really matters, put the important thing at the end.** And when a conversation has gone badly wrong, don't correct it again. Start a fresh one and put the correction in from the beginning. You aren't punishing the system; you're giving your instruction a window it doesn't have to compete in.

### What four corrections look like from the system's side

It is worth seeing this piled up rather than described, so here is the spreadsheet conversation from the quiz, written out as the system meets it.

Message one asks for a summary of a sales sheet by region. The answer treats a column called `NE` as north-east when it means "new enterprise". Message two says so. Message three asks for the same summary again; the answer gets `NE` right and treats `SW` the same wrong way. Message four says so. Messages five and six are the same shape again, for two more columns.

Now count what is in front of the system when message seven arrives. One request. Six answers, of which four contain the misreading. Four corrections. And the correction you are about to type, which will sit at the end of all of it.

Your instruction is one paragraph in a document that contains four worked demonstrations of the thing you are trying to stop. Starting again is not a fresh attempt at the same problem. It is the same request with the misreading absent.

## Why the same question gives different answers

At each step the system has a distribution over what could come next: a long list of possible pieces with a probability attached to each. It could just take the most probable one every time. That approach has a name, greedy decoding, and the textbook is clear about two things: it "is so predictable that it is deterministic; if the context is identical, and the probabilistic model is the same, greedy decoding will always result in generating exactly the same string", and, in its own words, "[i]n practice, however, we don't use greedy decoding with large language models".[1]

Why not? Because what it produces is "generic and often quite repetitive".[1]

So instead, "[t]he choice of which word to generate in transformer LLMs is done by sampling from the distribution of possible next words".[1] **Sampling** means choosing with the probabilities rather than always choosing the top. Two runs of the same request are two draws, and two draws can differ.

**The variation is the price of the text not being flat.** That's the whole explanation, and it has a shape worth holding on to, which the textbook states better than I can. Methods that stick close to the most probable words "tend to produce generations that are rated by people as more accurate, more coherent, and more factual, but also more boring and more repetitive". Methods that give more weight to the middle of the list "tend to be more creative and more diverse, but less factual and more likely to be incoherent or otherwise low-quality".[1]

Accuracy and interest are being traded against each other, by whoever built the product, on your behalf. The textbook names three ways of doing the trade, temperature sampling, top-k and top-p, and you will meet those words in other people's writing.[1] You can't set any of them in an ordinary chat window, which is why this course names them once and stops.

:::checkpoint If two runs of the same request are two draws, what does one run tell you about what the system "thinks"?
Less than it feels like. One run is one sample, so a surprising answer might be the usual one or might be an odd draw you happened to get.

The useful consequence is a habit rather than an attitude. **When an answer surprises you, and it matters, ask again in a fresh conversation before you do anything about it.** If the second answer agrees, you've learned something real about what this system reliably produces here. If it doesn't, you've learned something more useful still, which is that this is a question it is unsteady on, and unsteady is exactly where the checking should go.

Notice what this doesn't establish. Two answers agreeing tells you the system is consistent, and consistency isn't accuracy: a system can produce the same wrong thing every time. Lesson 8 is where that distinction gets its due.
:::

## What a correction actually does

Three things happen when you tell a system it got something wrong, and people usually believe the second one.

**What really happens:** your correction goes into the window, along with everything else in the conversation. The next answer is produced given all of it, so the correction usually takes effect, and it takes effect here.

**What people believe happens:** the system has learned. It hasn't. Nothing about the model changed because you typed a sentence, so next week, in a fresh conversation, you meet a system that has no record of your correction, and the same error is available to it again.

**What might also happen, depending entirely on the product:** some of what you said is saved and put back in front of the system next time. Several products now do this, several don't, and some do it only if you switch it on. **This course has not surveyed them and is not going to**, because any such survey would be out of date before you read it.

That third one is why this lesson can't tell you whether it remembers you. **It is a fact about your product rather than about the technology**, so the honest teaching is not an answer but an instruction: go and find out, and write down the date you found out.

:::exercise Read your own product's page, and date it
Take 15 minutes. This is Digital Literacy's retention-window exercise on a new subject, and the habit is the same one: find the provider's own documentation rather than an article about it, quote the sentence, and write the date you read it.

1. **Before you look, write down what you think the answers are.** Most people are wrong about at least one, and the gap is the whole value of this exercise.

2. Find the page where your product says what it does with your conversations. Look for "data", "privacy", "memory" or "controls" in its help or settings, if it has them; a product provided by your employer may have none of those and a policy document instead.

3. Answer three questions in writing, quoting the sentence that answers each. **Is anything kept between conversations and put back in front of the system later?** **Is anything used to train future models?** **Can you turn either off, and is it on or off right now for your account?**

4. Write the date you checked, beside each answer, and mark which of your predictions were wrong.

5. If your account is your employer's rather than your own, find out whether the answers differ. They very often do.

Keep this. Lesson 10 is about what you are willing to hand over, and it starts from what you have just written down.
:::

## What people get wrong

**"It remembers what I told it last week."** Sometimes, and only because somebody built a feature that puts it back in front of the system. Never because the conversation taught it anything, because it didn't.

**"It never remembers anything."** The same mistake with the sign flipped. Both versions are guesses about a product you could go and read about, and this course's position is the same on both: it is a question with a documented answer, and the answer belongs to your product rather than to the technology.

**"Correcting it teaches it."** It changes this conversation. That's worth a great deal and it isn't learning, and the difference shows up the moment you open a new conversation and meet the same error.

**"The same prompt gives the same answer, so one test is enough."** One run is one draw. If you have ever decided a system is good or bad at something on the strength of a single answer, you decided on a sample of one.

**"A longer conversation gives it more to work with."** True and not the whole story. More to work with is also more to compete with, and a long correction thread is a document containing several worked examples of the mistake you are trying to stop.

**"If I paste in more, it will use all of it."** Liu and colleagues are the answer: where something sits changes how well it is used, and the middle of a long input is the worst place for it.[2]

:::callout One thing that is not in this lesson, and why
**How much your product puts in the window without telling you.** Companies don't generally publish the instructions they attach to your conversation, and this course has read nothing reliable about it. What you can say with confidence is that something is there, because products behave in ways plain text prediction wouldn't, and that its contents aren't yours to see.

That's a smaller claim than the ones circulating, and it's the one this course can stand behind.
:::

## Practice

:::exercise Three runs, one question
Take 20 minutes.

1. Pick a question from your own work with a definite answer that you can check. Not an opinion, and not a rewriting job.

2. **Predict, in writing, how similar three answers will be.** Identical? Same conclusion, different words? Different conclusions?

3. Ask it three times, in three **fresh** conversations rather than three times in one. That matters, because three times in one thread means attempts two and three can see attempt one.

4. Put the three side by side and write down what varied. Wording only? Structure? The actual answer?

5. Now repeat the whole thing with a question that has no single right answer, such as asking for three ways to open a difficult letter. Predict first again.

**The comparison is the point.** Most people find the definite question varies in wording and not in substance, and the open question varies in substance, which tells you something useful about when a second run is worth the twenty seconds.
:::

:::exercise The fresh start, measured
Take 15 minutes, on a conversation that is actually going wrong. Save it up if you haven't got one today.

1. When you notice you have corrected the same misunderstanding twice, stop.

2. Write down what you would have typed as a third correction.

3. Instead, open a fresh conversation, and write one request that includes the correction from the start, as a constraint rather than as a complaint.

4. Compare. Note how long each took and which answer you would actually use.

Most people correct a fifth time instead, which is why this is worth doing once deliberately.
:::

## Connections

**Back.** Lesson 2 gave you the core paragraph and left its middle sentence for this one, so "everything in front of it" is now unpacked. The dated-reading habit in the first exercise is **Digital Literacy**'s, from its lesson on keeping your own data alive, where the reader is sent to their backup provider's own retention page rather than to an article about it.

**Forward.** Lesson 4 is about what you put in the window on purpose, which is the only part of it you control. Lesson 6 uses the variability from this lesson as one of the signs that a task sits on the unreliable side. Lesson 8 turns "ask it twice" into a step in a checking procedure, and draws the line this lesson gestured at between two answers agreeing and an answer being right. And lesson 10 takes the page you read in the first exercise and asks what you are willing to put in front of somebody else's system.

## Go deeper

- **Jurafsky and Martin, *Speech and Language Processing*, 3rd edition draft, [chapter 7, "Transformers and Pretraining"](https://web.stanford.edu/~jurafsky/slp3/7.pdf)**, section 7.6 on decoding and sampling. Free. The mathematics is skippable and the prose around it is not: it is the clearest statement anywhere of what is being traded when a system chooses its next word.
- **Liu and colleagues, ["Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172)** (2023). This course has read the abstract and not the paper, so take this as a pointer rather than a recommendation with detail behind it: the abstract is four sentences and states the result plainly, and the paper is where the measurements are.
- **Your own product's data page.** It is the only source in this lesson that is about the thing you actually use, and reading it once a year is the whole of the discipline.

## Sources

1. Dan Jurafsky and James H. Martin, *Speech and Language Processing*, 3rd edition draft of 19 August 2026, [chapter 7, "Transformers and Pretraining"](https://web.stanford.edu/~jurafsky/slp3/7.pdf). Chapter read in full; the rest of the book was not opened, except chapter 2, which lesson 2 uses. Supports: the definition of the context window and its stated scale in that draft, the account of greedy decoding as deterministic and as not what is used in practice, the statement that the next word is chosen by sampling, the quality-against-diversity trade-off in its own words, and the naming of temperature sampling, top-k and top-p.
2. Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni and Percy Liang, ["Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172), *Transactions of the Association for Computational Linguistics*, 2023. Abstract read; the paper was not opened. Supports: the quoted finding about position within a long input, and the clause about explicitly long-context models. **It does not support the claim that long conversations degrade**, which this lesson reaches by its own reasoning and labels as such in the body.
