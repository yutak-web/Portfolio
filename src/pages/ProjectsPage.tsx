import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/portfolio";

const categoryOrder = [
  "データ分析コンペ",
  "ハッカソン",
  "個人開発",
  "研究活動",
] as const;

const categoryLabels: Record<(typeof categoryOrder)[number], string> = {
  データ分析コンペ: "Data Science",
  ハッカソン: "Hackathon",
  個人開発: "Personal Projects",
  研究活動: "Research",
};

export function ProjectsPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <div className="section-eyebrow">Projects</div>
        <h1 className="projects-intro__title">
          これまでに取り組んだプロジェクト
        </h1>
      </section>

      {categoryOrder.map((category) => {
        const items = projects.filter(
          (project) => project.category === category,
        );

        if (items.length === 0) return null;

        return (
          <section key={category} className="content-section project-category">
            <div className="section-heading">
              <div className="section-eyebrow">{categoryLabels[category]}</div>
              <h2>{category}</h2>
            </div>
            <div className="project-grid">
              {items.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
