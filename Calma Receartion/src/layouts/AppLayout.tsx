import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '@/components/ui/NavBar'
import { useEffect, useState } from 'react'
import { runPreflight } from '@/utils/preflight'
import Footer from '@/components/ui/Footer'
import { AnimatePresence, motion } from 'framer-motion'

export default function AppLayout() {
  useEffect(() => { runPreflight() }, [])
  const location = useLocation()
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [needsSpacer, setNeedsSpacer] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    setOverlayVisible(true)
    const timer = setTimeout(() => {
      setOverlayVisible(false)
    }, reduceMotion ? 0 : 520)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.style.setProperty('--nav-height', '56px')
  })
  useEffect(() => {
    requestAnimationFrame(() => {
      const hero = document.querySelector('#panorama, .hero, .hero-section, .news-hero')
      setNeedsSpacer(!hero)
    })
  }, [location.pathname])

  return (
    <div className="page">
      <NavBar />
      <div style={{ height: needsSpacer ? 'var(--nav-height, 64px)' : 0 }} />
      <div style={{ position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? {} : { opacity: 1 }}
            exit={reduceMotion ? {} : { opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.26, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {overlayVisible && (
            <motion.div
              key={`overlay-${location.pathname}`}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? {} : { opacity: 0.25 }}
              exit={reduceMotion ? {} : { opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.26, ease: 'easeInOut' }}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#000',
                pointerEvents: 'none',
                zIndex: 900,
              }}
            />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
