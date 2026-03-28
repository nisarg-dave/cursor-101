import {
  categorySales,
  channelMix,
  kpis,
  revenueByWeek,
} from './data/mockMetrics'
import { CategoryBarChart } from './components/CategoryBarChart'
import { MixPieChart } from './components/MixPieChart'
import { RevenueLineChart } from './components/RevenueLineChart'
import { StatCard } from './components/StatCard'
import './App.css'

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Overview</h1>
          <p className="dashboard__lede">
            Mock metrics dashboard — charts powered by Recharts.
          </p>
        </div>
      </header>

      <section className="dashboard__kpis" aria-label="Key metrics">
        {kpis.map((k) => (
          <StatCard
            key={k.id}
            label={k.label}
            value={k.value}
            change={k.change}
            positive={k.positive}
          />
        ))}
      </section>

      <section className="dashboard__charts" aria-label="Charts">
        <div className="dashboard__chart dashboard__chart--wide">
          <RevenueLineChart data={revenueByWeek} />
        </div>
        <div className="dashboard__chart">
          <CategoryBarChart data={categorySales} />
        </div>
        <div className="dashboard__chart">
          <MixPieChart data={channelMix} />
        </div>
      </section>
    </div>
  )
}

export default App
