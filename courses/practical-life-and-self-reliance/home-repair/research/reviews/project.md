# Reviews: Home Repair course project, "Your home's maintenance plan"

## 2026-09-26 — Project — fresh-context review

**Reviewer:** one fresh-context reviewer. Read CLAUDE.md, courses/CLAUDE.md, standards 4.4, this
course's `pipeline-briefs.md`, OUTLINE "Assessments", and Personal Safety's project for the shape.
Every lesson's "For your plan" read, and every lesson the project points to opened at the sentence it
cites (lessons 1 to 23, with 1, 3, 5, 7, 8, 9, 11, 15, 19, 20, 21, 22 and 23 read at length).

**Checked and sound.** The safety callout is byte-identical to lesson 1 (diffed) and the build's
`HOME_REPAIR_SAFETY` string. No em or en dashes. The six parts match the OUTLINE deliverable. The
minutes add up: 90 + 30 + 90 + 60 + 45 + 60 + 15 = 390 = six and a half hours, as stated, and each
share is in line with the lesson exercises it collects (lesson 1's map is 30 minutes for three
controls alone; lesson 23's call list 25). The shape, levels and pass rule match Personal Safety's
project. The no-gas route passes without touching anything (card B still written, map "no gas
supply", calendar items "not in this home", call list "none"). Card A, B and C match lessons 1, 9
and 5 in order, numbers, conditions and which lines are this course's own reading; lesson 9's table
title, "The two side by side", is right. Every calendar row was matched to its lesson's "For your
plan", intervals and country splits included. Every row of the stop list and call list traces to
its lesson. The Part 6 candidates match each lesson's Yours or Yours, on conditions label.

**Outright-fail list, item by item.** Gas beyond user instructions (lessons 1, 10): matches. Other
country's leak steps (9): matches. Cover off, volt stick (1, 5): matches; the door note agrees with
lesson 5's reading of SCE. Relief valve without the manual (8): matches lesson 8's stop list.
Asbestos and old paint (13, 14, 19): matches lesson 19's stop list and its "burning, torching or dry
sanding" line; "sampling" is lesson 19's and 23's Call someone. Generator (11): matches CPSC's
wording as lesson 11 gives it. Ladder (15): "any job within 6 m" matches lesson 15's stop list and
lesson 23's table. Fogger and droppings (21): match. Payment (23): cash is Citizens Advice's advice in
England and one of the FTC's warning signs in the US; wire and gift card are FTC signs. Two items
needed words changing (R5, R6).

## Findings and what was done (all fixed inline)

- **R1 (major, false pointer).** "If you can't find a control: ... lesson 1 sends you to a plumber in
  the UK, and in the US to your water utility." Lesson 1 says no such thing: WaterSafe's plumber is
  for a stop tap that won't turn or won't shut, and the water utility appears only in the flooded
  basement case. Reworded as the project's own suggestion, labelled so.
- **R2 (major, UK/US mixed).** Part 6 offered "the relief valve check, only by your own heater's
  manual" to everyone. Lesson 8's Yours, on conditions is for a US storage heater's T&P valve; in a UK
  unvented cylinder it gives no householder's check, and a dripping tundish is Call someone. Now says
  so.
- **R3 (major, UK/US mixed).** The call list gave the chimney sweep "HETAS's line" with no country.
  Now: a HETAS-scheme sweep in the UK (lesson 23), and in either country lesson 11's check, labelled
  as HETAS's line (lesson 11's own checkpoint applies it to both).
- **R4 (major, rubric).** The map's Full marks and Partly there both required "all three controls
  found", so a home with no gas, or a control nobody can find, could not reach either level, though the
  no-gas section and the can't-find paragraph say both are fine. Both levels now accept a control noted
  as absent, or one looked for and asked about. Full marks also asked for "the landlord's answer",
  which contradicts the renter section ("no answer yet" is a complete line); now "what you asked the
  landlord and when".
- **R5 (minor, fail list).** "A charcoal barbecue or grill burned indoors" narrowed CDC's "Never burn
  charcoal indoors", which is lesson 11's wording. Now "charcoal burned indoors".
- **R6 (minor, UK/US mixed).** "Signing an insurance cheque over" is the FTC's line, US only, in British
  spelling and unlabelled. Now "in the US, ... signing your insurance check over".
- **R7 (minor).** "A state outside the five lesson 22 read": lesson 22's five are US places, New York
  City among them. Now "a US state or city outside the five places lesson 22 read".
- **R8 (minor).** Part 6's lesson 20 candidate now says "you can reach from the floor", since the
  project's own rule is that it is all done from the floor, and lesson 20's ceiling step needs lesson
  16's stepladder.
- **R9 (minor).** Part 6's check "the drip gone by the meter test": the meter test is lesson 2's test
  for hidden supply leaks, and lesson 3's check after a tap repair is simply that the drip has stopped.
  Now "the drip stopped".
- **R10 (minor).** "UGA's checklist, which lesson 1 named as the course's calendar source": lesson 1
  says the project "borrows from" it. Reworded to match.
- **R11 (minor).** The renter paragraph read as if lesson 23 said to put the landlord on each card;
  lesson 23 says the call list. Now points to Part 2 for the cards.
- **R12 (minor).** The stop list's Not yet now reads "a job that could arise in your home", matching
  Full marks.

## For another session (not the project's file)

- Lesson 22's "For your plan" says "the GOV.UK list of competent person schemes in England and
  Wales", but its body ties the list to England only, and lesson 23 says England. The project follows
  the bodies ("in England"). Fix in lesson 22: either say in the Wales section that the same list
  serves Wales, from a source, or change "England and Wales" to "England" in its "For your plan".

## Verdict

**CLEAN** after the inline fixes. `npm run validate` exits 0.
