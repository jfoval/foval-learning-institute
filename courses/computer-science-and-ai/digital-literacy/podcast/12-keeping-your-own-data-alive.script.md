---
source: courses/computer-science-and-ai/digital-literacy/lessons/12-keeping-your-own-data-alive.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Every figure and claim below appears in the lesson and traces to the lesson's own numbered
  sources. Nothing has been added that the lesson does not say. The course is in a neutral school
  with no standpoint to preserve. Fact-checked in a fresh-context subagent against the lesson on
  2026-09-18: verdict FAIL, and both findings fixed before any render. The five-part decomposition
  of a backup system was stated as fact when the lesson marks it as this course's own carving
  rather than anybody's standard. And the standards body behind a quotation read aloud was never
  named, which for a quoted source is not optional; it is now the United States' Cybersecurity and
  Infrastructure Security Agency. One nit fixed, a dropped "flood". The long CISA sentence was
  checked word for word and was NOT truncated, which mattered, because the lesson itself had
  carried a truncation of it earlier that day.
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Twelfth episode for
  Digital Literacy. Covers the property that makes a copy a backup, why sync is not backup, and
  why the restore is the only test. Leaves out the retention-window figures and the restore
  exercise, and says so in the sign-off.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Keeping your own data alive.

S1: And it starts by asking you to write down everything on your machines you'd genuinely be upset to lose. Then cross out anything you could get again.

S2: What's left?

S1: For most people, much less than they expect. Mostly photographs, correspondence, and work they made themselves. And that short list is the whole subject. Not backing up your computer, which is a chore nobody ever finishes.

S2: All right. Give me the sentence.

S1: A backup is a copy that a mistake on the original cannot reach. And the only way to know you have one is to restore from it.

S2: Both halves do work.

S1: Both halves, and almost everything people get wrong is a failure of one or the other.

S2: What's not in that sentence is interesting. It doesn't say how many copies.

S1: It doesn't, and the numbers people quote are consequences rather than rules. More than one copy, because copies fail. Different kinds of storage, because one kind fails in one way. Somewhere else, because a fire, a flood or a burglary takes a building rather than a device.

S2: Let's test the sentence. A second folder on the same machine.

S1: A mistake that deletes the original reaches it, and so does a drive failure that takes the whole disk. Not a backup.

S2: An external drive that's plugged in all the time.

S1: No, not by this test. Anything running on the machine can write to it, and so can a mistake you make. It does buy you one real thing, which is surviving the machine's own disk dying, and that's worth having. It's not the property in the sentence.

S2: A drive in a drawer, plugged in once a month.

S1: Now a mistake on the original genuinely can't reach it, except during the hour it's connected. That's a backup, and it's the oldest answer there is.

S2: And a synced cloud folder? Because that's what most people would say.

S1: And that's the one whose failure mode is least understood, so it's worth going slowly.

S2: What does a sync client actually do?

S1: Its job is to make every device match. That's what it's for and it does it well. Now follow that job to its conclusion. A sync client cannot tell a person saving a file from a program damaging one.

S2: It just sees that a file changed.

S1: It sees a file changed, it has no view about whether the change was wanted, and it faithfully uploads the damaged version. Every other device faithfully downloads it. And deletion works the same way.

S2: So it isn't a flaw.

S1: There's no version of sync without it. A client that second guessed your saves would be unusable. The problem is only that people use it as an answer to a question it was never asked.

S2: What about version history? That's a real defence.

S1: It's a real defence and it's worth having. Two things bound it. It has a documented retention window, a specific number of days that depends on your provider and your plan and that the provider publishes. And it only helps with damage you notice inside that window.

S2: Say more about that second one.

S1: Think about how a file goes wrong without anybody shouting. A save that went badly. A program that wrote out something malformed and then closed. A conversion that dropped half a document. None of those announces itself, and if you don't open the file again, nothing tells you.

S2: So a file you look at twice a year.

S1: Can pass through the whole window in that state and come out the other side with the good version gone.

S2: There's a class of attack this all bears on.

S1: Ransomware, where a program encrypts your files and asks for money to undo it. And it's worth knowing what official guidance says, because it isn't what backup companies say. The United States' Cybersecurity and Infrastructure Security Agency, CISA, publishes a ransomware guide, and its sentence on this is direct. It is important that backups are maintained offline, as many ransomware variants attempt to find and subsequently delete or encrypt accessible backups to make restoration impossible unless the ransom is paid.

S2: Accessible.

S1: That's the word. It isn't about how many copies you have. It's about reach. A copy the machine can write to is a copy that something running on the machine can destroy.

S2: Does that guidance say version history is useless?

S1: It says the opposite. It recommends enabling version control to keep multiple variants of objects in storage, because that allows for easier recovery from unintended or malicious actions. So the honest picture is layered rather than dismissive.

S2: Now the second half of the sentence. Why is a restore the only test?

S1: Because a backup system isn't one thing. And this way of taking it apart is the course's own carving rather than anybody's standard. There's a schedule, which decides when. A selection, which decides what. A destination, which decides where. A format, which decides whether anything can read it back. And credentials, which decide whether you can still get in.

S2: And every one of those can fail quietly.

S1: While the indicator stays green. The schedule can run perfectly on a folder you stopped using in twenty nineteen. The selection can exclude the one directory that matters, because the default excluded it and nobody looked. The format can need a password you set once and haven't typed since.

S2: So what does a green tick prove?

S1: That the schedule ran. One part of five, and nothing about whether you can get anything back.

S2: Which makes these two different statements.

S1: I have backups. And I have restored a file from my backup. Only the second one is about the future. The first is about an intention.

S1: We've skipped the actual retention figures, which come from a provider's own page and are dated deliberately, and the exercise where you restore a real file and time it.

S2: Read the whole thing at Foval Learning Institute dot org. We'll see you next time.
