---
title: "Conditionals: the four forms and the two that fool almost everyone"
minutes: 75
objectives:
  - Identify modus ponens, modus tollens, hypothetical syllogism, and disjunctive syllogism in everyday arguments
  - Identify affirming the consequent and denying the antecedent and show why each is invalid by building a counterexample
  - Translate "only if", "unless", and necessary and sufficient statements into "if, then" form correctly
  - Explain what the Wason selection task shows about how people test a conditional, and what changes it
quiz:
  - q: >-
      A gardener says, "If the frost got to the tomatoes overnight, the leaves will have turned black
      by morning. The leaves have turned black. So the frost got to them." Which form is this, and
      does the conclusion follow?
    options:
      - Modus ponens, valid, because the black leaves are exactly the condition the first premise was talking about
      - Modus tollens, valid, because the second premise reports the very case the rule predicted and finds it there
      - Affirming the consequent, invalid, because blight or overwatering could blacken leaves without any frost
      - Denying the antecedent, invalid, because the gardener never checked whether there was a frost at all
    answer: 2
    explain: >-
      The rule says frost is sufficient for black leaves. The gardener found black leaves and ran the
      rule backwards, treating the effect as proof of one particular cause. That is affirming the
      consequent, and the counterexample is any other cause of black leaves, which is why C is right.
      A mistakes "the leaves are black" for the antecedent; it is the consequent. B describes modus
      tollens, which would need "the leaves are not black". D names the other invalid form, but the
      second premise here affirms Q, it doesn't deny P.
  - q: >-
      A tenancy agreement says, "You will get your deposit back only if you leave the flat clean."
      Sam scrubs the flat top to bottom and tells a friend the deposit is now guaranteed. What does
      the sentence actually license?
    options:
      - Nothing yet; cleaning is necessary for the deposit, so a dirty flat rules it out but a clean one doesn't secure it
      - The deposit; in a contract "only if" and "if" mean the same thing, so a clean flat is enough on its own to secure it
      - The deposit, unless the flat is also damaged, since "only if" names the single condition the landlord may check
      - Nothing at all; "only if" is a warning about the state of the flat, not a statement about what happens to the deposit
    answer: 0
    explain: >-
      "P only if Q" translates as "if P then Q": if you get the deposit, then you left the flat clean.
      Cleaning is the necessary condition. Sam has met it, which keeps the deposit possible, but the
      sentence never promised that cleaning is sufficient; unpaid rent or damage could still cost it.
      A is right. B is the misreading the lesson warns about. C gets the practical point half right
      but the logic wrong: "only if" does not say cleaning is the one condition, it says it is a
      required one. D goes too far the other way; the sentence does say something definite, which is
      what a dirty flat guarantees.
  - q: >-
      A warehouse rule says, "If a parcel is marked fragile, then it goes in the padded bin." You can
      see four parcels. The first is marked fragile, and you can't see which bin it's headed for. The
      second is marked standard, bin unknown. The third is already in the padded bin, its label
      unseen. The fourth is in the ordinary bin, its label unseen. Which must you check to find out
      whether the rule has been broken?
    options:
      - The fragile one and the one in the padded bin, because those are the two cases the rule talks about
      - The fragile one alone, since the rule only says what happens to parcels carrying that particular label
      - All four of them, because a rule about parcels can be broken by any parcel anywhere in the warehouse
      - The fragile one and the one in the ordinary bin, because only those two could turn out to break it
    answer: 3
    explain: >-
      This is Wason's task in a warehouse. The rule is broken by exactly one kind of case, fragile
      label and ordinary bin. The fragile parcel could be that case, so check it (modus ponens). The
      parcel in the ordinary bin could be that case if its label says fragile, so check it (modus
      tollens). The parcel in the padded bin cannot break the rule either way: if its label says
      fragile the rule has been kept, and if it says standard the rule never applied, so checking it
      is affirming the consequent. The standard parcel cannot break it either; checking it is denying
      the antecedent. D is right. A is the commonest wrong answer in the experiments. B misses the
      breaking case in the ordinary bin. C is safe but wasteful, and it shows you haven't yet seen
      which two cards matter.
  - q: >-
      "If the parcel was sent by courier, it'll arrive by Tuesday. It wasn't sent by courier. So it
      won't arrive by Tuesday." What is the right verdict at step 4 of the check?
    options:
      - Valid modus tollens; the second premise is a denial, and a denial in the second premise is what modus tollens runs on
      - Invalid; the rule says what courier delivery guarantees and nothing about other ways to send it, so post arriving Monday is a counterexample
      - Valid; the rule gives the only route to a Tuesday arrival, so taking that route away takes the arrival away too
      - Invalid; the conclusion is about arrival and the second premise is about sending, so the two premises share no term that could link them
    answer: 1
    explain: >-
      The second premise denies the antecedent, and the rule is silent about the case where the
      antecedent is false. Post could arrive Monday, and that counterexample shows the form invalid,
      so B is right. A is the surface reading this lesson warns about: modus tollens needs the denial
      to land on the consequent ("it won't arrive by Tuesday"), not on the antecedent. C is the
      premise the arguer is smuggling in, that courier is the only way to arrive by Tuesday. The
      sentence never said that, and writing it in as a bracketed premise at step 3 would make the
      argument valid, which is exactly why step 3 exists. D misreads the argument rather than the
      form: the premises do share terms, and carrying you from "sent" to "arrives" is what a
      conditional is for.
  - q: >-
      "If the smoke alarm is faulty, it will chirp every minute or so. It isn't chirping. So it isn't
      faulty." A friend says this is denying the antecedent, because there's a "not" in the second
      premise. What should you say?
    options:
      - Modus tollens, valid; the "not" is on the consequent, so the one question left is whether every faulty alarm really chirps
      - Your friend is right; a "not" in the second premise makes the argument deny the antecedent, and that form is always invalid
      - It's affirming the consequent and invalid, because silence is what a working alarm does, and a working alarm is what it concludes
      - It's valid, but only because chirping and faultiness happen to go together in practice, not because of the form itself
    answer: 0
    explain: >-
      Look at where the "not" falls. The consequent was "it will chirp"; the second premise denies
      that. Denying the consequent is modus tollens, so the form is valid, and A is right. What
      remains is step 5: is premise 1 true? An alarm with a dead battery might be faulty and silent,
      and if so the argument is valid but unsound. B is the surface-reading mistake the lesson warns
      about; the position of the "not" decides, not its presence. C misnames the form; nothing in the
      second premise affirms the consequent. D gets the verdict right for the wrong reason; validity
      here is a matter of shape, and the shape is the same whatever the alarm does.
  - q: >-
      "The shipment leaves on Friday unless customs holds it. Customs didn't hold it. So the shipment
      leaves on Friday." Translate the "unless" and name the form.
    options:
      - >-
        "If customs holds it, the shipment doesn't leave Friday"; the second premise denies that antecedent; denying the antecedent, invalid
      - >-
        "If customs doesn't hold it, the shipment leaves Friday"; the second premise affirms that antecedent; modus ponens, valid
      - >-
        "If the shipment leaves Friday, customs didn't hold it"; the second premise affirms that consequent; affirming the consequent, invalid
      - >-
        "If customs doesn't hold it, the shipment leaves Friday"; the second premise denies that consequent; modus tollens, valid
    answer: 1
    explain: >-
      "P unless Q" reads as "if not Q, then P": if customs doesn't hold it, the shipment leaves
      Friday. "Customs didn't hold it" affirms that antecedent exactly, so this is modus ponens and B
      is right. A is the reading many people carry in their heads, and it may even be what the speaker
      believed, but it is a second claim the sentence didn't make; on A's conditional the second
      premise really would be denying the antecedent, which is why the reverse direction has to be
      written in as its own premise before you use it. C writes the converse of the correct
      translation, which is a different claim again. D translates correctly and then misreads its own
      sentence: "customs didn't hold it" is that conditional's antecedent, not its consequent, so the
      move is ponens, not tollens. Look at which half of the conditional the second premise is talking
      about before you name the form.
---

Two people are looking at the same flat, and each makes an argument to the other on the way out.

The first says: "If this place had damp, you'd see stains on the ceiling. There aren't any stains. So there's no damp." The second says: "If this place had damp, you'd see stains on the ceiling. Look, there are stains. So it's got damp."

Both arguments use the same first premise, the same everyday words, and the same confident "so". One of them is valid and one of them isn't, and the difference is not in the words, the tone, or the confidence. Take five seconds and pick, before you read on.

:::predict One of the two flat-viewers has made a valid argument and one hasn't. Which one, and what makes you say so?
The first. "If damp then stains. No stains. So no damp." If damp always shows as stains, then a ceiling with no stains can't be hiding damp, and there's no way for the premises to hold while the conclusion fails.

The second, "there are stains, so it's got damp", isn't valid, and the counterexample is sitting in most old buildings: a leak that was fixed years ago left the stains behind, the flat is dry, and both premises are still true.

If you picked the second, you're in the largest group, and you've just made one of the two most common reasoning errors there is. It has a name and a section of its own further down.
:::

:::checkpoint Before you go on, write out the six-step check from memory, in order. You've had it since lesson 1, and this is the lesson where you're expected to be able to recite it.
Find the conclusion. Find the premises. Supply what's missing. Test the link. Test the premises. Only then consult your opinion of the conclusion.

Lesson 2 gave you the test for step 4 on a deductive argument: could the premises all be true and the conclusion false? This lesson makes that test fast for one of the commonest kinds of premise there is, the "if, then" sentence.
:::

## What "if, then" promises, and what it leaves out

Take the first premise on its own: "If this place had damp, you'd see stains on the ceiling."

Logicians call the "if" part the antecedent and the "then" part the consequent. Write them as P and Q: if P then Q. The sentence is a promise about exactly one situation. It says: whenever P holds, Q holds too. If the flat has damp, there'll be stains.

Now ask what the sentence says about a flat with no damp. Read it again slowly. It says nothing. It doesn't say a dry flat will have no stains; an old leak that was fixed years ago could have left them. The promise covers the case where P is true and is silent about the case where P is false.

So there are four situations to think about, and the conditional rules out just one of them:

- P true, Q true: the flat has damp and there are stains. The promise is kept.
- P true, Q false: damp, and no stains. The promise is broken. This is the only case that makes "if P then Q" false.
- P false, Q true: no damp, stains anyway. The promise never applied. Fine.
- P false, Q false: no damp, no stains. Also fine.

A conditional is refuted by one and only one kind of case: antecedent true, consequent false. Every valid form below is a way of using that fact, and every invalid form is a way of forgetting it.

One caution before we build on that. Those last two rows are the logician's reading, and it's worth knowing that it is a reading. "If the moon is made of cheese, I'm the King of Spain" comes out true on the four rows above, and most people would say it's odd rather than true, because English "if" seems to carry a connection between the two halves that the rows don't capture. Whether English conditionals really work like the table is argued over, and has been for a long time. Nothing in this lesson turns on it. Every form below uses only the second row, the case that breaks the rule, and nobody disputes that one.

Two more words you'll need. In "if P then Q", P is a *sufficient* condition for Q: P on its own is enough to guarantee Q. And Q is a *necessary* condition for P: you can't have P without Q. Damp is sufficient for stains; stains are necessary for damp. Necessary does not mean sufficient. Stains being necessary for damp doesn't make stains a guarantee of damp, and that asymmetry is where both of the famous mistakes come from.

:::checkpoint "You can vote only if you are 18." Is being 18 a necessary condition for voting, or a sufficient one?
Necessary. The sentence says you can't vote without being 18; it does not say every 18-year-old can vote (they may still need to be on the electoral roll). "P only if Q" means Q is required for P, which is the same as "if P then Q": if you can vote, then you're 18. The reverse, "if you're 18 then you can vote", is a different claim the sentence never made.
:::

## The four valid forms

Four shapes are worth having in memory. Two of them carry Latin names you'll meet in any logic book, and the names are worth learning for that reason alone. But the names are labels for shapes, and the shapes are what you'll use.

**Modus ponens** ("the affirming way"). Affirm the antecedent, get the consequent.

```
1. If P then Q.
2. P.
------------------------------------------------------------------------
C: Q.
```

"If the oven's at 220°C, the bread will brown in twenty minutes. The oven's at 220°C. So the bread will brown in twenty minutes." This is the one nobody has to be talked into. Premise 2 puts us in the situation the promise covers, and the promise delivers.

**Modus tollens** ("the denying way"). Deny the consequent, and you've denied the antecedent.

```
1. If P then Q.
2. Not Q.
------------------------------------------------------------------------
C: Not P.
```

Our first flat-viewer: if damp then stains; no stains; so no damp. Why is this valid? Suppose the premises are both true and try to make the conclusion false. That means the flat does have damp. But then, by premise 1, there are stains, and premise 2 says there aren't. Contradiction. There's no possible case with true premises and a false conclusion, which is exactly what [*forall x*](https://forallx.openlogicproject.org/) and lesson 2 mean by "valid".[3]

Notice what modus tollens is, in plain terms. It's a search for the one breaking case. The rule promises Q whenever P; you found not-Q; so P can't be there, or the rule would have broken. Hold on to that description, because the four-card experiment later is about how rarely people go looking for it.

**Hypothetical syllogism.** Chain two conditionals.

```
1. If P then Q.
2. If Q then R.
------------------------------------------------------------------------
C: If P then R.
```

"If the train's cancelled, I'll drive. If I drive, I'll be late. So if the train's cancelled, I'll be late." Valid, and useful for exactly the sort of "if this, then that, then the other" chain that turns up in planning. Note the conclusion is itself a conditional. Nobody has claimed the train is cancelled.

**Disjunctive syllogism.** Rule one option out and the other is left.

```
1. P or Q.
2. Not P.
------------------------------------------------------------------------
C: Q.
```

"Either the key's in my coat or it's in the car. It's not in my coat. So it's in the car." Valid, provided the first premise is true, which is a step 5 question: maybe it's in neither.

One caution about "or". This form runs by *ruling out*. Its cousin that runs by *ruling in* is not valid: "Either the key's in my coat or in the car. It's in my coat. So it's not in the car." In logic, "or" is read as allowing both, so finding one doesn't exclude the other (you could have two keys). In everyday speech "or" often means "one and not the other", and when it plainly does, the ruling-in version can be fine. But that's a fact about the premise, not the form, and it should be written down as a premise ("and not both") rather than assumed.

## The two that fool almost everyone

Now the second flat-viewer. "If damp then stains. There are stains. So there's damp." Write it out.

```
1. If P then Q.
2. Q.
------------------------------------------------------------------------
C: P.
```

This is **affirming the consequent**, and it's invalid. Run lesson 2's test: can the premises be true and the conclusion false? Yes. The flat is dry, the stains are from a leak the previous owner fixed. Premise 1 is true (damp would produce stains), premise 2 is true (there are stains), the conclusion is false (no damp). One counterexample is all it takes, and there it is.

What went wrong is that the arguer treated the promise as running both ways. "If damp then stains" was read as if it also said "if stains then damp". It didn't. Stains are necessary for damp, and the arguer treated them as sufficient.

The second look-alike:

```
1. If P then Q.
2. Not P.
------------------------------------------------------------------------
C: Not Q.
```

This is **denying the antecedent**, and it's invalid for the same reason from the other side. "If it's got damp, there'll be stains. It hasn't got damp. So there won't be stains." The old fixed leak sinks this one too: no damp, stains anyway. The rule was silent about dry flats, and the arguer filled the silence with a claim of their own.

This is the pattern to memorise. Of the four one-step moves you can make on "if P then Q", the two that work start from P (affirm it, get Q) or from not-Q (deny it, get not-P). The two that fail start from Q or from not-P. Affirming the antecedent and denying the consequent: valid. Affirming the consequent and denying the antecedent: invalid.

:::checkpoint Five seconds each, by shape only. (a) "If the tap's dripping, the washer's gone. The washer's gone. So the tap's dripping." (b) "If she'd caught the earlier bus, she'd be here by now. She isn't here. So she didn't catch it." (c) "If the milk's off, it'll smell. It's not off. So it won't smell." Which form is each, and which are valid?
(a) Affirming the consequent, invalid: a gone washer is the consequent, and a washer can be gone in a tap that's turned off. (b) Modus tollens, valid: "she isn't here" denies the consequent. (c) Denying the antecedent, invalid: milk that's in date can still smell if it's been left next to the fish. If you got all three in fifteen seconds, the shapes are in. If not, the practice section at the end has ten more.
:::

## The car that won't start

You turn the key and nothing happens. Your neighbour leans in.

"If the battery's dead, the lights won't come on. Try the lights." You do. They come on. "Right, so it's not the battery."

Step 1, the conclusion: it's not the battery. Step 2, the premises: if the battery's dead the lights won't come on; the lights do come on. Step 3, anything missing? Not for the link; the two premises do the work. Step 4:

```
1. If the battery is dead, the lights won't come on.
2. The lights come on.
------------------------------------------------------------------------
C: The battery isn't dead.
```

Premise 2 denies the consequent ("the lights won't come on" is false). Modus tollens. Valid. Now step 5: is premise 1 true? Mostly yes, but a battery can have enough charge for the lights and not enough to turn the engine over, and a neighbour who knows cars would say so. The argument is valid and its first premise is a bit too strong. That's a good result: you know exactly which step to worry about, and it isn't the logic.

Now the neighbour tries the reverse. Suppose the lights had stayed dark.

"If the battery's dead, the lights won't come on. The lights don't come on. So the battery's dead."

:::predict Write this one in standard form and name the shape. Then try to build the counterexample: a case where both premises are true and the battery is fine.
The shape is:

    1. If the battery is dead, the lights won't come on.
    2. The lights don't come on.
    ----------------------------------------------------
    C: The battery is dead.

Premise 2 affirms the consequent. Invalid. The counterexample is a blown fuse in the lighting circuit: the battery is full of charge, the lights are dark, and premise 1 is still perfectly true, because a dead battery *would* keep the lights off. Dark lights are what a dead battery produces, and they're also what a blown fuse produces, and the rule never said otherwise.
:::

Notice which version sounds more like something you'd actually hear. Dark lights and a silent engine make "it's the battery" feel obvious, and the feeling is doing the arguing. This is lesson 2's belief bias in a small key: the conclusion is plausible, so the link goes unchecked. The check is the same one as always. Could the premises be true and the conclusion false? Blown fuse. Yes.

:::callout A good place to stop
That's the machinery: what a conditional promises, the four forms that work, and the two that don't. If you're reading in one sitting and want a break, take it here, and do Part 1 of the practice at the end before you come back. The rest of the lesson is about what people actually do when you hand them a conditional to test, and about the English constructions that hide which direction it runs in.
:::

<!-- SPLIT SEAM: here, between the car example and the four cards. Confirmed by the Stage 4 review,
     2026-09-06; both reviewers who considered it put the seam in this place. Part A would be
     "what a conditional promises, the four forms, the two look-alikes", ending with the car example
     and practice Part 1, and it already has its own opening and its own payoff. Part B would be
     "how people actually test a conditional, and how English hides the direction": the four cards,
     the translation section, the school letter and practice Parts 2 and 3. Part B needs a new
     opening under the course convention (open with a real argument, never a definition and never an
     experiment); the school consent letter is the obvious candidate. It also needs a two-sentence
     recap of the four one-step moves at the top. Per BACKLOG 7b the split is NOT made here and
     nothing is renumbered; the renumbering happens once, before the course goes to
     status: published. -->

## Four cards on a table

In 1968 Peter Wason published a short experiment that has since been repeated in hundreds of studies.[1][2] Try it before you read the results, and write your answer down where you can see it later.

You're shown four cards. Each has a letter on one side and a number on the other. The cards on the table show, face up: a vowel, a consonant, an even number, an odd number. Say E, K, 4, 7.

The rule under test is: "if there is a vowel on one side of the card, then there is an even number on the other side."[1]

<svg viewBox="0 0 420 180" role="img" aria-labelledby="cards-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="cards-title">Four cards face up on a table, showing E, K, 4 and 7. The E and K cards have a number hidden on the back; the 4 and 7 cards have a letter hidden on the back. The rule under test is that a card with a vowel on one side has an even number on the other.</title>
  <rect x="8" y="30" width="84" height="106" rx="8" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
  <text x="50" y="95" font-size="38" fill="var(--text, #111418)" text-anchor="middle">E</text>
  <text x="50" y="155" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">number</text>
  <text x="50" y="173" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">on the back</text>
  <rect x="112" y="30" width="84" height="106" rx="8" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
  <text x="154" y="95" font-size="38" fill="var(--text, #111418)" text-anchor="middle">K</text>
  <text x="154" y="155" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">number</text>
  <text x="154" y="173" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">on the back</text>
  <rect x="216" y="30" width="84" height="106" rx="8" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
  <text x="258" y="95" font-size="38" fill="var(--text, #111418)" text-anchor="middle">4</text>
  <text x="258" y="155" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">letter</text>
  <text x="258" y="173" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">on the back</text>
  <rect x="320" y="30" width="84" height="106" rx="8" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
  <text x="362" y="95" font-size="38" fill="var(--text, #111418)" text-anchor="middle">7</text>
  <text x="362" y="155" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">letter</text>
  <text x="362" y="173" font-size="15" fill="var(--text-2, #4a5260)" text-anchor="middle">on the back</text>
  <text x="8" y="18" font-size="15" fill="var(--oxblood, #8b1e2d)">Face up. Each card has a letter on one side and a number on the other.</text>
</svg>

:::predict Which card or cards must you turn over to find out whether the rule is true or false? Turn over as few as you can, but as many as you need.
Write your answer before opening this. Most people say E alone, or E and 4. The correct answer is E and 7. The reasoning is below, and if you chose E and 4 you're in the largest group and about to see exactly why.
:::

Go back to the four situations from the start of the lesson. The rule is "if vowel then even". The one case that breaks it is a card with a vowel on one side and an odd number on the other. Now ask, for each card, whether turning it over could reveal that case.

The E: it's a vowel. If the back is odd, the rule's broken. Turn it. (This is modus ponens: P, so check for Q.)

The K: a consonant. The rule says nothing about consonants; whatever's on the back, no rule is broken. Leave it. (Turning it would be denying the antecedent: not P, so expecting not Q. The rule made no such promise.)

The 4: an even number. If the back is a vowel, that's a vowel with an even number, which keeps the rule. If the back is a consonant, the rule didn't apply. Either way, nothing breaks. Leave it. (Turning it is affirming the consequent: Q, so expecting P. The rule never said even numbers must have vowels.)

The 7: an odd number. If the back is a vowel, that's a vowel with an odd number. Broken. Turn it. (Modus tollens: not Q, so check for not P.)

So the four cards are the four one-step moves on a conditional, laid out on a table. The two you should turn are the two valid forms:

<svg viewBox="0 0 420 250" role="img" aria-labelledby="moves-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="moves-title">A two-by-two grid of the four one-step moves on a conditional. Affirming the antecedent is modus ponens, the E card, valid. Denying the antecedent is invalid, the K card. Affirming the consequent is invalid, the 4 card. Denying the consequent is modus tollens, the 7 card, valid. The two valid moves are the two cards you must turn over.</title>
  <text x="108" y="24" font-size="15" fill="var(--text-2, #4a5260)">Affirm it</text>
  <text x="272" y="24" font-size="15" fill="var(--text-2, #4a5260)">Deny it</text>
  <text x="0" y="82" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Antecedent</text>
  <text x="0" y="100" font-size="15" fill="var(--text-2, #4a5260)">(P)</text>
  <text x="0" y="182" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Consequent</text>
  <text x="0" y="200" font-size="15" fill="var(--text-2, #4a5260)">(Q)</text>
  <rect x="96" y="36" width="162" height="90" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <rect x="258" y="36" width="162" height="90" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <rect x="96" y="126" width="162" height="90" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <rect x="258" y="126" width="162" height="90" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="177" y="62" font-size="15" fill="var(--oxblood, #8b1e2d)" text-anchor="middle">Modus ponens</text>
  <text x="177" y="84" font-size="15" fill="var(--oxblood, #8b1e2d)" text-anchor="middle" font-weight="bold">VALID</text>
  <text x="177" y="110" font-size="15" fill="var(--text, #111418)" text-anchor="middle">the E card, turn it</text>
  <text x="339" y="62" font-size="15" fill="var(--text, #111418)" text-anchor="middle">Denying the</text>
  <text x="339" y="80" font-size="15" fill="var(--text, #111418)" text-anchor="middle">antecedent</text>
  <text x="339" y="102" font-size="15" fill="var(--text, #111418)" text-anchor="middle">invalid</text>
  <text x="339" y="120" font-size="15" fill="var(--text, #111418)" text-anchor="middle">the K card, leave it</text>
  <text x="177" y="152" font-size="15" fill="var(--text, #111418)" text-anchor="middle">Affirming the</text>
  <text x="177" y="170" font-size="15" fill="var(--text, #111418)" text-anchor="middle">consequent</text>
  <text x="177" y="192" font-size="15" fill="var(--text, #111418)" text-anchor="middle">invalid</text>
  <text x="177" y="210" font-size="15" fill="var(--text, #111418)" text-anchor="middle">the 4 card, leave it</text>
  <text x="339" y="152" font-size="15" fill="var(--oxblood, #8b1e2d)" text-anchor="middle">Modus tollens</text>
  <text x="339" y="174" font-size="15" fill="var(--oxblood, #8b1e2d)" text-anchor="middle" font-weight="bold">VALID</text>
  <text x="339" y="200" font-size="15" fill="var(--text, #111418)" text-anchor="middle">the 7 card, turn it</text>
  <text x="0" y="240" font-size="15" fill="var(--text-2, #4a5260)">The two shaded cells are the two cards to turn.</text>
</svg>

People mostly turn the E, which is right, and then add the 4, which cannot break the rule; the card they leave on the table is the 7, which can. So the two errors are the two invalid forms: turning the 4 is affirming the consequent, and skipping the 7 is refusing modus tollens.

Wason already knew roughly what would happen. Summarising the results before his own, he wrote: "Nearly all subjects select P, from 60 to 75 per cent select Q, only a minority select not-Q."[1] His first experiment ran on 36 psychology and statistics undergraduates at University College London, which is a small group, and that's part of why the next paragraph matters.[1]

Half a century of replications lets us put numbers on it. Ragni, Kola and Johnson-Laird pooled 228 selection-task experiments in 2017: 104 with abstract rules like Wason's, 44 with everyday content, and 80 with rules about what people are permitted or obliged to do.[2] On the abstract rules, the four canonical selections came out like this.

<svg viewBox="0 0 420 250" role="img" aria-labelledby="selections-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="selections-title">Bar chart of pooled card selections in the Wason task, from Ragni, Kola and Johnson-Laird 2017. On abstract rules across 104 experiments: P alone 36 per cent, P and Q 39 per cent, P and Q and not-Q 5 per cent, and the correct selection P and not-Q 19 per cent. On permission rules across 80 experiments, the correct selection P and not-Q rises to 64 per cent.</title>
  <text x="0" y="16" font-size="15" fill="var(--text-2, #4a5260)">Abstract rule, 104 experiments</text>
  <text x="0" y="48" font-size="15" fill="var(--text, #111418)">P alone</text>
  <rect x="132" y="32" width="90" height="20" fill="var(--navy, #0f2a4a)"/>
  <text x="228" y="48" font-size="15" fill="var(--text, #111418)">36%</text>
  <text x="0" y="76" font-size="15" fill="var(--text, #111418)">P and Q</text>
  <rect x="132" y="60" width="98" height="20" fill="var(--navy, #0f2a4a)"/>
  <text x="236" y="76" font-size="15" fill="var(--text, #111418)">39%</text>
  <text x="0" y="104" font-size="15" fill="var(--text, #111418)">P, Q, not-Q</text>
  <rect x="132" y="88" width="13" height="20" fill="var(--navy, #0f2a4a)"/>
  <text x="151" y="104" font-size="15" fill="var(--text, #111418)">5%</text>
  <text x="0" y="132" font-size="15" fill="var(--oxblood, #8b1e2d)">P and not-Q</text>
  <rect x="132" y="116" width="48" height="20" fill="var(--oxblood, #8b1e2d)"/>
  <text x="186" y="132" font-size="15" fill="var(--oxblood, #8b1e2d)">19%, correct</text>
  <text x="0" y="176" font-size="15" fill="var(--text-2, #4a5260)">Permission rule, 80 experiments</text>
  <text x="0" y="208" font-size="15" fill="var(--oxblood, #8b1e2d)">P and not-Q</text>
  <rect x="132" y="192" width="160" height="20" fill="var(--oxblood, #8b1e2d)"/>
  <text x="298" y="208" font-size="15" fill="var(--oxblood, #8b1e2d)">64%, correct</text>
  <line x1="130" y1="26" x2="130" y2="218" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="124" y="238" font-size="15" fill="var(--text-2, #4a5260)">0</text>
  <text x="352" y="238" font-size="15" fill="var(--text-2, #4a5260)">100%</text>
</svg>

Read the bottom two bars against each other; the four numbers above them matter less than that gap. Nineteen per cent get it right on rules with no content to hold on to, in samples that are mostly undergraduates. Whether that's a fact about people or a fact about bare letters-and-numbers rules is the argument two paragraphs down.

The second half of the experiment is the one that makes the argument. Researchers have run the same task with a rule that is a regulation rather than a description: "If a person is drinking beer, then the person must be over 19."[2] (Nineteen is the legal drinking age where the original studies were run. The number isn't the point; the rule being a rule is.) The four cards would be the same four moves: someone drinking beer, someone drinking a soft drink, someone aged 22, someone aged 16.

:::predict Same structure, same four moves. Will people do better or worse on the beer rule than on the vowel rule?
Better, and by a lot. On these permission-and-obligation rules the pooled rate for the correct choice, the beer drinker and the 16-year-old, is 64%, against 19% for abstract rules.[2] The 22-year-old is exactly the "4" card, and the pull to check it drops away once the rule has a point.
:::

Read that contrast carefully, because it's easy to draw the wrong lesson from it. It is not that people can't reason about conditionals. Given a rule with a purpose and a cheater to catch, most of them reason about it correctly, and correctly means modus tollens: go and look at the case that could break the rule.

The reading I'd put on the abstract version is that it shows the mind's *default*. Left to itself, it looks for cases that fit the rule (the vowel, the even number) rather than the one case that could break it (the odd number). Researchers who study the task don't all agree that this is what the card choices mean. Some think people are picking the cards the rule *mentions* rather than reasoning about them at all; some think the choices are a sensible bet about which card is likely to be informative. What nobody disputes is the number, and what nobody disputes is that going to look for the breaking case is the move that settles it. So: confirming is the reflex; refuting is the skill. Hold the reflex claim loosely and the practical rule tightly.

Why the content helps as much as it does is also argued over. Cheng, Holyoak, Nisbett and Oliver made the sharpest case against the obvious answer, which is familiarity. Summarising earlier work, they report that a permission rule which was itself **abstract**, with no familiar content to remember at all, was solved by about 60% of people against about 20% on the matching card version.[4] If there's nothing familiar to draw on and performance still trebles, familiarity can't be what's doing the work; their account is that we carry ready-made schemas for permissions and obligations and slot the rule into one of those. Others put the effect down to familiarity anyway, or to what the deontic wording makes seem relevant. The meta-analysis also pooled 44 experiments with everyday but non-deontic content, which is the group that would help separate those accounts, and I'm not quoting a figure for it because I haven't read one. The finding that content helps is not in dispute; the explanation is, and I'd rather tell you that than pick one for you.

What you can take from it is practical. When you meet "if P then Q" and want to know whether to believe it, the reflex will send you to find P-and-Q cases. The rule can survive a thousand of those. Go and look for a P-and-not-Q case. If there's a purpose you can attach to the rule, or someone who'd be cheating if it were broken, you'll find the move easier, and that's worth doing to yourself on purpose.

:::checkpoint A friend says: "The Wason task proves people can't do logic." What's the accurate version?
On abstract rules, about 19% pick the two cards that could break the rule, and the commonest error is to check the confirming card, which is affirming the consequent. On rules with a purpose and a cheater to catch, the correct choice rises to 64%. So the task shows something about what people do by default with a bare rule, and shows that framing moves the number a long way. "Can't do logic" is contradicted by the 64%.
:::

## Contrapositive, converse, and the traps in "only if" and "unless"

The four-card task hides a translation problem. "If vowel then even" and "if not even then not vowel" are the same rule. People who see that turn over the 7 without hesitating. So it's worth being exact about which rewordings of a conditional keep its meaning and which quietly change it.

Start from "if P then Q".

The **contrapositive** is "if not Q then not P". It's the same claim. "If it's got damp there are stains" and "if there are no stains it hasn't got damp" rule out exactly the same case (damp and no stains), so they stand or fall together. Modus tollens is, if you like, modus ponens run on the contrapositive.

The **converse** is "if Q then P". It's a different claim. "If there are stains it's got damp" rules out a different case (stains and no damp), and it can be false while the original is true. Affirming the consequent is what you get when you treat the converse as if it came free with the original.

The **inverse** is "if not P then not Q". Also a different claim, and equivalent to the converse. Denying the antecedent is the inverse smuggled in.

So the contrapositive says the same thing and the converse and inverse say something else. That is the whole of it, and getting it wrong in either direction is one of the two famous mistakes.

Now the two English constructions that cause the most trouble.

**"Only if."** "You'll pass only if you sit the exam." Read quickly, this sounds like "if you sit the exam, you'll pass". It says the opposite direction. It says sitting the exam is *necessary* for passing: no sitting, no passing. Translated: if you pass, then you sat the exam. Or, by contrapositive, if you didn't sit it, you didn't pass. What it does not say is that sitting is enough. You can sit and fail. So "P only if Q" goes into standard form as "if P then Q", which puts the "only if" part in the consequent, on the necessary side.

There's a way to check yourself, and it works on every conditional you'll ever meet. Ask: what does this sentence rule out? "You'll pass only if you sit" rules out passing without sitting. It does not rule out sitting without passing. Whatever a conditional rules out, that's its P-and-not-Q case, and once you have that you have the direction.

**"Unless."** "The picnic's on unless it rains." Logicians read "P unless Q" as "if not Q then P": if it doesn't rain, the picnic's on. That reading is the safe one, because it's the part of the sentence nobody would deny. Many speakers also mean the reverse, "if it rains, the picnic's off", and often that's what the speaker had in mind. But the sentence doesn't strictly say it, and there's a real gap between "we'll go ahead if it's dry" and "we'll cancel if it's wet" (drizzle, anyone?). So translate "unless" as "if not", write the reverse direction down as a separate premise if the speaker plainly meant it, and never let it in unstated.

:::checkpoint "The alarm will go off unless the code is entered within thirty seconds." Put it in "if, then" form, then say whether "the code was entered in time, so the alarm didn't go off" follows from the sentence alone.
"If the code is not entered within thirty seconds, the alarm will go off." The inference "code entered, so no alarm" starts from not-P on this conditional, which is denying the antecedent, and it doesn't follow from the sentence alone. Any real alarm system probably works that way, but that's a second claim about the system, not something the "unless" sentence said. Write it in as a bracketed premise and the argument is fine.
:::

## "Only if" in the wild: a school letter

A school sends a letter: "Pupils will be allowed on the trip only if a consent form is returned by Friday." On Thursday a parent returns the form and tells their child the trip is sorted. On Monday the child is left behind, because the trip was limited to thirty places and they were thirty-fourth to sign up.

Was the parent misled? Put the letter in standard form. "Trip only if form" is "if trip then form": being on the trip requires the form. The parent read it as "if form then trip". That's the converse, and the letter didn't say it. So the letter was accurate and the parent's inference was affirming the consequent, with the thirty-place limit as the counterexample.

:::predict Now the other half, which people miss. A different parent forgot the form. From "if trip then form" plus "no form", what follows? Name the form and say whether it's valid.
Modus tollens, and valid: no form, so no trip. The letter really does guarantee that.
:::

So the letter gives the school a firm rule in one direction, no form and no trip, and no commitment at all in the other. That asymmetry is easy to write without noticing and easy to read past without noticing, which is why consumer and plain-language rules generally put the burden on the person drafting the sentence rather than the person reading it. Your job, on either side of it, is the same: see which direction the conditional actually runs.

:::checkpoint One more thing, and it's a spaced review from lesson 1. The school's sentence, on its own: is it an argument?
No. It's a single conditional claim, and a conditional on its own asserts neither of its parts; it asserts a connection between them. It becomes an argument only when someone adds a second premise ("the form's in") and draws a conclusion. The same goes for "if the yeast was old, the bread won't rise" said over a flat loaf. That's an explanation offered as a conditional, not an argument for anything, until someone adds "and the yeast was old, so that's why". Lesson 1's test still applies: is the passage trying to establish something, or explain something already accepted?
:::

## What people get wrong

"If P then Q" means "if Q then P" too. It doesn't. The promise runs one way. The stains, the dark lights, the flat loaf: every one of these is a consequent that has more than one possible antecedent, and the conditional only ever vouched for one of them. When you catch yourself reasoning from the effect back to a cause, ask what else could produce the effect. If anything could, you've got a counterexample.

"If P then Q" means "if not P then not Q". Same error, other end. A rule about what happens when the antecedent holds is silent about what happens when it doesn't. The way this one usually gets past people is that the inverse often *is* true in the world (in most flats, if it isn't damp, there aren't stains). But "true in the world" is a step 5 fact about a separate premise, not a step 4 fact about the link, and the whole point of the check is to keep those apart.

"Only if" means "if". It means the reverse. "P only if Q" makes Q necessary for P, and necessary is never the same as sufficient. Test with "what does this rule out?" and you'll get the direction right every time.

"There's a 'not' in the second premise, so it's modus tollens." The position of the "not" decides, not its presence. "Not Q" gives you modus tollens; "not P" gives you denying the antecedent. Look at which half of the conditional the second premise is talking about before you look at whether it's negated.

"The four-card task shows people can't reason." It shows what they do with a bare rule and no reason to care about it, and it shows that content with a purpose moves the correct-answer rate from 19% to 64%.[2] What it convicts us of is a reflex. Whether a reflex like that can be trained is a real question, and the evidence is mixed enough that lesson 4 spends a section on it. The one question is cheap to ask anyway: what would break this rule, and have I looked for it?

:::callout One idea wearing three coats
Lesson 2's counterexample method was: keep the shape, find a case with true premises and a false conclusion. Modus tollens is: keep the rule, find a case with P and not Q. Lesson 5 will show you Mill's method of difference, which is: keep everything the same, change one thing, and see whether the effect goes away. They're one idea in three coats. The mind's default is to gather cases that fit; a large part of the discipline, in logic and in experimental science alike, is going to look for the one that doesn't.
:::

## Practice

:::exercise On paper, before you look at anything
**Part 1.** Ten short arguments. For each, name the form (modus ponens, modus tollens, hypothetical syllogism, disjunctive syllogism, affirming the consequent, denying the antecedent) and say valid or invalid. **For every one you mark invalid, write the counterexample in one line: a case where both premises hold and the conclusion fails.** Do them cold, before opening the answers.

1. If the football pitch is waterlogged, the match will be called off. The match has been called off. So the pitch was waterlogged.
2. If the football pitch is waterlogged, the match will be called off. The pitch is waterlogged. So the match will be called off.
3. If the landlord fixed the boiler, there'll be hot water. The landlord didn't fix it. So there won't be hot water.
4. Either the recipe needs two eggs or it needs three. It doesn't need three. So it needs two.
5. If she'd taken the motorway, she'd have been here by six. She wasn't here by six. So she didn't take the motorway.
6. If the meter's been read, the bill will be accurate. The bill is accurate. So the meter's been read.
7. The pool is open to visitors only if a lifeguard is on duty. There was no lifeguard on duty this morning. So the pool wasn't open to visitors this morning.
8. If the timetable changes, the school will send a text. The timetable hasn't changed. So there'll be no text.
9. If the fridge door is left open, the milk will turn. If the milk turns, the tea will be ruined. So if the fridge door is left open, the tea will be ruined.
10. If the tyre has a slow puncture, it'll be soft again by morning. It's soft again this morning. So it has a slow puncture.

**Part 2.** Translate each into "if, then" form.

11. "You'll be refunded only if you keep the receipt."
12. "The road will stay open unless the river floods."
13. "A completed form is necessary for a parking permit."

**Part 3, your folder.** Find one conditional claim in something you read or heard this week: an "if", an "only if", an "unless", a "you can't X without Y". Write it in "if, then" form. Then write its contrapositive and its converse underneath. Now the question that matters: which of those does the writer seem to want you to accept? If they stated the conditional and are relying on you to swallow the converse, you've found the weak step. Put the whole thing in your argument folder with a note.
:::

:::checkpoint Answers to Parts 1 and 2, with a counterexample for each invalid one. Open only when you've written yours.
1. Affirming the consequent, invalid. Counterexample: the match was called off because the floodlights failed, and the pitch was fine.

2. Modus ponens, valid.

3. Denying the antecedent, invalid. Counterexample: the landlord did nothing and a neighbour with a spare key and a spanner fixed it.

4. Disjunctive syllogism, valid, though step 5 asks whether those were really the only two options.

5. Modus tollens, valid.

6. Affirming the consequent, invalid. Counterexample: the meter wasn't read, the estimate was used, and the estimate happened to be right.

7. Modus tollens, valid. Translate first: "only if" puts the lifeguard in the consequent, so the rule is "if the pool is open to visitors, a lifeguard is on duty". "No lifeguard" denies that consequent.

8. Denying the antecedent, invalid. Counterexample: the timetable stayed put and the school texted about a fire drill.

9. Hypothetical syllogism, valid.

10. Affirming the consequent, invalid. Counterexample: a cold night dropped the pressure, or the valve leaks.

11. If you're refunded, then you kept the receipt. 12. If the river doesn't flood, the road will stay open. 13. If you get a parking permit, then you completed a form.

If you got 9 or 10 of Part 1, the forms are in. If you missed 1, 6, or 10, you're reasoning from effect to cause; ask what else could produce the effect. If you missed 3 or 8, you're filling the rule's silence with a claim of your own. And if you named the forms but couldn't build the counterexamples, that's step 4 half-learned: the counterexample is what makes the verdict yours rather than remembered.
:::

Before the quiz, close the page and write down everything you can remember from this lesson. Aim for the one case that makes a conditional false, the four one-step moves and which two are valid, why affirming the consequent feels right, what "only if" and "unless" translate to, and the two selection-task percentages and what separates them. Then check your list against the lesson. The gaps you find that way are worth more than the ones the quiz finds for you.

## Connections

Lesson 2 gave you the deductive test for step 4: could the premises be true and the conclusion false? This lesson turned that test into four shapes you can recognise at a glance and two you can reject at a glance, which makes step 4 fast for the "if, then" premises that turn up everywhere in contracts, instructions, planning and diagnosis. Lesson 4 does the same for "all", "no", and "some", and then the deductive unit is done. It also takes up the question this lesson left open: how much formal logic a general reader actually needs, and what the evidence says about whether teaching it changes how anyone reasons.

Modus tollens comes back twice. In lesson 5 it's the shape of a controlled experiment: the method of difference is a hunt for the P-and-not-Q case. In lesson 8 it's the shape of a strong argument from ignorance. "If the drug were harmful, the trials would have shown it. They didn't. So it isn't." That's modus tollens, and it's only as good as its first premise, which is a step 5 question. Lesson 6 will give you a way of putting a number on it.

And affirming the consequent comes back in lesson 6 in a heavier coat. The prosecutor's fallacy, which lesson 6 shows at work in a real courtroom, is a conditional run backwards: from "if she's innocent, this evidence is very unlikely" to "this evidence is here, so she's very unlikely to be innocent". You now know why that doesn't follow. Lesson 6 shows what does.

## Go deeper

- [*forall x: Calgary*](https://forallx.openlogicproject.org/), Parts II and III (free, CC BY): the symbolic version of this lesson, truth-functional logic and truth tables, for anyone who wants the conditional written in symbols.
- Van Cleave, [*Introduction to Logic and Critical Thinking*](https://human.libretexts.org/Bookshelves/Philosophy/Introduction_to_Logic_and_Critical_Thinking_2e_%28van_Cleave%29/01%3A_Reconstructing_and_Analyzing_Arguments), chapter 1 (free, CC BY). Sections 1.5 to 1.8 on paraphrasing to standard form, validity and soundness: revision rather than new material, and a gentler second pass over what lessons 1 and 2 covered.
- Wason, "Reasoning about a rule", *Quarterly Journal of Experimental Psychology* 20(3), 1968, 273 to 281: nine pages, and the experiment is described plainly enough that you can run it on a friend tonight.
- Ragni, Kola & Johnson-Laird, "The Wason selection task: A meta-analysis", *Proceedings of the Cognitive Science Society*, 2017: where the 19% and 64% come from, pooled over 228 experiments and broken down by rule type.

## Sources

1. Wason, P. C., "Reasoning about a rule", *Quarterly Journal of Experimental Psychology* 20(3), 1968, 273 to 281. The four-card task; the rule "if there is a vowel on one side of the card, then there is an even number on the other side"; cards showing a vowel, a consonant, an even number, an odd number; Wason's summary of the results known before his own, "Nearly all subjects select P, from 60 to 75 per cent select Q, only a minority select not-Q"; Experiment 1 run on 36 first-year psychology and statistics students at University College London. The specific card faces E, K, 4 and 7 are this lesson's instantiation, not the paper's.
2. Ragni, M., Kola, I. & Johnson-Laird, P. N., "The Wason selection task: A meta-analysis", *Proceedings of the Cognitive Science Society*, 2017. 228 experiments (104 abstract, 44 everyday, 80 deontic). Pooled selections on abstract rules: p alone 36%, p and q 39%, p, q and not-q 5%, p and not-q 19%. On deontic rules such as "If a person is drinking beer, then the person must be over 19", p and not-q 64%. The four cards described for the beer rule are the four moves as this lesson names them; the paper's own card set is not recorded in our research file, and no per-card figures for the deontic condition are recorded, so none are given here.
3. Magnus, P. D., Button, T., Trueman, R., Zach, R. et al., *forall x: Calgary* (Fall 2025, CC BY 4.0), chapter 2. "An argument is valid if and only if the conclusion is a consequence of the premises. An argument is invalid if and only if it is not valid, i.e., it has a counterexample." Used for the validity test applied to each form.
4. Cheng, P. W., Holyoak, K. J., Nisbett, R. E. & Oliver, L. M., "Pragmatic versus syntactic approaches to training deductive reasoning", *Cognitive Psychology* 18(3), 1986, 293 to 328. Read in full from the University of Michigan repository (hdl.handle.net/2027.42/26121). Cited here for the introduction's summary of Cheng & Holyoak 1985: fewer than 10% of college students solve the arbitrary card version, while about 60% solved an *abstract* permission version against about 20% on the matching card version, which is the result that tells against a familiarity account. The paper's training experiments, including the classroom study, belong to lesson 4 and are not used here.
