/* Namma Konnecshuns, game logic */
(function () {
  "use strict";

  var LEVEL_EMOJI = ["\u{1F7E8}", "\u{1F7E9}", "\u{1F7E6}", "\u{1F7EA}"];
  var WIN_LINES = ["Sakkath! Zero tappu.", "Full solid, bro.", "Chennagide!", "Just about escaped, macha."];

  var $ = function (s) { return document.querySelector(s); };
  var grid = $("#grid"), solvedEl = $("#solved"), toastEl = $("#toast");
  var dotsEl = $("#dots"), shuffleBtn = $("#shuffle"), deselectBtn = $("#deselect"), submitBtn = $("#submit");

  var puzzle, state, busy = false;

  /* ---------- persistence ---------- */
  function key(id) { return "namma-konnec-" + id; }
  function save() {
    try { localStorage.setItem(key(puzzle.id), JSON.stringify(state)); } catch (e) {}
  }
  function load(id) {
    try { return JSON.parse(localStorage.getItem(key(id))); } catch (e) { return null; }
  }
  function statusOf(id) {
    var s = load(id);
    if (!s) return "new";
    if (s.solved.length === 4) return s.mistakes > 0 ? "won" : "lost";
    if (s.mistakes <= 0) return "lost";
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

  /* A saved game only applies if it was saved against this exact puzzle.
     Edit the puzzle bank and the old board is stale, so drop it. */
  function isCurrent(saved) {
    if (!saved || !saved.order || saved.order.length !== 16) return false;
    var current = allWords(puzzle).slice().sort().join("|");
    return saved.order.slice().sort().join("|") === current;
  }

  function startPuzzle(id) {
    puzzle = PUZZLES.filter(function (p) { return p.id === id; })[0] || PUZZLES[0];
    var saved = load(puzzle.id);
    if (saved && isCurrent(saved)) {
      state = saved;
    } else {
      state = { order: shuffled(allWords(puzzle)), solved: [], mistakes: 4, history: [] };
      save();
    }
    state.selected = [];
    try { localStorage.setItem("namma-konnec-last", String(puzzle.id)); } catch (e) {}
    $("#puzzleName").textContent = "Puzzle #" + puzzle.id + " · " + puzzle.name;
    render();
    if (state.solved.length === 4 || state.mistakes <= 0) setTimeout(function () { showResults(true); }, 450);
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
    // solved rows
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

    // remaining tiles
    grid.innerHTML = "";
    remaining().forEach(function (w) {
      var b = document.createElement("button");
      b.className = "tile" + (state.selected.indexOf(w) > -1 ? " sel" : "");
      b.textContent = w;
      b.dataset.word = w;
      b.addEventListener("click", function () { toggle(w, b); });
      grid.appendChild(b);
    });

    // mistakes
    dotsEl.innerHTML = "";
    for (var i = 0; i < 4; i++) {
      var d = document.createElement("span");
      d.className = "dot" + (i < state.mistakes ? "" : " gone");
      dotsEl.appendChild(d);
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
    return words.map(function (w) { return grid.querySelector('[data-word="' + w.replace(/"/g, '\\"') + '"]'); }).filter(Boolean);
  }

  /* ---------- submit ---------- */
  function submit() {
    if (busy || state.selected.length !== 4) return;
    var picked = state.selected.slice();
    var levels = picked.map(function (w) { return groupOf(w).level; });
    var sig = levels.slice().sort().join("|") + "::" + picked.slice().sort().join("|");

    if (state.history.some(function (h) { return h.sig === sig; })) {
      toast("Already guessed, maga!");
      return;
    }

    busy = true;
    var tiles = tilesFor(picked);
    tiles.forEach(function (t, i) {
      setTimeout(function () { t.classList.add("bounce"); }, i * 100);
    });

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
        if (state.solved.length === 4) { busy = false; finish(true); return; }
        busy = false;
      } else {
        state.mistakes--;
        save();
        tiles.forEach(function (t) { t.classList.add("jiggle"); });
        if (max === 3) toast("Swalpa adjust maadi, one away!");
        setTimeout(function () {
          tiles.forEach(function (t) { t.classList.remove("jiggle"); });
          if (state.mistakes <= 0) {
            state.selected = [];
            render();
            busy = false;
            revealRest();
          } else {
            render();
            busy = false;
          }
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
        if (i === left.length - 1) finish(false);
      }, 900 + i * 750);
    });
  }

  function finish(won) {
    setTimeout(function () { showResults(false, won); }, 900);
  }

  /* ---------- results ---------- */
  function emojiRows() {
    return state.history.map(function (h) {
      return h.levels.map(function (l) { return LEVEL_EMOJI[l]; }).join("");
    });
  }
  function shareText() {
    var won = state.mistakes > 0;
    return "Namma Konnecshuns #" + puzzle.id + ": " + puzzle.name + "\n" +
      emojiRows().join("\n") + "\n" +
      (won ? "Solved with " + state.mistakes + "/4 lives left \u{1F60E}" : "Kai kotta \u{1F62D}");
  }

  function showResults(quiet, wonArg) {
    var won = wonArg !== undefined ? wonArg : state.mistakes > 0;
    $("#resTitle").textContent = won ? WIN_LINES[Math.max(0, 4 - state.mistakes)] : "Aiyyo!";
    $("#resSub").textContent = won
      ? "Puzzle #" + puzzle.id + " · " + puzzle.name
      : "Ran out of chances on Puzzle #" + puzzle.id + ".";
    var eg = $("#emojiGrid");
    eg.innerHTML = "";
    emojiRows().forEach(function (r) {
      var d = document.createElement("div");
      d.textContent = r;
      eg.appendChild(d);
    });
    var nxt = PUZZLES.filter(function (p) { return statusOf(p.id) === "new"; })[0];
    var nb = $("#nextBtn");
    if (nxt) { nb.style.display = ""; nb.onclick = function () { closeAll(); startPuzzle(nxt.id); }; }
    else nb.style.display = "none";
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
    PUZZLES.forEach(function (p) {
      var st = statusOf(p.id);
      var label = { won: "Solved", lost: "Kai kotta", playing: "In progress", "new": "Not played" }[st];
      var b = document.createElement("button");
      b.className = "pitem" + (puzzle && p.id === puzzle.id ? " active" : "");
      var left = document.createElement("span");
      left.innerHTML = "<b>#" + p.id + "</b> ";
      left.appendChild(document.createTextNode(p.name));
      var right = document.createElement("span");
      right.className = "tag" + (st === "won" ? " done" : st === "lost" ? " lost" : "");
      right.textContent = label;
      b.appendChild(left);
      b.appendChild(right);
      b.onclick = function () { closeAll(); startPuzzle(p.id); };
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
      function () { $("#shareBtn").textContent = "Copied!"; setTimeout(function () { $("#shareBtn").textContent = "Share results"; }, 1600); },
      function () { window.prompt("Copy your results:", txt); }
    );
  };
  $("#replayBtn").onclick = function () {
    try { localStorage.removeItem(key(puzzle.id)); } catch (e) {}
    closeAll(); startPuzzle(puzzle.id);
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll();
    if (e.key === "Enter" && !submitBtn.disabled) submit();
  });

  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(fitAll, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAll);

  $("#today").textContent = new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" });

  var last = 1;
  try { last = parseInt(localStorage.getItem("namma-konnec-last"), 10) || 1; } catch (e) {}
  startPuzzle(last);
  try {
    if (!localStorage.getItem("namma-konnec-seen")) {
      open($("#how"));
      localStorage.setItem("namma-konnec-seen", "1");
    }
  } catch (e) {}
})();
