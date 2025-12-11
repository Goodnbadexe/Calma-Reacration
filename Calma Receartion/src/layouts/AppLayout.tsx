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

  useEffect(() => {
    setOverlayVisible(true)
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setOverlayVisible(false)
      document.body.style.overflow = ''
    }, 520)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [location.pathname])

  return (
    <div className="page">
      <NavBar />
      <div style={{ position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {overlayVisible && (
            <motion.div
              key={`overlay-${location.pathname}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.26, ease: 'easeInOut' }}
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
