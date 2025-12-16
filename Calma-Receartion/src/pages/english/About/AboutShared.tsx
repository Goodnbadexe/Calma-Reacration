import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FEATURES } from '@/config/features'
import AboutLayout from '@/components/pages/about/AboutLayout'

export default function AboutShared() {
  const { t } = useLanguage()
  return <AboutLayout t={t} dir="ltr" features={{ aboutImproved: FEATURES.en.aboutImproved }} />
}

