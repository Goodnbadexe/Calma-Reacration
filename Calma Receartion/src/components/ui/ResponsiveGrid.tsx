import { CSSProperties, PropsWithChildren } from 'react'

type Props = {
  min?: number
  gap?: 'tight' | 'normal' | 'loose'
  className?: string
  style?: CSSProperties
}

export default function ResponsiveGrid({ min = 260, gap = 'normal', className = '', style, children }: PropsWithChildren<Props>) {
  const gapClass = gap === 'tight' ? 'grid-tight' : gap === 'loose' ? 'grid-loose' : ''
  const gridStyle: CSSProperties = { ['--grid-min' as any]: `${min}px`, ...style }
  return (
    <div className={`grid ${gapClass} ${className}`} style={gridStyle}>
      {children}
    </div>
  )
}

