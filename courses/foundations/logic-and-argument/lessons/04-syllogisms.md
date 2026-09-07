---
title: "All, no, some: checking a syllogism in two minutes"
minutes: 60
objectives:
  - Translate everyday sentences into the four categorical forms (all, no, some, some not) and state the exact sentence that contradicts each one
  - Test a two-premise syllogism for validity with a three-circle Venn diagram and name the counterexample when it fails
  - Explain why "some A are B" does not mean "some A are not B", and spot where an argument leans on the wrong reading
  - Choose between the conditional shapes of lesson 3 and the Venn check when you meet a deductive argument
quiz:
  - q: >-
      A council notice reads, "All vehicles parked on this street overnight hold a permit." A neighbour says, "The van across the road holds a permit, so it's one of the ones parked here overnight." Put it in standard form and check it. What do you find?
    options:
      - Valid, since the premises can only both be true if the van is among the overnight parkers
      - Invalid, but only because the council's first premise is unlikely to be true in practice
      - Valid, because it has the same shape as modus ponens with categories instead of conditionals
      - Invalid; a permit holder who parks here by day and elsewhere by night fits both premises
    answer: 3
    explain: >-
      The shape is "All overnight parkers are permit holders; the van is a permit holder; so the van is an overnight parker." Both premises put things inside the permit-holder circle without ever saying the circle contains only overnight parkers, so the region "permit holder, not an overnight parker" is left open, and that is the counterexample in D. Option A asserts what the diagram denies. Option B confuses step 4 with step 5 of the check; a doubtful premise is a different fault from an invalid link, and this link is invalid however true the premises are. Option C names the wrong shape; the argument runs from "all A are B" and "this is B" to "this is A", which is the categorical cousin of affirming the consequent, not of modus ponens.
  - q: >-
      Nadia announces, "Nobody on the sales team filled in the survey." You think she's wrong. Which single thing, if you could show it, would prove her statement false?
    options:
      - That most of the sales team filled the survey in, rather than merely one or two of them
      - That the whole sales team filled the survey in, which is the direct opposite of her claim
      - That one person on the sales team filled the survey in, whoever it is and however few
      - That someone on the sales team did not fill it in, which shows the team was divided
    answer: 2
    explain: >-
      The sentences "no A are B" and "some A are B" are contradictories. Exactly one of them is true, so a single salesperson who filled in the survey makes "nobody did" false. That is option C. Option A would also refute her, but it proves far more than you need and is much harder to show. Option B is the contrary, not the contradictory; both "nobody" and "everybody" can be false at once, so aiming for it wastes effort. Option D is a statement that agrees with Nadia; someone not filling it in is exactly what she said about everyone.
  - q: >-
      An inspection report says, "Some of the bridges inspected this year need repair." A councillor replies, "So the report admits that some of them are fine." What has the councillor done?
    options:
      - Read the report correctly, since a report that meant all of them would have said so
      - Drawn a conclusion the sentence never made; "some need repair" is true even if all do
      - Made an error of degree, because "some" in an official document means fewer than half
      - Read it correctly, provided the inspectors actually looked at every bridge in the area
    answer: 1
    explain: >-
      In logic "some A are B" means at least one A is B, and it is compatible with all of them being B. The report's sentence would still be true if every bridge needed repair, so it gives no support to "some are fine". That is option B. Option A describes the everyday expectation, a conversational implicature; it is a reasonable guess about what the writer might have said, not something the sentence asserts, and an inspector who found that every bridge needed repair could still have written that sentence truthfully. Option C invents a threshold that "some" does not have. Option D changes the subject; how many bridges were inspected has no bearing on what "some" means.
  - q: >-
      "Some of the shops on the high street open on Sundays. All shops that open on Sundays pay the higher business rate. So some shops on the high street pay the higher rate." You draw the three circles, shade the universal premise, then place the X. What does the finished diagram show?
    options:
      - Valid; the shading leaves the X one place to go, and that place is inside what the conclusion needs
      - Invalid; the X lands on a line between two regions, so the conclusion is not forced by the premises
      - Invalid; a premise with "some" and a premise with "all" cannot together support any conclusion at all
      - Valid only if you add the assumption that there is at least one shop on the high street to begin with
    answer: 0
    explain: >-
      Shade first. "All Sunday-openers pay the higher rate" empties the part of the Sunday-openers circle outside the higher-rate circle. Now "some high street shops are Sunday-openers" needs an X in the overlap of high street and Sunday-openers; that overlap is cut in two by the higher-rate circle, but one half is already shaded, so the X goes in the other half, which is inside the high street and higher-rate overlap. The conclusion is already drawn, so option A. Option B describes the case where neither half is shaded, which is not this case. Option C is false in general; this very argument is the counterexample. Option D confuses this with existential import; the "some" premise already asserts that such a shop exists.
  - q: >-
      "Some of the players are carrying injuries. All the goalkeepers are players. So some of the goalkeepers are carrying injuries." Which verdict is right, and why?
    options:
      - Valid, because every goalkeeper is a player and the premises say that some players are injured
      - Valid, as long as the squad has at least one goalkeeper, which any real squad certainly does
      - Invalid; the injured X sits on the goalkeeper line, so the injured may all be outfielders
      - Invalid, because the conclusion is one you would need medical records to believe, not logic
    answer: 2
    explain: >-
      Shade "all goalkeepers are players" by emptying the goalkeeper crescent outside players. Then "some players are injured" wants an X in the players and injured overlap, and that overlap is cut by the goalkeeper circle with neither half shaded. So the X goes on the line, and the conclusion, which needs an X definitely inside goalkeepers, is not forced. That is option C, and the counterexample is a squad where the injured players are all outfielders. Option A is the implicature at work; "some players" does not reach every kind of player. Option B is about existential import, which is not the gap here; the gap is which players. Option D judges the conclusion instead of the link, which is belief bias, and gets the reason wrong even though the verdict happens to be right.
  - q: >-
      Two arguments reach you in the same email. First: "If the shipment cleared customs, the tracking page says 'cleared'. The tracking page doesn't say 'cleared'. So the shipment hasn't cleared customs." Second: "Some parcels in this depot cleared customs. All parcels in this depot get scanned. So some scanned parcels cleared customs." Which tool fits each argument, and what are the verdicts?
    options:
      - The first is denying the antecedent, so it is invalid; only the second survives the check
      - Both need the Venn check, since the second mentions categories and the first can be rewritten as one; both come out valid
      - The first is modus tollens and valid, but the second is invalid, because the X lands on the line between "cleared" and "not cleared"
      - The first runs on "if", so use lesson 3's shapes; it is modus tollens, valid. The second runs on "some" and "all"; draw the circles, and the shading forces the X inside "scanned and cleared", so it is valid too
    answer: 3
    explain: >-
      The first skill in step 4 is picking the tool. The shipment argument is built from "if, then" and denies the consequent, which is modus tollens, so it is valid; no circles needed. The depot argument is built from "all" and "some", so draw. Shade "all depot parcels are scanned" first, emptying the depot circle outside "scanned"; then the X for "some depot parcels cleared customs" wants the overlap of depot and cleared, one half of which (the half outside "scanned") is now shaded, so the X is forced into "depot, scanned, cleared", which sits inside what the conclusion needs. Both valid, option D. Option A misnames the first shape: it denies the consequent, not the antecedent, and that matters because one is valid and the other isn't. Option B gets the verdicts right but wastes the two minutes this lesson promised to save you; a conditional can be rewritten with categories, but lesson 3's shapes settle it in one line. Option C applies the X-on-the-line verdict to a diagram where the shading has already decided where the X goes.
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

This is still step 4 of the six-step check. Find the conclusion, find the premises, supply what's missing, test the link, test the premises, and only then consult your opinion of the conclusion. Lesson 3 gave you four fast shapes for arguments built from "if". This lesson gives you one fast method for arguments built from "all", "no", and "some". Between them they cover most of the deductive arguments you'll meet, and the rest of the course is about the arguments that aren't deductive at all.

## The four sentences

Everything here is built from four sentence shapes. A and B stand for any two categories: dogs, mammals, people on my team, things that flood.

- All A are B.
- No A are B.
- Some A are B.
- Some A are not B.

Aristotle worked out the logic of these four in the [*Prior Analytics*](https://classics.mit.edu/Aristotle/prior.1.i.html), in the fourth century BC, and the method you're about to learn is a much later picture of his system, drawn with circles (Smith, 2022).[1] It's old because it works.

Everyday sentences don't arrive in these shapes, so the first skill is translation. Here's what people get wrong.

**Bare plurals mean "all".** "Dogs are mammals" is "All dogs are mammals." "Ground-floor flats flood" is a claim about all of them, and the speaker will retreat to "well, most of them" the moment you find one that didn't. That retreat matters: "most" isn't one of the four forms, and an argument built on "most" is an inductive argument, which is lesson 5's business.

**"Not all" is not "none".** "Not all the trains were late" means "Some trains were not late." It does not mean "No trains were late." This one starts more bad rebuttals than any other, and there's a section on it below.

**"All A are not B" is ambiguous in English.** "All the shops are not open" usually means "Not all the shops are open" (some are shut), but sometimes means "No shops are open." Ask which. Don't guess.

**"Only" reverses the direction.** "Only members may park here" is "All people who may park here are members." It is not "All members may park here." This is the same reversal as "only if" in lesson 3: "only" tells you what's necessary, not what's sufficient.

**"Some" means "at least one".** "A few of the applicants are qualified", "there are applicants who are qualified", "at least one applicant is qualified": all of these are "Some applicants are qualified." And, as you'll see, so is "all of the applicants are qualified", which surprises people.

:::checkpoint "Only ticket holders will be admitted." Write it as one of the four forms. Then say what it does not tell you.
All people who will be admitted are ticket holders. It does not tell you that every ticket holder will be admitted; the venue could still turn a ticket holder away for being drunk, and the sign would stand.
:::

## What "some" means

In logic, "Some A are B" means: at least one A is B. That's all. It says nothing about the rest of the As.

So "Some of the students passed" is true if one student passed, true if half did, and true if every single one did. Read that last clause again, because it's the one people fight. If all the students passed, then certainly at least one did, so "some passed" is true.

Why does it feel wrong? Because in conversation, if you knew that everyone passed, you'd say so. Saying "some" when you could have said "all" invites the listener to conclude that you couldn't say "all". Linguists call that a conversational implicature: something the listener reasonably infers from your choice of words, not something the words assert. Implicatures are real and useful in conversation. They're also cancellable ("some passed; in fact all of them did" is not a contradiction), and that's the test that shows they aren't part of the sentence's meaning.

For checking arguments, you use the logical reading. If an argument only works when "some" is read as "some but not all", it's leaning on something the premise never said.

:::checkpoint The minutes of a meeting record: "Some members of the committee voted for the proposal." A year later, one member insists the vote was not unanimous, and points to that line as proof. Do the minutes back them up?
No. "Some members voted for" is true if three did, and just as true if every member did, so the line is consistent with a unanimous vote. The non-unanimity the member remembers may well be real, but it needs its own evidence: a recorded vote against, an abstention in the minutes. The sentence they're pointing at doesn't carry it.
:::

## How to deny each one

Every argument you check will eventually be argued about, and most of those arguments go wrong in the first minute because someone denies the wrong thing. So learn exactly what contradicts each of the four sentences.

Two sentences are contradictories when exactly one of them is true: they can't both be true and they can't both be false (Smith, 2022).[1]

- "All A are B" is contradicted by "Some A are not B."
- "No A are B" is contradicted by "Some A are B."

That's the whole table, read in both directions. "Some A are B" is contradicted by "No A are B", and "Some A are not B" by "All A are B".

Notice what is not on the list. "All A are B" and "No A are B" are not contradictories. They can both be false at once, which happens whenever some As are B and some aren't. Logicians call that pair contraries. So if someone says "all the trains were late" and you reply "no they weren't, none of them were", you've taken on a much bigger claim than you needed, and you're probably wrong too.

The practical rule: to knock down an "all", find one exception. To knock down a "no", find one case. To knock down a "some", you have to show there are none at all, which is why "some" claims are so hard to refute and so easy to make.

:::checkpoint A colleague says, "Not all the invoices went out late." You have reason to think they're wrong. What exactly would you have to show?
That every invoice went out late. Work it through: "not all went out late" is "some invoices did not go out late", and the contradictory of a "some not" is the "all". One counterexample won't do here; a single late invoice is exactly what their claim allows. This is the hard direction of the table: knocking down a "some" claim means showing there are no cases at all, which is why "some" claims are easy to make and hard to refute. Notice too that refuting an "all" is modus tollens from lesson 3 wearing different clothes: "all invoices were late" says if it's an invoice then it was late, and one on-time invoice is the not-Q that breaks it.
:::

## The Venn check

Now the method. The idea is that a Venn diagram is a picture of every possible case at once, and that makes it a machine for finding counterexamples.

Start with two circles that overlap, one labelled A and one labelled B. Together they mark out three regions: A outside B, the overlap, and B outside A. Every possible thing sits in one of those regions or outside both.

Each of the four sentences is a mark on that picture, and [Knachel's chapter](https://human.libretexts.org/Bookshelves/Philosophy/Logic_and_Reasoning/Fundamental_Methods_of_Logic_(Knachel)/03%3A_Deductive_Logic_I_-_Aristotelian_Logic/3.06%3A_Categorical_Syllogisms) is the place to see many more of them drawn (Knachel).[2]

- "All A are B" says the region "A outside B" is empty. Shade it. Shading means empty.
- "No A are B" says the overlap is empty. Shade the overlap.
- "Some A are B" says at least one thing is in the overlap. Put an X there. An X means at least one thing is here.
- "Some A are not B" says at least one thing is in "A outside B". Put an X there.

Here are all four, drawn:

<svg viewBox="0 0 344 344" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cf-t cf-d" style="max-width:100%;height:auto;font-family:inherit">
  <title id="cf-t">The four categorical sentences as marks on a two-circle diagram</title>
  <desc id="cf-d">Four small panels. All A are B: the part of circle A outside circle B is shaded, meaning empty. No A are B: the overlap of the two circles is shaded. Some A are B: an X sits in the overlap. Some A are not B: an X sits in the part of A outside B.</desc>
  <defs>
    <clipPath id="cf-lens"><circle cx="230" cy="78" r="36"/></clipPath>
  </defs>
  <text x="0" y="15" font-size="17" font-weight="600" fill="var(--text-2, #4a5260)">The four sentences, as marks</text>
  <circle cx="58" cy="78" r="36" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="114" cy="78" r="36" fill="var(--surface, #ffffff)"/>
  <circle cx="58" cy="78" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="114" cy="78" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="24" y="36" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">A</text>
  <text x="148" y="36" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">B</text>
  <text x="86" y="140" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">All A are B</text>
  <g clip-path="url(#cf-lens)"><circle cx="286" cy="78" r="36" fill="var(--navy-soft, #e8eef6)"/></g>
  <circle cx="230" cy="78" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="286" cy="78" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="196" y="36" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">A</text>
  <text x="320" y="36" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">B</text>
  <text x="258" y="140" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">No A are B</text>
  <circle cx="58" cy="228" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="114" cy="228" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="24" y="186" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">A</text>
  <text x="148" y="186" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">B</text>
  <text x="86" y="234" font-size="20" font-weight="600" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">X</text>
  <text x="86" y="290" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Some A are B</text>
  <circle cx="230" cy="228" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="286" cy="228" r="36" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="196" y="186" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">A</text>
  <text x="320" y="186" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">B</text>
  <text x="214" y="234" font-size="20" font-weight="600" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">X</text>
  <text x="258" y="290" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Some A are not B</text>
  <text x="0" y="322" font-size="15" fill="var(--text-2, #4a5260)">Shading: this region is empty.</text>
  <text x="0" y="340" font-size="15" fill="var(--text-2, #4a5260)">X: at least one thing lives here.</text>
</svg>

Two conventions to fix in your head: shading means nothing lives here; an X means something does. Shading is a strong claim about a whole region. An X is a weak claim about a single occupant.

A syllogism has two premises and three terms. Each premise mentions two of the terms, the conclusion mentions the two that appear only once, and the third term, the one that appears in both premises but not the conclusion, is called the middle term. It's the hinge. In the promotion argument the middle term is "people who have done the course".

So draw three overlapping circles, one per term, and label them. Then:

1. Draw the premises, and only the premises. Never draw the conclusion.
2. Shade the "all" and "no" premises first.
3. Then place the X for any "some" premise. The region it belongs in will be cut in two by the third circle. If one half is shaded, the X goes in the other half. If neither half is shaded, the X goes on the line between them, which means "somewhere in here, and the premises don't say where".
4. Now read the conclusion off the page. If it's already drawn (the region it needs shaded is shaded; the X it needs is definitely inside the right region), the argument is valid. If it needs something that isn't there, the argument is invalid, and the unshaded region, or the other side of the line, is your counterexample.

Why does this work? Because a valid argument is one with no counterexample: no possible case where the premises hold and the conclusion fails. The diagram shows every possible case. When you draw the premises you rule out the cases they rule out, and no others. If the conclusion's requirement is still unmet after that, there's a case the premises allow in which the conclusion is false, and there's your counterexample. This is lesson 2's method, with the imagining done by the page.

Why shade before placing the X? Because the shading tells you where the X can't go. Place the X first and you may put it somewhere a later premise empties, and then you'll have to move it.

## Worked example 1: dogs and cats

Here is the argument every logic teacher uses, because it catches everyone.

```
1. All dogs are mammals.
2. All cats are mammals.
------------------------
C: All dogs are cats.
```

:::predict Is this argument valid? Most people say no, at once, because the conclusion is absurd. Set that aside. Can you say what is wrong with the form, in a way that would still be wrong if the conclusion were something you believed?
Both premises put things inside the mammal circle. Neither premise says anything about the relationship between dogs and cats directly; they only say each group sits inside a third. Two groups that both sit inside a third can overlap completely, partly, or not at all. The premises don't say which. Below is the same point drawn out.
:::

Draw three circles: Dogs, Cats, Mammals, with all three overlapping in the middle. Now draw the premises.

Premise 1, "All dogs are mammals", says the part of the Dogs circle outside the Mammals circle is empty. Shade it. That's two small regions: dogs that are neither cats nor mammals, and dogs that are cats but not mammals.

Premise 2, "All cats are mammals", says the part of the Cats circle outside Mammals is empty. Shade that too.

Now stop drawing and look at the conclusion. "All dogs are cats" would need the part of the Dogs circle outside the Cats circle to be shaded. Is it? Half of it is: you shaded "dogs, not cats, not mammals" under premise 1. But the other half, "dogs, not cats, but mammals", is untouched. It's sitting there, open.

That open region is the counterexample. It's a dog that's a mammal and isn't a cat. Which is to say, a dog. The premises allow it, the conclusion forbids it, and so the argument is invalid. Here is the finished page; the region the leader line points at is the one the conclusion needed shaded and the premises left open.

<svg viewBox="0 0 344 306" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dg-t dg-d" style="max-width:100%;height:auto;font-family:inherit">
  <title id="dg-t">The dog argument drawn on three circles</title>
  <desc id="dg-d">Three overlapping circles labelled Dogs, Cats and Mammals. The parts of Dogs and Cats outside Mammals are shaded, showing the two premises. The region for dogs that are mammals but not cats is unshaded, marked with a dot and a leader line to the label: open, a dog that is a mammal and not a cat.</desc>
  <text x="0" y="15" font-size="17" font-weight="600" fill="var(--text-2, #4a5260)">The dog argument, drawn</text>
  <circle cx="120" cy="110" r="70" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="224" cy="110" r="70" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="172" cy="190" r="70" fill="var(--surface, #ffffff)"/>
  <circle cx="120" cy="110" r="70" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="224" cy="110" r="70" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="172" cy="190" r="70" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="66" y="34" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Dogs</text>
  <text x="278" y="34" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Cats</text>
  <text x="172" y="248" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Mammals</text>
  <circle cx="130" cy="162" r="4" fill="var(--oxblood, #8b1e2d)"/>
  <line x1="130" y1="162" x2="70" y2="240" stroke="var(--oxblood, #8b1e2d)" stroke-width="1.5"/>
  <text x="4" y="260" font-size="15" fill="var(--oxblood, #8b1e2d)">open: a dog that's a</text>
  <text x="4" y="278" font-size="15" fill="var(--oxblood, #8b1e2d)">mammal and not a cat</text>
  <text x="4" y="298" font-size="15" fill="var(--text-2, #4a5260)">Shading: emptied by the premises.</text>
</svg>

Textbooks call this the fallacy of the undistributed middle: the middle term, "mammals", is never used to say something about all mammals, so it can't connect the other two terms. The [IEP's list of fallacies](https://iep.utm.edu/fallacy/) uses this very argument, in dogs, cats and animals, as its example of the mistake (Dowden).[3] You don't need the name. You need the picture, because the picture also works when the content isn't absurd.

Go back to the lift. Everyone promoted did the course; everyone on my team did the course; so everyone on my team gets promoted. Same three circles, same two shadings, same open region: a person who did the course and isn't promoted. The argument is invalid in exactly the way the dog argument is, and it took you thirty seconds. Your colleague may still get promoted. That's step 6, and it's a different question.

:::checkpoint The colleague replies: "Fine, but everyone who gets promoted here really has done the course. I checked." Does that rescue the argument?
No. They've defended a premise, which is step 5. The fault was at step 4: even with both premises true, the conclusion doesn't follow, because "did the course" is never said to cover only the promoted. Logic tests the link; the premises are a separate check, and here the link is already broken.
:::

## Worked example 2: a "some" premise, and the X on the line

Now an argument with a "some" premise, which is where the method earns its keep, because the X has to be placed carefully.

```
1. Some of the applicants are qualified.
2. All the qualified applicants have degrees.
---------------------------------------------
C: Some of the applicants have degrees.
```

Three circles: Applicants, Qualified, Degrees. Shade first. Premise 2 says the part of Qualified outside Degrees is empty. Shade it: that's "qualified, not an applicant, no degree" and "qualified applicant, no degree".

Now place the X for premise 1, "some applicants are qualified". It belongs in the overlap of Applicants and Qualified. That overlap is cut in two by the Degrees circle: "applicant, qualified, has a degree" and "applicant, qualified, no degree". Look at the second half. You've just shaded it. So the X can't go there, and it goes in the first half: applicant, qualified, with a degree.

Now do the next step yourself before reading on. The conclusion is "Some applicants have degrees." Where would an X have to be for that to be true? Is there one there?

:::predict Valid or invalid, and why?
Valid. The conclusion needs an X somewhere inside the overlap of Applicants and Degrees. Your X is in "applicant, qualified, with a degree", which is inside that overlap. The conclusion is already drawn. No case exists where both premises hold and the conclusion fails, because the shading forced the X to where the conclusion needed it.
:::

Here's the wrinkle. Swap two of the terms around:

```
1. Some of the applicants have degrees.
2. All the qualified applicants have degrees.
---------------------------------------------
C: Some of the applicants are qualified.
```

It reads nearly the same, and a hiring manager in a hurry would nod along. Draw it. Shade premise 2 as before: Qualified outside Degrees is empty. Now the X for "some applicants have degrees" belongs in the overlap of Applicants and Degrees. That overlap is cut in two by the Qualified circle: "applicant, degree, qualified" and "applicant, degree, not qualified". Is either half shaded? No. Premise 2 shaded parts of the Qualified circle outside Degrees; both of these regions are inside Degrees. So the X goes on the line between them.

The conclusion wants an X definitely inside Applicants and Qualified. Yours is on the line, which means "this applicant might be qualified or might not; the premises don't say". Not forced. Invalid.

The counterexample is the other side of the line: an applicant with a degree who isn't qualified, because the degree is in the wrong subject, say. Both premises are true of that person, and the conclusion is false. Notice it's the dog-and-cat pattern again, with a "some" instead of an "all": both premises attach things to "degrees", and nothing says that "degrees" reaches only the qualified.

The two finished diagrams are below, and the difference between them is the whole method: in the first, the shading leaves the X only one place to go; in the second, the shading never touches the X's home, so it sits on the line.

<svg viewBox="0 0 344 632" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ap-t ap-d" style="max-width:100%;height:auto;font-family:inherit">
  <title id="ap-t">The two applicant arguments drawn, one X forced and one X on the line</title>
  <desc id="ap-d">Two three-circle diagrams, labelled Applicants, Qualified and Degrees, each with the part of Qualified outside Degrees shaded. In the first, the X for "some applicants are qualified" is forced into the region inside all three circles, so the argument is valid. In the second, the X for "some applicants have degrees" sits on the boundary of the Qualified circle inside the Applicants and Degrees overlap, so the conclusion is not forced and the argument is invalid.</desc>
  <text x="0" y="15" font-size="17" font-weight="600" fill="var(--text-2, #4a5260)">The valid version: the X is forced</text>
  <circle cx="214" cy="140" r="62" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="166" cy="212" r="62" fill="var(--surface, #ffffff)"/>
  <circle cx="118" cy="140" r="62" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="214" cy="140" r="62" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="166" cy="212" r="62" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="70" y="66" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Applicants</text>
  <text x="264" y="66" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Qualified</text>
  <text x="166" y="262" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Degrees</text>
  <text x="166" y="166" font-size="20" font-weight="600" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">X</text>
  <text x="0" y="300" font-size="15" fill="var(--text-2, #4a5260)">"Qualified, no degree" is shaded. The X for</text>
  <text x="0" y="318" font-size="15" fill="var(--text-2, #4a5260)">"some applicants are qualified" is forced</text>
  <text x="0" y="336" font-size="15" fill="var(--text-2, #4a5260)">inside all three circles. Valid.</text>
  <text x="0" y="356" font-size="17" font-weight="600" fill="var(--text-2, #4a5260)">The swapped version: X on the line</text>
  <circle cx="214" cy="432" r="62" fill="var(--navy-soft, #e8eef6)"/>
  <circle cx="166" cy="504" r="62" fill="var(--surface, #ffffff)"/>
  <circle cx="118" cy="432" r="62" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="214" cy="432" r="62" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <circle cx="166" cy="504" r="62" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="70" y="380" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Applicants</text>
  <text x="264" y="380" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Qualified</text>
  <text x="166" y="554" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">Degrees</text>
  <text x="158" y="467" font-size="20" font-weight="600" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">X</text>
  <text x="0" y="590" font-size="15" fill="var(--text-2, #4a5260)">The X for "some applicants have degrees"</text>
  <text x="0" y="608" font-size="15" fill="var(--text-2, #4a5260)">straddles the Qualified line: it may be either</text>
  <text x="0" y="626" font-size="15" fill="var(--text-2, #4a5260)">side of it. Not forced. Invalid.</text>
</svg>

One more thing about that first, valid version. "Some of the applicants are qualified" told you nothing about any applicant being unqualified. If someone hears that argument and says "so some of them aren't qualified, then", they've added a premise. Maybe it's true. It wasn't stated, and it isn't something the diagram will ever show, because an X in one region says nothing about the others.

:::checkpoint You place an X and it lands on a line. What does that tell you about the conclusion, and what should you do?
The premises say something is in one of two regions but not which. If the conclusion needs the X to be in one specific one of those regions, the argument is invalid, and the other region is the counterexample. If the conclusion only needs the X to be somewhere in the union of the two (say, inside a circle that contains both), the argument can still be valid. So: look at what the conclusion needs, then ask whether "somewhere in these two" is enough.
:::

:::callout A footnote on empty classes
"All trespassers will be prosecuted" is a true sign on a field nobody has ever entered. On the modern reading, which is the one the Venn method uses, "All A are B" says only that nothing is an A without being a B; it doesn't say there are any As. Aristotle, in effect, assumed every term named something (Smith, 2022).[1] The difference shows up in a handful of forms. "All A are B, so some A are B" is valid for Aristotle and invalid on the modern reading, because an empty A makes the premise true and the conclusion false. Of the 256 possible two-premise forms, 15 are valid on the modern reading and 24 on the traditional one (Knachel; Lagerlund).[2][4] This is a convention, not a controversy: say which reading you're using and the disagreement vanishes. When it matters, it's usually because someone has argued from a rule to an instance without checking that any instance exists.
:::

## Why the course stops here

You could spend a semester on this. A full logic course goes on from here to propositional logic, truth tables, and formal proof; [*forall x*](https://forallx.openlogicproject.org/) is a free, openly licensed textbook that takes that route properly (Magnus et al.).[5] This course gives categorical logic one lesson and then moves on, and you deserve to know why, because it's a real argument among people who teach reasoning.

One side, call it the formal-first view, holds that formal logic gives a precise and general account of what "follows from" means, that working through it trains habits of rigour, and that it is worth knowing on its own terms, the way mathematics is. On this view a card puzzle is a poor measure of what a logic course teaches: nobody tests a mathematics degree with one brainteaser, and a logic course is not a training programme for puzzles but a body of knowledge with its own questions. That's the tradition behind the standard logic sequence and behind *forall x*.[5]

The other side is the informal-logic movement, which grew up in the 1970s around Ralph Johnson and Anthony Blair at Windsor, with Howard Kahane's 1971 *Logic and Contemporary Rhetoric* as an early landmark, and a family of textbooks has carried the programme on since. The field studies reasoning and inference "as they occur in public discussion and debate, educational and intellectual pursuits, interpersonal exchanges, and law, medicine and other 'real-life' contexts" ([Groarke](https://plato.stanford.edu/entries/logic-informal/)).[6] Its founding complaint, in Johnson's words, was "dissatisfaction with formal logic as the vehicle for teaching skill in argument evaluation and argument formation": real arguments, on this view, usually fail on a premise that shouldn't be accepted or a reason that isn't relevant, not on an invalid form.[6]

There is some evidence on the transfer question, and it's worth reading with care. Cheng, Holyoak, Nisbett and Oliver tested 53 students at the start and end of two introductory logic courses at the University of Michigan, about 40 hours of lectures each, taught from the standard logic textbooks of the day and covering the conditional forms of lesson 3 ([Cheng et al., 1986](https://hdl.handle.net/2027.42/26121)).[7] The test was Wason's selection task. Before the course, 75% of students made at least one error on the conditional problems; after it, 72%. The authors' summary was that "the only apparent influence of a one-semester logic course was a small decrease in the tendency to make the error corresponding to affirming the consequent".[7] After the semester, the same students solved only 11% of the arbitrary problems correctly, when before any training they'd solved 62% of the problems that were phrased as permissions.[7]

Two cautions. It's one classroom study, on one unusually hard task. And a separate laboratory experiment in the same paper found that abstract training did work when the rules were taught together with examples of the problems they applied to: 39% of the group trained with rules and examples made at least one error, against 75% of an untrained control group, though the authors say the confidence intervals on those lab groups were wide.[7] That second finding is the one this course is built on. The rules are here; so are the examples, and the practice on your own material. A meta-analysis of critical-thinking instruction more broadly found it does help, with a weighted mean effect of g+ = 0.30, and the strategies associated with the larger effects were dialogue, authentic problems, and mentoring (Abrami et al., 2015).[8]

What would settle the question is a study that trained one group formally and one informally and tested both on real arguments after a delay. I don't know of a decisive one. So here is the course's line, stated openly: the four conditional shapes, the Venn check, and the counterexample method are the formal logic a general reader uses; the rest of this course is about premises, relevance, strength, and the ways people go wrong in practice. If you find you like the formal side, [*forall x*](https://forallx.openlogicproject.org/) is free and good.

## What people get wrong

**"Some" implies "not all".** It doesn't, in logic. It's an implicature in conversation, and it's cancellable. An argument that needs "not all" must state it, and then you can check it.

**"No A are B" is the opposite of "All A are B".** They're contraries, not contradictories, and both can be false. To deny "all", produce one exception. Taking on "none" is taking on a claim you don't need and often can't defend.

**A believable conclusion means a valid argument.** Lesson 2's belief bias, again. Evans, Barston and Pollard found that people accept invalid syllogisms with believable conclusions and reject valid ones with unbelievable conclusions, and that the effect was larger on the invalid ones (Evans, Barston & Pollard, 1983).[9] The dog argument is easy because the conclusion is absurd. The promotion argument has the same form and a conclusion someone wants. Draw both.

**Placing the X before shading.** Then it lands in a region a later premise empties, and you either move it or, worse, leave it and read off a wrong verdict. Shade first, always.

**Treating existential import as a live dispute.** It's a difference in convention with a known list of cases where it matters. State your reading and move on.

**"All A are not B" read without asking.** English lets that sentence mean two different things. If the argument turns on it, get the arguer to pick one.

## Practice

Six arguments. Two are conditionals from lesson 3, so your first job on each is to decide which tool fits: the four shapes, or three circles. Then give the verdict and, for every invalid one, the counterexample. Write your answers down before opening the check.

1. No birds are mammals. All bats are birds. So no bats are mammals.
2. All the flats that flooded last winter were ground-floor flats. All the flats in Block B are ground-floor flats. So all the flats in Block B flooded last winter.
3. All tomatoes are vegetables. Some tomatoes are fruits. So some vegetables are fruits.
4. If the boiler's pilot light is out, there's no hot water. There's no hot water. So the pilot light is out.
5. Some of the hotel's guests ordered a newspaper. All the conference delegates are the hotel's guests. So some of the conference delegates ordered a newspaper.
6. If the meeting had run over, the room would still have been booked at three. The room wasn't booked at three. So the meeting didn't run over.

:::checkpoint Check your six answers.
1. Venn. Shade the overlap of Birds and Mammals (both halves, inside and outside Bats). Shade Bats outside Birds. The conclusion needs the overlap of Bats and Mammals shaded: one half is inside Birds, shaded by premise 1; the other half is outside Birds, shaded by premise 2. Valid. The conclusion is false because premise 2 is false; a valid argument with a false premise, one of the cells in lesson 2's table.
2. Venn. Both premises shade parts outside Ground-floor. The conclusion needs "Block B, not flooded" shaded, and the half of it inside Ground-floor is open. Invalid: a ground-floor flat in Block B that stayed dry. Undistributed middle, and a conclusion some buyer would believe.
3. Venn. Shade Tomatoes outside Vegetables. The X for "some tomatoes are fruits" goes in Tomatoes and Fruits; the half outside Vegetables is shaded, so it goes in "tomato, fruit, vegetable", which is inside Vegetables and Fruits. Valid, and the conclusion is true whatever your kitchen says; botanically a tomato is a fruit.
4. Conditional. "If P then Q; Q; so P." Affirming the consequent, invalid. Counterexample: the pilot light is fine and the water's off at the mains.
5. Venn. Shade Delegates outside Guests. The X for "some guests ordered a newspaper" goes in Guests and Ordered; that's cut by Delegates and neither half is shaded, so it's on the line. Conclusion needs it inside Delegates. Invalid: the newspaper orders could all be from tourists. A believable conclusion, and an invalid link.
6. Conditional. "If P then Q; not Q; so not P." Modus tollens, valid.
:::

**From memory.** Close the page and write down: the four sentence forms and the exact sentence that contradicts each; what shading means and what an X means; why you shade before you place the X; what it means when the X lands on a line; and the one region the dog argument left open. Then check what you missed, and reread only those parts. Do this before the quiz; it's the part of the practice that does the most for you.

:::exercise Do it now
Find one "all", "every", "no", "none", or "only" claim in something you read or heard this week. A headline, a manager's email, a sign, a line from a podcast.

1. Write it as one of the four forms. If it was a bare plural ("landlords never fix anything", "these phones break"), say so, and write the "all" or "no" it amounts to.
2. Write down exactly what one case would refute it. One exception for an "all"; one instance for a "no". Not a counter-argument, a case.
3. If the claim was a premise in an argument, put the argument in standard form, draw the three circles, and give the verdict. If it wasn't, note whether the writer used "some" anywhere and whether they slid from "some" to "some are not".

Put it in your folder from lesson 1. By lesson 10 you'll pick your project from that folder, and an "all" claim with its refuting case written out is often the best material in it.
:::

## Connections

This closes the deductive unit. You now have two fast tools for step 4 of the check: the four conditional shapes from lesson 3, for arguments built from "if", and the Venn check, for arguments built from "all", "no", and "some". Both are the counterexample method from lesson 2 made quick, and both test only the link. The premises still need evidence, which no diagram supplies.

- Lesson 2's counterexample is what a Venn gap is: an unshaded region, or the far side of a line, is a case the premises permit and the conclusion forbids.
- Lesson 3's modus tollens is the shape of "one on-time train refutes 'all late'": the "all" says if train then late, and the one exception is the not-Q.
- Lesson 5 opens the other kind of link. There, "some" and "all" turn up inside claims about samples, "most" gets its proper treatment, and a counterexample doesn't sink the argument; it only weakens it. That difference is the whole subject of the next lesson.

## Go deeper

- [Knachel, *Fundamental Methods of Logic*, chapter 3](https://human.libretexts.org/Bookshelves/Philosophy/Logic_and_Reasoning/Fundamental_Methods_of_Logic_(Knachel)/03%3A_Deductive_Logic_I_-_Aristotelian_Logic) (free, CC BY 4.0, on LibreTexts): the clearest short treatment of categorical logic, with many more Venn diagrams drawn out than this lesson has room for; do the exercises in 3.6 if the X-on-the-line cases still feel slippery.
- [*forall x: Calgary*](https://forallx.openlogicproject.org/), Parts I to III (free, CC BY 4.0): the symbolic route, with truth tables, for readers who found this lesson too easy and want the formal-first version done properly.
- [Smith, "Aristotle's Logic", *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/aristotle-logic/): where the four sentences, the three figures, and the assumption about non-empty terms come from, in Aristotle's own order.
- [Lagerlund, "Medieval Theories of the Syllogism", *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/medieval-syllogism/): where the 24 traditional forms and their singsong medieval names (Barbara, Celarent) come from, if you want to see the counting done.

## Sources

1. Smith, R., "Aristotle's Logic", *Stanford Encyclopedia of Philosophy* (rev. 2022). Aristotle's definition of a deduction; the three figures and the table of valid deductions; contradictories as pairs of which exactly one is true; Aristotle "in effect supposes that all terms in syllogisms are non-empty".
2. Knachel, M., *Fundamental Methods of Logic* (University of Wisconsin-Milwaukee; CC BY 4.0, read on LibreTexts), section 3.6, Categorical Syllogisms. Read at draft time: "There are 4 figures and 64 moods. That gives us 256 possible logical forms. It turns out that only 15 of these are valid" (the modern reading); the Venn diagram test, drawing the premises and then asking whether the picture entails the conclusion; universal premises depicted before particular ones; "in cases of indeterminacy, draw Xs straddling boundary lines".
3. Dowden, B., "Fallacies", *Internet Encyclopedia of Philosophy*. The entry's list defines the fallacy of undistributed middle as occurring "when the middle term of a syllogism is not distributed in at least one of the premises", with the example "All dogs are animals. All cats are animals. So, all dogs are cats."
4. Lagerlund, H., "Medieval Theories of the Syllogism", *Stanford Encyclopedia of Philosophy* (first published 2004; rev. 26 January 2026). Read at draft time, section 1: "there are 256 possible combinations of sentences. Of these, 24 have traditionally been thought to yield valid deductions", the 24 being the 19 direct moods plus five subalternate moods; the medieval mnemonic names (Barbara, Celarent) for the valid moods.
5. Magnus, P. D., Button, T., Trueman, R., Zach, R. et al., *forall x: Calgary* (CC BY 4.0), Part I. Validity as the absence of a counterexample; "logic doesn't care about feelings. Actually, it doesn't care about facts, either"; logic shows an argument invalid but not that a premise is false.
6. Groarke, L., "Informal Logic", *Stanford Encyclopedia of Philosophy*. Informal logic as the study of reasoning and inference "as they occur in public discussion and debate, educational and intellectual pursuits, interpersonal exchanges, and law, medicine and other 'real-life' contexts"; the movement's origins with Johnson and Blair at Windsor in the 1970s and Kahane's *Logic and Contemporary Rhetoric* (1971); Johnson's "dissatisfaction with formal logic as the vehicle for teaching skill in argument evaluation and argument formation".
7. Cheng, P. W., Holyoak, K. J., Nisbett, R. E. & Oliver, L. M., "Pragmatic versus syntactic approaches to training deductive reasoning", *Cognitive Psychology* 18(3), 293 to 328 (1986). Read from the full text (University of Michigan Deep Blue repository). Experiment 2: 53 students across two introductory logic classes (Ann Arbor and Dearborn), about 40 hours of lectures each, taught from two standard logic textbooks named in the paper; pretest to post-test on Wason selection problems, percentage making at least one error on conditional problems 75% before and 72% after, mean improvement "a bare 3 ± 7%"; "the only apparent influence of a one-semester logic course was a small decrease in the tendency to make the error corresponding to affirming the consequent"; after the semester students "solved only 11% of the arbitrary problems correctly, whereas the same students, prior to receiving any formal training, solved 62% of the permission problems correctly". Experiment 1, a separate laboratory study with four groups measured once: 39 ± 12% of the rules-and-examples group made at least one error, against 75 ± 12% of the control group; rules alone and examples alone did not significantly help, with the wide confidence intervals noted by the authors.
8. Abrami, P. C., Bernard, R. M., Borokhovski, E., Waddington, D. I., Wade, C. A. & Persson, T., "Strategies for teaching students to think critically: A meta-analysis", *Review of Educational Research* 85(2), 275 to 314 (2015). 341 effect sizes; weighted mean g+ = 0.30; dialogue, authentic problems and mentoring associated with larger effects (from the abstract).
9. Evans, J. St. B. T., Barston, J. L. & Pollard, P., "On the conflict between logic and belief in syllogistic reasoning", *Memory & Cognition* 11(3), 295 to 306 (1983). From the abstract: belief bias "was more marked on invalid than on valid syllogisms"; some verbal protocols were rationalisations of prejudged decisions.
