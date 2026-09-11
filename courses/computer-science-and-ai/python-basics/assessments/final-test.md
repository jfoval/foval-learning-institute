---
title: Final test
pass_mark: 0.7
minutes: 40
quiz:
  # lesson 4: a range with a step
  - q: >-
      A loop reads "for i in range(1, 20, 6):" and its body is "print(i, end=' ')". What does it
      print?
    options:
      - 1 7 13, since 19 is the last value before the stop and is left out
      - 1 7 13 19, because 19 is under the stop and the next, 25, is not
      - 0 6 12 18, since a range always starts counting from zero
      - 1 7 13 19 20, since the stop value is the last thing printed
    answer: 1
    explain: >-
      Lesson 4. Start at 1 and add 6 each time: 1, 7, 13, 19. The next would be 25, which is past
      the stop of 20, so the loop ends. That is B. Option A applies the "stop is excluded" rule to
      the wrong number: 20 is excluded, and 19 is not 20. Option C forgets that the first argument
      sets where counting starts. Option D prints the stop itself, which a range never does.
  # lesson 5: returning is not printing, in a file
  - q: >-
      A file holds "def double(n):" with the single body line "return n * 2", and then, on its
      own line, "double(21)". You run the file. What appears on screen?
    options:
      - 42, because return shows the value to whoever ran the program
      - An error, since a returned value has to be assigned to a name
      - Nothing, since the 42 came back to the program and nobody printed it
      - None, which a file prints for any value that is not stored
    answer: 2
    explain: >-
      Lesson 5, with lesson 1 underneath it. The call runs, the function hands 42 back to the
      program, and the program does nothing with it. A file shows you only what you print, so the
      screen stays empty: C. At the interpreter prompt the same line would show 42, which is the
      difference lesson 1 made a point of. Option A is the belief that return and print are the
      same act. Option B invents a rule; throwing a value away is legal. Option D would need a
      print, and would print None only if the function had no return.
  # lesson 2: trace a sequence of assignments
  - q: >-
      Four lines run in order: "a = 5", then "b = a", then "a = a + 2", then "b = b + a". What is
      b worth at the end?
    options:
      - 12, since b was 5 and a had become 7 when the last line ran
      - 14, since b tracks a, so both were 7 when they were added together
      - 10, because a + 2 makes a new value and the a that b uses is still 5
      - 7, because the last line copies the value of a into b again
    answer: 0
    explain: >-
      Lesson 2. Right side first, then bind. Line 2 binds b to the value 5. Line 3 works out 7 and
      rebinds a. Line 4 works out 5 + 7 and binds b to 12: A. Option B is the tethering
      misconception, that b = a keeps b following a. Option C has a still worth 5 on the last
      line, but line 3 rebound it. Option D reads the last line as a copy rather than an addition.
  # lesson 6: aliasing against a copy
  - q: >-
      A program runs "a = [1, 2]", then "b = a", then "c = a[:]", then "a.append(3)", and prints
      b and then c. What appears?
    options:
      - "[1, 2] and [1, 2], since both were taken from a before it changed"
      - "[1, 2, 3] and [1, 2, 3], since both names still refer back to a"
      - "[1, 2] and [1, 2, 3], because the slice is the one that stays linked"
      - "[1, 2, 3] and [1, 2], because b shares the list and c has its own"
    answer: 3
    explain: >-
      Lesson 6. b = a makes a second name for the one list, so the append through a is visible
      through b. a[:] makes a new list with the same contents at that moment, so c never sees the
      change: D. Option A is the belief that assignment copies. Option B treats the slice as a
      second alias, and slicing is exactly what it is not. Option C has the two the wrong way
      round.
  # lesson 3: which branch runs
  - q: >-
      n is 12. The chain is "if n % 3 == 0:" printing three, then "elif n % 4 == 0:" printing
      four, then "elif n % 3 == 0 and n % 4 == 0:" printing both, then an else printing neither.
      What is printed?
    options:
      - both, since Python picks the test that fits 12 most exactly
      - three, and nothing else, since the first true test ends the chain
      - three, four and both, one line each, since all three tests are true
      - three and then both, since the two tests that mention 3 both pass
    answer: 1
    explain: >-
      Lesson 3. Python tests in order and stops at the first true one. 12 % 3 is 0, so the first
      test is true, three is printed, and the rest of the chain is never looked at: B. The both
      branch can never run for any n, because anything that passes its test has already passed
      the first. That is the ordering rule, and the fix is to put the narrowest test first. Option
      A imagines Python choosing among the true tests. Options C and D run more than one branch,
      which an if, elif chain never does.
  # lesson 1: given a traceback, name the fault
  - q: >-
      A program prints a prompt, the user types something, and it stops. The last line of the
      traceback is "ValueError: invalid literal for int() with base 10: 'twelve'", and the line
      above it shows "total = total + int(line)" with the markers under int(line). What went
      wrong?
    options:
      - The user typed a word where the program needed a number
      - total was never given a starting value before the loop began
      - A bracket is missing on that line, so the file could not be parsed
      - int() cannot be used on text, so the line was wrong for any input
    answer: 0
    explain: >-
      Lesson 1's method, on lesson 3's error. Read the last line first: ValueError, and the
      message quotes the value it choked on, 'twelve'. int() takes text and turns it into a
      number, and this text was not a number: A. Option B would be a NameError, not a
      ValueError. Option C would be a SyntaxError, and there would be no traceback and no prompt,
      because nothing would have run. Option D is wrong about int(), which takes text all the
      time; the type was right and the value was not, which is what ValueError means.
  # lesson 2: converting what input() gives you
  - q: >-
      A program runs "n = input('How many? ')" and the user types 8. Which line then prints 16?
    options:
      - print(n * 2), since Python sees a number and doubles it
      - print(n + n), since adding a value to itself doubles it
      - print(int(n * 2)), converting the doubled value to a number
      - print(int(n) * 2), converting first and then doubling
    answer: 3
    explain: >-
      Lesson 2. input() hands back the string "8", so n has to be converted before any
      arithmetic: D. Options A and B both print 88, because * repeats a string and + joins two,
      and neither line crashes, which is what makes them dangerous. Option C also prints 88: n * 2
      is the string "88" and int() then faithfully turns that into the number 88. The conversion
      has to happen before the doubling, not after.
  # lesson 4: recall, the half-open range
  - q: >-
      How many values does range(6) produce, and what are the first and the last?
    options:
      - Six values, from 0 to 5
      - Six values, from 1 to 6
      - Seven values, from 0 to 6
      - Five values, from 1 to 5
    answer: 0
    explain: >-
      Lesson 4. A range starts at 0 unless told otherwise and never includes its stop, so range(6)
      is 0, 1, 2, 3, 4, 5: six values, A. That is the point of excluding the stop: range(n) has
      exactly n items, and it matches the positions of a list of n items, which start at 0.
      Option B starts at 1. Option C includes the stop. Option D does both and loses a value.
  # lesson 5: recall, parameter and argument
  - q: >-
      A function begins "def average(numbers):" and is later called as "average(readings)".
      Which is the parameter and which is the argument?
    options:
      - readings is the parameter and numbers is the argument
      - numbers is the parameter and readings is the argument
      - Both are parameters, since both are names for the same list
      - Both are arguments, since the list is what is being passed
    answer: 1
    explain: >-
      Lesson 5. The parameter is the name in the definition, which exists inside the function
      and gets its value from whoever calls. The argument is the value supplied at the call: B.
      Error messages use both words, which is why they are worth keeping straight; "takes 1
      positional argument but 2 were given" is counting arguments. Option A swaps them. Options
      C and D each use one word for both.
  # lesson 3: fix a mis-ordered chain
  - q: >-
      A tax chain reads "if income > 10000:" giving a rate of 0.2, then "elif income > 50000:"
      giving 0.4, then "elif income > 150000:" giving 0.45, then an else giving 0. Nobody is ever
      charged 0.4 or 0.45. Which change fixes it?
    options:
      - Reverse the tests, so 150000 is checked first and 10000 last
      - Change each elif to a plain if, so every true test gets its turn
      - Add "and income <= 50000" to the first test to close its band
      - Change every > to >=, since the boundaries are being missed
    answer: 0
    explain: >-
      Lesson 3. Every income over 50000 is also over 10000, so the first test catches it and the
      chain stops. Test the narrowest band first, and each income falls through to the widest
      test it passes: A. Option B is worse than it looks: with plain ifs the else belongs only to
      the last if, so anyone at or below 150000 ends up with the else's rate of 0, whatever the
      earlier ifs set. Option C fixes one band and not the other: 200000 still hits the 50000
      test before the 150000 one and gets 0.4. Option D changes who sits on a boundary and
      nothing about the order.
  # lesson 4: find the off-by-one
  - q: >-
      names is ["ann", "bo", "cy"] and the loop is "for i in range(1, len(names) + 1):" with the
      body "print(names[i])". What happens?
    options:
      - It prints all three names, since the + 1 reaches the last one
      - It prints bo and cy, then stops with an IndexError
      - It prints bo and cy, and stops cleanly at the end of the list
      - It stops with an IndexError before printing anything at all
    answer: 1
    explain: >-
      Lesson 4, with lesson 6's error. len(names) is 3, so the range is 1, 2, 3. Positions 1 and
      2 are bo and cy, and position 3 does not exist in a list of three, whose positions are 0, 1
      and 2. So two names print and then IndexError: B. The + 1 was meant to reach the last item
      and instead reaches past it, while the start of 1 skips the first. The fix is
      range(len(names)), and the better fix is "for name in names:", which cannot be off by one.
      Option A is what the author intended. Option C misses that position 3 is an error rather
      than the end. Option D forgets that the fault is only found on the third pass.
  # lesson 6: recall, dictionary order
  - q: >-
      A dictionary starts empty and is given the keys "pear", "apple" and "fig", in that order.
      What order does "for k in d:" produce?
    options:
      - apple, fig, pear, because a dictionary keeps its keys sorted
      - fig, apple, pear, newest first, since each key goes on the front
      - pear, apple, fig, since a dictionary keeps the order the keys went in
      - No fixed order, since lookup is by key rather than by position
    answer: 2
    explain: >-
      Lesson 6. A dictionary preserves insertion order, and the language has guaranteed that
      since version 3.7: C. It is not sorted, and if you want it sorted you sort it when you use
      it. Option A is the most common wrong expectation. Option B invents a stack. Option D was
      true of Python before 3.7, and you will still read it in older material, which is why the
      guarantee is worth knowing by version.
  # lesson 1: recall, how to read a traceback
  - q: >-
      Which line of a traceback do you read first, and why?
    options:
      - The top line, the header, because it says where the run began
      - The line with the file name, because the line number is the fix
      - The marked source line, since it shows the exact code that broke
      - The last line, because it names the error and what went wrong
    answer: 3
    explain: >-
      Lesson 1. The last line carries the error type and the message, and that is where the
      information is: D. Then the source line above it, with its markers, then the file and line
      number. The header at the top says nothing about your program at all, and it is the line
      beginners stare at hardest, which is why option A is the habit to break. Options B and C
      are both real parts of the reading, and both come after the last line.
  # lesson 5: what a name is worth after a call
  - q: >-
      "def tax(price):" has the body "price = price * 1.2" and then "return price". A program
      sets "price = 100", runs "final = tax(price)", and then prints price and final. What
      appears?
    options:
      - 100 and 120.0, since the function's price was its own name
      - 120.0 and 120.0, since the function changed price before returning it
      - 100 and 100, because the assignment inside the function was thrown away
      - 100 and None, because price was changed rather than returned
    answer: 0
    explain: >-
      Lesson 5. The price inside the function is a separate name that happens to be spelled the
      same. Rebinding it does nothing outside. The returned 120.0 is stored in final because the
      call was assigned: A. Option B expects the function to reach out and change the caller's
      name, which no assignment can do. Option C forgets that the value was returned and caught.
      Option D has the function with no return, and it has one. The .0 is not a slip: 100 times a
      float is a float.
  # lesson 2: recall, == against is
  - q: >-
      You want an if that runs when total holds 500. Which test do you write?
    options:
      - total is 500, since is checks whether the number itself matches
      - total = 500, since one equals sign is enough inside an if
      - total == 500, since == asks whether the two values are equal
      - 500 == total, since the value has to come before the name
    answer: 2
    explain: >-
      Lesson 2, and lesson 3 for the single sign. == compares values, which is the question you
      are asking: C. Option A asks whether two things are the same object, and whether that
      comes out True for a computed 500 depends on how the code was run, which is why Python
      prints a SyntaxWarning for this exact line. Option B is an assignment inside an if and
      stops the file parsing. Option D works, but not for the reason given: == does not care
      which side the name is on.
---

Fifteen items drawing on all six lessons, in no particular order, so that part of each item is
working out which lesson it belongs to. Forty minutes is realistic if you work each one rather than
guessing. **Have a pen.** Most of these ask you to predict what a few lines do, and the reliable
way to do that is the way lesson 2 taught: go line by line and write down what each name is worth.

Do not run the code before you answer. Reading code and predicting its behaviour is the skill this
course spent six lessons on, and it is the skill this test measures. After you have answered, by
all means paste anything that surprised you into [Python Tutor](https://pythontutor.com/) or type
it at the `>>>` prompt, and watch what it does.

The pass mark is 70%, which is eleven of fifteen. If you fall short, each explanation opens by
naming the lesson its item comes from. Go back to that lesson and do its exercise again rather
than retaking the test straight away.
