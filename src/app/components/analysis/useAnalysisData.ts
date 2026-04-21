/**
 * useAnalysisData Hook
 * Gerencia toda a lógica de processamento de dados para AnalysisView
 *
 * RESPONSABILIDADES:
 * 1. Construção da árvore de atributos (1ª coluna - IMUTÁVEL)
 * 2. Motor de Colunas: Pivot/expansão de métricas conforme modo temporal
 * 3. Cálculos de variação e crescimento
 * 4. Filtros e seleções
 * 5. Ordenação e paginação
 */

import { useMemo, useCallback, useState, useEffect } from 'react';
import {
  LOCATION_ATTRIBUTES,
  MONTHS_OPTIONS,
} from '../../constants';
import {
  LOJAS_BY_CIDADE,
  CIDADES_BY_ESTADO,
  STATE_TO_UF,
  METRIC_CONFIG,
} from '../../referenceData';
import { Tag } from 'lucide-react';
import {
  hashString,
  shortPeriodLabel,
  generateHourlyValue,
} from '../../utils/index';
import { getTodayFormatted } from '../../dateUtils';

interface UseAnalysisDataProps {
  moduleConfig: any;
  selectedMetrics: string[];
  grouping: string[];
  getAttributeOptions: (attrId: string) => string[];
  selections: Record<string, string[]>;
  exclusions: Record<string, string[]>;
  periodType: string;
  dateRange: { start: string; end: string };
  selectedMonths: string[];
  selectedYears: string[];
  isTimeDrilldownEnabled: boolean;
  analysisMode: string;
  compDateRange1: { start: string; end: string };
  compDateRange2: { start: string; end: string };
  compMonths1: string[];
  compMonths2: string[];
  compYears1: string[];
  compYears2: string[];
  weeklyMode: string;
  weeklyComputedDays: Date[];
  selectedSpecificDays: string[];
  compWeeklyComputedDays1: Date[];
  compWeeklyComputedDays2: Date[];
  compSpecificDays1: string[];
  compSpecificDays2: string[];
  periods: string[]; // Computed periods from parent
  groupingArr: string[]; // Filtered grouping array
}

export const useAnalysisData = (props: UseAnalysisDataProps) => {
  const {
    moduleConfig,
    selectedMetrics,
    grouping,
    getAttributeOptions,
    selections,
    exclusions,
    periodType,
    compDateRange1,
    compDateRange2,
    compMonths1,
    compMonths2,
    compYears1,
    compYears2,
    weeklyMode,
    compWeeklyComputedDays1,
    compWeeklyComputedDays2,
    compSpecificDays1,
    compSpecificDays2,
    isTimeDrilldownEnabled,
    analysisMode,
    periods,
    groupingArr,
  } = props;

  // ── Module-level aliases ─────────────────────────────────────────
  const METRICS_LIST = moduleConfig.metrics;
  const METRIC_DISPLAY_ORDER = moduleConfig.metricDisplayOrder;
  const MODULE_TITLES = moduleConfig.analysisTitles as Record<string, string>;

  // ── State Management ─────────────────────────────────────────────
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  // ── Helper: Get attribute label ──────────────────────────────────
  const getAttributeLabel = useCallback(
    (id: string): string => {
      const attr =
        moduleConfig.domainAttributes.find((a: any) => a.id === id) ||
        LOCATION_ATTRIBUTES.find((a) => a.id === id);
      return attr?.label || id;
    },
    [moduleConfig.domainAttributes]
  );

  // ── Helper: Get attribute icon ───────────────────────────────────
  const getAttributeIcon = useCallback(
    (id: string) => {
      const attr =
        moduleConfig.domainAttributes.find((a: any) => a.id === id) ||
        LOCATION_ATTRIBUTES.find((a) => a.id === id);
      return attr?.icon || Tag;
    },
    [moduleConfig.domainAttributes]
  );

  // ── Ordered metrics ──────────────────────────────────────────────
  const orderedMetrics = useMemo(() => {
    return [...new Set(selectedMetrics)].sort(
      (a, b) =>
        METRIC_DISPLAY_ORDER.indexOf(a) - METRIC_DISPLAY_ORDER.indexOf(b)
    );
  }, [selectedMetrics, METRIC_DISPLAY_ORDER]);

  // ── Get filtered group options ───────────────────────────────────
  const getFilteredGroupOptions = useCallback(
    (attrId: string): string[] => {
      let options = getAttributeOptions(attrId);

      // 1. If user selected specific items for THIS attribute, restrict to only those
      const selected = selections[attrId];
      if (selected && selected.length > 0) {
        const allOptions = getAttributeOptions(attrId);
        if (selected.length < allOptions.length) {
          options = options.filter((opt: string) => selected.includes(opt));
        }
      }

      // 2. Remove excluded items
      const excluded = exclusions[attrId];
      if (excluded && excluded.length > 0) {
        options = options.filter((opt: string) => !excluded.includes(opt));
      }

      // 3. Cross-attribute filtering: cidade → loja
      if (attrId === 'loja') {
        const selectedCities = selections['cidade'] || [];
        if (selectedCities.length > 0) {
          const allowedStores = new Set<string>();
          selectedCities.forEach((cityStr: string) => {
            const cityName = cityStr.split(' - ')[0];
            const stores = LOJAS_BY_CIDADE[cityName] || [];
            stores.forEach((s) => allowedStores.add(s));
          });
          if (allowedStores.size > 0) {
            options = options.filter((opt: string) => allowedStores.has(opt));
          }
        }

        // Also: estado → loja (via cidades)
        const selectedStates = selections['estado'] || [];
        if (
          selectedStates.length > 0 &&
          (selections['cidade'] || []).length === 0
        ) {
          const allowedStores = new Set<string>();
          selectedStates.forEach((stateStr: string) => {
            const stateName = stateStr.split(' - ')[0];
            const cities = CIDADES_BY_ESTADO[stateName] || [];
            cities.forEach((city) => {
              const stores = LOJAS_BY_CIDADE[city] || [];
              stores.forEach((s) => allowedStores.add(s));
            });
          });
          if (allowedStores.size > 0) {
            options = options.filter((opt: string) => allowedStores.has(opt));
          }
        }
      }

      // 4. Cross-attribute filtering: estado → cidade
      if (attrId === 'cidade') {
        const selectedStores = selections['loja'] || [];
        if (selectedStores.length > 0) {
          const allowedCities = new Set<string>();
          selectedStores.forEach((store: string) => {
            Object.entries(LOJAS_BY_CIDADE).forEach(([city, stores]) => {
              if (stores.includes(store)) {
                for (const [state, cities] of Object.entries(CIDADES_BY_ESTADO)) {
                  if (cities.includes(city)) {
                    allowedCities.add(`${city} - ${STATE_TO_UF[state]}`);
                    break;
                  }
                }
              }
            });
          });
          if (allowedCities.size > 0) {
            options = options.filter((opt: string) => allowedCities.has(opt));
          }
        }
      }

      // 5. Module-specific cross-attribute filtering
      if (moduleConfig?.getFilteredGroupOptions) {
        options = moduleConfig.getFilteredGroupOptions(
          attrId,
          options,
          selections
        );
      }

      return options;
    },
    [getAttributeOptions, selections, exclusions, moduleConfig]
  );

  // ── Build group tree (1ª COLUNA - IMUTÁVEL) ──────────────────────
  const buildGroupTree = useCallback(
    (
      levels: string[],
      levelIndex: number,
      parentId: string,
      parentSeed: number
    ): any[] => {
      if (levelIndex >= levels.length) return [];

      const attrId = levels[levelIndex];
      const options = getFilteredGroupOptions(attrId);
      const isLeaf = levelIndex === levels.length - 1;

      return options.map((opt: string, idx: number) => {
        const rowId = parentId ? `${parentId}|${opt}` : opt;
        const seed = hashString(opt, parentSeed + idx * 7);

        const children = isLeaf
          ? []
          : buildGroupTree(levels, levelIndex + 1, rowId, seed);

        const rowData: any = {
          id: rowId,
          label: opt,
          depth: levelIndex,
          attrId: attrId,
          hasChildren: children.length > 0,
          children: children,
        };

        if (children.length > 0) {
          // Aggregate metrics from children
          METRICS_LIST.forEach((m: any) => {
            const config = METRIC_CONFIG[m.id];
            const childVals = children.map((c: any) => c[m.id]);
            if (config?.format === 'percent') {
              rowData[m.id] =
                childVals.reduce((a: number, b: number) => a + b, 0) /
                (childVals.length || 1);
            } else {
              rowData[m.id] = childVals.reduce(
                (a: number, b: number) => a + b,
                0
              );
            }
          });
        } else {
          // Leaf node: use hash-based mock data
          METRICS_LIST.forEach((m: any) => {
            const config = METRIC_CONFIG[m.id];
            if (config) {
              const index = seed % config.data.length;
              rowData[m.id] = config.data[index];
            } else {
              rowData[m.id] = 0;
            }
          });
        }

        return rowData;
      });
    },
    [getFilteredGroupOptions, METRICS_LIST]
  );

  // ── Compute raw variation (P2 - P1) ──────────────────────────────
  const computeVariation = useCallback(
    (firstVal: number, lastVal: number, format: string | undefined): number => {
      if (format === 'percent') {
        return lastVal - firstVal; // absolute difference in raw decimal form
      }
      if (firstVal === 0) {
        return lastVal > 0 ? 100 : lastVal < 0 ? -100 : 0;
      }
      return ((lastVal - firstVal) / Math.abs(firstVal)) * 100;
    },
    []
  );

  // ── Compute raw growth ratio: (P2/P1) - 1 ────────────────────────
  const computeGrowth = useCallback(
    (firstVal: number, lastVal: number): number => {
      if (firstVal === 0) {
        if (lastVal === 0) return 0;
        return lastVal > 0 ? Infinity : -Infinity;
      }
      return lastVal / firstVal - 1;
    },
    []
  );

  // ── PIVOT MODE: add period-keyed metrics (MOTOR DE COLUNAS) ──────
  const addPivotMetrics = useCallback(
    (nodes: any[], pds: string[]): any[] => {
      return nodes.map((node) => {
        const newNode = { ...node };
        if (node.children?.length > 0) {
          newNode.children = addPivotMetrics(node.children, pds);
          pds.forEach((period) => {
            selectedMetrics.forEach((mId: string) => {
              const key = `${period}__${mId}`;
              const childVals = newNode.children.map((c: any) => c[key] || 0);
              const config = METRIC_CONFIG[mId];
              if (config?.format === 'percent') {
                newNode[key] =
                  childVals.reduce((a: number, b: number) => a + b, 0) /
                  (childVals.length || 1);
              } else {
                newNode[key] = childVals.reduce(
                  (a: number, b: number) => a + b,
                  0
                );
              }
            });
          });
          selectedMetrics.forEach((mId: string) => {
            const config = METRIC_CONFIG[mId];
            const allPeriodVals = pds.map((p) => newNode[`${p}__${mId}`] || 0);
            if (config?.format === 'percent') {
              newNode[`__total__${mId}`] =
                allPeriodVals.reduce((a: number, b: number) => a + b, 0) /
                (allPeriodVals.length || 1);
            } else {
              newNode[`__total__${mId}`] = allPeriodVals.reduce(
                (a: number, b: number) => a + b,
                0
              );
            }
            // Variation & Growth: first period vs last period
            if (pds.length >= 2) {
              const firstVal = newNode[`${pds[0]}__${mId}`] || 0;
              const lastVal = newNode[`${pds[pds.length - 1]}__${mId}`] || 0;
              newNode[`__diff__${mId}`] = lastVal - firstVal;
              newNode[`__var__${mId}`] = computeVariation(
                firstVal,
                lastVal,
                config?.format
              );
              newNode[`__growth__${mId}`] = computeGrowth(firstVal, lastVal);
            } else {
              newNode[`__diff__${mId}`] = 0;
              newNode[`__var__${mId}`] = 0;
              newNode[`__growth__${mId}`] = 0;
            }
          });
        } else {
          // Leaf nodes
          pds.forEach((period, pIdx) => {
            const periodSeed = hashString(period, pIdx * 17);
            const combinedSeed = hashString(node.id, periodSeed);
            selectedMetrics.forEach((mId: string) => {
              const config = METRIC_CONFIG[mId];
              if (config) {
                // Use hourly pattern generator for hora a hora mode
                if (analysisMode === 'horaahora' && period.endsWith('h')) {
                  newNode[`${period}__${mId}`] = generateHourlyValue(
                    period,
                    node.label,
                    mId,
                    combinedSeed,
                    config
                  );
                } else {
                  const index =
                    Math.abs(combinedSeed + hashString(mId)) %
                    config.data.length;
                  newNode[`${period}__${mId}`] = config.data[index];
                }
              }
            });
          });
          selectedMetrics.forEach((mId: string) => {
            const config = METRIC_CONFIG[mId];
            const allPeriodVals = pds.map((p) => newNode[`${p}__${mId}`] || 0);
            if (config?.format === 'percent') {
              newNode[`__total__${mId}`] =
                allPeriodVals.reduce((a: number, b: number) => a + b, 0) /
                (allPeriodVals.length || 1);
            } else {
              newNode[`__total__${mId}`] = allPeriodVals.reduce(
                (a: number, b: number) => a + b,
                0
              );
            }
            // Variation & Growth
            if (pds.length >= 2) {
              const firstVal = newNode[`${pds[0]}__${mId}`] || 0;
              const lastVal = newNode[`${pds[pds.length - 1]}__${mId}`] || 0;
              newNode[`__diff__${mId}`] = lastVal - firstVal;
              newNode[`__var__${mId}`] = computeVariation(
                firstVal,
                lastVal,
                config?.format
              );
              newNode[`__growth__${mId}`] = computeGrowth(firstVal, lastVal);
            } else {
              newNode[`__diff__${mId}`] = 0;
              newNode[`__var__${mId}`] = 0;
              newNode[`__growth__${mId}`] = 0;
            }
          });
        }
        return newNode;
      });
    },
    [selectedMetrics, analysisMode, computeVariation, computeGrowth]
  );

  // ── Flatten tree for rendering ───────────────────────────────────
  const flattenTree = useCallback(
    (rows: any[], expandedSet: Set<string>): any[] => {
      const result: any[] = [];
      for (const row of rows) {
        result.push(row);
        if (row.children?.length > 0 && expandedSet.has(row.id)) {
          result.push(...flattenTree(row.children, expandedSet));
        }
      }
      return result;
    },
    []
  );

  // ── Data Generation (Raw Rows) ───────────────────────────────────
  const rawRows = useMemo(() => {
    if (groupingArr.length === 0) return [];
    if (
      (isTimeDrilldownEnabled ||
        analysisMode === 'comparativo' ||
        analysisMode === 'horaahora') &&
      periods.length > 0
    ) {
      // PIVOT MODE: rows = grouping hierarchy, columns = period × metric
      const baseTree = buildGroupTree(groupingArr, 0, '', 0);
      return addPivotMetrics(baseTree, periods);
    }
    // Standard mode
    return buildGroupTree(groupingArr, 0, '', 0);
  }, [
    groupingArr,
    isTimeDrilldownEnabled,
    analysisMode,
    periods,
    buildGroupTree,
    addPivotMetrics,
  ]);

  // ── Sorting Logic ────────────────────────────────────────────────
  const sortedRows = useMemo(() => {
    if (!sortConfig) return rawRows;

    return [...rawRows].sort((a: any, b: any) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [rawRows, sortConfig]);

  // ── Flattened rows (with expand/collapse) ────────────────────────
  const finalRows = useMemo(() => {
    const expandedSet = new Set(expandedRows);
    return flattenTree(sortedRows, expandedSet);
  }, [sortedRows, expandedRows, flattenTree]);

  // ── Totals (standard mode only) ──────────────────────────────────
  const totals = useMemo(() => {
    if (
      rawRows.length === 0 ||
      isTimeDrilldownEnabled ||
      analysisMode === 'comparativo' ||
      analysisMode === 'horaahora'
    )
      return null;

    const acc: any = {};
    METRICS_LIST.forEach((m: any) => {
      const vals = rawRows.map((r: any) => r[m.id]);
      const config = METRIC_CONFIG[m.id];
      if (config?.format === 'percent') {
        acc[m.id] =
          vals.reduce((a: number, b: number) => a + b, 0) / vals.length;
      } else {
        acc[m.id] = vals.reduce((a: number, b: number) => a + b, 0);
      }
    });
    return acc;
  }, [rawRows, isTimeDrilldownEnabled, analysisMode, METRICS_LIST]);

  // ── Comparison Period Formatters ─────────────────────────────────
  const compPeriodLabel = useCallback(
    (items: string[], type: 'month' | 'year'): string => {
      if (items.length === 0) return '';
      if (items.length === 1) return shortPeriodLabel(items[0]);
      if (type === 'month') {
        const sorted = [...items].sort((a, b) => {
          return MONTHS_OPTIONS.indexOf(a) - MONTHS_OPTIONS.indexOf(b);
        });
        return sorted.map((m) => shortPeriodLabel(m)).join(', ');
      }
      return [...items].sort().join(', ');
    },
    []
  );

  const compPeriodSubtitle = useCallback(
    (periodIdx: 1 | 2): string => {
      const items =
        periodType === 'Mensal'
          ? periodIdx === 1
            ? compMonths1
            : compMonths2
          : periodType === 'Anual'
          ? periodIdx === 1
            ? compYears1
            : compYears2
          : [];
      if (periodType === 'Diário') {
        const dr = periodIdx === 1 ? compDateRange1 : compDateRange2;
        if (!dr.start || !dr.end) return '';
        const today = getTodayFormatted();
        const endLabel = dr.end === today ? 'Hoje' : dr.end;
        return `${dr.start} — ${endLabel}`;
      }
      return compPeriodLabel(items, periodType === 'Mensal' ? 'month' : 'year');
    },
    [periodType, compDateRange1, compDateRange2, compMonths1, compMonths2, compYears1, compYears2, compPeriodLabel]
  );

  // ── Row Expansion Toggle ─────────────────────────────────────────
  const toggleRow = useCallback((id: string) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  // ── Sort Handler ─────────────────────────────────────────────────
  const handleSort = useCallback((metricId: string) => {
    setSortConfig((current) => {
      if (current?.key === metricId) {
        return {
          key: metricId,
          direction: current.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key: metricId, direction: 'desc' };
    });
  }, []);

  return {
    // Constants
    METRICS_LIST,
    METRIC_DISPLAY_ORDER,
    MODULE_TITLES,

    // Helpers
    getAttributeLabel,
    getAttributeIcon,
    orderedMetrics,

    // Data
    rawRows,
    sortedRows,
    finalRows,
    totals,
    hasMultipleRows: rawRows.length >= 2,

    // State
    sortConfig,
    expandedRows,

    // Actions
    toggleRow,
    handleSort,

    // Comparison formatters
    compPeriodLabel,
    compPeriodSubtitle,
  };
};
