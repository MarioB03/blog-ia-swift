---
title: Publicar es hacer commit de un Markdown
slug: publicar-es-un-markdown
date: 2026-08-29
description: Sin CMS, sin panel, sin base de datos. El artículo vive en Git y el RSS se genera solo.
tags:
  - blog
  - markdown
  - git
---

Quería un sitio que pudiera actualizar desde el mismo sitio donde escribo código. Un panel de WordPress o un headless CMS era otro producto que mantener. Para tres posts a la semana, es ruido.

Así que el contrato es este: **si no está en Git, no está publicado.**

## Qué gano

- El mismo diff que uso para Swift me sirve para el artículo.
- Un agente puede redactar el primer borrador y yo lo dejo en un `.md`, no en un textarea.
- El RSS (`/rss.xml`) se reconstruye con el sitio. LinkedIn no lee RSS, pero yo sí: es la prueba de que el post existe fuera de la red social.

## Qué no hay

No hay cuentas, no hay comentarios, no hay “guardar borrador” en un servidor. El borrador es una rama. Si el texto no está listo, no se mergea.

Eso también vale para los agentes. Pueden proponer el Markdown. No pueden pulsar publicar. Publicar es `git push` a `main`.

## Frontmatter mínimo

Cada post lleva cinco campos y nada más: `title`, `slug`, `date`, `description`, `tags`. Si falta uno, el sitio no arranca. Prefiero que falle en el build a que un artículo salga mudo en la home.
