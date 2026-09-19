# Sources: Focus and Deep Work

<!-- unread: Newport (except 07), Mark-AttentionSpan (except 07), Csikszentmihalyi (except 07), Goleman, Leroy -->

*Stage 1 research, 2026-09-19. Written before any lesson is drafted. For each source: what it is good
for and what it establishes. Where a passage is quoted below it was read in the original and checked
character by character; where it was not, the entry says so.*

**The `unread:` line is the build's enforcement.** Cal Newport's *Deep Work* and Gloria Mark's
*Attention Span* are the two books a reader will have met, Csikszentmihalyi's *Flow* is the trade
statement of the state this course will be asked about, and Goleman's *Focus* is the third of the
shelf. **Sophie Leroy is on that line too, and she is the awkward case**: attention residue is one of
the two or three ideas a reader will bring to this course, her 2009 paper is paywalled, and it could
not be opened for this research. **The entry below carries it at search-summary level**, and the
line means no lesson may cite her for a claim until somebody reads it. A later session that gets
access should read it and take the name off.

---

## The first thing Stage 1 found, and it shapes the course

**This is the most advised-about subject in the whole self-improvement genre and one of the least
settled.** Three of its best-known empirical claims have been meta-analysed since 2016, and in
each case the meta-analysis is more interesting than the original finding and says something the
original does not.

- Media multitasking damages your attention: **118 assessments, and the effect in the
  performance-based half disappears once you correct for publication bias.**
- Having your phone on the desk costs you cognitive capacity: **22 studies, a pooled effect of
  g = −0.14, and nothing at all in the North American samples.**
- Attention can be trained by working-memory exercises: **87 publications, 145 comparisons, and no
  convincing far transfer at all.**

**So this course has an unusual shape available to it.** Where Habits and Self-Discipline had one
contested question in its second half, this subject has three, and each one is a worked case of the
same move: a striking finding, an enormous popular literature built on it, and a later synthesis
that the popular literature has not caught up with. **That is the spine, and it is better than a
course of techniques would be.**

**What this course must not do is re-teach Time Management lesson 5.** That lesson already covers
Gloria Mark's 2005 field study of fragmented work, how long people work before switching, and the
trace of the twenty-three-minutes figure to a source nobody can produce. `npm run taught` prints its
objectives. **This course takes what happens inside the interrupted task rather than how the day is
shaped**, and lesson 1 should say so in a line.

---

## 1. What an interruption actually costs, measured

**Mark, Gudith and Klocke, "The Cost of Interrupted Work: More Speed and Stress", *Proceedings of
CHI 2008*, pp. 107 to 110.** **Read in full on 2026-09-19** from the first author's copy at
`ics.uci.edu/~gmark/chi08-mark.pdf`. Six pages, free, and the most quotable experiment in the
subject.

- **The design.** Forty-eight subjects, 81 percent German university students with a mean age of 26.
  Each played a human-resources manager answering twelve emails per condition, instructed and
  incentivised "to answer all emails in their inbox as quickly, correctly and politely as possible".
  Three conditions, counterbalanced: no interruption, interruption on the same topic as the task,
  interruption on a different topic. The "supervisor" interrupting them was the experimenter in
  another room, by telephone or instant message.
- **The headline result, verbatim from the abstract**: "We found that context does not make a
  difference but surprisingly, people completed interrupted tasks in less time with no difference in
  quality."
- **The numbers**, from Table 1. Time to perform the task: baseline 22.77 minutes (s.d. 7.60), same
  context 20.31 (5.94), different context 20.60 (4.93). **The uninterrupted condition was the
  slowest.** Errors did not differ across conditions, and neither did the politeness measure.
- **What it cost**, verbatim: "Our data suggests that people compensate for interruptions by working
  faster, but this comes at a price: experiencing more stress, higher frustration, time pressure and
  effort." Table 3, on a 1-to-20 scale, baseline against same-topic and different-topic: mental
  workload 10.02 against 10.83 and 11.50; stress 6.92 against 9.46 and 9.13; frustration 4.73
  against 6.63 and 6.48; time pressure 11.02 against 12.69 and 12.17; effort 9.50 against 11.04 and
  11.52. **All five differ at conventional levels**, workload at p < .05 and the other four at
  p < .01, and the discussion says so in one sentence: after only twenty minutes of interrupted
  performance people reported significantly higher stress, frustration, workload, effort and
  pressure.
- **And one thing that did change in the work.** Email messages were longest in the uninterrupted
  condition, at 31.49 words on average against 29.17 and 30.16. The authors offer this as part of
  the interpretation: people wrote less to go faster.
- **The authors' own closing sentence**, verbatim: "So interrupted work may be done faster, but at a
  price."
- **The individual-differences finding**, which is worth a paragraph and not more. A stepwise
  regression found openness to experience and need for personal structure both predicted how quickly
  somebody finished an interrupted task, with R² = .14.

**Why this is the course's best single source.** It inverts what everybody expects, it is a real
experiment with a control, the effect is in the direction nobody sells, and the price is in
something other than the output. **A lesson built on it teaches the reader to ask what a measure
misses**, because a manager looking only at the time and the error count would conclude that
interruptions are free.

**Scope a lesson must carry**: 48 people, mostly German students, a 90-minute lab session, an email
task. This is not a study of deep work, and nothing here bears on tasks that take days.

---

## 2. How much of the time the mind is not on the task at all

**Killingsworth and Gilbert, "A Wandering Mind Is an Unhappy Mind", *Science* 330, 12 November 2010,
p. 932.** **Read in full**; it is a one-page Brevia and is posted openly in several places.

- **The method.** A web application for the iPhone contacting people at random during waking hours,
  asking what they were doing, how they felt, and "Are you thinking about something other than
  what you're currently doing?" with four options: no; yes, something pleasant; yes, something
  neutral; yes, something unpleasant.
- **The sample**, verbatim: "samples from 2250 adults (58.8% male, 73.9% residing in the United
  States, mean age of 34 years)". The wider database at the time held "nearly a quarter of a million
  samples from about 5000 people from 83 different countries".
- **The headline**, verbatim: "Mind wandering occurred in 46.9% of the samples and in at least 30% of
  the samples taken during every activity except making love."
- **And the caveat the authors themselves put next to it**, verbatim and almost never quoted: "The
  frequency of mind wandering in our real-world sample was considerably higher than is typically
  seen in laboratory experiments."
- **The happiness finding**, verbatim: "people were less happy when their minds were wandering than
  when they were not [slope (b) = −8.79, P < 0.001], and this was true during all activities,
  including the least enjoyable."
- **And the direction of causation, which is the part that travels worst.** Verbatim: "Although
  negative moods are known to cause mind wandering, time-lag analyses strongly suggested that mind
  wandering in our sample was generally the cause, and not merely the consequence, of unhappiness."
  **Note "strongly suggested" and "generally"**: this is a time-lag analysis in observational data,
  not an experiment, and the hedge is the authors' own.
- **The comparison that gives the paper its force**: activities explained 4.6 percent of the
  within-person variance in happiness; mind wandering explained 10.8 percent.

**How a lesson should use it.** As the measurement of the thing this course is about, with its
sampling method visible. **The 46.9 percent is this subject's travelling number** and it is a
self-report from iPhone owners who volunteered for a happiness app in 2010, which is a specific
population and not a fact about human beings.

---

## 3. Media multitasking, and the meta-analysis that undid it

**Ophir, Nass and Wagner, "Cognitive control in media multitaskers", *PNAS* 106(37), 2009, pp. 15583
to 15587.** **Search-summary level and the PDF was located but not read.** At that level: the
authors built a media multitasking index, split participants into heavy and light multitaskers, and
reported that heavy multitaskers performed worse on tests of filtering out distraction. **A lesson
may describe what the paper claimed at this level and must say so**; the figures belong to the
meta-analysis below.

**Parry and le Roux, "'Cognitive Control in Media Multitaskers' Ten Years On: A Meta-Analysis",
*Cyberpsychology* 15(2), 2021, Article 7.** **Read in substantial part on 2026-09-19**: the
abstract, the overall meta-analytic result, the moderator analyses and the conclusion. Open access.

- **The scale**, verbatim from the abstract: "Following a systematic search and selection process,
  118 assessments were included in the meta-analysis."
- **The overall result**, verbatim: "Overall, across all 118 assessments, the effect size for the
  association between media multitasking and cognitive control is small (z = .138, 95% CI [.107,
  .170], p < .001; with RVE: 95% CI [.102, .174], p < .001) and, as would be expected, highly
  heterogeneous (I2 = 79.76%, Q(117) = 531.795, p < .001)."
- **The finding that matters most, and it is the one to build a lesson on.** The effect splits by how
  it was measured. Performance-based assays: "the effect size is negligible but statistically
  significant (z = .091, 95% CI [.044, .139], p = .001)". Self-report measures: "the pooled effect
  size is small, statistically significant (z = .200, 95% CI [.165, .231], p < .001)".
- **And then the publication-bias check.** Egger's test was significant for the performance-based
  assays, so the authors ran trim-and-fill. **The test split the two halves**: for self-report measures
  Egger's test was not significant (z = −.803, p = .422), and for performance-based assays it
  indicated an association (z = 3.129, p = .002). Verbatim: "In this sensitivity analysis, the pooled
  effect for performance-based assays was no longer statistically significant (z = .032, 95% CI
  [−.024, .088], p = .260)."
- **So the association survives where people say how distractible they are, and does not survive
  where a task measures it.** That is a whole lesson, and it is the same shape as Habits lesson 2's
  point about what a criterion is doing.
- **The authors' own conclusion**, verbatim: "Ten years on from Ophir et al. (2009) the picture is
  not any more transparent. Based on the papers reviewed in this study we are no closer to
  understanding 'cognitive control in media multitaskers'." And, honestly, the other half: "However,
  complicating matters, studies adopting a different measurement approach than this first
  investigation have consistently produced results supporting the claim that media multitasking is
  negatively associated with everyday executive functioning."
- **Their own stated limitation**, verbatim: "the review explicitly targeted studies adopting a
  cross-sectional design. Therefore, any inferences about causality are limited."

**Also on the record**: Wiradhany and Nieuwenstein, "Cognitive control in media multitaskers: Two
replication studies and a meta-analysis", *Attention, Perception, & Psychophysics* 79, 2017, which
ran two replications and meta-analysed 39 studies. **Search-summary level only**, at which the
reported association was d = 0.17. Parry and le Roux supersede it in scope and were read instead.

---

## 4. The phone on the desk

**Ward, Duke, Gneezy and Bos, "Brain Drain: The Mere Presence of One's Own Smartphone Reduces
Available Cognitive Capacity", *Journal of the Association for Consumer Research* 2(2), 2017.**
**Search-summary level; not opened.** At that level: participants did working-memory tasks with
their phone on the desk, in a bag, or in another room, and those with the phone in another room
performed best. The paper is the source of "brain drain", which is now a phrase people use as though
it were a mechanism.

**Ruiz Pardo and Minda, "Reexamining the 'brain drain' effect: A replication of Ward et al. (2017)",
*Acta Psychologica* 230, 2022.** **Search-summary level; not opened.** At that level: a preregistered
direct replication of Ward's second experiment, six conditions crossing phone location with phone
power, using an automated operation span task and a cue-dependent go/no-go task, and **it did not
replicate**: no difference between phone-location conditions.

**Böttger, Poschik and Zierer, "Does the Brain Drain Effect Really Exist? A Meta-Analysis",
*Behavioral Sciences* 13(9), 2023, article 751.** **Read in substantial part on 2026-09-19**: the
abstract, the overall result, both subgroup analyses and the discussion. Open access at PMC.

- **The scale**, verbatim: "In a database search we identified 22 studies with a total of 43 relevant
  effects that could be assigned to the categories 'memory', 'attention', and 'general cognitive
  performance'."
- **The overall result**, verbatim: "The pooled effect across all studies was g = −0.14, with a 95%
  confidence interval (CI) of −0.24 to −0.03, at p < 0.05". The included effects are significantly
  heterogeneous, at I² = 61.84.
- **By cognitive domain.** Memory: g = −0.23, 95% CI [−0.36, −0.10], p < 0.001. **Attention: g =
  −0.07, 95% CI [−0.21, 0.06], p = 0.29.** General cognitive performance: g = 0.10, 95% CI [−0.52,
  0.72], p = 0.76.
- **By region, and this is the finding a lesson cannot leave out.** Asian samples g = −0.39, 95% CI
  [−0.57, −0.21], p < 0.001. European g = −0.20, 95% CI [−0.46, 0.06], p = 0.12. **North American
  g = −0.03, 95% CI [−0.15, 0.09], p = 0.60.**
- **The funnel plot showed no obvious asymmetry**, which the authors say in the results.
- **Heterogeneity by region**, from the paper's Table 2, and the Asian subgroup is the least
  heterogeneous rather than homogeneous: North America I² = 50.98 (Q = 48.96 on 24 df, p < 0.01),
  Europe I² = 70.71 (Q = 30.73 on 9 df, p < 0.01), Asia I² = 30.58 (Q = 10.08 on 5 df, not
  significant).
- **Why the regional split was run**, which a lesson leaning on it must say: the authors ran it
  because an earlier study, Mahsud and colleagues, 2021, had reported that Asian students
  concentrated better without smartphones than European students. **It was a check on a prior claim
  rather than a pattern found in their own data.**
- **Their closing recommendation, verbatim**, which a lesson must report alongside the intervals
  rather than instead of them: "In view of the present research results, it seems important that
  people in general, and especially children and adolescents in schools and classrooms, learn how to
  deal with the distracting potential of smartphones."
- **What the authors' reasoning for it appears to be**, at the level this course read: a real pooled
  effect in memory, and a distracting potential that the pooled cognitive-capacity measures were not
  testing. **That second half is this course's reading of their discussion rather than a sentence
  they write**, and a lesson using it must say so.

**Why this is the sharpest teaching case in the course.** The effect that a reader has certainly met
is, in the pooled evidence, small; it is in memory rather than in attention, which is the thing the
phrase claims; and it is absent in the samples from the country where the original study was run.
**The authors still conclude in favour of caution about phones in classrooms**, which a neutral
lesson must report alongside the figures rather than instead of them.

---

## 5. Whether attention can be trained

**Melby-Lervåg, Redick and Hulme, "Working Memory Training Does Not Improve Performance on Measures
of Intelligence or Other Measures of 'Far Transfer': Evidence From a Meta-Analytic Review",
*Perspectives on Psychological Science* 11(4), 2016, pp. 512 to 534.** **Abstract read verbatim**
from the PMC copy; the body was not opened.

- **The scale and the finding**, verbatim from the abstract: "87 publications with 145 experimental
  comparisons"; "Immediately following training there were reliable improvements on measures of
  intermediate transfer (verbal and visuospatial working memory). For measures of far transfer
  (nonverbal ability, verbal ability, word decoding, reading comprehension, arithmetic) there was no
  convincing evidence of any reliable improvements when working memory training was compared with a
  treated control condition."
- **The mediation check**, verbatim: "mediation analyses indicated that across studies, the degree of
  improvement on working memory measures was not related to the magnitude of far-transfer effects
  found."
- **And the publication-bias sentence**, verbatim and unusually blunt: "analysis of publication bias
  shows that there is no evidential value from the studies of working memory training using treated
  controls."
- **Their conclusion**, verbatim: "These results seriously question the practical and theoretical
  importance of current computerized working memory programs as methods of training working memory
  skills."
- **Note the phrase "treated control condition"**, which is the methodological point the paper turns
  on and which a lesson should teach: comparing training against doing nothing measures the
  expectation as much as the training.

**Mindfulness as attention training.** **Search-summary level only; no meta-analysis was opened.** At
that level, two syntheses are worth a later session's time: Yakobi and colleagues, 2021, reporting an
overall g of about 0.2 with significant effects on attention and executive control but not working
memory; and Verhaeghen, 2021, "Mindfulness as Attention Training", reporting average effects around
g = 0.29 for interventions and 0.32 for long-term practitioners. **Both are small effects and the
active-control question is the one to check** before any lesson uses them. A lesson may say the
effects are small and that this course has not read the syntheses, and must not put a figure in a
learner's hands at this read level.

---

## 6. Attention residue, which is the idea a reader will bring

**Leroy, "Why is it so hard to do my work? The challenge of attention residue when switching between
work tasks", *Organizational Behavior and Human Decision Processes* 109(2), 2009, pp. 168 to 181.**
**Paywalled at Elsevier and not opened. Search-summary level only, and Leroy is on the `unread:`
line accordingly.**

At that level, the account that travels is: attention stays partly with a task you have left, the
residue degrades performance on the next task, and finishing the first task, or being given time
pressure that forces disengagement, reduces it.

**Three things a Stage 2 session needs to know before building a lesson on this.**

1. **This course could not verify the design or the figures**, and the popular accounts of it
   disagree with each other about what the experiments did.
2. **This course could not find a replication either way.** That is not evidence of absence; it is a
   statement about what twenty minutes of searching turned up, and a lesson must put it that way.
3. **It is the concept most responsible for the popular version of this subject**, so a course that
   ignored it would leave a reader unable to read what they will actually be handed. **The honest
   handling is the one Habits lesson 4 used for the twenty-one days**: name it, say where it comes
   from, say this course has not opened the paper, and rest nothing on it.

---

## What the field considers essential

In the order it builds, and this is the backbone Stage 2 should start from.

1. **What is being measured when somebody says "attention".** Self-report and task performance are
   different instruments that produce different answers, which is the single most load-bearing fact
   in this subject and is demonstrated by source 3's split.
2. **What an interruption does to the work**, from source 1: not what it costs in minutes, which
   Time Management already teaches, but what it does to the person and to the output.
3. **How often the mind is elsewhere even with no interruption at all**, from source 2, and the
   difference between being interrupted and wandering.
4. **What the evidence says about the things people blame**: phones, media multitasking. Sources 3
   and 4, both of which are pooled evidence against a famous single finding.
5. **Whether any of it can be trained**, from source 5, and what "far transfer" means.
6. **How to design one working hour** from what survives all of the above, with the reasoning
   visible and the course's own inferences labelled.
7. **How to read a claim about attention**, which is this institute's closing move and belongs here
   as much as anywhere, because this subject's popular literature is worse than its evidence.

## Common misconceptions

- **"Multitasking makes you less able to focus."** The pooled performance-based evidence does not
  support it once publication bias is accounted for; the self-report evidence does. Source 3.
- **"Your phone drains your brain even face down."** The pooled effect is small, sits in memory
  rather than attention, and is absent in North American samples. Source 4.
- **"An interruption costs you the time it takes plus the time to get back."** Measured, people
  finished faster when interrupted. What it cost was elsewhere. Source 1.
- **"Focus is a muscle you can train."** No convincing far transfer from working-memory training,
  and no evidential value in the studies using treated controls. Source 5.
- **"Your mind wanders because you are undisciplined."** Nearly half of sampled moments, across every
  activity measured. Source 2.
- **"Deep work is a finding."** It is a trade book's framing. This course has not opened it and must
  say so wherever it is named.

## Contested questions and the positions on each

**Does media multitasking impair cognitive control?** Standards 3.1 case 2: a live dispute in a
field with real evidence on both sides. **For**: a decade of studies using self-report measures of
everyday executive functioning consistently find the association, and Parry and le Roux say so
themselves. **Against**: the performance-based half, which is the half that resembles the original
study, does not survive a trim-and-fill correction. **What would settle it**: a longitudinal or
experimental design, which the meta-analysis says does not yet exist.

**Does the mere presence of a phone reduce cognitive capacity?** Standards 3.1 case 2. **For**: a
significant pooled effect, g = −0.14, and a clear effect in memory. **Against**: a preregistered
direct replication failed, and the pooled effect is null in North American samples and null for
attention. **What would settle it**: more preregistered replications with active controls, and an
explanation of the regional difference, which the meta-analysts themselves call for.

**Can attention be trained?** Standards 3.1 case 1 for the working-memory half: the field has
largely settled and the popular literature has not caught up. For the mindfulness half it is case 2
and this course has not read enough to say more than that the effects are small.

**Is mind-wandering bad for you?** Standards 3.1 case 2 and the one to be most careful with. The
2010 paper's own time-lag analysis "strongly suggested" a direction, in observational data, which is
weaker than the way it is always reported.

## Open concerns for Stage 2

- **The boundary with Time Management lesson 5 is real and must be drawn in lesson 1.** Mark's 2005
  field study, the length of a work segment and the twenty-three-minute trace are all taught there.
- **This course cannot avoid *Deep Work* and has not read it.** The honest middle is the one Habits
  lesson 7 used for the four habit books: name it as widely read, say the course has not assessed it,
  and teach the reader to sort its claims.

  **Newport, Mark's *Attention Span* and Csikszentmihalyi carry `(except 07)` from 2026-09-19**, on
  the precedent Time Management lesson 8 and Habits lesson 7 both set: the last lesson of a course
  like this has to name the books a reader will actually be handed, because pretending they will not
  meet them is less useful and no more honest. Lesson 7 names the three, states in the body that
  none was opened, and rests no claim on any of them. **The mechanism keys to a lesson number rather
  than to a claim**, so a future edit to lesson 7 could cite one of these and pass the build. A
  reviewer checks that by eye.
- **The three titles, at search-summary level**, so that a lesson naming them takes them from here:
  Cal Newport, *Deep Work* (2016); Gloria Mark, *Attention Span* (2023); Mihaly Csikszentmihalyi,
  *Flow* (1990). **None was opened.** Goleman's *Focus* stays on the line without an exemption,
  because no lesson needs to name it.
- **The course must not become a productivity course.** Its `course.yaml` promises what attention is
  when it is measured and what an interruption costs. The pull towards "seven ways to focus" will be
  constant, and Habits' decision 1 is the model: name the thing the course will not do, in lesson 1,
  and hold it.
- **Every empirical source here is a lab study or a self-report instrument.** Source 1 is 48 mostly
  German students, source 2 is volunteers with iPhones in 2010, sources 3 and 4 pool studies that
  are overwhelmingly student samples. **A lesson naming that gap early, as Habits lesson 1 did, is
  worth more than one caveat per figure.**
- **One thing this course will be asked and cannot answer**: whether "flow" is a real state with
  measurable properties. Csikszentmihalyi is on the `unread:` line, the measurement literature was
  not read, and a course that improvised it would be doing the thing it exists to teach against.
  **If a later session researches it properly, it is a lesson.**
