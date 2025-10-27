import './index.css'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import panoramaImage from '@/assets/Backgrounds/Abou-1-p-1600.jpg'
import aboutHeaderImage from '@/assets/Images/About/About-Header.jpg'
import brandValuesImage from '@/assets/Images/About/Brand-Values-1.JPG'
import statsImage1 from '@/assets/Images/About/Stats-77097-sqm.JPG'
import statsImage2 from '@/assets/Images/About/Stats130000-sqm.JPG'

import { Button } from '@/components/ui/button'
import VisionCounter from '@/components/VisionCounter'
import AnimatedNumber from '@/components/ui/AnimatedNumber'
import calmaVideo from '@/assets/Backgrounds/Calma_TV.mp4'

export default function App() {
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

  return (
    <div className="page luxury-real-estate">

      {/* Hero Section - Premium Design */}
      <motion.div 
        className="hero luxury-hero"
        style={{ y, opacity }}
      >
        {/* Background video layer */}
        <div className="hero-media" aria-hidden="true">
          <video
            className="hero-video"
            src={calmaVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="hero-overlay luxury-overlay" />
        </div>

        {/* Consolidated hero content - removed redundant wrapper */}
        <motion.div 
          className="hero-content luxury-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{
            marginTop: '25rem',
          }}
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <span className="badge-text">LUXURY REAL ESTATE EXCELLENCE</span>
          </motion.div>
          <motion.h1 className="hero-title luxury-title shimmer-text" variants={fadeInUp} 
            style={{
              fontSize: '3.5rem',
            }}
          >
            WHERE VISION TAKES SHAPE
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp} style={{
            fontSize: '1.0em',
            fontStyle: 'italic',
          }}>
            Crafting distinguished properties that redefine luxury living across the Kingdom
          </motion.p>
          <motion.div className="hero-actions" variants={fadeInUp}>
            <Button variant="secondary" className="hero-button luxury-button">
              Discover Our Portfolio
            </Button>
            <Button variant="ghost" className="hero-button-secondary">
              View Properties
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="luxury-main">
        
                {/* Brand Showcase */}
        <motion.section 
          className="section luxury-brand-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-inner luxury-section-inner">
            <motion.div className="brand-showcase brand-content" variants={staggerContainer}>
              <div className="floating-text-logo luxury-floating-text">
                <span className="floating-text-main">CALMA</span>
                <span className="floating-text-sub">EXCELLENCE</span>
              </div>
              <h2 className="brand-title">Excellence in Every Square Foot</h2>
              <p className="brand-description">
                We envision a future where architectural excellence and sustainable development converge 
                to transform Saudi Arabia's urban horizons.
              </p>
              <motion.div className="brand-floating-text" variants={fadeInUp}>
                <div className="floating-text-item primary">
                  <span className="floating-text-brand">CALMA</span>
                  <span className="floating-text-tagline">LUXURY DEVELOPMENT</span>
                </div>
                <div className="floating-text-item secondary">
                  <span className="floating-text-brand">CALMA</span>
                  <span className="floating-text-tagline">ARCHITECTURAL EXCELLENCE</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Projects Showcase - Updated */}
        <motion.section 
          className="luxury-projects-showcase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {/* Consolidated showcase content - removed redundant wrapper */}
          <motion.div className="showcase-content luxury-showcase-content">
            <div className="showcase-header">
              <motion.h2 
                className="showcase-title"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                MASTERFULLY CRAFTED DEVELOPMENTS
              </motion.h2>
              <motion.p 
                className="showcase-subtitle"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Where Vision Takes Shape and Potential Flourishes
              </motion.p>
            </div>

            <div className="projects-grid luxury-projects-grid">
            <motion.div 
              className="project-showcase-card residential"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="project-image">
                <img src="/src/assets/Images/About/Asset-3_1.JPG" alt="Residential Excellence" />
                <div className="project-overlay">
                  <div className="project-category">RESIDENTIAL</div>
                  <div className="project-stats">
                    <span className="stat-highlight">350+</span>
                    <span className="stat-text">Premium Units</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Residential Excellence</h3>
                <p>Crafting distinctive Saudi homes where families find their perfect sanctuary</p>
                <div className="project-features">
                  <span className="feature-tag">Family-Focused</span>
                  <span className="feature-tag">Premium Finishes</span>
                  <span className="feature-tag">Community Living</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-showcase-card commercial"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="project-image">
                <img src="/src/assets/Images/About/Commercial-BG.jpg" alt="Commercial Innovation" />
                <div className="project-overlay">
                  <div className="project-category">COMMERCIAL</div>
                  <div className="project-stats">
                    <span className="stat-highlight">50,000+</span>
                    <span className="stat-text">SQM Business Space</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Commercial Innovation</h3>
                <p>Creating dynamic business environments where enterprises thrive and prosper</p>
                <div className="project-features">
                  <span className="feature-tag">Business-Ready</span>
                  <span className="feature-tag">Modern Infrastructure</span>
                  <span className="feature-tag">Strategic Locations</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-showcase-card tower"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="project-image">
                <img src="/src/assets/Images/About/Calma_KSR_ex07_Final02_2025-05-28.JPG" alt="Calma Tower" />
                <div className="project-overlay">
                  <div className="project-category">ICONIC</div>
                  <div className="project-stats">
                    <span className="stat-highlight">Landmark</span>
                    <span className="stat-text">Architectural Marvel</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Calma Tower</h3>
                <p>An architectural landmark that defines the future of urban living in Saudi Arabia</p>
                <div className="project-features">
                  <span className="feature-tag">Iconic Design</span>
                  <span className="feature-tag">Luxury Living</span>
                  <span className="feature-tag">Urban Landmark</span>
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
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
              <motion.div className="panorama-stats" variants={staggerContainer}>
                <motion.div className="stat-item" variants={fadeInLeft}>
                  <AnimatedNumber value={28} className="stat-number" delay={200} />
                  <span className="stat-label">Successfully Delivered Projects</span>
                  <span className="stat-sublabel">Across Riyadh & Jeddah</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInUp}>
                  <AnimatedNumber value="2,000+" className="stat-number" delay={300} />
                  <span className="stat-label">Families Call Us Home</span>
                  <span className="stat-sublabel">Dreams Find Their Address</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInRight}>
                  <AnimatedNumber value="77,097" className="stat-number" delay={400} />
                  <span className="stat-label">SQM Total Land Area</span>
                  <span className="stat-sublabel">Premium Development Space</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInLeft}>
                  <AnimatedNumber value="130,000+" className="stat-number" delay={500} />
                  <span className="stat-label">SQM Building Area</span>
                  <span className="stat-sublabel">Architectural Excellence</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInUp}>
                  <AnimatedNumber value="700+" className="stat-number" delay={600} />
                  <span className="stat-label">Housing Units Delivered</span>
                  <span className="stat-sublabel">Diverse Residential Offerings</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInRight}>
                  <AnimatedNumber value="500,000" className="stat-number" delay={700} />
                  <span className="stat-label">SQM of Possibilities</span>
                  <span className="stat-sublabel">Unfolding Across Saudi Arabia</span>
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

        {/* Masterfully Crafted Section */}
        <motion.section 
          className="section content-section luxury-content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Consolidated content - removed redundant section-inner wrapper */}
          <motion.div className="content-grid luxury-content-grid" variants={staggerContainer}>
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
        </motion.section>

        {/* Building Tomorrow Section */}
        <motion.section 
          className="section content-section luxury-community-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-inner luxury-section-inner">
            <motion.div className="community-content community-text" variants={staggerContainer}>
              <span className="section-badge silver">COMMUNITY</span>
              <h2 className="content-title luxury-content-title">
                BUILDING TOMORROW'S COMMUNITIES TODAY.
              </h2>
              <p className="content-body luxury-content-body">
                Behind every CALMA development lies a culture of unwavering excellence and purposeful innovation. 
                Our team doesn't just construct buildings – we cultivate communities where thoughtful spaces create lasting value.
              </p>
              <div className="community-stats">
                <div className="community-stat">
                  <span className="stat-number">700+</span>
                  <span className="stat-label">Housing Units</span>
                </div>
                <div className="community-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Districts</span>
                </div>
                <div className="community-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Quality Assured</span>
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
          </div>
        </motion.section>

        {/* Projects Showcase */}
        <motion.section 
          id="projects" 
          className="section luxury-projects-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-inner luxury-section-inner">
            <motion.div className="projects-header" variants={fadeInUp}>
              <span className="section-badge">PORTFOLIO</span>
              <h2 className="section-title luxury-section-title">Premium Property Categories</h2>
              <p className="section-description">
                Discover our curated collection of luxury developments across residential, commercial, and landmark properties.
              </p>
            </motion.div>
            <motion.div className="cards luxury-cards" variants={staggerContainer}>
              <motion.article className="card luxury-card residential" variants={fadeInUp}>
                <div className="card-icon">🛜</div>
                <h3>Residential Excellence</h3>
                <p>Refined homes designed for sophisticated living with premium amenities and architectural distinction.</p>
                <div className="card-stats">
                  <span className="card-stat">500+ Units</span>
                  <span className="card-stat">15 Districts</span>
                </div>
              </motion.article>
              <motion.article className="card luxury-card commercial" variants={fadeInUp}>
                <div className="card-icon">🏢</div>
                <h3>Commercial Spaces</h3>
                <p>Modern business environments that inspire productivity and reflect corporate excellence.</p>
                <div className="card-stats">
                  <span className="card-stat">200+ Units</span>
                  <span className="card-stat">Prime Locations</span>
                </div>
              </motion.article>
              <motion.article className="card luxury-card landmark" variants={fadeInUp}>
                <div className="card-icon">🏗️</div>
                <h3>Calma Tower</h3>
                <p>Our signature landmark development representing the pinnacle of architectural achievement.</p>
                <div className="card-stats">
                  <span className="card-stat">Iconic Design</span>
                  <span className="card-stat">Premium Location</span>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </motion.section>





      </main>
    </div>
  )
}