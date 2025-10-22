import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import VisionCounter from '@/components/VisionCounter'
import AnimatedNumber from '@/components/ui/AnimatedNumber'
import panoramaImage from '@/assets/Backgrounds/Abou-1-p-1600.jpg'
import aboutHeaderImage from '@/assets/Images/About/About-Header.jpg'
import brandValuesImage from '@/assets/Images/About/Brand-Values-1.JPG'
import statsImage1 from '@/assets/Images/About/Stats-77097-sqm.JPG'
import statsImage2 from '@/assets/Images/About/Stats130000-sqm.JPG'

import fullLockupLogo from '@/assets/Logos/BRANDMARK_01-p-2000.png'
import group270Logo from '@/assets/Images/About/Group-270.png'
import possibilitiesIcon from '@/assets/Icons/500000-sqm-of-possibilities-unfolding..png'
import heroImage from '@/assets/Backgrounds/About-Header-p-1600.jpg'
import './About.css'

export default function About() {
  const panoRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
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
    <div className="page luxury-real-estate">

      {/* Hero Section - Premium Design */}
      <motion.div 
        className="hero luxury-hero"
        style={{ y, opacity }}
      >
        {/* Background image layer */}
        <div className="hero-media" aria-hidden="true">
          <img
            className="hero-video"
            src={heroImage}
            alt="Calma Development Hero"
            loading="eager"
          />
        </div>

        {/* Overlay */}
        <div className="hero-overlay luxury-overlay"></div>

        {/* Foreground content */}
        <motion.div 
          className="hero-content luxury-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <span className="badge-text">BUILDING VALUE, SHAPING TOMORROW</span>
          </motion.div>
          <motion.h1 className="hero-title luxury-title" variants={fadeInUp}>
            LEADING WITH PURPOSE, BUILDING WITH VISION
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            To be the defining force in Saudi Arabia's real estate development, where design meets strategy in exceptional places.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeInUp}>
            <Button variant="secondary" className="hero-button luxury-button">
              Discover Our Story
            </Button>
            <Button variant="ghost" className="hero-button-secondary">
              View Our Vision
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="luxury-main">
        
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
                    <span className="feature-icon">🏗️</span>
                    <span className="feature-text">Sustainable Development</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌟</span>
                    <span className="feature-text">Premium Quality</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🏙️</span>
                    <span className="feature-text">Urban Innovation</span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="content-image" variants={fadeInRight}>
                <img src={aboutHeaderImage} alt="Calma Development" className="luxury-image" />
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
                  MASTERFULLY CRAFTED. UNIQUELY YOURS.
                </h2>
                <p className="content-body luxury-content-body">
                  CALMA represents the pinnacle of real estate excellence, where visionary development meets 
                  uncompromising standards. Our portfolio of prestigious projects doesn't just raise skylines – 
                  it elevates lifestyles. As we expand our footprint across the KSA, we're setting new benchmarks 
                  in luxury development, creating landmarks that inspire and endure.
                </p>
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
                  <img src={brandValuesImage} alt="Brand Values" className="grid-image primary" />
                  <img src={statsImage1} alt="Development Stats" className="grid-image secondary" />
                  <img src={statsImage2} alt="Project Scale" className="grid-image tertiary" />
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

      </main>
    </div>
  )
}