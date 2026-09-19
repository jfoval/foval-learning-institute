---
title: Final test
pass_mark: 0.8
minutes: 55
quiz:
  # --- What the evidence shows, and what it does not (L1) ---
  - q: >-
      Two randomised trials in this course point opposite ways. What did each find, and what keeps
      them from contradicting each other?
    options:
      - Consultants improved on tasks inside the frontier; experienced developers were slowed on repositories they already knew
      - Consultants improved on every task they were given; developers improved as well, but only on code they had not seen before
      - Both trials found improvements, and the only difference between them is how large the improvement turned out to be
      - Consultants were slowed on unfamiliar tasks; developers were faster on familiar ones, which is the same result twice
    answer: 0
    explain: >-
      The scopes are doing the work, and they do not overlap: one measured consultants on tasks a
      research team built on either side of a line, the other measured sixteen experienced people in
      code they knew well. The second and fourth answers swap the findings around. The third erases
      the slowdown, which is the half most summaries of this literature drop.
  - q: >-
      A supplier's brochure says its system "never loses context, however long the conversation".
      Sort the claim, and say what would settle it.
    options:
      - Unmeasurable, because "never" is an absolute, and no claim framed as an absolute can be put to a test
      - False, because the course established that these systems always lose track in long conversations
      - Measurable, and placing one fact at different points in a long conversation and asking about it would settle it
      - Measurable, and the supplier's own demonstration on one long transcript would be enough to settle it
    answer: 2
    explain: >-
      An absolute claim is the easiest kind to test, because a single counter-example settles it, and
      the test here is cheap to design. Calling it unmeasurable gives up on a claim that could not be
      easier to check. The false answer asserts a result this course never reported. And one
      demonstration chosen by the seller is the thing this course spent a lesson separating from a
      measurement.
  # --- The mechanism (L2) ---
  - q: >-
      What is a system of this kind doing when it produces an answer?
    options:
      - Retrieving the closest matching passage from the material it was trained on, and rewording it
      - Producing text that fits the statistical shape of the material it was built from
      - Working out the answer, and then writing that working out down in words for the reader
      - Consulting a store of facts assembled during training, and reporting what it finds there
    answer: 1
    explain: >-
      The standards document this course quotes puts it as the design working rather than failing:
      the outputs approximate the statistical distribution of the training data. The retrieval and
      store-of-facts answers both describe a lookup that does not happen. And the working-out answer
      is the one lesson 5 exists to separate from what is actually going on.
  - q: >-
      Somebody asks for a list of the parishes in a county, in alphabetical order, and gets a list
      that is nearly right: one parish missing, two out of order. Which part of the mechanism
      predicts this?
    options:
      - Alphabetical ordering is a rule the system was never trained on, so ordering is the first thing to fail
      - The list was longer than the conversation could hold, so the end of it was quietly dropped
      - The system found a real list and made copying errors while transcribing it into the answer
      - Nothing in the process compares the output against a real list of that county's parishes
    answer: 3
    explain: >-
      Completeness and order are both properties that have to match something outside the request,
      and nothing in producing well-shaped text checks either. The ordering answer invents a gap in
      training. The length answer would produce a truncated list rather than a scrambled one. And
      the copying answer assumes the lookup that does not happen.
  - q: >-
      A user asks a system why it got something wrong, and gets a fluent, plausible explanation.
      What is that explanation?
    options:
      - A record of the steps the system took, written out in words after the event
      - Text produced the same way the wrong answer was, this time about the wrong answer
      - Unreliable about the world and reliable about the system's own workings, which it can inspect
      - A summary of the training material that most influenced the original answer
    answer: 1
    explain: >-
      There is no separate faculty producing the explanation, so it is another plausible-shaped piece
      of text about a subject that happens to be the previous piece of text. The record answer and
      the training-material answer both assume an introspection that is not there. And the third
      answer inverts which of the two is trustworthy.
  # --- The session (L3) ---
  - q: >-
      An analyst dislikes an answer and asks the same question again, further down the same
      conversation. She gets something quite similar. What has she learned?
    options:
      - Very little, because everything already in the conversation is part of what shapes the second answer
      - That the answer is probably right, since the system stood by its first version when she challenged it
      - That the system is confident about it, which is a weak signal and better than none at all
      - Nothing whatever, because two answers from one system can never be compared usefully
    answer: 0
    explain: >-
      A second answer in the same conversation is conditioned on the first, so it is not a second
      look at the question. The standing-by answer reads persistence as evidence. The confidence
      answer reads a non-signal. And the nothing-whatever answer is too strong: a fresh conversation
      does give you a comparison, which is the whole of the third checking step.
  - q: >-
      A writer pastes a forty-page report into a conversation and asks about a detail in the middle
      of it. The answer misses the detail. What is the most likely explanation, and what should he
      do next?
    options:
      - The report was simply too long to be read at all, so he should summarise it himself before he asks anything
      - The system cannot take attachments of that size, so he should send it in several messages
      - Where a fact sits in a long input affects how well it gets used, so he should ask again with that passage alone
      - The question was ambiguous, so he should rewrite it more precisely and send it again unchanged
    answer: 2
    explain: >-
      Position within a long input is a measured effect and the cheapest response to it is to shorten
      what you are asking about. The too-long answer overstates and gives up a useful move. The
      attachment answer is about a limit that was not reached. And rewriting the question leaves
      untouched the thing that is most likely responsible.
  # --- Context, constraints and form (L4) ---
  - q: >-
      "Write a 60-word notice for the window telling customers our opening hours change on 3 March."
      Which of lesson 4's three things is missing?
    options:
      - Form, since "notice" does not settle whether it should be a paragraph or a list
      - Constraints, since sixty words is a length and says nothing about tone
      - Nothing is missing here; context, constraints and form are all present in one sentence
      - Context, since nothing says who these customers are or what they already know
    answer: 3
    explain: >-
      A notice for a village post office and a notice for a city car park are different pieces of
      writing, and the request settles everything except which one this is. Form is given by the word
      notice plus the window. The length is a constraint and is present. And the nothing-is-missing
      answer mistakes brevity for completeness.
  - q: >-
      A manager writes: "Our warehouse team is mostly new and nervous about the audit next week.
      Explain what the auditors will look at." What is missing, and what usually happens as a result?
    options:
      - Form, and what usually happens is an answer of the wrong shape and length for the use it was wanted for
      - Context, and what usually happens is an answer pitched at entirely the wrong reader
      - Constraints on accuracy, and what usually happens is an answer that invents audit procedures nobody follows
      - Nothing, since the request already names the reader, their state of mind and the task
    answer: 0
    explain: >-
      The reader and their state of mind are given, and nothing says whether this is a briefing note,
      a five-minute talk or a one-page handout, which changes everything about what comes back. The
      context answer names the thing the request does supply. Accuracy is not one of the three. And
      the nothing answer misses that a task without a shape is a task half specified.
  - q: >-
      A request supplies context and form and no constraints, and the answer comes back three times
      longer than it can be used at. Whose problem is that, in the useful sense?
    options:
      - The system's, since a competent answer ought to match the obvious use the request implies
      - Nobody's, because length is unpredictable and the only real fix is to cut the answer afterwards
      - The requester's, in the sense that the missing constraint is the cheapest thing in the world to add
      - The requester's, in the sense that a long answer is always and everywhere the sign of a badly written request
    answer: 2
    explain: >-
      Useful here means whose action fixes it fastest, and one clause naming a length does. The
      system's-fault answer may be fair and changes nothing about what to do next. The nobody's-fault
      answer throws away the cheapest available fix. And the always-a-sign answer turns a specific
      omission into a general accusation.
  # --- Examples and steps (L5) ---
  - q: >-
      A bookkeeper asks for worked steps alongside a calculation. The four steps are each correct and
      the final figure is wrong. What has most likely happened?
    options:
      - An arithmetic slip in the last step, which is the usual place a correct chain comes apart
      - The steps are text describing a calculation, and they did not have to be what produced the figure
      - The steps answer a slightly different question from the one that produced the figure
      - The figure is right and she has misread it against her own working, which is worth ruling out first
    answer: 1
    explain: >-
      Printed working is produced the same way the answer is, so a sound-looking chain and a wrong
      total can sit together without either having caused the other. The arithmetic-slip answer
      assumes the chain produced the total. The different-question answer is possible and does not
      explain steps that are each correct. And ruling out her own misreading is sensible practice
      rather than an account of what happened.
  - q: >-
      A trainer wants feedback comments written in her school's particular style. What does lesson 5
      say is the most effective thing she can supply?
    options:
      - A description of the style, written out as precisely as she can manage
      - An instruction to follow the style of the school's published handbook
      - A request for several versions, from which she picks whichever comes closest
      - Two or three real comments of the kind she wants, pasted in
    answer: 3
    explain: >-
      Examples carry the things a description leaves out, which is most of what a style is. Writing
      the description is the harder job and produces the weaker result. Pointing at a handbook points
      at something that may not be in front of the system. And picking from several versions is
      selection rather than instruction, and it starts the same job again each time.
  # --- The jagged frontier (L6) ---
  - q: >-
      Two tasks. (a) Turn eight pages of supplied notes into a one-page summary. (b) State the notice
      period the law in her country requires. Which is more reliable, and why?
    options:
      - (b), because a legal notice period is a single, well-documented, widely published fact
      - Neither is more reliable than the other; it depends entirely on how each request is written
      - (a), because everything the answer needs was handed over inside the request itself
      - (a), because summarising is simply an easier job than legal research is
    answer: 2
    explain: >-
      The first task is constrained by what was supplied and the second has to match something
      outside the request, which is the line the whole sorting runs on. The well-documented answer
      describes why the fact is easy for a person to look up, which is a different property. The
      depends-on-the-request answer is true in general and does not separate these two. And the
      easier-job answer sorts by human difficulty, which is the mistake the frontier exists to
      correct.
  - q: >-
      Why does lesson 6's sorting follow from lesson 2's mechanism, rather than being a separate rule
      to remember?
    options:
      - Because the mechanism is what explains why an answer constrained by the request is safer than one that must match the world
      - Because the mechanism concerns training and the sorting concerns use, so the two are simply consistent with each other
      - Because the sorting was derived from the two randomised trials, and the mechanism was then derived from the sorting
      - Because both of them come from the same standards document, which states the two together in one section
    answer: 0
    explain: >-
      Producing well-shaped text is reliable exactly where the shape is all that is required, and
      unreliable exactly where something outside the request has to be matched, which is the sorting
      restated. The consistency answer notices they do not clash and misses that one entails the
      other. The third answer reverses the derivation. And the standards document states neither.
  - q: >-
      A project manager says a task is safe to hand over because it is easy: counting how many of
      forty supplied risk items are marked high. What has she got wrong?
    options:
      - Nothing at all; the forty items were supplied in the request, so the task sits inside the frontier
      - Forty items is more than can be supplied in one request, so the task will fail on length
      - The task needs a judgement about what "high" means, which is a thing outside the request
      - Easy for a person and reliable for a system are different properties, and counting is where they part
    answer: 3
    explain: >-
      Counting is the standing counter-example: trivial for a person, and not what producing
      well-shaped text does. The nothing-at-all answer applies the supplied-in-the-request rule
      correctly and stops one step early. The length answer invents a limit. And the judgement answer
      describes a different task, since the items are already marked.
  # --- Confident and wrong (L7) ---
  - q: >-
      The course gave two accounts of why these systems produce confident false answers. What does
      each imply about whether the problem can be fixed?
    options:
      - The structural account implies a floor; the incentive account implies a lever nobody has pulled
      - The structural account implies a fix is close; the incentive account implies the problem cannot be fixed
      - Both of them imply a floor, and they differ only in where each one says that floor comes from
      - The structural account is about training data and implies nothing at all about fixing anything
    answer: 0
    explain: >-
      One says the behaviour follows from how these systems are built, which puts a floor under it.
      The other says guessing is rewarded by how they are scored, which is something somebody could
      change. Holding both is what makes "nobody knows" the honest answer rather than a dodge. The
      other three collapse that into a single verdict.
  - q: >-
      A researcher's answer cites a real paper, by real authors, in a real journal. She confirms every
      detail of the citation and stops. What has she not checked?
    options:
      - Whether the paper is recent enough to support the claim she is about to make with it
      - Whether the journal is reputable in its field, which the citation itself does not tell her
      - Whether the paper actually says the thing it was cited in her answer as saying
      - Whether the system would produce the same citation if she asked it the question again
    answer: 2
    explain: >-
      Existing and supporting are separate properties, and only the first has been established. The
      recency and reputation answers are real quality questions about a source and say nothing about
      whether this source supports this claim. And asking again tests the system's consistency, which
      is a fact about the system.
  - q: >-
      A team connects a system to their own document store and is told this deals with the problem
      of false answers. What is the accurate thing to tell them?
    options:
      - It removes the problem for anything covered by the store, and leaves everything else as it was
      - It reduces the rate of false answers measurably, and it does not remove them
      - It makes no difference, since the answer is still produced rather than retrieved from anywhere
      - It cannot be known without testing, since nobody has measured products built this way
    answer: 1
    explain: >-
      Both halves are needed and most writing carries one: the reduction is real and measured, and so
      is the remainder. The removal answer is the claim that was tested and did not survive. The
      no-difference answer overcorrects into a different falsehood. And the cannot-be-known answer is
      contradicted by the preregistered evaluation the course reports.
  # --- Verification (L8) ---
  - q: >-
      An answer names a regulation, quotes its threshold correctly, and argues soundly to a
      conclusion. What it never says is that the regulation applies only to organisations of a kind
      this one is not. Which step catches it, and why not an earlier one?
    options:
      - Step one, because the scope of a regulation is a checkable part of any citation that names one
      - Step two, because an unstated scope shows up as a missing link between two of the claims
      - Step three, because a second clean run of the same question is likely to mention the scope the first one omitted
      - Step four, because something absent from every answer cannot be found anywhere inside the system
    answer: 3
    explain: >-
      A consistent omission is invisible to every step that stays inside the system, which is what
      makes the expensive step the only one that can reach it. Step one checks the parts that are
      there. Step two reads the joins between claims that are there. And step three produces another
      answer from the same place, with the same thing missing.
  - q: >-
      Lesson 5 taught you to ask for the steps, and lesson 8 makes that the second checking step.
      What is the relationship between the two?
    options:
      - The steps are useful in checking because reading the joins does not require you to know the answer
      - The steps are useful in checking because a system that prints its working makes fewer errors in it
      - The steps are useful in checking because they show which part of the training material got used
      - The steps are useful in checking because a set of steps can be verified by a second system
    answer: 0
    explain: >-
      That is the property that makes the technique work on material beyond you: you are checking
      whether one claim follows from another, which is a much smaller job than producing either. The
      fewer-errors answer is a capability claim nobody has established. The training-material answer
      describes an introspection that does not exist. And handing the check to a second system leaves
      you inside the system.
  - q: >-
      A manager sets no checking budget, starts checking, and stops two hours later when he gets
      tired. What does lesson 8 say went wrong?
    options:
      - He should have run the four steps in order, since the ordering is what makes checking efficient
      - Two hours is too long for any single answer, and a budget would have held him to a sensible figure
      - Without a budget, the amount of checking was decided by his stamina rather than by what the work needed
      - Nothing went wrong at all, since two hours of checking is a great deal more than most answers ever get
    answer: 2
    explain: >-
      The budget exists to decide the amount from the consequence, and without one the amount gets
      decided by something irrelevant. The ordering answer names a real feature of the procedure that
      addresses a different problem. The two-hours answer picks a number out of the air. And the
      nothing-went-wrong answer treats effort as though it were a decision.
  # --- When not to use one (L9) ---
  - q: >-
      The field experiment in lesson 9 reported figures in both directions. What were they, and what
      scope do they carry?
    options:
      - Grades rose 48% and then 127% during practice, and those two figures are the whole of the finding
      - Grades rose 48% with plain access during practice, and that group then scored 17% below students who never had it
      - Grades fell 17% during practice and rose 48% afterwards, on high school mathematics practice problems
      - Grades rose 127% with the guarded tutor, and that same group fell 17% once the access was removed
    answer: 1
    explain: >-
      Both halves are in the same paper and the course insists on carrying both: the help during
      practice was real and large, and the unguarded group ended up behind students who never had
      access. The first answer drops the half that makes the lesson. The third reverses the order of
      events. And the fourth attaches the deficit to the guarded group, which is the group the
      safeguards largely protected.
  - q: >-
      A manager reads lesson 1's productivity evidence and lesson 9's learning evidence and says the
      two contradict each other. What is the right reply?
    options:
      - They do contradict each other, and the more recent of the two studies is the one to be preferred
      - They contradict only on tasks where learning matters, which is most professional work
      - They measure different things, output now against capability later, so both can be true at once
      - They do not contradict, because one was run on consultants and the other on schoolchildren
    answer: 2
    explain: >-
      A tool can raise what you produce this week and lower what you can do without it next year, and
      those are two measurements rather than one disagreement. Preferring the newer study is a habit
      worth breaking. The learning-matters answer concedes a contradiction that is not there. And the
      different-populations answer reaches the right verdict for a reason that would also dismiss any
      study for being about somebody else.
  # --- What you hand over (L10) ---
  - q: >-
      A charity trustee wants to know whether what she types into a system is used to train it. Where
      does lesson 10 tell her the answer is?
    options:
      - In the provider's published document for her product and her plan, read on a date she writes down
      - In general reporting about the industry, since providers of this kind all do broadly the same thing
      - In the answer the system gives when she asks it, since it has access to its own terms of service
      - In whether she is paying, since paid plans are the ones that are not used for training
    answer: 0
    explain: >-
      It is a published fact about one product and one plan, it changes, and the date is what stops a
      correct answer going quietly wrong later. The industry answer is the belief the lesson takes
      apart. Asking the system is asking the thing being checked. And paying changes the contract
      without telling you what the contract says.
---

Twenty-four questions on the whole course. Twenty of them describe somebody you have not met, doing something no lesson covered, and ask what you would say to them. That is deliberate: what this course is for is the next case rather than the cases it used.

Nothing here turns on what any named model could do on any named day. A test built on that would need rewriting every few months, and a test that rots is worse than a short one.

The pass mark is 80%. If you miss one, the explanation under it will tell you which lesson to go back to.
