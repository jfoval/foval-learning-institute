---
source: courses/computer-science-and-ai/digital-literacy/lessons/10-passwords-and-the-ladder-above-them.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Every figure and claim below appears in the lesson and traces to the lesson's own numbered
  sources. Nothing has been added that the lesson does not say. The course is in a neutral school
  with no standpoint to preserve. Fact-checked in a fresh-context subagent against the lesson on
  2026-09-18: verdict FAIL, and both findings fixed before any render. "Almost every article" was
  a prevalence claim the lesson does not make, and it attributed the stale eight-character quote
  to the renumbering when the lesson attributes it to the raised length floor. And "if your
  password was refused" dropped the lesson's condition, "because it appears in known breach data",
  which matters because the lesson's own quiz says a blocklist hit means guessable rather than
  necessarily breached. Three nits fixed: the NIST risk-indicator wording, "Verifiers and CSPs",
  and the publication number read for the ear.
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Tenth episode for
  Digital Literacy. Covers credential stuffing as the attack that explains the guidance, the
  current NIST requirements, and the authentication ladder. Leaves out the rotation
  disagreement and the recovery-path section, and says so in the sign-off.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Passwords, and the ladder above them.

S1: And almost everything people believe about passwords comes from imagining the wrong attack.

S2: What's the picture in most people's heads?

S1: Somebody sitting at a login page trying guesses. Your password is Tiger nineteen eighty seven, they try password, then one two three four five six, and eventually they get there. So a cleverer password with a symbol in it buys you time.

S2: And that's not what happens.

S1: Services do limit repeated failures against one account. So an attacker doesn't make thousands of attempts against you. They make one or two attempts against each of a hundred thousand accounts, from many different addresses, and every individual attempt looks like an ordinary person getting their password slightly wrong.

S2: So where do they get the passwords?

S1: From somewhere else. A company you signed up to in twenty fourteen was breached. Their list of addresses and passwords is published. Somebody points a program at two hundred other services and tries every pair at machine speed. They're not guessing. They already have your password. They're finding out where else it works.

S2: It has a name, doesn't it.

S1: Credential stuffing. And once you've got that in your head, everything else stops being a list of rules.

S2: Let's test that. Does adding a symbol help?

S1: Nothing. Tiger nineteen eighty seven with an exclamation mark on the end is just as stolen. Complexity defends against guessing and nobody's guessing.

S2: Does length help?

S1: Not against this attack, and it matters for a different one, so be exact. A service that stores your password properly doesn't store it. It stores a hash, a fixed size value computed from the password that can't be run backwards.

S2: So when hashes leak, what does the attacker do?

S1: They don't unscramble them. They guess candidates and compute the hash of each one, looking for a match. Every extra character multiplies how many candidates there are.

S2: And changing it every ninety days?

S1: Almost nothing. Your window of exposure is the gap between the breach and the change, which is usually years, and the change is usually Tiger nineteen eighty eight.

S2: So what's left?

S1: A different password on every site. It's the only one of the four that turns one company's breach into one company's problem.

S2: What does the official guidance actually say now?

S1: The American standard is NIST Special Publication eight hundred, sixty three B, revision four, final in August twenty twenty five. And one thing to know before quoting it at anybody. Revision four renumbered the password section and raised the length floor, so an article quoting NIST says eight characters as the rule for an ordinary password is quoting the previous revision.

S2: What's the number now?

S1: Verifiers and CSPs shall require a password used as a single factor to be a minimum of fifteen characters. They shall not impose composition rules. They shall not require periodic changes. They shall not prompt for security questions when choosing passwords. And they shall compare your chosen password against a blocklist of known commonly used, expected or compromised passwords, and shall give the reason for a rejection.

S2: Why does the reason matter?

S1: Because if your password was refused for appearing in known breach data, the useful thing you've learned isn't about this account. It's about every other account where you used it.

S2: Now, if there are no composition rules, is fifteen characters of anything fine?

S1: No, and this is the part that gets dropped. Long is necessary and not sufficient. NIST says that blocklist may hold dictionary words. A memorable line from a song is fifteen characters of dictionary words. Use something a manager generated, or words chosen at random rather than by you.

S2: Let's do the ladder above the password.

S1: Four rungs. Nothing. A code by text message. A code from an authenticator app. And a passkey or a security key.

S2: What does the first rung stop?

S1: The attack we just described, dead. The program replaying breached passwords across two hundred services has your password and no phone. It fails.

S2: But people say text messages are broken.

S1: And the criticism is true. NIST designates out of band authentication over the public telephone network restricted, and says verifiers should consider risk indicators such as device swap, SIM change and number porting before using it. Your phone number isn't attached to your phone. It's a record at a telephone company.

S2: How often does that actually happen?

S1: The FBI's complaint centre recorded nine hundred and eighty two SIM swap complaints and about twenty six million dollars in reported American losses in twenty twenty four, against sixteen hundred and eleven complaints and over sixty eight million in twenty twenty one. Those are reported complaints, which is a floor.

S2: So how do the two criticisms fit together?

S1: Like this. The step from nothing to a text message is larger, for most people, than the step from a text message to a security key. And I should say that comparison is this course's reading of those two sources, not a claim either of them makes.

S2: What does the top rung do that the others don't?

S1: Survives a fake page. You get sent to a convincing copy, you type your password, it asks for your code, you read it off your phone. The fake page passes both to the real site inside the thirty seconds the code is good for.

S2: A code you can read is a code you can be persuaded to hand over.

S1: That's it. A passkey is tied to the site's actual address and simply won't answer a different one. There's no code for you to read out, so there's nothing for a convincing page to ask you for.

S1: We've left out the genuine disagreement about forced password expiry, which gets both sides properly, and the whole section on recovery paths, which is the part almost nobody does.

S2: Read the whole thing at Foval Learning Institute dot org. We'll see you next time.
