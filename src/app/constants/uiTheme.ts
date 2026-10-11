/**
 * Tokens visuais do layout (cards, títulos, faixas de seção, pills).
 * As cores de destaque continuam vindo de `moduleColors` (uma paleta por módulo).
 */

export const UI = {
  /** Fundo geral da aplicação */
  pageBg: "#F4F4F5",
  /** Borda suave dos cards */
  cardBorder: "#E7E7EA",
  /** Títulos (cards, seções, header de conteúdo) */
  title: "#1F2937",
  /** Texto padrão (botões de atributo, itens de métricas) */
  text: "#3F3F46",
  /** Texto de apoio */
  muted: "#71717A",
  /** Faixa dos rótulos de seção (PRODUTO / LOCALIZAÇÃO) */
  sectionBand: "#FAFAFB",
  /** Borda das pills de atributo */
  pillBorder: "#D9D9DE",
} as const;

/** Card padrão: fundo branco, cantos 12px e borda suave. */
export const UI_CARD_CLASS = "bg-white rounded-[12px] border border-[#E7E7EA]";

/** Converte `#RRGGBB` em rgba com a opacidade informada (tons claros da cor do módulo). */
export function tint(hex: string, alpha: number): string {
  const cleaned = hex.replace("#", "");
  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
