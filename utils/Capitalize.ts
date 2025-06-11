// utils/text.ts
export function capitalizeWords(text: string): string {
    return text
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
  