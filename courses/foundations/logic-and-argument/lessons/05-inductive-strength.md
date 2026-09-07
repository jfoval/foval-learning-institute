---
title: "Inductive strength: samples, analogies, causes, and best explanations"
minutes: 75
objectives:
  - Compare deductive validity with inductive strength, and explain why new evidence can weaken a strong argument but never a valid one
  - Evaluate a generalisation from a sample by its size and representativeness, and an argument from analogy by the relevance of its similarities
  - Apply Mill's method of difference and method of concomitant variation to a causal claim, and name the four readings of a correlation
  - Identify an inference to the best explanation and a conductive argument, and say what makes each one strong or weak
quiz:
  - q: A bakery owner wants to know whether to open an hour earlier. She asks the first forty customers through the door on Saturday morning; thirty-five say yes. She concludes that most of her customers want the earlier opening. What is the main weakness in this argument?
    options:
      - Forty is far too few people to generalise from; she would need several hundred before the sample size stops being the problem
      - Thirty-five out of forty is not a large enough majority to support a claim about "most", so the premise fails to reach the conclusion
      - The first customers of the morning are the ones who already like early opening, so the sample is unrepresentative whatever its size
      - Survey answers are not evidence of what people want, since what customers say and what they do are two different things entirely
    answer: 2
    explain: The problem is who was asked, not how many. People queuing at opening time are exactly the people who would use an earlier hour, so the sample is drawn from the part of the population most likely to say yes. That is a representativeness failure, and a bigger sample of the same early customers would not fix it. Option A treats size as the only thing that matters; forty is small, but that is the lesser problem here. Option B has the arithmetic backwards; 35 of 40 is a strong majority in the sample, and the trouble is that the sample is not the population. Option D throws out surveys altogether, which is too strong; a survey of customers across the whole day would be real evidence.
  - q: A hill farmer argues that it will probably rain today, because in this valley it has rained on twenty-eight of the last thirty days when the wind came from the south-west, and the wind is from the south-west now. You then learn that all thirty of those days fell in the wet season, and today is in the dry season. What is the best description of what has happened?
    options:
      - The argument was strong on the premises it had, and a new premise has weakened it; that is defeasibility, not proof the argument was bad
      - The argument has been shown to be invalid, because the new fact is a counterexample in which the premises are true and the conclusion is false
      - The farmer's original argument was weak all along, because a strong inductive argument is by definition one that new evidence cannot weaken
      - The argument is unchanged, because the twenty-eight days are still true and an inductive argument rests only on the premises it states
    answer: 0
    explain: This is the coin example in a new dress. Twenty-eight of thirty is strong support for "rain today", given nothing else. The dry-season fact is new evidence that the thirty days do not cover today's case well, so the link weakens. Option B uses the wrong test; validity and counterexamples belong to deductive arguments, and an inductive argument never claimed that the premises rule out a dry day. Option C has the definition of strength wrong; every strong inductive argument can be weakened by new evidence, which is the point of calling it inductive. Option D is the mistake of treating the stated premises as the only ones that count; strength depends on everything relevant you know, which is why adding a premise can change the verdict.
  - q: Dev argues that his electric car will reach 200,000 km without battery trouble, because his neighbour's car of the same make, same year, same battery size, same colour, and from the same dealer has just done exactly that. You know that the neighbour's car has been garaged in a mild climate, while Dev parks in an open car park through hot summers, and that heat is known to shorten battery life. How strong is Dev's analogy?
    options:
      - Strong, because five shared features is a large number and two cars of the same make and year are as close to identical as two cars can be
      - Strong, because parking arrangements are a matter of habit rather than a feature of the car, so they do not belong in the comparison
      - Weak, because arguments from analogy can only ever show that two things are similar, never that one will behave like the other
      - Weak, because the one difference bears directly on battery life, while two of the five similarities have nothing to do with it
    answer: 3
    explain: An analogy is as strong as the relevance of its similarities to the conclusion, and one relevant difference can outweigh many similarities. Colour and dealer do no work on battery life at all. Heat exposure does. Option A counts similarities instead of weighing them, which is the mistake the lesson names. Option B is a way of hiding the relevant difference by ruling it out of bounds; anything that affects the conclusion belongs in the comparison, whether or not it is a feature of the car. Option C is too strong in the other direction; analogies can be good arguments when the shared features are the ones doing the causal work.
  - q: A garden centre's records show that houseplants bought together with its premium plant food are returned dead under the one-year guarantee far less often than plants bought on their own. The owner argues that the plant food is keeping the plants alive, and proposes bundling a free bottle with every plant sold. Before spending the money, what is the most important rival reading to rule out, and what would rule it out?
    options:
      - Reverse causation, that a thriving plant somehow prompts its owner to buy plant food; ruled out by checking that the food was bought on the same day as the plant rather than later
      - A common cause, that keen gardeners both add plant food to the basket and water and tend their plants well; ruled out by giving the free bottle with some plants and not others and comparing returns
      - Chance, that this year's records happened to fall that way; ruled out by collecting the same figures for a second year to see whether the pattern holds up
      - Nothing needs ruling out, since Mill's fifth canon says that when two things vary together one of them causes the other, so the owner is already right
    answer: 1
    explain: A plainly hypothetical case, but the shape is the one you will meet most often. Customers differ in many ways at once, and keenness is a likely common cause; the customer who adds plant food to the basket is the customer who waters on schedule and repots on time. The test is the method of difference done properly, hold the gardener steady and vary the one thing, which the free-bottle trial does; if bundled and unbundled plants come back at the same rate, the food was never doing the work. Option A names a real reading but a far-fetched one here, and its check would not separate a common cause from food-keeps-plants-alive. Option C is worth doing but does not touch the common cause; keen gardeners will still be keen next year. Option D misreads Mill, whose fifth canon says the two are causally connected "in some other manner" or as cause and effect, and who says in the same passage that concomitant variation alone cannot tell you which.
  - q: Your phone was at 90% when you went to bed and 10% when you woke. Three explanations come to mind, the battery is failing, you left the torch on, or the weather app you installed yesterday is running in the background. You check, the torch is off, and the battery was fine every night until last night. Which is the best explanation, and why?
    options:
      - The new app, because it explains why the drain started last night rather than earlier, and fits the torch being off and the battery being fine before
      - The failing battery, because batteries do fail, and a failing battery is the explanation that covers every case of overnight drain whatever else is true
      - The torch, because it is the simplest of the three explanations, and simpler explanations are always to be preferred over more complicated ones
      - None of them yet, because an inference to the best explanation is only allowed once every other possible explanation has been listed and ruled out
    answer: 0
    explain: You are choosing among rivals, and the winner is the one that explains the most, including the timing, with the fewest extra assumptions, and fits what else you know. The app appeared the day the drain appeared; the battery was fine until then; the torch is off. Option B is the trap of an explanation that fits everything because it is vague; it does not explain why last night in particular, and it would need the extra assumption that the battery failed on the same day you installed an app. Option C misuses simplicity; the torch is simple, but it is ruled out by the evidence, and simplicity only counts among explanations that fit the facts. Option D sets a bar no one can meet; you can never list every possible explanation, which is exactly why the inference is inductive. The obvious next step is a method-of-difference test, uninstall the app and see.
  - q: Marta lists her reasons for moving to a new flat, it is closer to work, it is cheaper, and it has a balcony, and her reasons against, it is further from her sister and it is on a noisy road. She weighs them and decides to move. You then find out that the new flat is not cheaper at all; the rent is the same. What follows for her argument?
    options:
      - The argument is now invalid, because one of its premises is false, and a false premise means the conclusion no longer follows from the rest
      - The argument was never a real argument, because a passage that gives reasons on both sides of a question is a discussion rather than an argument
      - The conclusion must now be reversed, because with two reasons for and two against the balance is even and an even balance means do not move
      - The remaining reasons still count, so the weighing has to be done again with one reason removed, and it may or may not come out the same way
    answer: 3
    explain: This is a conductive argument. The reasons are independent; each supports the conclusion on its own, and the counter-considerations pull the other way. Take one reason out and the others stand, so the question is whether closer to work plus a balcony still outweighs further from her sister plus the noise. That is a judgement, and it might go either way. Option A applies a deductive test to an argument that never claimed to be valid; in a linked argument losing a premise can collapse the whole thing, but these premises are not linked. Option B is the misconception that stating the other side is a concession of defeat; in a conductive argument it is what makes the weighing honest. Option C counts reasons instead of weighing them, and two-against-two is not a rule that anything decides.
---

Suppose a friend of yours is thinking about buying a car and says this: "My last three cars from that maker all had gearbox trouble before 80,000 kilometres. I'm not buying another one." Somewhere this week you heard an argument with that shape. Three bad experiences, a conclusion about the fourth.

Run the check you've been building since lesson 1. Conclusion: the next car from that maker will probably have gearbox trouble too. Premises: three cars, three gearboxes, three failures. Missing premise, in brackets: [what happened to three of them will happen to the next]. Now step 4, test the link. In lessons 2 to 4 that meant asking whether there's any possible case where the premises are true and the conclusion false. Here there plainly is. The three cars could all have failed and the fourth could be fine. So the argument is invalid.

And yet it isn't a bad argument. Three out of three is real evidence. If you told this friend "that's invalid" she'd rightly say "I never claimed it was certain; I claimed it was likely." She's making a different kind of claim about the link, and it needs a different test. That test is this lesson, and it's the one you'll use far more often than validity, because almost everything you know about the world, from whether the bus will come to whether the bridge will hold, reached you by an argument of this kind.

## Strong, weak, and cogent

An argument is deductive when the premises are claimed to guarantee the conclusion, and inductive when they're claimed only to make it probable. That's a distinction about what's claimed for the link, not about whether the argument goes from general to particular or the other way round; the [Internet Encyclopedia of Philosophy's survey of the distinction](https://iep.utm.edu/deductive-inductive-arguments/) states it in exactly those terms, as a matter of whether the argument is intended to provide conclusive or only probable support.[1] Lesson 2 warned you off the "general to particular" myth; here's the spaced repeat. "All humans are mortal, so Socrates is" goes from general to particular and is deductive. "This coin came up heads a thousand times, so the next toss will probably be heads" goes from particular to particular and is inductive. The difference is in what's claimed, nothing else.

For a deductive argument, step 4 asks: is it valid? For an inductive one, step 4 asks: is it strong? The IEP's definitions are the standard ones: "A strong inductive argument is said to be one whose premises render the conclusion likely. A cogent argument is a strong argument with true premises."[1] Cogent is to inductive arguments what sound, from lesson 2, is to deductive ones. One condition is worth adding to that pair, and the coin below will force it on you anyway: a strong argument with true premises still isn't one to trust if it leaves out relevant evidence the arguer has. Keep that in your pocket for a few paragraphs. The [Stanford Encyclopedia's entry on inductive logic](https://plato.stanford.edu/entries/logic-inductive/) puts the whole subject in terms of degree: in an inductive logic, the truth of the premises of a good argument "supports the truth of its conclusion to some appropriate degree".[2] Degree is the word to hold on to. Validity is all or nothing. Strength comes in amounts.

:::checkpoint An argument has true premises and a strong link. What can still go wrong?
The conclusion can still be false. That's not a defect in the argument; it's what "probably" means. A strong, cogent argument for "the next toss will be heads" is exactly the argument you should accept, and the next toss can still be tails. The argument was good and the world didn't cooperate. Deductive arguments never do this to you. Sound deductive arguments guarantee their conclusions. Cogent inductive arguments make them probable, and probable things sometimes don't happen.
:::

### A thousand heads and one more premise

Now for the property that separates inductive arguments from deductive ones outright. Take the coin:

```
1. This coin has come up heads on all of the last 1,000 tosses.
---------------------------------------------------------------
C: The next toss will probably be heads.
```

That's strong. A thousand heads in a row is about as good a reason as you could want to expect another.

:::predict Can adding a true premise ever make an argument worse?
For a valid deductive argument, never. If the conclusion follows from the premises, it still follows when you add more premises; you can't un-follow something by learning more. For an inductive argument, yes, easily. Watch what one extra line does to the coin.
:::

Now add a premise that you've just learned, and that's true:

```
1. This coin has come up heads on all of the last 1,000 tosses.
2. The coin has just been checked by a lab and is a fair coin.
---------------------------------------------------------------
C: The next toss will probably be heads.
```

Premise 2 doesn't contradict premise 1. Both are true. But the argument is now weaker, because a fair coin has no memory, and the thousand heads, which looked like evidence about the coin, now look like an astonishing run of luck that says nothing about the next toss. (If you want to say "I'd want to re-check that lab", good, that's the right instinct, and it's step 5, testing the premises. Take the premise as given for now.)

Logicians call this defeasibility. [Van Cleave's open textbook](https://human.libretexts.org/Bookshelves/Philosophy/Logic_and_Reasoning/Introduction_to_Logic_and_Critical_Thinking_2e_(van_Cleave)/01%3A_Reconstructing_and_Analyzing_Arguments/1.08%3A_Deductive_vs._Inductive_Arguments) calls inductive arguments defeasible because adding further information or premises "can overturn (defeat) the verdict that the conclusion is well-supported by the premises".[3] A valid argument can't be defeated that way. Whatever you add to a valid argument, the conclusion still follows. This is why "the argument was strong at the time" is a perfectly coherent thing to say, and why every conclusion you reach inductively is held on condition that nothing relevant turns up. It's also why, in real evidence, "we found out more" is not an embarrassment. It's the system working.

Here's the condition from a few paragraphs back earning its keep. Suppose someone who knows about the lab report argues from premise 1 alone. Every word they say is true, and the link from their one premise is strong. The argument still shouldn't move you, because it leaves out evidence its maker has, and the left-out evidence changes the verdict. Cogency, in any version worth having, requires the premises to take in the relevant evidence available, not just to be true. When you weigh an argument from someone with an interest in its conclusion, this is the clause to remember: ask not only "is this true?" but "what do they know that isn't in here?"

### The mechanism: coverage

Why does strength come in degrees, and why can it drop? Because of what an inductive link is. A valid deductive link holds in every possible case: there's no way to make the premises true and the conclusion false. An inductive link holds in most of the cases the premises describe. The conclusion is about a case (the next toss, the fourth car, the patient in front of you), and the argument is strong to the degree that the premises cover that case: the degree to which the cases they describe resemble the case you're asking about, in the ways that matter.

Hold that one idea and the rest of the lesson follows from it. A sample supports a generalisation to the degree that it covers the population. An analogy supports its conclusion to the degree that the shared features are the ones that matter for the conclusion. A causal argument is strong to the degree that it isolates the one thing that varies. And a best explanation is best only until a better one covers more. Every test below is a way of asking: how well do the premises cover this case?

:::callout The old question underneath all of this
Everything in this lesson assumes that reasoning from observed cases to unobserved ones can be done better or worse. Whether it can be justified at all is one of philosophy's oldest open wounds. David Hume asked in the eighteenth century what grounds we have for [inferences "from the observed to the unobserved"](https://plato.stanford.edu/entries/induction-problem/): any defence of induction seems to lean on past experience of induction working, which is the very kind of inference in question, and philosophers still disagree about whether that circle can be broken.[4] Karl Popper's answer was to deny that science runs on induction at all: on [his view](https://plato.stanford.edu/entries/popper/) the only logical technique integral to scientific method is "the deductive testing of theories", and all our theories stay "provisional, conjectural, hypothetical".[5] This course doesn't settle that dispute and won't pretend to. The practical tests below survive it either way: whichever side is right about the foundations, "how well do these premises cover this case?" is still what separates the forecasts, diagnoses, and generalisations that deserve your trust from those that don't.
:::

Groarke's Stanford Encyclopedia survey of informal logic sorts arguments by the link they claim into four kinds: deductive, inductive, conductive, and abductive.[6] Treat that as a serviceable map rather than a settled fact; you'll see at the end of the lesson that even the conductive category is argued over. You've met the first kind. The next sections cover the inductive families a general reader needs, then the abductive kind under its plainer name, then the conductive kind, which is the shape of most decisions you'll ever make.

:::callout One word, two sizes
"Inductive" is used in a narrow sense (generalising from observed cases, as in the coin and the cars) and a broad sense (any argument whose premises are claimed to make the conclusion probable rather than certain). This lesson uses the broad sense, so analogy, cause, and best explanation all count as inductive here, because the test is the same for all of them: strong or weak, by coverage. When someone tells you induction is "just" generalising, they're using the narrow sense.
:::

## Family one: generalising from a sample

Start with a version of the argument that a new business owner makes every week. Suppose, hypothetically, you've made a hot sauce and want to know whether people would buy it. You give a bottle to twelve friends. Ten say they'd buy it. So:

```
1. Ten of twelve people who tried the sauce said they'd buy it.
---------------------------------------------------------------
C: Most people who try the sauce would buy it.
```

Weak, and it's worth being precise about why, because it's weak in two separate ways and fixing one doesn't fix the other.

First, size. Twelve is too few to pin the rate down, though be careful about what that means. Ten of twelve from people whose real rate is only one in two would be a genuine fluke, about twice in a hundred, so the sample does count against "half". What it can't do is tell you where above half the truth sits: if the real rate were two in three, ten or more yeses out of twelve would still turn up about eighteen times in a hundred. Your five-in-six result is comfortably compatible with two in three, and "most" built on five-in-six is a different business plan from "most" built on two-in-three. The mechanism, which Statistics for Citizens derives properly, is that the wobble in a sample shrinks with the square root of its size, so quadrupling the sample only halves the uncertainty, and what matters is the sample's size, not the population's. Suppose you give it to a hundred people. Now eighty say yes. Better. The premise now covers more of the ground the conclusion is about.

Second, and this is the one that survives the fix, representativeness. Who were the hundred? If they're still your friends, they like you, they know you made it, and several of them probably share your taste in food, which is why they're your friends. The conclusion is about "people who try the sauce" and the sample is "people who know the maker and were handed a free bottle by them". The premises cover a small and unusual corner of the population the conclusion is about, and no increase in size fixes that. A thousand friends is still friends.

Say you fix representativeness as well: you set up a stall at a Saturday market, strangers try the sauce, and 160 of 200 say they'd buy it.

:::predict Name the weakness that's still there.
"Said they'd buy it" is not "bought it". The premise is about a stated intention with a free taste in their mouth and the maker smiling at them; the conclusion you actually care about is what people will do at a shelf with a price on it. The sample can be large and representative of market-goers and still not cover the case you're arguing about, because it measures the wrong thing. If you then say "and the market-goers on a Saturday morning aren't everyone either", you've got the idea: every sample is representative of something, and the question is always whether that something is the population in the conclusion.
:::

Van Cleave's chapter on inductive arguments makes the same two demands of any [statistical generalisation](https://human.libretexts.org/Bookshelves/Philosophy/Logic_and_Reasoning/Introduction_to_Logic_and_Critical_Thinking_2e_(van_Cleave)/03%3A_Evaluating_Inductive_Arguments_and_Probabilistic_and_Statistical_Fallacies/3.01%3A_Inductive_Arguments_and_Statistical_Generalizations): the sample must be large enough to support the generalisation, and it must not be biased. A sample is representative when its characteristics "match the characteristics of the population at large", and random selection is the standard way of trying to get one.[3] When you meet a survey in the news, the questions to ask are the ones you just asked: how many, chosen how, asked what, and compared with what.

Here's the spaced repeat from lesson 4. A conclusion of the form "all A are B" is refuted by one case, because it's a deductive claim about every case. "Most A are B" isn't refuted by one case; that would be like treating a "most" as an "all". If someone answers your well-sampled "most customers prefer the new label" with "well, my cousin doesn't", they've brought a counterexample to an argument that never claimed there were none. The right reply isn't to defend the cousin's taste; it's to point out which kind of claim you made.

## Family two: analogy

An argument from analogy says: this case is like that case in several ways, and that case had a certain feature, so this case probably has it too. Hypothetically: "Our neighbours' extension took four months and came in on budget. Ours is the same size, the same builder, the same kind of house. It'll take about four months." That's a decent argument, and here's what makes it one.

The extension's duration depends on its size, on the builder, and on the house it's attached to (foundations, access, the age of the walls). The similarities named are the ones that bear on the conclusion. Now change the argument: "Their extension came in on budget. Ours has the same colour front door and the same postcode. It'll come in on budget too." Same shape, two similarities, and worthless, because the door and the postcode have nothing to do with cost.

That's the heart of the test, and it's the coverage idea again. Van Cleave's section on [analogical arguments](https://human.libretexts.org/Bookshelves/Philosophy/Logic_and_Reasoning/Introduction_to_Logic_and_Critical_Thinking_2e_(van_Cleave)/03%3A_Evaluating_Inductive_Arguments_and_Probabilistic_and_Statistical_Fallacies/3.03%3A_Analogical_Arguments) states it as two conditions: the things compared must be similar "in relevant respects" to the characteristic in the conclusion, and there must be no "relevant disanalogies" between them.[3] Textbooks sometimes add further criteria, how many cases, how varied they are, but relevance decides how much any of them count. Irrelevant similarities add nothing however many there are. And one relevant difference can sink an analogy that has a dozen similarities going for it. If the neighbours' extension was built in a dry summer and yours is starting in November, that one difference may matter more than everything the two projects share.

:::checkpoint Your neighbour's tomato plants thrived this year: same seed packet as yours, same compost, same pots from the same shop, planted the same week, watered on the same schedule. Hers stand against a south-facing wall; yours sit in the shade of a fence. She says yours will thrive too. Strong or weak?
Weak, despite five shared features, because the one difference bears directly on the conclusion: tomatoes are hungry for light, and hours of sun do more work on "thrive" than matching pots ever could. Count relevance, not features. The question is never "how similar are they?" but "are they similar in the way that matters for this conclusion?"
:::

One caveat about how analogies are used. They're often given to make an unfamiliar case vivid rather than to prove anything, and you should ask which job the analogy is doing before you attack it. If someone says a proposed change is "like rearranging the deckchairs", they're not offering an argument, they're offering a picture, and the reply is to ask what the picture is claiming.

## Family three: cause

The most consequential inductive arguments you'll meet claim that one thing causes another. This drug lowers blood pressure. The new timetable reduced lateness. Eating late gives me bad sleep. The tools for checking a causal claim were written down in 1843 by John Stuart Mill, and they're still the bones of every experiment. Mill states them as canons. I'll give you two of the five, in [Jonathan Bennett's modernised wording](https://www.earlymoderntexts.com/assets/pdfs/mill1843book3.pdf) of Mill's text, because those two are the ones you'll use.

### The method of difference

Here's Mill's own example. "When a man is shot through the heart, the Method of Difference shows us that it was the gunshot that killed him: he was in the fullness of life immediately before, all circumstances being the same as after except the wound."[7] Mill says this is the logical process behind "almost all the inductive conclusions we draw in daily life".[7] The canon reads: "If an instance where the phenomenon y under investigation occurs and an instance where it doesn't occur have every circumstance in common except for one x that occurs only in the former, x is the effect or the cause or an indispensable part of the cause of y."[7]

Read it slowly, because everything in it earns its place. Two instances. Everything in common but one thing. The phenomenon in one and not the other. Then that one thing is the cause, or part of it. In the man's case: alive and then dead, and the only thing that changed was the wound. So the wound did it.

Notice the shape of the reasoning. "If the wound weren't the cause, he'd still be alive, since nothing else changed. He isn't alive. So the wound is the cause." That's modus tollens, lesson 3's search for the case that breaks the rule, and it's the same move as a counterexample in lesson 2. The method of difference is the hunt for the one thing whose presence or absence makes the difference, and it works by ruling out everything else.

This is why Mill says the method of difference "is more particularly a method of artificial experiment", where the method of agreement (the first canon, which looks for the one thing that instances of the phenomenon share) is "what we use when experimentation is impossible".[7] A controlled experiment is the method of difference built on purpose: two groups alike in everything you can arrange, one gets the treatment, and any difference in outcome is laid at the treatment's door. The Scientific Method course owns the design of experiments; the point here is that you already understand the logic, because you've been using it since lesson 2.

Mill's canon is demanding, and that's the part people miss. "Every circumstance in common except for one" is almost never true of two real cases. Two patients, two mornings, two cars are alike in most things and differ in many small ones. So a real method-of-difference argument is strong to the degree that the other differences have been ruled out or are known not to matter, and weak to the degree that some other difference could be the one doing the work. When you read "we tried X and Y happened", ask: what else changed?

Two chapters later Mill adds a warning that belongs beside the canon: "It's not true that the same phenomenon is always produced by the same cause; the effect a may sometimes arise from A, sometimes from B."[7] He calls this the plurality of causes, and it limits what one clean case can teach you. The wound explains this death and says nothing about what causes deaths in general; the app explained last night's battery drain, and next month's drain can have a different culprit entirely. Finding the cause in one case closes that case, not the question.

### Concomitant variation, and what the slogan really says

Mill's fifth canon covers the case where you can't remove the suspected cause and can only watch it vary. "If any phenomenon x varies in some specific way whenever another phenomenon y varies in some specific way, x is either a cause or an effect of y, or is causally connected with it in some other manner."[7] His own example is heat and expansion: you can't take all the heat out of a body, but you can add and remove some and watch it grow and shrink.

Now look at the hedge at the end, "or is causally connected with it in some other manner". Mill explains it in the next sentence: "when two phenomena match each other in their variations it doesn't follow one is cause and the other effect. If they were two effects of a common cause, they would exhibit concomitant variation; and this method alone can't tell us whether they're related in that way rather than as cause and effect."[7]

That, in 1843, is the whole content of the slogan "correlation isn't causation". And notice what Mill actually says. He does not say a correlation tells you nothing. He says it tells you the two are causally connected in some manner, and that this method alone can't tell you which. So the slogan holds two very different uses. In the mouth of someone statistically trained, it's shorthand for a demand: name the other readings of this correlation and show me how you ruled them out, which is exactly the work this section teaches. Used as a conversation-ender, as if any correlation were worthless, it claims more than Mill's canon allows in the other direction. The correlation is evidence of some connection, and the work is to find out which. There are four readings of any correlation between A and B:

1. A causes B.
2. B causes A.
3. Something else, C, causes both.
4. It's chance: the two happened to move together in the data you have.

Here are the four, drawn. This diagram is the lesson's most reused object: the predict block below, a checkpoint, a quiz question, and the exercise all ask you to run it.

<svg viewBox="0 0 344 392" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cr-t cr-d" style="max-width:100%;height:auto;font-family:inherit">
  <title id="cr-t">The four readings of a correlation between A and B</title>
  <desc id="cr-d">Four panels. Reading 1: an arrow runs from A to B. Reading 2: an arrow runs from B to A. Reading 3: a third thing C sits above A and B with arrows down to each, and no arrow between A and B. Reading 4: A and B stand apart with nothing joining them, labelled chance. A footer says reading 1 is earned by ruling out 2, 3, and 4.</desc>
  <defs>
    <marker id="cr-an" refX="6" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L7,3.5 L0,7 z" fill="var(--navy, #0f2a4a)"/></marker>
    <marker id="cr-ao" refX="6" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L7,3.5 L0,7 z" fill="var(--oxblood, #8b1e2d)"/></marker>
  </defs>
  <text x="0" y="16" font-size="17" font-weight="600" fill="var(--text-2, #4a5260)">Four readings of a correlation</text>
  <circle cx="44" cy="82" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="44" y="88" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">A</text>
  <circle cx="130" cy="82" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="130" y="88" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">B</text>
  <line x1="68" y1="82" x2="103" y2="82" stroke="var(--navy, #0f2a4a)" stroke-width="2" marker-end="url(#cr-an)"/>
  <text x="87" y="132" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">1. A causes B</text>
  <circle cx="216" cy="82" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="216" y="88" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">A</text>
  <circle cx="302" cy="82" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="302" y="88" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">B</text>
  <line x1="278" y1="82" x2="243" y2="82" stroke="var(--navy, #0f2a4a)" stroke-width="2" marker-end="url(#cr-an)"/>
  <text x="259" y="132" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">2. B causes A</text>
  <circle cx="87" cy="192" r="21" fill="none" stroke="var(--oxblood, #8b1e2d)" stroke-width="2"/>
  <text x="87" y="198" font-size="16" font-weight="600" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">C</text>
  <circle cx="44" cy="282" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="44" y="288" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">A</text>
  <circle cx="130" cy="282" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="130" y="288" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">B</text>
  <line x1="74" y1="210" x2="52" y2="258" stroke="var(--oxblood, #8b1e2d)" stroke-width="2" marker-end="url(#cr-ao)"/>
  <line x1="100" y1="210" x2="122" y2="258" stroke="var(--oxblood, #8b1e2d)" stroke-width="2" marker-end="url(#cr-ao)"/>
  <text x="87" y="332" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">3. C causes both</text>
  <circle cx="216" cy="282" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="216" y="288" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">A</text>
  <circle cx="302" cy="282" r="21" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="302" y="288" font-size="16" font-weight="600" text-anchor="middle" fill="var(--navy, #0f2a4a)">B</text>
  <text x="259" y="288" font-size="16" text-anchor="middle" fill="var(--text-2, #4a5260)">. . .</text>
  <text x="259" y="332" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">4. Chance: no link</text>
  <text x="0" y="368" font-size="15" fill="var(--text-2, #4a5260)">Reading 1 is earned by ruling out</text>
  <text x="0" y="388" font-size="15" fill="var(--text-2, #4a5260)">readings 2, 3, and 4.</text>
</svg>

A causal argument from a correlation is strong to the degree that readings 2, 3, and 4 have been ruled out, and weak to the degree that any of them is still live. That's the test, and it's the method of difference in disguise: you're hunting for the one thing that varies, and readings 2 to 4 are the "other differences" that haven't been excluded.

### Worked example with a gap: the café and the pharmacy

A plainly hypothetical case. A café owner keeps daily sales figures. The pharmacy next door, run by a friend, keeps daily figures too. Comparing notes, they find that on days when the café sells a lot of iced drinks, the pharmacy sells a lot of after-sun lotion. The correlation is strong and holds across the whole summer. The café owner jokes that her iced coffee is giving people sunburn.

:::predict Which of the four readings do you expect, and why?
Most people say reading 3, a common cause, and they're right: hot, sunny days push up both. But say why the other three fail, because that's the actual argument. Reading 1 (iced drinks cause sunburn) has no mechanism. Reading 2 (sunburn causes iced-drink sales) has a thin one at best; a sunburnt person might want a cold drink, but the drink sales rise on the same day as the burns, which is too fast for that story. Reading 4 (chance) is unlikely given a whole summer of data. Reading 3 explains all of it with one obvious cause.
:::

Now the gap. Suppose the owners wanted to test reading 3 against reading 1 properly.

:::predict Using the method of difference, what single comparison would do it? Write your answer down first.
Here's one answer. Find pairs of days that were equally hot and sunny but on which iced-drink sales differed for some other reason (say, a coffee-machine breakdown). If after-sun sales track the weather and not the drinks, reading 1 is dead and reading 3 stands. You've held the suspected common cause fixed and let the suspected cause vary. That's Mill's canon applied to a café, and it's exactly what a good study of a drug or a policy does at a far larger scale: hold the confounders steady and vary the one thing.
:::

One more pattern to name, since you'll meet it weekly. Post hoc reasoning ("after this, therefore because of this") is a causal argument from a single sequence: I did X, then Y happened, so X caused Y. It's the method of difference with the "every other circumstance in common" clause quietly dropped. You started the new supplement on Monday and slept badly on Tuesday. Also on Monday: a stressful meeting, a late dinner, a change in the weather. The [IEP's catalogue of fallacies](https://iep.utm.edu/fallacy/) files this under false cause, "improperly concluding that one thing is a cause of another", with post hoc listed among its principal kinds.[8] The fix is always the same question: what else changed?

:::checkpoint Someone says "the new school timetable has cut lateness; the figures dropped the month it came in". Which reading of the correlation is the argument assuming, which readings has it not ruled out, and what one comparison would help most?
It assumes reading 1, timetable causes the drop. It hasn't ruled out reading 3 (a common cause: the new timetable came in at the start of a term, and lateness may drop at the start of every term; or a new attendance officer started the same month) or reading 4 (one month is a small sample of months). Reading 2 is far-fetched here. The most useful single comparison: lateness in the same month last year, when there was no new timetable. If it dropped then too, the timetable has lost its evidence. That's the method of difference: find an instance without the suspected cause and see whether the phenomenon happens anyway.
:::

## Family four: inference to the best explanation

Here's a kind of argument that doesn't quite fit the three families, though it's inductive in the broad sense. You come home. There are muddy paw prints on the kitchen floor, the pie you left cooling on the counter is gone, and the dog is asleep in his basket looking, you'd swear, guilty. You conclude the dog ate the pie.

Nothing here is a sample. Nothing is an analogy. It isn't a correlation. What you've done is take a set of facts and pick the hypothesis that best explains them. The philosopher Gilbert Harman gave the pattern its usual name in 1965: inference to the best explanation. And his claim for it was bolder than a name. He argued that generalising from cases, family one of this lesson, is itself a disguised special case of explanatory inference: when the thousand heads move you, it's because "this coin favours heads" would explain them.[9] The Stanford Encyclopedia's survey of abduction reads him the same way: Harman "conceives induction as a special type of abduction".[10] You don't have to follow him that far to use the tool. Groarke's survey lists it, under the name abduction, as the fourth kind of argument alongside the other three.[6]

The word to underline is best. Not "an explanation", not "the explanation that fits", but the best of the rivals. The dog explains the prints, the pie, and the guilty look. Now try the rivals. A burglar with muddy shoes who took only the pie: explains the prints and the pie, but you'd expect other things missing, and it doesn't explain the dog's look. Your flatmate came home, ate the pie, and the dog got mud in from the garden: explains the pie and the prints separately, but needs two events where the dog story needs one, and the flatmate is away. The dog wins because it explains more of the evidence, with fewer separate assumptions, and fits what else you know (the flatmate's away; the dog has form).

Those are the three questions to ask of any explanation offered as an argument: does it explain more of the evidence than its rivals, does it do so more simply (fewer extra assumptions, fewer coincidences), and does it fit what else you already know? Van Cleave's text expands the three into seven ["explanatory virtues"](https://human.libretexts.org/Bookshelves/Philosophy/Logic_and_Reasoning/Introduction_to_Logic_and_Critical_Thinking_2e_(van_Cleave)/03%3A_Evaluating_Inductive_Arguments_and_Probabilistic_and_Statistical_Fallacies/3.02%3A_Inference_to_the_Best_Explanation_and_the_Seven_Explanatory_Virtues), adding among others modesty (an explanation shouldn't claim more than the facts need) and falsifiability (there must be evidence that could show it wrong); the three here are the ones that carry the most weight.[3] An explanation that fits the facts is easy to find; there's always one. The argument is only as strong as the comparison with the alternatives, so the first move against a proposed best explanation is to ask what else would explain the same facts, and the second is to ask what evidence would tell the two apart. The dog story predicts pie crumbs in the basket. Go and look. (That is Mill again: find the observation that one explanation predicts and the other doesn't.)

There's a named objection to keep in your pocket for when someone's "best explanation" feels thin. The philosopher Bas van Fraassen pointed out that the inference compares a hypothesis only with the rivals you actually thought of, so the best of your lot may be the best of a bad lot.[10] The strength of the argument depends on how hard the search for rivals was, which is why a detective who considered one suspect has a best explanation too, and shouldn't be trusted.

Why is this inductive rather than deductive? Because a better explanation can always turn up. The dog can be innocent if the flatmate's flight was cancelled. Your conclusion was the best available given what you knew, and it's held on condition that nothing better appears, which is defeasibility in another form. Detectives, doctors, and mechanics live by this kind of argument, and the good ones are the ones who keep asking "what else would produce this?" longer than feels comfortable.

## The conductive argument: reasons on both sides

One more shape, and it's the one that most of your real decisions take. The philosopher Carl Wellman named it in 1971: the conductive argument, in which one or more reasons bear directly on the case in front of you, and, in its fullest pattern, are weighed against what Wellman called "negative considerations", reasons pulling against the conclusion, the verdict coming from "weighing the pros and the cons".[11]

Hypothetically, you're deciding whether to take a job in another city. For: the pay is a third higher; the work is what you trained for; the city has better transport. Against: you'd be four hours from your parents; your partner would need to find work; you like where you live. You lay them out, you weigh them, you decide.

Two things make this different from the arguments earlier in the lesson. First, the reasons are independent. In a deductive argument the premises usually work together (lesson 7 will call this linked support), and if one falls the argument can collapse. Here, if you learn the pay is only a fifth higher, the other reasons still stand and the weighing shifts a little. Second, the counter-considerations are part of the argument. Stating them isn't a concession of defeat; it's what an honest weighing looks like. An argument for the move that pretends there's nothing on the other side is a weaker argument to a careful reader, not a stronger one, because the reader can see the other side and will conclude you either couldn't see it or hoped they wouldn't.

How do you evaluate a conductive argument? You check each reason on its own (is it true, and does it bear on the conclusion?), you check that the counter-considerations are stated at their real weight, and then you ask whether the weighing is one a reasonable person could make. There's no formula for the last step, and Wellman was frank about that: by and large there is no way to judge these arguments "but by thinking them through and feeling their logical force", and if you're unsure whether you've thought one through correctly, "there is nothing to do but think it through again".[11] Distrust anyone who offers you a scale. What there is, is the discipline of doing the weighing in the open, where the reasons and the counter-considerations can each be checked. Fair warning that the category itself is argued over: [Possin's survey](https://informallogic.ca/index.php/informal_logic/article/view/4527), which is where the Wellman quotations above are taken from, argues that so-called conductive arguments are really inductive arguments or fragments of a position paper.[11] The practical discipline is the same on either view. Lesson 10 will have you write an argument in this form.

## What people get wrong

**"Induction is the weak kind of reasoning."** It's the only kind that reaches new facts. A valid deductive argument never tells you anything that wasn't already in the premises; it makes explicit what you'd already committed to. Every generalisation, every forecast, every diagnosis, every "the bridge will hold" is inductive. Calling it weak is like calling your legs weak because they're not wheels. (Whether the reaching can be justified from scratch is Hume's question in the callout above, and that one stays open.)

**"A strong argument that turned out wrong was a bad argument."** No. Strength is about the premises and the link at the time, not the outcome. A doctor who prescribes on the best evidence and sees the patient react badly did not reason badly; the argument was strong and defeasible, and it was defeated. You'll want to say the same about your own past decisions, and you're entitled to, provided the argument really was strong on what you knew.

**"Correlation isn't causation" as the end of the discussion.** It's the beginning. Mill's fifth canon says two things that vary together are causally connected in some manner; the work is which of the four readings.[7] Said as a demand for that work, the slogan is doing its job. Said instead of the work, it has done none of it.

**"More similarities make a better analogy."** Relevant similarities do. Irrelevant ones are decoration, and a single relevant difference outweighs any number of them.

**"A single case can't prove anything."** One decisive method-of-difference case can. Mill's man shot through the heart is one case, and nobody needs a sample of shootings to know what killed him, because everything else was held constant. What a single case can't do is support a generalisation, or tell you what causes the same effect elsewhere, which is Mill's plurality of causes.[7] Those are different jobs. Ask which job the case is being asked to do.

**"If it's not deductive, anything goes."** The whole lesson is the reply. Inductive arguments have tests as definite as validity, just not as tidy: coverage, relevance, the four readings, the rivals. "It's only probable" is not a licence; it's a claim about degree, and the degree can be checked.

## Practice

Here are eight arguments. For each, decide first what kind of link is being claimed (deductive, or one of the inductive families, or conductive), then give a verdict (valid or invalid; strong or weak) with the reason named. Two of the eight are deductive look-alikes from lessons 2 to 4, so don't reach for "strong or weak" until you've asked which kind of claim it is. Write your eight verdicts before opening the answers.

1. Every swan anyone in Europe had ever seen was white. So all swans are white.
2. If the bridge were unsafe, the council would have closed it. The council hasn't closed it. So the bridge is safe.
3. My sister and I both got food poisoning after Tuesday's dinner. We ate the same fish and nothing else in common that day; nobody else at the table had the fish, and nobody else was ill. So the fish did it.
4. This flat is like the one I rented last year: same landlord, same street, same size. That one had damp. So this one probably has damp.
5. All the applicants with degrees were shortlisted. Some of the shortlisted applicants were interviewed. So some applicants with degrees were interviewed.
6. Since the new manager arrived, the shop's takings have fallen for three months. So the new manager is the cause.
7. The engine warning light is on, the car is losing power on hills, and there's a faint smell of burning. The best explanation is a slipping clutch, so that's what it is.
8. I should take the evening course: it's what I need for promotion, it's free through work, and it runs near home. On the other hand, it's two nights a week for a year and I'd miss the children's bedtime. On balance, I'll take it.

:::checkpoint Check your eight verdicts.
1. Inductive generalisation. Strong on the sample as described, and defeated when Europeans reached Australia and found black swans. A textbook case of a strong argument with a false conclusion; the sample didn't cover the population (Europe isn't the world). Note the "all": the conclusion is refuted by one case, because it's an "all" claim, even though the argument for it was inductive.
2. Deductive look-alike, and valid: it's modus tollens (if unsafe then closed; not closed; so not unsafe). Step 5 is where it fails if it fails: is the first premise true? Councils don't always close unsafe bridges. Valid, probably unsound.
3. Causal, method of difference, and strong: two who ate the fish were ill, the others who didn't weren't, and "nothing else in common" rules out the other differences. Not certain (they could share a stomach bug from elsewhere), but the design is right.
4. Analogy. Middling. Same landlord and same street are relevant to damp (maintenance habits; the local building stock); same size isn't. It's strong only if damp in the old flat was a landlord-and-building problem rather than a one-off. Ask about the cause of the old damp before trusting the analogy; the plurality of causes says damp in one flat and damp in another can have different sources.
5. Deductive look-alike, and invalid. Draw the circles from lesson 4: the shortlisted people who were interviewed might all be shortlisted applicants without degrees. Undistributed middle.
6. Causal, post hoc, and weak as stated. Three months is a short series, and nothing else has been ruled out: the season, a new competitor, roadworks outside. Reading 3 (common cause: the manager was hired because takings were already falling) is live too. What else changed?
7. Inference to the best explanation, and weak as stated, because no rivals were considered: the best of a lot of one. A slipping clutch explains the power loss and the smell; does it explain the warning light? Several other faults explain all three. It's a fair hypothesis and a poor argument until the rivals are named and something told apart.
8. Conductive, and reasonably strong: three independent reasons, two counter-considerations stated at their real weight, and a weighing in the open. You can disagree with the weighing; you can't say the argument hid anything.
:::

:::exercise Do it now
Go to the folder of arguments you've been keeping since lesson 1, or to something you read or heard this week, and find one causal claim: X causes Y, X improved Y, X is why Y happened. Then:

1. Write it in standard form, with the missing premise in brackets. The missing premise in a causal argument is usually the "nothing else changed" clause; write that down as the arguer would have to accept it.
2. Write the four readings: X causes Y; Y causes X; some C causes both; chance. For each, write one sentence on whether it's live in this case, and if it is, what C might be.
3. Name the single observation or comparison that would rule out the most. Usually it's a method-of-difference comparison: a case with everything the same and X absent. Say what that case would be, and whether anyone could actually get it.
4. Give your verdict: strong, weak, or "can't tell without the comparison in step 3", and put the sheet in your folder.

Then, without looking back at the lesson, write from memory: the definition of a strong argument, what defeasibility means and the one-line coin example, the three questions for a sample, the one test for an analogy, Mill's two canons and his plurality-of-causes warning in your own words, the four readings of a correlation, and the three questions for a best explanation. Check what you missed against the text. Those are the parts to reread.
:::

## Connections

Step 4 of the check now has two halves. If the link is claimed to be certain, ask whether it's valid, with the tools from lessons 2 to 4. If the link is claimed to be probable, ask whether it's strong, with the tools from this lesson. The first question you now ask of any argument is which kind of claim it's making, because the wrong test gives a confident wrong answer: a strong inductive argument is always "invalid", and that verdict is worthless.

Lesson 6 gives strength a number. When you asked how much a thousand heads should move you, or how well a sample covers a population, you were asking a question probability answers, and the base rates, conjunction rule, and likelihood ratio of the next lesson are the arithmetic behind "coverage".

Lesson 7 returns to conductive arguments when it separates linked from convergent support, and lesson 10 has you write one. Lesson 8 takes up the causal patterns under their fallacy names (false cause, hasty generalisation, weak analogy) and the reason those names are hypotheses, not verdicts: as you've seen, each one has a strong cousin with the same shape.

Two other courses own parts of this ground properly. Statistics for Citizens teaches sampling, margins, and how large "large enough" is. The Scientific Method teaches the design of experiments, which is Mill's method of difference made rigorous. This lesson is meant to let you read both with the logic already in hand.

## Go deeper

- Mill, *A System of Logic*, Book III, chapter 8, in [Jonathan Bennett's modernised text](https://www.earlymoderntexts.com/assets/pdfs/mill1843book3.pdf) at earlymoderntexts.com: about a dozen pages, free, and the five canons in the author's own voice, with the hedge on concomitant variation that the slogan leaves out. Chapter 9 works the methods through real science, and chapter 10 is the plurality-of-causes warning.
- Van Cleave, *Introduction to Logic and Critical Thinking*, [chapter 3 on LibreTexts](https://human.libretexts.org/Bookshelves/Philosophy/Logic_and_Reasoning/Introduction_to_Logic_and_Critical_Thinking_2e_(van_Cleave)/03%3A_Evaluating_Inductive_Arguments_and_Probabilistic_and_Statistical_Fallacies) (free, CC BY 4.0): the tests in this lesson for samples, analogies, and explanations, with exercises, and a bridge into the probability of lesson 6.
- Harman, "The Inference to the Best Explanation", *Philosophical Review* 74 (1965): eight pages, the paper that named the pattern and argued that generalising from cases is itself a special case of it. Dense in places, but you now have what you need to read it.
- The Stanford Encyclopedia of Philosophy entry ["Abduction"](https://plato.stanford.edu/entries/abduction/): the state of the argument over inference to the best explanation, including the bad-lot objection at full strength.
- The Stanford Encyclopedia of Philosophy entry ["Inductive Logic"](https://plato.stanford.edu/entries/logic-inductive/): for readers who want to see what happens when you try to make "degree of support" precise, and why that project is harder than it looks.

## Sources

1. *Internet Encyclopedia of Philosophy*, "Deductive and Inductive Arguments". The distinction as a matter of whether the argument is intended to provide conclusive or only probable support; "A strong inductive argument is said to be one whose premises render the conclusion likely. A cogent argument is a strong argument with true premises." The further condition on cogency stated in this lesson, that the premises must not leave out relevant available evidence, is a standard textbook addition taught here from the coin example rather than quoted from a source.
2. Stanford Encyclopedia of Philosophy, "Inductive Logic" (rev. Feb 2025). "In an inductive logic the truth of the premises of a good argument supports the truth of its conclusion to some appropriate degree."
3. Van Cleave, M., *Introduction to Logic and Critical Thinking*, 2nd ed. (CC BY 4.0, read on LibreTexts). Section 1.8: inductive arguments as defeasible, since adding further information "can overturn (defeat) the verdict that the conclusion is well-supported by the premises". Section 3.1: a statistical generalisation needs a sample large enough and not biased; representative when its characteristics "match the characteristics of the population at large". Section 3.3: analogical arguments need similarity "in relevant respects" and no "relevant disanalogies". Section 3.2: the seven explanatory virtues.
4. Stanford Encyclopedia of Philosophy, "The Problem of Induction" (rev. 2022). Hume's question about what grounds our inferences "from the observed to the unobserved"; the range of answers and the absence of an agreed one.
5. Thornton, S., "Karl Popper", Stanford Encyclopedia of Philosophy (rev. Jul 2026). Popper's position that the only logical technique integral to scientific method is "the deductive testing of theories", and that theories remain "provisional, conjectural, hypothetical".
6. Groarke, L., "Informal Logic", Stanford Encyclopedia of Philosophy. The sorting of arguments into deductive, inductive, conductive, and abductive kinds; abductive arguments as "convincing instances of 'inference to the best explanation'".
7. Mill, J. S., *A System of Logic* (1843), Book III, chapters 8 and 10, in the modernised text by Jonathan Bennett (earlymoderntexts.com, 2017). Bennett's chapter 8 is titled "The four methods of experimental inquiry" (Mill's original heading is "Of the Four Methods of Experimental Inquiry") and runs pp. 191 to 201 of the PDF; chapter 9, "Examples of the four methods", follows, and chapter 10, "Plurality of causes, and the intermixture of effects", begins at p. 214. Verified against the PDF at draft time and re-verified for this revision: the man shot through the heart ("he was in the fullness of life immediately before, all circumstances being the same as after except the wound"); "almost all the inductive conclusions we draw in daily life"; the second canon (method of difference) and fifth canon (concomitant variation) as quoted; the method of difference as "more particularly a method of artificial experiment" and agreement as "what we use when experimentation is impossible"; the sentence following the fifth canon on two effects of a common cause; and, from chapter 10, "It's not true that the same phenomenon is always produced by the same cause; the effect a may sometimes arise from A, sometimes from B."
8. *Internet Encyclopedia of Philosophy*, "Fallacies" (Dowden). False cause defined as "improperly concluding that one thing is a cause of another", with the post hoc fallacy listed among its principal kinds.
9. Harman, G., "The Inference to the Best Explanation", *Philosophical Review* 74(1), 1965, 88 to 95. Names the inference and argues that enumerative induction is really a special case of it, so that explanatory inference is the basic form. The criteria given in the lesson (explains more, more simply, fits what else is known) are the standard textbook gloss and are not quoted from Harman. No free full text; the paper is behind the journal's paywall.
10. Douven, I., "Abduction", Stanford Encyclopedia of Philosophy (rev. Jun 2025). Reports that Harman "conceives induction as a special type of abduction"; van Fraassen's bad-lot objection, that the inference compares a hypothesis only with the rivals actually considered, so the best of the lot may be the best of a bad lot.
11. Possin, K., "Conductive Arguments: Why is This Still a Thing?", *Informal Logic* 36(4), 2016, 563 to 593 (open access). The history and the dispute in one place. Quotes Wellman, *Challenge and Response: Justification in Ethics* (1971): the definition of conduction; the third pattern, with "negative considerations" weighed by "weighing the pros and the cons" (Wellman pp. 55 to 57); and Wellman's frankness that there is no way to judge such arguments "but by thinking them through and feeling their logical force" (p. 79), with re-thinking as the only check (p. 81). Possin's own thesis is that conductive arguments are not a usefully distinct kind; cited for both the quotations and the live disagreement.
