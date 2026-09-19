---
title: What you are actually talking to
minutes: 90
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
      - The deadline, because no system of this kind is ever told what today's date is, so "last year" means nothing to it
      - The deadline, because the answer has to match a fact outside the conversation, and nothing in the process checks
    answer: 3
    explain: >-
      The rewrite carries its own answer with it. Everything needed is in the text you supplied, and
      you can judge the result by reading it against what you sent. The deadline has to be true of the
      world, and the system produces an answer rather than fetching one. The date answer is the
      interesting wrong one: how a product handles the date varies, so it is neither always true nor
      the reason. The judgement answer inverts the case, since the rewrite is the safe one. And "it
      depends on the product" gives up on a question the mechanism can settle.
  - q: >-
      A librarian is asked to explain the difference between the catalogue search she has used for
      twenty years and the AI assistant the library has just installed. Which difference changes what
      a user should do next?
    options:
      - The catalogue is limited to what the library holds, and the assistant has read a great deal more
      - The catalogue returns a record that points at a real object; the assistant returns text with no object behind it
      - The catalogue is exact and the assistant is approximate, so results from it need rounding up or down
      - The catalogue was built by librarians and the assistant was built by a company with its own interests
    answer: 1
    explain: >-
      Everything else on that list may be true and none of it changes the user's next move. The one
      that does is that a catalogue record can be taken to a shelf, and a produced answer has nowhere
      to be taken. That is why checking an assistant's answer is a different job from checking a
      catalogue's, and why it gets a whole lesson later on. The coverage and ownership answers are
      real considerations about which tool to reach for. The exactness answer imports a picture from
      measurement that does not apply.
  - q: >-
      A finance officer asks for the wording of a clause in a particular regulation. What comes back
      is fluent, specific, and quotes a subsection number. Which of these is the best account of what
      just happened?
    options:
      - The system found the regulation and summarised it, so the wording will be close even if not exact
      - The subsection number is the reliable part, since a number is harder to get wrong than prose is
      - The system produced text of the shape regulations have, and whether it matches is a separate question
      - The system will have flagged any uncertainty, so fluent text means it was confident of its source
    answer: 2
    explain: >-
      Shape and truth are different things, and the process only ever aims at the first. The
      found-and-summarised answer imports a step that does not happen unless a tool was used to make
      it happen. The subsection-number answer has it backwards, since a number in the right format is
      exactly the sort of thing a shape can produce. And fluency is a property of text rather than a
      report on the system's state, which is what makes it useless as a signal here.
  - q: >-
      You ask a system why it got an earlier answer wrong, and it gives you a clear, plausible
      explanation. How should you treat that explanation?
    options:
      - As a report from inside the system, which is the one kind of evidence you cannot get any other way
      - As worthless, because nothing a system says about itself can carry any information at all
      - As more reliable than the original answer, because explaining is an easier job than producing
      - As another produced answer, which means it needs checking exactly like the one it is about
    answer: 3
    explain: >-
      Producing an explanation is the same operation as producing anything else, so it can be right,
      plausible and wrong, or both in parts. The report-from-inside answer assumes an introspection
      the description in this lesson does not contain. The worthless answer overshoots into a rule,
      and lesson 8 has self-assessment doing real work. The easier-job answer is a reasonable
      argument that would need evidence, and that evidence is in lesson 7 rather than here.
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

Those two failures have the same cause, and one paragraph explains both. Nine of the eleven lessons in this course are that paragraph applied to something, so it is worth the time it takes to get it properly. Everything you're told to do with these systems, by me or by anybody, either follows from it or is a ritual somebody picked up and passed on.

No mathematics is required to hold it.

## What the system is doing

**It produces text one piece at a time. Each piece is chosen given everything in front of it. The choosing is done by a model built to approximate the statistical shape of an enormous amount of writing.**

Two of those three sentences come almost straight from the United States' standards body, which published a profile for exactly this technology in 2024 and, while explaining where confident false answers come from, wrote that they "are a natural result of the way generative models are designed: they generate outputs that approximate the statistical distribution of their training data; for example, LLMs predict the next token or word in a sentence or phrase."[1]

The middle sentence, about everything in front of it, is not in that quotation. It is the subject of lesson 3.

Read the last clause of NIST's sentence again, because there is a word in it doing a great deal of work.

## The pieces are not letters, and they are not quite words

The word is **token**, and it doesn't mean what it used to. The standard textbook in the field is blunt about the change: "we now try to reserve the word token instead to mean the output of subword tokenization algorithms."[2]

Follow that through. Before a system can work with your text, the text has to be cut into pieces. The pieces are not characters, because that would make every sentence enormously long. They aren't words either, because then any word the system had never seen would be a blank. So they're something in between, and the textbook's name for them is **subwords**: "modern tokenizers automatically induce sets of tokens that include tokens smaller than words, called subwords".[2]

The worked example in that chapter is the clearest one I know. Suppose the system has met `low` and `new` and `newer` during training, but never `lower`. Cut on whole words and `lower` is a hole. Cut into subwords and it isn't: "if we had happened not to ever see the word lower, when it appears we could segment it successfully into low and er which we had already seen."[2]

So a token is sometimes a whole common word, sometimes a fragment like `-er`, and, at the limit, sometimes a single letter: "In the worst case, a really unusual word (perhaps an acronym like GRPO) could be tokenized as a sequence of individual letters if necessary."[2]

Picture a sentence being cut. A common word like `strawberry` may well arrive whole, in one piece. Something long and predictable like `tokenization` might come in two, perhaps `token` and `ization`. A rare surname might be cut into four or five fragments, or into letters. Which happens is decided by how often each piece turns up in text, by one of two algorithms the textbook names, byte-pair encoding and unigram language modelling.[2] You don't need either algorithm. You need the consequence, and here it is as this course's own inference rather than as something the chapter states:

**Because the pieces are chosen by frequency, nothing guarantees that the system is handed the letters of a word, and no step in the process spells one out.** That is what makes a letter-level question a different kind of question. It is also why `strawberry` arriving whole is worse for counting than a rare surname arriving in fragments, which is the opposite of what you would expect.

:::predict You ask a system how many times the letter `s` appears in "Mississippi sandstorms", and then you ask the same question with a space typed between every letter. Write both predictions down before you run either.
Run both and compare. What matters is the comparison, not either answer on its own.

What you're testing is whether the difficulty lives in the counting or in the reading. If the spaced-out version does better, the counting was never the problem: the letters simply weren't available as separate things until you made them separate.

Your system may well get the first one right. Longer and stranger words are where it shows, and a system that gets this right isn't a system that read it the way you did. It's a system for which this particular word happened to be cut conveniently.
:::

## There is nowhere to look it up

This is the part that surprises people most, and it's worth being slow about, because two other things you already understand are nearly right and the difference matters.

You know from **Digital Literacy** what a file system is: a thing lives in a place, it has an address, and fetching it means going to the address. Nothing is produced. The file that comes back is the file that was put there.

You also know what a search engine does, from using one rather than from any course. Somewhere there are documents that people wrote. The engine finds the ones that match and hands you a list. Again, nothing is produced. The page you open is the page its author wrote.

**A language model is neither**, and the figure below is the difference. In the first two rows there is a store, and an arrow reaches it and comes back carrying something that was already there. In the third row there is no store for an arrow to reach.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 272" role="img" aria-labelledby="three-title three-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="three-title">Two ways of fetching an answer, and one way of producing one</title>
  <desc id="three-desc">Three rows. In the first, a request leaves you along an arrow and reaches a box labelled the files, and a second arrow comes back carrying the one that was put there. In the second, a request reaches a box labelled documents people wrote, and an arrow comes back carrying a list you can open. In the third row the box is drawn as a dashed outline labelled no store to reach, and what comes back is new text with nothing behind it to open.</desc>
  <text x="8" y="18" font-size="15" font-weight="700" fill="var(--text, #111418)">A file system</text>
  <line x1="8" y1="42" x2="186" y2="42" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="186,37 198,42 186,47" fill="var(--text-2, #4a5260)"/>
  <rect x="204" y="28" width="84" height="28" rx="4" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
  <text x="214" y="47" font-size="15" fill="var(--text, #111418)">the files</text>
  <line x1="440" y1="70" x2="316" y2="70" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="316,65 304,70 316,75" fill="var(--text-2, #4a5260)"/>
  <text x="8" y="75" font-size="15" fill="var(--text-2, #4a5260)">back comes the one that was put there</text>
  <text x="8" y="112" font-size="15" font-weight="700" fill="var(--text, #111418)">A search engine</text>
  <line x1="8" y1="136" x2="186" y2="136" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="186,131 198,136 186,141" fill="var(--text-2, #4a5260)"/>
  <rect x="204" y="122" width="152" height="28" rx="4" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
  <text x="214" y="141" font-size="15" fill="var(--text, #111418)">documents people wrote</text>
  <line x1="440" y1="164" x2="316" y2="164" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="316,159 304,164 316,169" fill="var(--text-2, #4a5260)"/>
  <text x="8" y="169" font-size="15" fill="var(--text-2, #4a5260)">back comes a list you can open</text>
  <text x="8" y="206" font-size="15" font-weight="700" fill="var(--oxblood, #8b1e2d)">A language model</text>
  <line x1="8" y1="230" x2="186" y2="230" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="186,225 198,230 186,235" fill="var(--text-2, #4a5260)"/>
  <rect x="204" y="216" width="152" height="28" rx="4" fill="none" stroke="var(--oxblood, #8b1e2d)" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="214" y="235" font-size="15" fill="var(--oxblood, #8b1e2d)">no store to reach</text>
  <text x="8" y="263" font-size="15" fill="var(--text-2, #4a5260)">back comes new text, nothing behind it to open</text>
</svg>

That dashed box is the whole of the difference. **How to put it exactly is this course's own wording rather than a claim any of its sources makes**, and the careful version matters, because the loose version is wrong in a way an expert would catch. The system's parameters plainly carry a great deal about the world; that is why the thing answers factual questions correctly at all. What is missing is **a document to go and fetch**. So an answer is produced rather than retrieved, and so is a citation.

Now put the invented reference back in front of you.

A real citation has a shape. Surname, initials, a year in brackets, a title in sentence case, a journal in italics, a volume, a page range. That shape is in the training material tens of millions of times, so a system producing text that fits the statistical shape of writing will produce citations that fit the shape of citations, with the right sort of author for the field and the right sort of journal for the claim. It is convincing for exactly that reason, and it was not a failed attempt at retrieval. Nothing retrieved anything.

:::checkpoint A colleague argues that because the system was trained on real papers, its citations must come from those papers, even if it occasionally muddles two of them. What has she got wrong?
She's kept the retrieval picture and made it fuzzy, which is the commonest half-step towards understanding this, and it's still the wrong picture.

Training isn't storage. What the training produced is a model of the shape of text rather than a copy of the documents it read, and there's no step at which a particular document is consulted.

The practical difference is what she does next. If she believes a citation is a muddled retrieval, she'll try to work out which real paper was meant. If she understands it was produced, she'll go and look for a real source instead, which is both faster and the thing lesson 8 turns into a procedure.
:::

## Why "it made that up" is the wrong complaint

You've now got enough to see something most writing on this subject misses. A system built this way isn't sometimes producing text and sometimes reporting facts; it's producing text every time. When the produced text happens to be true, that's because the shape of true writing about that subject was well represented in what it learned from, and when it's false, the same process ran.

So there's no separate faulty mode to be switched off, and a confident false answer isn't evidence that anything malfunctioned. The confidence and the falsehood are both properties of the text, and the text is what the thing makes.

That isn't the whole story. Lesson 7 takes it properly, including an argument published in 2025 that the *training and scoring* of these systems rewards guessing over admitting ignorance, which would be a real lever somebody could pull.[3] For now hold the narrower version, because it's the one that changes how you work: **ask whether this is the kind of task where the shape of good writing and the truth come apart.** When the answer is no, as in rewriting something you supplied, you're on safe ground. When the answer is yes, as in anything that has to match a fact outside the conversation, you're not, and no amount of asking nicely changes that. Lesson 6 turns the question into something you can apply in a few seconds, and this lesson is where it comes from.

## What people get wrong

**"It looks things up."** Unless it's been handed a tool that goes and searches, it doesn't. Plenty of products now hand it such a tool, and that changes what it can reach rather than how the answer is produced when it hasn't used one. How much the tool helps has been measured, on commercial legal research systems tested in 2024, and lesson 7 has the number.[4] It is smaller than the people selling those systems said.

**"It has a database."** No. Training built a model of the shape of text. There's no table of facts to be corrected, which is why pointing out an error changes this conversation rather than the system. What a correction does and does not reach is lesson 3's subject, and the answer depends on the product more than people expect.

**"It understands the question the way I do."** Careful in both directions. It plainly does something that behaves a great deal like understanding on a great many tasks, and this course isn't going to tell you it's merely pattern matching, because that phrase does no work. What you can say with more confidence is narrower and more useful: whatever it's doing, it's doing it over pieces of text that don't correspond to letters, and without a document to consult. Those two facts predict its failures, and "does it really understand" doesn't.

**"If it can write an essay it can count letters."** Those two aren't on a scale with each other. Essay-shaped text is what the pieces are good for. Letter counting is a job about something below the pieces.

**"Getting it wrong means it is broken."** It means you were on the wrong kind of task, which is most of what lesson 6 is about. Your first instinct on a bad answer should be to ask what kind of question you asked, rather than to ask again more firmly.

:::callout Two things this lesson deliberately does not tell you
**How the model is built**, which is transformers, attention, parameters and training, and which takes a graduate textbook a hundred pages. You don't need it. Everything in this course follows from the one paragraph, and I'd rather you held one paragraph tightly than four chapters loosely.

**Whether it "really" reasons.** People argue about this, and the argument turns on what the word's being asked to mean. Lesson 5 says so explicitly and answers the question you can act on instead, which is what asking for steps actually does to the answer.
:::

## Practice

:::exercise The two demonstrations
Take 25 minutes. Write your prediction down first, every time. Guessing at an answer before you're given it makes the answer stick better than reading it twice would, which is what How to Learn Anything's lessons on retrieval and testing are about.

**One: the letters.**

1. Pick a long, unusual word. Predict whether the system will count a given letter in it correctly.
2. Ask. Write down what came back.
3. Now ask the same question with the word spaced o u t like that, and record the answer.
4. **Then ask it why it got the first one wrong**, and write down what it says.
5. Two things to judge, and they're separate. Whether the count was right. And whether the explanation it gave for its own mistake is one you can rely on, given what this lesson says about where explanations come from.

**Two: the citation.**

1. Pick something obscure but checkable in a subject you know. Ask for three references on it.
2. Before you check any of them, predict how many will be real, how many will be real but not say what they're cited as saying, and how many won't exist.
3. Check all three properly. Not by asking the system. By looking.
4. Write down which of the three kinds each one was.

Keep both results. Lesson 7 asks for the citation one back, and by then you'll have a name for each of the three kinds.
:::

:::exercise Say it without looking
Take 10 minutes, and do this one at least an hour after the rest of the lesson rather than straight away.

Close the page. Write the paragraph from the start of this lesson in your own words, from memory: what the system produces, what decides each piece, and what it's approximating.

Then open the page and compare, and mark what you left out. The thing you left out is the thing to reread, and it's worth much more to you found this way than it would've been from reading the section again.
:::

## Connections

**Back.** Lesson 1 gave you two studies pointing opposite ways and a reconciliation: gains near the edge of what you can already do, losses on work you had mastered. This lesson is the first half of *why* the frontier is jagged rather than smooth. Get out the two-column baseline you wrote there and mark any entry this lesson has changed your mind about, which will usually be on the right-hand side. It borrows one picture from **Digital Literacy**, the file system and its addresses, and uses it as a contrast rather than re-teaching it.

**Forward.** Lesson 3 is what the system can see when it answers, which is the second sentence of the paragraph above and the one NIST's quotation does not cover. Lesson 6 turns the question about shape and truth into a working test. Lesson 7 is confident false answers taken properly, with the measurement of what a search tool does and does not fix. And lesson 8, checking, only makes sense once you know there's no document to go and look at.

## Go deeper

- **Jurafsky and Martin, *Speech and Language Processing*, 3rd edition draft, [chapter 2, "Words and Tokens"](https://web.stanford.edu/~jurafsky/slp3/2.pdf)**. Free. The first eight pages are readable without any background and will show you where tokens come from. Stop when the algorithm starts; you don't need it.
- **[NIST AI 600-1, the Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1)**, section 2.2. Lesson 1 sent you to the whole document. This is the two pages that matter here, on confident false answers, from a standards body rather than from a vendor or a critic.
- **Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165)** (2020). The abstract alone is worth ten minutes: it's where the idea that you specify a task in the text of the request, with no training at all, was established.

## Sources

1. [NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1), July 2024, section 2.2. Read in part. Supports: the quoted sentence on approximating the statistical distribution of training data and predicting the next token, and the claim that confident false answers follow from the design. It does **not** support the middle sentence of this lesson's core paragraph, about conditioning on everything in front of the system, which belongs to lesson 3 and is flagged as such in the body.
2. Dan Jurafsky and James H. Martin, *Speech and Language Processing*, 3rd edition draft of 19 August 2026, [chapter 2, "Words and Tokens"](https://web.stanford.edu/~jurafsky/slp3/2.pdf). Chapter read in full; the rest of the book was not opened. Supports: the redefinition of "token" as the output of subword tokenization, the definition of subwords, the `lower` into `low` and `er` example, the worst case of a word tokenized as individual letters, and the naming of byte-pair encoding and unigram language modelling as the two algorithms in current use. **The sentence about nothing spelling a word out is this course's inference from that chapter rather than a claim the chapter makes, and the body says so.**
3. Adam Tauman Kalai, Ofir Nachum, Santosh S. Vempala and Edwin Zhang, ["Why Language Models Hallucinate"](https://arxiv.org/abs/2509.04664), arXiv 2509.04664, September 2025. Abstract read. Supports: the one sentence here that training and evaluation reward guessing over admitting uncertainty. Taken properly in lesson 7.
4. Varun Magesh, Faiz Surani, Matthew Dahl, Mirac Suzgun, Christopher D. Manning and Daniel E. Ho, ["Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools"](https://doi.org/10.1111/jels.12413), *Journal of Empirical Legal Studies*, 2025. Read in part. Supports: the single sentence in the misconceptions list that the benefit of giving one of these systems a search tool has been measured, on commercial legal research systems tested in 2024, and is smaller than the vendors claimed. The figures are in lesson 7.
