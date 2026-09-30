@AGENTS.md

# Portfolio — Regras Técnicas e Arquiteturais

Projeto: portfólio profissional pessoal de um desenvolvedor **Back-End**. Site majoritariamente estático (sem CMS/DB por enquanto), com foco em qualidade visual, performance, SEO e acessibilidade.

## Stack (fixada — não trocar sem discutir)

- **Next.js 16.3.7** — App Router apenas. Não usar Pages Router (`pages/`).
- **React 19.2.8**
- **TypeScript 5** — `strict: true` já ativo no `tsconfig.json`. Não desativar.
- **Tailwind CSS v4** — configuração *CSS-first* via `@theme` em `app/globals.css`. Não criar `tailwind.config.js/ts` a menos que uma feature realmente exija (plugins JS, `content` custom, etc.).
- **Deploy: Vercel.**

Antes de usar qualquer API do Next, confirmar o comportamento em `node_modules/next/dist/docs/` — esta versão tem breaking changes em relação ao conhecimento de treinamento (ver `AGENTS.md`). Pontos já confirmados que **diferem do que se espera**:

- `params` e `searchParams` são **Promises** — sempre `await`.
- Use os **Route Props Helpers globais** `PageProps<'/rota'>` e `LayoutProps<'/rota'>` em vez de tipar manualmente `{ params: Promise<...> }`. Eles são gerados automaticamente pelo `next dev`/`next build`, não precisam de import.
- `error.tsx` recebe `{ error, retry }` — o callback de retry chama-se **`retry`**, não `reset`.
- Cache por padrão é o modelo tradicional do Next (fetch cache / revalidate). **Não habilitar `cacheComponents: true`** no `next.config.ts` neste projeto por enquanto: o site é estático, sem necessidade de Suspense/`use cache` granular. Revisar essa decisão apenas se o portfólio ganhar uma seção realmente dinâmica (ex.: dashboard de métricas ao vivo).

## Estrutura de pastas (alvo — a implementar nas próximas etapas)

Sem `src/`: mantemos `app/` na raiz, como já está. Organização por *feature/tipo* dentro de `app/`:

```
app/
  layout.tsx              # Root layout (html/body, fonts, metadata base)
  page.tsx                # Home (single-page portfolio com seções)
  globals.css             # Tailwind v4 + design tokens (@theme)
  sitemap.ts               # gerado via código (a criar)
  robots.ts                # gerado via código (a criar)
  opengraph-image.tsx      # OG image dinâmica (a criar)
  components/
    ui/                    # primitivos reutilizáveis: Button, Badge, Card, Container...
    layout/                # Header, Footer, Nav, SkipLink...
    sections/               # Hero, About, Projects, Skills, Experience, Contact...
  lib/
    content/                # dados do portfólio (projetos, skills, experiência) em .ts tipado
    utils.ts                # helpers puros (ex.: cn() para merge de classes)
  types/
    index.ts                # tipos compartilhados (Project, Skill, ExperienceItem...)
```

Regras:
- Componentes usados em **uma única seção** ficam colocalizados perto de quem os usa (pasta privada `_components`); só sobem para `app/components/` quando reutilizados em **2+ lugares**.
- `app/lib/content/*` é a única fonte de verdade para textos/dados do portfólio (projetos, skills, experiência). Componentes não hardcodam conteúdo — recebem via import desses arquivos. Isso facilita editar o portfólio sem tocar em JSX.
- Alias `@/*` já configurado no `tsconfig.json` — sempre importar com `@/...`, nunca `../../../`.

## Internacionalização (EN default / PT-BR alternativo)

- Abordagem client-side simples, sem roteamento por locale (`/en`, `/pt`) e sem lib de i18n — decisão deliberada para manter o projeto simples (site de uma página só).
- Textos traduzíveis (UI copy: nav, hero, skills, projects, experience, contact, a11y labels) vivem em `app/lib/i18n/dictionaries/{en,pt}.ts`, tipados por `Dictionary` em `app/types`. Dados factuais não traduzíveis (nome, links, lista de tecnologias) continuam em `app/lib/content/*` como antes.
- `LanguageProvider` (`app/components/providers/LanguageProvider.tsx`) lê/escreve o locale em `localStorage` através de `useSyncExternalStore` (não `useState` + efeito — evita o lint `react-hooks/set-state-in-effect` e é o mecanismo que o próprio React recomenda para sincronizar com uma store externa sem mismatch de hidratação). `getServerSnapshot` sempre retorna `"en"`, igual ao HTML renderizado no servidor; a preferência salva só é lida no cliente após o mount. Isso causa um pequeno "flash" para EN em quem já escolheu PT antes de recarregar — troca aceita em nome da simplicidade (evitar cookie + leitura de locale no servidor). `<html lang>` é sincronizado via efeito imperativo separado (mutação direta do DOM, não `setState`).
- **Consequência arquitetural**: qualquer seção que renderize texto traduzido precisa ser Client Component (consome `useLanguage()`), pois o texto precisa reagir à troca de idioma sem reload de página. `Hero`, `About`, `Experience`, `ProjectsSection`, `Skills`, `Contact`, `SideNav`, `MobileNav`, `Footer`, `SkipLink` são Client por esse motivo — é uma exceção justificada à regra "Server por padrão", não um desvio arbitrário. Dados/estrutura que não dependem de idioma (ex.: `SKILL_CATEGORIES`, `PROJECTS`) continuam em módulos simples sem `'use client'`.
- Não duplicar a página inteira por idioma. Um único componente renderiza a UI e troca só o texto via dicionário.

## Server vs Client Components

- **Padrão: Server Component.** Só adicionar `'use client'` em folhas realmente interativas (menu mobile, toggle de tema, formulário de contato, animações com estado, algo com `onClick`/`useState`/`useEffect`).
- Nunca marcar um `layout.tsx` ou seção inteira como Client só por causa de um botão — extrair o botão/ícone interativo em um componente-filho `'use client'` pequeno.
- Providers de contexto (tema, etc.) ficam em componentes `'use client'` dedicados, montados o mais profundo possível na árvore (não envolvendo `<html>`/`<body>` inteiros desnecessariamente).
- Dados estáticos (arrays de projetos/skills) são importados diretamente em Server Components — sem `useEffect` + fetch para dados que já existem em build time.

## Estilização (Tailwind v4)

- Design tokens (cores, fontes, espaçamentos customizados) entram como CSS vars em `@theme inline` dentro de `app/globals.css` — não duplicar valores mágicos em classes espalhadas pelo código.
- Site é **dark-only** (decisão de design já tomada) — não existe toggle claro/escuro nem media query `prefers-color-scheme`. A paleta fixa vive em `:root` e é mapeada em `@theme inline`, em `app/globals.css`.
- Mobile-first sempre: escrever a classe base para mobile e usar `sm:`/`md:`/`lg:`/`xl:` para progressão. Testar em pelo menos 375px, 768px e 1280px.
- Evitar CSS custom fora do Tailwind, exceto o necessário em `globals.css` (resets, `@theme`, keyframes não triviais).

## SEO

- `metadata` estático em `layout.tsx`/`page.tsx`; usar `generateMetadata` apenas se algo depender de dado dinâmico (não é o caso do MVP).
- Definir `title` com template (`title: { default, template: '%s | Nome' }`) no root layout.
- Criar `app/sitemap.ts` e `app/robots.ts` (código, não arquivos estáticos) quando as rotas estiverem definidas.
- OG image: gerar com `next/og` (`opengraph-image.tsx`) para controle de branding, em vez de imagem estática, se viável.
- `<html lang>` já é sincronizado dinamicamente pelo `LanguageProvider` (`en`/`pt-BR` conforme o idioma ativo) — não precisa de ajuste manual.

## Acessibilidade

- HTML semântico sempre: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, hierarquia de `<h1>`–`<h3>` sem pular níveis.
- Toda `<Image>`/ícone com significado tem `alt` descritivo; decorativo usa `alt=""`.
- Contraste mínimo AA (4.5:1 texto normal) nos tokens de cor.
- Navegação por teclado testada (foco visível, ordem lógica); interativos usam `<button>`/`<a>`, nunca `<div onClick>`.
- Animações respeitam `prefers-reduced-motion`.

## Performance

- Imagens sempre via `next/image` (import estático quando o arquivo é local, para `width`/`height`/`blurDataURL` automáticos).
- Fontes via `next/font/google` (já configurado com Geist) — não carregar fontes via `<link>` externo.
- Evitar bibliotecas de animação/ícones pesadas sem necessidade; preferir CSS/Tailwind quando resolver o caso.

## Qualidade de código

- Sem abstrações prematuras: se um componente só é usado uma vez, não vira "sistema de design" genérico.
- Sem comentários explicando o óbvio; comentar só decisões não óbvias.
- Reaproveitar `app/components/ui` antes de criar um novo primitivo parecido.
- `eslint` (`next lint`, config já presente com `core-web-vitals` + `typescript`) deve passar sem warnings antes de considerar uma etapa concluída.

## Deploy

- Vercel é o alvo: evitar qualquer configuração amarrada a outro runtime/host. `next.config.ts` deve continuar deployável sem flags especiais.

## O que evitar

- Não instalar dependências "porque pode ser útil depois" — cada nova dependência é justificada na etapa em que é usada.
- Não copiar literalmente o design de referência que será enviado — usar como inspiração de layout/hierarquia visual, não pixel-a-pixel.
- Não introduzir Pages Router, CSS-in-JS, ou outro framework de estilização além do Tailwind sem alinhar antes.
