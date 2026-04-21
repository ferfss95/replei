/**
 * AnalysisCells Components
 * Componentes React para renderização de células de análise
 *
 * RESPONSABILIDADES:
 * - Isolamento da lógica de "como a informação se parece"
 * - Suporte a variantes de estilo (padrão, intraday, etc)
 * - Otimização de performance com React.memo
 * - Encapsulamento de cores e setas de variação
 */

import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { formatMetricValue } from '../../referenceData';
import type { AnalysisMode } from '../../types/wizard';

// ══════════════════════════════════════════════════════════════════
// COLOR CONSTANTS (ajustáveis centralizadamente)
// ══════════════════════════════════════════════════════════════════

export const CELL_COLORS = {
  positive: 'text-[#276749]', // Verde para valores positivos
  negative: 'text-[#9B2C2C]', // Vermelho para valores negativos
  neutral: 'text-slate-700', // Neutro para valores zero
  muted: 'text-slate-400', // Cinza claro para valores indefinidos
  dimmed: 'text-slate-500', // Cinza médio para placeholders
} as const;

// ══════════════════════════════════════════════════════════════════
// TYPES
// ══════════════════════════════════════════════════════════════════

export type CellVariant = 'default' | 'intraday' | 'comparative' | 'total';

interface BaseCellProps {
  variant?: CellVariant;
  analysisMode?: AnalysisMode;
  className?: string;
}

interface MetricCellProps extends BaseCellProps {
  value: number;
  metricId: string;
  format?: string;
}

interface PercentageCellProps extends BaseCellProps {
  value: number;
  total: number | null | undefined;
}

interface VariationCellProps extends BaseCellProps {
  value: number;
  format?: string;
}

interface GrowthCellProps extends BaseCellProps {
  value: number;
}

interface AverageCellProps extends BaseCellProps {
  value: number | null;
  format?: string;
}

// ══════════════════════════════════════════════════════════════════
// METRIC CELL - Renderiza valores de métricas
// ══════════════════════════════════════════════════════════════════

export const MetricCell = React.memo<MetricCellProps>(
  ({ value, metricId, format = 'string', variant = 'default', className = '' }) => {
    const formatted = formatMetricValue(value, format);

    // Apply color for variation metrics (positive/negative)
    if (format === 'variation') {
      const isPositive = value > 0;
      const isNegative = value < 0;
      const colorClass = isPositive
        ? CELL_COLORS.positive
        : isNegative
        ? CELL_COLORS.negative
        : CELL_COLORS.neutral;
      const ArrowIcon = isPositive ? ArrowUp : isNegative ? ArrowDown : null;

      return (
        <span
          className={`flex items-center justify-end gap-1.5 ${colorClass} ${className}`}
        >
          {formatted}
          {ArrowIcon && <ArrowIcon size={14} />}
        </span>
      );
    }

    return <span className={className}>{formatted}</span>;
  }
);

MetricCell.displayName = 'MetricCell';

// ══════════════════════════════════════════════════════════════════
// PERCENTAGE CELL - Renderiza % de participação (share)
// ══════════════════════════════════════════════════════════════════

export const PercentageCell = React.memo<PercentageCellProps>(
  ({ value, total, variant = 'default', className = '' }) => {
    if (total == null || total === 0) {
      return <span className={`${CELL_COLORS.dimmed} ${className}`}>—</span>;
    }

    const pct = Math.abs((value / total) * 100);
    const isTotal = pct >= 99.999;
    const pctStr = isTotal
      ? '100%'
      : new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(pct) + '%';

    return <span className={className}>{pctStr}</span>;
  }
);

PercentageCell.displayName = 'PercentageCell';

// ══════════════════════════════════════════════════════════════════
// VARIATION CELL - Renderiza variação absoluta (Δ P2-P1)
// ══════════════════════════════════════════════════════════════════

export const VariationCell = React.memo<VariationCellProps>(
  ({ value, format, variant = 'default', className = '' }) => {
    // Handle invalid or zero values
    if (isNaN(value) || !isFinite(value) || value === 0) {
      return <span className={`${CELL_COLORS.dimmed} ${className}`}>—</span>;
    }

    const sign = value > 0 ? '+' : '';
    const colorClass = value > 0 ? CELL_COLORS.positive : CELL_COLORS.negative;
    const ArrowIcon = value > 0 ? ArrowUp : ArrowDown;

    let text = '';

    // Format based on metric type
    if (format === 'percent') {
      const pp = value * 100;
      const formatted = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Math.abs(pp));
      text = `${pp < 0 ? '-' : sign}${formatted} pp`;
    } else if (format === 'currency') {
      const formatted = new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 0,
      }).format(Math.abs(value));
      text = `${value < 0 ? '-' : sign}${formatted}`;
    } else if (format === 'days') {
      text = `${sign}${value} dias`;
    } else {
      // integer / default
      const formatted = new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 0,
      }).format(Math.abs(value));
      text = `${value < 0 ? '-' : sign}${formatted}`;
    }

    return (
      <span className={`flex items-center justify-end gap-1.5 ${colorClass} ${className}`}>
        {text}
        <ArrowIcon size={14} />
      </span>
    );
  }
);

VariationCell.displayName = 'VariationCell';

// ══════════════════════════════════════════════════════════════════
// GROWTH CELL - Renderiza crescimento relativo (% P2/P1-1)
// ══════════════════════════════════════════════════════════════════

export const GrowthCell = React.memo<GrowthCellProps>(
  ({ value, variant = 'default', className = '' }) => {
    // Handle invalid or zero values
    if (isNaN(value) || !isFinite(value) || value === 0) {
      return <span className={`${CELL_COLORS.muted} ${className}`}>—</span>;
    }

    const pct = value * 100;
    const sign = pct > 0 ? '+' : '';
    const formatted = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(Math.abs(pct));

    const colorClass = value > 0 ? CELL_COLORS.positive : CELL_COLORS.negative;
    const ArrowIcon = value > 0 ? ArrowUp : ArrowDown;

    return (
      <span className={`flex items-center justify-end gap-1.5 ${colorClass} ${className}`}>
        {`${pct < 0 ? '-' : sign}${formatted}%`}
        <ArrowIcon size={14} />
      </span>
    );
  }
);

GrowthCell.displayName = 'GrowthCell';

// ══════════════════════════════════════════════════════════════════
// AVERAGE CELL - Renderiza média (x̄)
// ══════════════════════════════════════════════════════════════════

export const AverageCell = React.memo<AverageCellProps>(
  ({ value, format = 'string', variant = 'default', className = '' }) => {
    if (value === null || value === undefined) {
      return <span className={`${CELL_COLORS.dimmed} ${className}`}>—</span>;
    }

    const formatted = formatMetricValue(value, format);
    return <span className={className}>{formatted}</span>;
  }
);

AverageCell.displayName = 'AverageCell';

// ══════════════════════════════════════════════════════════════════
// COMPOSITE CELL - Renderiza métrica + % inline (legacy support)
// ══════════════════════════════════════════════════════════════════

interface CompositeCellProps extends BaseCellProps {
  value: number;
  metricId: string;
  format?: string;
  total?: number | null;
  showPercentage?: boolean;
}

export const CompositeCell = React.memo<CompositeCellProps>(
  ({
    value,
    metricId,
    format = 'string',
    total,
    showPercentage = false,
    variant = 'default',
    className = '',
  }) => {
    const mainValue = formatMetricValue(value, format);

    if (!showPercentage || !total || total === 0) {
      return <span className={className}>{mainValue}</span>;
    }

    const pct = Math.abs((value / total) * 100);
    const isTotal = pct >= 99.999;
    const pctStr = isTotal
      ? '100%'
      : new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(pct) + '%';

    return (
      <span className={`flex items-center justify-between gap-2 ${className}`}>
        <span className="font-medium">{mainValue}</span>
        <span className="text-xs text-slate-500">({pctStr})</span>
      </span>
    );
  }
);

CompositeCell.displayName = 'CompositeCell';

// ══════════════════════════════════════════════════════════════════
// HELPER: Get cell variant based on analysis mode
// ══════════════════════════════════════════════════════════════════

export const getCellVariant = (
  analysisMode: AnalysisMode | undefined,
  isTotal: boolean = false
): CellVariant => {
  if (isTotal) return 'total';
  if (analysisMode === 'horaahora') return 'intraday';
  if (analysisMode === 'comparativo') return 'comparative';
  return 'default';
};
