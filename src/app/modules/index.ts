import type { ModuleConfig } from './types';
import { produtoModule, EXPOSICAO_PRODUTO_METRIC_IDS } from './produto';
import { lojaModule } from './loja';
import { indicadoresModule } from './indicadores';

// ──────────────────────────────────────────────────────────────
// Module registry
// To enable a new module, create its config file (e.g. loja.ts)
// following the ModuleConfig interface, then add it here.
// ──────────────────────────────────────────────────────────────

export type ModuleId = 'PRODUTO' | 'LOJA' | 'EXTRAVIOS' | 'INDICADORES';

const exposicaoMetricIdSet = new Set<string>(EXPOSICAO_PRODUTO_METRIC_IDS);
const produtoOutrasPrecoIds = new Set<string>(['ppa', 'match_preco']);

/** PRODUTO sem métricas de exposição (placeholder EXTRAVIOS não deve exibir esse bloco). */
const produtoSemExposicao: ModuleConfig = {
  ...produtoModule,
  metrics: produtoModule.metrics.filter(
    (m) => !exposicaoMetricIdSet.has(m.id) && !produtoOutrasPrecoIds.has(m.id),
  ),
  metricDisplayOrder: produtoModule.metricDisplayOrder.filter(
    (id) => !exposicaoMetricIdSet.has(id) && !produtoOutrasPrecoIds.has(id),
  ),
  metricsSidebarExcludeFromVendaEstoque: undefined,
  metricSidebarExtraSections: undefined,
  metricsSidebarPlanningGroupLabel: undefined,
  metricsSidebarPlanningSubgroupLabel: undefined,
  metricsSidebarOutrasAfterPlanning: undefined,
};

export const MODULE_REGISTRY: Record<ModuleId, ModuleConfig> = {
  PRODUTO:     produtoModule,
  LOJA:        lojaModule,

  // Placeholders — will be replaced by real configs when each module is built.
  // They inherit PRODUTO's config as a safe fallback so the wizard stays functional.
  EXTRAVIOS:   { ...produtoSemExposicao, id: 'EXTRAVIOS', label: 'EXTRAVIOS' },
  INDICADORES: indicadoresModule,                                          // módulo real
};

export type { ModuleConfig };