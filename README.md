# Simple TODO

A minimal web app for organizing personal to-do tasks in sections.
All task data lives in the browser (`localStorage`) — no accounts, no database.

## Features

- Add sections; add, complete (strikethrough), and delete tasks inside them
- Collapse / expand sections
- Clear tasks in one section, delete a whole section, or clear the entire list
- Two-step inline confirmations on "Clear all" and section delete (prevents accidental clicks)
- Inline section titles (click a title to rename it)

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | React 19 + TypeScript, built with Vite |
| Styling | Tailwind CSS v4 + DaisyUI v5 (light theme) |
| Storage | Browser `localStorage` only |

## Project layout

```
src/          React + TypeScript app
index.html    Vite entry point
```

## Prerequisites

- Node.js ≥ 20 and npm

## Run in development

```bash
npm install
npm run dev
```

Hot reload at http://localhost:5173.

## Build and preview

```bash
npm install
npm run build     # outputs dist/
npm run preview   # serve the build locally
```

Deploy the contents of `dist/` to any static host.

## Checks

```bash
npx tsc   # typecheck
```

## Notes

- Clearing "Clear all" asks for confirmation; data cannot be recovered afterwards.
- Clearing site data in the browser resets the app.
