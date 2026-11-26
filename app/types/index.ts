export type NavId =
  | "hero"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export type NavItem = {
  index: string;
  id: Exclude<NavId, "hero">;
};

export type Profile = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
};

export type Locale = "en" | "pt";

export type PipelineStageId = "extract" | "bronze" | "silver" | "gold";

export type PipelineStage = {
  id: PipelineStageId;
  tech: string;
};

export type PipelineMetricId = "rawRows" | "cleanRows" | "qualityChecks" | "tests";

export type PipelineMetric = {
  id: PipelineMetricId;
  value: number;
  format: "integer" | "percent";
};

export type SkillCategoryId =
  | "dataEngineering"
  | "dataAnalysis"
  | "backend"
  | "languages"
  | "infra";

export type SkillCategory = {
  id: SkillCategoryId;
  skills: string[];
};

export type ProjectId = "dataflow" | "gamehub" | "devopsEsg";

export type ProjectCategory = "data" | "backend" | "devops";

export type Project = {
  id: ProjectId;
  name: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
  academic?: boolean;
};

export type ExperienceId = "positivo" | "minsait";

export type Experience = {
  id: ExperienceId;
  company: string;
  technologies: string[];
};

export type ExperienceContent = {
  role: string;
  period: string;
  location: string;
  model: string;
  highlights: string[];
};

export type EducationId = "fiap";

export type Education = {
  id: EducationId;
  institution: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    languageSwitcher: string;
    sectionNavigation: string;
    backToTop: string;
  };
  nav: Record<Exclude<NavId, "hero">, string>;
  hero: {
    status: string;
    role: string;
    headline: string;
    headlineMuted: string;
    tagline: string;
    viewProjects: string;
    contactMe: string;
    facts: { label: string; value: string }[];
  };
  pipeline: {
    title: string;
    schedule: string;
    stages: Record<PipelineStageId, { label: string; detail: string }>;
    orchestration: string;
    runtime: string;
    metrics: Record<PipelineMetricId, string>;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  projects: {
    title: string;
    description: string;
    featuredLabel: string;
    academicLabel: string;
    repositoryLabel: string;
    stackLabel: string;
    metricsLabel: string;
    highlightsLabel: string;
    otherTitle: string;
    categoryLabels: Record<ProjectCategory, string>;
    items: Record<ProjectId, { description: string; highlights?: string[] }>;
  };
  skills: {
    title: string;
    description: string;
    categories: Record<SkillCategoryId, { title: string; description: string }>;
  };
  experience: {
    title: string;
    workTitle: string;
    educationTitle: string;
    items: Record<ExperienceId, ExperienceContent>;
    education: Record<EducationId, { degree: string; detail: string }>;
  };
  contact: {
    title: string;
    description: string;
    availability: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
    role: string;
  };
};
