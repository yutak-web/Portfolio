import { achievementsFeProjects } from "./achievementsFe";
import { achievementsMlProjects } from "./achievementsMl";
import { personalProductProjects } from "./productsPersonal";
import { researchProjects } from "./research";
import type { Project } from "../types";

export { achievementsFeProjects } from "./achievementsFe";
export { achievementsMlProjects } from "./achievementsMl";
export { personalProductProjects } from "./productsPersonal";
export { researchProjects } from "./research";

export const projects: Project[] = [
  ...achievementsMlProjects,
  ...achievementsFeProjects,
  ...personalProductProjects,
  ...researchProjects,
];

export const featuredProjectSlugs = [
  "financial-data-challenge-2024",
  "mogufinder-jphacks-2025",
  "research-groupwork-collaboration-patterns",
];

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));
