import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toLanguagePath } from '@/utils/i18nPaths'
import enHome from '@/locales/en/home.json'
import enAbout from '@/locales/en/about.json'
import enProjects from '@/locales/en/projects.json'
import enContact from '@/locales/en/contact.json'
import arHome from '@/locales/ar/home.json'
import arAbout from '@/locales/ar/about.json'
import arProjects from '@/locales/ar/projects.json'
import arContact from '@/locales/ar/contact.json'

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const baseTranslations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.register': 'Register',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.menu': 'Menu',
    
    // Home page
    'home.hero.title': 'Luxury Real Estate',
    'home.hero.subtitle': 'Discover exceptional properties',
    
    // About page
    'about.title': 'About CALMA',
    'about.subtitle': 'Excellence in Real Estate',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Exceptional Developments',
    
    // Language switcher
    'language.switch': 'العربية',
    'language.current': 'English',
    'language.switchTo': 'Switch language',
    // Actions
    'actions.call': 'Call',
    'actions.whatsapp': 'WhatsApp',
    'actions.register': 'Register Your Interest',
    'actions.openMenu': 'Open menu',
    'actions.closeMenu': 'Close menu',
    // Projects menu
    'nav.allProjects': 'All Projects',
    'nav.commercials': 'Commercials',
    'nav.residential': 'Residential',
    'nav.calmaTower': 'Calma Tower'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن كالما',
    'nav.projects': 'المشاريع',
    'nav.news': 'الأخبار',
    'nav.contact': 'تواصل معنا',
    'nav.register': 'التسجيل',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.close': 'إغلاق',
    'common.open': 'فتح',
    'common.menu': 'القائمة',
    
    // Home page
    'home.hero.title': 'العقارات الفاخرة',
    'home.hero.subtitle': 'اكتشف العقارات الاستثنائية',
    
    // About page
    'about.title': 'عن كالما',
    'about.subtitle': 'التميز في العقارات',
    
    // Projects
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'تطويرات استثنائية',
    
    // Language switcher
    'language.switch': 'English',
    'language.current': 'العربية',
    'language.switchTo': 'تبديل اللغة',
    // Actions
    'actions.call': 'اتصل',
    'actions.whatsapp': 'واتساب',
    'actions.register': 'سجل اهتمامك',
    'actions.openMenu': 'فتح القائمة',
    'actions.closeMenu': 'إغلاق القائمة',
    // Projects menu
    'nav.allProjects': 'كل المشاريع',
    'nav.commercials': 'تجارية',
    'nav.residential': 'سكنية',
    'nav.calmaTower': 'برج كالما'
  }
};

// External JSON translations
const externalTranslations = {
  en: { ...enHome, ...enAbout, ...enProjects, ...enContact },
  ar: { ...arHome, ...arAbout, ...arProjects, ...arContact }
}

// Merge base with external JSON
const translations = {
  en: { ...baseTranslations.en, ...externalTranslations.en },
  ar: { ...baseTranslations.ar, ...externalTranslations.ar }
}



interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage = 'en' 
}) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize language from URL or localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('calma-language') as Language;
    const isArabicRoute = location.pathname.startsWith('/ar');
    
    if (isArabicRoute && language !== 'ar') {
      setLanguageState('ar');
    } else if (!isArabicRoute && language !== 'en') {
      setLanguageState('en');
    } else if (savedLanguage && savedLanguage !== language) {
      setLanguageState(savedLanguage);
    }
  }, [location.pathname]);

  // Update document direction and language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('calma-language', language);
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    const currentPath = location.pathname;
    const newPath = toLanguagePath(newLanguage, currentPath)

    setLanguageState(newLanguage);
    navigate(newPath);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      isRTL,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
