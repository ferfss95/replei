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

/** Uma linha extra de atributos de domínio (rótulo + cartões), após `domainAttributes`. */
export interface DomainAttributeExtraRow {
  sectionLabel: string;
  attributes: AttributeDef[];
}

/**
 * Atributo combinado: junção de atributos existentes (ex.: MODELO/COR = MODELO + COR).
 * Vive na faixa «Combinações», exclusiva da etapa de Agrupamento.
 */
export interface CombinedAttributeDef extends AttributeDef {
  /** Atributos de origem, na ordem da concatenação. */
  sourceAttrIds: string[];
}

/** Faixa «Combinações» do Agrupamento (entre PRODUTO e LOCALIZAÇÃO). */
export interface GroupingCombinationsSection {
  sectionLabel: string;
  /** Texto de apoio exibido ao lado do rótulo da faixa. */
  description: string;
  attributes: CombinedAttributeDef[];
}

/** Primeira linha + linhas extras + combinações — para label, ícone e opções de domínio. */
export function collectAllDomainAttributes(
  config: ModuleConfig,
): AttributeDef[] {
  const extra = (config.domainAttributeExtraRows ?? []).flatMap(
    (row) => row.attributes,
  );
  const combined = config.groupingCombinations?.attributes ?? [];
  return [...config.domainAttributes, ...extra, ...combined];
}

/**
 * Regra de hierarquia das combinações: um atributo combinado é sempre o nível
 * mais detalhado em relação às suas origens. Se a combinação já está no
 * agrupamento, as origens não podem entrar abaixo dela (cada linha teria um
 * único filho). Retorna o motivo do bloqueio ou `null`.
 */
export function getCombinedGroupingBlockReason(
  config: ModuleConfig,
  attrId: string,
  grouping: string[],
): string | null {
  if (grouping.includes(attrId)) return null;
  const combined = (config.groupingCombinations?.attributes ?? []).find(
    (c) => grouping.includes(c.id) && c.sourceAttrIds.includes(attrId),
  );
  if (!combined) return null;
  return `Já detalhado por ${combined.label}: abaixo dele cada linha teria um único item. Para usar este atributo, inclua-o antes de ${combined.label}.`;
}

export interface MetricDef {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Orientação geral (significado e regras) — tooltip de métricas */
  orientation?: string;
  /** Fórmula descritiva da base de cálculo — tooltip de métricas */
  formula?: string;
  /** Texto legado único (orientação e/ou fórmula); usado se orientation/formula ausentes */
  tooltip?: string;
}

/** Subtítulo dentro de uma seção extra do menu de métricas (ex.: PRODUTO exposição) */
export interface MetricSidebarExtraGroup {
  subtitle: string;
  metricIds: string[];
}

/**
 * Accordion de métricas no menu lateral, agrupado por contexto de negócio.
 * Quando `metricSidebarGroups` está definido no módulo, substitui o agrupamento
 * padrão (Venda e Estoque / extras / Planejamento). Não cria métricas: só reagrupa ids existentes.
 */
export interface MetricSidebarGroup {
  id: string;
  label: string;
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
   * Linhas adicionais de atributos de domínio (cada uma com rótulo de seção).
   * Ex.: LOJA e INDICADORES exibem o bloco «Produto» (SALA…SABOR) após LOCALIZAÇÃO.
   */
  domainAttributeExtraRows?: DomainAttributeExtraRow[];

  /**
   * Faixa «Combinações» (somente etapa de Agrupamento): atributos formados pela
   * junção de outros atributos, ex.: MODELO/COR no PRODUTO.
   */
  groupingCombinations?: GroupingCombinationsSection;

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
  /**
   * Ordem canônica dos ids de métrica no módulo (referência / consistência).
   * Colunas na tabela de resultados seguem a ordem em que o usuário marca as métricas no menu lateral.
   */
  metricDisplayOrder: string[];
  /** Optional: IDs of metrics that belong to the "Planning" group (for visual divider) */
  planningMetrics?: string[];
  /** Rótulo do accordion do menu lateral para essas métricas (padrão: "Planejamento") */
  metricsSidebarPlanningGroupLabel?: string;
  /** Subtítulo opcional dentro do accordion, acima da lista de métricas de planejamento */
  metricsSidebarPlanningSubgroupLabel?: string;
  /**
   * Métricas no accordion Planejamento após o bloco principal de planejamento
   * (opcional por módulo; em PRODUTO as métricas PPA / Match ficam em «Venda e Estoque»).
   */
  metricsSidebarOutrasAfterPlanning?: string[];
  /**
   * IDs que não entram no grupo "Venda e Estoque" do sidebar (ficam só em `metricSidebarExtraSections`).
   */
  metricsSidebarExcludeFromVendaEstoque?: string[];
  /** Seções extras no menu de métricas (ex.: Exposição de produtos no PRODUTO) */
  metricSidebarExtraSections?: MetricSidebarExtraSection[];
  /** Accordions de métricas por contexto (ex.: INDICADORES: Venda / Atendimento / Produto) */
  metricSidebarGroups?: MetricSidebarGroup[];

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
