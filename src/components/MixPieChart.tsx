import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import type { MixSlice } from '../data/mockMetrics'

const SLICE_COLORS = [
  'var(--chart-slice-1)',
  'var(--chart-slice-2)',
  'var(--chart-slice-3)',
  'var(--chart-slice-4)',
]

type MixPieChartProps = {
  data: MixSlice[]
}

export function MixPieChart({ data }: MixPieChartProps) {
  return (
    <div className="chart-panel">
      <h2 className="chart-panel__title">Channel mix</h2>
      <p className="chart-panel__subtitle">Share of attributed revenue (%)</p>
      <div className="chart-panel__body chart-panel__body--pie">
        <ResponsiveContainer width="100%" height="100%" minHeight={260}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={56}
              outerRadius={88}
              paddingAngle={2}
            >
              {data.map((entry, i) => (
                <Cell key={entry.name} fill={SLICE_COLORS[i % SLICE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                color: 'var(--text-heading)',
              }}
              formatter={(value) => [`${Number(value ?? 0)}%`, 'Share']}
            />
          </PieChart>
        </ResponsiveContainer>
        <ul className="pie-legend">
          {data.map((d, i) => (
            <li key={d.name}>
              <span
                className="pie-legend__swatch"
                style={{ background: SLICE_COLORS[i % SLICE_COLORS.length] }}
              />
              <span className="pie-legend__name">{d.name}</span>
              <span className="pie-legend__value">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
