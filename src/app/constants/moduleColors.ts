/**
 * Module Color Configuration
 * Define as cores específicas de cada módulo (PRODUTO, LOJA, EXTRAVIOS, INDICADORES)
 */

import type { Module } from '../constants';

export interface ModuleColors {
  primaryColor: string;
  topBarColor: string;
  backgroundColor: string;
}

export const MODULE_COLORS: Record<Module, ModuleColors> = {
  PRODUTO: {
    primaryColor: '#2563EB',
    topBarColor: '#1E3D92',
    backgroundColor: '#EDF0F4',
  },
  LOJA: {
    primaryColor: '#16A34A',
    topBarColor: '#146829',
    backgroundColor: '#EEF4F1',
  },
  EXTRAVIOS: {
    primaryColor: '#314158',
    topBarColor: '#314158',
    backgroundColor: '#F4EFF0',
  },
  // ── INDICADORES (amarelo/âmbar — análogo ao verde do LOJA) ──
  INDICADORES: {
    primaryColor: '#D97706',
    topBarColor: '#92400E',
    backgroundColor: '#FFFBEB',
  },
};

export const getModuleColors = (module: Module): ModuleColors => {
  return MODULE_COLORS[module] || MODULE_COLORS.PRODUTO;
};
