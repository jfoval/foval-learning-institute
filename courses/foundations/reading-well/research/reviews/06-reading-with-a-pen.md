# Reading Well, lesson 6: Reading with a pen

Newest review at the bottom.

## 2026-09-18 — Lesson 06 — depth, fact-check, pedagogy and neutrality, Tier A
**Reviewer:** fresh-context subagent. It diffed the Ruskin blockquote against Project Gutenberg #1293
programmatically, 1,044 characters each side, equal after exactly the two normalisations footnote 2
claims, and collated the wording against three independent Internet Archive scans of earlier
printings. It also answered the outline's standing question about whether this lesson is thin enough
to fold into lesson 5. **It is not**: the six marks on the Ruskin paragraph could not have been
written by anyone who had not read that paragraph closely, which is the specificity test passed on
the section that carries the lesson.

**Findings:**

1. [critical] **The extract is cut mid-paragraph and the lesson said "It is one paragraph".** Ruskin
   runs on for another two hundred and fifty words into the "peerage" of words, "words of true
   descent and ancient blood" against "words of modern canaille", and a mistaken syllable rightly
   marking a man inferior "for ever". No ellipsis, no note of the cut, in the lesson that teaches
   accuracy, under a footnote boasting of character-level fidelity, with the link to the full text
   supplied three lines above. The cut also removes the sentence that supports the lesson's own mark
   4, Ruskin's seaman who "has only to speak a sentence of any language to be known for an illiterate
   person".
2. [high] **Mark 6 got Ruskin backwards.** It called his claim "the same thesis as coming to terms
   with an author". Ruskin's accuracy is accuracy about what a word means in itself, letter by
   letter, which is the dictionary's kind; Adler's rule 5 wants the sense *this author* gives a word,
   and lesson 5 opens its own quiz by making exactly that point. The lesson's flagship connection
   joined the two men on the half where they disagree.
3. [high] "its first two lessons" for the highlighting evidence, twice. It is in How to Learn
   Anything's lessons 1 and 3, and `SOURCES.md` says so in its own scope note.
4. [high] The Term 2 hand-off the outline requires, on note systems that persist across years, was
   absent, while the lesson walked up to the line ("still useful when you come back to the subject in
   two years").
5. [high] "its first six words removed", of the clipped Adler sentence. Five words are removed.
6. [high] **Ruskin appears nowhere in `research/SOURCES.md`.** The course's centrepiece primary text
   for two lessons had no research record, no read-depth label, and no note that its wording was
   confirmed. `npm run validate` cannot catch this, because its citation check only fires on works
   named on the `unread:` line.
7. [high] "Four of those six were the useful ones" over a list of five.
8. [high] **Mark 3 misapplied lesson 3's own diagnostic.** It called the "opposition of letters in
   the function of signs" clause syntax. Apply lesson 3's fix for syntax and the clause comes apart
   structurally at once and you are no better off, because what you lack is what that opposition
   *is*. It is missing background, whose rule is the opposite one.
9. [medium] The lecture is dated 1865 in the body; it was delivered in December 1864 and published in
   1865. The fluency claim borrowed authority for a clause nobody has reported, that the feeling is
   strongest exactly where understanding is weakest. The lesson said a mark does "most" of its work
   at the moment of making and then said "half". An uncited superlative about highlighting. `minutes`
   was 60 against a real load nearer 90. One predict and one checkpoint, and the worked example
   showed all six marks at once with no gap for the reader. Objective 3, the one-page record, had no
   quiz item. Quiz item 5's fourth option was refuted by the lesson's own exercise. "Most first
   attempts use two" was dressed as a finding. Zero contractions. Mark 2's last clause said the claim
   was "still waiting for its support" when Ruskin supplies it two sentences later.
10. [low] The Gutenberg transcription is of the 1894 George Allen edition and heads the lecture "Of
    King's Treasuries"; "a century earlier" is seventy-five years; two universals about the Adler
    reproductions were stronger than `SOURCES.md` records; "almost certainly three" for the
    highlighter's phrases is a guess and should say so; a claim about what people write on sticky
    notes; misconception 5 restated a point already made; mark 4 did not name its own tell, which is
    that Ruskin puts both words in quotation marks himself; and exercise 2 pointed at the wrong line
    of the record.

**Resolutions:** all applied.

Finding 1 was repaired by saying what was cut and why it matters, before the blockquote, and by
adding the same note to footnote 2 and to the new `SOURCES.md` entry. That is better than restoring
the passage, because the omitted material is about class rather than reading and judging it is
lesson 7's business, not this one's.

Finding 2 was repaired by keeping the arrow and reversing its meaning. The mark now records a
disagreement between Ruskin and Adler about where the answer to a word comes from, which is a better
thing for an arrow to record than an agreement, and it is the mark the lesson would most certainly
have lost.

Finding 8 was repaired the way the reviewer suggested, by having the mark record the failure to
decide and then decide: the structure comes apart and you are still holding nothing, so it is
background. That teaches the diagnostic better than a clean answer would.

Finding 6 produced a full `SOURCES.md` entry for Ruskin, recording the read depth, the edition, the
cut, the collation, and the qualifier lesson 7 must not drop.

**Status after review:** a **narrow second pass is owed** on the Ruskin section only, which the
reviewer scoped to three checks: that the note about the cut is accurate about what was cut, that
mark 3's new diagnosis holds against lesson 3's definitions, and that mark 6's disagreement reading
is the one lesson 5 actually supports. `npm run validate` exits 0, `npm run quiz` reports nothing for
this course, and `minutes` is 90 with an `EXCEPTIONS` entry recording why the model cannot see the
real load.

## 2026-09-18 — Lesson 06 — narrow second pass on the Ruskin section
**Reviewer:** fresh-context subagent, with the full Gutenberg text open beside the lesson. Verdict:
three of the eight repairs broke something, and all three in the pattern course-wide finding 6
predicts.

**Findings:**

1. [critical] **Mark 6 reversed the error's direction instead of removing it.** The first review found
   it joined Ruskin and Adler on the half where they disagree; the repair separated them on a half
   where Ruskin's own text agrees. **Two paragraphs above the extract Ruskin writes: "be sure that you
   go to the author to get at *his* meaning, not to find yours. Judge it afterwards if you think
   yourself qualified to do so; but ascertain it first."** That is Adler's fifth rule and Adler's
   ninth, in 1864. The same passage has the miner figure, in which words are "the rock which you have
   to crush and smelt" to reach "the author's mind or meaning", so for Ruskin the word is the material
   and not the destination, which also defeats the claim that both men put the reader's real work at
   the level of the single word. And after the cut Ruskin wants from a word's history the meaning
   "which in a good writer's work it must still bear". **The difference is one of route, not
   destination.** Compounding it: none of those sentences appears anywhere in the course, including in
   a `SOURCES.md` entry written the same night to close a finding about this text and labelled "read
   in full".
2. [critical, arithmetic] "seventy-five years apart" is right only against Adler's 1940 first edition,
   which this course never cites for rule 5. Against the 1972 edition it is 108 years, and the
   previous "a century earlier" was closer.
3. [high] **Mark 3 quoted lesson 3's syntax signature as evidence for a background verdict.** Lesson 3
   defines the syntax signature as being able to restate the paragraph around a sentence but not that
   sentence, which is mark 3's first line verbatim, and never describes a background failure confined
   to one clause inside a paragraph the reader has understood. The mark then decided on a test lesson
   3 does not supply, and never ran lesson 3's own discriminator.
4. [high] **The new predict punished a reader for a correct answer.** It asked which clause stopped
   *you* and then told a reader who picked a different one to reread, in a course whose third lesson
   exists to say difficulty is a relation between a page and a reader. It also named two of the six
   marks and silently ignored a third correct answer, mark 2, which is the mark lesson 7 builds its
   first objection on.
5. [high] The cut note was incomplete in the direction that flatters the lesson: 221 words rather than
   "two hundred", "class rather than reading" is not fair to a passage still about accuracy with
   words, the seaman sentence was left unmentioned, and the single passage most worth seeing was the
   one omitted, that a mistaken syllable is enough "to assign to a man a certain degree of inferior
   standing for ever", followed by "And this is right".
6. [high] **Mark 6 ellipsed out the one qualifier `SOURCES.md` says a lesson must not drop**, sixty
   lines after mark 5 congratulates itself for noticing a different hedge.
7. [medium] The repair's stated warrant, that judging the class material is lesson 7's business, did
   not exist: lesson 7's own footnote said it does not judge it either. The highlighting pointer was
   swapped from one wrong answer to another by trusting `SOURCES.md` instead of the target course.
   Quiz item 2's stem admitted three answers.
8. [low] The `EXCEPTIONS` reason said "two exercises" for two figures inside one; mark 4 attributed
   the quotation marks to Ruskin when they are the 1894 compositor's as transcribed; mark 1's
   "the paragraph" became ambiguous once the cut was declared; a sixteen-word clause repeated verbatim
   from lesson 5's Connections; and `curriculum/TAXONOMY.md` described this course as covering
   "Note-taking that sticks", which is the thing lesson 6's hand-off explicitly refuses.

**Resolutions:** all applied, and three of them changed the lesson's argument rather than its wording.

Mark 6 now records a difference of **route** and says so, quotes the two sentences in which Ruskin
states Adler's rules a century early, and keeps the qualifier in full. It is a better mark than either
earlier version, because "the etymology gets you there against the book gets you there" is a live
question rather than a manufactured contradiction.

Mark 3 now shows the diagnosis failing and says so: the signature sent one way, the fix sent straight
back, and the honest thing in the margin is the question mark rather than a verdict. It also names
what would actually fix it, which is somebody telling you that *litera* is Latin for a letter.

The cut note now names everything in the cut, including the sentence about inferior standing and
Ruskin's "And this is right", and including his immediate complaint that the accuracy insisted on is
not greater. **And the duck is closed**: lesson 7 now sorts that sentence and finds it falls on none
of Adler's four grounds, because it is a judgement of value rather than a claim about what is the
case. That is a limit of the method, which is worth teaching, and the course does not adjudicate the
view itself.

`SOURCES.md` gained both passages, and its cross-course pointer for the highlighting evidence was
corrected with a warning attached, since two lessons shipped a wrong lesson number by trusting it.

**Status after review:** a **third pass is owed** on the rewritten mark 6, mark 3, predict and cut
note, with the Gutenberg text open, because the reviewer's own warning is that this passage has now
produced a defect on two consecutive repairs. `npm run validate` exits 0, `npm run quiz` reports
nothing for this course.

## 2026-09-18 — Lesson 06 — third pass, and an apply pass on its findings
**Reviewer:** fresh-context subagent with the Gutenberg text open at the paragraphs before the
extract. **Critical: empty, and it said so rather than filling it.** It re-diffed the blockquote
(1,042 characters, byte-equal) and re-counted the cut (exactly 221 words, so the lesson's figure was
right).

**Findings:** two of the three twice-rewritten passages had failed a third time, in a third
direction.

1. [high] **Mark 6, third failure.** Version 1 joined Ruskin and Adler; version 2 split them on the
   destination; version 3 split them on the route, saying "Ruskin thinks the etymology gets you
   there". His own text refuses it: the miner figure two paragraphs before the extract makes words
   "the rock which you have to crush and smelt" to reach "the author's mind or meaning", and one
   sentence after the dictionaries passage he caps it, wanting the meaning "which in a good writer's
   work it must still bear". His own worked reading of *Lycidas* is about Milton's intention. **And
   the `SOURCES.md` entry written the same night to prevent this says "for Ruskin a word is the
   material rather than the destination"**, while the miner figure appeared nowhere in any lesson.
2. [high] **Mark 3, third failure, and the largest of the three.** It still never ran lesson 3's
   discriminator, and it told the reader "this is the case lesson 3's three boxes do not cover",
   which is false: lesson 3's own bond checkpoint is that exact shape and files it as missing
   background wearing a vocabulary costume. The mark had assembled every piece of the diagnosis,
   including the fix verbatim, and then declined to name the box and claimed the framework had a hole.
3. [high] **"In the parliament of any civilized nation" was silently elided**, in three files, from
   the one sentence the course uses to characterise Ruskin's politics. Unframed it reads as a
   free-standing decree about ranking men; Ruskin is reporting a parliamentary convention, and his
   next paragraph says so. In a lesson about accuracy, under a footnote boasting of character-level
   fidelity, with the full text linked three lines above.
4. [medium] Lesson 7's sort reached the right answer by disposing of the strongest competing ground
   in a subordinate clause; the cut note named the seaman as the material "still about reading" and
   left unnamed the two sentences in the cut that are purely about words; the predict's absolution
   covered both halves of its question on a warrant that reaches one.

**Resolutions:** all applied, in the reviewer's own wording, which it supplied for every finding.

Mark 6 now says what the arrow actually catches, which is a question about how much work a word's
history can be asked to do, with Ruskin's own limits on it quoted. Mark 3 now runs the discriminator,
names the box, and cites lesson 3's own precedent. The parliament clause is restored in lesson 6, in
lesson 7 and in `SOURCES.md`, which now carries a standing instruction not to drop it.

**Status after review:** the reviewer asked for an apply pass rather than another review, and for one
verification afterwards: that mark 6 names the miner figure, that mark 3 names a box, and that the
parliament clause appears once in each of the three files. All three hold.
