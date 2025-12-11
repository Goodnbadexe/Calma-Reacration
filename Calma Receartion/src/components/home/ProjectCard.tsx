import { motion } from 'framer-motion'

export type Project = {
  id: string
  title: string
  subtitle: string
  category: string
  image: string
  href: string
  descriptor?: string
}

type Props = {
  project: Project
  active?: boolean
}

export default function ProjectCard({ project, active }: Props) {
  return (
    <a href={project.href} className="project-showcase-card" aria-label={project.title}>
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          srcSet={`${project.image} 1x, ${project.image} 2x`}
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
        />
        <div className="project-overlay">
          <span className="project-category">{project.category}</span>
          <div className="project-stats">
            <span className="stat-highlight">{project.title}</span>
            <span className="stat-text">{project.subtitle}</span>
          </div>
        </div>
      </div>
      <motion.div
        className="project-content"
        animate={active ? { scale: 1.01 } : { scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      >
        <h3>{project.title}</h3>
        <p>{project.descriptor ?? project.subtitle}</p>
        <div className="project-actions">
          <span className="hero-button luxury-button">View Project</span>
        </div>
      </motion.div>
    </a>
  )
}

