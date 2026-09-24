# Outline: Nutrition: The Evidence

*Stage 2, 2026-09-24. Built from `research/SOURCES.md` (Parts A to F). Sequenced for how the ideas
build. A sensitive domain under standards 3.4 (nutrition and medicine): every lesson gets two
fresh-context reviewers, as Mental Fitness did, and the neutrality audit is mandatory before
publish.*

## How many lessons, and why

**Eleven.** The research file's opening finding decides the shape: in almost every food dispute the
sides agree on more than the argument suggests, and they part over **what replaces the food**, **where
the low end of a range lies**, or **how uncertain evidence becomes advice**. So the course teaches the
instrument first (how the field measures and tests, and why every dietary change is a swap), then
the one thing that is nearly settled (energy balance) and the dispute inside it, then the numbers
people are given (the DRIs and the macronutrients), then the four set-piece disputes (fat, salt and
sugar, processing and meat), then the patterns and the guidelines that bundle them, then
supplements and alcohol, then hands the reader the sort.

1. **What a food study can tell you.** Scope, the safety callout, why diet is hard to test, the
   designs, the beta-carotene reversal and the evidence that it is the exception. "Instead of what?"
   introduced.
2. **What people say they ate.** Measurement: FFQs, recalls, doubly labelled water, the critique and
   the defence, and the WHI trial as the huge-trial case.
3. **Energy in, energy out.** Energy balance, the 3,500 kcal rule, metabolic rate across life,
   constrained expenditure, the Biggest Loser follow-up, and the carbohydrate-insulin dispute in both
   sides' words.
4. **Which diet.** Head-to-head trials, adherence, time-restricted eating, what maintenance looks
   like, and where medicine has moved (GLP-1 drugs, named only).
5. **The numbers behind the advice.** The DRI family, what an RDA is and is not, protein (0.8 against the
   new 1.2 to 1.6), carbohydrate quality and fibre, and the AMDR the National Academies now say
   should go.
6. **Fat and the heart.** Trans fat (settled), LDL (established), saturated fat (contested at the
   hard-outcome end), the replacement question, eggs and dietary cholesterol, Keys and the sugar
   papers.
7. **Salt and sugar.** Two disputes with the same shape: an effect on an intermediate measure that
   is well shown, a low end that is argued over, and a method that can manufacture the curve.
8. **Processed food and meat.** Whether "ultra-processed" is a useful category, and the red and
   processed meat case: same evidence, IARC and NutriRECS, different advice.
9. **Patterns, and the guidelines that bundle them.** Mediterranean (and PREDIMED's retraction),
   DASH, vegetarian and low-carbohydrate patterns, the national guides side by side, the 2025-2030
   DGA dated and described, and Blue Zones as a claim that travelled. **The course's revision point**
   (decision 5).
10. **Supplements and alcohol.** Where supplements are indicated and where the trials failed, how
    they are regulated, and the alcohol J-curve dispute between two federal reviews.
11. **Reading a claim about your food.** The closing lesson: the sort with "instead of what?"
    joined, the quick cases (water, caffeine, detox), when it stops being a self-help question, who
    to ask, and a decision.

**Why not fewer.** Fat, salt-and-sugar and processing-and-meat are each a full contested question
with its own best case on each side; folding two together would cut one side's case, which is the
defect 14 route. **Why not more.** Micronutrient physiology (a third of every intro textbook,
Part A 7) is left out by design and said so in lesson 1; a vitamins lesson would teach biochemistry
rather than evidence. Hydration, caffeine and detox are small cases, not lessons, and sit in lesson
11. Pregnancy and children are safety pointers, not lessons.

**Lesson length.** Most of these should land between about 50 and 85 measured minutes. Lessons 6
and 9 carry the most material and may run to about 90; if either passes that, split at the obvious
seam (6: trans fat and LDL / saturated fat; 9: patterns / guidelines) rather than cut a side's case.

## What is deliberately left out, and said so in lesson 1

- **Diet plans and targets.** No meal plans, no calorie targets, no macros to hit. The course reads
  evidence; it does not prescribe.
- **Micronutrient biochemistry** beyond where a decision turns on it (supplements, deficiency,
  pregnancy).
- **Clinical nutrition**: diabetes management, kidney disease, eating disorders, food allergy,
  coeliac disease, children, pregnancy. Named with where to go, not taught.
- **Obesity medicine**: GLP-1 drugs and surgery are named in lesson 4 as where the field has moved
  and not evaluated.
- **Sports nutrition** beyond the protein evidence in lesson 5. **Strength and Fitness**, next on
  the Core, is where training belongs.
- **Food cost, culture and insecurity**, acknowledged (Hall 2019's own limitation; the DGA's
  "budgetary considerations") and not researched. **Cooking Fundamentals**, third in this term, is
  where making food happens.
- **Environmental and ethical arguments about food** (meat and climate, animal welfare). Value
  questions this course did not research; named in lessons 8 and 9 as reasons people choose that the
  course does not adjudicate.

## Eight decisions, settled here so no lesson re-opens them

**1. The same callout is on every lesson, word for word, directly after the opening paragraph, and
a check enforces it.** The text:

> :::callout Before you change anything
> This course is education, not advice about your own diet. If you're pregnant or trying to be, have diabetes or kidney disease, take a medicine such as warfarin, or are deciding what a child should eat, talk to a doctor or a registered dietitian first. If food, eating or your weight has started to feel out of your control, tell a doctor, or call Beat on 0808 801 0677 in the UK or ANAD's peer-support helpline on 1-888-375-7767 in the US.
> :::

Sources for each clause: warfarin (NHS, SOURCES F 5.5), kidney disease (the WHO salt-substitute
guideline's exclusion, D 1.2; KDIGO on protein, E 5), diabetes (the ADA on reducing glucose-lowering
drugs "to prevent hypoglycemia" on a low-carbohydrate diet, E 7), children (NICE NG69 1.2.4 on
adolescent risk, F 5.1; the course's own caution), pregnancy (F 4), Beat and ANAD (F 5.3; ANAD
described as peer support because its own page says it is; **no NEDA number**, because NEDA closed
its helpline in 2023). **Beat's number is its England line**; its page lists others. **The first
lesson drafted adds the check** to `scripts/build.mjs` beside Mental Fitness's crisis callout, and
the callout's sentence goes into `REPETITION_EXEMPT` (root rule 10). This is standards 2.5's
"education, not personalised advice" note, carried on every lesson rather than once, because a
reader may arrive at lesson 4 from a search engine.

**2. "Instead of what?" is this course's addition to the institute's claim sort.** Memory added the
sample, Focus and Deep Work the instrument, Note-Taking the setting, Sleep the clock, Mental Fitness
what the comparison group got. **A claim about a food or a nutrient is a claim about a swap**, since
eating less of one thing means eating more of another or less in total. Introduced in lesson 1 with
the beta-carotene and saturated-fat cases, used in every evidence lesson, joined to the sort in
lesson 11. It is distinct from Mental Fitness's comparator question, which is about the group a
trial put people in; this one is about what is on the plate instead, in a trial or a cohort. Say
that distinction once, in lesson 1.

**3. No prescriptions, in either direction.** No calorie targets, no macro splits, no supplement
doses except where quoting an official table as a table (ODS RDAs, F 1.6), no advice to stop or
start a medicine. Every lesson that touches a medical condition points to the callout.

**4. Weight is taught as evidence, never as a goal.** Lessons 3 and 4 describe what trials found
about weight change and say nothing about what a reader's weight should be. Lesson 3 or 4 carries
NICE NG69's point that BMI alone must not decide treatment for an eating disorder and that an
eating disorder can occur at any body size (1.2.6, 1.2.8), and says, with the Patton 1999 and
Neumark-Sztainer 2006 cohorts at abstract level, that adolescent dieting is associated with later
eating disorders, with the observational caveat attached (F 5.4).

**5. The dated material is quarantined in lesson 9.** The 2025-2030 DGA, WHO's January 2026 fact
sheet revision, and the 2026 disputes live there, marked "as of September 2026". Other lessons that
need them (6 on saturated fat, 5 on protein, 10 on alcohol) state the one relevant line with its
date and point to lesson 9. The WHO meat Q&A revision of 23 September 2026 goes in lesson 8 with its
date. Dicken 2025 and Steen 2026 are dated where used. A later session can then revise the course by
opening lesson 9 and the dated lines, which `grep 2026` will find.

**6. Read levels at the point of use.** Most of the file is abstract level. A lesson says so wherever
it prints a number from an abstract, in the form Sleep and Mental Fitness used, and **copies the read
level from SOURCES.md rather than from memory** (defect 22).

**7. Build on what earlier courses taught; do not re-teach it.** Relative against absolute risk was
taught in **Logic and Argument** lesson 9, with the IARC processed-meat 18% turned into ten more
cases per thousand from Cancer Research UK's figures, and in **Sleep** lesson 3. Lesson 8 of this
course **refers to that working and does not redo it**: its new question is why two bodies reading
the same evidence gave opposite advice. Experimental against observational was taught in **Sleep**
lesson 3; what the comparison group got in **Mental Fitness** lesson 2; IARC's categories as
strength of evidence rather than size of harm in **Sleep** lesson 4 and Logic 9. Name each by course
and lesson at the point of use.

**8. The 2026 US guidelines are described, not judged.** Lesson 9 states first what the new DGA and
its critics agree on (less added sugar and fewer refined grains and highly processed foods, more
vegetables and fruit, the 10% saturated-fat cap kept), then the disputed points each in the words of
a named supporter and a named critic, then the process dispute as a dispute, with its date. The
course does not say whether the committee report should have been set aside. The empirical parts
(protein, saturated fat, full-fat dairy) are handled as in lessons 5 and 6.

---

## Lesson sequence

### 1. What a food study can tell you (~60 min)
- **Objectives:** explain why a question about diet is harder to test than a question about a drug,
  naming at least three reasons; identify the design of a described nutrition study and say what it
  can and cannot show; apply "instead of what?" to a claim about a food; state what this course
  covers, what it leaves out, and where to go instead.
- **Core ideas:** the course's scope and the callout; the reasons diet is hard (long latency,
  adherence, blinding, and the swap: you cannot change one thing); cohort, case-control, RCT,
  controlled feeding (metabolic ward), Mendelian randomisation, each with what it licenses; the
  beta-carotene reversal as the famous failure, and Schwingshackl 2021 as the evidence that on
  average trials and cohorts agree, with the famous disagreements coming from supplement trials
  against diet cohorts.
- **Mechanism to explain:** why an observational association can reverse in a trial (confounding by
  the rest of the diet and life; a trial of a pill tests a different question from a cohort of a
  diet); why a metabolic ward can answer short questions exactly and long ones not at all.
- **Worked examples:** (a) simple: beta-carotene, from the cohort association (serum beta-carotene
  and death, RR 0.69 as Ioannidis 2018 reports it) to ATBC and CARET's harm in smokers. (b) wrinkle:
  Schwingshackl's ratio of risk ratios (1.09, 1.04 to 1.14) and what it means that the designs
  mostly agree; the reader works out why the beta-carotene case is the kind that disagrees.
- **Misconceptions:** "Observational nutrition studies are worthless"; "a randomised trial settles
  any food question"; "a supplement trial tests the food".
- **Practice:** classify five described studies by design and say what each licenses; for three
  claims, write "instead of what?".
- **Sources:** A 1 (Ioannidis 2018, Schoenfeld and Ioannidis 2013), A 2 (Satija 2015), A 4
  (metabolic wards, MR, GRADE), A 6 (beta-carotene), Schwingshackl 2021 (A, summary item 4 and its
  entry); F 5 for the callout; Part A 8 for the syllabi's order.
- **Connects:** builds on Sleep 3 (experimental against observational), Mental Fitness 2
  (comparison group), Reading Well 8 (reading a paper). Leads to lesson 2's measurement problem.

### 2. What people say they ate (~60 min)
- **Objectives:** describe how dietary intake is measured and state how far self-reported energy
  intake falls from doubly labelled water; explain what the critics and the defenders of nutritional
  epidemiology each conclude from the same measurement error, in each side's own words; evaluate
  what the WHI Dietary Modification trial did and did not test.
- **Core ideas:** FFQ, 24-hour recall, food records; doubly labelled water and urinary nitrogen as
  recovery biomarkers; OPEN (Subar 2003) and Freedman 2014 (energy correlation 0.21, protein density
  0.41, under-reporting 28% on FFQ and 15% on a recall); Archer's "inadmissible"; Subar 2015's "do
  not use self-reported energy intake as a measure of true energy intake"; ranking against absolute
  amounts; energy adjustment. The WHI trial: 48,835 women, 8.1 years, null main results, adherence
  short of target, and the 19.6-year breast cancer mortality follow-up (HR 0.79).
- **Mechanism to explain:** why an error that shrinks every association towards zero (attenuation)
  can coexist with an error that manufactures one (differential misreporting); why ranking survives
  better than amounts.
- **Worked examples:** (a) simple: a reader's own day recorded two ways; what a 28% under-report
  does to a calorie total. (b) wrinkle: WHI, read by Satija ("failed to test its original
  hypothesis") and by its own investigators at 19.6 years; the reader decides what the trial can
  now be said to show.
- **Misconceptions:** "Calorie counts from food diaries are accurate if you're careful"; "the
  critics say all diet research is fake" (they agree with the defenders more than they say);
  "a null trial proves no effect".
- **Practice:** record yesterday's food from memory, then list three places the record could be
  wrong and in which direction; read two abstracts' conclusions and sort each sentence into
  measured, inferred and advised.
- **Sources:** A 1.3 to 1.5 (Archer), A 2 (Satija; Hu and Willett 2018; Subar 2015), A 3 (OPEN,
  Freedman), A 5 (WHI and Chlebowski 2020).
- **Connects:** lesson 1's designs; leads to lesson 3, where controlled feeding answers what
  self-report cannot.
- **Spaced review of:** lesson 1's designs and "instead of what?" (WHI's low-fat arm ate what
  instead?).

### 3. Energy in, energy out (~70 min)
- **Objectives:** explain energy balance and why a fixed-deficit rule overpredicts weight loss;
  state what Pontzer 2021 found about energy expenditure across the life course and what
  constrained expenditure implies for exercise and weight; describe the carbohydrate-insulin model
  and the energy balance model in terms each side's proponents would accept, and name the trials
  each leans on.
- **Core ideas:** energy balance as an accounting identity and why that does not make it a theory
  of cause; Hall 2011 and the 3,500 kcal rule; Pontzer 2021 (expenditure adjusted for size stable
  from about 20 to 60); constrained energy expenditure (Pontzer 2016); Fothergill 2016 (metabolic
  adaptation six years on, and that it did not predict regain); CIM (Ludwig 2021) and EBM (Hall
  2022), Hall 2021 and Ebbeling 2018 as each side's trial, with the dispute over the latter.
- **Mechanism to explain:** why expenditure falls as weight falls (less tissue to maintain, adaptive
  thermogenesis) and why that bends the weight curve; what the CIM says insulin does and what the
  EBM says the brain does.
- **Worked examples:** (a) simple: a 500 kcal a day deficit under the static rule against a dynamic
  model's shape (use Hall 2011's own figures from Part B 10; do not invent a curve). (b) wrinkle:
  the Biggest Loser follow-up, where the people who kept most weight off had the most slowing.
- **Misconceptions:** "Metabolism slows from your twenties"; "3,500 kcal is a pound, so the maths is
  simple"; "exercise adds its calories on top"; "calories don't matter" and "only calories matter"
  as the two misreadings of the dispute.
- **Practice:** predict, then check, what the static rule says against what a year of the same
  deficit produces; write the CIM's central claim in one sentence a Ludwig co-author would sign, and
  the EBM's in one a Hall co-author would sign.
- **Sources:** B 2, B 4, B 5, B 10; B 9 for WHO's definitions if BMI is mentioned; F 5.1 for decision 4.
- **Connects:** lesson 2 (self-report cannot see energy balance; doubly labelled water can); leads to
  lesson 4, which asks which diet.
- **Spaced review of:** controlled feeding (lesson 1), doubly labelled water (lesson 2).

### 4. Which diet (~65 min)
- **Objectives:** state what head-to-head diet trials found for weight at a year, with their sizes;
  explain why adherence predicts weight change better than diet type; evaluate a claim for
  time-restricted eating against the trial that matched calories.
- **Core ideas:** DIETFITS (Gardner 2018), Johnston 2014, Dansinger 2005; the variation within arms
  being larger than the difference between them; TREAT (Lowe 2020) and Liu 2022; maintenance and
  Look AHEAD (modest sustained loss, no reduction in cardiovascular events); the National Weight
  Control Registry as a selected sample (Memory's question); GLP-1 drugs (Wilding 2021) named as
  medicine, not evaluated; NICE and WHO on obesity; decision 4's eating-disorder content.
- **Mechanism to explain:** why an average difference of a kilogram or two can sit inside individual
  outcomes that range over tens of kilograms, and what that does and does not say about any one
  person.
- **Worked examples:** (a) simple: DIETFITS's two arms and their spread. (b) wrinkle: Liu 2022, a
  time-restricted arm that lost weight, and a calorie-matched arm that lost about as much: which
  question did it answer, and "instead of what?".
- **Misconceptions:** "The best diet is the one that suits your insulin/genes" (DIETFITS tested
  genotype and insulin secretion as predictors; check what B 3 records before stating the result);
  "eating in a window burns more fat"; "most people regain everything" (check Look AHEAD and B 7 for
  what the evidence supports).
- **Practice:** read a diet-book claim and name the trial that would test it and what the
  comparison diet would have to be.
- **Sources:** B 3, B 6, B 7, B 8, B 9; F 5.1 and 5.4.
- **Connects:** lesson 3's energy balance; leads to lesson 5's numbers.
- **Spaced review of:** Memory's sample question (the registry), Mental Fitness's comparator.

### 5. The numbers behind the advice (~60 min)
- **Objectives:** distinguish EAR, RDA, AI, UL and AMDR, and say what each is for; compare the
  protein RDA with the 2025-2030 DGA's protein goal and state what the evidence behind each shows;
  explain what carbohydrate quality means using the fibre evidence.
- **Core ideas:** the DRI family and why an RDA covers nearly everyone (so most people need less);
  the AMDR and NASEM's 2024 letter ("not consistent with current evidence-based standards");
  protein 0.8 g/kg, Morton 2018 (about 0.3 kg lean mass, plateau near 1.6 g/kg in training), PROT-AGE
  for older adults, kidney disease caution; the DGA's 1.2 to 1.6 (dated, point to lesson 9) and the
  critique of it; Reynolds 2019 on fibre and whole grains; "at least 14 g fibre per 1,000 kcal".
- **Mechanism to explain:** how an RDA is built from an average requirement plus a margin (two
  standard deviations in the DRI method; check A 9 for the wording), and why that makes it a poor
  target for an individual and a good one for planning a population.
- **Worked examples:** (a) simple: protein for a 70 kg adult at 0.8 and at 1.2 to 1.6, and what the
  difference is in food terms (keep to figures in the sources). (b) wrinkle: Morton's plateau and
  what "benefit plateaus" means for someone not training.
- **Misconceptions:** "The RDA is the amount you need" (it is set above most people's need); "more
  protein is always better"; "carbs are the problem" (quality against quantity).
- **Practice:** read a label or a DRI table and say which number is which kind; compute a protein
  figure from a stated body weight and say which reference it comes from.
- **Sources:** A 9, E 4, E 5, E 1.2 (dated line only), D 2 if sugar labels come up.
- **Connects:** lesson 4 (diet trials varied macronutrients); leads to lesson 6 on fat quality.

### 6. Fat and the heart (~85 min)
- **Objectives:** classify claims about trans fat, LDL cholesterol and saturated fat as established
  or contested, with the evidence for each classification; state what the Cochrane review and the
  dissent each find in the saturated fat trials, in their own words; apply "instead of what?" to a
  saturated fat claim and explain why the replacement decides the answer.
- **Core ideas:** trans fat, the settled case (FDA 2015, WHO REPLACE); LDL causes atherosclerosis
  (EAS 2017) and the minority dissent named as such; Hooper 2020 (17% fewer combined events,
  moderate certainty; little or no effect on deaths; the low-risk-of-bias RR 0.96, 0.76 to 1.20);
  Ramsden 2013 and 2016; Astrup 2020 and the food matrix; Steen 2026 (risk-stratified; dated); WHO
  2023's recommendation and strength; Jakobsen 2009 and Li 2015 on replacement; dietary cholesterol
  and eggs (2015 wording; Zhong 2019 against Drouin-Chartier 2020); Keys and the Seven Countries
  Study, and the sugar papers (Kearns 2016; Johns and Oppenheimer 2018). One dated line on the 2026
  DGA's 10% cap with butter and tallow, pointing to lesson 9.
- **Mechanism to explain:** saturated fat raises LDL; LDL particles enter the artery wall; the
  question the trials cannot settle is whether the diet change reduces events at the intakes people
  actually eat, over the time trials can run, with statins in the background.
- **Worked examples:** (a) simple: trans fat, where observational, mechanistic and policy evidence all
  point one way. (b) wrinkle: the same trials read by Hooper and by Ramsden, which trials each
  includes (Oslo, Finnish Mental Hospital against Minnesota, Sydney), and what replacement each
  trial used.
- **Misconceptions:** C's list ("proved harmless", "proven to save lives", "the US now says it's
  fine", "cholesterol in food doesn't matter", "Keys picked seven of twenty-two", "the sugar
  industry is why we feared fat", ruminant against industrial trans fat).
- **Practice:** for three claims about fat, classify, then write "instead of what?"; read Kearns
  2016's conclusion and Johns and Oppenheimer's reply and write one sentence each would accept.
- **Sources:** C (all sections), E 1.2 (dated line). **Neutrality set-piece**: count citations and
  last words (defect 14). Conflicts of interest named on every side or on none (C's last bullet).
- **Connects:** lesson 5 (fat as a macronutrient); leads to lesson 7's same-shape disputes.

### 7. Salt and sugar (~75 min)
- **Objectives:** state what the trials show about sodium and blood pressure and what SSaSS showed
  for strokes and deaths, with what the substitute changed; explain how a spot-urine estimate can
  produce a J-curve and say what that does to the dissent; state what the sugar evidence shows for
  weight and for teeth, and what WHO's two sugar recommendations each rest on.
- **Core ideas:** DASH-Sodium, He 2013, SSaSS (absolute rates per 1,000 person-years), WHO's
  2025 salt-substitute guideline and its kidney exclusion; PURE (O'Donnell 2014, Mente 2016) and
  O'Donnell 2020 in its own words including its concession; He 2019 and Cook 2016 (TOHP); NASEM
  2019's 2,300 mg; WHO sodium fact sheet (11 May 2026). Sugar: WHO 2015 (<10% strong, <5% conditional
  from caries data), Te Morenga 2013 (0.04 kg isocaloric), Malik on sugary drinks, Lustig's case in
  his words; WHO 2023 on non-sugar sweeteners and IARC/JECFA on aspartame (IARC categories were
  taught in Sleep 4; say so).
- **Mechanism to explain:** blood pressure as the pathway from sodium to stroke; how a single
  morning urine sample, converted by formula, can carry error that correlates with the outcome; why
  isocaloric swaps isolate the nutrient and ad libitum ones do not.
- **Worked examples:** (a) simple: SSaSS's stroke rates as absolute numbers (do the arithmetic from
  the abstract; say it is the course's). (b) wrinkle: the J-curve, then He 2019's demonstration, and
  what the dissent still has left.
- **Misconceptions:** "Salt only matters if you have high blood pressure" (check the normotensive
  figures); "the low-salt advice has been debunked"; "sugar is uniquely fattening"; "sweeteners
  cause cancer" (IARC 2B with JECFA's ADI unchanged).
- **Practice:** convert grams of salt to milligrams of sodium from a label; take a sugar claim and
  ask whether the trial behind it held calories equal.
- **Sources:** D 1, D 2.
- **Connects:** lesson 6's shape; leads to lesson 8, where the category itself is disputed.

### 8. Processed food and meat (~75 min)
- **Objectives:** describe the NOVA classification and state the best case for and against
  "ultra-processed" as a category, in each side's words; state what Hall 2019 and Dicken 2025 showed
  and did not show; explain why IARC and NutriRECS gave opposite advice from overlapping evidence,
  separating the empirical part from the value part.
- **Core ideas:** NOVA (Monteiro 2019); Hall 2019 (508 kcal a day, not rated more pleasant, eaten
  faster; the paper's own limitations) and Dicken 2025 (dated); Lane 2024 (convincing and very low
  quality at once, and why two grading systems can say both); Gibney 2017, the Astrup and Monteiro
  debate, Braesco 2022. Meat: IARC (Bouvard 2015; the Q&A revised 23 September 2026), WCRF/AICR,
  NutriRECS (Johnston 2019) and its critics, conflicts named on all sides (D 4; Erickson 2017),
  **referring to Logic 9's absolute-risk working rather than redoing it**. Environmental and ethical
  reasons for eating less meat named as value questions outside the course.
- **Mechanism to explain:** GRADE certainty against strength of recommendation; how a panel's
  judgement about what people value turns low-certainty evidence into "continue" or "reduce".
- **Worked examples:** (a) simple: Hall 2019 read for what it establishes and what it cannot. (b)
  wrinkle: the same meat evidence through IARC's hazard question, WCRF's recommendation and
  NutriRECS's GRADE panel; the reader writes the value premise each needed.
- **Misconceptions:** "Processed food is all the same"; "a Group 1 carcinogen is as dangerous as
  tobacco" (Sleep 4 and Logic 9 covered this; recall, don't reteach); "NutriRECS said meat is
  healthy"; "the UPF effect is just salt, sugar and fat" and its mirror.
- **Practice:** sort ten foods by NOVA and note where you hesitated; write the value premise that
  turns "low certainty, small absolute effect" into each of two opposite recommendations.
- **Sources:** D 3, D 4, B 1 and 1a.
- **Connects:** lesson 7; leads to lesson 9's patterns, which bundle all of this.

### 9. Patterns, and the guidelines that bundle them (~85 min)
- **Objectives:** state what the Mediterranean and DASH trials showed, including what happened to
  PREDIMED in 2018; compare what four national or international guides recommend and say where they
  agree and differ; describe the 2025-2030 DGA and the dispute over it in terms its authors and its
  critics would each accept, dated.
- **Core ideas:** PREDIMED 2013, retracted and republished 2018, and the two readings (Ioannidis:
  "should no longer be considered a randomized trial"; the republished analysis); Lyon Diet Heart;
  CORDIOPREV; DASH (Appel 1997); vegetarian and vegan patterns (AND 2016; EPIC-Oxford's lower heart
  disease and higher haemorrhagic stroke; B12); low-carbohydrate patterns (ADA's acceptance and the
  fading glucose advantage; Virta at its design level); the comparison table (DGA 2020-2025,
  DGA 2025-2030, Eatwell, Canada 2019, WHO January 2026); the 2026 DGA per decision 8; Blue Zones
  and the Newman preprint as a claim that travelled.
- **Mechanism to explain:** why a pattern trial cannot say which part of the pattern did it, and why
  that is a strength for advice and a weakness for explanation.
- **Worked examples:** (a) simple: the table of guides, where the agreement is (vegetables, fruit,
  whole grains, less added sugar and sodium). (b) wrinkle: PREDIMED's retraction, what changed in the
  estimate, and what a reader should now say about it.
- **Misconceptions:** "The Mediterranean diet was proven in a trial that was later retracted, so it's
  debunked"; "vegetarian diets are healthier in every outcome"; "the guides all disagree"; "Blue Zones
  prove X".
- **Practice:** fill a blank row of the comparison table from one guide the reader has not seen;
  write the three points the 2026 DGA and its critics agree on.
- **Sources:** E (all), C 10 for fat, F 3 for the alcohol line. **The revision point**: every dated
  claim marked.
- **Connects:** lessons 5 to 8; leads to 10.

### 10. Supplements and alcohol (~70 min)
- **Objectives:** distinguish the situations where a supplement is indicated from those where the
  trials failed, with the grade or finding for each; explain how supplements are regulated in the US
  and what that does and does not guarantee; describe the alcohol J-curve dispute and why two federal
  reviews reached different conclusions.
- **Core ideas:** USPSTF 2022 (D for beta-carotene and vitamin E; I for the rest, and what an I
  statement is); VITAL (vitamin D, omega-3; the MI secondary endpoint as a hypothesis); Bjelakovic
  2014 dated; Endocrine Society 2024 (groups who may benefit); folic acid before conception; B12 for
  vegans and older adults; DSHEA and the FDA; Tucker 2018 and liver injury. Alcohol: Zhao 2023
  (0.93, P = .07), GBD 2018 ("minimises health loss is zero") and 2022, Mendelian randomisation
  (Millwood 2019), the Surgeon General's advisory, NASEM against ICCPUD, MACH15, the DGA 2025-2030
  line (dated), Canada 2023, the UK CMO.
- **Mechanism to explain:** why a supplement fixes a deficiency and adds little to a replete body;
  why sick-quitters and abstainer bias can make moderate drinkers look healthy; how MR uses genes that
  change drinking to get round confounding, and its limits.
- **Worked examples:** (a) simple: folic acid, the clean case. (b) wrinkle: VITAL's null primary and
  its MI secondary, and alcohol's MI signal in the same shape.
- **Misconceptions:** "Supplements can't hurt"; "an I grade means they don't work"; "the Lancet said
  no safe level"; "moderate drinking is proven good for the heart" and its mirror.
- **Practice:** read a supplement label claim and say what the FDA has and has not checked; sort
  five alcohol claims.
- **Sources:** F 1, F 2, F 3.
- **Connects:** lesson 1's beta-carotene case returns; leads to 11.

### 11. Reading a claim about your food (~70 min)
- **Objectives:** sort a claim about food with the institute's questions and "instead of what?", and
  say what would settle it; state when a food question stops being a self-help question and who to
  ask, including what "dietitian" and "nutritionist" mean; decide what, if anything, to change about
  how you eat, and say what the decision rests on.
- **Core ideas:** the sort, with every earlier course's question named and this course's joined;
  quick cases: water ("should not be interpreted as a specific requirement"), caffeine (EFSA 400 mg,
  200 mg in pregnancy), "detox" (whatever F and D support; if nothing, say the course has no source
  and drop it); when to ask a professional (F 5.5) and the titles (F 6); the course's refusal: it
  cannot tell you what to eat.
- **Worked examples:** (a) simple: a water claim run through the sort. (b) wrinkle: a real headline
  of the kind lesson 8 treated, now with every question at once.
- **Misconceptions:** "A nutritionist is a qualified professional"; "if the evidence is uncertain,
  nothing is known"; "the course should have told me what to eat".
- **Practice:** the project's first step.
- **Sources:** F 5, 6, 7, 8; all parts for the sort.
- **Connects:** closes the course; points to Strength and Fitness and Cooking Fundamentals.

## Assessments

- **Course-end test:** 30 items, about three per lesson (four for lessons 6, 8 and 9), at least two
  thirds application: a described study to classify, a claim to sort, a table to read, a swap to
  name. No item reuses a lesson's own case or numbers. Key positions varied irregularly, lengths
  balanced (defects 5 and 16).
- **Project: "One claim you acted on".** Deliverable: a two-page write-up. Steps: (1) pick a claim
  about food you have acted on or been told recently; (2) trace it to its source and name the
  study's design and read level; (3) classify it (established, contested, value) and say what would
  settle it; (4) answer "instead of what?" for it; (5) find what two of the guides in lesson 9 say;
  (6) check it against the callout's list and say whether it is a self-help question for you;
  (7) decide what, if anything, to change, and what the decision costs. Rubric: five criteria
  (tracing, classification, swap, guidance, decision), each 0 to 3, with descriptors, pass at 10 of
  15. **Write the project file before lesson 11 is drafted**, since lesson 11's practice points at it
  (defect 12).

## Neutrality notes

- **Saturated fat, salt, sugar, meat, alcohol, UPF, low-carb and the 2026 DGA are all contested
  empirical questions**, and in meat and the DGA a value layer sits on top. Each gets its best case
  from its own proponents (the research file has a primary statement for every side; if a lesson
  finds it does not, it says so rather than describing a side in its opponents' words, defect 10).
- **Count before reading for tone** (defect 14): citations per side, last word, explained against
  quoted, whose errors are in the misconception list. Lessons 6, 7, 8 and 9 will each have a
  misconception from each side.
- **Conflicts of interest**: name them on every side or on none (C's final bullet; D 4 on NutriRECS
  and Erickson; He and MacGregor and Action on Salt; the Blue Zones company hosting the rebuttal;
  the DGA Scientific Foundation's disclosed beef-industry grant). Never use one to dismiss a finding.
- **Politics**: the 2026 DGA is associated with a named administration. The lesson names the
  signatories because the document does, and attributes every evaluative sentence to a named source.
- **Diet identities** (vegan, carnivore, low-carb, Mediterranean) are held by readers as identities;
  no loaded adjectives, and each pattern's benefits and risks stated with the same care.
- **Body weight**: no language implying a reader's weight is a failing; decision 4.
