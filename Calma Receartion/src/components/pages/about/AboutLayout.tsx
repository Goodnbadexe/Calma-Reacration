import React from 'react'
import AboutCalma from '@/components/home/AboutCalma'
import ImpactMetrics from '@/components/about/ImpactMetrics'
import EnglishAboutImproved from '@/pages/english/About/AboutImproved'

type AboutLayoutProps = {
  t?: (key: string) => string
  dir?: 'ltr' | 'rtl'
  features?: {
    aboutImproved?: boolean
  }
}

export default function AboutLayout({ t, dir = 'ltr', features }: AboutLayoutProps) {
  const useImproved = !!features?.aboutImproved
  if (useImproved) {
    return <EnglishAboutImproved />
  }
  return (
    <div className={dir === 'rtl' ? 'rtl' : 'ltr'}>
      <AboutCalma />
      <ImpactMetrics />
    </div>
  )
}

