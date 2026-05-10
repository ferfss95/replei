/**
 * Utilitários de ordenação para a árvore de resultados.
 *
 * Abordagem: sem clone profundo.
 *  - Nível raiz: cópia rasa + sort.
 *  - Demais níveis: a cópia rasa de cada `children` é feita durante o
 *    flattenTree, apenas para os ramos expandidos (lazy).
 *  Custo: O(k log k) onde k = número de irmãos no nível sendo expandido.
 */

export type AnalysisTableSortConfig = {
  key: string;
  direction: 'asc' | 'desc';
};

/**
 * Chave reservada: ordena irmãos pelo texto da coluna de atributos (`label`),
 * A–Z / Z–A, em todos os níveis da árvore (comparador lazy no flatten).
 */
export const ANALYSIS_ATTRIBUTE_SORT_KEY = '__analysisAttributeSort';

export function makeRowComparator(
  sortConfig: AnalysisTableSortConfig,
): (a: any, b: any) => number {
  const { key, direction } = sortConfig;
  return (a: any, b: any): number => {
    if (key === ANALYSIS_ATTRIBUTE_SORT_KEY) {
      const aStr = String(a?.label ?? '');
      const bStr = String(b?.label ?? '');
      const cmp = aStr.localeCompare(bStr, 'pt-BR', {
        numeric: true,
        sensitivity: 'base',
      });
      return direction === 'asc' ? cmp : -cmp;
    }

    const aVal = a[key];
    const bVal = b[key];

    const aN = typeof aVal === 'number' && Number.isFinite(aVal) ? aVal : null;
    const bN = typeof bVal === 'number' && Number.isFinite(bVal) ? bVal : null;

    if (aN !== null && bN !== null) {
      if (aN < bN) return direction === 'asc' ? -1 : 1;
      if (aN > bN) return direction === 'asc' ? 1 : -1;
      return 0;
    }

    const aMissing = aVal == null || (typeof aVal === 'number' && !Number.isFinite(aVal));
    const bMissing = bVal == null || (typeof bVal === 'number' && !Number.isFinite(bVal));
    if (aMissing && bMissing) return 0;
    if (aMissing) return 1;
    if (bMissing) return -1;

    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  };
}

/** Ordena apenas o nível raiz (cópia rasa). */
export function sortAnalysisRowTree(
  rows: any[],
  sortConfig: AnalysisTableSortConfig,
): any[] {
  if (!rows?.length) return rows;
  return [...rows].sort(makeRowComparator(sortConfig));
}
