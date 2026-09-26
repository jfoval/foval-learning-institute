---
title: "Hybrids and electric cars: how they work"
minutes: 90
objectives:
  - >-
    Explain how a battery-electric car, a full hybrid, a mild hybrid and a plug-in hybrid each
    drive the wheels and charge the traction battery, and sort a described car into one of the four
  - >-
    Explain what the traction battery, power electronics controller, motor, onboard charger and
    DC/DC converter each do, and why regenerative braking recovers energy that hard braking wastes
  - >-
    Explain why every electric car and hybrid still has a 12 V battery, how it's recharged, and
    why that battery can leave a car with a full traction battery unable to start
  - >-
    Compare the US charging levels as AFDC gives them, state what this course did not read about
    charging in the UK, and identify what an owner of each kind of car still checks and what is
    never the owner's job
quiz:
  - q: >-
      A friend's hatchback has no charging socket anywhere on it. Its handbook says the car can
      creep through a car park on the electric motor alone, with the engine off, at low speed.
      On AFDC's definitions, which kind of car is it?
    options:
      - A full hybrid, charged by braking and by the engine
      - A mild hybrid, since it has no socket to plug into
      - A plug-in hybrid whose charging socket is hidden away
      - A battery-electric car that is using a range extender
    answer: 0
    explain: >-
      AFDC says a hybrid "cannot be plugged in" and is charged "through regenerative braking and
      by the internal combustion engine", and that full hybrids can power the car "for short
      distances and at low speeds". A mild hybrid is ruled out by the car park: AFDC says mild
      systems "cannot power the vehicle using electricity alone". A plug-in hybrid and a
      battery-electric car both need a socket, and this car has none.
  - q: >-
      An electric car has sat unused at an airport car park for three weeks. The traction battery
      still shows plenty of charge, but nothing happens when the owner presses the start button
      and the screens stay dark. On the sources in this lesson, which part is most likely flat?
    options:
      - The traction battery, since the gauge can't be trusted
      - The onboard charger, which starts the car from the socket
      - The 12 V battery, which the DC/DC converter recharges
      - The DC/DC converter, which stores charge for starting
    answer: 2
    explain: >-
      NHTSA says the high-voltage battery is "very different from a vehicle's 12-volt battery",
      and the AA's 2021 figures put the 12 V battery among the top two causes of EV breakdowns. The 12 V battery
      runs the lights and instruments, and in a hybrid AFDC says it starts the car "before the
      traction battery is engaged". The DC/DC converter recharges it, but it converts power
      rather than storing it. The onboard charger turns AC from the socket into DC for the
      traction battery; it doesn't start the car. Nothing here suggests the gauge is wrong.
  - q: >-
      Two people drive the same electric car down the same long hill. One eases off early and
      slows gently all the way down; the other keeps up speed and brakes hard at the bottom. On
      fueleconomy.gov's account, what follows?
    options:
      - They recover the same energy, since both of them slow from the same speed in the end
      - The late braker recovers more, since harder braking turns the motor more quickly
      - Neither recovers any, since regeneration only works when the car is on level road
      - The gentle driver recovers more, since hard braking brings in the friction brakes
    answer: 3
    explain: >-
      fueleconomy.gov says regeneration "uses the forward motion of the wheels to turn the motor",
      and that "Hard braking causes the vehicle to use its conventional friction brakes, which do
      not recover energy." So the hard stop at the bottom leaves more of the slowing to the
      friction brakes, which recover nothing. Slowing from the same speed doesn't make the two equal, because
      what matters is which brakes do the slowing. Nothing in the source limits regeneration to
      level road.
  - q: >-
      A neighbour has just bought a full hybrid. He says he read that electric cars need less
      servicing, so he'll stretch the engine's service intervals. On AFDC's maintenance page,
      what's the answer?
    options:
      - He's right, because the hybrid battery takes over the engine's work
      - A hybrid needs the same general maintenance as a conventional car
      - He's right about oil, but the brakes will need more frequent checks
      - Only the traction battery needs servicing, by a trained technician
    answer: 1
    explain: >-
      AFDC says "PHEVs and HEVs require the same general maintenance as conventional vehicles";
      it's only all-electric cars that it says need less, because they have "fewer moving parts
      and fluids to change". A hybrid still has an engine, so the engine's schedule in the
      handbook still applies. AFDC says brake wear is reduced by regeneration, not increased.
      And the traction battery is the part AFDC says needs "little to no regular maintenance".
  - q: >-
      An electric car's range display reads 300 km on a mild autumn day. Using the 2019 AAA test
      figure that fueleconomy.gov reports, how low could the range fall in the test's cold
      conditions?
    options:
      - To about 177 km, because 41% of 300 km comes off
      - To about 123 km, because 41% of 300 km is left over
      - To about 200 km, because two-thirds of it is still there
      - To about 259 km, by taking 41 km off the 300 km shown
    answer: 0
    explain: >-
      fueleconomy.gov reports that in the test "range can drop by 41%", so 41% comes off: 300 km
      times 0.59 is 177 km, by this course's arithmetic, and it's a test figure, not a promise
      for any one car. 123 km is the 41% that was lost, not what's left. Two-thirds is the share
      of the extra energy the test found went on heating the cabin, not the share of range that
      survives. And 41% is a percentage of the range, not 41 km.
---

An electric car or a hybrid hides almost everything that makes it different. You get in, press a
button, and it moves. So owners pick up their picture of it from
advertising and from each other, and the picture is often wrong in ways that cost money or leave
them stranded. The AA, a motoring organisation that sells breakdown cover and repairs, looked at
its own electric-car call-outs in 2021 and [reported](https://www.theaa.com/about-us/newsroom/aa-gives-power-to-electric-drivers) that the two commonest causes were the same as for
any car: "the low-voltage 12v battery which can be found in all cars, and tyre faults due to
potholes, punctures and wear."[12] Running out of charge wasn't near the top. This lesson teaches the four kinds of electrified car,
what each part inside one does, why the small battery still matters, and what an owner still
checks.

:::callout Before the car lets you down
This course is education, not mechanical training, and not legal advice about your own car. If your car fails on a motorway or other fast road in Great Britain, leave at the next exit or services if you can; if you can't, go left into an emergency area or onto the hard shoulder, switch on your hazard lights, get everyone out on the side away from traffic and behind the barrier if there is one, and don't go back to the car. If you're stuck in a live lane or can't get out safely, stay in with seat belts and hazard lights on and call 999 and ask for the police. In the US, pull as far onto the right shoulder as you can, switch on your hazard lights and stay in with your seat belt on, unless the shoulder is too narrow or there's a guardrail to wait behind, in which case get out on the side away from traffic; call 911 in an emergency. Never put any part of your body under a car held up only by a jack, and never touch the orange high-voltage cables on a hybrid or electric car. The law on a car's condition differs between Great Britain, Northern Ireland and each US state, and it changes.
:::

The cable clause is the one this lesson leans on. Everything below is about how these cars work,
and nothing in it asks you to touch, open or unplug any part of the high-voltage system. Lesson 14,
"High voltage: hybrid and EV safety, charging at home, fire and flood", teaches the safety side in
full. This lesson uses UK words with the US word once (bonnet, or hood; tyre, or tire; petrol, or
gasoline), and miles, because the US government sources it relies on give their figures in miles.

## Four kinds of car with a motor

Most of what this lesson says about how the cars work comes from the US Department of Energy's
Alternative Fuels Data Center (AFDC), which publishes a plain "How do ... work?" page for each
kind of car: [all-electric](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work),
[hybrid](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work) and
[plug-in hybrid](https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work).[1][2][3] It sorts electrified cars into kinds by two questions: what turns the wheels,
and where the big battery gets its charge.

A **battery-electric car** (a BEV, or just an EV) has, in AFDC's words, "an electric motor instead
of an internal combustion engine. The vehicle uses a large traction battery pack to power the
electric motor and must be plugged in to a wall outlet or charging equipment, also called electric
vehicle supply equipment (EVSE)."[1] It has no fuel tank, fuel pump or fuel line. The "traction"
battery is the big one that drives the car, and the word is worth learning, because it is how
handbooks and breakdown services tell it apart from the small one.

A **hybrid** (HEV) has an engine and a motor, and no socket. AFDC is blunt about it: "A hybrid
electric vehicle cannot be plugged in to charge the battery. Instead, the battery is charged through
regenerative braking and by the internal combustion engine."[2] Regenerative braking gets its own
section below. AFDC then splits hybrids in two:

- A **full hybrid** has "larger batteries and more powerful electric motors, which can power the
  vehicle for short distances and at low speeds."[2]
- A **mild hybrid** uses a battery and motor to help the engine and to allow stop-start, but "Mild
  hybrid systems cannot power the vehicle using electricity alone."[2] DVSA's MOT manual for Great
  Britain adds that "Many mild hybrids only use 48V systems"[15], far below the figure Nissan gives for its
  electric car in the next section.

A **plug-in hybrid** (PHEV) has an engine, a motor, a bigger battery and a socket. AFDC: "The
vehicle typically runs on electric power until the battery is nearly depleted, and then the car
automatically switches over to use the ICE" (the internal combustion engine), with an electric range
of "about 15 to 60-plus miles in current models."[3]

AFDC also describes two ways of joining an engine and a motor to the wheels. In a parallel hybrid,
"the most common HEV design", both are connected to the wheels mechanically. "Series hybrids, which
use only the electric motor to drive the wheels, are more commonly found in plug-in hybrid electric
vehicles."[2] A series plug-in's engine never turns the wheels itself, and AFDC says such cars "are
often referred to as extended-range electric vehicles."[3]

| Kind | What turns the wheels | What charges the traction battery | Socket? |
|---|---|---|---|
| Battery-electric | The motor only | The plug; braking recovers some in cars with motor generators | Yes |
| Full hybrid | Engine and motor; the motor alone for short, slow distances | Braking and the engine | No |
| Mild hybrid | The engine, with the motor helping; never electricity alone | Braking and the engine (AFDC gives one answer for hybrids) | No |
| Plug-in hybrid | Electricity until the battery is nearly used up, then the engine; in a series design, the motor only | The plug; see the worked example below for what happens without it | Yes |

A word you will meet elsewhere, "micro hybrid", isn't used in this course. AFDC treats it as another
name for a mild hybrid, and this course did not read a maker's or a trade body's definition that
would settle what other sources mean by it. If your handbook uses the word, its own description of
what the motor can do is what counts.

:::predict A mild hybrid is crawling in a queue of traffic at walking pace, and the queue stops and starts every few seconds. Before reading on: can its motor move the car along the queue with the engine off?

No. AFDC is explicit that "Mild hybrid systems cannot power the vehicle using electricity alone." The motor helps the engine and makes stop-start possible, so the engine may switch off while the car is stationary, but when the car moves, the engine is driving it. A full hybrid is the one that can creep along "for short distances and at low speeds" on the motor.
:::

### How much voltage, and why the colour matters

The traction battery works at a far higher voltage than the 12 V battery. Nissan, in the 2024
LEAF handbook sold in the US, says its system "uses high voltage up to approximately DC 400 volt".[13]
That is Nissan's figure for its car. AFDC says electrified cars' systems typically range from
400 to 1,000 volts, which doesn't fit the 48 V mild hybrids just described, so use your own
handbook's figure for your own car.[5][15] For comparison, the body that sets the US standards for
technician training programmes, the ASE Education Foundation, defines high voltage as "Automotive
system voltages greater than 30 VAC or 60 VDC."[16]

This is why the cables are coloured. Nissan: "High-voltage cables are colored orange. The vehicle
high voltage system has no user serviceable parts."[13] Ford, in the 2024 Maverick handbook (US),
says the high-voltage wiring is "labeled as such or covered with a solid orange convolute, or orange
striped tape, or both."[14] DVSA's MOT manual carries two caveats that this course keeps every time
it mentions the colour: "some imported vehicles may have high voltage wiring insulation of a
different colour", and mild hybrids' 48 V systems "may use blue coloured insulation".[15] So orange
means high voltage, but a cable that is not orange isn't proof of anything. The handbook's own labels
and pictures are what tell you.

## What's inside an electric drive

AFDC lists the parts of a battery-electric car in plain words.[1] Five matter to an owner, because
each one explains something you'll see on the dashboard or in the handbook.

- **Traction battery pack**: stores the energy that drives the car.
- **Power electronics controller**: "manages the flow of electrical energy delivered by the traction
  battery, controlling the speed of the electric traction motor and the torque it produces."[1] You
  may meet the word "inverter" for part of this in other books; this course uses AFDC's name, because
  it did not read a source that explains the inverter for owners.
- **Electric traction motor**: turns the wheels. AFDC adds: "Some vehicles use motor generators that
  perform both the drive and regeneration functions."[1]
- **Onboard charger**: "Takes the incoming AC electricity supplied via the charge port and converts
  it to DC power for charging the traction battery."[1]
- **DC/DC converter**: "converts higher-voltage DC power from the traction battery pack to the
  lower-voltage DC power needed to run vehicle accessories and recharge the auxiliary battery."[1]
  The auxiliary battery is the 12 V one.

The drawing below puts the five in order, with the charge port and the 12 V side added. A hybrid
has an engine as well, which the drawing leaves out.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 480" width="100%" style="max-width:420px;display:block;margin:1.5em auto;font-family:system-ui,sans-serif" role="img" aria-label="Schematic of a battery-electric car's parts from AFDC's list. The charge port feeds the onboard charger, which turns AC into DC for the traction battery pack. From the traction battery, one path goes through the power electronics controller to the traction motor and then the wheels. The other path goes through the DC/DC converter, which steps the voltage down, to the 12 V battery and then to the lights, screens and accessories. A dashed line runs from the motor back up to the traction battery, showing energy returning during regenerative braking.">
  <title>Schematic: the parts of a battery-electric car, from AFDC's list</title>
  <desc>Boxes and arrows. Top row: charge port, arrow to onboard charger (AC in, DC out). Arrow down to a wide box, traction battery pack (high voltage). Left column below it: power electronics controller, then traction motor, then wheels. Right column: DC/DC converter (steps voltage down), then 12 V battery (auxiliary), then lights, screens and accessories. A dashed arrow runs from the traction motor back up to the traction battery pack for regenerative braking. Not every part on AFDC's list is drawn.</desc>
  <rect x="10" y="10" width="180" height="50" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="100" y="41" font-size="16" text-anchor="middle" fill="var(--text, #1a1a1a)">Charge port</text>
  <line x1="190" y1="35" x2="221" y2="35" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="230,35 220,29 220,41" fill="var(--text-2, #4a5260)"/>
  <rect x="230" y="10" width="180" height="50" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="320" y="31" font-size="16" text-anchor="middle" fill="var(--text, #1a1a1a)">Onboard charger</text>
  <text x="320" y="51" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">AC in, DC out</text>
  <line x1="320" y1="60" x2="320" y2="91" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="320,100 314,90 326,90" fill="var(--text-2, #4a5260)"/>
  <rect x="10" y="100" width="400" height="56" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--oxblood, #8b1e2d)" stroke-width="2.5"/>
  <text x="210" y="124" font-size="17" font-weight="700" text-anchor="middle" fill="var(--text, #1a1a1a)">Traction battery pack</text>
  <text x="210" y="146" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">high voltage</text>
  <line x1="115" y1="156" x2="115" y2="191" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="115,200 109,190 121,190" fill="var(--text-2, #4a5260)"/>
  <line x1="320" y1="156" x2="320" y2="191" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="320,200 314,190 326,190" fill="var(--text-2, #4a5260)"/>
  <rect x="40" y="200" width="150" height="56" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="115" y="224" font-size="15" text-anchor="middle" fill="var(--text, #1a1a1a)">Power electronics</text>
  <text x="115" y="245" font-size="15" text-anchor="middle" fill="var(--text, #1a1a1a)">controller</text>
  <line x1="115" y1="256" x2="115" y2="281" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="115,290 109,280 121,280" fill="var(--text-2, #4a5260)"/>
  <rect x="40" y="290" width="150" height="50" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="115" y="321" font-size="16" text-anchor="middle" fill="var(--text, #1a1a1a)">Traction motor</text>
  <line x1="115" y1="340" x2="115" y2="371" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="115,380 109,370 121,370" fill="var(--text-2, #4a5260)"/>
  <rect x="40" y="380" width="150" height="44" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="115" y="408" font-size="16" text-anchor="middle" fill="var(--text, #1a1a1a)">Wheels</text>
  <rect x="230" y="200" width="180" height="56" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="320" y="224" font-size="16" text-anchor="middle" fill="var(--text, #1a1a1a)">DC/DC converter</text>
  <text x="320" y="245" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">steps voltage down</text>
  <line x1="320" y1="256" x2="320" y2="281" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="320,290 314,280 326,280" fill="var(--text-2, #4a5260)"/>
  <rect x="230" y="290" width="180" height="50" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="320" y="311" font-size="16" text-anchor="middle" fill="var(--text, #1a1a1a)">12 V battery</text>
  <text x="320" y="331" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">(auxiliary)</text>
  <line x1="320" y1="340" x2="320" y2="371" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="320,380 314,370 326,370" fill="var(--text-2, #4a5260)"/>
  <rect x="230" y="380" width="180" height="46" rx="6" fill="var(--navy-soft, #e8eef6)" stroke="var(--text-2, #4a5260)" stroke-width="1.5"/>
  <text x="320" y="399" font-size="15" text-anchor="middle" fill="var(--text, #1a1a1a)">Lights, screens,</text>
  <text x="320" y="418" font-size="15" text-anchor="middle" fill="var(--text, #1a1a1a)">accessories</text>
  <line x1="40" y1="315" x2="22" y2="315" stroke="var(--oxblood, #8b1e2d)" stroke-width="2" stroke-dasharray="6 5"/>
  <line x1="22" y1="315" x2="22" y2="169" stroke="var(--oxblood, #8b1e2d)" stroke-width="2" stroke-dasharray="6 5"/>
  <polygon points="22,158 16,170 28,170" fill="var(--oxblood, #8b1e2d)"/>
  <text x="10" y="452" font-size="15" fill="var(--text-2, #4a5260)">Dashed line: regenerative braking, the</text>
  <text x="10" y="472" font-size="15" fill="var(--text-2, #4a5260)">motor working as a generator. Schematic.</text>
</svg>

The drawing is a schematic, drawn by this course from AFDC's list of parts on its "How Do
All-Electric Cars Work?" page; it isn't to scale and not every part on the list is in it. The dashed
line shows only which way energy flows when the motor slows the car. AFDC's page does not say which
parts that energy passes through on its way back, so none are drawn.

:::checkpoint An electric car is plugged in to a home charging unit that supplies AC. Name, in order, the parts the energy passes through before it can turn the wheels, and say which part changes AC into DC.

Charge port, onboard charger, traction battery pack, power electronics controller, traction motor, wheels. The onboard charger is the part AFDC says "converts it to DC power for charging the traction battery". The controller then manages the flow from the battery to the motor, controlling its speed and torque. If you put the DC/DC converter in the chain, look again at the drawing: it is on the other branch, stepping the traction battery's voltage down for the 12 V side.
:::

## Regenerative braking: the motor run backwards

Ordinary friction brakes slow a car without getting anything back. An electrified car can recover
some of the energy of its motion. [fueleconomy.gov](https://www.fueleconomy.gov/feg/hybridtech.shtml), run by the US Department of
Energy and the Environmental Protection Agency, puts the mechanism in one line: regenerative braking "uses the forward motion of the wheels to turn the
motor. This generates electricity and helps slow the vehicle."[7] The motor that drives the wheels
is being driven by them, and a motor driven that way works as a generator. The electricity goes back
into the traction battery, and the drag of generating it slows the car.

Tesla's UK manual for the Model 3 says the same thing from the other side, in its instructions for
recovery drivers: "The motor(s) in Model 3 generates power when the wheels spin."[19] (This course
read that page from an Internet Archive capture of October 2024, since Tesla's site refuses
automated readers.) The page follows it straight away with "Always transport Model 3 with all four
tires off the ground", and the breakdown lessons later in the course come back to towing.

There's a limit, and it explains a habit that EV drivers are taught. fueleconomy.gov: "Hard braking
causes the vehicle to use its conventional friction brakes, which do not recover energy."[7] The
friction brakes are still there, and hard braking brings them in. Reading the two sentences
together: brake gently and early and more of the slowing is left to the motor; brake late and hard
and more of it goes to the friction brakes, which recover nothing. The Energy Saving Trust, a UK organisation funded largely by government contracts,
gives drivers the matching advice: "use the higher levels of regen once you're comfortable to do
so."[17] That advice assumes a car that offers more than one level of regeneration; your handbook
says whether yours does, and how to set it.

:::predict A driver has read that regeneration puts energy back into the battery, and decides her brake pads will therefore never wear out. Before reading on: what is wrong with that?

Two things. The friction brakes still do part of the work, and more of it in a hard stop, so they still wear. AFDC's own words are that brake wear is "significantly reduced due to regenerative braking", which is a long way from none. And they still need checking: brakes and brake fluid in these cars are lesson 6's subject, and Nissan's 2024 LEAF handbook, for a car with no engine at all, still lists the brake-fluid level among the owner's checks.
:::

### How much of the energy reaches the wheels

fueleconomy.gov gives two figures that are often put side by side. For a conventional petrol car:
"Only about 12%–30% of the energy from the fuel you put in a conventional vehicle is used to move it
down the road, depending on the drive cycle."[9] For an electric car: "EVs convert over 77% of the
electrical energy from the grid to power at the wheels."[7] Read what each one counts before you
compare them. The first starts at the fuel in the tank; the second starts at electricity arriving
from the grid, and says nothing about how that electricity was made or delivered. So the two
figures don't, on their own, settle which kind of car uses less energy overall. That wider
question belongs to a later course on energy, and this course takes no side on which kind of car to
buy.

## The 12 V battery that every one still has

This is the part that surprises owners. [NHTSA](https://www.nhtsa.gov/vehicle-safety/electric-and-hybrid-vehicles), the US road-safety
regulator, says a car's traction
battery "is very different from a vehicle's 12-volt battery that powers lighting and
instrumentation systems".[10] Every source this course read that describes these cars gives them
both, and the AA calls the 12 V battery one "which can be found in all cars".[12] An AA patrol described the pair in 2021: "In EVs it's similar, but it starts the onboard computer
system. A separate, high voltage battery powers the vehicle."[12]

In a hybrid, AFDC says "the low-voltage auxiliary battery provides electricity to start the car
before the traction battery is engaged; it also powers vehicle accessories."[2] So a hybrid with a
flat 12 V battery may not start, however full its traction battery is.

How it's recharged differs from a petrol or diesel car. In those, the alternator recharges the
12 V battery while the engine runs (fueleconomy.gov names it;[8] lesson 5 comes back to it). NHTSA: "Typically, fully electric
and many hybrid-electric vehicles do not use a conventional alternator to recharge the 12-volt
battery. Instead, these vehicles use a DC-DC converter to step high-voltage from the battery pack
down to low-voltage".[10] That is the DC/DC converter on the right of the drawing. Nissan's LEAF
handbook even has a 12 V charge warning light for the converter's job; if it stays on while the car
is ready to drive, Nissan's instruction for its car is:
"Immediately stop the vehicle in a safe location and have the system checked."[13]

Two consequences follow for jump-starting, which lesson 13 teaches properly. NHTSA: "The
high-voltage battery found in EVs and HEVs cannot be jumped", though in most cases the 12 V battery
can.[10] And a jump start does not fill the big battery. Nissan: "Jump starting does not charge the
Li-ion battery. The Li-ion battery must be charged before the vehicle can be driven."[13] Nissan
also says its car can't help anyone else: "LEAF cannot be used as a booster vehicle because it
cannot supply enough power to start a gasoline engine." That is Nissan's statement about the LEAF,
and lesson 13 gives what the other sources say about using a hybrid or EV to help another car.

The AA's 2021 figures, dated and from one breakdown provider's own call-outs, fit this picture. The
top two causes were the 12 V battery and tyre faults; "The third relates to charging equipment
(cable, plug)."[12] Edmund King, the AA's president, put it as "96% of EV breakdowns have nothing to
do with battery range."[12] This course did not find a newer figure from the AA or the RAC, so treat
it as a 2021 snapshot from one provider.

:::checkpoint A colleague says: "My electric car hasn't got an alternator, so there's nothing in it that can go flat except the main battery, and the dashboard tells me how full that is." What has he got wrong, and what does the dashboard gauge not show him?

The car has a second, 12 V battery that runs the lights and instruments, and in a hybrid it starts the car before the traction battery is engaged. It is recharged by the DC/DC converter from the traction battery, not by an alternator, but it can still go flat, and in the AA's 2021 figures it was one of the top two causes of EV breakdowns. The range or charge gauge reports the traction battery, not the 12 V one, so a full gauge doesn't mean the car will start.
:::

## Charging

A battery-electric car or plug-in hybrid charges from a socket or a charging unit. The onboard
charger converts the grid's AC into DC for the traction battery. How fast depends on the supply,
and the US names three levels. The figures below are from [AFDC's charging page](https://afdc.energy.gov/fuels/electricity-stations),
for the US.[4]

| US level (AFDC) | Supply | Range added, roughly | Notes from AFDC |
|---|---|---|---|
| Level 1 | "a 120 volt (V) AC plug" | about 5 miles per hour of charging, at 1.9 kW | The slowest of the three |
| Level 2 | 240 V at home, 208 V in commercial buildings | about 25 miles per hour of charging | 2.9 to 19.2 kW; most home units run at up to 30 amps, 7.2 kW, on a dedicated 40-amp circuit, to meet what AFDC calls the National Electric Code's Article 625 |
| DC fast | Not given on the page | about 100 to 200-plus miles per 30 minutes | Up to 500 kW; "also referred to as Level 3 charging" |

**In the UK**, AFDC's levels are US vocabulary. This course did not read an official UK page on
charging speeds, connectors or the supply to a house, so it gives no UK figures here rather than borrow American ones. What it did read on home charging
in the UK is Electrical Safety First, a UK electrical safety charity: "The safest way to charge at
home is with a dedicated EVCP" (an EV charge point), which it says must be installed by "a
registered and competent electrician".[18] Charging safety at home in both countries, including the disagreement between
sources over extension leads, is lesson 14's subject, and Home Repair and Maintenance lessons 5 and
6, "Electricity: what trips, and why" and "Plugs, leads and electrical fires", already cover the
house side of it.

### A plug-in hybrid that never plugs in

Say a commuter in Carmarthen owns a plug-in hybrid. Her handbook (in this example, and labelled as
the example's figure) gives an electric range of 30 miles, inside AFDC's "about 15 to 60-plus
miles". Her round trip to work is 24 miles. She has never plugged the car in, and it runs on petrol
every day. What is
she getting from the car?

Start from what AFDC says about her exact case: "if the vehicle is never plugged in to charge, fuel
economy will be about the same as a similarly sized hybrid electric vehicle."[3] So she has, in
effect, a hybrid. AFDC does not say how each model manages its battery when it's never charged from
the mains; it gives the result, and so does this lesson.

Now the other side. Her commute is shorter than the handbook's electric range, and AFDC says a
plug-in "typically runs on electric power until the battery is nearly depleted".[3] So on a day that
started with a full battery, her whole commute could in principle be electric, and AFDC's own
summary is that "consistently charging the vehicle is the best way to maximize the electric
benefits."[3] Whether she can charge at home is a question for lesson 14 and for an electrician,
not for this example. And whatever she decides, she has an engine to service. AFDC: "PHEVs and HEVs require the same general maintenance as
conventional vehicles."[5] She's carrying an engine's servicing and a charging system she is not
using.

### An EV in the cold

Now a harder case, with a gap for you. An owner in Fairbanks sees her electric car's range fall
sharply as winter sets in. On a mild day in September its display showed 240 miles. What does the
evidence say to expect, and what does it suggest she do?

NHTSA's winter page, as archived in August 2026, says it plainly: "In cold weather, gasoline and
diesel engines take more battery power to start, and electric and hybrid-electric vehicles' driving
range can be reduced."[11] [fueleconomy.gov's cold-weather page](https://www.fueleconomy.gov/feg/coldweather.shtml) gives a
size, reporting a 2019 AAA test (AAA clubs are US
motoring clubs that sell roadside assistance and run a repair network): for electric cars, "fuel economy can
drop roughly 39% in mixed city and highway driving, and range can drop by 41%. About two-thirds of
the extra energy consumed is used to heat the cabin."[8] For hybrids it gives a drop of "about 30% to
34%" in fuel economy in the cold.[8]

So, by this course's arithmetic: a 41% drop on 240 miles leaves about 142 miles (240 × 0.59). That is
the test's figure, not a forecast for her car, and the word in the source is "can". The second
sentence of the quotation is the more useful one: most of the extra energy went on keeping people
warm, not on moving the car.

Now your part. Three habits she's been told about:

1. Warm the cabin while the car is still plugged in, before she sets off.
2. Leave the car plugged in overnight in the winter.
3. Brake late and hard on the icy hill down to town, so the motor has more to recover.

:::predict Before opening this: which of the three habits do the sources in this lesson support, and which do they contradict?

The first is fueleconomy.gov's own tip: "preheating the cabin while plugged into the charger can extend your vehicle's range." This course's reading of why: heating is where the test found two-thirds of the extra energy went, and while the car is plugged in, the grid can supply some of it. The second is NHTSA's: its winter page names "plugging your vehicle in at night during the winter" as a common way to keep the battery warm in the cold. (A UK charity lists overnight charging among things to avoid, and lesson 14 takes up that disagreement.) The third is contradicted: hard braking brings in the friction brakes, "which do not recover energy". The winter lesson, lesson 15, comes back to cold weather.
:::

## What an owner still checks, and what is never the owner's

Start with [AFDC's maintenance page](https://afdc.energy.gov/vehicles/electric-maintenance), because it is the honest version of "electric cars need no
maintenance": "PHEVs and HEVs require the same general maintenance as conventional vehicles, but
all-electric vehicles require less maintenance because they have fewer moving parts and fluids to
change."[5] It gives three reasons: "The battery, motor, and associated electronics require little to
no regular maintenance"; "There are fewer fluids, such as engine oil, that require regular
maintenance"; and "Brake wear is significantly reduced due to regenerative braking".[5] Less, not
none.

What's still there in a battery-electric car? Nissan's 2024 LEAF handbook, for a car with no engine,
still has a coolant reservoir ("Check the coolant level in the reservoir when the high-voltage parts
are cold"), a brake-fluid reservoir with MAX and MIN lines, windscreen washers, wipers, lights and
tyres, and a 12 V battery.[13] AFDC adds that some battery systems "use liquid coolant to maintain
safe operating temperatures. These systems may require regular checks."[5] The handbook says which
checks are yours and how, and this course's exercises read those levels through the side of the
reservoir without opening it. A hybrid, per AFDC, needs the same
general maintenance as a conventional car, engine included. Tyres are on the AA's list too, and lessons 7 and 8
teach them.

Then the part that is never yours. Nissan: "The vehicle high voltage system has no user serviceable
parts."[13] Ford, for the Maverick hybrid: "This battery pack should only be serviced by an authorized
electric vehicle technician."[14] NHTSA: "It is important that a qualified technician with specialized
EV-specific high-voltage training service your electric vehicle."[10] In this course's labels,
anything on the high-voltage system is **Call someone**, every time. The owner's checks around it,
reading a reservoir or checking a tyre, are **Yours**, done by the handbook's method.

One more thing changes when you open the bonnet of one of these cars: parts can move without
warning. Ford, for its hybrid: "If you do not switch the ignition off, the engine could restart at
any time."[14] Nissan says the LEAF's cooling fan "may come on at any time without warning".[13] And
DVSA's MOT manual warns testers in Great Britain that in a hybrid "the internal combustion engine may
start without warning when electrical equipment is operated or if the battery voltage drops."[15]
That is why the exercise below starts with the car switched off in the way its handbook describes,
and why a silent car is never taken to be an off car.

### How long the traction battery lasts

fueleconomy.gov says "a DOE study suggests these batteries may last 12 to 15 years in moderate
climates and 8 to 12 years in severe climates."[7] The page doesn't name the study, and this course
did not find it, so treat the range as fueleconomy.gov's. AFDC says a battery "could have at least 70%
of its initial capacity left at the end of its life if it has not failed or been damaged", and that
"many manufacturers offer 8-year/100,000-mile warranties for their EV batteries."[5][6] The
warranty on your car is in its warranty booklet, not in either page.

## What people get wrong

**"Electric cars need no maintenance."** AFDC says less, and gives the reasons. The coolant, brake
fluid, tyres, wipers and 12 V battery are still there, and the AA's 2021 call-outs put the 12 V
battery and tyres at the top of EV breakdowns. A hybrid, AFDC says, needs the same general
maintenance as a conventional car.

**"An electric car hasn't got a 12 V battery."** Every source here that describes one gives it
one, and it is recharged by a DC/DC converter instead of an alternator. The misconception is dangerous in a small
way: an owner who believes it reads a full range gauge and can't understand why the car won't wake.

**"Every hybrid can be plugged in."** Only plug-in hybrids can. AFDC: an ordinary hybrid "cannot be
plugged in". The word on the badge isn't always enough; the socket, and the handbook, settle it.

**"A mild hybrid can drive on electricity at low speed."** That is a full hybrid. AFDC: mild systems
"cannot power the vehicle using electricity alone."

**"With regenerative braking, the brakes never wear."** They wear less. Hard braking brings in the
friction brakes, fueleconomy.gov says, so they still do work and still wear.

**"A plug-in hybrid saves fuel whatever you do."** Never plugged in, AFDC says, its economy is
"about the same as a similarly sized hybrid". Whether that's still worth having is the owner's call;
the figure is AFDC's.

## Practice

:::exercise Sort five cars, then find the parts on your own
Take 20 minutes over these. Part 1 is on paper. Part 2 uses your own car's handbook and, if you want, the car itself, if it is yours or its keeper agrees.

1. Sort each of these five cars into battery-electric, full hybrid, mild hybrid or plug-in hybrid, and say for each what charges its traction battery. (a) A saloon with a charging socket and no fuel filler. (b) An estate car with a petrol filler and a charging socket; the handbook gives 35 miles of electric range, after which the engine starts. (c) A small SUV with no socket, whose handbook describes a 48 V system that assists the engine and runs stop-start, and says the car can't move on electric power alone. (d) A hatchback with no socket that pulls away from a junction on the motor alone and starts its engine as it speeds up. (e) A car with a socket and a petrol tank whose engine only ever generates electricity and never drives the wheels. Write your answers, then open the checkpoint below.

2. From your own handbook (or the maker's online handbook if the paper one is lost), write down: which of the four kinds your car is; where the 12 V battery is, or where the handbook's jump-start points are if the battery is hidden; and where the handbook shows high-voltage warning labels or orange cables, with page numbers or section titles. If your car is petrol or diesel only, write that, and note where its 12 V battery is instead.

3. If you want to see the labels on the car itself: park on level ground, apply the parking brake, select P (or leave it in gear), and switch the car off in the way the handbook describes, then take the key or fob away from the car so nothing can start. Remember from above that a hybrid's engine can restart if the ignition is left on, and that a cooling fan may come on without warning, so look without reaching in. Open the bonnet only by the handbook's method, and look. Don't touch, unplug, open or reach past anything orange, anything blue in a mild hybrid, anything labelled high voltage, or any cover over them. Don't open any cap or reservoir for this exercise. If you're unsure what something is, leave it and write "not identified".

4. Add to your notes what the handbook says about charging your car, if it charges from a socket: the connector, and any charging rules the handbook gives for its own car.
:::

:::checkpoint Check your answers to part 1.

(a) Battery-electric: a socket and no fuel means the plug is the only source, with braking recovering some in cars with motor generators. (b) Plug-in hybrid: it runs on electricity until the battery is nearly used up, then on the engine; charged from the plug. (c) Mild hybrid: the motor assists and cannot drive the car alone; charged by braking and the engine. (d) Full hybrid: no socket, but the motor alone moves it at low speed; charged by braking and the engine. (e) Plug-in hybrid of the series kind, the kind AFDC says is often called an extended-range electric vehicle: the motor alone drives the wheels, and it's charged from the plug. If you put (d) down as mild, look again at what the motor could do by itself.
:::

## For your plan

Add a page to your car file: which of the four kinds your car is, in the handbook's own words; where
its 12 V battery or jump points are; where the high-voltage labels are, as seen and not touched; what
the handbook says about charging, if it plugs in; and the traction battery's warranty terms, from
the warranty booklet, if it has one. Lesson 5 adds the 12 V battery's warning light to the same page.

## Connections

Lesson 1, "What a car is made of, and why the handbook comes first", set the rule that the handbook
governs every per-car figure, and this lesson has kept to it: Nissan's 400 volts, Ford's orange
convolute and the charging rules are each one maker's, for one car. Lesson 2, "The engine: petrol,
diesel, and the drive to the wheels", deals with the engine that a hybrid still carries. Lesson 5,
"The 12 V battery: what it does, and why short trips flatten it", takes the small battery further;
lesson 6, "Brakes, steering and suspension", takes the friction brakes that regeneration shares its
work with; lesson 13, "A flat battery and jump-starting", covers the jump start in an EV; lesson 14
is the high-voltage safety lesson; and lesson 15, "Winter and summer", returns to the cold.

## Go deeper

- **AFDC, the three "How do ... work?" pages**: [all-electric](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work),
  [hybrid](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work) and
  [plug-in hybrid](https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work), free.
  Read here in full. Each has a labelled drawing of the car and a glossary of its parts, which is
  where this lesson's list came from.
- **fueleconomy.gov, ["Fuel Economy in Cold Weather"](https://www.fueleconomy.gov/feg/coldweather.shtml)**,
  free. Read here in full. The cold-weather figures for petrol cars, hybrids and EVs on one page, with
  what each one counts.
- **Halderman and Ward, *Automotive Technology: Principles, Diagnosis, and Service*, 7th edition
  (Pearson, 2025), Section X**, whose chapter titles include "Introduction to Electric and Hybrid
  Electric Vehicles", "Hybrid and Electric Vehicle Maintenance" and "Regenerative Brakes". A
  technician's textbook. This course read only its table of contents, so it can recommend where the
  subject is covered in depth but cannot vouch for what those chapters say.

## Sources

1. Alternative Fuels Data Center (US Department of Energy), ["How Do All-Electric Cars Work?"](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work).
   **Read: full text, 26 September 2026.** No page date. <!-- SOURCES Part A §2 -->
2. Alternative Fuels Data Center, ["How Do Hybrid Electric Cars Work?"](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work)
   and ["Hybrid Electric Vehicles"](https://afdc.energy.gov/vehicles/electric-basics-hev).
   **Read: full text of both.** <!-- SOURCES Part A §2 -->
3. Alternative Fuels Data Center, ["How Do Plug-In Hybrid Electric Cars Work?"](https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work)
   and ["Plug-In Hybrid Electric Vehicles"](https://afdc.energy.gov/vehicles/electric-basics-phev).
   **Read: full text of both.** <!-- SOURCES Part A §2 -->
4. Alternative Fuels Data Center, ["Developing Infrastructure to Charge Electric Vehicles"](https://afdc.energy.gov/fuels/electricity-stations).
   **Read: full text.** No page date; the page cites 2023 figures. US only. <!-- SOURCES Part A §2 -->
5. Alternative Fuels Data Center, ["Maintenance and Safety of Electric Vehicles"](https://afdc.energy.gov/vehicles/electric-maintenance).
   **Read: full text.** Its 400 to 1,000 volt range is too broad for 48 V mild hybrids, as the lesson
   says. <!-- SOURCES Part A §2 -->
6. Alternative Fuels Data Center, ["Batteries for Electric Vehicles"](https://afdc.energy.gov/vehicles/electric-batteries).
   **Read: full text.** <!-- SOURCES Part A §2 -->
7. fueleconomy.gov (US Department of Energy and Environmental Protection Agency), ["All-Electric Vehicles"](https://www.fueleconomy.gov/feg/evtech.shtml),
   ["How Hybrids Work"](https://www.fueleconomy.gov/feg/hybridtech.shtml) and ["Tips for Hybrids,
   Plug-in Hybrids, and Electric Vehicles"](https://www.fueleconomy.gov/feg/evtips.shtml).
   **Read: full body text of all three.** No page dates. The battery-life study is not named on the
   page. <!-- SOURCES Part A §2 -->
8. fueleconomy.gov, ["Fuel Economy in Cold Weather"](https://www.fueleconomy.gov/feg/coldweather.shtml).
   **Read: full body text.** The EV figures are from a 2019 AAA test, as the page reports it; this
   course did not read the test. <!-- SOURCES Part A §6 -->
9. fueleconomy.gov, ["Where the Energy Goes: Gasoline Vehicles"](https://www.fueleconomy.gov/feg/atv.shtml).
   **Read: full body text.** <!-- SOURCES Part A §1 -->
10. NHTSA, ["Electric and Hybrid Vehicles"](https://www.nhtsa.gov/vehicle-safety/electric-and-hybrid-vehicles),
    read from Internet Archive capture 20260924154857 (nhtsa.gov refuses automated readers; the live
    page is linked). **Read: full text.** <!-- SOURCES Part B §4, §5 -->
11. NHTSA, ["Winter Weather Driving Tips"](https://www.nhtsa.gov/winter-driving-tips), read from
    Internet Archive capture 20260812080428. **Read: full text.** <!-- SOURCES Part B §6 -->
12. The AA (a motoring organisation that sells breakdown cover and repairs; not an official body),
    ["AA gives power to electric drivers"](https://www.theaa.com/about-us/newsroom/aa-gives-power-to-electric-drivers),
    press release, 23 July 2021. **Read: full text.** The figures are 2021's and from the AA's own
    call-outs. <!-- SOURCES Part A §2 -->
13. Nissan North America, *2024 LEAF Owner's Manual and Maintenance Information* (US market), PDF.
    **Read in full: pages EV-7 to EV-8, CH-2, CH-12, 2-15 to 2-23, 6-10 to 6-12, 8-2, 8-5 to 8-8,
    9-3 to 9-4.** Used here: EV-8 and 8-2 (high voltage, cooling fan), 2-16 (12 V charge light),
    6-10 to 6-11 (jump starting), 8-6 to 8-7 (coolant and brake fluid), 9-3 to 9-4 (owner's
    checks). A maker's handbook for its own car. <!-- SOURCES Part B §2, §3, §4, §5 -->
14. Ford Motor Company, *2024 Maverick Owner's Manual*, edition 202307, US and Canada, read from
    Internet Archive capture 20250505042038 (Ford's site refuses automated readers). **Read in
    full: printed pages 89, 90, 113, 114, 164, 184, 193 and 283 to 286, 308, 309.** Used here: p. 184
    (high-voltage battery precautions). A maker's handbook for its own car, sold as petrol or full
    hybrid. <!-- SOURCES Part B §2, §5 -->
15. DVSA, ["MOT inspection manual: cars and passenger vehicles"](https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles),
    updated 1 June 2026, Great Britain. **Read: Introduction in full, and sections 1, 3, 4, 5, 7 and
    8.** Used here: Introduction section 20, on electric and hybrid vehicles. Written for testers.
    <!-- SOURCES Part C §1 -->
16. ASE Education Foundation, [*Automobile Program Standards*](https://www.aseeducationfoundation.org/wp-content/uploads/2024-Automobile-Program-Standards-1.pdf),
    effective 1 July 2024. **Read: the supplemental task lists, Engine Repair section A, the
    Brakes hydraulic tasks, the glossary and the tool lists.** Used here: the glossary's definition
    of high voltage. <!-- SOURCES Part A §4 -->
17. Energy Saving Trust (UK; funded largely by government contracts), ["Reduce emissions through
    efficient driving"](https://energysavingtrust.org.uk/advice/efficient-driving/), read from
    Internet Archive capture 20260731174146 (the live site refuses automated readers). **Read: full
    text.** <!-- SOURCES Part A §6 -->
18. Electrical Safety First (UK electrical safety charity), ["Electric vehicles"](https://www.electricalsafetyfirst.org.uk/safety-advice/products-and-appliances/transport/electric-vehicles/).
    **Read: full text.** No page date. <!-- SOURCES Part B §5 -->
19. Tesla, *Model 3 Owner's Manual* (UK English), ["Instructions for Transporters"](https://www.tesla.com/ownersmanual/model3/en_gb/GUID-FA9E3DC9-805C-45BD-A64D-C4B3F491B8C0.html),
    read from Internet Archive capture 20241004175445 (tesla.com refuses automated readers). **Read:
    that section only**; the rest of the manual was not read, and the live page may have changed
    since October 2024. <!-- SOURCES Part E; gate G-H2 fallback -->
