import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import VisionCounter from '@/components/ui/VisionCounter'
import AnimatedNumber from '@/components/ui/AnimatedNumber'
import panoramaImage from '@/assets/Backgrounds/Abou-1-p-1600.jpg'
import aboutHeaderImage from '@/assets/Images/About/About-Header.jpg'
import brandValuesImage from '@/assets/Images/About/Brand-Values-1.jpg'
import statsImage1 from '@/assets/Images/About/Stats-77097-sqm.jpg'
import statsImage2 from '@/assets/Images/About/Stats130000-sqm.jpg'

// Additional images for rotation
import asset1Image from '@/assets/Images/About/Asset-1.JPG'
import asset2Image from '@/assets/Images/About/Asset-2.JPG'
import asset3Image from '@/assets/Images/About/Asset-3.JPG'
import asset4Image from '@/assets/Images/About/Asset-4.JPG'
import asset5Image from '@/assets/Images/About/Asset-5.jpg'
import asset6Image from '@/assets/Images/About/Asset-6.JPG'

//import React from 'react'
import { motion } from 'framer-motion'
import { useSplash } from '@/components/system/SplashProvider'

import fullLockupLogo from '@/assets/Logos/BRANDMARK_01-p-2000.png'
//import group270Logo from '@/assets/Images/About/Group-270.png'
import possibilitiesIcon from '@/assets/Icons/500000-sqm-of-possibilities-unfolding..png'
//import heroImage from '@/assets/Backgrounds/About-Header-p-1600.jpg'
import calmaTV from '@/assets/Videos/Calma_TV.mp4'
import { homeEn } from '@/pages/content/home.en'
import './Home.css'

export default function EnglishHome() {
  const panoRef = useRef<HTMLElement | null>(null)
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [heroReady, setHeroReady] = useState(false)
  // keep src stable; signal splash readiness on media load
  const { scrollYProgress } = useScroll()
  const { signalReady } = useSplash()

  // Image rotation state
  const [currentImageSet, setCurrentImageSet] = useState(0)
  
  // Define image sets for rotation
  const imageSets = [
    {
      primary: brandValuesImage,
      secondary: statsImage1,
      tertiary: statsImage2
    },
    {
      primary: asset1Image,
      secondary: asset2Image,
      tertiary: asset3Image
    },
    {
      primary: asset4Image,
      secondary: asset5Image,
      tertiary: asset6Image
    },
    {
      primary: aboutHeaderImage,
      secondary: asset1Image,
      tertiary: asset2Image
    }
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
      transition: { duration: 0.8, ease: "circOut" }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "circOut" }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "circOut" }
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
      ease: "easeInOut"
    }
  }

  return (
    <div className="home-page">
      {/* Hero Section with Video */}
      <motion.section 
        className="hero luxury-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background video */}
        <div className="hero-media">
          <video 
            ref={heroVideoRef}
            className="hero-video"
            src={calmaTV}
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
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-badge"><span className="badge-text">CALMA REAL ESTATE</span></div>
          <h1 className="hero-title luxury-title">{homeEn.heroTitle}</h1>
          <p className="hero-subtitle luxury-subtitle">
            {homeEn.heroSubtitle}
          </p>
          <motion.button 
            className="hero-button luxury-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Projects
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Welcome Section */}
          <motion.section 
            className="welcome-section"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="welcome-title">Redefining Luxury Living</h2>
            <p className="welcome-description">
              At Calma, we believe in creating spaces that inspire and elevate. Our commitment to excellence 
              drives us to deliver exceptional real estate solutions that exceed expectations and create 
              lasting value for our clients.
            </p>
          </motion.section>
        
        {/* Vision Counter Section */}
        <motion.section 
          ref={panoRef} 
          id="panorama" 
          className="section panorama luxury-panorama"
          style={{ backgroundImage: `url(${panoramaImage})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="panorama-overlay luxury-panorama-overlay">
            <div className="panorama-content">
              <motion.img 
                src={possibilitiesIcon}
                alt="Possibilities Icon"
                className="vision-icon"
                animate={floatingAnimation}
              />
              <VisionCounter target={500000} heading="WHERE VISION TAKES SHAPE" label="SQM OF POSSIBILITIES" suffix="+" locale="en" />
              <motion.div className="panorama-stats" variants={staggerContainer}>
                <motion.div className="stat-item" variants={fadeInLeft}>
                  <AnimatedNumber value={28} className="stat-number" delay={300} />
                  <span className="stat-label">Landmark Projects</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInRight}>
                  <AnimatedNumber value="2000+" className="stat-number" delay={600} />
                  <span className="stat-label">Residents Served</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section - Refined */}
        <motion.section 
          id="about" 
          className="section luxury-about"
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
                  At Calma, we're not just developing properties; we're architecting the future of urban living. 
                  With 28 landmark projects and several projects in the pipeline, we're integrating cutting-edge 
                  sustainability practices. Our developments meet today's standards and define tomorrow's possibilities, 
                  creating communities that seamlessly blend innovation with legacy.
                </p>
                <div className="content-features">
                  <div className="feature-item">
                    <span className="feature-text">Sustainable Development</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-text">Premium Quality</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-text">Urban Innovation</span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="content-image" variants={fadeInRight}>
                <img src={aboutHeaderImage} alt="Calma Development" className="luxury-image" loading="lazy" decoding="async" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Excellence Section - Masterfully Crafted */}
        <motion.section 
          className="section content-section luxury-content-section"
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

        {/* Leadership Section - Building Tomorrow */}
        <motion.section 
          className="section content-section luxury-community-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-inner luxury-section-inner">
            <motion.div className="community-content" variants={staggerContainer}>
              <motion.div className="community-text" variants={fadeInUp}>
                <span className="section-badge silver">LEADERSHIP</span>
                <h2 className="content-title luxury-content-title">
                  VISIONARY & PROGRESSIVE LEADERSHIP
                </h2>
                <p className="content-body luxury-content-body">
                  At CALMA, leadership isn't just about guiding projects to completion – it's about pioneering 
                  architectural solutions and digital technologies that elevate the entire real estate development 
                  experience. Our leadership team embodies the perfect balance of visionary thinking and practical execution.
                </p>
                <div className="community-stats">
                  <div className="community-stat">
                    <AnimatedNumber value="77,097" className="stat-number" delay={200} />
                    <span className="stat-label">SQM Land Area</span>
                  </div>
                  <div className="community-stat">
                    <AnimatedNumber value="130,000+" className="stat-number" delay={400} />
                    <span className="stat-label">SQM Building Area</span>
                  </div>
                  <div className="community-stat">
                    <AnimatedNumber value="700+" className="stat-number" delay={600} />
                    <span className="stat-label">Housing Units</span>
                  </div>
                </div>
                <div className="cta-row">
                  <a className="button-link" href="/about#leadership">
                    <Button variant="secondary" className="luxury-button">
                      Meet Our Leadership
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Culture Section - Building Tomorrow's Communities */}
        <motion.section 
          className="section content-section luxury-culture-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-inner luxury-section-inner">
            <motion.div className="culture-content" variants={staggerContainer}>
              <motion.div className="culture-text" variants={fadeInUp}>
                <span className="section-badge bronze">CULTURE</span>
                <h2 className="content-title luxury-content-title">
                  BUILDING TOMORROW'S COMMUNITIES TODAY
                </h2>
                <p className="content-body luxury-content-body">
                  Behind every CALMA development lies a culture of unwavering excellence and purposeful innovation. 
                  Our team doesn't just construct buildings – we cultivate communities where thoughtful spaces create lasting value.
                </p>
                <div className="culture-principles">
                  <div className="principle-item">
                    <AnimatedNumber value={1} className="principle-number" delay={100} formatter={(n) => `0${Math.floor(n)}`} />
                    <h3 className="principle-title">Precision</h3>
                    <p className="principle-description">Masterful attention to detail in every aspect of our work.</p>
                  </div>
                  <div className="principle-item">
                    <AnimatedNumber value={2} className="principle-number" delay={200} formatter={(n) => `0${Math.floor(n)}`} />
                    <h3 className="principle-title">Excellence</h3>
                    <p className="principle-description">Where perfection meets timelessness in every project.</p>
                  </div>
                  <div className="principle-item">
                    <AnimatedNumber value={3} className="principle-number" delay={300} formatter={(n) => `0${Math.floor(n)}`} />
                    <h3 className="principle-title">Innovation</h3>
                    <p className="principle-description">Advanced techniques that shape the future of development.</p>
                  </div>
                  <div className="principle-item">
                    <AnimatedNumber value={4} className="principle-number" delay={400} formatter={(n) => `0${Math.floor(n)}`} />
                    <h3 className="principle-title">Sustainability</h3>
                    <p className="principle-description">Creating developments that benefit future generations.</p>
                  </div>
                </div>
                <div className="cta-row">
                  <a className="button-link" href="/about#culture">
                    <Button variant="secondary" className="luxury-button">
                      Explore Our Culture
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CEO Message Section */}
        <motion.section 
          className="section ceo-message-section luxury-ceo-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Background Div */}
          <div className="ceo-background-container">
            {/* Main Text Div */}
            <div className="ceo-main-content">

                
                <motion.div className="ceo-message" variants={fadeInUp}>
                  <div className="message-content">
                    <span className="section-badge platinum" style={{textAlign: 'center'}}>CEO'S MESSAGE</span>
                    <h2 className="content-title luxury-content-title">
                      WHERE 2,000 DREAMS FIND THEIR ADDRESS
                    </h2>
                    
                    <p className="message-greeting">Dear Valued Partners and Future Residents,</p>
                    
                    <p>
                      When I founded CALMA, I envisioned more than just a real estate development company. I saw an 
                      opportunity to redefine what it means to create spaces that truly matter.
                    </p>
                    
                    <p>
                      Spaces where vision takes shape and where potential flourishes, creating lasting value for 
                      our communities and stakeholders.
                    </p>
                    
                    <p>
                      Today, as I reflect on our journey of 28 successfully delivered projects across Riyadh and 
                      Jeddah, I'm reminded of our true achievement.
                    </p>
                    
                    <p>
                      Our greatest success isn't measured in square meters or construction milestones, but in the 2,000+ 
                      families who now call our developments home. This is more than real estate; this is the future of 
                      refined living. This is CALMA – committed to your calm.
                    </p>
                  </div>
                  
                  <div className="ceo-info-side">
                    <div className="ceo-signature">
                      <img 
                        src={fullLockupLogo} 
                        alt="Calma Full Logo" 
                        className="ceo-logo"
                        loading="lazy"
                        decoding="async"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                      <p className="signature-name"><strong>Musab Al-Majed</strong></p>
                      <p className="signature-title">Chief Executive Officer, CALMA</p>
                    </div>
                  </div>

              </motion.div>
            </div>
          </div>
        </motion.section>
        </div>
      </main>
    </div>
  )
}
