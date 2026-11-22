# Glyz Bunny: Cable Crossing

A cute purple browser game about networks and IT. Help **Glyz Bunny** cross the gaps between servers by stretching a network cable, hop over bugs, collect stars, and answer IT questions to stay online.

Made by **Glyza D. Malan** (BS Information Technology, PUP Calauan).

## Play it online

**[https://glayzamalan00-cloud.github.io/Glyz-Bunny-Game/](https://glayzamalan00-cloud.github.io/Glyz-Bunny-Game/)**

Works on phone, tablet, and computer. No install and no sign-up needed.

> Built for the System Integration class (topic: client-server). The game is a static website hosted on GitHub Pages.

## Features

- Stick-hero style gameplay with a network twist: the stick is an **Ethernet cable** and the platforms are **servers**.
- An **IT quiz after every connection**. The question matches the server you land on (a DNS server asks about DNS).
- **5 worlds**, each with its own look and a new challenge.
- Three kinds of **bugs**: crawling, moving, and flying.
- **Stars, shield bubble, perfect combos, and hints** to keep it exciting.
- **Goal server** at the end of every stage, and an **Endless mode** after you win.
- Built-in **music** (4 songs) and **sound effects**, all made by the browser.
- Works on **phone, tablet, and computer**.

## How to play

1. **Hold** the mouse, touch the screen, or hold **SPACE** to stretch the cable. **Release** to drop it.
2. Reach the next server. Land on the glowing pink port for a **PERFECT**. Chain perfects for bigger bonuses (up to +4 each).
3. **Tap or press SPACE while hopping** to jump over bugs on the cable. Don't jump into flying bugs. Let them pass.
4. Collect **stars** for points. Every 8 stars gives **1 hint** (you can hold up to 3). Grab the **shield bubble** to block one bug.
5. After each connection, answer a question about the server you just connected to, before the timer runs out. Press **1-4** to answer, or **H** to use a 50/50 hint that removes 2 wrong answers.
6. Cable too short or too long? You fall and lose a life, but you can try again.
7. **3 correct answers in a row** give **+1 life** (max 3).
8. Reach the **GOAL server** (checkered line and flag) to clear the stage. Its question is worth **double points**.
9. Clear all **5 worlds** to win, then keep going in **Endless mode**.

### Controls

| Action | Mouse / Touch | Keyboard |
|--------|---------------|----------|
| Stretch cable | Hold | Hold **SPACE** or **Up arrow** |
| Drop cable | Release | Release |
| Jump | Tap while hopping | **SPACE** or **Up arrow** |
| Answer a question | Tap an answer | **1 - 4** |
| Use a hint | Tap the hint button | **H** |

### Scoring

| What you do | Points |
|-------------|--------|
| Cross to the next server | +1 |
| PERFECT landing | +1, +2, +3, then +4 for each perfect in a row |
| Collect a star | +1 |
| Correct answer | +2, with a combo multiplier (up to x4) from your streak |
| Quick answer (more than 60% of the time left) | +1 |
| Goal server answer | x2 |
| Clear a stage | +5 plus 2 for each stage number |

## Worlds

| Stage | World | What's new |
|-------|-------|------------|
| 1 | Lilac Meadow | Calm and cozy, no bugs |
| 2 | Sunset Valley | Crawling bugs |
| 3 | Twilight Dreamland | Moving bugs |
| 4 | Cotton Candy Sky | Flying bugs |
| 5 | Starry Space | Everything at once |

After stage 5 the worlds repeat in Endless mode, with bigger gaps and smaller servers.

## Quiz topics

There are **42 questions** in 5 topics. Pick one topic or play with all of them.

| Topic | Questions | Servers that ask about it |
|-------|-----------|---------------------------|
| Networking | 11 | DNS, FTP, DHCP, LAN, MAIL |
| Web & Programming | 8 | WEB, API |
| Databases | 7 | DB, SQL |
| Security | 7 | VPN, SSH, FW |
| Hardware & OS | 9 | NAS, CPU, RAM |

Every answer comes with a short explanation, so you learn while you play. The game over and win screens show your **skills by topic** and a list of the questions you missed.

### Ranks

Your rank at the end depends on your score: Sleepy Bunny, Little Hopper, Network Buddy, Cable Champion, and Server Superstar.

## Music and sound

- Tap the music button in the top bar to change the **volume** or choose a **song**: Bouncy, Dreamy, Adventure, or Chill.
- Tap the speaker button to mute everything.
- Your music choice and volume are remembered in the browser.
- Sound starts after your first tap or click (browsers need this).

## Files

The game is made of three files. Keep them **together in the same folder** with these exact names.

| File | What it does |
|------|--------------|
| `index.html` | The page structure: menus, quiz box, and result screens |
| `style.css` | The look: pastel purple and pink theme, buttons, animations |
| `script.js` | The game itself: movement, bugs, score, quiz, stages, music, and sound |

## Run it

The easiest way is the live link: [glayzamalan00-cloud.github.io/Glyz-Bunny-Game](https://glayzamalan00-cloud.github.io/Glyz-Bunny-Game/).

To run it on your own computer, no install is needed. Download the three files into one folder and open `index.html` in any modern browser.

This game is hosted with **GitHub Pages**. To put your own copy online:

1. Upload `index.html`, `style.css`, and `script.js` to a GitHub repository.
2. Go to **Settings > Pages**.
3. Choose the main branch and the root folder, then save.
4. Wait a minute or two, then open the link GitHub gives you.

## Customize

Everything below is in `script.js`.

**Settings** (near the top):

```js
const AUTHOR = 'Glyza D. Malan';
const MAX_LIVES = 3;
const MAX_HINTS = 3;
const GROW_SPEED = 3.0;   // how fast the cable stretches
const WALK_SPEED = 3.0;   // how fast the bunny hops along
const JUMP_V = 11;        // jump strength
const GRAV = 0.65;        // gravity
const STAGE_LEN = 5;      // servers per stage (the last one is the GOAL)
```

**Add a question** to the `QUESTIONS` list. The first answer in `a` is always the correct one (the game shuffles them):

```js
{ t:'net', q:'What does LAN stand for?',
  a:['Local Area Network','Large Area Network','Linked Access Network','Local Application Node'],
  e:'A LAN connects devices in a small area like a room, home, school or office.' },
```

Topic keys for `t`: `net`, `web`, `db`, `sec`, `hw`.

**Server names** and the topic each one asks about are in `LABEL_TOPIC`. For example, `DNS: 'net'` means a DNS server asks Networking questions.

**Worlds** (colors, sun or moon, description) are in the `WORLDS` list.

**Songs** are in the `TRACKS` list.

## Tech

Plain HTML, CSS, and JavaScript. No libraries and no image or audio files:

- Everything is drawn with the browser's **Canvas**.
- Music and sounds are made with the **Web Audio API**.
- The best score, music volume, and chosen song are saved in the browser's **localStorage**.
- The only outside resource is the "Baloo 2" font from Google Fonts. Without internet, a fallback font is used and the game still works.

## Author

**Glayza D. Malan**
BS Information Technology, Polytechnic University of the Philippines (PUP) - Calauan Campus
GitHub: [glayzamalan00-cloud](https://github.com/glayzamalan00-cloud)
