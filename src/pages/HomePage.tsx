import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { SkillMatrix } from "../components/SkillMatrix";
import { featuredProjects, profile } from "../data/portfolio";

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="section-eyebrow">Student Engineer Portfolio</div>
          <h1>{profile.heroTitle}</h1>
          <p className="hero-lead">{profile.intro}</p>
          <div className="hero-actions">
            <Link to="/projects" className="button-link">
              Projectsを見る
            </Link>
            <Link to="/about" className="button-link button-link--ghost">
              About Meへ
            </Link>
          </div>
        </div>
        <div className="profile-card profile-card--hero">
          <img src={profile.image} alt={`${profile.name} profile`} />
          <div className="profile-card__body">
            <div className="section-eyebrow">Profile</div>
            <h2>{profile.name}</h2>
            <p>{profile.tagline}</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="section-eyebrow">Skills</div>
          <h2>技術スタック</h2>
        </div>
        <SkillMatrix />
      </section>

      <section className="content-section">
        <div className="section-heading section-heading--split">
          <div>
            <div className="section-eyebrow">Featured Projects</div>
            <h2>代表的な取り組み</h2>
          </div>
          <Link to="/projects" className="text-link">
            すべてのProjectを見る
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
