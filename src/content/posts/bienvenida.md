---
title: "Por qué existe este cuaderno"
slug: bienvenida
date: 2026-08-22
description: "Un sitio llamado Rama: agentes de código, Swift y la versión de cada pieza que no cabe en LinkedIn."
tags:
  - blog
  - ia
  - swift
---

Este sitio se llama **Rama**: como la de git y como la del árbol. Trabajo que crece al lado, a la vista, hasta que merece pasar a main.

Aquí dejo por escrito cómo uso **Claude Code, Grok, Codex y Cursor** para escribir Swift, SwiftUI y Xcode sin convertirme en un operador de prompts. No es un newsletter de hacks. Es el archivo de lo que ya he publicado —o voy a publicar— en LinkedIn, con el contexto que allí no cabe: comandos, decisiones, trozos de código y los fallos que no quedan bien en un carrusel.

## La regla de publicación

El CMS es Git. Un artículo nuevo es un fichero Markdown en `src/content/posts/` con este frontmatter:

```yaml
title: Un título concreto
slug: un-titulo-concreto
date: 2026-09-09
description: Una frase que se pueda leer en el lector RSS.
tags:
  - swiftui
  - claude-code
```

Commit, push, el sitio se reconstruye. Si el post no está en el repo, no existe.

## Qué voy a contar

- Cómo oriento a un agente para que toque un target de Xcode sin romper el resto.
- Qué le pido a SwiftUI y qué me niego a pedirle (el layout, sobre todo).
- Dónde Claude Code acierta, dónde Grok es más rápido y dónde Codex se pierde.
- El flujo LinkedIn: el post largo nace aquí; allí sale la versión de un minuto.

Si llegas desde un post de LinkedIn, estás en el sitio correcto: aquí está la versión completa.
