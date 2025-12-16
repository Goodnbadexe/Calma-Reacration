import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/navbar.css'
import './styles/theme.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from '@/components/util/ErrorBoundary'

// English Pages
const EnglishHome = lazy(() => import('./pages/english/Home/Home'))
const AboutPageShared = lazy(() => import('./pages/english/About/AboutShared'))
const News = lazy(() => import('./pages/english/News/News'))
const ProjectsShared = lazy(() => import('./pages/english/Projects/ProjectsShared'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const Register = lazy(() => import('./pages/english/Register/Register'))
const ContactShared = lazy(() => import('./pages/english/Contact/ContactShared'))
const ReportsPage = lazy(() => import('./pages/english/Reports/ReportsPage'))

// Arabic Pages
const ArabicHome = lazy(() => import('./pages/arabic/الرئيسية/الرئيسية'))
const ArabicAboutShared = lazy(() => import('./pages/arabic/عن كالما/عن كالما.shared'))
const ArabicProjectsShared = lazy(() => import('./pages/arabic/المشاريع/المشاريع.shared'))
const ArabicContactShared = lazy(() => import('./pages/arabic/تواصل معنا/ContactShared'))
const ArabicNews = lazy(() => import('./pages/arabic/الأخبار/الأخبار'))
const ArabicRegister = lazy(() => import('./pages/arabic/التسجيل/التسجيل'))
const ArabicCommercials = lazy(() => import('./pages/arabic/المشاريع/تجارية'))
const ArabicResidential = lazy(() => import('./pages/arabic/المشاريع/سكنية'))
const ArabicCalmaTower = lazy(() => import('./pages/arabic/المشاريع/برج كالما'))
const ArabicReportsPage = lazy(() => import('./pages/arabic/Reports/ReportsPage'))
const ProjectsVilla = lazy(() => import('./pages/english/Projects/categories/Villa'))
const ProjectsFloor = lazy(() => import('./pages/english/Projects/categories/Floor'))
const ProjectsTownHouse = lazy(() => import('./pages/english/Projects/categories/TownHouse'))
const ProjectsOffice = lazy(() => import('./pages/english/Projects/categories/Office'))

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
            <Suspense fallback={
              <div className="page-loading" aria-busy="true" aria-live="polite">
                <div className="skeleton-page">
                  <div className="skeleton-bar" />
                  <div className="skeleton-grid">
                    <div className="skeleton-card" />
                    <div className="skeleton-card" />
                    <div className="skeleton-card" />
                  </div>
                </div>
              </div>
            }>
              <Routes>
                <Route element={<AppLayout />}>
                  {/* English Routes */}
                  <Route path="/" element={<ErrorBoundary><EnglishHome /></ErrorBoundary>} />
                  <Route path="/about" element={<ErrorBoundary><AboutPageShared /></ErrorBoundary>} />
                  <Route path="/news" element={<ErrorBoundary><News /></ErrorBoundary>} />
                  <Route path="/projects" element={<ErrorBoundary><ProjectsShared /></ErrorBoundary>} />
                  <Route path="/projects/:slug" element={<ErrorBoundary><ProjectPage /></ErrorBoundary>} />
                  <Route path="/projects/villa" element={<ErrorBoundary><ProjectsVilla /></ErrorBoundary>} />
                  <Route path="/projects/floor" element={<ErrorBoundary><ProjectsFloor /></ErrorBoundary>} />
                  <Route path="/projects/townhouse" element={<ErrorBoundary><ProjectsTownHouse /></ErrorBoundary>} />
                  <Route path="/projects/office" element={<ErrorBoundary><ProjectsOffice /></ErrorBoundary>} />
                  <Route path="/contact" element={<ErrorBoundary><ContactShared /></ErrorBoundary>} />
                  <Route path="/register" element={<ErrorBoundary><Register /></ErrorBoundary>} />
                  <Route path="/reports" element={<ErrorBoundary><ReportsPage /></ErrorBoundary>} />

                  {/* Arabic Routes */}
                  <Route path="/ar" element={<ErrorBoundary><ArabicHome /></ErrorBoundary>} />
                  <Route path="/ar/عن كالـما" element={<ErrorBoundary><ArabicAboutShared /></ErrorBoundary>} />
                  <Route path="/ar/المشاريع" element={<ErrorBoundary><ArabicProjectsShared /></ErrorBoundary>} />
                  <Route path="/ar/تواصل معنا" element={<ErrorBoundary><ArabicContactShared /></ErrorBoundary>} />
                  {/* Arabic slug aliases for improved usability */}
                  <Route path="/ar/about" element={<ErrorBoundary><ArabicAboutShared /></ErrorBoundary>} />
                  <Route path="/ar/projects" element={<ErrorBoundary><ArabicProjectsShared /></ErrorBoundary>} />
                  <Route path="/ar/contact" element={<ErrorBoundary><ArabicContactShared /></ErrorBoundary>} />
                  <Route path="/ar/news" element={<ErrorBoundary><ArabicNews /></ErrorBoundary>} />
                  <Route path="/ar/التسجيل" element={<ErrorBoundary><ArabicRegister /></ErrorBoundary>} />
                  <Route path="/ar/register" element={<ErrorBoundary><ArabicRegister /></ErrorBoundary>} />
                  <Route path="/ar/reports" element={<ErrorBoundary><ArabicReportsPage /></ErrorBoundary>} />
                  {/* Arabic projects subroutes mirroring EN */}
                  <Route path="/ar/projects/commercials" element={<ErrorBoundary><ArabicCommercials /></ErrorBoundary>} />
                  <Route path="/ar/projects/residential" element={<ErrorBoundary><ArabicResidential /></ErrorBoundary>} />
                  <Route path="/ar/projects/calma-tower" element={<ErrorBoundary><ArabicCalmaTower /></ErrorBoundary>} />
                  <Route path="/ar/projects/villa" element={<ErrorBoundary><ProjectsVilla /></ErrorBoundary>} />
                  <Route path="/ar/projects/floor" element={<ErrorBoundary><ProjectsFloor /></ErrorBoundary>} />
                  <Route path="/ar/projects/townhouse" element={<ErrorBoundary><ProjectsTownHouse /></ErrorBoundary>} />
                  <Route path="/ar/projects/office" element={<ErrorBoundary><ProjectsOffice /></ErrorBoundary>} />

                  {/* Test Routes */}
                </Route>
              </Routes>
            </Suspense>
          </SplashProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
