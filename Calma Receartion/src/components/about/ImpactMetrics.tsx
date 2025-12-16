import AnimatedNumber from '@/components/ui/AnimatedNumber'
import './About.metrics.css'

type Metric = {
  number?: string | number
  label: string
  subLabel?: string
}

const metrics: Metric[] = [
  { number: 28, label: 'Landmark Projects', subLabel: 'Delivered across KSA' },
  { number: '77,097', label: 'Total Land Area (m²)', subLabel: 'Measured precision' },
  { number: '130,000+', label: 'Built Area (m²)', subLabel: 'Crafted with intent' },
  { number: '700+', label: 'Units Delivered', subLabel: 'Families served' },
]

export default function ImpactMetrics() {
  return (
    <section className="about-metrics-section" aria-label="Our Impact">
      <div className="about-metrics-header">
        <h2 className="about-metrics-title">Our Impact</h2>
        <p className="about-metrics-subtitle">Measured progress that defines our success</p>
      </div>
      <div className="about-metrics-grid">
        {metrics.map((m, i) => (
          <div className="about-metric-card" key={i}>
            <div className="about-metric-number">
              {m.number == null ? <em className="metric-tbd">TBD</em> : <AnimatedNumber value={m.number} />}
            </div>
            <div className="about-metric-label">{m.label.toUpperCase()}</div>
            {m.subLabel && <div className="about-metric-sublabel">{m.subLabel}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
