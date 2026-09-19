---
title: What you are actually talking to
minutes: 80
objectives:
  - >-
    Describe, without mathematics, what the system is doing when it answers, in a way you could say
    to somebody else
  - >-
    Predict from that description alone which of two described tasks the system will be unreliable
    at, and say why
  - >-
    Explain why a confident false answer follows from the design rather than indicating that
    something has broken
quiz:
  - q: >-
      A reader asks a system to count how many words in a paragraph start with a vowel, and gets a
      confident and wrong number. He concludes the system is having a bad day. What is the better
      explanation?
    options:
      - The task needs the text taken apart letter by letter, and the pieces it works in are not letters
      - The paragraph was too long for it to hold in mind at once, so the count drifted as it went along
      - The system was being careless, and asking it to try again rather more carefully will fix the count
      - Counting is arithmetic, and arithmetic is the one thing these systems are reliably known to be bad at
    answer: 0
    explain: >-
      The pieces the system works in are chosen by how often they turn up in text, so they're
      sometimes whole words, sometimes fragments, and almost never single letters. A question about
      which letter a word starts with asks about something the pieces don't line up with. The
      length answer describes a real problem that isn't this one. The carelessness answer treats it
      as effort, and there's no effort to increase. The arithmetic answer is the most tempting and
      is too broad, since plenty of arithmetic goes fine; what fails here is the letter-level
      reading underneath it.
  - q: >-
      Two tasks. One, rewrite a three-paragraph complaint so that it's shorter and less angry. Two,
      state the registration deadline for a grant scheme last year. Which is the riskier request, and
      what in the description of the system tells you?
    options:
      - The rewrite, because rewriting calls for judgement, and judgement is what these systems most obviously lack
      - Neither one is riskier than the other; the risk depends entirely on which product happens to be in front of you
      - The deadline, because the system has no reliable way of knowing what today's date is at the moment you ask it
      - The deadline, because the answer has to match a fact outside the conversation, and nothing in the process checks
    answer: 3
    explain: >-
      The rewrite carries its own answer with it. Everything needed is in the text you supplied, and
      you can judge the result by reading it against what you sent. The deadline has to be true of the
      world, and the system produces an answer rather than fetching one. The date answer names a real
      wrinkle and isn't the reason. The judgement answer inverts the case, since the rewrite is the
      safe one. And "it depends on the product" gives up on a question the mechanism can settle.
  - q: >-
      A colleague says these systems are basically search engines with a chat window on the front.
      Which difference matters most for how you use one?
    options:
      - A search engine is faster to query, so it stays the better tool whenever you happen to be in a hurry
      - A search engine hands you a document somebody wrote; this hands you text it has just produced
      - A search engine covers the whole of the web as it stands today, where these systems cover what they were trained on
      - A search engine ranks its results, so you can see at a glance which answer is the most popular one
    answer: 1
    explain: >-
      That's the difference that changes what you do next. A search result can be opened and read, and
      its source judged. A produced answer has no document behind it to open, which is why checking is
      a different job and gets a lesson of its own. The coverage answer is roughly true and changes
      nothing about your behaviour. The speed and ranking answers are true of search engines and say
      nothing about what makes this other thing different.
  - q: >-
      Somebody asks a system for a reference, gets one with a plausible author, title, journal and
      year, and cannot find it anywhere. What happened, in the terms of this lesson?
    options:
      - The reference was a real one and has simply been taken off the internet since the system was trained
      - The system had it in a database and retrieved the wrong record from a list of similar-looking ones
      - The reference was produced the way the surrounding sentences were, so it has the shape of a real one
      - The system was guessing because the topic was obscure, which isn't what it does when the topic is common
    answer: 2
    explain: >-
      A citation is text, and text is what the system produces. Nothing in the process separates
      producing a sentence from producing a reference, which is exactly why a fabricated one looks
      right: the shape is the thing that was learned. The database answer invents a store that isn't
      there. The removed-from-the-internet answer is possible and isn't the usual explanation. And the
      obscure-topic answer is comforting and wrong, because the same process runs whatever the topic.
  - q: >-
      You ask a system why it got an earlier answer wrong, and it gives you a clear, plausible
      explanation. How much weight should that explanation carry?
    options:
      - A great deal, because the system has access to its own inner workings in a way that you never will
      - None at all, because a system of this kind cannot say anything true about itself even in principle
      - A great deal, because explaining a past answer is a far easier task than producing the original one was
      - Some, because it's text produced by the same process as any other answer, and may or may not be right
    answer: 3
    explain: >-
      The explanation is another piece of produced text, so it can be right, or plausible and wrong,
      or both in parts, and it deserves the same checking as the answer it's about. The self-access
      answer assumes a kind of introspection the description in this lesson doesn't contain. The
      nothing-in-principle answer overshoots into a rule, and lesson 8 has self-assessment doing real
      work. The easier-task answer is a reasonable-sounding argument that would need evidence, and
      that evidence is in lesson 7 rather than here.
  - q: >-
      Which of these is a task the description in this lesson predicts will go well, and why?
    options:
      - Working out which of two contracts is the more favourable, because a comparison is a structured job
      - Turning a page of rough notes into a summary, because everything needed is in front of it
      - Telling you the current balance of an account you have described to it in a good deal of detail
      - Checking whether a quotation you supply is accurate, because the text is right there in the request
    answer: 1
    explain: >-
      The summary is a text-shape task. The material is supplied, the answer is constrained by it, and
      you can judge what comes back by reading it against the notes. The quotation answer looks like
      the same thing and isn't: checking a quotation means comparing it with a source that is not in
      the request. The contracts need facts about law and consequence that no amount of reading the
      contracts supplies. And the balance exists only in a system the model cannot reach.
---

Two things go wrong with these systems that look completely unrelated.

The first is small and funny. Ask one to count the letter `r` in a long word and you may well get the wrong number, from a system that has just written you a competent paragraph about mediaeval crop rotation.

The second is not funny at all. Ask one for a reference and you may get an author who exists, in a journal that exists, with a title in exactly the right style for that field, and a year, and a volume number, for a paper that was never written.

**Those two failures have the same cause**, and one paragraph explains both. That paragraph's the most useful thing in this course, because nine of the eleven lessons are it applied to something. Everything you're told to do with these systems, by me or by anybody, either follows from it or is a ritual somebody picked up and passed on.

So this lesson is about getting that paragraph into your hands, and no mathematics is required to hold it.

## What the system is doing

Here it is, and then the rest of the lesson unpacks it.

**It produces text one piece at a time. Each piece is chosen given everything in front of it. The choosing is done by a model built to approximate the statistical shape of an enormous amount of writing.**

That isn't my paraphrase. It's what the United States' standards body says, in the profile it published for exactly this technology in 2024, while explaining where confident false answers come from: they "are a natural result of the way generative models are designed: they generate outputs that approximate the statistical distribution of their training data; for example, LLMs predict the next token or word in a sentence or phrase."[1]

Read that last clause again, because there is a word in it doing a great deal of work.

## The pieces are not letters, and they are not quite words

The word is **token**, and it doesn't mean what it used to. The standard textbook in the field is blunt about the change: "we now try to reserve the word token instead to mean the output of subword tokenization algorithms."[2]

Unpack that. Before a system can work with your text, the text has to be cut into pieces. The pieces are not characters, because that would make every sentence enormously long. They aren't words either, because then any word the system had never seen would be a blank. So they're something in between, and the textbook's name for them is **subwords**: "modern tokenizers automatically induce sets of tokens that include tokens smaller than words, called subwords".[2]

The worked example in that chapter is the clearest one I know. Suppose the system has met `low` and `new` and `newer` during training, but never `lower`. Cut on whole words and `lower` is a hole. Cut into subwords and it isn't: "if we had happened not to ever see the word lower, when it appears we could segment it successfully into low and er which we had already seen."[2]

So a token is sometimes a whole common word, sometimes a fragment like `-er`, and, at the limit, sometimes a single letter: "In the worst case, a really unusual word (perhaps an acronym like GRPO) could be tokenized as a sequence of individual letters if necessary."[2]

**And the pieces are chosen by how often they turn up in text**, by one of two algorithms the textbook names, byte-pair encoding and unigram language modelling.[2] You don't need either algorithm. You need the consequence.

**Nothing in the process ever counts a letter.**

:::predict Before you run it: you ask a system how many times the letter `s` appears in "Mississippi sandstorms". Write down what you think will happen, and then write down what you think will happen if you ask it to put a space between every letter first and then count.
Run both and see. What matters is the comparison, not either answer on its own, and this is the first time in the course you are being asked to predict and then check, which is the habit the whole thing is built on.

What you are testing is whether the difficulty lives in the counting or in the reading. If the spaced-out version does better, the counting was never the problem: the letters simply weren't available as separate things until you made them separate.

Your system may well get the first one right. Longer and stranger words are where it shows, and a system that gets this right isn't a system that read it the way you did. It's a system for which this particular word happened to be cut conveniently.
:::

## There is no store of facts to look in

This is the part that surprises people most, and it's worth being slow about, because two other things you already understand are nearly right and the difference matters.

You know from **Digital Literacy** what a file system is: a thing lives in a place, it has an address, and fetching it means going to the address. Nothing is produced. The file that comes back is the file that was put there.

You know from the same course what a search engine does: somewhere there are documents that people wrote, the engine finds the ones that match, and it hands you a list. Again, nothing is produced. The page you open is the page its author wrote.

**A language model is neither.** There's no place where the answer was sitting. The answer is made, in the same way and by the same process as everything else it writes.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 250" role="img" aria-labelledby="three-title three-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="three-title">Three ways of getting an answer, and what comes back</title>
  <desc id="three-desc">Three rows. A file system: you supply an address, and the file that was stored there comes back unchanged. A search engine: you supply words, and it returns documents other people wrote, which you can open and judge. A language model: you supply text, and it produces new text one piece at a time, with no document behind it to open.</desc>
  <text x="14" y="24" font-size="16" font-weight="700" fill="var(--text, #111418)">A file system</text>
  <text x="14" y="44" font-size="15" fill="var(--text-2, #4a5260)">you give an address</text>
  <text x="14" y="64" font-size="15" fill="var(--text-2, #4a5260)">you get back the file that was put there</text>
  <line x1="14" y1="78" x2="446" y2="78" stroke="var(--text-2, #4a5260)" stroke-width="1"/>
  <text x="14" y="104" font-size="16" font-weight="700" fill="var(--text, #111418)">A search engine</text>
  <text x="14" y="124" font-size="15" fill="var(--text-2, #4a5260)">you give words</text>
  <text x="14" y="144" font-size="15" fill="var(--text-2, #4a5260)">you get back pages somebody else wrote</text>
  <line x1="14" y1="158" x2="446" y2="158" stroke="var(--text-2, #4a5260)" stroke-width="1"/>
  <text x="14" y="184" font-size="16" font-weight="700" fill="var(--oxblood, #8b1e2d)">A language model</text>
  <text x="14" y="204" font-size="15" fill="var(--text-2, #4a5260)">you give text</text>
  <text x="14" y="224" font-size="15" fill="var(--text-2, #4a5260)">you get back text it has just produced</text>
  <text x="14" y="244" font-size="15" font-weight="700" fill="var(--oxblood, #8b1e2d)">there is no document behind it to open</text>
</svg>

Now put the fabricated reference back in front of you.

A real citation has a shape. Surname, initials, a year in brackets, a title in sentence case, a journal in italics, a volume, a page range. That shape is in the training material tens of millions of times. So a system that produces text which fits the statistical shape of writing will produce citations which fit the shape of citations, with the right sort of author for the field and the right sort of journal for the claim.

**Which is exactly why a fabricated one is convincing.** It wasn't a failed attempt at retrieval. Nothing retrieved anything. It's a produced citation, and producing citations is the thing it was doing all along.

:::checkpoint A colleague argues that because the system was trained on real papers, its citations must come from those papers, even if it occasionally muddles two of them. What has she got wrong?
She's kept the retrieval picture and made it fuzzy, which is the commonest half-step towards understanding this, and it's still the wrong picture.

Training isn't storage. What the training produced is a model of the shape of text, not a copy of the documents it read, and there's no step at which a particular document is consulted. So the useful question is not "which paper did this come from", because the honest answer is "none, in the way you mean".

The practical difference is what she does next. If she believes a citation is a muddled retrieval, she'll try to work out which real paper was meant. If she understands it was produced, she'll go and look for a real source instead, which is both faster and the thing lesson 8 turns into a procedure.
:::

## Why "it made that up" is the wrong complaint

You've now got enough to see something most writing on this subject misses.

A system built this way is not sometimes producing text and sometimes reporting facts. **It is producing text every time.** When the produced text happens to be true, that is because the shape of true writing about that subject was well represented in what it learned from. When it is false, the same process ran.

So there's no separate faulty mode to be switched off, and a confident false answer isn't evidence that anything malfunctioned. The confidence and the falsehood are both properties of the text, and the text is what the thing makes.

That isn't the whole story, and lesson 7 takes it properly, including an argument from 2025 that the *training and scoring* of these systems rewards guessing over admitting ignorance, which is a real lever somebody could pull.[3] For now hold the narrower version, because it is the one that changes how you work:

**Ask "is this the kind of task where the shape of good writing and the truth come apart?"** When the answer is no, as in rewriting something you supplied, you're on safe ground. When the answer is yes, as in anything that has to match a fact outside the conversation, you're not, and no amount of asking nicely changes it.

Lesson 6 turns that question into something you can apply quickly. This lesson is where it comes from.

## What people get wrong

**"It looks things up."** Unless it's been handed a tool that goes and searches, it doesn't. Plenty of products now hand it such a tool, and that changes what it can reach; it doesn't change how the answer is produced when it hasn't used one. Lesson 7 has the measurement of how much that helps, and the answer is: some, and much less than the vendors said.

**"It has a database."** No. Training built a model of the shape of text. There's no table of facts to be corrupted or corrected, which is also why you can't fix an error just by pointing it out, a point lesson 3 takes properly.

**"It understands the question the way I do."** Careful in both directions. It plainly does something that behaves a great deal like understanding on a great many tasks, and this course isn't going to tell you it's merely pattern matching, because that phrase does no work. What you can say with confidence is narrower and more useful: whatever it is doing, **it is doing it over pieces of text that do not correspond to letters**, and it is doing it without consulting anything. Those two facts predict its failures, and "does it really understand" doesn't.

**"If it can write an essay it can count letters."** Those two aren't on a scale with each other. Essay-shaped text is the thing the pieces are good for; letter counting is a job about something below the pieces.

**"Getting it wrong means it is broken."** It means you were on the wrong kind of task. That distinction is most of what lesson 6 is about, and it's why your first instinct on a bad answer should be to ask what kind of question you asked, rather than to ask again more firmly.

:::callout Two things this lesson deliberately does not tell you
**How the model is built**, which is transformers, attention, parameters and training, and which takes a graduate textbook a hundred pages. You don't need it. Everything in this course follows from the one paragraph, and I'd rather you held one paragraph tightly than four chapters loosely.

**Whether it "really" reasons.** People argue about this, and the argument turns on what the word's being asked to mean. Lesson 5 says so explicitly and answers the question you can act on instead, which is what asking for steps actually does to the answer.
:::

## Practice

:::exercise The two demonstrations
Take 20 minutes. Write your prediction down first, every time. That isn't a formality. Predicting before checking is retrieval practice, and How to Learn Anything's third lesson is about why it is worth more than reading twice.

**One: the letters.**

1. Pick a long, unusual word. Predict whether the system will count a given letter in it correctly.
2. Ask. Write down what came back.
3. Now ask the same question with the word spaced o u t like that, and record the answer.
4. Write one sentence on what the difference, if there was one, tells you about where the difficulty lives.

**Two: the citation.**

1. Pick something obscure but checkable in a subject you know. Ask for three references on it.
2. Before you check any of them, predict how many will be real, how many will be real but not say what they are cited as saying, and how many will not exist.
3. Check all three properly. Not by asking the system. By looking.
4. Write down which of the three kinds each one was.

Keep both results. Lesson 7 asks for the citation one back, and by then you will have a name for each of the three kinds.
:::

:::exercise Say it without looking
Take 10 minutes, and do this one at least an hour after the rest of the lesson rather than straight away.

Close the page. Write the paragraph from the start of this lesson in your own words, from memory: what the system produces, what decides each piece, and what it is approximating.

Then open the page and compare. Mark what you left out.

The thing you left out is the thing to reread, and it's worth much more to you found this way than it would've been from reading the section again. That is spacing and retrieval doing their job, and it is the last time this course will point at them by name.
:::

## Connections

**Back.** Lesson 1 gave you two studies that pointed opposite ways and a reconciliation: gains near the edge of what you can already do, losses on work you had mastered. This lesson is the first half of *why* the frontier is jagged rather than smooth. It also borrows two pictures from **Digital Literacy**, the file system and the path from an address to a page, and uses them as the contrast rather than re-teaching either.

**Forward.** Lesson 3 is what the system can see when it answers, which is the other half of "everything in front of it". Lesson 6 turns the question at the end of the fourth section into a working test. Lesson 7 is confident false answers taken properly, with the measurement of what retrieval does and does not fix. And lesson 8, checking, only makes sense once you know there's no document to go and look at.

## Go deeper

- **Jurafsky and Martin, *Speech and Language Processing*, 3rd edition draft, [chapter 2, "Words and Tokens"](https://web.stanford.edu/~jurafsky/slp3/2.pdf)**. Free. The first eight pages are readable without any background and will show you where tokens come from. Stop when the algorithm starts; you don't need it.
- **[NIST AI 600-1, the Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1)**, section 2.2. Two pages on confident false answers from a standards body rather than from a vendor or a critic.
- **Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165)** (2020). The abstract alone is worth ten minutes: it is where the idea that you specify a task in the text of the request, with no training, was established.

## Sources

1. [NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1), July 2024, section 2.2. Read in part. Supports: the quoted sentence on approximating the statistical distribution of training data and predicting the next token, and the claim that confident false answers follow from the design.
2. Dan Jurafsky and James H. Martin, *Speech and Language Processing*, 3rd edition draft of 19 August 2026, [chapter 2, "Words and Tokens"](https://web.stanford.edu/~jurafsky/slp3/2.pdf). Chapter read in full; the rest of the book was not opened. Supports: the redefinition of "token" as the output of subword tokenization, the definition of subwords, the `lower` into `low` and `er` example, the worst case of a word tokenized as individual letters, and the naming of byte-pair encoding and unigram language modelling as the two algorithms in current use.
3. Adam Tauman Kalai, Ofir Nachum, Santosh S. Vempala and Edwin Zhang, ["Why Language Models Hallucinate"](https://arxiv.org/abs/2509.04664), arXiv 2509.04664, September 2025. Abstract read. Supports: the one sentence here that training and evaluation reward guessing over admitting uncertainty. Taken properly in lesson 7.
