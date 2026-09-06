---
title: "All, no, some: checking a syllogism in two minutes"
minutes: 75
objectives:
  - Translate everyday sentences into the four categorical forms (all, no, some, some not) and state the exact sentence that contradicts each one
  - Test a two-premise syllogism for validity with a three-circle Venn diagram and name the counterexample when it fails
  - Explain why "some A are B" does not mean "some A are not B", and spot where an argument leans on the wrong reading
  - Choose between the conditional shapes of lesson 3 and the Venn check when you meet a deductive argument
quiz:
  - q: >-
      A council notice reads, "All vehicles parked on this street overnight hold a permit." A
      neighbour says, "The van across the road holds a permit, so it's one of the ones parked here
      overnight." Put it in standard form and check it. What do you find?
    options:
      - Valid; a van with no permit could not have been parked here overnight, so the neighbour's inference holds
      - Invalid, but only because the council's first premise is unlikely to be true in practice
      - Valid, because it has the same shape as modus ponens with categories instead of conditionals
      - Invalid; a permit holder who parks here by day and elsewhere by night fits both premises
    answer: 3
    explain: >-
      The shape is "All overnight parkers are permit holders; the van is a permit holder; so the van
      is an overnight parker." Both premises put things inside the permit-holder circle without ever
      saying that circle contains only overnight parkers, so the region "permit holder, not an
      overnight parker" is left open, and that is the counterexample in D. Option A states the
      contrapositive of the notice, which is true and is not what the neighbour needs: "no permit, so
      not parked here overnight" tells you nothing about a van that does hold one. Option B confuses
      step 4 with step 5; a doubtful premise is a different fault from an invalid link, and this link
      is invalid however true the premises are. Option C names the wrong shape; the argument runs
      from "all A are B" and "this is B" to "this is A", which is the categorical cousin of affirming
      the consequent, not of modus ponens.
  - q: >-
      Nadia announces, "Nobody on the sales team filled in the survey." You think she's wrong. Which
      single thing, if you could show it, would prove her statement false?
    options:
      - That most of the sales team filled the survey in, rather than merely one or two of them
      - That the whole sales team filled the survey in, which is the direct opposite of her claim
      - That one person on the sales team filled the survey in, whoever it is and however few
      - That someone on the sales team did not fill it in, which shows the team was divided
    answer: 2
    explain: >-
      The sentences "no A are B" and "some A are B" are contradictories. Exactly one of them is true,
      so a single salesperson who filled in the survey makes "nobody did" false. That is option C.
      Option A would also refute her, but it proves far more than you need and is much harder to
      show. Option B is the contrary, not the contradictory; both "nobody" and "everybody" can be
      false at once, so aiming for it wastes effort. Option D is a statement that agrees with Nadia;
      someone not filling it in is exactly what she said about everyone.
  - q: >-
      An inspection report says, "Some of the bridges inspected this year need repair." A resident at
      the council meeting replies, "So the report admits that some of them are fine." What has the
      resident done?
    options:
      - Read the report correctly, since a report that meant all of them would have said so
      - Drawn a conclusion the sentence never made; "some need repair" is true even if all do
      - Made an error of degree, because "some" in an official document means fewer than half
      - Read it correctly, provided the inspectors actually looked at every bridge in the area
    answer: 1
    explain: >-
      In logic "some A are B" means at least one A is B, and it is compatible with all of them being
      B. The report's sentence would still be true if every bridge needed repair, so it gives no
      support to "some are fine". That is option B. Option A describes the everyday expectation, a
      conversational implicature; it is a reasonable guess about what the writer might have said, not
      something the sentence asserts, and an inspector who found that every bridge needed repair
      could still have written that sentence truthfully. Option C invents a threshold that "some"
      does not have. Option D changes the subject; how many bridges were inspected has no bearing on
      what "some" means.
  - q: >-
      "Some of the shops on the high street open on Sundays. All shops that open on Sundays pay the
      higher business rate. So some shops on the high street pay the higher rate." You draw the three
      circles, shade the universal premise, then place the X. What does the finished diagram show?
    options:
      - Valid; the shading leaves the X one place to go, and that place is inside what the conclusion needs
      - Invalid; the X lands on a line between two regions, so the conclusion is not forced by the premises
      - Invalid; a premise with "some" and a premise with "all" cannot together support any conclusion at all
      - Valid only if you add the assumption that there is at least one shop on the high street to begin with
    answer: 0
    explain: >-
      Shade first. "All Sunday-openers pay the higher rate" empties the part of the Sunday-openers
      circle outside the higher-rate circle. Now "some high street shops are Sunday-openers" needs an
      X in the overlap of high street and Sunday-openers; that overlap is cut in two by the
      higher-rate circle, but one half is already shaded, so the X goes in the other half, which is
      inside the high street and higher-rate overlap. The conclusion is already drawn, so option A.
      Option B describes the case where neither half is shaded, which is not this case. Option C is
      false in general; this very argument is the counterexample. Option D confuses this with
      existential import; the "some" premise already asserts that such a shop exists.
  - q: >-
      "Some of the players are carrying injuries. All the goalkeepers are players. So some of the
      goalkeepers are carrying injuries." Which verdict is right, and why?
    options:
      - Valid, because every goalkeeper is a player and the premises say that some players are injured
      - Valid, as long as the squad has at least one goalkeeper, which any real squad certainly does
      - Invalid; the injured X sits on the goalkeeper line, so the injured may all be outfield players
      - Invalid, because the conclusion is one you would need medical records to believe, not logic
    answer: 2
    explain: >-
      Shade "all goalkeepers are players" by emptying the goalkeeper crescent outside players. Then
      "some players are injured" wants an X in the players and injured overlap, and that overlap is
      cut by the goalkeeper circle with neither half shaded. So the X goes on the line, and the
      conclusion, which needs an X definitely inside goalkeepers, is not forced. That is option C,
      and the counterexample is a squad where the injured players are all outfield players and every
      goalkeeper is fit. Option A slides from "some players are injured" to "some players of every
      kind are injured"; the premise puts an X somewhere among the players and never says which ones,
      which is the whole reason it ends up on a line. Option B is about existential import, which is
      not the gap here; the gap is which players. Option D judges the conclusion instead of the link,
      which is belief bias, and gets the reason wrong even though the verdict happens to be right.
  - q: >-
      Two arguments from the same email about booking a venue. (i) "If the caterer confirms by
      Friday, we can book the hall. The caterer confirmed on Thursday. So we can book the hall."
      (ii) "None of the halls we can afford have a kitchen. Every hall with a kitchen is on the ring
      road. So none of the halls we can afford are on the ring road." Which check does each one need,
      and what are the two verdicts?
    options:
      - Both need the three circles, since each has two premises and a conclusion, which is the shape the Venn test is built for
      - (i) the conditional shapes, and it is valid; (ii) the three circles, and it is invalid
      - (i) the conditional shapes, and it is valid; (ii) the three circles, and it is valid
      - (i) the three circles, since "the caterer" is a category with one member; (ii) the conditional shapes, since "none" is a denial
    answer: 1
    explain: >-
      Pick the tool from the words the premises are built out of, not from the number of premises.
      Argument (i) runs on "if", so it is lesson 3's business: affirm the antecedent, take the
      consequent, modus ponens, valid. Argument (ii) runs on "none" and "every", so it is three
      circles. Shade the overlap of affordable and kitchen, then shade the part of the kitchen circle
      outside the ring road. The conclusion needs the whole overlap of affordable and ring road to be
      empty, and the part of that overlap lying outside the kitchen circle was never touched. An
      affordable hall on the ring road with no kitchen makes both premises true and the conclusion
      false, so the answer is B. Option C gets both tools right and the second verdict wrong, which
      is what you get by reading the two premises as a chain; "if, then" premises chain, "no"
      premises do not, and that is worth thirty seconds of drawing to see. Option A picks the tool by
      counting premises, and two premises and a conclusion is the shape of every argument in both
      lessons. Option D swaps them: a premise about one named thing does go on the diagram as an X,
      but only when the other premises are "all", "no" or "some", and here they are not.
---

Someone at work says this to you in the lift: "Everyone who gets promoted here has done the leadership course. Everyone on my team has done the course. So everyone on my team is going to get promoted."

Put it in standard form, the way lesson 1 taught you:

```
1. All people who get promoted here are people who have done the course.
2. All people on my team are people who have done the course.
------------------------------------------------------------------------
C: All people on my team are people who get promoted here.
```

Something is wrong, and you can probably feel it. But feeling it isn't checking it, and if the conclusion had been one you liked, you might not have felt it at all. Lesson 2 gave you the counterexample method: imagine a case where both premises are true and the conclusion false. That works, and it takes imagination, which runs out when you're tired or when the argument is about something you care about. This lesson gives you the same test done with a pencil. You draw three circles, draw the premises, and look. If the conclusion is already on the page, the argument is valid. If it isn't, the gap on the page is your counterexample.

You'll want paper for this one.

:::checkpoint This lesson is step 4 of the six-step check. Before you read on, say all six from lesson 1, in order, out loud. If you can't, better to find that out now than in the quiz.
Find the conclusion. Find the premises. Supply what's missing. Test the link. Test the premises. Only then consult your opinion of the conclusion.

Lesson 3 gave you four fast shapes for arguments built from "if". This lesson gives you one fast method for arguments built from "all", "no", and "some". Those two are the deductive kit this course hands you, and the rest of it is about the arguments that aren't deductive at all.
:::

## The four sentences

Everything here is built from four sentence shapes. Logicians call them categorical sentences, because each one says how one category sits inside, outside, or across another. A and B stand for any two categories: dogs, mammals, people on my team, things that flood.

- All A are B.
- No A are B.
- Some A are B.
- Some A are not B.

Aristotle worked out the logic of these four in the [*Prior Analytics*](http://classics.mit.edu/Aristotle/prior.1.i.html), in the fourth century BC. The method you're about to learn is a much later picture of his system, drawn with circles ([Smith](https://plato.stanford.edu/entries/aristotle-logic/)).[1]

Everyday sentences don't arrive in these shapes, so the first skill is translation. English disguises the form in six ways, and each one has a fix.

**Bare plurals mean "all".** "Dogs are mammals" is "All dogs are mammals." "Ground-floor flats flood" is a claim about all of them, and the speaker will retreat to "well, most of them" the moment you find one that didn't. That retreat matters: "most" isn't one of the four forms, and an argument built on "most" is an inductive argument, which is lesson 5's business.

**"Not all" is not "none".** "Not all the trains were late" means "Some trains were not late." It does not mean "No trains were late." Get this one wrong and you end up denying something far stronger than you meant to. There's a section on it below.

**"All A are not B" is ambiguous in English.** "All the shops are not open" can mean "Not all the shops are open", with some of them shut. It can also mean "No shops are open." English won't settle it. Ask which. Don't guess.

**"Only" reverses the direction.** "Only members may park here" is "All people who may park here are members." It is not "All members may park here." This is the same reversal as "only if" in lesson 3: "only" tells you what's necessary, not what's sufficient.

**"Some" means "at least one".** "A few of the applicants are qualified", "there are applicants who are qualified", "at least one applicant is qualified": all of these are "Some applicants are qualified." And, as you'll see, so is "all of the applicants are qualified".

**A claim about one named thing behaves like "some".** "The van holds a permit" puts one particular thing inside the permit-holder circle, so draw it as an X and write the name beside it. Everything the method says about an X applies to it, including landing on a line when the premises don't say which side it's on.

:::checkpoint "Only ticket holders will be admitted." Write it as one of the four forms. Then say what it does not tell you.
All people who will be admitted are ticket holders. It does not tell you that every ticket holder will be admitted; the venue could still turn a ticket holder away for being drunk, and the sign would stand.
:::

## What "some" means

In logic, "Some A are B" means: at least one A is B. That's all. It says nothing about the rest of the As.

So "Some of the students passed" is true if one student passed, true if half did, and true if every single one did. Read that last clause again. It's the one that feels wrong, so here it is slowly: if all the students passed, then certainly at least one did, and "some passed" is true.

Why does it feel wrong? Because in conversation, if you knew that everyone passed, you'd say so. Saying "some" when you could have said "all" invites the listener to conclude that you couldn't say "all". Linguists call that a conversational implicature: something the listener reasonably infers from your choice of words, not something the words assert. Implicatures are real and useful in conversation, and they're cancellable ("some passed; in fact all of them did" is not a contradiction), which is the standard test for telling an implicature from part of what a sentence says. Linguists argue about how far that test settles matters. Nothing here turns on it.

For checking arguments, you use the logical reading. If an argument only works when "some" is read as "some but not all", it's leaning on something the premise never said.

:::checkpoint "Some of the students passed." Does that sentence tell you that any student failed?
No. "Some passed" is true even if all passed. The feeling that it hints at failures is an implicature, a guess about why the speaker didn't say "all". It may be a good guess, but an argument that needs the failures has to state them as a separate premise, where you can check them.
:::

## How to deny each one

Sooner or later you'll want to deny one of these sentences, or someone will deny yours. Denying the wrong thing is how a good objection turns into a losing one, so learn exactly what contradicts each of the four.

Two sentences are contradictories when exactly one of them is true: they can't both be true and they can't both be false. Logicians lay the relations out in a diagram called the square of opposition. You don't need the square; you need two of its relations.

:::predict Someone says "All the trains were late this morning" and you think they're wrong. Before you read the list: what is the single sentence that contradicts theirs? Not one that merely disagrees, but the one that can't be true alongside it and can't be false alongside it either.
"Some trains were not late." That's the contradictory: exactly one of the two is true, whatever the trains did. "No trains were late" also disagrees, but it's a much bigger claim, and if half the trains ran late then both your sentence and theirs are false. One train that ran on time wins the argument. Proving that none were late is work you never needed to do.
:::

- "All A are B" is contradicted by "Some A are not B."
- "No A are B" is contradicted by "Some A are B."

That's the whole table, read in both directions. "Some A are B" is contradicted by "No A are B", and "Some A are not B" by "All A are B".

Notice what is not on the list. "All A are B" and "No A are B" are not contradictories. They can both be false at once, which happens whenever some As are B and some aren't. Logicians call that pair contraries, on the traditional reading; there's a footnote below on the one case where that label needs care.

Notice too what "Some A are B" and "Some A are not B" do to each other, which is nothing. Both can be true at the same time, of the same As, and usually are. That pair has a name, subcontraries, and it is the exact reason "some" doesn't imply "some not": if the two sentences could not both be true, one would follow from the denial of the other, and they can, so it doesn't.

The practical rule: to knock down an "all", find one exception. To knock down a "no", find one case. To knock down a "some", you have to show there are none at all, which is why "some" claims are so hard to refute and so easy to make. And to knock down a "some are not", you have to show that all of them are, which is the same job from the other end.

:::checkpoint Someone says, "All the trains were late this morning." What is the one thing you need to show to prove them wrong?
One train that was on time. Not "most were on time", not "none were late". One train, and "all" is false. This is modus tollens from lesson 3 wearing different clothes: the "all" claim says that if it's a train this morning then it was late; one on-time train is the not-Q that breaks it.
:::

## The Venn check

Now the method. The idea is that a Venn diagram is a picture of every possible case at once, and that makes it a machine for finding counterexamples.

Start with two circles that overlap, one labelled A and one labelled B. Together they mark out three regions: A outside B, the overlap, and B outside A. Every possible thing sits in one of those regions or outside both. Each of the four sentences is a mark on that picture.[2]

<svg viewBox="0 0 420 330" role="img" aria-labelledby="marks-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="marks-title">Four pairs of overlapping circles labelled A and B. In the first, the part of A lying outside B is shaded, meaning nothing is an A without being a B: all A are B. In the second, the overlap is shaded: no A are B. In the third, an X sits in the overlap: some A are B. In the fourth, an X sits in the part of A outside B: some A are not B. Shading means the region is empty; an X means at least one thing is in it.</title>
  <defs>
    <clipPath id="clipNoAB"><circle cx="338" cy="88" r="42"/></clipPath>
  </defs>
  <circle cx="82" cy="88" r="42" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="128" cy="88" r="42" fill="var(--bg, #ffffff)"/>
  <circle cx="82" cy="88" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="128" cy="88" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="52" y="36" font-size="15" fill="var(--text-2, #4a5260)">A</text>
  <text x="152" y="36" font-size="15" fill="var(--text-2, #4a5260)">B</text>
  <text x="16" y="158" font-size="15" fill="var(--text, #111418)">All A are B</text>
  <circle cx="292" cy="88" r="42" fill="var(--navy-soft, #e8eef6)" clip-path="url(#clipNoAB)"/>
  <circle cx="292" cy="88" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="338" cy="88" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="262" y="36" font-size="15" fill="var(--text-2, #4a5260)">A</text>
  <text x="362" y="36" font-size="15" fill="var(--text-2, #4a5260)">B</text>
  <text x="226" y="158" font-size="15" fill="var(--text, #111418)">No A are B</text>
  <circle cx="82" cy="248" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="128" cy="248" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="99" y="256" font-size="22" fill="var(--oxblood, #8b1e2d)" font-weight="bold">X</text>
  <text x="52" y="196" font-size="15" fill="var(--text-2, #4a5260)">A</text>
  <text x="152" y="196" font-size="15" fill="var(--text-2, #4a5260)">B</text>
  <text x="16" y="318" font-size="15" fill="var(--text, #111418)">Some A are B</text>
  <circle cx="292" cy="248" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="338" cy="248" r="42" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="266" y="256" font-size="22" fill="var(--oxblood, #8b1e2d)" font-weight="bold">X</text>
  <text x="262" y="196" font-size="15" fill="var(--text-2, #4a5260)">A</text>
  <text x="362" y="196" font-size="15" fill="var(--text-2, #4a5260)">B</text>
  <text x="226" y="318" font-size="15" fill="var(--text, #111418)">Some A are not B</text>
</svg>

Read the top two panels as emptiness and the bottom two as occupancy. Two conventions to fix in your head: shading means nothing lives here, an X means something does. Shading is the strong claim, about a whole region at once; an X is the weak one, about a single occupant.

A syllogism is an argument with two premises and three terms. Each premise mentions two of them. The conclusion mentions the two that turn up only once, and the term that turns up in both premises but not in the conclusion is the middle term. It's the hinge, and in both examples below it's where the argument comes apart. In the promotion argument the middle term is "people who have done the course".

So draw three overlapping circles, one per term, and label them. Then:

1. Draw the premises, and only the premises. Never draw the conclusion.
2. Shade the "all" and "no" premises first.
3. Then place the X for any "some" premise. The region it belongs in will be cut in two by the third circle. If one half is shaded, the X goes in the other half. If neither half is shaded, the X goes on the line between them, which means "somewhere in here, and the premises don't say where".
4. Now read the conclusion off the page. If it's already drawn (the region it needs shaded is shaded; the X it needs is definitely inside the right region), the argument is valid. If it needs something that isn't there, the argument is invalid, and the unshaded region, or the other side of the line, is your counterexample.

Why does this work? Because a valid argument is one with no counterexample: no possible case where the premises hold and the conclusion fails. The diagram shows every possible case. When you draw the premises you rule out the cases they rule out, and no others. If the conclusion's requirement is still unmet after that, there's a case the premises allow in which the conclusion is false, and there's your counterexample. This is lesson 2's method, with the imagining done by the page.

Why shade before placing the X? Because the shading tells you where the X can't go. Place the X first and you may put it somewhere a later premise empties, and then you'll have to move it.

## Dogs, cats, and a conclusion nobody believes

Start with the standard teaching example. Its conclusion is absurd, which makes it safe to look at, and its form is the one that catches people when the conclusion isn't absurd at all.

```
1. All dogs are mammals.
2. All cats are mammals.
------------------------------------------------------------------------
C: All dogs are cats.
```

:::predict Is this argument valid? You'll probably say no at once, because the conclusion is absurd. Set that aside. Can you say what is wrong with the form, in a way that would still be wrong if the conclusion were something you believed?
Both premises put things inside the mammal circle. Neither premise says anything about the relationship between dogs and cats directly; they only say each group sits inside a third. Two groups that both sit inside a third can overlap completely, partly, or not at all. The premises don't say which. Below is the same point drawn out.
:::

Draw three circles: Dogs, Cats, Mammals, with all three overlapping in the middle. Now draw the premises.

Premise 1, "All dogs are mammals", says the part of the Dogs circle outside the Mammals circle is empty. Shade it. That's two small regions: dogs that are neither cats nor mammals, and dogs that are cats but not mammals.

Premise 2, "All cats are mammals", says the part of the Cats circle outside Mammals is empty. Shade that too.

<svg viewBox="0 0 420 330" role="img" aria-labelledby="dogs-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="dogs-title">Three overlapping circles labelled Dogs, Cats and Mammals. Every part of the Dogs circle lying outside Mammals is shaded, and every part of the Cats circle lying outside Mammals is shaded. One region is left clear and marked: inside Dogs and inside Mammals, but outside Cats. The conclusion "all dogs are cats" would need that region shaded, and it is not.</title>
  <circle cx="160" cy="130" r="80" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="260" cy="130" r="80" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="210" cy="215" r="80" fill="var(--bg, #ffffff)"/>
  <circle cx="160" cy="130" r="80" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="260" cy="130" r="80" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="210" cy="215" r="80" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="58" y="42" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Dogs</text>
  <text x="330" y="42" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Cats</text>
  <text x="172" y="322" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Mammals</text>
  <circle cx="166" cy="186" r="13" fill="none" stroke="var(--oxblood, #8b1e2d)" stroke-width="2"/>
  <text x="161" y="192" font-size="15" fill="var(--oxblood, #8b1e2d)" font-weight="bold">1</text>
</svg>

Shaded means empty. Region 1 is the one region the two premises leave alone.

Now stop drawing and look at the conclusion. "All dogs are cats" would need the part of the Dogs circle outside the Cats circle to be shaded. Is it? Half of it is: you shaded "dogs, not cats, not mammals" under premise 1. But the other half, "dogs, not cats, but mammals", is untouched. Look at the diagram: it's sitting there, open, marked 1.

That open region is the counterexample. It's a dog that's a mammal and isn't a cat. Which is to say, a dog. The premises allow it, the conclusion forbids it, and so the argument is invalid.

The name for this is the fallacy of the undistributed middle: the middle term, "mammals", is never used to say something about *all* mammals, so it can't connect the other two terms. There's a whole rules-based test built out of names like that one, and it delivers the same verdicts as the diagram, faster, once you have the rules by heart. This course teaches the diagram because it needs nothing memorised and it shows you the counterexample rather than announcing it. The name is worth knowing, because you'll meet it.

Go back to the lift. Everyone promoted did the course; everyone on my team did the course; so everyone on my team gets promoted. Same three circles, same two shadings, same open region: someone on my team who did the course and isn't promoted. The argument is invalid in exactly the way the dog argument is, and it took you under a minute. Your colleague may still get promoted. That's step 6, and it's a different question.

:::checkpoint The colleague replies: "Fine, but everyone who gets promoted here really has done the course. I checked." Does that rescue the argument?
No. They've defended a premise, which is step 5. The fault was at step 4: even with both premises true, the conclusion doesn't follow, because "did the course" is never said to cover only the promoted. Logic tests the link; the premises are a separate check, and here the link is already broken.
:::

## A "some" premise, and the X that lands on a line

Now an argument with a "some" premise, which is where the method earns its keep, because the X has to be placed carefully.

```
1. Some of the applicants are qualified.
2. Everyone who is qualified has a degree.
------------------------------------------------------------------------
C: Some of the applicants have degrees.
```

Notice that premise 2 says "everyone who is qualified", not "every qualified applicant". A syllogism has three terms, and "qualified applicant" would smuggle in a fourth by welding two of them together. Watching for that is half of translation.

Three circles: Applicants, Qualified, Degrees. Shade first. Premise 2 says the part of Qualified outside Degrees is empty. Shade it: that's "qualified, not an applicant, no degree" and "qualified applicant, no degree".

Now place the X for premise 1, "some applicants are qualified". It belongs in the overlap of Applicants and Qualified. That overlap is cut in two by the Degrees circle: "applicant, qualified, has a degree" and "applicant, qualified, no degree". Look at the second half. You've just shaded it. So the X can't go there, and it goes in the first half: applicant, qualified, with a degree.

Now do the next step yourself before reading on. The conclusion is "Some applicants have degrees." Where would an X have to be for that to be true? Is there one there?

:::predict Valid or invalid, and why?
Valid. The conclusion needs an X somewhere inside the overlap of Applicants and Degrees. Your X is in "applicant, qualified, with a degree", which is inside that overlap. The conclusion is already drawn. No case exists where both premises hold and the conclusion fails, because the shading forced the X to where the conclusion needed it.
:::

Now swap two of the terms around and watch what happens:

```
1. Some of the applicants have degrees.
2. Everyone who is qualified has a degree.
------------------------------------------------------------------------
C: Some of the applicants are qualified.
```

It reads nearly the same, and a hiring manager in a hurry would nod along. Draw it: shade premise 2 first, then work out where the X for premise 1 has to go.

:::predict Where does the X end up this time, and is the conclusion forced?
Shade premise 2 as before: the part of Qualified outside Degrees is empty. Now the X for "some applicants have degrees" belongs in the overlap of Applicants and Degrees, and the Qualified circle cuts that overlap in two: "applicant, degree, qualified" and "applicant, degree, not qualified". Is either half shaded? No. Premise 2 only emptied parts of the Qualified circle lying outside Degrees, and both of these regions are inside Degrees. So the X goes on the line between them, which means "one of these two, and the premises don't say which".

The conclusion wants an X definitely inside Applicants and Qualified. It isn't there. Invalid.

If you put the X inside Qualified, you drew the conclusion instead of the premises. That's the commonest way to get a wrong verdict out of a right diagram.
:::

<svg viewBox="0 0 420 330" role="img" aria-labelledby="straddle-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="straddle-title">Three overlapping circles labelled Applicants, Degrees and Qualified. The part of the Qualified circle lying outside Degrees is shaded. An X straddles the boundary of the Qualified circle inside the overlap of Applicants and Degrees, because neither half of that overlap is shaded, so the premises do not say which side the applicant falls on. The conclusion would need the X definitely inside Qualified, and it is not.</title>
  <circle cx="210" cy="215" r="80" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="260" cy="130" r="80" fill="var(--bg, #ffffff)"/>
  <circle cx="160" cy="130" r="80" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="260" cy="130" r="80" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="210" cy="215" r="80" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="34" y="42" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Applicants</text>
  <text x="322" y="42" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Degrees</text>
  <text x="176" y="322" font-size="15" fill="var(--text-2, #4a5260)" font-weight="bold">Qualified</text>
  <text x="201" y="146" font-size="22" fill="var(--oxblood, #8b1e2d)" font-weight="bold">X</text>
</svg>

The X sits on the Qualified boundary, so it may be inside that circle or outside it, and the premises never say. The conclusion needs it wholly inside.

The counterexample is the other side of the line: an applicant with a degree who isn't qualified, because the degree is in the wrong subject, say. Both premises are true of that person, and the conclusion is false. Notice it's the dog-and-cat pattern again, with a "some" instead of an "all": both premises attach things to "degrees", and nothing says that "degrees" reaches only the qualified.

One more thing about that first, valid version. "Some of the applicants are qualified" told you nothing about any applicant being unqualified. If someone hears that argument and says "so some of them aren't qualified, then", they've added a premise. Maybe it's true. It wasn't stated, and it isn't something the diagram will ever show, because an X in one region says nothing about the others.

:::checkpoint Look again at the diagram above. You place an X and it lands on a line. What does that tell you about the conclusion, and what should you do?
The premises say something is in one of two regions but not which. If the conclusion needs the X to be in one specific one of those regions, the argument is invalid, and the other region is the counterexample. If the conclusion only needs the X to be somewhere in the union of the two (say, inside a circle that contains both), the argument can still be valid. So: look at what the conclusion needs, then ask whether "somewhere in these two" is enough.
:::

:::callout A straddling X is not a verdict
It's tempting to learn the rule as "X on a line means invalid", and the two examples above would let you. It isn't the rule. A straddling X says the premises leave a question open; the argument fails only if the conclusion needed that question answered. Take "some tools in the shed are borrowed, and everything borrowed belongs to the allotment society, so some tools in the shed belong to the society". The shading forces the X inside the society circle and the argument is valid. Now suppose nothing had been shaded and the X straddled the society boundary: the conclusion would fail, because it asks which side. Same X, same line, opposite verdicts. Read what the conclusion needs first, then look at your X.
:::

:::callout A footnote on empty classes
"All trespassers will be prosecuted" is a true sign on a field nobody has ever entered. On the modern reading, which is the one the Venn method uses, "All A are B" says only that nothing is an A without being a B; it doesn't say there are any As. Aristotle, in effect, assumed every term named something.[1] That assumption has a name, existential import: the question is whether saying "all A are B" commits you to there being any As at all.

That wasn't carelessness on his part. His syllogistic was a theory of demonstration about real kinds, where a term with nothing under it doesn't come up, so the question the modern reading answers had no occasion to arise. The medieval logicians who named the valid forms and settled the traditional count worked inside the same assumption.[3]

The difference shows up in a handful of forms. "All A are B, so some A are B" is valid for Aristotle and invalid on the modern reading, because an empty A makes the premise true and the conclusion false. The same assumption is what makes "all" and "no" contraries: with no As at all, both come out true, and the pair stops excluding each other. Of the 256 possible two-premise forms (four sentence types in each of three slots, in four arrangements of the terms), 15 are valid on the modern reading and 24 on the traditional one; the extra nine are the ones that need something to exist.[2][3] This is a convention, not a controversy: say which reading you're using and the disagreement vanishes. When it matters, it's because someone has argued from a rule to an instance without checking that any instance exists.
:::

## What people get wrong

**"Some" implies "not all".** It doesn't, in logic. It's an implicature in conversation, and it's cancellable. An argument that needs "not all" must state it, and then you can check it.

**"No A are B" is the opposite of "All A are B".** They're contraries, not contradictories, and both can be false. To deny "all", produce one exception. Taking on "none" is taking on a claim you don't need and often can't defend.

**A believable conclusion means a valid argument.** Lesson 2's belief bias, again: a conclusion you already believe is more likely to get your endorsement whether or not the argument earned it.[8] (Lesson 2 has the numbers, and the argument about what the effect is measuring.) The dog argument is easy because the conclusion is absurd. The promotion argument has the same form and a conclusion someone wants. Draw both.

**Placing the X before shading.** Then it lands in a region a later premise empties, and you either move it or, worse, leave it and read off a wrong verdict. Shade first, always.

**Treating existential import as a live dispute.** It's a difference in convention with a known list of cases where it matters. State your reading and move on.

**"All A are not B" read without asking.** English lets that sentence mean two different things. If the argument turns on it, get the arguer to pick one.

## Practice

Eight arguments. Two of them are conditionals from lesson 3, so your first job on each is to decide which tool fits: the four shapes, or three circles. Some of them are not yet in any of the four forms, so write the form before you draw anything. Then give the verdict and, for every invalid one, the counterexample. Write your answers down before opening the check.

1. No birds are mammals. All bats are birds. So no bats are mammals.
2. The flats that flooded last winter were all on the ground floor. Block B is a ground-floor block. So Block B flooded last winter.
3. All tomatoes are vegetables. Some tomatoes are fruits. So some vegetables are fruits.
4. There's no hot water whenever the pilot light is out. There's no hot water now. So the pilot light is out.
5. Some of this week's deliveries arrived late. All the Saturday deliveries are deliveries this week. So some Saturday deliveries arrived late.
6. If the meeting had run over, the room would still have been booked at three. The room wasn't booked at three. So the meeting didn't run over.
7. Only members of the co-op can order at trade price. Priya ordered at trade price. So Priya is a member.
8. Some of the flats in the block are rented out. All the rented flats have a smoke alarm. So some of the flats in the block do not have a smoke alarm.

:::checkpoint Check your eight answers, with a counterexample for each invalid one.
1. Venn. Shade the overlap of Birds and Mammals (both halves, inside and outside Bats). Shade Bats outside Birds. The conclusion needs the overlap of Bats and Mammals shaded: one half is inside Birds, shaded by premise 1; the other half is outside Birds, shaded by premise 2. Valid. The conclusion is false because premise 2 is false; a valid argument with a false premise, one of the cells in lesson 2's table.

2. Venn, after a translation: "the flats that flooded were all on the ground floor" is "All flats that flooded are ground-floor flats", and "Block B is a ground-floor block" is "All flats in Block B are ground-floor flats". Both premises shade parts outside Ground-floor. The conclusion needs "Block B, not flooded" shaded, and the half of it inside Ground-floor is open. Invalid: a ground-floor flat in Block B that stayed dry. Undistributed middle, and a conclusion some buyer would believe.

3. Venn. Shade Tomatoes outside Vegetables. The X for "some tomatoes are fruits" goes in Tomatoes and Fruits; the half outside Vegetables is shaded, so it goes in "tomato, fruit, vegetable", which is inside Vegetables and Fruits. Valid. Notice the premises use "vegetable" in the kitchen's sense and "fruit" in the botanist's, so holding both true at once means holding each word to one meaning throughout. Sliding between two senses of a term inside one argument has a name, equivocation, and lesson 8 gives it a section. The form is valid either way, which is the point of testing the link separately.

4. Conditional, once you spot it: "there's no hot water whenever the pilot light is out" is "if the pilot light is out, there's no hot water". Then "no hot water; so the pilot light is out" affirms the consequent. Invalid. Counterexample: the pilot light is fine and the water's off at the mains.

5. Venn. Shade Saturday-deliveries outside This-week. The X for "some of this week's deliveries arrived late" goes in This-week and Late; that's cut by Saturday and neither half is shaded, so it's on the line. The conclusion needs it inside Saturday. Invalid: the late ones could all have been on Tuesday. A believable conclusion, and an invalid link.

6. Conditional. "If P then Q; not Q; so not P." Modus tollens, valid.

7. Venn, after a translation. "Only members can order at trade price" is "All people who order at trade price are members", not "all members order at trade price". Priya is an X in the trade-price circle, and the shading has emptied the part of that circle lying outside Members, so the X is forced inside Members. Valid. If you got invalid, check which way you turned the "only"; that's the same reversal as "only if" in lesson 3.

8. Venn. Shade the part of Rented outside Smoke-alarm. The X for "some flats are rented" is then forced into "flat, rented, has an alarm". The conclusion needs an X in "flat, no alarm", and nothing has put one there. Invalid, and the counterexample is a block where every flat has an alarm. The slide is in the word "some": the first premise mentions the rented flats and says nothing whatever about the others, and the conclusion reads it as "some are rented and some aren't".

If you named the forms but couldn't build the counterexamples, that's step 4 half-learned: the counterexample is what makes the verdict yours rather than remembered. And if you got 2, 5 or 8 wrong, check whether the conclusion was one you were ready to believe.
:::

:::exercise On paper, with a claim you actually met this week
Find one "all", "every", "no", "none", or "only" claim in something you read or heard this week. A headline, a manager's email, a sign, a line from a podcast.

1. Write it as one of the four forms. If it was a bare plural ("landlords never fix anything", "these phones break"), say so, and write the "all" or "no" it amounts to.
2. Write down exactly what one case would refute it. One exception for an "all"; one instance for a "no". Not a counter-argument, a case.
3. If the claim was a premise in an argument, put the argument in standard form, draw the three circles, and give the verdict. If it wasn't, note whether the writer used "some" anywhere and whether they slid from "some" to "some are not".

Put it in your folder from lesson 1. By lesson 10 you'll pick your project from that folder, and an "all" claim with its refuting case written out is often the best material in it.
:::

## Why the course stops here

Lesson 3 left a question open. Confirming rather than refuting is a reflex, and the obvious next question is whether it can be trained out of you. That question turns into a bigger one, which you're entitled to ask of this course: you could spend a semester on this material, and plenty of people do. A university logic course carries on from here into symbolic logic, truth tables and proofs, which is where [*forall x*](https://forallx.openlogicproject.org/) goes after the part this course uses.[4] We stop here, and you deserve to know why, because it's a real argument among the people who teach reasoning.

One side, call it the formal-first view, holds that a symbolic system is the only precise account of what "follows from" means. Its strongest argument is about reach. The tools in this lesson and the last handle arguments built from "if" and from "all", "no" and "some" about whole categories, and stop there. They can't touch an argument whose premises relate two things and quantify twice: "every inspector checked some bridge on the list, and no bridge was checked twice, so there are at least as many bridges as inspectors" is valid, and no diagram in this lesson will show you that. Predicate logic will. The second argument is that the notation isn't only for argument-checking: it's the working language of mathematics, of proof, of database queries, of formal semantics, so the semester buys more than one skill. The third is that learning to work inside a precise system trains a habit of exactness that carries over.

The other side is the informal-logic movement, which began in the 1970s with teachers like Johnson and Blair at Windsor and Govier, and defined its subject as the study of "reasoning and inference as they occur in public discussion and debate".[5] Their claim was that formal logic transfers poorly to real arguments, whose faults are usually a premise that shouldn't be accepted or a reason that isn't relevant, rather than an invalid form.[5]

There's one piece of evidence that bears on this directly, and it's uncomfortable for this lesson as much as for the semester-long version.

:::predict Fifty-three students, two introductory logic courses, about forty hours of lectures each. Before the course, 75% of them made at least one error on the four-card problems from lesson 3. Write down the number you expect after the course.
72%, give or take five points either side, against 75% give or take five before. The authors call the change "a bare 3 ± 7%", which is to say no measurable change at all. On a related set of problems the same group went from 81% making an error to 87%, that is, very slightly the wrong way. The one thing that did move was the affirming-the-consequent error, down about ten points.

Most people guess somewhere in the fifties, which tells you how much we all expect a semester of instruction to buy.
:::

That study is Cheng, Holyoak, Nisbett and Oliver, in 1986, and the test was the card task from lesson 3.[6] Their own summary: "the only apparent influence of a one-semester logic course was a small decrease in the tendency to make the error corresponding to affirming the consequent".[6] The comparison they draw next is between problem types rather than between times: after a semester of logic these students got 11% of the arbitrary card problems right, while the same students, before any training at all, had got 62% of the problems phrased as permissions right.[6] What the problem was about mattered more than what they'd been taught.

Two cautions. It's one study, on one task, and the card task is unusually hard. And the same paper found that abstract training did work, in a separate laboratory experiment, when the rules were taught together with examples of the problems they applied to. Of four groups, the one given rules and examples made at least one error 39% of the time, against 75% for an untrained control; rules alone came in at 65% and examples alone at 62%, and all four figures carry an interval of about twelve points, which the authors say is wide enough that they can't confidently rule out some benefit from either on its own.[6] Their conclusion was that "training was effective only when abstract principles were coupled with examples of selection problems".[6] That is the finding this course is built on. The rules are here; so are the examples, and the practice on your own material.

More broadly, a meta-analysis of 341 effect sizes found that teaching critical thinking does help, with a weighted mean of g+ = 0.30, and the strategies associated with the larger effects were dialogue, exposure to authentic problems, and mentoring.[7] Those are associations across studies rather than a comparison the reviewers ran, so read them as a hint about what to look for rather than as a result.

What would settle the question is a study that trained one group formally and one informally and tested both on real arguments after a delay. I don't know of a decisive one, so what follows is a judgement about what a general reader has time for, not a finding. So, plainly, the course's line: the four conditional shapes, the Venn check, and the counterexample method are the formal logic a general reader uses; the rest of this course is about premises, relevance, strength, and the ways people go wrong in practice. If you find you like the formal side, *forall x* is free and good, and the link is in Go deeper.

Before the quiz, close the page and write down everything you can remember from this lesson. Aim for the four sentence shapes, what shading means and what an X means, the order you draw them in and the reason for that order, what contradicts "all the trains were late" and what does not, what an X on a line does and doesn't tell you, and what the Michigan study found about a semester of logic. Then check your list against the lesson. The gaps you find that way are worth more than the ones the quiz finds for you.

## Connections

This closes the deductive unit. You now have two fast tools for step 4 of the check: the four conditional shapes from lesson 3, for arguments built from "if", and the Venn check, for arguments built from "all", "no", and "some". Both are the counterexample method from lesson 2 made quick, and both test only the link. The premises still need evidence, which no diagram supplies.

- Lesson 2's counterexample is what a Venn gap is: an unshaded region, or the far side of a line, is a case the premises permit and the conclusion forbids.
- Lesson 3's modus tollens is the shape of "one on-time train refutes 'all late'": the "all" says if train then late, and the one exception is the not-Q.
- Lesson 5 opens the other kind of link. There, "some" and "all" turn up inside claims about samples, "most" gets its proper treatment, and a counterexample doesn't sink the argument; it only weakens it. That difference is the whole subject of the next lesson.

## Go deeper

- Knachel, *Fundamental Methods of Logic*, chapter 3 (free, CC BY 4.0, on LibreTexts): the same method with many more worked diagrams than one lesson can hold, and section 3.6 is where the four figures and sixty-four moods are set out if you want to see where 256 comes from. Do the exercises there if the X-on-the-line cases still feel slippery.
- Lagerlund, "Medieval Theories of the Syllogism", *Stanford Encyclopedia of Philosophy*: where the traditional count of 24 comes from, and who did the counting.
- [*forall x: Calgary*](https://forallx.openlogicproject.org/), Parts I to III (free, CC BY): the symbolic route, with truth tables, for readers who found this lesson too easy and want the formal-first version done properly.
- Smith, ["Aristotle's Logic"](https://plato.stanford.edu/entries/aristotle-logic/), *Stanford Encyclopedia of Philosophy*: where the four sentences, the three figures, and the assumption about non-empty terms come from, in Aristotle's own order.

## Sources

1. Smith, R., "Aristotle's Logic", *Stanford Encyclopedia of Philosophy* (rev. 2022). Aristotle's definition of a deduction; the three figures and the table of valid deductions; Aristotle "in effect supposes that all terms in syllogisms are non-empty". The account of contradictories and contraries in this lesson follows from the definitions of the four forms and is not attributed to this entry.
2. Knachel, M., *Fundamental Methods of Logic* (University of Wisconsin-Milwaukee; CC BY 4.0, read on LibreTexts), section 3.6, Categorical Syllogisms. Read at draft time: "There are 4 figures and 64 moods. That gives us 256 possible logical forms. It turns out that only 15 of these are valid" (the modern reading, without existential import); particular propositions drawn with an X, and "in cases of indeterminacy, draw Xs straddling boundary lines".
3. Lagerlund, H., "Medieval Theories of the Syllogism", *Stanford Encyclopedia of Philosophy*. Read at draft time, section 1: "there are 256 possible combinations of sentences. Of these, 24 have traditionally been thought to yield valid deductions", the 24 being the 19 direct moods plus five subalternate moods. No revision year is recorded in our research file, so none is given.
4. Magnus, P. D., Button, T., Trueman, R., Zach, R. et al., *forall x: Calgary* (Fall 2025, CC BY 4.0). Part I for validity as the absence of a counterexample; Parts II and III for truth-functional logic and truth tables, which is the route this lesson points at rather than teaching. Cited as an example of the formal-first tradition, not as an advocate of a position about teaching.
5. Groarke, L., "Informal Logic", *Stanford Encyclopedia of Philosophy*. Informal logic as the study of "reasoning and inference as they occur in public discussion and debate"; the movement's origins with Johnson and Blair at Windsor in the 1970s. The claim that formal logic transfers poorly to real arguments is recorded in our research file as the collective position of Johnson and Blair, Govier, Scriven and Kahane, and is attributed here to the movement rather than to any one book.
6. Cheng, P. W., Holyoak, K. J., Nisbett, R. E. & Oliver, L. M., *Cognitive Psychology* 18(3), 293 to 328 (1986). Read from the full text at the University of Michigan Deep Blue repository, [hdl.handle.net/2027.42/26121](https://hdl.handle.net/2027.42/26121). Experiment 2: 53 students across two introductory logic classes (Ann Arbor and Dearborn), about 40 hours of lectures each, textbooks Simco and James's *Elementary Logic* and Copi's *Introduction to Logic* (1982); percentage making at least one error on conditional selection problems 75 ± 5 before and 72 ± 5 after, "the mean improvement was a bare 3 ± 7%, t < 1"; biconditional problems 81 ± 8 to 87 ± 8; the q-card error down 10 ± 8; "the only apparent influence of a one-semester logic course was a small decrease in the tendency to make the error corresponding to affirming the consequent"; and, from the general discussion, students "solved only 11% of the arbitrary problems correctly, whereas the same students, prior to receiving any formal training, solved 62% of the permission problems correctly". Experiment 1, Table 3, percentage making at least one error by group: rules and examples 39 ± 12, rules only 65 ± 12, examples only 62 ± 12, control 75 ± 12, with the authors' note that "the null hypothesis that neither rule nor examples training alone yielded any benefit cannot be accepted with confidence" because the intervals are wide. Abstract: "Training was effective only when abstract principles were coupled with examples of selection problems." The paper's title is not recorded in our research file and is therefore not given here.
7. Abrami, P. C., Bernard, R. M., Borokhovski, E., Waddington, D. I., Wade, C. A. & Persson, T., "Strategies for teaching students to think critically: A meta-analysis", *Review of Educational Research* 85(2), 275 to 314 (2015). 341 effect sizes; weighted mean g+ = 0.30; dialogue, exposure to authentic problems and mentoring associated with larger effects. From the abstract only; the moderator tables have not been read, so no specific moderator effect is quoted.
8. Evans, J. St. B. T., Barston, J. L. & Pollard, P., ["On the conflict between logic and belief in syllogistic reasoning"](https://core.ac.uk/download/81101245.pdf), *Memory & Cognition* 11(3), 295 to 306 (1983). Cited here only for the bare belief-bias pattern. Lesson 2 carries the figures and the dispute about what the effect measures; the interaction between belief and validity is not restated here because lesson 2 records it as contested.
