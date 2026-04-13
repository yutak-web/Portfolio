import { skills } from '../data/portfolio'

export function SkillMatrix() {
  return (
    <div className="skill-matrix">
      {Object.entries(skills).map(([category, entries]) => (
        <section key={category} className="skill-panel">
          <div className="section-eyebrow">{category}</div>
          <div className="skill-list">
            {entries.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div>
                  <div className="skill-item__name">{skill.name}</div>
                  <div className="skill-item__meta">Level {skill.level} / 5</div>
                </div>
                <div
                  className="skill-dots"
                  aria-label={`${skill.name} proficiency level ${skill.level} out of 5`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`skill-dots__dot${
                        index < skill.level ? ' is-filled' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
