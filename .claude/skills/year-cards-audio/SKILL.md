---
name: year-cards-audio
description: Turn the user's master data.js of historical events ({ year, title, description }) into spoken MP3 "year cards" for memorizing — macOS voice Daniel, 3.5-second recall pause, soft bell between years, 50 year cards per file. Use this whenever the user asks to make, regenerate or update their memorization audio, MP3s, audio cards, listening files or "the audio" from data.js, or wants to hear their events/years read out, even if they don't mention MP3 or the voice by name.
compatibility: Runs on macOS (needs the built-in `say` command with the Daniel voice), Node.js 18+ and ffmpeg.
---

# Year cards audio

The user memorizes historical events by year. Their source of truth is a `data.js` file in their repository, where each event has exactly `year`, `title` and `description`, and several events can share a year. This skill turns that file into MP3s they can listen to, using the bundled script `scripts/build_audio.mjs`, which does all the parsing, wording and audio work. Use the script rather than writing new code, so every run sounds the same.

## What each year card sounds like

Cards are in chronological order, one card per year, with every title from that year on the same card:

1. The year, spoken naturally ("eleven forty", "twelve oh five", "eleven hundred", "one thousand", "two thousand").
2. A 3.5-second recall pause, so the listener can try to remember that year's events.
3. All titles for that year, read as short sentences in their data.js order. Descriptions are never read.
4. The year again.
5. A soft synthesized bell, then the next card.

There is only a short breath (0.4 s) between steps 3, 4 and 5, so the card flows at a normal pace. Each MP3 holds 50 year cards (a year is never split across files) and is named after its year range, e.g. `part-01_1064-1120.mp3`.

## Steps

1. **Find data.js.** Use the path the user gives. Otherwise look for the master `data.js` in the repository (skip `node_modules`, `dist` and build folders); if there is more than one candidate, ask which one. Read it, never edit it: the script also checks that the file is byte-for-byte unchanged after the run.
2. **Pick the output folder.** Use the folder the user names; otherwise default to an `audio/` folder next to data.js. It must not be the folder data.js lives in. Earlier MP3s from this skill in that folder (`part-NN_YYYY-YYYY.mp3`) are replaced so no stale parts are left behind; mention this if the folder already has some.
3. **Dry run first.** Run
   `node <skill-dir>/scripts/build_audio.mjs --input <data.js> --out <folder> --dry-run`
   It prints how many events, year cards and files there will be, plus the exact spoken text of every card. Skim it for anything odd (a year read wrongly, a title with stray markup or an abbreviation `say` might stumble over) and tell the user before rendering if you see a problem. If the script reports entries it can't read, show the user which items and stop; don't guess fixes to their data.
4. **Render.** Run the same command without `--dry-run`. It usually takes well under a minute per file of 50 cards. The script checks for ffmpeg and the Daniel voice first and prints a clear fix if either is missing:
   - ffmpeg missing → `brew install ffmpeg` (ask before installing anything).
   - Daniel missing → System Settings › Accessibility › Spoken Content › System Voice › Manage Voices › English (UK) › Daniel.
5. **Report back** in a couple of lines: how many files, where they are, their year ranges and lengths (the script prints these).

## Options

Only change these when the user asks:

| Option | Default | Meaning |
|---|---|---|
| `--per-file` | 50 | Year cards per MP3 |
| `--recall` | 3.5 | Recall pause after the year, in seconds |
| `--gap` | 0.4 | Short breath between titles, year repeat and bell |
| `--voice` | Daniel | macOS voice (`say -v '?'` lists installed ones) |
| `--prefix` | part | File name prefix |

## If something goes wrong

- *"Could not find any events"*: the file uses a structure the parser doesn't recognise. Open data.js, see how the array is declared, and tell the user what you found. The parser handles `export const x = [...]`, `export default [...]`, `const x = [...]` and `module.exports = [...]`.
- *Years outside 1000–2099* are rejected on purpose: the user's data only covers 1000–2000, so such a value is almost certainly a typo worth flagging.
- *Not on a Mac*: `say` and the Daniel voice only exist on macOS. A dry run still works anywhere, so you can show the user the script text, but tell them the audio has to be rendered on their Mac.
