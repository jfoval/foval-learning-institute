---
title: Final test
pass_mark: 0.7
minutes: 80
quiz:
  # --- Designs, and what each can show (L1) ---
  - q: >-
      A team studying a rare bone cancer finds 150 patients through specialist clinics, pairs each
      with a neighbour of the same age and sex, and asks all 300 how much milk they drank as
      teenagers. A reader says the team should have run a cohort instead. Going by lesson 1's table,
      what does this design offer, and what weakness does it add?
    options:
      - Evidence on cause, since pairing each patient with a neighbour removes most of the bias
      - Probably little, since a cohort could reach the same disease with a sample this size
      - A quick look at a rare disease, though the diet is recalled after the diagnosis
      - A larger sample than a cohort, though memories of diet are as good in either design
    answer: 2
    explain: >-
      A case-control study starts from people who already have the disease, which is why it can
      reach a rare one quickly, where a cohort would have to follow a great many people to see a few
      cases. It keeps the cohort's problem, that people who eat differently also live differently,
      and lesson 1's table adds one of its own: the past is remembered after the diagnosis, and
      someone with a new cancer may remember their eating differently. That second point is the
      course's reasoning, not a study's finding. Pairing on age and sex deals with age and sex, not
      with memory or other habits, and the design's gain is speed on a rare disease, not size. (The
      study is invented.)
  - q: >-
      A cohort of 90,000 adults, adjusted for forty measured factors, finds that people eating the
      most leafy greens had a risk ratio for death of 0.75, with a 95% interval of 0.70 to 0.80. A
      reader says an interval that tight leaves little room for doubt. What does it rule out?
    options:
      - Mostly chance, though it can't rule out confounding by habits that nobody measured
      - Confounding, since forty adjustments and a narrow interval together will remove it
      - Very little, since cohorts of diets are too unreliable to give intervals much use
      - Chance only in part, as an interval of 0.70 to 0.80 still leaves real room for a fluke
    answer: 0
    explain: >-
      That's what beta-carotene taught: a ratio of 0.69 with an interval nowhere near 1, measured in
      blood, and then trials of the pills found harm. A narrow interval says the estimate isn't a
      fluke of sampling, so "chance only in part" undersells it; it says nothing about habits the
      study didn't measure, and the defenders of
      cohort research concede that the assumption of no unmeasured confounding "cannot be
      empirically verified in observational epidemiology". So neither forty adjustments nor
      precision removes confounding. But calling the interval useless goes too far the other way:
      in Schwingshackl's 97 matched pairs, cohorts and trials came out close on average. (The cohort
      is invented.)
  - q: >-
      Twelve volunteers live on a research ward. Every one of them eats a high-nut diet for three
      weeks and then a nut-free diet with the same calories for three weeks, always in that order,
      and their LDL cholesterol is measured throughout. What does the design give the study, and
      what doesn't it give?
    options:
      - It gives evidence on heart attacks, since the food was controlled better than in any trial
      - Very little, since twelve people on a ward are probably too few to show much about cholesterol
      - It gives a randomised comparison, since each person was their own comparison group
      - Close control of the food, but not of anything else that changed between the two spells
    answer: 3
    explain: >-
      Lesson 1 made both points about the ketogenic ward study: it wasn't randomised, because
      everybody ate the same diets in the same order, so a ward buys control of the food, not of
      everything else. Eating both diets makes each person their own comparison, but without a
      random order that isn't a randomised comparison. A ward answers a short question almost
      exactly and a long one not at all, so it can't reach heart attacks. And a small ward study can
      answer a short, tightly measured question; the ketogenic study had seventeen men. (The study
      is invented.)

  # --- Measuring what people ate (L2) ---
  - q: >-
      A friend fills in a food questionnaire for a research study and her answers total 1,700
      calories a day. She has read that questionnaires under-report energy by 28 percent on average,
      so she divides by 0.72 and says her true intake is about 2,360. What's the problem?
    options:
      - She should multiply by 0.72 instead, since questionnaires tend to over-report energy
      - The 28 percent is an average, and how much people under-report varies a great deal
      - Nothing much, since a correction built from pooled biomarker studies suits most people
      - The 28 percent is for recalls, and a questionnaire under-reports by about 15 percent
    answer: 1
    explain: >-
      The 28 percent is the pooled average for a questionnaire, and 15 percent is the figure for a
      single recall, so the option about recalls swaps them. OPEN showed how unevenly it falls: on
      the questionnaire about a third of the men under-reported both energy and protein, and most
      didn't. Calibration equations improve a study's numbers on average, which lesson 2 called "not
      a way of correcting yours", so a pooled correction doesn't suit any one person. And every
      instrument tested under-reported energy on average, so multiplying would push her figure the
      wrong way.
  - q: >-
      A cohort finds a risk ratio of 1.2 for a bowel disease in the people who report eating the
      most of one food. Suppose the only error is random: people misreport that food by chance,
      unrelated to who they are or to anything else the study measures. A critic says the error
      means the real link could be zero. What does lesson 2's reasoning suggest?
    options:
      - Noise like this tends to pull a ratio towards 1, so the real link is more likely larger
      - The critic is probably right, since random noise tends to create links where none exist
      - The error cancels out in a big cohort, so 1.2 is probably close to the true figure
      - Nothing either way, since only a biomarker study could show which way the error ran
    answer: 0
    explain: >-
      Lesson 2's worked case took a true ratio of 2 down to about 1.3 by putting people in the wrong
      box at random. In that simple case, random misclassification of the food hides part of a real
      link rather than inventing one, so the critic has the direction backwards. The shrinking came
      from the mixing itself, not from small numbers, so a bigger cohort doesn't undo it. And the
      direction follows from the kind of error, which the question fixes. Change that premise to
      error that follows body weight, say, and the critic's worry becomes a live one.

  # --- Energy balance and the dispute inside it (L3) ---
  - q: >-
      A columnist writes: "Obesity is simple. Anyone who gains weight took in more energy than they
      burned, so the cause is overeating, and the cure is to eat less and move more." How does that
      stand against lesson 3?
    options:
      - It's sound, since energy balance is a law of physics and so it settles the cause
      - It's wrong from the start, since insulin, not intake, decides whether fat is stored
      - Its first claim is the energy account, which says intake exceeded output, not why
      - It's roughly right, though as exercise adds its full cost to the day, moving is the cure
    answer: 2
    explain: >-
      Energy balance is bookkeeping, which Hall and colleagues call "a law of physics that is
      agnostic as to obesity mechanisms": it tells you intake exceeded expenditure, not why. Hall
      and Guo name this very misreading, that imbalance means obesity "is caused by gluttony and
      sloth and can be treated by simply advising people to eat less and move more." So the account
      doesn't settle the cause. Insulin deciding in place of intake is the "calories don't matter"
      caricature, which neither model's authors hold. And on average only about 72 percent of the
      extra calories burned in activity reached the day's total in Careau's data.
  - q: >-
      A headline says: "New feeding trial shows low-carb diets burn more calories, settling the
      obesity debate." Whatever the new trial found, how does lesson 3 classify the underlying
      question, and what does it say would settle it?
    options:
      - Leaning to the carbohydrate-insulin model, and one more trial like Ebbeling's would settle it
      - Contested; long feeding trials, plans registered and followed, and chamber measures
      - Settled against that model, as people ate less on low-fat in Hall's 2021 ward trial
      - A value question, as both models accept the energy account and differ only in emphasis
    answer: 1
    explain: >-
      Lesson 3 calls it "a contested empirical question, not settled in either direction".
      Ebbeling's result was disputed by a reanalysis that found no significant difference in carbon
      dioxide, so the calorie gap rested on the assumed RQ, and Hall's 2021 trial ran two weeks per
      diet, the length the CIM's authors say is too short, so neither trial settles it for its side.
      That's also why "leaning" to one side overreads it, and why one more trial of the same kind
      wouldn't settle it. It isn't a value question: the two models predict different things that a
      trial could test. What would settle it, in the research file's synthesis, is long, tightly
      controlled feeding trials with analysis plans registered in advance and followed, and
      expenditure measured in a sealed chamber as well as by doubly labelled water.

  # --- Diet trials and what an average says (L4) ---
  - q: >-
      In an invented six-year trial, adults with type 2 diabetes get either an intensive weight-loss
      programme or occasional group education. By the end the programme group is 7 percent lighter
      than at the start and the education group 4 percent lighter, and their rates of heart attack
      don't differ. A headline says: "Losing weight doesn't protect the heart." How does it stand?
    options:
      - It's fair, since a randomised trial with no difference in events shows weight loss doesn't help
      - It undersells the trial, since the programme group probably regained its weight, hiding a real benefit
      - It can't be judged, since no trial of weight loss can count heart attacks within six years
      - It overreaches; the trial compared a bigger loss with a smaller one, in these people, for six years
    answer: 3
    explain: >-
      That's Look AHEAD's shape. Its comparison group lost weight too, 3.5 percent against 6.0 by
      the end, so its null result for events was a finding about that gap, over that time, in people
      with type 2 diabetes. Reading it as "weight loss doesn't help" claims more than the design
      allows. Nothing in the question says the programme group regained, so the option that assumes
      it adds a fact. And Look AHEAD counted cardiovascular events over a median of 9.6 years, so a
      trial can count them; six years is a shorter window, not an impossible one.
  - q: >-
      Two columnists write about weight. One: "Food environments shape what people eat, so obesity
      is society's responsibility." The other: "People choose what they eat, so weight is a personal
      responsibility." How does this course sort the two sentences?
    options:
      - Each joins an empirical claim to a value judgement about responsibility that evidence can't settle
      - Both are value judgements, though the first sits closer to what WHO's fact sheet reports
      - The first is established and the second a value judgement, since WHO's own fact sheet backs the first
      - The second is established and the first a value judgement, as weight tracked adherence in trials
    answer: 0
    explain: >-
      Lesson 4 called WHO's sentence that obesity is "a societal rather than an individual
      responsibility" a value judgement by WHO, not a finding. The ground WHO gave for it, that
      "Dietary and physical activity patterns are largely the result of environmental and societal
      conditions that greatly constrain personal choice", is a claim about the world that evidence
      could test; sorting it that way is this course's reading. Each columnist joins a claim of that
      kind to a verdict on responsibility, so neither sentence is wholly established and neither is
      only a value judgement, and no study can settle who ought to bear responsibility. WHO stating
      a position doesn't make it a finding, and Dansinger's link between adherence and weight was
      self-reported and observational, and says nothing about responsibility either. (The
      columnists are invented.)

  # --- The numbers behind the advice (L5) ---
  - q: >-
      A supplement label gives 25 mg of a mineral a day. For adults its RDA is 11 mg and its
      Tolerable Upper Intake Level is 40 mg. A buyer reasons: "The UL is the most that's safe, so
      the nearer I get to it, the more good it does." What's the fair reading of the two numbers?
    options:
      - He's right, since the UL is set where extra benefit peaks, just before harm begins
      - He's probably right, since the UL is roughly what adults need and the RDA is only a minimum
      - Partly right, as benefit keeps rising towards the UL, though the last few mg add very little
      - Between the RDA and the UL both risks are near zero, and the UL isn't a goal to approach
    answer: 3
    explain: >-
      The National Academies: "At intakes between the RDA and the Tolerable Upper Intake Level (UL),
      the risks of inadequacy and of excess are both close to zero. At intakes above the UL, the
      risk of adverse effects may increase." The UL is about harm, not need: a line past which harm
      becomes possible, not a point that benefit climbs towards, in part or in full, and not what
      adults need. Whether the buyer is short of the mineral at all is something neither number can
      tell him, which was lesson 5's point about the RDA. (The label is invented, and the item
      doesn't name the mineral.)
  - q: >-
      A magazine for readers over 60 says: "Science now shows the protein RDA of 0.8 g per kg is too
      low for older people." Going by lesson 5, how should that claim be graded?
    options:
      - Partly true, as the RDA suits younger adults and a higher need after 65 is now firmly agreed
      - False, since the RDA is already set two standard deviations above the average need
      - Contested; it rests on a newer way of measuring need and on an expert group's position
      - Probably settled, as the 2025-2030 US guidelines set a goal of 1.2 to 1.6 for adults
    answer: 2
    explain: >-
      The case for more rests on the IAAO estimates, from the method's own developers and from small
      studies (twelve women and six men for older adults), and on PROT-AGE, an expert position paper
      rather than a graded systematic review. The course found no primary statement from the other
      side answering the IAAO estimates, and two lines pointing one way isn't settlement, so "now
      agreed" goes too far. The same IAAO estimates put young adults at 1.2 too, so the dispute
      isn't only about age. The RDA's
      built-in margin doesn't answer the claim, because the dispute is over the requirement itself.
      A guideline's goal isn't evidence about the requirement. And for anyone with kidney disease,
      KDIGO's advice runs the other way, which is the callout's territory.

  # --- Fat and the heart (L6) ---
  - q: >-
      Suppose a new review finds, at moderate certainty, 15 percent fewer combined heart attacks and
      strokes when people cut saturated fat, and little or no effect on deaths. A headline reads:
      "Cutting saturated fat doesn't help your heart, review finds." What happened on the way?
    options:
      - It kept the finding about deaths and dropped the one about fewer heart attacks and strokes
      - Fair enough, since whether cutting saturated fat helps the heart is still contested
      - It undersold the review, since fewer events at moderate certainty prove lives are saved
      - Little of note, since moderate certainty means the fewer events were probably down to chance
    answer: 0
    explain: >-
      This mirrors Cochrane's 2020 review: 17 percent fewer combined cardiovascular events at
      moderate certainty, and little or no effect on deaths. The headline kept half. Fewer heart
      attacks and strokes are cardiovascular outcomes whether or not deaths fall, and moderate is a
      GRADE rating of how certain the estimate is, not a sign it's chance. That the wider question
      is contested doesn't make a headline fair to one review's findings: "doesn't help" is a
      verdict, and the review didn't reach it. The opposite reading
      overreaches too: that cutting saturated fat is proven to save lives is a misconception lesson
      6 named, since no pooled estimate for death showed it. (The review is invented.)
  - q: >-
      A blogger who backs the saturated fat limit writes: "The sceptics' whole case is that LDL
      cholesterol has nothing to do with heart disease." Would the leading dissent in lesson 6
      recognise that as its position?
    options:
      - Yes, since its case rests on denying that LDL plays any part in causing heart disease
      - No; that's Ravnskov's small group, and Astrup's accepts the rise but argues over particles
      - Partly, since it accepts LDL can harm but denies that saturated fat raises LDL in the first place
      - No, since nobody in the dispute has ever questioned that LDL causes atherosclerosis
    answer: 1
    explain: >-
      Astrup's group, the leading dissent, accepts that saturated fats "increase low-density
      lipoprotein (LDL) cholesterol", and argues that the rise comes mostly in larger particles,
      "much less strongly related to CVD risk", rather than against LDL causing atherosclerosis.
      Denying that LDL causes it is the Ravnskov group's minority position, so the other "No" goes
      too far: somebody has questioned it. The dissent's real parting is at the last link, whether
      cutting saturated fat at usual intakes reduces events and deaths. Describing a side by its
      smallest faction is the failure lesson 6's sort guards against.
  - q: >-
      An invented four-year diet trial lowers LDL cholesterol and finds fewer heart attacks, but a
      smaller reduction than genetic studies of people born with lower LDL would predict for the
      same drop. Which reading does lesson 6's evidence support?
    options:
      - It shows LDL isn't a cause after all, since the diet cut LDL and the events barely followed
      - The genetic studies are probably confounded, since genes and diets tend to go together
      - The trial is probably flawed, since a real effect of LDL would show fully in any span
      - It needn't count against cause, as four years catch part of it and particles may differ
    answer: 3
    explain: >-
      The EAS consensus gives a 22 percent reduction in major events per millimole per litre over
      about five years of statins, against 54 percent over 40 years of exposure in Mendelian
      randomisation, and says the effect "appears to increase with increasing duration of exposure
      to LDL-C". A short trial catching less is what that predicts, which is lesson 6's reading of
      what it means for diet trials. The dissent has a second reading that also fits: Astrup's group
      argues that saturated fat's LDL rise comes in larger particles, and the EAS panel's promise of
      proportional benefit assumes particle number falls with LDL-C, so a diet's cholesterol change
      may overstate its change in risk. Joining those two papers is lesson 6's own reading. Either
      way, a smaller effect in a short trial isn't evidence against cause, or a sign of a flaw.
      Genes are shuffled at conception, which is why a genetic proxy "usually is not confounded by
      nongenetic characteristics", in lesson 1's source.
  - q: >-
      An invented review of diet trials finds 20 percent fewer heart attacks across all its trials.
      Kept to the trials at low risk of bias, the effect shrinks and its interval crosses 1. How
      should that change the way you read the 20 percent?
    options:
      - Not at all, since the full set of trials has more people and so a more reliable estimate
      - It lowers how certain the 20 percent is, as a similar result did for Cochrane's 17
      - It cancels the 20 percent, since only the low-bias trials count and they found no effect
      - The 20 percent stands, though the smaller low-bias result should be printed beside it
    answer: 1
    explain: >-
      Cochrane's own summary table did this: kept to trials at low risk of bias, the estimate was
      0.96 (0.76 to 1.20), "little or no effect", and the review counted it against its headline,
      part of why the 17 percent is graded moderate, not high. More people don't fix a bias the
      extra trials carry. But an interval crossing 1 isn't a finding of no effect, lesson 2's point
      about null results, so cancelling the figure goes too far. And printing the smaller result
      beside the headline while leaving the headline's certainty where it was is what Cochrane
      didn't do: the better trials finding less is a reason to hold the 20 percent less firmly.

  # --- Salt and sugar (L7) ---
  - q: >-
      Two podcasts disagree. One says: "Fructose harms the liver beyond its calories. That's
      proven." The other says: "Sugar is just calories. That's proven." Going by lesson 7, how
      should a listener grade the question, and what would settle it?
    options:
      - Mostly settled for the second, though Lustig's liver claim could use one larger trial
      - Settled for the second, as swapping sugar at equal calories left body weight unchanged
      - Contested; long isocaloric trials measuring liver fat or new diabetes are what's missing
      - A value question, since both sides accept the same data and differ only in how they weigh it
    answer: 2
    explain: >-
      Lustig's claim is about the liver and metabolic disease in people eating more than they need,
      and his isocaloric trial lasted nine days, had no control group, and lost weight it was meant
      to hold steady. Te Morenga's 0.04 kg answers a question about weight, which Lustig's claim was
      never mainly about, so it doesn't settle his claim, wholly or "mostly". Lesson 7 names long isocaloric
      trials measuring liver fat or new diabetes as the missing evidence. It isn't a value question:
      the sides make different empirical claims. Until those trials exist, each side can say the
      other's evidence tests a different claim.
  - q: >-
      In an invented five-year trial, villages of older people with high blood pressure get a salt
      in which part of the sodium chloride is replaced by a magnesium salt, and strokes fall
      compared with villages using regular salt. A headline says: "Trial proves cutting sodium
      prevents strokes." What's the main problem?
    options:
      - The swap cut sodium and added magnesium at once, in high-risk people, so sodium isn't isolated
      - Probably none, since the villages were randomised and strokes were counted as the outcome
      - A trial of villages is weaker on cause, since individual people weren't randomly assigned
      - Strokes are the wrong outcome to count here, since salt's effect runs only through blood pressure
    answer: 0
    explain: >-
      Instead of what? Regular salt was replaced by one with an active ingredient of its own, which
      was lesson 7's first limit on SSaSS, whose substitute added potassium. So the trial shows the
      swap cut strokes, not how much each mineral did. Its people were also at high risk, and the
      same relative effect is worth less at lower risk. Randomising villages is still randomising,
      as SSaSS did with 600 of them, and counting strokes is what the earlier salt trials, which
      measured blood pressure, couldn't do.
  - q: >-
      In an invented case, IARC places a food colouring in Group 2B on "limited evidence", and the
      same week the committee that sets acceptable daily intakes leaves the colouring's limit
      unchanged. A post says: "WHO says this colouring causes cancer." How does the post stand?
    options:
      - Fair, since a place in Group 2B means cancer has been shown in people at usual intakes
      - Fair in substance, though the colouring probably harms only those who eat a lot of it
      - Wrong twice over, since 2B means possibly, and a group grades evidence, not risk size
      - Wrong, since leaving the intake limit alone shows the colouring was cleared of any harm
    answer: 2
    explain: >-
      That's the shape of the aspartame case. IARC's classifications "reflect the strength of
      scientific evidence as to whether an agent can cause cancer in humans, but they do not reflect
      the risk of developing cancer at a given exposure level", and 2B is "possibly carcinogenic".
      The dose question belongs to the other committee. Keeping the limit isn't a clearance, though:
      for aspartame, WHO's Branca said potential effects "need to be investigated by more and better
      studies". And harm only to heavy eaters is a guess the grades can't support either way.

  # --- Processed food and meat (L8) ---
  - q: >-
      In an invented country, a cancer agency announces that an ingredient "can cause cancer", and a
      month later a national guideline panel advises adults that they may continue their current
      intake of foods containing it. A reader says one of the two must have misread the evidence.
      What's the best reply?
    options:
      - Probably right, since the same studies should lead any honest panel to the same advice
      - The newer panel's advice should win, since it had already seen the agency's verdict
      - The panel probably has a conflict of interest, or it would have agreed with the agency
      - They may be answering different questions, whether it can cause cancer and what to do
    answer: 3
    explain: >-
      That's lesson 8's three bodies. IARC asked whether processed meat can cause cancer and gave a
      hazard grade, not advice about amounts; NutriRECS asked what adults should do, and weighed the
      size of the effect, the certainty and people's values. Evidence read for different questions
      can give different answers without anyone misreading it. Being newer doesn't make a panel
      right, and a conflict of interest is a reason to check the work, not an explanation to assume
      in advance.
  - q: >-
      A panel using GRADE assesses cohort evidence on a food. The association is large, and risk
      rises steadily with the amount eaten. Where does GRADE start this evidence, and can it move?
    options:
      - It starts at high, like trials, and is marked down if the studies turn out badly run
      - It starts at low, and a large effect or a dose-response gradient can rate it upwards
      - It starts at low, and can rise only if the review's own scale has called it convincing
      - It starts at moderate, and moves only once a randomised trial is added to the evidence
    answer: 1
    explain: >-
      GRADE starts observational evidence low because it can be confounded, but its grounds for
      rating up, as Qian and colleagues tabulate them, include a "Large magnitude of effect" and a
      "Dose-response gradient", both of which this panel has. A review's own credibility scale is a
      separate grading: Lane's rated cardiovascular deaths "convincing" and GRADE rated the same
      finding very low, so one doesn't lift the other. GRADE doesn't start cohorts at high or at
      moderate either, and Lane rated four of its 45 analyses moderate. Whether the
      meat evidence clears those bars is what NutriRECS and its critics argued over. (The panel is
      invented.)
  - q: >-
      A columnist writes: "The extra cancer risk from a daily rasher of bacon is tiny, and it's no
      business of health officials to tell adults to give up a food they enjoy." How does lesson 8's
      separation of the parts sort that sentence?
    options:
      - All established, since every body in lesson 8 agreed the association runs this way
      - Mostly value, since "tiny" is a matter of opinion and so is what officials should say
      - All contested empirical, since better cohort studies could settle both of its halves
      - The first half is contested evidence about size, and the second half a value premise
    answer: 3
    explain: >-
      How big the effect is sits in lesson 8's contested, empirical part: very small per three
      servings a week in NutriRECS's reviews, larger in other units, and none of those units
      dishonest. That officials shouldn't ask adults to give up a food they enjoy is a premise about
      what advice should do, the value step the checkpoint reconstructed, and no cohort can settle
      it. The direction of the association is agreed, but the size, the certainty and the advice
      aren't. And "tiny" isn't mostly opinion: the size can be measured, and only the line where
      small becomes too small to act on is a judgement, like the thresholds lesson 6 called a value
      laid on Steen's evidence. (The columnist is invented.)
  - q: >-
      Two dietitians run Monteiro's practical test on the same jar of pasta sauce. Its label has one
      additive that isn't among the test's named classes, and they disagree about whether the sauce
      is ultra-processed. What does lesson 8's evidence say about a disagreement like theirs?
    options:
      - It's typical, since specialists agreed poorly, and split most on borderline products
      - It's rare, since specialists with ingredient lists agreed on about nine foods in ten
      - One of them has misapplied the test, since it gives everyone who uses it the same answer
      - It shows NOVA is meaningless, since the specialists couldn't agree on any product at all
    answer: 0
    explain: >-
      Braesco's specialists reached a Fleiss' kappa of 0.32 on marketed foods with ingredient lists
      in front of them. On lesson 8's reading of the abstract, the disagreement sat mostly in the
      borderline products, while a large cluster went to group 4 about nine times in ten. So nine in
      ten describes that cluster, not the whole set, and the test doesn't give everyone the same
      answer. Poor agreement at the borders is a limit of the current criteria, which is Braesco's
      conclusion, but it isn't total disagreement either. (The jar is invented.)

  # --- Patterns and the guidelines (L9) ---
  - q: >-
      An invented eight-week feeding trial randomises people to a "Nordic" diet of rye bread,
      berries, oily fish and rapeseed oil, or to a typical diet, with salt and body weight held
      steady. Blood pressure falls on the Nordic diet. A fish-oil company says the trial shows
      omega-3 lowers blood pressure. How does that claim stand?
    options:
      - Fair, since randomisation shows each part of the diet played its part in the fall
      - Fair in part, since holding salt and weight steady leaves the fish as the likely cause
      - It overreaches, since a pattern trial supports "eat like this", not which part worked
      - It fails, since trials of whole diets tell you nothing about what caused any change
    answer: 2
    explain: >-
      That's what lesson 9 took from DASH. Holding sodium and weight steady means whatever lowered
      blood pressure was in the food, but a trial that changed a whole pattern can't say whether the
      fish, the rye, the berries or the oil did it. So a pattern trial is good evidence for advice
      and weak evidence for mechanism. Randomisation shows the package did it, not that each part
      did. Saying it tells you nothing throws away the advice half, and naming the fish as the
      likely cause picks a part the design never isolated.
  - q: >-
      A clinic reports that 60 percent of its patients with type 2 diabetes reached "remission" on a
      low-carbohydrate plan, defining remission as an HbA1c under 6.5 percent whether or not they
      still took glucose-lowering medicine. What does lesson 9's reading of the trials suggest?
    options:
      - The figure probably understates it, as medicines make blood sugar harder to bring down
      - The drug-free definition is the harder test of the diet, and on it the gain shrank
      - It confirms the diet works, as an HbA1c under 6.5 is remission however it's reached
      - It's worthless, since a clinic's report on its own patients can never tell you anything
    answer: 1
    explain: >-
      An HbA1c under 6.5 reached while still taking medicine is partly the medicine's doing, so on
      lesson 9's reading the drug-free definition is the harder test; in Goldenberg's pooled trials
      the effect was smaller and non-significant on it, and data at 12 months were sparse. The ADA,
      which accepts low-carbohydrate plans, reports less difference between eating patterns beyond
      a year. A clinic's report isn't worthless, but it can't separate the diet from the medicines.
      And for anyone on these medicines starting a very low carbohydrate plan, the ADA's safety line
      applies: medicines may need reducing "to prevent hypoglycemia", with a practitioner involved
      from the start. (The clinic is
      invented.)
  - q: >-
      In an invented country, the health ministry sets aside its scientific committee's report and
      commissions new evidence reviews before writing its food guide. One camp calls it a needed
      repair; the other calls it a breach of process. How does lesson 9 treat a dispute like this?
    options:
      - As partly about evidence and mostly about who decides and how, which are value questions
      - As mostly about evidence, with a value side, since the new reviews' quality decides it
      - As settled against the ministry, since departing from a committee's report is plainly a breach
      - As settled for the ministry, since a government is accountable in a way a panel isn't
    answer: 0
    explain: >-
      Lesson 9 left the 2026 US process question open: whether an administration should set aside
      its advisory committee's report is "partly about evidence and mostly about who should decide,
      by what procedure, with what accountability, which are value questions informed people answer
      differently." The quality of the new reviews is part of the evidence half, but however good
      they are, it wouldn't settle who should decide. Each settled verdict takes
      one side's premise as given: the American Society for Nutrition's, that departing from the
      established process undermines confidence, or the supporters', that the committee's report
      was deficient and the replacement was peer reviewed.
  - q: >-
      A vegan society says planned vegan diets are nutritionally adequate at every stage of life. A
      government report, drawing on a national survey, lists shortfalls in several nutrients among
      people eating vegan diets. Can both be right?
    options:
      - It's contested, since a professional body and a national survey reach opposite verdicts on it
      - Probably not, since a professional body's position statement outranks a survey of intakes
      - Only if the survey was badly run, since the two claims plainly contradict one another
      - Yes, one is about diets as planned, one about diets as eaten; B12 needs a source either way
    answer: 3
    explain: >-
      Lesson 9 read the Academy of Nutrition and Dietetics and the 2025-2030 US guidelines this way:
      "appropriately planned" diets on one side, shortfalls in diets as eaten on the other, with the
      same US page advising targeted supplementation. On B12 every source agrees: natural sources
      "are limited to animal foods", so vegans need a fortified food or a supplement. Neither source
      outranks the other, and there's no contradiction to explain away. Nor is it a contested
      question: the two aren't verdicts on the same claim, so there's no dispute to grade. For
      pregnancy or a child's
      diet, this is the callout's territory. (Both sources are invented.)

  # --- Supplements and alcohol (L10) ---
  - q: >-
      A company sells a vitamin B12 spray "for all-day energy", in an advert showing office workers
      eating meat, eggs and dairy every day. What does lesson 10's source say about the claim for
      people like these?
    options:
      - It's fair, since a vitamin that prevents deficiency will add energy for anyone
      - B12 doesn't give that benefit to people who already get enough of it from their diet
      - It's fair for most adults, since deficiency affects nearly half of those under 50
      - It can't be on sale, as the FDA approves each supplement's claims before it's marketed
    answer: 1
    explain: >-
      The Office of Dietary Supplements: "vitamin B12 doesn't provide these benefits in people who
      get enough B12 from their diet", the benefits being energy, athletic performance and
      endurance. The people with a known reason to be short are vegans, since "Plant foods have no
      vitamin B12 unless they are fortified", and many older adults; the 3 to 43 percent figure is
      for older adults, not people under 50. And the FDA doesn't approve supplements before they're
      marketed. (The company is invented.)
  - q: >-
      A new cohort compares light drinkers only with people who have never drunk, leaving former
      drinkers out, and finds the light drinkers died less often. A headline says: "Sick-quitter
      objection answered: light drinking extends life." How does lesson 10 grade that?
    options:
      - Largely answered for benefit, though a trial would still be worth running to confirm it
      - Settled for harm, as the genetic studies showed that any amount of drinking shortens life
      - Still contested, since it meets one objection but light drinkers may differ otherwise
      - Out of date, since the 2025-2030 US guidelines dropped the numeric drinking limit
    answer: 2
    explain: >-
      Leaving out former drinkers answers the sick-quitter problem, which is NASEM's design choice,
      but lesson 10 notes it doesn't remove the healthy-drinker difference Biddinger describes, and
      NASEM itself rated five studies in one analysis as having "some concerns" about bias. So one
      objection met leaves the question contested, not "largely answered", and no randomised trial
      has tested it. In Millwood's genetic analysis stroke risk rose steadily with genetically
      predicted drinking, but that isn't a finding that any drinking shortens life, and Zhao's low
      or moderate drinkers were "not significantly associated" with mortality. What a guideline says
      is a separate question from what the evidence shows. (The cohort is invented.)

  # --- Reading a claim about your food (L11) ---
  - q: >-
      A health newsletter tells all its readers: "Swap your table salt for a potassium salt
      substitute." One reader takes a potassium-sparing diuretic for his blood pressure. Going by
      lessons 7 and 11, what does the advice mean for him?
    options:
      - Follow it, since WHO now suggests the swap to anyone who chooses to use table salt
      - Follow it, since SSaSS found no clear rise in serious high-potassium events overall
      - Follow it at half the amount, since a smaller dose of potassium is bound to be safe
      - Ask his doctor or pharmacist first, since that medicine is named in the caution
    answer: 3
    explain: >-
      The George Institute's summary of WHO's guideline, which lesson 7 read, says there is "a
      rationale for increased risk of hyperkalaemia if lower-sodium salt substitutes that contain
      potassium are consumed in excess among people with chronic kidney disease, using other
      potassium supplements or potassium-sparing diuretics". SSaSS's abstract doesn't say who the
      trial left out, so its reassuring safety result can't be carried to him, and lesson 7 said
      whether a medicine rules the swap out is a question for a doctor or pharmacist. That's lesson 11's point
      about a medicine that meets food: advice that's ordinary for most people is a change to talk
      over first for someone on that medicine, though the claim is the same. WHO's suggestion is for
      the general population, and halving the amount is a dose he'd be choosing without anyone who
      knows his medicines. Nothing here is a reason to change the medicine itself. (The newsletter
      is invented.)
  - q: >-
      A reader who eats rice most days meets the claim "People who eat the most rice have more type
      2 diabetes." She traces it to a cohort whose abstract doesn't say what the low-rice eaters ate
      instead, and concludes that her own rice-heavy diet is shown to be fine. Nothing on the
      callout's list applies to her. How does her conclusion stand on lesson 11's mapping?
    options:
      - It overreaches; "not stated" stops the claim carrying a change but doesn't clear her diet
      - It's fair, since a finding with no stated swap has nothing to say about anyone's plate at all
      - She should change what she eats anyway, since a cohort link is enough to act on for safety
      - She should grade the claim contested and wait for a trial before making any decision
    answer: 0
    explain: >-
      Lesson 11: a swap that's "not stated" means the claim can't bear a change by itself, and
      "That does not show your present way of eating is fine either, so the decision rests on what
      else you found (the guides the project asks you to read) or on a premise you write down." So
      her conclusion reads the gap as a clean bill. Changing anyway can be a defensible decision,
      but it rests on a premise she'd have to write down, not on the finding, which can't say what
      to change to. And waiting treats "not known yet" as "nothing can be decided", the misreading
      lesson 11 corrects; she hasn't found a dispute to grade in any case. (The claim and the
      cohort are invented.)
---

This test covers all eleven lessons. **Thirty questions, and 70 percent to pass**, which is
twenty-one.

:::callout Before you change anything
This course is education, not advice about your own diet. If you're pregnant or trying to be, have diabetes or kidney disease, take a medicine such as warfarin, or are deciding what a child should eat, talk to a doctor or a registered dietitian first. If food, eating or your weight has started to feel out of your control, tell a doctor, or call Beat on 0808 801 0677 in the UK or ANAD's peer-support helpline on 1-888-375-7767 in the US.
:::

Nearly every question gives you a study, a headline, a label or a claim that isn't in any lesson,
and asks you to apply what the course taught to it. The people, headlines and studies in them are
invented unless a question names a real source. Where a figure appears it's in the question,
because the course is about what a figure licenses, not about memorising it.

Lessons 6, 8 and 9 carry four questions each, because they carry the most. Several questions are
about claims the course calls contested. None of those asks you which side is right: they ask you to
grade the claim, say what each side accepts, or say what evidence would settle it.

None of the questions is about you, your weight or what you eat, and none asks you to place
yourself anywhere. A few touch on medicines, and none is advice to start, stop or change one. If a
question about food has stopped being a self-help question for you, the box above says who to ask.
