# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Project Millenia is a private PWA for memorizing historical events by year. It is plain HTML, CSS and JavaScript with no framework or dependencies. The folder is not a git repo, so there is no history to restore edits from.

## Commands

There is no build, lint or test tooling. Run the app by serving the project root:

```sh
python3 -m http.server 8765
```

Then open http://localhost:8765/. Opening `index.html` as a `file://` URL loads the app, but the service worker won't register.

Node is not installed on the development machine. To exercise the app without a person clicking, use the installed Chrome in headless mode. Put any test files outside the project folder. Headless Chrome has two quirks here:
- It may not exit after `--dump-dom` or `--screenshot`, so run it under a time limit: `perl -e 'alarm 15; exec @ARGV' "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new ...`
- `--window-size` doesn't reliably go below about 500px wide. To test phone widths, load the app in a 400px iframe inside a wrapper page.

## Architecture

- **Script loading:** `index.html` loads `data.js` and then `app.js` as classic scripts. They share the global `YEAR_EVENTS` array, with no modules or imports.
- **Screens:** there is no router. Every screen is a `<section>` in `index.html`, and functions in `app.js` such as `showHome` and `chooseQuiz` toggle the `.hidden` class. Each of these functions lists which sections to hide, so a new screen must be added to all of them.
- **State:** quiz and swipe state live in module-level `let` variables in `app.js`. Only starred years persist, in `localStorage` under `millenia.starredYears`.

### Data model

`data.js` holds entries of `{ year, title, description }`, sorted by year. A year may have several entries.

Cards are per year, not per event. `groupEventsByYear` merges a year's entries into one quiz card, and stars are stored by year number. Swipe Mode looks up a year's events with `eventsForYear`.

Categories live in `tags.js` (loaded between `data.js` and `app.js`). `TAG_GROUPS` lists the categories in their display groups, and `YEAR_TAGS` maps a year to at most 3 of them. A year missing from `YEAR_TAGS` counts as "Other". Quiz by Year and Quiz by Event filter by the selected categories, where a year matches if it has any selected tag. The selection persists in `localStorage` under `millenia.selectedTags`. A year added to `data.js` needs its tags added here too.

All quiz types go through `startQuiz()`. `quizMode` sets the question direction (`year-to-event` or `event-to-year`), and `starredOnly` replaces the year-range filter with the starred years.

### Service worker

`sw.js` is network-first and falls back to the cache when offline, so content edits appear on reload while online. Any new file the app needs offline must be added to `APP_FILES`. The existing convention is to bump the version in `CACHE_NAME` when releasing changes.
