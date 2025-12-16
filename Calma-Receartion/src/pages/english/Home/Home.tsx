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
import anime from 'animejs'
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
import FeaturedProjectsCarousel from '@/components/home/FeaturedProjectsCarousel'
import TestimonialsBand from '@/components/home/TestimonialsBand'
import ProjectPreviewGrid from '@/components/home/ProjectPreviewGrid'
import MissionVision from '@/components/home/MissionVision'
import HomeLayout from '@/components/pages/home/HomeLayout'
import AboutCalma from '@/components/home/AboutCalma'
import Excellence from '@/components/home/Excellence'
import Pillars from '@/components/home/Pillars'
import KPIStats from '@/components/home/KPIStats'

export default function EnglishHome() {
  const panoRef = useRef<HTMLElement | null>(null)
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [heroReady, setHeroReady] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined)
  const [contentVisible, setContentVisible] = useState(false)
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
    const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setContentVisible(true)
      return
    }
    if (!heroReady) return
    setContentVisible(true)
    anime.timeline({ easing: 'easeOutQuad', duration: 500 })
      .add({
        targets: '.luxury-hero-content',
        opacity: [0, 1],
        translateY: [16, 0],
      })
      .add({
        targets: '.reveal-block',
        opacity: [0, 1],
        translateY: [8, 0],
        delay: anime.stagger(120),
      })
  }, [heroReady])
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
  useEffect(() => {
    const el = heroVideoRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !videoSrc) {
          setVideoSrc(calmaTV)
        }
      })
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [videoSrc])

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
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
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

      <HomeLayout dir="ltr" />
    </div>
  )
}
