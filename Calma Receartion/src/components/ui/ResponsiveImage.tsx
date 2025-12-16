import { resolveResponsiveSources, buildSizes } from '@/utils/image'
import ImageWithFallback from './ImageWithFallback'

type Props = {
  src: string
  alt: string
  ratio?: `${number}/${number}` | string
  sizes?: string
  sources?: string[]
}

export default function ResponsiveImage({ src, alt, ratio = '16/9', sizes, sources = [] }: Props) {
  const resolved = resolveResponsiveSources(src, sources)
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio }}>
      <picture style={{ position: 'absolute', inset: 0 }}>
        {resolved.map((s) => (
          <source key={`${s.type}-${s.srcset}`} type={s.type} srcSet={s.srcset} sizes={sizes || buildSizes()} />
        ))}
        <ImageWithFallback
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          fallbackSrc={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 9\"><rect width=\"16\" height=\"9\" fill=\"%23edebe2\"/><text x=\"8\" y=\"4.5\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-size=\"2\" fill=\"%2363523d\">Image</text></svg>'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </picture>
    </div>
  )
}
