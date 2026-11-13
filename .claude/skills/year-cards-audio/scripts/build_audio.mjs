#!/usr/bin/env node
// Build spoken "year card" MP3s from a data.js file of { year, title, description } events.
//
// Card structure (per year, chronological):
//   year  ->  3.5 s recall pause  ->  all titles of that year  ->  year again  ->  soft bell
//
// Usage:
//   node build_audio.mjs --input path/to/data.js --out path/to/audio [options]
//
// Options:
//   --input <file>      data.js to read (never modified)                  [required]
//   --out <dir>         output directory for the MP3s                     [default: <input dir>/audio]
//   --per-file <n>      year cards per MP3                                [default: 50]
//   --voice <name>      macOS voice                                       [default: Daniel]
//   --recall <sec>      recall pause after announcing the year            [default: 3.5]
//   --gap <sec>         short breath between segments (not a recall pause)[default: 0.4]
//   --prefix <name>     file name prefix                                  [default: part]
//   --dry-run           print the spoken script and file split, render no audio
//
// Requires on macOS: `say` (built in) and `ffmpeg` (brew install ffmpeg).

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import vm from "node:vm";
import { execFileSync, spawnSync } from "node:child_process";

// ---------- arguments ----------
function parseArgs(argv) {
  const opts = {
    perFile: 50, voice: "Daniel", recall: 3.5, gap: 0.4, prefix: "part", dryRun: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => {
      if (i + 1 >= argv.length) fail(`Missing value for ${a}`);
      return argv[++i];
    };
    switch (a) {
      case "--input": opts.input = next(); break;
      case "--out": opts.out = next(); break;
      case "--per-file": opts.perFile = parseInt(next(), 10); break;
      case "--voice": opts.voice = next(); break;
      case "--recall": opts.recall = parseFloat(next()); break;
      case "--gap": opts.gap = parseFloat(next()); break;
      case "--prefix": opts.prefix = next(); break;
      case "--dry-run": opts.dryRun = true; break;
      case "-h": case "--help":
        console.log(fs.readFileSync(new URL(import.meta.url)).toString().split("\n")
          .filter((l) => l.startsWith("//")).map((l) => l.slice(3)).join("\n"));
        process.exit(0);
      default: fail(`Unknown option: ${a}`);
    }
  }
  if (!opts.input) fail("Please pass --input path/to/data.js");
  if (!Number.isInteger(opts.perFile) || opts.perFile < 1) fail("--per-file must be a positive integer");
  if (!(opts.recall >= 0) || !(opts.gap >= 0)) fail("--recall and --gap must be zero or more seconds");
  opts.input = path.resolve(opts.input);
  opts.out = path.resolve(opts.out ?? path.join(path.dirname(opts.input), "audio"));
  return opts;
}

function fail(msg) {
  console.error(`Error: ${msg}`);
  process.exit(1);
}

// ---------- reading data.js ----------
const looksLikeEvents = (v) =>
  Array.isArray(v) && v.length > 0 &&
  v.every((e) => e && typeof e === "object" && "year" in e && "title" in e);

// Evaluate the file in a sandbox (after turning ES-module syntax into plain declarations)
// and pick the array of events. Falls back to a text scan if evaluation is not possible.
function loadEvents(file) {
  const src = fs.readFileSync(file, "utf8");

  try {
    // Only rewrite at the start of a line, so words like "let" inside titles are never touched.
    const code = src
      .replace(/^\s*import\s[^;]*;?\s*$/gm, "")
      .replace(/^(\s*)export\s+default\s+/gm, "$1globalThis.__default = ")
      .replace(/^(\s*)export\s+(const|let|var)\s+/gm, "$1var ")
      .replace(/^(\s*)export\s*\{[^}]*\};?/gm, "$1")
      .replace(/^(\s*)(const|let)\s+/gm, "$1var ") // make top-level bindings visible on the context
      .replace(/^(\s*)module\.exports\s*=/gm, "$1globalThis.__default =");
    const ctx = { module: { exports: {} }, exports: {}, console: { log() {}, warn() {} } };
    ctx.globalThis = ctx;
    vm.createContext(ctx);
    vm.runInContext(code, ctx, { timeout: 5000 });
    const candidates = [ctx.__default, ...Object.values(ctx), ...Object.values(ctx.module.exports ?? {})];
    const found = candidates.filter(looksLikeEvents).sort((a, b) => b.length - a.length)[0];
    if (found) return found;
  } catch {
    /* fall through to the text scan */
  }

  // Fallback: scan for { year: N, title: "..." } objects in the text.
  const events = [];
  const re = /\{\s*year\s*:\s*(\d{3,4})\s*,\s*title\s*:\s*(["'`])((?:\\.|(?!\2).)*)\2/gs;
  for (const m of src.matchAll(re)) {
    events.push({ year: Number(m[1]), title: m[3].replace(/\\(.)/g, "$1") });
  }
  if (events.length) return events;
  fail(`Could not find any { year, title, description } events in ${file}`);
}

function validate(events) {
  const problems = [];
  events.forEach((e, i) => {
    const y = Number(e.year);
    if (!Number.isInteger(y)) problems.push(`item ${i + 1}: year "${e.year}" is not a whole number`);
    else if (y < 1000 || y > 2099) problems.push(`item ${i + 1}: year ${y} is outside 1000-2099`);
    if (typeof e.title !== "string" || !e.title.trim()) problems.push(`item ${i + 1} (${e.year}): missing title`);
  });
  if (problems.length) fail(`data.js has entries this skill cannot read:\n  ${problems.join("\n  ")}`);
}

// ---------- year cards ----------
function buildCards(events) {
  const byYear = new Map();
  // Stable: titles keep their data.js order within a year.
  for (const e of events) {
    const y = Number(e.year);
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y).push(e.title.trim());
  }
  return [...byYear.entries()].sort((a, b) => a[0] - b[0]).map(([year, titles]) => ({ year, titles }));
}

// ---------- natural year wording ----------
const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function twoDigits(n) {
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? " " + ONES[n % 10] : "");
}

// 1140 -> "eleven forty", 1205 -> "twelve oh five", 1100 -> "eleven hundred",
// 1000 -> "one thousand", 2000 -> "two thousand", 2008 -> "two thousand eight"
export function yearToWords(y) {
  if (y === 1000) return "one thousand";
  if (y >= 2000 && y <= 2009) return y === 2000 ? "two thousand" : `two thousand ${ONES[y - 2000]}`;
  const hi = Math.floor(y / 100);
  const lo = y % 100;
  if (lo === 0) return `${twoDigits(hi)} hundred`;
  if (lo < 10) return `${twoDigits(hi)} oh ${ONES[lo]}`;
  return `${twoDigits(hi)} ${twoDigits(lo)}`;
}

// Titles are read as one natural sentence sequence; add a full stop where one is missing
// so `say` leaves its normal sentence break between titles.
function titlesSentence(titles) {
  return titles.map((t) => (/[.!?]$/.test(t) ? t : `${t}.`)).join(" ");
}

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

// ---------- audio helpers ----------
const RATE = 44100;

function run(cmd, args) {
  const r = spawnSync(cmd, args, { encoding: "utf8" });
  if (r.error) fail(`Could not run ${cmd}: ${r.error.message}`);
  if (r.status !== 0) fail(`${cmd} failed:\n${(r.stderr || r.stdout || "").slice(-2000)}`);
  return r.stdout;
}

function checkTools(voice) {
  try { execFileSync("ffmpeg", ["-version"], { stdio: "ignore" }); }
  catch { fail("ffmpeg is not installed. Install it with:  brew install ffmpeg"); }
  let voices;
  try { voices = execFileSync("say", ["-v", "?"], { encoding: "utf8" }); }
  catch { fail("The macOS `say` command is not available. This step has to run on a Mac."); }
  const has = voices.split("\n").some((l) => {
    const name = l.split(/\s{2,}/)[0].trim();
    return name === voice || name.replace(/\s*\(.*\)$/, "") === voice;
  });
  if (!has) {
    fail(`The voice "${voice}" is not installed. Add it in System Settings > Accessibility > ` +
      `Spoken Content > System Voice > Manage Voices (English (UK) > ${voice}), then run again.`);
  }
}

// Every segment is normalised to 44.1 kHz mono 16-bit WAV so the concat is seamless.
// Leading/trailing silence that `say` adds is trimmed, so the 3.5 s recall pause is exactly 3.5 s.
const TRIM = "silenceremove=start_periods=1:start_threshold=-55dB,areverse," +
  "silenceremove=start_periods=1:start_threshold=-55dB,areverse";
function toWav(src, dst) {
  run("ffmpeg", ["-y", "-loglevel", "error", "-i", src, "-af", TRIM,
    "-ar", String(RATE), "-ac", "1", "-c:a", "pcm_s16le", dst]);
}

function silence(sec, dst) {
  run("ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", `anullsrc=r=${RATE}:cl=mono`,
    "-t", sec.toFixed(3), "-c:a", "pcm_s16le", dst]);
}

// Soft bell: E5 fundamental with inharmonic bell partials, 8 ms attack, gentle exponential decay.
function chime(dst) {
  const f = 659.25;
  const expr =
    `min(1\\,t/0.008)*exp(-2.6*t)*0.16*(` +
    `sin(2*PI*${f}*t)+0.45*sin(2*PI*${(f * 2.0).toFixed(2)}*t)*exp(-1.5*t)` +
    `+0.22*sin(2*PI*${(f * 2.76).toFixed(2)}*t)*exp(-3*t)+0.1*sin(2*PI*${(f * 5.4).toFixed(2)}*t)*exp(-5*t))`;
  run("ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi",
    "-i", `aevalsrc=${expr}:s=${RATE}:d=1.8`, "-ac", "1", "-c:a", "pcm_s16le", dst]);
}

function makeSpeaker(voice, dir) {
  const cache = new Map();
  let n = 0;
  return (text) => {
    if (cache.has(text)) return cache.get(text);
    const id = String(n++).padStart(5, "0");
    const aiff = path.join(dir, `s${id}.aiff`);
    const wav = path.join(dir, `s${id}.wav`);
    run("say", ["-v", voice, "-o", aiff, text]);
    toWav(aiff, wav);
    fs.rmSync(aiff, { force: true });
    cache.set(text, wav);
    return wav;
  };
}

// ---------- main ----------
function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(opts.input)) fail(`File not found: ${opts.input}`);

  const before = fs.readFileSync(opts.input);
  const events = loadEvents(opts.input);
  validate(events);
  const cards = buildCards(events);
  const parts = chunk(cards, opts.perFile);
  const pad = Math.max(2, String(parts.length).length);
  const fileName = (i, part) =>
    `${opts.prefix}-${String(i + 1).padStart(pad, "0")}_${part[0].year}-${part[part.length - 1].year}.mp3`;

  console.log(`Read ${events.length} events -> ${cards.length} year cards -> ${parts.length} MP3 file(s) ` +
    `of up to ${opts.perFile} cards.`);

  if (opts.dryRun) {
    parts.forEach((part, i) => {
      console.log(`\n=== ${fileName(i, part)} (${part.length} cards) ===`);
      for (const c of part) {
        const w = yearToWords(c.year);
        console.log(`[${c.year}] "${w}" | pause ${opts.recall}s | "${titlesSentence(c.titles)}" | "${w}" | chime`);
      }
    });
    return;
  }

  checkTools(opts.voice);
  fs.mkdirSync(opts.out, { recursive: true });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "year-cards-"));
  try {
    const recallWav = path.join(tmp, "recall.wav");
    const gapWav = path.join(tmp, "gap.wav");
    const chimeWav = path.join(tmp, "chime.wav");
    const leadWav = path.join(tmp, "lead.wav");
    silence(opts.recall, recallWav);
    silence(opts.gap, gapWav);
    silence(0.8, leadWav);
    chime(chimeWav);
    const speak = makeSpeaker(opts.voice, tmp);

    // Remove MP3s from an earlier run with this prefix, so a shorter rerun leaves no stale parts.
    const ours = new RegExp(`^${opts.prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-\\d+_\\d{4}-\\d{4}\\.mp3$`);
    for (const f of fs.readdirSync(opts.out)) if (ours.test(f)) fs.rmSync(path.join(opts.out, f));

    parts.forEach((part, i) => {
      const list = [leadWav];
      for (const c of part) {
        const year = speak(yearToWords(c.year));
        list.push(year, recallWav, speak(titlesSentence(c.titles)), gapWav, year, gapWav, chimeWav, gapWav);
      }
      const listFile = path.join(tmp, `list-${i}.txt`);
      fs.writeFileSync(listFile, list.map((f) => `file '${f.replace(/'/g, "'\\''")}'`).join("\n"));
      const outFile = path.join(opts.out, fileName(i, part));
      run("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", listFile,
        "-c:a", "libmp3lame", "-q:a", "2",
        "-metadata", `title=Year cards ${part[0].year}-${part[part.length - 1].year}`,
        "-metadata", `track=${i + 1}/${parts.length}`, outFile]);
      const secs = parseFloat(run("ffprobe", ["-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", outFile]));
      const shown = path.relative(process.cwd(), outFile);
      console.log(`  wrote ${shown.startsWith("..") ? outFile : shown}  ` +
        `(${part.length} cards, ${Math.floor(secs / 60)}:${String(Math.round(secs % 60)).padStart(2, "0")})`);
    });
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }

  if (!before.equals(fs.readFileSync(opts.input))) fail("data.js changed during the run — this should never happen.");
  console.log(`Done. MP3s are in ${opts.out}`);
}

main();
