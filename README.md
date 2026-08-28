# Namma Konnecshuns

A Bengaluru and Karnataka edition of NYT Connections. One puzzle a day, with
every past day in the archive. The bank holds 108 puzzles and runs fresh to
18 November 2026 before it repeats.

## Run it

Open `index.html` directly, or:

    python3 -m http.server 8123

## Play

Today's board is the default. The Archive button lists every past date, so you can go back and play
yesterday's or last week's after you finish today's. Each date keeps its own
saved game.

Dates map to puzzles in `app.js`: `START` is the day puzzle #1 ran, and every day
since takes the next puzzle, wrapping when it reaches the end. Add puzzles to
push the wrap further out.

## The design rules

**Difficulty comes from the frame, not from trivia.** This is the one that
matters. A group of four names you have either heard of or you have not is the
"US presidents 1950-80" trick: it locks out everyone outside the circle without
being hard for anyone inside it. So tiles are words a stranger would recognise,
and the work is spotting which frame they sit in. SILK is the worst junction in
Bengaluru and also the odd one out among keyboard, surfboard and cardboard.
Knowing the city can actively mislead you, which is the good kind of hard.

**No board is single-themed.** A puzzle where every group is food tells you
where to look. Each puzzle draws its four categories from four different
domains, tagged in the data and enforced by the validator. This is also why
puzzles have no names: a name like "Frazer Town Food" is itself a hint.

**Every puzzle plants a decoy**, a tile that obviously belongs to a category it
is not in. SANKEY is a lake and the Raj engineer the road is named for. GOKAK is
a waterfall and a Jnanpith laureate. TALE is an English word and the Kannada for
head. RV is an engineering college and a metro station. A puzzle with no decoy is
too easy and should be reworked.

**Place names are rationed.** "Which Bengaluru road / layout / area is this"
goes stale after the third time. The area wordplay that survives has been
rebuilt on common words: `___ CIRCLE` is now traffic, vicious, arctic, inner,
not four junctions.

## Deploy

Static site, no build step. Vercel serves the repo root as-is; `vercel.json`
turns on clean URLs and marks `index.html`, `app.js`, `puzzles.js` and
`style.css` as must-revalidate. Those files are referenced by bare name with no
content hash, so a long cache would leave players running old game logic against
a new puzzle bank.

## Files

- `index.html`, markup
- `style.css`, NYT-style board with light and dark palettes
- `app.js`, game logic: dates, selection, mistakes, reveal-on-loss, share grid,
  per-date saves
- `puzzles.js`, the puzzle bank
- `tools/check.js`, validator
- `build.js`, inlines everything into `konnecshuns.artifact.html` for publishing

## Adding a puzzle

Append to `PUZZLES` in `puzzles.js`. Each puzzle needs four groups of four
words, one at each level, and four different domains:

    0 yellow  everyone gets this
    1 green   needs a bit of Karnataka
    2 blue    a deep cut
    3 purple  wordplay

Then run the validator, which checks levels, domain mixing, duplicate tiles and
reused categories:

    node tools/check.js && node build.js

Changing a puzzle's words invalidates saved games for the dates that served it.
That is handled: a save whose tiles no longer match its board is discarded and
the date starts fresh.

## House style

No em dashes anywhere in the copy.
