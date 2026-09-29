export type NavId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export type NavItem = {
  index: string;
  id: NavId;
};

export type Profile = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
};

export type Locale = "en" | "pt";

export type SkillCategoryId =
  | "languages"
  | "backend"
  | "frontend"
  | "database"
  | "devopsTools";

export type ProjectId = "gamehub";

export type ProjectCategory = "backend" | "frontend" | "fullstack";

export type Project = {
  id: ProjectId;
  name: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
};

export type ExperienceId = "positivo" | "minsait";

export type Experience = {
  id: ExperienceId;
  company: string;
};

export type ExperienceContent = {
  role: string;
  period: string;
  location: string;
  model: string;
  highlights: string[];
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
  };
  nav: Record<NavId, string>;
  hero: {
    role: string;
    tagline: string;
    viewProjects: string;
    contactMe: string;
  };
  skills: {
    title: string;
    description: string;
    categories: Record<SkillCategoryId, string>;
  };
  footer: {
    rights: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  about: {
    title: string;
    paragraph: string;
  };
  experience: {
    title: string;
    description: string;
    items: Record<ExperienceId, ExperienceContent>;
  };
  projects: {
    title: string;
    description: string;
    featuredLabel: string;
    githubLabel: string;
    categoryLabels: Record<ProjectCategory, string>;
    items: Record<ProjectId, { description: string }>;
  };
  comingSoon: string;
};
