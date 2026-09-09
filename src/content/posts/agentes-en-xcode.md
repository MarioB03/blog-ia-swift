---
title: Cómo uso Claude Code y Grok para no pelearme con Xcode
slug: agentes-en-xcode
date: 2026-09-05
description: Un flujo de trabajo concreto para tocar un target de Xcode con agentes, sin dejar que reescriban el proyecto entero.
tags:
  - claude-code
  - grok
  - xcode
  - swiftui
---

Xcode no está pensado para que un agente lo gobierne. Los `.pbxproj` son frágiles, los schemes tienen estado local y SwiftUI se rompe en silencio cuando alguien “limpia” un `View`. Así que no le doy al agente el repo entero y espero magia.

Le doy un **cerco**.

## El cerco

Antes de abrir Claude Code o Grok, dejo por escrito tres cosas:

1. **Qué fichero se puede tocar.** Uno, dos como mucho. El resto es de solo lectura.
2. **Qué no se toca nunca.** `project.pbxproj`, signing, el App Icon, los storyboards heredados.
3. **Cómo sé que ha ido bien.** Un preview de SwiftUI, un test, o un build de un scheme concreto.

Ese texto es el prompt. Si no cabe en un párrafo, el cambio es demasiado grande.

## Un ejemplo pequeño

Quiero extraer un `View` que se ha vuelto ilegible. El prompt no es “refactoriza ContentView”. Es esto:

```text
En HomeView.swift, extrae el bloque del header (líneas 40–88)
a un HeaderBar.swift nuevo, en el mismo módulo.

No cambies el layout visual. Conserva los spacers y el
toolbar existente. No toques ningún otro fichero.
Compila el scheme IASwift.
```

El agente escribe el fichero, mueve el código y para. Si empieza a “mejorar” nombres o a meter `ViewBuilder` de más, lo corto y vuelvo atrás. El historial de git es el undo de verdad, no el del chat.

## Dónde brilla cada uno

- **Claude Code** — cuando hay que leer un módulo entero y no perder el hilo de los tipos.
- **Grok** — cuando quiero un primer corte rápido o montar la pieza alrededor del brief.
- **Codex** — para parches locales, no para rediseñar una pantalla.
- **Cursor** — para el ir y venir dentro de un solo fichero, con el resto del proyecto a la vista.

Nada de esto sustituye a leer el diff. El agente no firma el commit. Lo firmo yo, después de que Xcode haya compilado.
