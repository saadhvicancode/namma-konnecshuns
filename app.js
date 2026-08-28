/* Namma Konnecshuns, game logic.

   Play is date-based. Puzzle #1 ran on START, and each day since then gets the
   next puzzle in the bank. Today is the default board; the archive holds the
   previous 47 days, which is one full turn through the bank. Saved games are
   keyed by date, so a date you already played stays played. */
(function () {
  "use strict";

  var SITE = "https://namma-konnecshuns.vercel.app";
  var START = new Date(2026, 7, 3);   // 3 August 2026, the day puzzle #1 ran
  var ARCHIVE_DAYS = 107;             // one full turn through the bank
  var LEVEL_EMOJI = ["\u{1F7E8}", "\u{1F7E9}", "\u{1F7E6}", "\u{1F7EA}"];
  var WIN_LINES = ["Sakkath! Zero tappu.", "Full solid, bro.", "Chennagide!", "Just about escaped, macha."];

  var $ = function (s) { return document.querySelector(s); };
  var grid = $("#grid"), solvedEl = $("#solved"), toastEl = $("#toast");
  var dotsEl = $("#dots"), shuffleBtn = $("#shuffle"), deselectBtn = $("#deselect"), submitBtn = $("#submit");

  var puzzle, playing, state, busy = false;

  /* ---------- dates ---------- */
  function midnight(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function today() { return midnight(new Date()); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function dayNumber(d) { return Math.round((midnight(d) - START) / 86400000); }
  function dateKey(d) {
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }
  function fromKey(k) {
    var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(k || "");
    return p ? new Date(+p[1], +p[2] - 1, +p[3]) : null;
  }
  function puzzleFor(d) {
    var n = dayNumber(d);
    return n < 0 ? null : PUZZLES[n % PUZZLES.length];
  }
  function shortLabel(d) {
    var diff = dayNumber(today()) - dayNumber(d);
    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";
    return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  }
  function longLabel(d) {
    return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  function archiveDates() {
    var t = today(), span = Math.min(ARCHIVE_DAYS, dayNumber(t));
    var out = [];
    for (var i = 0; i <= span; i++) out.push(addDays(t, -i));
    return out;
  }

  /* ---------- persistence ---------- */
  function key(d) { return "namma-konnec-d-" + dateKey(d); }
  function save() {
    try { localStorage.setItem(key(playing), JSON.stringify(state)); } catch (e) {}
  }
  function load(d) {
    try { return JSON.parse(localStorage.getItem(key(d))); } catch (e) { return null; }
  }
  function statusOn(d) {
    var s = load(d);
    if (!s) return "new";
    if (s.solved && s.solved.length === 4) return s.mistakes > 0 ? "won" : "lost";
    if (s.mistakes <= 0) return "lost";
    // opening a date writes a board straight away, so an untouched one is still new
    if (!s.solved.length && s.mistakes === 4 && !(s.history || []).length) return "new";
    return "playing";
  }

  /* ---------- setup ---------- */
  function allWords(p) {
    return p.groups.reduce(function (a, g) { return a.concat(g.words); }, []);
  }
  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function groupOf(word) {
    return puzzle.groups.filter(function (g) { return g.words.indexOf(word) > -1; })[0];
  }

  /* A saved game only applies if it was saved against this exact board. Edit the
     puzzle bank and the old tiles are stale, so drop them. */
  function isCurrent(saved) {
    if (!saved || !saved.order || saved.order.length !== 16) return false;
    return saved.order.slice().sort().join("|") === allWords(puzzle).slice().sort().join("|");
  }

  function openDate(d) {
    var p = puzzleFor(d);
    if (!p) { d = today(); p = puzzleFor(d); }
    if (dayNumber(d) > dayNumber(today())) { d = today(); p = puzzleFor(d); }
    puzzle = p;
    playing = d;

    var saved = load(d);
    state = isCurrent(saved) ? saved
      : { order: shuffled(allWords(puzzle)), solved: [], mistakes: 4, history: [] };
    state.selected = [];
    save();

    try { localStorage.setItem("namma-konnec-open", dateKey(d)); } catch (e) {}
    $("#playing").textContent = shortLabel(d) + " · " + longLabel(d);
    render();
    if (state.solved.length === 4 || state.mistakes <= 0) {
      setTimeout(function () { showResults(); }, 450);
    }
  }

  /* ---------- render ---------- */
  var measure = document.createElement("canvas").getContext("2d");
  function fitAll() {
    var tiles = grid.querySelectorAll(".tile");
    for (var i = 0; i < tiles.length; i++) {
      var t = tiles[i];
      t.style.fontSize = "";
      var base = parseFloat(getComputedStyle(t).fontSize);
      var avail = t.clientWidth - 10;
      var words = t.dataset.word.split(" ");
      var longest = words.reduce(function (a, b) { return a.length >= b.length ? a : b; }, "");
      measure.font = "800 100px 'Libre Franklin', Helvetica, Arial, sans-serif";
      var unit = measure.measureText(longest).width / 100;
      var fit = unit > 0 ? avail / unit : base;
      t.style.fontSize = Math.max(8, Math.min(base, Math.floor(fit * 10) / 10)) + "px";
    }
  }

  function render() {
    solvedEl.innerHTML = "";
    state.solved.slice().sort(function (a, b) { return a - b; }).forEach(function (lv) {
      var g = puzzle.groups.filter(function (x) { return x.level === lv; })[0];
      var row = document.createElement("div");
      row.className = "solved-row lv" + lv;
      row.innerHTML = '<div class="cat"></div><div class="members"></div>';
      row.querySelector(".cat").textContent = g.name;
      row.querySelector(".members").textContent = g.words.join(", ");
      solvedEl.appendChild(row);
    });

    grid.innerHTML = "";
    remaining().forEach(function (w) {
      var b = document.createElement("button");
      b.className = "tile" + (state.selected.indexOf(w) > -1 ? " sel" : "");
      b.textContent = w;
      b.dataset.word = w;
      b.addEventListener("click", function () { toggle(w, b); });
      grid.appendChild(b);
    });

    dotsEl.innerHTML = "";
    for (var i = 0; i < 4; i++) {
      var dot = document.createElement("span");
      dot.className = "dot" + (i < state.mistakes ? "" : " gone");
      dotsEl.appendChild(dot);
    }

    fitAll();

    var over = state.solved.length === 4 || state.mistakes <= 0;
    submitBtn.disabled = state.selected.length !== 4 || over;
    deselectBtn.disabled = state.selected.length === 0 || over;
    shuffleBtn.disabled = over;
  }

  function remaining() {
    return state.order.filter(function (w) {
      return state.solved.indexOf(groupOf(w).level) === -1;
    });
  }

  function toggle(w, el) {
    if (busy || state.solved.length === 4 || state.mistakes <= 0) return;
    var i = state.selected.indexOf(w);
    if (i > -1) { state.selected.splice(i, 1); el.classList.remove("sel"); }
    else {
      if (state.selected.length === 4) return;
      state.selected.push(w);
      el.classList.add("sel", "pop");
      setTimeout(function () { el.classList.remove("pop"); }, 130);
    }
    submitBtn.disabled = state.selected.length !== 4;
    deselectBtn.disabled = state.selected.length === 0;
  }

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg, ms) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, ms || 1900);
  }

  function tilesFor(words) {
    return words.map(function (w) {
      return grid.querySelector('[data-word="' + w.replace(/"/g, '\\"') + '"]');
    }).filter(Boolean);
  }

  /* ---------- submit ---------- */
  function submit() {
    if (busy || state.selected.length !== 4) return;
    var picked = state.selected.slice();
    var levels = picked.map(function (w) { return groupOf(w).level; });
    var sig = picked.slice().sort().join("|");

    if (state.history.some(function (h) { return h.sig === sig; })) {
      toast("Already guessed, maga!");
      return;
    }

    busy = true;
    var tiles = tilesFor(picked);
    tiles.forEach(function (t, i) { setTimeout(function () { t.classList.add("bounce"); }, i * 100); });

    setTimeout(function () {
      tiles.forEach(function (t) { t.classList.remove("bounce"); });
      var counts = {};
      levels.forEach(function (l) { counts[l] = (counts[l] || 0) + 1; });
      var max = Math.max.apply(null, Object.keys(counts).map(function (k) { return counts[k]; }));
      state.history.push({ sig: sig, levels: levels });

      if (max === 4) {
        state.solved.push(levels[0]);
        state.selected = [];
        save(); render();
        busy = false;
        if (state.solved.length === 4) finish();
      } else {
        state.mistakes--;
        save();
        tiles.forEach(function (t) { t.classList.add("jiggle"); });
        if (max === 3) toast("Swalpa adjust maadi, one away!");
        setTimeout(function () {
          tiles.forEach(function (t) { t.classList.remove("jiggle"); });
          state.selected = state.mistakes <= 0 ? [] : state.selected;
          render();
          busy = false;
          if (state.mistakes <= 0) revealRest();
        }, 620);
      }
    }, 720);
  }

  function revealRest() {
    toast("Next time, bro.", 2400);
    var left = puzzle.groups
      .filter(function (g) { return state.solved.indexOf(g.level) === -1; })
      .sort(function (a, b) { return a.level - b.level; });
    left.forEach(function (g, i) {
      setTimeout(function () {
        state.solved.push(g.level);
        state.selected = [];
        save(); render();
        if (i === left.length - 1) finish();
      }, 900 + i * 750);
    });
  }

  function finish() { setTimeout(showResults, 900); }

  /* ---------- results ---------- */
  function emojiRows() {
    return state.history.map(function (h) {
      return h.levels.map(function (l) { return LEVEL_EMOJI[l]; }).join("");
    });
  }
  function shareText() {
    var won = state.mistakes > 0;
    /* the URL goes in: a score grid nobody can trace back is a wasted share */
    return "Namma Konnecshuns, " + longLabel(playing) + "\n" + emojiRows().join("\n") + "\n" +
      (won ? "Solved with " + state.mistakes + "/4 lives left \u{1F60E}" : "Kai kotta \u{1F62D}") +
      "\n" + SITE;
  }

  /* the most recent earlier date that has not been played */
  function nextUnplayed() {
    var dates = archiveDates();
    for (var i = 0; i < dates.length; i++) {
      if (dayNumber(dates[i]) >= dayNumber(playing)) continue;
      if (statusOn(dates[i]) === "new") return dates[i];
    }
    return null;
  }

  function showResults() {
    var won = state.mistakes > 0;
    $("#resTitle").textContent = won ? WIN_LINES[Math.max(0, 4 - state.mistakes)] : "Aiyyo!";
    $("#resSub").textContent = longLabel(playing) + (won ? "" : ". Ran out of chances.");

    var eg = $("#emojiGrid");
    eg.innerHTML = "";
    emojiRows().forEach(function (r) {
      var d = document.createElement("div");
      d.textContent = r;
      eg.appendChild(d);
    });

    var nxt = nextUnplayed(), nb = $("#nextBtn");
    if (nxt) {
      var gap = dayNumber(today()) - dayNumber(nxt);
      nb.style.display = "";
      nb.textContent = gap === 1 ? "Play yesterday's puzzle" : "Play " + shortLabel(nxt);
      nb.onclick = function () { closeAll(); openDate(nxt); };
    } else {
      nb.style.display = "none";
    }
    open($("#results"));
  }

  /* ---------- overlays ---------- */
  function open(el) { closeAll(); el.classList.add("open"); }
  function closeAll() {
    document.querySelectorAll(".overlay").forEach(function (o) { o.classList.remove("open"); });
  }

  function buildArchive() {
    var list = $("#plist");
    list.innerHTML = "";
    archiveDates().forEach(function (d) {
      var st = statusOn(d);
      var tag = { won: "Solved", lost: "Kai kotta", playing: "In progress", "new": "Not played" }[st];
      var b = document.createElement("button");
      b.className = "pitem" + (dateKey(d) === dateKey(playing) ? " active" : "");

      var left = document.createElement("span");
      var strong = document.createElement("b");
      strong.textContent = shortLabel(d);
      left.appendChild(strong);
      left.appendChild(document.createTextNode(" · #" + puzzleFor(d).id));

      var right = document.createElement("span");
      right.className = "tag" + (st === "won" ? " done" : st === "lost" ? " lost" : "");
      right.textContent = tag;

      b.appendChild(left);
      b.appendChild(right);
      b.onclick = function () { closeAll(); openDate(d); };
      list.appendChild(b);
    });
    open($("#archive"));
  }

  /* ---------- wiring ---------- */
  shuffleBtn.onclick = function () {
    if (busy) return;
    state.order = shuffled(state.order);
    save(); render();
  };
  deselectBtn.onclick = function () {
    if (busy) return;
    state.selected = [];
    render();
  };
  submitBtn.onclick = submit;
  $("#howBtn").onclick = function () { open($("#how")); };
  $("#archBtn").onclick = buildArchive;
  document.querySelectorAll("[data-close]").forEach(function (b) { b.onclick = closeAll; });

  $("#shareBtn").onclick = function () {
    var txt = shareText();
    if (navigator.share) { navigator.share({ text: txt }).catch(function () {}); return; }
    navigator.clipboard.writeText(txt).then(
      function () {
        $("#shareBtn").textContent = "Copied!";
        setTimeout(function () { $("#shareBtn").textContent = "Share results"; }, 1600);
      },
      function () { window.prompt("Copy your results:", txt); }
    );
  };
  $("#replayBtn").onclick = function () {
    try { localStorage.removeItem(key(playing)); } catch (e) {}
    closeAll(); openDate(playing);
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll();
    if (e.key === "Enter" && !submitBtn.disabled) submit();
  });

  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(fitAll, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAll);

  $("#today").textContent = longLabel(today());

  /* Reopen where you left off, but only for a date still in the archive window,
     and never a date from before the game existed. */
  var startAt = today();
  try {
    var was = fromKey(localStorage.getItem("namma-konnec-open"));
    if (was && dayNumber(was) >= 0 && dayNumber(today()) - dayNumber(was) <= ARCHIVE_DAYS) startAt = was;
  } catch (e) {}
  openDate(startAt);

  try {
    if (!localStorage.getItem("namma-konnec-seen")) {
      open($("#how"));
      localStorage.setItem("namma-konnec-seen", "1");
    }
  } catch (e) {}
})();
