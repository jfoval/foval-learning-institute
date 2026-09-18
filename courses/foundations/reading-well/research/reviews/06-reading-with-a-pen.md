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
