import React from 'react'
import EnglishContact from '@/pages/english/Contact/Contact'

type ContactLayoutProps = {
  t?: (key: string) => string
  dir?: 'ltr' | 'rtl'
}

export default function ContactLayout({ t, dir = 'ltr' }: ContactLayoutProps) {
  return <EnglishContact />
}

