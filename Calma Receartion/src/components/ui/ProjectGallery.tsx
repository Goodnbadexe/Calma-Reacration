import { useMemo } from 'react'

type ProjectEntry = {
  id: string
  title: string
  dir: string
  location?: string
}

type Props = {
  entries: ProjectEntry[]
}

export default function ProjectGallery({ entries }: Props) {
  const images = useMemo(() => {
    const modules = import.meta.glob('/src/assets/Images/Projects/**/**.{jpg,jpeg,png}', { eager: true }) as Record<string, any>
    const byDir: Record<string, string[]> = {}
    Object.keys(modules).forEach((key) => {
      const parts = key.split('/src/assets/Images/Projects/')[1]
      if (!parts) return
      const dir = parts.split('/')[0]
      byDir[dir] ||= []
      byDir[dir].push(key)
    })
    Object.keys(byDir).forEach((d) => byDir[d].sort())
    return byDir
  }, [])

  return (
    <section className="projects-gallery">
      <div className="gallery-grid">
        {entries.map((entry) => {
          const dirKey = entry.dir
          const imgList = images[dirKey] || []
          const cover = imgList[0] as string | undefined
          return (
            <article key={entry.id} className="gallery-card" aria-label={entry.title}>
              {cover && <img src={cover} alt={entry.title} loading="lazy" decoding="async" />}
              <div className="gallery-meta">
                <h3 className="gallery-title">{entry.title}</h3>
                {entry.location && <p className="gallery-location">{entry.location}</p>}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

