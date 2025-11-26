import './الرئيسية.css'
import panoramaImage from '../../../assets/Backgrounds/Abou-1-p-1600.jpg'
import { Button } from '../../../components/ui/button'
import VisionCounter from '../../../components/ui/VisionCounter'
import calmaTV from '../../../assets/Videos/Calma_TV.mp4'
import { useEffect, useRef, useState } from 'react'
import { useSplash } from '../../../components/system/SplashProvider'

export default function ArabicHome() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoReady, setVideoReady] = useState(false)
  const { signalReady } = useSplash()

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const onMeta = () => setVideoReady(true)
    el.addEventListener('loadedmetadata', onMeta, { once: true })
    return () => {
      el.removeEventListener('loadedmetadata', onMeta)
    }
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoReady) {
          try { el.play() } catch {}
        } else {
          try { el.pause() } catch {}
        }
      })
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [videoReady])

  return (
    <div className="page" dir="rtl" lang="ar">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        انتقل إلى المحتوى الرئيسي
      </a>

      {/* Hero Section - Creating Spaces with Purpose (with background video) */}
      <section className="hero luxury-hero" dir="rtl" role="banner">
        <div className="hero-media">
          <video
            ref={videoRef}
            className="hero-video"
            src={calmaTV}
            muted
            playsInline
            preload="metadata"
            aria-label="فيديو مقدمة كالما"
            onLoadedData={() => {
              try { videoRef.current?.play() } catch {}
              signalReady()
            }}
          />
        </div>
        <div className="hero-overlay luxury-overlay" />
        <div className="hero-content luxury-hero-content" style={{ marginTop: 0 }}>
          <h1 className="hero-title slide-in-right">
            نخلق مساحات هادفة لتأخذ الرؤية شكلها الحقيقي.
          </h1>
          <p className="hero-subtitle slide-in-right" style={{ animationDelay: '0.2s' }}>
            في كالما، لا نكتفي بتطوير العقارات بل نتصور أسلوب حياة عصري جديد. نضع الاستدامة في صميم التصميم ونلتزم بابتكار مجتمعات تنبض بالحياة وذلك عن طريق مشاريعنا الواعدة قيد التنفيذ ومن خلال مشاريعنا الرائدة الأخرى. نمزج التطور بالإرث، ونبني اليوم على أُسس تليق بالغد، لنُقدم مساحات تتجاوز التوقعات وتمنح كل ساكن شعورًا بالانتماء والتميّز.
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

        {/* Excellence Section - MASTERFULLY CRAFTED */}
        <section className="section content-section luxury-content-section" dir="rtl" aria-labelledby="excellence-heading">
          <div className="section-inner luxury-section-inner">
            <div className="content-showcase">
              <div className="showcase-content">
                <span className="section-badge gold">التميّز</span>
                <h2 id="excellence-heading" className="content-title luxury-content-title">
                  مُتقن الصنع.<br />
                  فريد لك.
                </h2>
                <p className="content-body luxury-content-body">
                  تمثل CALMA ذروة التميز في التطوير العقاري؛ حيث تلتقي الرؤية الطموحة بمعايير لا تقبل المساومة.
                  لا نرفع الأفق العمراني فحسب، بل نرتقي بأسلوب الحياة. ومع توسّعنا في مختلف مدن المملكة، نضع معايير جديدة للفخامة والابتكار.
                </p>
                <div className="excellence-highlights">
                  <div className="highlight-item">
                    <span className="highlight-number">28+</span>
                    <span className="highlight-text">مشاريع مُسلّمة</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">2,000+</span>
                    <span className="highlight-text">عائلة مخدومة</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">3</span>
                    <span className="highlight-text">مدن رئيسية</span>
                  </div>
                </div>
                <div className="cta-row">
                  <a className="button-link" href="/ar/projects">
                    <Button variant="secondary" className="luxury-button">اكتشف مشاريعنا</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section content-section luxury-community-section" dir="rtl" aria-labelledby="leadership-heading">
          <div className="section-inner luxury-section-inner">
            <div className="community-content">
              <div className="community-text">
                <span className="section-badge silver">القيادة</span>
                <h2 id="leadership-heading" className="content-title luxury-content-title">قيادة رؤيوية وتقدميّة</h2>
                <p className="content-body luxury-content-body">
                  في CALMA، القيادة لا تقتصر على إنجاز المشاريع؛ بل تتخطاها إلى ابتكار حلول معمارية وتقنيات رقمية تُعزّز تجربة التطوير بأسرها.
                </p>
                <div className="community-stats">
                  <div className="community-stat">
                    <span className="stat-number">77,097</span>
                    <span className="stat-label">متر مربع أرض</span>
                  </div>
                  <div className="community-stat">
                    <span className="stat-number">130,000+</span>
                    <span className="stat-label">متر مربع بناء</span>
                  </div>
                  <div className="community-stat">
                    <span className="stat-number">700+</span>
                    <span className="stat-label">وحدة سكنية</span>
                  </div>
                </div>
                <div className="cta-row">
                  <a className="button-link" href="/ar/about#culture">
                    <Button variant="secondary" className="luxury-button">استكشف ثقافتنا</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="section ceo-message-section luxury-ceo-section" dir="rtl" aria-labelledby="ceo-heading">
          <div className="ceo-background-container">
            <div className="ceo-main-content">
              <div className="ceo-message">
                <div className="message-content">
                  <span className="section-badge platinum" style={{textAlign:'center'}}>رسالة الرئيس التنفيذي</span>
                  <h2 id="ceo-heading" className="content-title luxury-content-title">حيث تجد 2000+ أسرة عنوانها</h2>
                  <p>
                    عندما أسّست CALMA، لم أرها مجرد شركة تطوير عقاري؛ بل رؤية لإعادة تعريف المساحات التي تصنع الفرق الحقيقي.
                  </p>
                  <p>
                    مساحات تتشكّل فيها الرؤية وتزدهر الإمكانيات، لتصنع قيمة دائمة للمجتمع وأصحاب المصلحة.
                  </p>
                  <p>
                    واليوم، ومع 28 مشروعًا مُسلّمًا في الرياض وجدة، نفتخر بأن إنجازنا الحقيقي يُقاس بالعائلات التي وجدت في مشاريعنا وطنًا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: المشاريع الأبرز - شريط شرائح مبسّط */}
        <section className="section" aria-labelledby="featured-heading" dir="rtl">
          <div className="section-inner">
            <h2 id="featured-heading" className="slide-in-right">المشروع الأبرز</h2>
            <div className="cards rtl-flex-reverse">
              <article className="card slide-in-right" style={{ animationDelay: '0.1s' }}>
                <h3>YS190</h3>
                <p>حي الياسمين — وحدات سكنية بتصميم عصري.</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.2s' }}>
                <h3>YS200</h3>
                <p>حي الياسمين — أدوار سكنية بمعايير عالية.</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.3s' }}>
                <h3>برج كالما</h3>
                <p>حي الصحافة — معلم يواكب الفخامة والتميّز.</p>
              </article>
            </div>
            <span aria-live="polite">Slide 2 of 4.</span>
          </div>
        </section>

        {/* Section 3: مُصمم بإتقان بطابع فريد مثلك. */}
        <section className="section content-section text-on-light" dir="rtl" aria-labelledby="crafted-heading">
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
        <section className="section content-section text-on-light" dir="rtl" aria-labelledby="communities-heading">
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
                <h3>شقق — Calma Tower</h3>
                <p>حي الصحافة</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.15s' }}>
                <h3>تاون هاوس وأدوار — GH220</h3>
                <p>حي الغدير</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.2s' }}>
                <h3>فلل — HT210</h3>
                <p>حي حطين</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.25s' }}>
                <h3>أدوار — RM240</h3>
                <p>حي الرمال</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.3s' }}>
                <h3>تاون هاوس — NK250</h3>
                <p>حي النخيل</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.35s' }}>
                <h3>أدوار — SA230</h3>
                <p>حي الصفا</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.4s' }}>
                <h3>فلل — YS190</h3>
                <p>حي الياسمين</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.45s' }}>
                <h3>أدوار — YS200</h3>
                <p>حي الياسمين</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.5s' }}>
                <h3>أدوار — JN130</h3>
                <p>حي الجنادرية</p>
              </article>
              <article className="card slide-in-right" style={{ animationDelay: '0.55s' }}>
                <h3>تاون هاوس — HT260</h3>
                <p>حي حطين</p>
              </article>
            </div>
            <span aria-live="polite">Slide 2 of 10.</span>
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
