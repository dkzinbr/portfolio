export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export const surfaceCard =
  "rounded-2xl border border-line bg-surface/60 backdrop-blur-sm";

export const surfaceCardHover =
  "transition duration-300 hover:-translate-y-1 hover:border-brand/70 hover:shadow-[0_18px_40px_rgba(37,99,235,0.14)]";
