import { SkillMatrix } from "../components/SkillMatrix";
import { certs, hobbies, profile, timeline } from "../data/portfolio";

export function AboutPage() {
  return (
    <div className="page-stack">
      <section className="page-intro about-page-hero">
        <div className="about-page-hero__copy">
          <div className="section-eyebrow">About Me</div>
          <h1>{profile.name}</h1>
          <p>{profile.tagline}</p>
        </div>
        <img
          src={profile.image}
          alt={`${profile.name} portrait`}
          className="about-page-hero__image"
        />
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="section-eyebrow">Introduction</div>
          <h2>自己紹介</h2>
        </div>
        <p>{profile.about}</p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="section-eyebrow">Skills</div>
          <h2>技術スタック</h2>
        </div>
        <SkillMatrix />
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="section-eyebrow">Timeline</div>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {timeline.map((entry) => (
            <article
              key={`${entry.period}-${entry.title}`}
              className="timeline-item"
            >
              <div className="timeline-item__badge">
                {entry.type === "education" ? "Edu" : "Work"}
              </div>
              <div className="timeline-item__body">
                <div className="timeline-item__period">{entry.period}</div>
                <h3>{entry.title}</h3>
                <div className="timeline-item__org">{entry.organization}</div>
                <p>{entry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="section-eyebrow">Certifications</div>
          <h2>資格</h2>
        </div>
        <div className="cert-grid">
          {certs.map((cert) => (
            <article key={cert.title} className="content-card cert-card">
              <h3>{cert.title}</h3>
              {cert.subtitle && (
                <div className="timeline-item__org">{cert.subtitle}</div>
              )}
              {cert.points && (
                <ul className="detail-list detail-list--compact">
                  {cert.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="section-eyebrow">Hobbies</div>
          <h2>趣味</h2>
        </div>
        <div className="hobby-grid">
          {hobbies.map((hobby) => (
            <article key={hobby.title} className="hobby-card">
              <h3>{hobby.title}</h3>
              <ul className="detail-list detail-list--compact">
                {hobby.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
