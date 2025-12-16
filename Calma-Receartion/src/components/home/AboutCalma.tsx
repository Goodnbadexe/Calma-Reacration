import { motion, circOut } from 'framer-motion'
import aboutHeaderImage from '@/assets/Images/About/About-Header.jpg'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: circOut } },
}
const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: circOut } },
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const SustainabilityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3c4.5 2.5 7 6.5 7 10a7 7 0 0 1-14 0c0-3.5 2.5-7.5 7-10Z" stroke="#64523D" strokeWidth="1.5"/>
    <path d="M12 8c-2 1.2-3 3-3 5 1.5-1 3-1.5 4.5-1.3" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const PremiumIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l3.5 6 5.5.8-4 4.3 1 6.1-6-3.3-6 3.3 1-6.1-4-4.3 5.5-.8L12 3Z" stroke="#C5A46D" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)
const InnovationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="10" width="4" height="9" stroke="#64523D" strokeWidth="1.5"/>
    <rect x="10" y="7" width="4" height="12" stroke="#8B7355" strokeWidth="1.5"/>
    <rect x="15" y="4" width="4" height="15" stroke="#C5A46D" strokeWidth="1.5"/>
  </svg>
)

export default function AboutCalma() {
  return (
    <motion.section 
      id="about" 
      className="section luxury-about showcase-strips reveal-block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="section-inner luxury-section-inner">
        <motion.div className="content-grid" variants={staggerContainer}>
          <motion.div className="content-text" variants={fadeInLeft}>
            <span className="section-badge">ABOUT CALMA</span>
            <h2 className="section-title luxury-section-title">
              From Principles to Outcomes
            </h2>
            <p className="section-description">
              Tangible results of our ethos — sustainable systems, premium materials, and human‑centered urban design.
            </p>
            <div className="snapshot-cards">
              <div className="snapshot-card">
                <SustainabilityIcon />
                <h3 className="snapshot-title">High‑Efficiency Systems</h3>
                <p className="snapshot-text">Solar readiness, efficient HVAC, and optimized water usage.</p>
              </div>
              <div className="snapshot-card">
                <PremiumIcon />
                <h3 className="snapshot-title">Enduring Materials</h3>
                <p className="snapshot-text">Stone, hardwoods, and premium finishes selected for longevity.</p>
              </div>
              <div className="snapshot-card">
                <InnovationIcon />
                <h3 className="snapshot-title">Walkable Urban Design</h3>
                <p className="snapshot-text">Pedestrian‑first layouts and connected community amenities.</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="content-image" variants={fadeInRight}>
            <picture>
              <source srcSet={aboutHeaderImage} type="image/jpeg" />
              <ImageWithFallback
                src={aboutHeaderImage}
                alt="Calma Development"
                className="luxury-image"
                loading="lazy"
                decoding="async"
                fallbackSrc={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 3\"><rect width=\"4\" height=\"3\" fill=\"%23edebe2\"/></svg>'}
              />
            </picture>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
