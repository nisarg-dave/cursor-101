import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { TrendPoint } from '../data/mockMetrics'

type OrdersAreaChartProps = {
  data: TrendPoint[]
}

export function OrdersAreaChart({ data }: OrdersAreaChartProps) {
  return (
    <div className="chart-panel">
      <h2 className="chart-panel__title" id="orders-area-heading">
        Order volume
      </h2>
      <p className="chart-panel__subtitle">Weekly orders (mock)</p>
      <div
        className="chart-panel__body"
        role="region"
        aria-labelledby="orders-area-heading"
      >
        <ResponsiveContainer width="100%" height="100%" minHeight={260}>
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="ordersAreaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-bar)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--chart-bar)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
            <XAxis
              dataKey="date"
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
              axisLine={{ stroke: 'var(--border)' }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`}
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
                `${Number(value ?? 0).toLocaleString()} orders`,
                'Volume',
              ]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--chart-bar)"
              strokeWidth={2}
              fill="url(#ordersAreaFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
