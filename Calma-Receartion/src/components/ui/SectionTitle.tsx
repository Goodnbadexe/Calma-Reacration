type Props = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({ title, subtitle, align = 'center', className = '' }: Props) {
  return (
    <div className={`section-title ${className}`} style={{ textAlign: align }}>
      <h2 className="luxury-section-title">{title}</h2>
      {subtitle && <p className="section-description">{subtitle}</p>}
    </div>
  )
}

