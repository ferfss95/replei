import { getMetricSidebarLabel } from './metricNaming';
import { METRIC_DEFINITIONS } from './metricDefinitions';

export type MetricOrientationSource = {
  label?: string;
  /** Orientação geral (significado e regras) */
  orientation?: string;
  /** Fórmula descritiva da base de cálculo */
  formula?: string;
  /** Texto legado único (orientação e/ou fórmula combinados) */
  tooltip?: string;
};

export type MetricOrientationContent = {
  title: string;
  description?: string;
};

/** Cor fixa do ícone (i) na sidebar — todos os módulos. */
export const METRIC_INFO_ICON_COLOR = '#314158';

/**
 * Resumo de definições longas para a tooltip da sidebar (máx. ~220 caracteres).
 * Usado na geração de `metricDefinitions.ts` a partir do CSV oficial.
 */
export function summarizeMetricDefinition(text: string, maxLen = 220): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLen) return cleaned;

  const sentences = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
  let out = '';
  for (const sentence of sentences) {
    const next = (out ? `${out} ` : '') + sentence.trim();
    if (next.length > maxLen) break;
    out = next;
  }
  if (out.length >= 40) return out.trim();

  const cut = cleaned.slice(0, maxLen - 1).trimEnd();
  const lastSpace = cut.lastIndexOf(' ');
  return `${lastSpace > 80 ? cut.slice(0, lastSpace) : cut}…`;
}

export function getMetricOrientation(
  metricId: string,
  source?: MetricOrientationSource,
): MetricOrientationContent {
  const title = getMetricSidebarLabel(metricId, source?.label);

  const officialDefinition = METRIC_DEFINITIONS[metricId]?.trim();
  if (officialDefinition) {
    return { title, description: officialDefinition };
  }

  const parts: string[] = [];
  if (source?.orientation?.trim()) parts.push(source.orientation.trim());
  if (source?.formula?.trim()) parts.push(source.formula.trim());
  if (source?.tooltip?.trim()) parts.push(source.tooltip.trim());

  const description = parts.length > 0 ? parts.join('\n\n') : undefined;
  return { title, description };
}
