# Sources: Cooking Fundamentals

<!-- unread: On Food and Cooking, Food Lab, Professional Chef, Complete Techniques, Science of Good Cooking, My Bread, Understanding Food, Bittman, Verhoeven, Augustin -->

*Stage 1 research, 2026-09-24. Written before any lesson is drafted, by four researchers working in
parallel, each in a fresh context, each on one part of the subject (Parts A to D below), and
brought together here. For each source: what it is good for, what it establishes, and exactly how
much of it was read. All dates read are 2026-09-24.*

**How to read the quotation marks.** Each part says how its quotations were taken, and the
distinction matters to a drafter. Part B took every quotation from text it downloaded itself
(curl, PDF-to-text, or the GOV.UK Content API). Parts A, C and D mark quotations one of two ways:
copied from text the researcher extracted directly ("direct" in Part A, [V] in Part C), or returned
by a summarising fetch tool ("fetch tool" in Part A, [T] in Part C), which is a small model and
**must be re-checked against the page before it goes into a lesson**. Nothing from a search-result
snippet is in quotation marks anywhere in this file. Where a part says "snippet only", nothing from
that item may be stated in a lesson as a finding.

**Three access problems shaped this research, and a drafter inherits them.**
1. **Serious Eats blocks automated readers** (HTTP 402 and 451, with a message that the owner has
   asked for automated access to stop). Nobody routed around it. So J. Kenji López-Alt's and Daniel
   Gritzer's Serious Eats articles, the most cited home-cooking science on the web, are read here
   only through the publisher's own syndicated copies on AOL and Yahoo, through secondary reports,
   and through Kenji's own YouTube videos. Any lesson leaning on a specific Serious Eats number must
   have that number read in a browser first, and Parts A and C name which ones are snippet-level.
2. **FSIS, foodsafety.gov and CDC refused automated access** (HTTP 403). Part B read every one of
   them through Internet Archive captures from August and September 2026 and gives the capture
   date. FDA PDFs came straight from fda.gov.
3. **The UK Food Standards Agency has moved its consumer pages to GOV.UK.** Old food.gov.uk URLs for
   rice, leftovers, the 4Cs and chicken no longer resolve. Cite the GOV.UK URLs in Part B.

**The `unread:` line is the build's enforcement.** It names works a reader of this course is likely
to have met and that **were not opened for this course beyond a catalogue record**: McGee's *On
Food and Cooking*, López-Alt's *The Food Lab*, the CIA's *The Professional Chef*, Pépin's *Complete
Techniques*, ATK's *The Science of Good Cooking*, Lahey's *My Bread*, Brown's *Understanding
Food*, Bittman's 2006 no-knead column, Verhoeven's knife-sharpening experiments, and Augustin et al.
1992 on alcohol retention (whose numbers are cited here from the USDA table that reproduces them,
which was read in full). **The line names the books by title, not by author**, because McGee's 2009
*New York Times* pasta column and Ruhlman's own blog posts *were* read in full, and an author-name
entry would block them. Two consequences for a drafter: a lesson may not name those titles at all
(the build matches the words), and Kenji's YouTube video titled "The Food Lab: How to Roast the
Best Potatoes of Your Life" must be linked with a label that leaves out those two words. Samin
Nosrat's *Salt, Fat, Acid, Heat* and Ruhlman's *Ratio* are **not** on the line: their catalogued
contents, the publisher's description and the author's own words elsewhere (Nosrat's NPR interview,
read in full; Ruhlman's blog, read directly) were read, which is enough to name the book and its
organising idea. Nothing beyond that may be attributed to either book. Whoever reads one of the
listed books properly should record which chapters here and remove it from the line, using the
`(except NN)` form if only some lessons are covered.

**Boundaries with other Core courses, settled here so no lesson re-opens them.**
- **Nutrition: The Evidence** (T3, two courses before this one) owns every health claim about food:
  salt and blood pressure, saturated fat, processed and red meat, sugar, ultra-processed food,
  supplements, alcohol and health. **This course makes no health claim about what to eat.** When
  salt comes up in the seasoning lesson, one sentence points to Nutrition lesson 7 ("Salt and
  sugar"); when processed meat or browning comes up, Nutrition lesson 8 ("Processed food and meat").
  Nutrition did **not** research food safety (its SOURCES.md covers pregnancy food rules only as a
  pointer), so **food safety belongs to this course**, and Part B is its research.
- **First Aid and CPR** comes later in this term and owns treating injuries. This course teaches
  prevention (knife handling, grease fires, steam) and gives only the one-line first response for a
  kitchen burn and a cut, in the words of the NHS and Red Cross pages Part D read, then points
  there.
- **Home Repair and Maintenance** owns the appliance itself; **Emergency Preparedness** owns food
  storage for outages and home canning. This course gives the CDC's single instruction on canning
  (use the USDA *Complete Guide to Home Canning* and nothing else) and stops.

---

## The first things Stage 1 found, and they shape the course

1. **Safety is time plus temperature, and the famous single numbers are shortcuts.** The consumer
   chart's 165°F for poultry is the temperature at which a 7-log Salmonella kill is *instant*; the
   FSIS cooking guideline tables show the same kill at 145°F held for about 8 to 13 minutes,
   depending on fat (Part B 6.1). The FDA Food Code 2026 gives a beef roast 112 minutes at 130°F or
   4 minutes at 145°F for the same lethality (Part B 2.1), and the UK's rule is itself a time pair,
   70°C for 2 minutes, with equivalents from 60°C for 45 minutes to 80°C for 6 seconds (Part B 3.1).
   **Teach the principle once and every rule after it makes sense**, including why a sous-vide
   chicken breast at 60°C can be safe and why a quick 150°F reading on a grill is not.
2. **Most of the classic kitchen rules that experts correct are about moisture and heat, and they
   share one mechanism.** Wet surfaces cannot rise above 100°C until they dry, fast browning needs
   roughly 140°C and more (Part C 6), so patting meat dry, not crowding the pan, and salting either
   right before cooking or well ahead are the same lesson. Searing does not seal in juices (ATK's
   test: about 22% loss either way, Part C 1). Resting is temperature control, not juice
   reabsorption (Gritzer 2025, Part C 2).
3. **The US and UK disagree on more of the home rules than a reader would guess**, and a lesson
   written from one country's pages will mislead the other's readers (Part B 7). The largest: how
   "done" is judged (thermometer in the US; visual cues first in the UK), pork (145°F and pink is
   fine; cooked through with no pink), hot food into the fridge (allowed; don't), leftovers (3 to 4
   days; 48 hours), reheating (no limit; "only ever reheat once"), raw eggs (cook firm; British
   Lion eggs safe raw even for vulnerable groups), and rice (general rules; cool within an hour and
   eat within 24 hours). **Both are official, and neither is wrong for its own food system.** The
   course must present both, say where they come from where the sources say so, and never pick one
   silently.
4. **The syllabi agree on an order** (Part A, final section): safety, tasting, knife and equipment,
   mise en place and ratios, heat, stocks and sauces, dry then moist methods, vegetables, eggs,
   starches, proteins, bread. The leading professional text reorganised itself around cooking
   *method* in its 10th edition (2024), having been organised by food in the 9th (Part A 1.5). That
   is independent support for this course's "technique over recipes" framing.
5. **The headline numbers most people repeat have moved.** CDC's current burden estimate is 9.9
   million illnesses from seven pathogens (2025), not the older 48 million from all causes, and CDC
   says the two cannot be compared (Part B 4.1). The FDA Food Code has a 2026 edition, published a
   week before this research (Part B 2). The FSA is mid-way through replacing its 2.4 million UK
   cases estimate, with new models due by early 2027 (Part B 4.3). **Quarantine each dated figure**
   in a lesson so a later session can update it without re-opening the teaching.

---

## What each part holds, and which lessons it serves

- **Part A, canonical texts and syllabi.** Catalogued tables of contents for Nosrat, López-Alt,
  McGee, Ruhlman (with the ratios seen on his own blog), the CIA's *The Professional Chef* 10th
  edition (full chapter list from Wiley's PDF), Pépin, and ATK's *The Science of Good Cooking* (its
  50 concepts, a curriculum in themselves). Nosrat's NPR interview, read in full. Syllabi: Harvard
  SPU27 in three runs, MIT Kitchen Chemistry, HKUST's Science of Gastronomy, CIA CULS-100 Culinary
  Fundamentals (the best single statement of a first cooking course), Le Cordon Bleu Basic Cuisine,
  City & Guilds 7100-12 Level 2 (read in full), ProStart, Leiths Essential Cooking (24 weeks),
  Ballymaloe. Free courses and **verified** YouTube URLs (Pépin's KQED technique videos, ATK, Kenji).
  Serves every lesson's framing and the Go deeper lists.
- **Part B, food safety.** FSIS temperature chart, danger zone, leftovers, thawing, washing food,
  thermometers, doneness versus safety, slow cookers; the USDA 2019 poultry-washing study; CDC on
  prevention, chicken, raw flour, Listeria and the burden of illness; FDA Food Code 2026 cooking,
  reheating, thawing, cooling and holding sections with the roast table; FSA pages on cooking,
  chilling, cross-contamination, Campylobacter, rice, C. perfringens and rare burgers; NHS on food
  poisoning; the FDA Bad Bug Book chapters on kidney beans, Bacillus cereus and C. perfringens;
  botulism in garlic oil and home canning; the FSIS 2021 cooking guideline tables and Baldwin's sous
  vide guide; the US against UK table. Serves the safety lesson and every lesson that cooks meat,
  eggs, rice, beans or stock.
- **Part C, myths and the science of technique.** Searing, resting, salting ahead, beans, pasta
  water (McGee 2009 read in full), oil in pasta water, boiling point (calculated), alcohol retention
  (USDA table read in full), MSG (FSANZ 2003 read in full; Geha 2000; FDA), Maillard and
  caramelisation, heat transfer coefficients and pan materials, starch and rice (with the FDA's
  rinsing and arsenic study), eggs, emulsions, gluten and no-knead bread, stock, pan sauces, knife
  sharpness (McGorry 2003), mushrooms, avocado pits, room-temperature meat, flipping, cast iron and
  soap (Lodge), microwaves (FDA), wooden against plastic boards (Ak, Cliver and Kaspar 1994).
  Serves the heat, seasoning, method, egg, grain, stock and bread lessons.
- **Part D, physical safety and contested questions.** Knife handling and cuts, grease fires and
  burns, and the contested and confused questions: nonstick coatings and PFAS, cast iron, gas stoves
  and indoor air, rare burgers and pink pork, washing chicken in its practitioners' terms, aluminium
  and acrylamide, cutting boards, and date labels. Serves the knife, heat and safety lessons.

---

## Canonical textbooks

Full entries, with what was read and where, are in Part A 1. In short:

- **Samin Nosrat, *Salt, Fat, Acid, Heat* (Simon & Schuster, 2017).** Not a university text, but the
  book most often recommended to a home cook who wants to cook without recipes, and the closest in
  shape to this course: four chapters of principle, then "What to cook", then recipes grouped by
  kind of food, with an index of "cooking lessons" pointing back from principle to recipe. Read: the
  catalogued contents (Internet Archive, UW-Madison) and the publisher's description, plus her NPR
  *Fresh Air* interview in full (Part A 2.1), which gives her own plain statement of salt's
  mechanism, of salt brands differing by about twice by volume, and of fat as texture and carrier.
  **Best for** the seasoning lesson's framing. Nothing beyond that may be attributed to the book.
- **J. Kenji López-Alt, *The Food Lab* (Norton, 2015).** Nine chapters organised by technique and
  food, with front matter on energy against temperature. Catalogue contents only; **on the unread
  line.** His ideas reach this course through his videos (verified URLs in Part A 4) and through
  syndicated and secondary reports of his Serious Eats articles (Part C).
- **Harold McGee, *On Food and Cooking*, revised edition (Scribner, 2004).** The reference work of
  the field and the set text for Harvard's SPU27 (Part A 3.1). Organised by ingredient, with
  cooking methods, pan materials and the four food molecules at the end. Catalogue contents only;
  **on the unread line.** His 2009 *New York Times* column on pasta water was read in full (Part C
  3d) and may be cited.
- **Michael Ruhlman, *Ratio* (Scribner, 2009).** Thirty-three ratios by weight; the bridge from
  recipes to formulas. Contents from the catalogue; the bread (5:3), pasta dough (3:2 flour to egg)
  and pancake ratios read on his own blog; vinaigrette 3:1, pie dough 3-2-1, biscuit 3:1:2 and
  cookie 1:2:3 through a fetch-tool digest of the book's description; the stock ratio (3:2 water to
  bones) **snippet only** (Part A 1.4). **Best for** the final lesson.
- **The Culinary Institute of America, *The Professional Chef*, 10th edition (Wiley, 2024).** Full
  chapter list read from Wiley's own contents PDF (Part A 1.5): 31 chapters in seven parts, with
  essential cooking techniques ordered dry-heat first (grill, roast, sauté, pan fry, deep fry) then
  moist and combination (steam, braise and stew, shallow poach, deep poach and simmer and boil). The
  9th edition (2011) was organised by food; the 10th by method. Chapter 1 excerpt (the brigade
  system) read directly. The body of the book was not read; **on the unread line.**
- **Jacques Pépin, *Complete Techniques* (2001) and *New Complete Techniques* (2012).** Chapter list
  from a review only (Part A 1.6); **on the unread line.** His KQED technique videos are the best
  free substitute and are verified (Part A 4).
- **America's Test Kitchen and Guy Crosby, *The Science of Good Cooking* (2012).** Its 50 numbered
  "concepts", read from the catalogue record in full (Part A 1.7), are the best single list of
  home-cooking principles in print, and a good checklist for the outline. Two of them are now
  qualified by later testing: concept 3 ("Resting meat maximizes juiciness", Part C 2) and concept
  32 (chile heat in "pith and seeds"). The body was not read; **on the unread line.**

## University syllabi consulted

Full entries in Part A 3.

- **Harvard SPU27 / HarvardX, *Science and Cooking*** (Brenner, Sörensen, Weitz). Three syllabi read
  in full as PDFs. Chemistry half: food components and flavour, energy and temperature and heat,
  phase transitions, diffusion (salting, curing, spherification), heat transfer, candy and
  chocolate. Physics half: elasticity, viscosity, emulsions and foams, phase behaviour (ice cream),
  enzymes (browning), baking. Set text McGee. **Notable choice:** energy and temperature come before
  any method, and diffusion is where salting lives.
- **CIA AOS, CULS-100 Culinary Fundamentals** (course description read directly): "tasting, kitchen
  equipment, knife skills, classical vegetable cuts, stock production, thickening agents, soup
  preparation, grand sauces, timing and multi-tasking, station organization, palate development,
  culinary terms, and food costing", then basic protein, starch and vegetable cookery, with "ratios
  and formulas". Tasting is listed first.
- **City & Guilds 7100-12 Level 2 Diploma in Professional Cookery** (handbook v1.6 read in full):
  food safety first; stocks, soups and sauces the first cooking unit; every food unit split into
  "Wet" and "Dry" methods; stock chilled "to below 5°C within 90 minutes".
- **Le Cordon Bleu Basic Cuisine; ProStart; Leiths Essential Cooking (24 weeks); Ballymaloe; MIT
  Kitchen Chemistry; HKUST Science of Gastronomy.** Leiths is the fullest home-cook sequence: knife
  skills, then knife skills and seasoning, then eggs, in its first three weeks. HKUST starts with
  heat transfer, then taste, smell, sight and touch, which suits the seasoning lesson.

## Primary sources

The primary sources this course actually rests on are regulators' texts and a handful of
experiments, not literature. All in Parts B to D:

- **FDA Food Code 2026** (released 17 September 2026) §§ 3-401.11 (cooking, with the roast
  time-temperature table), 3-403.11 (reheating), 3-501.13 (thawing), 3-501.14 and 3-501.15
  (cooling, including the new 2-inch uncovered method), 3-501.16 (holding), 3-603.11 (consumer
  advisory), and Annex 3 on why. PDF read directly. Part B 2.
- **FSIS Cooking Guideline for Meat and Poultry Products (Revised Appendix A), December 2021,**
  Tables 2 to 4: the time needed at each temperature for a 6.5-log or 7-log Salmonella kill in meat,
  chicken and turkey, by fat. Read in full from a state mirror. Part B 6.1.
- **FDA Bad Bug Book, 2nd edition (2012):** the chapters on kidney bean lectin, Bacillus cereus and
  Clostridium perfringens, read in full. Part B 5.
- **USDA Table of Nutrient Retention Factors, Release 6 (2007):** the alcohol retention figures,
  85% down to 5%. Read in full. Part C 4.
- **The USDA 2019 poultry-washing study** (press release, read) and **Shumaker et al. 2022, J Food
  Prot** (its peer-reviewed form, abstract read). Parts B 1.7 and D 3e.
- **FSANZ, *Monosodium Glutamate: A Safety Assessment* (2003),** read in full, and **Geha et al.
  2000** (abstract): the double-blind MSG evidence. Part C 5.
- **Ak, Cliver and Kaspar 1994** and **Cliver 2006** on cutting boards (abstracts). Part C 10i.
- **McGorry, Dowd and Dempsey 2003** on knife sharpness and grip force (abstract). Part C 9.
- **Gray et al. 2016 (FDA)** on rinsing and cooking rice in excess water: arsenic and enriched
  vitamins (abstract). Part C 8a.
- **McGee, "How Much Water Does Pasta Really Need?", NYT 2009,** read in full. Part C 3d.

## Expert bodies and official guidance

- **US:** USDA FSIS (temperature chart, danger zone, leftovers, thawing, washing food, thermometers,
  doneness versus safety, slow cookers, deep-fat frying, cutting boards, product dating);
  foodsafety.gov (four steps, temperature chart); CDC (prevention, chicken, raw flour, Listeria,
  burden, home-canned foods); FDA (Food Code, Bad Bug Book, MSG Q&A, microwave ovens, PFAS in food
  contact); EPA (PFOA stewardship, indoor air while cooking, hot tap water and lead); NFPA, USFA and
  CPSC on cooking fires; OSHA on knives; American Red Cross on burns; NCHFP on garlic in oil.
- **UK:** Food Standards Agency, now on GOV.UK (cooking, chilling and defrosting, cross-contamination,
  Campylobacter, the home food fact checker for rice and eggs and beans, C. perfringens, burgers and
  the business guidance on less-than-thoroughly-cooked burgers, acrylamide, date labels); NHS (food
  poisoning, burns and scalds, baby weaning storage); London Fire Brigade on pan fires; Alzheimer's
  Society on aluminium; Cancer Research UK on burnt toast.
- **Europe and elsewhere:** EFSA on PFAS (2020) and acrylamide (2015); ECHA's PFAS restriction
  process (not adopted as of this date); FSANZ on MSG.

---

## What the field considers essential

The ideas an expert would say a first cooking course must cover, in the order they build. It
follows the syllabi's common skeleton (Part A, final section) with two changes that the home-cook
curricula and the science courses both support: heat is taught explicitly and early, and eggs come
early as the model protein.

1. **The workspace and the knife.** Mise en place; a stable board; pinch grip and claw; the
   classical cuts as sizes that cook evenly, not as ornament; honing against sharpening; letting a
   falling knife fall (Parts A 3, C 9, D 1).
2. **Heat: how it moves into food and what it does there.** Conduction, convection, radiation;
   temperature against rate of heat transfer (why 200°C air is gentler than 100°C water, Part C 7);
   pan materials; water's 100°C ceiling; Maillard browning from about 140°C; protein setting,
   collagen melting, starch swelling as the four changes a cook is steering (Parts A 3.1, C 6 to 8).
   Fire and steam safety belong here (Part D 2).
3. **Tasting and seasoning.** Salt by taste and by weight, with brands differing about twofold by
   volume; salt's timing on meat; acid for brightness; fat as texture and carrier; umami and
   glutamate; adjusting as you go (Parts A 2.1, C 3 and 5). The CIA lists tasting first.
4. **Food safety that changes what you do.** Where the bacteria are (surface of whole cuts, through
   mince and poultry); time plus temperature; the thermometer; cross-contamination and the order of
   work; cooling large batches; leftovers, rice and reheating; thawing; kidney beans and raw flour;
   US against UK (Part B, all).
5. **Dry-heat methods.** Sauté and sear, pan-roast, roast, grill and broil, shallow and deep fry;
   drying the surface; not crowding; flipping; carryover and resting as temperature control;
   fond and the pan sauce (Parts A 1.5, C 1, 2, 6, 8f).
6. **Moist-heat and combination methods.** Boil, simmer, poach, steam, blanch; braise and stew,
   and why tough cuts need long moist heat (collagen to gelatin); pasta water (Parts A 1.5, C 3, 8e).
7. **Eggs.** The set temperatures of white and yolk as the clearest demonstration of gentle heat;
   boiled, scrambled, fried, poached, omelette; the emulsion (mayonnaise) (Parts A 3.9, C 8b, 8c).
8. **Starches: rice and grains, beans, pasta.** Gelatinisation; absorption against excess-water
   cooking; rinsing; salting beans; the kidney bean rule (Parts B 5.1, C 3, 8a).
9. **Stocks and sauces.** Stock and gelatin; simmer, don't boil; cooling a big pot safely; pan
   sauces, roux-thickened sauces, emulsified sauces, vinaigrette (Parts A 3.4 and 3.6, B 5.3, C 8c
   to 8f).
10. **Bread.** Flour, water, salt, yeast; gluten; time as a substitute for kneading; the ratio and
    baker's percentages (Parts A 1.4, C 8d).
11. **Cooking from technique rather than recipe.** Ratios; reading a recipe for its method;
    planning a week around a few methods and a batch of stock or grains, with the storage rules
    that make it safe (Parts A 1.4, B 1.4).

---

## Common misconceptions

Each is sourced in its part, with the strength of the evidence given there.

- **"Searing seals in juices."** Seared meat loses as much moisture or more; ATK's eight-steak test
  found about 22% either way. Searing is for flavour (Part C 1).
- **"Resting lets the juices redistribute."** When final temperature is matched, rested and
  unrested meat lose about the same juice; resting is a way of managing carryover (Gritzer, Serious
  Eats 2025, via syndication; Part C 2). Recent, and from one publication plus Chris Young: teach it
  as the current best view.
- **"Never salt beans until the end."** Salted soaking water gives softer skins (ATK, Part C 3b).
  Acid does slow softening, but that claim still needs a source.
- **"Salt the pasta water like the sea."** The sea is about 3.5%; cooks use roughly 0.5 to 2%
  (NOAA, ATK; Part C 3c).
- **"Pasta needs a big pot of water"** and **"oil stops pasta sticking."** Neither (McGee 2009 read
  in full; ATK 2023; Part C 3d, 3e).
- **"Salt makes water boil faster."** It raises the boiling point by about 0.1 to 0.4°C at cooking
  strength (Part C 3g, calculated).
- **"The alcohol cooks off."** Between 85% and 5% remains, depending on method and time (USDA table;
  Part C 4). The often-repeated "85% when flamed" is wrong: 85% is for alcohol stirred into boiling liquid and
  taken off the heat; flaming keeps 75%.
- **"MSG makes people ill."** Not supported by double-blind challenge; FDA treats it as GRAS; the
  most the evidence allows is a small, unreproducible effect from 3 g or more taken without food
  (Part C 5).
- **"Bring meat to room temperature first."** A thick steak warms by less than 2°F in 20 minutes
  (Kenji, via secondary report; Part C 10e), and two hours out breaks the 2-hour rule.
- **"Flip a steak only once."** Frequent flipping cooks faster and more evenly (Part C 10f;
  secondhand, check before quoting numbers).
- **"Never use soap on cast iron."** The maker says mild soap is fine; soaking, the dishwasher and
  long acidic simmers are what harm it (Lodge; Parts C 10g, D 3b).
- **"Plastic boards are more hygienic than wood."** Not supported; either, kept clean, with a
  separate board or strict order for raw meat (Parts C 10i, D 3g).
- **"Microwaves cook from the inside out and destroy nutrients."** Neither (FDA; Part C 10h).
- **"Wash raw chicken to make it safe."** Washing does not remove bacteria; cooking does. But the
  USDA study found non-washers contaminated salad about as often (31% against 26%), so the real
  lesson is hands, sink and order of work (Parts B 1.7, D 3e).
- **"You can tell chicken or a burger is done by its colour."** FSIS: ground beef can brown before
  it is safe; only a thermometer tells (Part B 1.9). Note the UK still leads with visual cues.
- **"Reheating rice is what makes it dangerous."** FSA: "It's not the reheating that causes the
  problem, but the way the rice has been stored" (Part B 3.4).
- **"Boil kidney beans for 10 minutes."** That is the UK advice (snippet only); the FDA tells
  consumers at least 30 minutes; both say never in a slow cooker from raw (Part B 5.1).
- **"Put hot food in the fridge and you'll spoil the fridge"** against **"never leave food out to
  cool."** The US says hot food can go straight in; the UK says cool it first and refrigerate
  within one to two hours; both are after fast cooling (Part B 7).
- **"Throw water, flour or a wet towel on a pan fire."** Never water or flour; the damp-towel advice
  is no longer given in the UK (snippet level for the date) (Part D 2a).
- **"Butter or ice on a burn."** Neither; 20 minutes of cool running water (NHS, Red Cross; Part D 2b).
- **"A dull knife is safer."** Professional consensus and ergonomics research say the opposite, on
  mechanism rather than injury counts (Parts C 9, D 1).
- **"A 'use by' and a 'best before' date mean the same."** In the UK, use-by is a safety limit and
  best-before is quality; in the US, apart from infant formula, dates are not federally required and
  are not safety indicators (Part D 3h).

---

## Contested questions and the positions on each

Classified under standards 3.1. Full statements of each side, in their own words, are in Part D 3
and Part C 2.

1. **Nonstick (PTFE) pans and PFAS.** Three questions mixed together (Part D 3a). (a) Does an intact
   pan at normal heat put a meaningful dose into food? The FDA says migration is negligible:
   **established as far as current evidence goes.** (b) Is overheating harmful? Above about 260°C
   the coating degrades; the fumes kill pet birds and can cause a short fever in people:
   **established.** (c) Should PTFE cookware be sold, given PFAS pollution in manufacture and
   disposal? **A value question with a contested empirical core.** The Cookware Sustainability
   Alliance: PTFE is "an inert molecule" and bans confuse it with PFOA, which was phased out of US
   manufacture by 2015 (EPA). Proponents of bans (a URI PFAS researcher, Los Angeles County
   Sanitation Districts, in The New Lede) argue it cannot be made without environmental
   contamination. Minnesota's ban is in force; California's was vetoed in October 2025; the EU
   restriction is still in committee. Settled by: migration data across a pan's working life,
   including scratched coatings; life-cycle emission data; how long ceramic replacements last. A
   lesson presents both choices as defensible.
2. **Gas stoves and indoor air.** **Established** that gas burners add NO2 and some benzene to
   indoor air and that a vented hood reduces it (Kashtan 2023 and 2024; EPA). **Contested** whether
   this causes a measurable share of childhood asthma: Gruenwald 2022's 12.7% is an attributable
   fraction built on cross-sectional associations; the American Gas Association and an
   industry-linked review (Li 2023) criticise it, and ISAAC (Wong 2013, 512,000 children) found no
   gas association. Settled by: prospective cohorts with measured NO2, or intervention trials. The
   cooking advice is the same on every reading: hood on, back burners, window open. Keep brief.
3. **Pink pork, rare burgers, and how cautious consumer advice should be.** The microbiology is
   **established** (bacteria on the surface of whole cuts, spread through mince; time plus
   temperature). The US allows pork at 145°F with a rest and pink colour since 2011; the UK says
   cook pork through. Trichinellosis in the US fell from about 400 cases a year (1947 to 1951) to
   0.1 per million (2008 to 2012). This is best described as a **value difference in how
   cautiously each agency phrases public advice**, not a scientific disagreement: the FSA's own list
   accepts 60°C for 45 minutes. Both advise against rare burgers at home.
4. **Washing raw chicken.** The microbiology is **established**: washing does not make chicken
   safer. Whether to keep the practice is a **value question for the cook**, and the lesson must
   state the practitioners' case in terms they would recognise: removing slime, blood, bone chips
   and feather stubs; distrust of processing; a practice learned from family; in many Caribbean,
   West African, Latin American and South Asian kitchens a citrus or vinegar wash is part of
   preparation (Henley 2012 focus groups; Drexel). A lab study found live Salmonella stayed on the
   chicken and in the water after 10% lemon or vinegar washes (Henley 2018). The USDA study's own
   authors recommend moving the message from "don't wash" to cleaning the sink and hands. The course
   teaches the harm-reduced version for cooks who will wash. **Gap:** no first-person source from
   those traditions has been read yet; one must be before the lesson describes them.
5. **Resting meat.** **Contested empirical, with the evidence moving** (Part C 2): the older test
   (Kenji, about 2010) against the 2025 re-test with matched final temperatures. Teach resting as
   temperature management and say the older explanation has been revised.
6. **Acrylamide in browned starch.** EFSA and the FSA reason from animal carcinogenicity to a
   precautionary "go for gold"; Cancer Research UK reasons from human cohorts, which show no reliable
   link, to "you don't need to avoid" it; Spiegelhalter questioned the campaign. Both are true to
   their method. **Contested empirical** at the level of human risk. A health question, so the lesson
   gives one paragraph and points to Nutrition. Note the FSA has withdrawn its old advice against
   keeping potatoes in the fridge.
7. **MSG sensitivity.** **Established** that "Chinese Restaurant Syndrome" as a general claim is not
   supported; **contested at the margin** whether a few people have a small, transient reaction to
   large doses without food (Geha 2000). The history of the name carries an ethnic stigma that the
   lesson should state plainly (Kean 2023).
8. **US against UK home food-safety rules** (fridge temperature, danger zone bounds, leftovers,
   reheat-once, rice, thawing, hot food into the fridge, raw eggs). Not a scientific dispute: two
   regulators writing for different food systems (the UK's Lion egg scheme, for instance) and
   different habits, each choosing simple rules. Present both, side by side, and let the reader
   follow their own country's.
9. **Wooden against plastic boards.** Lab work favours wood or finds no difference; newer studies
   (not read) point the same way. **Contested empirical but leaning to "either, if kept clean."**

---

## Best existing free resources (to link, not duplicate)

- **Jacques Pépin's KQED technique videos** (verified URLs in Part A 4): knife basics and
  sharpening, knife skills for cutting and chopping, poaching an egg, vinaigrette, cutting up,
  trussing and carving a chicken; and his omelette. The Jacques Pépin Foundation's *Complete Pépin*
  archive (the 1995 KQED series) is the best free technique library found.
- **America's Test Kitchen, "How To Chop an Onion"** and Kenji López-Alt's verified videos (reverse
  sear, roast potatoes, "Knife Skills: How to Chop", his knife-skills playlist).
- **FSIS temperature chart, foodsafety.gov four steps, CDC chicken and raw-flour pages** (link the
  live URLs; the content was read via archive captures).
- **FSA "Cooking your food", "How to chill, freeze and defrost food safely", the home food fact
  checker and the Campylobacter page** on GOV.UK.
- **FDA Food Code 2026** for the reader who wants the professional rules.
- **Douglas Baldwin's *A Practical Guide to Sous Vide Cooking*,** the clearest free explanation of
  time and temperature as pasteurisation.
- **NCHFP** for garlic in oil and the USDA *Complete Guide to Home Canning*.
- **NFPA cooking safety page, London Fire Brigade pan fires page, NHS burns and scalds.**
- **Lodge's care pages** for cast iron.
- **HarvardX *Science and Cooking*** and **HKUST *The Science of Gastronomy*** (Coursera) as the
  next course for a reader who wants the science. Current audit status on edX not confirmed.
- **ATK's free articles** (several read in Part C) and **Serious Eats** (link from a browser check;
  nothing there was read directly).

---

## Safety-critical guidance

Every item is in Part B or Part D with its wording.

- **Food poisoning is the kitchen's main hazard, and a lesson must give both countries' rules.**
  Poultry 165°F / 74°C or the UK's 70°C for 2 minutes and equivalents; mince 160°F; whole cuts 145°F
  with a 3-minute rest (US) or pink once seared (UK, not pork); leftovers reheated to 165°F or
  steaming hot. Cooling: US 2 hours (1 above 90°F), shallow containers; UK cool and refrigerate
  within one to two hours, rice within one hour. Leftovers 3 to 4 days (US) or 48 hours (UK).
- **Higher-risk people** (pregnancy, over 65, weakened immune system, young children) get stricter
  rules on Listeria foods, runny eggs outside the UK Lion scheme, rare burgers and raw flour. The
  course gives the rule and points to Nutrition for pregnancy diet in general.
- **Specific hazards a home cook meets:** raw or slow-cooked red kidney beans; badly stored rice
  (the emetic toxin survives reheating); big pots of stew, stock or gravy cooling slowly (C.
  perfringens); raw flour and cookie dough; garlic in oil at room temperature (botulism); home
  canning outside the USDA guide.
- **Knives:** claw and pinch grip, stable board, let a falling knife fall, never leave a knife in a
  sink of water.
- **Fire:** never leave hot oil; never water or flour on a fat fire; a lid slid on and the heat off
  for a small fire just started (US agencies), or leave, close the door and call the fire service
  (London Fire Brigade, and NFPA's own "Just get out!"); oven fire, door shut and heat off.
- **Burns and scalds:** 20 minutes under cool running water; no ice, butter or creams; the NHS and
  Red Cross thresholds for going to hospital. Then point to First Aid and CPR.
- **Nonstick:** never preheat empty on high; keep birds away from the kitchen; replace when the
  coating is damaged.
- **Ventilation** when cooking on gas: the EPA's hood and back-burner advice.
- **Allergens** were not researched (see scope). A lesson on cooking for others must at least name
  them and cross-contact before the course is published.

---

## Open concerns about scope

- **Twelve lessons is about the ceiling.** The outcomes ask for knife work, heat, six methods,
  seasoning, eggs, grains, stock, a pan sauce, bread, food safety and meal planning. Bread in
  particular is its own craft; the course should teach one lean bread (a no-knead loaf) and the
  ratio, and say that baking and pastry are out of scope.
- **Out of scope, said once in lesson 1:** baking and pastry beyond one bread, butchery beyond
  cutting up a chicken, deep frying beyond safety, preserving and canning, special diets, and
  nutrition claims (Nutrition: The Evidence).
- **The canon is European and American.** Every syllabus and book here teaches the French-derived
  method list. A home cook's real repertoire is wider: stir-frying in a wok, steaming, rice as the
  default grain, spice blooming (ATK concept 33), pressure cooking. **Outline to fix:** the methods
  lessons should draw examples from several cuisines, and the heat lesson should cover a wok and a
  pressure cooker (not researched here; a Stage 1 top-up is needed for pressure cooking, which
  Home Repair will not cover).
- **Units.** US readers think in °F, cups and ounces; UK and most others in °C and grams. Every
  temperature in both, and weights first for anything a ratio depends on.
- **Equipment and cost.** The course should assume one good knife, one heavy pan, a pot, a sheet
  pan and an instant-read thermometer (FSIS: only about 15% of people consistently use one), and
  say so. Not researched: cost, and cooking without an oven.
- **Allergens** (the 14 UK and 9 US major allergens, cross-contact) were not researched and should
  be before a lesson on cooking for others.
- **Serious Eats is unread.** Much of the best home-cooking science lives there. A drafter who
  needs a specific Kenji or Gritzer number must check it in a browser; the claims already used here
  are marked by read level.
- **Dated figures to quarantine:** CDC burden (2025 update), FSA 2.4 million (being replaced by
  early 2027), the FDA Food Code 2026, the NFPA fire figures (2017 to 2021 edition read), PFAS law
  (moving monthly), and the 2025 resting-meat revision.
- **Gaps each part names for a later pass:** the NHS kidney bean page; a first-person source on
  acid-washing chicken; a source that pathogens do not cause off smells; the damp tea towel
  withdrawal notice; any regulator on salt for grease fires; carbon steel care; plain against
  anodised aluminium and acid; rice ratios and resting; acid slowing bean softening; hollandaise
  temperatures (McGee in print); allergens; pressure cooking.

---

## Suggested lesson sequence (for Stage 2 to confirm)

Twelve lessons, then the course project (a week of meals from a short list of techniques, with the
storage plan that keeps it safe). Each lesson names the parts it draws on.

1. **Your knife and your board.** Mise en place, grips, the claw, the cuts as cooking sizes, honing
   and sharpening, knife safety. (A 3, C 9, D 1)
2. **How heat gets into food.** Conduction, convection, radiation; temperature against rate; pans;
   water's ceiling and browning; the thermometer; fire and steam safety. (C 6, 7; B 1.9; D 2)
3. **Seasoning by taste.** Salt (by weight, brands, timing on meat), acid, fat, umami and MSG,
   balancing a dish. (A 2.1; C 3a, 5)
4. **What makes people ill, and the rules that stop it.** Where bacteria live, time plus
   temperature, cross-contamination and washing chicken, cooling and leftovers, thawing, rice,
   beans, flour; US and UK side by side. (B all; D 3d, 3e, 3h)
5. **Fast, dry heat: searing and sautéing.** Dry surfaces, crowding, flipping, the searing myth,
   the pan sauce from fond. (C 1, 6, 8f, 10f)
6. **Roasting and grilling.** Oven heat, vegetables and meat, carryover and resting, the reverse
   sear, safe temperatures for roasts. (C 2, 7; B 2.1)
7. **Water and steam: boiling, simmering, poaching, steaming, braising.** Pasta water, blanching,
   collagen and tough cuts, alcohol in a braise. (C 3, 4, 8e)
8. **Eggs.** Set temperatures, the five basic egg cookeries, the green ring, mayonnaise as the
   first emulsion, egg safety US and UK. (C 8b, 8c; B 3.5)
9. **Rice, grains, beans and pasta.** Gelatinisation, absorption against excess water, rinsing
   and arsenic, salting beans, kidney beans, cooling rice. (C 3, 8a; B 3.4, 5.1, 5.2)
10. **Stock and sauces.** Stock and gelatin, simmer not boil, cooling a big pot, roux sauces,
    emulsified sauces, vinaigrette. (A 3.6; B 5.3; C 8c, 8e)
11. **Bread.** Flour, water, salt, yeast; gluten; no-knead; the 5:3 ratio and baker's percentages.
    (A 1.4; C 8d)
12. **Cooking without a recipe.** Ratios, reading a recipe for its method, planning a week around
    methods and batches, and the storage rules that make batch cooking safe. (A 1.4; B 1.4, 2.4)

---

# The four research parts

Each part below is the research pass as written on 2026-09-24, with its headings moved down one
level. Section numbers inside a part are that part's own ("Part B 2.4" means section 2.4 of Part B).


---

## Cooking Fundamentals: Stage 1 research, Part A (canonical texts and syllabi)

All pages below were accessed 2026-09-24. Two ways of reading are distinguished throughout:

- **Direct**: I downloaded the page or PDF with curl and read the extracted text myself. Quotations marked direct are copied from that text.
- **Fetch tool**: the WebFetch tool returns a summary made by a small model. Quotations it returned are marked "(fetch tool)". They are probably accurate but a drafter should re-check them against the page before quoting in a lesson.
- **Snippet**: a search engine result summary only. Nothing from a snippet is put in quotation marks here.

Serious Eats blocks Anthropic's crawler outright (WebFetch refused the domain; curl returned HTTP 402; WebSearch refused `allowed_domains: seriouseats.com` with a message that the domain is not accessible to our user agent). I did not route around this via the Wayback Machine, because the site has opted out. Every Serious Eats claim below is therefore secondhand and marked so.

---

### 1. Tables of contents of the canonical books

#### 1.1 Samin Nosrat, *Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking* (Simon & Schuster, 2017)

**Source A (direct):** Internet Archive metadata for the lending copy, https://archive.org/metadata/saltfatacidheatm0000nosr (lending copy is access-restricted; I read the catalogue record only). 469 pages, 24 cm; LCCN 2016040649; foreword by Michael Pollan, illustrations by Wendy MacNaughton. Contents note, copied:

"Foreword -- Introduction -- How to use this book -- Part one: the four elements of good cooking. Salt -- Fat -- Acid -- Heat -- What to cook -- Part two: recipes and recommendations. Kitchen basics -- Recipes: Salads; Dressings; Vegetables; Stock and soups; Beans, grains, and pasta; Eggs; Fish; Thirteen ways of looking at a chicken; Meat; Sauces; Butter-and-flour doughs; Sweets -- Cooking lessons -- Suggested menus -- Tips for further reading"

**Source B (direct):** University of Wisconsin–Madison Libraries catalogue, https://search.library.wisc.edu/catalog/9912312413502121. Same structure (pt. I / pt. II). Bibliography pp. 441 to 444 per the IA record.

The same catalogue summary (direct) carries the publisher blurb: "there are only four basic factors that determine how good your food will taste. Salt, Fat, Acid, and Heat are the four cardinal directions of cooking".

**Structure worth noting for our course:** four chapters of principle, then a short "What to cook" chapter on choosing a dish, and only then recipes. The recipe section is arranged by kind of food (salads, stock and soups, beans/grains/pasta, eggs, fish, chicken, meat, sauces, doughs, sweets), and a separate "Cooking lessons" index points from principle back into recipes. This is the book closest to "technique over recipes" for a home cook.

(saltfatacidheat.com/kitchen-basics was also fetched; it is an equipment affiliate page, not teaching. Fetch tool, 2026-09-24.)

#### 1.2 J. Kenji López-Alt, *The Food Lab: Better Home Cooking Through Science* (W. W. Norton, 2015)

**Source (direct):** UW–Madison catalogue, https://search.library.wisc.edu/catalog/9911332255802121. First edition, New York and London: W. W. Norton, [2015]. Open Library gives 966 pages (https://openlibrary.org/isbn/9780393081084.json, direct). Contents note, copied:

"Preface / by Jeffrey Steingarten -- Introduction: A nerd in the kitchen -- What's in this book? -- The keys to good kitchen science -- What is cooking? -- Essential kitchen gear -- basic pantry -- Eggs, dairy, and the science of breakfast -- Soups, stews, and the science of stock -- Steaks, chops, chicken, fish, and the science of fast-cooking foods -- Blanching, searing, braising, glazing, roasting, and the science of vegetables -- Balls, loaves, links, burgers, and the science of ground meat -- Chickens, turkeys, prime rib, and the science of roasts -- Tomato sauce, macaroni, and the science of pasta -- Greens, emulsions, and the science of salads -- Batter, breadings, and the science of frying"

So nine numbered chapters (numbering per a search snippet; the catalogue does not number them): 1 eggs and dairy, 2 stock, 3 fast-cooking proteins, 4 vegetables, 5 ground meat, 6 roasts, 7 pasta, 8 salads and emulsions, 9 frying. The front matter ("What is cooking?", "The keys to good kitchen science") is where the energy versus temperature material sits. Wikipedia (fetch tool, https://en.wikipedia.org/wiki/The_Food_Lab) says the recipes are "arranged by the technique used to prepare them" and that the book has charts explaining "the difference between temperature and energy and the Leidenfrost effect" (fetch tool). No baking or bread chapter: this is a savoury-cooking book.

#### 1.3 Harold McGee, *On Food and Cooking: The Science and Lore of the Kitchen* (Scribner, 2004, completely revised and updated)

**Source (direct):** UW–Madison catalogue, https://search.library.wisc.edu/catalog/999975088902121. "Completely revised and updated", Scribner, 2004. IA metadata for onfoodcookingsci0000mcge_e4f3 (direct) gives x, 884 p., references pp. 819 to 833. Contents note, copied:

"Introduction: Cooking and science, 1984 and 2004 -- Milk and dairy products -- Eggs -- Meat -- Fish and shellfish -- Edible plants: Introduction to fruits and vegetables, herbs and spices -- Survey of common vegetables -- Survey of common fruits -- flavorings from plants: herbs and spices, tea and coffee -- Seeds: grains, legumes, and nuts -- Cereal doughs and batters: Bread, cakes, pastry, pasta -- Sauces -- Sugars, chocolate, and confectionery -- Wine, beer, and distilled spirits -- Cooking methods and utensil materials -- four basic food molecules -- Appendix: Chemistry primer -- Selected references -- Index"

Chapter numbering 1 to 15 (dairy = 1, cooking methods = 14, four basic food molecules = 15) is from a search snippet, consistent with the order above. Structure: by ingredient first, with the physics of heat ("Cooking methods and utensil materials") and the chemistry of water, fats, carbohydrates and proteins held back to the end as reference. McGee is the set textbook for Harvard's course (see 3.1).

#### 1.4 Michael Ruhlman, *Ratio: The Simple Codes Behind the Craft of Everyday Cooking* (Scribner, 2009)

**Source (direct):** UW–Madison catalogue, https://search.library.wisc.edu/catalog/9910824599202121. First Scribner hardcover edition, 2009, xxv, 224 pages. Contents note, copied:

"The ratios -- What is a ratio, and why is it important? -- The all-important scale -- Using this book -- The truth of cooking -- Doughs and batters -- Stocks and the amazing things they allow you to do -- Meat : sausage, mousseline, and other meat-related ratios -- Fat-based sauces -- The custard continuum -- The ultimate meaning and usefulness of ratios"

Catalogue summary (direct): "With thirty-three ratios and suggestions for enticing variations".

**Ratios, with where each was actually seen:**

| Ratio | As stated | Where seen | Status |
|---|---|---|---|
| Bread | "a basic bread ratio of 5 parts flour to 3 parts water" | https://ruhlman.com/bread-ratio-5-3/ | fetch tool |
| Pasta dough | "all-purpose flour equal to 1.5 x the weight of the egg (or 2 parts egg, 3 parts flour)" | https://ruhlman.com/pasta-agnolotti-and-the-power-of-ratios/ (Feb 2013) | **direct** |
| Pancakes | "2 parts liquid : 1 part egg : ½ part butter : 2 parts flour" | https://ruhlman.com/pancake-ratio/ (Feb 2014), which says the ratio "is from my book Ratio" | **direct** |
| Vinaigrette | "Vinaigrette is 3:1, or 3 parts oil to 1 part vinegar" | Goodreads description, https://www.goodreads.com/book/show/3931154-ratio | fetch tool |
| Cookie dough | "1 part sugar, 2 parts fat, and 3 parts flour" | same Goodreads page | fetch tool |
| Biscuit dough | "3 parts flour, 1 part fat, and 2 parts liquid" | same Goodreads page | fetch tool |
| Pie dough | "3-2-1" (flour, fat, water) | same Goodreads page | fetch tool |
| Stock | 3 parts water to 2 parts bones | search snippet only | **not confirmed from a fetched page** |

All Ruhlman ratios are by weight; the book's second front-matter section is on the scale. A Ruhlman blog commenter (pancake post, direct) makes the link to baker's percentages, which is the professional form of the same idea.

#### 1.5 The Culinary Institute of America, *The Professional Chef*

**10th edition (Wiley, March 2024), source (direct):** Wiley's own table-of-contents PDF, https://catalogimages.wiley.com/images/db/pdf/9781119490951.toc.pdf, linked from https://www.wiley.com/en-us/The+Professional+Chef,+10th+Edition-p-9781119498803. The Wiley page (fetch tool) says the edition has "reorganized chapters aligned with CIA's Culinary Fundamentals course", 960 pages. Full chapter list, copied from the PDF:

- Part One, The Culinary Professional: 1 Introduction to the Profession; 2 Menus and Recipes; 3 Basics of Food Science
- Part Two, Tools and Ingredients in the Professional Kitchen: 4 Equipment Identification; 5 Meat, Poultry, and Game Identification; 6 Fish and Shellfish Identification; 7 Fruit, Vegetable, and Fresh Herb Identification; 8 Dairy and Egg Purchasing and Identification; 9 Dry Goods Identification; 10 Fabricating Meats, Poultry, and Fish; 11 Fabricating Vegetables
- Part Three, Mise en Place, Stocks, Sauces, and Soups: 12 Mise en Place; 13 Soups; 14 Sauces
- Part Four, Essential Cooking Techniques: 15 Grilling and Broiling; 16 Roasting; 17 Sautéing; 18 Pan Frying; 19 Deep Frying; 20 Steaming; 21 Braising and Stewing; 22 Shallow Poaching and Pan Steaming; 23 Deep Poaching, Simmering, and Boiling
- Part Five, Potatoes, Grains and Legumes, and Pasta and Dumplings: 24 Cooking Potatoes; 25 Grains and Legumes; 26 Pasta and Dumplings
- Part Six, Eggs and the Cold Kitchen: 27 Cooking Eggs; 28 The Cold Kitchen
- Part Seven, Baking and Pastry: 29 Baking Mise en Place; 30 Baking Techniques; 31 Kitchen Desserts and Savory Baking

Note the order inside Part Four: the dry-heat methods first (grill, roast, sauté, pan fry, deep fry), then the moist and combination methods (steam, braise/stew, shallow poach, deep poach/simmer/boil). Note also that stock-making sits inside "Mise en Place" (ch. 12) in this edition rather than having its own chapter.

A 5-page Wiley excerpt PDF (https://catalogimages.wiley.com/images/db/pdf/9781119490951.excerpt.pdf, direct) is chapter 1 only: the brigade system. It states the brigade "was instituted by French chef Auguste Escoffier to streamline and simplify work in hotel kitchens" (direct). Useful if a lesson mentions mise en place and kitchen organisation.

**9th edition (Wiley, 2011), source (direct):** Open Library, https://openlibrary.org/isbn/9780470421352.json, 1212 pages, parts only: "The culinary professional; Tools and ingredients in the professional kitchen; Stocks, sauces, and soups; Meats, poultry, fish, and shellfish; Vegetables, potatoes, grains and legumes, and pasta and dumplings; Breakfast and garde manger; Baking and pastry." The 9th edition organised cooking by food; the 10th by method. That shift is itself evidence that the leading professional text now treats method as the organising idea.

#### 1.6 Jacques Pépin, *Complete Techniques* (2001) / *New Complete Techniques* (Black Dog & Leventhal, 2012)

**Catalogue (direct):** IA metadata for jacquesppinnewco0000ppin: *Jacques Pépin New Complete Techniques*, Black Dog & Leventhal, 2012, 736 p., no contents note. UW–Madison (https://search.library.wisc.edu/catalog/999913653702121, direct) holds the 2001 *Jacques Pépin's Complete Techniques*, photographs by Léon Perer, again without a contents note.

**Chapter list (fetch tool):** a review at https://cookingbythebook.com/book-review-2/22057/ lists twelve chapters: Equipment; Basics, Sauces and Stocks; Vegetables; Eggs; Fish and Shellfish; Poultry; Meat; Offal and Charcuterie; Carving; Bread and Pasta; Pastry and Dessert; Presentation. A search snippet from a sampler said "The Basics" opens with sharpening knives, holding the knife to chop vegetables, and julienne. I did not see a publisher TOC. Full-text copies turned up only on pirate sites (dokumen.pub, ebin.pub, vdoc.pub), which I did not open.

#### 1.7 America's Test Kitchen and Guy Crosby, *The Science of Good Cooking* (America's Test Kitchen, 2012)

**Source (direct):** UW–Madison catalogue, https://search.library.wisc.edu/catalog/9910848246702121. xvii, 486 pages (IA record, direct). Publishers Weekly (fetch tool, https://www.publishersweekly.com/9781933615981) gives 504 pages and authorship "The Editors at America's Test Kitchen and Guy Crosby". Contents note, copied in full because the 50 concepts are themselves a curriculum:

Front matter: "Preface by Christopher Kimball -- Welcome to America's Test Kitchen -- Recipes -- Introduction -- The science of measuring -- The science of time and temperature -- The science of heat and cold -- The science of the senses -- The science of tools and ingredients"

"Concept 1. Gentle heat prevents overcooking -- Concept 2. High heat develops flavor -- Concept 3. Resting meat maximizes juiciness -- Concept 4. Hot food keeps cooking -- Concept 5. Some proteins are best cooked twice -- Concept 6. Slow heating makes meat tender -- Concept 7. Cook tough cuts beyond well-done -- Concept 8. Tough cuts like a covered pot -- Concept 9. A covered pot doesn't need liquid -- Concept 10. Bones add flavor, fat, and juiciness -- Concept 11. Brining maximizes juiciness in lean meats -- Concept 12. Salt makes meat juicy and skin crisp -- Concept 13. Salty marinades work best -- Concept 14. Grind meat at home for tender burgers -- Concept 15. A panade keeps ground meat tender -- Concept 16. Create layers for a breading that sticks -- Concept 17. Good frying is all about oil temperature -- Concept 18. Fat makes eggs tender -- Concept 19. Gentle heat guarantees smooth custards -- Concept 20. Starch keeps eggs from curdling -- Concept 21. Whipped egg whites need stabilizers -- Concept 22. Starch helps cheese melt nicely -- Concept 23. Salting vegetables removes liquid -- Concept 24. Green vegetables like it hot -- then cold -- Concept 25. All potatoes are not created equal -- Concept 26. Potato starches can be controlled -- Concept 27. Precooking makes vegetables firmer -- Concept 28. Don't soak beans -- brine 'em -- Concept 29. Baking soda makes beans and grains soft -- Concept 30. Rinsing (not soaking) makes rice fluffy -- Concept 31. Slicing changes garlic and onion flavor -- Concept 32. Chile heat resides in pith and seeds -- Concept 33. Bloom spices to boost their flavor -- Concept 34. Not all herbs are for cooking -- Concept 35. Glutamates, nucleotides add meaty flavor -- Concept 36. Emulsifiers make smooth sauces -- Concept 37. Speed evaporation when cooking wine -- Concept 38. More water makes chewier bread -- Concept 39. Rest dough to trim kneading time -- Concept 40. Time builds flavor in bread -- Concept 41. Gentle folding stops tough quick breads -- Concept 42. Two leaveners are often better than one -- Concept 43. Layers of butter makes flaky pastry -- Concept 44. Vodka makes pie dough easy -- Concept 45. Less protein makes tender cakes, cookies -- Concept 46. Creaming butter helps cakes rise -- Concept 47. Reverse cream for delicate cakes -- Concept 48. Sugar changes texture (and sweetness) -- Concept 49. Sugar and time makes fruit juicer -- Concept 50. Cocoa powder delivers big flavor"

Back matter: "Equipping your kitchen -- Cookware materials -- What about nonstick pans? -- Knife basics -- Emergency ingredient substitutions -- Food safety -- Conversions and equivalents" (the catalogue's spelling "juicer" in Concept 49 is as printed in the record.)

A search snippet numbered brining as Concept 12 and salt as 13; the catalogue record (direct) numbers them 11 and 12. Trust the catalogue.

Caution for the fact-checker: several concepts are ATK house claims that later testing has qualified. Concept 3 (resting) is the obvious one: López-Alt, who once argued for resting on juice-loss grounds, later changed his explanation (secondhand, see 2.3). Concept 32 (chile heat in "pith and seeds") is commonly stated as pith (placental tissue) mostly, seeds only by contact; check before repeating.

---

### 2. Freely readable material from these authors that teaches core ideas

#### 2.1 Nosrat on salt, fat, acid (NPR *Fresh Air* transcript, direct)

https://www.npr.org/transcripts/672904397 (Terry Gross interview, tied to the Netflix series; the companion article URL is dated 2018-12-03). Read in full, direct. What it establishes, with short quotations copied from the transcript:

- **Salt, mechanism, in plain words:** she explains salt on a tomato drawing juices out ("Osmosis starts") so aromatic compounds are more available. A usable lesson image.
- **Salt, brands differ:** with Diamond Crystal versus table salt, what you use "will almost be equivalent to twice as much" by volume; her conclusion: "be familiar with your own salt and to really taste as you go". This is the single most practical point for a home-cook lesson on seasoning, and it supports teaching salt by weight or by taste rather than by teaspoon.
- **Fat:** "while salt is all about enhancing flavor, fat is mostly about texture", and fat is a flavour "carrier" (garlic in oil versus water demonstration).
- **Acid:** explained through lemonade as balance and "tart contrast".
- The book's own formula (catalogue blurb, direct): the four are "the four cardinal directions of cooking".

A secondhand line widely quoted from the book (snippet only, not seen on a fetched page): salt has a greater impact on flavour than any other ingredient. Do not quote it without the book in hand.

#### 2.2 McGee on searing (fetch tool, and secondhand)

McGee's NYT "Curious Cook" columns are paywalled; curiouscook.com returned an expired TLS certificate. Wikipedia "Searing" (https://en.wikipedia.org/wiki/Searing, fetch tool) cites McGee (2004) for: the sealing theory "was first put forth by Liebig in his book Researches on the Chemistry of Food around 1850"; it was "embraced by contemporary cooks and authors, including Escoffier"; "Experiments to test the theory were carried out as early as the 1930s and found that the seared roasts lost the same amount of moisture or more." What it establishes: searing is for flavour and colour (browning), not moisture. This is the canonical myth-correction for a lesson on dry heat. The line "The crust that forms around the surface of the meat is not waterproof" attributed to *On Food and Cooking* appeared only in a search snippet.

#### 2.3 López-Alt (Serious Eats blocked; video and secondhand)

- **Reverse sear.** Video verified by YouTube oEmbed (direct): "The Best Way to Cook Steak: The Reverse Sear | Kenji's Cooking Show", channel J. Kenji López-Alt, https://www.youtube.com/watch?v=pO8TUuSv7HA. The method, from snippets only: cook gently in a low oven to the target temperature, then sear at the end, reversing the usual sear-then-roast order. Serious Eats article URL (not read, blocked): https://www.seriouseats.com/2017/03/how-to-reverse-sear-best-way-to-cook-steak.html.
- **Dry brining / salting timing.** Snippet only: salt draws out liquid, which dissolves the salt and is reabsorbed; the widely repeated López-Alt finding is to salt either immediately before cooking or at least about 40 minutes ahead (overnight best), and not in between. Needs the original article or *The Food Lab* ch. 3 before use.
- **Resting meat.** Snippet only: his early Serious Eats test sliced steaks at intervals and found juice loss falling to little by about 10 minutes; his later explanation is about temperature equilibrium (hotter, thinner juices run more freely). Present resting as debated and give the mechanism, not a rule.
- **Knife skills.** Verified (oEmbed, direct): "Knife Skills: How to Chop | Serious Eats", https://www.youtube.com/watch?v=XyS915RynEQ; and his playlist "Knife Skills", https://www.youtube.com/playlist?list=PLXonhhg5tUSLPMH2kZI67RYGb5V-fX-83.
- **Roast potatoes.** Verified (oEmbed, direct): "The Food Lab: How to Roast the Best Potatoes of Your Life", https://www.youtube.com/watch?v=argKpeiKFfo (starch, parboiling with alkaline water, surface area).

#### 2.4 America's Test Kitchen

Publishers Weekly (fetch tool) highlights "gentle heat prevents overcooking" and "high heat develops flavor" as the book's lead concepts: these two, which open the book, are a fair one-line statement of the whole heat-management problem (cook the inside gently, brown the outside hard). ATK's own site pages I fetched were a shows directory, not lessons; americastestkitchen.com recipe and skills pages are mostly behind a paywall.

---

### 3. Syllabi

#### 3.1 Harvard, *Science and Cooking: From Haute Cuisine to Soft Matter Science* (SPU 27 and HarvardX SPU27x)

Instructors: Michael P. Brenner (applied mathematics), Pia Sörensen, David Weitz (physics). All three syllabi below are PDFs on courses.edx.org, downloaded and read in full (direct).

**SPU27x, original single edX run (c. 2013 to 2014):** https://courses.edx.org/c4x/HarvardX/SPU27x/asset/SPU27x_syllabus.pdf. States the aim: students "will be able to explain how a range of cooking techniques and recipes work, in terms of the physical and chemical transformations of food." Textbook: "On Food and Cooking, Harold McGee, Scribner, 2004 (2nd edition)"; also referred to: "The Science of Good Cooking, The Editors of America's Test Kitchen and Guy Crosby, 2012". Ten weekly problem sets, weekly home-kitchen labs, and a final project instead of exams. Guests include McGee, Nathan Myhrvold, Dave Arnold, ATK.

**SPU27.1x (chemistry half), 2017 run:** https://courses.edx.org/asset-v1:HarvardX+SPU27x+1T2017+type@asset+block/SPU27_1Syllabus.pdf. Weekly schedule (topic / chefs / lab):
1. Food components and flavor (Daniel Humm; Joanne Chang). Lab: calibrate your equipment, make a cola drink.
2. Energy, temperature, and heat (Dave Arnold). Lab: heat transfer in beverages.
3. Phase transitions (Joan Roca). Lab: phase transitions of fats.
4. Diffusion and spherification (José Andrés; Dominique Crenn). Lab: ceviche, diffusion in eggs.
5. Heat transfer (Carme Ruscalleda; Nathan Myhrvold). Lab: molten chocolate cake.
6. Candy and chocolate (Joanne Chang; Enric Rovira). Final projects.
Texts: McGee, and *Science and Cooking: A Companion to the Harvard Course* (2015). A 2019 module syllabus also exists at https://courses.edx.org/assets/courseware/v1/b041edea36afb1986a624dc1134e6e2e/asset-v1:HarvardX+SPU27.1x+3T2019+type@asset+block/SPU27_1_Module_Syllabus.pdf (downloaded; the module table did not extract cleanly, so I rely on the 2017 table).

**SPU27.2x (physics half), 2018 run:** https://courses.edx.org/assets/courseware/v1/6f96cf5df71af82d37300b01aaa54c25/asset-v1:HarvardX+SPU27.2x+2T2018+type@asset+block/SPU27_2_Syllabus.pdf. Modules (topic / chefs / lab):
1. Elasticity (Bill Yosses; Mark Ladner). Lab: measure the elastic modulus of foods.
2. Viscosity (Martin Breslin; Carles Tejedor). Lab: viscosity of macaroni and cheese.
3. Emulsions and foams (Nandu Jubany). Lab: volume fraction in mayonnaise, egg white foam.
4. Advanced phase behavior (Joan Roca; Enric Rovira). Lab: ice cream and freezing point depression.
5. Enzymes (Wylie Dufresne; Ted Russin of the CIA). Lab: browning reactions in fruits and vegetables.
6. Baking (Joanne Chang; Christina Tosi). Final projects.

Harvard PLL listing (https://pll.harvard.edu/course/science-and-cooking, fetch tool) confirms the chemistry topics: molecules, moles, flavor and pH; energy, temperature and heat; phase transitions; diffusion and spherification; heat transfer; candy. The companion trade book is Brenner, Sörensen and Weitz, *Science and Cooking: Physics Meets Food, From Homemade to Haute Cuisine* (Norton, 2020) (search result; Norton page had no TOC in its HTML).

What it tells us: the science sequence runs **what food is made of, then energy and temperature, then phase change, then diffusion (salt and marinades), then heat transfer**, with texture (elasticity, viscosity, emulsions, gels) and browning later. That is a good order for the "why" strand of our course.

#### 3.2 MIT, *Kitchen Chemistry* (SP.287 / ES.287)

The course number is SP.287 (not SP.237). OCW page https://ocw.mit.edu/courses/es-287-kitchen-chemistry-spring-2009/ exists (search result) but its calendar page looped on redirects. The instructor's own syllabus at https://stuff.mit.edu/afs/athena/course/other/kitchen-chem/www/Syllabus.html (direct, headed "Syllabus for Spring 2008", last updated December 28, 2008; contact patti@mit.edu) lists weekly topics: guacamole, salsa, hot sauce and quesadillas; cookies; pancakes (optional); bread; scones and coffee; meringues; jams and jellies; three bean chili and cornbread; cheese; molecular gastronomy; wacky cake (optional); ice cream; peer teaching; meatballs and spaghetti. Search snippet for the 2009 OCW version: experiments illustrate extraction, denaturation, and phase changes. There is also MIT 5.S16 *Advanced Kitchen Chemistry* (Spring 2002) on OCW (search result only). Dish-led, not technique-led; limited use for our sequence.

#### 3.3 HKUST on Coursera, *The Science of Gastronomy* (fetch tool)

https://www.coursera.org/learn/gastronomy, instructor King Lau Chow. Modules: 1 Energy transfer (conduction, convection, radiation, phase transition); 2 Hunger and satiety; 3 Taste; 4 Smell; 5 Sight; 6 Touch (texture); 7 Fruits and vegetables. Useful for a seasoning lesson (taste versus smell) and for heat transfer as the first topic.

#### 3.4 The Culinary Institute of America, Associate (AOS) in Culinary Arts, NY and CA (direct)

Catalogue: https://catalog.ciachef.edu/associate-in-occupational-studies-aos/culinary-arts-aos-ny-ca (direct, © 2026). Listed culinary requirements, in catalogue order: CULS-100 Culinary Fundamentals (6 cr); ServSafe exam; APFS-110 Introduction to Food Systems (1.5); CULS-115 Meat Identification, Fabrication, and Utilization (1.5); CULS-116 Seafood Identification and Fabrication (1.5); CULA-260 Modern Banquet Cookery (3); CULP-115 Introduction to À La Carte Cooking (3); CULP-135 Non-Commercial Foodservice and High-Volume Production (3); BAKE-241 Baking and Pastry Skill Development (3); Externship; CULP-225 Garde Manger (3); CULP-301/311/321 Cuisines and Cultures of the Americas, the Mediterranean, Asia (3 each); HOSP-355 Wine and Beverage Studies; then restaurant back- and front-of-house rotations. Culinary science: CUSC-100 Food Safety (1.5), CUSC-110 Nutrition (1.5). Liberal arts include MTSC-100 Math for the Professional Kitchen. Total 64 credits on this page. The CIA programme page (fetch tool, https://www.ciachef.edu/cia-culinary-arts-associate-degree-program/) says 66 credits for NY/CA and 69 for Texas; the catalogue page and the marketing page disagree slightly, so do not quote a credit total. The catalogue does not give a semester sequence, only that students "progress from basic to intermediate to advanced subject matter in proper sequence" (fetch tool).

**CULS-100 Culinary Fundamentals, course description (direct),** https://catalog.ciachef.edu/culinary-skills/culs100: "Topics of study include tasting, kitchen equipment, knife skills, classical vegetable cuts, stock production, thickening agents, soup preparation, grand sauces, timing and multi-tasking, station organization, palate development, culinary terms, and food costing. The course also introduces the student to fundamental concepts and techniques of basic protein, starch, and vegetable cookery. Emphasis is placed upon the study of ingredients and an introduction to the concepts of ratios and formulas will be given."

This is the single most useful statement of what a first course in cooking contains. Note that tasting comes first and "ratios and formulas" are explicitly named.

**CULS-115 (direct),** https://catalog.ciachef.edu/culinary-skills/culs115: muscle and bone structure of beef, veal, pork, lamb, game and poultry; fabrication; tying and trussing; inspection and grading; "preferred cooking methods for all meats"; prerequisite CULS-100. So meat identification follows fundamentals, and cut determines method.

#### 3.5 Le Cordon Bleu, Basic Cuisine Certificate (fetch tool)

https://www.cordonbleu.edu/london/basic-cuisine-certificate/en. The first of three certificates (Basic, Intermediate, Superior) in the Diplôme de Cuisine. Content as returned: "knife skills, basic classical vegetable cuts, fish filleting skills, elementary butchery skills, basic stocks and derivatives, elementary sauces and emulsions, basic doughs (e.g. pasta and puff pastry), introduction to plating presentation, basic plated desserts for restaurants, elementary methods of cooking e.g. braising, pan-frying, boiling, deep-frying, roasting, and steaming" (fetch tool), plus French culinary terms and health, safety and hygiene. Duration (snippet): about 3 months standard or 7 weeks intensive.

#### 3.6 City & Guilds Level 2 Diploma in Professional Cookery (7100-12), UK (direct)

Qualification handbook v1.6, February 2023, QAN 601/0717/0: https://www.cityandguilds.com/-/media/productdocuments/hospitality_and_catering/hospitality_and_catering/7100/7100_level_2/centre_documents/7100-12_level_2_diploma_qualification_handbook_v1-6-pdf.pdf. 66 credits, all units mandatory. Units in handbook order: 202 Food safety in catering; 702 Developing skills for employment; 703 Health and safety; 704 Healthier foods and special diets; 705 Catering operations, costs and menu planning; **707 Prepare and cook stocks, soups and sauces**; 708 Fruit and vegetables; 709 Meat and offal; 710 Poultry; 711 Fish and shellfish; 712 Rice, pasta, grains and egg dishes; 713 Hot and cold desserts and puddings; 714 Paste products; 715 Biscuit, cake and sponge products; 716 Fermented dough products. (Note: search results also named an older code 8065/8064; 7100-12 is the one I read.)

Specific content copied from the handbook that maps onto our lessons:
- Unit 707 aim: "Stocks, soups and sauces are the key building blocks of many dishes and an understanding of them is essential for any chef."
- Stock types: "White (beef, chicken, fish, vegetable), brown (beef, chicken, veal, vegetable)." Uses: "Soups, sauces, gravy, braising/stewing liquid." Cooking and chilling: "Cooking (simmering, skimming, straining, reduction), chilling (blast chill, ice water bath, chill to below 5°C within 90 minutes)." (A food-safety figure for the stock lesson; UK standard. The US FDA Food Code two-stage cooling rule differs; Part B should source it.)
- Soup types: "Roux (eg velouté, cream), potage (eg minestrone, french onion), fish/shellfish (bisque, chowder), chilled (eg gaspacho, vichysoisse), purée (eg lentil, potato, vegetable), broth (scotch, mutton)." (spellings as printed)
- Sauce types include béchamel and velouté derivatives, jus lié/brown sauces, purées, reductions (wine, stocks, cream).
- Vegetables, cooking methods: "Wet: Boiling ..., poaching ..., steaming ..., braising ..., stewing" and "Dry: Roasting ..., grilling ..., shallow and deep fried ..., baking". This explicit **wet / dry** split recurs in the meat, poultry and fish units.
- Rice methods: "Boil/steam (eg basmati), braise (long grain eg pilau), stew (eg risotto), fry (eg egg fried)".
- Egg dishes: "Scrambled, boiled, poached, fried, omelette, scotch eggs."
- Vegetable preparation methods list includes "blanch, soak, concassè, season, marinade".

#### 3.7 ProStart (US high-school programme, National Restaurant Association Educational Foundation)

Official text: *Foundations of Restaurant Management & Culinary Arts*, Level 1. Chapter list from a **search snippet only** (not fetched): 1 Welcome to the Restaurant and Foodservice Industry; 2 Keeping Food Safe; 3 Workplace Safety; 4 Kitchen Essentials 1 (professionalism, standard recipes); 5 Kitchen Essentials 2 (equipment and techniques); 6 Stocks, Sauces, and Soups; 7 Communication; 8 Management Essentials; 9 Fruits and Vegetables; 10 Serving Your Guests; 11 Potatoes and Grains; 12 Building a Successful Career. A real school's implementation (direct): James Rumsey Technical Institute, West Virginia, ProStart syllabus revised May 23, 2024, https://jamesrumsey.com/wp-content/uploads/1014-Restaurant-Management-Foundations-Syllabus-2024.pdf. Its sequence: Term 1 kitchen safety and equipment; Term 2 ServSafe food safety; Term 3 "Knife Skills", "Recipes", "Intro. To Food Preparation", "Stocks, Sauces, & Soups"; Term 4 serving guests, "Meats & Poultry", kitchen calculations; year 2 adds fruits, vegetables and starches, breakfast foods and dairy, desserts and baked goods, meat, poultry and seafood.

#### 3.8 Institute of Culinary Education (NY/LA)

Blocked: https://www.ice.edu/blog/back-basics returned HTTP 403. Search snippet only: the programme has five modules; Module 1 covers history of cooking, sanitation, basic knife skills, herb identification, culinary math, stock making and fabrication; sauces (pan sauce, béchamel to Mornay) follow.

#### 3.9 Leiths (London), *Essential Cooking* online certificate (fetch tool)

https://www.leithsonline.com/courses/essential-cooking-online-course. The fullest home-cook sequence I found, 24 weeks: 1 Knife skills and introduction to cooking; 2 Knife skills and seasoning; 3 Egg cookery (proteins, emulsifying); 4 Shortcrust pastry; 5 Vegetable and grains cooking (blanching, roasting, beurre noisette); 6 Food styling; 7 Meringues; 8 Fish preparation and cooking; 9 Choux and crème pâtissière; 10 Shellfish; 11 Creamed and melted cakes; 12 Time planning and roasting; 13 Bread; 14 Pasta; 15 Stews and slow cooking; 16 Whisking and rubbed-in cakes; 17 Brunch (hollandaise); 18 Caramel and custards; 19 Chicken jointing and stock; 20 Gelatine; 21 Meat (butchery basics, steak); 22 Gluten-free baking; 23 Dinner parties; 24 Assessment. (The London daytime Essential Cookery Certificate is 7 weeks per a snippet; not fetched.) Striking: knife skills and seasoning first, then eggs third.

#### 3.10 Ballymaloe Cookery School, 12 Week Certificate, Ireland (fetch tool)

https://www.ballymaloecookeryschool.ie/certificate-cookery-course/course-outline. No week-by-week technique list is published. Topics as returned: the Ballymaloe style, French cuisine, several world cuisines, menu planning, butchery, curing and smoking, wine, "Food Hygiene (HACCP)", producers, cheese making, fermentation. Structure: four mornings a week of practical cooking producing a 3 to 4 course meal, afternoons of demonstration; a practical technique exam and herb and salad recognition test in week 6. Built around daily cooking and tasting rather than a technique ladder.

---

### 4. Free courses and videos for home cooks (URLs verified 2026-09-24)

YouTube items were verified with YouTube's oEmbed endpoint, which returns the exact title and channel only if the video exists (direct).

**Jacques Pépin, KQED Food playlist "Jacques Pépin Technique Videos"** (channel KQED Food): https://www.youtube.com/playlist?list=PL1LaW-AR98H8-Hf3ft0g3sUuV5FCjvDsr. Twelve videos, each verified:
- Knife Basics and Essentials of Knife Sharpening: https://www.youtube.com/watch?v=gq_JmJLOqxo
- Proper Knife Skills for Cutting, Chopping and Slicing: https://www.youtube.com/watch?v=nffGuGwCE3E (also on KQED's site: https://www.kqed.org/jpepinheart/843/jacques-pepin-teaches-you-proper-knife-skills-for-cutting-chopping-and-slicing, search result)
- How To Properly Poach An Egg: https://www.youtube.com/watch?v=8e2aBVRHZdI
- How to Make Vinaigrette Salad Dressing: https://www.youtube.com/watch?v=-BJfsqzmeYg
- How To Cut Up A Whole Chicken: https://www.youtube.com/watch?v=xfDsNRXPKE8
- How To Truss a Chicken for Roasting: https://www.youtube.com/watch?v=VxlcSzMOG9o
- How to Carve a Roasted Chicken: https://www.youtube.com/watch?v=ZJy7QK3jX4g
- (the other five are garnish tricks: apple swan, pomegranate, coring an apple, lemon "lion teeth", olive rabbits; skip)

**Pépin omelette:** "Pépin's Classic Omelette", channel Home Cooking with Jacques Pépin, https://www.youtube.com/watch?v=KveBXEIYaIU; "Learn Jacques Pépin's famous omelet techniques", channel American Masters PBS, https://www.youtube.com/watch?v=X1XoCQm5JSQ.

**Jacques Pépin Foundation, "Complete Pépin" archive** (fetch tool): https://jp.foundation/video-series/complete-pepin. Describes itself as the KQED 1995 *Jacques Pépin's Complete Cooking Techniques*, "an exhaustive compendium of basic culinary and home-cooking instruction" (fetch tool); appears free; visible titles include roasting, trussing and deboning a chicken. Knife skills category: https://jp.foundation/video-category/knife-skills (search result). This is probably the best free technique video library in existence for our purposes.

**Food52, "How To Sharpen Your Knife Skills With Jacques Pepin"**: https://www.youtube.com/watch?v=JMA2SqaDgG8 (verified).

**America's Test Kitchen, "How To Chop an Onion"**: https://www.youtube.com/watch?v=VgffXyOORqQ (verified, channel America's Test Kitchen).

**J. Kenji López-Alt**: reverse sear https://www.youtube.com/watch?v=pO8TUuSv7HA; roast potatoes https://www.youtube.com/watch?v=argKpeiKFfo; Serious Eats "Knife Skills: How to Chop" https://www.youtube.com/watch?v=XyS915RynEQ; his "Knife Skills" playlist https://www.youtube.com/playlist?list=PLXonhhg5tUSLPMH2kZI67RYGb5V-fX-83 (all verified).

**Rouxbe Kitchen QuickStart** (fetch tool): announced free on June 10, 2021 at https://blog.rouxbe.com/free-10-hour-culinary-training-course-from-rouxbe; "14 key lessons" and "over 50 instructional videos", examples "using a chef's knife and roasting vegetables, to vinaigrette basics and poultry fundamentals" (fetch tool). Requires an account; I could not confirm it is still free today.

**HarvardX Science and Cooking** on edX (chemistry and physics halves): free to audit historically; edX course pages returned only navigation to the fetch tool, so current audit status not confirmed.

**Coursera, HKUST *The Science of Gastronomy***: https://www.coursera.org/learn/gastronomy (see 3.3).

**OpenLearn**: search found only nutrition courses (*The science of nutrition and healthy eating*), no cooking-technique course. Not useful here.

**BBC Good Food technique guides**: not reached (a search returned a mirror on an unrelated domain, which I ignored). Not verified.

---

### What the field considers essential (as seen in these curricula)

Across the professional curricula (CIA CULS-100 and the 10th-edition *Professional Chef*, Le Cordon Bleu Basic Cuisine, City & Guilds 7100-12, ProStart, ICE Module 1) and the home-cook ones (Leiths Essential Cooking, Nosrat, López-Alt), the same topics recur, and in a recognisably common order:

1. **Safety and sanitation first.** Food safety is taught before, or alongside, any cooking in every professional programme (ProStart chs. 2 to 3 and Terms 1 to 2; C&G Unit 202 first; CIA ServSafe and CUSC-100; LCB "health, safety and hygiene"; Ballymaloe HACCP). Home-cook books push it to the back (ATK back matter). A free home course should place it early but short, and then weave cooling, holding and temperatures into the stock, egg and meat lessons, as C&G does ("chill to below 5°C within 90 minutes").
2. **Tasting and seasoning.** CIA CULS-100 lists "tasting" first and "palate development" among its topics; Leiths week 2 is "Knife Skills & Seasoning"; Nosrat builds her whole book on it. Salt by taste and by weight, then acid, then fat as texture and carrier.
3. **Equipment and knife skills, with the classical cuts.** Universal and always early: CIA CULS-100, LCB, ProStart Term 3 Topic 1, ICE Module 1, Leiths weeks 1 to 2, Pépin's "Basics", *Professional Chef* chs. 4 and 11.
4. **Mise en place and the recipe as a formula.** *Professional Chef* ch. 12; CIA "timing and multi-tasking, station organization" and "ratios and formulas"; ProStart "Recipes" and "Kitchen Calculations"; Ruhlman's whole book. Measuring by weight belongs here.
5. **Heat: how it moves and what it does.** The science strand (Harvard weeks 2, 3 and 5; HKUST module 1; *Food Lab* "What is cooking?"; ATK front matter "The science of heat and cold") treats energy, temperature, conduction, convection, radiation and phase change before specific methods. Professional curricula teach it implicitly through methods.
6. **Stocks, then sauces (thickeners, the mother sauces, emulsions), then soups.** Remarkably consistent as the first cooking block after knife work: CIA CULS-100 ("stock production, thickening agents, soup preparation, grand sauces"), C&G Unit 707 (the first cooking unit), ProStart Term 3 Topic 4 / ch. 6, LCB "basic stocks and derivatives, elementary sauces and emulsions", ICE Module 1, *Professional Chef* Part Three, Pépin "Basics, Sauces and Stocks".
7. **Dry-heat methods, then moist and combination methods.** *Professional Chef* 10th ed. Part Four runs grill/broil, roast, sauté, pan fry, deep fry, then steam, braise/stew, shallow poach, deep poach/simmer/boil. C&G classifies every food unit into "Dry" and "Wet". LCB lists braising, pan-frying, boiling, deep-frying, roasting, steaming. The ATK concepts 1 to 9 are the home-cook version (gentle heat versus high heat, carryover, low and slow for tough cuts, covered pots).
8. **Vegetables** (blanching, roasting, the green-vegetable rules), then **proteins by type** (meat and poultry, fish), with cut or muscle structure deciding the method (CIA CULS-115: "preferred cooking methods for all meats").
9. **Starches: potatoes, grains and legumes, pasta.** *Professional Chef* Part Five; C&G Unit 712; ProStart ch. 11; Leiths weeks 5 and 14; ATK concepts 25 to 30.
10. **Eggs.** Everywhere, but placed variably: Leiths puts egg cookery third; C&G joins eggs to rice and pasta; *Professional Chef* ch. 27 with the cold kitchen; *Food Lab* ch. 1 (eggs first, as the simplest protein to watch). The science courses use eggs for diffusion (Harvard week 4) and foams (physics module 3). A strong case for teaching eggs early as the model protein.
11. **Doughs and bread last**, usually as a separate baking strand: *Professional Chef* Part Seven, C&G Units 714 to 716, Leiths week 13, ATK concepts 38 to 47, Harvard physics module 6. Ruhlman's 5:3 bread ratio is the natural bridge from the formula lesson.

**The common skeleton, compressed:** safety → tasting and seasoning → knife and equipment → mise en place and ratios → heat transfer → stocks → sauces and emulsions → dry-heat methods → moist-heat methods → vegetables → eggs → grains, legumes and pasta → proteins → bread and doughs. The two things that vary most are where eggs go (early in home courses, later in professional ones) and whether heat science is taught explicitly (science courses and López-Alt) or through methods (professional schools). For a technique-first home course, the evidence supports teaching heat explicitly and early, and eggs early.

---

### Not read

- **Serious Eats, every article.** The site blocks this crawler (WebFetch refused, curl HTTP 402, WebSearch domain refused). Claims about dry brining timing, resting and reverse sear above are from search snippets and verified video titles only.
- **Full text of any of the seven books.** Internet Archive copies are lending-restricted; I read catalogue records only. Pirate full-text copies (dokumen.pub, ebin.pub, vdoc.pub, pdfroom, studylib) were deliberately not opened.
- **Pépin *New Complete Techniques* publisher TOC.** Chapter list is from a review via the fetch tool, not a catalogue.
- **Ruhlman stock ratio (3:2 water to bones).** Seen only in a search snippet.
- **ProStart official chapter list.** Search snippet only; the NRAEF curriculum page was not fetched.
- **ICE curriculum.** ice.edu returned 403; snippet only.
- **Leiths London Essential Cookery Certificate** (7-week daytime) page: not fetched; I read the online course page instead.
- **Simon & Schuster, Penguin Random House and Norton publisher pages**: 403 or navigation-only.
- **Smithsonian, Marmot and Nashville library catalogues**: bot-challenge pages; not bypassed.
- **Google Books API**: daily quota exhausted.
- **MIT OCW ES.287 calendar**: redirect loop; used the instructor's 2008 syllabus instead.
- **HarvardX edX course pages** (current run, audit status): only navigation returned.
- **McGee's own site (curiouscook.com)**: expired certificate. His NYT columns: paywalled, not attempted.
- **Harvard College SPU 27 / Gen Ed course site and lecture list** (canvas.harvard.edu syllabus, requires login): not read.
- **UC Davis and Purdue food science courses**: not searched for lack of time; the Harvard, MIT and HKUST material covers the science strand.
- **BBC Good Food technique guides, Babish, Ethan Chlebowski**: not verified.
- **NPR companion article** (npr.org/2018/12/03/...): fetch timed out; the transcript was read instead.

---

## Cooking Fundamentals: Stage 1 research, Part B (food safety, US and UK primary guidance)

Compiled 2026-09-24. Every quotation below was copied from a page or PDF fetched on 2026-09-24. "Read" status is given per item. Where a live .gov page blocked automated access (FSIS, foodsafety.gov and CDC all returned HTTP 403 "Access Denied" from Akamai to both curl and the fetch tool), I read the most recent Internet Archive (Wayback Machine) capture and say so, with the capture timestamp where I could get it. Raw text of everything fetched is in `scratchpad/cook/raw/`.

### Headline findings a lesson writer must not miss

1. **The FDA Food Code has a new edition.** The FDA released the **2026 Food Code on 17 September 2026** (a week before this research). The 2022 edition is superseded. I read both PDFs; the numbers a home cook cares about (cooking table, cooling, holding, reheating) are unchanged from 2022, but section 3-501.15 gains a new cooling method (see §2). Cite "FDA Food Code 2026" from now on.
2. **CDC's "48 million" figure is no longer CDC's current headline.** CDC's current burden page (reviewed 19 March 2025) leads with new 2019 estimates for seven major pathogens: 9.9 million illnesses, 53,300 hospitalizations, 931 deaths. CDC says the two sets "cannot meaningfully" be compared. FSIS and foodsafety.gov pages still repeat 48 million / 128,000 / 3,000. A lesson should say which estimate it uses and why (see §4).
3. **The UK Food Standards Agency website has moved to GOV.UK.** food.gov.uk/safety-hygiene/* URLs now 301-redirect to gov.uk/government/publications/*. Several old FSA URLs (rice, leftovers, 4Cs, chicken) no longer resolve; their content now lives inside other GOV.UK pages ("Home food fact checker", "Student guide", "Campylobacter"). Cite the GOV.UK URLs.
4. **Kidney beans: "boil 10 minutes" is not what the FDA Bad Bug Book tells consumers.** It records that boiling for 10 minutes at 100°C destroyed the toxin in a study, then says "Consumers should boil the beans for at least 30 minutes". The 10-minute figure is the traditional UK/NHS advice, which I could only see in search snippets today (see §5).

---

### 1. USDA FSIS, foodsafety.gov and CDC: consumer guidance

#### 1.1 FSIS Safe Minimum Internal Temperature Chart
- URL: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart
- Read: full, via Wayback capture 20260923031306 (live page 403). Page says "Last Updated: Apr 14, 2025".
- Intro: "Cook all food to these minimum internal temperatures, as measured with a food thermometer, before removing food from the heat source. For reasons of personal preference, consumers may choose to cook food to higher temperatures."
- The page also lists the four steps: Clean ("Wash hands and surfaces often"), Separate ("Separate raw meat from other foods"), Cook ("Cook to the right temperature"), Chill ("Refrigerate food promptly").
- Table, exact:
  - Beef, Pork, Veal and Lamb Steaks, Chops and Roasts: "145 degrees F (62.8 degrees C) and allow to rest for at least 3 minutes"
  - Ground Meats: "160 degrees F (71.1 degrees C)"
  - Ground Poultry: "165 degrees F"
  - Ham, Fresh or Smoked (Uncooked): 145°F (62.8°C) and rest at least 3 minutes
  - Fully Cooked Ham (to Reheat): "Reheat cooked hams packaged in USDA-inspected plants to 140 degrees F (60 degrees C) and all others to 165 degrees F (73.9 degrees C)."
  - All Poultry (Breasts, Whole Bird, Legs, Thighs, Wings, Ground Poultry, Giblets and Stuffing): 165°F (73.9°C)
  - Eggs: 160°F (71.1°C)
  - Fish & Shellfish: 145°F (62.8°C)
  - Leftovers: 165°F (73.9°C)
  - Casseroles: 165°F (73.9°C)

#### 1.2 foodsafety.gov "Cook to a Safe Minimum Internal Temperature"
- URL: https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
- Read: full, via Wayback 2026 capture (nearest 20260904040832). "Date Last Reviewed November 21, 2024".
- Uses rounded Celsius (63°C, 71°C, 74°C) where FSIS gives 62.8, 71.1, 73.9.
- Differences from the FSIS chart worth noting:
  - Adds bison and goat to the 145°F / 3-minute row: "Beef, bison, veal, goat, and lamb | Steaks, roasts, chops | 145°F (63°C) Rest time: 3 minutes".
  - "Ground meat and sausage | 160°F (71°C)".
  - Poultry: "All: whole bird, breasts, legs, thighs, wings, ground poultry, giblets, sausage, and stuffing inside poultry." 165°F (74°C).
  - Eggs split: "Raw eggs | Cook until yolk and white are firm"; "Egg dishes (such as frittata, quiche) | 160°F (71°C)".
  - "Rabbit and venison | Wild or farm-raised | 160°F (71°C)" (not on the FSIS chart).
  - Seafood: fish "145°F (63°C) or cook until flesh is no longer translucent and separates easily with a fork"; shrimp, lobster, crab, scallops "Cook until flesh is pearly or white, and opaque"; clams, oysters, mussels "Cook until shells open during cooking".
  - Precooked ham to reheat 165°F, with note that USDA-plant hams go to 140°F.
- On rest: "Rest time is important for certain meats because it allows the innermost parts and juices of the meats to become fully and safely cooked."

#### 1.3 FSIS "Danger Zone (40°F - 140°F)"
- URL: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40f-140f
- Read: full, via Wayback 2026 capture. "Last Updated: Jun 28, 2023".
- "Bacteria grow most rapidly in the range of temperatures between 40 °F and 140 °F, doubling in number in as little as 20 minutes."
- "Never leave food out of refrigeration over 2 hours. If the temperature is above 90 °F, food should not be left out more than 1 hour."
- Keep hot food "at or above 140 °F"; keep cold food "at or below 40 °F".
- "When roasting meat and poultry, use an oven temperature no lower than 325 °F."
- "One of the most common causes of foodborne illness is improper cooling of cooked foods." Leftovers "must be put in shallow containers for quick cooling and refrigerated at 40 °F or below within two hours."
- "Foods should be reheated thoroughly to an internal temperature of 165 °F or until hot and steaming."

#### 1.4 FSIS "Leftovers and Food Safety"
- URL: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
- Read: full, via Wayback 20260923031306. "Last Updated: Jul 31, 2020".
- Two main causes: "Not cooking food to a safe temperature and leaving food out at an unsafe temperature are the two main causes of foodborne illness."
- 2-hour rule, and "1 hour if the temperature is over 90° F, such as at an outdoor picnic during summer".
- Cooling: "divide large amounts of food into shallow containers. A big pot of soup, for example, will take a long time to cool". "Hot food can be placed directly in the refrigerator or be rapidly chilled in an ice or cold water bath before refrigerating." (Contrast with FSA, §3.2.)
- Storage: "Leftovers can be kept in the refrigerator for 3 to 4 days or frozen for 3 to 4 months. Although safe indefinitely, frozen leftovers can lose moisture and flavor".
- Reheat: "be sure they reach 165° F as measured with a food thermometer. Reheat sauces, soups and gravies by bringing them to a rolling boil." Microwaves "have cold spots", so check in several places.
- Refreezing: "It is safe to refreeze any food remaining after reheating previously frozen leftovers to the safe temperature of 165° F". Also safe to thaw in the fridge, take a portion, and "refreeze the remainder of the thawed leftovers without reheating it." There is **no US "reheat only once" rule** on this page.

#### 1.5 FSIS "The Big Thaw: Safe Defrosting Methods"
- URL: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/big-thaw-safe-defrosting-methods
- Read: full, via Wayback 2026 capture. "Last Updated: Jun 15, 2013".
- "There are three safe ways to thaw food: in the refrigerator, in cold water, and in the microwave. In a hurry? It's safe to cook foods from the frozen state."
- Never thaw "on the counter, or in hot water"; outer layer can sit in the Danger Zone while the centre is frozen.
- Fridge: turkey "requires at least a day (24 hours) for every 5 pounds of weight"; "a pound of ground meat or boneless chicken breasts" needs "a full day". After fridge thawing, ground meat, stew meat, poultry, seafood keep "an additional day or two before cooking; red meat cuts ... 3 to 5 days." Fridge-thawed food "can be refrozen without cooking, although there may be some loss of quality."
- Cold water: leak-proof bag, "submerged in cold tap water, changing the water every 30 minutes". About 1 lb "may thaw in an hour or less"; "A 3-to 4-pound package may take 2 to 3 hours"; whole turkey "about 30 minutes per pound". Cook before refreezing.
- Microwave: cook immediately after, because parts may start to cook and reach Danger Zone temperatures.
- From frozen: "The cooking will take approximately 50% longer than the recommended time for fully thawed or fresh meat and poultry."

#### 1.6 FSIS "Washing Food: Does it Promote Food Safety?"
- URL: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/washing-food-does-it-promote-food
- Read: full, via Wayback capture 20260912193141. "Last Updated: Feb 07, 2024".
- "USDA research has found that washing or rinsing meat or poultry increases the risk for cross-contamination in the kitchen".
- "washing raw poultry, beef, pork, lamb or veal before cooking it is not recommended as the safest method."
- "Campylobacter can survive in your kitchen for up to 4 hours and Salmonella can last for up to 32 hours."
- Norovirus is "the most common foodborne illness-causing germ in the United States."
- Homemade sanitizer for boards and utensils: "one tablespoon of unscented liquid chlorine bleach with a gallon of water". Surface disinfectant (citing CDC): "five tablespoons (one-third cup) of unscented liquid chlorine bleach to one gallon of water or four teaspoons of bleach per quart of water", left "at least one minute".
- Brining/soaking "serves no purpose for food safety"; soaking ham or bacon removes "very little salt".
- Eggs: "Do not wash eggs from the grocery store"; commercial washing removes the "bloom", replaced with mineral oil.
- Produce: rinse under running tap water, no soap or commercial produce washes; "pre-washed" produce needs no further washing.
- Handwashing: at least 20 seconds, "Hum the 'Happy Birthday' song from beginning to end twice."

#### 1.7 USDA press release on the 2019 poultry-washing study
- URL: https://www.usda.gov/about-usda/news/press-releases/2019/08/20/washing-raw-poultry-our-science-your-choice
- Read: full, via Wayback capture 20260318115046 (live page returned a stub). Dated August 20, 2019; Release No. 0125.19.
- Observational study. Findings, verbatim:
  - "Of the participants who washed their raw poultry, 60 percent had bacteria in their sink after washing or rinsing the poultry. Even more concerning is that 14 percent still had bacteria in their sinks after they attempted to clean the sink."
  - "26 percent of participants that washed raw poultry transferred bacteria from that raw poultry to their ready to eat salad lettuce."
  - "Of the participants that did not wash their raw poultry, 31 percent still managed to get bacteria from the raw poultry onto their salad lettuce." Attributed to "a lack of effective handwashing and contamination of the sink and utensils."
- Advice: prepare uncooked foods such as salads "BEFORE handling and preparing raw meat and poultry"; "Washing, rinsing, or brining meat and poultry in salt water, vinegar or lemon juice does not destroy bacteria. If there is anything on your raw poultry that you want to remove, pat the area with a damp paper towel and immediately wash your hands."
- Teaching point: the non-washers' 31% is higher than the washers' 26%, so the study's real lesson is hands, sink and order of work, not washing alone. A lesson that quotes only the 26% overstates the case.
- Note: the executive summary of the study was not read.

#### 1.8 Clean, Separate, Cook, Chill
- foodsafety.gov "4 Steps to Food Safety": https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety . Read: full via Wayback 20260905200329. Page metadata dateModified 2023-09-18.
  - Opens: "an estimated 1 in 6 Americans will get sick from food poisoning this year alone" and "sends 128,000 Americans to the hospital each year".
  - Soap: use plain soap and water and "skip the antibacterial soap".
  - "Don't wash meat, poultry, eggs, or seafood to avoid spreading harmful germs around your kitchen."
  - Hot holding "140°F (60°C) or above"; microwave "165°F (74°C) or above"; danger zone "between 40°F (4°C) - 140°F (60°C)".
  - "Your refrigerator should be set to 40°F (4°C) or below and your freezer to 0°F (-18°C) or below."
  - Eggs: keep "in their original carton" in the main compartment, "not in the door."
  - "Freezing does not destroy harmful germs, but it does keep food safe until you can cook it."
- CDC "Preventing Food Poisoning": https://www.cdc.gov/food-safety/prevention/index.html . Read: full via Wayback 2026 capture; page reviewed November 24, 2025.
  - "follow the four steps to food safety: Clean, Separate, Cook, and Chill."
  - Riskier foods listed include "Raw dough or raw batter made with uncooked flour".
  - "Raw chicken is ready to cook and doesn't need to be washed first." Then: "If you choose to wash chicken, do so as safely as possible". (CDC now gives harm-reduction steps; FSA says "never".)
  - "You can't tell if food is safely cooked by checking its color and texture (except for seafood)."
  - Microwave wattage: at "800 watts or more, use the minimum cooking time recommended"; at low wattage (300 to 500 watts) use the maximum.
  - "It is okay to put small portions of hot food in the refrigerator since they will chill faster."

#### 1.9 FSIS thermometers and "Doneness Versus Safety"
- "Food Thermometers": https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-thermometers . Read: full via Wayback (Aug 2026 capture, 20260823200227). "Last Updated: Mar 21, 2025".
  - "Most pathogens are destroyed between 140 degrees F and 165 degrees F".
  - "In a USDA study, 21% of participants relied on visual cues such as color and grill marks to determine if their hamburger patties were fully cooked."
  - "Most food thermometers will give an accurate reading within 2 to 4 degrees F".
  - Placement: "in the thickest part of the food, away from bone, fat or gristle. For thin foods, the food thermometer should be inserted through the side until it reaches the center". Whole poultry: "check the internal temperature in three places: the innermost part of the thigh, the innermost part of the wing and the thickest part of the breast." "For optimum safety, do not stuff whole poultry."
  - Dial thermometers "must be inserted about 2 to 3 inches into the food"; bimetal instant-read senses along "2 to 2 1/2 inches" of stem and is "not appropriate to measure the temperature of any food less than 3 inches thick" (the oven-safe type). Thermocouple 2 to 5 seconds; thermistor about 10 seconds; pop-up timers "reliable to within 1 to 2 degrees F".
  - Calibration, ice water: "fill a large glass with ice cubes. Add drinking water to the glass and stir well. Immerse the food thermometer stem a minimum of 2 inches into the mixture, touching neither the sides nor the bottom of the glass. Wait a minimum of 30 seconds ... It should read 32 degrees F". Boiling: "212 degrees F at sea level"; at altitude water boils "lower by at least 2 degrees F and perhaps lower by as much as 5 degrees F."
- "Doneness Versus Safety": https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/doneness-versus-safety . Read: full via Wayback 20260923 capture. "Last Updated: Jul 10, 2024".
  - "only about 15% of people consistently use a food thermometer."
  - "Ground beef may turn brown before it has reached a temperature at which bacteria are destroyed." A hamburger cooked to 160°F (165°F for ground poultry), measured with a thermometer, "is safe" regardless of colour.
  - "even if hamburgers look fully cooked, one in four hamburgers may not be safely cooked. Yet only 6 percent of home cooks use a food thermometer for hamburgers and only 10 percent use a food thermometer for chicken breasts" (FSIS/FDA Food Safety Survey; survey year not given on page).
  - Internal inconsistency: the tips at the bottom still say "160 °F for hamburger, pork, and egg dishes", i.e. whole pork at 160°F, contradicting the 145°F chart. Do not quote that line.

#### 1.10 FSIS "Slow Cookers and Food Safety"
- URL: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/slow-cookers-and-food-safety . Read: full via Wayback 20260923031306. "Last Updated: Aug 08, 2013".
- Slow cookers run "generally between 170° and 280° F". "Always thaw meat or poultry before putting it into a slow cooker." Power cut while away: "throw away the food even if it looks done." "Reheating leftovers in a slow cooker is not recommended." Reheat to 165°F elsewhere, then hold at "at least 140 °F".

---

### 2. FDA Food Code (2026 edition, with 2022 checked)

- 2026 release: https://www.fda.gov/food/hfp-constituent-updates/fda-releases-2026-food-code (read via fetch tool, summary). Released September 17, 2026. The FDA's own description calls it "a model of uniform provisions to assist local, state, tribal, and territorial regulators". Key changes listed include "Alternative cooling process for foods at retail" and "Updates to sanitizer temperatures, consumer advisories".
- Food Code 2026 landing page: https://www.fda.gov/food/fda-food-code/food-code-2026 (content current 09/17/2026). PDF: https://www.fda.gov/media/194741/download . **Read: PDF downloaded and text searched in full for the sections below.**
- Summary of changes: https://www.fda.gov/food/fda-food-code/summary-changes-2026-fda-food-code . Read: full (content current as of 09/17/2026).
- Food Code 2022 PDF: https://www.fda.gov/media/164194/download . Read: the same sections, to confirm the numbers did not change. There was also a "Supplement to the 2022 Food Code" (November 2024; search snippet only, not read).
- Important framing for a lesson: the Food Code governs restaurants and retail, not home kitchens. It is a model code adopted by states. Its temperatures are **time plus temperature**, while the consumer chart gives single "instantaneous" numbers.

#### 2.1 § 3-401.11 Raw Animal Foods (cooking) [2026 text; identical figures in 2022]
- (A)(1) "63°C (145°F) or above for 15 seconds" for raw eggs broken for immediate service, and for fish and intact meat (including commercially raised game).
- (A)(2) "68oC (155oF) for 17 seconds" [the "o" is the PDF's degree sign] or the chart: 63°C (145°F) 3 minutes; 66°C (150°F) 1 minute; 70°C (158°F) "< 1 second (instantaneous)". Applies to ratites, non-intact meats (e.g. injected), comminuted fish and game, and raw eggs not for immediate service.
- (A)(3) "74oC (165oF) or above for < 1 second (instantaneous) for *POULTRY" plus wild game, stuffed fish, stuffed meat, stuffed pasta, stuffed poultry, and stuffing containing fish, meat or poultry.
- (B) Whole meat roasts (beef, corned beef, lamb, pork, cured pork roasts such as ham), minimum time at temperature:
  - Minutes: 130°F (54.4°C) 112; 131°F 89; 133°F 56; 135°F 36; 136°F 28; 138°F 18; 140°F 12; 142°F 8; 144°F 5; 145°F (62.8°C) 4.
  - Seconds (header "Time1 in Seconds" confirmed in the 2022 PDF): 147°F 134; 149°F 85; 151°F 54; 153°F 34; 155°F 22; 157°F 14; 158°F 0.
  - Footnote: "Holding time may include post-oven heat rise."
  - Oven must be preheated: still dry oven, roast under 4.5 kg (10 lb), "177°C (350°F) or more"; convection "163°C (325°F) or more"; roasts of 10 lb or more 121°C (250°F) or more.
- (C) Intact whole-muscle beef steak may be served rare to a non-highly-susceptible population if "cooked on both the top and bottom to a surface temperature of 63°C (145°F) or above and a cooked color change is achieved on all external surfaces."
- (D) Raw or undercooked animal food (raw egg, raw fish, steak tartare, soft cooked eggs, rare meat) may be served on consumer request with the § 3-603.11 advisory, not to highly susceptible populations, and not comminuted meat from a children's menu.
- Annex 3 (public health reasons), verbatim: "in cooking a beef roast, the microbial lethality achieved at 112 minutes after it has reached 54.4°C (130°F) is the same lethality attained as if it were cooked for 4 minutes after it has reached 62.8°C (145°F)." The roast table meets "a 6.5-log10 reduction of Salmonella" and comes from FSIS Appendix A.
- Annex 3 on pork: "Trichinella spiralis, Toxoplasma gondii, and Taenia solium ... are inactivated at temperatures below 145oF. Therefore, pork roasts can be cooked like beef roasts".
- Annex 3 on poultry: 165°F instantaneous "yield greater than a 7D reduction."
- Annex 3 on eggs: "at 63oC(145oF), a time span of 15 seconds will provide a 3D reduction of Salmonella Enteritidis in eggs."

#### 2.2 § 3-403.11 Reheating for Hot Holding
- (A) cooked, cooled and reheated TCS food: "all parts of the *FOOD reach a temperature of at least 74°C (165°F) for 15 seconds."
- (B) Microwave: 165°F, "rotated or stirred, covered, and allowed to stand covered for two minutes after reheating."
- (C) Commercially processed ready-to-eat food: at least 57°C (135°F).
- (D) "the time the *FOOD is between 5°C (41°F) and the temperatures specified ... may not exceed two hours."

#### 2.3 § 3-501.13 Thawing
- Under refrigeration at 5°C (41°F) or less; or "Completely submerged under running water" at "21°C (70°F) or below" with enough velocity to float off particles; or as part of cooking; or microwave then immediately to conventional cooking. (Contrast: FSIS consumer advice is still water changed every 30 minutes.)

#### 2.4 § 3-501.14 Cooling
- "(1) Within two hours from 57ºC (135ºF) to 21ºC (70ºF); P and (2) Within a total of six hours from 57ºC (135ºF) to 5ºC (41ºF) or less." (2022 wording: "Within 2 hours ... Within a total of 6 hours"; same figures.)
- (B) Foods made from ambient-temperature ingredients (e.g. canned tuna): to 41°F within four hours.
- The 2022 reference list for this section begins with a 1988 paper on "Growth of Clostridium perfringens in cooked chili during cooling", which shows what the rule is aimed at.

#### 2.5 § 3-501.15 Cooling Methods (changed in 2026)
- Methods: shallow pans; smaller or thinner portions; rapid cooling equipment; "Stirring the *FOOD in a container placed in an ice water bath"; heat-transfer containers; "Adding ice as an ingredient"; **new (A)(7) "Placing the *FOOD at a depth of no more than 2 inches"**; other effective methods.
- **New ¶ (C)**: with regulatory approval, cooked TCS food may be cooled "Filled no more than two inches deep", "Held uncovered", in a unit at 41°F or less with continuous electronic time and temperature monitoring. Supporting reference added: Koreen, Baldwin and Schaffner, 2024, "Cooling Uncovered Foods at a Depth of ~5.1 cm (2 in.) or Less Poses Little Risk of Pathogen Growth". Useful for a home lesson: 2 inches deep, uncovered, is now the retail benchmark for fast cooling.

#### 2.6 § 3-501.16 Hot and Cold Holding
- "(1) At 57°C (135°F) or above, except that roasts cooked ... as specified in ¶ 3-401.11(B) ... may be held at a temperature of 54°C (130°F) or above; P or (2) At 5°C (41°F) or less."
- So retail uses 41°F and 135°F; consumer advice uses 40°F and 140°F.

#### 2.7 § 3-603.11 Consumer advisory
- Title in 2026 (and 2022): "Consumption of Animal Foods that are Raw, Undercooked, or Not Otherwise Processed to Eliminate Pathogens."
- Disclosure examples: "“oysters on the half shell (raw oysters) ,” “raw-*EGG Caesar salad,” and “hamburgers (can be cooked to order)”".
- Reminder options, verbatim: "(1) Regarding the safety of these items, written information is available upon request; ... (2) Consuming raw or undercooked *MEATS, *POULTRY, seafood, shellfish, or *EGGS may increase your *RISK of foodborne illness; ... or (3) ... especially if you have certain medical conditions."

---

### 3. UK: Food Standards Agency and NHS

All FSA pages below were read in full through the GOV.UK Content API (the HTML body of each publication). Dates are the GOV.UK "first published" and "public updated" fields.

#### 3.1 FSA "Cooking your food"
- URL: https://www.gov.uk/government/publications/cooking-your-food/cooking-your-food (old URL food.gov.uk/safety-hygiene/cooking-your-food redirects). Published 18 December 2017; no later update recorded.
- Temperatures, verbatim: "the middle of the food should reach a temperature of 70°C for 2 minutes or the following temperature-time combinations: 60°C for 45 minutes 65°C for 10 minutes 70°C for 2 minutes 75°C for 30 seconds 80°C for 6 seconds". (The 60°C for 45 minutes line is there too.)
- Primary cue is visual: "use visual cues, such as making sure the food is steaming hot"; thermometer is "consider using". Chicken: "cut into the thickest part and check there is no pink meat left and that juices run clear". Whole bird: thickest part is "the leg between the drumstick and the breast".
- Pork: "Poultry (such as chicken, turkey, duck, and game birds) and pork can have bacteria all the way through the meat. This means that these meats need to be cooked all the way through." "make sure there is no pink, fleshy meat".
- Mince and offal: mince, burgers, sausages, kebabs, "rolled joints", offal must be cooked through. "Burgers shouldn’t be served rare or pink at home."
- Whole cuts except poultry and pork "only ever have bacteria on the outside surface of the meat. These can be served pink in the middle according to taste" after searing.
- Frozen vegetables (sweetcorn, peas, carrots) "can contain bacteria" and need cooking unless the pack says otherwise (Listeria context, not stated on the page).
- Leftovers: "Eat leftovers within 48 hours or freeze them". Danger zone: "When food is at a temperature of between 8 - 63°C, this is called The Danger Zone." Reheat: "you should only ever reheat once. This is because repeatedly changing temperatures provides more chances for bacteria to grow".

#### 3.2 FSA "How to chill, freeze and defrost food safely"
- URL: https://www.gov.uk/government/publications/how-to-chill-freeze-and-defrost-food-safely/how-to-chill-freeze-and-defrost-food-safely . Published 18 December 2017.
- "your fridge should be between 0 and 5°C and your freezer should be around -18°C". Check with a fridge thermometer "once a week".
- Chilled food out of fridge during preparation: "a maximum of four hours".
- "Don’t place hot or warm food in your fridge. Instead, cool cooked food at room temperature and place in the fridge within one to two hours." (Opposite emphasis to FSIS, which says hot food "can be placed directly in the refrigerator".)
- Defrost in the fridge, or "use a microwave on the defrost setting directly before cooking". Cold-water thawing is not mentioned. "use food within 24 hours after it’s been fully defrosted".
- "you can freeze food again once cooked, but you’ll only be able to reheat it once after that".
- Freezer: "you can freeze food right up until midnight on the ‘use by’ date". Meats best "within 2-3 months".
- Danger Zone explainer: "Defrost food in the fridge to prevent it sitting in between 8 - 63°C". Cold does not stop Listeria monocytogenes.
- Do not store food in an opened tin can (tin transfer).

#### 3.3 Washing raw chicken, Campylobacter, and the 4Cs
- "Campylobacter": https://www.gov.uk/government/publications/campylobacter/campylobacter . Published 9 January 2018.
  - "Campylobacter is the main cause of bacterial food poisoning in the UK."
  - "washing raw chicken can spread campylobacter by splashing it onto hands, work surfaces, clothing and cooking equipment. Campylobacter has a low infective dose".
  - "never wash chicken/poultry"; chill "below 5°C".
  - 4Cs, verbatim list: "cleaning chilling cooking avoiding cross-contamination".
- "Why avoiding cross-contamination is important": https://www.gov.uk/government/publications/why-avoiding-cross-contamination-is-important . Published 18 December 2017. Heading "Don’t wash raw meat, fish or poultry": "Washing meat, fish and poultry doesn’t get rid of harmful bacteria - only thorough cooking will." If one board, "prepare vegetables and fruit first followed by raw meat, fish or poultry last".
- "Student guide to food safety and hygiene": https://www.gov.uk/government/publications/student-guide-to-food-safety-and-hygiene . First published 15 November 2021, updated 8 July 2026. "Don’t wash raw chicken." Also warns that breaded chicken and goujons "are often assumed to be ready to eat, but can actually contain raw meat."
- BBQ food safety (updated 31 July 2026): "never washing raw chicken or any other meat". Steaks "can be served pink, rare or bloody"; "chicken and pork, as well as minced meat products such as burgers, kebabs and sausages should not be served pink or rare".

#### 3.4 Rice and Bacillus cereus (UK)
- Source: FSA "Home food fact checker", https://www.gov.uk/government/publications/home-food-fact-checker . First published 2 June 2020, updated 21 August 2026. The old NHS rice page (nhs.uk/common-health-questions/food-and-diet/can-reheating-rice-cause-food-poisoning/) now redirects here.
  - "Rice may be eaten cold if it is cooled down quickly. Put the rice in the fridge and consume within 24 hours."
  - "It’s not the reheating that causes the problem, but the way the rice has been stored before it’s reheated."
  - "The spores of Bacillus cereus can survive being cooked."
  - "you should never reheat rice more than once."
  - "chill it as quickly as possible, ideally within one hour ... don’t leave rice in the rice cooker, steamer or pan to cool down."
  - Freezing: "By making sure rice goes in the freezer within an hour of cooking, you will stop bacteria multiplying and producing a toxin."
- Student guide repeats: rice "ideally within one hour"; "no more than one day" in the fridge; "Consume cooked rice within 24 hours of cooking."
- NHS "Storing and reheating food" (baby weaning): https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/storing-and-reheating-food/ . Read: full (no review date found in page source). "With rice, make sure it's cooled within 1 hour and then goes straight in the fridge or freezer. Rice kept in the fridge should be eaten within 24 hours. Never reheat rice more than once." Other food: cool "ideally within 1 to 2 hours"; fridge "use it within 2 days"; "Any already-cooked food you're feeding your child should only be reheated once."
- The FDA/US consumer pages I read give **no rice-specific rule**; rice falls under the general 2-hour and 3 to 4 day leftovers rules. The Bad Bug Book (§5) explains the mechanism.

#### 3.5 Other FSA fact-checker items
- Raw eggs: "young children, people who are pregnant, older people and people with an underlying health condition ... can now safely eat raw or lightly cooked hen eggs ... if they have a British Lion mark or are produced under the Laid in Britain egg assurance scheme." Excludes the "severely immunocompromised". (US: FSIS egg dishes to 160°F; Food Code uses pasteurized eggs for susceptible groups. A genuine policy difference, driven by UK flock vaccination; the vaccination reason is not stated on the page read.)
- Egg float test "assesses age, not safety".
- Meat: "Previously cooked and frozen meat should only be reheated once."
- Kidney beans: "Raw or undercooked beans especially red kidney beans can be risky ... You should not slow cook raw red kidney beans as it does not destroy the toxin and may increase its toxicity." (No boiling time is given on this page.)
- Opened cans and bulging cans: do not eat from "a visibly bulging can".

#### 3.6 FSA Clostridium perfringens (home batch cooking)
- https://www.gov.uk/government/publications/clostridium-perfringens . Published 25 June 2026.
- "These bacteria can develop spores which can survive cooking and grow during slow cooling and unrefrigerated storage." Applies to "batch cooking at home where you may leave food out to cool longer than you intended".
- "cool them within 2 hours and place them in the fridge or freezer"; "make sure food isn’t left out for more than 4 hours (less on a very warm day)"; chill "below 5°C".

#### 3.7 Rare burgers: FSA guidance for businesses and what it says for home cooks
- "Less than thoroughly cooked beef burgers guidance for food businesses and local authorities": https://www.gov.uk/government/publications/less-than-thoroughly-cooked-beef-burgers-guidance-for-food-businesses-and-local-authorities . Read: full. Version dated 22 May 2023; "We will review this guidance before June 2025" (no newer version found).
- History: "May 2016 - Original guidance published"; "June 2018 - Revision to consumer messaging"; January 2022 and May 2023 revisions (approved-premises advice added).
- The standard: "When burgers are thoroughly cooked, achieving a temperature of 70°C for two minutes, or equivalent all the way through, this will result in a 99.9999% (six-log) reduction". Equivalents listed: "80°C for at least 6 seconds 75°C for at least 30 seconds 65°C for at least 10 minutes 60°C for at least 45 minutes".
- Legal position: "there is no legal requirement to cook meat for a specific time or to a specific temperature, food businesses are legally obliged to produce safe food."
- Methods: sous vide to a validated 70°C/2 min equivalent; "sear and shave"; "source control" (supplier controls giving 2-log plus cooking giving 4-log).
- Home cooks: the point-of-sale message "also aims to discourage consumers from eating LTTC beef burgers at home"; businesses should help "consumers understand that cooking pink burgers at home is not recommended."
- Recommended menu wording: "‘Burgers cooked rare and medium rare carry a higher risk of food poisoning. Unlike a steak, a burger needs to be cooked through to reduce that risk. The Food Standards Agency recommends that children, pregnant women and anyone with a weaker immune system have their burgers well done. Please ask us for more information.’"
- Consumer "Burgers" page (https://www.gov.uk/government/publications/burgers , 19 December 2017): "This applies to all burgers, including burgers made from good quality or expensive meat." "That’s why a burger needs to be served well done, while a steak can be served rare." Vulnerable groups listed: children, people aged 65 or over, people who are pregnant, weakened immune system.

#### 3.8 NHS "Food poisoning"
- https://www.nhs.uk/conditions/food-poisoning/ . Read: full. "Page last reviewed: 19 December 2024. Next review due: 19 December 2027."
- "Food poisoning is rarely serious and usually gets better within a week." Symptoms "usually start within a few hours or a few days"; "Sometimes symptoms do not start for a few weeks."
- Causes: food "not cooked or reheated thoroughly", "not stored correctly", "handled by someone who's ill or has not washed their hands", "eaten after its "use by" date". Campylobacter is "the most common cause of food poisoning in the UK".
- Call 111 for "diarrhoea for more than 7 days or vomiting for more than 2 days".
- The NHS adult page "How to store food and leftovers" at the URL first tried returns 404; I did not find a current replacement. The NHS storage advice I could read is the baby-weaning page in §3.4.

---

### 4. Burden of illness

#### 4.1 US, CDC
- Current CDC page: "Estimates: Burden of Foodborne Illness in the United States", https://www.cdc.gov/food-safety/php/data-research/foodborne-illness-burden/index.html . Read: full via Wayback capture 20260829145538; page reviewed March 19, 2025.
  - "Six of these pathogens caused 9.9 million domestically acquired foodborne illnesses." "Illnesses caused by all seven pathogens resulted in 53,300 hospitalizations and 931 deaths."
  - Pathogens: Campylobacter, C. perfringens, invasive Listeria monocytogenes, norovirus, nontyphoidal Salmonella, STEC, Toxoplasma gondii (Toxoplasma counted for hospitalizations and deaths only).
  - "Norovirus was the leading cause of domestically acquired foodborne illnesses (5.5 million) and hospitalizations from these illnesses (22,400)." "Salmonella was the leading cause of domestically acquired foodborne illnesses resulting in death (238)."
  - "Invasive Listeria caused 1,050 non-pregnancy-associated illnesses and 198 pregnancy-associated illnesses."
- Paper: Scallan Walter EJ et al., "Foodborne Illness Acquired in the United States: Major Pathogens, 2019" (the title uses a dash, rendered here as a colon), Emerging Infectious Diseases 31(4), April 2025. https://wwwnc.cdc.gov/eid/article/31/4/24-0913_article . Read: full (direct). Abstract gives about 9.9 million illnesses (90% credible interval 5.9 to 15.4 million), 53,300 hospitalizations and 931 deaths; Campylobacter 1.9 million illnesses and 13,000 hospitalizations; Salmonella 1.3 million and 12,500.
- CDC Q&A, https://www.cdc.gov/food-safety/php/data-research/burden-qa.html . Read: full via Wayback 20260726050225. "We cannot meaningfully compare the estimates from 2019 with the ones published in 2011." "CDC's 1999 and 2011 estimates were not wrong". "The 2019 estimates give more descriptive information on the seven major pathogens instead of the broader 31 pathogens recorded previously in 2011."
- The older all-cause figures still appear on federal consumer pages read today: FSIS Food Thermometers ("roughly 48 million people getting sick,128,000 hospitalizations and 3,000 deaths within the U.S."), foodsafety.gov ("1 in 6 Americans", "128,000"), USDA 2019 press release ("roughly 128,000 hospitalizations and 3,000 deaths"). Recommendation: a lesson can say "CDC's 2011 estimate, which covered all causes, was about 48 million illnesses a year; its 2025 update, covering only seven major germs, counts about 9.9 million" and not present them as a trend.

#### 4.2 CDC chicken, raw flour, Listeria
- "Chicken and Food Poisoning", https://www.cdc.gov/food-safety/foods/chicken.html . Read: full via Wayback 2026 capture; reviewed April 29, 2024.
  - Raw chicken "can be contaminated with Campylobacter, Salmonella, or Clostridium perfringens germs."
  - "Every year in the United States about 1 million people get sick from eating contaminated poultry."
  - "1 in 25 packages of chicken at the grocery store are contaminated with Salmonella."
  - "According to a USDA study, 1 in 7 people who cleaned their sink after washing chicken still had germs in the sink." (Same 14% as the press release.)
  - Safe-washing steps if you do wash: "Run the water gently over the chicken to reduce splashing", clean and sanitize sink, wash hands 20 seconds.
  - "Keep your chicken stored on the bottom shelf of the refrigerator".
- "Raw Flour and Dough", https://www.cdc.gov/food-safety/foods/no-raw-dough.html (the raw-flour-dough URL first tried was never archived). Read: full via Wayback 20260920134344; reviewed November 24, 2025.
  - "Flour doesn't look like a raw food, but most flour is raw." Germs named: E. coli and Salmonella. "Steps like grinding grain and bleaching flour don't kill harmful germs". "Germs are killed only when flour is baked or cooked."
  - "CDC investigated outbreaks linked to raw flour or cake mix in 2016, 2019, 2021, and 2023."
  - Covers play dough and crafts; store edible cookie dough uses "heat-treated flour and pasteurized eggs or no eggs."
  - "Because flour is a powder, it can spread easily."
- UK equivalent exists ("Handling flour and flour products safely", GOV.UK, 10 April 2024) but was not read.
- "People at Increased Risk for Listeria Infection", https://www.cdc.gov/listeria/risk-factors/index.html . Read: full via Wayback 2026 capture; reviewed September 24, 2025.
  - Higher-risk groups: pregnant people, "People who are 65 years or older", "People who have a weakened immune system".
  - "about 1 in 25,000 pregnant women are infected with Listeria"; "1 in 4 pregnant women who get this illness lose their pregnancy or their baby shortly after birth."
  - "an estimated 1,250 people get sick from Listeria. More than half of all Listeria infections occur among people 65 years and older." Older adults: "1 in 6 ... die".
  - Weakened immune system: "make up 75% of all people with Listeria infection".

#### 4.3 UK, FSA
- FSA "Foodborne pathogens" research page, https://www.food.gov.uk/research/foodborne-pathogens . Read: partial, via Wayback capture 20260613052410 (live URL now 404 after the GOV.UK move). "Foodborne pathogens such as norovirus, Campylobacter, Listeria, Salmonella and Shiga toxin-producing Escherichia coli (STEC) cause approximately 2.4 million cases of disease in the UK population and impose an annual cost to society equivalent to £9.1 billion every year."
- Search snippets (not read at source) report a later FSA cost-of-illness re-estimate of about £10.4 billion a year with the same 2.4 million cases. Treat as unverified until the FSA source is read.
- FSA board paper "FSA 26/03/07 Foodborne Disease Update", https://www.gov.uk/government/publications/fsa-260307-foodborne-disease-update . Read: full (GOV.UK, published 25 June 2026).
  - "It is estimated that there are 300,000 cases of foodborne Campylobacter a year with an estimated societal and economic cost burden of £716M, compared to 32,000 foodborne Salmonella cases with an estimated burden of £212M."
  - UKHSA 2024 reports showed "a 17.1% rise in laboratory-confirmed human cases in England" (Campylobacter and Salmonella); causes uncertain; "approximately 27% of Salmonella cases travel-associated".
  - New UK estimates (IID3 study) are expected, with updated foodborne-disease models "should be completed by early 2027". So the 2.4 million figure is from the 2018-based model and will be replaced.

---

### 5. Specific hazards

#### 5.1 Raw red kidney beans (phytohaemagglutinin)
- FDA Bad Bug Book, 2nd edition (2012), chapter "Phytohaemagglutinin (kidney bean lectin)". PDF https://www.fda.gov/media/83271/download . Read: full chapter.
  - "Toxic dose: As few as four or five raw beans can trigger symptoms." Onset "within 1 to 3 hours"; recovery "usually is rapid, within 3 to 4 hours after onset".
  - "Raw kidney beans contain from 20,000 to 70,000 hau, while fully cooked beans contain from 200 to 400 hau." White kidney beans about one third; broad beans 5% to 10%.
  - "Several outbreaks have been associated with beans cooked in slow cookers".
  - "Bender and Readi found that boiling the beans for 10 minutes (100°C) completely destroyed the toxin. Consumers should boil the beans for at least 30 minutes to ensure that the product reaches sufficient temperature, for a sufficient amount of time".
  - Slow-cooker casseroles "often reached internal temperatures of only 75°C or less, which is inadequate".
  - Consumer box: "soaked in water for at least 5 hours, the water poured away, and the beans boiled in fresh water for at least 30 minutes."
  - UK history: "Seven outbreaks occurred in the U.K. between 1976 and 1979."
- UK: FSA fact checker says do not slow cook raw red kidney beans (§3.5). The familiar NHS instruction (soak at least 12 hours, boil vigorously at least 10 minutes, then simmer) appeared only in search-result snippets from syndicated copies of NHS "Beans and pulses in your diet"; I could not load the NHS page itself. **Search snippet only; confirm before quoting.** Canned kidney beans are already cooked (FSA).

#### 5.2 Bacillus cereus (rice)
- Bad Bug Book chapter "Bacillus cereus and other Bacillus species". Read: full chapter.
  - Two illnesses: diarrheal type, onset "6 to 15 hours"; emetic (vomiting) type, "0.5 to 6 hours", most often "rice and other starchy foods". Symptoms "usually subside after 24 hours".
  - Emetic toxin cereulide "is stable after heating at 121°C for 30 minutes, cooling at 4°C for 60 days, and at a pH range of 2 to 11." This is why reheating does not rescue badly stored rice.
  - Growth: optimum 28°C to 35°C, "minimum growth temperature of 4°C and a maximum of 48°C".
  - Numbers associated with illness: 10^5 to 10^8 organisms per gram; more than 10^6 per gram indicates active growth.
  - Rare deaths: emetic toxin "implicated in liver failure and death in otherwise healthy individuals."
  - Consumer box advises refrigeration at "40°F or lower".

#### 5.3 Clostridium perfringens (big pots of stew, stock, gravy)
- Bad Bug Book chapter. Read: full chapter.
  - "In most instances, the actual cause of poisoning by this organism is temperature abuse of cooked foods." Spores survive cooking; vegetative cells have a "fast doubling time (<10 minutes ...)", so "during cool-down (109-113°F) and storage of prepared foods, this organism can reach levels that cause food poisoning much more quickly than can other bacteria."
  - Vehicles: "Meats (especially beef and poultry), meat-containing products (e.g., gravies and stews)". "Spores of some C. perfringens strains can survive boiling water for an hour" (the PDF text breaks at "an ho", reading "hour" is the evident completion; check the PDF page before quoting).
  - Most common setting: institutions "where large quantities of food are prepared several hours before serving".
  - Onset about 16 hours (range in consumer box 8 to 16 hours); mild form lasts "12 to 24 hours". Dose above 10^6 cells or spores per gram.
- Tie-ins: Food Code cooling rule (§2.4) and 2-inch depth (§2.5); FSIS big-pot-of-soup advice (§1.4); FSA C. perfringens page (§3.6); FSIS Appendix A recommends limiting time between 50 and 130°F "to 6 hours or less".

#### 5.4 Botulism relevant to home cooks
- Garlic in oil: NCHFP "Freezing Garlic-In-Oil", https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/ . Read: full. "Research performed by the National Center for Home Food Preservation confirmed that mixtures of garlic in oil stored at room temperature are at risk for the development of botulism." "Garlic-in-oil should be made fresh and stored in the refrigerator at 40°F or lower for no more than 4 days. It may be frozen for long term storage for up to several months." Reference: Nummer, Schaffner, Fraser and Andress (2011), Food Protection Trends 31(6):336-342.
- FDA requirement that commercial garlic-in-oil contain acidifying agents or microbial inhibitors: search snippet only (not read at FDA).
- Home canning: CDC "Prevent Botulism: Home-Canned Foods", https://www.cdc.gov/botulism/prevention/home-canned-foods.html . Read: full via Wayback 20260915231556; reviewed April 25, 2024.
  - "follow safe canning instructions ... These instructions are in the USDA Complete Guide to Home Canning." "Do not use other recipes, even if you got them from a trusted friend or family member."
  - "Low-acid foods have a pH higher than 4.6." "Home-canned vegetables, which are low-acid foods, are the most common cause of botulism outbreaks in the United States." "Pressure canning is the only recommended method for canning low-acid foods." Do not use electric multi-cookers with a "canning" button.
  - "If in doubt, throw it out! Never taste food to see if it's safe."
- Point learners to: USDA Complete Guide to Home Canning, 2015 revision, hosted by NCHFP (https://nchfp.uga.edu/resources/category/usda-guide ; confirmed the "2015 revision" listing, guide not read). Canning deliberately not researched further.

---

### 6. Sous vide and pasteurization: safety is time plus temperature

#### 6.1 FSIS Cooking Guideline (Revised Appendix A), December 2021
- "FSIS Cooking Guideline for Meat and Poultry Products (Revised Appendix A)", December 2021, Document ID FSIS-GD-2021-14. Canonical page https://www.fsis.usda.gov/guidelines/2021-0014 (blocked). **Read: full PDF from a North Carolina Department of Agriculture mirror**, https://www.ncagr.gov/meat-poultry-inspection/Appendix-A12-2021/download . Tables 2 to 4 are images; I read them visually.
- Scope: an industry guideline for ready-to-eat products, "It applies to small and very small meat and poultry official establishments". Not written for home cooks.
- Targets: 6.5-log Salmonella reduction for meat, 7-log for poultry (9 CFR 381.150(a)(1)).
- Table 2, meat (6.5-log / 7-log): 130°F 112 min / 121 min; 135°F 36 / 37 min; 140°F 12 / 12 min; 145°F 4 / 4 min; 147°F 134 sec / 144 sec; 150°F 67 / 72 sec; 155°F 22 / 23 sec; 158°F 0 sec. Footnote: "The required Log reductions are achieved instantly (0 seconds) when the internal temperature of a cooked meat product reaches 158°F or above."
- Table 3, chicken, 7-log, by fat level (1% fat and 12% fat shown):
  - 136°F: 63.3 min and 81.4 min
  - 140°F: 25.2 min and 35 min
  - 145°F: 8.4 min and 13 min
  - 150°F: 2.7 min and 4.2 min
  - 155°F: 44.2 sec and 54.4 sec
  - 160°F: 13.7 sec and 16.9 sec
  - 162°F: 0 sec at 1% to 6% fat, 9.6 to 10.5 sec at 7% to 12% fat
  - 163°F to 165°F: 0 sec at every fat level. Footnote: "A 7-Log reduction of Salmonella is achieved instantly at internal temperatures in which the holding time is 0 seconds (0 sec.)."
- Table 4, turkey, 7-log (1% / 12% fat): 140°F 28.1 / 33.7 min; 145°F 10.5 / 13.8 min; 150°F 3.8 / 4.9 min; 155°F 1.2 / 1.3 min; 160°F 25.6 / 26.9 sec; 164°F 11.1 / 11.7 sec; 165°F 0 sec.
- Also: "FSIS recommends limiting the total time product temperature is between 50 and 130°F to 6 hours or less".
- The lesson this supports: 165°F for poultry is the temperature at which the 7-log kill is instantaneous, so a thermometer reading is enough. Lower temperatures give the same kill if held long enough: chicken breast at 145°F for about 8.4 to 13 minutes, depending on fat. That is why sous vide chicken at 60 to 63°C can be safe, and why a quick 150°F reading on a grill is not.
- The consumer chart's 145°F plus 3-minute rest for whole cuts is a close cousin of the Food Code's 145°F for 15 seconds for steaks (surface contamination) and 145°F for 4 minutes for roasts.

#### 6.2 Douglas Baldwin, "A Practical Guide to Sous Vide Cooking"
- URL: https://douglasbaldwin.com/sous-vide.html . Read: full. "Version 0.4k"; page footer "Last Updated: Thursday, December 25, 2014". Author of "Sous Vide for the Home Cook" (2010). Secondary source; its figures cite FSIS 2005 and the FDA Food Code 2009, so check against current editions.
- Danger zone critique: "it’s well known that food pathogens can only multiply between 29.7°F (-1.3°C) and 126.1°F (52.3°C)". Food is safe "after about 12 minutes (for meat) and 35 minutes (for poultry) ... when the coldest part is 140°F (60°C)".
- Lowest recommended bath: "130°F (54.4°C) ... the lowest temperature I recommend for cooking sous vide"; about "2½ hours to reduce E. coli to a safe level in a 1 inch (25 mm) thick hamburger patty".
- D-value example: Salmonella in ground beef at 140°F "is reduced by a factor ten every 5.48 minutes"; FSIS 6.5-log target gives "at least 35.6 minutes" at 140°F.
- "Pasteurization is a combination of both temperature and time."
- Species: "at 140°F (60°C), it'll take you about 60% longer for chicken as it does for beef."
- Thickness: "a steak that is twice as thick takes about four times longer to cook and cool!"
- Table 4.1, poultry, total time in bath starting at 41°F (heating plus holding), for a 25 mm (1 inch) piece: 57°C 3 hr; 58°C 2¼ hr; 60°C 1½ hr; 63°C 1¼ hr; 65°C 55 min. Targets "a one million to one reduction in Listeria and a ten million to one reduction in Salmonella".
- Spores: pasteurization leaves spores; cool in ice water "that is at least half ice" and refrigerate; "Raw or unpasteurized food must never be served to highly susceptible or immune compromised people."
- Note: the FSA burger guidance (§3.7) also accepts sous vide if validated to the 70°C for 2 minutes equivalent, and lists 60°C for 45 minutes.

---

### 7. US vs UK: where the guidance differs

| Topic | US (FSIS, foodsafety.gov, CDC, FDA) | UK (FSA, NHS) | Note for the lesson |
|---|---|---|---|
| Fridge temperature | 40°F (4°C) or below | "between 0 and 5°C" | 5°C is 41°F, which matches the FDA retail figure; the consumer figures differ by about 1°C |
| Freezer | 0°F (-18°C) | "around -18°C" | Same |
| Danger zone | 40°F to 140°F (4°C to 60°C) | "between 8 - 63°C" | UK lower bound reflects UK legal chill limit of 8°C (not read today); upper bound 63°C vs 60°C |
| Time out of fridge | 2 hours; 1 hour above 90°F | Chilled food out during preparation "a maximum of four hours"; C. perfringens page "not ... more than 4 hours (less on a very warm day)"; cool and refrigerate "within one to two hours" | UK gives a longer limit for prep, similar limit for cooling |
| Hot food into fridge | "Hot food can be placed directly in the refrigerator" (FSIS); small portions okay (CDC) | "Don’t place hot or warm food in your fridge. Instead, cool cooked food at room temperature and place in the fridge within one to two hours" | Both want fast cooling; they disagree on method. Worth teaching as a disagreement |
| How "cooked" is judged | Thermometer is "the only reliable way"; colour is not a reliable guide | Visual cues first (steaming hot, no pink, juices clear); thermometer "consider using" | The largest difference in method |
| Poultry | 165°F (73.9°C), instantaneous | 70°C for 2 min or equivalents (65°C 10 min, 75°C 30 s, 80°C 6 s, 60°C 45 min) | Both are time-temperature equivalents; UK states the time |
| Pork | 145°F plus 3-minute rest; pink is acceptable | Cook "all the way through"; no pink | Real difference in advice |
| Whole cuts of beef and lamb | 145°F plus 3-minute rest (medium) | May be served pink or rare once the surface is seared | UK more permissive for whole cuts |
| Burgers and mince | 160°F; brown colour not a sign of safety | Cooked through, no pink, steaming; restaurants may serve pink under strict controls with a consumer message | Both say do not cook pink burgers at home |
| Raw or runny eggs | Egg dishes 160°F; "cook until yolk and white are firm" | Lion-mark or Laid in Britain eggs safe raw or lightly cooked, even for vulnerable groups (except severely immunocompromised) | Genuine policy difference |
| Leftovers in fridge | 3 to 4 days | "within 48 hours" / 2 days | UK is stricter |
| Reheating | To 165°F (74°C); sauces to a rolling boil | "steaming hot" throughout; no number given | |
| Reheat only once | No such rule; reheated leftovers may be refrozen (FSIS) | "you should only ever reheat once" (FSA, NHS) | UK only |
| Rice | No rice-specific rule on pages read; general 2-hour and 3 to 4 day rules | Cool "ideally within one hour"; fridge "no more than one day" / 24 hours; never reheat more than once | UK stricter and specific |
| Thawing | Fridge, cold water changed every 30 minutes, or microwave; cook from frozen allowed | Fridge, or microwave defrost immediately before cooking; use within 24 hours of defrosting | UK does not list cold water |
| Use after fridge thawing | Ground meat, poultry, seafood 1 to 2 days; red meat 3 to 5 days | 24 hours | UK stricter |
| Washing raw chicken | "not recommended"; CDC gives safe-washing steps "If you choose to wash" | "never wash chicken/poultry"; do not wash raw meat, fish or poultry | Same conclusion, UK firmer |
| Hot holding | 140°F consumer; 135°F Food Code | 63°C (145°F) as top of danger zone | |
| Kidney beans | FDA Bad Bug Book: boil at least 30 minutes; soak 5 hours; no slow cooker | Do not slow cook raw kidney beans (FSA); NHS 10-minute vigorous boil (snippet only) | Numbers differ; both ban slow cookers for raw beans |
| Name of the framework | Clean, Separate, Cook, Chill | The 4Cs: cleaning, chilling, cooking, avoiding cross-contamination | Same content |

---

### 8. Not read / blocked

- **All live FSIS, foodsafety.gov and CDC pages: blocked** (HTTP 403 Akamai "Access Denied" to curl and to the fetch tool). Read instead via Internet Archive captures from August and September 2026, as marked above.
- FSIS "Washing Food" live page: blocked; read via Wayback 20260912193141.
- USDA 2019 observational study executive summary: not read (press release only).
- CDC raw flour URL first tried (cdc.gov/food-safety/foods/raw-flour-dough.html): never archived; read the current page no-raw-dough.html instead.
- NHS "How to store food and leftovers" (nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/how-to-store-food-and-leftovers/): **404 today**. No adult replacement found.
- NHS "Beans and pulses in your diet" (kidney bean soak 12 hours, boil 10 minutes): **search snippets only**, from syndicated council copies; NHS page not loaded.
- Old FSA URLs food.gov.uk/safety-hygiene/{leftovers, rice, the-4cs-of-food-hygiene, chicken, cross-contamination}: no longer resolve after the move to GOV.UK; equivalent content read on GOV.UK pages as cited.
- FSA £10.4 billion cost re-estimate: search snippet only.
- FDA garlic-in-oil acidification requirement: search snippet only.
- FDA "Supplement to the 2022 Food Code" (Nov 2024): search snippet only; superseded by 2026 anyway.
- FSIS Appendix A canonical page (fsis.usda.gov/guidelines/2021-0014): blocked; PDF read from ncagr.gov mirror.
- FSA "Handling flour and flour products safely" (GOV.UK, April 2024): found, not read.
- FSA/UK legal chill (8°C) and hot-holding (63°C) requirements in the Food Safety and Hygiene (England) Regulations: not read; the 8°C and 63°C figures above come only from the FSA "Danger Zone" wording.
- USDA Complete Guide to Home Canning: located (2015 revision listing on NCHFP), not read, by design.
- NHS baby "Storing and reheating food": read in full, but no review date found in the page source.

---

## Cooking Fundamentals, Stage 1 research, Part C: kitchen myths and the science of core techniques

Compiled 2026-09-24. All "date read" entries are 2026-09-24.

### How to read these notes

- **Read status.** "Full" means I read the whole page or document text. "Partial" means I read the page through a summarising fetch tool, which returns extracts rather than the whole text, or I read only an abstract. "Snippet" means search-engine summary only, never opened. "Blocked" means I tried and could not get in.
- **Quotation marks.** Text in quotation marks was copied from a page fetched today. Quotes marked **[V]** were copied from raw text I extracted myself (PDF to text, or PubMed's plain-text abstract service), so they are verbatim. Quotes marked **[T]** came back from the summarising fetch tool, which presents them as verbatim but is a language model; re-check these against the page before they go into a lesson.
- **Classification.** Each claim is marked **established** (tested, and the tests agree), **contested** (tested, with disagreement or real uncertainty), or **folklore** (no good test supports it, or tests refute it).
- **A big access problem.** Serious Eats (People Inc.) blocks automated readers. WebFetch refused it; curl got HTTP 402; the Jina reader returned HTTP 451 with a message that the owner has asked for automated access to stop; the Wayback Machine refused connections. I did not try to get round the block. Kenji López-Alt's Serious Eats articles are therefore read here only through (a) Serious Eats articles syndicated on AOL and Yahoo, which are the publisher's own text republished, and (b) secondary reports. Where a lesson leans on a Kenji number, someone should read the original in a browser. The NYT (Bittman 2006) and NEJM (Kwok 1968) were also blocked.

---

### 1. Searing "seals in juices"

**Classification: folklore.** Tested repeatedly since the 1930s; seared meat loses as much moisture as unseared, or more.

**Origin.** Justus von Liebig, around 1850.
- Source: Wikipedia, "Searing". https://en.wikipedia.org/wiki/Searing . Read: partial (fetch tool). It says the theory "was first put forth by Liebig in his book _Researches on the Chemistry of Food_ around 1850" [T], and that "Experiments to test the theory were carried out as early as the 1930s and found that the seared roasts lost the same amount of moisture or more" [T]. It cites McGee that searing gives greater moisture loss than cooking to the same internal temperature without searing.
- Search snippets (not opened) name a 1930 University of Missouri home economics study and say Escoffier took up Liebig's idea. Treat both as unconfirmed until a primary is found; McGee's *On Food and Cooking* (2004) is the book to check in print.

**Tests with numbers.**
- **Cook's Illustrated / America's Test Kitchen, "Searing Steak".** https://www.americastestkitchen.com/cooksillustrated/how_tos/5699-searing-steak . No author or date on page. Read: partial. Eight 1¼-inch rib-eyes in two batches: one seared raw then oven-cooked to 125°F; the other oven-cooked to 110°F then seared to 125°F. Result: "both sets of steak lost nearly an identical amount of liquid: around 22 percent of their weight" [T].
- **Alton Brown, *Good Eats* "Myth Smashers" (episode 119, season 8)**, as recorded by Allison Chauvin, blog post 13 February 2019. https://allisoncooksgoodeats.com/2019/02/13/episode-119-myth-smashers/ . Read: partial. Unseared steak lost 13% of its weight, seared lost 19%. Secondary account of a TV test; one steak each, so anecdotal.
- **Kenji López-Alt, "The Food Lab: 7 Old Wives' Tales About Cooking Steak", Serious Eats, June 2013.** http://www.seriouseats.com/2013/06/the-food-lab-7-old-wives-tales-about-cooking-steak.html (now https://www.seriouseats.com/the-food-lab-7-old-wives-tales-about-cooking-steak). **Blocked.** Kottke.org's 2013 link post (read, partial) quotes the finding that a steak "cooked gently first and finished with a sear will not only develop a deeper, darker crust...but it also cooks more evenly from center to edge" [T]. Search snippets (not opened) report Kenji's roast test: sear-first lost 1.68% more juice than sear-last. Snippet only; confirm before use.
- **Serious Eats, "Why So Many Meat Cooking 'Rules' Are Wrong", Laila Ibrahim, syndicated on AOL 21 December 2025** (the same piece syndicated on Yahoo, dated 9 August 2026). https://www.aol.com/articles/why-many-meat-cooking-rules-160000335.html and https://www.yahoo.com/lifestyle/articles/6-things-ve-told-cooking-120000706.html . Read: partial. States that seared steaks "actually lose _slightly more_ moisture than unseared ones" because of evaporation from the hotter surface [T].

**What searing does.** Browning (Maillard reactions, section 6) and a crisp crust for flavour and texture. The "sear last" (reverse sear) order gives a thinner overcooked band under the crust. The practical lesson: sear for flavour, and control juiciness with final internal temperature.

---

### 2. Resting meat

**Classification: contested, with the evidence moving.** The old claim, that resting lets juices "redistribute" or be "reabsorbed", is not supported once final temperature is controlled. Resting does matter as a way to manage carryover cooking, and hot meat sliced immediately does shed more liquid on the board.

**The original test.** Kenji López-Alt, Serious Eats, about 2010 (original blocked). As described in Gritzer 2025 (below): steaks cooked to 125°F and sliced at 2.5-minute intervals from 0 to 12.5 minutes. The unrested steak shed a lot of juice; by about 10 minutes it shed hardly any. For years this was the standard evidence for resting.

**The revision.**
- **Daniel Gritzer, Serious Eats, July 2025, syndicated on AOL 22 July 2025 as "This Major Rule About Cooking Meat Turns out to Be Wrong".** https://www.aol.com/major-rule-cooking-meat-turns-155336379.html . Read: partial (fetch tool, fairly full summary).
  - The flaw in the old test: the steaks all came off the heat at the same temperature but were sliced at different times, so carryover cooking meant they were at different final temperatures when cut.
  - Once final temperature is matched, rested and unrested meat lose about the same juice. The mechanism he gives is vapour pressure: hotter meat pushes out more liquid when cut, so the liquid stays in because the meat has cooled, not because it has been reabsorbed.
  - Blind taste test: four tasters rotating over 30 rounds; the rested steak was picked as juicier 16 times out of 30, which the article calls "no better than a coin-flip" [T].
  - Key line: "Resting meat is best understood as a method of temperature control, not juice retention" [T]. Recommendation: pull early, rest just long enough for carryover to reach the target, then slice.
- **Laila Ibrahim, Serious Eats (AOL, December 2025; Yahoo, August 2026)**, as above. Read: partial. Says Serious Eats (Gritzer), Kenji López-Alt and Chris Young (of *Modernist Cuisine*) reached the same conclusion: when final temperature is controlled, "rested and unrested meat lost essentially the same amount of juice" [T]. The same piece reports that the juice lost from probing with a thermometer is below what tasters can detect.

**Carryover figures.**
- Wikipedia, "Carryover cooking". https://en.wikipedia.org/wiki/Carryover_cooking . Read: partial. Gives 5 to 25°F (3 to 14°C), citing Amy Brown, *Understanding Food: Principles and Preparation*, 3rd ed. (Thomson Wadsworth, 2008), p. 140. The rise is larger for bigger, denser roasts and higher cooking temperatures. A thin steak rises a few degrees; a large roast from a hot oven rises most. I found no controlled table by cut size; a lesson should give the range and the principle, not invented per-cut numbers.

**For the lesson.** Resting is temperature management. It is worth doing for a large roast because the centre goes on rising, and it is harmless for a steak, but the "juices redistribute" explanation should be dropped. A small caveat: this revision is recent (2025) and comes mostly from one publication plus Chris Young's work. It is well reasoned, but it is fairer to call it the current best view than settled law.

---

### 3. Salt: meat, beans, pasta water, boiling point

#### 3a. Salting meat ahead (dry brining)

**Classification: established in outline, with the "40-minute worst window" contested as to exact timing.** Salt draws out liquid, which dissolves the salt into a brine; given time, the brine is reabsorbed and the salt seasons deeper and loosens muscle proteins.

- Kenji López-Alt's position, from his own TikTok (February 2025), search snippet only, not opened: salt "right before cooking it, or at a minimum 45 minutes to an hour before cooking it" because cooking inside that first hour gives a poor sear. https://www.tiktok.com/@j.kenji.lopezalt/video/7471317522248142110
- Tasting Table, "Why You Should Always Salt Your Steak Before Cooking" (no date shown). https://www.tastingtable.com/844510/why-you-should-always-salt-your-steak-before-cooking/ . Read: partial. Reports Kenji's Serious Eats timing tests with 40 minutes ahead best among short times, and overnight uncovered on a rack better still. Cites https://www.seriouseats.com/perfect-pan-seared-steaks-recipe (blocked).
- Search summary (not opened) of Kenji's explanation: by about 10 to 15 minutes the surface is wet with brine; by about 40 minutes most of it has been reabsorbed. The window from roughly 3 to 40 minutes gives a wet surface that steams instead of browning.
- Hawaii Tribune-Herald, Audrey Wilson, 19 February 2019, reporting Kenji. https://www.hawaiitribune-herald.com/2019/02/19/features/lets-talk-food-steaks-at-room-temperature-or-not/ . Read: partial. Quotes Kenji that blotting a steak dry "will improve it far better than any amount of room temperature resting will" [T], and that a night or two uncovered on a rack in the fridge gives the driest surface.

For a lesson: "salt just before, or 45 minutes or more ahead, ideally overnight" is the consensus of the test-kitchen writers. The exact minutes are one experimenter's observations, not a measured curve.

#### 3b. Salting beans

**Classification: established.** The old rule "never salt beans until the end, or they stay hard" is folklore. Salted soaking water gives softer skins.

- America's Test Kitchen (Cook's Illustrated), "Salty Soak for Beans". https://www.americastestkitchen.com/cooksillustrated/how_tos/5803-salty-soak-for-beans . No author or date on page. Read: partial. Mechanism: "sodium ions replace some of the calcium and magnesium ions in the skins. Because sodium ions are more weakly charged than calcium and magnesium ions, they allow more water to penetrate into the skins, leading to a softer texture" [T]. Formula: "For 1 pound of dried beans, dissolve 3 tablespoons of table salt in 4 quarts of cold water. Soak the beans at room temperature for 8 to 24 hours" [T]. That is about 54 g salt in 3.8 L, roughly 1.4%.
- ATK "Brining Beans in Half the Water" (search snippet only): 2 quarts water and 1½ tablespoons salt per pound also works.
- Kenji's Serious Eats bean article and The Kitchn's piece (403) not read.
- The true exception worth teaching is acid: acidic ingredients (tomato, vinegar) do slow softening. I did not fetch a test on that today, so it needs a source before use.

#### 3c. Salting pasta water

**Classification: "as salty as the sea" is folklore as literal advice; salting the water is established as the way to season the pasta itself.**

- Sea salinity: NOAA Ocean Service, "Why is the ocean salty?", last updated 23 September 2026. https://oceanservice.noaa.gov/facts/whysalty.html . Read: partial. "The average salinity is about 35 parts per thousand" [T] and "about 3.5 percent of the weight of seawater comes from the dissolved salts" [T].
- ATK standard: 1 tablespoon table salt per 4 quarts water (search snippet across many ATK recipes). With table salt at about 18 g per tablespoon (Morton labels ¼ tsp as 1.5 g), that is about 18 g in 3.79 kg water, roughly **0.5%**. Common chef guidance runs 1 to 2%. Seawater strength (3.5%) is 3 to 7 times saltier than what cooks actually use, and would make the pasta unpleasantly salty.
- ATK, "Making Your Pasta Water Work for You", Scott Kathan, 4 April 2022. https://www.americastestkitchen.com/articles/5284-making-your-pasta-water-work-for-you . Read: partial. Advises plenty of salt, no oil, and keeping the starchy water as a sauce thickener.
- McGee reduces salt in proportion when using less water (next item).

#### 3d. How much water pasta needs; starting cold

**Classification: established.** A big pot is not needed.

- **Harold McGee, "How Much Water Does Pasta Really Need?", *New York Times*, 25 February 2009** (dated 24 February in the copy). NYT itself blocked; read via a full-text PDF copy hosted by Wekiva Culinary at https://www.wekivaculinary.org/wp-content/uploads/2020/04/NYTimes-22How-Much-Water-Does-Pasta-Really-Need22.pdf . Read: **full** (PDF text extracted).
  - Standard advice: "4 to 6 quarts of well-salted water per pound of pasta" [V].
  - Test 1: a pound of spaghetti, "just 2 quarts of cold water and 2 teaspoons salt" [V]; 8 minutes to boil, then another 10 to cook; texture and saltiness as expected. Test 2: 1½ quarts, with frequent stirring; "the spaghetti came out fine" [V].
  - Why it works: "the noodles absorb water only very slowly at temperatures much below the boil" [V], and the noodle surface is starchier than any cooking water, so stickiness is the same either way.
  - Dissent recorded in the same article: Lidia Bastianich ran a side-by-side and found the cold-start version lacking in texture and "nutty flavor" [V]; she accepted cutting from 6 to 4 quarts. Marcella Hazan found it needed constant stirring.
  - McGee's energy estimate: US home savings of "several trillion B.T.U.s" [V] a year. Exception: capellini cooks too fast for the method.
- **ATK / Cook's Illustrated, "Start Pasta in Cold Water", Lan Lam, 28 April 2023.** https://www.americastestkitchen.com/cooksillustrated/articles/7181-start-pasta-in-cold-water . Read: partial. 1 quart cold water against 4 quarts boiling for a pound of penne, linguine and elbows. Water saving 75%; total time 16 to 17.75 minutes against 23.5 to 29 minutes, "as much as 45 percent" [T] less; tasters could barely tell the difference.
- Kenji's Serious Eats pasta-water test: blocked, not read.

#### 3e. Oil in pasta water

**Classification: folklore.** Oil floats and mostly goes down the drain.
- ATK (Kathan 2022, above): oil "does not help prevent the pasta from sticking" [T]; stirring early and a good boil do.
- *Good Eats* "Myth Smashers" (Chauvin 2019 recap): about 85% of the added oil drained away with the water. Read: partial.

#### 3f. Rinsing cooked pasta

**Classification: established that rinsing hot pasta is a mistake for a hot sauced dish, because it washes off the surface starch that helps sauce cling** (ATK Kathan 2022 on starch as thickener; McGee 2009 on starchy water emulsifying oil). Rinsing is reasonable for cold pasta salads and some Asian noodle dishes where separate strands are wanted. I found no controlled test beyond this reasoning; call it well-founded practice.

#### 3g. Salt and the boiling point

**Classification: established physics; the effect is too small to matter at the stove.**
- Boiling-point elevation: ΔT = i × Kb × m. Kb for water is 0.512 °C·kg/mol (Wikipedia, "Boiling-point elevation", https://en.wikipedia.org/wiki/Boiling-point_elevation , read partial; value given as "0.512" [T]). NaCl dissociates into two ions, so i ≈ 2 (real value slightly lower, about 1.8 to 1.9, so these figures are upper bounds).
- My calculation (molar mass NaCl 58.44 g/mol):
  - ATK strength, about 18 g in 3.79 kg water (≈0.5%): m ≈ 0.081 mol/kg; ΔT ≈ **0.08°C**.
  - 1% (10 g per 990 g water): m ≈ 0.173; ΔT ≈ **0.18°C**.
  - 2%: ΔT ≈ **0.36°C**.
  - Seawater strength 3.5%: ΔT ≈ **0.64°C**.
- So salt makes water boil fractionally *later*, not faster, and cooks food fractionally hotter by an amount no one could taste. The flurry of bubbles when salt goes into near-boiling water is nucleation (the crystals give dissolved gas and vapour somewhere to form), not faster boiling.

#### 3h. "Cold water boils faster"

**Classification: folklore.** Colder water has further to go and takes longer. The sound reason for starting with cold tap water is lead, not speed.
- US EPA, "Why can't I use hot water from the tap for drinking, cooking, or making baby formula?", last updated 28 October 2025. https://www.epa.gov/lead/why-cant-i-use-hot-water-tap-drinking-cooking-or-making-baby-formula . Read: partial. "Hot water dissolves lead more quickly than cold water and is therefore more likely to contain greater amounts of lead" [T].
- (The "Mpemba effect", hot water sometimes *freezing* faster, is a separate and disputed claim about freezing, not boiling. Do not conflate them.)

---

### 4. Alcohol "cooks off"

**Classification: established that it does not all cook off.** Retention runs from 85% down to about 5%, depending on method and time.

- **Primary data: USDA Table of Nutrient Retention Factors, Release 6, Nutrient Data Laboratory, Beltsville, December 2007.** https://www.ars.usda.gov/ARSUserFiles/80400530/pdf/retn06.pdf . Read: **full** (PDF text extracted). Alcohol factors were added in Release 4 (1998). The introduction says the alcohol study tested "no heat application, alcohol added to a boiling liquid, flaming, and baking for various lengths of time" [V] using gas-liquid chromatography, and refers readers to Augustin et al. 1992.
- Alcohol retention (% of alcohol remaining), food group 14, from the table [V]:

| Code | Preparation (USDA wording) | % retained |
|---|---|---|
| 5002 | ALC BEV, STIRRED INTO HOT LIQ (added to boiling liquid, removed from heat) | 85 |
| 5003 | ALC BEV, FLAMED | 75 |
| 5001 | ALC BEV, NO HEAT, STORED OVERNIGHT | 70 |
| 5010 | ALC BEV, NOT STIRRED IN, BKD 25 MIN | 45 |
| 5004 | STIRRED, BKD/SIMMRD 15 MIN | 40 |
| 5005 | STIRRED, BKD/SIMMRD 30 MIN | 35 |
| 5006 | STIRRED, BKD/SIMMRD 1 HR | 25 |
| 5007 | STIRRED, BKD/SIMMRD 1.5 HR | 20 |
| 5008 | STIRRED, BKD/SIMMRD 2 HR | 10 |
| 5009 | STIRRED, BKD/SIMMRD 2.5 HR | 5 |

- **Augustin J, Augustin E, Cutrufelli RL, Hagen SR, Teitzel C. "Alcohol retention in food preparation." *J Am Diet Assoc* 1992;92(4):486-8. PMID 1556354.** Department of Food Science and Toxicology, Food Research Center, Moscow, Idaho. PubMed record read (no abstract on PubMed). The journal's abstract page (jandonline.org) returned 403: **blocked**. Search snippets say six recipes retained 4% to 85%.
- Note for the lesson: the often-repeated figure "85% when flamed" is not what the table says: **85% is for alcohol stirred into a boiling liquid and taken off the heat; flaming is 75%.** Also "40% after 15 minutes" is for alcohol stirred in and baked *or simmered* 15 minutes. These are percentages of the alcohol added, not of the dish. A wine braise simmered 2.5 hours keeps about 5% of the wine's alcohol, a very small amount per serving, but not zero, which matters to someone avoiding alcohol entirely.
- Pan size, pot surface area and whether the liquid is stirred all change the figures; the USDA numbers are from a small number of recipes and should be taught as rough guides.

---

### 5. MSG and umami

**Classification: the "Chinese Restaurant Syndrome" is not supported by double-blind testing (folklore as a general claim). A small, inconsistent effect from large doses taken without food is the most the evidence allows (contested at the margin). Umami as a basic taste is established.**

**Chemistry.** MSG is the sodium salt of glutamic acid, one of the commonest amino acids. Free glutamate gives the savoury taste; glutamate bound in protein does not.
- FDA, "Questions and Answers on Monosodium glutamate (MSG)", last updated 17 July 2026. https://www.fda.gov/food/food-additives-petitions/questions-and-answers-monosodium-glutamate-msg . Read: partial. FDA "considers the addition of MSG to foods to be 'generally recognized as safe' (GRAS)" [T]. FASEB's 1995 report for FDA: in some sensitive people, 3 g or more of MSG *without food* may cause "short-term, transient, and generally mild symptoms" [T] such as headache, numbness, flushing; a typical serving of food with added MSG has less than 0.5 g. Adults eat about 13 g of glutamate a day from protein, against about 0.55 g from added MSG. Added MSG must be labelled as "monosodium glutamate"; foods with naturally high glutamate ingredients (hydrolysed protein, yeast extract) cannot claim "No MSG".
- **FSANZ, *Monosodium Glutamate: A Safety Assessment*, Technical Report Series No. 20, June 2003.** https://www.foodstandards.gov.au/sites/default/files/consumer/additives/msg/Documents/MSG%20Technical%20Report.pdf . Read: **full** (PDF text extracted, conclusion and tables read closely). Conclusion: "There is no convincing evidence that MSG is a significant factor in causing systemic reactions resulting in severe illness or mortality" [V]. It notes that when people who believe they are sensitive are tested double-blind, "the majority do not react to MSG under the conditions of the study (or react equally to placebo)" [V]. Free glutamate in foods (Table 1, from Yamaguchi and Ninomiya 1998), mg per 100 g: Parmesan 1200; peas 200; potato 180; tomatoes 140; corn 130; human milk 22; cow's milk 2; beef 33; chicken 44. Table 2: Marmite 1960, Vegemite 1431, Korean soy sauce 1264, Japanese soy 782, fish sauce (nam pla) 950, oyster sauce 900.

**Double-blind challenge.**
- **Geha RS, Beiser A, Ren C, et al. "Multicenter, double-blind, placebo-controlled, multiple-challenge evaluation of reported reactions to monosodium glutamate." *J Allergy Clin Immunol* 2000;106(5):973-80. PMID 11080723.** Abstract read in full via PubMed. (The "J Nutr" paper is a companion: Geha et al., "Review of alleged reaction to monosodium glutamate and outcome of a multicenter double-blind placebo-controlled study", *J Nutr* 2000;130(4S Suppl):1058S-62S, PMID 10736382, abstract also read.)
  - 130 self-identified MSG-reactive volunteers; 5 g MSG or placebo, without food. "Of 130 subjects in protocol A, 50 (38. 5%) responded to MSG only, 17 (13.1%) responded to placebo only (P <. 05), and 19 (14.6%) responded to both" [V].
  - On retest only 19 of 37 MSG-only responders reacted the same way again. 2 people responded to MSG but not placebo twice more, yet "their symptoms were not reproducible" [V], and when given MSG with food (3 MSG and 3 placebo challenges each) each reacted to only one of the MSG challenges.
  - Conclusion: large doses without food "may elicit more symptoms than a placebo in individuals who believe that they react adversely to MSG. However, neither persistent nor serious effects from MSG ingestion are observed, and the responses were not consistent on retesting" [V]. The *J Nutr* summary adds: "The responses were not observed when MSG was given with food" [V].

**History of the scare.**
- Robert Ho Man Kwok, letter "Chinese-Restaurant Syndrome", *N Engl J Med* 1968;278(14):796, 4 April 1968. NEJM page **blocked** (403). Details from Sam Kean, "The Rotten Science Behind the MSG Scare", *Distillations*, Science History Institute, 2 March 2023. https://www.sciencehistory.org/stories/magazine/the-rotten-science-behind-the-msg-scare/ . Read: partial. Kwok described numbness, weakness and palpitations after Northern Chinese restaurant meals and offered several guesses (search snippets say cooking wine, MSG and high sodium). NEJM ran ten replies a month later; Kean writes that "no two letter writers listed the same symptoms" [T]. Kean also covers Robert Olney's 1969 mouse experiments using injected doses "up to 7 milligrams per gram of body weight" [T], far beyond dietary exposure.
- The name itself carried an ethnic stigma that food writers and historians now note; a lesson should present that history plainly. (Kean's article discusses the 2018 claim that the Kwok letter was a prank by another doctor; I did not verify that claim and would leave it out.)

**Umami and Ikeda.**
- Kikunae Ikeda, Tokyo Imperial University, identified glutamate as the savoury taste of kombu broth in 1908 and patented MSG production (FDA page credits "a Japanese professor named Kikunae Ikeda" [T]). English translation of his 1909 paper: Ikeda K. "New seasonings." *Chem Senses* 2002;27(9):847-9, PMID 12438213, with commentary: Lindemann B, Ogiwara Y, Ninomiya Y. "The discovery of umami." *Chem Senses* 2002;27(9):843-4, PMID 12438211. PubMed records read (citation only; no abstract). Full text not read.
- Kean dates MSG's invention to "the early 1900s" [T] and notes Ikeda founded the company that became Ajinomoto.

---

### 6. Maillard browning, caramelisation, dry surfaces, crowding

**Classification: established.**

- **Temperatures.** Wikipedia, "Maillard reaction". https://en.wikipedia.org/wiki/Maillard_reaction . Read: partial. The reaction "typically proceeds rapidly from around 140 to 165 °C (280 to 330 °F)" [T]; described by Louis Camille Maillard in 1912; it needs amino acids and reducing sugars, and runs faster in alkaline conditions (why a pinch of baking soda speeds onion browning). It happens slowly at lower temperatures too (the browning of long-braised or slow-roasted meat), so "140°C" is a threshold for *fast* browning, not an on-switch. Acrylamide forms at high temperatures in starchy foods.
- Science of Cooking, "Important temperatures in cooking and baking" (no author or date). https://www.scienceofcooking.com/important_cooking_temperatures.htm . Read: partial. Browning "begins" at 285°F (140°C) [T].
- **Caramelisation is a different reaction** (sugar alone, no protein). Wikipedia, "Caramelization". https://en.wikipedia.org/wiki/Caramelization . Read: partial. Temperatures at which it proceeds readily: fructose 105°C, glucose 150°C, galactose 160°C, sucrose 170°C, maltose 180°C. Science of Cooking gives sucrose 160°C and fructose 110°C. The spread between sources is real; teach "sucrose caramelises around 160 to 170°C". (There is newer work arguing sucrose "caramelises" by slow thermal decomposition at lower temperatures given time; I did not fetch it.) Onions "caramelising" in a pan are mostly Maillard browning plus some caramelisation.
- **Why wet meat will not brown.** Physics, no single paper needed: a surface film of water cannot rise above 100°C at sea level until it has evaporated, and evaporating it takes a lot of energy (latent heat about 2,260 kJ/kg). Until the surface is dry it sits far below the 140°C where browning gets going. Hence pat dry, salt well ahead or not at all (3a), and dry uncovered in the fridge (Kenji via Wilson 2019).
- **Overcrowding.** ATK, "The Best Stainless-Steel Skillets" (equipment review, no author or date shown). https://www.americastestkitchen.com/equipment_reviews/1944-12-inch-stainless-steel-skillets . Read: partial. Four steaks on an 8-inch cooking surface: "the pan will struggle to recover its heat, so one side of the steaks will come out gray and steamed with sparse fond" [T]. Their preferred pans had 9.25 to 10.5 inches of flat cooking surface. Mechanism: cold food absorbs heat from the pan and releases water faster than it can evaporate, so the surface sits near 100°C.
- **A useful counterexample.** Dave Arnold, "Crowded Wet Mushrooms. A Beautiful Thing.", Cooking Issues, 21 December 2009. https://cookingissues.com/2009/12/21/crowded-wet-mushrooms-a-beautiful-thing/ . Read: partial. Soaked mushrooms crowded in one pan browned as well and tasted "better and less oily than their dry cousins" [T], because they collapse while steaming off their water and then absorb less oil. Mushrooms are mostly water and brown once it is gone; the rule "don't crowd" is about meat, where overcooking the interior while waiting for the water to go is the cost.

---

### 7. Heat transfer, the oven-hand puzzle, and pans

**Classification: established physics.**

- **Three modes.** Conduction (pan to food, and within food), convection (moving air, water or oil carrying heat), radiation (the glowing grill element, oven walls, a fire). Most cooking combines them.
- **Why 200°C oven air does not burn your hand but 100°C water does.** The rate of heat flow depends on the heat transfer coefficient as much as on temperature. Engineering ToolBox, "Convective Heat Transfer" (no date). https://www.engineeringtoolbox.com/convective-heat-transfer-d_430.html . Read: partial. Typical coefficients, W/(m²K): free convection in air 0.5 to 1,000 (the range for still air in practice is at the bottom, single digits to about 25); forced convection air 10 to 1,000; free convection water 50 to 3,000; forced water 50 to 10,000; boiling water 3,000 to 100,000; condensing steam 5,000 to 100,000 [T]. Illustrative figures for teaching (my arithmetic, stated as such): with still oven air at h ≈ 10 W/(m²K) and a 170°C difference from skin, heat flux ≈ 1.7 kW/m²; with boiling water at h ≈ 5,000 and a 65°C difference, ≈ 325 kW/m², about 200 times more. Steam is worse again because condensing on skin releases latent heat. This is also why a convection fan roasts faster, and why steam burns are so severe.
- **Pan materials.** Engineering ToolBox thermal conductivity (https://www.engineeringtoolbox.com/thermal-conductivity-metals-d_858.html , read partial), W/(m·K): copper 401; pure aluminium 236 (cookware alloys lower, roughly 150 to 220, not fetched); cast iron 52; carbon steel 54; stainless steel 304 about 14.4 [T]. Specific heat (https://www.engineeringtoolbox.com/specific-heat-metals-d_152.html , read partial), kJ/(kg·K): aluminium 0.91, cast iron 0.46, carbon steel 0.49, copper 0.39 [T]. Stainless is similar to carbon steel, about 0.5 (not in the fetched table; check).
- **What this means at the stove.**
  - Aluminium and copper spread heat sideways quickly, so they even out a burner's hot ring and respond fast when you turn the heat down.
  - Cast iron conducts about a quarter as well as aluminium, so it heats unevenly over a burner, but it is thick and heavy, so it stores a lot of heat and does not drop much when a steak goes in. Preheat it long (10 to 20 minutes over medium, or in the oven) to get it even. Source for "cast iron heats unevenly" and the 10 to 20 minute preheat: Sarah Biren, "The Truth About Cast Iron Pans: 7 Myths", TiffyTaffy (citing Kenji López-Alt), https://tiffytaffy.com/truth-about-cast-iron-pans/ , read partial; a weak secondary, but the physics supports it.
  - Stainless steel conducts poorly on its own, which is why good stainless pans are "clad" with an aluminium (or copper) core. ATK skillet review: "Aluminum conducts heat quickly, making the pan responsive to temperature changes; steel conducts slowly and retains heat" [T].
- **Preheating.** A pan needs time for heat to spread from the burner contact area. With cast iron in particular, putting food in a pan that is hot in the middle and cool at the edge gives patchy browning. See also the Serious Eats (Ibrahim) claim, reported secondhand, that a cold-start sear gave more tender results in one writer's trials; that is a single report and should not be taught as a rule.

---

### 8. Core technique science

#### 8a. Starch gelatinisation and rice

**Classification: established for the chemistry; the rinse question is a trade-off, not a myth.**
- Starch granules absorb water and swell when heated in water; for rice this happens roughly between the high 50s and high 70s °C depending on variety. Search snippets give 60 to 78°C for rice starch of about 20% amylose. The PMC paper I opened (Relationship of rice grain amylose, gelatinization temperature and pasting properties, PMC5167365, read partial) classes gelatinisation temperature by alkali-spreading score rather than degrees, and classes amylose content as very low 9 to 12%, low 12.1 to 20%, intermediate 20.1 to 25%, high above 25%. More amylose gives firmer, separate grains (long-grain); less gives sticky rice (sushi, glutinous). No clean °C table was read; cite a range, not a single number.
- **Rinsing.** ATK, "Do You Really Need to Rinse Your Rice?", Sawyer Hill, 26 October 2021. https://www.americastestkitchen.com/articles/3946-do-you-really-need-to-rinse-your-rice . Read: partial. Rinsing removes loose surface starch so white rice cooks up more separate; little effect on brown rice. ATK "The Best Way to Rinse Rice" (snippet only): a strainer under running water beat swishing in a bowl.
- **The nutrition cost of rinsing.** Gray PJ, Conklin SD, Todorov TI, Kasko SM (US FDA). "Cooking rice in excess water reduces both arsenic and enriched vitamins in the cooked grain." *Food Addit Contam A* 2016;33(1):78-85. PMID 26515534. Abstract read in full. "Rinsing rice before cooking has a minimal effect on the arsenic (As) content of the cooked grain, but washes enriched iron, folate, thiamin and niacin from polished and parboiled rice" [V]. Cooking in excess water (pasta-style, drained) cut inorganic arsenic "by 40% from long grain polished, 60% from parboiled and 50% from brown rice" [V], but cut iron, folate, niacin and thiamin by 50 to 70% in enriched rice. So in the US, where white rice is enriched, rinsing strips added vitamins; where rice is not enriched, the loss is small. Worth one honest sentence in a lesson.
- **Ratios and resting.** Absorption ratios vary by rice and pot (a typical long-grain white is about 1 : 1.5 by volume on the stovetop; ratios quoted on the internet range widely). I did not fetch an authoritative ratio test today; take ratios from ATK recipes during drafting. Resting off heat, covered, for about 10 minutes lets moisture even out through the grains; I did not fetch a test for this either.

#### 8b. Eggs

**Classification: established.**
- Science of Cooking temperatures page (above). "Ovalbumin begins to set at 180°F/80C while Ovotransferrin only begins to set when heated to 140°F/60C" [T]; whites thicken at about 63°C and are set at about 65°C; yolks set at about 70°C [T]. A secondary search snippet adds yolk thickens from about 65°C. Ovalbumin is about 54% of white protein and ovotransferrin about 12% (snippet). This is why a white can be just set while the yolk is runny, and why sous-vide eggs at 63 to 64°C give a soft white and jammy yolk.
- **Green ring.** University of Nebraska-Lincoln Extension, "How to Avoid a Green Ring on Hard-Boiled Egg Yolks", Alice Henneman, reviewed 2024. https://food.unl.edu/how-avoid-green-ring-hard-boiled-egg-yolks/ . Read: partial. "The ring is caused by a chemical reaction involving sulfur (from the egg white) and iron (from the egg yolk), which naturally react to form ferrous sulfide at the surface of the yolk" [T]. Harmless. Prevent by not overcooking and by cooling fast in cold or iced water. Older eggs (more alkaline whites) green faster (search snippet).

#### 8c. Emulsions

**Classification: established.**
- An emulsion is droplets of one liquid dispersed in another that would otherwise separate. Emulsifiers (in egg yolk, lecithin and lipoproteins; in mustard, mucilage) coat droplets and keep them apart.
- Mayonnaise: oil droplets in the water of yolk and lemon or vinegar; breaks if oil is added faster than it can be broken into droplets, or if the ratio of oil to water gets too high. Fix by starting again with a fresh yolk or a spoon of water and whisking the broken sauce in slowly.
- Vinaigrette: a temporary emulsion; mustard or honey helps it hold.
- Hollandaise: warm emulsion of butter in yolk; breaks if it gets too hot (yolk proteins set) or too cold (butter solidifies). Search snippets (not opened; FineCooking "Too Hot for Hollandaise" refused connection): yolks curdle around 160 to 170°F (71 to 77°C); acid raises that; working window roughly 55 to 75°C. Numbers to be confirmed from McGee in print.
- I did not fetch a primary source for emulsion science today. McGee's *On Food and Cooking* chapter on sauces is the standard reference to cite.

#### 8d. Gluten and no-knead bread

**Classification: established.**
- Flour, water, salt, yeast. Glutenin and gliadin form gluten when wetted and worked; kneading organises it, but time does much of the same work.
- **J. Kenji López-Alt, "No-Knead Bread 2.0", Cook's Illustrated / ATK, 1 January 2008.** https://www.americastestkitchen.com/articles/41-no-knead-bread-2-dot-0 . Read: partial. Describes the Lahey/Bittman recipe: minimal yeast, a 12 to 18 hour rest, baked in a covered Dutch oven. Hydration 85%, "for every 10 ounces of flour, there are 8.5 ounces of water" [T]. Why it works: during the long rest, enzymes in the flour cut protein bundles into shorter pieces that can line up and cross-link without kneading (autolysis). ATK's version lowered hydration to about 70%, added 15 seconds of kneading, beer and vinegar for flavour, and cut the rest to 8 hours.
- Mark Bittman, "The Secret of Great Bread: Let Time Do the Work", *New York Times*, The Minimalist column, 8 November 2006, on Jim Lahey of Sullivan Street Bakery. NYT **blocked**; date and headline from search snippets. Lahey's own book *My Bread* (2009) is the primary for the method.
- Salt tightens gluten and slows yeast; it is added at about 1.5 to 2% of flour weight in most breads (common baker's percentage; not fetched today).

#### 8e. Stock

**Classification: established.**
- Collagen in bones, skin and connective tissue converts to gelatin with long moist heat; Science of Cooking gives collagen "begins to dissolve to gelatin" at about 160°F/70°C [T]. Gelatin gives body and makes a cold stock set.
- ATK, "For a Clearer Stock, Simmer; Don't Boil" (no author or date). https://www.americastestkitchen.com/how_tos/9260-for-a-clearer-stock-simmer-dont-boil . Read: partial. "Boiling will cause soluble proteins and rendered fat to emulsify into the cooking liquid. By simmering, you avoid emulsifying the fat and thus keep the stock clearer, and we found that the scum created simply settled to the bottom of the pot" [T]. ATK elsewhere (snippet) defines a simmer as about 180 to 190°F.
- Cloudiness is a matter of looks and a slightly greasier mouthfeel, not safety.

#### 8f. Pan sauce: fond, deglazing, reducing, mounting with butter

**Classification: established practice.**
- ATK, "Pan Sauces 101" (no author or date). https://www.americastestkitchen.com/cooksillustrated/how_tos/5551-pan-sauces-101 . Read: partial. Fond is "the browned bits, clinging to the bottom of the skillet" [T]; deglazing adds liquid (wine, stock) and scrapes it up; reduce to concentrate and thicken; finish by whisking in butter. "Cold butter is easier to incorporate into a sauce than softened butter and it makes for a sturdier emulsion that is more resistant to separation" [T]; cut in tablespoon-size pieces.
- Why it works: butter is itself an emulsion of fat in water with milk proteins; whisked cold into a hot but not boiling reduction, its fat disperses as droplets held by the proteins and any gelatin from the stock. Boil it and the emulsion breaks into a greasy layer.
- A pan that has not browned (crowded, wet meat, section 6) leaves no fond, so crowding costs you the sauce as well as the crust.

---

### 9. Knife sharpness

**Classification: "a sharp knife is safer than a dull one" is plausible and well supported indirectly (force, control, strain), but I found no study directly comparing injury rates. Call it expert consensus with mechanistic support, not a tested fact.**

- **McGorry RW, Dowd PC, Dempsey PG. "Cutting moments and grip forces in meat cutting operations and the effect of knife sharpness." *Appl Ergon* 2003;34(4):375-82. PMID 12880746.** Liberty Mutual Research Center for Safety and Health. Abstract read in full. 15 professional meat cutters in two plants. Mean grip force 28.3% and peak 72.6% of maximum voluntary contraction. "Blade sharpness was found to effect grip forces, cutting moments and cutting time, with sharper blades requiring statistically significantly lower peak and mean cutting moments, and grip forces than dull knives" [V].
- **Dempsey PG, McGorry RW. "Investigation of a pork shoulder deboning operation." *J Occup Environ Hyg* 2004;1(3):167-72. PMID 15204874.** Abstract read. Nine workers; average grip forces 11 to 35% of maximum; knife sharpness varied among workers over a 5-hour shift.
- **Marsot J, Claudon L, Jacqmin M. "Assessment of knife sharpness by means of a cutting force measuring system." *Appl Ergon* 2007;38(1):83-9. PMID 16579952.** French INRS. Abstract read. Frames knife sharpness in terms of musculoskeletal disorders in the meat industry.
- The argument from these: a dull knife needs more force, more force means less control and more chance of slipping, and when it slips it carries more momentum. The evidence is from meatpacking ergonomics (strain injuries), not home-kitchen laceration counts. A cut from a sharp knife is cleaner; one from a dull knife is more likely to happen in the first place. Knife-seller blogs claiming "3 to 5 times more pressure" and "backed by ER data" appeared in search results and should not be cited.
- **Honing versus sharpening.** Wikipedia, "Honing steel". https://en.wikipedia.org/wiki/Honing_steel . Read: partial. A smooth steel "removes no material; instead it fixes deformations along the edge of a sharp blade" [T], so it cannot restore a blunt edge; ceramic and diamond rods are abrasive and do remove metal. It cites John Verhoeven, "Experiments on Knife Sharpening" (Iowa State University, 2004), which used electron microscopy on edges; I did not read Verhoeven today and he is the primary to fetch. Teaching line: hone often to straighten a rolled edge; sharpen (stone or sharpener, removing metal) occasionally when honing no longer helps.

---

### 10. Other common myths

#### 10a. "Salt makes water boil faster"
**Folklore.** See 3g: salt raises the boiling point by about 0.1 to 0.4°C at cooking concentrations. It does not speed boiling.

#### 10b. "Never wash mushrooms"
**Folklore for common button and cremini mushrooms; partly true for open-gilled types.**
- *Good Eats* "Myth Smashers" (Chauvin recap, 2019, read partial): 4 oz of mushrooms gained 0.2 oz after 10 minutes' soaking, 0.25 oz after 20 minutes, 0.15 oz after 30 minutes, and 0.2 oz from a rinse under running water; about a teaspoon each time. As a percentage: roughly 4 to 6% of weight.
- ATK, "Should You Wash Mushrooms?" (no author or date). https://www.americastestkitchen.com/how_tos/11827-should-you-wash-mushrooms . Read: partial. One-minute soak of white, cremini, portobello, shiitake, oyster and maitake: closed-gill mushrooms took up "almost no water" [T]; exposed-gill mushrooms absorbed "as much as 25 percent of their weight in liquid" [T]. About 1 tablespoon per pound for white mushrooms against about ¼ cup per pound for oysters.
- Dave Arnold (Cooking Issues, 2009, above): "The soaked mushrooms do take on water, but that water cooks off in the pan" [T].
- Lesson line: rinse closed button and cremini mushrooms just before cooking; brush or wipe open-gilled ones (oyster, maitake, big portobellos).

#### 10c. "The avocado pit stops guacamole browning"
**Folklore.** It protects only the patch it covers, by keeping air off.
- Elana Spivack, "Do avocado pits keep guacamole fresh?", *Inverse*, 12 February 2022. https://www.inverse.com/science/do-avocado-pits-keep-your-guac-fresh . Read: partial. Food scientist Karen Schaich of Rutgers: "There was nothing in the pit that I knew of that should have inhibited the enzyme, so it had to be the oxygen" [T]. Browning is polyphenol oxidase acting on phenolic compounds in the presence of oxygen. What works: plastic wrap pressed onto the surface, or a thin layer of water or lime juice poured on top and poured off before serving; acid slows the enzyme.
- Live Science piece (https://www.livescience.com/33660-guacamole-avocado-pit-prevent-brown.html) returned only a headline; not read.

#### 10d. "Rinse pasta after cooking"
See 3f. Folklore for hot dishes; sensible for cold salads.

#### 10e. "Bring meat to room temperature before cooking"
**Folklore as usually stated.** A thick steak barely warms in the time people leave it out.
- Kenji López-Alt's test (Serious Eats, blocked), as reported by Audrey Wilson, *Hawaii Tribune-Herald*, 19 February 2019 (read partial). A thick-cut strip steak from the fridge rose by less than 2°F after 20 minutes, and by only about 10°F after 2 hours, which Wilson describes as "a little more than 10 percent of the way toward the final serving temperature of 130 degrees" [T]. A search snippet (not opened) gives the end point as 49.6°F after 1 hour 50 minutes. The cooked comparison showed no meaningful difference; drying the surface mattered much more.
- Leaving raw meat out for 2 hours also runs against the USDA 2-hour rule for perishable food. Any lesson should say so.

#### 10f. "Flip a steak only once"
**Folklore.** Frequent flipping browns as well, cooks faster and more evenly.
- Leah Collin (byline as returned by the fetch tool; check spelling), "For the Juiciest Steaks With the Best Crust, I Always Break This Classic Cooking Rule", Serious Eats, syndicated on Yahoo, 15 July 2026. https://www.yahoo.com/lifestyle/articles/juiciest-steaks-best-crust-always-210000151.html . Read: partial. Reports Harold McGee's finding that frequent flipping browns as well as a single flip, and Kenji's burger test: flipped every 15 seconds, burgers "cooked in about two-thirds the time, and had roughly 40% less overcooked meat around the edges" [T]. Recommends flipping every 30 to 60 seconds; says the difference is "noticeable but a bit subtle" [T].
- McGee's original (his NYT Curious Cook column, around 2008) not read. Mechanism: each side alternately takes heat from the pan and loses a little to the air, so heat moves into the meat more evenly, like cooking from both sides at once.

#### 10g. Cast iron: "naturally non-stick", "never use soap"
**Folklore, both, in their strong forms.**
- Lodge Cast Iron, "How to Season" (no date). https://www.lodgecastiron.com/pages/how-to-season . Read: partial. "Seasoning is just oil baked onto the pan through a process called polymerization" [T]; "Use warm, soapy water to wash your pan" [T]; to season, bake at 450 to 500°F for 1 hour. The maker itself says soap is fine.
- The soap myth dates from soaps made with lye (strong alkali), which can strip seasoning. Modern dish liquid is a mild detergent; it removes grease but not polymerised oil (Biren/TiffyTaffy citing Kenji, read partial; Kenji is quoted: "The same way we can use soap inside a Tupperware container without taking the plastic away, you can use it on a cast-iron pan without removing the seasoning" [T]). What does strip seasoning: long soaking, the dishwasher, oven-cleaner, and long simmering of acidic food.
- Cast iron is not naturally non-stick. Bare iron sticks badly; a good seasoning is fairly slick but less so than PTFE (Teflon). Preheating properly helps.

#### 10h. Microwaves "destroy nutrients" and "cook from the inside out"
**Folklore, both.**
- US FDA, "Microwave Ovens" (radiation-emitting products page). https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens . Read: partial. "When thick foods are cooked, the outer layers are heated and cooked primarily by microwaves while the inside is cooked mainly by the conduction of heat from the hot outer layers" [T]. On nutrition: "Microwave cooking does not reduce the nutritional value of foods any more than conventional cooking. In fact, foods cooked in a microwave oven may keep more of their vitamins and minerals, because microwave ovens can cook more quickly and without adding water" [T]. Leakage limit 5 mW/cm² at about 2 inches, 21 CFR 1030.10.
- NC State Extension (Brunswick County), "Microwave Mythbusters", Cheryle Syracuse, 16 January 2024. https://brunswick.ces.ncsu.edu/2024/01/microwave-mythbusters/ . Read: partial. Microwaves "can only penetrate food to a depth of ¾ to 1½ inches" [T]; the centre cooks last, by conduction.
- Harvard Health, "Microwave cooking and nutrition", 17 August 2021 (no author). https://www.health.harvard.edu/staying-healthy/microwave-cooking-and-nutrition . Read: partial. Agrees microwaving with little water keeps more vitamin C than boiling. Note: this page uses the phrase "steams food from the inside out" loosely; do not cite it for the physics.
- Teaching point: nutrient loss depends on time, temperature and water, not on microwaves as such. Boiling leaches water-soluble vitamins into the water; microwaving and steaming lose less.

#### 10i. "Wooden boards are less hygienic than plastic"
**Folklore as a general claim; the evidence favours neither material strongly, and cleaning habits matter more.**
- **Ak NO, Cliver DO, Kaspar CW. "Cutting boards of plastic and wood contaminated experimentally with bacteria." *J Food Prot* 1994;57(1):16-22. PMID 31113021.** University of Wisconsin-Madison. Abstract read in full. Nine hardwoods and four plastics plus hard rubber, new and used; E. coli (including O157:H7), Listeria and Salmonella. Clean wood absorbed the inoculum within 3 to 10 minutes; at 10³ to 10⁴ CFU bacteria "generally could not be recovered after entering the wood" [V]; at 10⁶ CFU some survived 12 hours, but numbers were "reduced by at least 98%, and often more than 99.9%" [V]. Bacteria on plastic survived and multiplied overnight if kept moist. Conclusion: "These results do not support the often-heard assertion that Plastic cutting boards are more sanitary than wood" [V].
- **Ak NO, Cliver DO, Kaspar CW. "Decontamination of plastic and wooden cutting boards for kitchen use." *J Food Prot* 1994;57(1):23-30. PMID 31113026.** Abstract read. New plastic was easy to clean; knife-scarred plastic was hard to clean by hand, especially with chicken fat on it. Hot water and detergent cleaned wood regardless of species.
- **Cliver DO. "Cutting boards in Salmonella cross-contamination." *J AOAC Int* 2006;89(2):538-42. PMID 16640304.** By then at UC Davis, School of Veterinary Medicine. Abstract read. Summarises: knife-scarred plastic is hard to disinfect and HDPE delaminates; bacteria drawn into wood by capillary action are not killed at once but do not return to the surface, and "resurrection of these bacteria via knife edges has not been demonstrated" [V]; dishwashers can spread bacteria to other surfaces. It cites two epidemiological studies in which board-cleaning habits had little effect on sporadic salmonellosis, one of which "indicated that use of plastic cutting boards in home kitchens is hazardous, whereas use of wooden cutting boards is not" [V]. That epidemiological study is not identified in the abstract; find it before quoting it as a finding.
- **Aviat F, et al. "Microbial safety of wood in contact with food: a review." *Compr Rev Food Sci Food Saf* 2016;15(3):491-505. PMID 33401823.** Abstract partly read (truncated). A review supportive of wood as a food-contact material in general.
- **Counterweight:** Hong Kong wet-market studies (Lo et al. 2019, *Front Microbiol*, PMID 31781084; Sekoai et al. 2020 and Ngan et al. 2020, *Microorganisms*, PMIDs 32316436 and 33297499; abstracts read) found pathogens and biofilm-formers on wooden boards cleaned by traditional scraping. These show that poor cleaning fails on wood as on anything, not that wood is worse than plastic; they did not compare materials.
- Lesson line: either material is fine if washed with hot soapy water and dried; replace plastic boards when deeply scarred; keep a separate board for raw meat. That last point is the one that matters.

---

### Summary table

| Claim | Verdict | Best source read today |
|---|---|---|
| Searing seals in juices | Folklore | ATK 8-steak test, ~22% loss both ways |
| Resting lets juices reabsorb | Folklore (resting as temperature control: established) | Gritzer, Serious Eats 2025 (via AOL) |
| Salt 40+ min ahead or just before | Established in outline, timings from one experimenter | Kenji via secondaries |
| Salt beans in soak | Established (salt helps) | ATK |
| Pasta water "salty as the sea" | Folklore (sea 3.5%; cooks use ~0.5 to 2%) | NOAA, ATK |
| Pasta needs lots of water | Folklore | McGee NYT 2009 (full text); ATK 2023 |
| Oil in pasta water | Folklore | ATK; Good Eats |
| Salt makes water boil faster | Folklore (raises bp ~0.1 to 0.4°C) | Calculation |
| Cold water boils faster | Folklore (use cold for lead reasons) | EPA |
| Alcohol cooks off | Folklore (85% to 5% retained) | USDA Release 6 table (full) |
| MSG causes illness | Folklore as a general claim | Geha 2000; FSANZ 2003 (full); FDA |
| Wet meat browns | Folklore (surface capped at 100°C) | Physics; Maillard ~140 to 165°C |
| Sharp knife safer | Plausible, indirect evidence | McGorry 2003 |
| Never wash mushrooms | Folklore for closed caps | Good Eats; ATK |
| Pit saves guacamole | Folklore | Schaich via Inverse |
| Room-temperature meat | Folklore | Kenji via Hawaii Tribune-Herald |
| Flip once | Folklore | McGee/Kenji via Serious Eats 2026 |
| No soap on cast iron | Folklore | Lodge |
| Microwaves cook inside out / kill nutrients | Folklore | FDA |
| Wood less hygienic than plastic | Folklore | Ak, Cliver, Kaspar 1994; Cliver 2006 |

---

### Not read

- **Serious Eats, every article (publisher blocks automated access; HTTP 402 / 451; I did not circumvent):** Kenji López-Alt, "The Food Lab: 7 Old Wives' Tales About Cooking Steak" (2013); Kenji's original resting-meat article (about 2010); "Perfect Pan-Seared Steaks" (salting timing); Kenji's bean-salting and pasta-water articles; Kenji's cast-iron myths article; Daniel Gritzer's resting article on seriouseats.com (read only its AOL syndication). The 1.68% sear-first figure and the 49.6°F room-temperature figure are search-snippet only.
- **NEJM,** Kwok RHM, "Chinese-Restaurant Syndrome", 1968;278:796 (403).
- **J Am Diet Assoc,** Augustin et al. 1992 abstract page (403). PubMed record read; numbers taken from the USDA table instead.
- **J Allergy Clin Immunol** full text of Geha 2000 (403); abstract read via PubMed.
- **European Journal of Clinical Nutrition,** "Consensus meeting: monosodium glutamate, an update" (2007) (login redirect).
- **New York Times,** Mark Bittman, "The Secret of Great Bread: Let Time Do the Work" (8 November 2006), and McGee's Curious Cook column on flipping (blocked). McGee's 2009 pasta column was read through a hosted PDF copy.
- **The Kitchn,** "Think Salt is the Enemy of Perfect Beans? Think Again." (403).
- **FineCooking,** "Too Hot for Hollandaise" (connection refused). Hollandaise temperatures are snippet-only.
- **Curious Cook (curiouscook.com)** 2009 post (expired certificate).
- **Live Science** avocado pit article (only headline returned).
- **Hong Kong Centre for Food Safety** microwave page (DNS failure).
- **Wayback Machine** (connection refused all day).
- **Books not consulted:** Harold McGee, *On Food and Cooking* (2004); J. Kenji López-Alt, *The Food Lab* (2015); Jim Lahey, *My Bread* (2009); Amy Brown, *Understanding Food* (2008). These are the primaries for egg, emulsion, stock and carryover figures and should be checked in print.
- **Not fetched at all:** Ikeda 1909 full text (Chem Senses 2002 translation, citation only); Lindemann et al. 2002 full text; Verhoeven 2004, "Experiments on Knife Sharpening"; the 1930 University of Missouri searing study; the epidemiological cutting-board studies Cliver 2006 refers to; any controlled test on acid slowing bean softening; any authoritative rice-to-water ratio or rice-resting test; the Raab et al. 2009 arsenic study (snippet only); research on low-temperature sucrose decomposition.

---

## Cooking Fundamentals, Stage 1 research, Part D: physical kitchen safety and the contested questions

Researcher notes. All reading done 2026-09-24. Classification key: **Established** (regulators and evidence agree; teach as fact), **Contested empirical** (a factual question where serious people disagree or evidence is thin), **Value** (the facts are roughly agreed; the disagreement is about how to weigh risk, cost, choice or tradition).

How to read the "read" field:
- **full (curl)**: I downloaded the page and searched the raw text myself. Quotations from these are verbatim.
- **full (fetch tool)**: read through the WebFetch tool, which returns a model-written digest with quotations. Quotations are very likely verbatim but were not checked character by character; recheck before a lesson quotes them.
- **abstract**: PubMed or Semantic Scholar abstract only, fetched as text; quotations verbatim.
- **snippet**: search-engine summary only. Nothing from these is in quotation marks.
- **Wayback**: the live site blocked me, so I read an Internet Archive snapshot; snapshot timestamp given.

---

### 1. Knife safety and technique (Established)

#### Sources

**OSHA, "Young Worker Safety in Restaurants eTool: Food Preparation"** (section "Knives and Cuts").
URL: https://www.osha.gov/etools/young-workers-restaurant-safety/food-prep
Body: US Occupational Safety and Health Administration. No page date found in the text I extracted. Read: full (curl). The URL first tried (.../food-prep/knives) returns "File Not Found"; the knife material now sits on the food-prep page.
Verbatim, in order:
- "Cut in the direction away from the body. Keep your fingers and thumbs out of the way of the cutting line."
- "Let a falling knife fall. Do not try to catch it."
- "Carry knives with the cutting edge angled slightly away from your body, with the tip pointed down to your side."
- "Place a knife that you are handing to someone, down on a clean surface, and let the other person pick it up."
- "Clean the knife immediately after use or place it in a dishwasher or a container labeled "for knives only.""
- "Do not store knives and other sharp objects in sinks between periods of use."
- "Keep knives sharpened and in good condition; dull knives tend to slip and may cause injuries."
- "When interrupted, stop cutting and place the knife down on a secure surface."
Note for the lesson: this is workplace guidance for teenage restaurant workers, so "cut away from the body" is written for trimming and boning. The home-cook version is really "keep the guiding hand out of the cutting line", which the claw does.

**America's Test Kitchen, "A Guide to Using Your Chef's Knife"**, Liz Bomze, 5 December 2018.
URL: https://www.americastestkitchen.com/articles/1362-a-guide-to-using-your-chef-s-knife
Read: full (fetch tool).
- Pinch grip: "Pinch the blade where it meets the handle with your thumb and forefinger. This grip, our go-to for most cutting tasks, allows you to choke up on the blade to get leverage over the whole length of the knife."
- Handle grip: feels most secure to beginners but, in ATK's words, "it doesn't offer the control over the tip that is needed to make precision cuts."
- Claw: "Curve your fingers into a claw on top of the food, making sure to tuck your thumb behind them and pressing down to hold the food in place. This position allows your knuckles to help guide the side of the blade while your fingertips stay out of harm's way."
- Does not mention a damp towel.

**University of Kentucky, "Knife Skills" handout** (Eat Well UK). File path dated 2023-03; no author named.
URL: https://eatwell.uky.edu/sites/default/files/2023-03/knife%20skills-3.pdf
Read: full (PDF text extracted with pdftotext).
- Board: "if find that your cutting board moves around while using it, place a damp towel or paper towel underneath your board. You can also purhase an anti-slip mat." (typos are in the original)
- Flat surface: "Create flat, stable surface by cutting food in half or removing thin slice from bottom."
- Knife care: "hand wash and dry right away".
- Its grip and claw paragraphs repeat the ATK wording almost word for word, so it is not independent of ATK. It is the only fetched source I have for the damp towel. **Serious Eats could not be read**: the search tool refuses the domain (seriouseats.com blocks the crawler). BBC Good Food search results did not surface a knife page.

**Escoffier School of Culinary Arts, "Knife Skills: 10 Knife Cuts Every Professional Cook Should Know"**, Escoffier Team, 7 March 2024, updated 26 March 2026.
URL: https://www.escoffier.edu/blog/culinary-arts/8-knife-cuts-every-professional-cook-should-know/
Read: full (fetch tool). Stated sizes:
- Julienne: 1/8 in x 1/8 in x 2 1/2 in (fine julienne 1/16 in)
- Batonnet: 1/4 in x 1/4 in x 2 1/2 in
- Brunoise: 1/8 in cubes
- Small dice 1/4 in; medium dice 1/2 in; large dice 3/4 in to 1 in
- Mince, chiffonade, bias, oblique, lyonnaise, tournee: no fixed size given.
Metric (my conversions, not the source's): 1/8 in = 3 mm; 1/4 in = 6 mm; 1/2 in = 12 to 13 mm; 3/4 in = 19 to 20 mm. A search snippet from Wikipedia's "List of culinary knife cuts" gave small dice as 1/4 in "(5 mm)", which is a rounding inconsistency; use 6 mm or say "about 5 to 6 mm". The American sizes are the classical French ones rounded to inches; CIA's own textbook was not read.

**Smith GA, "Knife-related injuries treated in United States emergency departments, 1990-2008"**, J Emerg Med 2013;45(3):315-23. PMID 23849364.
Read: abstract. (The citation suggested in the research brief, "Chang et al 2016 Am J Emerg Med", I could not find; this Smith paper is the NEISS knife-injury epidemiology study that exists.)
- "averaging 434,259 (95% CI 427,198-441,322) injuries annually, or 1190 per day."
- Fingers or thumbs 66%; lacerations 94%.
- "Pocket/utility knives were associated with injury most often (47%; 1,169,960 of 2,481,994), followed by cooking/kitchen knives (36%; 900,812 of 2,481,994)."
- Caveat: knife type was known for only about 2.5 million of 8.25 million injuries, so "36% kitchen knives" is of the typed subset. Data are old (to 2008). Do not use the "326,000 ER visits" figure that appeared in a search snippet: it comes from a commercial blog ("Cambom"), not NEISS directly.

#### What the lesson can say
The claw, a pinch grip, a stable board, a flat side down, a sharp knife, letting a falling knife fall, and never leaving a knife in a sink of water are uniform across OSHA, a test kitchen and extension teaching. Nobody disputes any of it. The sharp-knife claim ("dull knives tend to slip") is stated by OSHA as a practice rule; I found no controlled study, so present it as the standard professional advice with its mechanism (a dull blade needs more force and skids off skins), not as a measured effect.

---

### 2. Fire and burns

#### 2a. Cooking fires (Established on the facts; one real difference of advice between US and UK)

**NFPA, "Home Cooking Fires" research report page** (key findings).
URL: https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/home-cooking-fires
Read: full (curl; the WebFetch tool saw only the title). Data years 2017 to 2021.
- "During 2017–2021, cooking was the leading cause of reported home fires and home fire injuries and the second leading cause of home fire deaths." (footnote markers removed)
- "Cooking caused an average of 158,400 reported home structure fires per year (44 percent of all reported home fires in the US). These fires resulted in an average of 470 civilian deaths (18 percent of all home fire deaths) and 4,150 civilian injuries (42 percent of all reported home fire injuries) annually."
- "Unattended cooking was the leading factor contributing to cooking fires and casualties."
- "More than half of the non-fatal injuries occurred when people tried to control the fire themselves."
- "Households with electric ranges had a higher risk of cooking fires and associated losses than those with gas ranges."
A search snippet reported a newer NFPA edition (2019 to 2023: 159,400 fires, 430 deaths, 3,850 injuries; cooking third leading cause of deaths). I did not read that edition; the lesson should cite whichever it reads and say which years.

**NFPA, "Cooking safety" consumer page.**
URL: https://www.nfpa.org/education-and-research/home-fire-safety/cooking
Read: full (curl). No visible date.
- "Cooking fires are the number one cause of home fires and home injuries. The leading cause of fires in the kitchen is unattended cooking."
- "Just get out! When you leave, close the door behind you to help contain the fire."
- "Keep a lid nearby when you're cooking to smother small grease fires. Smother the fire by sliding the lid over the pan and turn off the stovetop. Leave the pan covered until it is completely cooled."
- "For an oven fire, turn off the heat and keep the door closed."
- "If you see wisps of smoke or the oil smells, immediately turn off the burner and/or carefully remove the pan from the burner. Smoke is a danger sign that the oil is too hot."
- "Never throw water on the fire."

**US Fire Administration (FEMA), "Cooking Fire Safety."**
URL: https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/cooking/
Read: full (fetch tool). Page date 4 May 2023.
- "Keep a pan lid or baking sheet nearby. Use it to cover the pan if it catches on fire."
- "In 2021, fire departments in the United States responded to an estimated 170,000 home cooking fires. These fires caused an estimated 135 deaths, 3,000 injuries and over $494 million in property loss." (USFA counts differ from NFPA because of method; do not mix them in one sentence.)
- Says nothing about baking soda, salt or flour.

**US CPSC, "Recipe for Safer Cooking."**
URL: https://www.cpsc.gov/safety-education/safety-guides/home-fire/recipe-safer-cooking
Read: full (fetch tool). No page date.
- "Slide a pan lid over flames to smother a grease or oil fire, then turn off the heat and leave the lid in place until the pan cools."
- "Never carry the pan outside."
- "Extinguish other food fires with baking soda."
- "Never use water or flour on cooking fires."
- "Keep the oven door shut and turn off the heat to smother an oven or broiler fire."
This is the only regulator page I read that names baking soda and flour. Salt: no regulator page read; only non-authoritative search snippets. Leave salt out, or say "some fire services also mention salt" only after reading one.

**London Fire Brigade, "Pan fires: What to do if a pan catches fire?"**
URL: https://www.london-fire.gov.uk/safety/the-home/cooking/pan-fires/
Read: full (curl; the URL I was given, /cooking-and-kitchen-fire-safety/, returns 404). No date on page.
- "Don't tackle the fire yourself and don't try to move the pan. Never throw water over a fire as it could create a fireball. Turn off the heat, to stop the fire from growing, but only if it's safe to do so. Leave the room, close the door, warn others, and call 999 for emergency services."
- Linked page teaser: "Around 60% of fires in the home start in the kitchen." Deep fat fryer page teaser: "In 2019, we attended 70 fires started by deep fat fryers".

**The wet tea towel.** Search snippets (cooksinfo.com, safelincs, Oxfordshire leaflet) say the UK government withdrew the damp tea towel advice in 2008 and the national Fire Kills line became get out, stay out, call 999. Read: snippet only. I did not find the government notice itself. The LFB page above is consistent with it (no mention of any towel; "don't tackle the fire yourself"). Safe to say: UK fire services no longer advise a damp towel and say a few drops of water on burning oil can cause a fireball. Do not put a date on the withdrawal without a primary source.

**FSIS, "Deep Fat Frying."**
URL: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/deep-fat-frying
Read: Wayback (snapshot 20260923031306; live site returns Access Denied). Last Updated 9 August 2024.
- "When water encounters very hot oil (about 350 °F) water vaporizes instantaneously turning into super heated steam. It expands quickly, which can cause oil to splatter and risk bodily injury."
- "In the event of a grease fire, never use water to put out the fire."
- "At the "smoke point," the oil begins to break down and can have a foul odor or taste."
- Its table of approximate smoke points: peanut, safflower, soybean 450 F; grapeseed 445 F; canola 435 F; corn, olive, sesame, sunflower 410 F. Caution for the lesson: published smoke points vary widely by refinement (extra virgin olive oil is often listed far lower than 410 F). FSIS gives one figure per oil with no refinement grade. Present as approximate and say refined oils smoke higher.
- Recommends having "a kitchen fire extinguisher available when deep-frying."

**Classification and the fair summary.** The facts are Established: cooking is the leading cause of home fires and fire injuries (US) and most home fires start in the kitchen (London); unattended cooking is the main factor; water on burning oil is dangerous; flour is not a smothering agent; oven fires are handled by closing the door and cutting the heat. There is one **Value**-type difference between agencies: US bodies (NFPA, USFA, CPSC) tell you to slide a lid on a small pan fire and turn off the heat; the London Fire Brigade tells you not to tackle it, not to move the pan, turn off the heat only if safe, leave and call 999. NFPA itself adds "Just get out!" and reports that more than half of non-fatal cooking fire injuries happen to people fighting the fire. A fair lesson teaches both: a lid kept beside the pan can smother a small, just-started fire; anything beyond that, or any doubt, means leave, close the door, call the fire service. Never carry the pan.

#### 2b. Burn first aid (Established)

**NHS, "Burns and scalds."**
URL: https://www.nhs.uk/conditions/burns-and-scalds/
Read: full (fetch tool). Page last reviewed 31 March 2026.
- "Hold the burn or scald under cool running water for 20 minutes. Do this as soon as possible, within 3 hours of it happening."
- "do not put any creams, oils or butter on burns or scalds"
- "When the burn or scald has cooled, lay cling film over it if you can. Do not wrap the cling film around it."
- Ice is not mentioned on the part the tool returned. Go to A&E or call 999 for large or deep burns, burns on the face, genitals or bottom, chemical or electrical burns.

**American Red Cross, "Burns" (Learn First Aid).**
URL: https://www.redcross.org/take-a-class/resources/learn-first-aid/burns
Read: Wayback (snapshot 20260117094816; live site returns 403).
- Thermal burns: "Cool the burn as soon as possible under clean, cool, running water for 20 minutes. If clean, cool, running water is not available, use clean, lukewarm water or apply a cool or cold compress. Never use ice, ice water, or a freezing compress to cool a burn."
- "Butter, mayonnaise, petroleum jelly or any other greasy substance does not help relieve pain or promote healing. Using a greasy substance can seal in the heat and make the burn worse."
- Go to hospital if, among other things, "A child has been burned. The burn blisters." or the burn covers hands, feet, joints, face, neck or genitals.

**2024 American Heart Association and American Red Cross Guidelines for First Aid**, Circulation, published 2024 (PubMed date 10 Dec 2024), doi 10.1161/CIR.0000000000001281.
Read: snippet only (the journal and the AHA highlights PDF both blocked). Snippets say 10 to 20 minutes of cool running water. The Red Cross public page now says 20 minutes, which matches the NHS. Teach 20 minutes.

#### 2c. Oil temperature and home deep frying
Covered by FSIS and NFPA above: heat oil gradually, never leave it, smoke is the warning sign, keep water away from hot oil, lid within reach. Deep frying in a pan of oil on a hob is exactly what UK services call a chip pan; LFB's figure of 70 fryer fires in one year in London is the only local number I have.

---

### 3. Contested and confused questions

#### 3a. Nonstick coatings (PTFE), PFOA and PFAS

**Classification.** Three questions are mixed together, and they sort differently:
1. Does cooking on an intact PTFE pan at normal temperatures put a meaningful dose of PFAS into food? **Established (low)** as far as the FDA is concerned; the evidence that would overturn it does not exist yet.
2. Is overheating a PTFE pan harmful? **Established**: above roughly 260 C the coating degrades; the fumes kill pet birds and can cause a short flu-like illness in people.
3. Should PTFE cookware be sold at all, given PFAS pollution from making and disposing of fluoropolymers? **Value** with a contested empirical core (life-cycle emissions and the toxicity of replacement processing aids).

**FDA, "Authorized Uses of PFAS in Food Contact Applications."**
URL: https://www.fda.gov/food/process-contaminants-food/authorized-uses-pfas-food-contact-applications
Read: full (curl). "Content current as of: 01/03/2025".
- "Of these uses, current data available to the FDA indicate that only paper and paperboard agents would result in dietary exposure to PFAS that may result in a potential safety concern"
- On pans: "PFAS molecules are polymerized* (i.e., joined together to form large molecules) and are then applied to the surface of the cookware at very high temperatures, which tightly binds the polymer coating to the cookware. The manufacturing process vaporizes off virtually all the smaller (i.e., migratable) PFAS molecules."
- Via fetch tool: "Studies show negligible amounts of PFAS in this coating can migrate to food."
- February 2024: PFAS grease-proofing agents for paper no longer sold into the US market; January 2025 notice ending the 35 related notifications.

**EPA, "Risk Management for Per- and Polyfluoroalkyl Substances (PFAS) under TSCA"** (the 2010/2015 PFOA Stewardship Program).
URL: https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-and-polyfluoroalkyl-substances-pfas
Read: full (fetch tool). Last updated 26 March 2026.
- Eight companies, including DuPont, 3M/Dyneon, Daikin, Solvay Solexis.
- Goals: a 95 percent cut in PFOA emissions and product content from a 2000 baseline by 2010, and "the elimination of these chemicals from emissions and products by 2015."
- "All companies have met the PFOA Stewardship Program goals."
So a pan bought in the US after 2015 was not made with PFOA. PFOA was a processing aid used in making PTFE, not the coating itself.

**EFSA, "PFAS in food: EFSA assesses risks and sets tolerable intake,"** news release 17 September 2020.
URL: https://www.efsa.europa.eu/en/news/pfas-food-efsa-assesses-risks-and-sets-tolerable-intake
Read: full (fetch tool).
- Group tolerable weekly intake "4.4 nanograms per kilogram of body weight per week" for PFOA, PFOS, PFNA and PFHxS combined.
- Main dietary sources named: "drinking water, fish, fruit, eggs, and egg products". Cookware is not named as a source.

**Overheating, fumes and birds.**
- Wells RE, "Fatal toxicosis in pet birds caused by an overheated cooking pan lined with polytetrafluoroethylene," J Am Vet Med Assoc 1983;182(11):1248-50. PMID 6863146. Read: title and citation only (no abstract in PubMed).
- Shimizu T et al., "Polymer fume fever," BMJ Case Rep 2012. PMID 23230259. Read: abstract. A 29-year-old man with fever, breathlessness and cough "after massive inhalation of evaporant from a polytetrafluoroethylene-coated cooking pan"; he improved within two days.
- Correia MS, Horowitz BZ, "Polymer Fume Fever," StatPearls (archived), 4 Aug 2023. PMID 37603667. Read: abstract. Notes PTFE's acute toxicity was thought low until "the first reported case series of polymer fume fever due to occupational exposure" in 1951.
- Hays HL, Spiller H, "Fluoropolymer-associated illness," Clin Toxicol 2014. PMID 25200453. Read: abstract. **Caution:** this review is about waterproofing sprays, not cookware; it says "Serious outcomes, including acute respiratory distress syndrome and death, are uncommon." Do not cite it for pans.
- Patel P (Prachi Patel), "How does nonstick cookware work, and should you switch to 'green' pans?", C&EN, byline date 1 May 2025 (schema says 13 Nov 2025; print version vol 103 issue 12).
URL: https://cen.acs.org/environment/persistent-pollutants/does-nonstick-cookware-work-should/103/web/2025/04
Read: full (curl). Verbatim: "PTFE degrades when it's heated above 260 °C, releasing smaller PFAS molecules into air and food." "The fumes are also fatal to birds. But cases of such effects are uncommon, and it is unclear whether exposure from regular use harms human health." It quotes an Ecology Center scientist that PTFE coatings "are probably a lower PFAS exposure hazard than other sources for the average person, but are not necessarily inert" (the article's paraphrase, not a direct quote of her).

**Ceramic ("PFAS-free") coatings.** Same C&EN article: ceramic coatings are usually a sol-gel siloxane network (silica and other mineral particles in PDMS resin). "Users often complain that ceramic coatings lose their nonstick property sooner than PTFE does. Scientific reviews are mixed." One 2024 study found ceramic stood up better to prolonged heat above 250 C; a preprint found "Teflon outperformed commercial ceramic coatings, but two ceramic coatings came close." A materials scientist warns "ceramic" can be marketing: some pans labelled ceramic still use PFAS. I did not read either underlying study.

**The industry case, in its own words. Cookware Sustainability Alliance** (members per search snippet: Groupe SEB, Meyer, SCANPAN, Tramontina; the site itself did not list them).
URL: https://cookwaresustainabilityalliance.org/
Read: full (fetch tool). No date.
- PTFE is "an inert molecule that is non-bioaccumulative, insoluble in water, non-toxic, and therefore safe for consumers."
- "The same compounds used in non-stick cookware (PTFE) are also used in life-saving medical devices, such as pacemakers."
- Argues bans conflate PTFE with PFOA, which it says was "never used" on cookware (read this as: not present in the finished coating; EPA confirms it was used in manufacture until the phase-out).

**The case for bans, in its proponents' words.** Kelleher S, "Industry, environmental groups spar over California bill to ban PFAS in cookware," The New Lede, 29 September 2025.
URL: https://www.thenewlede.org/2025/09/california-cookware-pfas-ban/
Read: full (fetch tool).
- Rainer Lohmann (URI PFAS research centre): "I don't see manufacturers being able to produce [Teflon pans] without adding contamination to the environment."
- Los Angeles County Sanitation Districts: "Acting boldly to turn off the spigot of PFAS in consumer products is the only meaningful and cost-effective way to potentially avoid further PFAS contamination."
- CSA president Steve Burns on scope: "The way that California's bill is drafted, it will include every coffeemaker, every Dunkin' Donuts or 7-Eleven."
- The article also reports a July 2025 study linking PTFE exposure to reduced sperm count; I did not read it and would not use it without reading it.

**US states.**
- Minnesota (Amara's Law): cookware with intentionally added PFAS banned from sale from 1 January 2025; broad product ban by 2032 except "currently unavoidable uses". MPCA page read in full (fetch tool, https://www.pca.state.mn.us/get-engaged/pfas-in-products), but it states only the staged 2025 to 2032 scheme, not the cookware date; the cookware date comes from C&EN ("In January, Minnesota became the first US state to ban the sale of..." read in full) and snippets. A federal court dismissed the CSA's Commerce Clause challenge on 11 August (2025), per search snippets (Bloomberg Law, CBS Minnesota, National Law Review); not read.
- Colorado and Maine: cookware bans in effect January 2026 (snippets only).
- California SB 682 (cookware ban from 2030) passed the legislature and was vetoed on 13 October 2025. Farella Braun + Martel note of 16 October 2025, read in full (fetch tool), https://www.fbm.com/publications/governor-newsom-vetoes-sb-682-due-to-concerns-with-the-impact-on-affordable-cooking-products/ quotes the veto: "while this bill is well-intentioned, I am deeply concerned about the impact this bill would have on the availability of affordable options in cooking products". An EWG item of July 2026 (title only) says a separate California law makes PFAS in cookware easier to spot (a disclosure law); not read.

**European Union.** ECHA's universal PFAS restriction (proposal 2023). RAC adopted its opinion in March 2026; SEAC's draft opinion went to consultation until 25 May 2026; SEAC final opinion expected by end of 2026, then the Commission drafts and member states vote. Sources: Arnold & Porter advisory 27 March 2026 (read full, fetch tool; does not mention cookware), Bergeson & Campbell 31 March 2026 (read full, fetch tool; RAC on fluoropolymers: "evidence of their mobility, bioaccumulative potential and (eco-)toxicological effects is limited", with emissions at production and waste stages; cookware not named). A search snippet says SEAC did not accept an industry request to exclude fluoropolymers and that consumer non-stick cookware would be restricted because substitutes exist; **not confirmed by any page I read.** As of today the EU has not adopted a restriction.

**What evidence would settle it.** For the kitchen question: measured migration of PFAS (including particles from scratched coatings) into food across a pan's working life, compared with other dietary sources. For the policy question: life-cycle emission data for fluoropolymer manufacture with non-PFOA processing aids, and whether replacement ceramic coatings last long enough that people do not buy several pans in PTFE's lifetime.

**Fair summary for the lesson.** Regulators who looked at the pan itself (FDA) find negligible migration from intact coatings. Overheating is a real, separate hazard: never preheat an empty nonstick pan on high, ventilate, and keep birds out of the kitchen. PFOA was phased out of manufacture by 2015 in the US. The live argument is about pollution where fluoropolymers are made and thrown away, and on that, US states and the EU are moving toward restriction while industry argues PTFE is inert. A student can reasonably keep an intact nonstick pan for eggs and fish, use it at medium heat, and replace it when the coating is damaged; or choose cast iron, carbon steel or stainless for reasons of environment or durability. Both are defensible choices.

#### 3b. Cast iron, soap and acid (Established, with a myth to correct)

**Lodge Cast Iron, "How to Clean."** URL: https://www.lodgecastiron.com/pages/how-to-clean. Read: full (fetch tool). No date.
- "Start with warm, soapy water and scrub with a stiff-bristled brush or scrubbing pad." "Dry completely with a paper towel or lint-free cloth." "Add a thin layer of oil".
- "The soap we use for washing dishes today is no longer strong enough to remove seasoning from cast iron."
- Soaking: "No! Soaking cast iron in water is a recipe for rust." Dishwasher: "A dishwasher will remove the seasoning and likely cause rust."
- Heavy rust: scour, oil, and re-season upside down at 450 to 500 F for an hour.

**Lodge, "10 Myths About Cast Iron Cookware, Busted!"** URL: https://www.lodgecastiron.com/pages/cast-iron-101-cast-iron-myths. Read: full (fetch tool).
- "Soap isn't necessary, but you _can_ use mild dish soap to clean cast iron."
- On acidic foods: "These foods, in small quantities, are just fine to cook in brand new cookware. But large amounts of very acidic or alkaline foods can break down the seasoning when cooked for extended periods of time."
- Metal utensils are fine.

**Lodge, "3 Tips for Cooking Acidic Foods in Cast Iron,"** 9 May 2023. URL: https://www.lodgecastiron.com/blogs/story/3-tips-for-cooking-acidic-foods-cast-iron. Read: full (fetch tool).
- "you shouldn't leave acidic ingredients directly in cast iron for more than about 45 minutes."
- Long contact can "impart a metallic flavor to your food." It presents this as a quality issue, not a safety one.

The URL first tried (/cleaning-and-care/cast-iron) is 404. **Carbon steel:** no source read; the care is the same in principle (season, dry, oil), but do not state it without a manufacturer's page. **Fair summary:** the "never use soap" rule dates from lye soaps; the maker says mild soap is fine. What damages cast iron is standing water, the dishwasher and long acidic simmers.

#### 3c. Gas stoves and indoor air (Contested empirical)

**Gruenwald T, Seals BA, Knibbs LD, Hosgood HD, "Population Attributable Fraction of Gas Stoves and Childhood Asthma in the United States,"** Int J Environ Res Public Health 2022 (published 21 Dec 2022). PMID 36612391. Read: abstract. First two authors at RMI (a clean-energy nonprofit).
- Used a meta-analysis odds ratio of 1.34 (95% CI 1.12 to 1.57) for gas cooking and current asthma.
- "We found that 12.7% (95% CI = 6.3−19.3%) of current childhood asthma in the US is attributable to gas stove use."
- It is a calculation from an existing odds ratio and exposure prevalence, not new measurement. The attributable-fraction method assumes the association is causal.

**The critique.**
- American Gas Association statement, 5 January 2023. URL: https://www.aga.org/news/news-releases/statement-aga-concerned-by-methodology-of-new-study/. Read: full (fetch tool). "The claims made in Gruenwald et al. are derived from an advocacy-based mathematical exercise that doesn't add any new science." "The authors conducted no measurements or tests based on real-life appliance usage, emissions rates, or exposures." It also points out that the authors' own search since 2013 found "none reported new associations between gas stove use and childhood asthma specifically in North America or Europe." (AGA is the gas utilities' trade body.)
- Li W et al., "Gas cooking and respiratory outcomes in children: A systematic review," Global Epidemiology 2023. PMID 37638371. Read: abstract. Authors at Gradient, which declares past work "with several organizations in the past that have an interest in gas stoves and NO2 science." Concludes the literature "does not provide sufficient evidence regarding causal relationships between gas cooking or indoor NO2 and asthma or wheeze," noting most studies are cross-sectional and the few cohort studies "have largely reported null results."
- Wong GW et al., ISAAC Phase Three, Lancet Respir Med 2013. PMID 24429203. Read: abstract. Over 512,000 children in 47 countries: open-fire cooking was associated with asthma symptoms, but "we detected no evidence of an association between the use of gas as a cooking fuel and either asthma symptoms or asthma diagnosis." (Self-reported, cross-sectional.)

**The measurement side (not disputed in the same way).**
- Kashtan Y et al., Sci Adv, 3 May 2024. PMID 38701214. Read: abstract. Gas and propane stoves raise long-term NO2 exposure by 4.0 ppb on average, "75% of the World Health Organization's exposure guideline"; model estimates "~50,000 cases of current pediatric asthma"; short-term exposure "frequently exceeds" WHO and EPA benchmarks; people in homes under 800 square feet get four times the exposure of those in homes over 3,000.
- Kashtan YS et al., Environ Sci Technol, 2023. PMID 37319002. Read: abstract. Burners on high and ovens at 350 F emitted benzene "10 to 25 times higher than emissions from electric coil and radiant alternatives; neither induction stoves nor the food being cooked emitted detectable benzene."

**Regulator advice. EPA, "Strategies for Improving Indoor Air Quality While Cooking" (infographic).** URL: https://www.epa.gov/indoor-air-quality-iaq/strategies-improving-indoor-air-quality-while-cooking-infographic. Read: full (fetch tool). Page date 10 March 2026.
- "Turn the range hood on whenever you are cooking." "Cook on the back burners when possible to capture more emissions." "Leave the range hood on for 10–20 minutes after you have finished cooking." Open windows when outdoor air allows; portable air cleaner that does not produce ozone.
- It does not tell anyone to replace a gas stove.

**Fair summary.** It is established that gas burners put NO2 (and some benzene) into indoor air, more in small, poorly ventilated kitchens, and that ventilation reduces it. Whether this causes a measurable share of childhood asthma is contested: the 12.7% figure is a model built on cross-sectional associations, criticised by industry and by an industry-linked review, and the largest international study found no gas association. What would settle it: prospective cohorts with measured NO2 exposure, or trials of stove replacement or hood use with asthma outcomes. For the cook, the practical advice is the same on every reading: use a hood vented outdoors, prefer back burners, open a window. Induction avoids combustion altogether. Keep this brief in the lesson.

#### 3d. Rare burgers, pink pork, poultry (Established on the science; Value on personal choice)

**FSA, "Less than thoroughly cooked beef burgers: guidance for food businesses."** GOV.UK, published 22 May 2023 (first 2016; revisions 2018, 2022).
URL: https://www.gov.uk/government/publications/less-than-thoroughly-cooked-beef-burgers-guidance-for-food-businesses-and-local-authorities/less-than-thoroughly-cooked-beef-burgers-guidance-for-food-businesses
Read: full (curl).
- "When meat is minced to produce burgers, harmful bacteria from the surface of the raw meat may be spread throughout the burger."
- "When burgers are thoroughly cooked, achieving a temperature of 70°C for two minutes, or equivalent all the way through, this will result in a 99.9999% (six-log) reduction in harmful bacteria".
- "The colour of a beef burger cannot be used as the sole indication of safe cooking."
- Businesses may serve rare beef burgers only with a food safety management system and approved suppliers, and "The consumer message also aims to discourage consumers from eating LTTC beef burgers at home."
- Recommended menu message: "Burgers cooked rare and medium rare carry a higher risk of food poisoning. Unlike a steak, a burger needs to be cooked through to reduce that risk. The Food Standards Agency recommends that children, pregnant women and anyone with a weaker immune system have their burgers well done."
- A search snippet quotes the FSA as saying the risk in controlled catering "is not so unacceptable as to justify removing the adult consumer's right to choose"; I did not see that sentence in the 2023 text and it may be from an earlier board paper. Not quoted here.

**FSA, "Cooking your food."** GOV.UK, published 18 December 2017 (food.gov.uk now redirects here). URL: https://www.gov.uk/government/publications/cooking-your-food/cooking-your-food. Read: full (curl).
- Equivalent time and temperature: "70°C for 2 minutes or the following temperature-time combinations: 60°C for 45 minutes 65°C for 10 minutes 70°C for 2 minutes 75°C for 30 seconds 80°C for 6 seconds".
- "Burgers shouldn't be served rare or pink at home."
- "Poultry (such as chicken, turkey, duck, and game birds) and pork can have bacteria all the way through the meat. This means that these meats need to be cooked all the way through." Whole cuts other than poultry and pork "can be served pink in the middle according to taste".

**FSIS, "Safe Minimum Internal Temperature Chart."** Read: Wayback (snapshot 2026-09-23; live blocked).
- Steaks, chops, roasts of beef, pork, veal, lamb: "145 degrees F (62.8 degrees C) and allow to rest for at least 3 minutes". "Ground Meats 160 degrees F (71.1 degrees C)". Poultry 165 F.
- "For reasons of personal preference, consumers may choose to cook food to higher temperatures."

**The 2011 pork change.** CIDRAP news item (read full, fetch tool), https://www.cidrap.umn.edu/foodborne-disease/usda-145-degrees-safe-temp-pork, dated 24 May 2011: USDA lowered whole-cut pork from 160 F to 145 F with a three-minute rest, saying it gives a product "both microbiologically safe and at its best quality"; Under Secretary Elizabeth Hagen: "With a single temperature for all whole cuts of meat and uniform 3-minute stand time, we believe it will be much easier for consumers to remember." Ground meat stayed at 160 F. The USDA press release itself was not read.

**Trichinellosis. Wilson NO, Hall RL, Montgomery SP, Jones JL, "Trichinellosis Surveillance, United States, 2008-2012,"** MMWR Surveill Summ 2015;64(SS-1), 16 January 2015. URL: https://www.cdc.gov/mmwr/preview/mmwrhtml/ss6401a1.htm. Read: full (fetch tool).
- 1947 to 1951: "approximately 400 cases with 10–15 trichinellosis-related deaths were reported each year."
- 2008 to 2012: "the mean annual incidence of trichinellosis in the United States was 0.1 cases per 1 million population"; 84 confirmed cases; pork products 22 (26%), of which 10 commercial pork; bear meat the leading non-pork source.
No newer CDC summary was read.

**Sous vide poultry.** Douglas Baldwin, "A Practical Guide to Sous Vide Cooking" (version 0.4k; 2008 and later). URL: https://douglasbaldwin.com/sous-vide.html. Read: full (fetch tool). Table 4.1 times to pasteurise poultry at 60 C (140 F): 5 mm thick 45 min; 10 mm 55 min; 20 mm 1 1/4 h; 30 mm 2 h (from heating from fridge temperature). He relies on FSIS (2005) 7-log Salmonella lethality tables. "the common food pathogen Clostridium perfringens can grow at up to 126.1°F (52.3°C)", so he keeps sous vide at 130 F (54.4 C) or above. This matches the principle in the FSA's own equivalence list (60 C for 45 minutes). The 165 F figure is the instant-kill point, not the only safe one.

**What the lesson can say.** Established: bacteria sit on the surface of a whole cut and are spread through by mincing; safety is time plus temperature, not colour; pork in the US and UK is now very unlikely to carry trichinella. **Value:** the difference between a US 145 F pink pork chop and the UK "cooked all the way through" advice is a difference in how cautiously each agency phrases advice for the public, not a disagreement about microbiology; the FSA's own 60 C for 45 minutes line shows the same time-temperature logic. Rare burgers at home: both agencies advise against. An adult can choose a rare steak; the burger is different for a reason the student can understand.

#### 3e. Washing raw chicken (Established on the risk; Value on the practice)

**The evidence against.**
- USDA press release, "Washing Raw Poultry: Our Science, Your Choice," 20 August 2019. URL: https://www.usda.gov/about-usda/news/press-releases/2019/08/20/washing-raw-poultry-our-science-your-choice. Read: Wayback (live 403). Verbatim: "Of the participants who washed their raw poultry, 60 percent had bacteria in their sink after washing or rinsing the poultry. Even more concerning is that 14 percent still had bacteria in their sinks after they attempted to clean the sink. 26 percent of participants that washed raw poultry transferred bacteria from that raw poultry to their ready to eat salad lettuce." Also: "Of the participants that did not wash their raw poultry, 31 percent still managed to get bacteria from the raw poultry onto their salad lettuce." The title itself concedes the choice is the cook's.
- Shumaker ET et al., "Observational Study of the Impact of a Food Safety Intervention on Consumer Poultry Washing," J Food Prot 2022;85(4):615-625. PMID 35051277. Read: abstract. The peer-reviewed version of the USDA work (300 participants). Key finding for the lesson: "The high levels of E. coli DH5α detected in the sink and on the salad lettuce suggest that microbes transferred to the sink from the chicken, packaging, or contaminated hands are a larger cause for concern than is splashing contaminated chicken fluids onto the counter." And the authors recommend changing "the frame of "don't wash your poultry" messaging to instead focus on preventing contamination of sinks and continuing to emphasize the importance of hand washing and cleaning and sanitizing surfaces."
- FSA, "Campylobacter," GOV.UK, published 9 January 2018. URL: https://www.gov.uk/government/publications/campylobacter/campylobacter. Read: full (curl). "washing raw chicken can spread campylobacter by splashing it onto hands, work surfaces, clothing and cooking equipment. Campylobacter has a low infective dose". Advice: "never wash chicken/poultry".
- FSA Food Safety Week 2014 (Quadram Institute page, 16 June 2014, https://quadram.ac.uk/fsw2014/, read full via fetch tool): about 280,000 Campylobacter cases a year in the UK; "up to 65% of poultry may be contaminated". The widely repeated "44% always wash chicken" figure is from snippets only.
- Kosa KM et al., J Food Prot 2015;78(1):180-6. PMID 25581194. Read: abstract. National US web survey, n = 1,504: "Nearly 70% of consumers reported washing or rinsing raw poultry before cooking it".

**The practitioners' case, fairly stated.**
- Henley SC, Stein SE, Quinlan JJ (Drexel), "Identification of unique food handling practices that could represent food safety risks for minority consumers," J Food Prot 2012;75(11):2050-4. PMID 23127716. Read: abstract. Nine focus groups in Philadelphia (African American, Hispanic, Asian). Washing raw poultry was found in all three; "using hot water (Asian, Hispanic) or acidic solutions (African American, Hispanic) to clean raw poultry" were culturally specific. The authors note the small, non-random sample means these "cannot be extrapolated".
- Drexel News, "Don't Wash Your Chicken: It's Risky, It's Unnecessary and There's a Better Way!", 30 August 2022. URL: https://drexel.edu/news/archive/2022/August/Dont-Wash-Your-Chicken-Its-Risky-Its-Unnecessary-and-Theres-a-Better-Way. Read: full (fetch tool). Quinlan's research found cooks wash because of a "desire to control the process of preparing food, have a lack of trust in chicken processing and/or the habitual nature of the behavior." The better way offered: "wipe it off with a clean paper towel and then wash your hands." The 2013 Drexel campaign page (snippet only) reports Quinlan saying some cooks "just want to get slime off, or feel like it's dirty".
- So the case, as practitioners make it: raw poultry can carry slime, blood, feather stubs, bone chips and fat that a cook wants off; washing is how a mother or grandmother taught it; it expresses care and cleanliness; and in many Caribbean, West African, Latin American and South Asian kitchens a lime, lemon or vinegar wash is part of seasoning and of removing smell. Many cooks distrust industrial processing. These are real reasons, and the lesson should say so without mockery. Note for the writer: I did not find a first-person source from a Caribbean or West African cook or cookbook in this pass; the "freshens the smell" description came from a search summary only. Stage 1 should add one before the lesson characterises the tradition.

**Does an acid wash kill the bacteria?** Henley SC, Launchi N, Quinlan JJ, "Survival of Salmonella on raw poultry exposed to 10% lemon juice and vinegar washes," Food Control, December 2018, doi 10.1016/j.foodcont.2018.06.034. Read: abstract (Semantic Scholar API). "a subset of consumers report using acidic solutions (diluted lemon/lime juice or vinegar) to wash raw poultry." After 10 s to 5 min washes, live Salmonella stayed on the chicken and in the wash water: "Washing raw poultry in a diluted lemon juice or vinegar solution is an inefficient method for removing pathogens and results in pathogens both in the wash water and on the chicken, increasing the risk for cross contamination". Limit: lab-inoculated at a very high level; a 10% dilution, not neat juice. A Turkish study on lemon juice in cig kofte (Baris Bingol et al., Br Food J 2011, abstract read via Crossref) found reductions of 0.1 to 2.1 log with longer times, so acid marinating does something, but far less than cooking.

**Fair summary.** Washing does not make chicken safer; cooking does. Washing adds a sink full of bacteria, and the USDA's own study found the sink and hands, not spray on the counter, were the main route. Cooks who wash for texture or tradition can reduce the harm: clear the sink and draining board first, run water gently, prepare salad before touching raw chicken, clean and sanitise the sink afterwards, wash hands. A paper towel pat removes slime without water. An acid wash can stay as a flavour step if it is treated as raw-chicken liquid. Classification: the microbiology is Established; whether to keep the practice is a Value question for the cook.

#### 3f. Aluminium and Alzheimer's; acrylamide

**Aluminium (Established: no demonstrated link).**
- Alzheimer's Society (UK), "Metals and the risk of dementia." URL: https://www.alzheimers.org.uk/about-dementia/risk-factors-and-prevention/metals-and-dementia. Read: Wayback (snapshot 20251112073331; live page returned a stub). "There is no strong evidence to suggest that everyday contact with metals increases a person's risk of developing dementia." The 1965 rabbit study led to "speculation that aluminium from cans, cookware and even the water supply could be causing dementia. Importantly, these results were only seen with extremely high doses". "Aluminium in food and drink is in a form that is not easily absorbed into the body. Hence the amount taken up is less than 1% of the amount present in food and drink."
- Alzheimer's Association (US) myths page, https://www.alz.org/alzheimers-dementia/what-is-alzheimers/myths: read full (fetch tool); **it no longer contains an aluminium myth.** A quotation often attributed to it ("studies have failed to confirm any role for aluminum in causing Alzheimer's") appears only in search snippets. Do not cite alz.org for this.
- Practical note (not sourced): plain aluminium reacts with acids and can discolour food or taste metallic; anodised aluminium does not. Source this in Stage 1 before teaching it.

**Acrylamide (Contested empirical, and a Value tension in messaging).**
- EFSA, acrylamide topic page, opinion of 4 June 2015. URL: https://www.efsa.europa.eu/en/topics/topic/acrylamide. Read: full (fetch tool). "acrylamide in food potentially increases the risk of developing cancer for consumers in all age groups." Human evidence "limited and inconsistent". Main adult sources fried potato products and coffee.
- FSA, "Acrylamide," GOV.UK, published 9 January 2018. URL: https://www.gov.uk/government/publications/acrylamide/acrylamide. Read: full (curl). "Laboratory tests show that acrylamide in the diet causes cancer in animals. Scientists agree that acrylamide in food has the potential to cause cancer in humans as well. We recommend that the amount of acrylamide we all consume is reduced, as a precaution." Home advice: "aim for a golden yellow colour or lighter when frying, baking, toasting or roasting starchy foods". **The FSA has withdrawn its old advice not to keep raw potatoes in the fridge**: a study reviewed by COT "has shown that home storage of potatoes in the fridge doesn't materially increase acrylamide forming potential", so potatoes may go in the fridge or a cool dark place.
- FSA "Go for Gold" press release, 24 January 2017 (via wired-gov.net, read full, fetch tool): the four original tips, including the now-withdrawn fridge tip, and "consumers are currently exposed to higher levels of acrylamide than is desirable and this may contribute to overall lifetime cancer risk."
- Cancer Research UK, "Does burnt toast cause cancer?" Last reviewed 18 December 2024. URL: https://www.cancerresearchuk.org/about-cancer/causes-of-cancer/cancer-myths-questions/does-burnt-toast-cause-cancer. Read: full (curl). "Eating acrylamide in burnt food is unlikely to increase cancer risk." "Our evidence-based advice: You don't need to avoid burnt starchy foods. There is no reliable evidence that eating acrylamide increases the risk of cancer in people."
- David Spiegelhalter, Winton Centre (Cambridge), "How dangerous is burnt toast?" URL: https://wintoncentre.maths.cam.ac.uk/news/how-dangerous-burnt-toast/. Read: full (fetch tool); date unclear on the page (written at the 2017 campaign). "I am not convinced it is appropriate to launch a public campaign on this basis."
- **The tension, fairly stated.** EFSA and the FSA reason from animal carcinogenicity and exposure margins to a precautionary "reduce it"; Cancer Research UK reasons from human cohort studies, which do not show a link, to "you don't need to avoid" it. Both are true to their method. Evidence that would settle it: large prospective cohorts with biomarker-measured acrylamide exposure (haemoglobin adducts) and cancer outcomes. For the cook: golden rather than dark brown costs nothing and loses little flavour; burnt toast is not a cancer emergency.

#### 3g. Wooden versus plastic boards (Contested empirical, leaning toward "either, if kept clean")

- Ak NO, Cliver DO, Kaspar CW, "Cutting Boards of Plastic and Wood Contaminated Experimentally with Bacteria," J Food Prot 1994;57(1):16-22. PMID 31113021. Read: abstract. (University of Wisconsin-Madison; Cliver later moved to UC Davis.) "Recoveries from wooden blocks were generally less than those from plastic blocks, regardless of new or used status". "These results do not support the often-heard assertion that Plastic cutting boards are more sanitary than wood."
- Cliver DO, "Cutting boards in Salmonella cross-contamination," J AOAC Int 2006;89(2):538-42. PMID 16640304. Read: abstract. Knife-scarred plastic is "very difficult to clean and disinfect"; bacteria drawn into wood "are not killed instantly, but neither do they return to the surface"; plastic boards can go in a dishwasher "but the dishwasher may distribute the bacteria onto other food-contact surfaces"; and "one of these studies indicated that use of plastic cutting boards in home kitchens is hazardous, whereas use of wooden cutting boards is not." (Cliver is summarising other people's epidemiology; I have not read those two studies.)
- FSIS, "Cutting Boards." Read: Wayback (2026-09-23 snapshot). Last updated 27 August 2024. "Consumers may choose either wood or a nonporous surface cutting board such as plastic, marble, glass, or pyroceramic. Nonporous surfaces are easier to clean than wood." Advises one board for produce and bread and "a separate one for raw meat, poultry, and seafood."
- Newer work (titles and snippets only, not read): de Oliveira et al., LWT, April 2025, domestic boards in use (snippet: plastic boards had higher counts); Kimiran et al., J Food Safety 2026, Salmonella persisted longer on polyethylene and glass than on wood (snippet). Worth reading in a later pass.
- **Fair summary.** The old belief that plastic is automatically more hygienic is not supported. Wood performs at least as well in lab work. Either is fine if washed hot and soapy, dried, and replaced when deeply scored; the bigger safety step is a separate board, or a strict order of use, for raw meat. Glass and marble are hygienic but dull knives fast (Cliver's point on knife wear is a quality claim, not a safety one).

#### 3h. Food waste versus safety: dates and smelling (Established on dates; smell test is where people go wrong)

- FSA (on GOV.UK), "Understanding food labelling: Best before and use-by dates." URL: https://www.gov.uk/understanding-food-labelling/best-before-and-use-by-dates. Read: full (curl). No date shown.
  - "Use-by dates on food labels tell you when the food is no longer safe to eat. They must be shown on foods that go off quickly, such as meat products and ready-to-eat salads. Eating food after the use-by date could make you ill."
  - "You can eat food after the use-by date if it was cooked or frozen on or before the use-by date."
  - Best before "tells you when the food might start to reduce in quality." "After the best before date, the food is usually safe to eat but may not be of the same quality."
  - "After the best before date, you can use sight, taste or smell to decide whether you should eat something". Note the sense check is offered for best-before foods only.
  - Fridge "at 5°C or below"; freezer at -18 C; defrosted food used within 24 hours.
- FSIS, "Food Product Dating." Read: Wayback (snapshot 20260923031306). Last updated 23 April 2025 (the footer date on the snapshot; treat with some caution).
  - "Except for infant formula, product dating is not required by federal regulations."
  - "Except for infant formula, dates are not an indicator of the product's safety and are not required by Federal law."
  - FSIS recommends industry use "Best if Used By". "if the date passes during home storage, a product should still be safe and wholesome if handled properly until the time spoilage is evident."
- FSIS, "Leftovers and Food Safety." Read: Wayback. Last updated 31 July 2020. "Leftovers can be kept in the refrigerator for 3 to 4 days or frozen for 3 to 4 months." I did not find in the extracted text an explicit line on smelling leftovers.
- **The smell test.** No page I read says in so many words that pathogens do not cause off smells; the microbiological point (spoilage organisms cause smell; Listeria and Salmonella usually do not) is standard teaching but needs a regulator or textbook source before the lesson states it. The FSA page's structure makes the practical point already: sense checks are for best-before foods, the use-by date is a safety limit.
- **Fair summary.** In the UK, the two dates mean different things and the law requires use-by on perishable, high-risk foods. In the US, apart from infant formula, date labels are the maker's quality estimate, and FSIS says food past the date is still safe if handled properly until it spoils. Waste and safety pull in opposite directions only for use-by foods; for everything else, eyes and nose are the right tools.

---

### Not read

- Serious Eats knife skills pieces (Lopez-Alt and others): domain refused by the search tool; not attempted with curl for lack of a URL.
- BBC Good Food knife skills: no page surfaced in search.
- CIA (Culinary Institute of America) knife cut standards or textbook.
- "Chang et al 2016 Am J Emerg Med" knife injury paper: could not find; may not exist as described. Smith 2013 used instead.
- CPSC NEISS query data directly.
- The newer NFPA "Home Cooking Fires" edition (2019 to 2023 data): snippet only.
- UK government or Fire Kills notice withdrawing the damp tea towel advice (2008): snippet only.
- Any regulator page naming salt for a grease fire.
- American Red Cross cooking fire page (redcross.org URL 404); Massachusetts DFS cooking fire page (403).
- 2024 AHA and Red Cross First Aid Guidelines full text (Circulation; 403) and the AHA highlights PDF (not a PDF when fetched).
- OSHA knives URL as given (404); read the food-prep page instead.
- London Fire Brigade URL as given (404); read the pan-fires page instead.
- USDA 2011 pork press release itself (read CIDRAP's report of it).
- CDC trichinellosis data after 2012.
- FSIS "Washing Food: Does it Promote Food Safety?" (Access Denied live and on the archive fetch).
- FSIS 2005 or 2017 Salmonella lethality tables (Appendix A) directly; relied on Baldwin.
- FSA 2014 Food Safety Week release itself; the "44% always wash" figure is snippet only.
- Any first-person Caribbean, West African or Latin American cook or cookbook on acid-washing chicken.
- Minnesota Amara's Law statutory text; court rulings in CSA v. Minnesota; Colorado and Maine cookware laws; EWG July 2026 item on California disclosure.
- ECHA's own pages and SEAC draft opinion text on consumer cookware; the claim that SEAC rejected a fluoropolymer exclusion is snippet only.
- The 2022 study on particles from cracked PTFE, the 2024 ceramic durability study, the preprint pancake study, and the July 2025 PTFE sperm-count study (all cited inside C&EN or The New Lede, none read).
- StatPearls "Polymer Fume Fever" full text (NCBI Bookshelf blocked; abstract only). Wells 1983 bird paper (citation only).
- DuPont or Chemours statements on PTFE decomposition temperatures.
- Alzheimer's Association statement on aluminium (not on the myths page any more).
- Primary acrylamide cohort studies; Spiegelhalter's Medium post (403); read the Winton Centre version.
- de Oliveira et al. 2025 (LWT) and Kimiran et al. 2026 (J Food Safety) on cutting boards; the two epidemiological studies Cliver cites.
- Carbon steel care from any manufacturer.
- A source for plain versus anodised aluminium reactivity with acid foods.
- A source stating that pathogens do not produce off smells.
- Gruenwald et al. full text; the RMI response to the AGA; the Kashtan et al. full texts.

## Gate closures, lesson 1

*Added 2026-09-24 by the lesson 1 drafter. Every page below was downloaded with curl and its text
extracted locally; quotations are copied from that text (direct), not from a summarising tool.*

**G10, honing and sharpening: closed** with two America's Test Kitchen pages (a test-kitchen source,
which is what the gate asked for). No manufacturer page was read: the Wüsthof results surfaced only
retailer listings, which were not opened.

- **America's Test Kitchen, "A Guide to Using Your Chef's Knife"**, Liz Bomze, 5 December 2018 (the
  Part D 1 source), https://www.americastestkitchen.com/articles/1362-a-guide-to-using-your-chef-s-knife .
  **Re-read in full, direct**, which also re-checks the Part D 1 grip and claw quotations: they match
  the page (the page uses a curly apostrophe in "doesn’t").
  - "Honing a knife with a honing steel (also referred to as a sharpening steel—a misnomer) repositions (or “trues”) the edge of a blade that is slightly out of alignment to restore sharpness. Sharpening trims and reshapes the blade by removing metal that is blunted or too far out of alignment for honing to work."
  - "A good rule of thumb is to use a honing steel every time you start to cook."
  - "If you cook often, you should check your knife weekly for sharpness using the sharpness test. If it fails the test, try honing first. If that doesn’t work, run it through a sharpener."
  - Paper test: "Hold a sheet of paper by one end and drag your knife, from heel to tip, across it. If the knife snags or fails to cut the paper, it needs to be honed or sharpened."
  - On dull knives: "A sharp knife is a precise, efficient tool, while a dull knife is an accident waiting to happen. That’s because a dull blade requires more force to do the job and has a higher chance of slipping and missing the mark." And: "Even a few minutes of cutting dense or hard foods can dull a blade."
  - On evenness: "The goal when cutting any food is to avoid crushing or bruising it and to create even-size pieces that cook at the same rate and/or ensure even flavor distribution throughout the dish."
  - Flat side: "Create flat, stable surface by cutting food in half or removing thin slice from bottom. Hold food with claw grip."
  - Honing steps: handle grip, steel tip on the counter, blade "at consistent angle away from steel (15 to 20 degrees depending on the knife)", light pressure, "Four or 5 strokes on each side of blade (total of 8 to 10 alternating passes) should realign edge."
  - Also on the page: an 8-inch chef's knife is ATK's preferred length ("We find that 8 inches is long enough to maneuver through a wide roast or a hefty watermelon but short enough to allow good control of the blade"); the page recommends named products, which a lesson should not repeat.
- **America's Test Kitchen, "How to Use a Honing Rod"**, The Editors of America's Test Kitchen, https://www.americastestkitchen.com/articles/276-how-to-use-a-sharpening-steel . No date read on the page (the structured data carries a 2016 date that may belong to a linked item). Read in full, direct.
  - "The force of repeated cutting bends microscopic pieces of the blade to either side, making it harder to push the blade through the food, which in turn makes it feel dull to the user."
  - "A so-called sharpening steel—also called a honing rod—which is the metal rod sold with most knife sets, doesn’t really sharpen a knife, but rather hones the edge of a slightly dulled blade. Sweeping the blade along the steel realigns the edge so you don't have to sharpen as frequently."
  - "Despite what many cooks believe, proper honing requires very little pressure." Here the angle is given as "15 degrees is perfect" (the chef's-knife guide says 15 to 20 depending on the knife; say "about 15 to 20").
  - Paper test, with the order: "If the knife fails to slice cleanly, try honing it. If it still fails, it needs sharpening."
- A companion page, "Knife Tune-Up: How to Use a Honing Rod" (https://www.americastestkitchen.com/how_tos/10751-knife-tune-up-how-to-use-a-honing-rod, direct), adds that honing takes "about 1 minute to hone versus 5 minutes to sharpen" and "doesn’t remove much metal from the blade". Note the hedge: "much", not "no".
- Still not read: any manufacturer statement, and the electron-microscope work the Wikipedia article cites (on the unread line). **What a lesson may say:** a steel realigns an edge that has bent to the side; a sharpener or stone removes metal to make a new edge; hone first, and sharpen when honing no longer passes the paper test. No claim about ceramic or diamond rods (Wikipedia only).

**Also read for lesson 1, not a gate:**

- **America's Test Kitchen, "How to Cut an Onion"**, The Editors of America's Test Kitchen, https://www.americastestkitchen.com/articles/229-how-to-cut-an-onion . Read in full, direct. Supplies the onion method the outline wanted from a video only.
  - "The goal when chopping an onion is to obtain evenly sized pieces that will cook at an even rate."
  - "Many chefs lop off both the top and the root end before chopping an onion. However, for the average home cook, we find that leaving the root intact makes it easier to keep the layers together as you make each cut."
  - Steps: "Halve onion pole to pole—that is, cutting through top and root end. Peel onion and trim top. (It’s much easier to remove the skin once the onion has been cut.)" Then flat side down, several horizontal cuts "but don’t cut through root end", several vertical cuts "up to but not through the root end", then "Rotate onion half so root end is in back. Slice onion thin across previous cuts."
  - Spacing: "For chopped or diced onions, leave 1/4 to 1/2 inch between each cut. For minced or finely chopped onions, leave 1/8 to 1/4 inch between each cut."
  - ATK's own recipe vocabulary: ""Minced" means 1/8-inch pieces or smaller. "Chopped fine" means 1/8- to 1/4-inch pieces." and ""Chopped medium" means 1/4- to 1/2-inch pieces. "Chopped coarse" means 1/2- to 3/4-inch pieces." A second vocabulary for the same sizes as Escoffier's dice (Part D 1), usable to show that recipe words are size instructions.
- **Escoffier School of Culinary Arts, "What Is Mise en Place and Why Is It So Important to Chefs?"**, https://www.escoffier.edu/blog/culinary-arts/what-is-mise-en-place-and-why-is-it-so-important-to-chefs/ , published 18 October 2024, modified 18 February 2026 (structured data). Read in full, direct. A school's recruiting blog, so use it for the definition and the steps and nothing about history (it credits Escoffier, its namesake, with developing the system, which this course has not checked).
  - "In the culinary world, this preparation practice is known as mise en place. This means “everything in its place.”" (the sentence is split across a link on the page; the words are as printed).
  - "The goal of this culinary practice is to have everything ready to go when it comes time to cook, bake, or assemble your final dish."
  - Steps: read the recipe first ("carefully read over a recipe’s ingredients, technique, and method"), gather tools, gather and measure ingredients into separate bowls, prep (chop, trim, wash).
  - Among its common mistakes: prepping too far ahead ("vegetables can lose their crispiness, herbs may wilt"), and "Uniformity is important when slicing and chopping ingredients as it helps the food to cook evenly."

## Gate closures, lesson 2

*Stage 3 top-up for lesson 2, 2026-09-24. Everything below was read directly (curl, or Europe PMC's
full-text XML) and quotations were copied from the extracted text, so they are verbatim.*

**G9, the temperature ladder: partly closed, for lesson 2's needs only.** Egg, collagen and rice
temperatures (lessons 5, 8, 9) were not looked for and remain open.

- **Nancy Honig, "The Maillard Reaction", Wild West District Extension Blog, Kansas State University
  Research and Extension**, posted 15 August 2022 (by Kylee Harrison),
  https://blogs.k-state.edu/wildwestdistrict/2022/08/15/the-maillard-reaction/ . Read: full, direct.
  - "Maillard reactions generally only begin to occur above 285°F (140°C)."
  - "Sucrose and glucose caramelize around 160C (320F) and fructose caramelizes at 110C (230F)."
  - Caution: much of the page's wording matches the unsigned Science of Cooking page in Part C 6, so
    it may not be independent of it. It is an extension-service page, which is institutional, but
    it is a county blog post, not research. Use for the approximate 140°C only, as approximate.
- **L. El Hosry, V. Elias, V. Chamoun, M. Halawi, P. Cayot, A. Nehme and E. Bou-Maroun, "Maillard
  Reaction: Mechanism, Influencing Parameters, Advantages, Disadvantages, and Food Industrial
  Applications: A Review"**, *Foods* 14(11), 2025, 1881, doi 10.3390/foods14111881, PMC12154226,
  CC BY. Read: full text XML from Europe PMC, searched for temperature; abstract, section 3.2
  ("Effect of Temperature on Maillard Reaction's Rate") and the baking section (8.5) read.
  - Abstract: "Other specific conditions of reaction medium such as temperature, reaction time (or
    residence time in a process), and water activity also significantly influence the Maillard
    reaction."
  - Section 3.2: "The higher the temperature, the faster the reaction."
  - It reports model-system studies (glucose with glycine; glucose with lysine) whose rate peaked
    near 120 °C: "The mentioned researchers found that the maximum reaction rate occurred at 120 °C,
    and it decreased at temperatures above 120 °C or below 100 °C." Those are solutions, not food
    surfaces, but they are a reason not to present 140°C as a sharp threshold.
  - Baking: "Baking can be divided into three phases: dough expansion, surface desiccation, and
    crust browning. These phases are regulated by the temperature increase during baking, with
    browning typically occurring at around 160 °C."
  - Verdict: no source read gives a precise, institutionally backed on-temperature for browning,
    and the review suggests there isn't one. Lesson 2 gives "about 140°C" attributed to the K-State
    page, calls it a rough mark rather than a switch, and uses the review for the rate and for the
    dry-then-brown order. Nothing in the lesson turns on the figure, and the chart draws only FSIS
    figures, as the outline's fallback required.

**Rechecks of Stage 1 [T] and fetch-tool quotations lesson 2 prints.**

- **FDA "Microwave Ovens"** (Part C 10h), direct; "Content current as of: 10/12/2023". The two [T]
  quotations match the page exactly. Also on the page:
  - "Although heat is produced directly in the food, microwave ovens do not cook food from the "inside out.""
  - "Super-heated water (water heated past its boiling temperature) does not appear to be boiling and occurs when water is heated by itself in a clean cup. If super-heating has occurred, a slight disturbance or movement such as picking up the cup, or pouring in a spoon full of instant coffee, may result in a violent eruption with the boiling water exploding out of the cup. Adding substances such as instant coffee or sugar before heating greatly reduces this risk."
  - "Users should make sure that they do not exceed the recommended heating times when determining the best time settings to heat water to the desired temperature."
- **Engineering ToolBox "Convective Heat Transfer"** (Part C 7), direct. The coefficient list
  matches Part C 7: "Free Convection - air, gases and dry vapors : 0.5 - 1000 (W/(m 2 K))"; water and
  liquids free 50 to 3000, forced 50 to 10000; forced air 10 to 1000; "Boiling Water : 3.000 -
  100.000"; "Condensing Water Vapor: 5.000 - 100.000" (the page uses points as thousands
  separators). Part C 7's note that still air sits "at the bottom" of the free-convection range is
  the researcher's reading, not the page's; the page gives only the range.
- **Engineering ToolBox "Water Properties: Vaporization Heat vs. Temperature"**,
  https://www.engineeringtoolbox.com/water-properties-d_1573.html , direct, table only: at 100 °C,
  2256.4 kJ/kg. **"Specific Heat Capacity of Water"**,
  https://www.engineeringtoolbox.com/specific-heat-capacity-water-d_660.html , direct, table only:
  4.2174 kJ/kgK at 0.01 °C, 4.1570 at 20 °C (liquid at saturation, the first of the two columns);
  about 4.18 is a fair round figure for 0 to 100 °C. Lesson 2's 418 kJ and "more than five times"
  are its own arithmetic from these.
- **FSIS "Food Thermometers"** (Part B 1.9), Wayback 20260823200227, direct. Additional sentences:
  - "Size, quantity and distribution of food when cooking causes the pieces of food to reach a safe internal temperature at different times."
  - Altitude, in full: "Boiling water’s temperature may vary in high altitudes. Most likely, the water would boil lower by at least 2 degrees F and perhaps lower by as much as 5 degrees F. Remember that water boils at a lower temperature in a high-altitude area. Check with the local Cooperative Extension System office or hea[lth department]" (the page text continues past the extract).
  - The pathogen sentence carries an asterisk on the page: "Most pathogens are destroyed between 140 degrees F and 165 degrees F*." Lesson 2 quotes it without the asterisk inside its own marks.
  - "If the thermometer doesn’t allow manual calibration, you may need to replace it."
  - Placement, in full: "The food thermometer should be placed in the thickest part of the food, away from bone, fat or gristle. For thin foods, the food thermometer should be inserted through the side until it reaches the center of the food."
- **FSIS "Deep Fat Frying"** (Part D 2a), Wayback 20260923031306, direct. The water-and-oil and
  smoke-point quotations match. The table also lists "Enova" brand at 420 °F. It adds: "A kitchen
  fire extinguisher or covering the fryer with a metal lid is the best way to put out a grease
  fire. Call 911 immediately if a grease fire occurs."
- **CPSC "Recipe for Safer Cooking"** (Part D 2a), live site returned a 459-byte block; read through
  Wayback 20260917064950, direct. The five fetch-tool quotations match the page (the page has
  "andleave" run together in the lid sentence). The fire list opens: "Call the fire department
  immediately. In many cases, dialing 911 will give you Emergency Services."
- **NHS "Burns and scalds"** (Part D 2b), direct; "Page last reviewed: 31 March 2026". Quotations
  match. Also: "Remove any clothing or jewellery that's near the affected area – but do not remove
  anything that is stuck to the affected area." and "do not use plasters or sticky dressings to
  cover a burn or scald do not burst any blisters" (a bulleted list, run together in extraction).
  Ice is not mentioned.
- **American Red Cross "Burns"** (Part D 2b), Wayback 20260117094816, direct. Quotations match. Also:
  "Doing so can cause more damage to the skin." (after the ice sentence) and the hospital list:
  "A child has been burned. The burn blisters. The burn affects more than one body area. The burn
  covers the hands, feet, joints, face, neck, or genitals. A larger surface area, such as trunk or
  limbs, is involved. Underlying tissues are visible."
- **AGA statement, 5 January 2023** (Part D 3c), direct. Quotations match (the page uses a curly
  apostrophe in "doesn’t"). Also: "Inexplicably, the authors ignored their own search of
  peer-reviewed manuscripts since 2013, where they found “none reported new associations between
  gas stove use and childhood asthma specifically in North America or Europe.”"
- **EPA cooking infographic, text version** (Part D 3c), direct. The three quotations match.

**G7 (pressure cooking)** is not lesson 2's gate in the outline (lessons 8 and 9); not attempted.

## Stage 4 notes, lesson 1

*Added 2026-09-24 by the lesson 1 reviewer. Pages downloaded with curl and read locally.*

- **ATK, "A Guide to Using Your Chef's Knife"**, re-read direct. Confirms the lesson's unrecorded
  details: "With practice, your claw will move back in even increments after each cut, guiding the
  knife to make even slices"; the rocking motion for small items ("push down and forward") and
  lifting the blade for large ones; the motions "rely on a pushing or pulling action rather than a
  straight downward cut"; honing with the "heel of blade against its top, pointing knife tip
  slightly upward" and "pulling knife toward your body". After the dull-knife sentence the page
  adds: "The result most often is food that’s crushed or bruised."
- **Correction to Part D 3g's fair summary.** "Glass and marble ... dull knives fast (Cliver's point
  on knife wear ...)" is not supported by anything recorded here: the Cliver 2006 abstract notes in
  Part C 10i and D 3g say nothing about knife wear. Do not print it until a read source says it.
- **University of Kentucky "Knife Skills" PDF** is eight pages, not one.
- **Videos, metadata only (not watched):** ATK "How To Chop an Onion" 103 s, channel America's Test
  Kitchen; Pépin "Knife Basics and Essentials of Knife Sharpening" 184 s and "Proper Knife Skills
  for Cutting, Chopping and Slicing" 238 s, channel KQED Food. The sharpening video's description
  says it shows "a steel and a stone".

## Gate closures, lesson 3

*Stage 3 top-up for lesson 3, 2026-09-24. The outline assigns lesson 3 no gate in its table; this
section rechecks every [T] and fetch-tool quotation lesson 3 prints, re-reads the direct sources it
leans on, and adds two sources for garlic in oil (the mechanism and a UK statement), because Part B
5.4 had the US rule only and decision 1 asks for both countries where a rule applies. Every page was
downloaded with curl and its text extracted locally (PubMed through the E-utilities efetch
endpoint, the FSANZ report with pdftotext, the GOV.UK page through the Content API); quotations are
copied from that text, direct.*

- **Samin Nosrat, NPR *Fresh Air* transcript** (Part A 2.1), https://www.npr.org/transcripts/672904397 ,
  re-read in full, direct. Part A 2.1's quotations match. Additional passages:
  - Tomato: "once you sprinkle a few crystals of salt on a slice of tomato, some of the juices start to come out, you know? Osmosis starts. And a lot of the flavor, aromatic compounds in vegetables are inside those watery cells. And so they come to the top. They're more available for you to breathe in." And: "the salt really balances the acid in the tomato and the sweetness in the tomato and just makes it more tomato-y (ph)."
  - "And that's really true for, you know, certainly every vegetable and I believe for meat, too." (after the tomato)
  - "salt is the first thing I sort of just instinctively taste for."
  - Salt brands, in full: "all salts are not created equal. So if I am using Diamond Crystal at home and I say one teaspoon but you have, you know, just a box of iodized table salt, what you use will almost be equivalent to twice as much." She adds it matters little for a pot of water, "But, you know, if you're making chocolate chip cookies and you use twice as much salt, it could be bad news." Then: "So I think it's really important more than anything to be familiar with your own salt and to really taste as you go so you start to learn what one pinch or one spoonful will do to a pot of food." She calls Diamond Crystal "really the least salty of all the salts".
  - **The line about salt's impact is the interviewer's, not hers.** Sam Briger says: "You say that salt has the greatest impact on flavor than any other ingredient." Nosrat's reply does not repeat it. A lesson may attribute it only as the interviewer's summary of her book.
  - Fat, in full: "So while salt is all about enhancing flavor, fat is mostly about texture. But it's also this amazing sort of transporter of flavor. It's a carrier." The garlic demonstration: a clove simmered in water and a clove sizzled in olive oil, cloves removed; the water "it'll probably taste pretty much just like water. But if you taste the oil, it'll taste like this amazing perfume." Then: "that's what fat does for so many of the aromatic compounds and flavors in our cooking, is it distributes flavor. So that's why we start - you know, in a soup or stew, you put oil in the pan. And you put your onions in there. And if you're going to add a bay leaf or some coriander seed or whatever, you throw that in at the beginning so it can sort of work its way into that oil and then penetrate your dish fully." Also: "So to make the thing taste of the place, start with the fat of the place."
  - Acid: lemonade "just made of sugar, water and lemons"; too sugary is "kind of cloying in your throat. So you need to increase that acid to create that tart contrast." And: "Anything tart is acid". She names Mexican salsas, cremas, cheeses, guacamole and "a wedge of lime that comes with your fish taco", and says her Iranian family squeezes "a sour orange over almost everything or lime".
  - She explains she avoids iodised salt because she can taste the iodine; that is a health-adjacent claim (iodine intake) and is left out of lessons, per the Nutrition boundary.
- **FDA, "Questions and Answers on Monosodium glutamate (MSG)"** (Part C 5), direct; "Content
  current as of: 07/17/2026". The [T] quotations match. Full sentences:
  - "FDA considers the addition of MSG to foods to be “generally recognized as safe” (GRAS). Although many people identify themselves as sensitive to MSG, in studies with such individuals given MSG or a placebo, scientists have not been able to consistently trigger reactions."
  - "In 1908, a Japanese professor named Kikunae Ikeda was able to extract glutamate from this broth and determined that glutamate provided the savory taste to the soup." "This broth" is "a glutamate-rich seaweed broth" in the sentence before; **the page does not name kombu**, so a lesson says seaweed broth.
  - "The FASEB report identified some short-term, transient, and generally mild symptoms, such as headache, numbness, flushing, tingling, palpitations, and drowsiness that may occur in some sensitive individuals who consume 3 grams or more of MSG without food. However, a typical serving of a food with added MSG contains less than 0.5 grams of MSG."
  - "An average adult consumes approximately 13 grams of glutamate each day from the protein in food, while intake of added MSG is estimated at around 0.55 grams per day."
  - "Over the years, FDA has received reports of symptoms such as headache and nausea after eating foods containing MSG. However, we were never able to confirm that the MSG caused the reported effects."
- **FSANZ, *Monosodium Glutamate: A Safety Assessment*, 2003** (Part C 5), PDF re-downloaded and
  extracted, direct. Tables 1 and 2 match Part C 5, and Table 2 also gives soy sauce from China 926
  and the Philippines 412, fish sauces ishiru 1383 and bakasang 727. Additional passages:
  - Summary: glutamate "in its free form has been shown to have a flavour enhancing effect." The introduction says glutamate "exists both as free glutamate and bound with other amino acids into protein". This is the source for free against bound.
  - Occurrence: "protein-rich foods such as breast milk, cheese and meat, contain large amounts of bound glutamate, while most vegetables contain relatively low amounts. However, despite their lower protein contents, vegetables tend to contain proportionally higher levels of free glutamate, especially peas, tomatoes, and potatoes."
  - "The optimal palatability concentration for MSG is between 0.2 – 0.8% and its use tends to be self-limiting as over-use decreases palatability." (The report spells umami "unami" throughout; quote it as printed or do not quote it.)
  - Introduction: free glutamate "is also present in relatively high concentrations is some foods such as tomatoes, mushrooms, peas and certain cheeses" (the report's typo "is some" for "in some").
  - UK intake: "an average intake of 590mg/day, with extreme users (97.5th percentile consumers) consuming 2330mg/day (Rhodes et al 1991)."
  - The fuller summary: "ingestion of large amounts (≥3g) of MSG in the absence of food may be responsible for provoking symptoms similar to CRS in a small subset of individuals. These symptoms, although unpleasant, are neither persistent nor serious." And it names an open question in its own words: "an important question that remains unanswered by the scientific literature is what effect consumption with food would have on the incidence and severity of symptoms."
  - "This highlights the need for individuals with suspected MSG sensitivity to undergo appropriate clinical testing."
  - Conclusion, first two sentences: "There is no convincing evidence that MSG is a significant factor in causing systemic reactions resulting in severe illness or mortality. The studies conducted to date on CRS have largely failed to demonstrate a causal association with MSG."
- **Geha et al. 2000, both abstracts** (Part C 5), PubMed efetch, direct. Quotations match. **One
  finding Part C 5 omitted, and it is the reporters' side's strongest datum:** "Challenge with
  increasing doses of MSG in protocol B was associated with increased response rates." A positive
  response meant "2 or more symptoms from a list of 10 symptoms" within 2 hours; protocols A to C
  gave MSG without food. The *J Nutr* abstract: "the frequency of the responses was low and the
  responses reported were inconsistent and were not reproducible. The responses were not observed
  when MSG was given with food."
- **Sam Kean, "The Rotten Science Behind the MSG Scare"**, *Distillations*, 2 March 2023 (Part C 5),
  direct (structured data datePublished 2023-03-02). The [T] quotations match. Corrections and additions:
  - Kwok's three suspects, per Kean: "salt, cooking wine, or perhaps MSG". The letter was in April 1968; "A month later, the NEJM printed 10 responses from other doctors."
  - "Puzzlingly, though, no two letter writers listed the same symptoms."
  - "Newspapers, however, didn’t get the joke and began running breathless stories about so-called Chinese Restaurant Syndrome." Kean calls the 1968 to 1969 studies that followed "dubious" and lists their flaws (tiny samples, no blinding, MSG on an empty stomach).
  - Olney's critics, per Kean: the dose was "the equivalent of an adult human eating a whole pound of MSG in one sitting", and "people consumed around 0.01 milligrams of MSG per gram of body weight daily, compared to Olney’s 7 milligrams per gram." (Kean also gives US intake as about 500 mg a day; the FDA's 0.55 g is the figure lessons use.)
  - Olney's first experiment used "up to 4 milligrams of MSG per gram of body weight"; the "up to 7 milligrams per gram of body weight" was the second experiment, in 20 mice.
  - On the name and its stigma, Kean's own words: "a “foreign” chemical like MSG became an easy target" and "Only when MSG was linked to Chinese cuisine did Americans panic." He notes the same MSG had been in American "canned soups and TV dinners" for decades.
  - Kean's piece is a science writer's argued history, with openly scornful language ("hysteria", "smirking editorial"); use it for the sequence of events and attribute its judgements to him. **The 2018 prank claim is not in this article's text as fetched**, so Part C 5's note about it cannot be confirmed here either; leave it out.
- **Elana Spivack, "Do avocado pits keep guacamole fresh?"**, *Inverse*, 12 February 2022 (Part C
  10c), direct. The Schaich quotation matches ("There was nothing in the pit that I knew of that
  should have inhibited the enzyme, so it had to be the oxygen"). Also, Schaich: "But it's only that
  it interferes with oxygen transfer. There’s nothing special about a pit." The water or citrus
  layer is the writer's paraphrase of Schaich's advice: "coat the guac with no more than half an
  inch of water. Lemon or lime juice works, too." and "citrus fruits are highly acidic and will
  deactivate the polyphenol oxidase enzyme". Schaich on leaving the avocado in chunks: "Tissue
  that's inside those big chunks has less access to oxygen, so it should stay greener".
- **NCHFP, "Freezing Garlic-In-Oil"** (Part B 5.4), direct. Quotations match. The page adds:
  "Package in glass freezer jars or plastic freezer boxes, leaving ½-inch headspace. Label, date and
  freeze."
- **New: Carla Luisa Schwan, "How to Safely Make Infused Oils: Best Practices for Food Safety"**,
  University of Georgia Cooperative Extension Circular 1334, published 17 December 2024,
  https://fieldreport.caes.uga.edu/publications/C1334/how-to-safely-make-infused-oils/ (linked from
  NCHFP's own entry). Read: full, direct. The mechanism the NCHFP page leaves out:
  - "Oils provide an anaerobic environment, and when combined with low-acid food matrices such as garlic and herbs, this provides the perfect conditions for specific bacteria to thrive. Clostridium botulinum specifically is of concern in infused oils. Spores of C. botulinum may already be present in garlic and herbs, and when introduced to an ideal environment—no oxygen, low acid content, and ambient temperatures—they can germinate, multiply, and produce a deadly neurotoxin."
  - Heat does not solve it: "In this method, the oil is heated to 180 °F before adding dried or fresh garlic and herbs. Since acidification is not used to prevent bacteria from growing, infused oils made with this method must be kept in the refrigerator and discarded 4 days after being made. Alternatively, you could freeze the oil until you are ready to use it."
  - Dried garlic is not a way round it: "Using dried garlic and herbs, which have little available water (lower water activity), still does not ensure that your ingredients are dried enough to provide a safe product."
  - The tested room-temperature route is acidifying the garlic first (University of Idaho method, Abo et al. 2014, Food Protection Trends 34(4):247-257, not read), and the acid is specific: "Do not replace the citric acid solution with vinegar or lemon juice, as they have not been tested and may result in an unsafe final product." And: "These measurements give you a ratio of 1 part garlic to 3 parts citric acid solution, which is critical!" A lesson may say the tested method exists and send the reader to it; it should not reprint the method.
- **New: Food Standards Agency, "Botulism (Clostridium botulinum)"**, GOV.UK,
  https://www.gov.uk/government/publications/botulism-clostridium-botulinum/botulism-clostridium-botulinum
  (food.gov.uk URL redirects there), first published 25 June 2026 per the Content API. Read: full,
  direct. "Applies to England, Northern Ireland and Wales."
  - "the bacteria can also develop spores which are not killed by cooking and produce a toxin that can make you ill."
  - "Canning and bottling products such as herbs or garlic in oil can be risky as it is difficult to achieve the level of control needed to destroy or prevent growth of C. botulinum spores at home."
  - "Foods that have been associated with foodborne botulism include home preserved foods, tinned and bottled foods, foods preserved in oil and food packed in airtight containers."
  - "With the high standards of food hygiene in the UK, the chances of getting food-borne botulism from food bought in this country are low. Preserving your own foods at home is riskier."
  - **The FSA gives no day limit for homemade garlic oil.** Its general advice is "chilling your food below 5°C". So the four-day figure is the US research-based rule (NCHFP, UGA), and a lesson says the UK page read gives no figure.
  - **For lesson 4's gate G3, not lesson 3's:** the same page says use-by dates matter "even if it looks and smells fine – eating food after this date could put your health at risk as you can’t smell or taste bacteria which could make you ill". A regulator's statement, in general terms; the lesson 4 drafter should judge whether it closes G3.

## Stage 4 note, lesson 2

*Added by the lesson 2 reviewer, 2026-09-24. Read directly (curl, or PubMed's E-utilities for the
abstracts); quotations copied from the extracted text.*

- **USDA FSIS, "High Altitude Cooking"**, https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/high-altitude-cooking ,
  "Last Updated: Aug 13, 2024", read through Wayback 20260923031306 (live site blocks automated
  readers). Read: full.
  - "At sea level, water boils at 212 °F. With each 500-feet increase in elevation, the boiling point of water is lowered by just under 1 °F. At 7,500 feet, for example, water boils at about 198 °F."
  - "Because water boils at a lower temperature at higher elevations, foods that are prepared by boiling or simmering will cook at a lower temperature, and it will take longer to cook."
  - Why it matters: the thermometer page's "at least 2 degrees F and perhaps lower by as much as 5 degrees F" (B 1.9) understates the drop above about 2,500 feet. Lesson 2's altitude quiz item originally set 207°F at 1,500 m, where this rule predicts about 203°F; it now sets 750 m.
- **FSIS "Food Thermometers"** (B 1.9), Wayback 20260823200227, rechecked. The asterisk after
  "165 degrees F*" has no footnote anywhere on the extracted page, so dropping it inside the lesson's
  quotation marks loses nothing. Calibration: "If not, adjust according to manufacturer instructions
  (some thermometers have a calibration nut or dial you can adjust)." Boiling method adds: "For true
  accuracy, distilled water must be used." The ice-water quotation in lesson 2, including "and check
  the reading without removing the stem from the water", matches the page.
- **FSIS "Deep Fat Frying"** (D 2a), same capture as the gate closure: its "Approximate Cooking
  Times" table gives oil temperatures of 320 °F (fish fillets, shrimp), 350 °F (chicken fingers)
  and 375 °F (chicken pieces, turkey), so about 350 °F is a fair middle figure for frying heat.
- **FDA "Microwave Ovens"** (C 10h), direct. "Microwaves cause water molecules in food to vibrate,
  producing heat that cooks the food." On heating water, the page also tells users to "closely
  follow the precautions and recommendations provided in the microwave oven instruction manuals,
  specifically regarding heating times" (fetch tool; consistent with the gate closure's direct read).
- **Kashtan et al. 2024** (D 3c), abstract, PubMed E-utilities. Authors at Stanford (Earth System
  Science; Woods and Precourt institutes), PSE Healthy Energy, the Central California Asthma
  Collaborative and Harvard's Chan School. Method: "We estimate NO2 exposure and health consequences
  using emissions and concentration measurements from >100 homes, a room-specific indoor air quality
  model, epidemiological risk parameters, and statistical sampling of housing characteristics and
  occupant behavior." The claim in full: "This increased exposure likely causes ~50,000 cases of
  current pediatric asthma from long-term NO2 exposure alone." So the 4.0 ppb is an estimate built
  on measurements, not a measured exposure, and the 50,000 applies earlier epidemiological risk
  figures, which is the same kind of calculation as Gruenwald's.
- **Kashtan et al. 2023** (D 3c), abstract, PubMed E-utilities. "Across 87 homes in California and
  Colorado"; the benzene quotation matches. "The authors declare no competing financial interest."
- **Essex County Fire and Rescue Service, "Firefighters' plea after man injured in chip pan fire"**,
  31 March 2026, https://www.essex-fire.gov.uk/incidents/firefighters-plea-after-man-injured-chip-pan-fire-2026-03-31-14-25 .
  Read: full, direct. Station Manager Steve Byrne: "Never use a damp or wet tea towel, as this is
  outdated advice." and "If it is safe to do so, turn off the heat. If not, get out, stay out and
  call 999." An earlier Essex release (11 July 2024, fetch tool only) carries the same towel line.
  This is a UK fire service saying the towel advice is outdated in its own words; the 2008
  withdrawal date remains snippet-only and unprinted.
- **Ashley Dummer, "Safeguard Your Family from Scald Burns"**, Indiana University School of Medicine
  pediatrics blog, 5 October 2021, https://medicine.iu.edu/blogs/pediatrics/safeguard-your-family-from-scald-burns .
  Read: full, direct. "Be aware of steam! When removing the lids from hot foods, lift the lid away
  from your arms and face." A university medical school's public safety page, not research.

## Gate closures, lesson 4

*Stage 3 top-up for lesson 4, 2026-09-24. Every page below was downloaded with curl and its text
extracted locally (GOV.UK pages through the Content API; FSIS and CDC through Internet Archive
captures, because the live sites block automated readers; the FDA Food Code 2026 PDF with
pdftotext); quotations are copied from that text, direct. Gates G1, G2, G3 and G4 are closed.*

**G3, smell and pathogens: closed** with a US regulator page that says it in so many words, and a
UK one.

- **USDA FSIS, "Refrigeration and Food Safety"**, https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration ,
  "Last Updated: Mar 23, 2015". Read: full, via Wayback capture 20260923031306 (live page 403).
  - "There are two completely different families of bacteria: pathogenic bacteria, the kind that cause foodborne illness, and spoilage bacteria, the kind of bacteria that cause foods to deteriorate and develop unpleasant odors, tastes, and textures."
  - "Pathogenic bacteria can grow rapidly in the "Danger Zone," the temperature range between 40 and 140 °F, but they do not generally affect the taste, smell, or appearance of a food. In other words, one cannot tell that a pathogen is present."
  - "Spoilage bacteria can grow at low temperatures, such as in the refrigerator. Eventually they cause food to develop off or bad tastes and smells. Most people would not choose to eat spoiled food, but if they did, they probably would not get sick."
  - "It comes down to an issue of quality versus safety: Food that has been left too long on the counter may be dangerous to eat, but could look fine. Food that has been stored too long in the refrigerator or freezer may be of lessened quality, but most likely would not make anyone sick. (However, some bacteria such as Listeria monocytogenes thrive at cold temperatures, and if present, will multiply in the refrigerator over time and could cause illness.)"
  - "Hot food can be placed directly in the refrigerator or it can be rapidly chilled in an ice or cold water bath before refrigerating." And: "A large pot of food like soup or stew should be divided into small portions and put in shallow containers before being refrigerated."
  - "A general rule of thumb for refrigerator storage for cooked leftovers is 4 days; raw poultry and ground meats, 1 to 2 days."
  - "Raw meat, poultry, and seafood should be in a sealed container or wrapped securely to prevent raw juices from contaminating other foods."
- **FSA, "Listeria"** (below, G4) says the same for the UK: "Foods after their use-by date may look and smell fine, but they could be unsafe and make you ill. You cannot see, smell or taste bacteria that causes foodborne illness". The FSA botulism page's sentence (Gate closures, lesson 3) agrees.

**G4, higher-risk foods (Listeria): closed** with CDC for the US and the NHS and FSA for the UK.

- **CDC, "Preventing Listeria Infection"**, https://www.cdc.gov/listeria/prevention/index.html ,
  dated on the page January 31, 2025. Read: full, via Wayback capture 20260821034028.
  - "Listeria infection is rare. An estimated 1,600 people in the U.S. get sick from Listeria each year." (Part B 4.2's risk-factors page, reviewed later, gives 1,250; the two CDC pages differ, so a lesson prints neither as a count.)
  - Groups: "Women who are pregnant", "Newborns", "People who are 65 years or older", "People who have a weakened immune system".
  - "If you are in any of these groups, choose safer foods to protect your health or your pregnancy."
  - The "Avoid" column, in order: "Any unheated queso fresco-type cheeses"; "Any type of cheese when made with (raw) unpasteurized milk"; "Unheated deli meat, cold cuts, hot dogs, and fermented or dry sausages"; "Premade deli salads, such as coleslaw and potato, tuna, or chicken salad"; "Refrigerated pâté or meat spreads"; "Refrigerated smoked fish"; "Raw or lightly cooked sprouts"; "Cut melon left out for more than 2 hours (1 hour if it’s exposed to temperatures hotter than 90°F, such as a picnic or hot car)" and "Cut melon in refrigerator for more than a week"; "Raw (unpasteurized) milk, yogurt, and ice cream"; raw enoki mushrooms.
  - The "Choose these instead" column includes "Deli meat, cold cuts, hot dogs, and fermented or dry sausages reheated to 165°F or until steaming hot", hard cheeses and pasteurised soft cheeses such as "feta, and mozzarella", "Smoked fish cooked in a casserole or other cooked dishes", "Sprouts cooked until steaming hot".
- **CDC, "How Listeria Spreads"**, https://www.cdc.gov/listeria/causes/index.html , dated August 12, 2024. Read: full, via Wayback capture 20260911155225. "The germs even can grow in food kept in the refrigerator."
- **NHS, "Foods to avoid in pregnancy"**, https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/ , "Page last reviewed: 15 June 2026". Read: full, direct.
  - Soft cheeses: "pasteurised or unpasteurised mould-ripened soft cheeses with a white coating on the outside, such as brie, camembert and chèvre – these must be thoroughly cooked"; soft blue-veined cheeses the same; "any cheese that's been cooked until steaming hot, including soft or blue cheese" is safe.
  - Meat: "cold cured meats such as salami, pepperoni, chorizo and prosciutto – should be cooked until steaming hot before eating"; "any processed, cold pre-cooked meats, such as ham or chicken – keep chilled and eat before the use-by date"; "meat pâté – keep chilled and eat before the use-by date"; avoid "raw or undercooked meat", "liver and liver products" and game meats.
  - Fish: "cold-smoked and cured fish, like smoked salmon – these must be cooked until steaming hot"; avoid "raw fish and raw shellfish".
  - Eggs: British Lion or Laid in Britain hen eggs "can be eaten raw, partially cooked (runny yolk), or well-cooked"; other hen eggs "should only be eaten well-cooked".
  - "Pre-packaged sandwiches and salads" containing cheese, meat, egg or fish: "keep them chilled and eat them before the use-by date".
  - "Listeriosis can cause miscarriage or stillbirth, or make your newborn baby very unwell." (The page varies the last words between sections.)
- **FSA, "Listeria"**, https://www.gov.uk/government/publications/listeria/listeria . Content API: public_updated_at 8 January 2018; first_published_at 25 June 2026 (the GOV.UK move). Read: full, direct.
  - "Cases of listeriosis are rare, however, they can be a particular concern because the bacteria are able to grow at low temperatures. In healthy adults and children listeria usually causes few or no symptoms."
  - Higher risk: "pregnant women and their unborn babies"; "those with weakened immune systems, including people with certain underlying conditions (such as cancer, diabetes, liver and kidney disease) or anyone taking medications which can weaken the immune system"; "older people have an increased risk compared with the general population, and this risk increases with age".
  - "Although listeria is widespread in the environment and can contaminate a wide range of foods, it is more common in ready-to-eat foods." Examples: cold pre-cooked meats, deli meats, pâté, "smoked and cured fish – including sushi", cooked shellfish, soft mould-ripened cheeses, raw milk and its products, "pre-prepared sandwiches and salads", "pre-cut fruits (for example, pre-packed melon slices)".
  - At home: chill "below 5°C"; eat ready-to-eat foods "within 4 hours or within 2 hours on a very warm day" of taking them out; "If there are no instructions, use opened foods within two days."; "cook or reheat foods (including frozen vegetables) until they are steaming hot right through".
  - Smoked fish: pregnant women and people with weakened immunity "are advised to avoid eating ready-to-eat cold-smoked or cured fish products, such as smoked salmon or gravlax." Older people "should also be aware of the risk" and consider steps. "cooking will kill any listeria that may be present".
- **For the callout (decision 3):** the three sources agree on the groups (pregnancy, older people, weakened immunity; CDC adds newborns) and on the principle (chilled ready-to-eat foods carry the Listeria risk; heating until steaming hot removes it). They differ in detail: CDC says to reheat deli meat; the NHS says cold cured meats must be cooked but pre-cooked ham may be eaten chilled within its date. So the callout's added clause points to "your country's list" rather than printing one rule.

**G1, allergens and cross-contact: closed** for what lesson 4 needs (naming them, cross-contact,
whether cooking removes them, and cooking for a guest). **Allergy management itself stays out of
scope**, as the outline says; the course names the hazard, and the project (lesson 12) asks how it
was handled.

- **FDA, "Food Allergies: What You Need to Know"**, https://www.fda.gov/food/buy-store-serve-safe-food/food-allergies-what-you-need-know , "Content current as of: 08/16/2024". Read: full, direct.
  - FALCPA 2004 "identified eight foods as major food allergens: milk, eggs, fish, Crustacean shellfish, tree nuts, peanuts, wheat, and soybeans." The FASTER Act (signed 23 April 2021) made sesame "the 9th major food allergen recognized by the United States", effective 1 January 2023.
  - "there is no cure for food allergies."
  - "It is important to understand that a mild allergic reaction does not always mean the allergy is mild. Any allergic reaction has potential to lead to anaphylaxis."
  - Labelling applies to FDA-regulated foods, which "include all foods except poultry, most meats, certain egg products, and most alcoholic beverages".
- **FDA Food Code 2026** (Part B 2), PDF text searched for allergen. Definition: "Major food allergen" means milk, egg, fish, crustacean shellfish, tree nuts, wheat, peanuts, soybeans and sesame (§ 1-201.10). Annex 3, on § 4-602.11: "Cross-contact occurs when a major food allergen, which is not an intentional ingredient in a food, is unintentionally introduced into that food." (The same annex paragraph, written earlier, still says "all eight (8) major food allergens".)
- **FSA, "Food allergy and intolerance advice for consumers"**, https://www.gov.uk/government/publications/food-allergy-and-intolerance-advice-for-consumers , public_updated_at 7 August 2026. Read: full, direct.
  - The 14: "celery", "cereals containing gluten (such as wheat, rye, barley and oats)", "crustaceans (such as prawns, crabs and lobsters)", "eggs", "fish", "lupin", "milk", "molluscs (such as mussels and oysters)", "mustard", "peanuts", "sesame", "soybeans", "sulphur dioxide and sulphites (at a concentration of more than ten parts per million)", "tree nuts (such as almonds, hazelnuts, walnuts, brazil nuts, cashews, pecans, pistachios and macadamia nuts)".
  - Cooking at home: "If someone is allergic to something, and you have served them a food they can’t eat, just taking it off their plate is not enough. This is because an extremely small amount can be enough to cause an allergic reaction."
  - Its list: "asking your guest (or a child’s parents or carers) what they can and can’t eat"; "making sure you keep allergens separate from other foods"; "checking the ingredients list on prepacked foods like sauces, dressings, and desserts for allergens"; "keeping a note of the ingredients or the food packet itself used in the dish so you can answer any questions your guests may have about the food"; "avoiding adding extra toppings or decorations to dishes".
  - "There are often good substitutes for allergens available to buy. Your guest will have the best understanding of their specific allergy and will be able to help plan a suitable meal."
  - "It’s important to note that heating does not remove the allergenic potential of proteins in food unless they are completely hydrolysed, and heating temperatures in the kitchen will not do this."
  - "Clean work surfaces and equipment thoroughly to remove traces of food you may have cooked or prepared before."
  - On vegan labels: a product labelled vegan may still carry milk, egg, crustacean, fish or mollusc by cross-contamination; "free-from" labels are the guarantee.
- **Where G1 belongs in the course:** a short section in lesson 4 (the lists, cross-contact, heat does not remove it, the FSA's steps for a guest) and step 3 of the project in lesson 12. The UK says "cross-contamination" for allergens; the US regulatory word is "cross-contact", kept separate from bacterial cross-contamination.

**G2, washing chicken in practitioners' own words: closed** with one first-person account by a
cook of Belizean and Nigerian family, which reports two other practitioners in their own words.

- **Carolyn Desalu, "Washing meat is cultural, yet mandatory"**, first published on Food52 and republished by Salon, 7 August 2022, https://www.salon.com/2022/08/07/washing-meat-is-cultural-yet-mandatory_partner/ . Read: full, direct (the Salon copy; the Food52 original was not opened).
  - "In my family, washing meat is the start to well-prepared food and something my parents, sister, cousins, and so forth do. To us, it’s a ritual, a mandate. We care equally about cleaning, eating, and communing."
  - "My process of washing meat starts with a running water rinse, then soaking in a large bowl of cold water plus lemon juice and/or vinegar for a few minutes to “wash” away the germs. I inherited washing meat from my Belizean-Nigerian family."
  - Her cousin Bobbi, 83, on the Belize City market about half a century ago: "you saw someone handling your meat with their bare hands. That was more than enough reason to wash it at home." The market later gave way to supermarkets with pre-packaged meat, "Yet, it never changed her stance on meat washing." Bobbi rubs "half or quartered lemons on each piece", seasons, then cleans sink and counters "with the leftover lemons to avoid cross contamination."
  - Desalu buys vacuum-sealed supermarket chicken, "and yet, I still wash each piece."
  - Julius Jackson, a St. Thomas (US Virgin Islands) chef and cookbook author, by phone: "Everyone I saw in the kitchen, including my mother, cleaned their meat before seasoning. My mother used acid — warm water and lemons or vinegar — to wash meat. This was especially true for chicken." (The em dash is his quoted speech as printed.) His method: "Use a really large bowl because it prevents splashing and try to avoid washing in your sink." And "Always have vinegar because it doesn’t go bad. It also cleans and sanitizes surfaces if you don’t have bleach". In his cookbook the washing step is not written out because "this pre-preparation stage is expected" (Desalu's words).
  - Her Nigerian father "washes every piece of meat three times with a lemon-water mixture and after, cleanses it again with just lemons, then adds seasonings" (Desalu's report).
  - Against: Jamila Robinson (Philadelphia Inquirer) is "totally anti-washing" and says "It’s important not to castigate cultural practices around food but also raise awareness about food safety." Benjamin Chapman (NC State): "Washing meat does not reduce the risk; it increases the chance of pathogens." And: "Bleach-based solutions are the safest for cleaning. We don’t have good data that proves vinegar kills what’s in your sink."
  - Her conclusion: she will keep washing and teach her son, and "update my family tradition by sanitizing with a bleach-based solution instead of vinegar because tradition can change a little."
  - Limits: one writer's family and two practitioners she quotes; not a survey. It names Belize, Nigeria and the US Virgin Islands and no other tradition. A lesson may describe the practice in these words and must not generalise it to a region beyond what Henley 2012 and this piece say.
- **Drexel News, 30 August 2022** (Part D 3e), rechecked direct against the page: the quotations match. The page also says: "Poultry may have a coating of water and protein: this gets cooked off, or you can remove it with a clean paper towel and then wash your hands."

## Stage 4 note, lesson 3

*Stage 4 review, 2026-09-24. The FSANZ PDF, the FDA page, Kean, both Geha abstracts (PubMed efetch), the UGA circular and the Inverse page were re-downloaded and their text extracted; these passages were not recorded above and lesson 3 now relies on them.*

- **FSANZ 2003, the summary's Conclusion, third sentence** (direct): "Symptoms resembling those of CRS may be provoked in a clinical setting in small numbers of individuals by the administration of large doses of MSG without food. However, such affects are neither persistent nor serious and are likely to be attenuated when MSG is consumed with food." (The report's "affects".) This is the same paragraph as "There is no convincing evidence ...", so a lesson quoting the first sentence quotes this one too.
- **FSANZ Table 1, rows not recorded above** (bound / free, mg per 100 g): cow's milk 819 / 2; human milk 229 / 22; Parmesan 9847 / 1200; eggs 1583 / 23; chicken 3309 / 44; duck 3636 / 69; beef 2846 / 33; pork 2325 / 23; cod 2101 / 9; mackerel 2382 / 36; salmon 2216 / 20; peas 5583 / 200; corn 1765 / 130; carrots 218 / 33; spinach 289 / 39; tomatoes 238 / 140; potato 280 / 180. Table 2 lists fish sauce as "Nam-pla" 950 and "Nuoc-mam" 950. The table says "Corn", not sweetcorn.
- **FSANZ, occurrence** (direct): "a virtually all foods" and "tomatoes, mushrooms, peas and certain cheeses" (the report's "is some" typo sits just before this phrase). The report also estimates CRS prevalence at "about 1 –2% of the general population" while saying "it is not clear what proportion of the reactions, if any, can be attributed to MSG".
- **Geha, *J Nutr* abstract** (direct): calls the 130-subject study "the largest to date" (as of 2000). Protocol B's increasing doses are not given in the abstract.
- **FDA** (direct): "Over the years, FDA has received reports of symptoms such as headache and nausea after eating foods containing MSG."
- **Kean** (direct): Kwok was "a pediatrician in Maryland". The 0.01 mg per gram daily intake is what Olney's critics ("three physicians", four months later) said, per Kean, not Kean's own figure. Kean's explanation for the absence of reactions in East Asia: "because they don’t expect to and were never told they should".
- **UGA Circular 1334** (direct): "For any of the methods below, always start by sterilizing your containers. Thoroughly wash your glass containers and boil them for 10 min to ensure the destruction of bacteria, yeasts, and molds."

## Gate closures, lesson 5

*Stage 3 top-up for lesson 5, 2026-09-24. Every page below was downloaded with curl and its text
extracted locally (FSIS through an Internet Archive capture, because the live site blocks automated
readers; PubMed and PMC through the E-utilities; the Anton paper with pdftotext); quotations are
copied from that text, direct. G8 is closed; G9 is closed for eggs only (collagen and rice remain
open for lessons 8 and 9).*

**G9, the temperature ladder, egg part: closed** with two institutional statements that agree to
within a few degrees and one peer-reviewed paper for the proteins behind them.

- **American Egg Board, "Coagulation/Thickening"** (professionals, REAL Egg Functionality),
  https://www.incredibleegg.org/professionals/manufacturers/real-egg-functionality/coagulation-thickening/ ,
  page copyright 2023. Read: full, direct. The US egg industry's promotion board, citing Stadelman
  and Cotterill, *Egg Science and Technology*, 4th edition (1995), which was not read.
  - "Egg white protein coagulates between 144° F and 149° F (62.2° C and 65° C); egg yolk protein coagulates between 149° F and 158° F (65° C and 70° C); and whole egg protein coagulates between 144° F and 158° F (62.2° C and 70° C). However, a number of variables influence the rate of coagulation, as well as the ability of the proteins to remain in the three-dimensional network."
  - "There are more than 40 different proteins in a whole egg, some only located in the white and others predominantly in the yolk."
  - Mechanism: "Natural protein consists of complex, folded and coiled individual molecules. Loose bonds across the folds and coils hold each protein molecule in a tight, separate unit. These bonds can be disrupted when exposed to heat or acid, or by physical means such as whipping, causing the protein to denature." And: "Essentially, millions of protein molecules join in a three-dimensional network, or simply, they coagulate, causing the egg product to change from a liquid to a semisolid or solid."
  - Modifiers: "sugar (raises the temperature for coagulation), acids (decrease temperature where coagulation is achieved)".
  - Starch "is often added to custard to slow the process of coagulation to help prevent overcooking the mixture."
- **Egg Safety Center, "What is the safe temperature to cook eggs?"**, https://eggsafety.org/faq/what-is-the-best-temperature-to-cook-an-egg/ .
  Read: full, direct. The page says the Center "represents commercial egg producers". Same ranges:
  "Egg white coagulates at 144-149° F, yolk coagulates at 149-158° F, and whole eggs coagulate at 144-158° F."
  Its doneness guidance: fried and poached, "Cook until the whites are completely set, and the yolks begin to thicken but are not hard" (poached "about 5 minutes in simmering water, or 6-9 minutes in poaching inserts"); scrambled, "Cook until no visible liquid egg remains"; hard-cooked: "Place large eggs in sauce pan with cold water. Bring eggs to boil and cover. Remove from heat. Let eggs sit for 12 minutes for large eggs. ((9 minutes for medium eggs; 15 minutes for extra-large eggs)" (the doubled bracket is the page's).
- **NDSU Extension, Julie Garden-Robinson, "Prairie Fare: Are Runny Eggs Safe to Eat?"**, 7 April 2011,
  https://www.ag.ndsu.edu/news/columns/prairie-fare/prairie-fare-are-runny-eggs-safe-to-eat/ . Read:
  full, direct. Repeats the Egg Safety Center's ranges ("According to the Egg Safety Center"), so it
  is not independent of them. Its hard-cooking method (from a USDA recipe): bring to a boil, "Reduce
  heat to simmer; cook for 15 minutes. Immediately rinse the eggs under cold water". Its reading of
  the Food Code egg rule is the columnist's, not the FDA's; not used.
- **Institute of Food Science and Technology, "Protein: coagulation"** (Love Food Love Science
  teaching resource), https://www.ifst.org/lovefoodlovescience/resources/protein-coagulation . Read:
  full, direct. The UK professional body for food scientists; a schools resource, not research.
  "Egg whites coagulate at 60°C, egg yolks 65°C, with full coagulation occurring at 70°C." And:
  "Coagulation is irreversible, the proteins cannot be turned back into their liquid form."
- **Jian Kuang, Pascaline Hamon, Valérie Lechevalier and Rémi Saurel, "Thermal Behavior of Pea
  and Egg White Protein Mixtures"**, *Foods* 12(13), 2023, 2528, PMC10340197, CC BY (names from the
  PMC record). Read: full text XML from PMC, searched for the egg white passages; the pea results
  were not read.
  - "Ovalbumin (54%), ovotransferrin (12%), ovomucoid (11%), lysozyme (3.5%), and ovomucin (1.5–3.5%) are among the major proteins of egg white".
  - Their own calorimetry of egg white: "the peaks at ~63, ~69, ~76, and ~83 °C could be assigned to ovotransferrin, lysozyme, ovalbumin, and S-ovalbumin (the more heat-stable form of ovalbumin [ 26 ]), respectively."
  - "Many studies performed on liquid egg white around neutral pH indeed mention two main denaturation peaks around 65 and 80 °C attributed to ovotransferrin and ovalbumin, respectively".
  - Gelling: "the two gelling temperatures at ~60 and ~75 °C could be attributed preferentially to the denaturation of ovotransferrin and ovalbumin, respectively".
  - What a lesson may say: the white is several proteins that set at different temperatures; a minor one (about 12%) first, around 60 to 65°C, and the main one (about 54%) near 75 to 80°C. These are laboratory heating measurements; the step from them to "a white held in the low 60s is tender and one taken well past 75 is firmer" is the course's inference and is labelled as such.
- The Science of Cooking figures in Part C 8b (ovalbumin at 80°C, ovotransferrin at 60°C) are
  consistent with the paper but remain [T] from an unsigned page; the lesson cites the paper instead.
- Donovan, Mapes, Davis and Garibaldi, *J Sci Food Agric* 26(1), 1975, 73–83, PMID 235041 (the
  classic calorimetry of egg white): PubMed record has no abstract. Not read; not cited.

**G8, emulsion mechanism: closed** with a researcher's review of how yolk stabilises emulsions and
the egg board's functional explanation, plus two ATK pages for the practical fix.

- **Marc Anton, "Recent advances concerning the functional properties of egg yolk low-density
  lipoproteins"**, INRA Nantes, conference paper for the World's Poultry Science Association,
  hosted by CABI, https://www.cabi.org/Uploads/animal-science/worlds-poultry-science-association/WPSA-italy-2006/10903.pdf
  (eight pages; the URL places it at the 2006 WPSA meeting in Italy, which the extracted text does
  not state). Read: full, direct.
  - Abstract: "The emulsifying properties of egg yolk are principally attributed to its LDL." And: "interfacial films made with LDL are constituted by a blend of proteins and phospholipids that assure both the decrease of interfacial tension and the resistance to the rupture. This permits the formation and the stability of food emulsions made with yolk."
  - Introduction: yolk "contributes to the formation and the stability of yolk emulsions like mayonnaises, salad dressings, and creams. Yolk is still used empirically and physical properties of yolk emulsions are not entirely controlled."
  - LDL "form a film at the interface between oil and water, and this film contribute to the stabilisation of emulsions made with yolk."
  - Breaking, in general terms: "Emulsion stability indicates the capacity to avoid flocculation, creaming, and/or coalescence of oil droplets. Creaming and flocculation are reversible phenomena which can be avoided by a simple agitation of the emulsion. Coalescence is the irreversible fusion of oil droplets due to the rupture of the interfacial film created by emulsifying agents. This phenomenon leads to a complete destruction of the emulsion."
  - It says the adsorption mechanism has been debated ("controversies have persisted about the adsorption mechanism of LDL at the oil-water interface"). A lesson names the film, not the molecular sequence.
- **American Egg Board, "Emulsification"**, https://www.incredibleegg.org/professionals/manufacturers/real-egg-functionality/emulsification/ ,
  page copyright 2023. Read: full, direct. An industry promotion board's page for food
  manufacturers.
  - Definition, quoting *Food Technology*: an emulsion is a "temporarily stable mixture of immiscible fluids, such as oil and water, achieved by finely dividing one phase into very small droplets."
  - "The reduction of surface tension is due to the lecithin or phosphatidylcholine contained within the egg yolk. This amphiphilic molecule has two ends, one hydrophobic and one hydrophilic, which minimizes the energy required to form an emulsion by reducing oil/water interfacial tension."
  - "Egg yolks provide a viscous, continuous phase. This promotes stability in emulsions because it prevents the dispersed oil droplets from moving around and gathering, or coalescing."
  - "the smaller the droplet and more uniform in size, the better the emulsion"; "oil must be added slowly to water so that the lecithin within the egg yolk can thoroughly coat the small droplets. This coating acts as a barrier to prevent the droplets from joining back together (flocculating or coalescing) to enhance emulsion stability".
  - Note: this page credits the yolk's emulsifying power chiefly to lecithin; Anton's research credits it chiefly to the LDL particles, which carry phospholipids (lecithin among them) and proteins to the interface. The two are compatible at the level a lesson needs: a film of yolk material coats each droplet.
- **America's Test Kitchen, "Make-Ahead Homemade Mayonnaise"**, Lan Lam, published 5 January 2020,
  https://www.americastestkitchen.com/recipes/12375 . Read: full, direct (the public part of the page).
  - Ingredients: "3 tablespoons water", "2 large egg yolks", "4 teaspoons lemon juice", "1 ½ cups vegetable oil, divided", "¾ teaspoon table salt", "½ teaspoon Dijon mustard", "¼ teaspoon sugar".
  - Method: stir water, yolks and lemon juice, then "Microwave, stirring gently every 10 seconds, until mixture thickens slightly and registers 160 to 165 degrees, 1 to 2 minutes. Immediately add ¼ cup oil, salt, mustard, and sugar; whisk to combine." Then in a food processor "slowly drizzle in remaining 1¼ cups oil in thin stream, about 2 minutes." Refrigerate "for up to 1 month".
  - "Our homemade mayo can be stored for one month because it's made with pasteurized egg yolks. Pasteurizing is as simple as heating the yolks to 160 degrees. Mixing the yolks with water and lemon juice kept the base of our mayo fluid even though it had been heated. Immediately whisking oil into that base cooled it and prevented it from thickening. At the same time, whisking broke the oil into tiny droplets, the critical starting point for any mayo."
  - "pasteurized" and the one-month keeping time are ATK's claims; FSIS (below) is the regulator's statement of the 160°F method.
- **America's Test Kitchen, "How to Fix Failed Mayo"**, https://www.americastestkitchen.com/how_tos/13363-how-to-fix-broken-mayo .
  Read: full, direct. No author or date on the page.
  - "Place 4 teaspoons water in bowl and, while whisking vigorously, very slowly drizzle in about ½ cup mayonnaise mixture (consistency should resemble heavy cream). Transfer to a food processor and slowly drizzle in remaining mayonnaise."
  - "(Consistency will be slightly looser than unbroken mayonnaise but still thick and creamy.)"
  - It gives the food processor's bowl volume as its reason a batch can fail ("the success of making mayonnaise in the food processor depends on having enough volume in the bowl").
- **Not found at source, and so not printed:** a citable statement that "too much oil for the
  water" breaks a mayonnaise (Part C 8c's second cause), a keeping time for mayonnaise made with
  raw yolks, and hollandaise temperatures. The fresh-yolk rescue in Part C 8c has no source here
  beyond search results; a lesson may mention it only as common practice, labelled as such.

**Eggs and safety, rechecked and added.**

- **USDA FSIS, "Shell Eggs from Farm to Table"**, https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/eggs/shell-eggs-farm-table ,
  "Last Updated: Nov 20, 2024". Read: full, via Internet Archive capture 20260829182605 (live site
  blocks automated readers). The page quotes McGee's book on egg history; not used (unread line).
  - Salmonella: "Unbroken, clean, fresh shell eggs may contain Salmonella Enteritidis (SE) bacteria that can cause foodborne illness." Routes: SE "can contaminate eggs during their development inside the hen’s reproductive tract, before the shell even forms around the yolk and egg white"; via the shell on laying; and "through the pores of the shell". "if present, the SE can be in the yolk or “yellow” or the albumen “egg whites” or on the egg shell."
  - Carton statement: "SAFE HANDLING INSTRUCTIONS: To prevent illness from bacteria: Keep eggs refrigerated, cook eggs until yolks are firm and cook foods containing eggs thoroughly."
  - "Everyone is advised against eating raw or undercooked egg yolks and whites or products containing raw or undercooked eggs. This includes “health food” milk shakes made with raw eggs, Caesar salad, Hollandaise sauce and any other foods like homemade mayonnaise, ice cream or eggnog made from egg ingredients that are not thoroughly cooked." Then: "Infants, young children, older adults, pregnant women and people with weakened immune systems are particularly vulnerable to SE infections." And: "However, in-shell eggs that have been pasteurized may be used safely without cooking."
  - Pasteurised shell eggs: "Pasteurized shell eggs are available at some grocery stores." "The equipment to pasteurize shell eggs isn't available for home use and it is very difficult to pasteurize shell eggs at home without cooking the egg."
  - FDA Egg Safety Rule (21 CFR part 118): "requires virtually all egg producers with 3,000 or more laying hens to implement measures to prevent SE from contaminating eggs on the farm", including pest control, "purchasing chicks and pullets from suppliers who control for Salmonella in their flocks", biosecurity, refrigeration on the farm and in transport, and environmental testing.
  - Grades: "Grade AA and Grade A eggs are best for frying and poaching where appearance is important." Aging: "The white would be thinner, losing some of its thickening and leavening powers. The yolk would be flatter, larger and more easily broken."
  - Refrigeration: "A cold egg left out at room temperature can sweat, facilitating the movement of bacteria into the egg." "Refrigerated eggs should not be left out more than 2 hours." Store "in their carton and place them in the coldest part of the refrigerator, not in the door."
  - Cracks: "Bacteria can enter eggs through cracks in the shell. Never purchase cracked eggs. If eggs crack during hard cooking, they are safe."
  - Aging: "Moisture and carbon dioxide in the white evaporate through the pores, allowing more air to penetrate the shell and the air cell becomes larger." Peeling: "The increase in pH reduces the attraction of the outer (thin) albumen to the inner shell membrane allowing for easier peeling of the hard cooked egg."
  - Washing: "No. It's not necessary or recommended for consumers to wash eggs. This increases the risk of contamination because the wash water can be “sucked” into the egg through the pores in the shell."
  - Hard-cooked eggs: "Hard-cooked eggs should be refrigerated within 2 hours of cooking and used within a week." Peeling: "When an egg is laid, the albumen has a neutral pH (around 7.4). As an egg ages, the pH of the albumen increases to approximately 9." ... "For this reason, older eggs make better candidates for hard cooking."
  - Green ring: "A green ring on a hard-cooked yolk can be a result of overcooking as the sulfur and iron compounds in the egg react on the yolk's surface. The green color can also be caused by a high amount of iron in the cooking water. Scrambled eggs cooked at too high a temperature or held on a steam table too long can also develop a greenish cast. The green color is safe to consume."
  - Float: "An egg can float in water when its air cell has enlarged sufficiently to keep it buoyant. This means the egg is of poor quality, but it may be perfectly safe to use. Crack the egg into a bowl and examine it for an off-odor or unusual appearance before deciding to use or discard it."
  - Cooking: "eggs must be cooked thoroughly until yolks are firm. Scrambled eggs should not be runny." Egg dishes to 160°F. "To make a recipe safe that specifies using raw eggs, heat the eggs separately from all other ingredients in a liquid form over low heat, stirring constantly, until the mixture reaches 160 degrees F. Then combine it with the other ingredients and complete the recipe." "Use pasteurized eggs or egg products when preparing recipes that call for using eggs raw or undercooked." Cooked egg dishes "Use within 3 to 4 days"; storage chart: raw yolks or whites 2 to 4 days in the fridge.
- **University of Nebraska–Lincoln Extension, "How to Avoid a Green Ring on Hard-Boiled Egg Yolks"**
  (Part C 8b), rechecked, direct. The [T] quotation matches. "It's unattractive, but not harmful."
  "The reaction is usually caused by overcooking, but can also be caused by a high amount of iron in
  the cooking water." "Eliminate the ring by avoiding overcooking and by cooling the eggs quickly
  after cooking. Run cold water over the just-cooked eggs or place them in a bowl or container of ice
  water until they have completely cooled." "Reviewed and updated in 2024."
- **Why the UK changed its advice: the FSA's October 2017 announcement, as reproduced by the
  Institute of Food Science and Technology**, "New advice on eating runny eggs - FSA",
  https://www.ifst.org/news/new-advice-eating-runny-eggs-fsa-0 . Read: full, direct. The IFST page
  carries no date; the FSA original on food.gov.uk was not opened (the old news URLs moved with the
  GOV.UK migration). Trade reports date it 11 October 2017 (search result only).
  - "The decision to change the advice is a result of the findings from an expert group that was set up by the Advisory Committee on the Microbiological Safety of Food (ACMSF) in February 2015 to look at egg safety. Its report, published in July 2016, highlighted that the presence of salmonella in UK eggs has been dramatically reduced in recent years, and the risks are very low for eggs which have been produced according to food safety controls applied by the British Lion Code of Practice. More than 90% of UK eggs are produced under this scheme."
  - "A range of interventions have been put in place across the food chain as part of the Lion scheme including: vaccinating hens, enhanced testing for salmonella, improved farm hygiene, effective rodent control, independent auditing and traceability, and keeping the eggs cool while transporting them from farm to shop."
  - "The revised advice does not apply to severely immunocompromised individuals, who require medically supervised diets prescribed by health professionals".
  - "The existing advice on UK non-Lion eggs, non-hen eggs and eggs from outside the UK, is that they should always be cooked thoroughly for vulnerable groups."
  - Its advice when eating raw or lightly cooked eggs: "store eggs safely in a cool dry place such as the fridge"; good kitchen hygiene; "observe ‘best before’ dates."
  - The 2017 text names only the Lion scheme; Laid in Britain was added later (the current FSA fact checker, Part B 3.5, and the NHS, Gate closures lesson 4, name both). The ACMSF report itself was not read.
  - No source read compares Salmonella rates in US and UK eggs, so a lesson must not say which supply is safer.
- **Videos, metadata only (not watched):** Jacques Pépin, "How To Properly Poach An Egg", KQED Food,
  309 s (description: "a number of tricks for not making the eggs rubbery, as well as a method to
  prepare them in advance of serving"); "Learn Jacques Pépin's famous omelet techniques", American
  Masters PBS, 353 s (description: "two different techniques for making this perfect egg dish").

## Gate closures, lesson 6

*Stage 3 top-up for lesson 6, 2026-09-24. Every page below was downloaded with curl and its text
extracted locally; quotations are copied from that text, direct, including curly apostrophes where
the page uses them. This section rechecks the [T] and fetch-tool quotations the outline's
unverified-figures table allows lesson 6 to print, and adds five pages (the ATK pan sauce page
re-read in full, two ATK stir-fry pages, a January 2026 law-firm summary of state PFAS laws, and the
Alzheimer's Society page re-read). G9 needed nothing new: lesson 6 uses lesson 2's "about 140°C",
attributed as lesson 2 attributes it. No Serious Eats page was opened; every Serious Eats figure
below is from the publisher's syndicated copy or a newspaper report of it.*

**The outline's unverified-figures table, rechecked.**

- **Audrey Wilson, "Let's Talk Food: Steaks at room temperature or not?", *Hawaii Tribune-Herald*,
  19 February 2019** (Part C 3a, 10e). Read: full, direct. Byline and date confirmed. A newspaper
  column reporting Kenji López-Alt's test; much of it is written in his first person without quotation
  marks, so it is not always clear which sentences are his and which are hers. Treat it as her report.
  - "After 20 minutes, the temperature rose to less than 2 degrees. In fact, even after two full hours, the temperature had barely risen by 10 degrees"
  - "Simply blotting your steak with paper towels before searing it will improve it far better than any amount of room temperature resting will."
  - On salting ahead, the time left out here: "long enough to let salt draw out liquid and then for that liquid to be re-absorbed leaving a dryer surface".
  - The column also says a steak dried uncovered on a rack in the fridge "for a couple of nights" browns fastest, and that salting "about 40 minutes in advance" helps. **The outline forbids printing the salting minutes; lesson 6 does not.**
  - **Not used, and a reviewer should know why:** the column says "it still requires 50 times more energy to evaporate the moisture on the surface of the steak than it does to raise its temperature all the way from freezing to boiling." Lesson 2's own arithmetic from Engineering ToolBox's tables (2,256 kJ/kg to vaporise against about 418 kJ/kg to heat from 0 to 100°C) gives a little more than five times. The column's figure is ten times too high or means something unstated.
  - The column gives the other side: "However, Bon Appetit has a different opinion and states leaving meat out to sit at room temperature before cooking won’t kill you, but instead will give you a juicier, more evenly cooked steak." Bon Appétit itself was not read.
- **Leah Colins (the byline as the page prints it; Part C 10f had "Leah Collin"), "For the Juiciest
  Steaks With the Best Crust, I Always Break This Classic Cooking Rule", Serious Eats, syndicated on
  Yahoo, 15 July 2026**, https://www.yahoo.com/lifestyle/articles/juiciest-steaks-best-crust-always-210000151.html .
  Read: full, direct. The [T] quotation in Part C 10f matches.
  - "Burgers flipped every 15 seconds browned just as well as those flipped once, cooked in about two-thirds the time, and had roughly 40% less overcooked meat around the edges."
  - "Every time you turn the steak, the hotter side faces upward and sheds some of its stored heat into the surrounding air while the cooler side gets its turn against the skillet."
  - "Kenji points out in his testing that flipping only once won't ruin your steak, and frequent flipping won't transform a mediocre steak into the best one you've ever eaten. The differences are noticeable but a bit subtle: a slightly more even interior, a little less overcooked meat at the edges, and often a shorter cooking time by a couple of minutes."
  - The writer flips "every 30 to 60 seconds"; McGee's testing is reported as showing every 15 seconds works; McGee's own column was not read.
- **America's Test Kitchen, "Searing Steak"** (Part C 1). Read: full, direct. No author or date.
  The [T] quotation matches.
  - Method: eight 1¼-inch rib-eyes in two batches; one seared then finished "in a 250-degree oven" to 125°F; the other oven first to about 110°F, then seared to 125°F.
  - "We found that both sets of steak lost nearly an identical amount of liquid: around 22 percent of their weight."
  - "The notion of sealing in juices is thus nothing but an old wives’ tale."
- **Liebig and the 1930s tests:** no non-Wikipedia source was found, so, as the outline directs,
  lesson 6 does not name Liebig or the 1930s tests and rests the myth on the ATK test.

**ATK on pans, crowding and pan sauces, re-read.**

- **America's Test Kitchen, "The Best Stainless-Steel Skillets"**, equipment review, schema date
  25 June 2025, author given as America's Test Kitchen,
  https://www.americastestkitchen.com/equipment_reviews/1944-12-inch-stainless-steel-skillets .
  Read: the review text in the page source, direct. The Part C 6 and 7 [T] quotations match; the
  crowding one is longer than Part C gave it.
  - "If you try to cook four steaks in a 12-inch skillet that has a cooking surface diameter of 8 inches, for example, the pan will struggle to recover its heat, so one side of the steaks will come out gray and steamed with sparse fond that will make paler, weaker pan sauce."
  - On tall sides: "These trapped condensation, steaming food instead of allowing it to lose moisture and encouraging browning."
  - "Aluminum conducts heat quickly, making the pan responsive to temperature changes; steel conducts slowly and retains heat, so the pan cooks remarkably evenly across its surface."
  - "Aluminum reacts to acidic foods, but stainless steel doesn’t, so you can cook anything without fear of flavor transfer and damage to the pan." **This closes Part D 3f's unsourced practical note** on plain aluminium and acid, at the level of one test kitchen's statement.
- **ATK, "Pan Sauces 101"** (Part C 8f). Read: full, direct. No author or date. The two [T]
  quotations match.
  - "The base of a pan sauce is the fond, or browned bits, clinging to the bottom of the skillet after sautéing or searing meat, poultry, or fish."
  - "A nonstick skillet will not develop fond to the same degree as a traditional skillet will"
  - "If it is overcrowded, the food will steam and will fail to create much fond."
  - "Poorly maintained cast iron, however, will yield a metallic-tasting sauce."
  - "Cold butter is easier to incorporate into a sauce than softened butter and it makes for a sturdier emulsion that is more resistant to separation."
  - "it's best to use a low-sodium variety because reduction can result in overwhelming saltiness."
  - On gauging a reduction: "the reduced liquid can be poured back into the cup toward the end of simmering to gauge if it has been adequately reduced."
  - The seared meat is moved to a plate and tented loosely with foil because "it will help to keep any crust that has formed from turning soggy."
  - **Not on the page:** what boiling does to the finished sauce. Part C 8f's "Boil it and the emulsion breaks" is the researcher's reasoning, not ATK's. A lesson may say ATK calls cold butter more "resistant to separation" and let the reader test boiling.
- **ATK, "Should You Wash Mushrooms? The Definitive Answer"** (Part C 10b). Read: full, direct.
  - "Unless they’re foraged, most mushrooms do not need to be cleaned."
  - "the exposed gills on varieties such as portobello, shiitake, and oyster can grab substantial amounts of water that prolongs cooking and makes it harder for them to brown."
  - After a one-minute soak, "the mushrooms without exposed gills retained almost no water, while those with them soaked up as much as 25 percent of their weight in liquid."
  - "And unlike almost any other foods you can think of, they’re virtually impossible to overcook."
- **Dave Arnold, "Crowded Wet Mushrooms. A Beautiful Thing.", Cooking Issues, 21 December 2009**
  (Part C 6). Read: full, direct, with the comments.
  - "The soaked mushrooms do take on water, but that water cooks off in the pan."
  - Method: "To make the test really severe, I decided to cook the soaked mushrooms in one batch in an extremely crowded pan, and the dry mushrooms in 3 batches with plenty of room. We weighed out identical amounts of salt and oil (this is the crucial part) and began cooking."
  - Result: "They looked as good and tasted better and less oily than their dry cousins"
  - Arnold's own reply in the comments, 22 December 2009: "They browned quite well once the liquid in the pan evaporated."
  - One test, one kitchen, tasted by the people who ran it.

**Stir-frying (new; the outline allowed no claims about a wok beyond what was read).**

- **Lan Lam, "The Science of Stir-Frying in a Wok", America's Test Kitchen (Cook's Illustrated),
  published 1 April 2020**, https://www.americastestkitchen.com/cooksillustrated/articles/2189-the-science-of-stir-frying-in-a-wok .
  Read: full, direct (the public part).
  - She quotes Buwei Yang Chao's 1945 *How to Cook and Eat in Chinese*: "ch’ao may be defined as big-fire-shallow-fat-continual-stirring-quick-frying of cut-up material with wet seasoning." Chao's book was not read; the quotation is at one remove, through Lam.
  - "SEAR ZONE: The bottom of a wok is the hottest part (it can exceed 750 degrees when set over a conventional gas burner) because it makes direct contact with the heat source. Food that passes through this part of the pan cooks rapidly and acquires flavorful browning."
  - "STEAM ZONE: A couple of inches above the wok’s base, a layer of steam forms as moisture escaping from the food is corralled by the vessel’s tall sides. As this steam heat hits the food, it helps the food cook through quickly."
  - Stirring thin beef constantly against occasionally, over gas: the constantly stirred batch cooked "about twice as fast". She notes woks behave differently on electric and induction hobs.
  - Side-by-side tastings of the same dishes from a wok and a skillet favoured the wok. A tasting by the test kitchen, not a blind trial reported in numbers.
- **America's Test Kitchen, "Technique #20: Make Superior Stir-Fries Without a Wok", published 12
  October 2023**, https://www.americastestkitchen.com/articles/7725--how-to-stir-fry-without-a-wok .
  Read: full, direct.
  - "Even a skillet set over high heat won’t get hot enough to quickly stir-fry either large amounts or large pieces of food. So it’s important to cut the ingredients into bite-size pieces and to cook relatively small amounts of food at one time."
  - "If necessary, cook the protein in batches to avoid overcrowding the pan, which will cause the protein to steam rather than sear."
  - "And despite the name, don’t stir constantly. Leaving it alone will let your stir-fry brown and caramelize."
  - **The two ATK pieces disagree on stirring**: Lam's wok test found constant stirring cooked beef about twice as fast; the 2023 skillet technique says not to stir constantly. They are different pans on possibly different heat, and neither page addresses the other.
  - This page uses a nonstick skillet and says to heat the oil "until just smoking". No source read here says what temperature that is in a nonstick pan.

**Pans: conductivity rechecked.**

- **Engineering ToolBox, "Metals, Metallic Elements and Alloys: Thermal Conductivities"**,
  https://www.engineeringtoolbox.com/thermal-conductivity-metals-d_858.html . Read: the table,
  direct. W/(m·K): copper 401 (at 0°C); aluminium 236 (at 0°C); aluminium alloy 3003, rolled, 190;
  aluminium alloy 360, 150; cast iron 52 (at 20°C); carbon steel, 0.5% C, 54; stainless steel type
  304, 14.4. These match Part C 7. Which alloys cookware uses was not read, so a lesson gives pure
  aluminium and notes the alloy range without saying which is in a pan.
- The 10 to 20 minute cast-iron preheat stays unprinted (weak secondary). Part C 7's TiffyTaffy page
  was re-read directly; its uneven-heating paragraph is the author's, and the Kenji soap quotation on
  it ("The same way we can use soap inside a Tupperware container...") is attributed there to
  López-Alt without a source. Not used.

**Cast iron, Lodge, rechecked.** All read full, direct. The Part C 10g and Part D 3b [T] quotations
match, with the differences noted.

- **Lodge, "How to Clean"**: "Start with warm, soapy water and scrub with a stiff-bristled brush or scrubbing pad." "Dry completely with a paper towel or lint-free cloth." "Add a thin layer of oil, using a paper towel to distribute it over the entire surface." FAQ: "No! Soaking cast iron in water is a recipe for rust." "Soap is totally okay! The soap we use for washing dishes today is no longer strong enough to remove seasoning from cast iron and is an easy way to prevent build up." "A dishwasher will remove the seasoning and likely cause rust."
- **Lodge, "How to Season"**: "Seasoning is just oil baked onto the pan through a process called polymerization." "Over time, these layers build up to form a strong, nonstick cooking surface." FAQ: "Recipes that call for acidic ingredients—like tomato sauce or lemon juice—aren’t the best choice for new cast iron because they can break down seasoning. After you build up your seasoning, you can introduce acidic ingredients with cook times under 45 minutes." **Note for the "naturally non-stick" myth:** the maker itself calls a built-up seasoning nonstick. What the lesson can correct is "naturally": the slickness is oil built up by use.
- **Lodge, "3 Tips for Cooking Acidic Foods in Cast Iron"**: the page's schema date is 11 February 2025 (Part D 3b gave 9 May 2023, perhaps the original). "Similarly, deglazing your pan with wine or adding a little lemon juice to your dish shouldn’t cause problems." "As a general rule, you shouldn’t leave acidic ingredients directly in cast iron for more than about 45 minutes."
- **Lodge, "10 Myths About Cast Iron Cookware, Busted!"**: "Soap isn't necessary, but you can use mild dish soap to clean cast iron." (The page italicises "can".)

**Nonstick and PFAS, rechecked and one source added.**

- **FDA, "Authorized Uses of PFAS in Food Contact Applications"**, content current as of 3 January
  2025. Read: full, direct. The fetch-tool sentence is on the page, in the table row for pots and pans.
  - "The manufacturing process vaporizes off virtually all the smaller (i.e., migratable) PFAS molecules."
  - "Studies show negligible amounts of PFAS in this coating can migrate to food."
  - "only paper and paperboard agents would result in dietary exposure to PFAS that may result in a potential safety concern"
- **EPA, "Risk Management for Per- and Polyfluoroalkyl Substances (PFAS) under TSCA"**, last updated
  26 March 2026. Read: full, direct. The second goal: "To commit to working toward the elimination of these chemicals from emissions and products by 2015." And: "All companies have met the PFOA Stewardship Program goals."
- **Prachi Patel, C&EN**, 2025 (Part D 3a). Read: full, direct. Additions to Part D 3a:
  - "PTFE degrades when it’s heated above 260 °C, releasing smaller PFAS molecules into air and food."
  - "The fumes are also fatal to birds. But cases of such effects are uncommon, and it is unclear whether exposure from regular use harms human health."
  - Gillian Miller of the Ecology Center, quoted directly: "The amounts might be low and not a concern, but there’s no simple answer," and, on manufacturing: "If you ignore that and say we made this inert polymer, you completely ignore the manufacturing impact."
  - Steve Burns (CSA; the article calls it the "Cookware Safety Alliance"), quoted directly: "Folks who are looking to ban nonstick cookware now are seeking to right the wrongs of the past."
  - C&EN says "PTFE makers phased it out in 2012" (PFOA); EPA's page gives the program's 2015 goal and says all companies met the goals. The lesson uses EPA.
  - "Users often complain that ceramic coatings lose their nonstick property sooner than PTFE does. Scientific reviews are mixed."
- **Cookware Sustainability Alliance, home page.** Read: full, direct. Page now carries a "July 2026 – Special Report".
  - "Global public health authorities, academics and scientists have studied PTFE for decades and consistently conclude it is an inert molecule that is non-bioaccumulative, insoluble in water, non-toxic, and therefore safe for consumers."
  - "The same compounds used in non-stick cookware (PTFE) are also used in life-saving medical devices, such as pacemakers."
  - "The problematic PFAS (like PFOA) were never used on cookware and were banned from chemical production over a dozen years ago."
  - It lists Illinois, Delaware, West Virginia, New Mexico and Canada as exempting fluoropolymer cookware from their PFAS rules. Not checked against the laws.
- **Shannon Kelleher, The New Lede, 29 September 2025** (Part D 3a). Read: full, direct. The quotations
  match. Also on the page, all reported by the journalist rather than quoted:
  - "Chemours, a spinoff of the chemical company DuPont and the nonstick coating’s manufacturer, warns on its website not to use Teflon-coated cookware to broil food, which requires heating it to at least 500°F, or to preheat empty nonstick pans at high heat, since the coating can deteriorate." Chemours' page was not read.
  - "More than 265 suspected cases of Teflon flu — which causes a fever, chills and headache — were reported in 2023, the highest number since the year 2000." No source is given for the figure; not used.
  - David Andrews (EWG), on swallowed flakes: "I’ve seen no studies looking at that, specifically."
  - The Los Angeles County Sanitation Districts' letter, in full as quoted: "Acting boldly to turn off the spigot of PFAS in consumer products is the only meaningful and cost-effective way to potentially avoid further PFAS contamination and avert the need for expensive treatment systems". Lohmann, quoted: "I don’t see manufacturers being able to produce [Teflon pans] without adding contamination to the environment".
  - The article reports that Chemours stopped using PFOA in 2015, switching to the processing aid GenX, which a 2021 EPA assessment found "highly toxic at small doses" (the journalist's words). The EPA assessment was not read.
  - Who publishes The New Lede was not confirmed (its about page refused automated access), so a lesson states no affiliation for it.
- **Morgan Lewis, "State Regulation of PFAS in Consumer Products Continues to Gain Momentum in
  2026", LawFlash, 21 January 2026**, https://www.morganlewis.com/pubs/2026/01/state-regulation-of-pfas-in-consumer-products-continues-to-gain-momentum-in-2026 .
  Read: full, direct. A law firm's client note, the most recent summary read.
  - Colorado: "On or after January 1, 2026, no person shall sell or distribute the following products with intentionally added PFAS", cookware among them.
  - Maine: "Beginning January 1, 2026, the following products containing intentionally added PFAS cannot be sold in the state", cookware among them.
  - Connecticut: cookware with intentionally added PFAS from 1 July 2026, which "may continue to be sold or distributed only if Connecticut’s Department of Energy and Environmental Protection receives prior notification in writing." (The New Lede, four months earlier, said 2028 for Connecticut; the later note is used.)
  - Minnesota's first prohibitions, cookware among them, "became effective on January 1, 2025".
  - New Jersey enacted a law on 12 January 2026 covering cookware from January 2028.
- **California SB 682's veto (13 October 2025)** stays at Part D 3a's read level (a law firm's note,
  fetch tool at Stage 1; the page now refuses automated access). A lesson may state the veto as a
  fact with that read level; it does not quote the governor.
- **EFSA 2020** (Part D 3a), rechecked, direct: PFAS in food are "most often found in drinking water, fish, fruit, eggs, and egg products."

**Aluminium, rechecked.** **Alzheimer's Society, "Metals and the risk of dementia"**, Internet
Archive capture 20251112073331 (the live page refuses automated access). Read: full, direct.

- "There is no strong evidence to suggest that everyday contact with metals increases a person’s risk of developing dementia."
- On the 1965 rabbit study: "Importantly, these results were only seen with extremely high doses - far more than we normally get from our environment."
- "Other studies have suggested that high aluminium exposure might be related to an increased risk of dementia. These studies are small and others contradict them. The levels that are considered high are far greater than people are normally exposed to."
- "No convincing relationship between aluminium and the development of Alzheimer's disease has been established."

## Stage 4 note, lesson 4

*Stage 4 review, 2026-09-24. Re-downloaded and read direct: the FSIS Appendix A PDF (Tables 3 and 4
rendered and read from their images; every chicken figure in Part B 6.1 confirmed), the FSA pages
through the GOV.UK Content API, the Salon copy of Desalu, the PubMed abstracts, CIDRAP, and the FSIS,
CDC and USDA pages through 2026 Internet Archive captures. These passages were not recorded above and
lesson 4 now relies on them.*

- **FSA, "Cooking your food"** (direct): the top tips say "check that food is cooked completely
  before serving - use visual cues, such as making sure the food is steaming hot" and "consider using
  a food thermometer to verify the correct temperature"; section 2.1 opens "If you don't have a food
  thermometer, then you can use visual cues", and section 4.1 gives the thermometer first, then
  "If you don't have a thermometer, you should use the following visual cues". So Part B 3.1's
  "Primary cue is visual" overstates the page: it offers a thermometer, or cues without one. Also
  "Leftovers can be eaten cold if they have been cooked properly, cooled, and put in the fridge
  within two hours." and "Eat leftovers within 48 hours or freeze them if you think this won't be
  possible."
- **FSA, "How to chill, freeze and defrost food safely"** (direct): "To cool food quickly, divide
  food into smaller portions in containers or freezer bags before putting in the fridge or freezer."
  "store raw meat, poultry and fish in their packaging or in clean sealed containers on the bottom
  shelf of the fridge". "That's why we advise that the safest way to defrost food is in the fridge
  overnight."
- **Shumaker 2022 abstract, in full** (PubMed efetch). Part D 3e recorded two sentences. The rest:
  participants "self-reported washing poultry"; "Treatment group participants received three e-mail
  messages" from USDA material advising against washing; chicken thighs were "inoculated with
  traceable nonpathogenic Escherichia coli strain DH5α"; "Three hundred people participated in the
  study (158 control, 142 treatment)"; "93% of treatment group participants but only 39% of control
  group participants did not wash the chicken". "Among chicken washers, 26 and 30% of the lettuce
  from the prepared salad was contaminated for the control and treatment groups, respectively. For
  nonwashers, 31 and 15% of the lettuce was contaminated for the control and treatment groups,
  respectively." "Hand-facilitated cross-contamination is suspected to be a factor". The 2019 press
  release's 26% and 31% match the control group; the release does not mention the treatment group.
  **A lesson that gives only the release's pair implies non-washers always did worse; they did not.**
- **Henley 2018 abstract** (Semantic Scholar): the washes were "10% vinegar or 10% lemon juice", for
  "10 s, 30 s, 2 min or 5 min", on breasts inoculated with "approximately 5 × 10^8 CFU".
- **Desalu, Salon copy** (direct), passages not recorded above: Chapman in full: "Bleach-based
  solutions are the safest for cleaning. We don't have good data that proves vinegar kills what's in
  your sink. It does [help], but lemons and vinegar don't do enough. Look at the liquid like it's a
  pathogen, limit where it may tread then do a good job of cleaning and sanitizing." (Gate closures,
  lesson 4 stopped after "your sink.", which dropped his concession.) Jackson, by phone: "The United
  States Virgin Islands was a port for slavery. Food for [slaves] were leftovers kept in dirty
  buckets. [By nature], animals aren't clean." (brackets Salon's). Desalu's method sentence
  continues "for a few minutes to “wash” away the germs". Bobbi "cleans her sink and countertops with
  the leftover lemons to avoid cross contamination" (Desalu's words). Desalu's conclusion: "I will,
  update my family tradition by sanitizing with a bleach-based solution instead of vinegar because
  tradition can change a little."
- **FSIS, "Washing Food"** (Wayback 2026): on soaking, "Carefully pour out the soak and do not reuse
  it. Wash the container you used for the soak or sanitize it in the dishwasher. Clean and then
  sanitize your inner sink and any surfaces that touch the used soak." And: "Some consumers may wash
  or rinse their raw meat or poultry because it's a habit or because a family member they trust has
  always washed their meat."
- **FSIS, "The Big Thaw"** (Wayback 2026), verbatim: "After thawing in the refrigerator, items such as
  ground meat, stew meat, poultry, seafood, should remain safe and good quality for an additional day
  or two before cooking; red meat cuts (such as beef, pork or lamb roasts, chops and steaks) 3 to 5
  days."
- **CIDRAP, 24 May 2011** (direct, rechecked): "If raw pork is cooked to 145ºF and then allowed to
  stand for 3 minutes, it may still be pink but is safe to eat, the statement said". This is the
  read source for the US "pink is fine" row in Part B 7.
- **FSIS, "Food Product Dating"** (Wayback 2026): "Manufacturers provide dating to help consumers and
  retailers decide when food is of best quality."

## Stage 4 note, lesson 5

*Stage 4 review of lesson 5, 2026-09-24. Each page below was downloaded with curl and its text
extracted locally; quotations are copied from that text, direct.*

- **Correction to the Egg Safety Center entry in "Gate closures, lesson 5".** The live page's table
  does not give "Cook until no visible liquid egg remains" for scrambled eggs. That wording is its
  row for an **egg white omelet** (144-149°). Scrambled eggs share a row with fried eggs: "Scrambled
  eggs, fried eggs over easy, over hard, and basted | 144-158° | Cook until whites are completely
  set, and the yolks begin to thicken but are not hard." Omelettes and frittatas: "Omelets,
  frittatas and recipes with added liquid | 160 ° | Eggs will be thickened with no visible liquid
  egg remaining." Lesson 5 is corrected.
- **FSA, "New advice on eating runny eggs", food.gov.uk, "Last updated: 11 October 2017".** Read:
  full, direct, through the Internet Archive capture of 17 October 2017,
  https://web.archive.org/web/20171017232923/https://www.food.gov.uk/news-updates/news/2017/16597/new-advice-on-eating-runny-eggs .
  The text matches the IFST copy word for word in every passage quoted in the gate closures above,
  so the date is now confirmed at source. It adds that the advice "is only for eggs produced under
  the British Lion Code of Practice", and names the groups as "infants, children, pregnant women and
  elderly people".
- **ACMSF Ad Hoc Group on Eggs, "An update on the microbiological risk from shell eggs and their
  products"**, July 2016 (the back page's date and the PDF's creation date, 27 July 2016; the cover
  carries a stray "September 2012" that the text does not otherwise support), through the Internet
  Archive capture of 20 December 2016,
  https://web.archive.org/web/20161220073347/https://www.food.gov.uk/sites/default/files/acmsf-egg-reportv1.pdf .
  Read: the overall risk assessment and key recommendation (pages 8 and 9), and paragraph 5.47,
  found by searching the full text. The rest was not read.
  - "It was the strong view of the Working Group that there has been a major reduction in the microbiological risk from Salmonella in UK hen shell eggs since the 2001 ACMSF report."
  - "the group suggests that the risk level for UK hen shell eggs produced under the Lion Code, or under demonstrably-equivalent comprehensive schemes, should be ‘VERY LOW’, with a low degree of uncertainty, whilst for other shell eggs the risk level should be considered ‘LOW’."
  - Such eggs "can be served raw or lightly cooked to all groups in society, including those that are more vulnerable" to infection, including in care homes and hospitals. The footnote excludes "severely immunocompromised individuals such as those undergoing transplant surgery".
  - "The risk from non-UK eggs has also been reduced, but not to the same extent."
  - Egg washing, 5.47: under Regulation (EC) 589/2008 "washing of Class A table eggs ... is generally not permitted" and "This practice is not permitted in the UK."
  - The parts read compare Lion eggs with other and non-UK eggs; none compares UK with US eggs, so the rule above (no lesson says which supply is safer) stands.
- **FSIS "Shell Eggs from Farm to Table"**, same capture, rechecked for the grades: "U.S. Grade AA
  eggs have thick, firm whites"; Grade A has "characteristics of Grade AA eggs except that the whites
  are “reasonably” firm." And for washing at the plant: processors "carefully wash and sanitize
  USDA-graded eggs ... at temperatures that prevent wash water from being “sucked” into the egg."
- **Marc Anton**: the PDF's header reads "M. ANTON" with the address marc.anton@nantes.inra.fr; the
  first name is taken from that address.

## Gate closures, lesson 7

*Stage 3 top-up for lesson 7, 2026-09-24. Every page below was downloaded with curl and its text
extracted locally (GOV.UK through the Content API; the MMWR through an Internet Archive capture,
because cdc.gov refused automated access); quotations are copied from that text, direct, with the
page's own curly apostrophes and dashes. No Serious Eats page was opened: the two Serious Eats
articles are read in the publisher's syndicated copies on AOL. The outline's unverified-figures
table allows lesson 7 the resting re-test's 16 in 30 after a recheck; it is rechecked here. The
outline names no Stage 1 gate for lesson 7; the pages below recheck the [T] and fetch-tool items it
relies on, and add the FDA's acrylamide pages, which Part D 3f did not have.*

**Resting, rechecked.**

- **Daniel Gritzer, "This Major Rule About Cooking Meat Turns out to Be Wrong", Serious Eats,
  syndicated on AOL**, https://www.aol.com/major-rule-cooking-meat-turns-155336379.html ,
  datePublished 22 July 2025, author "Daniel Gritzer" in the page's structured data, which also
  gives the original as https://www.seriouseats.com/meat-resting-science-11776272 (not opened).
  Read: full, direct. The [T] items in Part C 2 match, with these additions and corrections.
  - The usual explanation, as Gritzer states it for resting's proponents: resting "gives the muscle fibers time to relax and reabsorb juices that were pushed toward the center during cooking."
  - Kenji's old test, as Gritzer describes it: "Kenji cooked each steak sample to an internal temperature of 125°F, then sliced them in 2.5-minute intervals starting at zero minutes and continuing until the last one had rested 12.5 minutes. The steak that wasn't rested gushed juices when sliced, but by the 10-minute mark, the meat was hardly losing any at all." Gritzer says Kenji "wrote that piece more than 15 years ago".
  - The flaw: "Because Kenji pulled all the steak samples at 125°F and sliced into each one in successive 2.5-minute intervals, temperature changes during resting were not controlled for: Inside the meat, heat was flowing from the hotter exterior towards the center, cooking it further, a phenomenon colloquially called "carryover cooking." At the same time, that stored heat was dissipating into the wider environment, leading to an overall cooling even as the center warmed."
  - **Chris Young's tests are in a video, which this course did not watch**; Gritzer describes them: "Young's tests suggest that when samples of seared meat are sliced at the same final internal temperature, resting has no measurable effect on juice loss at all." And: "According to Young, it comes down to vapor pressure: The hotter the meat, the more energy the internal moisture has, leading to higher vapor pressure that pushes liquid outward when the meat is cut." Gritzer also summarises Meathead (AmazingRibs.com, 2013; not read): juice on the board can be poured back, and skipping the rest keeps a crust from steaming.
  - The pull-quote, exact: "Resting meat is best understood as a method of temperature control, not juice retention."
  - **His test was on pork, not steak** (Part C 2 did not say): "I bought a boneless pork loin and carefully sliced it into uniform 1.5-inch-thick chops". Unsalted; induction pan at 350°F; flipped every 30 seconds; pulled at "130°F for chops that would rest to 140°F, and 137°F for chops I planned to slice immediately"; slices cooled to room temperature before tasting; "a Two-Alternative Forced Choice (2-AFC) sensory test with four tasters across 30 rounds of tasting"; tasters' eyes closed; forced to pick the juicier. **140°F is below the US consumer figure for pork (145°F with a 3-minute rest).** A lesson citing the test says so.
  - Result, exact: "Across 30 tasting rounds, my tasters identified the rested meat as juicier 16 times, an almost perfect 50/50 split. That's no better than a coin-flip". He adds that as the slicer he "thought the unrested meat had clear signs of having cooked a little more due to the aggressive carryover".
  - **Carryover, measured by him**: "The most common advice when resting meat is to cook it roughly 5–15°F shy of the desired final core temperature. Then let it rest off-heat for 5 to 30 minutes, depending on the type and size of the cut". "But my 1.5-inch-thick chops completely defied this: Even when I pulled one a full 15°F before hitting its target temperature of 140°F, it had reached 140°F and threatened to surpass it in under three minutes." And: "Carryover cooking is greatly underestimated in both its speed and degree". How early to pull "depends on the type of meat, the cooking method, the cooking temperature, and the size and shape of the cut. In other words, it's damn-near impossible to offer a meaningful general rule. A good thermometer and some trial and error to build up experience are probably your best bet."
  - Conclusion: "It's a good idea to pull meat early from the pan or oven and let it rest, but only long enough to give it the time to slide up via carryover cooking to the target internal temperature, which you need to track closely." And his own hedge: "Is this the last word on meat resting? Eh, probably not."
  - Gritzer calls Young's thermometer "his Predictive Thermometer" and says Young is "now the maker of the Combustion Predictive Thermometer"; Gritzer used it and adds "(and no, this isn't an ad)". A lesson that names Young's view should state that interest once.
- **Laila Ibrahim, "Why So Many Meat Cooking "Rules" Are Wrong—and What Actually Makes Steaks
  Juicy and Chicken Crisp", Serious Eats, syndicated on AOL**, https://www.aol.com/articles/why-many-meat-cooking-rules-160000335.html ,
  datePublished 21 December 2025, author "Laila Ibrahim". Read: full, direct.
  - "When testers controlled for final internal temperature, rested and unrested meat lost essentially the same amount of juice." The [T] quotation matches.
  - **Correction to Part C 2:** the page does not say Gritzer, Kenji and Young each "reached the same conclusion". It says Daniel's tests were "building on earlier work from Kenji, Serious Eats' culinary director emeritus and food-science whiz, as well as Meathead from Amazing Ribs, and Modernist Cuisine alum Chris Young". So the 2025 view rests on Gritzer's test and Young's video, as the outline already said.
  - On probing: "the loss is so small that it's below what tasters can perceive" (attributed to Kenji's testing, not read).
  - The same piece's cold-start searing and chicken-below-165°F items are not used (the first is on the outline's do-not-teach list; the second belongs to lesson 4's time-plus-temperature tables, and Ibrahim's framing is not a regulator's).

**Pork and trichinellosis, rechecked.**

- **CIDRAP News, "USDA: 145 degrees is safe temp for pork", 24 May 2011**,
  https://www.cidrap.umn.edu/foodborne-disease/usda-145-degrees-safe-temp-pork . Read: full, direct.
  The fetch-tool quotations in Part D 3d match. Also:
  - The USDA's reason for the rest, as CIDRAP reports the statement: "During that time, the temperature stays the same or continues to rise, killing pathogens, the statement said."
  - "The USDA Food Safety and Inspection Service (FSIS) has determined that it is just as safe to cook pork to 145°F with a 3-minute rest time as it is to cook it to 160°F with no rest time, the agency said."
  - Hagen: "Now there will only be 3 numbers to remember: 145 for whole meats, 160 for ground meats and 165 for all poultry."
  - "If raw pork is cooked to 145ºF and then allowed to stand for 3 minutes, it may still be pink but is safe to eat, the statement said". Cured pork "will remain pink after cooking".
- **Wilson and colleagues, "Trichinellosis Surveillance, United States, 2008–2012", MMWR
  Surveillance Summaries 64(SS-1), 16 January 2015**, read through the Internet Archive capture
  20260726000434 (cdc.gov returned 403). Read: full, direct. The Part D 3d figures match. Also:
  - "measures taken by the U.S. pork industry many decades ago to improve the health of farm-raised hogs have made Trichinella infections in U.S. swine rare".
  - Pork products 22 cases, "including 10 (45%) that were linked with commercial pork products, six (27%) that were linked with wild boar"; bear meat 41 cases.
  - "Public Health Actions: Changes in domestic pork production and public health education regarding the safe preparation of pork have contributed to the reduction in the incidence of trichinellosis in the United States; however, consumption of wild game meat such as bear continues to be an important source of infection."

**FSA "Cooking your food", re-read for the minced and rolled rule.** GOV.UK Content API,
public_updated_at 18 December 2017. Read: full, direct. Part B 3.1 has the list; the sentence that
explains it was not recorded:
- Under "4.2 Minced meat and offal": "Any meat that has been minced or skewered all the way through should be cooked thoroughly. When a whole cut of meat is minced or skewered, this moves any bacteria from the outside all the way through the meat." The list that follows: "mincemeat (any type)", "burgers", "sausages", "kebabs", "rolled joints", "kidney, liver, and other types of offal".
- **The page's stated mechanism names mincing and skewering, not rolling.** Why a rolled joint belongs on the list (its outside surface is rolled into the middle) is a reader's inference from the same mechanism; a lesson says so where it uses it.
- On whole cuts, the page itself uses the word "seal": "sear the meat by using a high temperature to seal the meat and kill any bacteria that might be on the outside" and "check that the meat is properly sealed by ensuring that the outside of the joint has changed colour". Its "seal" is a surface kill, not a claim about juices.
- Whole bird: "the thickest part is the leg between the drumstick and the breast"; "Be sure to test the temperature of the meat and avoid the bones."

**Acrylamide: the regulators and the dissent, rechecked, with the FDA added.**

- **FSA, "Acrylamide"**, GOV.UK Content API: public_updated_at 9 January 2018. Read: full, direct.
  Part D 3f's quotations match. Also:
  - "Acrylamide is a chemical substance formed when starchy foods, such as potatoes and bread, are cooked at high temperatures (above 120°C)."; "it is a natural by-product of the cooking process and has always been present in our food." Foods listed include "roasted potatoes and root vegetables".
  - Home advice in full: "aim for a golden yellow colour or lighter when frying, baking, toasting or roasting starchy foods"; "follow the cooking instructions on the pack when cooking packaged foods like chips and roast potatoes"; "eat a healthy, balanced diet and get your 5 A Day to help reduce your risk of cancer".
  - The withdrawn fridge advice: "We previously advised consumers against storage of raw potatoes in the fridge at home, as it was thought this could lead to the formation of additional sugars (known as cold sweetening) which can then convert into acrylamide". Then the COT sentence as in Part D 3f, and "So, if you wish to help avoid food waste, you can choose to store either in the fridge or in a cool, dark place."
  - FSA Explains box: "Long cooking times and higher temperatures form more acrylamide than short cooking times and lower temperatures." "In 2015, the EFSA published its risk assessment of acrylamide in food. The assessment confirms that acrylamide levels found in food have the potential to increase the risk of cancer for people of all ages. However, it’s not possible to estimate how much the risk is increased." "EFSA’s Scientific Committee states that, for substances that are genotoxic and carcinogenic, a MOE of 10,000 or higher is of low concern for public health. The MOE identified in our total diet study on acrylamide have indicated a concern for public health. These range between 300 for an average adult consumer and 120 for toddlers."
- **EFSA, "Acrylamide" topic page**, https://www.efsa.europa.eu/en/topics/topic/acrylamide . Read:
  full, direct (no page date found; the opinion it describes is 2015).
  - "Currently, studies on human subjects have provided limited and inconsistent evidence of increased risk of developing cancer. However, studies on laboratory animals have shown that exposure to acrylamide through the diet increased the likelihood of developing gene mutations and tumours in various organs."
  - "Based on these animal studies, EFSA’s experts agree with previous evaluations that acrylamide in food potentially increases the risk of developing cancer for consumers in all age groups. While this applies to all consumers, on a body weight basis, children are the most exposed age group."
  - Forms "at +120°C and low moisture"; "The main chemical process that causes this is known as the Maillard Reaction; it is the same reaction that ‘browns’ food and affects its taste." "EFSA’s opinion states clearly that home-cooking choices can have a substantial impact".
  - Adults' main sources: "Fried potato products (including French fries, croquettes and roasted potatoes) and coffee/coffee substitutes".
  - A literature summary that EFSA flags: "it is important to note that EFSA has not evaluated the validity of these findings." It includes "Storage of potatoes at below 8°C generally increases sugar levels in potatoes, potentially leading to higher acrylamide levels following cooking" and "Toasting bread for five minutes instead of three minutes can increase the acrylamide content from 31µg/kg up to 118µg/kg ... Consumption of well-toasted bread, however, only increases overall average dietary exposure by 2.4%."
  - "since it is practically impossible to eliminate acrylamide entirely from the diet"; "some countries recommend to consumers: “Don’t burn it, lightly brown it”." And: "consumers should look for the latest recommendations provided by their national food safety authorities".
- **US FDA, "Acrylamide Questions and Answers"** and **"Acrylamide and Diet, Food Storage, and Food
  Preparation"**, https://www.fda.gov/food/process-contaminants-food/acrylamide-questions-and-answers
  and https://www.fda.gov/food/process-contaminants-food/acrylamide-and-diet-food-storage-and-food-preparation ,
  both "Content current as of: 03/05/2024". Read: full, direct.
  - "Acrylamide caused cancer in animals in studies where animals were exposed to acrylamide at very high doses. In 2010, the Joint Food and Agriculture Organization/World Health Organization Expert Committee on Food Additives (JECFA) concluded that acrylamide is a human health concern, and suggested additional long-term studies."
  - "In laboratory studies, acrylamide caused cancer in animals, but at acrylamide levels much higher than those seen in foods. FDA is now conducting research to determine whether the much lower levels of acrylamide in food pose a health risk to people".
  - "Should I stop eating foods that are fried, roasted, or baked? No." Its "best advice" is a healthy eating plan; "FDA is waiting for new research results before considering whether new advice on acrylamide is needed. However, consumers who want to reduce acrylamide levels in their diet now may find the following information helpful."
  - "Boiling and steaming do not typically form acrylamide." "Acrylamide does not form, or forms at lower levels, in dairy, meat, and fish products."
  - "Comparing frying, roasting, and baking potatoes, frying causes the highest acrylamide formation. Roasting potato pieces causes less acrylamide formation, followed by baking whole potatoes. Boiling potatoes and microwaving whole potatoes with skin on to make “microwaved baked potatoes” does not produce acrylamide. [Based on FDA studies.]"
  - "Soaking raw potato slices in water for 15-30 minutes before frying or roasting helps reduce acrylamide formation during cooking. (Soaked potatoes should be drained and blotted dry before cooking to prevent splattering or fires.)"
  - **The US still gives the fridge advice the UK withdrew:** "Storing potatoes in the refrigerator can result in increased acrylamide during cooking. Therefore, store potatoes outside the refrigerator, preferably in a dark, cool place, such as a closet or a pantry, to prevent sprouting."
  - "Cooking cut potato products, such as frozen French fries or potato slices, to a golden yellow color rather than a brown color helps reduce acrylamide formation". "Toasting bread to a light brown color, rather than a dark brown color, lowers the amount of acrylamide". "Acrylamide forms in coffee when coffee beans are roasted, not when coffee is brewed at home or in a restaurant."
- **Cancer Research UK, "Does burnt toast cause cancer?"**, last reviewed 18 December 2024, next
  review due 18 December 2027. Read: full, direct. Part D 3f's quotations match. Also:
  - "Good quality studies of people have found no link between eating foods high in acrylamide and cancer."
  - "It is true that animal studies have shown that acrylamide has cancer-causing effects. But these studies gave animals very high levels of acrylamide. We are very unlikely to eat this amount of acrylamide in our diet. So these studies are not good evidence for cancer risk in people."
  - Key references as the page describes them (the papers were not read): Filippini and others, *Frontiers in Nutrition* 2022, "31 studies ... showed no association between dietary acrylamide and cancer"; Pelucchi and others, *International Journal of Cancer* 2015, "32 studies ... found no evidence that eating lots of acrylamide causes common cancers".
- **David Spiegelhalter, "Opinion: How dangerous is burnt toast?", University of Cambridge, 23
  January 2017**, https://www.cam.ac.uk/research/discussion/opinion-how-dangerous-is-burnt-toast ,
  with the byline "David Spiegelhalter, Professor of the Public Understanding of Risk at the new
  Winton Centre for Risk and Evidence Communication". Read: full, direct. The Winton Centre copy
  Part D 3f read carries the same text but no byline or date; cite the Cambridge copy.
  - "Acrylamide can be, in large doses, a very nasty substance." "The IARC (International Agency for Research on Cancer) considers it a ‘probable human carcinogen’".
  - "However, there is no good evidence of harm from humans consuming acrylamide in their diet".
  - **He quotes EFSA's 2015 opinion (p185), and the quotation carries the other side's strongest point, so a lesson using him should keep it:** "In the epidemiological studies available to date, AA intake was not associated with an increased risk of most common cancers, including those of the GI or respiratory tract, breast, prostate and bladder. A few studies suggested an increased risk for renal cell, and endometrial (in particular in never-smokers) and ovarian cancer, but the evidence is limited and inconsistent."
  - On the margin of exposure: "adults with the highest consumption of acrylamide could consume 160 times as much and still only be at a level that toxicologists think unlikely to cause increased tumours in mice"; "But, for cancer, toxicology committees demand a rather arbitrary margin of exposure of 10,000 before considering the chemical essentially acceptable."
  - "the FSA provide no estimate of the current harm caused by acrylamide, nor the benefit from any reduction due to people following their advice. To be honest, I am not convinced it is appropriate to launch a public campaign on this basis." The campaign is named on the page: "The Food Standards Agency (FSA) today launched its Go for Gold campaign".

**Roast potatoes video, description read.** YouTube oEmbed confirms "The Food Lab: How to Roast
the Best Potatoes of Your Life", channel J. Kenji López-Alt, https://www.youtube.com/watch?v=argKpeiKFfo ;
the page's description (read direct, publish date 2 December 2016, 217 seconds) says: "Large chunks of potato maximize the contrast between exterior and interior." "Parboiling the potatoes in alkaline water breaks down their surfaces, creating tons of starchy slurry for added surface area and crunch." Its stated aim is potatoes "incredibly crisp and crunchy on the outside". The video itself was not watched. The label in a lesson leaves out the title's first two words, as the unread line requires. The Pépin truss and carve videos' titles and channel were reconfirmed by oEmbed: "Jacques Pépin Techniques: How To Truss a Chicken for Roasting" and "Jacques Pépin Techniques: How to Carve a Roasted Chicken", KQED Food.

## Gate closures, lesson 8

*Stage 3 top-up for lesson 8, 2026-09-24. Every page below was downloaded with curl and its text
extracted locally (PubMed abstracts through the E-utilities efetch endpoint; FSIS through the
Internet Archive, because the live site blocks automated readers); quotations are copied from that
text, direct.*

**G14, simmer temperature: closed** at source.

- **America's Test Kitchen, "Cooking Class: Boil versus Simmer"**, Cook's Illustrated how-to, no
  author or date on the page, https://www.americastestkitchen.com/cooksillustrated/how_tos/10660-cooking-class-boil-versus-simmer .
  Read: full, direct (the page is short).
  - "BOIL: Liquid reaches 212 degrees ; large bubbles vigorously rise from bottom of pot and continually break surface. SIMMER: Liquid reaches 180 to 190 degrees ; small bubbles rise from bottom of pot and occasionally break surface." (The space before each semicolon is in the extracted text.)
  - When ATK boils: "such as flash-cooking (or blanching) vegetables so that they lose their raw edge while retaining their flavor and bright color; speeding up the cooking of grains such as brown rice or wheat berries, since surrounding the grains with boiling water transfers heat more quickly than the absorption method; and cooking pasta, where the agitation helps keep the pieces from sticking to each other."
  - "More often, we turn to simmering. Less agitation means delicate foods won’t break apart and fats and soluble proteins in stock won’t coagulate and turn the liquid cloudy. Because lower burner temperatures allow time for heat to transfer evenly from the bottom of a pan to the top, there’s also less risk of scorching."
- **Recheck of the Part C 8e [T] quotation** from ATK, "For a Clearer Stock, Simmer; Don't Boil",
  direct. The fetch tool's version is not verbatim. The page reads: "Just as when you’re making
  stock for soups or stews, boiling will cause soluble proteins and rendered fat to emulsify into
  the cooking liquid. By simmering, you avoid emulsifying the fat and thus keep the stock clearer,
  and we found that the scum created simply settled to the bottom of the pot." The page's subject
  is pot-au-feu ("Nearly every recipe for the classic French dish pot-au-feu (see related content)
  calls for simmering rather than boiling once the meat has been added to the pot."), with stock as
  the comparison. Lesson 10 should quote this form, not Part C 8e's.

**G9, the temperature ladder, collagen part: closed at abstract level** with two peer-reviewed
papers in *Meat Science*. Neither full text was read. The unsigned Science of Cooking figure in
Part C 8e ("begins to dissolve to gelatin" at about 160°F/70°C) is not needed and should not be
cited. Rice (lesson 9) remains open.

- **Eva Tornberg, "Effects of heat on meat proteins - Implications on structure and quality of meat
  products"**, *Meat Science* 70(3), 2005, 493-508, doi 10.1016/j.meatsci.2004.11.021, PMID
  22063748. Lund Institute of Technology. Read: abstract, direct.
  - "Most of the sarcoplasmic proteins aggregate between 40 and 60 °C, but for some of them the coagulation can extend up to 90°C. For myofibrillar proteins in solution unfolding starts at 30-32°C, followed by protein-protein association at 36-40°C and subsequent gelation at 45-50°C (conc.>0.5% by weight). At temperatures between 53 and 63°C the collagen denaturation occurs, followed by collagen fibre shrinkage. If the collagen fibres are not stabilised by heat-resistant intermolecular bonds, it dissolves and forms gelatine on further heating."
  - The abstract says the paper then discusses water-holding and texture; it gives no figures for them. Nothing about cross-links and animal age is in the abstract.
- **M. E. Latorre, M. I. Palacio, D. E. Velázquez and P. P. Purslow, "Specific effects on strength
  and heat stability of intramuscular connective tissue during long time low temperature cooking"**,
  *Meat Science* 153, 2019, 109-116, doi 10.1016/j.meatsci.2019.03.016, PMID 30925447. Read:
  abstract, direct.
  - "Long-time low-temperature (LTLT) cooking of meat is known to produce a tender product. The current work tested the hypothesis that LTLT cooking for periods of up to 24 h at 60 °C reduces the contribution of intramuscular connective tissue to cooked meat toughness."
  - "Tensile tests on perimysium excised after cooking showed that its strength diminished with cooking time, although not as markedly as the Warner-Bratzler peak force measure of toughness. A gradually increasing susceptibility to trypsin digestion with increasing heating time demonstrated that there was a slow and gradual increase in the proportion of denatured collagen in the perimysium."
  - "These results support the hypothesis that there is both an easily destabilized and more resistant fractions of the collagen in intramuscular connective tissue."
- **What a lesson may say:** collagen starts to change at about 53 to 63°C and then shrinks (Tornberg);
  unless it is held together by heat-stable bonds, further heating dissolves it into gelatin
  (Tornberg); at a fixed temperature the change goes on slowly for hours, so time does the work
  (Latorre, 60°C for up to 24 hours). No source here gives a braising time, or says a higher
  temperature converts collagen faster; the lesson should not print either as a finding.

**G7, pressure cooking: closed for lesson 8's needs** (pressure and temperature). No regulator
statement on dried beans in a pressure cooker was found or looked for at length, so lesson 9's
fallback (no pressure-cooker bean instruction) stands.

- **Instant Pot, "Frequently Asked Questions"**, https://instantpot.com/pages/frequently-asked-questions .
  No date on the page. Read: the pressure-cooking answers, direct. A manufacturer's page about its
  own appliances.
  - "What are the PSI levels for the different pressure levels? Low Pressure (on select models): 5.8 – 7.2 psi. High Pressure: 10.2 – 11.6 psi Max Pressure (on select models): 15 psi."
  - For one model (the Duo Crisp with Ultimate Lid): "The pressure setting is 10.2 - 11.6 psi with a working temperature of ~ 239°F to 244°F." The page does not give a temperature for other models.
  - Fill lines: "DO NOT fill over the PC MAX — 2/3 as indicated on the inner pot. When cooking foods that expand during cooking such as rice or dried vegetables, DO NOT fill the inner pot over the 1/2 line. Overfilling may cause a risk of clogging the steam release pipe and developing excess pressure."
  - Release: "A quick release, or manual release, occurs when the user switches the Instant Pot from 'sealing' to 'venting' and will cause a jet of steam to eject through the top of the steam release handle." "Natural Release (NR) is recommended for foods with large liquid volume or high starch content such as oatmeal, beans, porridge, and soups. Quick Release (QR) can cause splattering with these foods".
  - Frozen meat: "Frozen meat can be cooked directly in the pressure cooker, but the cooking time should generally be increased by about 50%, and the cooker will take longer to come to pressure. Large frozen cuts may add up to 45 to 60 minutes of preheating time."
- **National Center for Home Food Preservation (University of Georgia), "Ensuring Safe Canned Foods"**,
  https://nchfp.uga.edu/how/can/general-information/ensuring-safe-canned-foods/ , text from the USDA
  *Complete Guide to Home Canning*. Read: full, direct.
  - "all low-acid foods should be sterilized at temperatures of 240° to 250°F, attainable with pressure canners operated at 10 to 15 PSIG. PSIG means pounds per square inch of pressure as measured by gauge."
  - "Water boils at lower temperatures as elevation increases. Lower boiling temperatures are less effective for killing bacteria. Increasing the process time or canner pressure compensates for lower boiling temperatures."
- **Utah State University Extension, "Why Electric Pressure Cookers Are Not Pressure Canners"**,
  Cathy Merrill, Karin Allen, Susan Haws, Teresa Hunsaker, Patricia Mathis, Paige Wray and Ellen
  Serfustini, https://extension.usu.edu/preserve-the-harvest/research/why-electric-pressure-cookers-are-not-pressure-canners .
  No date read. Read: full, direct.
  - "Steam temperature rises as the pressure is increased."
  - "pressure cookers (electric or stovetop) are not necessarily pressure canners. This is particularly true with electric pressure cookers because of their mechanical structure. A previous study conducted by USU Extension found that electric pressure cookers don’t always work the same at high altitudes as at sea level (Proctor et al. 2013). This isn’t a problem when cooking a roast or chicken because the temperature of the food can be checked to make sure it is safe and the EPPC can be restarted to cook the food longer."
- **What a lesson may say:** a sealed pot lets pressure build, and water's boiling point rises with
  it (USU); one maker gives its high setting as 10.2 to 11.6 psi and, for one model, about 239 to
  244°F (about 115 to 118°C); pressure canners at 10 to 15 psi reach 240 to 250°F (NCHFP). A
  pressure cooker is not a canner (USU). No source here gives how much faster a pressure cooker is.

**Also read for lesson 8, not a gate:**

- **USDA FSIS, "Slow Cookers and Food Safety"** (Part B 1.10), re-read in full through Wayback
  20260923031306, direct. Part B's quotations match. Additional sentences:
  - "The low heat helps less expensive, leaner cuts of meat become tender and shrink less. The direct heat from the pot, lengthy cooking and steam created within the tightly-covered container combine to destroy bacteria and make the slow cooker a safe process for cooking foods."
  - "The slow cooker may take several hours to reach a safe, bacteria-killing temperature. Constant refrigeration assures that bacteria, which multiply rapidly at room temperature, won't get a "head start" during the first few hours of cooking." (This sits under "Safe Beginnings", before the thawing rule; the page gives no reason next to "Always thaw meat or poultry before putting it into a slow cooker.")
  - "Vegetables cook slower than meat and poultry in a slow cooker so if using them, put the vegetables in first."
  - "If possible, turn the cooker on the highest setting for the first hour of cooking time and then to low or the setting called for in your recipe. However, it's safe to cook foods on low the entire time".
  - "Keep the lid in place, removing only to stir the food or check for doneness."
  - "When you are at home, and if the food was completely cooked before the power went out, the food should remain safe up to two hours in the cooker with the power off."
  - "Store leftovers in shallow covered containers and refrigerate within two hours after cooking is finished."
- **US EPA, "Why can't I use hot water from the tap for drinking, cooking, or making baby
  formula?"** (Part C 3h), direct; "Last updated on October 28, 2025". The [T] quotation matches:
  "Hot water dissolves lead more quickly than cold water and is therefore more likely to contain greater amounts of lead." The page continues: "Never use water from the hot water tap for drinking, cooking, or making baby formula."
- **Boiling-point elevation constant, replacing Part C 3g's Wikipedia citation.** LibreTexts,
  "B5: Ebullioscopic (Boiling Point Elevation) Constants", Chemistry LibreTexts reference tables,
  public domain, https://chem.libretexts.org/Ancillary_Materials/Reference/Reference_Tables/Bulk_Properties/B5:_Ebullioscopic_(Boiling_Point_Elevation)_Constants ,
  direct: "Water 0.513", in units given as "[(°C·kg)/mol] or [°C/molal]". And LibreTexts
  *Introductory Chemistry*, 13.9 "Freezing Point Depression and Boiling Point Elevation", direct:
  "sodium chloride, \(\ce{NaCl}\), will dissociate into two ions so for \(\ce{NaCl}\), \(i = 2\)"
  (that page gives water's constant as 0.515). Recalculated with 0.513 and i = 2 (the lesson's
  arithmetic): 0.5% salt by weight raises water's boiling point by about 0.09°C, 1% by about
  0.18°C, 2% by about 0.36°C. Part C 3g's figures stand.

## Stage 4 note, lesson 6

*Stage 4 review of lesson 6, 2026-09-24. Pages downloaded with curl and read from the extracted
text, direct, unless marked. Two corrections to the gate closures above, then the additions the
fixed lesson quotes.*

**Correction: Connecticut.** The gate closures took Morgan Lewis's "from 1 July 2026 with prior
notification" over The New Lede's "January 2028" as the later source. Both dates are real and mean
different things. **Connecticut DEEP, "PFAS in Products"**, https://portal.ct.gov/deep/p2/pfas-in-products ,
read direct: from 1 July 2026 the law "allows the manufacturing, selling, offering or distributing
for sale of ... cookware ... if they contain intentionally added PFAS only if the manufacturer
labels the products", and requires "prior notification to DEEP"; "On and after January 1, 2028, no
person shall manufacture, sell, offer for sale or distribute for sale in this state any of the
following products if the product contains intentionally added PFAS", cookware among them. Shipman &
Goodwin's 2024 note (the page The New Lede links, read direct) says the same: labelling from 1 July
2026, and from 1 January 2028 sale "will be prohibited regardless of labeling, notice, or
disclosures." Morgan Lewis runs the notification rule and the product list together.

**Correction: the ATK stir-fry page is written for a nonstick skillet** (recorded above, but not
carried into the lesson): "It's still possible to make great stir fries in a nonstick skillet", and
"Heat the oil until just smoking before beginning to stir-fry".

**California veto, read direct.** Keller and Heckman, *National Law Review*, 20 October 2025,
https://natlawreview.com/article/ca-governor-newsom-vetoes-pfas-ban-cookware-all-food-packaging :
"On October 13, 2025, California’s Governor, Gavin Newsom, returned without signature a bill passed
by the state legislature that would have phased out the use of per- and polyfluoroalkyl substances
(PFAS) in cookware". The Farella Braun page still refuses automated access.

**Quotations and facts the fixed lesson adds, each read direct on the page named.**
- ATK, "Pan Sauces 101": "A nonstick skillet will not develop fond to the same degree as a traditional skillet will, and, because fond supplies a pan sauce with richness and depth of flavor, a nonstick skillet will make a less flavorful pan sauce." And: "When tested in our kitchen, a sauce made in a well-seasoned cast-iron pan tasted fine." The page gives no heat for the butter step.
- Colins (Yahoo syndication): frequent flipping gives "less of the gray, overcooked meat that often forms just beneath the surface."
- Lam, ATK: Chao's definition is introduced "Roughly speaking," in Chao's own words; the stirring test compared constant stirring with stirring "every 30 seconds", measured with "an infrared camera".
- C&EN (Patel): "the waxy fluoropolymer belongs to the family of per- and polyfluoroalkyl substances (PFAS)". PFOA "served as a surfactant and polymerization aid to make PTFE coatings. The resulting coatings contained residual traces of the molecule." Miller, paraphrased by C&EN: "making fluoropolymers requires the use of PFAS molecules with unknown toxicity risks". "France’s PFAS ban should take effect in 2026. But it excludes cookware because of pushback from the French cookware maker Tefal." The ceramic warning is from Kevin Golovin, "a professor of mechanical engineering at the University of Toronto", who advises looking for the label "fluorine-free". Miller also: "from an overall environmental standpoint, an uncoated pan is a good choice because it can last decades, whereas any nonstick pan will become trash a lot sooner." (not used)
- The New Lede (Kelleher): "According to Chemours, these PTFE flakes are “non-toxic and would pass through the body without being absorbed” if someone accidentally ingested them." Andrews in full: "The bulk plastic material will likely largely pass through the body, but it’s a matter of how many small fragments will break off in the body," then "I’ve seen no studies looking at that, specifically." On GenX: "In a 2021 health assessment, the EPA concluded that GenX, like the chemical it replaced, is highly toxic at small doses."
- Cookware Sustainability Alliance, July 2026 special report on its home page: it objects to "labeling PTFE — the safe polymer in Teflon-style coatings — as a “PFAS forever chemical,”". It describes itself as "a 501(c)(6) non-profit organization".
- EFSA 2020: "People can be exposed to PFAS in different ways, including food, where these substances are most often found in drinking water, fish, fruit, eggs, and egg products." The assessment "focused on" four PFAS: PFOA, PFOS, PFNA and PFHxS. So the list is of foods, and says nothing about cookware.
- EPA TSCA page, rechecked: the second goal reads in full "To commit to working toward the elimination of these chemicals from emissions and products by 2015."
- Wilson's "50 times" (not used, see the gate closures): confirmed on the page. Water's heat of vaporisation against 0 to 100°C of heating is 2,256 against about 418 kJ/kg, about 5.4 times, as lesson 2 says.
- Keller and Heckman (*National Law Review*), on the reason: "The veto was driven by the Governor’s concern over a lack of affordable cookware options for Californians, if SB 682 had taken effect."
