# Sources: Digital Literacy

*Stage 1 research, 2026-09-18. Written before any lesson is drafted. For each source: what it is good
for, what it establishes, and how much of it was actually read.*

<!-- unread: Dale, Lewis, Kurose, Ross, Shotts, Krogh, Lain, Pearman (except 08), Ray, Mayer, Lee, Doerfler -->

**How to read the "read" labels below.** Every entry says whether it was read in full, in part, at
abstract or summary level, or not opened. That label is not decoration: a lesson may not lean on a
source further than the label allows, and `npm run validate` fails on a lesson citing anything named
in the `unread:` line above. Twelve works are named there. Most are named because their *result* was
read through a reliable secondary route (a conference abstract, an institution's own press summary,
a publisher's table of contents) while the work itself was not opened. If a lesson needs one of
them, open it first and move it out of that line.

This is a practical course, so the research is weighted differently from a humanities course. The
heavy lifting is done by three kinds of source: **official guidance from standards bodies** (NIST,
NCSC, CISA), which is where the evidence-based version of security advice actually lives; **the
usable-security research literature**, which is where the evidence about what people believe and
what they do lives; and **two teaching curricula** (Software Carpentry and MIT's Missing Semester)
that have taught the terminal to tens of thousands of adults and written down what goes wrong.
Textbooks matter less here than in any other Foval course, and the reason is itself worth teaching:
the CS0 textbook market is weak, and the best material on this subject is free.

---

## Canonical textbooks

- **Nell Dale and John Lewis, *Computer Science Illuminated* (Jones & Bartlett, 8th ed. 2023).**
  **Not opened**; publisher's catalogue description and ACM Digital Library listing read. This is
  the most widely assigned CS0 text for non-majors in the United States. Its structure is a
  "layered" tour from the bits upward: data representation, gates and circuits, computing
  components, low-level and high-level programming, operating systems, file systems and directories,
  information systems, artificial intelligence, simulation, networks, the web, limitations of
  computing. Best for: a defensible answer to "what does the field think a non-major should know".
  Worst for: our actual purpose. It is a *conceptual* tour written to be examinable, not a course in
  operating a computer. Nobody finishes it able to open a terminal. We take its sequencing
  instinct, which is that file systems belong before networks and networks before the web, and
  leave the rest.
- **James Kurose and Keith Ross, *Computer Networking: A Top-Down Approach* (Pearson, 8th ed.
  2021).** **Not opened**; the authors' own table of contents at gaia.cs.umass.edu was located and
  its chapter 1 structure read at summary level. The standard undergraduate networking text, used
  at most research universities. Chapter 1, "Computer Networks and the Internet", is the one that
  matters to us: 1.1 What Is the Internet, 1.2 The Network Edge, 1.3 The Network Core, 1.4 Delay,
  Loss and Throughput, 1.5 Protocol Layers and Their Service Models, 1.6 Networks Under Attack, 1.7
  History. The "top-down" pedagogy, meaning start at the application the learner already uses and
  work downward to the wire, is exactly the right instinct for a foundation course and we should
  steal it outright. The book itself is far beyond this course's level; its chapter 1 is the model
  for one lesson, not a reading assignment.
- **William Shotts, *The Linux Command Line* (No Starch Press; also a free Creative Commons
  BY-NC-ND internet edition at linuxcommand.org).** **Not opened**; linuxcommand.org's own
  description and table-of-contents structure read. 596 pages, four parts: Learning the Shell,
  Configuration and the Environment, Common Tasks and Essential Tools, Writing Shell Scripts. Part 1
  ("What Is the Shell?", "Navigation", "Exploring the System", "Manipulating Files and Directories",
  "Working with Commands", "Redirection") is the canonical free long-form treatment of exactly our
  terminal half. Best for: the "go deeper" link at the end of every terminal lesson, since it is
  free, legitimately licensed for linking, and the natural next step for anyone who finishes this
  course wanting more. Note the licence is BY-NC-**ND**, so quote it briefly and link it, never
  adapt it.

**The honest finding about textbooks.** There is no assigned university textbook that covers this
course's actual scope. Digital-literacy content sits in three separate literatures that do not talk
to each other: CS0 survey texts (conceptual, no hands-on), sysadmin and shell books (hands-on, assume
motivation and a Linux machine), and consumer security advice (unsourced, mostly folklore). The gap
is the reason this course exists, and it is the same gap MIT names below. Lessons should be built
from primary guidance and the research literature, not from a text.

---

## University courses and curricula consulted

- **MIT, "The Missing Semester of Your CS Education"** (missing.csail.mit.edu). **Read**: the course
  homepage in full and the 2020 edition's Lecture 1 notes ("Course Overview + The Shell") in full.
  CC BY-NC-SA. The course exists precisely because universities skip this material, and it says so
  in its own words: classes teach advanced topics but leave proficiency with tools for students to
  work out alone, even though they spend hundreds of hours using them. The 2026 running is nine
  lectures (shell; command-line environment; development environment and tools; debugging and
  profiling; version control and Git; packaging and shipping code; agentic coding; beyond the code;
  code quality). **Lecture 1 is the precise scope model for our terminal lessons**: `date`, `echo`,
  `which`, `pwd`, `cd`, `ls`, `mv`, `cp`, `mkdir`, `man`, `cat`, `curl`, `grep`, `cut`, `sudo`,
  `tee`, `touch`, `chmod`; absolute and relative paths with `.`, `..` and `/`; arguments and flags;
  `$PATH`; read/write/execute permissions for owner, group and others; streams and redirection with
  `<`, `>`, `>>`; pipes; and `sudo`. Its exercises have learners write a script, hit a permissions
  error, and work out why. Note this is a course for CS undergraduates who already program. Our
  learners do not, so we take its scope and reject its pace.
- **Software Carpentry, "The Unix Shell" (shell-novice)** (swcarpentry.github.io/shell-novice).
  **Read**: the lesson homepage, episode 2 ("Navigating Files and Directories") in full including
  its stated questions, objectives, commands and key points, and the instructor notes in full. CC BY
  4.0. Seven episodes: Introducing the Shell; Navigating Files and Directories; Working With Files
  and Directories; Pipes and Filters; Loops; Shell Scripts; Finding Things. This is the most-taught
  and most-tested shell curriculum in the world, delivered in thousands of two-day workshops to
  working scientists, and unlike almost anything else in this subject it has published pedagogy
  behind it and an instructor community that reports back what fails. Its stated prerequisite is the
  only honest one in the field: if you have stored files on a computer and recognise the word "file"
  and either "directory" or "folder", you are ready.

  Episode 2's objectives are the template for how a terminal objective should be written: explain
  the similarities and differences between a file and a directory; translate an absolute path into a
  relative path and back; construct absolute and relative paths that identify specific files and
  directories; use options and arguments to change a command's behaviour; demonstrate tab completion
  and explain its advantages. Note the third one. It is a *construct* verb, not a *describe* verb,
  and it is the difference between a lesson that teaches and one that tours.

  **The instructor notes are the single most valuable page in this research.** They are a decade of
  accumulated "here is what actually goes wrong", and every item is a lesson-design constraint:
  Windows learners cannot find their home directory; Windows learners cannot run a plain text editor;
  the shell refuses scripts with DOS line endings; learners get *trapped inside* command-line
  editors such as Vim, Emacs or Nano and cannot get out.

  **Correction, 2026-09-18.** This entry used to end with a fifth item: that the notes recommend
  keeping the terminal and the graphical file browser open side by side so the learner sees two
  views of one thing. **They do not.** A Stage 4 reviewer downloaded the notes and searched the full
  text: no "side by side", no "file browser", no "two views", no such recommendation anywhere. The
  claim reached lesson 4 as a quotation attributed to a body that never wrote it, which is the exact
  failure standards Part 2 names. The device is a good one and this course still uses it; it is
  **ours**, and no lesson may attribute it. Anything else in this file that reads as a
  recommendation rather than a record should be treated the same way until it is checked. The notes say two separate things that this file
  previously welded into one, and the weld reached three lessons before a reviewer caught it.
  **What they actually say**, quoted: "We have to leave out many important things because of time
  constraints, including file permissions, job control, and SSH", which is the curriculum saying
  what it permanently does not contain; and, separately, "Unless you have a truly generous amount of
  time (4+ hours), it is likely that you will not cover ALL the material in this lesson in a single
  half-day session. Plan ahead on what you might skip", which names nothing in particular.
  **There is no ranking and no "first things cut" anywhere on the page.** This entry asserted one
  until 2026-09-18, lesson 6 printed it, and lessons 4 and 5 fabricated their own attributions to
  the same source. The general rule, which belongs at the top of this entry: **these notes record
  what goes wrong, and they rarely recommend anything.** Any sentence in this file that turns the
  first into the second is suspect until it is checked against the page.
- **Harvard, CS50's Understanding Technology** (cs50.harvard.edu/technology). **Read**: course
  homepage. Six units: Hardware, Internet, Multimedia, Security, Web Development, Programming,
  aimed explicitly at people who do not yet consider themselves computer people. **Retired as an
  active course on 30 June 2024**, though the OpenCourseWare material remains. This is the closest
  thing to a direct competitor for this course and its unit list is a useful second witness that
  Internet and Security are the two load-bearing topics. It has no terminal unit, which is the gap
  we are filling.
- **Harvard, CS50x** (cs50.harvard.edu/x). **Read**: the weeks index. Weeks 0 to 10, from Scratch
  through C, arrays, algorithms, memory, data structures, Python, SQL, HTML/CSS/JavaScript, Flask.
  Recorded here as a **negative** finding, because the brief expected otherwise: the current CS50x
  syllabus has **no standalone lecture on how the internet works**. The internet material at Harvard
  lives in Understanding Technology (now retired) and in the introductory shorts to CS50x week 8,
  not in a lecture of its own. Any lesson claiming "CS50 teaches the internet this way" needs to
  name which CS50 and which year, or it will be wrong.
- **EU Joint Research Centre, DigComp** (joint-research-centre.ec.europa.eu/digcomp). **Read**: the
  framework page. The page now describes **DigComp 3.0**, with five competence areas: (1)
  Information search, evaluation and management; (2) Communication and collaboration; (3) Content
  creation; (4) Safety, wellbeing and responsible use, subdivided into 4.1 protecting devices, 4.2
  protecting personal data and privacy, 4.3 supporting wellbeing, 4.4 protecting the environment;
  (5) Problem identification and solving, whose 5.1 is "identifying and solving technical problems".
  The page did not carry DigComp 2.2's publication date or its proficiency-level scheme, so neither
  is recorded here. Useful as the reference answer to "what does 'digital literacy' officially mean
  in Europe", and as a check on what our scope omits: DigComp treats content creation and
  wellbeing as core, and we treat neither.
- **UNESCO, Digital Literacy Global Framework (DLGF), 2018**, developed for SDG indicator 4.4.2.
  **Read at search-summary level only.** Seven competence areas, and the one that matters is that
  UNESCO added an **area 0, "Devices and software operations"**, below DigComp's five, on the
  grounds that outside high-income countries you cannot assume it. That is the same judgement this
  course makes, arrived at independently, and it is worth one sentence in lesson 1.

---

## Primary sources and official guidance

- **NIST SP 800-63B-4, *Digital Identity Guidelines: Authentication and Authenticator Management*
  (final, August 2025)** (pages.nist.gov/800-63-4/sp800-63b.html). **Read**: section 3.1.1.2
  (password verifier requirements), 3.1.1 and 3.1.3.3, fetched directly and quoted verbatim. This is
  the load-bearing source for the whole security half of the course and the current revision's
  numbering differs from the one everyone quotes, so get it right. **Revision 4 renumbered the
  password section from 5.1.1.2 to 3.1.1.2 and raised the length floor.** What it now says, in its
  own SHALL/SHOULD language:
  - *Minimum length:* verifiers and CSPs **SHALL** require passwords used as a single factor to be
    a minimum of **15 characters**. Passwords used only as part of multi-factor authentication
    **MAY** be shorter but **SHALL** be at least eight. (The widely quoted "NIST says eight
    characters" is Revision 3 and is now out of date for single-factor use.)
  - *Maximum length:* **SHOULD** permit at least 64 characters.
  - *Composition:* **SHALL NOT** impose composition rules, for example requiring mixtures of
    character types.
  - *Rotation:* **SHALL NOT** require subscribers to change passwords periodically. Verifiers
    **SHALL** force a change on evidence that the authenticator has been compromised.
  - *Hints:* **SHALL NOT** permit a hint accessible to an unauthenticated claimant.
  - *Security questions:* verifiers and CSPs **SHALL NOT** prompt subscribers to use
    knowledge-based authentication (KBA) or security questions **when choosing passwords**, "What
    was the name of your first pet?" being NIST's own example. **That scoping clause was dropped
    from this entry until 2026-09-18 and lesson 10 inherited the trim**, applying the rule to
    account-recovery flows, which is a different moment and not what §3.1.1.2 covers. The lesson now
    states the extension to recovery as this course's own reasoning. Re-checked against the fetched
    document on 2026-09-18.
  - *Blocklists:* when processing a request to establish or change a password, verifiers **SHALL**
    compare it against a blocklist containing known **commonly used, expected, or compromised**
    passwords, and on a hit **SHALL** require a different secret **and SHALL provide the reason for
    rejection**. The document says that list may hold passwords from previous breach corpuses,
    **dictionary words**, and context-specific words such as the name of the service and the
    username. **The dictionary-word part matters for teaching**: it is what stops "no composition
    rules" collapsing into "fifteen characters of anything", and an earlier version of this entry
    omitted it. Re-checked against the fetched document on 2026-09-18.
  - *Password managers:* verifiers **SHALL** allow password managers and autofill, and **SHOULD**
    permit paste.
  - *Phishing:* section 3.1.1 states flatly that passwords are not phishing-resistant.
  - *SMS:* section 3.1.3.3 designates out-of-band authentication over the public telephone network
    **restricted**, and says verifiers **SHOULD** consider risk indicators such as device swap, SIM
    change and number porting before using it.
- **UK NCSC, "The problems with forcing regular password expiry"** (ncsc.gov.uk). **Read in full.**
  The best short statement of the reversal, from the body that made it first. Its argument is
  behavioural, not cryptographic: the new password will be similar to the old one, may have been
  used elsewhere, is more likely to be written down and more likely to be forgotten, and attackers
  can often work out the new password if they have the old one. Its conclusion is that the more
  often users are forced to change passwords, the greater the overall vulnerability. It acknowledges
  the intuitive case for expiry (a compromised password becomes useless) and treats it as
  oversimplified rather than answering it in detail, which is a fair thing for a lesson to point out.
- **UK NCSC, "Three random words"** (ncsc.gov.uk news item) and **CESG, *Password Guidance:
  Simplifying Your Approach* (2015)**. **Read at search-summary level; the NCSC collection page
  itself returned HTTP 500 on two attempts and the 2015 PDF was not opened.** The 2015 CESG document
  is the origin of the modern reversal, predating NIST's by two years, and its argument is that
  complex passwords do not usually frustrate attackers while making daily life harder for users,
  creating cost, delay and workarounds that increase risk. The "three random words" advice is the
  consumer-facing form. The counter-argument NCSC itself acknowledges is that if attackers know
  everyone uses three words, the search space is a dictionary of words rather than of characters,
  which is why this advice belongs beside a password manager rather than instead of one.
- **CISA / FIDO Alliance on phishing-resistant authentication.** **Read at search-summary level.**
  CISA's guidance names FIDO/WebAuthn and PKI-based authentication as the only two approaches that
  meet the phishing-resistant standard, and explicitly places SMS codes, email links, authenticator
  app codes and push notifications (even with number matching) outside it. OMB M-22-09 requires
  phishing-resistant MFA across US federal agencies. Okta's 2025 Secure Sign-in Trends Report puts
  workforce MFA adoption at about 70% as of January 2025 and phishing-resistant authenticator use at
  14.0% of users, up from 8.6% a year earlier. Useful for showing the learner that the ladder of
  authentication methods has rungs, and where each sits.
- **Electronic Frontier Foundation, Surveillance Self-Defense** (ssd.eff.org). **Read**: the index
  page. CC BY. Organised as Basics (encryption, choosing passwords, keeping data safe, metadata),
  Tool Guides (Signal, Tor, two-factor authentication, device encryption, phishing), Further
  Learning, and Security Scenarios for specific roles. The pedagogical move worth stealing is that
  it starts from **"Your Security Plan"**, a threat-modelling exercise, rather than from a list of
  tools: what do you have, who wants it, how likely is it that they will try, how bad if they
  succeed, how much trouble will you go to. A digital-literacy course that gives a flat list of
  precautions teaches the wrong thing; the whole point is that the answer depends on the threat.
- **Verizon, 2025 Data Breach Investigations Report.** **Read at search-summary level; the 100+ page
  PDF was not opened.** Nearly 60% of breaches involve a human element. Credential abuse remains the
  leading vector; 88% of attacks on basic web applications used stolen credentials. Median time for
  a user to fall for a phishing email is under 60 seconds. Treat these as headline figures whose
  definitions are in the report's methodology section, and open the PDF before quoting any of them
  in a lesson.
- **Anti-Phishing Working Group, Phishing Activity Trends Reports, Q1 to Q4 2025**
  (docs.apwg.org/reports). **Read at search-summary level; the quarterly PDFs were not opened.**
  About 3.8 million phishing attacks observed across 2025, against 3.76 million in 2024; Q1 2025 was
  the largest quarter since Q4 2023 at 1,003,924. Financial institutions 18.3% of attacks in Q2,
  SaaS and webmail 18.2%. The number the course actually needs is the padlock one,
  and it has now been checked, as this entry told the next session to check it.

  **Correction, 2026-09-18: the "over 90% by 2023" figure does not survive contact with the
  reports.** What APWG publishes on this is a series contributed by PhishLabs, and the **Q2 2021
  report, opened and read**, carries its CTO's own sentence: "After peaking in late 2020, the
  percentage of phishing sites protected by SSL dropped to 82 percent in 2Q 2021." The same report
  records that **90 percent of the certificates used in phishing were free domain-validated
  certificates**, which is the more useful fact, because it says why a padlock costs an attacker
  nothing. A second contributor, Axur, put its regional figure at 70 percent against 82 worldwide
  that quarter. **No 2023 figure was found anywhere in the quarterly series.** So a lesson may print
  82% with its quarter and year, and the free-certificate point, and may **not** print "over 90%" or
  attach any figure to 2023. The conclusion is unaffected: the padlock has no remaining value as a
  safety signal, and any lesson repeating "look for the padlock" is teaching folklore.

---

## The research literature on what people actually believe

This section is the gold the brief asked for. These four studies are what make this course's
misconception sections possible, and each deserves to shape a lesson rather than be cited in
passing.

- **Rick Wash, "Folk Models of Home Computer Security", SOUPS 2010** (rickwash.com/papers/rwash-homesec-soups10-final.pdf; the cups.cs.cmu.edu copy this entry used to name returns 404, checked 2026-09-18). **Read in
  full**, pages 1 to 11 of the proceedings PDF. Thirty-three semi-structured interviews (23 in
  summer 2007, 10 in summer 2008), averaging 45 minutes, snowball-sampled from three midwestern US
  cities, explicitly screening *out* anyone with computer training. Wash identifies eight folk
  models, four of viruses and four of hackers, and every respondent held at least one of each.

  **Virus models**, with the number of subjects holding each: *Viruses are generically bad* (5), an
  underdeveloped model that supplies no guidance, so these people take no precautions. *Viruses are
  buggy software* (9): viruses must be deliberately downloaded and executed, so if you are careful
  what you click, antivirus is unnecessary. *Viruses cause mischief* (12): viruses are intentionally
  annoying and can be caught passively from bad parts of the internet, so the effects are always
  visible. *Viruses support crime* (6): viruses are quiet, steal information, and therefore run
  undetected, so regular scanning matters and backups do not.

  **Hacker models**: *Digital graffiti artists* (8), young technical people showing off, who target
  anyone, which produces fatalism ("if they are going to get in, they're going to get in").
  *Burglars* (13), opportunistic criminals after identity information, which produces avoidance
  behaviour. *Criminals who target big fish* (9), who go after the rich and important, which
  produces the single most consequential belief in the whole paper: **I am not a target, so this is
  not my problem.** *Contractors supporting criminals* (3), a hybrid, who go after large databases,
  which again produces "not me".

  Wash's Table 3 is the payoff and should shape our misconception sections directly. It maps twelve
  standard pieces of expert advice (use antivirus; keep it updated; scan regularly; use a firewall;
  don't click attachments; be careful downloading; be careful which websites you visit; disable
  scripting; use good passwords; make regular backups; keep patches up to date; turn the computer
  off when not in use) against all eight models and marks each as important, maybe, or not
  necessary. **The advice is not being rejected out of laziness. It is being rejected rationally,
  given a wrong model.** Section 4 then shows that botnets exploit gaps present in *every* model: no
  respondent could conceive of an attacker who wanted only their internet connection, did no damage
  to their machine, spread without anyone sitting at a keyboard, and used them to attack someone
  else. That is a lesson in itself.

- **Ruogu Kang, Laura Dabbish, Nathaniel Fruchter and Sara Kiesler, "'My Data Just Goes
  Everywhere': User Mental Models of the Internet and Implications for Privacy and Security", SOUPS
  2015** (usenix.org). **Read in full**, pages 39 to 46. Twenty-eight participants (17 lay, 11
  technical) drew the internet on paper and talked through it, then drew specific tasks: watching a
  video, sending an email, making a payment, receiving an ad, browsing. Twenty-two sessions were
  recorded and coded, inter-coder kappa 0.79.

  Findings that a lesson can be built on. **Fourteen of 28 drew a simple, service-shaped internet**
  (13 lay, 1 technical): a single box that receives requests and sends back answers, with no layers,
  no ISPs, no DNS, no routing. Fourteen drew articulated, multi-layer models (4 lay, 10 technical).
  Five technical participants named protocols such as TCP/IP, SMTP or IMAP; **no lay participant
  named any**. Participants with articulated models named more parties who could see their data
  (mean 4 against 2.56, t(20) = 2.80, p = .01), and the authors argue this is because you cannot
  worry about your ISP if your model has no ISP in it. Specific beliefs to quote: that home Wi-Fi is
  safer than public Wi-Fi because it has a password and settings; that email is private because it
  has a password on it; that a paid service will not sell your data because you paid. One
  participant said their information just goes everywhere, and that everybody has access.

  **The finding that should govern the whole course, and that cuts against its own premise**: the
  authors found **no direct relationship between technical background and the actions people took**
  to protect themselves. Knowing more predicted perceiving more threats. It did not predict doing
  more. A course that teaches how the internet works and expects behaviour change is making a claim
  this paper does not support, and lesson 1 should say so honestly.

- **Iulia Ion, Rob Reeder and Sunny Consolvo, "'...No one Can Hack My Mind': Comparing Expert and
  Non-Expert Security Practices", SOUPS 2015** (usenix.org). **Read**: the USENIX abstract page in
  full; the proceedings PDF was not opened, so per-practice percentages are not recorded here.
  Winner of the 2023 SOUPS Impact Award. 231 security experts (five or more years working in
  security) and 294 non-experts. The three most reported practices in each group are the single most
  quotable result in this whole subject:

  | Experts say they do | Non-experts say they do |
  |---|---|
  | Install software updates | Use antivirus software |
  | Use two-factor authentication | Visit only known websites |
  | Use a password manager | Change passwords frequently |

  **Nothing appears on both lists.** Two of the three non-expert practices are things the expert
  guidance above has actively retired (frequent password changes) or heavily qualified (antivirus as
  the primary defence), and the expert list's top item is the one thing consumer advice almost never
  leads with. Open the PDF before citing numbers; the ranking is safe from the abstract.

- **Hana Habib, Jessica Colnago, Vidya Gopalakrishnan, Sarah Pearman, Jeremy Thomas, Alessandro
  Acquisti, Nicolas Christin and Lorrie Faith Cranor, "Away From Prying Eyes: Analyzing Usage and
  Understanding of Private Browsing", SOUPS 2018** (usenix.org). **This paper was read in full and
  is not the work the `unread:` line means by Pearman**; the password-manager entry further down is,
  and carries the `(except 08)` exemption so the flag keeps firing on lesson 10. **Read**: pages 159 to 169,
  including Tables 3, 5 and 6 in full. Two data sources: three years of instrumented browsing from
  451 Security Behavior Observatory participants (167,128 sessions), plus a survey of 305 Mechanical
  Turk and 227 SBO participants scored against 14 true/false statements.

  Behaviour: **private browsing occurred in only 4% of observed sessions**; 41% of SBO participants
  used it at least once. The commonest use is not what people assume: logging into a service (38% of
  private sessions), general browsing (37%), searches (33%), adult content (24%). Adult content was
  the dominant reason for only 18% of users, and 22% had no dominant use at all.

  Misconceptions, from Table 6, as the percentage of private-browsing *users* answering each false
  statement correctly (so the complement is people who got it wrong or did not know):
  - "Private browsing prevents my browser from sending any cookies to websites": **24% MTurk / 26%
    SBO correct**. 22% of both populations actively believed it.
  - "Private browsing clears all my browsing history from my computer after I close the window":
    **27% / 42% correct**. 26% of MTurk and 39% of SBO believed it.
  - "Private browsing allows me to browse the web anonymously": **51% / 52% correct**; the paper
    reports 39% of both populations answering it incorrectly.
  - "Private browsing causes the information I send to websites to be encrypted": **55% / 50%
    correct**.
  - "Private browsing does not allow websites to get my IP address or information about my browser
    or computer": **61% / 58% correct**.
  - "Private browsing does not allow my ISP to see which websites I visited": **66% / 69% correct**,
    and only 38% / 33% among non-users.

  And the one with a safety consequence: **12% of SBO and 5% of MTurk participants expected private
  browsing to protect them from malware and hacking.** The authors also note, from the 2018
  companion literature, that the disclosure text on browsers' own private-mode landing pages does
  little to correct any of this. A lesson that simply restates the landing page will therefore fail.

---

## What the field considers essential

Synthesising Missing Semester's lecture 1, Carpentry's shell-novice, Kurose chapter 1, CS50's
Understanding Technology, DigComp area 4 and 5.1, UNESCO's area 0, and the misconception literature
above. The order is a build order: each item is a prerequisite for the next.

1. **The machine as a place, not a surface.** Files, directories, the tree, the home directory,
   paths as addresses. Carpentry's framing, that a file and a directory differ in a nameable way and
   that any file has both an absolute and a relative address, is the whole foundation. The physical
   pairing of graphical browser and terminal, side by side, is the instructional device we use.
   **That pairing is this course's own choice and is not Carpentry's recommendation**; see the
   correction in the shell-novice entry above.
2. **Naming and finding.** Extensions and what they do and do not determine; why a file "disappears"
   (moved, renamed, saved by an application into its own container, synced and un-synced, or simply
   never given a location by the learner); search as a supplement to structure rather than a
   replacement for it.
3. **The terminal as the same place, addressed differently.** The prompt; the working directory as
   persistent state; `pwd`, `ls`, `cd`; `~`, `.`, `..`; tab completion; commands, arguments and
   flags; `man` and `--help`; reading an error rather than scrolling past it.
4. **Doing something you could not do by clicking.** Redirection, pipes, a loop or a simple script.
   Missing Semester and Carpentry agree this is where the terminal stops being a slower mouse.
5. **What happens between an address and a page.** Names to addresses (DNS), a connection, a
   request and a response, packets and hops, who sits in the path. Kurose's top-down order: start at
   what the learner sees and go down.
6. **Trust in transit, and trust in the thing you installed.** TLS and what the padlock does and
   does not certify; where software comes from; signatures, stores, package managers, and the
   specific failure modes of search-ad malvertising and typosquatted packages.
7. **Authentication as the real battlefield.** Length over composition; reuse as the actual risk;
   breach blocklists; the ladder from password to SMS to app to passkey; recovery flows as the soft
   underbelly.
8. **Recognising a con.** The structure of phishing (contact, pressure, an action that is hard to
   reverse) rather than a list of current lures.
9. **Keeping your own data alive.** Copies, media, location; the difference between sync and backup;
   restoring as the only test that counts.
10. **What services keep, and how to look.** Reading an account's own data export and activity
    record; changing what is retained; weighing convenience against exposure with a threat model
    rather than a slogan.

---

## Common misconceptions

Beyond the four studies above, which supply most of this list:

- **"I am not a target."** Wash's *Big Fish* model, held by 9 of 33 respondents, and the single most
  load-bearing wrong belief in consumer security. The correction is the botnet argument in Wash
  section 4: most compromise is indiscriminate and automated, and the attacker frequently wants the
  connection rather than anything on the machine.
- **"An infection announces itself."** The *Mischief* model (12 of 33). The correction: the
  economically rational malware is quiet.
- **"If I am careful what I click, I am safe."** The *Buggy Software* model (9 of 33), which
  concludes that antivirus is unnecessary. This is half right and dangerous exactly because it is
  half right.
- **"The internet is a place I send things to."** Kang's simple service model, held by 13 of 17 lay
  participants. It has no ISP, no DNS and no intermediaries in it, so it cannot generate a worry
  about any of them.
- **"Home Wi-Fi is safe because it has a password."** Kang, section 4.1.2.1.
- **"A file lives in the application I made it in."** The Verge's 2021 "File Not Found" (Monica
  Chin, 22 September 2021) reported university instructors finding students who did not know where
  their files were saved and, in the reporter's framing, did not understand the question. **Read at
  search-summary level; the original article was not opened.** Treat it as journalism about a
  teaching experience, not as evidence: no study is cited for the prevalence claim, and a lesson
  should not state that "a generation" cannot use folders. It is, however, a live enough phenomenon
  to justify teaching the file system explicitly rather than assuming it.
- **"The padlock means the site is safe."** Over 90% of phishing sites served HTTPS by 2023. The
  padlock certifies that the connection to *whatever domain is in the bar* is encrypted, and nothing
  about who owns that domain.
- **"Incognito hides me."** The Habib numbers above, in detail.
- **"Sync is backup."** Addressed at length below.
- **"Complex beats long."** Addressed at length below.
- **"Deleting removes it."** Kang found participants split between "once something is online it's
  there forever" and a vague belief that deletion works; neither group could say who held copies.

---

## Contested questions and the positions on each

Classified under standards 3.1. The striking thing about this subject is how many questions the
folklore treats as settled that are not, and how many it treats as open that are.

**1. Password composition rules and forced rotation.** *Classification: established, with a live
minority.* Position A, now the official position of NIST (SP 800-63B-4 §3.1.1.2), NCSC and CISA:
composition rules and periodic expiry make passwords worse, because users respond by making
predictable substitutions and incrementing a counter, and the attacker's advantage from the
predictability exceeds the defender's advantage from the change. Position B, held by parts of the
compliance and audit world and by some system owners, is not usually argued in print but is worth
stating at its strongest: expiry bounds the lifetime of an undetected compromise, and "evidence of
compromise" as a trigger assumes a detection capability most organisations do not have. NCSC
acknowledges this case and calls it oversimplified rather than refuting it. What would settle it: a
field trial measuring compromise rates under each policy, which nobody has run at scale. **Where it
lands for the course:** teach position A as the guidance, cite it to NIST and NCSC by section, and
say honestly that the evidence behind it is behavioural rather than a controlled trial. Also warn
the learner that many services still enforce rotation, so "the guidance says otherwise" is not an
answer their employer will accept.

**2. Password managers.** *Classification: contested empirical, leaning strongly one way.* The real
risk is the one users name themselves: a single point of failure, and having to trust the vendor.
Pearman et al., "Why people (don't) use password managers effectively" (SOUPS 2019, 30 interviews),
**read at search-summary level; PDF not opened**. **This is the work the `unread:` line means by
that surname, and the exemption there is written `Pearman (except 08)`**, because the same surname is
a co-author of the private-browsing paper above, which was read in full and is lesson 8's principal
source. The flag still fires on every other lesson, which is where it matters: lesson 10 is the one
that wants this paper. It found usability and convenience drive adoption
while security concerns block it, and that browser-built-in users optimise for convenience while
separate-app users optimise for security. The counter-position has empirical weight: the realistic
alternative to a manager is not memorised unique passwords, it is reuse, and reuse converts any one
breach into a compromise of everything. NIST now requires verifiers to permit managers and autofill.
**Where it lands:** recommend a manager, name the concentration risk plainly rather than
brushing it off, and present the browser-built-in option as a real one rather than a compromise,
since the evidence says the manager people actually use beats the manager they should have used.

**3. SMS two-factor authentication.** *Classification: contested practical guidance, and a genuine
case where two true statements sound contradictory.* Weak: NIST designates PSTN out-of-band
**restricted** (§3.1.3.3) and names SIM change and number porting as the risks; CISA excludes SMS
from phishing-resistant MFA; Lee et al., "An Empirical Study of Wireless Carrier Authentication for
SIM Swaps" (2020) found all five prepaid carriers studied used insecure challenges and identified 17
websites where an account could be taken over by SIM swap alone, with no password compromise
(**read at search-summary level; PDF not opened**). FBI IC3 recorded 982 SIM-swap complaints and
about $26.0m in reported losses in the US in 2024, against 1,611 complaints and over $68m in 2021.
Still enormously better than nothing: Google's May 2019 research with New York University and UC San
Diego found an SMS code to a recovery phone blocked **100% of automated bots, 96% of bulk phishing
and 76% of targeted attacks**; on-device prompts scored 100 / 99 / 90; a security key 100 / 100 /
100 (**read at search-summary level; the Google Security Blog page fetched without its article body,
and the underlying paper, Doerfler et al., "Evaluating Login Challenges as a Defense Against Account
Takeover", WWW 2019, covering over 350,000 real hijacking attempts, was not opened**). Microsoft's
Alex Weinert has said an account is more than 99.9% less likely to be compromised with MFA on.
**Where it lands:** the ladder, not the binary. Nothing, SMS, app code, passkey or key, in that
order, and the gap from nothing to SMS is larger than the gap from SMS to a key for most people's
threat model. Be careful with the Microsoft 99.9%: it is a vendor blog figure without a published
methodology, and should be attributed as such, not presented as a study.

**4. Antivirus on a modern machine.** *Classification: contested empirical.* For: independent lab
testing (AV-TEST, AV-Comparatives) shows both Microsoft Defender and the paid products catching very
nearly everything in controlled tests, so the floor is high and free; layered detection genuinely
catches things that care does not. Against, and this is the position consumer coverage almost never
states: Google Project Zero's Tavis Ormandy has argued that antivirus products present an easily
accessible attack surface that dramatically increases exposure to targeted attacks, because much of
their code parses hostile input while running with the highest privilege and without sandboxing. The
argument is not that antivirus does not detect malware; it is that a privileged parser of untrusted
files is exactly the thing you would least like to add to a system. **Where it lands:** the built-in
protection on a current OS is the sensible default for a home user, the marginal value of a third
product is small, and the reason to be sceptical of a paid suite is a security argument rather than
a money-saving one. All specific lab scores must be dated when quoted; they change quarterly.
**Read at search-summary level throughout; no AV-TEST or AV-Comparatives report was opened, and
Ormandy's own writing was read only as quoted in secondary coverage.**

**5. Consumer VPNs.** *Classification: established that the marketing is wrong; contested what the
residual value is.* Consumer Reports' Digital Lab evaluation, **published December 2021**, screened
51 VPNs on Windows 10 with a University of Michigan team and evaluated **16 of them** in depth. It found **12 of 16 either
inaccurately represented their products or made hyperbolic or overly broad claims**; only 8 of 16 had
current third-party security audits of the core product, only 6 had reproducible builds, only 4
mentioned internal audits, and one shipped 1990s-era PPTP. It notes that "military-grade encryption"
is a phrase security professionals treat as a red flag because it means nothing, and that
advertisers and governments track people by many means that have nothing to do with the IP address a
VPN hides. Mullvad, IVPN, Mozilla VPN and TunnelBear were the four that described their limits
accurately. **Read in full.** A 2025 CHI paper on VPN providers' threat claims was identified but
not opened. **Where it lands:** a VPN moves your traffic's visible origin from your ISP or the
café's network to the VPN company, which is a trust transfer and not a trust elimination; it is
useful for a specific, nameable purpose (untrusted local network, hiding destination from an ISP,
changing apparent country) and does nothing about tracking, accounts, malware or phishing. The
neutrality risk here is sneering, and standards 3.3 applies: report the measured findings, do not
editorialise about the industry.

**6. Private browsing.** *Classification: established, with a large measured belief gap.* Detailed
numbers in the Habib entry above. What it does is local: the session's history, cookies and form
data are not retained on that device after the window closes. What it does not do is hide you from
the sites you visit, your ISP, your employer's network, or an advertiser, nor protect against
malware. The measured gap between those two lists is the whole lesson, and it is quantified: 39% of
both survey populations believed it made them anonymous, and around a quarter believed it stopped
cookies entirely.

**7. "Don't click suspicious links", and whether training works.** *Classification: contested
empirical, and the evidence has moved recently.* This is the most important entry in this file,
because the consensus of the security-training industry and the consensus of the measurement
literature now point in opposite directions.

Grant Ho and colleagues, "Understanding the Efficacy of Phishing Training in Practice", IEEE S&P
2025 (**read: abstract and pages 1 to 2 in full; the full results sections were not read**). An
eight-month randomised controlled experiment at UC San Diego Health: **ten simulated phishing
campaigns sent to over 19,500 employees**, with explicit control groups receiving no training and
randomised assignment to training conditions and lures. Findings: **no significant relationship**
between recent completion of annual awareness training and the likelihood of failing a simulation;
embedded training (the page you land on after clicking) produced a statistically significant but
**2% absolute** reduction in average failure rate; **over 56% of users clicked a phishing link at
some point** over the eight months, trained or not, with a median per-campaign failure rate of about
10%; lure quality dominated everything, with some lures drawing 1 to 2% and others upwards of 30%;
and the training is largely not consumed, with **over half of embedded-training sessions ending
within 10 seconds and under 24% of users completing the material**. Among the minority who did
complete interactive training, clicking on a later lure fell by 19% relative, which the authors
flag as possibly a selection effect. They set this beside Lain et al.'s 15-month study of 14,000
corporate employees, which found no positive effect and some evidence of a negative one, and Back
and Guerette's study of 2,000 employees at a US research university, in which people who completed
awareness training were *more* likely to click. The authors' own conclusion is that organisations
should not expect training as commonly deployed to substantially protect against phishing, because
the magnitude is too small.

The other side deserves its strongest form, and it is not weak. Earlier lab and small-scale studies
consistently found that training improves quiz performance and the accuracy of sorting phishing from
legitimate messages; Kweon et al. found a correlation between time spent on training and fewer
incidents across 7,089 Korean organisations. Ho et al. do not claim people cannot learn to spot
phishing; they claim that the training products currently deployed, at the intensity organisations
deploy them, do not move the outcome much. Those are different claims and a lesson must not
conflate them.

**Where it lands for this course:** teach the *structure* of a con rather than a checklist of lures,
because the lure is the variable Ho et al. found dominates; teach the recovery path (what to do in
the ten minutes after you clicked) as seriously as the avoidance; and be explicit that this course's
own genre has been measured and found to have small effects, which is both honest and, per standards
2.4, exactly the kind of sentence Foval should be willing to write about itself. Pair it with the
Kang finding that knowledge did not predict protective action. The defensible conclusion is that
structural defences (a password manager, a passkey, MFA, an unprivileged account, automatic updates)
outperform vigilance, and that this is a reason to set things up once rather than to be careful
forever.

**8. Cloud storage as backup, and the 3-2-1 rule.** *Classification: established in principle,
contested in the details.* Sync is not backup, and the mechanism is specific: a sync client cannot
distinguish a person saving a file from a program encrypting a folder, so it faithfully uploads the
damaged version, and deletion propagates the same way. Version history in OneDrive, Dropbox and
Google Drive mitigates this and is a real defence, but it is bounded by a retention window and can
be defeated by ransomware that renames files, which breaks the version chain. The 3-2-1 rule (three
copies, on two kinds of media, one off-site) was popularised by the photographer **Peter Krogh** in
*The DAM Book: Digital Asset Management for Photographers* (2005); he distilled it rather than
invented it. **Read at search-summary level; the book was not opened and the attribution should be
verified against a primary source before a lesson states it.** CISA and the NIST Cybersecurity
Framework's backup controls both endorse the shape of it. The live argument is whether "two media"
still means anything when both copies are spinning rust in different buildings, and whether the rule
should be extended (3-2-1-1-0, adding one immutable or offline copy and zero restore errors, which
is the vendor-promoted form and should be attributed as such). **Where it lands:** teach the
property, not the numerals. A backup is a copy that a mistake on the original cannot reach, and the
only way to know you have one is to restore from it. Cloud sync plus version history is a partial
backup with a known failure mode, and saying that precisely is more useful than saying sync is not a
backup and stopping.

---

## What this course owes Python Basics

The brief asked for this specifically, and it is the sharpest constraint on the course's scope.

`courses/computer-science-and-ai/python-basics/lessons/01-first-program.md` was **read in full**. It
is a Term 6 lesson and it currently teaches the terminal itself, inside two callouts and a predict
block, because nothing earlier in the Core does. What it assumes or hastily supplies:

- **Opening a terminal on three platforms**: Command and Space then "Terminal" on macOS; Start then
  "PowerShell" on Windows; Ctrl-Alt-T or the applications menu on Linux. It describes the result as
  "a window with a line of text and a cursor, waiting", which is all the orientation a learner gets.
- **Running a command with a flag and reading the two possible answers**: `python3 --version`
  answers with a version number, or says the command is not found.
- **The working directory as persistent state.** Its own bolded sentence is that a terminal is
  always sitting in one folder and only sees files in that folder. This is the single idea the whole
  lesson's error-diagnosis depends on.
- **Choosing and creating a folder, and saving into it**: `Documents/python`, a plain text editor
  (TextEdit set to plain text, Notepad, or VS Code), and a filename ending `.py`, with the explicit
  note that the extension is how the file is recognised rather than decoration.
- **`cd` with a relative path**, and the reason it works: `python3 sums.py` finds the file because
  you are standing in the folder it is in.
- **Diagnosing `can't open file 'sums.py'` as a location problem and not a program problem.** Its
  predict block turns on a fresh terminal starting in the home folder rather than where you last
  were.
- **Reading a transcript**: `$` for the shell prompt against `>>>` for the Python prompt, and the
  fact that the two are different programs.
- **Installing software from an official source** (python.org), choosing among versions, and knowing
  that `python3` on macOS and Linux is often `python` or `py` on Windows.

**So Digital Literacy owes Python Basics, concretely**: (a) a terminal opened on all three operating
systems, with the PowerShell-versus-POSIX difference named rather than papered over; (b) the working
directory taught as persistent state, with the graphical file browser and the terminal shown side by
side as Carpentry's instructor notes advise; (c) `pwd`, `ls`, `cd`, home as `~`, `.` and `..`,
absolute against relative, and tab completion; (d) commands, arguments and flags as a grammar, so
`--version` and `--help` are recognisable rather than magic; (e) file extensions, and plain text
against rich text, including the TextEdit and Notepad trap that Carpentry lists among the top three
Windows failures; (f) reading an error, specifically the difference between "command not found" (the
computer cannot find the *program*) and "no such file" (the program cannot find the *file*), which
is exactly the distinction Python lesson 1 needs and cannot afford to teach; and (g) installing
software from a source you have a reason to trust, which the Python lesson does in one line.

The terminal material in this course therefore has a testable success criterion: **a learner who
finishes it can create a folder, save `hello.py` into it, `cd` there, run `python3 hello.py`, and,
when it fails, say from the message alone whether the fault is in the location, the program name, or
the program.** Any terminal lesson that would not get someone to that point has not discharged the
debt. That criterion should go into OUTLINE.md verbatim.

---

## Best existing free resources (to link, not duplicate)

- **Software Carpentry, The Unix Shell** (swcarpentry.github.io/shell-novice), CC BY 4.0. The free
  full-length shell course; link it as the "go deeper" for every terminal lesson and for anyone who
  wants the pipes-and-loops material we may not reach.
- **MIT, The Missing Semester of Your CS Education** (missing.csail.mit.edu), CC BY-NC-SA. Lecture
  videos and notes. The right next step for a learner who finishes our terminal lessons and wants
  the developer's version.
- **William Shotts, *The Linux Command Line*, free internet edition** (linuxcommand.org), CC
  BY-NC-ND. Link, do not adapt.
- **EFF Surveillance Self-Defense** (ssd.eff.org), CC BY. Link "Your Security Plan" from the
  security lessons; it is the threat-modelling exercise we should not rebuild.
- **NIST SP 800-63B-4** (pages.nist.gov/800-63-4/sp800-63b.html), US government work. Link section
  3.1.1.2 directly so a sceptical learner can read the actual SHALL statements.
- **UK NCSC guidance and blog** (ncsc.gov.uk), Open Government Licence. The password expiry post is
  the most readable statement of the reversal anywhere.
- **Have I Been Pwned** (haveibeenpwned.com). The one genuinely useful interactive exercise
  available for the password lesson: look up your own address, find out which breach, then see what
  the blocklist requirement in NIST 3.1.1.2 is actually built from. Named here so the outline
  remembers it.
- **Kurose and Ross's companion site** (gaia.cs.umass.edu/kurose_ross), which carries free online
  lectures and the 8th-edition table of contents.

---

## Safety-critical guidance

This is a practical course, and some of what it teaches can hurt someone if taught carelessly.

- **Never print a checklist of current scams or lures as though it were the syllabus.** Ho et al.
  found lure quality dominates outcomes and the lures change constantly. Teach structure, and date
  every example.
- **Never say or imply that being phished reflects on intelligence.** The measured base rate at a
  large healthcare organisation, among people who had been trained, was that over half clicked at
  least once in eight months. That is the argument, and it is also the compassion.
- **Any command with destructive potential gets a warning and a safe rehearsal.** `rm` has no
  undo and no recycle bin. Carpentry's instructor notes warn separately that learners get *trapped
  inside* command-line editors and cannot escape, so any lesson that opens one must say how to close
  it in the same breath.
- **Do not teach `sudo` as a step in a recipe.** Missing Semester lecture 1 covers it; a foundation
  course should teach what it means to grant a program full power before it ever teaches the word.
- **Never tell a learner to disable a security feature to complete an exercise**, including
  Gatekeeper, SmartScreen, or antivirus.
- **Name the thing you are trusting, every time software is installed.** The package-manager and
  app-store threat is real and current: Sonatype reported over 454,600 new malicious packages
  identified across 2025 with over 99% of open-source malware on npm, and typosquatted names such as
  `pygaqme` for `pygame` are the standard technique (**read at search-summary level; the Sonatype
  report was not opened, and any figure quoted in a lesson must be verified against it**).
- **The security lessons must not induce fatalism.** Wash's *Graffiti* model produces exactly that:
  if they are going to get in, they're going to get in. A lesson that lists threats without
  finishing on the small number of structural defences that work has made its readers less safe.
- **Jurisdiction.** Data-protection rights (the GDPR right of access, the right to erasure) are
  European; US readers have a patchwork of state laws. Say which is which wherever the course tells
  someone what they can demand of a service.

---

## Open concerns about scope

- **Three operating systems is a real cost, and PowerShell is the problem.** Every free shell
  curriculum in existence (Carpentry, Missing Semester, Shotts) teaches bash or zsh. Carpentry's
  instructor notes list Windows as the leading source of workshop failure by a distance: home
  directory confusion, no plain text editor, DOS line endings. Meanwhile Python Basics lesson 1
  sends Windows learners to PowerShell, where `ls` is an alias that behaves differently, `pwd`
  works, and pipes carry objects rather than text. **A decision is needed in Stage 2 and it should
  be made deliberately**: either teach PowerShell alongside POSIX and accept the length, or teach
  POSIX and tell Windows learners exactly how to get one (WSL, or Git Bash) and accept that we are
  asking them to install something in lesson one. The current course description promises the course
  "is the same on Windows, macOS and Linux where that matters", which commits us to naming the
  difference rather than hiding it.
- **The course's own premise is only partly supported by the evidence.** Kang et al. found no direct
  relationship between technical understanding and protective behaviour, and Ho et al. found that
  security training as deployed moves outcomes by about two percentage points. This course should
  say so in lesson 1 and then make the argument it can actually defend: that understanding changes
  *diagnosis* (you can tell what went wrong) and supports *one-time structural choices* (a manager,
  a passkey, automatic updates, a backup that restores), which is a different and better claim than
  "knowing more makes you safer".
- **Numbers in this subject go stale faster than anywhere else in Foval.** NIST's minimum length
  changed in 2025. Antivirus lab scores change quarterly. APWG counts change quarterly. Okta's
  adoption figures are annual. Every figure in a lesson must carry its year in the sentence, and the
  feedback loop should expect to revisit this course's numbers more often than any other.
- **"What services keep about you" is the thinnest-researched outcome in course.yaml.** The research
  here found the mental-model side (Kang's participants could not say who held copies of their data)
  but not good evidence on the practical side: how usable the data exports actually are, and what a
  learner will find when they open one. A small qualitative literature exists on privacy dashboards
  and the right of access (Farke et al. at USENIX Security 2021; a case study finding that none of
  ten dashboards examined fully complied with the right of access) and **none of it was opened**.
  Before that lesson is drafted, read at least one of those papers and actually run a Google Takeout
  and an Apple or Meta data download so the lesson describes what arrives rather than what is
  promised.
- **Backups is the outcome with the weakest sourcing in this file.** The 3-2-1 attribution to Krogh,
  the ransomware-defeats-versioning mechanism, and the retention-window limits all rest on secondary
  and vendor material. Vendor sources on backup are marketing for a product category and standards
  2.2 excludes them. Before drafting, get the mechanism from a primary or official source (CISA's
  ransomware guidance, or the provider's own documented version-retention limits) rather than from a
  backup company's blog.
- **We omit two things DigComp treats as core**, content creation and digital wellbeing, and one
  thing UNESCO treats as core, career-related competencies. That is a defensible choice for a
  Term 1 foundation course, but it should be a stated choice in the course description rather than
  an accident, and the taxonomy should say where those live if they ever live anywhere.
- **Nothing here is about mobile.** The whole file, and most of the underlying literature, assumes a
  laptop or desktop with a file system a person can see. A large share of the world's internet users
  have only a phone, on which there is no visible file system and no terminal. The course should say
  in lesson 1 that it is teaching the desktop model and why that model is still worth having.
- **The Ion et al. percentages, the Google login-challenge paper, and the Verizon and APWG reports
  were all read second-hand.** Each is load-bearing for at least one planned lesson. Open the
  primary before the claim is printed, and move the name out of the `unread:` line when you do.
