import React from 'react'
import Pillars from '@/components/home/Pillars'
import AboutCalma from '@/components/home/AboutCalma'
import Excellence from '@/components/home/Excellence'
import KPIStats from '@/components/home/KPIStats'
import FeaturedProjectsCarousel from '@/components/home/FeaturedProjectsCarousel'
import TestimonialsBand from '@/components/home/TestimonialsBand'
import ProjectPreviewGrid from '@/components/home/ProjectPreviewGrid'
import MissionVision from '@/components/home/MissionVision'

type HomeLayoutProps = {
  t?: (key: string) => string
  dir?: 'ltr' | 'rtl'
}

export default function HomeLayout({ t, dir = 'ltr' }: HomeLayoutProps) {
  return (
    <main className={`main-content ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      <Pillars />
      <AboutCalma />
      <Excellence />
      <KPIStats />
      <MissionVision />
      <TestimonialsBand />
      <ProjectPreviewGrid />
    </main>
  )
}
