import { useState } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

export default function ImageWithFallback({ src, alt, fallbackSrc, loading = 'lazy', decoding = 'async', ...rest }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    }
  }
  return (
    <img
      {...rest}
      src={currentSrc as string}
      alt={alt}
      loading={loading}
      decoding={decoding as any}
      onError={handleError}
    />
  )
}

