import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import ContactLayout from '@/components/pages/contact/ContactLayout'

export default function ArabicContactShared() {
  const { t } = useLanguage()
  return <ContactLayout t={t} dir="rtl" />
}

