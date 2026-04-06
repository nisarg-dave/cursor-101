export type TrendPoint = {
  date: string
  value: number
}

export type CategoryAmount = {
  name: string
  amount: number
}

export type MixSlice = {
  name: string
  value: number
}

export type KpiStat = {
  id: string
  label: string
  value: string
  change?: string
  positive?: boolean
}

export const kpis: KpiStat[] = [
  {
    id: 'revenue',
    label: 'Total revenue',
    value: '$284,900',
    change: '+12.4%',
    positive: true,
  },
  {
    id: 'users',
    label: 'Active users',
    value: '18.2k',
    change: '+3.1%',
    positive: true,
  },
  {
    id: 'growth',
    label: 'MoM growth',
    value: '8.7%',
    change: '+0.6pp',
    positive: true,
  },
  {
    id: 'churn',
    label: 'Churn rate',
    value: '1.9%',
    change: '-0.2pp',
    positive: true,
  },
]

/** Weekly revenue trend (mock). */
export const revenueByWeek: TrendPoint[] = [
  { date: 'Jan 1', value: 42000 },
  { date: 'Jan 8', value: 45800 },
  { date: 'Jan 15', value: 44100 },
  { date: 'Jan 22', value: 51200 },
  { date: 'Jan 29', value: 48900 },
  { date: 'Feb 5', value: 53400 },
  { date: 'Feb 12', value: 56800 },
  { date: 'Feb 19', value: 55100 },
]

/** Weekly order volume — same weeks as revenue (mock). */
export const ordersByWeek: TrendPoint[] = [
  { date: 'Jan 1', value: 1180 },
  { date: 'Jan 8', value: 1240 },
  { date: 'Jan 15', value: 1210 },
  { date: 'Jan 22', value: 1380 },
  { date: 'Jan 29', value: 1310 },
  { date: 'Feb 5', value: 1420 },
  { date: 'Feb 12', value: 1510 },
  { date: 'Feb 19', value: 1460 },
]

/** Sales by category. */
export const categorySales: CategoryAmount[] = [
  { name: 'Software', amount: 92000 },
  { name: 'Services', amount: 71000 },
  { name: 'Hardware', amount: 54000 },
  { name: 'Other', amount: 28000 },
]

/** Traffic / revenue mix by channel. */
export const channelMix: MixSlice[] = [
  { name: 'Direct', value: 38 },
  { name: 'Organic', value: 29 },
  { name: 'Paid', value: 21 },
  { name: 'Referral', value: 12 },
]
