import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/navbar.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// English Pages
import EnglishHome from './pages/english/Home/Home'
import AboutImproved from './pages/english/About/AboutImproved'
import News from './pages/english/News/News'
import RealEstateShowcase from './pages/english/Projects/Projects'
import Commercials from './pages/english/Projects/Commercials'
import Residential from './pages/english/Projects/Residential'
import CalmaTower from './pages/english/Projects/CalmaTower'
import Register from './pages/english/Register/Register'

// Arabic Pages
import ArabicHome from './pages/arabic/الرئيسية/الرئيسية'
import ArabicAbout from './pages/arabic/عن كالما/عن كالما'
import ArabicProjects from './pages/arabic/المشاريع/المشاريع'
import ArabicContact from './pages/arabic/تواصل معنا/تواصل معنا'

// Test and System Components
import { SplashProvider } from '@/components/system/SplashProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import AppLayout from '@/layouts/AppLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider defaultLanguage="en">
          <SplashProvider>
            <Routes>
              <Route element={<AppLayout />}>
                {/* English Routes */}
                <Route path="/" element={<EnglishHome />} />
                <Route path="/about" element={<AboutImproved />} />
                <Route path="/news" element={<News />} />
                <Route path="/projects" element={<RealEstateShowcase />} />
                <Route path="/projects/commercials" element={<Commercials />} />
                <Route path="/projects/residential" element={<Residential />} />
                <Route path="/projects/calma-tower" element={<CalmaTower />} />
                <Route path="/register" element={<Register />} />

                {/* Arabic Routes */}
                <Route path="/ar" element={<ArabicHome />} />
                <Route path="/ar/عن كالـما" element={<ArabicAbout />} />
                <Route path="/ar/المشاريع" element={<ArabicProjects />} />
                <Route path="/ar/تواصل معنا" element={<ArabicContact />} />

                {/* Test Routes */}
              </Route>
            </Routes>
          </SplashProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)