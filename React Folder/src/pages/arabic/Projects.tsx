import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

// Import background images
import backgroundImage1 from '@/assets/Backgrounds/Abou-1-p-1600.jpg'
import backgroundImage2 from '@/assets/Backgrounds/About-Header-p-1600.jpg'
import backgroundImage3 from '@/assets/Backgrounds/CTA-BG-p-1600.jpg'

export default function ArabicProjects() {
  const [selectedCategory, setSelectedCategory] = useState('الكل')

  const categories = ['الكل', 'سكني', 'تجاري', 'فاخر', 'مجتمعي', 'مستدام']

  const projects = [
    // Residential Projects
    { id: 1, name: "أبراج الواحة السكنية", category: "سكني", location: "الرياض الشمالية", price: "1,200,000 ريال", description: "مجمع سكني فاخر يضم 200 وحدة سكنية مع مرافق متكاملة", image: backgroundImage1 },
    { id: 2, name: "حي الأندلس الحديث", category: "سكني", location: "جدة", price: "950,000 ريال", description: "مشروع سكني عصري بتصميم أندلسي معاصر", image: backgroundImage2 },
    { id: 3, name: "قصور النخيل", category: "فاخر", location: "الرياض", price: "3,500,000 ريال", description: "فلل فاخرة مع حدائق خاصة ومرافق ترفيهية حصرية", image: backgroundImage3 },
    
    // Commercial Projects  
    { id: 4, name: "مركز الأعمال المتطور", category: "تجاري", location: "الخبر", price: "5,000,000 ريال", description: "مجمع تجاري متكامل مع مكاتب ومحلات تجارية", image: backgroundImage1 },
    { id: 5, name: "برج التجارة الذكي", category: "تجاري", location: "الرياض", price: "8,000,000 ريال", description: "برج تجاري ذكي بأحدث التقنيات", image: backgroundImage2 },
    
    // Luxury Projects
    { id: 6, name: "منتجع الصحراء الفاخر", category: "فاخر", location: "العلا", price: "12,000,000 ريال", description: "منتجع صحراوي فاخر بإطلالات خلابة", image: backgroundImage3 },
    { id: 7, name: "قصر الملوك", category: "فاخر", location: "الرياض", price: "15,000,000 ريال", description: "قصر ملكي بتصميم معماري استثنائي", image: backgroundImage1 },
    
    // Community Projects
    { id: 8, name: "مدينة المستقبل", category: "مجتمعي", location: "نيوم", price: "2,000,000 ريال", description: "مدينة ذكية متكاملة للمستقبل", image: backgroundImage2 },
    { id: 9, name: "حي العائلات السعيدة", category: "مجتمعي", location: "الدمام", price: "800,000 ريال", description: "مجتمع سكني متكامل للعائلات", image: backgroundImage3 },
    
    // Sustainable Projects
    { id: 10, name: "المدينة الخضراء", category: "مستدام", location: "الرياض", price: "1,800,000 ريال", description: "مشروع سكني صديق للبيئة بتقنيات الطاقة المتجددة", image: backgroundImage1 }
  ]

  const filteredProjects = selectedCategory === 'الكل' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="projects-page" dir="rtl">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              مشاريعنا
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              اكتشف مجموعة متنوعة من المشاريع العقارية المتميزة
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          {/* Category Filter */}
          <motion.div 
            className="filter-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="filter-title">تصفية المشاريع</h2>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-location">{project.location}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-footer">
                    <span className="project-price">{project.price}</span>
                    <button className="project-button">عرض التفاصيل</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="projects-stats"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{projects.length}</div>
                <div className="stat-label">مشروع متاح</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">فئات متنوعة</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15</div>
                <div className="stat-label">مدينة</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">رضا العملاء</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}