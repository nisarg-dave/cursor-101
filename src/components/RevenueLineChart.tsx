import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { TrendPoint } from '../data/mockMetrics'

type RevenueLineChartProps = {
  data: TrendPoint[]
}

export function RevenueLineChart({ data }: RevenueLineChartProps) {
  return (
    <div className="chart-panel">
      <h2 className="chart-panel__title">Revenue trend</h2>
      <p className="chart-panel__subtitle">Weekly totals (mock)</p>
      <div className="chart-panel__body">
        <ResponsiveContainer width="100%" height="100%" minHeight={260}>
          <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
            <XAxis
              dataKey="date"
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
              axisLine={{ stroke: 'var(--border)' }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                color: 'var(--text-heading)',
              }}
              formatter={(value) => [
                `$${Number(value ?? 0).toLocaleString()}`,
                'Revenue',
              ]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--chart-line)"
              strokeWidth={2}
              dot={{ fill: 'var(--chart-line)', r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
