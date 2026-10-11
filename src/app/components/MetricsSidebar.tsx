import React from "react";
import {
  Activity,
  Check,
  ChevronDown,
  PanelRightOpen,
  PanelRightClose,
  Search,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../utils";
import type { Module, Step } from "../constants";
import type { MetricDef, ModuleConfig } from "../modules/types";
import type { AnalysisMode } from "../types/wizard";
import { type ModuleColors } from "../constants/moduleColors";
import { UI, tint } from "../constants/uiTheme";
import { Input } from "./ui/input";
import { stripAccents } from "../utils/searchNormalize";
import { getMetricSidebarLabel } from "../data/metricNaming";
import {
  MetricCheckIconTooltip,
  MetricInfoIconTooltip,
} from "./MetricOrientationTooltip";

function metricMatchesNormalizedQuery(metric: MetricDef, normQuery: string): boolean {
  if (!normQuery) return true;
  const displayLabel = getMetricSidebarLabel(metric.id, metric.label);
  const haystack = [
    stripAccents(displayLabel.toLowerCase()),
    stripAccents(metric.label.toLowerCase()),
    metric.id.toLowerCase(),
    metric.tooltip ? stripAccents(metric.tooltip.toLowerCase()) : "",
  ].join(" ");
  return haystack.includes(normQuery);
}

type MetricSearchCluster = {
  key: string;
  title: string;
  subtitle?: string;
  metrics: MetricDef[];
};

interface MetricsSidebarProps {
  currentStep: Step;
  /** Ids ativados na preparação (histórico); no Calcular a sidebar lista todas as métricas do módulo. */
  resultMetricCatalog: string[];
  /** Calcular: seleção ainda não aplicada à tabela (null = igual à tabela). */
  pendingSelectedMetrics?: string[] | null;
  /** Calcular: há alterações a aplicar (exibe "Aplicar alterações"). */
  hasPendingMetricChanges?: boolean;
  /** Calcular: aplica o rascunho, incluindo/removendo colunas da tabela. */
  onApplyMetricChanges?: () => void;
  metricsCollapsed: boolean;
  setMetricsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  metricsGroupExpanded: Record<string, boolean>;
  toggleMetricsGroup: (groupId: string) => void;
  selectedMetrics: string[];
  toggleMetric: (metricId: string) => void;
  currentModule: Module;
  currentModuleConfig: ModuleConfig;
  moduleColors: ModuleColors;
  analysisMode?: AnalysisMode;
}

export const MetricsSidebar = React.memo<MetricsSidebarProps>(function MetricsSidebar({
  currentStep,
  resultMetricCatalog,
  pendingSelectedMetrics = null,
  hasPendingMetricChanges = false,
  onApplyMetricChanges,
  metricsCollapsed,
  setMetricsCollapsed,
  metricsGroupExpanded,
  toggleMetricsGroup,
  selectedMetrics,
  toggleMetric,
  currentModule,
  currentModuleConfig,
  moduleColors,
  analysisMode,
}: MetricsSidebarProps) {
  /**
   * Em PRODUTO + análise "Capacidade de Exposição" só os accordions extras
   * (ex.: Exposição de produtos) aparecem — "Venda e Estoque" e
   * "Planejamento" ficam ocultos.
   */
  const hideVendaEstoqueAndPlanning =
    currentModule === "PRODUTO" && analysisMode === "capacidade_exposicao";
  /**
   * Em PRODUTO o accordion "Exposição de produtos" fica oculto tanto na
   * análise "Geral" quanto na "Capacidade de Exposição".
   */
  const hideExposicaoProdutos =
    currentModule === "PRODUTO" &&
    (analysisMode === "padrao" || analysisMode === "capacidade_exposicao");
  /**
   * Em PRODUTO + "Capacidade de Exposição" as métricas dedicadas (3 itens)
   * são renderizadas como lista direta — sem accordion — no topo da sidebar.
   * Em qualquer outro modo a seção fica oculta.
   */
  const showCapacidadeExposicaoFlat =
    currentModule === "PRODUTO" && analysisMode === "capacidade_exposicao";
  const [hoveredMetricId, setHoveredMetricId] = React.useState<string | null>(null);
  const [metricsSearchQuery, setMetricsSearchQuery] = React.useState("");
  const isResultStep = currentStep === "analysis";
  // No Calcular todas as métricas do módulo ficam disponíveis: a inclusão/remoção
  // de colunas passa pelo "Aplicar alterações" (resultMetricCatalog é só histórico).
  void resultMetricCatalog;
  /** Seleção exibida: rascunho do Calcular (se houver) ou as métricas da tabela. */
  const displayedSelectedMetrics = pendingSelectedMetrics ?? selectedMetrics;

  // Lista plana das métricas de "Capacidade de Exposição" (PRODUTO), exibidas
  // sem accordion no topo da sidebar quando a análise correspondente está ativa.
  const capacidadeExposicaoMetrics: MetricDef[] = React.useMemo(() => {
    if (!showCapacidadeExposicaoFlat) return [];
    const section = (currentModuleConfig.metricSidebarExtraSections || []).find(
      (s) => s.sidebarGroupId === "capacidade_exposicao_metrics",
  );
    if (!section) return [];
    const ids = section.groups.flatMap((g) => g.metricIds);
    const defs = ids
      .map((id) => currentModuleConfig.metrics.find((m) => m.id === id))
      .filter((m): m is MetricDef => Boolean(m));
    return defs;
  }, [showCapacidadeExposicaoFlat, currentModuleConfig]);

  const planningMetrics = currentModuleConfig.planningMetrics || [];
  const excludedFromVendaEstoque = new Set(
    currentModuleConfig.metricsSidebarExcludeFromVendaEstoque || [],
  );
  const vendaEstoqueMetrics = currentModuleConfig.metrics.filter(
    (m) => !planningMetrics.includes(m.id) && !excludedFromVendaEstoque.has(m.id),
  );
  const planejamentoMetrics = currentModuleConfig.metrics.filter((m) => planningMetrics.includes(m.id));
  const outrasAfterPlanningIds = currentModuleConfig.metricsSidebarOutrasAfterPlanning || [];
  const outrasAfterPlanningMetrics = outrasAfterPlanningIds
      .map((id) => currentModuleConfig.metrics.find((m) => m.id === id))
      .filter((m): m is MetricDef => Boolean(m));
  const hasOutrasAccordion =
    planejamentoMetrics.length > 0 || outrasAfterPlanningMetrics.length > 0;
  // Módulos que exibem métricas diretamente, sem accordion "Venda e Estoque"
  const isLojaFlatMetrics =
    currentModule === "LOJA" ||
    currentModule === "INDICADORES" ||
    currentModule === "EXTRAVIOS";
  const extraSidebarSections = (currentModuleConfig.metricSidebarExtraSections || []).filter(
    (section) => {
      if (hideExposicaoProdutos && section.sidebarGroupId === "exposicao_produtos") return false;
      // A seção "Capacidade de Exposição" é renderizada flat no topo (não como accordion).
      if (section.sidebarGroupId === "capacidade_exposicao_metrics") return false;
      return true;
    },
  );

  const visibleExtraSidebarSections = React.useMemo(
    () =>
      extraSidebarSections.map((section, sectionIdx) => ({
        section,
        groupId: section.sidebarGroupId ?? `metric_extra_${sectionIdx}`,
        groups: section.groups,
      })),
    [extraSidebarSections],
  );

  const showVendaEstoqueAccordion =
    !hideVendaEstoqueAndPlanning &&
    !isLojaFlatMetrics &&
    vendaEstoqueMetrics.length > 0;
  const showFlatMetricsList =
    !hideVendaEstoqueAndPlanning &&
    isLojaFlatMetrics &&
    vendaEstoqueMetrics.length > 0;
  const showPlanejamentoAccordion = !hideVendaEstoqueAndPlanning && hasOutrasAccordion;
  const showPlanejamentoDivider =
    showPlanejamentoAccordion &&
    (showVendaEstoqueAccordion ||
      showFlatMetricsList ||
      visibleExtraSidebarSections.length > 0);

  React.useEffect(() => {
    setMetricsSearchQuery("");
  }, [currentModule]);

  React.useEffect(() => {
    if (isResultStep) setMetricsSearchQuery("");
  }, [isResultStep]);

  const trimmedSearch = metricsSearchQuery.trim();
  const normSearchQuery = trimmedSearch
    ? stripAccents(trimmedSearch.toLowerCase())
    : "";
  const isSearchMode = normSearchQuery.length > 0;

  const searchClusters = React.useMemo((): MetricSearchCluster[] => {
    if (!normSearchQuery) return [];

    const planningIds = currentModuleConfig.planningMetrics || [];
    const planningSet = new Set(planningIds);
    const excludedFromVenda = new Set(
      currentModuleConfig.metricsSidebarExcludeFromVendaEstoque || [],
    );
    const vendaMetrics = currentModuleConfig.metrics.filter(
      (m) => !planningSet.has(m.id) && !excludedFromVenda.has(m.id),
    );
    const planMetrics = currentModuleConfig.metrics.filter((m) => planningSet.has(m.id));
    const outrasIds = currentModuleConfig.metricsSidebarOutrasAfterPlanning || [];
    const outrasMetrics = outrasIds
      .map((id) => currentModuleConfig.metrics.find((m) => m.id === id))
      .filter((m): m is MetricDef => Boolean(m));
    const hasPlanAccordion = planMetrics.length > 0 || outrasMetrics.length > 0;
    const extras = (currentModuleConfig.metricSidebarExtraSections || []).filter(
      (section) => {
        if (hideExposicaoProdutos && section.sidebarGroupId === "exposicao_produtos") return false;
        // A seção "Capacidade de Exposição" é renderizada flat no topo (não como accordion).
      if (section.sidebarGroupId === "capacidade_exposicao_metrics") return false;
        return true;
      },
    );

    const match = (m: MetricDef) => metricMatchesNormalizedQuery(m, normSearchQuery);
    const clusters: MetricSearchCluster[] = [];

    // PRODUTO + Capacidade de Exposição: inclui as 3 métricas flat como cluster.
    if (showCapacidadeExposicaoFlat) {
      const section = (currentModuleConfig.metricSidebarExtraSections || []).find(
        (s) => s.sidebarGroupId === "capacidade_exposicao_metrics",
      );
      if (section) {
        const ids = section.groups.flatMap((g) => g.metricIds);
        const hits = ids
          .map((id) => currentModuleConfig.metrics.find((m) => m.id === id))
          .filter((m): m is MetricDef => Boolean(m))
          .filter(match);
        if (hits.length > 0) {
          clusters.push({ key: "capacidade_exposicao_flat", title: "Métricas", metrics: hits });
        }
      }
    }

    if (!hideVendaEstoqueAndPlanning) {
      const veHits = vendaMetrics.filter(match);
      if (veHits.length > 0) {
        clusters.push({
          key: isLojaFlatMetrics ? "metricas_flat" : "venda_estoque",
          title: isLojaFlatMetrics ? "Métricas" : "Venda e Estoque",
          metrics: veHits,
        });
      }
    }

    extras.forEach((section, sectionIdx) => {
      const groupId = section.sidebarGroupId ?? `metric_extra_${sectionIdx}`;
      section.groups.forEach((group) => {
        const metrics = group.metricIds
          .map((id) => currentModuleConfig.metrics.find((m) => m.id === id))
          .filter((m): m is MetricDef => Boolean(m))
          .filter(match);
        if (metrics.length > 0) {
          clusters.push({
            key: `${groupId}__${group.subtitle}`,
            title: section.title,
            subtitle: group.subtitle,
            metrics,
          });
        }
      });
    });

    if (hasPlanAccordion && !hideVendaEstoqueAndPlanning) {
      const planLabel =
        currentModuleConfig.metricsSidebarPlanningGroupLabel ?? "Planejamento";
      const planOrdered: MetricDef[] = [];
      for (const m of planMetrics) {
        if (match(m)) planOrdered.push(m);
      }
      for (const m of outrasMetrics) {
        if (match(m)) planOrdered.push(m);
      }
      if (planOrdered.length > 0) {
        clusters.push({ key: "planejamento", title: planLabel, metrics: planOrdered });
      }
    }

    return clusters;
  }, [normSearchQuery, currentModuleConfig, isLojaFlatMetrics, hideVendaEstoqueAndPlanning, hideExposicaoProdutos, showCapacidadeExposicaoFlat]);

  const renderMetricRow = (
    metric: Pick<MetricDef, "id" | "label" | "tooltip" | "orientation" | "formula">,
  ) => {
    const isSelected = displayedSelectedMetrics.includes(metric.id);
    const isHovered = hoveredMetricId === metric.id;
    const textColor = isSelected ? moduleColors.primaryColor : UI.text;
    return (
      <button
        type="button"
        key={metric.id}
        onClick={() => toggleMetric(metric.id)}
        onMouseEnter={() => setHoveredMetricId(metric.id)}
        onMouseLeave={() => setHoveredMetricId(null)}
        className={cn(
          "w-full text-left pl-4 pr-3 py-[9px] text-[14px] rounded-lg transition-colors duration-150 flex items-center justify-between gap-2",
        )}
        style={{
          backgroundColor: isSelected
            ? tint(moduleColors.primaryColor, isHovered ? 0.16 : 0.1)
            : isHovered
              ? "#F4F4F5"
              : "transparent",
          color: textColor,
        }}
      >
        <span className={cn("min-w-0 flex-1 font-normal", isSelected && "font-semibold")}>
          {getMetricSidebarLabel(metric.id, metric.label)}
        </span>
        {isSelected ? (
          <MetricCheckIconTooltip
            metricId={metric.id}
            metric={metric}
            iconColor={moduleColors.iconColor}
          />
        ) : isHovered ? (
          <MetricInfoIconTooltip metricId={metric.id} metric={metric} />
        ) : null}
      </button>
  );
  };

  const vendaEstoqueMetricRows = vendaEstoqueMetrics.map((metric) => renderMetricRow(metric));

  /** Cabeçalho de accordion: rótulo em caixa alta + seta à direita (cima = aberto). */
  const renderGroupHeader = (groupId: string, label: React.ReactNode) => {
    const open = !!metricsGroupExpanded[groupId];
    return (
      <button
        type="button"
        onClick={() => toggleMetricsGroup(groupId)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between rounded-md px-0 py-2 text-left text-[14px] font-medium uppercase tracking-[0.2px] transition-colors hover:opacity-80"
        style={{ color: UI.title }}
      >
        <span>{label}</span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={cn("shrink-0 text-[#3F3F46] transition-transform duration-200", open && "rotate-180")}
        />
      </button>
  );
  };

  return (
    <aside
      className={cn(
        "flex shrink-0 flex-col overflow-hidden rounded-[12px] border border-[#E7E7EA] bg-white transition-all duration-300",
        metricsCollapsed ? "w-12" : "w-72",
      )}
    >
      <div
        className={cn(
          "flex-none",
          metricsCollapsed ? "px-2 pt-4 pb-3" : "px-4 pt-5 pb-3",
        )}
      >
        <div className="flex items-center justify-between gap-2">
          {!metricsCollapsed && (
            <div className="flex min-h-[24px] min-w-0 flex-1 items-center gap-2.5">
              <Activity size={18} strokeWidth={2} className="shrink-0" style={{ color: moduleColors.iconColor }} />
              <h3 className="min-w-0 truncate text-[16px] font-bold leading-6" style={{ color: UI.title }}>
                Métricas
              </h3>
            </div>
          )}
          <button
            type="button"
            onClick={() => setMetricsCollapsed((v) => !v)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#90A1B9] transition-colors hover:bg-slate-100 hover:text-[#314158] cursor-pointer"
            title={metricsCollapsed ? "Expandir métricas" : "Recolher métricas"}
          >
            {metricsCollapsed ? (
              <PanelRightOpen size={16} />
            ) : (
              <PanelRightClose size={16} />
            )}
          </button>
        </div>
      </div>

      {!metricsCollapsed && (
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-4 pb-4">
          {!isResultStep ? (
          <div className="shrink-0 bg-white pb-3 pt-0">
            <div className="relative">
              <Search
                size={14}
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#90A1B9]"
                aria-hidden
              />
              <Input
                value={metricsSearchQuery}
                onChange={(e) => setMetricsSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setMetricsSearchQuery("");
                }}
                placeholder="Buscar métricas…"
                aria-label="Buscar métricas no menu lateral"
                className="h-9 border-[#d5dbe3] bg-white pl-8 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-slate-400 focus-visible:ring-slate-200"
              />
            </div>
          </div>
          ) : null}
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="space-y-4">
              {isSearchMode ? (
                searchClusters.length === 0 ? (
                  <p className="px-1 py-10 text-center text-[13px] leading-relaxed text-slate-500">
                    Nenhuma métrica encontrada para &ldquo;{trimmedSearch}&rdquo;.
                  </p>
                ) : (
                  searchClusters.map((cluster) => (
                    <div key={cluster.key} className="space-y-2">
                      <div className="border-l-2 border-slate-200 pl-2.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#62748E]">
                          {cluster.title}
                        </p>
                        {cluster.subtitle ? (
                          <p
                            className="mt-0.5 text-[10px] font-semibold tracking-wide"
                            style={{ color: "rgba(86, 104, 120, 0.75)" }}
                          >
                            {cluster.subtitle}
                          </p>
                        ) : null}
                      </div>
                      <div className="space-y-1.5">
                        {cluster.metrics.map((metric) => renderMetricRow(metric))}
                      </div>
                    </div>
                  ))
                )
              ) : showFlatMetricsList ? (
                <div className="space-y-1.5">{vendaEstoqueMetricRows}</div>
              ) : showCapacidadeExposicaoFlat && capacidadeExposicaoMetrics.length > 0 ? (
                <div className="space-y-1.5">
                  {capacidadeExposicaoMetrics.map((m) => renderMetricRow(m))}
                </div>
              ) : !showVendaEstoqueAccordion &&
                visibleExtraSidebarSections.length === 0 &&
                !showPlanejamentoAccordion ? null : (
                <>
                  {showVendaEstoqueAccordion ? (
                  <div className="space-y-2">
                    {renderGroupHeader("venda_estoque", "Venda e Estoque")}
                    {metricsGroupExpanded["venda_estoque"] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1.5 pl-1"
                      >
                        {vendaEstoqueMetricRows}
                      </motion.div>
                    )}
                  </div>) : null}

                  {/* 2. Exposição de produtos (e demais seções extras configuradas no módulo) */}
                  {visibleExtraSidebarSections.map(({ section, groupId, groups }, sectionIdx) => {
                    const showSectionDivider =
                      sectionIdx > 0 || showVendaEstoqueAccordion;
                    return (
                      <React.Fragment key={groupId}>
                        {showSectionDivider ? (
                          <div className="py-2">
                            <div className="h-px bg-slate-200" />
                          </div>
                        ) : null}
                        <div className="space-y-2">
                          {renderGroupHeader(groupId, section.title)}
                          {metricsGroupExpanded[groupId] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-6 pl-1"
                            >
                              {groups.map((group, groupIdx) => (
                                <div key={group.subtitle || `group_${groupIdx}`} className="space-y-1.5">
                                  {group.subtitle ? (
                                    <p
                                      className="px-2 text-[10px] font-semibold tracking-wide"
                                      style={{ color: "rgba(86, 104, 120, 0.6)" }}
                                    >
                                      {group.subtitle}
                                    </p>
                                  ) : null}
                                  <div className="space-y-1.5">
                                    {group.metricIds.map((metricId) => {
                                      const metric = currentModuleConfig.metrics.find(
                                        (m) => m.id === metricId,
                                      );
                                      return metric ? renderMetricRow(metric) : null;
                                    })}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}

                  {/* 3. Planejamento (rótulo do accordion configurável por módulo) */}
                  {showPlanejamentoAccordion && (
                    <>
                      {showPlanejamentoDivider ? (
                        <div className="py-2">
                          <div className="h-px bg-slate-200" />
                        </div>
                      ) : null}
                      <div className="space-y-2">
                        {renderGroupHeader(
                          "planejamento",
                          currentModuleConfig.metricsSidebarPlanningGroupLabel ?? "Planejamento",
                        )}
                        {metricsGroupExpanded["planejamento"] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              "pl-1",
                              planejamentoMetrics.length > 0 || outrasAfterPlanningMetrics.length > 0
                                ? "space-y-2"
                                : "space-y-1.5",
                            )}
                          >
                            {currentModuleConfig.metricsSidebarPlanningSubgroupLabel &&
                              planejamentoMetrics.length > 0 && (
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-600 px-2">
                                  {currentModuleConfig.metricsSidebarPlanningSubgroupLabel}
                                </p>
                              )}
                            {planejamentoMetrics.length > 0 && (
                              <div className="space-y-1.5">
                                {planejamentoMetrics.map((metric) => renderMetricRow(metric))}
                              </div>
                            )}
                            {outrasAfterPlanningMetrics.length > 0 && (
                              <div
                                className={cn(
                                  "space-y-1.5",
                                  planejamentoMetrics.length > 0 && "pt-1",
                                )}
                              >
                                {outrasAfterPlanningMetrics.map((metric) => renderMetricRow(metric))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Calcular: inclui/remove colunas da tabela conforme as métricas marcadas. */}
      {!metricsCollapsed && isResultStep && hasPendingMetricChanges && (
        <div className="flex-none border-t border-[#EDEDEF] px-4 py-4">
          <button
            type="button"
            onClick={onApplyMetricChanges}
            disabled={displayedSelectedMetrics.length === 0}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-[10px] border bg-white text-[14px] font-semibold transition-all duration-150 enabled:hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
            style={{ borderColor: UI.title, color: UI.title }}
          >
            Aplicar alterações
            <Check size={15} strokeWidth={2.25} />
          </button>
          {displayedSelectedMetrics.length === 0 && (
            <p className="mt-2 text-center text-[11px] leading-4 text-[#71717A]">
              Selecione ao menos uma métrica para a tabela.
            </p>
          )}
        </div>
      )}
    </aside>
  );
});
