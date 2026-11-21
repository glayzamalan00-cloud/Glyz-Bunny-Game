# Glyz Bunny: Cable Crossing

A cute purple browser game about networks and IT. Help Glyz Bunny cross the gaps between servers by stretching a network cable, hop over bugs, collect stars, and answer IT questions to stay online.

Made by **Glyza D. Malan**.

## How to play

1. **Hold** the mouse, touch the screen, or hold **SPACE** to stretch the cable. **Release** to drop it.
2. Reach the next server. Land on the glowing pink port for a **PERFECT** and chain perfects for bigger bonuses.
3. **Tap / press SPACE while hopping** to jump over bugs on the cable. Don't jump into flying bugs. Let them pass.
4. Collect **stars** for points (every 8 stars gives 1 hint). Grab the **shield bubble** to block one bug.
5. After each connection, answer a question about the server you just connected to (a DNS server asks about DNS) before the timer runs out. Press **1-4** to answer, **H** for a 50/50 hint.
6. 3 correct answers in a row give **+1 life** (max 3).
7. Reach the **GOAL server** (checkered line and flag) to clear the stage. Its question is worth double points.
8. Clear all **5 worlds** to win, then keep going in **Endless mode**.

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

Networking, Web & Programming, Databases, Security, and Hardware & OS (42 questions in total). Pick one topic or play with all of them. The game over and win screens show a summary of how you did in each topic.

## Files

The game is made of three files. Keep them **together in the same folder** with these exact names.

| File | What it does |
|------|--------------|
| `index.html` | The page structure: menus, quiz box, and result screens |
| `style.css` | The look: pastel purple and pink theme, buttons, animations |
| `script.js` | The game itself: movement, bugs, score, quiz, stages, sound |

## Run it

No install needed. Open `index.html` in any modern browser.

To put it online with **GitHub Pages**:

1. Upload `index.html`, `style.css`, and `script.js` to a GitHub repository.
2. Go to **Settings > Pages**.
3. Choose the main branch and the root folder, then save.
4. Open the link GitHub gives you.

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

**Worlds** (colors, sun/moon, description) are in the `WORLDS` list.

## Tech

Plain HTML, CSS, and JavaScript. No libraries and no image or audio files:

- Everything is drawn with the browser's **Canvas**.
- Sounds are made with the **Web Audio API**.
- The best score is saved in the browser's **localStorage**.
- The only outside resource is the "Baloo 2" font from Google Fonts. Without internet, a fallback font is used and the game still works.
