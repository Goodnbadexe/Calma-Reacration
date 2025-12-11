import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import VisionCounter from '@/components/ui/VisionCounter'
import AnimatedNumber from '@/components/ui/AnimatedNumber'
import panoramaImage from '@/assets/Backgrounds/Abou-1-p-1600.jpg'
import aboutHeaderImage from '@/assets/Images/About/About-Header.jpg'
import brandValuesImage from '@/assets/Images/About/Brand-Values-1.JPG'
import statsImage1 from '@/assets/Images/About/Stats-77097-sqm.JPG'
import statsImage2 from '@/assets/Images/About/Stats130000-sqm.JPG'

// Additional images for rotation
import asset1Image from '@/assets/Images/About/Asset-1.JPG'
import asset2Image from '@/assets/Images/About/Asset-2.JPG'
import asset3Image from '@/assets/Images/About/Asset-3.JPG'
import asset4Image from '@/assets/Images/About/Asset-4.JPG'
import asset5Image from '@/assets/Images/About/Asset-5.jpg'
import asset6Image from '@/assets/Images/About/Asset-6.JPG'
import homeImpactImage from '@/assets/Images/Home/Calma_KSR_ex03_Final02_2025-05-28.JPG'

//import React from 'react'
import { motion, circOut, easeInOut } from 'framer-motion'
import { useSplash } from '@/components/system/SplashProvider'

import fullLockupLogo from '@/assets/Logos/BRANDMARK_01-p-2000.png'
//import group270Logo from '@/assets/Images/About/Group-270.png'
import possibilitiesIcon from '@/assets/Icons/500000-sqm-of-possibilities-unfolding..png'
//import heroImage from '@/assets/Backgrounds/About-Header-p-1600.jpg'
import calmaTV from '@/assets/Videos/Calma_TV.mp4'
import { homeEn } from '@/pages/content/home.en'
import './Home.css'
// inline SVG icons for snapshot cards
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
import FeaturedProjects from '@/components/home/FeaturedProjects'
import TrustStrip from '@/components/home/TrustStrip'
import TestimonialsBand from '@/components/home/TestimonialsBand'
import ProjectPreviewGrid from '@/components/home/ProjectPreviewGrid'
import MissionVision from '@/components/home/MissionVision'

export default function EnglishHome() {
  const panoRef = useRef<HTMLElement | null>(null)
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [heroReady, setHeroReady] = useState(false)
  // keep src stable; signal splash readiness on media load
  const { signalReady } = useSplash()
  const showMicroContent = true

  // Image rotation state
  const [currentImageSet, setCurrentImageSet] = useState(0)
  
  // Define image sets for rotation
  const imageSets = [
    { primary: brandValuesImage, secondary: statsImage1, tertiary: statsImage2 },
    { primary: asset1Image, secondary: asset2Image, tertiary: asset3Image },
    { primary: asset4Image, secondary: asset5Image, tertiary: asset6Image }
  ]

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev + 1) % imageSets.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [imageSets.length])

  useEffect(() => {
    const el = heroVideoRef.current
    if (!el) return
    const onMeta = () => setHeroReady(true)
    el.addEventListener('loadedmetadata', onMeta, { once: true })
    return () => { el.removeEventListener('loadedmetadata', onMeta) }
  }, [])

  useEffect(() => {
    const el = heroVideoRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && heroReady) {
          try { el.play() } catch {}
        } else {
          try { el.pause() } catch {}
        }
      })
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [heroReady])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: circOut }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: circOut }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: circOut }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut
    }
  }

  return (
    <div className="home-page">
      {/* Hero Section with Video */}
      <motion.section 
        className="hero luxury-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        {/* Background video */}
        <div className="hero-media">
          <video 
            ref={heroVideoRef}
            className="hero-video"
            src={calmaTV}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={aboutHeaderImage}
            aria-label="Calma TV hero video"
            onLoadedData={() => {
              try { heroVideoRef.current?.play() } catch {}
              signalReady()
            }}
          />
        </div>
        <div className="hero-overlay luxury-overlay" />

        {/* Hero content */}
        <motion.div 
          className="hero-content luxury-hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="hero-badge"><span className="badge-text">CALMA REAL ESTATE</span></div>
          <h1 className="hero-title luxury-title animate-fade-in-up">{homeEn.heroTitle}</h1>
          <p className="hero-subtitle luxury-subtitle animate-fade-in-up">
            {homeEn.heroSubtitle}
          </p>
          <div className="hero-actions">
            <motion.a 
              href="/projects"
              className="button-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="hero-button luxury-button">Explore Our Projects</span>
            </motion.a>
            <motion.a 
              href="/brochure"
              className="button-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="hero-button-secondary">Get Brochure</span>
            </motion.a>
          </div>
        </motion.div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue-dot" />
        </div>
      </motion.section>

      {/* Main Content */}
      {/* Main Content */}
      <main className="main-content">
        <FeaturedProjects />
        <TrustStrip />
        <TestimonialsBand />
        <ProjectPreviewGrid />
        <MissionVision />
        <div className="container">
          {/* Redefining Luxury Living — Dual Split */}
          <motion.section 
            className="dual-split section showcase-strips"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="dual-split-grid">
              <motion.div className="dual-split-text" variants={fadeInLeft}>
                <h2 className="dual-split-title">Redefining Luxury Living</h2>
                <p className="dual-split-description">
                  We ground bold vision in crafted realism — designing spaces that feel poetic yet purposeful.
                  Every decision balances material truth with human experience.
                </p>
                <div className="cta-row">
                  <a className="button-link" href="/projects">
                    <Button variant="secondary" className="luxury-button">
                      Explore Our Projects
                    </Button>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="dual-split-image" 
                variants={fadeInRight}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <picture>
                  <source srcSet={homeImpactImage} type="image/jpeg" />
                  <img src={homeImpactImage} alt="Calma impact" className="dual-image" loading="lazy" decoding="async" />
                </picture>
              </motion.div>
            </div>
            {showMicroContent && (
              <motion.div className="micro-tagline" variants={fadeInUp}>
                Designed for elegant living.
              </motion.div>
            )}
          </motion.section>
        
        {/* Metrics — 3 Panel Visual Block */}
        <motion.section 
          className="metrics-section section showcase-strips"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="metrics-grid">
            {/* Panel 1 */}
            <motion.div className="metric-panel" variants={fadeInUp}>
              <div className="metric-bg" style={{ backgroundImage: `url(${statsImage1})` }} />
              <div className="metric-content">
                <AnimatedNumber value="500000+" className="metric-number" delay={90} />
                <div className="metric-label">m² of Possibilities unfolding</div>
              </div>
            </motion.div>
            {/* Panel 2 */}
            <motion.div className="metric-panel" variants={fadeInUp}>
              <div className="metric-bg" style={{ backgroundImage: `url(${brandValuesImage})` }} />
              <div className="metric-content">
                <AnimatedNumber value={28} className="metric-number" delay={100} />
                <div className="metric-label">Landmark Developments</div>
              </div>
            </motion.div>
            {/* Panel 3 */}
            <motion.div className="metric-panel" variants={fadeInUp}>
              <div className="metric-bg" style={{ backgroundImage: `url(${statsImage2})` }} />
              <div className="metric-content">
                <AnimatedNumber value="2000+" className="metric-number" delay={120} />
                <div className="metric-label">Residents Served</div>
              </div>
            </motion.div>
          </div>
          {showMicroContent && (
            <motion.div className="micro-stat" variants={fadeInUp}>
              <AnimatedNumber value={20} className="micro-number" delay={80} />
              <span className="micro-caption">Years of Experience</span>
            </motion.div>
          )}
        </motion.section>

        {/* About Section - Refined */}
        <motion.section 
          id="about" 
          className="section luxury-about showcase-strips"
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
                  Architecting the Future of Urban Living
                </h2>
                <p className="section-description">
                  A distilled snapshot of our ethos — grounded sustainability, uncompromising quality, and thoughtful urban innovation.
                </p>
                <div className="snapshot-cards">
                  <div className="snapshot-card">
                    <SustainabilityIcon />
                    <h3 className="snapshot-title">Sustainability</h3>
                    <p className="snapshot-text">Responsible stewardship and future-facing systems embedded in design.</p>
                  </div>
                  <div className="snapshot-card">
                    <PremiumIcon />
                    <h3 className="snapshot-title">Premium Quality</h3>
                    <p className="snapshot-text">Crafted precision and material honesty at every scale.</p>
                  </div>
                  <div className="snapshot-card">
                    <InnovationIcon />
                    <h3 className="snapshot-title">Urban Innovation</h3>
                    <p className="snapshot-text">Elegant solutions that elevate daily living within the city fabric.</p>
                  </div>
                </div>
                {showMicroContent && (
                  <motion.p className="micro-statement" variants={fadeInUp}>
                    Crafted with intention.
                  </motion.p>
                )}
              </motion.div>
              <motion.div className="content-image" variants={fadeInRight}>
                <picture>
                  <source srcSet={aboutHeaderImage} type="image/jpeg" />
                  <img src={aboutHeaderImage} alt="Calma Development" className="luxury-image" loading="lazy" decoding="async" />
                </picture>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Excellence Section - Masterfully Crafted */}
        <motion.section 
          className="section content-section luxury-content-section showcase-strips"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-inner luxury-section-inner">
            <motion.div className="content-showcase" variants={staggerContainer}>
              <motion.div className="showcase-content" variants={fadeInLeft}>
                <span className="section-badge gold">EXCELLENCE</span>
                <h2 className="content-title luxury-content-title">
                  MASTERFULLY CRAFTED.<br />
                  UNIQUELY YOURS.
                </h2>
                <p className="content-body luxury-content-body">
                  CALMA represents the pinnacle of real estate excellence. Where visionary development 
                  meets uncompromising standards, we don't just raise skylines—we elevate lifestyles. 
                  Expanding across the KSA, we set new benchmarks in luxury development, creating 
                  landmarks that inspire and endure for generations.
                </p>
                <div className="excellence-highlights">
                  <div className="highlight-item">
                    <span className="highlight-number">28+</span>
                    <span className="highlight-text">Delivered Projects</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">2,000+</span>
                    <span className="highlight-text">Families Served</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">3</span>
                    <span className="highlight-text">Major Cities</span>
                  </div>
                </div>
                <div className="cta-row">
                  <a className="button-link" href="/projects">
                    <Button variant="secondary" className="luxury-button">
                      Discover Our Projects
                    </Button>
                  </a>
                </div>
              </motion.div>
              <motion.div className="showcase-images" variants={fadeInRight}>
                <div className="image-grid">
                  <motion.img 
                    key={`primary-${currentImageSet}`}
                    src={imageSets[currentImageSet].primary} 
                    alt="Excellence Showcase" 
                    className="grid-image primary"
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <motion.img 
                    key={`secondary-${currentImageSet}`}
                    src={imageSets[currentImageSet].secondary} 
                    alt="Development Excellence" 
                    className="grid-image secondary"
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.img 
                    key={`tertiary-${currentImageSet}`}
                    src={imageSets[currentImageSet].tertiary} 
                    alt="Project Innovation" 
                    className="grid-image tertiary"
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* The Calma Way — Teaser */}
        <motion.section 
          className="calma-way-section section showcase-strips"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="calma-way-inner">
            <motion.div variants={fadeInUp}>
              <h2 className="calma-way-title">The Calma Way</h2>
              <p className="calma-way-subtitle">We design communities with precision, purpose, and vision.</p>
            </motion.div>
            <div className="calma-way-grid">
              <motion.div className="way-card" variants={fadeInLeft}>
                <div className="way-bg" style={{ backgroundImage: `url(${asset2Image})` }} />
                <div className="way-content">
                  <h3 className="way-title">Precision</h3>
                  <p className="way-text">Architected clarity in every line and join.</p>
                </div>
              </motion.div>
              <motion.div className="way-card" variants={fadeInUp}>
                <div className="way-bg" style={{ backgroundImage: `url(${asset4Image})` }} />
                <div className="way-content">
                  <h3 className="way-title">Excellence</h3>
                  <p className="way-text">Premium quality that endures and elevates.</p>
                </div>
              </motion.div>
              <motion.div className="way-card" variants={fadeInRight}>
                <div className="way-bg" style={{ backgroundImage: `url(${asset3Image})` }} />
                <div className="way-content">
                  <h3 className="way-title">Innovation</h3>
                  <p className="way-text">Thoughtful progress shaping future living.</p>
                </div>
              </motion.div>
            </div>
            <div className="cta-row">
              <a className="button-link" href="/about">
                <Button variant="secondary" className="luxury-button">
                  Learn About Our Approach
                </Button>
              </a>
            </div>
          </div>
        </motion.section>
        </div>
      </main>
    </div>
  )
}
