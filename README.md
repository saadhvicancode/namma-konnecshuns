# Namma Konnecshuns

A Bengaluru and Karnataka edition of NYT Connections. 48 puzzles: find four
groups of four.

## Run it

Open `index.html` directly, or:

    python3 -m http.server 8123

## Deploy

Static site, no build step. Vercel serves the repo root as-is; `vercel.json`
turns on clean URLs and marks `index.html`, `app.js`, `puzzles.js` and
`style.css` as must-revalidate. Those files are referenced by bare name with no
content hash, so a long cache would leave players running old game logic against
a new puzzle bank.

## Files

- `index.html`, markup
- `style.css`, NYT-style board with light and dark palettes
- `app.js`, game logic (selection, mistakes, reveal-on-loss, share grid, per-puzzle save)
- `puzzles.js`, the puzzle bank
- `build.js`, inlines everything into `konnecshuns.artifact.html` for publishing (`node build.js`)

## Adding a puzzle

Append to `PUZZLES` in `puzzles.js`. Each puzzle needs exactly four groups with
four words each, and levels 0 to 3. The level sets the difficulty colour:

    0 yellow  everyone gets this
    1 green   slightly niche
    2 blue    you've lived here a while
    3 purple  wordplay

## The difficulty rule

Every puzzle plants at least one decoy: a tile that obviously belongs to a
category it is not in. SANKEY is a lake and the Raj engineer the road is named
for. GOKAK is a waterfall and a Jnanpith laureate. TALE is an English word and
the Kannada word for head. RV is an engineering college and a metro station.
A puzzle with no decoy is too easy and should be reworked.

Scope is Karnataka-wide, not just Bangalore landmarks: dynasties, Jnanpith
laureates, Haridasa composers, GI-tagged produce, KSRTC bus classes, HAL
aircraft, handloom towns, Kannada grammar. Depth beats recognisability.

## House style

No em dashes anywhere in the copy.
