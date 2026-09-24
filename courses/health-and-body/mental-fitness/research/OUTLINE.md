# Outline: Mental Fitness

*Stage 2, 2026-09-23. Built from `research/SOURCES.md` after its second pass (source 19) closed the
anxiety gap the first pass flagged. Sequenced for how the ideas build. A sensitive domain under
standards 3.4: the neutrality audit is mandatory before publish.*

## How many lessons, and why

**Nine.** The research file's opening finding decides the shape: almost every method in this subject
lands between about g = 0.2 and 0.6, and the loudest dispute in it is two camps reading the same 0.3
differently. So the course is less "what works" than **how to read a small-to-moderate effect**, and
it has to teach that instrument early, then use it on the methods people are actually offered, then
on the two public disputes, then hand it over.

1. **Where ordinary ends.** Definitions, stepped care, scope, and the refusal stated up front.
2. **What a small effect is, and what it was compared with.** The course's instrument lesson.
3. **Self-help CBT, with and without a guide.** The first-line method, and the one closest to what
   the reader is doing by taking this course.
4. **Worry.** GAD specifically, because the anxiety evidence has its own shape (source 19).
5. **Exercise, asked three ways.** The cleanest case of one question giving three sizes.
6. **Mindfulness, behavioural activation and breathing.** Three methods, their evidence, and the harms
   one of them carries.
7. **Resilience, a ratio and a mindset.** Three popular ideas; one refuted, one mostly misread, one an
   association that became a talk. The compression lesson.
8. **Antidepressants: one number, two readings, and a hypothesis.** The neutrality set-piece.
9. **Reading a claim about your mind.** The closing lesson, the course's added question, the refusal.

**A tenth lesson on panic was considered and folded into lessons 1 and 4.** The file has CG113's
panic material and the chest-pain safety line and little else; a lesson built on that would be thin.

## What is deliberately left out, and said so in lesson 1

- **Mental illness as a subject**: PTSD, OCD, bipolar disorder, eating disorders, psychosis, substance
  problems, self-harm and suicide prevention. Not researched. Named, with where to go instead.
- **Children and adolescents.** Adult guidelines only; WHO says antidepressants "should not be used for
  treating depression in children".
- **Insomnia.** **Sleep** lesson 6 covers CBT-I; this course points there.
- **Mapping any health system.** The course names NHS Talking Therapies as one self-referral route and
  the crisis lines by country, and says plainly that elsewhere "a doctor" is the route and the course
  cannot map a health system. It does not research US insurance, employer programmes or community
  centres, and says so.
- **Supplements**, except St John's wort, which appears only with NG222's interaction warning.

## Eight decisions, settled here so no lesson re-opens them

**1. The crisis callout is on every lesson, identical, and a check enforces it.** The text:

> :::callout If you're struggling right now
> This course is education, not care. If you're thinking about suicide or self-harm, or don't feel able to keep yourself safe, contact emergency services (911 in the US and Canada, 999 in the UK, 112 across the EU, 000 in Australia) or a crisis line: call or text 988 in the US and Canada, call Samaritans on 116 123 in the UK and Ireland, or Lifeline on 13 11 14 in Australia. Elsewhere, findahelpline.com lists free, confidential lines by country.
> :::

It sits directly after each lesson's opening paragraph. **The numbers live in this one block**, and
`npm run validate` should fail a mental-fitness lesson that lacks it or carries a different version,
so a number that changes is one edit plus a check, not nine hunts. **The first lesson drafted adds
that check** (root rule 10). The 112 figure must be checked against a source and added to
`SOURCES.md` §4 before lesson 1 is published; if it cannot be, it comes out of the block.

**2. No lesson diagnoses, and no lesson hands the reader a checklist to score.** Criteria appear as
what a clinician weighs, with CG113's "does not rely solely on the number, severity and duration of
symptoms" beside them every time.

**3. No medication advice in either direction.** No doses, no switching, no stopping. **Any lesson that
touches antidepressants ends with NG222 1.4.12**: talk to the prescriber, it is "usually necessary to
reduce the dose in stages over time". Lesson 8 is the only lesson that discusses drugs at length.

**4. Every figure carries its comparator.** This course's addition to the institute's claim sort is
**what did the comparison group get?** *(Amended at lesson 2's review, 2026-09-23: this said "compared
with what?", which **Logic and Argument** lesson 9 already teaches as a question about baselines. This
course's version is the sharper one for treatment trials, where the comparison group is a condition
people are put in.)* Memory added the sample, Focus and Deep Work the
instrument, Note-Taking the setting, Sleep the clock. A self-help effect against a waiting list and
the same method against another active treatment are different numbers, and source 7 shows the
waiting list flatters. Introduced in lesson 2, used in every method lesson, joined to the sort in
lesson 9.

**5. Read levels at the point of use.** Most of the file is abstract level. A lesson repeats the level
wherever it prints a number, in the form Sleep used.

**6. The positivity ratio is "shown to be unfounded", never "retracted".** Source 14 and 19i: PubMed
indexes an erratum and no retraction, and the correction notice itself was not read.

**7. The `unread:` line exempts McGonigal for lesson 07 only**, so that lesson can name the talk through
which most readers met the Keller study, and says at the point of use that the course has not read
her book. The line becomes `McGonigal (except 07)` in the same commit as this outline.

**8. The closing refusal is about the reader's own case.** "This course cannot tell you whether what
you have is ordinary or clinical, and here is who can." The evidence for the refusal is the guidelines'
own requirement of a comprehensive assessment.

## Lesson sequence

### 1. Where ordinary ends (~80 min)

**Objectives.**
- Distinguish ordinary stress, worry and low mood from an anxiety disorder or depression as the
  guidelines describe them, and say why a symptom count does not settle it
- Describe stepped care and say where a self-help course sits in it
- State what this course covers, what it leaves out, and where a reader should go instead

**Core ideas.** WHO's opening sentences on everyday anxiety and on the disorder (source 3). CG113's
worry criterion and its insistence on assessment beyond symptom counts; "a panic attack does not
necessarily constitute a panic disorder" (source 1). NG222's severity elements and 1.2.6 (source 2).
Stepped care: CG113's four steps and NG222's two tables, least intrusive first and a rule for
stepping up. **The course sits at step 0 for most readers and alongside step 2 at most for anyone
else.**

**Mechanism to explain.** Why duration, distress and function draw the line rather than the presence
of a feeling, using the guidelines' own words. Why a guideline refuses a checklist.

**Worked examples.** (a) Simple: two invented people with the same symptom on the same day, one a
week before an exam and one for eight months; read what the guidelines would weigh. (b) With a
wrinkle: a panic attack with chest pain. CG113's A&E line, "minimum investigations necessary to
exclude acute physical problems", and why this lesson will not tell a reader chest pain is anxiety.

**Misconceptions.** "Anxiety is bad; the goal is not to feel it." "I had a panic attack, so I have
panic disorder." "If I tick enough symptoms, I have depression."

**Practice.** (1) Write down, without scoring anything, what you would tell a GP about a hard stretch
of your own life, using the three things the guidelines weigh. (2) Find the self-referral or first
route to care where you live, and write it down before you need it.

**Sources.** 1, 2, 3, 4. **Safety lines in the body, not footnotes.** Scope list in full.

**Connects.** Back to **Sleep** lesson 1's scope and lesson 6's guideline grades. Forward to lesson 2.

### 2. What a small effect is, and what it was compared with (~85 min)

**Objectives.**
- Read a standardised mean difference and say what 0.2, 0.5 and 0.8 mean in plain terms, at the
  level of the conversions this course labels as its own
- Explain why the same method looks bigger against a waiting list than against an active treatment
- Ask the comparator question of any effect size

**Core ideas.** The band (research file, opening): most methods 0.2 to 0.6. Source 7 on waitlist
inflation. **Note-Taking** lesson 5 taught Hedges' g and **Sleep** lesson 5 used the normal-curve
conversion; this lesson builds on both by name and does not re-teach them.

**Mechanism to explain.** What a waiting list does: people expecting treatment later may wait for it
rather than try anything, so the control group underperforms ordinary life. **That reading is source
7's, and the lesson quotes it rather than supplying its own.**

**Worked examples.** (a) One method, three comparators, three numbers, from source 7. (b) With a
wrinkle: an app advertised as "as effective as therapy" on a waiting-list comparison; what the claim
would need.

**Misconceptions.** "A bigger effect size means a better treatment." "An effect of 0.3 means 30 percent
better." "If it beat the control group, it works for me."

**Practice.** (1) Take three effect sizes from this file, with their comparators, and rank them twice:
by size, and by how much the comparator flatters. (2) Find one advertised mental-health app and write
down what its evidence was compared with, or that it doesn't say.

**Sources.** 5, 7, and the opening finding's list. **Connects.** Forward to every method lesson.

### 3. Self-help CBT, with and without a guide (~85 min)

**Objectives.**
- State what the evidence shows for self-help CBT against no treatment and against face-to-face
  therapy, with comparator and certainty
- Explain what a guide adds, and for whom it matters most
- Describe NICE's step-2 self-help as specified, and say how a book or app differs from it

**Core ideas.** Sources 5 and 6, and 19a to 19d. NICE's own specification of non-facilitated and guided
self-help (19a), verbatim, which is more specific than most readers assume. Mayo-Wilson's two halves
(19b): medium effects against no intervention, and "short-term and long-term effectiveness ... has not
been established". The IPD finding that the guide matters more as symptoms rise (6b).

**Mechanism to explain.** Why guidance helps, **at the level the sources give**, which is adherence
and support rather than a new ingredient; any further mechanism is the course's and labelled.

**Worked examples.** (a) Read Mayo-Wilson's two comparisons side by side. (b) With a wrinkle: this
course is itself unguided self-help. What the evidence licenses about the reader doing it.

**Misconceptions.** "A self-help book and guided self-help are the same thing." "Self-help is for mild
problems only, so if it didn't work I'm severe." "Face-to-face is always better."

**Practice.** (1) Compare one self-help book or app against NICE's 1.2.13 specification line by line.
(2) Write what you would ask for if you wanted the guided version.

**Sources.** 1, 2, 5, 6, 19a to 19d. **Connects.** Back to lesson 2's comparator. Forward to lesson 4.

### 4. Worry (~80 min)

**Objectives.**
- Describe what distinguishes GAD from ordinary worry in CG113's terms
- State what the evidence shows for internet and psychological treatment of GAD, and what it does not
  show for single techniques
- Evaluate a single worry technique against the evidence behind it

**Core ideas.** 19e, 19f. **The finding the lesson is built on**: CG113's step 2 names structured
CBT-based self-help and psychoeducational groups and names no single technique, and the single
technique a reader is most often given, worry postponement, has small trials that disagree and no
meta-analysis this course found. Applied relaxation at step 3 (19a). Panic, briefly, with the
chest-pain line from lesson 1.

**Mechanism to explain.** The difference between a package that works and a component that has not
been tested alone, which is **Sleep** lesson 6's sleep-hygiene point arriving in a new place.

**Worked examples.** (a) Worry postponement's trials, read one against another. (b) With a wrinkle:
what a single technique's absence of evidence does and does not mean (not "doesn't work").

**Misconceptions.** "Worrying is useful because it prepares you." (Treat as a belief the literature
studies, not one the course refutes, unless 19e supports more.) "Postponing worry is proven." "If
self-help didn't fix my worry, nothing will."

**Practice.** (1) Take one worry technique you've been told and find the level of evidence behind it.
(2) Write the step-2 options available where you live.

**Sources.** 1, 19a, 19e, 19f. **Connects.** Back to **Sleep** lesson 6. Forward to lesson 5.

### 5. Exercise, asked three ways (~85 min)

**Objectives.**
- State what the whole literature, the best-controlled trials and the head-to-head comparisons each
  show about exercise for depression
- Trace a press release's ratio back to its paper and say what changed
- Say what the evidence shows for exercise and anxiety, and what NICE does and does not recommend

**Core ideas.** Source 8 in full, and 19g. Singh's paper against its press release ("1.5 times") (8e).
The Cochrane 2026 head-to-head, "probably little to no difference" (8b). NICE lists group exercise for
less severe depression and names no exercise for GAD (19a).

**Worked examples.** (a) One question, three sizes. (b) With a wrinkle: the press release and the paper
side by side.

**Misconceptions.** "Exercise is 1.5 times more effective than therapy." "Exercise is proven to treat
depression." "NICE recommends exercise for anxiety."

**Practice.** (1) Read Singh's release and abstract side by side, both free. (2) Name the comparator of
the last exercise-and-mood claim you met.

**Sources.** 2, 8, 19a, 19g. **Connects.** Back to lesson 2; forward to lesson 7's compression.

### 6. Mindfulness, behavioural activation and breathing (~85 min)

**Objectives.**
- State the evidence for each at its comparator and certainty
- Explain why "comparable to antidepressants" is the wrong summary of the mindfulness evidence
- State the harms and contraindications the sources name

**Core ideas.** Sources 9, 10, 11, 19h. Galante 2023's high confidence for group programmes against
passive controls; Goyal on active controls; Van Dam's "misleadingly described"; Kuyken on MBCT for
relapse, the narrow comparison that is real. **The harms paragraph**: NCCIH via Van Dam, MBSR's own
exclusions, NG222 Table 1's note. Behavioural activation's evidence. Breathing's small evidence.
**Focus and Deep Work** lesson 6 covered meditation for attention at search-summary level; this lesson
is about mood and anxiety and says the two are different outcomes.

**Worked examples.** (a) The mindfulness evidence sorted by comparator. (b) With a wrinkle: the one
comparison where "comparable" is fair, MBCT against maintenance antidepressants for relapse, and how
narrow it is.

**Misconceptions.** "Mindfulness works as well as antidepressants." "Meditation is harmless."
"Behavioural activation is just 'keep busy'."

**Practice.** (1) Sort three mindfulness claims by comparator. (2) Write who a programme's own
exclusion criteria would have left out, and why that matters for a reader.

**Sources.** 2, 9, 10, 11, 19h. **Connects.** Back to Focus and Deep Work lesson 6 and lesson 2.

### 7. Resilience, a ratio and a mindset (~85 min)

**Objectives.**
- State the resilience base rate and what the training evidence shows
- Describe how the positivity ratio was examined and what survived, in the parties' own words
- Distinguish the observational stress-mindset association from the experimental results

**Core ideas.** Sources 13, 14, 15, 12. Bonanno's trajectories: resilience as the common response
(13a, 13b). Kunzler's "very uncertain" (13c). Brown, Sokal and Friedman against Fredrickson's reply
(14b, 14c): **both sides in their own words, the course reaching the verdict the file supports (the
2.9013 tipping point is unfounded) and no verdict on the weaker claim.** Keller's association and the
talk that carried it (15a; McGonigal named under decision 7). Bosshard and Gomez's meta-analysis, with
the trim-and-fill figure beside the headline (15c). Expressive writing, below the band (12).

**Mechanism to explain.** The three shapes from **Sleep** lesson 7 (attribution moved, association
hardened, inconvenient part dropped) applied to three new cases, named as that lesson's frame.

**Worked examples.** (a) The ratio's life and examination. (b) With a wrinkle: the mindset claim, where
the experimental evidence is real and small and the famous version is an association about death.

**Misconceptions.** "Resilient people are rare, and resilience is a trainable skill." "You need three
positive emotions for every negative one." "Believing stress is harmful is what kills you."

**Practice.** (1) Trace one resilience or positivity claim back to its source in 20 minutes. (2) Put
the stress-mindset headline next to the meta-analysis's corrected figure.

**Sources.** 12 to 15. **Connects.** Back to **Sleep** lesson 7. Forward to lesson 8.

### 8. Antidepressants: one number, two readings, and a hypothesis (~90 min)

**Objectives.**
- State the drug-placebo difference both Kirsch and Cipriani report, and say what each side reads it
  as meaning, in its own words
- Explain what "the average hides a responder group" claims and what would test it
- Describe the serotonin-hypothesis dispute as two claims of different strength

**Core ideas.** Source 16 (16a, 16b, 16c) and 17 (17a, 17b). **The number is shared; the reading is
contested.** The guidelines' positions reported as the guidelines' (NG222 1.5.3, Table 2). The
serotonin dispute as a strong claim (low serotonin causes depression) and a weak one (serotonin is
implicated), with each side's strongest sentence. **No verdict on what a reader should do.**

**Mechanism to explain.** Why a clinical-significance threshold is a judgement, not a finding; why an
average of 0.3 can hide a subgroup; why "the chemical imbalance story is unsupported" and "the drugs
don't work" are different sentences.

**Worked examples.** (a) The two numbers side by side. (b) With a wrinkle: Stone and colleagues,
co-authored by Kirsch, and what a responder subgroup would mean.

**Misconceptions.** "Antidepressants are no better than placebo." "Antidepressants fix a chemical
imbalance." "If the serotonin theory is wrong, the drugs don't work."

**Practice.** (1) Read Moncrieff and Jauhar's abstracts side by side, both free, and mark one strong
point each. (2) Write what you would ask a prescriber, without deciding anything.

**Sources.** 2, 16, 17. **Ends with NG222 1.4.12, under decision 3.** **Connects.** Back to lesson 2
and **Sleep** lesson 6's grades.

### 9. Reading a claim about your mind (~85 min)

**Objectives.**
- Sort a claim about stress, anxiety or mood, and ask the comparator question of it
- State what this course cannot tell a reader about themselves, and who can
- Decide what, if anything, to change, and when it stops being a self-help question

**Core ideas.** The institute's sort, used not re-taught, in **Sleep** lesson 8's form. The comparator
question joined to it. The sources side by side with a comparator column. **The refusal** (decision 8).

**Worked examples.** (a) Four invented specimens sorted, one welded. (b) The source table with what
each licenses against its comparator.

**Misconceptions.** "If a method has evidence, it will work for me." "Needing help means self-help
failed." "Somebody must have checked the app."

**Practice.** (1) Trace one claim with a number in 20 minutes, five endings. (2) **The decision**, four
endings: change one thing, keep something deliberately, stop deciding, **or talk to someone**, the
fourth listed first when any lesson 1 reason applies.

**Sources.** All. **Connects.** Back to the whole course.

## Assessments

### Course-end test

**Eighteen items**, at least thirteen applying the course to material in no lesson.

| Area | Items |
|---|---|
| Ordinary and clinical, stepped care (L1) | 2 |
| Effect sizes and comparators (L2) | 3 |
| Self-help CBT (L3) | 2 |
| Worry (L4) | 2 |
| Exercise (L5) | 2 |
| Mindfulness, BA, breathing (L6) | 2 |
| Resilience, ratio, mindset (L7) | 2 |
| Antidepressants and serotonin (L8) | 2 |
| Sorting a claim (L9) | 1 |

**Three cross-lesson items**: the comparator question on an exercise claim (L2, L5); a self-help app's
waiting-list comparison (L2, L3); and a compressed antidepressant headline (L7, L8). **No item asks a
reader to classify their own symptoms**, under decision 2.

### Project: the programme you were offered

**About three hours over a week.** Deliberately not the shape of Sleep's (which measured the reader's
own nights) and deliberately **not a mood log**: a course cannot safely ask a distressed reader to
track their symptoms and has no one to read the result.

The reader picks one self-help programme, app, book or course aimed at stress, worry or mood (this
one counts) and writes a four-part audit: **what it claims**, word for word; **what evidence it
cites**, traced; **the comparator** behind each figure it uses; and **where it sits against NICE's
step-2 specification** (19a). Then one paragraph: what the programme could fairly say about itself.

**Rubric, five rows**: claims quoted exactly; every cited figure traced or marked untraceable;
comparator named for each; the NICE comparison made line by line; the closing paragraph neither
harsher nor kinder than the evidence. **Two of the five are about honesty rather than analysis**, as in
the courses before it.

## Neutrality notes

**A sensitive domain under standards 3.4, and the audit is mandatory.**

- **Lesson 8** is the set-piece. Count before tone: quotations each side gets, who is explained, who
  gets the last word, whose errors are in the misconception list. Stone and colleagues, with Kirsch as
  a co-author, is the bridge and must not be used as a gotcha on either side.
- **Lessons 5 and 6** carry enthusiasm risk: exercise and mindfulness are the methods a general reader
  most wants to hear work. Headline figures travel with their best-controlled and head-to-head figures.
- **Lesson 7** carries the opposite risk, of sneering at popular psychology. The positivity ratio's
  author accepted the critique in substance; say so in her words.
- **Every lesson** is read by somebody who may be struggling. No sentence may imply that needing more
  than self-help is a failure, and no sentence may imply a method will work for the reader.

## What downstream courses will need this one to have taught

The comparator question, for **Statistics for Citizens**, **The Scientific Method** and **Medical
Literacy**; the stepped-care idea, for Medical Literacy; and the difference between a package and a
component, for **Habits and Addiction**.
