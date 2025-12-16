import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import ContactLayout from '@/components/pages/contact/ContactLayout'

export default function ContactShared() {
  const { t } = useLanguage()
  return <ContactLayout t={t} dir="ltr" />
}

