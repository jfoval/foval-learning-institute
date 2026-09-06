---
title: Valid, sound, and why your opinion of the conclusion gets in the way
minutes: 70
objectives:
  - Explain validity as the absence of any possible case in which the premises are true and the conclusion false
  - Show that an argument is invalid either by describing such a case or by pouring new content into its shape until the premises come out true and the conclusion false
  - Compare valid and invalid arguments with true and false premises, and identify the one combination that cannot occur
  - Predict how belief bias will affect a judgement of validity, and apply the fix of testing the link before consulting your opinion of the conclusion
quiz:
  - q: >-
      A friend argues, "Every time the cafe's card machine has gone down, the wifi was down too. The
      wifi is down right now. So the card machine is down." The wifi really is down. Which verdict,
      and which reason for it, is right?
    options:
      - Valid, because the first premise links the two failures and the second premise reports the wifi failure
      - Invalid, because the wifi can be down for reasons that leave the card machine working fine
      - Valid but unsound, because nobody could know that "every time" is true
      - Invalid, because a claim about the past cannot tell you anything about what is true right now
    answer: 1
    explain: >-
      Ask the one question. Could the premises be true and the conclusion false? Yes. The first
      premise says card-machine failures come with wifi failures; it says nothing about wifi
      failures always coming with card-machine failures. A world where the router died and the card
      machine is working on its own connection makes both premises true and the conclusion false.
      So option B is right, and it is right for the right reason. Option A reads the first premise
      backwards. Option C reaches the wrong verdict by blaming a premise when the link is what
      fails; even if "every time" were certainly true, the conclusion still would not follow.
      Option D lands on "invalid" by accident, on a reason that would also condemn every sound
      argument built on evidence about the past.
  - q: >-
      You are told that an argument is valid and that its conclusion is false. You have not seen the
      premises. What can you say about them?
    options:
      - Nothing yet; a valid argument with a false conclusion can have premises that are all true
      - They must all be false, because a valid form carries the truth value of the conclusion back to them
      - At least one of them is false, because a valid form cannot take true premises to a false conclusion
      - They must be about something unrelated, because validity requires the premises to guarantee the conclusion
    answer: 2
    explain: >-
      Validity means there is no possible case with all premises true and the conclusion false. If
      the conclusion is false and the form is valid, the actual case must contain at least one false
      premise, because otherwise it would be exactly the case validity rules out. That is option C.
      Option A describes the one cell of the table that cannot occur. Option B goes too far; one
      false premise is enough, and the others may be perfectly true. Option D confuses validity with
      irrelevance; a valid argument's premises are precisely the ones that bear on the conclusion.
  - q: Which of these arguments is sound?
    options:
      - All flightless birds live in cold places. The kiwi is a flightless bird. So the kiwi lives in a cold place.
      - All spiders have eight legs. Some eight-legged animals are scorpions. So some spiders are scorpions.
      - No amphibians have feathers. All frogs are amphibians. So no frogs have feathers.
      - Some vegetables are green. All spinach is a vegetable. So some spinach is green.
    answer: 2
    explain: >-
      Sound means valid with all premises true, so you have to check both things, and in that order.
      Option C is valid (no A are B, all C are A, so no C are B) and both premises are true, so it
      is sound and its conclusion is guaranteed. Option A has a valid shape but a false first
      premise; ostriches and emus are flightless and live in warm places. So option A is unsound,
      and where its kiwi lives is now a question the argument has stopped answering. Option B has
      true premises but an invalid shape; "some
      eight-legged animals are scorpions" puts scorpions somewhere inside the eight-legged animals,
      and nothing forces that somewhere to overlap the spiders. Option D is the one worth dwelling
      on. Its premises are true and its conclusion is true, and it is still invalid, because it has
      the same shape as B. A true conclusion is not evidence that the link holds.
  - q: >-
      You give a class two invalid arguments with exactly the same shape. The first ends "so some
      fizzy drinks are not healthy"; the second ends "so some vegetables are not healthy". Going by
      what Evans, Barston and Pollard found, what should you expect?
    options:
      - Roughly equal acceptance of both, because the class has been told to judge the logic and not the content
      - Much higher acceptance of the first, whose conclusion the class already believes, although the reasoning in the two is equally bad
      - Much higher acceptance of the second, because people distrust a conclusion that merely repeats what they already think
      - Low acceptance of both, because an invalid shape becomes obvious once the same shape is met twice
    answer: 1
    explain: >-
      This is the belief-bias pattern applied to new content. Same shape, same flaw, different
      conclusion, and the version whose conclusion people already accept is endorsed far more often.
      That is option B. In Evans, Barston and Pollard's materials, 71% of the invalid arguments with
      a believable conclusion were accepted as valid against 10% of the invalid arguments with an
      unbelievable one, pooled across their three experiments. Option A is what the instructions ask
      for and what people do not manage to do. Option C has the direction backwards; agreement buys
      an argument less scrutiny, not more. Option D assumes that meeting the shape twice fixes it.
      In these studies each argument was judged on its own, and even readers who can see the shape
      tend to endorse the version they like.
  - q: >-
      You are reading an argument for a conclusion you have wanted to be true for years. You have
      found the conclusion and you have found the premises. What does this lesson tell you to do
      next, and why?
    options:
      - Check whether you believe the conclusion first, so that you know how sceptical to be about the premises
      - Hand it to someone who disagrees with you, because belief bias is not something you can work around on your own
      - Look for a counterexample only if a premise turns out to be false, since a false premise sinks the argument anyway
      - Ask whether every premise could be true while the conclusion is false, and settle that before your opinion of the conclusion gets a vote
    answer: 3
    explain: >-
      The defence is an order of operations, and option D is the order. The link question has an
      answer that does not depend on what you think of the conclusion, so you can get an honest
      answer out of it if you ask it first. Option A is exactly the failure the studies measure; the
      fast check on the conclusion is the thing that then does your checking for you. Option B gives
      up too early. The subjects in these studies had no help either, and the ones who worked from
      the premises did better than the ones who started at the conclusion, which is a procedure you
      can copy. Option C confuses two separate questions and gets the order wrong twice; a false
      premise makes an argument unsound, and it tells you nothing about whether the link holds.
  - q: >-
      You want to show that "No A are B; some C are not A; so some C are B" is invalid. Which
      substitution does the job?
    options:
      - A is cats, B is dogs, C is birds
      - A is squares, B is circles, C is shapes
      - A is mammals, B is birds, C is whales
      - A is triangles, B is squares, C is rectangles
    answer: 0
    explain: >-
      A counterexample keeps the shape and makes every premise plainly true and the conclusion
      plainly false. Option A does it. No cats are dogs, some birds are not cats, and no bird is a
      dog, so the shape has been shown to fail. Option B gives "no squares are circles, some shapes
      are not squares, so some shapes are circles", which ends in a true conclusion and therefore
      shows nothing. Option D does the same, since squares really are rectangles. Option C is the
      instructive failure. It reaches a false conclusion, which looks promising, but its second
      premise says some whales are not mammals, and that is false. A counterexample with a false
      premise proves nothing, because the case it describes is not a possible case at all.
---

A neighbour says this to you over the fence, and it sounds like reasoning. Every flat in this building that's had damp has had its windows painted shut. Your windows are painted shut. So you're going to get damp.

Most people nod along. The premises sound right, the conclusion sounds like the kind of thing that happens, and the whole thing has the rhythm of reasoning. Now hold the shape and change the words. Every cat is a mammal. Your dog is a mammal. So your dog is a cat.

Same skeleton. The second version is obviously broken, and that means the first one was broken too. Nothing about the damp argument guaranteed its conclusion; it just had a conclusion you were ready to believe. Telling those two things apart, the quality of the link and your opinion of the conclusion, is the whole of this lesson, and it turns out to be harder than it sounds, for reasons psychologists measured in 1983.

Lesson 1 gave you the six-step check and filled in the first three: find the conclusion, find the premises, supply what's missing. This lesson fills in step 4 for one kind of argument. It's the kind whose premises are meant to settle the matter, where the arguer is claiming that if you grant the premises you have already granted the conclusion. Logicians call that a deductive argument, and Van Cleave's open textbook defines it as one whose conclusion "is supposed to follow from its premises with absolute certainty", as against an inductive argument, whose premises are claimed only to make the conclusion probable ([Van Cleave 1.8](https://human.libretexts.org/Bookshelves/Philosophy/Introduction_to_Logic_and_Critical_Thinking_2e_%28van_Cleave%29/01%3A_Reconstructing_and_Analyzing_Arguments/1.08%3A_Deductive_vs._Inductive_Arguments)).[2] Lesson 5 takes the other half. This lesson also explains why step 6, consult your opinion of the conclusion, comes last and not first.

## What "valid" means, and what it doesn't

Take the cat argument and ask one question: could both premises be true and the conclusion still be false? Yes. Every cat is a mammal, your dog is a mammal, and your dog is not a cat. That is a possible situation, in fact it's the actual one, and it's enough to sink the argument.

That question is the definition. In [*forall x*](https://forallx.openlogicproject.org/), the open logic textbook we lean on throughout this course: "An argument is valid if and only if the conclusion is a consequence of the premises. An argument is invalid if and only if it is not valid, i.e., it has a counterexample."[1] A counterexample is a possible case in which every premise is true and the conclusion is false. Find one and the argument is invalid. Show that none can exist and it's valid. Van Cleave puts the same idea from the other side: a valid argument is one whose conclusion cannot possibly be false, assuming the premises are true.[2]

Notice what the definition is about. It's about the link between premises and conclusion, and nothing else. It is not about whether the premises are true, not about whether the conclusion is true, and not about whether the argument is any good. *forall x* is blunt about it: "validity is not about the actual truth or falsity of the sentences in the argument."[1] The authors add, in a footnote, that there is exactly one case where the actual facts do settle it: "if the premises are in fact true and the conclusion is in fact not true, then we live in a counterexample; so the argument is invalid."[1] That is the one cell of the table you'll meet in a moment, and it's the only place where looking at the world can tell you about the link.

Van Cleave's example makes the independence hard to miss. Everyone born in France can speak French; Barack Obama was born in France; so Barack Obama can speak French. Every sentence in it is false, and the argument is valid, because if you did grant those premises you would have to grant the conclusion.[2]

That offends people the first time they read it. Surely an argument with a false premise is a bad argument? It might be. But "bad" is a bigger word than "invalid". Validity is one specific property, and it's worth keeping narrow, because it's the property you can check without knowing anything about the world.

:::checkpoint "All fish fly. All whales are fish. So all whales fly." Is it valid?
Yes. Ask the question: is there any possible case where all fish fly and all whales are fish, and yet some whale doesn't fly? No. If every whale is a fish and every fish flies, the whales fly. The premises are both false and the conclusion is false, and the argument is valid, because validity is about the link. Hold on to this one; it's the standard example, and the next section builds on it.
:::

## The shape is what's valid

Stay with the fish. Write it in standard form, the way lesson 1 taught you.

```
1. All fish fly.
2. All whales are fish.
------------------------------------------------------------------------
C: All whales fly.
```

Two false premises, a false conclusion, and a valid argument. Now swap the content and keep the shape.

```
1. All mammals breathe air.
2. All whales are mammals.
------------------------------------------------------------------------
C: All whales breathe air.
```

Two true premises, a true conclusion, and the same valid argument. The letters underneath are identical: all A are B, all C are A, so all C are B. What made the first argument valid wasn't anything about fish. It was the shape, and the shape is shared.

That's why swapping the content is a test. A valid form is a shape that can't take you from truth to falsehood, whatever you pour into it. So to test a shape, keep it and pour in content that makes the premises obviously true and the conclusion obviously false. If you can, the shape doesn't guarantee anything, and neither did the argument you started with. If every attempt fails because the conclusion keeps coming out true, you're starting to see why the shape holds.

Try it on the damp argument from the opening. Its shape is: all A are B (every damp flat has painted-shut windows); this C is B (your flat has painted-shut windows); so this C is A (your flat is damp). The cat-and-dog version made the premises true and the conclusion false. So the shape is invalid, and the damp argument is invalid, however plausible the conclusion. Your neighbour might still be right about the damp. Their argument didn't show it.

### Two ways to say the same thing

You've now met "counterexample" twice, and they are not obviously the same word.

The first is a **possible case**: a situation, described in words, in which every premise of *this* argument holds and its conclusion fails. Your dog, standing there being a mammal and not a cat, is that. This is the definition *forall x* gives, and it is the one the word means.[1]

The second is a **substitution**: you keep the argument's shape, put fresh content into it, and end up with a *different* argument whose premises are plainly true and whose conclusion is plainly false. The cat-and-dog argument is that, relative to the damp argument.

They connect like this. A substitution is a way of building a possible case that you can see all at once. Rather than trying to imagine a situation that fits the damp argument's own words, you find familiar content where truth and falsehood are obvious, and the shape carries the verdict back. It works because validity belongs to the shape: if the shape lets one argument run from true premises to a false conclusion, it will let every argument with that shape do the same. This second technique has a name of its own, refutation by logical analogy, and you'll meet it again in lesson 8, where its limits turn out to matter.

So: "find a counterexample" always means the first thing. Substituting content is the usual way of doing it, and for the all-and-some arguments in this lesson it's the fastest way. It isn't the only way, and lesson 4 gives you a method that settles the question with a pencil instead of an imagination.

## The four cells, and the one that's empty

Once you separate validity from truth, there's a small table you should be able to draw from memory. Down the side, the argument is valid or invalid. Along the top, the premises are all true or at least one is false. Every combination can occur except one.

<svg viewBox="0 0 420 300" role="img" aria-labelledby="fourcells-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="fourcells-title">A two-by-two table. The rows are valid and invalid; the columns are premises all true and at least one premise false. Three of the four cells read "conclusion can be either". The valid row with all premises true reads "conclusion must be true", which is the combination that rules out a valid argument with true premises and a false conclusion.</title>
  <text x="72" y="26" font-size="15" fill="var(--text-2, #4a5260)">Premises all true</text>
  <text x="248" y="26" font-size="15" fill="var(--text-2, #4a5260)">One premise false</text>
  <text x="2" y="98" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Valid</text>
  <text x="2" y="228" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Invalid</text>
  <rect x="68" y="40" width="176" height="125" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <rect x="244" y="40" width="176" height="125" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <rect x="68" y="165" width="176" height="125" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <rect x="244" y="165" width="176" height="125" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="156" y="95" font-size="15" fill="var(--oxblood, #8b1e2d)" text-anchor="middle">Conclusion</text>
  <text x="156" y="118" font-size="15" fill="var(--oxblood, #8b1e2d)" text-anchor="middle" font-weight="bold">must be true</text>
  <text x="332" y="95" font-size="15" fill="var(--text, #111418)" text-anchor="middle">Conclusion</text>
  <text x="332" y="118" font-size="15" fill="var(--text, #111418)" text-anchor="middle">can be either</text>
  <text x="156" y="220" font-size="15" fill="var(--text, #111418)" text-anchor="middle">Conclusion</text>
  <text x="156" y="243" font-size="15" fill="var(--text, #111418)" text-anchor="middle">can be either</text>
  <text x="332" y="220" font-size="15" fill="var(--text, #111418)" text-anchor="middle">Conclusion</text>
  <text x="332" y="243" font-size="15" fill="var(--text, #111418)" text-anchor="middle">can be either</text>
</svg>

Three cells say the same thing and one doesn't, and the one that doesn't is the whole content of the table. Take them in turn.

**Valid, all premises true.** Then the conclusion is true; that's what validity means. Whales breathe air.

**Valid, a false premise.** The conclusion might be false (all fish fly, all whales are fish, so all whales fly) or, by luck, true (all fish fly, all sparrows are fish, so all sparrows fly). A valid form with a false premise guarantees nothing about the conclusion either way.

**Invalid, all premises true.** The conclusion might be true (every cat is a mammal, my neighbour's tabby is a mammal, so the tabby is a cat) or false (every cat is a mammal, my dog is a mammal, so my dog is a cat). The premises being true doesn't help, because the link doesn't hold.

**Invalid, a false premise.** Anything goes.

So the missing combination is: valid, all premises true, conclusion false. That combination cannot exist, and rarity has nothing to do with it. "Valid" rules it out by definition, which is why the shaded cell says "must" where the others say "can". This is the one piece of the lesson I'd ask you to memorise rather than reconstruct, and it follows from the definition you already have rather than from anyone's authority: if such an argument existed, the case it sat in would be a counterexample, and an argument with a counterexample is not valid.

The table has a use that's easy to miss. If you know an argument is valid and you know its conclusion is false, you've learned something about the premises without reading them: at least one of them is false.

:::checkpoint A valid argument has a false conclusion. What do you know about its premises?
At least one of them is false. If they were all true, the argument would sit in the empty cell, valid with true premises and a false conclusion, which can't happen. You don't know which premise is false, and you don't know that all of them are; one is enough.
:::

That move is old enough to have a name. Assume something, show that a valid argument runs from it to a conclusion you know is false, and conclude that the assumption was false. It's called reductio, and it's the shape of every "if that were true, then this would follow, and it doesn't" you have ever made. The table gives you the weaker version: sometimes all you learn is that *one* of several premises has to go, and you still have to work out which. In a reductio you have named the suspect in advance, which is why it delivers a verdict and the table on its own does not.

## Sound: the word for what you actually wanted

Validity by itself doesn't get you anywhere. A valid argument with a false premise is a perfectly built bridge starting from the wrong bank. What you want is an argument that's valid *and* has true premises. That is called sound. Again from *forall x*: "an argument is sound if and only if it is both valid and all of its premises are true."[1] Van Cleave adds the consequence in one line: the conclusion of a sound argument will always be true ([Van Cleave 1.7](https://human.libretexts.org/Bookshelves/Philosophy/Introduction_to_Logic_and_Critical_Thinking_2e_%28van_Cleave%29/01%3A_Reconstructing_and_Analyzing_Arguments/1.07%3A_Soundness)).[2]

A sound argument guarantees its conclusion, which is a stronger thing than making it likely. If someone shows you a sound argument for a conclusion you dislike, the conclusion is true and your dislike is the thing that has to move. That's a strong claim, and it's exactly why "sound" is a high bar: you have to establish validity, which logic can do, and the truth of every premise, which logic can't.

That division of labour runs through the whole course. To rebut an argument, *forall x* says, "you can show that (one or more of) the premises are not true, or you can show that the argument is not valid. Logic, however, will only help you with the latter!"[1] Logic tests the link. Whether the premises are true is a question about the world, and it needs evidence, which is the business of other courses (statistics, science, history) and of lesson 7's acceptability condition here. What this lesson gives you is the half of the job you can do at your desk.

:::checkpoint You've checked an argument and it seems sound, but the conclusion still feels wrong. Which step of the six-step check do you go back to?
Step 5, the premises. If the argument is genuinely sound, the conclusion is true and the feeling is what's mistaken, so a feeling of wrongness is no reason to revisit step 4; you've already found the link holds. What a feeling of wrongness *can* legitimately do is send you back to check each premise harder, because "seems sound" means you accepted the premises, and one of them might not deserve it. If they survive that second look, the argument has done its job, and step 6 is where you update your opinion rather than the argument.
:::

## Building a counterexample, one step at a time

The method, done once for you and then handed over. Take this shape:

```
1. All A are B.
2. Some B are C.
------------------------------------------------------------------------
C: Some A are C.
```

It looks reasonable. A sits inside B, and C overlaps B, so surely C reaches A? Let's try to break it. The rule: pick everyday classes for A, B and C that make both premises obviously true and the conclusion obviously false.

First attempt: A = cats, B = mammals, C = pets. All cats are mammals, true. Some mammals are pets, true. Some cats are pets. True. This substitution isn't a counterexample; the conclusion came out true. That doesn't mean the argument is valid. It means this particular content didn't expose the gap. Both premises can be true in ways that leave the conclusion true, and the question is whether they can be true in a way that leaves it false.

Now you try. Keep A = cats and B = mammals. Find a C that overlaps mammals but has no cats in it at all. Write it down before you go on.

:::predict What C makes "all cats are mammals; some mammals are C; so some cats are C" plainly false at the end?
C = dogs. All cats are mammals. Some mammals are dogs. So some cats are dogs. Both premises true, conclusion false, and the shape is dead. Any class that overlaps mammals while excluding cats would do: horses, whales, humans. The move was to notice that "some B are C" only puts C somewhere inside B, and A is also somewhere inside B, and nothing forces those two somewheres to touch.
:::

Two things to notice about the method. First, the content you use to break a shape has nothing to do with the content of the argument you're testing. You're testing the skeleton, so you want the most familiar flesh you can find: cats, dogs, mammals, whales, squares and rectangles. Where the truth and falsehood are obvious, nothing distracts you from the shape.

Second, the two outcomes are not symmetrical. One successful substitution settles invalidity, because it exhibits the possible case the definition asks for. Three failed attempts settle nothing at all: they show you haven't found the hole, not that there isn't one. Proving a shape valid takes a different tool, and lesson 4 gives you the Venn method for exactly this family.

It's worth knowing now that the asymmetry runs deeper than "keep trying". A single argument does not have a single shape. "All cats are mammals, some mammals are dogs, so some cats are dogs" instantiates the shape above, and it also instantiates cruder shapes such as "premise, premise, therefore conclusion", which plenty of valid arguments share. The philosopher Gerald Massey built an objection out of this: because you have to pick which shape to hold the argument to, "no argument can be convicted of being a fallacy on logical grounds" in the way a valid argument can be acquitted.[8] In practice, when the shape is the obvious one and the substitution is clean, a counterexample is as convincing as reasoning gets. Lesson 8 is where the objection starts to bite, because that is where people start naming fallacies from shape alone.

:::callout A good place to stop
That's the machinery: validity, soundness, the four cells, and the counterexample. If you're reading in one sitting and want a break, take it here. The rest of the lesson is about why knowing all of that does not stop you getting it wrong, and it will land better on a fresh head.
:::

## What happens when you already have a view: belief bias

Everything so far you could learn from a textbook. What follows was not obvious from the armchair, and it took an experiment to establish.

In 1983 Jonathan Evans, Julie Barston and Paul Pollard at Plymouth Polytechnic in England ran three experiments on syllogisms, the two-premise arguments this lesson has been using.[3] The design was clever. Every argument was one of four kinds: valid with a believable conclusion, valid with an unbelievable one, invalid with a believable one, invalid with an unbelievable one. Undergraduates were told to treat each as a logic problem and to accept a conclusion only if it necessarily followed from the premises.[4]

Before you read what happened, do the task. Here are the four syllogisms Evans reproduces from that design in a later review, in his own words.[4] For each one, answer the question the subjects were asked: does the conclusion follow of necessity from the premises? Write four answers down before you read on. Take about a minute.

1. No police dogs are vicious. Some highly trained dogs are vicious. Therefore, some highly trained dogs are not police dogs.
2. No nutritional things are inexpensive. Some vitamin tablets are inexpensive. Therefore, some vitamin tablets are not nutritional.
3. No addictive things are inexpensive. Some cigarettes are inexpensive. Therefore, some addictive things are not cigarettes.
4. No millionaires are hard workers. Some rich people are hard workers. Therefore, some millionaires are not rich people.

:::predict Which of the four did you accept? And which two of them have exactly the same shape as each other?
Items 1 and 2 are valid. Items 3 and 4 are invalid, and they are the pair with the same shape. From "no A are B, some C are B" what actually follows is "some C are not A" (some cigarettes are not addictive; some rich people are not millionaires), and both 3 and 4 offer a conclusion that runs the other way.

The design crosses that with believability. Item 1 is valid with a conclusion most people accept, item 2 is valid with one they don't, item 3 is invalid with one they do, and item 4 is invalid with one they don't. Believable and unbelievable are the experimenters' categories, fixed in advance from ratings of the conclusions, not verdicts on whether the conclusions are true.

If you accepted 3 and rejected 4, you have just produced the result. If you rejected both, check whether you rejected item 2 as well, because that is the other half of the effect.
:::

You can build the counterexample for item 3 yourself. Imagine the only addictive things in the world are cigarettes, all of them expensive, and there are also some cheap cigarettes that aren't addictive. Both premises true; "some addictive things are not cigarettes" false. Nothing about your view of cigarettes came into that.

One detail about the originals, because it changes what the effect is a result about. Subjects did not meet bare syllogisms like the ones above. Each argument arrived embedded in a prose passage of about eighty words, of the kind you might read in a newspaper, which is closer to how arguments actually reach you.[3]

:::predict Same shape, same flaw. Which of the two invalid arguments, cigarettes or millionaires, did more people accept as valid, and roughly how big was the gap?
71% of the invalid arguments with a believable conclusion, the type item 3 illustrates, were accepted as valid, against 10% of the invalid arguments with an unbelievable conclusion, the type item 4 illustrates. Those are means across all three experiments, weighted by sample size; the figures belong to the four problem types, not to those two passages specifically, since each subject saw one problem per topic.[3] A sixty-point gap, and the only thing that changed was whether the conclusion was something people already believed.
:::

Here is the whole design in one picture. The valid pair is the top two bars, the invalid pair the bottom two.

<svg viewBox="0 0 420 250" role="img" aria-labelledby="evans-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="evans-title">Bar chart of the proportion of conclusions accepted as valid in Evans, Barston and Pollard 1983, pooled across three experiments. Valid with a believable conclusion, 89 per cent. Valid with an unbelievable conclusion, 56 per cent. Invalid with a believable conclusion, 71 per cent. Invalid with an unbelievable conclusion, 10 per cent. The gap between believable and unbelievable is 33 points on the valid arguments and 61 points on the invalid ones.</title>
  <text x="0" y="22" font-size="15" fill="var(--text-2, #4a5260)">Accepted as valid</text>
  <rect x="150" y="40" width="178" height="24" fill="var(--navy, #0f2a4a)"/>
  <text x="0" y="58" font-size="15" fill="var(--text, #111418)">Valid, believable</text>
  <text x="334" y="58" font-size="15" fill="var(--text, #111418)">89%</text>
  <rect x="150" y="76" width="112" height="24" fill="var(--navy, #0f2a4a)"/>
  <text x="0" y="94" font-size="15" fill="var(--text, #111418)">Valid, not</text>
  <text x="334" y="94" font-size="15" fill="var(--text, #111418)">56%</text>
  <rect x="150" y="130" width="142" height="24" fill="var(--oxblood, #8b1e2d)"/>
  <text x="0" y="148" font-size="15" fill="var(--text, #111418)">Invalid, believable</text>
  <text x="334" y="148" font-size="15" fill="var(--text, #111418)">71%</text>
  <rect x="150" y="166" width="20" height="24" fill="var(--oxblood, #8b1e2d)"/>
  <text x="0" y="184" font-size="15" fill="var(--text, #111418)">Invalid, not</text>
  <text x="334" y="184" font-size="15" fill="var(--text, #111418)">10%</text>
  <line x1="150" y1="34" x2="150" y2="196" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="144" y="218" font-size="15" fill="var(--text-2, #4a5260)">0</text>
  <text x="316" y="218" font-size="15" fill="var(--text-2, #4a5260)">100%</text>
</svg>

Read the two gaps rather than the four numbers. Belief moves the valid pair by 33 points and the invalid pair by 61. Both halves of that matter. People plainly did respond to logic, since valid arguments were accepted more often than invalid ones at both believability levels, and the paper's abstract records "equally substantial effects of logic" alongside "substantial belief biases".[3] And a believable conclusion could still carry an invalid argument most of the way to acceptance. In the second experiment, with sixty-four students, subjects were correct 87% of the time when logic and belief pointed the same way and 48% of the time when they conflicted.[3] Forty-eight per cent looks like guessing and wasn't: a guesser scores about half by accident, while these subjects were being pulled off the answer in a particular direction by a particular thing.

The effect replicates. Lambell, Evans and Handley reran it with materials they describe as identical to the 1983 set and got 74%, 59%, 70% and 29% for the same four types: the same pattern, with a smaller gap on the invalid pair (41 points rather than 61).[5] The direction is robust. The size moves with the materials, which is worth remembering whenever you meet a single striking number from a single study, this lesson's included.

I want to be precise about what you're allowed to conclude. The people in these studies were intelligent adults who had been told, in writing, to judge the logic. They were not careless. They were doing what minds do.

## Why the mind does this

The honest answer has two layers: what is well established, and what is still argued about.

What's established is the basic pattern. Believability shifts how often an argument is endorsed as valid, and it has been found again and again over forty years.[3][5]

One explanation, offered by Evans's group among others, goes like this. Checking a conclusion against what you already believe is fast; you do it before you've finished reading. Checking whether the premises force the conclusion is slow; you have to build the situation the premises describe and look for a way the conclusion fails. If the fast check comes back "yes, that's true", many people stop there. If it comes back "no, that's absurd", they go looking for the flaw, and find it. Later writers call this account selective scrutiny: the conclusion is scanned for believability first, and the premises get real attention mainly when the conclusion fails that scan.[5] The name is a later one; the 1983 paper describes the mechanism without labelling it.

Evans's own team offered a second account alongside it, misinterpreted necessity, and it's worth knowing what is being misinterpreted. The instruction was to accept a conclusion only if it *follows of necessity* from the premises. Some people appear to read that as "is consistent with the premises", which is a much weaker test, and a conclusion you already believe passes a consistency test easily. On this account people are reasoning, and reasoning about the wrong question.[5]

The verbal protocols from the 1983 study fit both pictures in different subjects. The abstract describes them as, in some cases, "rationalizations for prejudiced decisions" and, in others, "a genuine process of premise to conclusion reasoning".[3] Read "prejudiced" there in its 1983 sense of pre-judged: some subjects had reached a verdict and were explaining it afterwards, and some were working from the premises. The protocol coding also found that subjects who started at the conclusion were more swayed by belief, while those who started from the premises reasoned better, which is the finding this lesson's practical advice rests on.[5]

The paper's authors add a third thing, about their own materials rather than about minds, and it's the sort of caveat worth copying. Their unbelievable conclusions were rated only about a point below the midpoint of the believability scale, so the conflict those items created may have been milder than the believable items' pull.[3]

What's unsettled is the deeper story about what the effect *is*. Klauer, Musch and Naumer built a mathematical model of the task, ran four experiments of their own and reanalysed twenty-two published studies, and concluded that the usual acceptance data are "structurally too sparse" to tell the competing accounts apart; they proposed an account of their own rather than stopping at the complaint.[6] Dube, Rotello and Heit went further and argued that the effect has been misdescribed. On their reading it is a shift in *response bias*, in how much evidence you require before you are willing to say "yes, that follows", rather than a change in how accurately you reason. Their claim is not "we cannot tell". It is "we can tell, and the answer is response bias", and their sharpest version targets one specific thing: the finding that the belief effect is larger on invalid arguments than on valid ones.[7] That interaction is exactly what the two gaps in the chart above show, and on their analysis it is an artefact of the measure rather than a fact about reasoning.

I'm not going to pretend that's resolved, and it matters which part is doing the work for you. The disputed part is the mechanism and the size of the invalid-versus-valid difference. The part every camp accepts, including Dube and his colleagues, is that a conclusion you already believe is more likely to get your endorsement, whether or not the argument has earned it. If that happens because you check less, the advice below is the fix. If it happens because you set a lower bar for saying yes, the advice below is still the fix, because it makes you answer the link question before the bar is set.

:::callout Symmetry
It's tempting to read belief bias as something other people have. It isn't. The subjects in these studies were university students who had been told in writing to judge the logic, and it showed up anyway. Assume it shows up in you: on the arguments whose conclusions you like, you go easier. The only defence is procedural, and it's the next section.
:::

## The fix is an order of operations

Nobody has shown a way to make belief stop arriving first; it is fast and automatic, and the studies find it in people who have just been told not to let it in. What you can do is refuse to let the fast check be the last one. That's what step 6 of the check is for, and why it's step 6 and not step 1.

When you meet an argument, especially one whose conclusion you have feelings about:

1. Find the conclusion.
2. Find the premises.
3. Supply what's missing.
4. Test the link. For a deductive argument, that means asking: could every premise be true and the conclusion still false? Try to build the case.
5. Test the premises. Are they true, or acceptable on the evidence you have?
6. Only now ask whether you believe the conclusion, and let steps 4 and 5 tell you what to do with that belief.

The order matters more than any single step, and it has some support from the studies themselves: the subjects whose protocols show them starting at the premises reasoned better than the ones who started at the conclusion.[5] If you skip to 6, you'll do 4 badly, and you'll do it worst on the arguments that flatter you. If you force yourself through 4 first, you'll catch the cigarettes argument even though you agree with it, because "could the premises be true and this false?" has an answer that doesn't depend on what you think of cigarettes.

One habit that helps: when the conclusion is one you like, swap the content for something neutral before you judge the shape. That's what the cat-and-dog version of the damp argument did in the first paragraph. You couldn't feel the flaw with damp in the sentences; you could feel it instantly with cats. The shape hadn't changed. Your feelings had gone quiet.

## What people get wrong

**"Valid means true."** Validity is a property of the link. "All fish fly, all whales are fish, so all whales fly" is valid and everything in it is false. If you catch yourself saying "that's not valid, it's not even true", you've merged two questions that need to stay apart.

**"Valid means good."** A valid argument with a false premise establishes nothing. The word you want for "good" in the deductive case is sound, and sound is a much harder thing to show.

**"A false conclusion means the argument is invalid."** No. A false conclusion plus a valid form tells you a premise is false. The whales-fly argument is valid, false conclusion and all. What a false conclusion rules out is soundness, not validity.

**"Logic tells you what's true."** It tells you what follows from what. Logic can help you show an argument is invalid; it can't show you that a premise is false.[1] If someone says "logically, X", they've either shown that X follows from premises you'll have to check separately, or they've said nothing.

**"Deduction goes general to particular, induction particular to general."** It's in a lot of school notes and it's wrong. The difference is what the premises are claimed to do: guarantee the conclusion, or make it probable.[2] "Ana and Ben are the only two people in the choir, Ana is forty, Ben is forty, so everyone in the choir is forty" runs particular to general and is deductive, because if those premises hold the conclusion cannot fail. Lesson 5 works this through properly, because that's where the two kinds sit side by side and the difference does some work.

**"I understood the definition, so I'm immune."** The subjects in 1983 were told, in writing, to accept only conclusions that necessarily followed. Knowing the definition and applying it under the pull of a believable conclusion are two different skills, and only the second one protects you.

## Practice

Sort each of the six arguments below into one of the four cells: valid or invalid, premises all true or at least one false. For every invalid one, write a counterexample: keep the shape, swap the content, make the premises plainly true and the conclusion plainly false. Do the work on paper, all six, before you open the answers.

1. All squares are rectangles. All rectangles have four sides. So all squares have four sides.
2. All squares are rectangles. Some rectangles are not squares. So some squares are not rectangles.
3. No insects have eight legs. All spiders have eight legs. So no spiders are insects.
4. All birds can fly. Penguins are birds. So penguins can fly.
5. Every apple in this bowl is green. The fruit in my hand came from this bowl and is green. So the fruit in my hand is an apple.
6. Anyone who can borrow from this library lives in the borough. Sam lives in the borough. So Sam can borrow from this library.

:::checkpoint Open this when all six verdicts are written down.
(1) Valid, true premises, so sound.

(2) Invalid; the shape "all A are B, some B are not A, so some A are not B" fails, and this very example is a counterexample to itself, since both premises are true and the conclusion is false.

(3) Valid, true premises, sound. The counterexample method can't break "no A are B, all C are B, so no C are A", and lesson 4 will show you why with circles.

(4) Valid, but the first premise is false, so unsound, and the conclusion is false too. A valid form carried a false premise to a false conclusion, which is allowed.

(5) Invalid; the bowl might hold green pears as well, so the premises can be true and the fruit a pear.

(6) Invalid. Living in the borough is what the first premise *requires* of borrowers, not something it *grants* to residents. A counterexample: anyone who can borrow lives in the borough, and Sam lives in the borough but has never joined. Lesson 3 gives this mistake its name.

If you sorted (4) as invalid because the conclusion is false, go back to the four-cell table. That one is the misconception this lesson exists to remove.
:::

:::exercise Do it now
Open the folder you started in lesson 1 and take out the argument you wrote in standard form. Ask it the one question from this lesson: could every premise be true and the conclusion still be false?

If yes, write the case. Be concrete: describe a situation, in a sentence or two, where each premise holds and the conclusion doesn't. You've shown the argument is invalid, and you've shown it without saying a word about whether you agree with the conclusion.

If you can't find a case, write down why you think none exists. Then write the honest next question, which is whether each premise is actually true. That's step 5, and it's where lesson 7 will pick up.

Either way, before you close the folder, note what you believed about the conclusion before you started. Then note whether the check changed it, and whether the change went in the direction you expected.
:::

One from lesson 1, as a spaced review. Two sentences, almost the same words:

- "I left the party early because the last train was at eleven."
- "You should leave the party early, because the last train is at eleven."

One is an argument and one isn't, and there's a missing premise in the one that is. Say which is which and write the bracketed premise before you open this.

:::checkpoint Which is the argument, and what's the unstated premise?
The first is an explanation. The leaving is taken as given, and the sentence says why it happened. The second is an argument: the last train is offered as a reason to accept a claim about what you should do, and it leans on something unsaid, roughly [if you miss the last train you'll have no way home]. Same word, opposite job, which is why lesson 1 called the indicator words hints and not rules.
:::

Before the quiz, close the page and write down everything you can remember from this lesson. Aim for the definition of validity, the definition of soundness, the empty cell and why it's empty, the two ways of producing a counterexample, and what the 1983 experiments found. Then check your list against the lesson. The gaps you find that way are worth more than the ones the quiz finds for you.

## Connections

This lesson fills in step 4 of the check for deductive arguments. Lesson 3 gives you the four conditional shapes worth memorising (if-then, and its cousins) and the two invalid look-alikes that fool almost everyone; you'll recognise argument (6) above when you get there. Lesson 4 gives you a pencil-and-paper method for all/no/some arguments like the ones in this lesson, so you can prove a shape valid rather than just failing to break it.

Lesson 5 opens the other kind of link, where the premises only claim to make the conclusion probable, and where a counterexample weakens rather than kills; it also takes the deductive and inductive kinds properly apart. Lesson 8 comes back to Massey's point about shapes, which is the reason a fallacy name is a hypothesis and not a verdict. And belief bias returns in lesson 9 as motivated reasoning, the same fast conclusion-check running on the news, where the symmetry note above becomes a checklist.

## Go deeper

- [*forall x: Calgary*](https://forallx.openlogicproject.org/), Part I (chapters 1 to 3), free and openly licensed. Twenty pages on arguments, validity, and the other logical notions, written plainly by logicians. Parts II and III give you truth tables, the formal version of the counterexample method, if you want the symbols.
- Van Cleave, [*Introduction to Logic and Critical Thinking*](https://human.libretexts.org/Bookshelves/Philosophy/Introduction_to_Logic_and_Critical_Thinking_2e_%28van_Cleave%29/01%3A_Reconstructing_and_Analyzing_Arguments), chapter 1, sections [1.6](https://human.libretexts.org/Bookshelves/Philosophy/Introduction_to_Logic_and_Critical_Thinking_2e_%28van_Cleave%29/01%3A_Reconstructing_and_Analyzing_Arguments/1.06%3A_Validity) to [1.8](https://human.libretexts.org/Bookshelves/Philosophy/Introduction_to_Logic_and_Critical_Thinking_2e_%28van_Cleave%29/01%3A_Reconstructing_and_Analyzing_Arguments/1.08%3A_Deductive_vs._Inductive_Arguments). Also free and openly licensed, and slower and gentler than *forall x*: validity, soundness, and the deductive/inductive distinction with more worked cases than we had room for.
- Evans, ["In two minds: dual-process accounts of reasoning"](https://www.sciencedirect.com/science/article/abs/pii/S1364661303002250), *Trends in Cognitive Sciences* 7(10), 2003, 454 to 459. A short review by the lead author of the 1983 study, with the belief-bias effect in a box and the Wason task, which lesson 3 covers, in another.
- Evans, Barston and Pollard, ["On the conflict between logic and belief in syllogistic reasoning"](https://core.ac.uk/download/81101245.pdf), *Memory & Cognition* 11(3), 1983, 295 to 306. The original paper, free in full. It's readable, and the verbal protocols in the discussion are worth the effort.

## Sources

1. Magnus, P. D., Button, T., Trueman, R., Zach, R. et al., *forall x: Calgary* (Fall 2025 edition, CC BY 4.0), chapter 2, at forallx.openlogicproject.org. Definitions of valid, invalid and counterexample; "validity is not about the actual truth or falsity of the sentences in the argument"; footnote 2 of section 2.3, "Well, there is one case where it does: if the premises are in fact true and the conclusion is in fact not true, then we live in a counterexample; so the argument is invalid"; definition of sound as valid with all premises true; rebutting an argument by attacking a premise or the link, and "Logic, however, will only help you with the latter!" The lesson's line on what logic can and cannot show you is a paraphrase of that last quotation, not a quotation.
2. Van Cleave, M. J., *Introduction to Logic and Critical Thinking*, 2nd ed. (Lansing Community College; CC BY 4.0), chapter 1, sections 1.6 Validity, 1.7 Soundness, 1.8 Deductive vs. inductive arguments, on LibreTexts. A valid argument is one whose conclusion cannot possibly be false assuming the premises are true, and validity concerns the relation between premises and conclusion rather than their actual truth; the Barack Obama born in France example as a valid argument in which no statement is true; a sound argument is a valid argument with all true premises, so its conclusion is always true; a deductive argument's conclusion "is supposed to follow from its premises with absolute certainty", an inductive argument's "with a high level of probability", and inductive arguments are defeasible. **How this was read:** the LibreTexts pages for 1.6 to 1.8 could not be fetched from the drafting session (the network egress proxy blocked every outbound request), so the wording above was taken from search-engine extracts of those three pages in September 2026, cross-checked across separate queries. The substance is consistent across extracts and with lesson 1's reading of chapter 1; nothing in this lesson is presented as a verbatim quotation from Van Cleave except the two short phrases in quotation marks, which appeared verbatim in the extracts. A later pass with network access should read the three sections in full and remove this note.
3. Evans, J. St. B. T., Barston, J. L. & Pollard, P., "On the conflict between logic and belief in syllogistic reasoning", *Memory & Cognition* 11(3), 1983, 295 to 306, free in full at core.ac.uk/download/81101245.pdf. Plymouth Polytechnic. Three experiments; abstract: "Substantial belief biases were observed despite controls for possible conversions of the premises. Equally substantial effects of logic were observed despite controls for two possible response biases. A consistent interaction between belief and logic was also recorded; belief bias was more marked on invalid than on valid syllogisms." Protocols "interpreted in some cases as providing rationalizations for prejudiced decisions and, in other cases, as reflecting a genuine process of premise to conclusion reasoning." Experiment 2 (64 undergraduates, paid volunteers): "Overall, subjects were correct 87% of the time when logic accorded with belief and 48% of the time when it did not" (p. 300). Acceptance rates of 89%, 56%, 71% and 10% for the four problem types, read from Tables 1, 2, 4 and 6 and recorded in SOURCES.md as sample-weighted means across the three experiments, not Experiment 1 values (Experiment 1's own invalid-believable rate was 92%). Arguments were embedded in prose passages of roughly eighty words. The General Discussion notes that the unbelievable conclusions were rated only about a point below the midpoint of the believability scale.
4. Evans, J. St. B. T., "In two minds: dual-process accounts of reasoning", *Trends in Cognitive Sciences* 7(10), 2003, 454 to 459, Box 1. The four example syllogisms (police dogs; vitamin tablets; cigarettes; millionaires) quoted verbatim here as the four cells of the 1983 design; participants instructed to endorse only conclusions that necessarily follow; "intelligent adult populations (undergraduate students) are consistently influenced by the prior believability of the conclusion". Figure I plots the endorsement rates as bars without printed numbers, so the figures in this lesson come from source 3, not from this one.
5. Lambell, N. J., Evans, J. St. B. T. & Handley, S. J., "Belief bias, logical reasoning and presentation order on the syllogistic evaluation task", *Proceedings of the 21st Annual Conference of the Cognitive Science Society*, 1999, 282 to 287 (Erlbaum). Restates the 1983 results with the same materials: "71% of participants across three experiments erroneously endorsed" the invalid believable conclusion and "only 10% of participants across three experiments erroneously endorse" the invalid unbelievable one. Describes the selective scrutiny and misinterpreted necessity models, and reports from the 1983 protocols that subjects who focused first on the conclusion were more susceptible to belief while those who focused on the premises reasoned better. Their own replication, with materials "identical to those employed by Evans et al. (1983)", gave 74%, 59%, 70% and 29% for the four types.
6. Klauer, K. C., Musch, J. & Naumer, B., "On belief bias in syllogistic reasoning", *Psychological Review* 107(4), 2000, 852 to 884 (abstract). A multinomial model, four new experiments, and a model-based reanalysis of 22 published studies, which found the standard acceptance data "structurally too sparse" to discriminate between accounts of belief bias; the authors go on to propose an account of their own.
7. Dube, C., Rotello, C. M. & Heit, E., "Assessing the belief bias effect with ROCs: It's a response bias effect", *Psychological Review* 117(3), 2010, 831 to 863 (title and abstract). Argues that the effect is better described as a shift in response bias than as a change in reasoning accuracy, and that the reported interaction between logic and belief is an artefact of the measure used. Cited as the strongest form of the dissenting view; not resolved. The full paper has not been read, so the lesson states the position at the level the abstract supports.
8. Hansen, H., "Fallacies", *Stanford Encyclopedia of Philosophy* (rev. Aug 2024), sec. 3, for Massey's asymmetry: "no argument can be convicted of being a fallacy on logical grounds", because an argument instantiates more than one form. Lesson 8 takes the argument up in full.
