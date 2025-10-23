import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ArabicHome from './pages/arabic/Home'
import Projects from './pages/english/Projects'
import Commercials from './pages/english/Commercials'
import Residential from './pages/english/Residential'
import CalmaTower from './pages/english/CalmaTower'
import About from './pages/english/About'
import News from './pages/english/News'
import Register from './pages/english/Register'
import TestSlider from './pages/test-slider'
import { SplashProvider } from '@/components/system/SplashProvider'
import AppLayout from '@/layouts/AppLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SplashProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ar" element={<ArabicHome />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/commercials" element={<Commercials />} />
            <Route path="/projects/residential" element={<Residential />} />
            <Route path="/projects/calma-tower" element={<CalmaTower />} />
            <Route path="/test-slider" element={<TestSlider />} />
          </Route>
        </Routes>
      </SplashProvider>
    </BrowserRouter>
  </StrictMode>,
)