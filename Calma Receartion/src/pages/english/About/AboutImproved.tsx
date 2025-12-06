import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Button } from '../../../components/ui/button'
import './About-responsive.css'

// Import images
import heroImage1 from '@/assets/Images/About/Hero-1.JPG'
import heroImage2 from '@/assets/Images/About/Hero-2.JPG'
import visionBgImage from '@/assets/Images/About/CTA-BG.JPG'
import ceoMessageBg from '@/assets/Images/About/CTA.JPG'
import asset1Image from '@/assets/Images/About/Asset-1.JPG'
import asset2Image from '@/assets/Images/About/Asset-2.JPG'
import asset3Image from '@/assets/Images/About/Asset-3.JPG'
import asset4Image from '@/assets/Images/About/Asset-4.JPG'
import asset5Image from '@/assets/Images/About/Asset-5.jpg'
import asset6Image from '@/assets/Images/About/Asset-6.JPG'
import asset9Image from '@/assets/Images/About/Asset-9.JPG'
import asset12Image from '@/assets/Images/About/Asset-12.jpg'
import asset14Image from '@/assets/Images/About/Asset-14.jpg'

// Project showcase images
import ksrImage1 from '@/assets/Images/About/Calma_KSR_ex01_Final02_2025-05-28.JPG'
import ksrImage2 from '@/assets/Images/About/Calma_KSR_ex03_Final02_2025-05-28.JPG'
import ksrImage3 from '@/assets/Images/About/Calma_KSR_ex07_Final02_2025-05-28.JPG'
import ys200Image1 from '@/assets/Images/About/YS200--KALMA-2-1-1.JPG'
import ys200Image2 from '@/assets/Images/About/YS200--KALMA-2-1-3.JPG'
import ys200Image3 from '@/assets/Images/About/Asset-1.JPG'

export default function AboutImproved() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const ceoRef = useRef<HTMLDivElement>(null)
  const leadershipRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  
  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  // In-view hooks for animations
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" })
  const ceoInView = useInView(ceoRef, { once: true, margin: "-100px" })
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" })

  // State for dynamic content
  const [, setCurrentImageIndex] = useState(0)

  // Brand values data from documentation
  const brandValues = [
    {
      title: "Masterful Precision",
      description: "Every detail meticulously crafted. Every standard exceeded. We build distinguished projects through unwavering attention to quality at every stage of development.",
      icon: "🎯",
      image: asset1Image
    },
    {
      title: "Visionary Leadership", 
      description: "Pioneering the future of real estate. We lead with innovative architectural solutions and cutting-edge digital technologies that redefine the development experience.",
      icon: "🚀",
      image: asset2Image
    },
    {
      title: "Responsible Stewardship",
      description: "Building for tomorrow, today. Our commitment to environmentally conscious practices and resource efficiency aligns with Vision 2030's transformative environmental goals.",
      icon: "🌱",
      image: asset3Image
    },
    {
      title: "Commanding Standards",
      description: "Excellence without compromise. We ensure absolute transparency and compliance through rigorous internal audit systems and uncompromising governance standards.",
      icon: "⭐",
      image: asset4Image
    }
  ]

  // Stats data
  const statsData = [
    { number: "28", label: "Successfully Delivered Projects", suffix: "+", image: asset1Image },
    { number: "2000", label: "Families Call Our Developments Home", suffix: "+", image: asset2Image },
    { number: "700", label: "Housing Units Delivered", suffix: "+", image: asset5Image },
    { number: "500000", label: "SQM of Possibilities Unfolding", suffix: "", image: asset6Image }
  ]

  // Project showcase gallery
  const projectGallery = [
    { image: ksrImage1, title: "KSR Development", category: "Residential" },
    { image: ksrImage2, title: "KSR Complex", category: "Mixed-Use" },
    { image: ksrImage3, title: "KSR Tower", category: "Commercial" },
    { image: ys200Image1, title: "YS200 Project", category: "Luxury" },
    { image: ys200Image2, title: "YS200 Amenities", category: "Lifestyle" },
    { image: ys200Image3, title: "YS200 Views", category: "Premium" }
  ]

  // Hero gallery images
  const heroGallery = [heroImage1, heroImage2, asset9Image, asset12Image, asset14Image]

  // Leadership pillars
  const leadershipPillars = [
    {
      title: "Elevating Modern Saudi Living",
      description: "Our leaders combine deep market expertise with forward-thinking innovation, ensuring that every CALMA development not only meets today's standards but defines tomorrow's possibilities.",
      icon: "🏗️"
    },
    {
      title: "Designing Future-Ready Living Spaces",
      description: "Through strategic presence in key cities and diverse project portfolios, our leadership team maintains multi-sector expertise while inspiring new destinations.",
      icon: "🎨"
    },
    {
      title: "Crafting Distinctive Saudi Homes",
      description: "With 700+ housing units delivered and diverse residential offerings, our leadership ensures that every development becomes a living destination where communities flourish.",
      icon: "🏠"
    },
    {
      title: "The Art of Purposeful Design",
      description: "Our leadership team oversees 500,000 SQM of possibilities unfolding, ensuring that every CALMA development pulses with the energy of progress and possibility.",
      icon: "✨"
    }
  ]

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroGallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroGallery.length])

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="hero-section"
      >
        {/* Dynamic Background Gallery */}
        <div className="hero-background">
          <div className="hero-gallery">
            {heroGallery.slice(0, 3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className="hero-gallery-item"
              >
                <img 
                  src={image} 
                  alt={`Calma Project ${index + 1}`}
                  className="hero-gallery-image"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-transparent" />
              </motion.div>
            ))}
          </div>
          
          <div className="hero-overlay" />
          
          {/* Floating geometric elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="floating-element absolute top-20 right-20 w-32 h-32 border border-accent rounded-full"
              style={{ y }}
            />
            <motion.div
              className="floating-element-reverse absolute bottom-32 left-16 w-24 h-24 border-2 border-secondary rotate-45"
              style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']) }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-8"
          >
            <span className="hero-badge">
              Excellence in Real Estate
            </span>
            
            <h1 className="hero-title">
              BUILDING VALUE,{' '}
              <span className="hero-title-gradient">
                SHAPING TOMORROW
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Where visionary architecture meets uncompromising excellence. We don't just build properties—we craft legacies that define skylines and transform communities across the Kingdom.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <Button className="hero-button-primary">
              DISCOVER OUR VISION
            </Button>
            <Button className="hero-button-secondary">
              VIEW PROJECTS
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-stats"
          >
            {statsData.map((stat, index) => (
              <motion.div 
                key={index} 
                className="hero-stat-item fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="hero-stat-number">
                  {stat.number}{stat.suffix}
                </div>
                <div className="hero-stat-label">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-indicator"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        ref={visionRef}
        className="vision-section"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 30, 31, 0.85), rgba(7, 30, 31, 0.85)), url(${visionBgImage})`
        }}
      >
        <div className="vision-overlay" />
        <div className="vision-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title">
              LEADING WITH PURPOSE, BUILDING WITH VISION
            </h2>
            <p className="section-description">
              To be the defining force in Saudi Arabia's real estate development, where design meets strategy in exceptional places. We create sustainable landmarks that shape the Kingdom's future, turning spaces into stories and create inspiring environments that reflect a sense of belonging and comfort.
            </p>
            <Button className="hero-button-primary">
              EXPLORE OUR VISION
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* CEO Message Section */}
      <motion.section 
        ref={ceoRef}
        className="ceo-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(7, 30, 31, 0.9), rgba(7, 30, 31, 0.8)), url(${ceoMessageBg})`
        }}
      >
        <div className="ceo-overlay" />
        <div className="ceo-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ceoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-12">
              WHERE 2,000 DREAMS FIND THEIR ADDRESS
            </h2>
            
            <div className="ceo-grid">
              <div className="ceo-text">
                <p className="ceo-message">
                  When I founded CALMA, I envisioned more than just a real estate development company. I saw an opportunity to redefine what it means to create spaces that truly matter – spaces where vision takes shape and where potential flourishes.
                </p>
                <p className="ceo-message">
                  Today, as I reflect on our journey of 28 successfully delivered projects across the cities of Riyadh and Jeddah, I'm reminded that our greatest achievement isn't measured in square meters or construction milestones, but in the 2,000+ families who now call our developments home.
                </p>
                <p className="ceo-message">
                  At CALMA, our foundation is built on unwavering reliability and proven credibility. Every project, every deadline, every promise – delivered with precision and pride. This commitment to excellence has earned us the trust of people across Saudi Arabia, and it drives everything we do as we expand our footprint across the Kingdom.
                </p>
                
                <div className="ceo-signature">
                  <div className="ceo-name">Musab Al-Majed</div>
                  <div className="ceo-title">Chief Executive Officer, CALMA</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section 
        ref={leadershipRef}
        className="leadership-section"
      >
        <div className="leadership-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              VISIONARY & PROGRESSIVE LEADERSHIP
            </h2>
            <p className="section-subtitle">
              BUILDING TOMORROW'S COMMUNITIES TODAY
            </p>
            <p className="section-description">
              At CALMA, leadership isn't just about guiding projects to completion – it's about pioneering architectural solutions and digital technologies that elevate the entire real estate development experience.
            </p>
            
            <div className="leadership-grid">
              {leadershipPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="leadership-card"
                >
                  <div className="leadership-icon">{pillar.icon}</div>
                  <h3 className="leadership-title">{pillar.title}</h3>
                  <p className="leadership-description">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Brand Values Section */}
      <motion.section 
        ref={valuesRef}
        className="brand-values-section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              DISTINCTIVE SPACES WITH VISION
            </h2>
            <p className="section-description">
              Our leadership philosophy centers on four core pillars that define our approach to every project and strategic decision.
            </p>
            
            <div className="brand-values-grid">
              {brandValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="brand-value-card"
                >
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="brand-value-image"
                  />
                  <div className="brand-value-overlay">
                    <div className="brand-value-icon">{value.icon}</div>
                    <h3 className="brand-value-title">{value.title}</h3>
                    <p className="brand-value-description">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Gallery Section */}
      <motion.section 
        ref={galleryRef}
        className="project-gallery-section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              OUR PORTFOLIO OF EXCELLENCE
            </h2>
            <p className="section-description">
              Explore our distinguished projects that showcase our commitment to architectural excellence and innovative design.
            </p>
            
            <div className="project-gallery-grid">
              {projectGallery.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="project-gallery-item"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-gallery-image"
                  />
                  <div className="project-gallery-overlay">
                    <h3 className="project-gallery-title">{project.title}</h3>
                    <p className="project-gallery-category">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
