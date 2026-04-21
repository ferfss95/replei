/**
 * AnalysisTable Component
 * Renderização da tabela de análise (pivot e não-pivot)
 *
 * RESPONSABILIDADES:
 * - Renderizar estrutura HTML da tabela
 * - Gerenciar colgroup, thead, tbody
 * - Aplicar estilos e bordas
 * - Invocar células formatadas do AnalysisCells
 *
 * REGRA DE OURO: Este componente é "semi-burro" - recebe dados prontos
 * e renderiza sem alterar lógica de negócio homologada.
 */

import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';
import {
  ChevronDown,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Anchor,
  Calendar as CalendarIcon,
  Layers,
  Package,
} from 'lucide-react';
import { cn } from '../../utils';
import { MetricCell, PercentageCell, VariationCell, GrowthCell } from './AnalysisCells';
import type { AnalysisMode } from '../../types/wizard';

// ══════════════════════════════════════════════════════════════════
// TYPES
// ══════════════════════════════════════════════════════════════════

interface AnalysisTableProps {
  // Data from useAnalysisData hook
  paginatedRows: any[];
  totals: Record<string, number> | null;
  pivotTotals?: Record<string, number> | null;
  orderedMetrics: string[];
  periods: string[];
  METRICS_LIST: any[];
  expandedRows: string[];
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null;
  toggleRow: (id: string) => void;
  handleSort: (key: string) => void;
  getAttributeLabel: (attrId: string) => string;
  getAttributeIcon: (attrId: string) => any;
  compPeriodLabel: (period: 1 | 2) => string;
  compPeriodSubtitle: (period: 1 | 2) => string;
  compPeriodDetailItems: (period: 1 | 2) => string[];
  calculateAverage: (value: number, periodStr?: string) => number;
  calculateAverageForTotal: (value: number) => number | null;
  finalRows: any[];

  // UI state from AnalysisView
  scrollShadows: { left: boolean; right: boolean };
  columnWidths: Record<string, number>;
  resizingRef: React.MutableRefObject<{
    col: string | null;
    startX: number;
    startWidth: number;
  }>;
  handleMouseDown: (e: React.MouseEvent, col: string) => void;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  scrollContainerRef: React.RefObject<HTMLDivElement>;

  // Analysis mode and flags
  analysisMode: AnalysisMode;
  isPivot: boolean;
  hasVariation: boolean;
  showAverage: boolean;
  showSharePct: boolean;
  averagePeriodType: 'Dia' | 'Mês' | 'Ano' | null;
  PCT_EXCLUDED_METRICS: Set<string>;
  moduleConfig: any;

  // Display configuration
  groupingLabel: string;
  groupingArr: string[];
  selectedMetrics: string[];

  // Helper functions
  getSubColsForMetric: (metricId: string) => number;
  getPivotMetricWidth: (mId: string) => number;
  getPivotTotalWidth: (mId: string) => number;
  getStdMetricWidth: (mId: string) => number;
  formatNumber: (value: number, decimals?: number) => string;
  bc: (c: string) => React.CSSProperties;
  getPlanningBg: (mId: string, moduleConfig: any, defaultColor?: string) => string;
  METRIC_ABBREVIATIONS: Record<string, string>;
  METRIC_CONFIG: Record<string, any>;
  AVG_COL_WIDTH: number;
  PCT_COL_WIDTH: number;
}

// ══════════════════════════════════════════════════════════════════
// COMPONENT
// ══════════════════════════════════════════════════════════════════

export const AnalysisTable = React.memo<AnalysisTableProps>((props) => {
  const {
    paginatedRows,
    totals,
    pivotTotals,
    orderedMetrics,
    periods,
    METRICS_LIST,
    expandedRows,
    sortConfig,
    toggleRow,
    handleSort,
    getAttributeLabel,
    getAttributeIcon,
    compPeriodLabel,
    compPeriodSubtitle,
    compPeriodDetailItems,
    calculateAverage,
    calculateAverageForTotal,
    finalRows,
    scrollShadows,
    columnWidths,
    resizingRef,
    handleMouseDown,
    tableContainerRef,
    scrollContainerRef,
    analysisMode,
    isPivot,
    hasVariation,
    showAverage,
    showSharePct,
    averagePeriodType,
    PCT_EXCLUDED_METRICS,
    moduleConfig,
    groupingLabel,
    groupingArr,
    selectedMetrics,
    getSubColsForMetric,
    getPivotMetricWidth,
    getPivotTotalWidth,
    getStdMetricWidth,
    formatNumber,
    bc,
    getPlanningBg,
    METRIC_ABBREVIATIONS,
    METRIC_CONFIG,
    AVG_COL_WIDTH,
    PCT_COL_WIDTH,
  } = props;

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto overflow-y-auto relative"
    >
      {/* ─── PIVOT TABLE ─── */}
      {isPivot ? (
        <table
          className="border-separate border-spacing-0 min-w-max"
          style={{ width: 'auto' }}
        >
          <colgroup>
            <col
              style={{
                width: columnWidths['grouping'] || 350,
              }}
            />
            {orderedMetrics.map((mId: string) => {
              const cols: React.ReactNode[] = [];
              const canShowPct = showSharePct && !PCT_EXCLUDED_METRICS.has(mId);

              if (analysisMode === 'comparativo') {
                periods.forEach((p, pIdx) => {
                  cols.push(
                    <col
                      key={`${mId}__p${pIdx}`}
                      style={{
                        width: getPivotMetricWidth(mId),
                      }}
                    />,
                  );
                  if (showAverage) {
                    cols.push(
                      <col
                        key={`${mId}__p${pIdx}__avg`}
                        style={{
                          width: AVG_COL_WIDTH,
                        }}
                      />,
                    );
                  }
                  if (canShowPct) {
                    cols.push(
                      <col
                        key={`${mId}__p${pIdx}__pct`}
                        style={{
                          width: PCT_COL_WIDTH,
                        }}
                      />,
                    );
                  }
                });
                if (hasVariation) {
                  cols.push(
                    <col
                      key={`${mId}__var`}
                      style={{
                        width: getPivotMetricWidth(mId),
                      }}
                    />,
                  );
                  cols.push(
                    <col
                      key={`${mId}__growth`}
                      style={{
                        width: getPivotMetricWidth(mId),
                      }}
                    />,
                  );
                }
              } else {
                periods.forEach((p) => {
                  cols.push(
                    <col
                      key={`${mId}__${p}`}
                      style={{
                        width: getPivotMetricWidth(mId),
                      }}
                    />,
                  );
                  if (showAverage) {
                    cols.push(
                      <col
                        key={`${mId}__${p}__avg`}
                        style={{
                          width: AVG_COL_WIDTH,
                        }}
                      />,
                    );
                  }
                  if (canShowPct) {
                    cols.push(
                      <col
                        key={`${mId}__${p}__pct`}
                        style={{
                          width: PCT_COL_WIDTH,
                        }}
                      />,
                    );
                  }
                });
                cols.push(
                  <col
                    key={`${mId}__total`}
                    style={{
                      width: getPivotTotalWidth(mId),
                    }}
                  />,
                );
                if (showAverage) {
                  cols.push(
                    <col
                      key={`${mId}__total__avg`}
                      style={{ width: AVG_COL_WIDTH }}
                    />,
                  );
                }
                if (canShowPct) {
                  cols.push(
                    <col
                      key={`${mId}__total__pct`}
                      style={{ width: PCT_COL_WIDTH }}
                    />,
                  );
                }
              }
              return cols;
            })}
          </colgroup>

          <thead className="sticky top-0 z-[40]">
            {/* HEADER ROW 1: Metric groups (metric-first pivot) */}
            <tr>
              <th
                rowSpan={2}
                style={{
                  width: columnWidths['grouping'] || 350,
                  ...bc('#e2e8f0'),
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                  borderBottomColor: '#e2e8f0',
                  borderRightWidth: 1,
                  borderRightStyle: 'solid',
                  boxShadow:
                    '1px 0 0 0 rgba(148,163,184,0.18), 6px 0 16px -4px rgba(0,0,0,0.08), 2px 0 6px -2px rgba(0,0,0,0.05)',
                }}
                className="px-4 py-2.5 text-left text-xs font-bold text-slate-700 uppercase tracking-wider sticky left-0 top-0 z-[50] bg-white select-none align-middle"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <Anchor size={14} className="text-slate-400 shrink-0" />
                  <span className="truncate text-[rgb(29,41,61)] text-[14px]">
                    {groupingLabel}
                  </span>
                </div>
                <div
                  className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-[#314158]/40 active:bg-[#314158] transition-colors z-[60]"
                  onMouseDown={(e) => handleMouseDown(e, 'grouping')}
                />
              </th>
              {orderedMetrics.map((mId: string, mIdx: number) => {
                const metric = METRICS_LIST.find((m) => m.id === mId);
                const abbrev = METRIC_ABBREVIATIONS[mId] || metric?.label || mId;
                const isLastMetric = mIdx === orderedMetrics.length - 1;
                return (
                  <RadixTooltip.Root key={`metric_group__${mId}`} delayDuration={300}>
                    <RadixTooltip.Trigger asChild>
                      <th
                        colSpan={getSubColsForMetric(mId)}
                        className="px-3 py-2.5 text-center text-[13px] font-bold uppercase tracking-wide bg-white text-slate-700 select-none"
                        style={{
                          borderBottomWidth: 1,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(!isLastMetric
                            ? {
                                borderRightWidth: 2,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#94a3b8',
                              }
                            : {}),
                        }}
                      >
                        <div className="flex items-center justify-center gap-1.5 text-[13px]">
                          {metric?.icon && (
                            <metric.icon size={12} className="shrink-0 opacity-60" />
                          )}
                          {abbrev}
                        </div>
                      </th>
                    </RadixTooltip.Trigger>
                    <RadixTooltip.Portal>
                      <RadixTooltip.Content
                        className="z-50 bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded shadow-lg animate-in fade-in zoom-in-95 max-w-[250px]"
                        sideOffset={5}
                      >
                        {metric?.label || mId}
                        <RadixTooltip.Arrow className="fill-slate-900" />
                      </RadixTooltip.Content>
                    </RadixTooltip.Portal>
                  </RadixTooltip.Root>
                );
              })}
            </tr>

            {/* HEADER ROW 2: Period/derived sub-headers under each metric */}
            <tr>
              {orderedMetrics.map((mId: string, mIdx: number) => {
                const isLastMetric = mIdx === orderedMetrics.length - 1;
                const subHeaders: React.ReactNode[] = [];
                const isComp = analysisMode === 'comparativo';

                if (isComp) {
                  // Comparative: Period 1, Period 2, Var Vlr, Var %
                  const canShowPct = showSharePct && !PCT_EXCLUDED_METRICS.has(mId);
                  periods.forEach((period, pIdx) => {
                    const isLastPeriod = pIdx === periods.length - 1;

                    // Coluna do valor do período
                    subHeaders.push(
                      <th
                        key={`${mId}__p${pIdx}`}
                        className="px-2 py-2 text-right font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[12px]"
                        style={{
                          width: getPivotMetricWidth(mId),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          // Borda leve: só se NÃO tiver Add% E (não for último período OU tiver variação)
                          ...(!canShowPct && (!isLastPeriod || hasVariation)
                            ? {
                                borderRightWidth: 1,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#cbd5e1',
                              }
                            : {}),
                        }}
                      >
                        <Popover.Root>
                          <Popover.Trigger asChild>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700 transition-colors justify-end">
                              <CalendarIcon size={10} className="shrink-0 opacity-50" />
                              <span>P{pIdx + 1}</span>
                            </div>
                          </Popover.Trigger>
                          <Popover.Portal>
                            <Popover.Content
                              className="z-50 bg-white p-4 rounded-lg shadow-xl border border-slate-200 w-[260px] animate-in zoom-in-95"
                              sideOffset={5}
                              align="start"
                            >
                              <h4 className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wide border-b border-slate-100 pb-2 flex items-center gap-2">
                                <CalendarIcon size={12} className="text-slate-400" />
                                Período {pIdx + 1}
                              </h4>
                              <div className="max-h-[200px] overflow-y-auto custom-scrollbar space-y-0.5">
                                {compPeriodDetailItems((pIdx + 1) as 1 | 2).map(
                                  (item: string, idx: number) => (
                                    <div
                                      key={idx}
                                      className="text-xs text-slate-600 py-1.5 border-b border-slate-50 last:border-0 flex items-start gap-2"
                                    >
                                      <div
                                        className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${pIdx === 0 ? 'bg-[#314158]' : 'bg-[#45556c]'}`}
                                      />
                                      {item}
                                    </div>
                                  ),
                                )}
                              </div>
                              <Popover.Arrow className="fill-white" />
                            </Popover.Content>
                          </Popover.Portal>
                        </Popover.Root>
                      </th>,
                    );

                    // Coluna de média (se Add x̄ estiver ativo)
                    if (showAverage) {
                      subHeaders.push(
                        <th
                          key={`${mId}__p${pIdx}__avg`}
                          className="px-2 py-2 text-right font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[11px]"
                          style={{
                            width: AVG_COL_WIDTH,
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            // Borda leve após média
                            ...(!canShowPct && (!isLastPeriod || hasVariation)
                              ? {
                                  borderRightWidth: 1,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#cbd5e1',
                                }
                              : {}),
                          }}
                        >
                          {`x̄ ${averagePeriodType}`}
                        </th>,
                      );
                    }

                    // Coluna % (se Add% estiver ativo)
                    if (canShowPct) {
                      subHeaders.push(
                        <th
                          key={`${mId}__p${pIdx}__pct`}
                          className="px-2 py-2 text-center font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[12px]"
                          style={{
                            width: PCT_COL_WIDTH,
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            // Borda leve após o % (separa dados diferentes)
                            ...(!isLastPeriod || (isLastPeriod && hasVariation)
                              ? {
                                  borderRightWidth: 1,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#cbd5e1',
                                }
                              : {}),
                          }}
                        >
                          %
                        </th>,
                      );
                    }
                  });

                  // Variation columns (Var Vlr, Var %)
                  if (hasVariation) {
                    subHeaders.push(
                      <th
                        key={`${mId}__var`}
                        className="px-2 py-2 text-right font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[11px]"
                        style={{
                          width: getPivotMetricWidth(mId),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          borderRightWidth: 1,
                          borderRightStyle: 'dotted',
                          borderRightColor: '#cbd5e1',
                        }}
                      >
                        Δ Vlr
                      </th>,
                    );
                    subHeaders.push(
                      <th
                        key={`${mId}__growth`}
                        className="px-2 py-2 text-right font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[11px]"
                        style={{
                          width: getPivotMetricWidth(mId),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(!isLastMetric
                            ? {
                                borderRightWidth: 2,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#94a3b8',
                              }
                            : {}),
                        }}
                      >
                        Δ %
                      </th>,
                    );
                  }
                } else {
                  // Evolutivo/Intraday: period columns + Total
                  const canShowPct = showSharePct && !PCT_EXCLUDED_METRICS.has(mId);
                  periods.forEach((period, pIdx) => {
                    // Period value column
                    subHeaders.push(
                      <th
                        key={`${mId}__${period}`}
                        className="px-2 py-2 text-center font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[11px]"
                        style={{
                          width: getPivotMetricWidth(mId),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(!canShowPct
                            ? {
                                borderRightWidth: 1,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#cbd5e1',
                              }
                            : {}),
                        }}
                      >
                        {period}
                      </th>,
                    );

                    // Average column
                    if (showAverage) {
                      subHeaders.push(
                        <th
                          key={`${mId}__${period}__avg`}
                          className="px-2 py-2 text-center font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[11px]"
                          style={{
                            width: AVG_COL_WIDTH,
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            ...(!canShowPct
                              ? {
                                  borderRightWidth: 1,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#cbd5e1',
                                }
                              : {}),
                          }}
                        >
                          {`x̄ ${averagePeriodType}`}
                        </th>,
                      );
                    }

                    // Percentage column
                    if (canShowPct) {
                      subHeaders.push(
                        <th
                          key={`${mId}__${period}__pct`}
                          className="px-2 py-2 text-center font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[12px]"
                          style={{
                            width: PCT_COL_WIDTH,
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            borderRightWidth: 1,
                            borderRightStyle: 'dotted',
                            borderRightColor: '#cbd5e1',
                          }}
                        >
                          %
                        </th>,
                      );
                    }
                  });

                  // Total column
                  subHeaders.push(
                    <th
                      key={`${mId}__total`}
                      className="px-2 py-2 text-center font-bold text-slate-600 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[11px]"
                      style={{
                        width: getPivotTotalWidth(mId),
                        borderBottomWidth: 2,
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#e2e8f0',
                        ...(!canShowPct && !showAverage && !isLastMetric
                          ? {
                              borderRightWidth: 2,
                              borderRightStyle: 'dotted',
                              borderRightColor: '#94a3b8',
                            }
                          : !canShowPct && !showAverage && isLastMetric
                            ? {
                                borderRightWidth: 2,
                                borderRightStyle: 'solid',
                                borderRightColor: '#e2e8f0',
                              }
                            : {
                                borderRightWidth: 1,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#cbd5e1',
                              }),
                      }}
                    >
                      TOTAL
                    </th>,
                  );

                  // Total average column
                  if (showAverage) {
                    subHeaders.push(
                      <th
                        key={`${mId}__total__avg`}
                        className="px-2 py-2 text-center font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[11px]"
                        style={{
                          width: AVG_COL_WIDTH,
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(!canShowPct && !isLastMetric
                            ? {
                                borderRightWidth: 2,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#94a3b8',
                              }
                            : !canShowPct && isLastMetric
                              ? {
                                  borderRightWidth: 2,
                                  borderRightStyle: 'solid',
                                  borderRightColor: '#e2e8f0',
                                }
                              : {
                                  borderRightWidth: 1,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#cbd5e1',
                                }),
                        }}
                      >
                        {`x̄ ${averagePeriodType}`}
                      </th>,
                    );
                  }

                  // Total percentage column
                  if (canShowPct) {
                    subHeaders.push(
                      <th
                        key={`${mId}__total__pct`}
                        className="px-2 py-2 text-center font-bold text-slate-500 uppercase tracking-wider bg-white select-none whitespace-nowrap text-[12px]"
                        style={{
                          width: PCT_COL_WIDTH,
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(!isLastMetric
                            ? {
                                borderRightWidth: 2,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#94a3b8',
                              }
                            : {
                                borderRightWidth: 2,
                                borderRightStyle: 'solid',
                                borderRightColor: '#e2e8f0',
                              }),
                        }}
                      >
                        %
                      </th>,
                    );
                  }
                }

                return subHeaders;
              })}
            </tr>
          </thead>

          {/* TOTAL ROW (for evolutivo/intraday modes) */}
          {analysisMode !== 'comparativo' && totals && (
            <tbody className="bg-slate-50 z-[35] sticky top-[75px]">
              <tr>
                <td
                  style={{
                    width: columnWidths['grouping'] || 350,
                    position: 'sticky',
                    left: 0,
                    top: 75,
                    zIndex: 40,
                    backgroundColor: '#f8fafc',
                    ...bc('#e2e8f0'),
                    borderRightWidth: 1,
                    borderRightStyle: 'solid',
                    borderBottomWidth: 2,
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#e2e8f0',
                    boxShadow:
                      '1px 0 0 0 rgba(148,163,184,0.18), 6px 0 16px -4px rgba(0,0,0,0.08), 2px 0 6px -2px rgba(0,0,0,0.05)',
                  }}
                  className="h-[46px] px-4 py-2.5 text-left font-bold text-slate-700 uppercase tracking-wider select-none text-[13px]"
                >
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-slate-500 shrink-0" />
                    TOTAL GERAL
                  </div>
                </td>

                {orderedMetrics.map((mId: string, mIdx: number) => {
                  const isLastMetric = mIdx === orderedMetrics.length - 1;
                  const canShowPct = showSharePct && !PCT_EXCLUDED_METRICS.has(mId);
                  const config = METRIC_CONFIG[mId];
                  const cells: React.ReactNode[] = [];

                  // Period columns
                  periods.forEach((period) => {
                    const totalKey = `${period}__${mId}`;
                    const totalValue = pivotTotals ? pivotTotals[totalKey] : 0;

                    // Value column
                    cells.push(
                      <td
                        key={totalKey}
                        className="h-[46px] px-3 py-2.5 text-right sticky top-[75px] z-[30] text-[13px] text-slate-700 font-medium bg-slate-50 whitespace-nowrap"
                        style={{
                          width: getPivotMetricWidth(mId),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(!canShowPct && !showAverage
                            ? {
                                borderRightWidth: 1,
                                borderRightStyle: 'dotted',
                                borderRightColor: '#cbd5e1',
                              }
                            : {}),
                        }}
                      >
                        <MetricCell
                          value={totalValue}
                          metricId={mId}
                          format={config?.format || 'string'}
                        />
                      </td>,
                    );

                    // Average column
                    if (showAverage) {
                      const avgValue = calculateAverage(totalValue, period);

                      // Format average with 2 decimal places, respecting metric type
                      let avgFormatted = '';
                      if (config) {
                        switch (config.format) {
                          case 'currency':
                            avgFormatted = new Intl.NumberFormat('pt-BR', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(avgValue);
                            break;
                          case 'percent':
                          case 'percent1':
                            avgFormatted = new Intl.NumberFormat('pt-BR', {
                              style: 'percent',
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(avgValue);
                            break;
                          case 'integer':
                            avgFormatted = new Intl.NumberFormat('pt-BR', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(avgValue);
                            break;
                          case 'decimal':
                          case 'decimal1':
                            avgFormatted = new Intl.NumberFormat('pt-BR', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(avgValue);
                            break;
                          case 'days':
                            avgFormatted = `${avgValue.toFixed(2)} dias`;
                            break;
                          default:
                            avgFormatted = avgValue.toFixed(2);
                        }
                      } else {
                        avgFormatted = avgValue.toFixed(2);
                      }

                      cells.push(
                        <td
                          key={`${totalKey}__avg`}
                          className="h-[46px] px-2 pr-3 py-2.5 text-right sticky top-[75px] z-[30] text-[12px] text-slate-600 bg-slate-50 whitespace-nowrap"
                          style={{
                            width: AVG_COL_WIDTH,
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            ...(!canShowPct
                              ? {
                                  borderRightWidth: 1,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#cbd5e1',
                                }
                              : {}),
                          }}
                        >
                          {avgFormatted}
                        </td>,
                      );
                    }

                    // Percentage column
                    if (canShowPct) {
                      cells.push(
                        <td
                          key={`${totalKey}__pct`}
                          className="h-[46px] px-2 py-2.5 text-center sticky top-[75px] z-[30] text-[12px] text-slate-500 bg-slate-50"
                          style={{
                            width: PCT_COL_WIDTH,
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            borderRightWidth: 1,
                            borderRightStyle: 'dotted',
                            borderRightColor: '#cbd5e1',
                          }}
                        >
                          100%
                        </td>,
                      );
                    }
                  });

                  // Total of totals column
                  const metricId = mId;
                  cells.push(
                    <td
                      key={`total__${metricId}`}
                      style={{
                        width: getPivotTotalWidth(metricId),
                        position: 'sticky',
                        top: 41,
                        zIndex: 30,
                        backgroundColor: '#f8fafc',
                        ...bc('#e2e8f0'),
                        borderBottomWidth: 2,
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#e2e8f0',
                        ...(!showAverage && !canShowPct && isLastMetric
                          ? {
                              borderRightWidth: 2,
                              borderRightStyle: 'solid',
                              borderRightColor: '#e2e8f0',
                            }
                          : {}),
                      }}
                      className="h-[46px] px-3 py-2.5 text-right text-[13px] whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      <MetricCell
                        value={totals[metricId]}
                        metricId={metricId}
                        format={config?.format || 'string'}
                      />
                    </td>,
                  );

                  // Total average column
                  if (showAverage) {
                    cells.push(
                      <td
                        style={{
                          width: AVG_COL_WIDTH,
                          position: 'sticky',
                          top: 41,
                          zIndex: 30,
                          backgroundColor: '#f8fafc',
                          ...bc('#e2e8f0'),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(!canShowPct && isLastMetric
                            ? {
                                borderRightWidth: 2,
                                borderRightStyle: 'solid',
                                borderRightColor: '#e2e8f0',
                              }
                            : {}),
                        }}
                        className="h-[46px] px-2 py-2.5 text-center text-[12px] text-slate-600"
                      >
                        {(() => {
                          const avgValue = calculateAverageForTotal(totals[metricId]);
                          return avgValue !== null ? formatNumber(avgValue, 2) : '—';
                        })()}
                      </td>,
                    );
                  }

                  // Total percentage column
                  if (canShowPct) {
                    cells.push(
                      <td
                        style={{
                          width: PCT_COL_WIDTH,
                          position: 'sticky',
                          top: 41,
                          zIndex: 30,
                          backgroundColor: '#f8fafc',
                          ...bc('#e2e8f0'),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          borderRightWidth: isLastMetric ? 2 : 1,
                          borderRightStyle: 'solid',
                          borderRightColor: '#e2e8f0',
                        }}
                        className="h-[46px] px-2 py-2.5 text-center text-[12px] text-slate-500"
                      >
                        100%
                      </td>,
                    );
                  }

                  return <React.Fragment key={metricId}>{cells}</React.Fragment>;
                })}
              </tr>
            </tbody>
          )}

          {/* PIVOT DATA ROWS */}
          <tbody className="bg-white z-0">
            {paginatedRows.map((row: any) => {
              const depth = row.depth ?? 0;
              const isExpanded = expandedRows.includes(row.id);
              const hasChildren = row.hasChildren || row.children?.length > 0;
              const indentPx = 16 + depth * 32;
              const RowIcon = row.attrId
                ? getAttributeIcon(row.attrId)
                : groupingArr.length > 0
                  ? getAttributeIcon(groupingArr[0])
                  : Layers;
              return (
                <tr key={row.id} className="transition-colors group">
                  <td
                    style={{
                      width: columnWidths['grouping'] || 350,
                      ...bc('#e2e8f0'),
                      borderRightWidth: 1,
                      borderRightStyle: 'solid',
                      borderBottomWidth: 1,
                      borderBottomStyle: 'solid',
                      boxShadow:
                        '1px 0 0 0 rgba(148,163,184,0.18), 6px 0 16px -4px rgba(0,0,0,0.08), 2px 0 6px -2px rgba(0,0,0,0.05)',
                    }}
                    className={cn(
                      'py-2 text-sm whitespace-nowrap sticky left-0 z-[35] overflow-hidden',
                      depth === 0
                        ? 'bg-white group-hover:bg-slate-50'
                        : 'bg-[#f8fafc] group-hover:bg-slate-50',
                      depth === 0
                        ? 'font-semibold text-slate-800'
                        : 'font-medium text-slate-700',
                    )}
                  >
                    <div className="flex items-center">
                      <div
                        className="flex items-center gap-3 w-full overflow-hidden"
                        style={{
                          paddingLeft: `${indentPx}px`,
                        }}
                      >
                        {hasChildren ? (
                          <button
                            onClick={() => toggleRow(row.id)}
                            className="p-1 hover:bg-slate-200 rounded transition-colors shrink-0"
                          >
                            {isExpanded ? (
                              <ChevronDown size={14} />
                            ) : (
                              <ChevronRight size={14} />
                            )}
                          </button>
                        ) : (
                          <div className="w-[22px] shrink-0" />
                        )}
                        <div className="p-1.5 rounded-md shrink-0 bg-slate-100 text-slate-500">
                          <RowIcon size={14} />
                        </div>
                        <span className="truncate text-[15px]">{row.label}</span>
                      </div>
                    </div>
                  </td>

                  {orderedMetrics.map((mId: string, mIdx: number) => {
                    const config = METRIC_CONFIG[mId];
                    const isLastMetric = mIdx === orderedMetrics.length - 1;
                    const isComp = analysisMode === 'comparativo';
                    const canShowPct = showSharePct && !PCT_EXCLUDED_METRICS.has(mId);
                    const cells: React.ReactNode[] = [];
                    const planningBg = getPlanningBg(mId, moduleConfig, '#e2e8f0');

                    // Period value cells
                    periods.forEach((period, pIdx) => {
                      const key = `${period}__${mId}`;
                      const isLastPeriod = pIdx === periods.length - 1;
                      // For comparativo: only P1 and P2 show %; for evolutiva: all period cols show %
                      const colTotal = pivotTotals ? pivotTotals[key] : null;

                      // Coluna do valor
                      cells.push(
                        <td
                          key={key}
                          className={cn(
                            'px-2 pr-3 py-2.5 text-right text-[14px] transition-colors group-hover:bg-slate-50/60 whitespace-nowrap',
                            depth === 0
                              ? 'text-slate-700 font-medium'
                              : 'text-slate-600 font-normal',
                          )}
                          style={{
                            width: getPivotMetricWidth(mId),
                            borderBottomWidth: 1,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            // Borda leve: só se NÃO tiver Add% E (não for último período OU tiver variação)
                            ...(!canShowPct && (!isLastPeriod || hasVariation)
                              ? {
                                  borderRightWidth: 1,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#cbd5e1',
                                }
                              : {}),
                          }}
                        >
                          <MetricCell
                            value={row[key] || 0}
                            metricId={mId}
                            format={config?.format || 'string'}
                          />
                        </td>,
                      );

                      // Coluna de média (se Add x̄ estiver ativo)
                      if (showAverage) {
                        const avgValue = calculateAverage(row[key] || 0, period);

                        // Format average with 2 decimal places, respecting metric type
                        let avgFormatted = '';
                        if (config) {
                          switch (config.format) {
                            case 'currency':
                              avgFormatted = new Intl.NumberFormat('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }).format(avgValue);
                              break;
                            case 'percent':
                            case 'percent1':
                              avgFormatted = new Intl.NumberFormat('pt-BR', {
                                style: 'percent',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }).format(avgValue);
                              break;
                            case 'integer':
                              avgFormatted = new Intl.NumberFormat('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }).format(avgValue);
                              break;
                            case 'decimal':
                            case 'decimal1':
                              avgFormatted = new Intl.NumberFormat('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }).format(avgValue);
                              break;
                            case 'days':
                              avgFormatted = `${avgValue.toFixed(2)} dias`;
                              break;
                            default:
                              avgFormatted = avgValue.toFixed(2);
                          }
                        } else {
                          avgFormatted = avgValue.toFixed(2);
                        }

                        cells.push(
                          <td
                            key={`${key}__avg`}
                            className={cn(
                              'px-2 pr-3 py-2.5 text-right text-[13px] transition-colors group-hover:bg-slate-50/60 whitespace-nowrap',
                              depth === 0
                                ? 'text-slate-600 font-medium'
                                : 'text-slate-500 font-normal',
                            )}
                            style={{
                              width: AVG_COL_WIDTH,
                              borderBottomWidth: 1,
                              borderBottomStyle: 'solid',
                              borderBottomColor: '#e2e8f0',
                              // Borda leve após a média
                              ...(!canShowPct && (!isLastPeriod || hasVariation)
                                ? {
                                    borderRightWidth: 1,
                                    borderRightStyle: 'dotted',
                                    borderRightColor: '#cbd5e1',
                                  }
                                : {}),
                            }}
                          >
                            {avgFormatted}
                          </td>,
                        );
                      }

                      // Coluna do % (se Add% estiver ativo)
                      if (canShowPct) {
                        cells.push(
                          <td
                            key={`${key}__pct`}
                            className="px-2 py-2.5 text-center text-[12px] text-slate-500 transition-colors group-hover:bg-slate-50/60"
                            style={{
                              width: PCT_COL_WIDTH,
                              borderBottomWidth: 1,
                              borderBottomStyle: 'solid',
                              borderBottomColor: '#e2e8f0',
                              // Borda leve após o % (separa dados diferentes)
                              ...(!isLastPeriod || (isLastPeriod && hasVariation)
                                ? {
                                    borderRightWidth: 1,
                                    borderRightStyle: 'dotted',
                                    borderRightColor: '#cbd5e1',
                                  }
                                : {}),
                              // NUNCA borda forte aqui - a borda forte vai no Total
                            }}
                          >
                            <PercentageCell value={row[key] || 0} total={colTotal} />
                          </td>,
                        );
                      }
                    });

                    if (isComp && hasVariation) {
                      // Variation Vlr
                      const diffVal = row[`__diff__${mId}`] || 0;
                      cells.push(
                        <td
                          key={`__diff__${mId}`}
                          className={cn(
                            'px-2 pr-3 py-2.5 whitespace-nowrap text-right text-[13px] transition-colors group-hover:bg-slate-50/60',
                            depth === 0 ? 'font-medium' : 'font-normal',
                          )}
                          style={{
                            width: getPivotMetricWidth(mId),
                            borderBottomWidth: 1,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            // Borda leve: sempre presente entre VAR VLR e VAR %
                            borderRightWidth: 1,
                            borderRightStyle: 'dotted',
                            borderRightColor: '#cbd5e1',
                          }}
                        >
                          <VariationCell value={diffVal} format={config?.format} />
                        </td>,
                      );
                      // Variation %
                      const growthVal = row[`__growth__${mId}`] || 0;
                      cells.push(
                        <td
                          key={`__growth__${mId}`}
                          className={cn(
                            'px-2 pr-3 py-2.5 whitespace-nowrap text-right text-[13px] transition-colors group-hover:bg-slate-50/60',
                            depth === 0 ? 'font-medium' : 'font-normal',
                          )}
                          style={{
                            width: getPivotMetricWidth(mId),
                            borderBottomWidth: 1,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            ...(!isLastMetric
                              ? {
                                  borderRightWidth: 2,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#94a3b8',
                                }
                              : {
                                  borderRightWidth: 2,
                                  borderRightStyle: 'solid',
                                  borderRightColor: '#e2e8f0',
                                }),
                          }}
                        >
                          <GrowthCell value={growthVal} />
                        </td>,
                      );
                    } else if (!isComp) {
                      // Evolutivo/Intraday: Total column
                      const totalVal = row[mId] || 0;
                      cells.push(
                        <td
                          key={`total__${mId}`}
                          className={cn(
                            'px-3 py-2.5 text-right text-[14px] transition-colors group-hover:bg-slate-50/60 whitespace-nowrap',
                            depth === 0
                              ? 'text-slate-700 font-medium'
                              : 'text-slate-600 font-normal',
                          )}
                          style={{
                            width: getPivotTotalWidth(mId),
                            borderBottomWidth: 1,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            ...(!canShowPct && !showAverage && !isLastMetric
                              ? {
                                  borderRightWidth: 2,
                                  borderRightStyle: 'dotted',
                                  borderRightColor: '#94a3b8',
                                }
                              : !canShowPct && !showAverage && isLastMetric
                                ? {
                                    borderRightWidth: 2,
                                    borderRightStyle: 'solid',
                                    borderRightColor: '#e2e8f0',
                                  }
                                : {
                                    borderRightWidth: 1,
                                    borderRightStyle: 'dotted',
                                    borderRightColor: '#cbd5e1',
                                  }),
                          }}
                        >
                          <MetricCell
                            value={totalVal}
                            metricId={mId}
                            format={config?.format || 'string'}
                          />
                        </td>,
                      );

                      // Total average
                      if (showAverage) {
                        const avgValue = calculateAverageForTotal(totalVal);
                        cells.push(
                          <td
                            key={`total__${mId}__avg`}
                            className={cn(
                              'px-2 pr-3 py-2.5 text-right text-[13px] transition-colors group-hover:bg-slate-50/60 whitespace-nowrap',
                              depth === 0
                                ? 'text-slate-600 font-medium'
                                : 'text-slate-500 font-normal',
                            )}
                            style={{
                              width: AVG_COL_WIDTH,
                              borderBottomWidth: 1,
                              borderBottomStyle: 'solid',
                              borderBottomColor: '#e2e8f0',
                              ...(!canShowPct && !isLastMetric
                                ? {
                                    borderRightWidth: 2,
                                    borderRightStyle: 'dotted',
                                    borderRightColor: '#94a3b8',
                                  }
                                : !canShowPct && isLastMetric
                                  ? {
                                      borderRightWidth: 2,
                                      borderRightStyle: 'solid',
                                      borderRightColor: '#e2e8f0',
                                    }
                                  : {
                                      borderRightWidth: 1,
                                      borderRightStyle: 'dotted',
                                      borderRightColor: '#cbd5e1',
                                    }),
                            }}
                          >
                            {avgValue !== null ? formatNumber(avgValue, 2) : '—'}
                          </td>,
                        );
                      }

                      // Total percentage
                      if (canShowPct) {
                        cells.push(
                          <td
                            key={`total__${mId}__pct`}
                            className="px-2 py-2.5 text-center text-[12px] text-slate-500 transition-colors group-hover:bg-slate-50/60"
                            style={{
                              width: PCT_COL_WIDTH,
                              borderBottomWidth: 1,
                              borderBottomStyle: 'solid',
                              borderBottomColor: '#e2e8f0',
                              ...(!isLastMetric
                                ? {
                                    borderRightWidth: 2,
                                    borderRightStyle: 'dotted',
                                    borderRightColor: '#94a3b8',
                                  }
                                : {
                                    borderRightWidth: 2,
                                    borderRightStyle: 'solid',
                                    borderRightColor: '#e2e8f0',
                                  }),
                            }}
                          >
                            <PercentageCell value={totalVal} total={totals?.[mId]} />
                          </td>,
                        );
                      }
                    }

                    return <React.Fragment key={mId}>{cells}</React.Fragment>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        // ─── STANDARD (NON-PIVOT) TABLE ───
        <table
          className="border-separate border-spacing-0 min-w-full"
          style={{ width: 'auto' }}
        >
          <colgroup>
            <col
              style={{
                width: columnWidths['grouping'] || 350,
              }}
            />
            {orderedMetrics.map((metricId) => {
              const canShowPct = showSharePct && !PCT_EXCLUDED_METRICS.has(metricId);
              const cells: React.ReactNode[] = [];

              // Value column
              cells.push(
                <col
                  key={`${metricId}__val`}
                  style={{
                    width: getStdMetricWidth(metricId),
                  }}
                />,
              );

              // Percentage column
              if (canShowPct) {
                cells.push(
                  <col
                    key={`${metricId}__pct`}
                    style={{
                      width: PCT_COL_WIDTH,
                    }}
                  />,
                );
              }

              return cells;
            })}
          </colgroup>

          <thead className="sticky top-0 z-[40] bg-white">
            <tr>
              <th
                style={{
                  width: columnWidths['grouping'] || 350,
                  ...bc('#e2e8f0'),
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                  borderBottomColor: '#e2e8f0',
                  borderRightWidth: 1,
                  borderRightStyle: 'solid',
                  boxShadow:
                    '1px 0 0 0 rgba(148,163,184,0.18), 6px 0 16px -4px rgba(0,0,0,0.08), 2px 0 6px -2px rgba(0,0,0,0.05)',
                }}
                className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider sticky left-0 z-[50] bg-white select-none"
              >
                <div className="flex items-center gap-2">
                  <Anchor size={14} className="text-slate-400 shrink-0" />
                  <span className="truncate text-[rgb(29,41,61)] text-[14px]">
                    {groupingLabel}
                  </span>
                </div>
                <div
                  className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-[#314158]/40 active:bg-[#314158] transition-colors z-[60]"
                  onMouseDown={(e) => handleMouseDown(e, 'grouping')}
                />
              </th>

              {orderedMetrics.map((metricId: string) => {
                const metric = METRICS_LIST.find((m) => m.id === metricId);
                if (!metric) return null;
                const abbrev = METRIC_ABBREVIATIONS[metricId] || metric.label;
                const canShowPct = showSharePct && !PCT_EXCLUDED_METRICS.has(metricId);
                const isLastMetric =
                  metricId === orderedMetrics[orderedMetrics.length - 1];

                const cells: React.ReactNode[] = [];

                // Main metric header
                cells.push(
                  <RadixTooltip.Root key={`${metricId}__val`} delayDuration={300}>
                    <RadixTooltip.Trigger asChild>
                      <th
                        style={{
                          width: getStdMetricWidth(metricId),
                          ...bc('#e2e8f0'),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(canShowPct
                            ? {}
                            : {
                                borderRightWidth: isLastMetric ? 2 : 1,
                                borderRightStyle: 'solid',
                                borderRightColor: '#e2e8f0',
                              }),
                        }}
                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wider bg-white select-none cursor-pointer hover:bg-slate-50 transition-colors"
                        onClick={() => handleSort(metricId)}
                      >
                        <div className="flex items-center justify-center gap-1.5 text-[rgb(29,41,61)] text-[13px]">
                          {metric.icon && (
                            <metric.icon size={12} className="shrink-0 opacity-60" />
                          )}
                          {abbrev}
                          {sortConfig?.key === metricId &&
                            (sortConfig.direction === 'asc' ? (
                              <ArrowUp size={12} className="text-slate-400" />
                            ) : (
                              <ArrowDown size={12} className="text-slate-400" />
                            ))}
                        </div>
                      </th>
                    </RadixTooltip.Trigger>
                    <RadixTooltip.Portal>
                      <RadixTooltip.Content
                        className="z-50 bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded shadow-lg animate-in fade-in zoom-in-95 max-w-[250px]"
                        sideOffset={5}
                      >
                        {metric.label}
                        <RadixTooltip.Arrow className="fill-slate-900" />
                      </RadixTooltip.Content>
                    </RadixTooltip.Portal>
                  </RadixTooltip.Root>,
                );

                // Percentage header
                if (canShowPct) {
                  cells.push(
                    <th
                      key={`${metricId}__pct`}
                      style={{
                        width: PCT_COL_WIDTH,
                        ...bc('#e2e8f0'),
                        borderBottomWidth: 2,
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#e2e8f0',
                        borderRightWidth: isLastMetric ? 2 : 1,
                        borderRightStyle: 'solid',
                        borderRightColor: '#e2e8f0',
                      }}
                      className="px-2 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider bg-white select-none"
                    >
                      %
                    </th>,
                  );
                }

                return cells;
              })}
            </tr>
          </thead>

          {/* TOTAL ROW */}
          {totals && (
            <tbody className="bg-slate-50 z-[35] sticky top-[41px]">
              <tr>
                <td
                  style={{
                    width: columnWidths['grouping'] || 350,
                    position: 'sticky',
                    left: 0,
                    top: 41,
                    zIndex: 40,
                    backgroundColor: '#f8fafc',
                    ...bc('#e2e8f0'),
                    borderRightWidth: 1,
                    borderRightStyle: 'solid',
                    borderBottomWidth: 2,
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#e2e8f0',
                    boxShadow:
                      '1px 0 0 0 rgba(148,163,184,0.18), 6px 0 16px -4px rgba(0,0,0,0.08), 2px 0 6px -2px rgba(0,0,0,0.05)',
                  }}
                  className="h-[46px] px-4 py-2.5 text-left font-bold text-slate-700 uppercase tracking-wider select-none text-[13px]"
                >
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-slate-500 shrink-0" />
                    TOTAL GERAL
                  </div>
                </td>
                {orderedMetrics.map((metricId: string) => {
                  const canShowPct =
                    showSharePct && !PCT_EXCLUDED_METRICS.has(metricId);
                  const isLastMetric =
                    metricId === orderedMetrics[orderedMetrics.length - 1];
                  const config = METRIC_CONFIG[metricId];
                  return (
                    <React.Fragment key={metricId}>
                      {/* Coluna do valor */}
                      <td
                        style={{
                          width: getStdMetricWidth(metricId),
                          position: 'sticky',
                          top: 41,
                          zIndex: 30,
                          backgroundColor: '#f8fafc',
                          ...bc('#e2e8f0'),
                          borderBottomWidth: 2,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(canShowPct
                            ? {}
                            : {
                                borderRightWidth: isLastMetric ? 2 : 1,
                                borderRightStyle: 'solid',
                                borderRightColor: '#e2e8f0',
                              }),
                        }}
                        className="h-[46px] px-3 py-2.5 text-right text-[13px] whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        <MetricCell
                          value={totals[metricId]}
                          metricId={metricId}
                          format={config?.format || 'string'}
                        />
                      </td>
                      {/* Coluna do x̄ */}
                      {showAverage && (
                        <td
                          style={{
                            width: AVG_COL_WIDTH,
                            position: 'sticky',
                            top: 41,
                            zIndex: 30,
                            backgroundColor: '#f8fafc',
                            ...bc('#e2e8f0'),
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            ...(!canShowPct && isLastMetric
                              ? {
                                  borderRightWidth: 2,
                                  borderRightStyle: 'solid',
                                  borderRightColor: '#e2e8f0',
                                }
                              : {}),
                          }}
                          className="h-[46px] px-2 py-2.5 text-center text-[12px] text-slate-600"
                        >
                          {(() => {
                            const avgValue = calculateAverageForTotal(totals[metricId]);
                            return avgValue !== null ? formatNumber(avgValue, 2) : '—';
                          })()}
                        </td>
                      )}
                      {/* Coluna do % */}
                      {canShowPct && (
                        <td
                          style={{
                            width: PCT_COL_WIDTH,
                            position: 'sticky',
                            top: 41,
                            zIndex: 30,
                            backgroundColor: '#f8fafc',
                            ...bc('#e2e8f0'),
                            borderBottomWidth: 2,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            borderRightWidth: isLastMetric ? 2 : 1,
                            borderRightStyle: 'solid',
                            borderRightColor: '#e2e8f0',
                          }}
                          className="h-[46px] px-2 py-2.5 text-center text-[12px] text-slate-500"
                        >
                          100%
                        </td>
                      )}
                    </React.Fragment>
                  );
                })}
              </tr>
            </tbody>
          )}
          <tbody>
            {paginatedRows.map((row: any) => {
              const depth = row.depth ?? 0;
              const isExpanded = expandedRows.includes(row.id);
              const hasChildren = row.hasChildren || row.children?.length > 0;
              const isNested = depth > 0;

              const RowIcon = row.attrId
                ? getAttributeIcon(row.attrId)
                : groupingArr.length > 0
                  ? getAttributeIcon(groupingArr[0])
                  : Layers;

              const indentPx = 16 + depth * 32;

              return (
                <tr
                  key={row.id}
                  className={cn('transition-colors group', isNested && '')}
                >
                <td
                  style={{
                    width: columnWidths['grouping'] || 350,
                    ...bc('#e2e8f0'),
                    borderRightWidth: 1,
                    borderRightStyle: 'solid',
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#e2e8f0',
                    boxShadow:
                      '1px 0 0 0 rgba(148,163,184,0.18), 6px 0 16px -4px rgba(0,0,0,0.08), 2px 0 6px -2px rgba(0,0,0,0.05)',
                  }}
                  className={cn(
                    'py-2 text-sm whitespace-nowrap sticky left-0 z-[35] overflow-hidden',
                    depth === 0
                      ? 'bg-white group-hover:bg-slate-50'
                      : 'bg-[#f8fafc] group-hover:bg-slate-50',
                    depth === 0
                      ? 'font-semibold text-slate-800'
                      : 'font-medium text-slate-700',
                  )}
                >
                  <div className="flex items-center">
                    <div
                      className="flex items-center gap-3 w-full overflow-hidden"
                      style={{
                        paddingLeft: `${indentPx}px`,
                      }}
                    >
                      {hasChildren ? (
                        <button
                          onClick={() => toggleRow(row.id)}
                          className="p-1 hover:bg-slate-200 rounded transition-colors shrink-0"
                        >
                          {isExpanded ? (
                            <ChevronDown size={14} />
                          ) : (
                            <ChevronRight size={14} />
                          )}
                        </button>
                      ) : (
                        <div className="w-[22px] shrink-0" />
                      )}
                      <div className="p-1.5 rounded-md shrink-0 bg-slate-100 text-slate-500">
                        <RowIcon size={14} />
                      </div>
                      <span className="truncate text-[14px]">{row.label}</span>
                    </div>
                  </div>
                </td>

                {orderedMetrics.map((metricId: string) => {
                  const canShowPct =
                    showSharePct && !PCT_EXCLUDED_METRICS.has(metricId);
                  const isLastMetric =
                    metricId === orderedMetrics[orderedMetrics.length - 1];
                  const config = METRIC_CONFIG[metricId];
                  return (
                    <React.Fragment key={metricId}>
                      {/* Coluna do valor */}
                      <td
                        style={{
                          width: getStdMetricWidth(metricId),
                          ...bc('#e2e8f0'),
                          borderBottomWidth: 1,
                          borderBottomStyle: 'solid',
                          borderBottomColor: '#e2e8f0',
                          ...(canShowPct
                            ? {}
                            : {
                                borderRightWidth: isLastMetric ? 2 : 1,
                                borderRightStyle: 'solid',
                                borderRightColor: '#e2e8f0',
                              }),
                        }}
                        className={cn(
                          'px-3 py-3 text-right text-[13px] transition-colors group-hover:bg-slate-50/60 whitespace-nowrap overflow-hidden text-ellipsis',
                          depth === 0
                            ? 'text-slate-700 font-medium'
                            : 'text-slate-600 font-normal',
                        )}
                      >
                        <MetricCell
                          value={row[metricId] ?? 0}
                          metricId={metricId}
                          format={config?.format || 'string'}
                        />
                      </td>
                      {/* Coluna do % */}
                      {canShowPct && (
                        <td
                          style={{
                            width: PCT_COL_WIDTH,
                            ...bc('#e2e8f0'),
                            borderBottomWidth: 1,
                            borderBottomStyle: 'solid',
                            borderBottomColor: '#e2e8f0',
                            borderRightWidth: isLastMetric ? 2 : 1,
                            borderRightStyle: 'solid',
                            borderRightColor: '#e2e8f0',
                          }}
                          className="px-2 py-3 text-center text-[12px] text-slate-500 transition-colors group-hover:bg-slate-50/60"
                        >
                          <PercentageCell
                            value={row[metricId] ?? 0}
                            total={totals?.[metricId]}
                          />
                        </td>
                      )}
                    </React.Fragment>
                  );
                })}
              </tr>
            );
            })}
          </tbody>
        </table>
      )}

      {finalRows.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 text-slate-400 absolute inset-0 top-[85px] z-0">
          <Package size={32} className="mb-2 text-slate-300" />
          <p className="text-sm">Nenhum dado encontrado para os filtros selecionados.</p>
        </div>
      )}
    </div>
  );
});

AnalysisTable.displayName = 'AnalysisTable';
