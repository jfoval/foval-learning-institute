---
title: "How much should the evidence move you: base rates, conjunctions, and the prosecutor's fallacy"
minutes: 85
objectives:
  - Calculate the share of positive results that are true positives from a base rate, a sensitivity, and a false-positive rate, by counting in natural frequencies
  - Explain why a conjunction can never be more probable than either of its parts, and why the Linda problem fools people anyway
  - Identify the prosecutor's fallacy in a courtroom-style argument and state the comparison the fact-finder should make instead
  - Apply the likelihood ratio to say how much a piece of evidence should change a belief, including an argument from absence of evidence
quiz:
  - q: A factory tests all 1,000 components in a batch for a hairline fracture. Suppose (numbers invented) 2 in every 100 components are cracked, the test catches 95 of every 100 cracked ones, and it also flags 5 of every 100 sound ones. A component is flagged. Counting in natural frequencies, roughly what share of flagged components are actually cracked?
    options:
      - About 95 in 100. Of every 100 cracked components the test catches 95, and a flag is what that catching looks like.
      - About 50 in 100. The test misses 5 in every 100 cracked ones and wrongly flags 5 in every 100 sound ones, so the two errors cancel.
      - About 28 in 100. Of the 1,000 components, 19 true flags sit among 49 false ones.
      - About 5 in 100. The test flags 5 in every 100 sound components, and sound components are nearly the whole batch.
    answer: 2
    explain: >-
      Count. Of 1,000 components, 20 are cracked and 980 are sound. The test flags 19 of the 20 cracked ones and 49 of the 980 sound ones (5 in 100). So 68 components are flagged and 19 of them are cracked, about 28 in 100. Option A is the test's sensitivity, which is the probability of a flag given a crack, not the probability of a crack given a flag; swapping those is the whole error of this lesson. Option B treats the two error rates as if they cancelled, but they act on groups of very different sizes: 5 in 100 of twenty is one component, and 5 in 100 of 980 is forty-nine. Option D notices the right thing about the sound group and then forgets that there were cracked components to find at all.
  - q: A sports columnist writes that a struggling football club is "more likely to finish outside the league's top four and sack its manager than simply to finish outside the top four, given how the board behaves." Which is right?
    options:
      - Finishing outside the top four alone is at least as probable, since every case where both happen is already one of those cases
      - The columnist is right, because the board's behaviour is extra evidence that raises the probability of the combined outcome
      - The two are equally probable, because a board that behaves like that will sack the manager in every season that goes wrong
      - It depends on the strength of the board's record, so neither claim can be judged without seeing the figures for past seasons
    answer: 0
    explain: This is the conjunction rule in a new dress. "Outside the top four and sacks the manager" is a subset of "outside the top four", so it cannot be more probable, whatever the board is like. Option B is exactly how Linda works on people; the extra detail makes the story more vivid and the count smaller. Option C would need the sacking to be certain, and even then the two would only be equal, never the other way round. Option D treats a matter of counting as a matter of evidence, and no figures can make a part larger than its whole.
  - q: A DNA profile from a crime scene matches a suspect, and the expert says (numbers invented) that the profile would match about 1 person in a million by chance. The city has 5 million people. A juror concludes that there is about a one in a million chance the suspect is innocent. What is the best response?
    options:
      - The juror is right, since a one in a million match probability means the chance the match is a coincidence is one in a million
      - About 5 people in the city match by chance, so on the match alone the suspect is one of about 6; other evidence must do the rest
      - The match is worthless. If about 5 other people in the city match, there is nothing to choose between the suspect and any of them
      - The juror is right only if the laboratory's error rate is also below one in a million, since lab error is the real risk with DNA evidence
    answer: 1
    explain: >-
      One in a million is the probability of the evidence (a match) given innocence, not the probability of innocence given the evidence. Count the cases. In a city of 5 million, about 5 people would match by chance, and the suspect is one of about 6 matching people. On the match alone that is roughly a one in six chance of guilt, not a 999,999 in a million chance; what moves it further is the other evidence, which is exactly what the jury exists to weigh. Option A is the prosecutor's fallacy. Option C does the same count and then overcorrects; going from 5 million candidates to about six is an enormous amount of evidence, just not a verdict. Option D raises a real issue but does not repair the swap of conditionals, and the juror's conclusion would still be wrong with a perfect lab. One caution about the keyed answer: "one in six" assumes the suspect was no more likely than any other resident to be the offender before the match came in. In a real case he is in the frame for a reason, and that reason is part of what the rest of the evidence has to be weighed as. Where such a starting point comes from is the question the last section of this lesson leaves open.
  - q: Two engineers each say "there's no evidence this bridge has a crack, so it's probably sound." Engineer A says it after walking across the bridge. Engineer B says it after an ultrasonic inspection that would find a crack of the worrying size about 95 times in 100. Using the likelihood ratio, which is right?
    options:
      - Neither, because absence of evidence is never evidence of absence and both are committing the argument from ignorance
      - Engineer B, but only slightly, because a scan that misses a crack 5 times in 100 is not much better than a careful look from the deck
      - Engineer A more than B, because the walk gives direct experience and the instrument can be miscalibrated or misread
      - Engineer B, because "no crack found" is very likely if the bridge is sound and unlikely if it is cracked, a large ratio
    answer: 3
    explain: >-
      The likelihood ratio asks how much more likely the evidence is if the claim is true than if it is false. For Engineer B, "no crack found" happens nearly always when the bridge is sound and only about 5 times in 100 when it is cracked, so the ratio is about 20 to 1 and the argument is strong. For Engineer A, "no crack seen from the deck" is about as likely either way, so the ratio is near 1 and the argument barely moves anything. Option A is the slogan the lesson argues against; Oaksford and Hahn argue that this form is a legitimate inductive argument whose strength varies with content, not an automatic fallacy. Option B compares the two searches on the wrong quantity: what matters is not how often the scan misses but how differently it behaves on a sound bridge and a cracked one, and the walk barely differs at all. Option C reverses the ranking on the basis of vividness rather than likelihood.
  - q: A doctor is deciding which of two findings should change her mind more about whether a patient has a particular condition. Finding X is present in 90 of 100 patients who have it and in 85 of 100 who do not. Finding Y is present in 30 of 100 who have it and in 3 of 100 who do not. Which finding is the stronger evidence for the condition?
    options:
      - Finding Y, because 30 against 3 is a ratio of ten, while 90 against 85 is a ratio of barely more than one
      - Finding X, because it is present in 90 of every 100 patients who have the condition and so misses only 10 of them
      - Finding X, because a difference of 5 in 100 across many patients adds up to more true cases than 27 in 100
      - Neither can be ranked without the base rate, because the strength of evidence depends on how common the condition is
    answer: 0
    explain: Strength of evidence is the likelihood ratio, which asks how much more often the finding appears when the condition is present than when it is absent. Y appears ten times more often with the condition than without; X appears about 1.06 times more often, which is almost no evidence at all, however common it is among the sick. Option B confuses sensitivity (how often the finding appears in real cases) with evidential strength; a finding that appears in nearly everyone tells you nearly nothing. Option C is arithmetic about the wrong thing. Option D mixes up two separate quantities. The base rate sets where you start, and the likelihood ratio sets how far the evidence moves you from there. You can rank evidence without a base rate; you just can't get a final probability without one.
  - q: A clinic uses the same rapid test in two places. In the airport queue, 1 traveller in 500 has the infection. On the ward where symptomatic patients are sent, 1 patient in 5 has it. The test flags 90 in every 100 infected people and 10 in every 100 uninfected people. In which place does a positive result mean more, and roughly how much more?
    options:
      - In the airport queue. A positive there is more surprising, since almost nobody in that queue is infected, and more surprising evidence carries more information.
      - Equally in both. The 90 in 100 and the 10 in 100 belong to the test, so a positive means the same thing wherever it is run; only the number of positives changes.
      - >-
          On the ward, by a long way. Count 1,000 in each place: the airport gives about 2 true positives among about 102 positives, under 2 in 100; the ward gives 180 among 260, about 69 in 100.
      - >-
          On the ward, but only slightly. Count the ward: 180 true positives against 80 false alarms is still nearly a third of positives wrong, so the same 10 in 100 false-positive rate limits the test in both places.
    answer: 2
    explain: >-
      Count both. Airport, per 1,000 travellers, 2 are infected and 998 are not, so the test flags about 2 of the 2 and about 100 of the 998; that is 102 positives of which about 2 are real, under 2 in 100. Ward, per 1,000 patients, 200 are infected and 800 are not, so 180 and 80; that is 260 positives of which 180 are real, about 69 in 100. The same test, and a positive means roughly forty times as much on the ward as in the queue. Option A has the right instinct about surprise and draws the wrong conclusion from it: a positive in a group where almost nobody is infected is mostly a false alarm, which is why it means less, not more. Option B is this lesson's central error stated cleanly; the two rates do belong to the test, but the share of positives that are true is a ratio of two counts, and the base rate sets the size of both groups. Option D does the ward count correctly and then compares it against perfection rather than against the queue; 180 real cases against 80 false alarms takes a patient from 1 in 5 to better than even, which is a great deal of evidence.
---

You've probably met this argument this week, from a friend, a forum, or your own head. "The test is 80% accurate. It came back positive. So I've almost certainly got it." Or its cousin from the news: "The chance of that happening by accident is one in a million. So it wasn't an accident."

Both arguments have true premises and a link that feels tight. Both are wrong, and not by a little. In the first, the honest answer can be "you probably don't have it." In the second, a version of that argument was put to a jury that convicted Sally Clark of murdering her two baby sons. She served three years before the Court of Appeal quashed the convictions as unsafe, and the court said the number should never have been in front of the jury in the way that it was.

Lesson 5 told you that an inductive argument is strong when its premises make the conclusion probable. This is step 4 of the six-step check again, the test of the link, and this lesson is where it gets a number. What's hard isn't the arithmetic, which you can do in your head. It's noticing when you need it, because the arguments that need it most are the ones that feel like they don't.

## A probability is a share of cases

Everything in this lesson rests on one idea. When someone says "the probability of X is 8%", the useful translation is "out of every 100 cases like this one, about 8 are X." A probability is a share of a pile of cases. Every trick in the lesson works by getting you to lose track of which pile.

Hold on to that and three famous errors turn out to be one error seen from three sides: a detail, a test result, and a courtroom number. Then comes the honest measure of how much any piece of evidence should move you.

## A question about Linda

Read this description and answer the question before you scroll. It comes from a 1983 paper by Tversky and Kahneman, who gave it to university students in Vancouver.[1]

Linda is "31 years old, single, outspoken and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations."[1]

:::predict Which is more probable? (a) Linda is a bank teller. (b) Linda is a bank teller and is active in the feminist movement.
Most people pick (b). It fits. But every Linda who is a bank teller and a feminist is also a bank teller, so (b) is a part of (a), and a part can't be bigger than its whole. (a) is at least as probable, and almost certainly more. The numbers are below.
:::

In the most direct version of the test, 142 students were given just those two options. "Overall, 85% of respondents indicated that T&F was more probable than T."[1] Across the main study the rate of violations in direct tests was 88%, and the authors found "no effect of statistical sophistication in either indirect or direct tests."[1] Statistical training made no difference in either direction.

This is the conjunction rule, and it's the least negotiable rule in this lesson. "A and B" can never be more probable than "A" on its own, because the cases where both hold are a subset of the cases where A holds. Adding a condition removes cases; it never adds them. Count it and you can see why. Imagine 100 women who fit Linda's description. Suppose (I'm inventing this number to show the shape) 5 of them are bank tellers. Some of those 5 are feminists, say 4. Then "bank teller and feminist" is 4 in 100, and "bank teller" is 5 in 100. However many you make the feminists, the second pile is drawn from inside the first.

So why does (b) win by a landslide? The reading Tversky and Kahneman put on it is that the description was built to fit the picture most people carry of a feminist and not the picture they carry of a bank teller, so adding "feminist" makes the sentence match that picture more closely, and the mind judges the match rather than the count. The rival reading, which you'll meet in a moment, is that a good part of what looks like a counting error is a reading of the word "probable". Either way the practical rule comes out the same. Resemblance is a fine guide to lots of things. It's a terrible guide to size of pile, because a more specific description matches fewer people, not more, however well it fits the one you have in mind. Matching is not counting.

You met the same machinery in lesson 2 as belief bias, the mind checking whether a conclusion sounds right before, and often instead of, checking whether it follows, and Linda is that habit applied to a probability.

Tversky and Kahneman tried to shake the effect loose. When they turned the question into a bet, so that respondents had to choose which statement to wager on, violations fell to 56% in a group of 60.[1] Only one group, doctoral-level respondents in a rating task, got down to 36%.[1] Money helped, and it didn't cure it.

:::checkpoint Which is more probable: that it rains tomorrow, or that it rains tomorrow and the match is cancelled?
Rain alone. Every tomorrow on which it rains and the match is cancelled is a tomorrow on which it rains, so the second pile sits inside the first. If the cancellation feels like it makes the story more likely, that's the Linda effect: the added detail makes a better story and a smaller pile.
:::

Now the honest complication. Hertwig and Gigerenzer argued in 1999 that a good part of the Linda result is about language, not logic.[2] In ordinary speech "probable" often means "plausible" or "fitting", and by that reading (b) is the better answer. When the question is put as a frequency ("of 100 women like Linda, how many are bank tellers? how many are bank tellers and feminists?") far fewer people make the error. The disagreement is real and I'll come back to it at the end. For now, take the practical lesson both camps accept: when a claim comes wrapped in detail, count. Ask "of every 100 cases like this, how many?" and the detail stops helping.

## Base rates: why "80% accurate" is not what you think

Now the same argument in the form it was first put, which was medical. It is a version of a problem Eddy put to physicians in 1982, adapted and reported by Gerd Gigerenzer and Hoffrage in their 1995 paper.[3] The figures are that paper's illustrative ones. They are not a description of any screening programme running today.

A woman has a routine mammogram. In the population being screened, 1% of women have breast cancer. If a woman has cancer, the test is positive 80% of the time. If she does not, the test is still positive 9.6% of the time. Her result is positive. What is the probability she has cancer?

:::predict Eddy asked 100 physicians. What do you think most of them said? And what's your own answer?
Gigerenzer and Hoffrage report that "95 out of 100 physicians estimated the posterior probability p(cancer|positive) to be between 70% and 80%, rather than 7.8%."[3] The posterior is just the answer you want: the probability of cancer once the positive result is in. The right answer is about 8 in 100. Ninety-five doctors were off by a factor of about ten, in the direction that turns a screening result into something close to a diagnosis.
:::

Let's get 7.8% by counting, because once you've counted it you'll never need to remember a formula. Take 1,000 women who are screened.

Of those 1,000, 1% have cancer: 10 women. The other 990 do not.

Of the 10 with cancer, the test is positive for 80%: 8 women. (The other 2 get a false reassurance; keep them in mind for later.)

Of the 990 without cancer, the test is positive for 9.6%: about 95 women.

Now look at the pile of positive results. It contains 8 women with cancer and 95 without: 103 positives in all. The share of positives that are true is 8 out of 103, which is 7.8%.[3]

<svg viewBox="0 0 420 270" role="img" aria-labelledby="tree-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="tree-title">A tree diagram of the mammogram count. One thousand screened women split into ten with cancer and nine hundred and ninety without. The ten split into two who test negative and eight who test positive. The nine hundred and ninety split into ninety-five who test positive and eight hundred and ninety-five who test negative. The two positive boxes, eight and ninety-five, are shaded and ringed together as the pile of one hundred and three positive results.</title>
  <rect x="110" y="8" width="200" height="34" fill="var(--bg, #ffffff)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="210" y="31" font-size="15" text-anchor="middle" fill="var(--text, #111418)">1,000 screened</text>
  <line x1="210" y1="42" x2="105" y2="72" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <line x1="210" y1="42" x2="315" y2="72" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <rect x="30" y="72" width="150" height="34" fill="var(--bg, #ffffff)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="105" y="95" font-size="15" text-anchor="middle" fill="var(--text, #111418)">10 with cancer</text>
  <rect x="240" y="72" width="150" height="34" fill="var(--bg, #ffffff)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="315" y="95" font-size="15" text-anchor="middle" fill="var(--text, #111418)">990 without</text>
  <line x1="105" y1="106" x2="49" y2="140" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <line x1="105" y1="106" x2="155" y2="140" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <line x1="315" y1="106" x2="265" y2="140" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <line x1="315" y1="106" x2="371" y2="140" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <rect x="1" y="140" width="96" height="52" fill="var(--bg, #ffffff)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="49" y="163" font-size="15" text-anchor="middle" fill="var(--text, #111418)">2 test</text>
  <text x="49" y="182" font-size="15" text-anchor="middle" fill="var(--text, #111418)">negative</text>
  <rect x="107" y="140" width="96" height="52" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="155" y="163" font-size="15" text-anchor="middle" fill="var(--text, #111418)">8 test</text>
  <text x="155" y="182" font-size="15" text-anchor="middle" fill="var(--text, #111418)">positive</text>
  <rect x="217" y="140" width="96" height="52" fill="var(--navy-soft, #e8eef6)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="265" y="163" font-size="15" text-anchor="middle" fill="var(--text, #111418)">95 test</text>
  <text x="265" y="182" font-size="15" text-anchor="middle" fill="var(--text, #111418)">positive</text>
  <rect x="323" y="140" width="96" height="52" fill="var(--bg, #ffffff)" stroke="var(--navy, #0f2a4a)" stroke-width="1.5"/>
  <text x="371" y="163" font-size="15" text-anchor="middle" fill="var(--text, #111418)">895 test</text>
  <text x="371" y="182" font-size="15" text-anchor="middle" fill="var(--text, #111418)">negative</text>
  <rect x="101" y="134" width="216" height="64" fill="none" stroke="var(--oxblood, #8b1e2d)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="210" y="226" font-size="15" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">The ringed pile is every positive result: 8 + 95 = 103.</text>
  <text x="210" y="250" font-size="15" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">8 of those 103 have cancer, which is 7.8 in 100.</text>
</svg>

Look at the two ringed boxes. That is the whole lesson in one picture: the 8 sits next to the 95, and the 95 is there because the group it came from was a hundred times larger.

Before you draw the wrong moral from 8 in 103, notice what the count actually did. Before the test this woman's chance was 1 in 100. After it, about 8 in 100. The test moved her roughly eightfold, which is a great deal of evidence, and a positive screening result is not a diagnosis. It is the reason for the next look. Whether a screening programme is worth running is a further question again, turning on what happens after a positive result and on what the alternatives are, and this lesson does not answer it. Quoting 7.8% as though it did would be the very mistake the rest of this lesson is about: a number on its own is not a verdict.

Notice what did the work in the count. The test's 80% was real and it's in there (it's the 8). But the base rate, the 1%, decided the size of both piles: it made the cancer group tiny, so even a very accurate test produced only 8 true positives, and it made the healthy group huge, so even a modest false-positive rate produced 95 false ones. The doctors' 70 to 80% is what you get if you look only at the test and forget the piles.

This is the same swap as in the courtroom later. "80% of women with cancer test positive" is the probability of a positive given cancer. The woman wants the probability of cancer given a positive. Those two sentences use the same words and answer different questions, and in English the swap is nearly invisible.

### The count, as five steps you can repeat

You've now done this once. Here it is as a procedure, because the next time nobody will hand you the thousand.

1. Pick a population big enough that every group comes out whole. Start at 1,000. If the base rate is 2 in 1,000 you'll need 10,000; if it's 1 in 10,000 you'll need a million. If you end up with 1.8 people, you picked too small.
2. Split it by the base rate into the group who have the thing and the group who don't. Write both numbers down. They must add back to the population.
3. Apply the hit rate to the first group only. That's your true positives.
4. Apply the false-alarm rate to the second group only. That's your false positives.
5. Divide the true positives by the two added together.

And three checks before you trust the answer, all of which hold for every case in this lesson:

- The two groups must add back to the population you started with. If they don't, step 2 went wrong.
- Neither count of positives can be bigger than the group it came from. Eight true positives out of ten women with cancer is possible; nine out of eight is a slipped decimal.
- The answer must come out higher than the base rate you started with. A positive result always raises the probability, as long as the test flags a real case more often than it flags a healthy one. If your answer came out lower than the base rate, you've divided the wrong way round.

### The formula, once, as a shorthand

What you just did has a name. It's Bayes' rule, and written out it says the probability of cancer given a positive equals the true positives divided by all the positives. That's what you counted: 8 over 103.

The symbols just name the four counts you've already made. p(cancer) is the base rate, the 1% that gave you 10 women. p(positive | cancer) is the sensitivity, which means how often the test comes up positive when the cancer is there, the 80% that turned those 10 into 8. p(no cancer) and p(positive | no cancer) are the other side of the split, the 990 and the 9.6% that gave you 95. Put them together and the rule says:

```
p(cancer | positive)  =  8  ÷  (8 + 95)
```

with the thousand cancelled off the top and the bottom. The formula is a compressed count. If you ever forget it, count.

:::checkpoint Without looking back, which two of the four numbers decide how big the pile of false positives is?
The 990 and the 9.6%. The base rate fixes how many women are in the healthy group, and the false-positive rate fixes what share of that group the test flags. Multiply the two and you get 95, which is the number that swamps the 8. Notice what has nothing to do with this pile: the test's 80%. That figure only ever acts on the 10 women who have cancer. It can't touch the other 990, which is exactly why "the test is 80% accurate" tells you nothing on its own.
:::

Gigerenzer and Hoffrage wanted to know whether the counting is easier for other people too, not only for the person doing the explaining, so they tested it. They took fifteen problems of this kind and wrote each one twice. One version gave percentages, the way the mammogram problem is usually put. The other gave the same facts as counts: "10 out of every 1,000 women", "8 of every 10 women with breast cancer will get a positive mammography", "95 out of every 990 women without breast cancer will also get a positive mammography". Nobody was taught anything either way. On the percentage versions, people reached the right answer 16% and 28% of the time. On the counting versions, 46% and 50%.[3] Same facts, and on the harder wording nearly three times as many people got it right, with no instruction at all. The counts have a name, natural frequencies, and they're what you've been doing since the thousand women.

<svg viewBox="0 0 420 210" role="img" aria-labelledby="formats-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="formats-title">A bar chart of Gigerenzer and Hoffrage's Study 1. The standard probability wording produced correct answers 16 per cent of the time and the short probability wording 28 per cent. The two frequency wordings produced 46 per cent and 50 per cent.</title>
  <text x="0" y="40" font-size="15" fill="var(--text, #111418)">Probability, standard</text>
  <rect x="196" y="20" width="32" height="30" fill="var(--text-2, #4a5260)"/>
  <text x="236" y="40" font-size="15" fill="var(--text, #111418)">16%</text>
  <text x="0" y="88" font-size="15" fill="var(--text, #111418)">Probability, short</text>
  <rect x="196" y="68" width="56" height="30" fill="var(--text-2, #4a5260)"/>
  <text x="260" y="88" font-size="15" fill="var(--text, #111418)">28%</text>
  <text x="0" y="136" font-size="15" fill="var(--text, #111418)">Frequency, one wording</text>
  <rect x="196" y="116" width="92" height="30" fill="var(--oxblood, #8b1e2d)"/>
  <text x="296" y="136" font-size="15" fill="var(--text, #111418)">46%</text>
  <text x="0" y="184" font-size="15" fill="var(--text, #111418)">Frequency, other wording</text>
  <rect x="196" y="164" width="100" height="30" fill="var(--oxblood, #8b1e2d)"/>
  <text x="304" y="184" font-size="15" fill="var(--text, #111418)">50%</text>
</svg>

The bars are four wordings of the same fifteen problems, not four groups of people, and the percentages are the share of answers that came out right. The paper reports 46% and 50% for its two frequency wordings without saying which wording got which. That's why this lesson counts in thousands, and why you should too.

### A second problem, with a gap for you

Now a non-medical one. The numbers are invented for the exercise. A spam filter is run on 1,000 incoming emails. Suppose 5 in every 100 emails are spam. The filter catches 90 of every 100 spam emails, and it wrongly flags 2 of every 100 legitimate ones. An email lands in your spam folder. How likely is it to be spam?

Do the first two steps with me, then finish it yourself before you look.

Of 1,000 emails, 5% are spam: 50. The other 950 are legitimate.

Of the 50 spam emails, the filter catches 90%: 45.

Now your step. How many of the 950 legitimate emails get flagged? And what share of the spam folder is spam? Write both down.

:::predict How many of the 950 get flagged, and what share of the spam folder is actually spam?
Of 950 legitimate emails, 2% are flagged: 19. So the spam folder holds 45 spam and 19 legitimate emails, 64 in all, and 45 of 64 is about 70%. A good filter, and still nearly a third of the folder is mail you wanted. Now compare the mammogram, and keep the changes apart, because three things differ and not one. The base rate went from 1% to 5%. The catch rate went from 80% to 90%. The false-alarm rate went from 9.6% to 2%. Run the mammogram's test at a 5% base rate and you get about 30 in 100 (50 with cancer of whom 40 test positive, 950 without of whom 91 do, so 40 of 131). Run this filter at a 1% base rate and you get about 31 in 100. Neither change on its own gets you anywhere near 70. It takes both, which is why you always have to ask for both.
:::

:::checkpoint Go back to the mammogram and double the base rate to 2%, leaving the test unchanged. Without recomputing, does the share of positives that are true go up or down?
Up. With 2%, there are 20 women with cancer instead of 10, so about 16 true positives instead of 8. The healthy group drops from 990 to 980, so the false positives drop very slightly, from about 95 to about 94. Both changes push the same way. (If you do recompute: 16 of 110, about 15%.) The general rule: the base rate sets how many true cases there are to find, and the answer moves with it.
:::

Two things to draw from this. First, whenever someone quotes a test's accuracy, ask for the base rate; without it the accuracy figure can't be turned into the probability you care about, and a person quoting accuracy alone may well not have noticed that either. Second, the 2 women in the first thousand who had cancer and tested negative are also real. On a rare condition, the negatives contain very few misses: 2 among 897 here. On a common one the same test leaves more, and the method is the same, run on the other pile.

:::callout This is education, not advice
This lesson uses a screening test and a criminal case because they are the best-documented examples of these errors. It doesn't tell you how to read your own test result or your own legal situation. The figures here come from a problem posed in 1982 and are used because the arithmetic they teach is timeless, not because they describe any current programme: real screening runs in populations whose base rates differ from this problem's, with tests whose own numbers differ from these, and results are read alongside other findings by people who know those numbers. The general question this lesson makes askable is what the base rate is in the population being tested. Only someone who knows that population can answer it.
:::

<!-- SPLIT SEAM: here, between the safety callout and the Sally Clark section. Confirmed by the Stage 4
     review, 2026-09-06; the depth and pedagogy reviewers put the seam in exactly the same place and
     for the same reason. Part A would be "a probability is a share of cases": the conjunction rule
     and Linda, base rates, the mammogram counted, the five steps, the formula as a shorthand, the
     spam filter with a gap. It ends on a complete, testable skill, and its practice items are 1, 2
     and 3 under the current ordering. Part B would be "how far should this evidence move you": the
     prosecutor's fallacy and Sally Clark, the likelihood ratio, absence of evidence, with practice
     items 4, 5 and 6. The dependency runs one way only. Part B's central move is stated as "these
     are the mammogram's two sentences again" and its ratio is built from the mammogram's 80 and 9.6,
     so Part B cannot precede Part A; Part A needs nothing from Part B. Part B's opening is already
     written: the lesson's first paragraph carries two arguments, and the second of them ("one in a
     million, so it wasn't an accident") is currently left hanging until the Clark section, so it is
     Part B's ready-made opening under the convention that forbids opening on a definition.
     Costs a split would have to pay, named so nobody discovers them halfway: (a) the roadmap in "A
     probability is a share of cases" promises three errors and Part A would deliver two, so it must
     be reworded; (b) the safety callout sits in Part A and covers the courtroom case in Part B, so
     it must be restated in both halves; (c) "Where the experts disagree" splits, its
     rational-versus-adapted half belonging to A and its Bayesian-foundations half to B; (d) the
     misconceptions list splits four to A and two to B. Per BACKLOG 7b: do not renumber in this pass. -->

:::callout A good place to stop
That's the counting: a probability is a share of a pile, a detail can only shrink the pile, and a
test result means nothing until you know how big the two piles were. If you're reading in one
sitting and want a break, take it here. The rest of the lesson is one courtroom argument and the
measure that would have caught it, and it will land better on a fresh head.
:::

## The prosecutor's fallacy: Sally Clark

The same swap has been made in a courtroom. This is what it cost there.

In November 1999 Sally Clark was convicted at Chester Crown Court, by a majority of ten to two, of murdering her two baby sons, Christopher, who died in 1996, and Harry, who died in 1998.[4][7] The medical evidence about what the post-mortem findings showed was disputed at trial.

Into that dispute came a number. The prosecution's expert, Professor Meadow, was asked about the chance of a sudden infant death (SIDS, or cot death) in a family like the Clarks. He agreed that a figure of 1 in 8,543 reflected the risk of a single SIDS death in such a family. He was then asked about two. His answer, quoted in the [Court of Appeal's judgment](https://caselaw.nationalarchives.gov.uk/ewca/crim/2003/1020): "Yes, you have to multiply 1 in 8,543 times 1 in 8,543 and I think it gives that in the penultimate paragraph. It points out that it's approximately a chance of 1 in 73 million."[4] He compared it to backing a 1 in 80 chance at the Grand National, Britain's best-known horse race, four years running.[4]

The "it" in that answer matters, and it is the fact most favourable to him. It's the report the 1 in 8,543 came from: the multiplication was printed there, and he was agreeing with it under questioning rather than producing it on the spot. That doesn't make the figure sound, and the court's criticism of it stands. It does tell you something about how a bad number travels. It was written down, cited, quoted, and reached a jury without anyone in the room stopping it.

:::predict The jury heard "approximately a chance of 1 in 73 million". What question does that number actually answer?
Not the one the jury had to answer, and it isn't even a valid figure for what it claims to be. There are two separate errors in it, and the second is the one that matters for every argument of this shape, not just this case. Both are set out below.
:::

### The first error: squaring

:::predict Meadow multiplied 1 in 8,543 by itself to get 1 in 73 million. What has to be true about the two deaths before that multiplication is allowed?
They have to be independent: the first death happening must tell you nothing about how likely the second one is. Two babies in one family share their genes, their house, their cot, their habits and their parents. If anything on that list raises the risk of a cot death, then a family that has had one is more likely than average to have a second, and multiplying the two rates gives a number far too small. Work the extreme case and you can feel the size of the error. Suppose cot deaths only ever happened in families carrying some unknown risk factor. Then the chance of a second death in a family that has already had one would be enormous, and 1 in 73 million wouldn't be wrong by a bit, it would be wrong by orders of magnitude.
:::

The Royal Statistical Society issued a [public statement](https://rss.org.uk/RSS/media/File-library/Membership/Sections/2020/Sally-Clark-RSS-statement-2001.pdf) about the case in October 2001. On the multiplication: "This approach is, in general, statistically invalid. It would only be valid if SIDS cases arose independently within families."[5] Multiplying two probabilities gives the probability of both events only when the events are independent, when one happening tells you nothing about the other. Suppose there are unknown factors that raise a particular family's risk. The RSS said there are "very strong a priori reasons" for supposing there are.[5] Then the second death is much more likely than the first, and the multiplication is wrong. The Society's verdict on the number itself: "The well-publicised figure of 1 in 73 million thus has no statistical basis."[5]

The Court of Appeal later agreed. The figure "grossly overstates the chance of two sudden deaths within the same family from unexplained but natural causes."[4]

:::checkpoint That's a real error. Now suppose it had been fixed, and the right figure for two natural deaths in such a family were 1 in a million. Would that be the chance she was innocent?
Still no, and the reason goes deeper than the arithmetic. Even a perfectly computed figure for "how likely are two natural deaths in a family like this" answers a question about innocent families. The jury had to answer a question about this family, given that two deaths had happened. Those are different questions, and no amount of care with the first will produce the second. That is the error the rest of this section is about.
:::

### The second error: the swap

The 73 million figure, even if it had been sound, answers this question: if a family like this is innocent, how likely is it that two babies die suddenly? That is the probability of the evidence given innocence.

The jury needed a different question: given that two babies died suddenly, how likely is it that this family is innocent? That is the probability of innocence given the evidence.

These are the mammogram's two sentences again, "positive given cancer" and "cancer given positive", now with lives on them. And the swap is invisible for the same reason: both sentences contain the same words, and in English "the chance of two cot deaths in an innocent family" and "the chance that a family with two cot deaths is innocent" sound like the same thing. The RSS statement names the swap: some press reports "stated that this was the chance that the deaths of Sally Clark's two children were accidental. This (mis-)interpretation is a serious error of logic known as the Prosecutor's Fallacy."[5]

Why is it an error and not just a rewording? Because the evidence has to be judged against every explanation, and this number judges it against one. The RSS put it in the sentence worth memorising from this lesson: "The jury needs to weigh up two competing explanations for the babies' deaths: SIDS or murder. Two deaths by SIDS or two murders are each quite unlikely, but one has apparently happened in this case. What matters is the relative likelihood of the deaths under each explanation, not just how unlikely they are under one explanation."[5]

Those were the two explanations before this jury, in a case the Crown had brought. They aren't the alternatives an infant death raises in general.

Read that again slowly. It's the whole of what went wrong. Two babies died; that's fixed. Something rare has happened whatever the truth is. Two murders in one family is also rare, and the jury was given no figure for that side at all. So the jury was left with one small probability and nothing to hold it against, when the only thing that could have told them anything was a comparison of two small probabilities. A number on its own can't be "very unlikely"; it can only be very unlikely compared with something.

The Court of Appeal put it plainly: "the 1:73 million figure is no help. It is merely a distraction."[4]

Think back to lesson 3. "If she's innocent, two cot deaths are extremely unlikely. Two cot deaths happened. So she's not innocent." That has the shape of modus tollens, and it feels valid. But the first premise is not "if innocent then no two deaths"; it's "if innocent then two deaths are rare," and rare things happen. Run it as a probability and it's the conditional read backwards, which is the same move as affirming the consequent: from "innocence makes this unlikely" to "this makes innocence unlikely." The deductive shape gives no licence for that step, and the probabilistic one gives it only after you've asked how likely the evidence is under the alternative.

### What happened to Sally Clark

Her first appeal was dismissed on 2 October 2000.[4] Records of microbiological tests done on Harry's blood, tissue and cerebrospinal fluid at post mortem, showing Staphylococcus aureus in several sites including the cerebrospinal fluid, were later found; they had been known to the pathologist and not disclosed.[4] The [Criminal Cases Review Commission](https://ccrc.gov.uk/decision/clark-sally) referred the case back to the Court of Appeal in 2002.[4][6] On 28 and 29 January 2003 the court heard the appeal, found the convictions unsafe, and quashed them; the Crown did not seek a retrial and she was released, having served three years.[4][7]

The statistics were not the ground on which the case was won; the undisclosed infection was. But in its written judgment the court went out of its way to say what it thought of the number. The evidence "should never have been before the jury in the way that it was", and had the point been fully argued, "we would, in all probability, have considered that the statistical evidence provided a quite distinct basis upon which the appeal had to be allowed", at paragraphs 177 and 180.[4] The court also said it suspected the Grand National comparison "may have had a major effect on their thinking."[4]

I've given the case in this much detail because both the error and its correction are on the public record, in the words of a court and of a learned society, rather than in a textbook's tidy example. The shape recurs wherever a single small probability is offered as a conclusion: "the odds of that being a coincidence are a million to one, so it wasn't." Every time you meet it, ask the RSS's question. Unlikely compared with what?

Sally Clark died in March 2007, at 42.[7]

:::checkpoint A forensic expert says a fibre found at a scene matches the suspect's coat, and that only 1 coat in 1,000 in the country has this fibre. A juror says: "so there's a 1 in 1,000 chance he's innocent." What did the juror swap, and what's the right first question?
The juror took "1 in 1,000 coats match, if he's innocent" (the probability of the evidence given innocence) and read it as "1 in 1,000 that he's innocent, given the match." The right first question is how likely the evidence is under the other explanation, and then how many candidates there are: if a million coats are in play, about a thousand match, and he's one of a thousand on the fibre alone. The fibre narrows the field a great deal; it doesn't settle it.
:::

## How much should the evidence move you? The likelihood ratio

You've now seen the comparison the jury needed twice: "how likely is this evidence if the claim is true?" against "how likely is this evidence if it's false?" That comparison has a name, the likelihood ratio, and it's the honest measure of how much a piece of evidence should move you.[8][9]

Go back to the mammogram. A positive result happens 80 times in 100 when there's cancer and 9.6 times in 100 when there isn't. The ratio is 80 to 9.6, a bit over 8. A positive test is eight times more likely with cancer than without.

Be careful what the eight multiplies. What the ratio multiplies is the odds, not the share. Before the test the odds were 10 with cancer against 990 without. Multiply the 10 by 8.3 and they become about 83 against 990, which is the same ratio as the 8 against 95 you counted, and 8 in 103 as a share. When the starting probability is small, multiplying it directly is a decent shortcut: 1% times 8.3 is 8.3%, near enough to 7.8%. When it isn't small, the shortcut breaks. Try it on the 2% checkpoint you did earlier: the shortcut says 17 in 100, and the count gave 15. Try it on a 20% base rate and the shortcut says 166 in 100, which isn't a probability at all. The reason you don't have to remember any of this is that the count does the conversion for you.

So: the likelihood ratio is what the evidence does; the base rate is where you start; the count is what combines them. Keep the three apart in your head and none of the errors in this lesson can get you.

:::predict Go back to the spam filter. It catches 90 of every 100 spam emails and wrongly flags 2 of every 100 legitimate ones. What's the likelihood ratio for "this email got flagged", and what does that number tell you?
90 to 2, which is 45. A flag is forty-five times more likely on a spam email than on a legitimate one, so it's strong evidence. Now notice what it doesn't tell you: whether the email sitting in your spam folder is spam. For that you need the base rate as well, and with only 5 emails in 100 being spam the answer came out at about 70 in 100, not 45 to 1. The ratio says how far the evidence moves you. The base rate says where you were standing when it moved you.
:::

Now you can say precisely what was missing in the Clark trial. The jury heard one side of the ratio (how unlikely the deaths were under innocence) and none of the other (how unlikely they were under guilt). A ratio with one term isn't a ratio. It's one small number with nothing to hold it against, and a small number on its own is persuasive in a way it hasn't earned.

And you can say why the likelihood ratio is a good measure of inductive strength, which is what lesson 5 left as a matter of degree. An argument from evidence is strong when the evidence is much more likely if the conclusion is true than if it's false: ratio well above 1. It's weak when the evidence is about as likely either way: ratio near 1. It's evidence against when the ratio is below 1. And it's defeasible in exactly lesson 5's sense: a new fact can change how likely the old evidence is under each explanation, and the ratio moves.

### Absence of evidence, twice

Watch the measure earn its keep on an argument people wave away with a slogan. The example is invented; the shape is everywhere.

Argument, version one: "There's no evidence this drug causes liver damage. So it probably doesn't." The drug has just been developed and no trial has been run.

Argument, version two: same words, but now three large trials with tens of thousands of participants have been completed, each designed to catch liver damage, and none found it.

The slogan says "absence of evidence isn't evidence of absence" and dismisses both. The likelihood ratio says something more useful. Ask: how likely is "no evidence of harm" if the drug is harmful, and how likely is it if the drug is safe?

In version one, nobody has looked. "No evidence of harm" is nearly certain whether the drug is harmful or not, so the ratio is about 1, and the argument is weak. The slogan happens to be right here, for a reason it doesn't give.

:::predict Same words, but now three large trials have looked and found nothing. What happens to the ratio, and is the argument strong or weak?
The trials would very probably have found harm if it existed. "No evidence of harm" is now very likely if the drug is safe and quite unlikely if it's harmful, so the ratio is large and the argument is strong. Absence of evidence is evidence of absence exactly when the evidence would have been expected. Notice that not one word of the argument changed. What changed is how hard anyone looked, and that is where all the strength lives.
:::

Oaksford and Hahn made this case in 2004, arguing that the textbook "argument from ignorance" is often a legitimate inductive argument that is merely weak rather than fallacious.[10] How thorough the search was is this lesson's way of putting what makes the difference; the paper reports an experiment on the variables that move it. Hahn and Oaksford extended the same treatment to circular arguments and slippery slopes in 2007: the "fallacy" names pick out forms that can be strong or weak by content, and the likelihood ratio says which.[8] Lesson 8 will give those forms their names; you already own the test.

:::checkpoint A friend says "I've never seen a ghost, so they don't exist." Is that strong or weak, by the likelihood ratio, and what one question decides it?
The question is: how likely is "I've never seen one" if ghosts do exist, compared with if they don't? If the claim is that ghosts are rarely seen and appear to few people, not seeing one is about equally likely either way, and the argument is weak. If the claim is that ghosts appear nightly to everyone, not seeing one is strong evidence against that claim. The strength depends on what the claim predicts you'd have seen, which is the same test as the drug trials. (Whether ghosts exist is not a question this course takes a side on; the argument's strength is.)
:::

## Where the experts disagree

Two things in this lesson are argued over by serious people, and you should know the shape of each argument rather than just my line.

The first is about people. Kahneman and Tversky read Linda and the physicians as evidence that judgement runs on shortcuts, resemblance and vividness among them, which serve well enough most of the time and fail in ways you can predict in advance. Their evidence is in this lesson already. Violations ran at 88% across the direct tests with "no effect of statistical sophistication",[1] so this is not ignorance of the rule. The betting version, which puts money on the extension rather than on the word, still left 56% violating it,[1] and the best-performing group in the whole paper still violated it 36% of the time.[1] A shortcut that survives money and training is, on their reading, a shortcut. Gigerenzer reads the same data the other way: people are well adapted to information in the form they evolved to meet, which is counts of events, and they fail on percentages because percentages are a recent and unnatural format. His evidence is that frequency formats raise the Bayesian answers from 16% and 28% to 46% and 50%,[3] and Hertwig and Gigerenzer's is that "probable" in the Linda problem is read as "plausible."[2] Both camps agree on the numbers. They disagree about what the numbers say about us.

:::checkpoint Both camps have the same numbers. What result would count for Gigerenzer, and what result would count against him?
For him: the counting version keeps its advantage even when it's made just as fiddly to read as the percentage version, which would show the gain comes from the format matching how people count rather than from easier wording. Against him: the advantage disappears once you match the two versions for how hard they are to parse, or people who learn on counts stay just as wrong when the same problem comes back in percentages. The symmetric test the other camp would name is whether the errors persist, and at what rate, when problems are put in the formats people actually meet outside a laboratory. What you can't do is settle it with more of the same data, because both camps already accept the same data.
:::

For this course, the practical upshot is the same either way.

The second is about the foundations of the method. Notice first how little of this lesson is at stake in it. Counting the women in a screened thousand is a share of a real pile, and someone who rejects the whole Bayesian picture will do that count the same way. What is contested is the step after it: treating a degree of belief as a probability, in arguments where nobody hands you a pile to count.

The Bayesian view, the one this lesson has used, says the strength of an argument is how much its evidence should shift your probability, with the likelihood ratio doing the work. The main objection is the priors problem. In the mammogram you were handed the starting probability. In most real arguments nobody hands it to you, and two reasonable people start in different places. Is there an objective right place to start, or is the starting point always a judgement? That's a live question in philosophy, and the Stanford Encyclopedia's "Inductive Logic" entry sets out the framework in which it's argued.[9] The same entry reports that the older programme of fixing degrees of support from the language alone, which is Carnap's, is now widely regarded as unsuccessful.[9]

A third position denies the premises of both. On Popper's account there is no inductive logic at all: evidence never raises the probability of a theory, it only fails to refute it, and what looks like support is survival of tests. Lesson 5's closing note has that argument in full. If it's right, everything in this lesson is a good way to manage your bets and not a logic of evidence, which is a distinction worth keeping in view while you use the tool.

The course's line: Bayes by counting works whenever you can get a base rate, the likelihood ratio is a good measure of how far evidence should move you even when you can't, and where priors come from is left open, because it's open.

## What people get wrong

:::checkpoint Before you read the list: name the three errors this lesson has covered, and for each one, the single question that catches it.
Conjunction: "of every 100 cases like this, how many?" Base rate: "how common is this in the group being tested?" The prosecutor's fallacy: "unlikely compared with what?" If you got the three errors but not the three questions, that's the half worth rereading, because in real life you meet the question before you meet the name of the error.
:::

**"More detail makes it more likely."** It makes it a better story and a smaller pile. The conjunction rule has no exceptions. When a forecast, a diagnosis, or a theory gets more specific, its probability can only fall, and if it feels like it rose, that's resemblance talking. Count.

**"The test is 80% accurate, so a positive means 80% likely."** That 80% is the probability of a positive given the condition. The probability of the condition given a positive depends on the base rate as much as on the test, and on a rare condition it can be under 10%. Ask for the base rate before you believe any accuracy figure, and count in thousands.

**"One in 73 million chance of two cot deaths means one in 73 million chance she's innocent."** The prosecutor's fallacy. The first is the probability of the evidence given innocence; the second is the probability of innocence given the evidence; and getting from one to the other needs the probability of the evidence under the other explanation. The RSS's question again: unlikely compared with what?

**"Absence of evidence is never evidence of absence."** It is, when the evidence would have been found if it existed. The likelihood ratio decides, and it depends entirely on how hard anyone looked.

**"Bayes is a formula."** It's a count. The formula is a shorthand for dividing one pile by another. Put the same problem to people in counts rather than percentages and the share getting it right rises from 16 and 28 in 100 to 46 and 50, with no teaching at all.[3] If you can build the 1,000-person table, you know Bayes' rule.

**"Multiplying two probabilities gives the probability of both."** Only if they're independent. Two events that share a cause (two deaths in one family, two failures in one machine, two late trains on one line) are not, and squaring the single-event rate can be off by orders of magnitude, in the direction that makes the coincidence look impossible.

## Practice

Work these on paper, in natural frequencies, before the quiz. Every number below is invented for the exercise unless it cites a source.

1. A condition affects 2 people in every 1,000. A screening test picks it up in 90 of every 100 people who have it and wrongly flags 5 of every 100 who don't. Someone tests positive. What share of positive results are true? (Step 1 of the count is yours: pick the population.)

2. A weather presenter says "there's a good chance of a storm tomorrow, and an even better chance of a storm with the river flooding, since the ground is already saturated." Rewrite her claim so it obeys the conjunction rule, and say what the saturated ground can legitimately raise.

3. An airport scanner flags a bag containing a banned item 99 times in 100, and flags a clean bag 1 time in 100. Suppose 1 bag in 10,000 contains a banned item. A bag is flagged; what share of flagged bags actually contain a banned item? Then say, in a sentence, why the scanner is still worth running.

4. A witness says a getaway car was a red hatchback, and the defendant owns one. Suppose 1 in 50 cars in the town is a red hatchback. The prosecutor says: "there's only a 1 in 50 chance an innocent man would own that car." Write, in two sentences, the comparison the jury should make instead, and what else they'd need to know to make it.

5. "The lie detector is 90% accurate, and he failed it. So he's probably lying." Say what one piece of information you need before you can say anything about "probably". Then supply a plausible value for it yourself, count 1,000 people, and say what share of the people who fail are actually lying. Say what value you chose and why.

6. Two people say the same sentence about a batch of components: "nobody has reported a fault, so the batch is fine." The first works in a warehouse where the boxes are stacked unopened and a customer has no way to report anything. The second works in a plant where every batch is sampled and tested, and the test catches about 9 faults in every 10. For each of them, say how likely "no fault reported" is if the batch is sound, and how likely it is if the batch is faulty. Then say which argument is strong, and put the ratio into words.

:::checkpoint Check your six answers. Open this only when all six are written down.
1. Start with 10,000, because 2 in 1,000 would give you fractional people. Of 10,000, 20 have it and 18 of those test positive. 9,980 don't have it and 499 of those test positive. So 517 test positive and 18 of them have it: about 3.5 in 100.

2. "Storm" is at least as probable as "storm and flood". The saturated ground raises the chance of a flood given a storm. It can't lift the pair above the storm on its own.

3. Start with 1,000,000. Of those, 100 hold a banned item and 99 get flagged. 999,900 are clean and 9,999 get flagged. So 10,098 bags are flagged and 99 of them hold something: about 1 in 100. The scanner is still worth running, because it cuts the pile you have to open by hand from a million to ten thousand, and a 1 in 100 hit rate beats a 1 in 10,000 one.

4. How likely is it that he owns a red hatchback if he's guilty, against how likely if he's innocent, which is 1 in 50? And how many red hatchbacks are in the town, since on this evidence alone he's one of that many? The rest of the case has to do the rest.

5. The base rate: how many of the people who take this test are lying? Suppose 1 in 100. Of 1,000 tested, 10 are lying and 990 are not; the test fails 9 of the 10 and, at 90% accurate, about 99 of the 990. So 108 people fail and 9 of them are lying, about 8 in 100. Ninety per cent of ten per cent is still a lot of honest people. Change the base rate and the answer changes completely, which is why the argument as stated says nothing at all.

6. For the first, "no fault reported" is close to certain either way, because nobody looked. The ratio is about 1 and the argument moves nothing. For the second, "no fault reported" is close to certain if the batch is sound and happens only about 1 time in 10 if it's faulty, so the ratio is about 10 to 1 and the argument is strong. Same sentence, same premise, and the whole difference is how hard anyone looked.
:::

:::exercise On paper, with one number from this week's news
Find one number in this week's news that is a probability, a rate, or an "X% accurate" claim. Write down three things: (1) what count it's a share of (a share of what pile?); (2) what base rate it's silent about, if any; (3) if it's being used as evidence for a claim, what the likelihood ratio would need, that is, how likely the number would be if the claim were false. Add the page to your argument folder. If you can't find the base rate anywhere in the article, note that too; a missing base rate is one of the standard ways a true number ends up supporting a false conclusion.
:::

Then, before the quiz, close this page and write down from memory: the conjunction rule in one sentence; the five steps of a natural-frequency count and the three checks on your answer; the mammogram count, 1,000 women and then the four numbers; the two errors in the Clark figure and which of them would still be an error if the arithmetic had been right; what the likelihood ratio compares; when absence of evidence is evidence of absence; and the six steps of the check, of which this lesson has just filled in step 4. Check, then reread only what you missed.

## Connections

This lesson finishes step 4 of the check for inductive arguments. Lesson 5 said a strong argument makes its conclusion probable; now "probable" is a share of cases you can count, and "how strong" is a likelihood ratio you can estimate. Three earlier ideas came back in new clothes: belief bias from lesson 2 is why Linda works; affirming the consequent from lesson 3 is the deductive cousin of the prosecutor's fallacy, since both run a conditional backwards; and defeasibility from lesson 5 is what happens when new evidence changes a likelihood.

Lesson 7 turns to reconstruction: putting someone else's argument in its strongest form before you test it, and the likelihood ratio will be one way to say how much a premise supports a conclusion. Lesson 8 gives names to argument from ignorance, slippery slope, and circularity, and you'll find you already have the test that decides whether each is strong. Lesson 9 takes base rates into the news, where "doubles the risk" hides the pile it's a share of.

Two other Foval courses will cover this material more fully: Statistics for Citizens (sampling, risk, and what a rate means in a population) and Probability and Decisions (expected value, and what to do once you have a probability). This lesson taught only as much as you need to evaluate an argument.

## Go deeper

- Gigerenzer, Gaissmaier, Kurz-Milcke, Schwartz & Woloshin, ["Helping Doctors and Patients Make Sense of Health Statistics"](https://kops.uni-konstanz.de/server/api/core/bitstreams/faa74b7c-5f6e-4abe-b6f9-d980100c9c1f/content) (*Psychological Science in the Public Interest*, 2007): natural frequencies applied to screening, and what happens when a risk figure is reported the other way round. Free full text, and the source lesson 9 works from.
- Gigerenzer & Hoffrage, "How to improve Bayesian reasoning without instruction" (*Psychological Review*, 1995): the paper behind the 16% to 50% result; read the introduction and Study 1 to see the frequency wording they used.
- Tversky & Kahneman, "Extensional versus intuitive reasoning" (*Psychological Review*, 1983): Linda and her many variants, with the authors' own attempts to make the error go away; pair it with Hertwig & Gigerenzer (1999) for the reply.
- The primary documents on the Clark case, both free and both short: the [Royal Statistical Society's statement](https://rss.org.uk/RSS/media/File-library/Membership/Sections/2020/Sally-Clark-RSS-statement-2001.pdf) of 23 October 2001, and [R v Clark [2003] EWCA Crim 1020](https://caselaw.nationalarchives.gov.uk/ewca/crim/2003/1020) at paragraphs 96 to 108 and 177 to 181, where the court sets out the number and says what it thought of it. The court's own account is clearer than most textbook summaries.
- Stanford Encyclopedia of Philosophy, "Inductive Logic": the early sections for the likelihood-ratio framework with a worked disease-test example, and the later ones for the priors debate if you want to see what's unsettled.

## Sources

Six of the ten entries below are journal articles behind paywalls or without a stable free address on file, so no link is given for them. Where a free public document exists, it is linked in the body and in Go deeper.

1. Tversky, A. & Kahneman, D., "Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment", *Psychological Review* 90(4), 1983, 293 to 315. The Linda description; the direct test on 142 UBC undergraduates in which 85% rated "bank teller and feminist" more probable than "bank teller"; 88% violations in direct tests overall with "no effect of statistical sophistication"; the betting version at 56% (n = 60); the doctoral-level rating group at 36%.
2. Hertwig, R. & Gigerenzer, G., "The 'conjunction fallacy' revisited: How intelligent inferences look like reasoning errors", *Journal of Behavioral Decision Making* 12(4), 1999, 275 to 305. The objection that "probable" is read non-mathematically in the Linda problem and that frequency phrasing reduces the error. (Abstract read; the full text has not been.)
3. Gigerenzer, G. & Hoffrage, U., "How to improve Bayesian reasoning without instruction: Frequency formats", *Psychological Review* 102(4), 1995, 684 to 704. The mammography problem, adapted by the authors from a problem Eddy put to physicians in 1982 (base rate 1%, sensitivity 80%, false-positive rate 9.6%, posterior 7.8%); Eddy's result that 95 of 100 physicians estimated 70 to 80%; Study 1 rates of Bayesian answers of 16% and 28% in probability formats against 46% and 50% in the two frequency formats, across fifteen problems; the frequency wording quoted.
4. *R v Clark* [2003] EWCA Crim 1020 (Court of Appeal, Criminal Division, Kay LJ, 11 April 2003), read from the National Archives Find Case Law copy. Para 1: conviction on 9 November 1999 at Chester by a majority of 10 to 2; first appeal dismissed 2 October 2000. Para 96: the 1 in 8,543 figure and Meadow's multiplication to 1 in 73 million. Para 99: the Grand National comparison. Para 108: "no help ... merely a distraction". Paras 2, 112 to 113: the undisclosed microbiology showing Staphylococcus aureus, known to Dr Williams. Paras 4 to 5: the CCRC referral and the hearing of 28 and 29 January 2003 at which the convictions were found unsafe. Paras 134 to 136: the verdicts quashed. Paras 177, 178, 180: the statistical evidence "should never have been before the jury", the figure "grossly overstates" the chance, the Grand National comparison "may have had a major effect on their thinking", and the statistics would "in all probability" have been a distinct ground of appeal.
5. Royal Statistical Society, "Royal Statistical Society concerned by issues raised in Sally Clark case", news release, 23 October 2001. The squaring "statistically invalid ... only valid if SIDS cases arose independently within families"; "there are very strong a priori reasons for supposing that the assumption will be false"; "The well-publicised figure of 1 in 73 million thus has no statistical basis"; the press misreading named as the Prosecutor's Fallacy; "What matters is the relative likelihood of the deaths under each explanation, not just how unlikely they are under one explanation."
6. Criminal Cases Review Commission, case summary "Clark, Sally" (ccrc.gov.uk). Conviction November 1999 and a sentence of life imprisonment; application November 2001; fresh evidence of an overwhelming staphylococcal infection in Harry; referral 2002; conviction quashed January 2003.
7. Dyer, C., "Falsely convicted Sally Clark dies suddenly", *BMJ* 334(7594), 24 March 2007, read on PubMed Central. Christopher died in 1996 and Harry in 1998; three years in prison including the lost first appeal; cleared after the undisclosed Staphylococcus aureus results came to light; died at 42.
8. Hahn, U. & Oaksford, M., "The rationality of informal argumentation: A Bayesian approach to reasoning fallacies", *Psychological Review* 114(3), 2007, 704 to 732. The likelihood ratio as the measure of argument strength; argument from ignorance, circularity, and slippery slope as forms that can be strong or weak by content. (Abstract read; the full text has not been.)
9. Stanford Encyclopedia of Philosophy, "Inductive Logic" (rev. February 2025). Inductive support as degree; the Bayesian framework with priors, likelihoods, and likelihood ratios, with a worked disease-test example; the report that Carnap's programme is now generally regarded as unsuccessful; the priors problem.
10. Oaksford, M. & Hahn, U., "A Bayesian approach to the argument from ignorance", *Canadian Journal of Experimental Psychology* 58(2), 2004, 75 to 85. Some arguments from ignorance parallel accepted inductive reasoning; viewed probabilistically they are legitimate, and textbook cases are weak rather than fallacious; an experiment shows variables that affect their strength. (Abstract read; the full text has not been.)
