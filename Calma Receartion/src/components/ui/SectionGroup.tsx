import { PropsWithChildren } from 'react'

type Props = {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionGroup({ title, subtitle, className = '', children }: PropsWithChildren<Props>) {
  return (
    <section className={`section ${className}`}>
      <div className="luxury-section-inner">
        <h3 className="calma-way-title">{title}</h3>
        {subtitle && <p className="section-description">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

