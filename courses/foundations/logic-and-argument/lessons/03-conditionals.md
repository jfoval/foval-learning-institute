---
title: "Conditionals: the four forms and the two that fool almost everyone"
minutes: 95
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/foundations/logic-and-argument/03-conditionals.mp3
objectives:
  - Identify modus ponens, modus tollens, hypothetical syllogism, and disjunctive syllogism in everyday arguments
  - Identify affirming the consequent and denying the antecedent and show why each is invalid with a counterexample
  - Translate "only if", "unless", and necessary and sufficient statements into "if, then" form correctly
  - Explain what the Wason selection task shows about how people test a conditional, and what changes it
quiz:
  - q: A locksmith's apprentice reasons, "The spare key is either with the neighbour or in the lockbox. It isn't with the neighbour. So it's in the lockbox." Which form is this, and does the conclusion follow?
    options:
      - Modus tollens, valid, because the second premise denies one half of the first premise and denial is the tollens move
      - Disjunctive syllogism, valid, though whether the key really had to be in one of those two places is a step 5 question
      - Disjunctive syllogism, invalid, because logic reads "or" as allowing both, so the key could be in two places at once
      - Invalid as written, because the argument only goes through if the "or" is exclusive, and nothing says that it is
    answer: 1
    explain: Premise 1 offers two options, premise 2 rules one out, and what's left is the conclusion. That is disjunctive syllogism, the ruling-out form, and it is valid, so B is right. If the premises are true there is nowhere else for the key to be; the real weak point is whether premise 1 listed all the places, and that is a step 5 question about a premise, not a step 4 question about the link. A misnames the form; modus tollens needs a conditional, and premise 1 is an "or". C turns the inclusive "or" into a problem where there isn't one; allowing both doesn't rescue a case where one side has been ruled out. D has the caution backwards; it is the ruling-in cousin ("it's with the neighbour, so it's not in the lockbox") that needs an exclusive "or", not this form.
  - q: A tenancy agreement says, "You will get your deposit back only if you leave the flat clean." Sam scrubs the flat top to bottom and tells a friend the deposit is now guaranteed. What does the sentence actually license?
    options:
      - Nothing yet; cleaning is necessary for the deposit, so a dirty flat rules it out but a clean one doesn't secure it
      - The deposit; in a contract "only if" and "if" mean the same thing, so a clean flat is enough on its own to secure it
      - The deposit, unless the flat is also damaged, since "only if" names the single condition the landlord may check
      - Nothing at all; "only if" is a warning about the state of the flat, not a statement about what happens to the deposit
    answer: 0
    explain: >-
      "P only if Q" translates as "if P then Q": if you get the deposit, then you left the flat clean. Cleaning is the necessary condition. Sam has met it, which keeps the deposit possible, but the sentence never promised that cleaning is sufficient; unpaid rent or damage could still cost it. A is right. B is the misreading the lesson warns about. C gets the practical point half right but the logic wrong: "only if" does not say cleaning is the one condition, it says it is a required one. D goes too far the other way; the sentence does say something definite, which is what a dirty flat guarantees.
  - q: A warehouse rule says, "If a parcel is marked fragile, then it goes in the padded bin." You can see four parcels. One is marked fragile and you can't see which bin it's headed for. One is marked standard, bin unknown. One is already in the padded bin, label unseen. One is in the ordinary bin, label unseen. Which parcels must you check to find out whether the rule has been broken?
    options:
      - The fragile one and the one in the padded bin, because those are the two cases the rule talks about
      - The fragile one alone, since the rule only says what happens to parcels carrying that particular label
      - All four of them, because a rule about parcels can be broken by any parcel anywhere in the warehouse
      - The fragile one and the one in the ordinary bin, because only those two could turn out to break it
    answer: 3
    explain: This is Wason's task in a warehouse. The rule is broken by exactly one kind of case, fragile label and ordinary bin. The fragile parcel could be that case, so check it (modus ponens). The parcel in the ordinary bin could be that case if its label says fragile, so check it (modus tollens). The parcel in the padded bin cannot break the rule whatever its label, because the rule says nothing about what standard parcels may do; checking it is affirming the consequent. The standard parcel cannot break it either; checking it is denying the antecedent. D is right. A is the commonest wrong answer in the experiments. B misses the breaking case in the ordinary bin. C is safe but wasteful, and it shows you haven't yet seen which two cards matter.
  - q: >-
      "If the invoice misses the noon cutoff, it won't be processed today. If it isn't processed today, the supplier won't be paid this week. So if the invoice misses the cutoff, the supplier won't be paid this week." What is the right verdict at step 4 of the check?
    options:
      - Invalid; nothing in the premises says the invoice actually missed the cutoff, so no conclusion about the payment follows
      - Valid modus ponens; the second premise affirms the antecedent of the first, and affirming the antecedent is the valid move
      - Valid hypothetical syllogism; the two conditionals chain, and the conclusion is itself a conditional claiming no more than the chain does
      - Invalid; a chain of promises is only as strong as its weakest link, and the middle step could easily fail on a normal day
    answer: 2
    explain: The consequent of the first premise is the antecedent of the second, so the chain closes; if P then Q, if Q then R, so if P then R. That is hypothetical syllogism, and it is valid, so C is right. A misreads the conclusion, which is itself a conditional; nobody has claimed the invoice actually missed the cutoff, so no claim about actual payment is being made. B misnames the form; both premises are "if" sentences, and neither affirms anything. D is a worry about whether the second premise is true, which is step 5; at step 4 the link holds, and knowing that tells you exactly which premise to go and check.
  - q: >-
      "If the smoke alarm is faulty, it will chirp every minute or so. It isn't chirping. So it isn't faulty." A friend says this is denying the antecedent, because there's a "not" in the second premise. What should you say?
    options:
      - Modus tollens, valid; the "not" is on the consequent, so the one question left is whether every faulty alarm really chirps
      - Your friend is right; a "not" in the second premise makes the argument deny the antecedent, and that form is always invalid
      - It's affirming the consequent and invalid, because silence is what a working alarm does, and a working alarm is what it concludes
      - It's valid, but only because chirping and faultiness happen to go together in practice, not because of the form itself
    answer: 0
    explain: >-
      Look at where the "not" falls. The consequent was "it will chirp"; the second premise denies that. Denying the consequent is modus tollens, so the form is valid, and A is right. What remains is step 5: is premise 1 true? An alarm with a dead battery might be faulty and silent, and if so the argument is valid but unsound. B is the surface-reading mistake the lesson warns about; the position of the "not" decides, not its presence. C misnames the form; nothing in the second premise affirms the consequent. D gets the verdict right for the wrong reason; validity here is a matter of shape, and the shape is the same whatever the alarm does.
  - q: >-
      "The shipment leaves on Friday unless customs holds it. Customs didn't hold it. So the shipment leaves on Friday." Translate the "unless" and name the form.
    options:
      - >-
        "If customs holds it, then the shipment leaves on Friday"; second premise denies the antecedent; that form is invalid
      - >-
        "If the shipment leaves Friday, customs didn't hold it"; second premise affirms the consequent; that form is invalid
      - >-
        "If customs holds it, the shipment doesn't leave Friday"; second premise denies the antecedent; that form is invalid
      - >-
        "If customs doesn't hold it, the shipment leaves Friday"; second premise affirms the antecedent; modus ponens, valid
    answer: 3
    explain: >-
      "P unless Q" reads as "if not Q, then P": if customs doesn't hold it, the shipment leaves Friday. The second premise says customs didn't hold it, which affirms that antecedent exactly, so this is modus ponens and D is right. A drops the "not", so the conditional says the opposite of what the sentence means. B writes the converse. C is the reading many people carry in their heads, and it may even be what the speaker believed, but it is a second claim the sentence didn't make, and with it the argument would be denying the antecedent. The lesson's rule: translate "unless" as "if not", and don't add the reverse direction unless the speaker says it.
---

Two people are looking at the same flat, and each makes an argument to the other on the way out.

The first says: "If this place had damp, you'd see stains on the ceiling. There aren't any stains. So there's no damp." The second says: "If this place had damp, you'd see stains on the ceiling. Look, there are stains. So it's got damp."

Both arguments use the same first premise, the same everyday words, and the same confident "so". One of them is valid and one of them isn't.

:::predict The first viewer says: no stains, so no damp. The second says: stains, so damp. One of those holds and one doesn't. Which, and what's the difference?
The first one holds. The rule promised stains wherever there's damp, so no stains means no damp, or the rule would have been broken. The second doesn't. The rule never promised that stains have to come from damp: a leak fixed years ago would leave stains in a perfectly dry flat, and that is a case where both premises are true and the conclusion is false. Why the second one feels so right is most of this lesson.
:::

Before we go on, say the six-step check out loud. You've had it since lesson 1: find the conclusion; find the premises; supply what's missing; test the link; test the premises; only then consult your opinion of the conclusion. Lesson 2 gave you the test for step 4 on a deductive argument: could the premises all be true and the conclusion false? This lesson makes that test fast for the commonest kind of premise there is, the "if, then" sentence.

## What "if, then" actually promises

Take the first premise on its own: "If this place had damp, you'd see stains on the ceiling."

Logicians call the "if" part the antecedent and the "then" part the consequent. Write them as P and Q: if P then Q. The sentence is a promise about exactly one situation. It says: whenever P holds, Q holds too. If the flat has damp, there'll be stains.

Now ask what the sentence says about a flat with no damp. Read it again slowly. It says nothing. It doesn't say a dry flat will have no stains; an old leak that was fixed years ago could have left them. The promise covers the case where P is true and is silent about the case where P is false.

So there are four situations to think about, and the conditional rules out just one of them:

- P true, Q true: the flat has damp and there are stains. The promise is kept.
- P true, Q false: damp, and no stains. The promise is broken. This is the only case that makes "if P then Q" false.
- P false, Q true: no damp, stains anyway. The promise never applied. Fine.
- P false, Q false: no damp, no stains. Also fine.

A conditional is refuted by one and only one kind of case: antecedent true, consequent false. Every valid form below is a way of using that fact; every invalid form is a way of forgetting it.

Two more words you'll need. In "if P then Q", P is a *sufficient* condition for Q: P on its own is enough to guarantee Q. And Q is a *necessary* condition for P: you can't have P without Q. Damp is sufficient for stains; stains are necessary for damp. Necessary does not mean sufficient. Stains being necessary for damp doesn't make stains a guarantee of damp, and that asymmetry is where both of the famous mistakes come from.

:::checkpoint "You can vote only if you are 18." Is being 18 a necessary condition for voting, or a sufficient one?
Necessary. The sentence says you can't vote without being 18; it does not say every 18-year-old can vote (they may need to be registered, or a citizen). "P only if Q" means Q is required for P, which is the same as "if P then Q": if you can vote, then you're 18. The reverse, "if you're 18 then you can vote", is a different claim the sentence never made.
:::

## The four valid forms

Here are the four shapes worth having in memory. The first two carry Latin names that are worth learning because you'll meet them: *forall x* names the first as the rule for eliminating an "if", and gives the second its own section.[5] But the names are labels for shapes, and the shapes are what you'll use.

**Modus ponens** ("the affirming way"). Affirm the antecedent, get the consequent.

1. If P then Q.
2. P.

C: Q.

"If the oven's at 220, the bread will brown in twenty minutes. The oven's at 220. So the bread will brown in twenty minutes." Nobody argues with this one. Premise 2 puts us in the situation the promise covers, and the promise delivers.

**Modus tollens** ("the denying way"). Deny the consequent, and you've denied the antecedent.

1. If P then Q.
2. Not Q.

C: Not P.

Our first flat-viewer: if damp then stains; no stains; so no damp. Why is this valid? Suppose the premises are both true and try to make the conclusion false. That means the flat does have damp. But then, by premise 1, there are stains, and premise 2 says there aren't. Contradiction. There's no possible case with true premises and a false conclusion, which is exactly what lesson 2 said "valid" means.[5] The link holds.

Notice what modus tollens is, in plain terms. It's a search for the one breaking case. The rule promises Q whenever P; you found not-Q; so P can't be there, or the rule would have broken. Hold on to that description, because the Wason task later in this lesson is about how rarely people go looking for it.

**Hypothetical syllogism.** Chain two conditionals.

1. If P then Q.
2. If Q then R.

C: If P then R.

"If the train's cancelled, I'll drive. If I drive, I'll be late. So if the train's cancelled, I'll be late." Valid, and useful for exactly the sort of "if this, then that, then the other" chain that turns up in planning. Note the conclusion is itself a conditional. Nobody has claimed the train is cancelled.

**Disjunctive syllogism.** Rule one option out and the other is left.

1. P or Q.
2. Not P.

C: Q.

"Either the key's in my coat or it's in the car. It's not in my coat. So it's in the car." Valid, provided the first premise is true, which is a step 5 question: maybe it's in neither.

One caution about "or". This form runs by *ruling out*. Its cousin that runs by *ruling in* is not valid: "Either the key's in my coat or in the car. It's in my coat. So it's not in the car." In logic, "or" is read as allowing both, so finding one doesn't exclude the other (you could have two keys). In everyday speech "or" often means "one and not the other", and when it plainly does, the ruling-in version can be fine. But that's a fact about the premise, not the form, and it should be written down as a premise ("and not both") rather than assumed.

## The two that fool almost everyone

Now the second flat-viewer. "If damp then stains. There are stains. So there's damp." Write it out.

1. If P then Q.
2. Q.

C: P.

This is **affirming the consequent**, and it's invalid. Run lesson 2's test: can the premises be true and the conclusion false? Yes. The flat is dry, the stains are from a leak the previous owner fixed. Premise 1 is true (damp would produce stains), premise 2 is true (there are stains), the conclusion is false (no damp). One counterexample is all it takes, and there it is.

What went wrong is that the arguer treated the promise as running both ways. "If damp then stains" was read as if it also said "if stains then damp". It didn't. Stains are necessary for damp, and the arguer treated them as sufficient.

The second look-alike:

1. If P then Q.
2. Not P.

C: Not Q.

This is **denying the antecedent**, and it's invalid for the same reason from the other side. "If it's got damp, there'll be stains. It hasn't got damp. So there won't be stains." The old fixed leak sinks this one too: no damp, stains anyway. The rule was silent about dry flats, and the arguer filled the silence with a claim of their own.

Here's the pattern to memorise. Of the four one-step moves you can make on "if P then Q", the two that work start from P (affirm it, get Q) or from not-Q (deny it, get not-P). The two that fail start from Q or from not-P. Affirming the antecedent and denying the consequent: valid. Affirming the consequent and denying the antecedent: invalid. If you remember nothing else from this lesson, remember which end of the conditional you're allowed to start from.

:::checkpoint Five seconds each, by shape only. (a) "If the tap's dripping, the washer's gone. The washer's gone. So the tap's dripping." (b) "If she'd caught the earlier bus, she'd be here by now. She isn't here. So she didn't catch it." (c) "If the milk's off, it'll smell. It's not off. So it won't smell." Which form is each, and which are valid?
(a) Affirming the consequent, invalid: a gone washer is the consequent, and a washer can be gone in a tap that's turned off. (b) Modus tollens, valid: "she isn't here" denies the consequent. (c) Denying the antecedent, invalid: milk that's in date can still smell if it's been left next to the fish. If you got all three in fifteen seconds, the shapes are in. If not, the practice section at the end has ten more.
:::

## Worked example 1: the car that won't start

You turn the key and nothing happens. Your neighbour leans in.

"If the battery's dead, the lights won't come on. Try the lights." You do. They come on. "Right, so it's not the battery."

Step 1, the conclusion: it's not the battery. Step 2, the premises: if the battery's dead the lights won't come on; the lights do come on. Step 3, anything missing? Not for the link; the two premises do the work. Step 4:

1. If the battery is dead, the lights won't come on.
2. The lights come on.

C: The battery isn't dead.

Premise 2 denies the consequent ("the lights won't come on" is false). Modus tollens. Valid. Now step 5: is premise 1 true? Mostly yes, but a battery can have enough charge for the lights and not enough to turn the engine over, and a neighbour who knows cars would say so. The argument is valid and its first premise is a bit too strong. That's a good result: you know exactly which step to worry about, and it isn't the logic.

Now the neighbour tries the reverse. Suppose the lights had stayed dark.

"If the battery's dead, the lights won't come on. The lights don't come on. So the battery's dead."

:::predict Write this one in standard form and name the shape. Then decide whether it holds, and if it doesn't, build the counterexample.
1. If the battery is dead, the lights won't come on.
2. The lights don't come on.

C: The battery is dead.

Premise 2 affirms the consequent, so it doesn't hold. The counterexample is a blown fuse in the lighting circuit: the battery is full of charge, the lights are dark, and premise 1 is still perfectly true, because a dead battery *would* keep the lights off. Dark lights are what a dead battery produces, and they're also what a blown fuse produces, and the rule never said otherwise.
:::

Notice that the invalid version is the one you'd be more likely to hear. Dark lights and a silent engine make "it's the battery" feel obvious, and the feeling is doing the arguing. This is lesson 2's belief bias in a small key: the conclusion is plausible, so the link goes unchecked. The check is the same one as always. Could the premises be true and the conclusion false? Blown fuse. Yes.

## Worked example 2: four cards

Peter Wason devised a short experiment in 1966 that has since been run 228 times over (Wason, 1966; Ragni, Kola & Johnson-Laird, 2017).[1][3] Try it before you read the results. Really try it; write your answer down.

You're shown four cards. Each has a letter on one side and a number on the other. The cards on the table show, face up: a vowel, a consonant, an even number, an odd number. Say E, K, 4, 7.

The rule under test is: "if there is a vowel on one side of the card, then there is an even number on the other side."[1]

:::predict Which card or cards must you turn over to find out whether the rule is true or false? Turn over as few as you can, but as many as you need.
Write your answer before opening this. Most people say E alone, or E and 4. The correct answer is E and 7. The reasoning is below, and if you chose E and 4 you're in the majority and about to see exactly why.
:::

Go back to the four situations from the start of the lesson. The rule is "if vowel then even". The one case that breaks it is a card with a vowel on one side and an odd number on the other. Now ask, for each card, whether turning it over could reveal that case.

The E: it's a vowel. If the back is odd, the rule's broken. Turn it. (This is modus ponens: P, so check for Q.)

The K: a consonant. The rule says nothing about consonants; whatever's on the back, no rule is broken. Leave it. (Turning it would be denying the antecedent: not P, so expecting not Q. The rule made no such promise.)

The 4: an even number. If the back is a vowel, that's a vowel with an even number, which keeps the rule. If the back is a consonant, the rule didn't apply. Either way, nothing breaks. Leave it. (Turning it is affirming the consequent: Q, so expecting P. The rule never said even numbers must have vowels.)

The 7: an odd number. If the back is a vowel, that's a vowel with an odd number. Broken. Turn it. (Modus tollens: not Q, so check for not P.)

<svg viewBox="0 0 344 244" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="wr-t wr-d" style="max-width:100%;height:auto;font-family:inherit">
  <title id="wr-t">The same four cards as the four moves on a conditional</title>
  <desc id="wr-d">The four cards labelled with their logical role. E is P, turn it, modus ponens. K is not P, leave it, since turning it would be denying the antecedent. 4 is Q, leave it, since turning it would be affirming the consequent. 7 is not Q, turn it, modus tollens.</desc>
  <text x="0" y="15" font-size="17" font-weight="600" fill="var(--text-2, #4a5260)">The same cards, as four moves</text>
  <rect x="1" y="28" width="66" height="80" rx="3" fill="var(--navy-soft, #e8eef6)" stroke="var(--oxblood, #8b1e2d)" stroke-width="3"/>
  <text x="34" y="82" font-size="36" text-anchor="middle" fill="var(--navy, #0f2a4a)">E</text>
  <text x="34" y="130" font-size="16" text-anchor="middle" fill="var(--text-2, #4a5260)">P</text>
  <text x="34" y="152" font-size="16" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">Turn</text>
  <rect x="93" y="28" width="66" height="80" rx="3" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="126" y="82" font-size="36" text-anchor="middle" fill="var(--navy, #0f2a4a)">K</text>
  <text x="126" y="130" font-size="16" text-anchor="middle" fill="var(--text-2, #4a5260)">not P</text>
  <text x="126" y="152" font-size="16" text-anchor="middle" fill="var(--text-2, #4a5260)">Leave</text>
  <rect x="185" y="28" width="66" height="80" rx="3" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="218" y="82" font-size="36" text-anchor="middle" fill="var(--navy, #0f2a4a)">4</text>
  <text x="218" y="130" font-size="16" text-anchor="middle" fill="var(--text-2, #4a5260)">Q</text>
  <text x="218" y="152" font-size="16" text-anchor="middle" fill="var(--text-2, #4a5260)">Leave</text>
  <rect x="277" y="28" width="66" height="80" rx="3" fill="var(--navy-soft, #e8eef6)" stroke="var(--oxblood, #8b1e2d)" stroke-width="3"/>
  <text x="310" y="82" font-size="36" text-anchor="middle" fill="var(--navy, #0f2a4a)">7</text>
  <text x="310" y="130" font-size="16" text-anchor="middle" fill="var(--text-2, #4a5260)">not Q</text>
  <text x="310" y="152" font-size="16" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">Turn</text>
  <text x="0" y="182" font-size="15" fill="var(--text-2, #4a5260)">Turn P and not-Q: modus ponens and</text>
  <text x="0" y="200" font-size="15" fill="var(--text-2, #4a5260)">modus tollens. Turning Q is affirming the</text>
  <text x="0" y="218" font-size="15" fill="var(--text-2, #4a5260)">consequent; turning not-P is denying the</text>
  <text x="0" y="236" font-size="15" fill="var(--text-2, #4a5260)">antecedent.</text>
</svg>

So the four cards are the four one-step moves on a conditional, laid out on a table. The two you should turn are the two valid moves: the vowel and the odd number. The pair most people actually reach for is one of those plus one of the invalid ones: the vowel, which is right, and the even number, which is affirming the consequent. The card that goes unturned is the one modus tollens would have sent them to.

Wason summarised what was already known by the time of his 1968 paper: "Nearly all subjects select P, from 60 to 75 per cent select Q, only a minority select not-Q and hardly any select not-P."[2] His own first experiment was run on 36 first-year psychology and statistics students at University College London.[2] Almost everyone turns the vowel; most people also turn the even number; hardly anyone turns the odd number, which is the one card that could sink the rule.

Half a century of replications lets us put numbers on it. Ragni, Kola and Johnson-Laird pooled 228 selection-task experiments in 2017: 104 with abstract rules like Wason's, 44 with everyday content, 80 with rules about what people are permitted or obliged to do (Ragni, Kola & Johnson-Laird, 2017).[3] The four canonical selections on those abstract rules came out like this.[3]

<svg viewBox="0 0 344 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="wb-t wb-d" style="max-width:100%;height:auto;font-family:inherit">
  <title id="wb-t">Which cards people turn over on an abstract Wason task</title>
  <desc id="wb-d">Four bars on one scale. P alone, the vowel, 36 per cent. P and Q, the vowel and the even number, 39 per cent. P and not-Q, the vowel and the odd number, the correct choice, 19 per cent. P, Q and not-Q together, 5 per cent. Pooled from 104 abstract-rule experiments.</desc>
  <text x="0" y="15" font-size="17" font-weight="600" fill="var(--text-2, #4a5260)">What people turn over, abstract rules</text>
  <text x="0" y="44" font-size="16" fill="var(--text-2, #4a5260)">P alone: the vowel</text>
  <rect x="0" y="52" width="240" height="26" fill="var(--surface-2, #f3f5f8)" stroke="var(--line, #d6dbe3)" stroke-width="1.5"/>
  <rect x="0" y="52" width="86" height="26" fill="var(--navy, #0f2a4a)"/>
  <text x="250" y="71" font-size="16" fill="var(--text-2, #4a5260)">36%</text>
  <text x="0" y="102" font-size="16" fill="var(--text-2, #4a5260)">P and Q: vowel and even number</text>
  <rect x="0" y="110" width="240" height="26" fill="var(--surface-2, #f3f5f8)" stroke="var(--line, #d6dbe3)" stroke-width="1.5"/>
  <rect x="0" y="110" width="94" height="26" fill="var(--navy, #0f2a4a)"/>
  <text x="250" y="129" font-size="16" fill="var(--text-2, #4a5260)">39%</text>
  <text x="0" y="160" font-size="16" fill="var(--text-2, #4a5260)">P and not-Q: vowel and odd, correct</text>
  <rect x="0" y="168" width="240" height="26" fill="var(--surface-2, #f3f5f8)" stroke="var(--line, #d6dbe3)" stroke-width="1.5"/>
  <rect x="0" y="168" width="46" height="26" fill="var(--oxblood, #8b1e2d)"/>
  <text x="250" y="187" font-size="16" fill="var(--text-2, #4a5260)">19%</text>
  <text x="0" y="218" font-size="16" fill="var(--text-2, #4a5260)">P, Q and not-Q: three cards</text>
  <rect x="0" y="226" width="240" height="26" fill="var(--surface-2, #f3f5f8)" stroke="var(--line, #d6dbe3)" stroke-width="1.5"/>
  <rect x="0" y="226" width="12" height="26" fill="var(--navy, #0f2a4a)"/>
  <text x="250" y="245" font-size="16" fill="var(--text-2, #4a5260)">5%</text>
  <text x="0" y="272" font-size="15" fill="var(--text-2, #4a5260)">Bars are shares of the four canonical picks.</text>
  <text x="0" y="290" font-size="15" fill="var(--text-2, #4a5260)">104 abstract experiments, Ragni et al. 2017.</text>
</svg>

If you picked E and 4 up there, you are in the largest group on that chart.

Now the second half, and another prediction. Griggs and Cox ran the same four-card *format* with a rule that is a regulation rather than a description: "If a person is drinking beer, then the person must be over 19 years of age."[4] Read that as a change of question, not just of subject matter. With the vowel rule you are asked whether a claim is true. With the drinking rule you are asked who is breaking it, and a regulation cannot be false the way a claim can. Same four cards, different job. The four cards show a person drinking beer, a person drinking a soft drink, a person aged 22, and a person aged 16. Which do you check?

:::predict Same structure, same four moves. Will people do better or worse on the beer rule than on the vowel rule?
Better, and by a lot. On these permission-and-obligation rules the pooled rate for the correct choice (the beer drinker and the 16-year-old) is 64%, against 19% for abstract rules.[3] Most people find the underage drinker at once. Note that the 22-year-old is exactly the "4" card, the one that goes unturned here and gets turned so often on the vowel rule.
:::

Read that contrast carefully, because it's easy to draw the wrong lesson from it. It is not that people can't reason about conditionals. Given a rule someone could be breaking, most of them go straight to the case that would break it, which is the move the abstract version could not get out of them. Whether that is the same inference as modus tollens or a different job wearing its clothes is itself argued over: Manktelow and Over make the case that hunting for violators of a rule you already accept is not the same act as testing whether a claim is true. What the abstract version shows is the mind's *default*. Left to itself, it looks for cases that fit the rule (the vowel, the even number) rather than the one case that could break it (the odd number). Confirming is the reflex; refuting is the skill.

Why the content helps as much as it does is still argued over, and the four live answers are worth knowing because they disagree about what the task measures at all. Griggs and Cox put it down to familiarity: you have met this rule before.[4] Cheng and Holyoak argue for a general permission schema rather than memory, and their evidence is the awkward one for the familiarity account, because an *abstract* permission rule with no familiar content still lifts performance a long way.[6] Cosmides makes a narrower and stronger claim, that we have a dedicated facility for catching cheats in a bargain. Sperber and Girotto put it down to what the rule makes seem relevant. The finding that content helps is not in dispute. What it shows about the mind is.

The same caution applies to the failure, not just the fix. Calling the abstract result a confirmation reflex is Wason's own reading, and it is one reading. Evans' matching-bias account says selections track the items *named* in the rule rather than confirming cases, which predicts that people improve on rules phrased with a "not" in them, and they do. Oaksford and Chater argue the common answer is a reasonable way to gather information if you read the rule as a probabilistic claim. What survives all of them is the practical bit: the card people leave face down is the one that could break the rule.

What you can take from it is practical. When you meet "if P then Q" and want to know whether to believe it, the reflex will send you to find P-and-Q cases. The rule can survive a thousand of those. Go and look for a P-and-not-Q case. If there's a purpose you can attach to the rule, or someone who'd be cheating if it were broken, you'll find the move easier, and that's worth doing to yourself on purpose.

:::checkpoint A friend says: "The Wason task proves people can't do logic." What's the accurate version?
On abstract rules, about 19% pick the two cards that could break the rule, and the commonest error is to check the confirming card, which is affirming the consequent. On rules with a purpose and a cheater to catch, the correct choice rises to 64%. So the task shows what people reason about by default (fitting cases rather than breaking cases), and that framing moves the number a long way. "Can't do logic" is contradicted by the 64%.
:::

## Same claim, different words: contrapositive, converse, and the traps in "only if" and "unless"

The Wason task hides a translation problem. "If vowel then even" and "if not even then not vowel" are the same rule. People who see that turn over the 7 without hesitating. So it's worth being exact about which rewordings of a conditional keep its meaning and which quietly change it.

Start from "if P then Q".

The **contrapositive** is "if not Q then not P". It's the same claim. "If it's got damp there are stains" and "if there are no stains it hasn't got damp" rule out exactly the same case (damp and no stains), so they stand or fall together. Modus tollens is, if you like, modus ponens run on the contrapositive.

The **converse** is "if Q then P". It's a different claim. "If there are stains it's got damp" rules out a different case (stains and no damp), and it can be false while the original is true. Affirming the consequent is what you get when you treat the converse as if it came free with the original.

The **inverse** is "if not P then not Q". Also a different claim, and equivalent to the converse. Denying the antecedent is the inverse smuggled in.

So: contrapositive, same; converse and inverse, different.

There is a name for the case where the promise really does run both ways. "P if and only if Q" asserts the conditional and its converse together: if P then Q, and if Q then P. Logicians call it the **biconditional**, and on it P and Q are each necessary and sufficient for the other, so reasoning from Q to P is perfectly valid, because the second direction supplies the conditional that move needs. That is exactly what the second flat-viewer was treating "if damp then stains" as: a biconditional nobody had asserted. Some sentences really are biconditionals. A definition runs both ways ("a shape is a triangle if and only if it has three sides"), and so does a well-drafted eligibility rule that lists its conditions as "all of the following, and nothing else". A promise, a warning or a causal claim usually runs one way. So when you catch an argument moving from Q to P, the question to ask is not just "is that valid?" but "did anyone actually assert the other direction?" If they did, say so and add it as a premise. If they didn't, you've found the gap.

Now the two English constructions that cause the most trouble.

**"Only if."** "You'll pass only if you sit the exam." Most people, asked quickly, hear this as "if you sit the exam, you'll pass". It says the opposite direction. It says sitting the exam is *necessary* for passing: no sitting, no passing. Translated: if you pass, then you sat the exam. Or, by contrapositive, if you didn't sit it, you didn't pass. What it does not say is that sitting is enough. You can sit and fail. So "P only if Q" goes into standard form as "if P then Q", which puts the "only if" part in the consequent, on the necessary side.

Here's a way to check yourself. Ask: what does the sentence rule out? "You'll pass only if you sit" rules out passing without sitting. It does not rule out sitting without passing. Whatever a conditional rules out, that's its P-and-not-Q case, and once you have that you have the direction.

**"Unless."** "The picnic's on unless it rains." Logicians read "P unless Q" as "if not Q then P": if it doesn't rain, the picnic's on. That reading is the safe one, because it's the part of the sentence nobody would deny. Many speakers also mean the reverse, "if it rains, the picnic's off", and often that's what the speaker had in mind. But the sentence doesn't strictly say it, and there's a real gap between "we'll go ahead if it's dry" and "we'll cancel if it's wet", and drizzle sits right in it. So translate "unless" as "if not", write the reverse direction down as a separate premise if the speaker plainly meant it, and never let it in unstated. *forall x* gives the same rule, and makes the same warning: "unless" can be symbolised as a conditional, but ordinary speakers often mean something closer to a biconditional.[5]

:::checkpoint "The alarm will go off unless the code is entered within thirty seconds." Put it in "if, then" form, then say whether "the code was entered in time, so the alarm didn't go off" follows from the sentence alone.
"If the code is not entered within thirty seconds, the alarm will go off." The inference "code entered, so no alarm" starts from not-P on this conditional, which is denying the antecedent, and it doesn't follow from the sentence alone. Any real alarm system probably works that way, but that's a second claim about the system, not something the "unless" sentence said. Write it in as a bracketed premise and the argument is fine.
:::

## Worked example 3: "only if" in the wild

A school sends a letter: "Pupils will be allowed on the trip only if a consent form is returned by Friday." On Thursday a parent returns the form and tells their child the trip is sorted. On Monday the child is left behind, because the trip was limited to thirty places and they were thirty-fourth to sign up.

Was the parent misled? Put the letter in standard form. "Trip only if form" is "if trip then form": being on the trip requires the form. The parent read it as "if form then trip". That's the converse, and the letter didn't say it. So the letter was accurate and the parent's inference was affirming the consequent, with the thirty-place limit as the counterexample.

The other half is the one people miss.

:::predict A different parent forgot the form. From "if trip then form" plus "no form", what follows? Name the form and say whether it holds.
Modus tollens, and it holds: no form, so no trip. The letter really does guarantee that.
:::

So the sentence gives the school a firm rule in one direction (no form, no trip) and no commitment at all in the other (form, so trip), which is precisely what a school writing carefully would want, and precisely what a parent reading quickly would miss.

One more thing, and it's a spaced review from lesson 1. Is the school's sentence an argument? No. It's a single conditional claim, and a conditional on its own asserts neither of its parts; it asserts a connection between them. It becomes an argument only when someone adds a second premise ("the form's in") and draws a conclusion. The same goes for "if the yeast was old, the bread won't rise" said over a flat loaf. That's an explanation offered as a conditional, not an argument for anything, until someone adds "and the yeast was old, so that's why". Lesson 1's test still applies: is the passage trying to establish something, or explain something already accepted?

## What people get wrong

"If P then Q" means "if Q then P" too. It doesn't. The promise runs one way. The stains, the dark lights, the soft tyre: every one of these is a consequent that has more than one possible antecedent, and the conditional only ever vouched for one of them. When you catch yourself reasoning from the effect back to a cause, ask what else could produce the effect. If anything could, you've got a counterexample.

"If P then Q" means "if not P then not Q". Same error, other end. A rule about what happens when the antecedent holds is silent about what happens when it doesn't. The way this one usually gets past people is that the inverse often *is* true in the world (usually, if it isn't damp, there aren't stains). But "usually true in the world" is a step 5 fact about a separate premise, not a step 4 fact about the link, and the whole point of the check is to keep those apart.

"Only if" means "if". It means the reverse. "P only if Q" makes Q necessary for P, and necessary is never the same as sufficient. Test with "what does this rule out?" and you'll get the direction right every time.

"There's a 'not' in the second premise, so it's modus tollens." The position of the "not" decides, not its presence. "Not Q" gives you modus tollens; "not P" gives you denying the antecedent. Look at which half of the conditional the second premise is talking about before you look at whether it's negated.

"The Wason task shows people can't reason." It shows what they reason about by default, which is confirming cases, and it shows that content with a purpose moves the correct-answer rate from 19% to 64%.[3] What it does convict us of is a reflex, and reflexes can be trained. The training is one question, asked every time: what would break this rule, and have I looked for it?

:::callout Why this is the same move as a counterexample and an experiment
Lesson 2's counterexample method was: keep the shape, find a case with true premises and a false conclusion. Modus tollens is: keep the rule, find a case with P and not Q. Lesson 5 will show you Mill's method of difference, which is: keep everything the same, change one thing, and see whether the effect goes away. They are one idea wearing three coats. The mind's default is to gather cases that fit; the discipline, in logic and in science alike, is to go looking for the one that doesn't.
:::

## Practice

:::exercise Do it now
**Part 1.** Ten short arguments. For each, name the form (modus ponens, modus tollens, hypothetical syllogism, disjunctive syllogism, affirming the consequent, denying the antecedent) and say valid or invalid. Do them on paper, cold, before opening the answers.

1. If the pitch is waterlogged, the match will be called off. The match has been called off. So the pitch was waterlogged.
2. If the pitch is waterlogged, the match will be called off. The pitch is waterlogged. So the match will be called off.
3. Either the recipe needs two eggs or it needs three. It doesn't need three. So it needs two.
4. If she'd taken the motorway, she'd have been here by six. She wasn't here by six. So she didn't take the motorway.
5. If the landlord fixed the boiler, there'll be hot water. The landlord didn't fix it. So there won't be hot water.
6. If the fridge door is left open, the milk will turn. If the milk turns, the tea will be ruined. So if the fridge door is left open, the tea will be ruined.
7. If the flight is on time, we'll make the connection. We didn't make the connection. So the flight wasn't on time.
8. If the meter's been read, the bill will be accurate. The bill is accurate. So the meter's been read.
9. If the timetable changes, the school will send a text. The timetable hasn't changed. So there'll be no text.
10. If the tyre has a slow puncture, it'll be soft again by morning. It's soft again this morning. So it has a slow puncture.

**Part 2.** Translate each into "if, then" form.

11. "You'll be refunded only if you keep the receipt."
12. "The road will stay open unless the river floods."
13. "A completed form is necessary for a parking permit."

**Part 3, from memory.** Close the page and write down: the one case that makes a conditional false; the four valid forms and what each one starts from; the two invalid ones and the counterexample that sinks each; what "P only if Q" and "P unless Q" become in "if, then" form; and which of contrapositive, converse and inverse keeps the original claim. Check what you missed, and reread only those parts.

**Part 4, your folder.** Find one conditional claim in something you read or heard this week: an "if", an "only if", an "unless", a "you can't X without Y". Write it in "if, then" form. Then write its contrapositive and its converse underneath. Now the question that matters: which of those does the writer seem to want you to accept? If they stated the conditional and are relying on you to swallow the converse, you've found the weak step. Put the whole thing in your argument folder with a note.
:::

:::checkpoint Answers to Parts 1 and 2. Open only when you've written yours.
1. Affirming the consequent, invalid (a match can be called off for a frozen pitch or a floodlight failure). 2. Modus ponens, valid. 3. Disjunctive syllogism, valid (though step 5 asks whether those were really the only two options). 4. Modus tollens, valid. 5. Denying the antecedent, invalid (an immersion heater; a neighbour with a spare key and a spanner). 6. Hypothetical syllogism, valid. 7. Modus tollens, valid. 8. Affirming the consequent, invalid (an estimated bill can be accurate by luck). 9. Denying the antecedent, invalid (the school texts about lots of things). 10. Affirming the consequent, invalid (a cold night drops the pressure; a valve leaks).

11. If you're refunded, then you kept the receipt. 12. If the river doesn't flood, the road will stay open. 13. If you get a parking permit, then you completed a form.

If you got 9 or 10 of Part 1, the forms are in. If you missed 1, 8, or 10, you're reasoning from effect to cause; ask what else could produce the effect. If you missed 5 or 9, you're filling the rule's silence with a claim of your own.
:::

## Connections

Lesson 2 gave you the deductive test for step 4: could the premises be true and the conclusion false? This lesson turned that test into four shapes you can recognise at a glance and two you can reject at a glance, which makes step 4 fast for the "if, then" premises that most real arguments run on. Lesson 4 does the same for "all", "no", and "some", and then the deductive unit is done.

Modus tollens comes back twice. In lesson 5 it's the shape of a controlled experiment: the method of difference is a hunt for the P-and-not-Q case. In lesson 8 it's the shape of a strong argument from ignorance: "if the drug were harmful, the trials would have shown it; they didn't; so it isn't" is modus tollens, and whether it's a good argument depends entirely on the first premise, which is step 5, which is what lesson 6 will give you a number for.

And affirming the consequent comes back in lesson 6 in a heavier coat. The prosecutor's fallacy, which lesson 6 shows at work in a real courtroom, is a conditional run backwards: from "if she's innocent, this evidence is very unlikely" to "this evidence is here, so she's very unlikely to be innocent". You now know why that doesn't follow. Lesson 6 shows what does.

## Go deeper

- [*forall x: Calgary*](https://forallx.openlogicproject.org/), Part II, the chapters on the connectives and on "if" in particular (free): the symbolic version of this lesson, including the honest discussion of why the logician's "if" and the English "if" don't quite line up, which this lesson only touched.
- Wason, "Reasoning about a rule" (1968): nine pages, and the experiment is described plainly enough that you can run it on a friend tonight.
- Ragni, Kola & Johnson-Laird, "The Wason selection task: A meta-analysis" (Proceedings of the Cognitive Science Society, 2017): where the 19% and 64% come from, and the authors' own account of what they think the task measures, which you can weigh against mine.
- [*forall x: Calgary*](https://forallx.openlogicproject.org/), section 5.6 "Unless" and section 19.2 "Modus tollens": the same translation rules worked in symbols, with exercises, and free.

## Sources

1. Wason, P. C., "Reasoning", in B. M. Foss (ed.), *New Horizons in Psychology 1* (Penguin, 1966). Where the four-card selection task first appears.
2. Wason, P. C., "Reasoning about a rule", *Quarterly Journal of Experimental Psychology* 20(3), 273-281 (1968), [doi:10.1080/14640746808400161](https://doi.org/10.1080/14640746808400161). The rule "if there is a vowel on one side of the card, then there is an even number on the other side"; cards showing a vowel, a consonant, an even number, an odd number; Wason's summary of what was already known, "Nearly all subjects select P, from 60 to 75 per cent select Q, only a minority select not-Q and hardly any select not-P" (p. 273; the paper prints not-Q and not-P as Q and P with overbars, rendered in words here); Experiment 1 run on "Thirty-six first year psychology and statistics students of University College London" (p. 275).
3. Ragni, M., Kola, I. & Johnson-Laird, P. N., "The Wason selection task: A meta-analysis", *Proceedings of the Cognitive Science Society* (2017); the fuller version is *Psychological Bulletin* 144(8), 779-796 (2018). 228 experiments (104 abstract, 44 everyday, 80 deontic). Pooled selections on abstract rules: p alone 36%, p and q 39%, p, q and not-q 5%, p and not-q 19%. On deontic rules, p and not-q 64%.
4. Griggs, R. A. & Cox, J. R., "The elusive thematic-materials effect in Wason's selection task", *British Journal of Psychology* 73, 407-420 (1982). The drinking-age rule and its four cards, and the finding that familiar content alone does not reliably help.
5. Magnus, P. D., Button, T., Thomas-Bolduc, A., Zach, R. et al., [*forall x: Calgary*](https://forallx.openlogicproject.org/) (CC BY 4.0), chapter 2 and sections 5.6 "Unless" and section 19.2 "Modus tollens", read from the PDF, September 2026. Section 5.6: "If a sentence can be paraphrased as 'Unless A, B,' then it can be symbolized as '(¬A → B)' or '(A ∨ B)'", with the warning that "ordinary speakers of English often use 'unless' to mean something more like the biconditional, or like exclusive disjunction", illustrated with "I will go running unless it rains". Modus ponens is named at the conditional elimination rule (→E); modus tollens is named and worked in section 19.2. Chapter 2, "The scope of logic", defines validity and counterexamples: "An argument is valid if and only if the conclusion is a consequence of the premises. An argument is invalid if and only if it is not valid, i.e., it has a counterexample", which is the test applied to each form here.
6. Cheng, P. W., Holyoak, K. J., Nisbett, R. E. & Oliver, L. M., "Pragmatic versus syntactic approaches to training deductive reasoning", *Cognitive Psychology* 18(3), 293-328 (1986). The permission-schema account, and the finding that an abstract permission rule lifts performance where familiarity cannot explain it.
