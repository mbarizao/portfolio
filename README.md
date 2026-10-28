# Marllon Barizão

Página pessoal em [marllonbarizao.com.br](https://marllonbarizao.com.br)  
Hospedagem: [mbarizao-portfolio.web.app](https://mbarizao-portfolio.web.app)

Uma tela, HTML estático, nenhuma dependência de build.

## A ideia

Uma página simples não precisa de framework, de bundler nem de uma pasta `node_modules`. Precisa de um bom texto, uma boa tipografia e um detalhe que valha a pena olhar.

Este projeto existe para mostrar isso: **o simples bem feito funciona**.

Não há seções empilhadas, vitrine de certificados, grade de projetos nem carrossel de tecnologias. Há um nome, uma frase sobre quem eu sou, dois parágrafos, meus contatos e uma animação em ASCII.

## Em números

| | |
|---|---|
| Página | 1 (`public/index.html` — HTML, CSS e JS juntos) |
| Dependências de build | 0 |
| Build | nenhum |
| JavaScript | ~50 linhas de animação, sem biblioteca |
| Requisições externas | Google Fonts + Microsoft Clarity |
| Deploy | Firebase Hosting via GitHub Actions |

## Como funciona

**HTML.** Estrutura semântica (`header`, `main`, `footer`), um único `h1` e links de verdade. Meta tags de SEO/Open Graph, JSON-LD, favicon e links para versões legíveis por agentes.

**CSS.** Um bloco no `<head>`, com variáveis para as cores. Layout com `grid` e `flex`, tipografia fluida com `clamp()`.

**JavaScript.** Um `<script>` no final desenha no `<canvas>` o campo ASCII que ondula ao lado do texto — ondas de seno, mapa de densidade (`. , : ; - = + * #`) e esmaecimento nas bordas. Clarity roda à parte, só para analytics.

**Fontes.** Inter, Source Serif 4 e IBM Plex Mono via Google Fonts, com fallbacks de sistema.

## Descoberta (SEO e agentes)

| Arquivo | Função |
|---|---|
| `public/robots.txt` | Preferências de crawlers e `Content-Signal` |
| `public/sitemap.xml` | Inventário de URLs |
| `public/llms.txt` | Briefing curado para LLMs |
| `public/agents.txt` | Capacidades declaradas para agentes |
| `public/index.md` | Espelho Markdown da homepage |
| `public/assets/og.png` | Imagem Open Graph (1200×630) |
| `public/favicon.ico` + `assets/icons/` | Favicons e ícones PWA |
| `public/site.webmanifest` | Manifesto web |

## Acessibilidade

- Animação decorativa (`aria-hidden`); com `prefers-reduced-motion`, fica parada
- Contraste acima de AA; alvos de toque ≥ 44px; foco visível
- Respeita safe areas de celulares com entalhe

## Rodando localmente

```bash
npm start
```

Abre em [http://localhost:8000](http://localhost:8000) (serve a pasta `public/`).

Alternativas:

```bash
# Emulador Firebase Hosting (mesma config de produção)
npm run emulate
# → http://127.0.0.1:5000

# Python — rode de dentro de public/
cd public
python -m http.server 8000
```

Ou abra `public/index.html` direto no navegador.

## Deploy

Hospedagem em **Firebase Hosting** (projeto `mbarizao-portfolio`). A pasta publicada é `public/`.

### Automático (CI/CD)

Push em `main` publica no canal live. PRs geram preview channel.

```
.github/workflows/firebase-hosting-merge.yml         # → live
.github/workflows/firebase-hosting-pull-request.yml   # → preview
```

Secret no GitHub: `FIREBASE_SERVICE_ACCOUNT_MBARIZAO_PORTFOLIO`.

### Manual

```bash
firebase login
npm run deploy
# ou: firebase deploy --only hosting
```

## Personalizando

Cores em `:root` dentro de `public/index.html`:

```css
--bg: #FAF9F5;      /* fundo */
--ink: #141413;     /* texto */
--muted: #5E5D59;   /* texto secundário */
--clay: #B5532F;    /* destaque */
```

Texto no `<main>`. Animação nas constantes do `<script>` final.

Ao mudar o domínio, atualize as URLs absolutas em:

`public/index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, `public/agents.txt`, `public/index.md` e `public/assets/og.png` (se regenerar).

## Estrutura

```
.
├── public/                      # site publicado (Firebase Hosting)
│   ├── index.html               # página: HTML, CSS e JS
│   ├── index.md                 # espelho Markdown
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── llms.txt
│   ├── agents.txt
│   ├── site.webmanifest
│   ├── favicon.ico
│   └── assets/
│       ├── og.png
│       ├── logo-light.png
│       └── icons/               # favicons e ícones PWA
├── .github/workflows/           # auto-deploy
├── firebase.json
├── .firebaserc
├── package.json
└── README.md
```

## Princípios

1. **Comece pelo conteúdo.** O que a pessoa precisa saber em dez segundos?
2. **Cada byte precisa de motivo.** Se algo pode sair sem prejuízo, sai.
3. **Funcione sem JavaScript.** O script enfeita, não sustenta.
4. **Prefira o que o navegador já sabe fazer.** `grid`, `clamp()`, variáveis CSS e `canvas` resolvem muito.
5. **Termine.** Uma página pequena e acabada vale mais que uma grande pela metade.
