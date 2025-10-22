import React from 'react'
import { motion } from 'framer-motion'
import './Home.css'

export default function EnglishHome() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">Welcome to Calma</h1>
          <p className="hero-subtitle">
            Crafting exceptional real estate experiences with luxury, innovation, and unparalleled quality
          </p>
          <motion.button 
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Projects
          </motion.button>
        </motion.div>
      </motion.section>

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

          {/* Features Grid */}
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🏗️</div>
              <h3 className="feature-title">Premium Construction</h3>
              <p className="feature-description">
                State-of-the-art construction techniques and premium materials ensure 
                lasting quality and exceptional craftsmanship in every project.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Innovative Design</h3>
              <p className="feature-description">
                Our award-winning design team creates spaces that blend functionality 
                with aesthetic excellence, setting new standards in luxury living.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🌟</div>
              <h3 className="feature-title">Exceptional Service</h3>
              <p className="feature-description">
                From initial consultation to final delivery, our dedicated team provides 
                personalized service that ensures your vision becomes reality.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.section 
            className="cta-section"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2 className="cta-title">Ready to Begin Your Journey?</h2>
              <p className="cta-description">
                Discover how Calma can transform your vision into an extraordinary reality. 
                Let's create something exceptional together.
              </p>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}