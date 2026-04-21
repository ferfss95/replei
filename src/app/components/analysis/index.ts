/**
 * Analysis Components Barrel Export
 * Componentes e hooks para análise de dados
 */

export { useAnalysisData } from './useAnalysisData';
export type { UseAnalysisDataProps } from './useAnalysisData';

export {
  MetricCell,
  PercentageCell,
  VariationCell,
  GrowthCell,
  AverageCell,
  CompositeCell,
  CELL_COLORS,
  getCellVariant,
} from './AnalysisCells';

export { AnalysisTable } from './AnalysisTable';
export { AnalysisFilters } from './AnalysisFilters';
