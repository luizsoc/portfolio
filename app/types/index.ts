export type NavId =
  | "hero"
  | "stack"
  | "projects"
  | "about"
  | "experience"
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

export type StackCategoryId = "languages" | "backend" | "database" | "devopsTools";

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
  stack: {
    title: string;
    description: string;
    categories: Record<StackCategoryId, string>;
  };
  footer: {
    rights: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  comingSoon: string;
};
