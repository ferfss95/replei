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
  PRODUTO: 'ANÁLISE DE PRODUTO',
  LOJA: 'ANÁLISE DE LOJA',
  EXTRAVIOS: 'ANÁLISE DE EXTRAVIOS',
  INDICADORES: 'ANÁLISE DE INDICADORES',
};

export const getModuleTitle = (module: Module): string => {
  return MODULE_TITLES[module] || 'ANÁLISE';
};
