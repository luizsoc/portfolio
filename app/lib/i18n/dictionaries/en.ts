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
      "I'm Luiz. I work with Python, SQL and PostgreSQL to extract, transform and load data, with professional experience in APIs and databases.",
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
    schedule: "Runs daily",
    stages: {
      extract: { label: "Extract", detail: "Download the public dataset over HTTP" },
      bronze: { label: "Bronze", detail: "Raw rows, untouched and traceable" },
      silver: { label: "Silver", detail: "Cleaned, validated, deduplicated" },
      gold: { label: "Gold", detail: "Star schema for analytics" },
    },
    orchestration: "Orchestrated by",
    runtime: "Runs on",
    metrics: {
      rawRows: "Raw rows ingested",
      cleanRows: "Rows passed to Silver",
      qualityChecks: "Quality checks per run",
      tests: "Automated tests",
    },
  },
  projects: {
    title: "Selected projects",
    description: "Data Engineering projects, plus backend and DevOps work.",
    featuredLabel: "Featured",
    academicLabel: "Academic",
    repositoryLabel: "Repository",
    stackLabel: "Stack",
    metricsLabel: "Results on the full dataset",
    highlightsLabel: "Highlights",
    otherTitle: "Backend & DevOps",
    categoryLabels: {
      data: "Data Engineering",
      backend: "Backend",
      devops: "DevOps",
    },
    items: {
      dataflow: {
        description:
          "A batch ELT pipeline that turns one million raw retail transactions into a tested, analytics-ready star schema. Built on a Medallion Architecture (Bronze, Silver, Gold) with Python, Pandas and PostgreSQL, orchestrated daily by Apache Airflow, and running end to end with a single docker compose up.",
        highlights: [
          "Data quality as a gate: critical checks stop the run before invalid data reaches Silver or Gold, and rejected rows are quarantined with a reason",
          "Idempotent runs: a second run skips the known file and changes 0 rows",
          "Dimensional model: fact table, four dimensions, surrogate keys and an unknown member",
          "Observability with structured logs and an audit schema for every task run and quality check",
          "Pytest unit and integration tests, plus Ruff and CI on GitHub Actions",
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
