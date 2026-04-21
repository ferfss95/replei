/**
 * Formatting Utilities
 * Funções puras para formatação de dados visuais
 */

/**
 * Border-color helper: ensures all 4 sides are set to avoid Tailwind v4 oklch parsing errors
 */
export const bc = (c: string): React.CSSProperties => ({
  borderTopColor: c,
  borderRightColor: c,
  borderBottomColor: c,
  borderLeftColor: c,
});

/**
 * Format number with specified decimal places using Brazilian locale
 */
export const formatNumber = (
  value: number,
  decimals: number = 0,
): string => {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

/**
 * Convert long period labels to short format
 * Examples: "Janeiro 2026" → "Jan/26", "01/03/2026" → "01/03"
 */
export const shortPeriodLabel = (period: string): string => {
  const monthMap: Record<string, string> = {
    Janeiro: "Jan",
    Fevereiro: "Fev",
    Março: "Mar",
    Abril: "Abr",
    Maio: "Mai",
    Junho: "Jun",
    Julho: "Jul",
    Agosto: "Ago",
    Setembro: "Set",
    Outubro: "Out",
    Novembro: "Nov",
    Dezembro: "Dez",
  };

  // "Janeiro 2026" → "Jan/26"
  const parts = period.split(" ");
  if (parts.length === 2 && monthMap[parts[0]]) {
    return `${monthMap[parts[0]]}/${parts[1].slice(-2)}`;
  }

  // "01/03/2026" → "01/03" (daily — drop year for readability)
  const dayParts = period.split("/");
  if (
    dayParts.length === 3 &&
    dayParts[0].length === 2 &&
    dayParts[1].length === 2
  ) {
    return `${dayParts[0]}/${dayParts[1]}`;
  }

  return period;
};
