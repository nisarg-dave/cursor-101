# Agent instructions — Cursor 101

This repo is a small **Vite + React + TypeScript** app: a mock metrics dashboard with **Recharts** (line, bar, pie) and KPI cards.

## Commands

| Command | Purpose |
|--------|---------|
| `npm run dev` | Local dev server |
| `npm run build` | Typecheck + production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

## Layout

- `src/App.tsx` — Dashboard shell and composition.
- `src/components/` — Chart and UI components (e.g. `StatCard`, `*Chart.tsx`).
- `src/data/mockMetrics.ts` — Mock KPI and series data; extend here for new demos.
- `src/index.css`, `src/App.css` — Global and dashboard styles.

## Conventions

- Keep components focused; move reusable series/types next to `mockMetrics` or into small `types` modules if they grow.
- Match existing CSS naming (`dashboard__*`) when adding layout or sections.
- Custom Cursor slash commands live under `.cursor/commands/` (see repo `README.md` for usage).

## Scope

Changes should stay aligned with this being a **learning / demo** project: clear, minimal diffs unless the task explicitly asks for a larger refactor.
