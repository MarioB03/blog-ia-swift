export const site = {
  name: "IA + Swift",
  author: "Mario Belenguer",
  description:
    "Agentes de código — Claude Code, Grok, Codex, Cursor — aplicados a Swift, SwiftUI y Xcode. Cada artículo alimenta un post de LinkedIn.",
} as const;

export function formatPostDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatShortDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
