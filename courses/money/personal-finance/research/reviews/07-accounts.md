# Reviews: Personal Finance Fundamentals — 07-accounts

Append-only. Newest at the bottom.

## Lesson 7, "Where the money lives" — Stage 4, Tier A, 2026-09-09

Drafted 2026-09-09 from the retirement-accounts research added to `SOURCES.md` the same day. Tier A
(one reviewer, fresh context, all five passes) rather than Tier B: retirement policy is 3.4-adjacent
rather than squarely inside it, the lesson's contested material is confined to one section, and the
reviewer was told to run the neutrality pass in full and to apply the ideological Turing test to that
section by name. Verdict returned: publishable after fixes, not heavy rewriting.

### Findings, and what was done

**7.1 The quiz was scoreable at 100% by option length alone.** Measured, not eyeballed: the key was
the longest option in all six items, only two of four answer indices were used (1,1,2,1,1,2), two
adjacent repeats, spreads of 61 to 167 characters against a target of about 15. The mechanism was
that each key carried its own reasoning while the distractors were bare claims. **Fixed by rebuilding
the quiz from scratch.** The reasoning moved into `explain` where it belongs. New shape: indices
2,0,3,1,0,3, all four used, no adjacent repeat, spreads of 2, 2, 5, 3, 6 and 5 characters, and the
key is the longest option in zero of six items.

**7.2 No item tested a case the reader had not already worked.** Four of six reused the body's own
people and numbers, and one reused the same named person from a checkpoint forty lines earlier.
Standard 1.1's transfer test fails on that. **Fixed:** four new application items on cases the lesson
never works, each carrying one structural difference from the worked example: a multi-tier match
formula (the 25% case the lesson names but never computes), a graded rather than cliff vesting
schedule read at three years, a young reader whose rate will rise rather than fall, and someone
auto-enrolled at 3% under a 6% threshold. Two recall items kept.

**7.3 A stale IRA contribution limit ($7,000) in the body, contradicting the lesson's own footnote**,
which already said $7,500 for 2026. This is exactly what SOURCES.md's rule about stale limits exists
to prevent. **Fixed by removing the number**, linking the IRS page inline, and adding the fact that
matters more and had been left out: the annual limit is shared between traditional and Roth IRAs.

**7.4 The 7% long-run return was called nominal; lesson 5 established it as real**, in three places.
The same 7% compounds the forgone match to $20,725, so the basis changes what that number means.
**Fixed**, and the $20,725 now says "in today's buying power".

**7.5 The policy section failed the ideological Turing test in one direction.** Not in its wording,
which the reviewer judged a fair statement of the first position, but structurally: position A was
anonymous and uncited while position B was attributed to a named institution with a footnote, B was
given a rebuttal of A while A got no reply, and the only source in the section was a page arguing
against A (defect 10's tell, a footnote pointing at a work written against the position it is used to
describe). **Fixed:** EPI is now named as the standard statement of A, with a footnote that says
plainly that the page returned a 403 to automated retrieval and that this course therefore names the
position without quoting figures it could not open. A now carries its strongest point, longevity risk
and the fact that nothing in a 401(k) menu does what an annuity does, and a paragraph gives each side
its answer to the other. A closing paragraph classifies the question, which was missing: both sides
use the same statistics, they disagree about what the system is for, so it is a value question
resting on shared facts.

**7.6 and 7.7 The diagram's taxable column did not reconcile, and two labels collided.** $3,200 became
$2,840 with the $360 appearing nowhere in the drawing, and the withdrawal row said "already taxed"
with the diagram's own visual code for "no tax" while the prose said the opposite. The row label "You
keep" overlapped the first column's figure under every plausible font metric. **Fixed by redrawing
it**: the taxable withdrawal now carries a filled marker and "tax on gain $360", columns moved right
to give the row labels room, the summary row split onto two lines with the kept amounts in `--gold`
so the emphasis survives dark mode, where `--navy` sits close to `--text-2`. Verified in the browser
with `getBBox` on every `<text>`: no overflow of the viewBox and no overlapping pair, in a rendered
page rather than by eye or by validator.

**7.8 A checkpoint with an empty body** shipped a "Show the answer" button opening onto nothing.
**Fixed:** it is a free-recall `:::exercise`, which has no reveal affordance.

**7.9 The order-of-operations comparison was not cost-equivalent, in the lesson's own favour.** It
compared $3,000 into the plan against $3,000 to the card, when the contribution is pre-tax and costs
$2,400 of take-home, a fact the lesson had established six lines earlier. **Fixed by doing it
properly**, which strengthens the point rather than weakening it: $2,400 of take-home saves $576 of
card interest or captures $1,500 of match, and a parenthesis taxes the match on the way out so the
final comparison is $1,200 against $576.

**7.10 Lesson 2's cushion evidence was misstated.** The lesson moved the evidenced threshold from
$2,000 to the bottom of a "$1,000 to $2,000" range and upgraded "associated with" to "found the
biggest single change in outcomes", undoing lesson 2's own careful separation of evidence from
convention. **Fixed**, with the correlational framing restored.

**7.11 An unsupported claim** that "half of plans require a specific contribution from you before
anything is matched", a garbling of Vanguard's "50% of plans match only". **Fixed** to the sharper
real figure: one plan in twenty-five makes no employer contribution of any kind.

**7.12 Research gathered at Stage 1 and not used** (defect 1, the largest category every time). Four
items, three of them load-bearing. **All four now in:** auto-enrolment has its own section, which the
lesson badly needed because it is the strongest live illustration of the lesson's own thesis that
defaults beat information, and because a reader auto-enrolled at 3% under a 6% threshold is the most
common real form of the mistake; the shared IRA limit; the mean-against-median balance gap ($148,153
against $38,176), which is lesson 1's habit arriving in a new place; and the second diagram the
outline specified, showing the contribution, the match and a year of market return on one scale.

**7.13 `minutes` understated the load.** Reviewer measured 95 to 105; `npm run minutes` independently
put it at 90 against the drafted 70. **Set to 90 by the script**, which is the project's measure.

**7.14 Objectives.** Vesting had a section and a quiz item and appeared in no objective, and objective
2 asserted as fact ("outranks nearly every other use of a dollar, including paying down expensive
debt") what the lesson itself treats as a judgement about failure modes. **Both fixed.**

**7.15 to 7.17, smaller.** "It belongs second" hedged into the argument that follows it; four inline
links added at the moments the reader is told to go and look; a paragraph added on the Roth 401(k),
which the lesson had left out entirely while doing its Roth analysis on IRA properties that do not
carry over to it. RMD age now says "73 today" and names the move to 75. "One in four plans" restored
to "one in four plans with a match". Publication 590-B added to SOURCES.md, since two claims cited it
and the research file had no record of it being opened. "Go deeper" trimmed from six items to four.
Six "Here is" openers and the "Do it now" exercise title rewritten.

### Not fixed, and why

- **The reviewer's suggestion to split the lesson** at "The order of operations" is declined. The
  wrapper material and the match material do each stand alone, but the ordering section is the
  payoff of both and would be orphaned by the split, and standard 1.3 tells reviewers not to flag
  length by itself. 90 minutes is long and the lesson says so honestly in its own `minutes` field.
- **The reviewer's "publishable after fixes" verdict did not require a second pass**, and per the
  Stage 4 rule a second full review runs on a trigger rather than out of caution. The trigger
  conditions (wrong facts found, failed neutrality check, more than a third flagged as generic) were
  partly met: the neutrality pass did fail in one direction, and two facts were wrong. The neutrality
  fix was substantial enough that **the policy section alone should get a fresh set of eyes before
  the course-end test is written.** Logged here rather than run now.

### What the fact-check verified

Every worked number in the lesson was re-computed independently by the reviewer and came back
correct: the three-wrapper example, the 22%-against-12% checkpoint and its mirror, the $50,000 match
example including the $2,400 take-home cost, $20,725 over ten years, the $720 and $576 interest
figures, the expected-value arithmetic, and both quiz computations. Every external figure was checked
against the source, and the BLS table, the Choi et al. paper and the Roth RMD rule were re-fetched
live. The two traps that catch this drafter repeatedly, a quotation trimmed of its qualifier and a
position described in its opponents' words, were both checked: the first was clean, and the second is
finding 7.5.

---
