/* Prerender: bakes JS-built content into the static HTML so crawlers (Google, AI bots)
   that don't run JavaScript can read it. Idempotent — re-run any time content changes.
   Usage:  node tools/prerender.mjs            (all pages)
           node tools/prerender.mjs services/carpet-cleaning.html
   Needs Google Chrome installed. The site's own JS still runs on top and simply replaces
   the same content, so behaviour is unchanged. */
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, statSync } from "node:fs";
import { join, extname, resolve } from "node:path";
import { tmpdir } from "node:os";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const SKIP = new Set(["admin.html", "post.html", "thank-you.html"]);
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain" };

const MARK = /<!--prerender:([\w-]+)-->[\s\S]*?<!--\/prerender:\1-->/g;
const strip = (html) => html.replace(MARK, "");

function listPages() {
  const out = [];
  for (const f of readdirSync(ROOT)) if (f.endsWith(".html") && !SKIP.has(f)) out.push(f);
  for (const d of ["services", "areas", "blog"]) for (const f of readdirSync(join(ROOT, d))) if (f.endsWith(".html")) out.push(`${d}/${f}`);
  return out;
}

// Static server that always serves the *stripped* source, so Chrome renders from a clean slate.
const server = createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = join(ROOT, p);
  if (!file.startsWith(ROOT) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); return res.end(); }
  let body = readFileSync(file);
  const type = MIME[extname(file)] || "application/octet-stream";
  if (extname(file) === ".html") body = Buffer.from(strip(body.toString("utf8")));
  res.writeHead(200, { "content-type": type, "cache-control": "no-store" });
  res.end(body);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const PORT = server.address().port;

const PROFILE = mkdtempSync(join(tmpdir(), "prerender-"));
const DEBUG = 9333;
const chrome = spawn(CHROME, [
  "--headless=new", `--remote-debugging-port=${DEBUG}`, `--user-data-dir=${PROFILE}`,
  "--no-first-run", "--disable-gpu", "--window-size=1440,900",
  // keep render-time hits out of analytics / third-party widgets / form services
  "--host-resolver-rules=MAP www.googletagmanager.com ~NOTFOUND, MAP *.google-analytics.com ~NOTFOUND, MAP *.doubleclick.net ~NOTFOUND, MAP cdn.trustindex.io ~NOTFOUND, MAP formsubmit.co ~NOTFOUND, MAP *.googleadservices.com ~NOTFOUND",
  "about:blank",
], { stdio: "ignore" });

async function cdpConnect() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${DEBUG}/json/list`)).json();
      const page = list.find((t) => t.type === "page");
      if (page) return new WebSocket(page.webSocketDebuggerUrl);
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("Chrome did not start");
}
const ws = await cdpConnect();
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map(); const waiters = [];
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  else if (d.method) waiters.forEach((w) => w(d));
};
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const once = (method) => new Promise((r) => { const w = (d) => { if (d.method === method) { waiters.splice(waiters.indexOf(w), 1); r(d); } }; waiters.push(w); });
await send("Page.enable"); await send("Runtime.enable");

// Runs in the page: for every id'd element that is EMPTY in the raw source but populated by JS, capture its HTML.
const EXTRACT = `(async () => {
  const raw = await (await fetch(location.pathname, { cache: "no-store" })).text();
  const doc = new DOMParser().parseFromString(raw, "text/html");
  const out = {};
  doc.querySelectorAll("[id]").forEach((el) => {
    if (el.children.length || el.textContent.trim()) return;
    const live = document.getElementById(el.id);
    if (live && live.children.length) out[el.id] = live.innerHTML;
  });
  return JSON.stringify(out);
})()`;

function fillCounters(html) {
  return html.replace(/(<span[^>]*\bdata-count="([\d.]+)"([^>]*)>)0(<\/span>)/g, (m, open, n, rest, close) => {
    const suffix = (open.match(/data-suffix="([^"]*)"/) || [])[1] || "";
    return open + parseFloat(n).toLocaleString("en-GB") + suffix + close;
  });
}

const pages = process.argv.length > 2 ? process.argv.slice(2) : listPages();
let changed = 0;
for (const page of pages) {
  const file = join(ROOT, page);
  const src = strip(readFileSync(file, "utf8"));
  const loaded = once("Page.loadEventFired");
  await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/${page}` });
  await loaded;
  await new Promise((r) => setTimeout(r, 1200)); // let DOMContentLoaded renderers + inline scripts finish
  const res = await send("Runtime.evaluate", { expression: EXTRACT, awaitPromise: true, returnByValue: true });
  const filled = JSON.parse(res.result.result.value || "{}");
  let html = src, n = 0;
  for (const [elId, content] of Object.entries(filled)) {
    const re = new RegExp(`(<([a-zA-Z0-9]+)[^>]*\\bid="${elId}"[^>]*>)(\\s*)(</\\2>)`);
    if (!re.test(html)) continue;
    html = html.replace(re, (m, open, tag, ws2, close) => `${open}<!--prerender:${elId}-->${content}<!--/prerender:${elId}-->${close}`);
    n++;
  }
  html = fillCounters(html);
  if (html !== readFileSync(file, "utf8")) { writeFileSync(file, html); changed++; }
  console.log(`${page}: ${n} region(s) prerendered`);
}
console.log(`\nDone — ${changed} file(s) updated of ${pages.length}.`);
ws.close(); chrome.kill(); server.close(); process.exit(0);
