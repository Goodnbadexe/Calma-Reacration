import './Home.css'
import panoramaImage from '@/assets/Backgrounds/Abou-1-p-1600.jpg'
import { Button } from '@/components/ui/button'
import VisionCounter from '@/components/VisionCounter'

export default function ArabicHome() {
  return (
    <div className="page">

      {/* Hero */}
      <div className="hero" dir="rtl">
        <div style={{ marginTop: '350px' }}>
          <h1 className="hero-title">نخلق مساحات هادفة لتأخذ الرؤية شكلها الحقيقي.</h1>
        </div>
        <Button variant="secondary" className="hero-button">اكتشف المزيد</Button>
      </div>

      {/* Main content */}
      <main dir="rtl">
        {/* أقسام المحتوى بناءً على نص الصفحة الرئيسية */}


        <section id="panorama" className="section panorama" style={{ backgroundImage: `url(${panoramaImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="panorama-overlay" dir="rtl">
            <VisionCounter target={2000} heading="حيث تتجسد الرؤية" label="المقيمون" suffix="+" locale="ar" />
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-inner">
            <h2>عن كالما</h2>
            <p>
              في كالما، لا نطور العقارات فحسب؛ بل نصمم مستقبل الحياة الحضرية. مع 28 مشروعًا بارزًا وعدة مشاريع قيد التنفيذ، ندمج أحدث ممارسات الاستدامة لتكون مشاريعنا معيارًا لليوم وتعريفًا لإمكانيات الغد.
            </p>
          </div>
        </section>

        {/* القسم 3: مصمم بإتقان بطابع فريد */}
        <section className="section content-section" dir="rtl">
          <div className="section-inner">
            <h2 className="content-title">مُصمم بإتقان بطابع فريد مثلك.</h2>
            <p className="content-body">
              تمثل كالما ذروة التميز في قطاع التطوير العقاري، حيث تلتقي الرؤية الطموحة بأعلى معايير الجودة. لا تكتفي مشاريعنا بتغيير المشهد بل ترتقي بأسلوب الحياة، وتمنح كل تفصيلة بُعدًا يعكس فخامة من نوع جديد. ومع توسع حضورنا في مختلف أنحاء المملكة، نواصل ترسيخ معايير جديدة في عالم التطوير ونشيد معالم ملهمة تجسد معنى الاستدامة والتميز.
            </p>
            <div className="cta-row">
              <a className="button-link" href="/projects">
                <Button variant="secondary">اكتشف مشاريعنا</Button>
              </a>
            </div>
          </div>
        </section>

        {/* القسم 4: نبني مجتمعات الغد */}
        <section className="section content-section" dir="rtl">
          <div className="section-inner">
            <h2 className="content-title">نبني مجتمعات الغد.</h2>
            <p className="content-body">
              خلف كل مشروع من مشاريع كالما ثقافة راسخة من التفرد اللامحدود والتميز الهادف. يعمل فريقنا على بناء ما هو أكثر من مباني كل يوم عن طريق بناء مجتمعات متكاملة وتصميم مساحات بعناية تامة لتمنح قيمة دائمة عبر الزمن.
            </p>
            <div className="cta-row">
              <a className="button-link" href="/about#culture">
                <Button variant="secondary">تعرف على ثقافتنا</Button>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <h2>المشاريع</h2>
            <div className="cards">
              <article className="card"><h3>سكنية</h3><p>منازل راقية.</p></article>
              <article className="card"><h3>تجارية</h3><p>مساحات أعمال عصرية.</p></article>
              <article className="card"><h3>برج كالما</h3><p>معلم مميز.</p></article>
            </div>
          </div>
        </section>

        <section id="maps" className="section maps">
          <div className="section-inner">
            <h2>خرائط المشاريع</h2>
            <div className="interactive-map">
              <div className="map-container">
                <div className="map-overlay">
                  <div className="map-locations">
                    <div className="location-pin" style={{top: '30%', left: '25%'}}>
                      <div className="pin-marker"></div>
                      <div className="location-info">
                        <h4>الرياض الشمالية</h4>
                        <p>مشاريع سكنية فاخرة</p>
                      </div>
                    </div>
                    <div className="location-pin" style={{top: '45%', left: '15%'}}>
                      <div className="pin-marker"></div>
                      <div className="location-info">
                        <h4>جدة التاريخية</h4>
                        <p>فلل التراث العصرية</p>
                      </div>
                    </div>
                    <div className="location-pin" style={{top: '35%', left: '35%'}}>
                      <div className="pin-marker"></div>
                      <div className="location-info">
                        <h4>الحي المالي</h4>
                        <p>برج كالما الأيقوني</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-background">
                  <svg viewBox="0 0 800 400" className="saudi-map">
                    <path d="M50,200 Q200,150 400,180 Q600,200 750,190 Q750,250 600,280 Q400,300 200,270 Q50,250 50,200 Z" 
                          fill="var(--color-sage)" opacity="0.3" stroke="var(--color-charcoal)" strokeWidth="2"/>
                    <circle cx="200" cy="200" r="8" fill="var(--color-gold)" className="city-marker"/>
                    <circle cx="120" cy="230" r="8" fill="var(--color-gold)" className="city-marker"/>
                    <circle cx="280" cy="190" r="8" fill="var(--color-gold)" className="city-marker"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="section">
          <div className="section-inner">
            <h2>الأخبار</h2>
            <ul className="news-list">
              <li>تحقيق إنجاز جديد في برج كالما.</li>
              <li>معاينة إطلاق المشروع السكني.</li>
              <li>الإعلان عن المنطقة التجارية.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}