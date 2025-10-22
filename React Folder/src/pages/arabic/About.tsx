import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

export default function ArabicAbout() {
  return (
    <section className="about-page" dir="rtl">
      <div className="background-container">
        {/* Title Section */}
        <div className="title-section">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            عن كالما
          </motion.div>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            نحن نصنع مساحات هادفة تأخذ الرؤية شكلها الحقيقي
          </motion.p>
          
          <motion.p 
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            نحن نؤمن بأن الأرقام تحكي قصة نجاحنا وتطلعاتنا المستقبلية
          </motion.p>
          
          <motion.p 
            className="excellence-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            في كالما، نحن لا نطور العقارات فحسب؛ بل نصمم مستقبل الحياة الحضرية. 
            مع التزامنا بأعلى معايير الجودة والاستدامة، نخلق مساحات تعكس رؤية طموحة 
            وتلبي تطلعات عملائنا المتميزين.
          </motion.p>
          
          <motion.div 
            className="stats-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <div className="stats-grid">
              {[
                { number: "28", label: "مشروع مكتمل", description: "مشاريع عقارية متميزة" },
                { number: "500,000", label: "متر مربع", description: "من الإمكانيات المتاحة" },
                { number: "130,000", label: "متر مربع", description: "مساحة إجمالية مطورة" },
                { number: "77,097", label: "متر مربع", description: "مساحة سكنية فاخرة" },
                { number: "15", label: "سنة خبرة", description: "في التطوير العقاري" },
                { number: "95%", label: "رضا العملاء", description: "معدل الرضا العام" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Leadership Content */}
            <motion.div 
              className="leadership-content"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="leadership-subtitle">قيادة ملهمة</h3>
              <p className="leadership-description">
                تقوم فلسفتنا على ثلاث ركائز أساسية تحدد مسيرتنا نحو التميز والريادة 
                في قطاع التطوير العقاري بالمملكة العربية السعودية.
              </p>
              
              <div className="pillars-count">
                <div className="count-number">3</div>
                <div className="count-label">ركائز أساسية</div>
              </div>
            </motion.div>

            {/* Culture Principles */}
            <div className="culture-principles">
              {[
                {
                  number: "01",
                  title: "الدقة",
                  description: "نحن نؤمن بأن الدقة في التفاصيل هي ما يميز العمل الاستثناري عن العادي."
                },
                {
                  number: "02", 
                  title: "التميز",
                  description: "نسعى دائماً لتحقيق أعلى معايير الجودة في كل مشروع نقوم بتطويره."
                },
                {
                  number: "03",
                  title: "الابتكار", 
                  description: "نتبنى أحدث التقنيات والحلول المبتكرة لخلق مساحات عصرية ومستدامة."
                }
              ].map((principle, index) => (
                <motion.div 
                  key={index}
                  className="principle-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="principle-number">{principle.number}</div>
                  <h4 className="principle-title">{principle.title}</h4>
                  <p className="principle-description">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}