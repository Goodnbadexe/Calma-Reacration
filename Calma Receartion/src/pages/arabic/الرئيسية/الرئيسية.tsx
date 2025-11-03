import './الرئيسية.css'
import panoramaImage from '../../../assets/Backgrounds/Abou-1-p-1600.jpg'
import { Button } from '../../../components/ui/button'
import VisionCounter from '../../../components/ui/VisionCounter'

export default function ArabicHome() {
  return (
    <div className="page" dir="rtl" lang="ar">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        انتقل إلى المحتوى الرئيسي
      </a>

      {/* Hero Section - Creating Spaces with Purpose */}
      <section className="hero" dir="rtl" role="banner">
        <div className="hero-content" style={{ marginTop: '350px' }}>
          <h1 className="hero-title slide-in-right">
            نخلق مساحات هادفة لتأخذ الرؤية شكلها الحقيقي.
          </h1>
          <p className="hero-subtitle slide-in-right" style={{ animationDelay: '0.2s' }}>
            في كالما، لا نكتفي بتطوير العقارات بل نتصور أسلوب حياة عصرية جديد. نضع الاستدامة في صميم التصميم ونلتزم بابتكار مجتمعات تنبض بالحياة وذلك عن طريق مشاريعنا الواعدة قيد التنفيذ ومن خلال مشاريعنا الرائدة الأخرى. 
            نمزج التطور بالإرث، ونبني اليوم على أُسس تليق بالغد. لنُقدم مساحات تتجاوز التوقعات وتمنح كل ساكن شعورًا بالانتماء والرؤية.
          </p>
        </div>
        <Button 
          variant="secondary" 
          className="hero-button slide-in-right" 
          style={{ animationDelay: '0.4s' }}
          aria-label="تعرف على شركة كالما ومشاريعها"
        >
          تعرف على كالما
        </Button>
      </section>

      {/* Main content */}
      <main id="main-content" dir="rtl" role="main">
        {/* Section 1: Connecting 2,000 Residents */}
        <section 
          id="panorama" 
          className="section panorama" 
          style={{ 
            backgroundImage: `url(${panoramaImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
          aria-labelledby="panorama-heading"
        >
          <div className="panorama-overlay" dir="rtl">
            <VisionCounter 
              target={2000} 
              heading="رافقنا أكثر من 2000 شخص في رحلتهم نحو الحلم" 
              label="المقيمون" 
              suffix="+" 
              locale="ar" 
            />
            <div className="panorama-content">
              <h2 id="panorama-heading" className="panorama-subheading slide-in-right">
                هنا تزدهر الإمكانيات.
              </h2>
              <p className="panorama-body slide-in-right" style={{ animationDelay: '0.2s' }}>
                في كالما، لا نبني مجرد مشاريع، بل نبني مجتمعات تنبض بالحياة ، وتتجاوز حدود التوقع.
                بُنيت رؤيتنا لتنسج بين تنوع الثقافات وعمق التقاليد المحلية، لنصنع بيئة يشعر فيها المواطن بالانتماء. من قلب الرياض، إلى امتداد المملكة...نُصيغ تعريف جديد للانتماء.
              </p>
              <Button 
                variant="secondary" 
                className="panorama-button slide-in-right" 
                style={{ animationDelay: '0.4s' }}
                aria-label="تعرف على رؤية شركة كالما"
              >
                تعرف على رؤيتنا
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Masterfully Crafted */}
        <section className="section content-section" dir="rtl" aria-labelledby="crafted-heading">
          <div className="section-inner">
            <h2 id="crafted-heading" className="content-title slide-in-right">
              مُصمم بإتقان بطابع فريد مثلك.
            </h2>
            <p className="content-body slide-in-right" style={{ animationDelay: '0.2s' }}>
              تمثل كالما ذروة التميز في قطاع التطوير العقاري، حيث تلتقي الرؤية الطموحة بأعلى معايير الجودة. لا تكتفي مشاريعنا بتغيير المشهد بل ترتقي بأسلوب الحياة، وتمنح كل تفصيلة بُعدًا يعكس فخامة من نوع جديد. ومع توسع حضورنا في مختلف أنحاء المملكة، نواصل ترسيخ معايير جديدة في عالم التطوير ونشيد معالم ملهمة تجسد معنى الاستدامة والتميز.
            </p>
            <div className="cta-row">
              <a 
                className="button-link" 
                href="/ar/projects" 
                aria-label="اكتشف مشاريع كالما العقارية"
              >
                <Button 
                  variant="secondary" 
                  className="slide-in-right" 
                  style={{ animationDelay: '0.4s' }}
                >
                  اكتشف مشاريعنا
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Building Tomorrow's Communities */}
        <section className="section content-section" dir="rtl" aria-labelledby="communities-heading">
          <div className="section-inner">
            <h2 id="communities-heading" className="content-title slide-in-right">
              نبني مجتمعات الغد.
            </h2>
            <p className="content-body slide-in-right" style={{ animationDelay: '0.2s' }}>
              خلف كل مشروع من مشاريع كالما ثقافة راسخة من التفرد اللامحدود والتميز الهادف يعمل فريقنا على بناء ما هو أكثر من مباني كل يوم عن طريق بناء مجتمعات متكاملة وتصميم مساحات بعناية تامة لتمنح قيمة دائمة عبر الزمن.
            </p>
            <div className="cta-row">
              <a 
                className="button-link" 
                href="/ar/about#culture" 
                aria-label="تعرف على ثقافة شركة كالما"
              >
                <Button 
                  variant="secondary" 
                  className="slide-in-right" 
                  style={{ animationDelay: '0.4s' }}
                >
                  تعرف على ثقافتنا
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section" dir="rtl" aria-labelledby="projects-heading">
          <div className="section-inner">
            <h2 id="projects-heading" className="slide-in-right">المشاريع</h2>
            <div className="cards rtl-flex-reverse">
              <article className="card slide-in-right" style={{ animationDelay: '0.1s' }}>
                <h3>سكنية</h3>
                <p>منازل راقية تجمع بين الفخامة والراحة.</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.2s' }}>
                <h3>تجارية</h3>
                <p>مساحات أعمال عصرية تلبي احتياجات المستقبل.</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.3s' }}>
                <h3>برج كالما</h3>
                <p>معلم مميز يعيد تعريف الأناقة المعمارية.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="maps" className="section maps" dir="rtl" aria-labelledby="maps-heading">
          <div className="section-inner">
            <h2 id="maps-heading" className="slide-in-right">خرائط المشاريع</h2>
            <div className="interactive-map">
              <div className="map-container" role="img" aria-label="خريطة تفاعلية تظهر مواقع مشاريع كالما في المملكة العربية السعودية">
                <div className="map-overlay">
                  <div className="map-locations">
                    <div className="location-pin slide-in-right" style={{top: '30%', right: '25%', animationDelay: '0.1s'}}>
                      <div className="pin-marker" role="button" tabIndex={0} aria-label="موقع الرياض الشمالية"></div>
                      <div className="location-info">
                        <h4>الرياض الشمالية</h4>
                        <p>مشاريع سكنية فاخرة تجمع بين الحداثة والتراث</p>
                      </div>
                    </div>
                    <div className="location-pin slide-in-right" style={{top: '45%', right: '15%', animationDelay: '0.2s'}}>
                      <div className="pin-marker" role="button" tabIndex={0} aria-label="موقع جدة التاريخية"></div>
                      <div className="location-info">
                        <h4>جدة التاريخية</h4>
                        <p>فلل التراث العصرية بلمسة معاصرة</p>
                      </div>
                    </div>
                    <div className="location-pin slide-in-right" style={{top: '35%', right: '35%', animationDelay: '0.3s'}}>
                      <div className="pin-marker" role="button" tabIndex={0} aria-label="موقع الحي المالي"></div>
                      <div className="location-info">
                        <h4>الحي المالي</h4>
                        <p>برج كالما الأيقوني - رمز التميز المعماري</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-background">
                  <svg viewBox="0 0 800 400" className="saudi-map" aria-hidden="true">
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

        <section id="news" className="section" dir="rtl" aria-labelledby="news-heading">
          <div className="section-inner">
            <h2 id="news-heading" className="slide-in-right">أحدث الأخبار</h2>
            <ul className="news-list" role="list">
              <li className="slide-in-right" style={{ animationDelay: '0.1s' }} role="listitem">
                <strong>تحقيق إنجاز جديد في برج كالما</strong> - وصلنا إلى مرحلة مهمة في تطوير هذا المعلم المعماري المميز.
              </li>
              <li className="slide-in-right" style={{ animationDelay: '0.2s' }} role="listitem">
                <strong>معاينة إطلاق المشروع السكني الجديد</strong> - استعدوا لتجربة مفهوم جديد للحياة العصرية.
              </li>
              <li className="slide-in-right" style={{ animationDelay: '0.3s' }} role="listitem">
                <strong>الإعلان عن المنطقة التجارية المتطورة</strong> - مساحات تجارية تعيد تعريف بيئة الأعمال.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}