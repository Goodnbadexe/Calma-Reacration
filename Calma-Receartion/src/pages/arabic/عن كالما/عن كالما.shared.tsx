import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FEATURES } from '@/config/features'
import AboutLayout from '@/components/pages/about/AboutLayout'

export default function ArabicAboutShared() {
  const { t } = useLanguage()
  return <AboutLayout t={t} dir="rtl" features={{ aboutImproved: FEATURES.ar.aboutImproved }} />
}

