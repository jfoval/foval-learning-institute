# Reviews: Digital Literacy lesson 9, "Installing software, and what you are trusting"

## 2026-09-18 — Lesson 09 — depth, fact-check, neutrality, pedagogy, cold-start, voice, media, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **not ready** with 5 criticals, 10 majors
and 17 moderates and minors. All closed below. The lesson was not committed unreviewed.

Tier A, one reviewer, fresh context. `sensitive_domain: false`. The neutrality pass was **run rather
than skipped**, because the outline names the antivirus question as contested under standards 3.1 and
says the lesson must not read as "antivirus is a scam". The reviewer ran `npm run taught`,
`npm run minutes`, `npm run validate`, a 9-gram overlap scan of lesson 9 against lessons 1 to 8, a
scripted quiz-shape count, a block blank-line check, and HTTP checks on both Go deeper links.

### The five criticals

**L9-01 the app-store column was wrong and unsourced.** The table said the store "builds or signs"
the software. No major store builds it; they take a developer's binary and sign or re-sign it.
Worse, **SOURCES.md has no app-store entry at all**, so that whole column and the "if it is in the
app store it is safe" misconception rested on general knowledge, against `courses/CLAUDE.md` rule 1.
**Closed:** the cell now reads "the store signs, and often re-signs, what the developer submitted",
and the research gap is written into `docs/QUEUE.md` as a Stage 1 item rather than papered over.

**L9-02 the package-manager cell was true of one kind of package manager and false of the lesson's
own example.** "Signed by the repository's key" describes a Linux distribution, where a maintainer
builds from source and the archive key signs the result. It is false of a language index like the one
`pip` uses, which has no such key vouching for a build, **and that is exactly the ecosystem of the
lesson's own `pygame`/`pygaqme` illustration three sections later**. The lesson's load-bearing table
and its load-bearing example described two incompatible systems. **Closed:** the cell now carries
both cases explicitly, a paragraph under the table says which is which, and the typosquatting section
now says the attack lives in the cell where nobody checked the build, which sharpens the point rather
than weakening it. The table also gained two named examples per column and a fifth row on sandboxing.

**L9-03 the opening sentence was false twice over.** "Everything you have done in this course so far
has been reversible" is contradicted by lesson 6, which teaches that a single `>` truncates a file
with no warning and no undo, and by lesson 4, which had every Windows reader install a shell through
an administrator prompt, as this lesson's own Connections section concedes. **Closed:** the opening
now names both, and lands better for it, because lesson 6's one lost file is the right scale to
contrast with an installation.

**L9-04 the antivirus misconception headline stated the opposite of the model it named.** The heading
was "antivirus will catch it, so care is what matters", and the buggy-software model concludes that
**antivirus is unnecessary**. The body below it and quiz 4 both said the right thing, so a reader was
taught both. The outline's phrasing seeded this and the draft compounded it. **Closed:** the heading
is now "I am careful about what I click, so I do not need antivirus."

**L9-05 the Ion et al. section reprinted lesson 1's opening as though it were new.** The 9-gram scan
found 49 shared 9-grams with lesson 1 and the entire six-row table verbatim, plus four of the
section's five moves paraphrased from lesson 1, and it was presented as a discovery ("sit with that
for a moment, because it is the most quotable result in this whole subject") and then quizzed.
**`npm run validate` skips the repeated-passage check on a course that is not yet published**, which
is `docs/QUEUE.md` item 4, so the reviewer was the only thing that could catch this. **Closed:** the
table is gone, the section opens by saying the reader met these lists on the first page of lesson 1,
and it now carries only the two things that are actually new here, the self-report limitation and
updates as the structural answer to the previous section. The section is shorter and better.

### The ten majors

**L9-06** two frequency claims about typosquatting ("usually works", "often contains the real
package", plus a claim about attackers knowing mistype rates) came from a report this course never
opened, in a lesson that refuses to print that report's count. Now structural rather than
quantitative. **L9-07** "the one attacked most often" was an unsourced superlative, load-bearing in an
objective; replaced everywhere by the structural claim the lesson actually proves, that it is the one
no route can check for you. **L9-08** the search-advertisement mechanism had no Stage 1 research
behind it and was stated as fact ("the auction asked who would pay"), which is also a simplification,
since placement is ad rank rather than highest bid; now stated at the level the course can defend,
with an explicit line saying this course has not researched the topic, and quiz 1 rebuilt off it.
**L9-09** standards 1.2 requires two worked examples and the outline specified both; one was prose
and **the other was missing entirely**, so the lesson could be completed by reading, against the
outline's first standing convention. The outline's example (a) is now a six-step exercise that
installs one real thing, reads one real address, and names all four parties before downloading.
**L9-10** seven terms were load-bearing and taught nowhere in the course: signature, key, package
manager, repository, parse, attack surface, sandbox. Four of them sat in the antivirus "Against"
paragraph, so a cold-start reader could not evaluate that side at all, which had a neutrality
consequence. Key and signature are now defined, package manager and repository are named with
examples, and the Against mechanism is rewritten in plain words. This is lesson 8's L8-05 recurring
one lesson later. **L9-11 the neutrality count failed.** For: no named authority, three sentences, no
mechanism. Against: two named authorities, six sentences, a four-sentence mechanism, the last word,
and the framing "the position consumer coverage almost never states". The read level was disclosed
in the body for one side and only in a footnote for the other. Closed by naming AV-TEST,
AV-Comparatives and Microsoft Defender, giving both read levels in the body in one sentence, and
giving the For side the closing paragraph. **L9-12** the lesson cited `invoice.pdf.exe` as lesson 3's
example; lesson 3 uses `statement.pdf.exe` five times. Quotes accurately, describes carelessly.
**L9-13 the primary source link was dead**, 404 on both capitalisations; lesson 1 carries a working
URL for the same paper, which SOURCES.md also had wrong and which is corrected in the same commit.
**L9-14** no phone passage and no operating-system callout, in the one lesson whose machine-touching
exercise is operating-system-dependent, against outline decision 6 and the three-systems convention.
Now one callout with the update settings on all three, and what a phone changes. **L9-15** "when you
run a program, it can do whatever you can do" is false for sandboxed store software and for every app
on a phone, and false in a way the lesson depended on, since the app-store route is meant to be the
one that checks more. Now carries the exception.

### Moderates and minors

**L9-16** `sudo` is now named once, after the meaning is taught, which is what outline lesson 5's note
settled; the SOURCES rule forbids teaching it as a step in a recipe, not naming it, and silence left
the rule undischarged for readers who have been in a POSIX shell since lesson 4. **L9-17** lesson 5's
promise to this lesson was unkept and lessons 1 and 5 were missing from Connections; both added.
**L9-18** quiz 1's stem stipulated a harmless outcome and then asked what went wrong, so "nothing"
was defensible; the stem now asks which link was decided by something unrelated to the software.
**L9-19** quiz 5 tested lesson 1 rather than lesson 9 and had two defensible answers; replaced with an
item on a compromised update, where the honest answer is that none of this lesson's four checks catch
it, which is the argument for the structural defences. **L9-20** quiz 6's stem contained "rather than
a typing accident" and the key was the only option saying "on purpose"; both fixed, and a second
distractor now also asserts intent. **L9-21** a checkpoint promised three things and one section
followed. **L9-22** a predict asked about seven parties and answered about six; the name resolver is
now named and what it can and cannot tell is stated. **L9-23** the lesson-8 back-reference flattened a
careful two-part claim into a flat negation and called it "exactly the shape". **L9-24** the lesson
named no concrete store, manager or repository, and lowercased Gatekeeper into a generic noun while
dropping SmartScreen, which SOURCES names. **L9-25** quiz 2's explain said "the same bytes", which is
wrong in the distribution case, where a different builder produced a different build. **L9-26
contractions had collapsed to 2 in 4,659 body words**, one lesson after L8-16 closed the same finding
at 1 in 4,739; now 47. "The reader" in body text where it meant "you" is fixed. **L9-27** two voice
tics, one of them a subject-verb agreement error. **L9-28** decision 5 missed in a quiz explanation,
which is exactly where L8-14 found it too. **L9-29** two small embellishments beyond SOURCES, both
favouring the Against side. **L9-30** `pygaqme` is an insertion, not a substitution, so "one letter
away" became "one keystroke away", which matters because precision about names is this lesson's
subject. **L9-32** a mild shape lean, the key being shortest in four of six items, not exploitable;
one key padded.

### Two things for the queue rather than for this lesson

**The Stage 1 gap on app stores and code signing** (L9-01). The course teaches a three-route
comparison and has research behind only one of the routes.

**An outline inconsistency** (L9-31). The lesson 9 entry promises that lesson 11 asks the same
four-party question about a message; the outline's own lesson 11 entry has no four-party frame in it.
Lesson 11 was drafted in the same session and honours the promise in a single Connections sentence
without building on it, which is the cheapest reconciliation, but the outline still disagrees with
itself and somebody should pick.

### What passed, so nobody rechecks it

**All three Stage 1 gates obeyed, in the body as well as the footnotes.** No Sonatype count anywhere,
and the lesson does not even name the vendor. No Ion per-practice percentage, only the ranking, which
SOURCES permits, and the lesson says so in its own text. No AV-TEST or AV-Comparatives score. **Every
Wash number and the model's content check out** against SOURCES line by line, and the model is
described as Wash describes it rather than as the lesson would find convenient. **Ion's figures
check**: 231, 294, three practices each, the 2023 Impact Award, the self-report framing. **The `sudo`
safety rule was never violated.** **"Never disable a security feature" is obeyed in every exercise**,
and is stated to the reader. **The anti-fatalism rule lands**: "you cannot verify the rest" is
immediately followed by a checkpoint naming the structural answer and rejecting the vigilance answer
with a reason, then a section delivering it. **The four parties are used consistently across all five
appearances**, and the signature checkpoint's apportionment (a signature covers party three and part
of party two, and leaves one and four untouched) is the best writing in the lesson. **The decision to
ship no SVG is right** and no chart should be added: both structures are tables, they reflow on a
phone where a wide viewBox would not, and the one thing that wants a picture already exists as
lesson 7's figure. **Mechanics clean**: no em dash, no en dash, no banned word, all eight `:::` blocks
correctly spaced, every `[n]` matched, `npm run validate` exit 0.

### Note for the next drafter

Lesson 8's review closed a cold-start finding and a contractions finding. **Both recurred here, one
lesson later**, which is the second data point rather than the first. The pattern is that a drafter
working from an outline writes in the outline's register and assumes the outline's vocabulary, and
neither the outline nor the drafter can see which words the course has actually taught. `npm run
taught` gives objectives, not vocabulary. A word-level check would catch it: grep the draft's
technical terms against lessons 1 to N-1 before handing it over. That is worth a queue item if it
happens a third time.
