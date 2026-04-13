import type { Skill, SkillCategory } from "./types";

export const skills: Record<SkillCategory, Skill[]> = {
  Frontend: [
    { name: "React", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "Next.js", level: 3 },
  ],
  Backend: [
    { name: "Firebase", level: 3 },
    { name: "Node.js", level: 2 },
    { name: "Python", level: 2 },
  ],
  "AI/ML": [
    { name: "scikit-learn", level: 4 },
    { name: "PyTorch", level: 3 },
  ],
};
