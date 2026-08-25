/* Validates the puzzle bank. Run: node tools/check.js */
const fs = require("fs");
const path = require("path");
const src = fs.readFileSync(path.join(__dirname, "..", "puzzles.js"), "utf8");
const PUZZLES = new Function(src + "; return PUZZLES;")();

const fail = [];
const warn = [];

PUZZLES.forEach(function (p) {
  const at = "#" + p.id;
  if (p.groups.length !== 4) fail.push(at + " has " + p.groups.length + " groups, expected 4");

  const levels = p.groups.map(function (g) { return g.level; }).sort().join("");
  if (levels !== "0123") fail.push(at + " levels are " + levels + ", expected one of each 0-3");

  const domains = p.groups.map(function (g) { return g.domain; });
  domains.forEach(function (d, i) {
    if (domains.indexOf(d) !== i) fail.push(at + " repeats domain " + d + "; puzzles must mix domains");
  });

  const words = [];
  p.groups.forEach(function (g) {
    if (g.words.length !== 4) fail.push(at + " " + g.name + " has " + g.words.length + " words");
    g.words.forEach(function (w) {
      if (words.indexOf(w) > -1) fail.push(at + " repeats the tile " + w);
      words.push(w);
      if (w.split(" ").some(function (t) { return t.length > 15; })) {
        warn.push(at + " long tile " + w + " will shrink a lot");
      }
    });
  });
});

const ids = PUZZLES.map(function (p) { return p.id; });
ids.forEach(function (id, i) { if (ids.indexOf(id) !== i) fail.push("duplicate id " + id); });

const seen = {};
PUZZLES.forEach(function (p) {
  p.groups.forEach(function (g) {
    if (seen[g.name]) fail.push("category used twice: " + g.name);
    seen[g.name] = true;
  });
});

warn.forEach(function (w) { console.log("warn  " + w); });
fail.forEach(function (f) { console.log("FAIL  " + f); });
console.log(fail.length
  ? fail.length + " problem(s) in " + PUZZLES.length + " puzzles"
  : PUZZLES.length + " puzzles, " + PUZZLES.length * 16 + " tiles, all valid");
process.exit(fail.length ? 1 : 0);
