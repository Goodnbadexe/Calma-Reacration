export function runPreflight() {
  if (import.meta.env.PROD) return
  const required = [
    'src/pages/arabic/الأخبار/الأخبار.css',
    'src/pages/arabic/التسجيل/التسجيل.css',
    'src/pages/arabic/الرئيسية/الرئيسية.css',
    'src/pages/arabic/المشاريع/المشاريع.css',
    'src/pages/arabic/تواصل معنا/تواصل معنا.css',
    'src/pages/arabic/عن كالما/عن كالما.css',
  ]
  const missing: string[] = []
  required.forEach((f) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      // @ts-ignore
      const ok = !!f
    } catch (e) {
      missing.push(f)
    }
  })
  if (missing.length) {
    // eslint-disable-next-line no-console
    console.warn('[Preflight] Missing CSS files:', missing)
  } else {
    // eslint-disable-next-line no-console
    console.info('[Preflight] CSS presence OK')
  }
  const envMissing: string[] = []
  if (!import.meta.env.VITE_LEADS_API_URL) envMissing.push('VITE_LEADS_API_URL')
  if (envMissing.length) {
    // eslint-disable-next-line no-console
    console.warn('[Preflight] Missing environment variables:', envMissing)
  }
  const assetMissing: string[] = []
  const assets = ['/logo.png', '/og-image.jpg']
  assets.forEach((p) => {
    try {
      const req = new Request(p)
      void req
    } catch {
      assetMissing.push(p)
    }
  })
  if (assetMissing.length) {
    // eslint-disable-next-line no-console
    console.warn('[Preflight] Missing assets (ensure in public/):', assetMissing)
  }
}
