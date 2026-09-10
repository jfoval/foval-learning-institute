---
title: 'Compounding: interest working for you'
minutes: 40
objectives:
  - Explain why compound growth accelerates, using the fact that each year's gain is proportional to the current balance
  - Estimate doubling times with the rule of 72 and state where the rule's accuracy drifts
  - Convert a nominal return to an approximate real return, and judge a projected-return figure against the sourced historical record
quiz:
  - q: Keiko is 24 and could put away $150 a month, but money feels tight, so she plans to wait ten years and save $300 a month from 34 instead. Judged by this lesson's arithmetic, what's the problem?
    options:
      - Nothing at all. Doubling the monthly amount later more than makes up for that missing decade
      - Interest rates will probably be higher in ten years' time, so waiting a while longer could actually pay off
      - The early years are the expensive ones to skip, since money saved in her twenties compounds for longest
      - Waiting is fine, as long as she keeps the $150 a month sitting in her checking account meanwhile
    answer: 2
    explain: Each dollar's final value depends on how long it compounds, and Keiko's cheapest dollars are the ones with forty years of runway ahead of them. In the worked example, Ava's $24,000 saved from 25 to 35 grew past Ben's $72,000 saved from 35 to 65, because her money had the decades and his didn't. Option A is the linear intuition this lesson exists to correct; doubling the contribution doesn't double the runway. Option B confuses the rate environment with the mechanism; whatever rates do, the lost decade is lost. Option D is worse than waiting inside an investment account, since checking-account money compounds at roughly zero while inflation works on it.
  - q: Your friend has a loan at 36% and uses the rule of 72 to announce that the debt doubles in exactly two years. What's the accurate response?
    options:
      - Right direction, wrong precision. At 20% the rule runs fast, and the true doubling time is nearer 2.3 years
      - Exactly right. The rule of 72 gives you a precise answer at every single interest rate you are ever likely to meet
      - Wrong tool entirely. The rule of 72 only works for savings balances, and never for debts like this
      - He has misplaced a decimal point somewhere along the way; the rule actually gives him 7.2 years
    answer: 0
    explain: 72 divided by 36 is 2, so the rule says two years, and the exact answer is about 2.3 years. The rule is an approximation that is nearly perfect around 8% and drifts as you move away, understating doubling times at high rates. So the friend's number is slightly off and his alarm is entirely correct. Option B overtrusts the shortcut. Option C is false; the arithmetic doesn't care which direction the money flows, which is exactly why lesson 3's card balances double on the same schedule. Option D invents a calculation error that isn't there.
  - q: A retirement seminar projects your savings forward at "12% a year, the stock market's historical average." Based on this lesson, what's the best assessment?
    options:
      - Fair enough. US stocks have averaged about 10% over the long run, and rounding up is a reasonable planning cushion
      - Too low, if anything. Markets have averaged a good deal closer to 15% a year over the whole of the long run
      - It can't be right, because the market has never once returned anything like 12% in any single year
      - Overstated twice over. It uses the simple average rather than the compounded one, and it ignores inflation
    answer: 3
    explain: This is a real and widely criticised projection, not a made-up example. The 12% figure comes from averaging yearly US stock returns arithmetically; what an investor actually compounds at is the geometric average, about 10% a year in dollar terms over the past century, and about 7% a year after inflation. Compound $1 for 30 years at 12% and you get about $30; at 7% real, about $7.60. That's the factor-of-four gap in promised buying power. Option A treats rounding up as harmless when compounding magnifies it enormously. Option B is fiction. Option C misunderstands averages; plenty of single years beat 12%, which is irrelevant to what the long run compounds to.
  - q: Dev is choosing between two funds that track the same market index. One charges 0.05% a year, the other 1.05%. He says "one percent is pocket change." What does this lesson's arithmetic say?
    options:
      - He's basically right, because one percent of any single year's balance is a very small number indeed
      - The fee compounds like a return in reverse, and over 40 years it eats about a quarter of the balance
      - Fees only really start to matter during the years when the market falls rather than rises
      - The cheaper fund has to be the riskier one, since in investing the price always signals the quality
    answer: 1
    explain: Dev is right about one year and wrong about forty. A 1% fee doesn't subtract 1% once; it subtracts 1% of a growing balance every year, and every dollar it takes also stops compounding for you. Run the lesson's saver at 7% and at 6% and the final balances are about $525,000 versus $398,000. Same market, same contributions; the difference is the fee, compounded. Option C is false; the fee is charged on the balance in every year, up or down. Option D has index funds exactly backwards, since funds tracking the same index deliver the same market return minus their fee, which is why the fee is the number to compare. Lesson 5 takes this up properly.
  - q: Milo has $12,000 saved for a house deposit he plans to use in about 18 months. Having learned that cash loses to inflation, he moves all of it into a stock index fund. What did he get wrong?
    options:
      - Nothing at all. Eighteen months is plenty of time for stocks to reliably beat out an ordinary savings account
      - Nothing much, provided that he checks the balance every day and sells the moment it starts dropping
      - The timescales. Stocks have fallen 20 to 30% in a single year, and eighteen months gives no time to recover
      - It depends entirely on which particular fund he happened to pick for himself right at the outset
    answer: 2
    explain: Inflation and market swings are both real risks; the question is which one operates on Milo's timescale. Over 18 months, 3% inflation costs him about 4 to 5% of buying power, annoying but survivable. A bad stretch for stocks can take 30% and has, within living memory, taken a decade to recover in real terms. The standard guidance to keep near-term money in safe accounts isn't timidity; it's matching the risk you accept to the time you have to ride it out. Option B is a plan for selling at the bottom. Option D misses that the problem is the asset class and the horizon, not the fund choice.
---

In lesson 3 you watched 22% interest stretch a $5,000 card balance into 19 years of payments. That was compounding with the sign against you. This lesson is the identical mechanism running in your favour, on the savings line your lesson 2 budget set up, and the single most useful fact about it is one most people refuse to believe until they see it computed: over a working lifetime, the compounding does more of the work than you do.

You met a version of this in lesson 1's three-question check, and if you hesitated on the question about $100 at 2% for five years, you were in the majority worldwide ([Lusardi, 2019](https://sjes.springeropen.com/articles/10.1186/s41937-019-0027-5)).[1] By the end of this lesson the mechanism should feel obvious, which is a real advantage, because researchers find that people systematically underestimate exponential growth, and the ones who underestimate it most save less and borrow more expensively ([Stango and Zinman, 2009](https://doi.org/10.1111/j.1540-6261.2009.01518.x)).[2]

## The mechanism: growth that feeds itself

Put $1,000 in an account growing at 7% a year. The first year it earns 7% of $1,000, which is $70. The second year it earns 7% of $1,070, which is $74.90. That extra $4.90 exists because last year's interest is now earning interest of its own.

Written as a rule: each year's gain is proportional to the current balance, not the original deposit. And since every gain joins the balance, the thing the growth is computed on keeps getting bigger. Growth produces balance, balance produces growth. That loop is the whole mechanism, and it's why the curve bends upward instead of climbing in a straight line.

Watch it run:

| Year | Balance |
| --- | --- |
| 0 | $1,000 |
| 1 | $1,070 |
| 10 | $1,967 |
| 20 | $3,870 |
| 30 | $7,612 |

Twenty years in, the account has roughly quadrupled. Thirty years in, it's added another $3,700 without a single new deposit.

:::predict Same account, same 7%, ten more years. What's the balance at year 40?
About $14,974. The final decade added $7,362, which is more than the first three decades combined ($6,612). And in year 40 alone the account grew by about $980, fourteen times the $70 it earned in year one, at the same 7%, with no new money. If you guessed something near $10,000 or $11,000, you just met your own linear intuition; nearly everyone's works that way, and the studies above show it has a price.
:::

Notice what this means for the person doing the saving. The early years feel pointless, because the balance is small and 7% of a small number is a small number. The late years feel like magic, because 7% of a large number is a large number. Neither feeling is wrong; both are the same loop observed at different points. The practical conclusion is uncomfortable and true: the years that look least worth saving in are the ones your future balance depends on most, because only the early dollars get the full runway.

:::checkpoint Your account holds $20,000 and grows 7% this year. Roughly what does it earn? And what will the same account earn in the year its balance has reached $40,000?
About $1,400 now, and about $2,800 then. When the balance doubles, the yearly growth doubles with it, no extra effort required. If you can answer this pair of questions without thinking hard, you understand compounding better than most adults; it really is just "the gain is proportional to what's there".
:::

## Where the 7% comes from, and what it isn't

Every figure above used 7%, so you're owed an account of that number before we build anything else on it.

It's a historical average, not a promise. Over 1928 to 2025, a broad basket of large US stocks returned about 10% a year compounded, in plain dollar terms; subtract the century's roughly 3% average inflation and you get about 7% a year in purchasing power ([the NYU Stern dataset maintained by Aswath Damodaran](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html) is the standard free reference).[3] Throughout this lesson, 7% means that inflation-adjusted figure, so every dollar amount you'll see is in today's buying power. Keep that convention in mind; you'll see below why it matters so much.

Now the hedges, which are not fine print. That average contains single years from roughly minus 37% to plus 50%. It contains a full decade, 2000 through 2009, in which US stocks went backwards after inflation. It describes one unusually successful country's market, and the future is under no obligation to repeat it; plenty of serious economists expect the next few decades to compound slower. A projection is an illustration of a mechanism, never a guarantee.

It cuts the other way too. You will meet projections built on more than history supports. The most famous is Dave Ramsey's long-standing use of 12%, which financial planners and researchers have criticised on two grounds: it's the simple average of yearly returns rather than the compounded rate an investor actually experiences (closer to 10%), and it's quoted before inflation ([one representative critique](https://www.wealthmanagement.com/equities/adjusted-for-risk-is-dave-ramsey-s-12-expected-return-and-8-withdrawal-rate-reasonable-)).[4] The gap sounds pedantic and isn't: compounded over 30 years, 12% turns a dollar into about $30, while the honest after-inflation 7% turns it into about $7.60. A plan built on the first number is promising four times the buying power the record supports. When you see any projected return, ask the two questions you now know to ask: compounded or simple average, and before or after inflation?

## The rule of 72

For quick mental arithmetic, divide 72 by the growth rate to estimate how many years a sum takes to double. At 7%, about ten years. At 3%, about 24. At 2%, about 36.

It's an approximation, and it's worth knowing its shape: the rule is almost exact near 8%, and it drifts as you move away. At 2% the true doubling time is 35 years, a year less than the rule says. At 24%, the rate on the card debt from lesson 3, the rule says three years and the truth is about 3.2. Close enough to steer by, not exact enough to settle a bet.

What makes it worth memorising is that doubling is how compounding is naturally measured. Forty years at 7% is four doublings: $1,000 becomes $2,000, $4,000, $8,000, $16,000. Which is (allowing for the rule's small drift) the $14,974 from the table, reached by counting on your fingers.

:::checkpoint Lesson 3's average card rate was about 22%. Using the rule, roughly how fast does an unpaid card balance double?
72 divided by 22 is about three and a quarter years. Same rule, same arithmetic, working against you. This is why lesson 3 called revolving card debt an emergency: it doubles on a schedule that savings can't come close to matching.
:::

## The worked example: Ava and Ben

Here's the lesson's centrepiece, computed fresh so you can check every figure. The assumptions, stated plainly: each person saves $200 a month, growth is 7% a year compounded monthly (our inflation-adjusted historical average), and we ignore taxes and fees. Real accounts have both; lesson 5 deals with fees, and the numbers here are for the mechanism.

**Ava starts at 25** and saves $200 a month until 65. That's 40 years and $96,000 of her own money. At 65 she has about **$525,000**. Her contributions explain less than a fifth of it; the other $429,000 is the loop from the first section, running for four decades.

**Ben starts at 35** and saves the same $200 a month until 65. Thirty years, $72,000 contributed. At 65 he has about **$244,000**.

Ben put in three quarters of what Ava did and finished with less than half as much. The decade he skipped was only $24,000 of contributions, but it was the decade whose dollars had the longest runway, and by 65 the missing decade has compounded into a $281,000 gap.

Now the wrinkle, and it's the result this lesson most wants you to carry out the door.

:::predict Suppose Ava saves her $200 a month only from 25 to 35, then stops completely and never adds another dollar, just leaving the balance invested until 65. She contributes $24,000 in total. Ben contributes $72,000, from 35 to 65. Who has more at 65?
Ava, and it isn't close to a tie: about $281,000 against Ben's $244,000. Her ten early years of saving, $24,000, beat his thirty later years, $72,000. At 35 she had about $34,600; that sum then doubled roughly every decade for three decades while Ben was still writing cheques. Time in the market did what triple the contributions could not.
:::

Look at the two full careers side by side. The gap between the curves is not a difference in effort or income; it's ten years of runway.

<svg viewBox="0 0 584 400" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:584px;display:block;margin:1.5em auto;font-family:system-ui,sans-serif" role="img" aria-labelledby="comp-title comp-desc">
  <title id="comp-title">Saving $200 a month from age 25 versus age 35</title>
  <desc id="comp-desc">A line chart of account balance against age. Starting at 25 and saving to 65 reaches about 525,000 dollars. Starting at 35 and saving the same amount to 65 reaches about 244,000 dollars. Both curves bend upward, and the gap between them widens every year.</desc>
  <text x="20" y="24" font-size="17" font-weight="700" fill="var(--text, #1a1a1a)">$200 a month at 7%: start at 25 versus 35</text>
  <line x1="60" y1="50" x2="60" y2="290" stroke="var(--line, #d9d9d9)" stroke-width="1"/>
  <line x1="60" y1="290" x2="564" y2="290" stroke="var(--line, #d9d9d9)" stroke-width="1"/>
  <line x1="60" y1="181" x2="564" y2="181" stroke="var(--line, #d9d9d9)" stroke-width="1" stroke-dasharray="3 4"/>
  <line x1="60" y1="72" x2="564" y2="72" stroke="var(--line, #d9d9d9)" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="54" y="77" font-size="15" text-anchor="end" fill="var(--text-2, #4a5260)">$500k</text>
  <text x="54" y="186" font-size="15" text-anchor="end" fill="var(--text-2, #4a5260)">$250k</text>
  <text x="54" y="295" font-size="15" text-anchor="end" fill="var(--text-2, #4a5260)">$0</text>
  <text x="60" y="312" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">25</text>
  <text x="186" y="312" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">35</text>
  <text x="312" y="312" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">45</text>
  <text x="438" y="312" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">55</text>
  <text x="560" y="312" font-size="15" text-anchor="end" fill="var(--text-2, #4a5260)">65</text>
  <polyline fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2.5" points="60,290 73,289 85,288 98,287 110,285 123,284 136,282 148,281 161,279 173,277 186,275 199,273 211,270 224,268 236,265 249,262 262,259 274,256 287,252 299,249 312,245 325,240 337,235 350,230 362,225 375,219 388,213 400,206 413,199 425,192 438,184 451,175 463,165 476,155 488,144 501,133 514,120 526,107 539,93 551,77 564,61"/>
  <polyline fill="none" stroke="var(--oxblood, #8b1e2d)" stroke-width="2.5" points="186,290 199,289 211,288 224,287 236,285 249,284 262,282 274,281 287,279 299,277 312,275 325,273 337,270 350,268 362,265 375,262 388,259 400,256 413,252 425,249 438,245 451,240 463,235 476,230 488,225 501,219 514,213 526,206 539,199 551,192 564,184"/>
  <text x="330" y="105" font-size="15" font-weight="700" fill="var(--navy, #0f2a4a)">Starts at 25:</text>
  <text x="330" y="125" font-size="15" fill="var(--navy, #0f2a4a)">$525,000 on $96,000 saved</text>
  <text x="300" y="230" font-size="15" font-weight="700" fill="var(--oxblood, #8b1e2d)">Starts at 35:</text>
  <text x="300" y="250" font-size="15" fill="var(--oxblood, #8b1e2d)">$244,000 on $72,000 saved</text>
  <text x="20" y="348" font-size="15" fill="var(--text-2, #4a5260)">Computed month by month: $200 deposited monthly, growth at 7% a year</text>
  <text x="20" y="368" font-size="15" fill="var(--text-2, #4a5260)">(the 1928-2025 US stock average after inflation) compounded monthly,</text>
  <text x="20" y="388" font-size="15" fill="var(--text-2, #4a5260)">no taxes or fees. An illustration of the mechanism, not a forecast.</text>
</svg>

Two honest cautions about this picture. The smooth curves are averages; a real account would wobble all over them, sometimes below for years at a stretch. And if you're 45 or 55 reading this, the lesson is not "you missed it". The mechanism has no opinion about your age; it only cares about runway, and the longest runway you will ever have again starts today. A 50-year-old's dollars still get 15 years of doubling-and-a-half by 65, and more after that.

## Real versus nominal: keeping inflation in the arithmetic

Everything above was in today's buying power because we used an inflation-adjusted return. Most numbers you meet in the wild aren't adjusted, so you need the conversion in your head.

A **nominal** return is the number on the statement: your balance grew 5%. A **real** return is what happened to what your money can buy. The quick conversion is a subtraction: real return is roughly the nominal return minus inflation. (The exact version divides rather than subtracts, and at everyday rates the difference is a rounding error: a 1% account under 3% inflation is losing 1.94% a year of buying power, which everyone sensibly calls "about 2%".)

This is lesson 1's second Big Three question wearing work clothes. The account paying 1% under 2% inflation grows on paper and shrinks in the shops. And the effect compounds exactly like interest does, because it is the same arithmetic with the sign flipped: US consumer prices have averaged about 3% growth a year over the past century, with a 9% spike as recently as 2022 ([BLS Consumer Price Index](https://www.bls.gov/cpi/)),[5] and by the rule of 72, 3% inflation halves your money's buying power in about 24 years. A drawer full of cash loses to it with certainty. That's the honest case for investing long-term money somewhere with a positive expected real return, and it's why this lesson quoted every projection after inflation: a "$525,000" that meant 2065 dollars would be quietly promising you about half of what it seems to.

## Matching money to timescales

So should everything go where it might earn 7% real? No, and the reason is in the hedges above: that average contains 30% down years and a lost decade. The standard guidance from planners and regulators alike keys the decision to when you'll need the money, and the logic is worth spelling out rather than just the rule.

Money you'll need soon (a deposit next year, the emergency cushion from lesson 2) can't afford a 30% year, because there's no time for the average to reassert itself; for that money, inflation's slow nibble is the smaller risk, and a savings account's dependability is what you're buying. Money you won't touch for decades faces the opposite ranking: over 30 years, the certain loss to inflation in cash is enormous, while the market's wobbles have historically had time to wash out, though "historically" is doing real work in that sentence and no one can promise it. In between, over a few years, is genuinely awkward territory where reasonable people weigh the risks differently. This course teaches the mechanism and the trade-off; how you split your own money depends on your dates, your nerves, and your fallbacks, and (as lesson 1's callout said) that decision stays yours.

## Costs compound too

One more thing compounds quietly alongside returns: what you pay to invest. Suppose Ava's fund charges 1% of her balance every year. Her 7% becomes 6%, which sounds like losing a droplet. Run the same 40 years at 6% and her $525,000 becomes about $398,000. The 1% fee consumed roughly $127,000, about a quarter of her final wealth, because every dollar of fee also surrendered its own decades of compounding.

Read that once more: a fee of one percent, compounded over a career, costs a quarter of the outcome. That single piece of arithmetic is the spine of lesson 5, which is about where to actually put long-term savings and why costs are the rare thing an investor fully controls.

## What people get wrong

**"Small amounts aren't worth saving."** This is linear intuition talking, and the research says it's the default human setting: most people, asked to project growth, drastically underestimate it, and the bias predicts saving less ([Stango and Zinman, 2009](https://doi.org/10.1111/j.1540-6261.2009.01518.x)).[2] Ava's $200 a month, the price of a modest car payment, became half a million in today's buying power. The amounts aren't small; they're early.

**"My account grew, so I'm richer."** Only the real return says so. A 4% return in a 6% inflation year is a 2% loss of buying power wearing a gain's clothes. Check every return you're quoted against inflation before celebrating; it's a two-second subtraction.

**"I've missed the window, so why start."** The mechanism rewards the longest runway, but it rewards every runway. The rule of 72 at 7% doubles money in a decade, and most 50-year-olds have two or three decades of investing ahead of them, counting retirement itself. The worked examples compare 25 with 35 because the contrast teaches; they are not a deadline.

**"The projection said I'd have $525,000, so I will."** A projection at a historical average is a mechanism demonstration. The actual path will be lumpier, and may be better or worse; anyone who states a future return without hedging it, whether 7% or 12%, is claiming knowledge nobody has.

## Practice

:::exercise Do it now: your own runway
1. Open the SEC's [compound interest calculator at Investor.gov](https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator). It's the regulator's own tool: free, no ads, no product to sell you.
2. Enter your real numbers: what your lesson 2 budget actually sends to savings each month, an initial amount if you have one, 7% as the rate, and the years until you turn 65. Write down the result.
3. Now run it twice more: once as if you'd started five years ago, once as if you start five years from now. Write all three numbers side by side. The gaps between them are the price of a five-year delay, in your own dollars rather than Ava's.
4. Then charge yourself a fee: drop the rate to 6% on your main scenario and note what one percent costs you by the end.
5. Last, the reality check: the results are in today's buying power only because 7% is an after-inflation figure. If you rerun with a nominal rate like 10%, remember the answer is in inflated future dollars and mentally shrink it accordingly.

If you want the algebra behind the calculator, the free, openly licensed OpenStax *Principles of Finance* covers the time value of money properly in [chapters 7 and 8](https://openstax.org/details/books/principles-finance).

Before the quiz, close the page and answer from memory: Why does compound growth accelerate? What are the rule of 72's numbers for 7% and 3%, and where does the rule drift? What two questions should you ask about any projected return? Why did ten early years beat thirty later ones? Then check what you missed.
:::

## Connections

This lesson closes a loop the course has been building. Lesson 1's Big Three asked about compounding and inflation; you can now do both cold. Lesson 2 built the savings line and automated it; this lesson is what that line grows into. Lesson 3 showed the identical mechanism working against you at 22%, and the rule of 72 explains its urgency: card debt doubles in about three years while diversified savings historically doubled in about ten, which is why the debt usually deserves the first dollars. Lesson 5 answers the question this lesson deliberately left open: where long-term money should actually sit, why costs (which compound, as you just computed) dominate that choice, and what diversification, the third Big Three question, has to do with it.

## Go deeper

- OpenStax, [*Principles of Finance*, chapters 7 to 9](https://openstax.org/details/books/principles-finance): free and openly licensed; the full time-value-of-money mathematics behind every number in this lesson, with worked problems.
- [Investor.gov's introduction to saving and compound interest](https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest): the SEC's plain-language treatment, alongside the calculator you used.
- Kapoor, Dlabay and Hughes, *Personal Finance* (McGraw Hill), chapters 1 and 18: the standard college-textbook treatment of the time value of money, and the chapter on why retirement saving is a start-early problem.
- [Aswath Damodaran's historical returns dataset](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html) (NYU Stern): the free spreadsheet behind the 10% nominal, 7% real figures; worth ten minutes of scrolling to see how violent the yearly numbers inside a calm average are.

## Sources

1. Lusardi, A., ["Financial literacy and the need for financial education: evidence and implications"](https://sjes.springeropen.com/articles/10.1186/s41937-019-0027-5), *Swiss Journal of Economics and Statistics* 155:1 (2019). The Big Three questions, including the compound-interest and inflation items; about 30% of adults worldwide answer all three correctly.
2. Stango, V. and Zinman, J., ["Exponential Growth Bias and Household Finance"](https://doi.org/10.1111/j.1540-6261.2009.01518.x), *Journal of Finance* 64(6), 2807-2849 (2009). People systematically underestimate exponential growth; the bias is associated with saving less and borrowing at higher cost.
3. Damodaran, A., [Historical returns on stocks, bonds and bills: 1928 to the present](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html) (NYU Stern). US large-cap stocks compounded at about 10% a year nominal over 1928-2025, about 7% after inflation; individual years range from about minus 37% to plus 50%, and 2000-2009 was negative in real terms.
4. WealthManagement.com, ["Adjusted for Risk: Is Dave Ramsey's 12% Expected Return and 8% Withdrawal Rate Reasonable?"](https://www.wealthmanagement.com/equities/adjusted-for-risk-is-dave-ramsey-s-12-expected-return-and-8-withdrawal-rate-reasonable-). Representative of the planner and researcher criticism: 12% is the arithmetic average of nominal yearly returns, above the compounded rate an investor experiences and quoted before inflation.
5. US Bureau of Labor Statistics, [Consumer Price Index](https://www.bls.gov/cpi/). US consumer prices have averaged about 3% annual growth over the past century; CPI inflation peaked above 9% in mid-2022, the fastest in four decades.
6. US Securities and Exchange Commission, [Investor.gov compound interest calculator](https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator). The regulator's free calculator used in this lesson's exercise.

Every table value, the Ava and Ben figures, the fee comparison, and the chart were computed for this lesson month by month at the stated assumptions ($200 monthly deposits, 7% or 6% annual growth compounded monthly, no taxes or fees): 40 years gives $524,963 on $96,000 contributed; 30 years gives $243,994 on $72,000; ten years then untouched growth to year 40 gives $280,968 on $24,000; exact doubling times are ln 2 / ln(1 + r).
