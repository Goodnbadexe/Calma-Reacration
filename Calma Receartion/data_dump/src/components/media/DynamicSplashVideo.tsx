import { useEffect, useMemo, useRef, useState } from 'react'

type DynamicSplashVideoProps = {
  /** Main video URL (e.g., project showcase). */
  src: string
  /** Whether to autoplay the main video after splash. */
  autoplay?: boolean
  /** Whether videos are muted (autoplay requires this in most browsers). */
  muted?: boolean
  /** Whether main video loops. */
  loop?: boolean
  /** Optional poster image for the main video. */
  poster?: string
  /** Optional className to style the container. */
  className?: string
  /** Duration of the splash preview in milliseconds (default: 2000). */
  splashDurationMs?: number
  /** Randomize the splash start time within the clip (default: true). */
  randomizeStart?: boolean
}

/**
 * DynamicSplashVideo
 * Plays a randomly selected, configurable splash preview (2 seconds by default)
 * from any video in the assets folder, then crossfades to the main video.
 * It reselects and replays the splash whenever `src` changes.
 */
export default function DynamicSplashVideo({
  src,
  autoplay = true,
  muted = true,
  loop = false,
  poster,
  className = '',
  splashDurationMs = 1000,
  randomizeStart = true,
}: DynamicSplashVideoProps) {
  // Collect all video URLs from the assets folder at build time
  const allVideos = useMemo(() => {
    const modules = import.meta.glob('@/assets/Videos/*.mp4', { eager: true }) as Record<string, any>
    const urls = Object.values(modules)
      .map((m) => (typeof m === 'string' ? m : m?.default))
      .filter(Boolean) as string[]
    return urls
  }, [])

  // Randomly selected splash video URL (can be same as main or different)
  const [splashUrl, setSplashUrl] = useState<string | null>(null)
  // Splash -> Main transition state
  const [phase, setPhase] = useState<'splash' | 'main'>('splash')
  // For precise timing after seeking
  const splashRef = useRef<HTMLVideoElement | null>(null)
  const mainRef = useRef<HTMLVideoElement | null>(null)
  const timeoutRef = useRef<number | null>(null)

  // When main `src` changes, pick a fresh splash and reset phase
  useEffect(() => {
    if (!allVideos.length) return
    setPhase('splash')
    // pick random video for splash
    const randomIdx = Math.floor(Math.random() * allVideos.length)
    setSplashUrl(allVideos[randomIdx])
    // Clean any leftover timers
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    // Reset videos
    if (splashRef.current) {
      splashRef.current.pause()
      splashRef.current.currentTime = 0
    }
    if (mainRef.current) {
      mainRef.current.pause()
      mainRef.current.currentTime = 0
    }
  }, [src, allVideos])

  // Handle splash metadata and schedule transition to main after splashDurationMs
  useEffect(() => {
    const splash = splashRef.current
    if (!splash || !splashUrl) return

    const onLoadedMetadata = () => {
      // Choose a randomized start time within the clip so there is at least the configured duration left to play.
      const duration = splash.duration || 0
      const minRemainingSec = splashDurationMs / 1000
      const maxStart = Math.max(0, duration - minRemainingSec)
      const startTime = randomizeStart && maxStart > 0 ? Math.random() * maxStart : 0

      const startPlayback = () => {
        splash.play().catch(() => {
          /* autoplay might be blocked if unmuted; keeping muted by default */
        })
        // Ensure main preloads during splash for smooth transition
        if (mainRef.current) {
          // Kick off a silent, preloading play/pause to warm cache
          const main = mainRef.current
          const attemptWarm = async () => {
            try {
              // Some browsers need a play/pause to cache frames
              await main.play()
              main.pause()
            } catch {
              /* ignore */
            }
          }
          // Run after main metadata
          if (main.readyState >= 1) attemptWarm()
          else main.addEventListener('loadedmetadata', attemptWarm, { once: true })
        }
        // Transition to main after the configured splash duration
        timeoutRef.current = window.setTimeout(() => {
          setPhase('main')
          // Autoplay main if requested
          if (autoplay && mainRef.current) {
            mainRef.current.play().catch(() => {/* ignore */})
          }
        }, splashDurationMs)
      }

      // Seek then start
      const onSeeked = () => {
        splash.removeEventListener('seeked', onSeeked)
        startPlayback()
      }
      splash.addEventListener('seeked', onSeeked)
      // Trigger seek by setting currentTime
      splash.currentTime = startTime
    }

    const onError = () => {
      // Fallback: just play from start for configured duration
      try { splash.play() } catch {/* ignore */}
      timeoutRef.current = window.setTimeout(() => setPhase('main'), splashDurationMs)
    }

    splash.addEventListener('loadedmetadata', onLoadedMetadata, { once: true })
    splash.addEventListener('error', onError, { once: true })
    return () => {
      splash.removeEventListener('loadedmetadata', onLoadedMetadata)
      splash.removeEventListener('error', onError)
    }
  }, [splashUrl, autoplay])

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  const containerClass = ['video-splash-container', className].filter(Boolean).join(' ')

  return (
    <div className={containerClass} aria-live="polite">
      {/* Splash preview layer */}
      {splashUrl && (
        <video
          ref={splashRef}
          key={`splash-${splashUrl}`}
          className={`video-layer ${phase === 'splash' ? 'visible' : 'hidden'}`}
          src={splashUrl}
          muted={muted}
          playsInline
          preload="auto"
          aria-label="Preview clip"
        />
      )}

      {/* Main video layer */}
      <video
        ref={mainRef}
        key={`main-${src}`}
        className={`video-layer ${phase === 'main' ? 'visible' : 'hidden'}`}
        src={src}
        muted={muted}
        playsInline
        preload="auto"
        poster={poster}
        loop={loop}
        aria-label="Main video"
        controls
      />
    </div>
  )
}