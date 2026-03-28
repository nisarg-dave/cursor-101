import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { CategoryAmount } from '../data/mockMetrics'

type CategoryBarChartProps = {
  data: CategoryAmount[]
}

export function CategoryBarChart({ data }: CategoryBarChartProps) {
  return (
    <div className="chart-panel">
      <h2 className="chart-panel__title">Sales by category</h2>
      <p className="chart-panel__subtitle">Trailing quarter (mock)</p>
      <div className="chart-panel__body">
        <ResponsiveContainer width="100%" height="100%" minHeight={260}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
            <XAxis
              dataKey="name"
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
                'Amount',
              ]}
            />
            <Bar dataKey="amount" fill="var(--chart-bar)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
