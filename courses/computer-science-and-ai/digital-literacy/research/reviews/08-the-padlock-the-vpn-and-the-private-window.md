# Reviews: Digital Literacy lesson 8, "The padlock, the VPN and the private window"

## 2026-09-18 — Lesson 08 — depth, fact-check, neutrality, pedagogy, cold-start, voice, media, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** The draft went to review, came back **not ready**
with 3 criticals, 5 majors, 8 moderates and 12 minors, and every finding is closed below. The
lesson was not committed in its unreviewed state.

**Tier A**, one reviewer, fresh context. `sensitive_domain: false` and no `standpoint`, so Tier A
is right; the neutrality pass was **run rather than skipped**, because the outline names the VPN
material as "the sneering risk in this course" and applies standards 3.3. The reviewer ran
`npm run taught digital-literacy`, `npm run minutes`, `npm run validate`, an `rsvg-convert` render
at 840px, a 9-gram overlap scan of lesson 8 against lessons 1 to 7, and a scripted quiz-shape count.

**The reviewer's own summary:** the lesson is well built, its organising claim is the right one, its
sourcing discipline is better than this course's average, and it obeys the APWG correction exactly.
What was wrong was concentrated in three places: the figure, the worked table's own summary, and a
contradiction with lesson 7 that lesson 7's review had closed one lesson earlier.

### The three criticals

**L8-01 the figure used two incompatible encodings at once.** The bars were meant to answer the
question the body asks of them, which party does this tool change something for, but the HTTPS bar
was drawn as the span of the encrypted stretch instead. Drawn that way it excluded the reader's own
device and included the delivery network and the service, which are exactly the two parties that
*can* read an encrypted connection and that the body says so four lines below. Same shape as L7-02,
one lesson later, and defect #3. **Closed:** every bar now means one thing. HTTPS covers the router,
the provider and the networks in between, and stops at both ends. The private window covers the
device. The VPN covers the lookup and the middle. The body's description of the bars was rewritten
to match, and the `<desc>` with it.

**L8-02 the lesson handed the transit networks back the domain**, in a sentence that lumped the
router, the provider and the networks in between together as knowing "to which domain". Lesson 7
teaches the opposite as its fourth objective, draws it on its figure, and quizzes it as a transfer
item. A reader doing both lessons was taught both answers. It was also unsourced; nothing in
SOURCES.md covers what a transit network can infer. **Closed:** the sentence is split. The router
and the provider can name the domain, and the networks in between are left where lesson 7 left
them, with the delivery-network address as the reason.

**L8-03 the worked table's punchline did not match the table.** It said "only two boxes" and then
named three, and the table above it had five boxes differing from the ordinary column. This is the
lesson's central worked example and that sentence is what the opening exercise promises. **Closed,
and then closed again**: the first repair said the private window changes one row and the VPN four,
which was also wrong. Counted properly, the private window changes two boxes (the disk, and the
cookie the site is handed) and the VPN changes three (provider, employer's network, and the address
the site sees). The summary now says that, and says the fourth row never moved because it was HTTPS
all along.

### The five majors

**L8-04 the checkpoint converted a measured finding into the lesson's own theme.** Habib measured
"logging into a service" at 38% of private sessions; the checkpoint told a reader worrying about
online banking that the study found *banking* to be the commonest use. The measured pattern at the
foot of `/draft-lesson`, in a sentence with no quotation marks in it. **Closed:** "signing in to a
service, of which banking is one".

**L8-05 six load-bearing terms were used and never taught anywhere in the course.** The reviewer
grepped lessons 1 to 7: encryption, HTTPS, HTTP, cookie, certificate and padlock appear in none of
them, `prerequisites:` is empty, and lesson 1 twice *promises* that lesson 8 will say what
encryption and a private window and a VPN each hide. "HTTPS" first appeared in this lesson as an
SVG bar label, before the word occurred in a sentence. "Cookie" carried a belief statistic, a table
cell, the phishing case and a quiz distractor, undefined. **Closed:** three short definitions before
the figure, encryption, HTTPS and the cookie, each one sentence. "IP address" in the Consumer
Reports paragraph became "the address a VPN changes", which is lesson 7's vocabulary. This is the
cold-start pass, and it is the pass John caught by eye and the pipeline did not.

**L8-06 the domain-reading rule had no stopping point.** "Read leftwards from the first single
slash" with no stop yields the whole hostname, and "the characters immediately before that slash
are the end of the domain" is circular. Both worked examples were hostile `.com` domains where two
labels happen to be right; **the lesson never worked a legitimate address**, so a reader meeting
`www.barclays.co.uk/personal` had no rule and two labels gives `co.uk`, which is the exact error the
previous correction was made for. The lesson calls this "the single most useful reading habit in the
whole course". **Closed:** the rule now says go left past the ending until you have collected one
ordinary word, and two addresses are worked side by side, one real and one fake, with each label
named as it is passed. The double slash in `https://` is explained, which it was not.

**L8-07 the lesson's first instruction was never delivered.** It opens by telling the reader to get
out their lesson 7 drawing because "this lesson is going to ask you to mark it up", and nothing ever
asks. **Closed:** practice step 2 now has the reader draw the three bars onto their own drawing from
memory and name the party each one touches, which is better retrieval than reading the lesson's
figure anyway.

**L8-08 a quiz distractor was true by the lesson's own table.** Q2 asked what a private window
"genuinely changed" and offered "whether the job site can tell it is the same person who visited
last week" as a wrong answer, while the table says the site sees "the same, minus a returning
cookie". Two defensible answers, and the explanation waved away a mechanism the body teaches one
screen earlier. The key was also the only option not opening with "Whether". **Closed:** the stem is
inverted to ask which one the window is *no help with*, the answer is the employer's network, the
other three are all genuinely changed, and every option now opens the same way.

### Moderates

**L8-09** the figure did not draw the VPN company, in a section whose whole point is that the
advertising does not draw it either. It is drawn now, at the foot of the VPN bar, labelled. **L8-10**
"a promise most of its sellers do not keep" converted a count of 12 of 16 into a verdict on an
industry, against SOURCES.md's own instruction and standards 3.3; it now reports the count and names
the four. "the part that is never drawn" lost its "never". **L8-11** "the padlock is already doing
the same job for free" contradicted the lesson's own VPN section, since hiding a destination is not
the job HTTPS does; narrowed to contents, with the difference spelled out. **L8-12** four claims sat
beyond the sources: that ordinary padlock certificates are domain-validated (the source supports it
for phishing certificates only, and the lesson now says so and adds that stricter kinds exist and
look identical, which is the point either way); that VPN tunnels carry the name lookup; and both
claims in the phone callout. Each is now hedged in the lesson's own voice, the way the browser
paragraph already was. **L8-13** two of three principal sources were unlinked and the one Go deeper
link pointed at Consumer Reports' Security Planner while asserting the VPN evaluation "came out of
this group", which nothing establishes. The APWG Q2 2021 PDF is now linked (URL checked, 200), and
the Consumer Reports entry says plainly that the research file records no link and the reader should
search by title. **L8-14** decision 5, every figure carries its year in its own sentence, was missed
in three places including a quiz explanation, which the decision names explicitly. Fixed in all
three. **L8-15** one predict, one checkpoint, nothing in the VPN section, and **a lesson about a
private window that never asked the reader to open one**, against the outline's first standing
convention. Added: a two-minute exercise that opens a private window, closes it and checks the
history, placed before the belief statistics; and a predict before the Consumer Reports counts.
**L8-16** contractions had collapsed to 1 in 4,739 body words, against 27 in lesson 7 and 36 in
lesson 1, plus the banned "By the end of this lesson you will" shape, a second "Here is" opener and
eight compressed one-line morals. Now 33. Two morals rewritten, the ones that earn it kept.

### Minors

**L8-17** the source note said the author list was truncated to satisfy the build's surname check,
when the check had been amended to permit the full list; all eight authors are now printed and the
note explains the exemption honestly. **L8-18** "between a quarter and a third" for 24% and 26%,
when 24% is below a quarter; now "about a quarter". **L8-19** "the two populations" was used five
times without either being identified; they are now named as an online panel and the observed
browsers, with the order stated once and held. **L8-20** the overlay had silently dropped lesson 7's
dashed final segment and its "finishes first" branch caption; both restored. **L8-21** "the gold one
is a dot" described a bar; the whole paragraph was rewritten for L8-01 anyway. **L8-22** "first
single slash" never explained why *single*; the `https://` double slash is now named. **L8-23** the
reading habit the lesson calls the most useful in the course appeared in no objective and no quiz
item; it is now a fifth objective and quiz 1 is built on it. **L8-25** quiz 1 reused the body's own
`secure-barclays-login.com` with the serial numbers left on; it is now a different address, a
different sector and requires the reader to apply the rule rather than recall the example. **L8-26**
"that quarter" on the 90% free-certificate figure was the drafter's inference, not the source's;
removed. **L8-27** quiz 3 said the Consumer Reports evaluation "was written about" the anonymity
misconception, which it was not; softened to what the source supports. **L8-28** the 12% and 5%
were given in the reverse order from the five bullets above them; both instances now name the
population.

### The length question: not split, and the reasoning

The outline plans lesson 8 at 70 minutes and says to split the VPN and private browsing into a
fourteenth lesson if a draft runs past 90 measured. The draft measured 120 and, after these fixes,
**145**. The reviewer agreed with not splitting and supplied the evidence: this course's outline
estimates run at a mean ratio of about 2.05 against `npm run minutes`, every lesson above 1.5, so a
"90" in the outline's scale is roughly 185 measured. The outline's own sentence is "**seventy
minutes is the top of this course's range**", which sets the 90 as a margin above the course
ceiling, and the measured ceiling is lesson 5 at 135.

**Note honestly that the fixes moved it.** At 120 the reviewer could say lesson 8 was the
fourth-longest lesson in the course. At 145 it is the longest, by 10 minutes over lesson 5. That is
a 7% margin and does not change the decision, because the outline's own reason for keeping the three
tools together is pedagogical and untouched by length: "splitting the three tools into separate
lessons would teach them as three separate pieces of magic, which is exactly the mistake being
corrected". The figure and the worked table are both built on having all three in one place.
Thirteen lessons. **It is written into `docs/QUEUE.md` as something John may want to revisit**, since
it is the second lesson running to have to reason past a trigger written in the wrong units.

### On `Pearman (except 08)`

The reviewer was asked to judge whether the amendment to SOURCES.md was right or a fudge, and called
it sound: the mechanism is precedented in the build (`Weston (except 09)`), the exemption lives
beside the entry that justifies it, and the flag still fires on lesson 10, which is the lesson that
wants the unread paper. **One caveat, now in the queue:** the exemption is keyed to a lesson number
rather than to a work, so if lesson 8 ever cited the actual unread password-manager paper the check
would pass silently. That is inherent to the mechanism, but lesson 8 is the first case in the repo
where the exempted lesson could plausibly want the other work by the same surname.

### What passed, so nobody rechecks it

**The APWG correction is obeyed exactly.** "Over 90%" appears nowhere, no figure is attached to
2023, 82% is printed with its quarter and year, and the quotation is verbatim character for
character against SOURCES.md. **Every Habib number checks**, all five belief pairs in the right
order and the right direction, with the base correctly stated as the share of private-browsing
*users* answering a *false* statement *correctly*, and the prose never converting "correct" into
"believed". 305 + 227 = 532. **Every Consumer Reports count checks**, and 16 − 12 = 4 is consistent
with the four named providers. **No repeated passages**: a 9-gram scan against lessons 1 to 7 found
overlap only in a citation title, which matters because `npm run validate` skips that check on a
course that is not yet published, so this was the only check that ran (queue item 4). **Depth passes
all three tests**, and the two worked examples are the two the outline specified. **Neutrality
passes** apart from L8-10, counted before reading for tone in the order the command gives. **Lesson
1's security plan supports the practice exercise.** **The SVG's mechanics are clean**: every
font-size an attribute on the `<text>`, all 15 or above, no `<g>`, no inline style, every fill a
`var(--token, #literal)`, `<desc>` matching every label, nothing past the viewBox.

### One thing for the next lesson

The frontmatter tripped the YAML parser **twice** in this draft: once on a colon followed by a space
inside an unquoted `explain`, and once on an `explain` that *began* with a quotation mark. The
second is a new variant of `docs/QUEUE.md` item 5 and worth adding to it: a value starting with `"`
is read as a quoted scalar and everything after the closing quote is a syntax error. The error
message says "bad indentation of a mapping entry" in both cases, which points at neither cause.
