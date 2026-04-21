/**
 * Date Range Hook
 * Gerencia seleção de períodos (P1, P2), lógica MDSAA e validações
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import type { AnalysisMode } from '../types/wizard';
import { PERIOD_OPTIONS, MONTHS_OPTIONS } from '../constants';
import {
  getDefaultsForPeriodType,
  getFirstDayOfMonthUntilYesterday,
  getTodayFormatted,
  getYesterdayFormatted,
  getLastMonthString,
  getCurrentYearString,
  getCurrentWeekDatesUntilYesterday,
  getStartOfCurrentWeek,
  getCurrentWeekdaysUntilYesterday,
  getMDSAA,
  getMDSAARange,
  getMDSAAMonths,
  getMDSAAYears,
} from '../dateUtils';

interface UseDateRangeProps {
  analysisMode: AnalysisMode;
}

interface DateRangeState {
  start: string;
  end: string;
}

export const useDateRange = ({ analysisMode }: UseDateRangeProps) => {
  // Period configuration
  const [periodType, setPeriodType] = useState<(typeof PERIOD_OPTIONS)[number]>("Diário");
  const [dailySubType, setDailySubType] = useState<"periodo" | "diasdasemana">("periodo");

  // Initialize with default date values
  const initialDefaults = getDefaultsForPeriodType("Diário");

  // Standard period state
  const [dateRange, setDateRange] = useState<DateRangeState>(
    initialDefaults.dateRange || {
      start: getFirstDayOfMonthUntilYesterday(),
      end: getYesterdayFormatted(),
    },
  );
  const [selectedMonths, setSelectedMonths] = useState<string[]>([getLastMonthString()]);
  const [selectedYears, setSelectedYears] = useState<string[]>([getCurrentYearString()]);
  const [selectedSpecificDays, setSelectedSpecificDays] = useState<string[]>(
    initialDefaults.selectedSpecificDays || getCurrentWeekDatesUntilYesterday(),
  );

  // Accordion expanded years state
  const [expandedYears, setExpandedYears] = useState<Set<string>>(() => {
    const currentYear = getCurrentYearString();
    const lastYear = (parseInt(currentYear) - 1).toString();
    return new Set([currentYear, lastYear]);
  });

  // Comparative period state (P1 and P2)
  const [compDateRange1, setCompDateRange1] = useState<DateRangeState>(
    initialDefaults.dateRange || {
      start: getFirstDayOfMonthUntilYesterday(),
      end: getYesterdayFormatted(),
    },
  );
  const [compDateRange2, setCompDateRange2] = useState<DateRangeState>({ start: "", end: "" });
  const [compMonths1, setCompMonths1] = useState<string[]>([getLastMonthString()]);
  const [compMonths2, setCompMonths2] = useState<string[]>([]);
  const [compYears1, setCompYears1] = useState<string[]>([getCurrentYearString()]);
  const [compYears2, setCompYears2] = useState<string[]>([]);
  const [compSpecificDays1, setCompSpecificDays1] = useState<string[]>(
    initialDefaults.selectedSpecificDays || getCurrentWeekDatesUntilYesterday(),
  );
  const [compSpecificDays2, setCompSpecificDays2] = useState<string[]>([]);

  // Comparative accordion expanded years
  const [compExpandedYears1, setCompExpandedYears1] = useState<Set<string>>(() => {
    const currentYear = getCurrentYearString();
    const lastYear = (parseInt(currentYear) - 1).toString();
    return new Set([currentYear, lastYear]);
  });
  const [compExpandedYears2, setCompExpandedYears2] = useState<Set<string>>(() => {
    const currentYear = getCurrentYearString();
    const lastYear = (parseInt(currentYear) - 1).toString();
    return new Set([currentYear, lastYear]);
  });

  // Legacy weekly state (mantido para compatibilidade)
  const [weeklyMode, setWeeklyMode] = useState<"specific" | "weekday">("weekday");
  const [weeklyDateRange, setWeeklyDateRange] = useState({
    start: getStartOfCurrentWeek(),
    end: getYesterdayFormatted(),
  });
  const [selectedWeekdays, setSelectedWeekdays] = useState<number[]>(
    getCurrentWeekdaysUntilYesterday(),
  );
  const [compWeeklyRange1, setCompWeeklyRange1] = useState({
    start: getStartOfCurrentWeek(),
    end: getYesterdayFormatted(),
  });
  const [compWeeklyRange2, setCompWeeklyRange2] = useState({ start: "", end: "" });
  const [compWeekdays1, setCompWeekdays1] = useState<number[]>(getCurrentWeekdaysUntilYesterday());
  const [compWeekdays2, setCompWeekdays2] = useState<number[]>([]);

  // MDSAA State
  const [mdsaaActive, setMdsaaActive] = useState(true);

  // Auto-scroll ref for P2 months
  const monthsP2ScrollRef = useRef<HTMLDivElement>(null);

  // ─── Apply defaults when periodType changes ───
  useEffect(() => {
    // Intraday sempre parte do dia corrente (Hoje → Hoje).
    if (analysisMode === "horaahora" && periodType === "Diário") {
      const today = getTodayFormatted();
      setDateRange({ start: today, end: today });
      setSelectedSpecificDays([today]);
      return;
    }

    const defaults = getDefaultsForPeriodType(periodType);

    if (defaults.dateRange) {
      setDateRange(defaults.dateRange);
      if (analysisMode === "comparativo") {
        setCompDateRange1(defaults.dateRange);
      }
    }

    if (defaults.selectedSpecificDays) {
      setSelectedSpecificDays(defaults.selectedSpecificDays);
      if (analysisMode === "comparativo") {
        setCompSpecificDays1(defaults.selectedSpecificDays);
      }
    }

    if (defaults.selectedMonths) {
      setSelectedMonths(defaults.selectedMonths);
      if (analysisMode === "comparativo") {
        setCompMonths1(defaults.selectedMonths);
      }
    }

    if (defaults.selectedYears) {
      setSelectedYears(defaults.selectedYears);
      if (analysisMode === "comparativo") {
        setCompYears1(defaults.selectedYears);
      }
    }
  }, [periodType, analysisMode]);

  // ─── Reactivate MDSAA when analysis mode or period type changes ───
  useEffect(() => {
    setMdsaaActive(true);
  }, [analysisMode, periodType]);

  // ─── Initialize P1 with defaults when entering comparative mode ───
  useEffect(() => {
    if (analysisMode !== "comparativo") return;

    const defaults = getDefaultsForPeriodType(periodType);

    if (periodType === "Diário") {
      if (defaults.dateRange) {
        setCompDateRange1(defaults.dateRange);
      }
      if (defaults.selectedSpecificDays) {
        setCompSpecificDays1(defaults.selectedSpecificDays);
      }
    }

    if (periodType === "Mensal" && defaults.selectedMonths) {
      setCompMonths1(defaults.selectedMonths);
    }

    if (periodType === "Anual" && defaults.selectedYears) {
      setCompYears1(defaults.selectedYears);
    }
  }, [analysisMode, periodType]);

  // ─── Auto-apply MDSAA when P1 changes (only if MDSAA is active) ───
  useEffect(() => {
    if (analysisMode !== "comparativo" || !mdsaaActive) return;

    if (periodType === "Diário") {
      if (dailySubType === "periodo") {
        const mdsaaRange = getMDSAARange(compDateRange1.start, compDateRange1.end);
        setCompDateRange2(mdsaaRange);
      } else {
        const mdsaaDays = compSpecificDays1.map((day) => getMDSAA(day));
        setCompSpecificDays2(mdsaaDays);
      }
    } else if (periodType === "Mensal") {
      const mdsaaMonths = getMDSAAMonths(compMonths1);
      setCompMonths2(mdsaaMonths);
    } else if (periodType === "Anual") {
      const mdsaaYears = getMDSAAYears(compYears1);
      setCompYears2(mdsaaYears);
    }
  }, [
    analysisMode,
    periodType,
    dailySubType,
    compDateRange1,
    compSpecificDays1,
    compMonths1,
    compYears1,
    mdsaaActive,
  ]);

  // ─── Auto-scroll to selected month in P2 ───
  useEffect(() => {
    if (
      analysisMode !== "comparativo" ||
      periodType !== "Mensal" ||
      compMonths2.length === 0 ||
      !monthsP2ScrollRef.current
    )
      return;

    const firstSelectedMonth = compMonths2[0];
    const monthIndex = MONTHS_OPTIONS.indexOf(firstSelectedMonth);

    if (monthIndex !== -1) {
      const itemHeight = 32;
      const offsetMonths = 4;
      const targetIndex = Math.max(0, monthIndex - offsetMonths);
      const scrollPosition = targetIndex * itemHeight;

      monthsP2ScrollRef.current.scrollTop = scrollPosition;
    }
  }, [compMonths2, analysisMode, periodType]);

  // ─── Manual P2 change handlers (disable MDSAA) ───
  const handleManualP2DateRangeChange = useCallback((field: "start" | "end", value: string) => {
    setMdsaaActive(false);
    setCompDateRange2((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleManualP2SpecificDaysChange = useCallback((days: string[]) => {
    setMdsaaActive(false);
    setCompSpecificDays2(days);
  }, []);

  const handleManualP2WeeklyRangeChange = useCallback((field: "start" | "end", value: string) => {
    setMdsaaActive(false);
    setCompWeeklyRange2((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleManualP2WeekdaysChange = useCallback((weekdays: number[]) => {
    setMdsaaActive(false);
    setCompWeekdays2(weekdays);
  }, []);

  const handleManualP2MonthsChange = useCallback((months: string[]) => {
    setMdsaaActive(false);
    setCompMonths2(months);
  }, []);

  const handleManualP2YearsChange = useCallback((years: string[]) => {
    setMdsaaActive(false);
    setCompYears2(years);
  }, []);

  return {
    // Period configuration
    periodType,
    setPeriodType,
    dailySubType,
    setDailySubType,

    // Standard period state
    dateRange,
    setDateRange,
    selectedMonths,
    setSelectedMonths,
    selectedYears,
    setSelectedYears,
    selectedSpecificDays,
    setSelectedSpecificDays,
    expandedYears,
    setExpandedYears,

    // Comparative period state
    compDateRange1,
    setCompDateRange1,
    compDateRange2,
    setCompDateRange2,
    compMonths1,
    setCompMonths1,
    compMonths2,
    setCompMonths2,
    compYears1,
    setCompYears1,
    compYears2,
    setCompYears2,
    compSpecificDays1,
    setCompSpecificDays1,
    compSpecificDays2,
    setCompSpecificDays2,
    compExpandedYears1,
    setCompExpandedYears1,
    compExpandedYears2,
    setCompExpandedYears2,

    // Legacy weekly state
    weeklyMode,
    setWeeklyMode,
    weeklyDateRange,
    setWeeklyDateRange,
    selectedWeekdays,
    setSelectedWeekdays,
    compWeeklyRange1,
    setCompWeeklyRange1,
    compWeeklyRange2,
    setCompWeeklyRange2,
    compWeekdays1,
    setCompWeekdays1,
    compWeekdays2,
    setCompWeekdays2,

    // MDSAA
    mdsaaActive,
    setMdsaaActive,

    // Manual P2 handlers
    handleManualP2DateRangeChange,
    handleManualP2SpecificDaysChange,
    handleManualP2WeeklyRangeChange,
    handleManualP2WeekdaysChange,
    handleManualP2MonthsChange,
    handleManualP2YearsChange,

    // Refs
    monthsP2ScrollRef,
  };
};
