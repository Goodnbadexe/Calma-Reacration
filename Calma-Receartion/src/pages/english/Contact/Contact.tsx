import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import SEOHead from '@/components/seo/SEOHead'
import { useLanguage } from '@/contexts/LanguageContext'
import { Phone, MessageCircle, Mail } from 'lucide-react'
import { resolveAssetUrl } from '@/utils/assetResolver'

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
      <section
        className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${resolveAssetUrl('/src/assets/Backgrounds/About-Header-p-1600.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white">Contact CALMA</h1>
          <p className="mx-auto mt-3 md:mt-4 max-w-2xl text-neutral-200">
            We’re here to help. Reach out to our team for enquiries or assistance.
          </p>
        </motion.div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-white p-6 shadow-luxury flex flex-col gap-2">
            <Phone className="w-6 h-6 text-neutral-800 mt-1" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-neutral-900">Call Us</h2>
            <p className="mt-2 text-neutral-700">Saudi Arabia</p>
            <p className="mt-1 text-neutral-900 font-mono">+966 9200 06553</p>
            <Button
              variant="ghost"
              className="mt-4 rounded-full"
              aria-label={t('actions.call')}
              onClick={() => {
                if (window.confirm('Do you want to dial now?')) {
                  window.location.href = 'tel:+966920006553'
                }
              }}
            >
              {t('actions.call')}
            </Button>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-luxury flex flex-col gap-2">
            <MessageCircle className="w-6 h-6 text-neutral-800 mt-1" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-neutral-900">WhatsApp</h2>
            <p className="mt-2 text-neutral-700">Chat with our team</p>
            <Button
              variant="ghost"
              className="mt-4 rounded-full"
              aria-label={t('actions.whatsapp')}
              onClick={() => {
                if (window.confirm('Open WhatsApp chat?')) {
                  window.open('https://wa.me/966920006553', '_blank')
                }
              }}
            >
              {t('actions.whatsapp')}
            </Button>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-luxury flex flex-col gap-2">
            <Mail className="w-6 h-6 text-neutral-800 mt-1" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">Email</h2>
              <p className="mt-2 text-neutral-700">For formal enquiries</p>
              <a
                className="mt-1 inline-block font-mono text-primary"
                href="mailto:info@calma.sa"
              >
                info@calma.sa
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 h-[2px] bg-neutral-800/20" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl bg-white p-6 shadow-luxury">
            <h2 className="text-2xl font-semibold text-neutral-900">Send Us A Message</h2>
            <form
              className="mt-4 grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                const fd = new FormData(e.currentTarget as HTMLFormElement)
                const name = String(fd.get('name') || '')
                const email = String(fd.get('email') || '')
                const message = String(fd.get('message') || '')
                if (!name || !email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) || !message) return
                window.location.href = `mailto:info@calma.sa?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`
              }}
            >
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" placeholder="Name" className="border rounded-lg px-4 py-3" required />
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" className="border rounded-lg px-4 py-3" required />
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" placeholder="Message" className="border rounded-lg px-4 py-3 min-h-[140px]" required />
              <Button type="submit" className="rounded-full">Send</Button>
            </form>
          </div>
          <div className="rounded-xl bg-neutral-100 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-neutral-900">Our Offices</h3>
            <p className="mt-2 text-neutral-700">Riyadh • Jeddah • Dammam</p>
            <p className="mt-2 text-neutral-700">Business hours: Sun–Thu, 9:00–18:00</p>
          </div>
        </div>
      </section>
    </main>
  )
}
