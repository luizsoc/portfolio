import type { Dictionary } from "@/app/types";

export const en: Dictionary = {
  meta: {
    title: "Luiz Otavio — Back-End Developer",
    description:
      "Back-end developer focused on APIs, backend systems, databases, and software engineering.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageSwitcher: "Language",
    sectionNavigation: "Section navigation",
  },
  nav: {
    hero: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    role: "Back-End Developer",
    tagline:
      "I build reliable, well-architected backend systems — APIs, databases, and the infrastructure behind them.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
  },
  skills: {
    title: "Skills",
    description:
      "Technologies I use to design, build, and ship software — backend first, with the front-end range to work across the stack.",
    categories: {
      languages: "Languages",
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      devopsTools: "DevOps & Tools",
    },
  },
  footer: {
    rights: "All rights reserved.",
    emailLabel: "Send an email",
    githubLabel: "GitHub profile",
    linkedinLabel: "LinkedIn profile",
  },
  about: {
    title: "About",
    paragraph:
      "I'm a Back-End Developer focused on building reliable APIs, working with databases, and developing software with Python, Java, and C#. I enjoy solving technical problems and continuously improving my development skills.",
  },
  experience: {
    title: "Experience",
    description: "Professional experience in IT support and backend development.",
    items: {
      positivo: {
        role: "IT Intern",
        period: "Apr 2026 — Jul 2026",
        location: "São Paulo, Brazil",
        model: "On-site",
        highlights: [
          "Provided IT support and system maintenance, focusing on operational stability, incident resolution, and service continuity.",
          "Administered and configured Linux and Windows environments, including user management, permissions, system services, and IT infrastructure support.",
          "Diagnosed and resolved hardware issues, including failure identification, component replacement, performance testing, and corporate equipment support.",
          "Supported the installation, configuration, monitoring, and troubleshooting of information systems, operating systems, and infrastructure resources.",
          "Worked with Microsoft Excel for data organization, advanced formulas, pivot tables, analytical reports, and operational process support.",
        ],
      },
      minsait: {
        role: "Technology Apprentice",
        period: "Jul 2024 — Nov 2025",
        location: "São Paulo, Brazil",
        model: "Hybrid",
        highlights: [
          "Developed REST APIs using Python, Django, and Django REST Framework (DRF), focusing on scalability, versioning, and standardized API development.",
          "Implemented JWT authentication and token-based authorization, including Swagger documentation for API endpoints.",
          "Administered and optimized PostgreSQL databases, working with migrations, optimized queries, triggers, and views.",
          "Worked with Microsoft Excel for data manipulation and automation, using pivot tables, interactive charts, advanced formulas, PROCX/ÍNDICE/CORRESP, SOMASES, SEERRO, and macros.",
        ],
      },
    },
  },
  projects: {
    title: "Projects",
    description:
      "Selected backend projects — what they do, how they're built, and where to find the code.",
    featuredLabel: "Featured project",
    githubLabel: "GitHub",
    categoryLabels: {
      backend: "Backend",
      frontend: "Frontend",
      fullstack: "Full-Stack",
    },
    items: {
      gamehub: {
        description:
          "Real-time chat platform for gamer communities — public and private channels, direct messages, and authenticated live messaging, built with Clean Architecture on .NET and PostgreSQL.",
      },
    },
  },
  comingSoon: "This section is coming soon.",
};
