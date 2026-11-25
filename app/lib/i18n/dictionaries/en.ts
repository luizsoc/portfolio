import type { Dictionary } from "@/app/types";

export const en: Dictionary = {
  meta: {
    title: "Luiz Silva — Data Engineering",
    description:
      "Portfolio of Luiz Silva — Data Engineering and Data Analysis with Python, SQL, PostgreSQL, ETL/ELT and data pipelines.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageSwitcher: "Language",
    sectionNavigation: "Section navigation",
    backToTop: "Back to top",
  },
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    status: "Open to Data Engineering opportunities",
    role: "Data Engineering",
    headline: "Data pipelines,",
    headlineMuted: "from source to database.",
    tagline:
      "I'm Luiz. I work with Python, SQL and PostgreSQL to extract, transform and load data, with professional experience in APIs and databases at Minsait.",
    viewProjects: "View projects",
    contactMe: "Get in touch",
    facts: [
      { label: "Focus", value: "Data Engineering" },
      { label: "Also", value: "Data Analysis" },
      { label: "Experience", value: "APIs · PostgreSQL" },
      { label: "Education", value: "FIAP · ADS" },
    ],
  },
  pipeline: {
    title: "DataFlow Pipeline",
    status: "In development",
    stages: {
      extract: { label: "Extract", detail: "Collect raw data from sources" },
      transform: { label: "Transform", detail: "Clean and reshape the data" },
      load: { label: "Load", detail: "Persist to the database" },
    },
    orchestration: "Orchestrated by",
    runtime: "Runs on",
  },
  about: {
    title: "About me",
    paragraphs: [
      "I'm Luiz Silva, focused on Data Engineering and Data Analysis. I build data pipelines with Python, SQL and PostgreSQL, and I have professional experience developing REST APIs and working with PostgreSQL databases at Minsait.",
    ],
  },
  projects: {
    title: "Selected projects",
    description: "Data Engineering projects, plus backend and DevOps work.",
    featuredLabel: "Featured",
    inDevelopmentLabel: "In development",
    academicLabel: "Academic",
    repositoryLabel: "Repository",
    repositoryPending: "Repository not public yet",
    stackLabel: "Stack",
    goalsLabel: "Scope",
    otherTitle: "Backend & DevOps",
    categoryLabels: {
      data: "Data Engineering",
      backend: "Backend",
      devops: "DevOps",
    },
    items: {
      dataflow: {
        description:
          "An end-to-end ETL pipeline: data is extracted with Python, transformed with Pandas and loaded into PostgreSQL, with workflows orchestrated by Apache Airflow and the environment containerized with Docker.",
        goals: [
          "Extraction, transformation and loading as separate, reusable steps",
          "Airflow DAGs for scheduling and orchestration",
          "PostgreSQL as the destination for structured data",
          "A reproducible environment with Docker",
        ],
      },
      gamehub: {
        description:
          "Real-time chat platform for gamer communities — public and private channels, direct messages, and authenticated live messaging, built with Clean Architecture on .NET and PostgreSQL.",
      },
      devopsEsg: {
        description:
          "Spring Boot application focused on DevOps practices: multi-stage Docker build, Docker Compose, and a GitHub Actions CI/CD pipeline that builds, tests and deploys to staging and production by branch.",
      },
    },
  },
  skills: {
    title: "Data tooling first.",
    description:
      "Tools I work with, grouped by area.",
    categories: {
      dataEngineering: {
        title: "Data Engineering",
        description: "Primary focus — building and orchestrating data pipelines.",
      },
      dataAnalysis: {
        title: "Data Analysis",
        description: "Secondary focus — querying, organizing and summarizing data.",
      },
      backend: {
        title: "Backend & APIs",
        description: "Building and documenting REST APIs.",
      },
      languages: {
        title: "Languages",
        description: "Python and SQL first, plus C#.",
      },
      infra: {
        title: "Infrastructure & Tools",
        description: "Containers, version control and delivery automation.",
      },
    },
  },
  experience: {
    title: "Experience and education",
    workTitle: "Work",
    educationTitle: "Education",
    items: {
      positivo: {
        role: "IT Intern",
        period: "Apr 2026 — Jul 2026",
        location: "São Paulo, Brazil",
        model: "On-site",
        highlights: [
          "Provided IT support and system maintenance, focusing on operational stability, incident resolution, and service continuity.",
          "Worked with Microsoft Excel for data organization, advanced formulas, pivot tables, analytical reports, and operational process support.",
          "Administered and configured Linux and Windows environments, including user management, permissions, system services, and IT infrastructure support.",
          "Diagnosed and resolved hardware issues, including failure identification, component replacement, performance testing, and corporate equipment support.",
          "Supported the installation, configuration, monitoring, and troubleshooting of information systems, operating systems, and infrastructure resources.",
        ],
      },
      minsait: {
        role: "Technology Apprentice",
        period: "Jul 2024 — Nov 2025",
        location: "São Paulo, Brazil",
        model: "Hybrid",
        highlights: [
          "Administered and optimized PostgreSQL databases, working with migrations, optimized queries, triggers, and views.",
          "Worked with Microsoft Excel for data manipulation and automation, using pivot tables, interactive charts, advanced formulas, PROCX/ÍNDICE/CORRESP, SOMASES, SEERRO, and macros.",
          "Developed REST APIs using Python, Django, and Django REST Framework (DRF), focusing on scalability, versioning, and standardized API development.",
          "Implemented JWT authentication and token-based authorization, including Swagger documentation for API endpoints.",
        ],
      },
    },
    education: {
      fiap: {
        degree: "Systems Analysis and Development",
        detail: "Undergraduate technology degree",
      },
    },
  },
  contact: {
    title: "Let's talk data.",
    description:
      "I'm looking for opportunities in Data Engineering and Data Analysis. If you're hiring, or just want to talk about data, I'd like to hear from you.",
    availability: "Open to opportunities",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    rights: "All rights reserved.",
    role: "Data Engineering · Python · SQL",
  },
};
