import { CSSProperties, PropsWithChildren } from 'react'

type Props = {
  ratio?: string
  className?: string
  style?: CSSProperties
}

export default function ImageAspect({ ratio = '4 / 3', className = '', style, children }: PropsWithChildren<Props>) {
  return (
    <div className={`image-aspect ${className}`} style={{ aspectRatio: ratio, overflow: 'hidden', borderRadius: 12, ...style }}>
      {children}
    </div>
  )
}

