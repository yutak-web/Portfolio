import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        {project.imageSrc ? (
          <img src={project.imageSrc} alt={project.imageAlt ?? project.title} />
        ) : (
          project.imageLabel
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.points && (
          <ul className="project-card__points">
            {project.points.slice(0, 3).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <div className="chip-row">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <Link to={`/projects/${project.slug}`} className="text-link">
          View Project
        </Link>
      </div>
    </article>
  )
}
