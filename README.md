# Rama

Blog de Mario Belenguer: agentes de código (Claude Code, Grok, Codex, Cursor) aplicados a Swift, SwiftUI y Xcode. El artículo largo vive aquí; LinkedIn se lleva el de un minuto.

Sitio estático en **Astro**. Publicar = commit de un Markdown.

## Añadir un post

1. Crea `src/content/posts/tu-slug.md`:

```yaml
---
title: Un título concreto
slug: tu-slug
date: 2026-09-12
description: Una frase que se pueda leer en el lector RSS.
tags:
  - swiftui
  - claude-code
---
```

2. El `slug` del frontmatter tiene que coincidir con la URL `/posts/tu-slug`.
3. Commit a `main`. Vercel reconstruye el sitio y el RSS (`/rss.xml`).

## Local

```bash
npm install
npm run dev
```

## Stack

- Astro 5 + colecciones Markdown
- Home con portada + archivo
- `/posts/[slug]`
- RSS en `/rss.xml`
- Tema claro / oscuro
- Castellano
