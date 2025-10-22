import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import logoC from '@/assets/Logos/BRANDMARK_01-p-2000.png'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Menu } from 'lucide-react'
import { useSplash } from '@/components/system/SplashProvider'

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { showSplash } = useSplash()
  const isArabic = location.pathname.startsWith('/ar')
  const [isTransparent, setIsTransparent] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const computeTransparency = () => {
      const firstSection = document.getElementById('panorama') || document.querySelector('.hero') as HTMLElement | null
      const header = document.querySelector('header.glass-nav') as HTMLElement | null
      if (!firstSection) {
        setIsTransparent(false)
        return
      }
      const sectionTop = firstSection.offsetTop
      const sectionHeight = firstSection.offsetHeight
      const scrollY = window.scrollY
      const headerHeight = header?.offsetHeight ?? 0
      const sectionBottom = sectionTop + sectionHeight
      // Keep header transparent only while overlapping the first section (hero/panorama)
      const overlappingFirst = scrollY < (sectionBottom - headerHeight)
      setIsTransparent(overlappingFirst)
    }

    computeTransparency()
    window.addEventListener('scroll', computeTransparency)
    window.addEventListener('resize', computeTransparency)
    return () => {
      window.removeEventListener('scroll', computeTransparency)
      window.removeEventListener('resize', computeTransparency)
    }
  }, [])

  // Hide header on scroll down, show on scroll up (disabled on mobile and when drawer is open)
  useEffect(() => {
    lastScrollY.current = window.scrollY
    const handleScroll = () => {
      const header = document.querySelector('header.glass-nav') as HTMLElement | null
      const current = window.scrollY
      const delta = current - lastScrollY.current
      const nearTop = current < 24
      const isMobile = window.innerWidth < 760
      const headerHeight = header?.offsetHeight ?? 0
      let hide = false
      if (!isMobile && !drawerOpen) {
        if (delta > 8 && current > headerHeight + 8) hide = true
        if (delta < -8 || nearTop) hide = false
      }
      setIsHidden(hide)
      lastScrollY.current = current
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [drawerOpen])

  return (
    <>
    <header
      className={`glass-nav ${isTransparent ? 'nav-transparent' : 'nav-solid'} ${isHidden ? 'nav-hidden' : 'nav-visible'}`}
      role="navigation"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className="section-inner"
        style={{
          padding: '8px 16px',
        }}
      >
        {/* Left-aligned: Logo */}
        <Link
          to={isArabic ? '/ar' : '/'}
          className="logo"
          aria-label="Calma Home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          <img
            src={logoC}
            alt={isArabic ? 'كالما شعار' : 'Calma Logo'}
            style={{ width: 36, height: 36, }}
          />
          <span style={{ fontWeight: 600, fontSize: 24, marginTop: '5px',}}>{isArabic ? 'كالما' : 'Calma'}</span>
        </Link>

        <div className="nav-links" aria-label={isArabic ? 'التنقل الرئيسي' : 'Primary navigation'}>
          <span className="nav-link" onClick={() => { 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
            showSplash(); 
            setTimeout(() => navigate(isArabic ? '/ar' : '/'), 100); 
          }}>{isArabic ? 'الرئيسية' : 'Home'}</span>
          <span className="nav-link" onClick={async () => { 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
            await showSplash(); 
            navigate('/about'); 
          }}>{isArabic ? 'عن كالما' : 'About Calma'}</span>
          <details className="dropdown">
            <summary className="dropdown-trigger">
              {isArabic ? 'المشاريع' : 'Projects'} <span aria-hidden>▾</span>
            </summary>
            <div className="dropdown-menu">
              <span className="dropdown-item" onClick={async () => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                await showSplash(); 
                navigate('/projects'); 
              }}>{isArabic ? 'كل المشاريع' : 'All Projects'}</span>
              <span className="dropdown-item" onClick={async () => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                await showSplash(); 
                navigate('/projects/commercials'); 
              }}>{isArabic ? 'تجارية' : 'Commercials'}</span>
              <span className="dropdown-item" onClick={async () => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                await showSplash(); 
                navigate('/projects/residential'); 
              }}>{isArabic ? 'سكنية' : 'Residential'}</span>
              <span className="dropdown-item" onClick={async () => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                await showSplash(); 
                navigate('/projects/calma-tower'); 
              }}>{isArabic ? 'برج كالما' : 'Calma Tower'}</span>
            </div>
          </details>
          <span className="nav-link" onClick={async () => { 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
            await showSplash(); 
            navigate('/news'); 
          }}>{isArabic ? 'الأخبار' : 'News'}</span>
        </div>

        {/* Right-aligned: Actions */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Phone action */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={isArabic ? 'اتصل' : 'Call'}
            onClick={() => (window.location.href = 'tel:+966920006553')}
            title={isArabic ? 'اتصل بنا' : 'Call us'}
          >
            <Phone className="icon" />
          </Button>

          {/* Message action (desktop) */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={isArabic ? 'رسالة' : 'Message'}
            onClick={() => { showSplash(); setTimeout(() => navigate('/register'), 100) }}
          >
            <MessageCircle className="icon" />
          </Button>

          {/* Language toggle */}
          {isArabic ? (
            <span className="nav-link" style={{ fontSize: 13 }} onClick={() => { showSplash(); setTimeout(() => navigate('/'), 100) }}>English</span>
          ) : (
            <span className="nav-link" style={{ fontSize: 13 }} onClick={() => { showSplash(); setTimeout(() => navigate('/ar'), 100) }}>العربية</span>
          )}

          <Button className="rounded-full register-button" onClick={() => { showSplash(); setTimeout(() => navigate('/register'), 100) }}>{isArabic ? 'سجل اهتمامك' : 'Register Your Interest'}</Button>

          {/* Burger menu trigger styled like existing buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="burger-button"
            aria-label={isArabic ? 'افتح القائمة' : 'Open menu'}
            onClick={() => setDrawerOpen(true)}
            title={isArabic ? 'افتح القائمة' : 'Open menu'}
          >
            <Menu className="icon" />
          </Button>
        </div>
      </div>
    </header>
    {/* Mobile drawer overlay */}
    {drawerOpen && (
      <div className="mobile-menu open" onClick={() => setDrawerOpen(false)} dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          <div className="panel-header">
            <div className="logo">{isArabic ? 'كالما - Calma' : 'Calma'}</div>
            <Button variant="ghost" size="icon" aria-label={isArabic ? 'أغلق القائمة' : 'Close menu'} onClick={() => setDrawerOpen(false)}>
              <span aria-hidden>✕</span>
            </Button>
          </div>
          <div className="panel-links">
            <span className="nav-link" onClick={() => { setDrawerOpen(false); showSplash(); setTimeout(() => navigate(isArabic ? '/ar' : '/'), 100); }}>{isArabic ? 'الرئيسية' : 'Home'}</span>
            <span className="nav-link" onClick={() => { setDrawerOpen(false); showSplash(); setTimeout(() => navigate('/about'), 100); }}>{isArabic ? 'عن كالما' : 'About Calma'}</span>
            <span className="nav-link" onClick={() => { setDrawerOpen(false); showSplash(); setTimeout(() => navigate('/projects'), 100); }}>{isArabic ? 'كل المشاريع' : 'All Projects'}</span>
            <span className="nav-link" onClick={() => { setDrawerOpen(false); showSplash(); setTimeout(() => navigate('/projects/commercials'), 100); }}>{isArabic ? 'تجارية' : 'Commercials'}</span>
            <span className="nav-link" onClick={() => { setDrawerOpen(false); showSplash(); setTimeout(() => navigate('/projects/residential'), 100); }}>{isArabic ? 'سكنية' : 'Residential'}</span>
            <span className="nav-link" onClick={() => { setDrawerOpen(false); showSplash(); setTimeout(() => navigate('/projects/calma-tower'), 100); }}>{isArabic ? 'برج كالما' : 'Calma Tower'}</span>
            <span className="nav-link" onClick={() => { setDrawerOpen(false); showSplash(); setTimeout(() => navigate('/news'), 100); }}>{isArabic ? 'الأخبار' : 'News'}</span>
          </div>
          <div className="panel-actions">
            <Button variant="ghost" size="icon" aria-label={isArabic ? 'اتصل' : 'Call'} onClick={() => (window.location.href = 'tel:+966920006553')}>
              <Phone className="icon" />
            </Button>
            <Button variant="ghost" size="icon" aria-label={isArabic ? 'رسالة' : 'Message'} onClick={() => navigate('/register')}>
              <MessageCircle className="icon" />
            </Button>
            {isArabic ? (
              <span className="nav-link" onClick={() => navigate('/')}>English</span>
            ) : (
              <span className="nav-link" onClick={() => navigate('/ar')}>العربية</span>
            )}
            <Button className="rounded-full register-button" onClick={async () => { setDrawerOpen(false); await showSplash(); navigate('/register') }}>{isArabic ? 'سجل اهتمامك' : 'Register Your Interest'}</Button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}