---
source: courses/computer-science-and-ai/using-ai-effectively/lessons/02-what-you-are-talking-to.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Every figure and claim below appears in the lesson. Nothing has been added that the lesson does
  not say. The course is in a neutral school with no standpoint to preserve. Fact-checked in a
  fresh-context subagent against the lesson on 2026-09-19: verdict PASS WITH NITS, and all six nits
  were fixed in this file before rendering. The one that mattered was a dropped attribution: the
  lesson flags its "no store to reach" wording as the course's own and guards it with a
  qualification the first draft of this script had lost, and both are now in the episode.
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1) and Haley (S2). Second episode for Using AI Effectively. The episode leaves
  out the diagram comparing a file system, a search engine and a language model, both practice
  demonstrations, and the callout on what the lesson deliberately does not cover.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Using AI Effectively, lesson two. What you are talking to.

S2: And this is the lesson the course says everything else rests on.

S1: It is. Nine of the eleven lessons are one paragraph applied to something, and that paragraph is here. The lesson's claim is that everything you're told to do with these systems, by anybody, either follows from it or is a ritual somebody picked up and passed on.

S2: Start me where the lesson starts, then.

S1: With two failures that look unrelated. Ask one of these to count the letter r in a long word and you may well get the wrong number, from a system that's just written you a competent paragraph about mediaeval crop rotation. That one is small and funny.

S2: And the second?

S1: Ask for a reference and you may get an author who exists, in a journal that exists, with a title in exactly the right style for that field, and a year, and a volume number, for a paper that was never written.

S2: Those feel like completely different problems.

S1: They have the same cause. Here's the paragraph. It produces text one piece at a time. Each piece is chosen given everything in front of it. The choosing is done by a model built to approximate the statistical shape of an enormous amount of writing.

S2: How much of that is the course's own wording?

S1: Two of the three sentences come almost straight from the United States standards body, NIST, which published a profile for this technology in twenty twenty-four. Explaining where confident false answers come from, they wrote that they are a natural result of the way generative models are designed: they generate outputs that approximate the statistical distribution of their training data, and then, for example, LLMs predict the next token or word in a sentence or phrase.

S2: And the middle sentence, about everything in front of it?

S1: That's not in the quotation. That's lesson three.

S2: All right. Tell me about the pieces, because that's the bit I've never had explained.

S1: The word is token, and it doesn't mean what it used to. The standard textbook in the field says they now try to reserve the word token to mean the output of subword tokenization algorithms. So before a system can work with your text, the text gets cut into pieces. Not letters, because that would make every sentence enormously long. Not words either, because then any word it had never seen would be a blank.

S2: So something in between.

S1: Subwords, is the textbook's name for them. And there's a lovely example in that chapter. Suppose the system met low, and new, and newer during training, but never lower. Cut on whole words and lower is a hole. Cut into subwords and it isn't: the textbook says if we had happened not to ever see the word lower, when it appears we could segment it successfully into low and er, which we had already seen.

S2: So a token is sometimes a word and sometimes a fragment.

S1: And at the limit a single letter. Picture a sentence being cut. A common word like strawberry may well arrive whole, in one piece. Something long and predictable like tokenization might come in two. A rare surname might come in four or five fragments.

S2: And what decides which?

S1: How often each piece turns up in text. Which gives you the consequence, and the lesson is careful to say this next part is its own inference rather than something the textbook states. Because the pieces are chosen by frequency, nothing guarantees the system is handed the letters of a word, and no step in the process spells one out.

S2: So the letter question isn't a hard question. It's a different kind of question.

S1: Exactly that. And here's the part that turns it round on you. Strawberry arriving whole is worse for counting than a rare surname arriving in fragments, which is the opposite of what you'd expect.

S2: Now the other half. The reference that doesn't exist.

S1: For that you need the second thing, and it's the part that surprises people most. There is nowhere to look it up. You know from Digital Literacy what a file system is. A thing lives in a place, it has an address, and fetching it means going to the address. Nothing is produced. And you know what a search engine does. Somewhere there are documents people wrote, the engine finds the ones that match, and hands you a list. Again, nothing is produced.

S2: And this is neither.

S1: Neither. In the first two there's a store, and an arrow reaches it and comes back carrying something that was already there. In the third there's no store for an arrow to reach.

S2: So it knows nothing?

S1: No, and the lesson is careful here, and says the careful version is its own wording rather than a claim any of its sources makes. The loose version is wrong in a way an expert would catch. The system's parameters plainly carry a great deal about the world. That's why the thing answers factual questions correctly at all. What's missing is a document to go and fetch. So an answer is produced rather than retrieved, and so is a citation.

S2: Let me push on that, because I think I'd have argued the other way. It was trained on real papers. So surely its citations come from those papers, even if it muddles two of them.

S1: That's the commonest half-step towards understanding this, and it's still the wrong picture. Training isn't storage. What training produced is a model of the shape of text rather than a copy of the documents it read, and no step in it consults a particular document.

S2: Does that change what I do?

S1: Completely. If you think a citation is a muddled retrieval, you'll try to work out which real paper was meant. If you understand it was produced, you'll go and look for a real source instead, which is both faster and the thing lesson eight turns into a procedure.

S2: So then what's wrong with saying it made that up?

S1: That it implies there's a mode where it doesn't. A system built this way isn't sometimes producing text and sometimes reporting facts. It's producing text every time. When the text happens to be true, that's because the shape of true writing about that subject was well represented in what it learned from. When it's false, the same process ran.

S2: So there's no faulty mode to switch off.

S1: And a confident false answer isn't evidence that anything malfunctioned. The confidence and the falsehood are both properties of the text, and text is what the thing makes.

S2: That sounds bleaker than I think you mean it.

S1: It isn't meant bleakly, and the lesson says it isn't the whole story. Lesson seven takes it properly. For now, hold the narrower version, because it's the one that changes how you work. Ask whether this is the kind of task where the shape of good writing and the truth come apart. Rewriting something you supplied, they don't, and you're on safe ground. Anything that has to match a fact outside the conversation, they do, and no amount of asking nicely changes it.

S2: And one thing people get wrong that follows from all that?

S1: Getting it wrong means it's broken. It doesn't. It means you were on the wrong kind of task, and your first instinct on a bad answer should be to ask what kind of question you asked rather than to ask again more firmly.

S2: That's the episode, and we've skipped the diagram and a callout on two things the lesson deliberately doesn't tell you. The full lesson is at Foval Learning Institute dot org, with both demonstrations to run for yourself. Thanks for listening.

S1: Thanks for listening.
