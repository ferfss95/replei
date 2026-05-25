import type { CSSProperties } from 'react';

/** Cabeçalho tabela padrão (1 linha). */
export const STANDARD_TABLE_HEADER_PX = 48;

/** Pivot: linha 1 (grupos) e linha 2 (subcolunas). */
export const PIVOT_TABLE_HEADER_ROW_1_PX = 41;
export const PIVOT_TABLE_HEADER_ROW_2_PX = 34;
export const PIVOT_TABLE_HEADER_TOTAL_PX =
  PIVOT_TABLE_HEADER_ROW_1_PX + PIVOT_TABLE_HEADER_ROW_2_PX;

export const standardTableStickyVars: CSSProperties = {
  ['--replei-header-h' as string]: `${STANDARD_TABLE_HEADER_PX}px`,
};

export const pivotTableStickyVars: CSSProperties = {
  ['--replei-pivot-h1' as string]: `${PIVOT_TABLE_HEADER_ROW_1_PX}px`,
  ['--replei-pivot-h2' as string]: `${PIVOT_TABLE_HEADER_ROW_2_PX}px`,
  ['--replei-pivot-header-h' as string]: `${PIVOT_TABLE_HEADER_TOTAL_PX}px`,
};
