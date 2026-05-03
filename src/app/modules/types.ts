import { LucideIcon } from 'lucide-react';

// ──────────────────────────────────────────────────────────────
// Shared interfaces for the module system
// ──────────────────────────────────────────────────────────────

export interface AttributeDef {
  id: string;
  label: string;
  /** LucideIcon or any React component icon */
  icon: LucideIcon | React.ComponentType<{ size?: number; className?: string }>;
  options: string[];
  tooltip?: string;
}

export interface MetricDef {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Texto para `title` no menu de métricas (contexto da métrica) */
  tooltip?: string;
}

/** Subtítulo dentro de uma seção extra do menu de métricas (ex.: PRODUTO exposição) */
export interface MetricSidebarExtraGroup {
  subtitle: string;
  metricIds: string[];
}

/** Bloco opcional no menu lateral (título + grupos com subtítulo) */
export interface MetricSidebarExtraSection {
  title: string;
  groups: MetricSidebarExtraGroup[];
  /** Chave em `metricsGroupExpanded` / `toggleMetricsGroup` para accordion (ex.: exposicao_produtos) */
  sidebarGroupId?: string;
}

export interface ModuleConfig {
  id: string;
  /** Display label used in the header dropdown */
  label: string;

  // ── Domain attributes (non-location) ──
  /** Attributes specific to this module's domain, e.g. Produto: categoria, marca… */
  domainAttributes: AttributeDef[];
  /** Section header label rendered above the domain attribute cards, e.g. "Produto" */
  domainSectionLabel: string;

  /**
   * Resolves the live option list for a domain attribute.
   * Called with the attribute id and the current selections map so that
   * cross-attribute narrowing (e.g. categoria → modalidade) can be applied.
   */
  getDomainAttributeOptions: (
    attrId: string,
    selections: Record<string, string[]>
  ) => string[];

  /**
   * Optional cross-attribute filter applied on top of the base option list
   * inside `getFilteredGroupOptions` (AnalysisView).
   * Location-level cross-attr logic (cidade↔loja, estado↔cidade) is handled
   * centrally; this function covers domain-specific relationships.
   */
  getFilteredGroupOptions?: (
    attrId: string,
    options: string[],
    selections: Record<string, string[]>,
    exclusions: Record<string, string[]>
  ) => string[];

  // ── Metrics ──
  /** Ordered list of metrics available for this module */
  metrics: MetricDef[];
  /** Fixed display order for metric columns in the result table */
  metricDisplayOrder: string[];
  /** Optional: IDs of metrics that belong to the "Planning" group (for visual divider) */
  planningMetrics?: string[];
  /** Rótulo do accordion do menu lateral para essas métricas (padrão: "Planejamento") */
  metricsSidebarPlanningGroupLabel?: string;
  /** Subtítulo opcional dentro do accordion, acima da lista de métricas de planejamento */
  metricsSidebarPlanningSubgroupLabel?: string;
  /**
   * Métricas no accordion Outras/Planejamento após o bloco com subtítulo PLANEJAMENTO
   * (ex.: PPA e Match de Preço no PRODUTO).
   */
  metricsSidebarOutrasAfterPlanning?: string[];
  /**
   * IDs que não entram no grupo "Venda e Estoque" do sidebar (ficam só em `metricSidebarExtraSections`).
   */
  metricsSidebarExcludeFromVendaEstoque?: string[];
  /** Seções extras no menu de métricas (ex.: Exposição de produtos no PRODUTO) */
  metricSidebarExtraSections?: MetricSidebarExtraSection[];

  /**
   * Fator de escala da `meta_mensal_loja` por `attrId` do nó folha.
   * Garante que a projeção de venda fique na grandeza certa para cada granularidade.
   * Ex.: { loja: 1, setor: 1/3, vendedor: 1/20 }
   * Atributos não listados usam escala 1 (sem ajuste).
   */
  metaMensalScaleByAttr?: Readonly<Record<string, number>>;

  // ── Analysis titles ──
  /** Display title per analysis mode key (padrao | evolucao | comparativo) */
  analysisTitles: Record<string, string>;
}
