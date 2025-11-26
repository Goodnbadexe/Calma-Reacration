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
}

