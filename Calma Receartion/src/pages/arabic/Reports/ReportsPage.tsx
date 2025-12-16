import { useEffect, useState } from 'react'

type Metric = {
  name: string
  value: string | number
}

export default function ArabicReportsPage() {
  const [metrics, setMetrics] = useState<Metric[]>([])

  useEffect(() => {
    setMetrics([
      { name: 'الزوار', value: '—' },
      { name: 'متوسط الجلسة', value: '—' },
      { name: 'التحويلات', value: '—' },
    ])
  }, [])

  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <h1>التقارير</h1>
          <p>اطّلع على التحليلات والرؤى.</p>
        </div>
      </section>
      <section className="content">
        <div className="container">
          <div className="kpi-grid">
            {metrics.map((m) => (
              <div key={m.name} className="stat-item">
                <div className="stat-name">{m.name}</div>
                <div className="stat-value">{String(m.value)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
