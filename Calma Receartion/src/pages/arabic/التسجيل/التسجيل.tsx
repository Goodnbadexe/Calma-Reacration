import { useState } from 'react'
import { motion } from 'framer-motion'
import './التسجيل.css'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  country: string
  propertyType: string
  budget: string
  timeline: string
  message: string
  newsletter: boolean
  updates: boolean
  privacy: boolean
}

export default function ArabicRegister() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', city: '', country: '',
    propertyType: '', budget: '', timeline: '', message: '',
    newsletter: false, updates: false, privacy: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    console.log('تم إرسال النموذج:', formData)
    setIsLoading(false)
    alert('شكرًا لاهتمامك! سنتواصل معك قريبًا.')
  }

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

  return (
    <main className="register-page" dir="rtl" lang="ar">
      {/* Hero Section */}
      <section className="register-hero">
        <motion.div 
          className="register-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>سجّل اهتمامك</h1>
          <p>
            انضم إلى مجتمع CALMA وكن من أوائل من يكتشف فرصنا في التطوير العقاري الفاخر.
            شاركنا تفضيلاتك لنساعدك في العثور على العقار الذي يوافق رؤيتك.
          </p>
        </motion.div>
      </section>

      {/* Registration Form */}
      <section className="register-form-section">
        <div className="form-container">
          <motion.div 
            className="register-form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="form-header" variants={itemVariants}>
              <h2>عرّفنا بنفسك</h2>
              <p>ساعدنا في فهم تفضيلاتك لنقدم توصيات مُخصصة</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="form-grid">
              {/* Personal Information */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="firstName">الاسم الأول *</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="ادخل اسمك الأول" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">اسم العائلة *</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="ادخل اسم العائلة" />
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="example@domain.com" dir="ltr" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+966 5XXXXXXXX" dir="ltr" />
                </div>
              </motion.div>

              {/* Location Information */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="city">المدينة</label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} placeholder="ادخل مدينتك" />
                </div>
                <div className="form-group">
                  <label htmlFor="country">الدولة</label>
                  <select id="country" name="country" value={formData.country} onChange={handleInputChange}>
                    <option value="">اختر الدولة</option>
                    <option value="SA">المملكة العربية السعودية</option>
                    <option value="AE">الإمارات العربية المتحدة</option>
                    <option value="QA">قطر</option>
                    <option value="KW">الكويت</option>
                    <option value="BH">البحرين</option>
                    <option value="OM">عُمان</option>
                    <option value="US">الولايات المتحدة</option>
                    <option value="UK">المملكة المتحدة</option>
                    <option value="CA">كندا</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </motion.div>

              {/* Property Preferences */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="propertyType">نوع العقار المرغوب</label>
                  <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                    <option value="">اختر نوع العقار</option>
                    <option value="residential">سكني</option>
                    <option value="commercial">تجاري</option>
                    <option value="luxury-villa">فيلا فاخرة</option>
                    <option value="apartment">شقة</option>
                    <option value="penthouse">بنتهاوس</option>
                    <option value="office">مكاتب</option>
                    <option value="retail">مساحات تجارية</option>
                    <option value="mixed-use">متعدد الاستخدامات</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">الميزانية</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange}>
                    <option value="">اختر الميزانية</option>
                    <option value="under-1m">أقل من 1M$</option>
                    <option value="1m-5m">1M$ - 5M$</option>
                    <option value="5m-10m">5M$ - 10M$</option>
                    <option value="10m-25m">10M$ - 25M$</option>
                    <option value="25m-50m">25M$ - 50M$</option>
                    <option value="over-50m">أكثر من 50M$</option>
                    <option value="flexible">مرنة</option>
                  </select>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="timeline">المدة الزمنية للشراء</label>
                <select id="timeline" name="timeline" value={formData.timeline} onChange={handleInputChange}>
                  <option value="">اختر المدة الزمنية</option>
                  <option value="immediate">فوري (0-3 أشهر)</option>
                  <option value="short-term">قصير (3-6 أشهر)</option>
                  <option value="medium-term">متوسط (6-12 شهرًا)</option>
                  <option value="long-term">طويل (أكثر من سنة)</option>
                  <option value="exploring">استكشاف فقط</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message">معلومات إضافية</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="اذكر متطلباتك أو تفضيلاتك أو أي أسئلة ترغب بطرحها..." rows={4} />
              </motion.div>

              {/* Preferences */}
              <motion.div className="checkbox-group" variants={itemVariants}>
                <div className="checkbox-item">
                  <input type="checkbox" id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} />
                  <label htmlFor="newsletter">اشترك في النشرة للحصول على رؤى السوق وفرص حصرية</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="updates" name="updates" checked={formData.updates} onChange={handleInputChange} />
                  <label htmlFor="updates">استقبل تحديثات حول المشاريع والفرص الاستثمارية الجديدة</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleInputChange} required />
                  <label htmlFor="privacy">أوافق على سياسة الخصوصية وشروط الاستخدام *</label>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button type="submit" className={`submit-button ${isLoading ? 'loading' : ''}`} disabled={isLoading || !formData.privacy}>
                  {isLoading ? 'جاري الإرسال...' : 'سجّل اهتمامك'}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <motion.div className="benefits-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2>لماذا التسجيل مع CALMA؟</h2>
          </motion.div>

          <motion.div className="benefits-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>وصول حصري</h3>
              <p>كن أول من يعرف عن العقارات الفاخرة والفرص الاستثمارية قبل طرحها للعامة.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>خدمة مخصصة</h3>
              <p>احصل على توصيات مصممة وفقًا لتفضيلاتك وأهدافك الاستثمارية.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>رؤى السوق</h3>
              <p>تقارير حصرية وتحليلات الاتجاهات وفرص الاستثمار من خبرائنا.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>فعاليات VIP</h3>
              <p>دعوات لزيارات عقارية حصرية وفعاليات إطلاق ومناسبات للتواصل.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
