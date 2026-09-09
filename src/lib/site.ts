export const site = {
  name: "Rama",
  author: "Mario Belenguer",
  place: "Madrid",
  tagline: "Swift, Xcode, agentes.",
  description:
    "Notas de un ingeniero iOS sobre agentes de código, Swift y Xcode. El artículo largo vive aquí; LinkedIn se lleva el de un minuto.",
  bio: "Ingeniero iOS en Madrid. Escribo sobre agentes de código aplicados a Swift — el texto largo, no el carrusel.",
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

export function formatIndexDate(value: Date | string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
  }).format(toDate(value));
}

export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function isoDate(value: Date | string): string {
  return toDate(value).toISOString().slice(0, 10);
}
