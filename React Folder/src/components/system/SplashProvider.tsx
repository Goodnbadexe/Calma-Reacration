import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

type SplashContextValue = {
  // Show the splash overlay and resolve once the splash finishes closing
  showSplash: (text?: string) => Promise<void>
}

const SplashContext = createContext<SplashContextValue | null>(null)

export function useSplash() {
  const ctx = useContext(SplashContext)
  if (!ctx) throw new Error('useSplash must be used within SplashProvider')
  return ctx
}

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const timerRef = useRef<number | null>(null)
  const fadeTimerRef = useRef<number | null>(null)
  const splashRef = useRef<HTMLVideoElement | null>(null)
  const warmRef = useRef<HTMLVideoElement | null>(null)
  const [clipUrl, setClipUrl] = useState<string | null>(null)
  const [warmUrl, setWarmUrl] = useState<string | null>(null)
  const fadeMs = 1000
  const resolveRef = useRef<(() => void) | null>(null)
  const lastClipUrlRef = useRef<string | null>(null)
  const transitionOnly = true

  const isVideoUrl = (url: string) => /\.(mp4|webm|ogg)$/i.test(url)
  const isImageUrl = (url: string) => /\.(png|jpe?g|gif|webp|svg)$/i.test(url)

  // Collect all video URLs from assets at build time
  const allMedia = useMemo(() => {
    const videos = import.meta.glob('@/assets/Videos/*.{mp4,webm}', { eager: true }) as Record<string, any>
    const images = import.meta.glob('@/assets/Images/*.{png,jpg,jpeg,webp,gif,svg}', { eager: true }) as Record<string, any>
    const splash = import.meta.glob('@/assets/Splash/*.{mp4,webm,png,jpg,jpeg,webp,gif,svg}', { eager: true }) as Record<string, any>
    const extract = (mods: Record<string, any>) => Object.values(mods).map((m) => (typeof m === 'string' ? m : m?.default)).filter(Boolean) as string[]
    const splashUrls = extract(splash)
    // Prefer images to minimize load; fall back to videos
    const fallback = [...extract(images), ...extract(videos)]
    const urls = splashUrls.length ? splashUrls : fallback
    return urls
  }, [])

  const showSplash = useCallback((text?: string) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (fadeTimerRef.current) {
      window.clearTimeout(fadeTimerRef.current)
      fadeTimerRef.current = null
    }
    // Select random clip
    if (allMedia.length) {
      // Avoid immediate repeat of last clip
      let chosen = allMedia[Math.floor(Math.random() * allMedia.length)]
      if (allMedia.length > 1 && lastClipUrlRef.current === chosen) {
        const alt = allMedia.find((u) => u !== chosen)
        if (alt) chosen = alt
      }
      setClipUrl(chosen)
      lastClipUrlRef.current = chosen
      // Disable warming to prevent auto-loading
      setWarmUrl(null)
    } else {
      setClipUrl(null)
      setWarmUrl(null)
    }
    setClosing(false)
    setVisible(true)
    // Return a promise that resolves when splash has fully closed
    return new Promise<void>((resolve) => {
      resolveRef.current = resolve
      // Always close after fade-in completes (exactly 1s)
      if (timerRef.current) { window.clearTimeout(timerRef.current) }
      timerRef.current = window.setTimeout(() => startClosing(), fadeMs)
    })
  }, [allMedia, clipUrl])

  const startClosing = useCallback(() => {
    setClosing(true)
    if (splashRef.current) {
      try { splashRef.current.pause() } catch {}
    }
    fadeTimerRef.current = window.setTimeout(() => {
      setVisible(false)
      setClosing(false)
      // Reset media elements
      if (splashRef.current) {
        try { splashRef.current.pause() } catch {}
        splashRef.current.currentTime = 0
      }
      if (warmRef.current) {
        try { warmRef.current.pause() } catch {}
        warmRef.current.currentTime = 0
      }
      timerRef.current = null
      fadeTimerRef.current = null
      // Resolve any awaiting navigation
      if (resolveRef.current) {
        const r = resolveRef.current
        resolveRef.current = null
        r()
      }
    }, fadeMs)
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
      if (fadeTimerRef.current) {
        window.clearTimeout(fadeTimerRef.current)
        fadeTimerRef.current = null
      }
      if (splashRef.current) {
        try { splashRef.current.pause() } catch {}
        splashRef.current.currentTime = 0
      }
      if (warmRef.current) {
        try { warmRef.current.pause() } catch {}
        warmRef.current.currentTime = 0
      }
    }
  }, [])

  const value = useMemo(() => ({ showSplash }), [showSplash])

  return (
    <SplashContext.Provider value={value}>
      {children}
      {/* Overlay rendered at root for full-screen coverage */}
      <div className={`splash-overlay ${visible ? 'open' : ''} ${closing ? 'closing' : ''}`} aria-hidden={!visible} role="status">
        {/* Immersive media layer: video or image */}
        {clipUrl ? (
          isVideoUrl(clipUrl) ? (
            <video
              ref={splashRef}
              key={`splash-${clipUrl}`}
              className="splash-media"
              src={clipUrl}
              muted
              playsInline
              preload="metadata"
              autoPlay
              onLoadedMetadata={() => { try { splashRef.current?.play() } catch {} }}
              aria-label="Preview clip"
            />
          ) : (
            <img
              key={`splash-${clipUrl}`}
              className="splash-media"
              src={clipUrl}
              alt="Preview image"
            />
          )
        ) : (
          <div className="splash-content" aria-live="polite">
            <div className="splash-spinner" aria-label="Loading" />
          </div>
        )}
        {/* Hidden warmer video to prime media pipeline */}
        {/* Warming disabled to prevent auto-loading */}
      </div>
    </SplashContext.Provider>
  )
}