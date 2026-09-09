# blog-ia-swift

Blog de Mario Belenguer: agentes de código (Claude Code, Grok, Codex, Cursor) aplicados a Swift / SwiftUI / Xcode. Cada artículo alimenta un post de LinkedIn.

Repo vacío a propósito: el sitio se construye en **Grok Build** (Astro o Next.js + Markdown).

## Brief para Grok Build

Monta un blog estático y despliégalo en Vercel.

Stack preferido: **Astro** + Markdown en `src/content/posts/` (o Next.js App Router si lo ves más claro).

Requisitos:
- Home con lista de posts (fecha, título, descripción)
- Página `/posts/[slug]`
- Frontmatter: `title`, `slug`, `date`, `description`, `tags`
- RSS en `/rss.xml`
- Diseño limpio, tipografía buena, dark/light, móvil primero
- Castellano
- Nombre: algo tipo “IA + Swift” / Mario Belenguer
- Un post de ejemplo para no dejar el home vacío
- `og:image` básico

No hace falta CMS. Publicar = commit de un `.md`.

Cuando tengas la URL de Vercel, dímela para actualizar la automatización de packs lun/mié/vie.
