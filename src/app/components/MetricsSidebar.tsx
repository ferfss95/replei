import React from "react";
import { TrendingUp, ChevronRight, PanelRightOpen, PanelRightClose, Check } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../utils";
import type { Module } from "../constants";
import type { MetricDef, ModuleConfig } from "../modules/types";
import { NEUTRAL_PALETTE, type ModuleColors } from "../constants/moduleColors";

interface MetricsSidebarProps {
  metricsCollapsed: boolean;
  setMetricsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  metricsGroupExpanded: Record<string, boolean>;
  toggleMetricsGroup: (groupId: string) => void;
  selectedMetrics: string[];
  toggleMetric: (metricId: string) => void;
  currentModule: Module;
  currentModuleConfig: ModuleConfig;
  moduleColors: ModuleColors;
}

export const MetricsSidebar = React.memo<MetricsSidebarProps>(function MetricsSidebar({
  metricsCollapsed,
  setMetricsCollapsed,
  metricsGroupExpanded,
  toggleMetricsGroup,
  selectedMetrics,
  toggleMetric,
  currentModule,
  currentModuleConfig,
  moduleColors,
}: MetricsSidebarProps) {
  const [hoveredMetricId, setHoveredMetricId] = React.useState<string | null>(null);
  const planningMetrics = currentModuleConfig.planningMetrics || [];
  const excludedFromVendaEstoque = new Set(
    currentModuleConfig.metricsSidebarExcludeFromVendaEstoque || [],
  );
  const vendaEstoqueMetrics = currentModuleConfig.metrics.filter(
    (m) =>
      !planningMetrics.includes(m.id) && !excludedFromVendaEstoque.has(m.id),
  );
  const planejamentoMetrics = currentModuleConfig.metrics.filter((m) =>
    planningMetrics.includes(m.id),
  );
  const outrasAfterPlanningIds = currentModuleConfig.metricsSidebarOutrasAfterPlanning || [];
  const outrasAfterPlanningMetrics = outrasAfterPlanningIds
    .map((id) => currentModuleConfig.metrics.find((m) => m.id === id))
    .filter((m): m is MetricDef => Boolean(m));
  const hasOutrasAccordion =
    planejamentoMetrics.length > 0 || outrasAfterPlanningMetrics.length > 0;
  // Módulos que exibem métricas diretamente, sem accordion "Venda e Estoque"
  const isLojaFlatMetrics = currentModule === "LOJA" || currentModule === "INDICADORES";
  const extraSidebarSections = currentModuleConfig.metricSidebarExtraSections || [];

  const renderMetricRow = (metric: Pick<MetricDef, "id" | "label" | "tooltip">) => {
    const isSelected = selectedMetrics.includes(metric.id);
    const isHovered = hoveredMetricId === metric.id;
    const borderColor = isHovered
      ? NEUTRAL_PALETTE.title
      : isSelected
        ? moduleColors.primaryColor
        : "#ffffff";
    const boxShadow =
      isHovered
        ? "0 0 0 3px rgba(86, 104, 120, 0.3), 0 2px 6px rgba(0, 0, 0, 0.06)"
        : undefined;
    const textColor = isSelected ? moduleColors.iconColor : NEUTRAL_PALETTE.muted;
    return (
      <button
        type="button"
        key={metric.id}
        title={metric.tooltip || undefined}
        onClick={() => toggleMetric(metric.id)}
        onMouseEnter={() => setHoveredMetricId(metric.id)}
        onMouseLeave={() => setHoveredMetricId(null)}
        className={cn(
          "w-full text-left px-3 py-2 text-[13px] rounded-lg transition-all duration-200 flex items-center justify-between border border-solid",
        )}
        style={{
          backgroundColor: isSelected
            ? moduleColors.backgroundColor
            : "transparent",
          borderColor,
          boxShadow,
          color: textColor,
        }}
      >
        <span className={cn("font-medium", isSelected && "font-semibold")}>{metric.label}</span>
        {isSelected && <Check size={14} className="shrink-0" aria-hidden />}
      </button>
    );
  };

  const vendaEstoqueMetricRows = vendaEstoqueMetrics.map((metric) => renderMetricRow(metric));

  return (
    <aside
      className={cn(
        "bg-white border-l border-[#d5dbe3] flex flex-col overflow-hidden transition-all duration-300 fixed right-0 bottom-0",
        metricsCollapsed ? "w-12" : "w-72",
      )}
      style={{ top: 64 }}
    >
      <div
        className={cn(
          "flex-none",
          metricsCollapsed ? "px-2 pt-4 pb-3" : "px-5 pt-5 pb-4",
        )}
      >
        <div className="flex items-center justify-between">
          {!metricsCollapsed && (
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-[#90A1B9]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-[rgb(49,65,88)]">
                Métricas
              </h3>
            </div>
          )}
          <button
            type="button"
            onClick={() => setMetricsCollapsed((v) => !v)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#90A1B9] hover:text-[#314158] hover:bg-slate-100 transition-colors cursor-pointer"
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
        <div className="flex-1 overflow-y-auto px-5 pb-5">
          <div className="space-y-4">
            {isLojaFlatMetrics ? (
              <div className="space-y-1.5">{vendaEstoqueMetricRows}</div>
            ) : (
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => toggleMetricsGroup("venda_estoque")}
                  className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#62748E] hover:text-slate-800 transition-colors group rounded-md hover:bg-slate-50/50"
                >
                  <div className="flex items-center gap-2">
                    <ChevronRight
                      size={12}
                      className={cn(
                        "text-slate-400 transition-transform duration-200",
                        metricsGroupExpanded["venda_estoque"] && "rotate-90",
                      )}
                    />
                    <span>Venda e Estoque</span>
                  </div>
                </button>
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
              </div>
            )}

            {/* 2. Exposição de produtos (e demais seções extras configuradas no módulo) */}
            {extraSidebarSections.map((section, sectionIdx) => {
              const groupId = section.sidebarGroupId ?? `metric_extra_${sectionIdx}`;
              return (
                <React.Fragment key={groupId}>
                  <div className="py-2">
                    <div className="h-px bg-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleMetricsGroup(groupId)}
                      className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#62748E] hover:text-slate-800 transition-colors group rounded-md hover:bg-slate-50/50"
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight
                          size={12}
                          className={cn(
                            "text-slate-400 transition-transform duration-200",
                            metricsGroupExpanded[groupId] && "rotate-90",
                          )}
                        />
                        <span>{section.title}</span>
                      </div>
                    </button>
                    {metricsGroupExpanded[groupId] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6 pl-1"
                      >
                        {section.groups.map((group) => (
                          <div key={group.subtitle} className="space-y-1.5">
                            <p className="text-[10px] font-semibold text-slate-600 tracking-wide px-2">
                              {group.subtitle}
                            </p>
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

            {/* 3. Outras / planejamento (rótulo do accordion configurável por módulo) */}
            {hasOutrasAccordion && (
              <>
                <div className="py-2">
                  <div className="h-px bg-slate-200" />
                </div>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => toggleMetricsGroup("planejamento")}
                    className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#62748E] hover:text-slate-800 transition-colors group rounded-md hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-2">
                      <ChevronRight
                        size={12}
                        className={cn(
                          "text-slate-400 transition-transform duration-200",
                          metricsGroupExpanded["planejamento"] && "rotate-90",
                        )}
                      />
                      <span>
                        {currentModuleConfig.metricsSidebarPlanningGroupLabel ??
                          "Planejamento"}
                      </span>
                    </div>
                  </button>
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
          </div>
        </div>
      )}
    </aside>
  );
});
