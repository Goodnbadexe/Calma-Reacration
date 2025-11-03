import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
const translations = {
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
    'language.current': 'English'
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
    'language.current': 'العربية'
  }
};



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
    let newPath = '/';

    // Map current path to new language
    if (newLanguage === 'ar') {
      if (currentPath === '/') newPath = '/ar';
      else if (currentPath === '/about') newPath = '/ar/about';
      else if (currentPath === '/projects') newPath = '/ar/projects';
      else if (currentPath === '/news') newPath = '/ar/news';
      else if (currentPath === '/contact') newPath = '/ar/contact';
      else if (currentPath === '/register') newPath = '/ar/register';
      else newPath = '/ar';
    } else {
      if (currentPath === '/ar') newPath = '/';
      else if (currentPath === '/ar/about') newPath = '/about';
      else if (currentPath === '/ar/projects') newPath = '/projects';
      else if (currentPath === '/ar/news') newPath = '/news';
      else if (currentPath === '/ar/contact') newPath = '/contact';
      else if (currentPath === '/ar/register') newPath = '/register';
      else newPath = '/';
    }

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