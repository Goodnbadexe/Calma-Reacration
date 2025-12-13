import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import SEOHead from '@/components/seo/SEOHead'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  return (
    <main className="bg-neutral-50">
      <SEOHead
        title="Contact CALMA"
        description="Get in touch with CALMA for enquiries about our luxury developments, partnerships, or media."
        locale="en"
        canonical="/contact"
        alternates={[
          { hrefLang: 'ar', href: '/ar/contact' },
          { hrefLang: 'en', href: '/contact' }
        ]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif text-neutral-900">Contact CALMA</h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
            We’re here to help. Reach out to our team for enquiries or assistance.
          </p>
        </motion.div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white p-6 shadow-luxury">
            <h2 className="text-xl font-semibold text-neutral-900">Call Us</h2>
            <p className="mt-2 text-neutral-700">Saudi Arabia</p>
            <p className="mt-1 text-neutral-900 font-mono">+966 9200 06553</p>
            <Button
              variant="ghost"
              className="mt-4 rounded-full"
              aria-label={t('actions.call')}
              onClick={() => (window.location.href = 'tel:+966920006553')}
            >
              {t('actions.call')}
            </Button>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-luxury">
            <h2 className="text-xl font-semibold text-neutral-900">WhatsApp</h2>
            <p className="mt-2 text-neutral-700">Chat with our team</p>
            <Button
              variant="ghost"
              className="mt-4 rounded-full"
              aria-label={t('actions.whatsapp')}
              onClick={() => window.open('https://wa.me/966920006553', '_blank')}
            >
              {t('actions.whatsapp')}
            </Button>
          </div>
        </div>
        <div className="mt-8 rounded-xl bg-white p-6 shadow-luxury">
          <h2 className="text-xl font-semibold text-neutral-900">Email</h2>
          <p className="mt-2 text-neutral-700">For formal enquiries</p>
          <a
            className="mt-1 inline-block font-mono text-primary"
            href="mailto:info@calma.sa"
          >
            info@calma.sa
          </a>
        </div>
      </section>
    </main>
  )
}
