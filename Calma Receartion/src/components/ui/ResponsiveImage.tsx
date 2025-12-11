import { resolveResponsiveSources, buildSizes } from '@/utils/image'

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
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </picture>
    </div>
  )
}
