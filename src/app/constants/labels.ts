/**
 * Static Labels and Display Texts
 * Labels e textos estáticos usados na interface
 */

import type { Module } from '../constants';
import type { AnalysisMode } from '../types/wizard';

export const MODE_LABELS: Record<AnalysisMode, string> = {
  padrao: 'Geral',
  evolucao: 'Evolutiva',
  comparativo: 'Comparativa',
  horaahora: 'Intraday',
};

export const MODULE_TITLES: Record<Module, string> = {
  PRODUTO: 'PRODUTO',
  LOJA: 'LOJA',
  EXTRAVIOS: 'EXTRAVIOS',
  INDICADORES: 'INDICADORES',
};

export const getModuleTitle = (module: Module): string => {
  return MODULE_TITLES[module] || 'ANÁLISE';
};

/** Rótulos oficiais dos períodos no modo comparativo (UI e chaves de período). */
export const COMPARATIVO_PERIOD_LABELS = {
  1: 'Período 1',
  2: 'Período 2',
} as const;

export type ComparativoPeriodIndex = keyof typeof COMPARATIVO_PERIOD_LABELS;

export function getComparativoPeriodLabel(periodIndex: ComparativoPeriodIndex): string {
  return COMPARATIVO_PERIOD_LABELS[periodIndex];
}

/** Identifica período 1 no modo comparativo (aceita legado "P1"). */
export function isComparativoPeriodOne(periodStr?: string): boolean {
  if (!periodStr) return false;
  return periodStr === COMPARATIVO_PERIOD_LABELS[1] || periodStr === 'P1';
}

/** Verifica se a string é um dos períodos comparativos (1 ou 2). */
export function isComparativoPeriodKey(periodStr?: string): boolean {
  if (!periodStr) return false;
  return (
    periodStr === COMPARATIVO_PERIOD_LABELS[1] ||
    periodStr === COMPARATIVO_PERIOD_LABELS[2] ||
    periodStr === 'P1' ||
    periodStr === 'P2'
  );
}
