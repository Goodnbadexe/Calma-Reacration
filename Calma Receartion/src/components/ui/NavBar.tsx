import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import logoC from '@/assets/Logos/BRANDMARK_01-p-2000.png'
import { Button } from '@/components/ui/button'
import { Menu, Globe, X, ChevronDown, Phone, MessageCircle } from 'lucide-react'
import { useSplash } from '@/components/system/SplashProvider'
import { useLanguage } from '@/contexts/LanguageContext'
import anime from 'animejs'
import { createMagneticEffect } from '@/utils/helpers'

export default function NavBar() {
  const navigate = useNavigate()
  const { showSplash } = useSplash()
  const { language, toggleLanguage, t } = useLanguage()
  const isArabic = language === 'ar'
  const [isTransparent, setIsTransparent] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  // Keep navbar always visible to avoid layout glitches
  const [isHidden] = useState(false)

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })

  // Animation refs
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let ticking = false
    
    const computeTransparency = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const firstSection = document.getElementById('panorama') || document.querySelector('.hero') as HTMLElement | null
          const header = document.querySelector('header.glass-nav') as HTMLElement | null
          
          if (!firstSection) {
            setIsTransparent(false)
            ticking = false
            return
          }
          
          const sectionTop = firstSection.offsetTop
          const sectionHeight = firstSection.offsetHeight
          const scrollY = window.scrollY
          const headerHeight = header?.offsetHeight ?? 0
          const sectionBottom = sectionTop + sectionHeight
          
          // Keep header transparent only while overlapping the first section (hero/panorama)
          // Add a small buffer for smoother transition
          const overlappingFirst = scrollY < (sectionBottom - headerHeight - 20)
          setIsTransparent(overlappingFirst)
          ticking = false
        })
        ticking = true
      }
    }

    computeTransparency()
    window.addEventListener('scroll', computeTransparency, { passive: true })
    window.addEventListener('resize', computeTransparency, { passive: true })
    return () => {
      window.removeEventListener('scroll', computeTransparency)
      window.removeEventListener('resize', computeTransparency)
    }
  }, [])

  // Initialize animations and magnetic effects
  useEffect(() => {
    // Initial navbar entrance animation
    if (navRef.current && anime) {
      anime({
        targets: navRef.current,
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 200
      })
    }

    // Stagger animation for nav links
    if (linksRef.current && anime) {
      anime({
        targets: linksRef.current.children,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100, {start: 500}),
        easing: 'easeOutQuart'
      })
    }

    // Logo animation
    if (logoRef.current && anime) {
      anime({
        targets: logoRef.current,
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutElastic',
        delay: 300
      })
    }

    // Actions animation
    if (actionsRef.current && anime) {
      anime({
        targets: actionsRef.current.children,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(80, {start: 600}),
        easing: 'easeOutBack'
      })
    }

    // Magnetic effect for buttons
    createMagneticEffect('.action-button', 0.3)
  }, [])

  // Animate navbar visibility changes
  useEffect(() => {
    if (navRef.current && anime) {
      anime({
        targets: navRef.current,
        translateY: isHidden ? -100 : 0,
        opacity: isHidden ? 0 : 1,
        duration: 400,
        easing: 'easeOutQuart'
      })
    }
  }, [isHidden])

  // Animate transparency changes
  useEffect(() => {
    if (navRef.current && anime) {
      anime({
        targets: navRef.current,
        duration: 300,
        easing: 'easeOutQuart',
        complete: () => {
          // Trigger CSS class change after animation
          navRef.current?.classList.toggle('nav-transparent', isTransparent)
          navRef.current?.classList.toggle('nav-solid', !isTransparent)
        }
      })
    }
  }, [isTransparent])

  // Removed hide-on-scroll behavior to ensure consistent, predictable navbar visibility

  // Click outside handler to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (dropdownOpen && !target.closest('.dropdown-portal') && !target.closest('.dropdown-trigger')) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  // Function to close dropdown menu
  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  // Function to toggle dropdown and calculate position with animation
  const toggleDropdown = (event: React.MouseEvent) => {
    event.preventDefault()
    if (!dropdownOpen) {
      const triggerElement = dropdownTriggerRef.current || (event.currentTarget as HTMLElement)
      const rect = triggerElement.getBoundingClientRect()
      const navRect = navRef.current?.getBoundingClientRect()
      
      // Position dropdown centered under the trigger with a compact width
      const baseWidth = 200
      const centeredLeft = rect.left + rect.width / 2 - baseWidth / 2
      setDropdownPosition({
        top: (navRect?.bottom || rect.bottom) - 2,
        left: Math.max(centeredLeft, 16),
        width: baseWidth
      })
      setDropdownOpen(true)
      
      // Animate dropdown entrance with improved glass effect
      setTimeout(() => {
        if (dropdownRef.current && anime) {
          anime({
            targets: dropdownRef.current,
            scale: [0.95, 1],
            opacity: [0, 1],
            translateY: [-8, 0],
            duration: 400,
            easing: 'easeOutCubic'
          })
          
          // Animate dropdown items with stagger
          const items = dropdownRef.current.querySelectorAll('.dropdown-item')
          if (items.length > 0 && anime) {
            anime({
              targets: items,
              translateY: [-12, 0],
              opacity: [0, 1],
              duration: 300,
              delay: anime.stagger(60, {start: 150}),
              easing: 'easeOutQuart'
            })
          }
        }
      }, 10)
    } else {
      // Animate dropdown exit
      if (dropdownRef.current && anime) {
        anime({
          targets: dropdownRef.current,
          scale: [1, 0.95],
          opacity: [1, 0],
          translateY: [0, -8],
          duration: 250,
          easing: 'easeInCubic',
          complete: () => setDropdownOpen(false)
        })
      } else {
        setDropdownOpen(false)
      }
    }
  }

  // Enhanced navigation function that closes dropdown
  const handleDropdownNavigation = async (path: string) => {
    closeDropdown()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    await showSplash()
    navigate(path)
  }

  // Translation fallback: if key returns itself, use provided EN/AR text
  const tr = (key: string, en: string, ar: string) => {
    const val = t(key)
    return val === key ? (isArabic ? ar : en) : val
  }

  return (
    <>
    <header
      ref={navRef}
      className={`glass-nav ${isTransparent ? 'nav-transparent' : 'nav-solid'} ${isHidden ? 'nav-hidden' : 'nav-visible'}`}
      role="navigation"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className="section-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 16,
          // Grid respects dir; in RTL the first column is right, third is left
        }}
      >
        {/* Left-aligned: Logo */}
        <Link
          ref={logoRef}
          to={isArabic ? '/ar' : '/'}
          className="logo"
          aria-label="Calma Home"
        >
          <img
            src={logoC}
            alt={isArabic ? 'كالما شعار' : 'Calma Logo'}
            className="logo-image"
          />
          <span className="logo-text">{isArabic ? 'كالما' : 'Calma'}</span>
        </Link>

        {/* Center: Navigation Links */}
        <nav ref={linksRef} className="nav-links" aria-label={tr('common.menu', 'Primary navigation', 'التنقل الرئيسي')} style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'nowrap' }}>
          <button 
            className="nav-link" 
            onClick={() => { 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
              showSplash(); 
              setTimeout(() => navigate(isArabic ? '/ar' : '/'), 100); 
            }}
          >
            {tr('nav.home', 'Home', 'الرئيسية')}
          </button>
          
          <button 
            className="nav-link" 
            onClick={async () => { 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
              await showSplash(); 
              navigate(isArabic ? '/ar/about' : '/about'); 
            }}
          >
            {tr('nav.about', 'About', 'عن كالما')}
          </button>
          
          <button 
            ref={dropdownTriggerRef}
            className="dropdown-trigger nav-link" 
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <span>{tr('nav.projects', 'Projects', 'المشاريع')}</span>
            <ChevronDown 
              className={`dropdown-icon ${dropdownOpen ? 'rotated' : ''}`}
              size={16}
            />
          </button>
          
          <button 
            className="nav-link" 
            onClick={async () => { 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
              await showSplash(); 
              navigate(isArabic ? '/ar/news' : '/news'); 
            }}
          >
            {tr('nav.news', 'News', 'الأخبار')}
          </button>

          {/* Always show Contact (English routes to register for now) */}
          <button 
            className="nav-link" 
            onClick={async () => { 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
              await showSplash(); 
              navigate(isArabic ? '/ar/contact' : '/register'); 
            }}
          >
            {tr('nav.contact', 'Contact', 'تواصل')}
          </button>
        </nav>

        {/* Right-aligned: Actions (phone, WhatsApp, register, language, burger) */}
        <div ref={actionsRef} className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 12, justifySelf: 'end' }}>
          <Button
            variant="ghost"
            size="icon"
            aria-label={tr('actions.call', 'Call', 'اتصل')}
            title={tr('actions.call', 'Call us', 'اتصل بنا')}
            onClick={() => (window.location.href = 'tel:+966920006553')}
          >
            <Phone className="icon" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="WhatsApp"
            title="WhatsApp"
            onClick={() => window.open('https://wa.me/966920006553', '_blank')}
          >
            <MessageCircle className="icon" />
          </Button>

          <Button className="rounded-full register-button" onClick={() => { showSplash(); setTimeout(() => navigate('/register'), 100) }}>
            {isArabic ? 'سجل اهتمامك' : 'Register Your Interest'}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="language-toggle"
            onClick={() => { 
              showSplash(); 
              setTimeout(() => toggleLanguage(), 100);
            }}
            aria-label={tr('language.switchTo', 'Switch language', 'تبديل اللغة')}
            title={tr('language.switchTo', 'Switch language', 'تبديل اللغة')}
          >
            <Globe className="icon" style={{ width: 16, height: 16, marginRight: 4 }} />
            {tr('language.switch', 'Arabic', 'English')}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="burger-button"
            aria-label={t('actions.openMenu')}
            onClick={() => setDrawerOpen(true)}
            title={t('actions.openMenu')}
          >
            <Menu className="icon" />
          </Button>
        </div>
      </div>
    </header>
    {/* Enhanced Mobile Menu */}
    {drawerOpen && (
      <div 
        className={`mobile-menu ${drawerOpen ? 'open' : ''}`} 
        onClick={() => setDrawerOpen(false)} 
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className="panel" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
          {/* Header */}
          <div className="panel-header">
            <div className="logo">
              <img src={logoC} alt="Calma" className="logo-image" />
              <span className="logo-text">{isArabic ? 'كالما' : 'Calma'}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="close-button"
              aria-label={t('actions.closeMenu')} 
              onClick={() => setDrawerOpen(false)}
            >
              <X size={24} />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="panel-links">
            <button 
              className="nav-link" 
              onClick={() => { 
                setDrawerOpen(false); 
                showSplash(); 
                setTimeout(() => navigate(isArabic ? '/ar' : '/'), 100); 
              }}
            >
              {t('nav.home')}
            </button>
            
            <button 
              className="nav-link" 
              onClick={() => { 
                setDrawerOpen(false); 
                showSplash(); 
                setTimeout(() => navigate(isArabic ? '/ar/about' : '/about'), 100); 
              }}
            >
              {t('nav.about')}
            </button>
            
            <div className="mobile-dropdown-section">
              <div className="mobile-dropdown-header">{t('nav.projects')}</div>
              <button 
                className="nav-link" 
                onClick={() => { 
                  setDrawerOpen(false); 
                  showSplash(); 
                  setTimeout(() => navigate(isArabic ? '/ar/projects' : '/projects'), 100); 
                }}
              >
                {t('nav.allProjects')}
              </button>
              {!isArabic && (
                <>
                  <button 
                     className="nav-link" 
                     onClick={() => { 
                       setDrawerOpen(false); 
                       showSplash(); 
                       setTimeout(() => navigate('/projects/commercials'), 100); 
                     }}
                   >
                     {t('nav.commercials')}
                   </button>
                   <button 
                     className="nav-link" 
                     onClick={() => { 
                       setDrawerOpen(false); 
                       showSplash(); 
                       setTimeout(() => navigate('/projects/residential'), 100); 
                     }}
                   >
                     {t('nav.residential')}
                   </button>
                   <button 
                     className="nav-link" 
                     onClick={() => { 
                       setDrawerOpen(false); 
                       showSplash(); 
                       setTimeout(() => navigate('/projects/calma-tower'), 100); 
                     }}
                   >
                     {t('nav.calmaTower')}
                   </button>
                 </>
               )}
             </div>
             
             <button 
               className="nav-link" 
               onClick={async () => { 
                 setDrawerOpen(false); 
                 await showSplash(); 
                 navigate(isArabic ? '/ar/news' : '/news'); 
               }}
             >
               {t('nav.news')}
             </button>
             
             {isArabic && (
               <button 
                 className="nav-link" 
                 onClick={() => { 
                   setDrawerOpen(false); 
                   showSplash(); 
                   setTimeout(() => navigate('/ar/contact'), 100); 
                 }}
               >
                 {t('nav.contact')}
               </button>
             )}
           </nav>

          {/* Actions */}
          <div className="panel-actions">
            <div className="mobile-action-buttons" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label={tr('actions.call', 'Call', 'اتصل')}
                title={tr('actions.call', 'Call us', 'اتصل بنا')}
                onClick={() => (window.location.href = 'tel:+966920006553')}
              >
                <Phone className="icon" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="WhatsApp"
                title="WhatsApp"
                onClick={() => window.open('https://wa.me/966920006553', '_blank')}
              >
                <MessageCircle className="icon" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="language-toggle"
                onClick={() => {
                  setDrawerOpen(false);
                  showSplash();
                  setTimeout(() => toggleLanguage(), 100);
                }}
              >
                <Globe size={16} />
                {t('language.switch')}
              </Button>
            </div>
            <Button 
              className="register-button" 
              onClick={async () => { 
                setDrawerOpen(false); 
                await showSplash(); 
                navigate('/register');
              }}
            >
              {isArabic ? 'طلب استفسار' : 'Enquire'}
            </Button>
          </div>
        </div>
      </div>
    )}
     
     {/* Enhanced Dropdown Menu */}
    {dropdownOpen && createPortal(
      <div 
        ref={dropdownRef}
        className="dropdown-portal"
        style={{
          position: 'fixed',
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          zIndex: 9999,
          minWidth: `${dropdownPosition.width}px`,
          width: `${dropdownPosition.width}px`,
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '6px 0',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          opacity: 0,
          transform: 'scale(0.8) translateY(-10px)'
        }}
      >
        <span className="dropdown-item" style={{ display: 'block', padding: '10px 12px', fontSize: 14 }} onClick={() => handleDropdownNavigation(isArabic ? '/ar/projects' : '/projects')}>
          {tr('nav.allProjects', 'All Projects', 'كل المشاريع')}
        </span>
        {!isArabic && (
          <>
            <span className="dropdown-item" style={{ display: 'block', padding: '10px 12px', fontSize: 14 }} onClick={() => handleDropdownNavigation('/projects/commercials')}>
              {tr('nav.commercials', 'Commercials', 'تجارية')}
            </span>
            <span className="dropdown-item" style={{ display: 'block', padding: '10px 12px', fontSize: 14 }} onClick={() => handleDropdownNavigation('/projects/residential')}>
              {tr('nav.residential', 'Residential', 'سكنية')}
            </span>
            <span className="dropdown-item" style={{ display: 'block', padding: '10px 12px', fontSize: 14 }} onClick={() => handleDropdownNavigation('/projects/calma-tower')}>
              {tr('nav.calmaTower', 'Calma Tower', 'برج كالما')}
            </span>
          </>
        )}
      </div>,
      document.body
    )}
    </>
  )
}