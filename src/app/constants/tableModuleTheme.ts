import type { Module } from '../constants';
import type { CSSProperties } from 'react';

export interface TableModuleTheme {
  headerBg: string;
  headerText: string;
  subHeaderBg: string;
  subHeaderText: string;
  rowHoverBg: string;
  rowOddBg: string;
  rowEvenBg: string;
}

export const TABLE_ROW_ODD_BG = '#FFFFFF';
export const TABLE_ROW_EVEN_BG = '#F5F5F5';

/** Hachuras diagonais: linha 0.5px #D5D5D5, ciclo 12px (-45deg). */
export const TABLE_HATCH_FILL_STYLE: CSSProperties = {
  backgroundColor: '#FFFFFF',
  backgroundImage:
    'repeating-linear-gradient(-45deg, #D5D5D5, #D5D5D5 0.5px, #FFFFFF 0.5px, #FFFFFF 12px)',
  backgroundRepeat: 'repeat',
};

/** Tabela sobre a superfície de hachura — largura = conteúdo das colunas. */
export const ANALYSIS_TABLE_CLASS =
  'relative z-[1] border-separate border-spacing-0 min-w-max';

export const ANALYSIS_TABLE_STYLE: CSSProperties = {
  width: 'max-content',
};

const TABLE_MODULE_THEMES: Record<Module, TableModuleTheme> = {
  PRODUTO: {
    headerBg: '#1743A6',
    headerText: '#FFFFFF',
    subHeaderBg: '#D6D6DD',
    subHeaderText: '#1743A6',
    rowHoverBg: '#DBEAFE',
    rowOddBg: TABLE_ROW_ODD_BG,
    rowEvenBg: TABLE_ROW_EVEN_BG,
  },
  LOJA: {
    headerBg: '#065322',
    headerText: '#FFFFFF',
    subHeaderBg: '#D6DDD7',
    subHeaderText: '#065322',
    rowHoverBg: '#DEF9E7',
    rowOddBg: TABLE_ROW_ODD_BG,
    rowEvenBg: TABLE_ROW_EVEN_BG,
  },
  INDICADORES: {
    headerBg: '#AC8100',
    headerText: '#FFFFFF',
    subHeaderBg: '#DDDCD6',
    subHeaderText: '#AC8100',
    rowHoverBg: '#FFF6D2',
    rowOddBg: TABLE_ROW_ODD_BG,
    rowEvenBg: TABLE_ROW_EVEN_BG,
  },
  EXTRAVIOS: {
    headerBg: '#9B260C',          // Module-brand-strong
    headerText: '#FFFFFF',
    subHeaderBg: '#DDD7D6',       // Module-surface-1
    subHeaderText: '#9B260C',     // Module-brand-strong
    rowHoverBg: '#FEEFEF',        // Module-surface-2
    rowOddBg: TABLE_ROW_ODD_BG,
    rowEvenBg: TABLE_ROW_EVEN_BG,
  },
};

export function getTableModuleTheme(module: Module): TableModuleTheme {
  return TABLE_MODULE_THEMES[module] ?? TABLE_MODULE_THEMES.PRODUTO;
}

/** Índice 0-based da linha de dados: 0 → ímpar (branco), 1 → par (cinza). */
export function getTableDataRowBg(theme: TableModuleTheme, dataRowIndex: number): string {
  return dataRowIndex % 2 === 0 ? theme.rowOddBg : theme.rowEvenBg;
}
