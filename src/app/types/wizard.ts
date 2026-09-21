/**
 * Wizard and Analysis Types
 * Tipos relacionados ao fluxo do wizard e modos de análise
 */

export type AnalysisMode =
  | 'padrao'
  | 'capacidade_exposicao'
  | 'evolucao'
  | 'comparativo'
  | 'horaahora';

export type AveragePeriodType = 'Dia' | 'Mês' | 'Ano' | null;

/**
 * Modo do "Add %": 'off' desliga a coluna de %, 'total' calcula participação
 * sobre o total geral da análise, 'agrupamento' calcula participação sobre o
 * total do nível de agrupamento imediatamente superior (cada abertura de
 * drill-down soma 100%).
 */
export type SharePctMode = 'off' | 'total' | 'agrupamento';
