# Sources: Using AI Effectively

*Stage 1 research, 2026-09-18. Written before any lesson is drafted. For each source: what it is good
for, what it establishes, and how much of it was actually read.*

<!-- unread: Jurafsky, Martin, Russell, Norvig, Dell'Acqua, Lakhani, Mollick, Noy, Zhang, Schulhoff, Resnik, Kadavath -->

**How to read the "read" labels below.** Every entry says whether it was read in full, in part, at
abstract level, or not opened. That label is a ceiling, not decoration: a lesson may not lean on a
source further than its label allows, and `npm run validate` fails on a lesson citing anything named
in the `unread:` line above. Twelve names are there. Most are named because the work's *result* was
read through a reliable route (the authors' own abstract page, an author's own written account of
their study, a publisher's table of contents) while the work itself was never opened. **If a lesson
needs one of them, open it first and move it out of that line.**

**This course has a research problem the other eight do not have, and it has to be stated at the
top.** Every capability claim about these systems is a claim about a particular model on a
particular date, and models change monthly. So the research here is deliberately weighted away from
capability claims and towards three things that do not go stale at that rate: **the mechanism**,
which has not changed since 2020 and explains most of what a learner will meet; **the measured
studies of what happens to people who use these systems**, which are dated experiments and stay true
as history whatever the models do next; and **official guidance from standards bodies**, which moves
slowly and is written to be cited. Where a figure about a model's behaviour appears in a lesson at
all, it carries its model name and its date in the same sentence, and the course says out loud that
it may already be wrong.

---

## Canonical textbooks

- **Dan Jurafsky and James H. Martin, *Speech and Language Processing*, 3rd edition draft (current
  draft dated 19 August 2026, free at web.stanford.edu/~jurafsky/slp3/).** **Not opened**; the
  authors' own page and its full table of contents were read directly. This is the canonical
  textbook of the field and the third edition has been rebuilt around language models: Volume I is
  now titled *Large Language Models* and runs 1. Introduction, 2. Words and Tokens, 3. N-gram
  Language Models, 4. Logistic Regression and Text Classification, 5. Embeddings, 6. Neural
  Networks, 7. Transformers and Pretraining, 8. Post-training. Volume II adds 9. Masked Language
  Models, 10. Interpretability, 11. Information Retrieval and RAG, 12. Agents (marked not yet
  written), and then the older speech and translation material. Best for: the **sequencing**. The
  book puts tokens second, before anything else, and puts post-training in its own chapter
  immediately after pretraining, which is the shape this course should borrow: a learner who has
  never heard of a token cannot understand why the system cannot count letters, and a learner who
  thinks a model is only its pretraining cannot understand why it declines things. Worst for: our
  actual purpose, since it is a graduate text with mathematics on every page and no interest in how
  to get work out of one of these systems. Take the order and leave the contents. The free draft is
  also the right "go deeper" link for the mechanism lesson.
- **Stuart Russell and Peter Norvig, *Artificial Intelligence: A Modern Approach* (4th ed., 2021).**
  **Not opened and not consulted beyond knowing what it is.** It is recorded here so the next
  researcher does not go looking: it is the standard undergraduate AI survey, it long predates this
  generation of systems, and its treatment of language is a small part of a large book about search,
  logic, planning and learning. It is the right reference for "what is AI as a field" and the wrong
  one for this course. No lesson should cite it without somebody opening it first.

## University courses and curricula consulted

- **Stanford CS324, *Large Language Models* (Winter 2022, stanford-cs324.github.io).** **Read** at
  the level of the full lecture list, fetched directly; no individual lecture note was read in full.
  Fourteen modules, in this order: Introduction, Capabilities, Harms I, Harms II, Data, Security,
  Legality, Modeling, Training, Parallelism, Scaling laws, Selective architectures, Adaptation,
  Environmental impact. **The ordering is the useful part and it is the opposite of the intuitive
  one.** The course puts capabilities and harms *before* modelling and training, on the reasoning
  that a student should know what the thing does and what it costs before learning how it is built.
  That is exactly right for a Foundation course too, and it is the argument for this course
  teaching the mechanism in one lesson, early but briefly, rather than building up to it.
  **Caution: this is a 2022 syllabus**, written before instruction tuning was ordinary and before
  anybody outside a lab used these systems daily, so its sense of what is hard is out of date. The
  sequence survives; the emphasis does not.

## Primary sources

- **Tom B. Brown and 30 co-authors, "Language Models are Few-Shot Learners", 2020 (arXiv
  2005.14165).** **Abstract read in full and directly; the paper was not opened.** The GPT-3 paper,
  and the source of the single most load-bearing idea in this course: that a task can be specified
  to one of these systems **entirely in the text of the request**, with no training of any kind.
  The authors' words: GPT-3 "is applied without any gradient updates or fine-tuning, with tasks and
  few-shot demonstrations specified purely via text interaction with the model." 175 billion
  parameters. Best for: the reason prompting is a skill at all. If the system had to be retrained
  for each task, there would be nothing for a learner to do; because the request *is* the
  specification, how the request is written is the whole of the user's control surface. The abstract
  also does the course a favour by naming its own limits, identifying "some datasets where GPT-3's
  few-shot learning still struggles" and "methodological issues related to training on large web
  corpora", which is the contamination problem a lesson on evaluating claims will need.
- **Jason Wei and eight co-authors, "Chain-of-Thought Prompting Elicits Reasoning in Large Language
  Models", 2022 (arXiv 2201.11903).** **Abstract read in full and directly; the paper was not
  opened.** Establishes that asking for intermediate steps changes the answer, not just the
  presentation: eight worked exemplars in the prompt took a 540-billion-parameter model to
  state-of-the-art accuracy on GSM8K grade-school maths word problems, beating a fine-tuned GPT-3
  with a verifier. Best for: the one prompting technique with a clean published result behind it,
  and the honest framing of what it is. **Two cautions for the drafter.** The paper's own claim is
  that the ability "emerge[s] naturally in sufficiently large language models", so it is a result
  about scale as much as about wording, and the 2022 models it measured are not the ones a learner
  will use. And the technique has since been absorbed: current systems often produce steps without
  being asked, which changes what a learner should do with this and is a live question rather than a
  settled one. See the contested section.
- **Saurav Kadavath and 30 co-authors, "Language Models (Mostly) Know What They Know", 2022 (arXiv
  2207.05221).** **Abstract read in full; the paper was not opened.** The careful source on
  self-assessment. Larger models are well calibrated on multiple-choice and true-or-false questions,
  and can predict the probability that their own answer is right with "encouraging performance,
  calibration, and scaling". **The limitation is the part this course needs:** models "struggle with
  calibration of P(IK) on new tasks" and the predictions "partially generalize" only. So the honest
  teaching is neither "it has no idea whether it is right" nor "just ask it how confident it is". It
  is that self-assessment is real, measurable, better on familiar tasks than unfamiliar ones, and not
  a substitute for checking. Note the title's parenthesis is doing work and a lesson should keep it.
- **Adam Tauman Kalai, Ofir Nachum, Santosh S. Vempala and Edwin Zhang, "Why Language Models
  Hallucinate", September 2025 (arXiv 2509.04664).** **Abstract read in full and directly; the paper
  was not opened.** The best available answer to the question every learner asks, and the answer is
  not the one they expect. The argument is that confident wrong answers persist because **training
  and evaluation reward guessing over admitting uncertainty**: a benchmark that scores a blank as
  zero and a wrong guess as zero gives a model no reason ever to say it does not know, exactly as an
  exam marked without negative marking rewards a student for filling every box. The authors'
  proposal is socio-technical rather than architectural: change how the dominant benchmarks score,
  rather than adding another hallucination benchmark. Best for: giving a learner a mechanism instead
  of a complaint, and for the analogy, which is a good one and belongs in a lesson. **This is one
  author group's argument and not a consensus**, and it sits alongside rather than replacing the
  statistical account in the NIST entry below; a lesson should present it as an explanation with a
  named case behind it.
- **Sander Schulhoff and 29 co-authors, "The Prompt Report: A Systematic Survey of Prompt
  Engineering Techniques", 2024, latest version February 2025 (arXiv 2406.06608).** **Abstract read;
  the survey itself was not opened.** Catalogues **58 text-based prompting techniques**, 40 more for
  other modalities, and establishes a vocabulary of **33 terms**. Best for: two things, neither of
  them the list. First, as evidence for a sentence the course should say plainly: fifty-eight named
  techniques for one activity is what a field looks like before it knows which of them matter, and a
  learner should not try to memorise them. Second, as the place to send somebody who wants the full
  taxonomy. **A lesson must not present the catalogue as a curriculum.**

## Expert bodies and official guidance

- **NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence
  Profile*, NIST AI 600-1, July 2024.** **Read in substantial part**, fetched and extracted directly:
  the introduction, the enumeration of the twelve risks, and sections 2.2, 2.4, 2.7 and 2.8 in full.
  This is the single most useful official document for the course and it is free. It is a companion
  profile to the AI Risk Management Framework (AI RMF 1.0, released 26 January 2023), whose four core
  functions are **Govern, Map, Measure and Manage**. The profile names twelve risks "unique to or
  exacerbated by" generative AI: CBRN Information or Capabilities; Confabulation; Dangerous, Violent
  or Hateful Content; Data Privacy; Environmental Impacts; Harmful Bias and Homogenization; Human-AI
  Configuration; Information Integrity; Information Security; Intellectual Property; Obscene,
  Degrading and/or Abusive Content; and Value Chain and Component Integration.

  Four passages are load-bearing for this course and are quoted here so a drafter need not re-fetch
  the document.

  **On confabulation (§2.2), which is NIST's word for hallucination.** The definition: "'Confabulation'
  refers to a phenomenon in which GAI systems generate and confidently present erroneous or false
  content in response to prompts." It extends to "generated outputs that diverge from the prompts or
  other input or that contradict previously generated statements in the same context". And the
  mechanism, in NIST's own words: "Confabulations are a natural result of the way generative models
  are designed: they generate outputs that approximate the statistical distribution of their training
  data; for example, LLMs predict the next token or word in a sentence or phrase." NIST adds that
  outputs "may also include confabulated logic or citations that purport to justify or explain the
  system's answer", and that models "sometimes provide logical steps for how they arrived at an
  answer even when the answer itself is incorrect." **That last sentence is the one that decides how
  this course teaches chain-of-thought**, and a lesson that teaches "ask it to show its working"
  without it is teaching half a thing.

  **On the word itself.** A NIST footnote records that "some commenters have noted that the terms
  'hallucination' and 'fabrication' anthropomorphize GAI, which itself is a risk related to GAI
  systems as it can inappropriately attribute human characteristics to non-human entities." The
  course has to pick a word and should say why. See the contested section.

  **On automation bias (§2.7, Human-AI Configuration).** "[D]ue to the complexity and increasing
  reliability of GAI technology, over time, humans may over-rely on GAI systems or may unjustifiably
  perceive GAI content to be of higher quality than that produced by other sources. This phenomenon
  is an example of automation bias, or excessive deference to automated systems." And the other
  direction, which a course like this one is obliged to state: "human experts may be unnecessarily
  'averse' to GAI systems, and thus deprive themselves or others of GAI's beneficial uses." A
  standards body naming both failures is the best possible warrant for a course that refuses to be
  either an advertisement or a warning.

  **On information integrity (§2.8).** NIST's definition of high-integrity information, taken from a
  2022 White House roadmap, is a ready-made rubric for the verification lesson: it "distinguishes
  fact from fiction, opinion, and inference; acknowledges uncertainties; and is transparent about its
  level of vetting… can be linked to the original source(s) with appropriate evidence… is also
  accurate and reliable, can be verified and authenticated, has a clear chain of custody, and creates
  reasonable expectations about when its validity may expire."
- **The European Union's Artificial Intelligence Act, Article 4 (AI literacy) and Article 3(56).**
  **Read** via a direct fetch of the article text. Article 4: "Providers and deployers of AI systems
  shall take measures to support the development of AI literacy of their staff and other persons
  dealing with the operation and use of AI systems on their behalf." It has applied since **2 February
  2025**, per Article 113. Article 3(56) defines AI literacy as the "skills, knowledge and
  understanding that allow providers, deployers and affected persons… to make an informed deployment
  of AI systems, as well as to gain awareness about the opportunities and risks of AI and possible
  harm it can cause." Best for: the single most useful fact in the course's own defence of itself,
  which is that a major jurisdiction now requires organisations to make an effort at exactly what
  this course teaches. **Careful about two things.** The Act does not require any individual to reach
  a standard; the obligation is on organisations to make reasonable efforts. And it is European law,
  so the course names the jurisdiction every time, exactly as Digital Literacy does with the right to
  erasure.
- **UK Information Commissioner's Office, *Guidance on AI and data protection*.** **Read at
  structural level only**: the contents and the framing were fetched, and no chapter was read. It is
  organised around the data protection principles, with chapters on accountability and governance
  (including when a Data Protection Impact Assessment is needed), transparency, lawfulness,
  accuracy, fairness, security and data minimisation, individual rights, and fairness across the AI
  lifecycle. Best for: the lesson on what you are willing to type into somebody else's system, and
  as the named authority for a UK reader. **It is written for organisations building or deploying AI
  rather than for an individual using one**, which is a real mismatch with this course's reader, and
  a drafter should either read the accuracy and transparency chapters properly or cite it only for
  the fact of its existence and its structure.

## The evidence on what actually happens to people who use these systems

This is the part of the research that does not go stale, because each entry is a dated experiment.
Four studies, and **they do not agree**, which is the finding rather than a problem with the
finding.

- **Fabrizio Dell'Acqua, Edward McFowland III, Ethan Mollick, Hila Lifshitz-Assaf, Katherine Kellogg,
  Saran Rajendran, Lisa Krayer, François Candelon and Karim Lakhani, "Navigating the Jagged
  Technological Frontier", HBS working paper 24-013 (2023), published in *Organization Science*.**
  **Not opened.** Both publisher copies returned 403 and the HBS PDF would not extract; the figures
  below come from a written account by one of the authors, Mollick, on his own site, which is a
  reliable route to a result and is not the paper. **This is the first name on the `unread:` line and
  the first thing the next researcher should fix**, because the study is otherwise the best thing in
  this section. A pre-registered randomised experiment with **758 BCG consultants**. Inside the
  system's competence, consultants with AI "completed 12.2% more tasks, completed them 25.1% faster,
  and delivered solutions of substantially higher quality, with average scores rising roughly 30%
  above the control group". On a task built to sit *outside* that competence, they "were 19
  percentage points less likely to produce a correct recommendation than those without it", against a
  control-group baseline of 84.5% correct. And the gains were not evenly spread: "lower-skilled
  workers gained the most, with quality scores rising 43% compared to 17% for the highest-skilled
  participants."

  **The concept is worth more than any of those numbers.** The "jagged frontier" is the observation
  that the boundary between what these systems do well and badly is not a smooth line of difficulty:
  two tasks that look equally hard to a person can sit on opposite sides of it. That is the single
  most useful idea for a learner, because it explains why their own experience is contradictory, and
  it is the reason this course's third outcome is about telling the two kinds of task apart.
- **Joel Becker, Nate Rush, Elizabeth Barnes and David Rein (METR), "Measuring the Impact of
  Early-2025 AI on Experienced Open-Source Developer Productivity", July 2025 (arXiv 2507.09089).**
  **Abstract read in full and directly; the paper was not opened.** A randomised controlled trial,
  **16 experienced developers, 246 tasks** on mature repositories they already knew well, tasks
  randomly assigned to allow or forbid AI tools. **Allowing AI increased completion time by 19%.**
  The developers had forecast a 24% *speed-up* beforehand, and **still believed afterwards that they
  had been sped up by 20%**, having in fact been slowed. Economists asked to predict had said 39%
  faster and machine-learning experts 38% faster.

  **The gap between the measured result and the participants' own beliefs is the most important
  single finding in this section**, and it is what the verification outcome rests on: people using
  these tools are not reliable reporters of whether the tools are helping them. **State the scope
  every time it is used**: 16 developers, work they already knew intimately, early-2025 tools. It is
  not a general claim that these systems slow people down, and a lesson that uses it that way is
  misusing it exactly as badly as one that uses Dell'Acqua to claim a 25% speed-up for everybody.
  **Held together, the two studies are the course's honest position**: large gains on unfamiliar work
  inside the frontier, losses on expert work outside it, and self-report unreliable in both
  directions.
- **Shakked Noy and Whitney Zhang, "Experimental evidence on the productivity effects of generative
  artificial intelligence", *Science* 381 (2023), 187–192.** **Read at search-summary level only; the
  paper and its abstract were not opened directly.** **444 college-educated professionals**, given
  occupation-specific incentivised writing tasks, half randomly given ChatGPT. Those with access
  finished **37% faster** with **18% higher quality ratings**, the productivity distribution
  compressed because lower-ability workers gained more, and the tool "mostly substituted for worker
  effort rather than complementing worker skills", shifting time from drafting towards idea
  generation and editing. Best for: a second, independent instance of the lower-skilled-gain-more
  pattern that Dell'Acqua also found, which makes it worth teaching rather than an artefact of one
  study. **On the unread line**, and the substitution finding in particular should not be leaned on
  until somebody opens the paper, because it is the finding that connects this section to the next.
- **Hamsa Bastani, Osbert Bastani, Alp Sungu, Haosen Ge, Özge Kabakcı and Rei Mariman, "Generative AI
  Without Guardrails Can Harm Learning: Evidence from High School Mathematics", *PNAS* (2025).**
  **Abstract read in full and verbatim** from the authors' own copy of the paper; the body was not
  read. A field experiment with **nearly a thousand high school mathematics students**, given one of
  two tutors: "GPT Base", a standard ChatGPT-style interface, and "GPT Tutor", the same model with
  prompts designed to safeguard learning by giving teacher-designed hints rather than answers. The
  result, in the authors' words: "having GPT-4 access while solving problems significantly improves
  performance (48% improvement in grades for GPT Base and 127% for GPT Tutor). However, we
  additionally find that when access is subsequently taken away, students actually perform worse than
  those who never had access (17% reduction in grades for GPT Base)". The negative effect was "largely
  mitigated by the safeguards in GPT Tutor". Their explanation: "Without guardrails, students attempt
  to use GPT-4 as a 'crutch' during practice problem sessions, and subsequently perform worse on
  their own."

  **This is the most important source in the course and it is the one that makes the sixth outcome
  non-negotiable.** A course teaching people to use these tools, hosted by a university whose subject
  is learning, cannot omit the finding that using one without guardrails during practice leaves you
  worse off than never having had it. It is also carefully bounded and should be taught that way:
  high school mathematics, practice problems, GPT-4, and a specific contrast between two interface
  designs. **The 127% figure is the other half and must travel with the 17%**: the same study shows a
  well-designed tutor beating both. The honest lesson is about *how* it is used, not whether.
- **Varun Magesh, Faiz Surani, Matthew Dahl, Mirac Suzgun, Christopher D. Manning and Daniel E. Ho,
  "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools", *Journal of
  Empirical Legal Studies* (2025).** **Read in part**: the abstract verbatim, the introduction, and
  the results summary, extracted directly from the open-access copy. The first pre-registered
  empirical evaluation of commercial legal AI tools, and the answer to the commonest hopeful belief
  a learner will bring. Providers had claimed that retrieval-augmented generation "eliminat[es]" or
  "avoid[s]" hallucinations and guarantees "hallucination-free" citations. The finding: "while
  hallucinations are reduced relative to general-purpose chatbots (GPT-4), we find that the AI
  research tools made by LexisNexis (Lexis+ AI) and Thomson Reuters (Westlaw AI-Assisted Research and
  Ask Practical Law AI) each hallucinate between 17% and 33% of the time." Per tool: Lexis+ AI
  answered **65%** of queries accurately and was the best; Westlaw's AI-Assisted Research was accurate
  **42%** of the time and hallucinated nearly twice as often as the others; Ask Practical Law AI gave
  incomplete answers on **more than 60%** of queries.

  Two things make this the right source rather than an anecdote. It defines its terms: "we define a
  hallucination as a response that contains either incorrect information or a false assertion that a
  source supports a proposition", which usefully splits a made-up fact from a real source cited for
  something it does not say. And it is about **paid professional tools with retrieval**, not a free
  chatbot, which is what makes it the answer to "but mine is connected to real documents". Tools were
  tested in 2024 and the paper says so; the figures carry that date.

## What the field considers essential

The ideas an honest course on this must cover, in the order they build. This is the outline's
backbone.

1. **What the thing is doing.** Next-token prediction over a statistical approximation of training
   data, in NIST's phrasing, plus tokens, plus the fact that the model has no separate store of
   facts to consult. Everything in the rest of the course is a consequence of this one paragraph,
   and the paragraph needs no mathematics.
2. **In-context learning: the request is the specification.** Brown et al. Why the wording of a
   request is the user's whole control surface, and why that is unlike every other tool they use.
3. **What a session is.** Context window, what the system can and cannot see, why it does not
   remember last week unless somebody built it to, and what "it learned from our conversation" does
   and does not mean.
4. **Asking well.** Context, constraints, and the form of the answer; examples; asking for steps.
   Three or four techniques with reasons, not fifty-eight without.
5. **The jagged frontier.** Which tasks are reliable and which are not, and why the boundary does not
   track human difficulty. The single most useful predictive idea in the course.
6. **Confabulation, and why it is not a bug awaiting a patch.** The statistical account and the
   incentive account, both named, plus confabulated citations and confabulated reasoning.
7. **Verification.** Procedures that work when you cannot check the answer by knowing the answer.
   This is the course's hardest and most valuable lesson.
8. **When not to use one.** Bastani. The learning cost, the cases where the task *was* the point, and
   the honest statement that this is sometimes a value question rather than an effectiveness one.
9. **What you are handing over.** What happens to what you type, who holds it, and how to decide.
10. **Reading a claim about AI.** How to tell a benchmark from a demonstration, why a figure without
    a model name and a date is worthless, and why your own impression of whether it helped you is
    not evidence. METR is the case study.

## Common misconceptions

Every one of these is a belief a learner will arrive holding, and each has a source above that
answers it.

- **"It looks things up."** Unless it has been given a retrieval tool, it does not. The answer is
  generated, and a request for a source produces a generated source. NIST §2.2 on confabulated
  citations; Magesh et al. for what happens even when retrieval *is* present.
- **"Retrieval or a web connection fixes hallucination."** Magesh et al. is the direct refutation, on
  paid professional tools whose vendors claimed exactly this: between 17% and 33%.
- **"If it sounds confident, it is probably right, and if it hedges, it is probably wrong."**
  Confidence of phrasing is a property of the text, not a measurement. Kadavath et al. is the
  careful version: self-assessment is real, better calibrated on familiar tasks, and degrades on new
  ones.
- **"Telling it not to hallucinate helps."** Kalai et al. explain why the incentive sits upstream of
  the request. A lesson may say this is unlikely to be the lever; it should not promise that a
  particular wording fails, because that is a capability claim with a date on it.
- **"A longer prompt is a better prompt."** What helps is context, constraint and a stated form,
  which are specific things, not length. Anthropic's own guidance is the practitioner source.
- **"It remembers me."** Depends entirely on the product, and a learner should be taught to find out
  rather than to assume either way. The same misconception in reverse produces people who believe a
  correction has been learned permanently.
- **"It can count the letters in a word, or do arithmetic, because it can do harder things."** The
  tokens chapter is why. This is a good first example of the jagged frontier, because it is a task a
  seven-year-old can do that the system may not.
- **"The same question gives the same answer."** It ordinarily does not, and a learner who does not
  know that will draw the wrong conclusion from a single test of anything.
- **"Chain-of-thought output is the reasoning."** NIST §2.2: models "sometimes provide logical steps
  for how they arrived at an answer even when the answer itself is incorrect." The steps are output,
  and they are evidence about the answer rather than a record of how it was produced.
- **"It is good at things in proportion to how hard a person would find them."** The jagged frontier.
- **"Using it to do my work is the same as using it to learn."** Bastani et al. It is not, and the
  size of the difference is the 48% and the 17%.
- **"It helped me, so it helped me."** METR. Sixteen experienced developers were slowed by 19% and
  believed they had been sped up by 20%.

## Contested questions and the positions on each

Classified under standards 3.1. Six questions, and for four of them the honest answer is that the
evidence is incomplete rather than that the experts are split.

**1. Do these systems make people more productive? (3.1 case 2: genuinely open.)**
*The evidence for* is Dell'Acqua (12.2% more tasks, 25.1% faster, quality up about 30%, inside the
frontier) and Noy and Zhang (37% faster, 18% better, on professional writing). *The evidence against*
is METR: 19% slower, on experienced developers working in repositories they knew. **These do not
actually contradict each other**, and the course should teach the reconciliation rather than pick a
side: the gains appear on work near the edge of what the person can already do, and the losses appear
on work they had already mastered, where the cost of reading, checking and correcting exceeds the
cost of doing it. *What would settle it*: more trials outside software and consulting, and any trial
that measures the same people on familiar and unfamiliar work. **Nobody has run it.**

**2. Does using one cost you learning? (3.1 case 1 within its scope: reasonably settled, narrowly.)**
Bastani et al. is a randomised field experiment with a clear result and a clear mechanism. Within its
scope, high school mathematics practice, the answer is yes for an unguarded tool and largely no for a
designed one. *The open part* is how far it generalises to adults learning other things, and the
course must not stretch it. *The position against* is not that the study is wrong but that its
guarded condition shows the effect is a design problem rather than a property of the technology,
which is the authors' own reading and is in their abstract.

**3. Is "prompt engineering" a durable skill or a passing artefact? (3.1 case 3: partly a value
question about what a course is for.)** *For durability*: the request is the specification, per Brown
et al., so being able to state what you want will matter as long as the interface is language.
*Against*: the Prompt Report's 58 named techniques are a sign of a field that does not yet know which
of them matter, several once-necessary tricks have been absorbed into the systems themselves, and
material on this dates faster than almost anything else. **This course's position, stated as its
own:** teach the small number of moves that follow from the mechanism, and name the rest as a
catalogue to consult, not to learn.

**4. Do these systems reason? (3.1 case 3: partly definitional, and the course should say so.)**
Chain-of-thought produces real gains on benchmarks (Wei et al.), and the steps produced are not a
transcript of a process (NIST §2.2). Whether that is "reasoning" turns on what the word is being
asked to mean. **A Foundation course should decline the question explicitly and answer the useful one
instead**: asking for steps changes the answer, the steps may be wrong while the answer is right and
the reverse, and either way they are something to check rather than something to trust.

**5. Is confabulation fixable? (3.1 case 2.)** Two accounts, and they are complementary rather than
rival. NIST's is structural: it is "a natural result of the way generative models are designed".
Kalai et al.'s is about incentives: training and evaluation reward guessing, and changing how the
dominant benchmarks score would change the behaviour. The first implies a floor; the second implies
a lever nobody has pulled. *What would settle it*: whether a model trained and scored on Kalai's
proposal actually abstains more without getting worse. **The course should say plainly that it does
not know, and that "the next version will fix it" is a claim to be dated and checked rather than
believed.**

**6. Should the course use the word "hallucination"? (A choice the course makes, not a dispute it
reports.)** NIST records the objection in a footnote: the word anthropomorphises, and
anthropomorphising is itself a risk. NIST's own term is "confabulation", which has the same problem
in a longer word. **Recommendation, for the outline to settle:** use "hallucination" once, name it as
the word everybody uses, say what is wrong with it, and then prefer a plain description, a confident
false answer, for the rest of the course. A course that invents its own vocabulary is a course whose
learners cannot read anybody else's writing on the subject.

## Practitioner guidance

- **Anthropic, "Prompting best practices" (platform.claude.com, current at 18 September 2026).**
  **Read in part**, directly: the general principles section in full, plus the page's section
  structure. Useful because it is a primary source on what the people who build one of these systems
  tell users to do, and because it is organised as principles rather than tricks. The four general
  principles: **be clear and direct** ("Think of Claude as a brilliant but new employee who lacks
  context on your norms and workflows"), with a stated test worth stealing outright, "Show your
  prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be
  confused, Claude will be too"; **add context**, including the reason behind an instruction, with a
  worked example in which "NEVER use ellipses" is improved by explaining that the text will be read
  aloud; **use examples**, three to five, relevant and varied; and **structure the prompt** so that
  instructions, context and input are distinguishable.

  **Two cautions.** It is a vendor's guidance for its own models and carries an interest, which the
  course should name once rather than insinuate. And it is written for people building applications,
  so the parts about tool use, agents and output formats are out of scope here. The general
  principles are not vendor-specific and are the ones to teach; **the page itself says to re-check a
  model-specific technique against your own evaluation before applying it elsewhere**, which is good
  advice and is also the honest reason a Foundation course teaches principles rather than settings.

## Best existing free resources (to link, not duplicate)

- **Jurafsky and Martin, *Speech and Language Processing*, 3rd edition draft.** Free, authoritative,
  and the right destination for a learner who wants the mechanism properly. Link chapters 2, 7 and 8.
- **NIST AI 600-1.** Free, short enough to read in an evening, and the only document on the list that
  a learner could cite at work.
- **Stanford CS324's public lecture notes.** Free and open, dated 2022, and worth linking with that
  caveat.
- **The Prompt Report.** Free on arXiv, and the right place to send somebody who wants the full
  catalogue rather than the handful the course teaches.

## Safety-critical guidance

This course is not safety-critical in the sense that a first-aid course is, and it has two places
where a wrong lesson does real harm.

- **Medical, legal and financial questions.** Magesh et al. is the evidence that even purpose-built
  professional tools with retrieval get it wrong between 17% and 33% of the time. The course must
  never model asking one of these systems for advice in those three areas without saying what
  checking it requires, and should say plainly that for some questions the honest answer is to ask a
  person who is accountable for the answer.
- **What gets typed in.** A learner who puts a client's data, a colleague's medical detail or their
  employer's confidential material into a consumer product has done something they cannot undo. The
  ICO guidance is the named authority for a UK reader and NIST §2.4 for a US one. The lesson should
  teach a decision procedure rather than a rule, because the right answer genuinely depends on the
  product, the plan and the employer.

## Open concerns about scope

- **Every capability claim is perishable, and this course has no precedent in the repo for that.**
  Digital Literacy's convention, a year inside the sentence, is necessary here and not sufficient: a
  figure about a model's behaviour also needs the model's name. **The outline should settle the
  convention before drafting**, and should decide how much model-specific detail the course carries
  at all. The current recommendation is: almost none, and what there is goes in one clearly labelled
  place so it can be revised without touching a lesson's argument.
- **The course is about language models and the taxonomy row says "AI".** Images, audio, video and
  agents are all out of scope as currently planned. That is defensible for a Foundation course in
  Term 1, and it should be said in lesson 1 rather than discovered. "Building with AI" at T20 is the
  course that takes the rest.
- **There is no hands-on gate.** Digital Literacy could set a terminal exercise and know what the
  learner would see. Here, two learners on two products will get different answers to the same
  request, and neither the lesson nor the test can predict them. **This is the hardest design problem
  in the course** and the outline has to solve it: probably by setting exercises whose deliverable is
  the learner's own comparison of what they got against what the lesson said to expect, rather than
  exercises with an answer.
- **No source here is about people who do not use these systems by choice.** The course should not
  assume its reader has decided to use one. Somebody required to use one at work, and somebody who
  would rather not, are both real readers, and NIST's sentence about unnecessary aversion is the only
  material found that touches it.
- **Nothing here measures how any of this works for a learner with no technical background at all**,
  which is the reader this course is written for. Every study above ran on consultants, developers,
  professionals or high school students in a mathematics class. That gap should be stated in lesson 1
  in the way Digital Literacy states its own.
