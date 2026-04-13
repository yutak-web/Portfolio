import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) {
    return (
      <section className="page-intro">
        <div className="section-eyebrow">Not Found</div>
        <h1>Projectが見つかりませんでした。</h1>
        <Link to="/projects" className="text-link">
          Projects一覧に戻る
        </Link>
      </section>
    )
  }

  return (
    <div className="page-stack">
      <section className="project-detail-hero">
        <div className="project-detail-hero__copy">
          <div className="section-eyebrow">{project.category}</div>
          <h1 className="project-detail-hero__title">{project.title}</h1>
          <p>{project.summary}</p>
          <div className="project-summary-grid">
            <article className="content-card">
              <div className="section-eyebrow">Role</div>
              <p>{project.role}</p>
            </article>
            <article className="content-card">
              <div className="section-eyebrow">Impact</div>
              <p>{project.impact}</p>
            </article>
          </div>
        </div>
        <div className="detail-visual">
          {project.imageSrc ? (
            <img src={project.imageSrc} alt={project.imageAlt ?? project.title} />
          ) : (
            project.imageLabel
          )}
        </div>
      </section>

      {project.points && (
        <section className="content-section">
          <div className="section-heading">
            <div className="section-eyebrow">Highlights</div>
            <h2>主なポイント</h2>
          </div>
          <ul className="detail-list">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="content-section">
        <div className="section-heading">
          <div className="section-eyebrow">Tech Stack</div>
          <h2>使用技術</h2>
        </div>
        <div className="chip-row">
          {project.stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>

      {project.links && (
        <section className="content-section">
          <div className="section-heading">
            <div className="section-eyebrow">Links</div>
            <h2>関連リンク</h2>
          </div>
          <div className="chip-row">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="button-link button-link--ghost"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="detail-sections">
        {project.sections.map((section) => (
          <article key={section.title} className="content-card content-card--detail">
            <div className="section-eyebrow">{section.title}</div>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <Link to="/projects" className="text-link">
        Projects一覧に戻る
      </Link>
    </div>
  )
}
