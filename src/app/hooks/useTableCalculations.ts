/**
 * Table Calculations Hook
 * Gerencia cálculos de médias e percentuais para tabelas de análise
 */

import { useState, useCallback, type Dispatch, type SetStateAction } from 'react';
import type { AnalysisMode, AveragePeriodType } from '../types/wizard';
import { PERIOD_OPTIONS } from '../constants';
import { calculatePeriodCounts, calculateDaysInMonth, calculateDaysInYear } from '../utils/calculations';

interface UseTableCalculationsProps {
  analysisMode: AnalysisMode;
  periodType: (typeof PERIOD_OPTIONS)[number];
  dateRange: { start: string; end: string };
  compDateRange1: { start: string; end: string };
  compDateRange2: { start: string; end: string };
  averagePeriodType: AveragePeriodType;
  setAveragePeriodType: Dispatch<SetStateAction<AveragePeriodType>>;
}

interface AverageOption {
  id: "Dia" | "Mês" | "Ano";
  disabled: boolean;
  tooltip: string;
}

interface AvailableAverageOptions {
  disabled: boolean;
  tooltip: string;
  options: AverageOption[];
}

export const useTableCalculations = ({
  analysisMode,
  periodType,
  dateRange,
  compDateRange1,
  compDateRange2,
  averagePeriodType,
  setAveragePeriodType,
}: UseTableCalculationsProps) => {
  // Dropdown state
  const [averageDropdownOpen, setAverageDropdownOpen] = useState(false);

  // % Share state
  const [showSharePct, setShowSharePct] = useState(false);

  // Show average column
  const showAverage = averagePeriodType !== null;

  // Get available average options based on analysis mode and period
  const getAvailableAverageOptions = useCallback((): AvailableAverageOptions => {
    const isEvo = analysisMode === "evolucao";

    // For evolutiva mode
    if (isEvo) {
      if (periodType === "Diário") {
        return {
          disabled: true,
          tooltip: "Opção não disponível para análise evolutiva com intervalo diário",
          options: [
            { id: "Dia", disabled: true, tooltip: "Opção não disponível para análise evolutiva com intervalo diário" },
            { id: "Mês", disabled: true, tooltip: "Opção não disponível para análise evolutiva com intervalo diário" },
            { id: "Ano", disabled: true, tooltip: "Opção não disponível para análise evolutiva com intervalo diário" },
          ],
        };
      }

      if (periodType === "Mensal") {
        return {
          disabled: false,
          tooltip: "",
          options: [
            { id: "Dia", disabled: false, tooltip: "" },
            { id: "Mês", disabled: true, tooltip: "Opção não disponível para análise evolutiva com intervalo mensal" },
            { id: "Ano", disabled: true, tooltip: "Opção não disponível para análise evolutiva com intervalo mensal" },
          ],
        };
      }

      if (periodType === "Anual") {
        return {
          disabled: false,
          tooltip: "",
          options: [
            { id: "Dia", disabled: false, tooltip: "" },
            { id: "Mês", disabled: false, tooltip: "" },
            { id: "Ano", disabled: true, tooltip: "Opção não disponível para análise evolutiva com intervalo anual" },
          ],
        };
      }
    }

    // For general, comparative, and intraday modes
    const range = analysisMode === "comparativo" ? compDateRange1 : dateRange;
    const { days, months, years } = calculatePeriodCounts(range.start, range.end);

    // Determine which options should be available based on interval size
    const hasDays = days >= 1;
    const hasMonths = months >= 1;
    const hasYears = years >= 1;

    const options: AverageOption[] = [
      {
        id: "Dia",
        disabled: !hasDays,
        tooltip: !hasDays ? "Intervalo de tempo muito curto, cálculo de média não disponível" : "",
      },
      {
        id: "Mês",
        disabled: !hasMonths,
        tooltip: !hasMonths ? "Intervalo de tempo muito curto, cálculo de média não disponível" : "",
      },
      {
        id: "Ano",
        disabled: !hasYears,
        tooltip: !hasYears ? "Intervalo de tempo muito curto, cálculo de média não disponível" : "",
      },
    ];

    return {
      disabled: false,
      tooltip: "",
      options,
    };
  }, [analysisMode, periodType, dateRange, compDateRange1]);

  // Calculate average value based on period type
  const calculateAverage = useCallback(
    (value: number, periodStr?: string): number => {
      if (!averagePeriodType || value === 0) return 0;

      const isEvo = analysisMode === "evolucao";

      // For evolutiva mode with periodStr (month/year)
      if (isEvo && periodStr) {
        if (averagePeriodType === "Dia") {
          if (periodType === "Mensal") {
            const daysInMonth = calculateDaysInMonth(periodStr);
            return value / daysInMonth;
          }
          if (periodType === "Anual") {
            const daysInYear = calculateDaysInYear(periodStr);
            return value / daysInYear;
          }
        }
        if (averagePeriodType === "Mês" && periodType === "Anual") {
          return value / 12;
        }
      }

      // For general, comparative, and intraday modes
      const range =
        analysisMode === "comparativo" && periodStr?.includes("P")
          ? periodStr === "P1"
            ? compDateRange1
            : compDateRange2
          : dateRange;

      const { days, months, years } = calculatePeriodCounts(range.start, range.end);

      if (averagePeriodType === "Dia") return value / days;
      if (averagePeriodType === "Mês") return value / months;
      if (averagePeriodType === "Ano") return value / years;

      return value;
    },
    [averagePeriodType, analysisMode, periodType, dateRange, compDateRange1, compDateRange2],
  );

  // Calculate average for total row (without periodStr parameter)
  const calculateAverageForTotal = useCallback(
    (value: number): number | null => {
      if (!averagePeriodType || value === 0) return null;

      const range = analysisMode === "comparativo" ? compDateRange1 : dateRange;
      const { days, months, years } = calculatePeriodCounts(range.start, range.end);

      if (averagePeriodType === "Dia") return value / days;
      if (averagePeriodType === "Mês") return value / months;
      if (averagePeriodType === "Ano") return value / years;

      return null;
    },
    [averagePeriodType, analysisMode, dateRange, compDateRange1],
  );

  return {
    // Dropdown state
    averageDropdownOpen,
    setAverageDropdownOpen,
    showAverage,

    // % Share state
    showSharePct,
    setShowSharePct,

    // Calculation functions
    getAvailableAverageOptions,
    calculateAverage,
    calculateAverageForTotal,
  };
};
