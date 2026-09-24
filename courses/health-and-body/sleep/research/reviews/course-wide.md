# Course-wide review findings: Sleep

Findings that belong to the course rather than to any one lesson, from the Stage 4 reviews.

## Open

- **"Base rate" against "baseline rate".** **Logic and Argument** teaches the concept as *base rate*
  in two lessons. This course says *baseline rate* throughout and has not said they are the same
  thing. One clause fixes it, in whichever lesson uses it first, and lessons 5 to 8 should use one
  name. *(Lesson 3's review.)*
- **`SOURCES.md` §3's Objectives quotation is unused and is the best material in the file for the
  hardest neutrality problem in the course.** The authors frame their own work as evidence about a
  relationship rather than a cause, in their own words. Defect 1: research gathered at Stage 1 and
  never used. Worth reaching for when lesson 8 is drafted. *(Lesson 3's review.)*
- **The `minutes` model cannot price an exercise that says "come back in a fortnight".** This course
  generates at least two of them: lesson 1's project section and lesson 2's second exercise. Reading
  Well carries four EXCEPTIONS entries for the same shape. Either a cue form the model can read, or
  an entry per lesson as they land. *(Lesson 1's and lesson 2's reviews.)*

## Closed

- **A correction landed in the outline and not in the research file or the lessons.** The outline
  recorded, on 2026-09-19, that "reaction-time task" was an inference the source does not support and
  that no lesson may name a task. `SOURCES.md` still said it twice, and lesson 1 told the reader
  lesson 2 used one, four sentences before lesson 2 refuses to name any task at all. **Fixed in all
  three places.** It is the second time in two days that a correction reached one file and not its
  neighbours, which is worth remembering the next time one is made. *(Lesson 1's and lesson 3's
  reviews.)*
- **`assessments/` was empty while two lessons pointed readers at the project as though it existed**,
  one of them telling them its first section could not be written later. Defect 12. **The project is
  written**, from the outline, and lesson 1's exercise now asks for the four numbers the outline
  specifies rather than a different three. *(Lesson 1's and lesson 2's reviews.)*
- **The tracker-buyer observation in `SOURCES.md` §6 was labelled as a reading of the paper when its
  first half is an unmeasured claim about who buys consumer electronics.** **Relabelled in the
  research file and in lesson 1**, so lessons 4 to 8 inherit the tighter version. *(Lesson 1's
  review.)*

## Standing, for every lesson in this course

- **Sensitive domain, standards 3.4.** The neutrality pass is mandatory on every lesson and the
  neutrality audit is mandatory before publish. **The risk is not political.** Every review so far
  has found the same shape: the course is good at refusing to give advice and less good at putting
  the other side's case where a reader who does not click can see it.
- **Three of the three lessons reviewed have had a scope dropped in an unquoted lead-in** while the
  quotation itself stayed verbatim. Hours in bed read as hours slept; a subset of devices read as
  all of them; a reference group invented for a meta-analysis. **`npm run quotes` cannot see any of
  these**, because the marks are clean.
- **Per cent and percent are mixed** across the course: bodies say "per cent", quizzes "percent". Pick one before publish (from lesson 4's review, 2026-09-23).
- **Key sequences shared an internal pattern across lessons 5 and 6** (item 4's key equal to item 1's,
  item 6's to item 2's), which the adjacent-lesson check cannot see. Lesson 6's reordered on
  2026-09-23 to 1,0,3,2,1,3; lesson 7's to 2,0,3,1,3,0; lesson 8's to 1,3,0,2,1,0.
- **"48 healthy adults, 14 nights" was wrong in four places** (lessons 1, 2 and 8 and `SOURCES.md`):
  48 is the total across the 14-night restriction experiment and the 3-night deprivation one. Found at
  lesson 8's review and corrected everywhere.
- **"A known error direction" for consumer devices was wrong in lesson 1 and `SOURCES.md`.** Low
  specificity overcounts quiet wake, but sensitivity below 1 undercounts sleep, so the net direction
  depends on how long the person lay awake. Corrected to "leans towards overcounting on a night with a
  lot of lying awake".

## 2026-09-23 — Course-wide neutrality audit, standards Part 3

**STATUS: AUDITED AND APPLIED, same session. VERDICT: PASS. This course meets standards Part 3 and
may publish** once its other gates are met. `sensitive_domain: true` makes this audit mandatory under
`courses/CLAUDE.md` rule 6 and standards 3.4 and 3.5 (medicine), and it is now done. Nine fixes
applied, each a clause, a sentence or a quiz option. Nothing a Stage 4 review recorded as closed was
reopened without a new reason, and each fix below names its new reason.

Fresh context. Read: standards Part 3 in full, `.claude/commands/neutrality-audit.md`,
`docs/SOURCE_NOTES.md`, `course.yaml`, `research/OUTLINE.md` with its six decisions and its
neutrality notes, all eight lessons, both assessments, and every file in this directory. `SOURCES.md`
read for §§1 to 3, 9, 13, the essentials, misconceptions, contested questions and safety sections,
and used to check every claim below.

### The six perspectives checked against, and what each objected to

**A sleep-medicine clinician who prescribes hypnotics.** Lesson 6's review already ran the Turing
test from this side and fixed it (CBT-I's visits, cost, slowness and access; the drug guideline's
stated purpose; "should not be construed as an indication of ineffectiveness"; the differing
comparators). Across the course this reader finds nothing further: the course-end test's two L6 items
correct one misreading in each direction ("the therapy works better" and "sleep hygiene doesn't
work"), and no lesson outside 6 says anything about a drug. **No objection survived.**

**A CBT-I therapist.** Would object that lesson 6 lends lesson 2's restricted healthy volunteers to
sleep restriction therapy, which restricts time in bed towards sleep actually obtained rather than
below it. The lesson already labels this "this course's reason for caution rather than a finding
about this treatment" and says the participants "weren't insomnia patients". **Considered and kept**,
because the guideline's own contraindications carry the caution and the course label is correct.
Would also worry that a course telling readers their feeling of being fine is not evidence could feed
sleep anxiety; lesson 2's "That's not a reason to assume you're impaired" and lesson 8's third ending
("worrying about sleep has costs of its own", labelled as the course's view) answer it.

**A night-shift nurse.** Decision 5 holds in lesson 4: the classification, its grades, what it
cannot say, Kogevinas's view on schedules labelled as one chair's view, a checkpoint that ends "which
is hers to decide", and "This course has no advice for anybody who works nights". Two sentences
elsewhere did not hold it. **Lesson 3's statement of the panel's case said "Sleeping seven hours
costs almost nothing"**, in a paragraph that reads as the course's voice by its third leg, and that
is false for her (N-04). **Lesson 4's mid-sleep exercise told a reader with no free days that lesson 8
is where they would weigh "what to do about it"**, which presumes a problem to fix (N-07).

**A self-identified natural short sleeper.** Would accept lesson 8's refusal, which rules out an easy
answer in each direction. Would object, with the consensus panel, to two sentences that reason past
the release. The course-end test reintroduced both tilted facts lesson 8's review had corrected:
its key said people held to six hours "felt fine too" and "genuine short sleepers are rare", and its
explanation said "Some people do need less", which `SOURCES.md`'s opening section itself forbids ("'sleep less',
not 'need less'") (N-01). Lesson 8's checkpoint drew "rule out 'everybody needs seven or more'" from
the release alone, when the release reports sleep and the ruling-out belongs to the panel's own
sentence on variability (N-03).

**A reader who admires *Why We Sleep*.** Walker appears only in lesson 7, as the build enforces, and
lesson 7's review ran the test in both directions. Across the course this reader objects to one
thing: lesson 8 states the critic's own figure, "more than 130 hours", as fact where lesson 7 had it
as "He reports" (N-09). The course-level framing in `course.yaml` ("where the popular claims about
sleep outrun the studies behind them") is the course's thesis, and the course demonstrates it on
named sentences with the author's own concessions, so it is kept.

**A sceptic of public-health messaging.** Is well served: lesson 3 quotes the verb, gives the
long-sleep arm the same reverse-causation reading as the short, and prints "Uncertain" on more than
nine hours. Would object in the other direction that the course never mentions the panel is a
professional society of sleep physicians. **Considered and not changed**: nothing read suggests a
conflict, and `docs/SOURCE_NOTES.md`'s rule is to state a declared interest once, not to insinuate an
undeclared one. The consensus panel, in turn, would object to lesson 3's opener calling the cohorts
"the weaker evidence" with no scope, which contradicts `SOURCES.md`'s "Neither of those studies is
weak" (N-05).

### The counts

**Misconceptions, by the direction of the error corrected**, across the five lessons where the axis
applies (2, 3, 4, 5, 8): errors of alarm corrected **9** ("proves short sleep is dangerous", "everybody
needs eight" twice, "sleeping too long is dangerous", "a million people proves it", "light before bed
is bad", "social jetlag is a diagnosis", "Group 2A means cancer", "an all-nighter wipes it out");
errors of complacency corrected **7** ("you adapt", "debt is a metaphor", "only an association, ignore
it", "my clock is fixed", "a nap is as good as a night", "g of 0.44 is too small", "if I feel fine I
am fine"). A slight deflationary lean, which is where the evidence the course read points, and each
lesson with an alarm-side list also carries at least one complacent entry.

**Lesson 6 on medication**: one pro-drug error ("pills are the real treatment", which itself ends
"this is not 'pills don't work' either"), one pro-supplement, one pro-hygiene, one under-reading of
CBT-I and one over-reading of its access. **Lesson 7 on the dispute**: three errors a critic's
sympathiser makes, one an author's sympathiser makes, as its review left it, with the course's own
no-verdict sentence closing each section; not reopened.

**Whose case is explained, not merely quoted.** The consensus panel (lesson 3, three legs, visible
prose), the prescriber and the CBT-I advocate (lesson 6), both sides of the dispute (lesson 7), and the
natural short sleeper (lesson 8) all have a case made for them. Kogevinas is quoted and labelled. The
night worker has no case to make, because the course asks nothing of her, which is decision 5.

**Advice drift.** Every imperative about the reader's own sleep or medicine was checked. The only
ones in the course are lesson 1's four safety triggers and lesson 8's fourth ending that points at
them, which `SOURCES.md`'s safety section requires. One judgement came close (N-06).

### The nine fixes

**N-01 the course-end test undid lesson 8's review.** Item 6's key said the restricted sleepers "felt
fine too" and "genuine short sleepers are rare", and the explanation "Some people do need less".
**Closed:** the key now reads "Six hours in bed soon left people barely any sleepier, and one mutation
is rare", the explanation says "might report" and "the one mutation", and its last sentence now
answers the distractor from the panel's own statement that need varies. Key index unchanged at 0.

**N-02 the same test's item 5 key said people held to six hours "rated themselves barely sleepier
than before"**, which drops the initial rise the explanation beside it reports. **Closed:** "sleepiness
ratings at six hours barely moved while performance fell". Key index unchanged at 3.

**N-03 lesson 8's checkpoint drew a claim about need from a release about duration.** **Closed** by
one clause: the ruling-out now rests on "the statement itself says need varies and, on the release's
account, some people naturally sleep much less".

**N-04 lesson 3's "Sleeping seven hours costs almost nothing".** The panel's case stays at full
strength; **closed** by "On that view, sleeping seven hours costs most people little, though it costs
more to somebody on nights or working two jobs", which is decision 5 and lesson 3's own list of third
causes.

**N-05 lesson 3's opener, "The bigger evidence is the weaker evidence".** **Closed:** "weaker evidence
about cause", which is what the lesson goes on to show and all it shows.

**N-06 lesson 5's night-before-an-exam sentence.** It is labelled a judgement, and it is the one piece
of advice about the reader's own sleep in the course outside the safety lines. **Kept, and closed**
by one clause saying what the judgement stretches past: "no design in the paper compared a night's
sleep with a night's extra study".

**N-07 lesson 4's "no free days" line presumed a problem.** **Closed:** lesson 8 is now where a reader
would weigh "whether it matters to you".

**N-08 the project said the course was "about how badly people estimate their own nights".** Lesson 1
calls the diary "a different subject" rather than a weak instrument, and the course measured no diary
against anything. **Closed:** "about how differently two records can report the same night".

**N-09 lesson 8 stated the critic's own hours as fact.** **Closed:** "he reports it took him more than
130 hours", matching lesson 7.

### Checked and found clean, recorded so it is not re-checked

**Classification under 3.1.** The outline's calls hold in every lesson: the association is
established and stated with its verb; causation of disease is contested and never asserted; the
long-sleep arm is presented as a question; the IARC classification is reported as a grade of evidence
with no risk figure; the sleep-memory mechanism is the authors' account; the grade pattern is "a fact
about three documents"; lesson 7 reaches no verdict on either man. **No settled claim is
both-sided**: the recommendation, the device figures and the restriction result are stated plainly.

**Decision 5.** Every mention of night work in all eight lessons, both assessments and
`course.yaml` checked. Lesson 3 names shift work once as a possible third cause, neutrally; lesson 4
carries it as the outline requires; lesson 4's "may be the right one before a night shift" treats a
night worker's goal as legitimate; the course-end test marks "night workers should change jobs" as
wrong. With N-04 and N-07, **decision 5 holds course-wide.**

**Late chronotypes.** "Night owls are just undisciplined" is answered with what the course can say
and what it cannot ("how much of anybody's lateness is choice"); lesson 8's "Night owls die younger,
so get to bed by ten" is split into a claim the course cannot check and advice it does not give. No
moralising found.

**The closing refusal.** Holds in lesson 8, in the course-end test (after N-01 and N-02) and in the
project, which offers three endings with a cost for each and recommends none. **It now rests on
facts stated at their read level in both directions.**

**Language under 3.3.** No loaded adjectives, no sneering, opinions attributed. The course's own
readings are labelled at the point of use in every lesson.

### Left for the queue, not fixed here

**1. Lesson 1 measures at 85 minutes against a declared 80**, inside the tool's precision and
untouched by this audit. Not a neutrality finding.

**2. `SOURCES.md` §9 still says natural short sleep "is rare" and speaks of "a real minority who need
less"**, the two phrasings lesson 8's review corrected in the lesson and N-01 corrected in the test.
Outside this audit's remit (it edits no research file), and it is the route by which both errors have
now reached a learner-facing file twice. One edit, worth making before the podcast scripts are
written from it.

### After the fixes

`npm run validate` exits 0. `npm run quotes sleep`: 88 of 88, none missing; no quotation was added.
`npm run minutes`: every lesson this audit edited still measures its declared figure (03 at 75, 04 at
85, 05 at 85, 08 at 95). No em dash and no spaced en dash added.
