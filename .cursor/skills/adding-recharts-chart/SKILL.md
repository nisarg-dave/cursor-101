---
name: adding-recharts-chart
description: >-
  Adds or updates Recharts-based chart components in this Vite React dashboard.
  Use when the user asks for a new chart, graph, visualization, or to change
  existing Recharts components in src/components, or when editing mock metrics
  for charts.
---

# Adding a Recharts chart

## Before coding

1. Confirm chart type (line, bar, area, pie, etc.) and whether data is **time series**, **categories**, or **parts-of-whole**.
2. Prefer **typed** props; reuse shapes from `src/data/mockMetrics.ts` or export small `type` aliases next to the data.

## Data

- Add or extend series in `src/data/mockMetrics.ts` (or a new file under `src/data/` if the dataset is large).
- Keep sample rows **realistic** and **small** (demo app); avoid huge inline arrays in the component file.

## Component

1. Create `src/components/YourChart.tsx` (PascalCase, ends with `Chart` if it is chart-only).
2. Import only the Recharts primitives you need (e.g. `ResponsiveContainer`, `LineChart`, `Line`, `XAxis`, `YAxis`, `Tooltip`, `CartesianGrid`).
3. Wrap the chart in `ResponsiveContainer` with a sensible `height` (match siblings like `RevenueLineChart`).
4. Pass **data via props** from `App.tsx` or a parent—avoid fetching in the chart for this project unless the user asks.

## UX and a11y

- Give the parent **section** in `App.tsx` an `aria-label` describing the chart group or chart purpose.
- Ensure **axes and tooltips** remain readable on the dashboard background; follow existing `App.css` / chart class patterns.

## Finish

- Wire the component into `src/App.tsx` in the appropriate `section` / grid cell.
- Run `npm run lint` and `npm run build` after non-trivial changes.

## Reference in this repo

Skim existing components for consistency:

- `src/components/RevenueLineChart.tsx` — line + time/category axis
- `src/components/CategoryBarChart.tsx` — bars
- `src/components/MixPieChart.tsx` — pie / parts-of-whole
