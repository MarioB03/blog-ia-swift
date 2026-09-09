export const site = {
  name: "IA + Swift",
  author: "Mario Belenguer",
  description:
    "Agentes de código — Claude Code, Grok, Codex, Cursor — aplicados a Swift, SwiftUI y Xcode. Cada artículo alimenta un post de LinkedIn.",
} as const;

function toDate(value: Date | string): Date {
  return value instanceof Date ? value : new Date(`${value}T12:00:00`);
}

export function formatPostDate(value: Date | string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(toDate(value));
}

export function formatShortDate(value: Date | string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(toDate(value));
}

export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function isoDate(value: Date | string): string {
  const date = toDate(value);
  return date.toISOString().slice(0, 10);
}
