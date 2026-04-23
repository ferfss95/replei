/**
 * Texto resumido do período para tags / resumo da análise (não-comparativo).
 * Espelha a lógica usada em AnalysisView.
 */
import { getTodayFormatted } from "../dateUtils";
import { WEEKDAY_FULL } from "../constants";
import type { AnalysisMode } from "../types/wizard";

export interface PeriodSummaryInput {
  analysisMode: AnalysisMode;
  periodType: "Diário" | "Mensal" | "Anual";
  dateRange: { start: string; end: string };
  weeklyMode: "specific" | "weekday";
  weeklyComputedDays: Date[];
  selectedSpecificDays: string[];
  selectedMonths: string[];
  selectedYears: string[];
}

export function computePeriodDisplayText(p: PeriodSummaryInput): string {
  const {
    analysisMode,
    periodType,
    dateRange,
    weeklyMode,
    weeklyComputedDays,
    selectedSpecificDays,
    selectedMonths,
    selectedYears,
  } = p;

  if (analysisMode === "comparativo") return "";

  const today = getTodayFormatted();

  if (analysisMode === "horaahora") {
    if (periodType === "Diário") {
      const endLabel = dateRange.end === today ? "Hoje" : dateRange.end;
      return `${dateRange.start} — ${endLabel}`;
    }
    if (periodType === "Semanal") {
      if (weeklyMode === "specific") {
        const count = selectedSpecificDays?.length || 0;
        if (count === 0) return "—";
        if (count === 1) return selectedSpecificDays[0];
        return `${count} dias selecionados`;
      }
      const count = weeklyComputedDays?.length || 0;
      if (count === 0) return "—";
      const dayNames = WEEKDAY_FULL.filter((_, i) =>
        (weeklyComputedDays || []).some((d: Date) => d.getDay() === i),
      );
      return `${count} dias (${dayNames.map((n) => n.slice(0, 3)).join(", ")})`;
    }
    if (periodType === "Anual") {
      const sorted = [...selectedYears].sort();
      if (sorted.length === 0) return "—";
      if (sorted.length === 1) return sorted[0];
      return sorted.join(", ");
    }
    if (selectedMonths.length === 0) return "—";
    const MF = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const MS = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    const parsed = selectedMonths
      .map((m) => {
        const parts = m.split(" ");
        const mIdx = MF.indexOf(parts[0]);
        return {
          monthIdx: mIdx,
          year: parts[1],
          short: MS[mIdx] || parts[0],
        };
      })
      .sort((a, b) =>
        a.year === b.year ? a.monthIdx - b.monthIdx : a.year.localeCompare(b.year),
      );
    return parsed.map((x) => `${x.short}/${x.year.slice(-2)}`).join(", ");
  }

  if (periodType === "Diário") {
    const endLabel = dateRange.end === today ? "Hoje" : dateRange.end;
    return `${dateRange.start} — ${endLabel}`;
  }

  if (periodType === "Semanal") {
    if (weeklyMode === "specific") {
      const count = selectedSpecificDays?.length || 0;
      if (count === 0) return "—";
      if (count === 1) return selectedSpecificDays[0];
      return `${count} dias selecionados`;
    }
    const count = weeklyComputedDays?.length || 0;
    if (count === 0) return "—";
    const dayNames = WEEKDAY_FULL.filter((_, i) =>
      (weeklyComputedDays || []).some((d: Date) => d.getDay() === i),
    );
    return `${count} dias (${dayNames.map((n) => n.slice(0, 3)).join(", ")})`;
  }

  if (periodType === "Anual") {
    const sorted = [...selectedYears].sort();
    if (sorted.length === 0) return "—";
    if (sorted.length === 1) return sorted[0];
    const allConsec = sorted.every((y, i) => i === 0 || +y === +sorted[i - 1] + 1);
    if (allConsec && sorted.length > 2)
      return `${sorted[0]} a ${sorted[sorted.length - 1]}`;
    if (sorted.length <= 3) return sorted.join(", ");
    return `${sorted[0]} a ${sorted[sorted.length - 1]}`;
  }

  if (selectedMonths.length === 0) return "—";
  const MF = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const MS = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const parsed = selectedMonths
    .map((m) => {
      const parts = m.split(" ");
      const mIdx = MF.indexOf(parts[0]);
      return {
        monthIdx: mIdx,
        year: parts[1],
        short: MS[mIdx] || parts[0],
      };
    })
    .sort((a, b) =>
      a.year === b.year ? a.monthIdx - b.monthIdx : a.year.localeCompare(b.year),
    );
  const byYear: Record<string, typeof parsed> = {};
  parsed.forEach((row) => {
    if (!byYear[row.year]) byYear[row.year] = [];
    byYear[row.year].push(row);
  });
  const arrEq = (a: number[], b: number[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);
  const isConsec = (arr: number[]) =>
    arr.length > 0 && arr.every((v, i) => i === 0 || v === arr[i - 1] + 1);
  const segments: string[] = [];
  for (const year of Object.keys(byYear).sort()) {
    const group = byYear[year];
    const sy = year.slice(-2);
    const idxs = group.map((g) => g.monthIdx);
    if (idxs.length === 12) {
      segments.push(year);
    } else if (arrEq(idxs, [0, 1, 2, 3, 4, 5])) {
      segments.push(`1º Sem/${sy}`);
    } else if (arrEq(idxs, [6, 7, 8, 9, 10, 11])) {
      segments.push(`2º Sem/${sy}`);
    } else if (arrEq(idxs, [0, 1, 2])) {
      segments.push(`1º Tri/${sy}`);
    } else if (arrEq(idxs, [3, 4, 5])) {
      segments.push(`2º Tri/${sy}`);
    } else if (arrEq(idxs, [6, 7, 8])) {
      segments.push(`3º Tri/${sy}`);
    } else if (arrEq(idxs, [9, 10, 11])) {
      segments.push(`4º Tri/${sy}`);
    } else if (isConsec(idxs) && idxs.length > 2) {
      segments.push(`${group[0].short} a ${group[group.length - 1].short}/${sy}`);
    } else if (idxs.length <= 3) {
      segments.push(`${group.map((g) => g.short).join(", ")}/${sy}`);
    } else {
      segments.push(`${idxs.length} meses/${sy}`);
    }
  }
  return segments.join(", ");
}

const MONTH_NAMES_FULL = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const MONTH_NAMES_SHORT = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export interface ComparativoPeriodSummaryInput {
  periodType: "Diário" | "Mensal" | "Anual";
  weeklyMode: "specific" | "weekday";
  compDateRange1: { start: string; end: string };
  compDateRange2: { start: string; end: string };
  compMonths1: string[];
  compMonths2: string[];
  compYears1: string[];
  compYears2: string[];
  compSpecificDays1: string[];
  compSpecificDays2: string[];
  compWeeklyComputedDays1: Date[];
  compWeeklyComputedDays2: Date[];
}

export function computeComparativoPeriodSmartSummary(
  periodIdx: 1 | 2,
  p: ComparativoPeriodSummaryInput,
): string {
  const {
    periodType,
    weeklyMode,
    compDateRange1,
    compDateRange2,
    compMonths1,
    compMonths2,
    compYears1,
    compYears2,
    compSpecificDays1,
    compSpecificDays2,
    compWeeklyComputedDays1,
    compWeeklyComputedDays2,
  } = p;

  if (periodType === "Diário") {
    const dr = periodIdx === 1 ? compDateRange1 : compDateRange2;
    if (!dr.start || !dr.end) return "—";
    const today = getTodayFormatted();
    const endLabel = dr.end === today ? "Hoje" : dr.end;
    return `${dr.start} — ${endLabel}`;
  }
  if (periodType === "Semanal") {
    if (weeklyMode === "specific") {
      const days = periodIdx === 1 ? compSpecificDays1 : compSpecificDays2;
      if (!days || days.length === 0) return "—";
      return `${days.length} dia${days.length !== 1 ? "s" : ""}`;
    }
    const computed = periodIdx === 1 ? compWeeklyComputedDays1 : compWeeklyComputedDays2;
    if (!computed || computed.length === 0) return "—";
    return `${computed.length} dia${computed.length !== 1 ? "s" : ""}`;
  }
  if (periodType === "Anual") {
    const years = periodIdx === 1 ? compYears1 : compYears2;
    if (years.length === 0) return "—";
    const sorted = [...years].sort();
    if (sorted.length <= 3) return sorted.join(", ");
    return `${sorted[0]} a ${sorted[sorted.length - 1]}`;
  }
  const months = periodIdx === 1 ? compMonths1 : compMonths2;
  if (months.length === 0) return "—";

  const parsed = months
    .map((m) => {
      const parts = m.split(" ");
      const mIdx = MONTH_NAMES_FULL.indexOf(parts[0]);
      return {
        monthIdx: mIdx,
        year: parts[1],
        short: MONTH_NAMES_SHORT[mIdx] || parts[0],
      };
    })
    .sort((a, b) =>
      a.year === b.year ? a.monthIdx - b.monthIdx : a.year.localeCompare(b.year),
    );

  const byYear: Record<string, typeof parsed> = {};
  parsed.forEach((row) => {
    if (!byYear[row.year]) byYear[row.year] = [];
    byYear[row.year].push(row);
  });

  const arrEq = (a: number[], b: number[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);
  const isConsec = (arr: number[]) =>
    arr.length > 0 && arr.every((v, i) => i === 0 || v === arr[i - 1] + 1);

  const segments: string[] = [];
  for (const year of Object.keys(byYear).sort()) {
    const group = byYear[year];
    const sy = year.slice(-2);
    const idxs = group.map((g) => g.monthIdx);
    if (idxs.length === 12) {
      segments.push(year);
    } else if (arrEq(idxs, [0, 1, 2, 3, 4, 5])) {
      segments.push(`1º Sem/${sy}`);
    } else if (arrEq(idxs, [6, 7, 8, 9, 10, 11])) {
      segments.push(`2º Sem/${sy}`);
    } else if (arrEq(idxs, [0, 1, 2])) {
      segments.push(`1º Tri/${sy}`);
    } else if (arrEq(idxs, [3, 4, 5])) {
      segments.push(`2º Tri/${sy}`);
    } else if (arrEq(idxs, [6, 7, 8])) {
      segments.push(`3º Tri/${sy}`);
    } else if (arrEq(idxs, [9, 10, 11])) {
      segments.push(`4º Tri/${sy}`);
    } else if (isConsec(idxs) && idxs.length > 2) {
      segments.push(`${group[0].short} a ${group[group.length - 1].short}/${sy}`);
    } else if (idxs.length <= 3) {
      segments.push(`${group.map((g) => g.short).join(", ")}/${sy}`);
    } else {
      segments.push(`${idxs.length} meses/${sy}`);
    }
  }
  return segments.join(", ");
}
