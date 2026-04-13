export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillCategory = "Frontend" | "Backend" | "AI/ML";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work";
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: "データ分析コンペ" | "ハッカソン" | "個人開発" | "研究活動";
  year: string;
  summary: string;
  impact: string;
  stack: string[];
  role: string;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  points?: string[];
  links?: ProjectLink[];
  sections: ProjectSection[];
};

export type Cert = {
  title: string;
  subtitle?: string;
  points?: string[];
};

export type Hobby = {
  title: string;
  points: string[];
};

export type ContactLink = {
  label: "Mail" | "GitHub" | "LinkedIn" | "Zenn";
  href: string;
  kind: "mail" | "github" | "linkedin" | "zenn";
};

export type Profile = {
  name: string;
  tagline: string;
  heroTitle: string;
  intro: string;
  about: string;
  image: string;
  email: string;
  github: string;
  linkedin?: string;
  zenn?: string;
};
