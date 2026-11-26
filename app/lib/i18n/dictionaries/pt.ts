import type { Dictionary } from "@/app/types";

export const pt: Dictionary = {
  meta: {
    title: "Luiz Silva — Engenharia de Dados",
    description:
      "Portfólio de Luiz Silva — Engenharia de Dados e Análise de Dados com Python, SQL, PostgreSQL, ETL/ELT e pipelines de dados.",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    languageSwitcher: "Idioma",
    sectionNavigation: "Navegação por seções",
    backToTop: "Voltar ao topo",
  },
  nav: {
    projects: "Projetos",
    skills: "Skills",
    experience: "Experiência",
    contact: "Contato",
  },
  hero: {
    status: "Aberto a oportunidades em Engenharia de Dados",
    role: "Engenharia de Dados",
    headline: "Pipelines de dados,",
    headlineMuted: "da origem ao banco de dados.",
    tagline:
      "Sou o Luiz. Trabalho com Python, SQL e PostgreSQL para extrair, transformar e carregar dados, com experiência profissional em APIs e bancos de dados.",
    viewProjects: "Ver projetos",
    contactMe: "Entrar em contato",
    facts: [
      { label: "Foco", value: "Engenharia de Dados" },
      { label: "Também", value: "Análise de Dados" },
      { label: "Experiência", value: "APIs · PostgreSQL" },
      { label: "Formação", value: "FIAP · ADS" },
    ],
  },
  pipeline: {
    title: "DataFlow Pipeline",
    schedule: "Execução diária",
    stages: {
      extract: { label: "Extract", detail: "Download do dataset público via HTTP" },
      bronze: { label: "Bronze", detail: "Linhas brutas, intactas e rastreáveis" },
      silver: { label: "Silver", detail: "Limpas, validadas e sem duplicatas" },
      gold: { label: "Gold", detail: "Star schema para análise" },
    },
    orchestration: "Orquestrado por",
    runtime: "Executa em",
    metrics: {
      rawRows: "Linhas brutas ingeridas",
      cleanRows: "Linhas aprovadas para a Silver",
      qualityChecks: "Checagens de qualidade por execução",
      tests: "Testes automatizados",
    },
  },
  projects: {
    title: "Projetos selecionados",
    description: "Projetos de Engenharia de Dados, além de trabalhos em backend e DevOps.",
    featuredLabel: "Destaque",
    academicLabel: "Acadêmico",
    repositoryLabel: "Repositório",
    stackLabel: "Stack",
    metricsLabel: "Resultados no dataset completo",
    highlightsLabel: "Destaques",
    otherTitle: "Backend & DevOps",
    categoryLabels: {
      data: "Engenharia de Dados",
      backend: "Backend",
      devops: "DevOps",
    },
    items: {
      dataflow: {
        description:
          "Pipeline ELT em batch que transforma um milhão de transações brutas de varejo em um star schema testado e pronto para análise. Construído em Medallion Architecture (Bronze, Silver, Gold) com Python, Pandas e PostgreSQL, orquestrado diariamente pelo Apache Airflow e executado de ponta a ponta com um único docker compose up.",
        highlights: [
          "Qualidade de dados como barreira: checagens críticas param a execução antes que dados inválidos cheguem à Silver ou à Gold, e linhas rejeitadas vão para quarentena com o motivo",
          "Execuções idempotentes: uma segunda execução ignora o arquivo já carregado e altera 0 linhas",
          "Modelo dimensional: tabela fato, quatro dimensões, surrogate keys e membro desconhecido",
          "Observabilidade com logs estruturados e um schema de auditoria para cada execução de tarefa e checagem de qualidade",
          "Testes unitários e de integração com Pytest, além de Ruff e CI no GitHub Actions",
        ],
      },
      gamehub: {
        description:
          "Chat em tempo real para comunidades de jogadores — canais públicos e privados, mensagens diretas e comunicação autenticada ao vivo, construído com Clean Architecture em .NET e PostgreSQL.",
      },
      devopsEsg: {
        description:
          "Aplicação Spring Boot focada em práticas de DevOps: build Docker multi-stage, Docker Compose e pipeline de CI/CD no GitHub Actions que faz build, testes e deploy para staging e produção por branch.",
      },
    },
  },
  skills: {
    title: "Ferramentas de dados em primeiro lugar.",
    description:
      "Ferramentas com que trabalho, agrupadas por área.",
    categories: {
      dataEngineering: {
        title: "Engenharia de Dados",
        description: "Foco principal — construção e orquestração de pipelines de dados.",
      },
      dataAnalysis: {
        title: "Análise de Dados",
        description: "Área secundária — consulta, organização e síntese de dados.",
      },
      backend: {
        title: "Backend & APIs",
        description: "Construção e documentação de APIs REST.",
      },
      languages: {
        title: "Linguagens",
        description: "Python e SQL em primeiro lugar, além de C#.",
      },
      infra: {
        title: "Infraestrutura & Ferramentas",
        description: "Containers, versionamento e automação de entrega.",
      },
    },
  },
  experience: {
    title: "Experiência e formação",
    workTitle: "Profissional",
    educationTitle: "Formação",
    items: {
      positivo: {
        role: "Estagiário de TI",
        period: "abr. de 2026 — jul. de 2026",
        location: "São Paulo, Brasil",
        model: "Presencial",
        highlights: [
          "Atuação em suporte de TI e manutenção de sistemas, com foco em estabilidade operacional, resolução de incidentes e continuidade dos serviços.",
          "Manipulação e organização de dados no Microsoft Excel, utilizando fórmulas avançadas, tabelas dinâmicas e relatórios analíticos.",
          "Administração e configuração de ambientes Linux e Windows, incluindo gerenciamento de usuários, permissões, serviços do sistema e suporte à infraestrutura de TI.",
          "Diagnóstico e resolução de problemas de hardware, incluindo identificação de falhas, substituição de componentes, testes de desempenho e suporte a equipamentos corporativos.",
          "Suporte à instalação, configuração, monitoramento e troubleshooting de sistemas de informação, sistemas operacionais e recursos de infraestrutura.",
        ],
      },
      minsait: {
        role: "Aprendiz de Tecnologia",
        period: "jul. de 2024 — nov. de 2025",
        location: "São Paulo, Brasil",
        model: "Híbrido",
        highlights: [
          "Administração e otimização de bancos de dados PostgreSQL, incluindo migrations, queries otimizadas, triggers e views.",
          "Manipulação e automação de dados no Microsoft Excel, utilizando tabelas dinâmicas, gráficos interativos, fórmulas avançadas, PROCX/ÍNDICE/CORRESP, SOMASES, SEERRO e macros.",
          "Desenvolvimento de APIs REST utilizando Python, Django e Django REST Framework (DRF), com foco em escalabilidade, versionamento e padronização.",
          "Implementação de autenticação JWT e autorização baseada em tokens, além da documentação dos endpoints com Swagger.",
        ],
      },
    },
    education: {
      fiap: {
        degree: "Análise e Desenvolvimento de Sistemas",
        detail: "Graduação tecnológica",
      },
    },
  },
  contact: {
    title: "Vamos falar sobre dados.",
    description:
      "Busco oportunidades em Engenharia de Dados e Análise de Dados. Se você está contratando, ou só quer conversar sobre dados, vou gostar de ouvir.",
    availability: "Aberto a oportunidades",
    emailLabel: "E-mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    role: "Engenharia de Dados · Python · SQL",
  },
};
