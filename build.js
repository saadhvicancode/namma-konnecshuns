/* Inlines CSS + JS into one self-contained page for publishing. */
const fs = require("fs");
const path = require("path");
const dir = __dirname;

const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const css = fs.readFileSync(path.join(dir, "style.css"), "utf8");
const js = fs.readFileSync(path.join(dir, "puzzles.js"), "utf8") + "\n" +
           fs.readFileSync(path.join(dir, "app.js"), "utf8");

// keep only what lives inside <body>, then re-attach title + font link + inlined assets
const body = html.split("<body>")[1].split("</body>")[0]
  .replace(/<script src="[^"]+"><\/script>\s*/g, "");

// The artifact wrapper owns <head>, so we cannot declare a charset. Escape
// every non-ASCII character instead of relying on the server sending UTF-8.
const escJs = (t) => t.replace(/[\u0080-\uFFFF]/g, (c) =>
  "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));
const escHtml = (t) => Array.from(t).map((c) => {
  const cp = c.codePointAt(0);
  return cp > 127 ? "&#x" + cp.toString(16) + ";" : c;
}).join("");

const out = [
  "<title>Namma Konnecshuns</title>",
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@700;800&family=Libre+Franklin:wght@400;500;600;700;800&display=swap" rel="stylesheet">',
  "<style>\n" + css + "\n</style>",
  escHtml(body.trim()),
  "<script>\n" + escJs(js) + "\n</script>",
  ""
].join("\n");

fs.writeFileSync(path.join(dir, "konnecshuns.artifact.html"), out);
console.log("built konnecshuns.artifact.html — " + (out.length / 1024).toFixed(1) + " KB");
