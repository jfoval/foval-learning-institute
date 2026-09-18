---
title: Keeping your own data alive
minutes: 145
objectives:
  - State the property that makes a copy a backup, and say which of your own copies has it and which do not
  - Explain why a sync client cannot tell a person saving a file from a program damaging one, having watched it happen
  - Find your own provider's documented retention window, read it, and write down the date you checked
  - Restore one real file from where you believe your backup is, time it, and say what the attempt taught you
quiz:
  - q: A woman keeps every photograph in a folder that syncs to two laptops and a phone. She says that is three copies, so she is safe. What has she actually got?
    options:
      - Three copies, and the risk is that all three providers could fail at once
      - Three copies and one backup, since the phone is a different kind of device
      - One copy in three places, which a single mistake on any one can reach
      - Two backups and a working copy, which is enough for anything but a fire
    answer: 2
    explain: Sync makes the same copy appear in several places, so a deletion or a corruption on any one device is faithfully carried to the others, and C is what she has. A counts providers when the shared fate is the sync, not the provider. B calls a phone a different kind of storage, which is about the hardware and not about what a mistake can reach. D invents a distinction between the copies that the syncing removes.
  - q: A man's backup drive shows a green tick every night for two years. What can he say about whether he has a backup?
    options:
      - That he has one, since a nightly indicator is the thing that would show a failure
      - That he probably has one, and the remaining doubt is about the drive's lifespan
      - That he has one for everything the schedule covers, which is the real question
      - That he does not know, because no part of the green tick is a completed restore
    answer: 3
    explain: A backup has a schedule, a selection, a destination, a format and credentials, every one of which can fail while the indicator stays green, and only a restore exercises all of them at once, which is D. A trusts the indicator to report on things it does not test. B narrows the doubt to hardware when the selection is likelier to be wrong. C is the best of the three wrong answers and still stops short, because "what the schedule covers" is itself untested.
  - q: Somebody edits a file on her desktop, and an hour later finds the earlier version is gone from her laptop too. Which part of the mechanism explains that, and what would have helped?
    options:
      - The sync client could not tell a save from damage, and version history may
      - The laptop was out of date and downloaded an old copy, and a refresh would
      - The provider deleted the earlier version deliberately, and a paid plan would
      - The file was corrupted in transit between the two, and a re-upload would
    answer: 0
    explain: A sync client sees a file change and its job is to make every device match, so it carries the change without any opinion about whether the change was wanted, which is A, and version history is the partial defence because it keeps the earlier one for a bounded time. B describes the opposite direction of travel. C attributes intent to a provider that simply did what it was asked. D invents a corruption when the file arrived exactly as sent.
  - q: Why does official ransomware guidance put the emphasis on keeping a backup offline, rather than on keeping more copies?
    options:
      - Because offline copies are cheaper to keep, so more of them can be afforded
      - Because many variants look for backups the machine can reach and destroy them
      - Because an offline copy is the only kind that is encrypted when it is stored
      - Because online copies are the ones most often lost to a provider's own failure
    answer: 1
    explain: Official guidance says many ransomware variants attempt to find and then delete or encrypt accessible backups, so what protects a copy is being out of reach rather than being one of several, which is B. A is about cost and not about what a mistake can reach. C confuses being offline with being encrypted, which are separate properties and can be combined. D names a real risk that is not the one this guidance is about.
  - q: A reader finds his provider keeps previous versions for 30 days on his plan. He decides that is fine because he would notice a problem within a month. What has he not accounted for?
    options:
      - That the window is measured from the last edit rather than from the first
      - That thirty days is unusually short, and most consumer plans run far longer
      - That a slow corruption, or a file opened twice a year, outlasts the window
      - That thirty days is a minimum and his actual window may be shorter than that
    answer: 2
    explain: A window works against damage you notice inside it, and the cases it does not cover are the quiet ones, a file that degrades slowly or one nobody opens between January and December, which is C. A describes how the window is measured and does not change the exposure. B is false against the documented tiers, where thirty days is the ordinary consumer figure and the longer windows are on business plans. D contradicts the documented figure rather than adding to it.
  - q: A reader restores one file as an exercise and finds it takes forty minutes and two failed attempts. What is the right conclusion?
    options:
      - The exercise has failed, and it should be repeated once the system is working
      - That the system is broken and the sensible response is to change providers
      - That forty minutes is acceptable for one file and the system is working
      - The exercise has succeeded, and he now knows something he did not know before
    answer: 3
    explain: The restore is the test, and a test that reveals a problem has done its job, so D is right and this is the whole reason the exercise is in the lesson. A treats the discovery as a failure of the exercise rather than its result. B jumps to replacing a system he has only just begun to measure. C accepts a number without asking what it would mean across the whole set of files he would need back.
---

:::exercise Name what you would actually miss
Take 10 minutes. Paper, before anything else.

1. Write down everything on your machines that you would genuinely be upset to lose. Not categories. Actual things.

2. Now cross out anything you could get again. A film you bought, a program you could reinstall, a document your employer also has.

3. Look at what is left. For most people it's much shorter than they expect, and it's mostly photographs, correspondence, and work they made themselves.

4. Beside each survivor, write where the copies are.

Keep the page. Every exercise in this lesson uses it, and the last section asks you to look at it again with different eyes.
:::

That list is the whole subject. Not "backing up your computer", which is a chore nobody ever finishes. A specific short list of things that exist nowhere else, and the question of what would have to happen for them to be gone.

## One sentence, and everything comes out of it

This is the sentence this lesson exists to give you.

**A backup is a copy that a mistake on the original cannot reach. And the only way to know you have one is to restore from it.**

Read it twice, because both halves do work, and almost everything people get wrong about this is a failure of one half or the other.

Notice what the sentence does not contain. It doesn't say how many copies. It doesn't say what they should be stored on, or where. Those are all real, and they are **consequences** rather than rules, which is why they are worth deriving rather than memorising:

**More than one copy**, because copies fail. A drive stops working, and if that drive held your only copy, then, the number of copies was the problem.

**Different kinds of storage**, because one kind fails in one way. Two drives bought on the same day from the same batch is less independence than it looks.

**Somewhere else**, because a fire, a flood or a burglary takes a building rather than a device. Both your laptop and the drive beside it are in the same building.

You may have met a numbered rule that packages those three. This lesson does not teach the numbers, deliberately. The numbers are a mnemonic for the property, and if you have the property you can derive them, while if you have only the numbers you cannot tell which of your copies actually counts.

:::predict Before reading on: take the copies you listed in the first exercise. For each one, ask the sentence. Is there a mistake on the original that could reach it?
Work through the usual ones.

**A second folder on the same machine.** A mistake that deletes the original can reach it, and so can a drive failure that takes the whole disk. It isn't a backup.

**An external drive that is plugged in all the time. No, not by this test.** Anything running on the machine can write to it, and so can a mistake you make. It does buy you one real thing, which is surviving the machine's own disk dying, and that is worth having. It is not the property in the sentence, though, and CISA's word for it later in this lesson is *accessible*.

**A drive in a drawer, plugged in once a month.** Now a mistake on the original genuinely cannot reach it, except during the hour it is connected. That is a backup, and it is the oldest answer there is.

**A synced cloud folder.** This one is the whole of the next section and it deserves it, because it is the answer most people would give and it is the one whose failure mode is least understood.

Notice what you were doing just then. You were not counting. You were asking, of each copy, what could reach it, and that is the question the sentence is for.
:::

## Why sync is not backup

:::predict Before you read the mechanism, predict the demonstration. You change a file on one device, having already synced it to another. Thirty seconds later, what does the second device show, and what warned you?
It shows the new version, and nothing warned you.

Most people expect *something*: a prompt, a conflict, a copy kept aside. There is none, and the exercise below has you watch it on your own files rather than take my word for it.

The reason is in the next paragraph, and it's worth predicting that too before you read it. Ask yourself what the program on your machine would have to be able to do in order to warn you.
:::

Lesson 2 told you a synced folder is a directory in the tree with a program watching it. That program has a name, the **sync client**, and its job is to make every device match. That's what it's for, and it does it well.

Now follow that job to its conclusion. **A sync client cannot tell a person saving a file from a program damaging one.** It sees that a file changed. It has no view about whether the change was wanted, because it can't have one. So it faithfully uploads the damaged version, and every other device faithfully downloads it.

The same is true of deletion. You delete a file, the client sees a file that is no longer there, and it makes every other device match.

This isn't a flaw, and there's no version of sync without it. A client that second-guessed your saves would be unusable. The problem is only that people use it as an answer to a question it was never asked.

:::exercise Watch it happen, on your own files
Take 10 minutes. Do not skip this one. It is the only thing in this lesson that makes the mechanism stop being an abstraction.

You need two devices signed in to the same sync service, or one device and the service's website.

1. Make a **new** file in your synced folder. Not one you care about. Put a sentence in it. Wait for it to sync.

2. Check it has appeared on the other device, or in the browser.

3. Now change the sentence on the first device to something completely different. Save it. Wait.

4. Look at the other device. The original sentence is gone from there too. **Nothing warned you, and nothing asked.** That is the whole mechanism and you have just watched it.

5. Now try to get the first sentence back, from version history, wherever your provider keeps it. Note two things: whether you could, and how many clicks it took.
:::

That last step is the one that matters, and the next section is about what you found.

## Version history, and the window it lives in

Version history is a real defence and it's worth having. It keeps the earlier contents of a file for a while after they change, so the demonstration you just ran is recoverable.

Two things bound it.

**It has a documented retention window.** Not forever. It's a specific number of days, which depends on your provider and on which plan you are on, and which the provider publishes.

One provider's, so you know what you're looking for. **Dropbox's own documentation, read on 18 September 2026, gives 30 days on its Basic, Plus and Family plans, 180 days on Professional, Essentials, Business and Standard, and 365 days on Business Plus, Advanced and Enterprise.**[1] The same page says you cannot restore previous versions of files that have been permanently deleted, and that add-ons can extend the windows.

**Those numbers are Dropbox's and they are today's**, which is why the exercise below sends you to your own provider's page rather than telling you your answer. A figure in a lesson about a company's product goes stale; the habit of reading the page does not.

**And it only helps with damage you notice inside the window.** That's the quiet limit, and it's worth sitting with.

Think about how a file goes wrong without anybody shouting. A save that went badly. A program that wrote out something malformed and then closed. A conversion that dropped half a document. None of those announces itself, and if you don't open the file again, nothing tells you. A file you look at twice a year can pass through the whole retention window in that state, and come out the other side with the good version gone.

:::checkpoint Your provider keeps 30 days of versions. You have a folder of scanned family documents that you last opened fourteen months ago. What is your actual exposure, and what would fix it?
Your exposure is total, on those files, and the retention window is not doing anything for you at all.

Whatever happened to them, if it happened more than thirty days ago, the earlier versions are gone. And because you last looked fourteen months ago, you have no idea whether anything happened. **You would find out by opening the folder, which is the thing you do not do.**

What fixes it is not a longer window. It is a copy that the mistake could not reach in the first place: an export, a drive in a drawer, a copy somewhere that does not sync. Once the copy is out of reach, the question of whether you noticed in time stops mattering, and that is why the property in the first section is worth more than any retention figure.

The cheap version of this, if nothing else: open the folder. Knowing the files are intact today converts an unknown into a known, and you can then make a copy of something you have checked rather than of something you hope about.
:::

## The case the guidance is actually written about

There is a class of attack where a program encrypts your files and asks for money, and it is worth knowing what the official guidance says about backups, because it is not what backup companies say.

The United States' Cybersecurity and Infrastructure Security Agency publishes a [ransomware guide](https://www.cisa.gov/stopransomware/ransomware-guide). Its sentence on this is direct:[2]

> "It is important that backups are maintained offline, as many ransomware variants attempt to find and subsequently delete or encrypt accessible backups to make restoration impossible unless the ransom is paid."

Read that word **accessible**, and read the last clause too, because it names the motive. The guidance is not about how many copies you have or what they are stored on. It's about **reach**, which is the property from the first section arriving from a different direction. A copy the machine can write to is a copy that something running on the machine can destroy, and a synced folder is by definition a place the machine can write to.

What the guidance does **not** say is that version history is useless. It says the opposite. It recommends enabling version control "to keep multiple variants of objects in storage", because that "allows for easier recovery from unintended or malicious actions", and separately recommends enabling delete protection or object lock on storage that is often targeted.[2]

So the honest picture is layered rather than dismissive. Versioning is a real defence with a bounded window. An offline copy is the thing that survives when the machine itself turns against you. And the guidance asks for both.

It also says two things about testing, which is the second half of this lesson's sentence: maintain "offline, encrypted backups of critical data, and regularly test the availability and integrity of backups in a disaster recovery scenario", and "test backup procedures on a regular basis".[2]

**One thing this lesson will not tell you**, and it's worth saying because the claim is everywhere. There's a widely repeated line that ransomware defeats version history by renaming files, so the version chain breaks.

This course went looking for it in CISA's guide, which is the source for the rest of this section, and **it isn't there**. Where this course did find it was in material published by firms selling backup products, which is marketing rather than evidence.

**That is not proof the claim is false.** It's one page, checked once, and other bodies publish on backups too. It's a reason not to print it here, and to give you CISA's actual claim instead, which is about reachability and happens to be the more useful of the two.

## Why the restore is the only test

Now the second half of the sentence, and the part almost nobody does.

A backup system isn't one thing. One way to take it apart, and this is this course's carving rather than anybody's standard:[5] a **schedule**, which decides when. A **selection**, which decides what. A **destination**, which decides where. A **format**, which decides whether anything can read it back. And **credentials**, which decide whether you can still get in.

Every one of them can fail silently while the indicator stays green.

The schedule can run perfectly on a folder you haven't used since 2019. The selection can quietly exclude the one directory that matters, because the default excluded it and nobody looked. The destination can be full. The format can need a program you no longer have, or a password you set once and have not typed since. The credentials can belong to an account you closed.

:::checkpoint Your nightly backup has run and shown a green tick every night for a year. Of the five parts above, how many has that green tick actually proved?
One, and only for last night.

It proved the **schedule** ran. That's genuinely something, and it is the part people already trust.

It says nothing about the **selection**, because a schedule can run flawlessly over the wrong folder. Nothing about the **destination** being readable rather than merely writable. Nothing about the **format**, because writing a file and being able to read it back are different operations and only one of them was performed. And nothing about the **credentials**, which are exercised when you sign in to get something out, and which nobody has typed for a year.

So the indicator reports on one part of five and reports nothing about whether you can get anything back. That is not the indicator lying. It is reporting exactly what it watches, and what it watches is the easy part.
:::

**A restore is the only operation that exercises the destination, the format and the credentials together.** Restore one file and you have tested four of the five for that file, because you have also proved that *that* file was selected. What you have not tested is the selection for everything else, which is why "I restored a file" and "my backup covers what I think it covers" are still two claims and not one.

Even so, these are two very different statements:

- "I have backups."
- "I have restored a file from my backup."

Only the second one is about the future. The first is about an intention.

## What people get wrong

**"Sync is backup."** Sync makes copies match. Backup keeps a copy a mistake cannot reach. Those are different jobs, and the first one actively propagates the mistake, which you watched it do in the exercise above.

**"It's on two devices, so it's safe."** Ask the sentence. If both devices sync to the same account then one mistake reaches both, and two is a count rather than a property.

**"The important thing is how many copies I have."** The count is a consequence of the property, not a substitute for it. Three copies in the same account is one copy with a bigger number attached, and one copy in a drawer is a backup.

**"My backup runs every night, so I have a backup."** No restore, no backup. Everything in the section above can be broken behind a green indicator.

**"My photographs are safe because they're in my phone's gallery."** This is the one to be most careful about, because it's the commonest and it feels the most solid.

The gallery is a view of what is on the phone plus, usually, what is in a synced account. Delete a photograph and it goes from both, after a bin period. Lose the phone and the account is what you have left, which is real. But a mistake in the account reaches everything, and for a great many people the account is the only copy. For an irreplaceable set of photographs, the honest question is the one from the first section: **is there a copy that a mistake on the account could not reach?** For most people the answer is no, and an annual export onto a drive that lives in a drawer costs an hour and closes it.

## Practice

:::exercise Restore one file, and time it
Take 20 minutes. This is the exercise the whole lesson is for, and it touches a real file, so read it through before starting.

1. Pick a real file from the list you made at the start. Something you would miss. **Not something in a shared folder, and not something other people also work on**, because step 4 would reach their copy too, which is the mechanism you watched in the last exercise.

2. **Make a safe copy of it, somewhere outside whatever you are about to test.** A USB drive, or a folder on a different disk. Not inside the thing you are testing, and not emailed to yourself, since that is usually the same company and often too large anyway.

3. **Now open the safe copy and check it is really the file.** Not a placeholder, not an empty stub, not a cloud icon that has never actually downloaded. This is the whole lesson applied to the rehearsal: a copy you have not opened is not yet a copy you have. Do not go on until you have done this.

4. Now delete your working copy. **On Windows and macOS, deleting sends it to the Recycle Bin or the Trash, and pulling it back out of there tests nothing at all.** Empty the bin, or the test is theatre. Your verified safe copy from step 3 is why you can do that.

5. **Restore it from wherever you believe your backup is.** Start a timer when you begin.

6. Write down three things: whether you could, how long it took, and how many attempts.

Most people find either that they can't, or that it takes far longer than they thought. **Both of those are the exercise working.** A restore that reveals a problem has done exactly what it's for, and you now know it on a calm Tuesday rather than on the worst day of the year.

7. **Last, and do not skip this either: open the restored file and check it is the version you expected.** Only then delete the safe copy. If the restore failed, or came back as the wrong version, put the safe copy back now and fix whatever step 6 revealed.
:::

:::exercise Read your own provider's retention page
Take 15 minutes. Your own provider, not this lesson's example.

1. Find your provider's own documentation on version history or file recovery. Their page, not a blog post about it, and not an article summarising it.

2. Write down: the retention window, **which plan you are actually on**, and whether deleted files are covered differently from changed ones.

3. **Write down the date you checked it.** These numbers change, and a figure without a date is one you can't audit later.

4. Now go back to the list you made at the start of this lesson, and mark each item with what that window would and would not cover, given how often you actually open it.

5. Finally, pick the one item on that list that came out worst, and write one sentence on what you will do about it. Something you'll actually do. An annual copy onto a drive in a drawer beats a plan for a system you will never build.
:::

## Connections

Lessons 2 and 3 are why this lesson is possible at all: you can't back up what you can't locate, and the first exercise here is unanswerable if you do not know where your files live.

Lesson 3 also gave you five causes of a file going missing, and **a backup answers none of them cleanly**. A file you moved, renamed, saved into an application's own storage, or left in a default location you never chose is not lost, and restoring it from a backup is the wrong repair for all four. The fifth is the one to sit with: a file that was never saved anywhere at all. A backup cannot touch that, because there was never anything to copy. Backing up isn't a substitute for knowing where things are.

Lesson 9 is one of the mistakes a backup has to survive. Something you installed is a thing running with your access, and your access includes the drive plugged in beside you.

Lesson 13 asks the same question about copies somebody else holds. This lesson is about the copies you control. That one is about the ones you don't, and how to find out what they are.

## Go deeper

- **[CISA, the #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)**, free, a US government work. The backup section is short and it is the primary source for this lesson's second half. Read it for the difference in tone from commercial advice on the same subject: it tells you what to do and hasn't anything to sell you.
- **Your own provider's version-history documentation.** Whichever one you use. This is the second exercise above, and it is in Go deeper as well because it is the only item in this lesson that stays useful after the lesson, given that the numbers change and the page does not move.

## Sources

1. Dropbox, ["Version history overview"](https://help.dropbox.com/delete-restore/version-history-overview), help.dropbox.com. **Fetched and read 18 September 2026.** Primary for a claim about that provider's own product. Supplies the documented retention windows with the plan names as Dropbox writes them: 30 days on Basic, Plus and Family; 180 days on Professional, Essentials, Business and Standard; 365 days on Business Plus, Advanced and Enterprise. Also supplies the statement that previous versions cannot be viewed or restored for files that have been permanently deleted, and that add-ons can extend the windows. **These figures are one provider's and are dated deliberately**, because this is exactly the kind of number that goes stale inside a year, and the lesson sends the reader to their own provider's page rather than relying on them.
2. Cybersecurity and Infrastructure Security Agency, *#StopRansomware Guide*, cisa.gov/stopransomware. **Fetched and read 18 September 2026.** Supplies the quoted sentence about maintaining backups offline because many ransomware variants attempt to find and subsequently delete or encrypt accessible backups, which is verbatim; the recommendation to enable version control to keep multiple variants of objects in storage, with the reason given as easier recovery from unintended or malicious actions; the recommendation to enable delete protection or object lock on storage often targeted in ransomware attacks; and both statements about testing, namely maintaining offline encrypted backups and regularly testing their availability and integrity in a disaster recovery scenario, and testing backup procedures on a regular basis. **What it does not supply is the claim that ransomware defeats version history by renaming files.** This course's research went looking for that claim in official guidance, did not find it there, found it only in material published by companies selling backup products, and withdrew it; standards 2.2 excludes vendor marketing for a product category. `research/SOURCES.md` records the withdrawal.
3. The sync mechanism in this lesson is **demonstrated rather than cited**, on the reasoning recorded in `research/SOURCES.md` and in the outline's decision 4. That a sync client cannot distinguish a person saving a file from a program damaging one is a description of what sync does rather than a finding about the world, and the reader verifies it on their own files in the exercise above. Nothing here rests on a source for it, which is the right treatment for a claim a learner can check in ten minutes.
4. The five-part decomposition of a backup system in "Why the restore is the only test" (schedule, selection, destination, format, credentials) is **this course's own teaching frame rather than a finding attributed to any source**. Neither CISA's guide nor any other source in `research/SOURCES.md` offers such a list. It is offered because it makes the argument for restoring visible, which is that a green indicator reports on one of the five at most. Marked here for the same reason lesson 11 marks its three-part account of a con.
5. The numeric backup mnemonic that usually appears in lessons like this one is **deliberately absent**. Its popular attribution runs through a book this course has not opened, and the property it encodes is taught here directly instead, on the reasoning in the outline's decision 4. A reader who has the property can derive the numerals; a reader who has only the numerals cannot say which of their copies counts.
