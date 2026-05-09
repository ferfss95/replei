/**
 * Regra de negócio (estoque mock): posição considerada no último dia do mês
 * do recorte; se o mês ainda está em aberto, usa o estoque de ontem (D-1).
 *
 * Usado apenas para variar o índice dos arrays MOCK_* de forma determinística,
 * alinhada à data de referência do snapshot — não substitui integração com dados reais.
 */

import { parseBRDate, hashString } from "./calculations";
import { getYesterday } from "../dateUtils";
import { MONTHS_OPTIONS } from "../constants";

/** Métricas cujo mock deve refletir snapshot de estoque por mês (regra acima). */
export const STOCK_RELATED_METRIC_IDS = new Set<string>([
  "qtd_estoque",
  "vlr_estoque",
  "giro_estoque",
  "dep",
  "def",
]);

export function isStockRelatedMetric(metricId: string): boolean {
  return STOCK_RELATED_METRIC_IDS.has(metricId);
}

const MONTH_NAME_TO_INDEX: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

function startOfLocalDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

/** Último dia civil do mês (1–12). */
export function lastDayOfCalendarMonth(year: number, month1to12: number): Date {
  return new Date(year, month1to12, 0);
}

/**
 * Data efetiva do snapshot de estoque para o mês civil informado.
 * Se o fim de mês ainda não ocorreu (mês em aberto), retorna ontem (D-1).
 */
export function stockSnapshotDateForCalendarMonth(
  year: number,
  month1to12: number,
  _refNow: Date = new Date(),
): Date {
  const eom = lastDayOfCalendarMonth(year, month1to12);
  const yesterday = getYesterday();
  const eomT = startOfLocalDay(eom);
  const yestT = startOfLocalDay(yesterday);
  if (eomT > yestT) {
    return new Date(
      yesterday.getFullYear(),
      yesterday.getMonth(),
      yesterday.getDate(),
    );
  }
  return new Date(eom.getFullYear(), eom.getMonth(), eom.getDate());
}

export function snapshotDateToSalt(d: Date): number {
  const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return hashString(key, 0);
}

export function parseMonthYearLabel(label: string): {
  year: number;
  month1to12: number;
} | null {
  const parts = label.trim().split(/\s+/);
  if (parts.length < 2) return null;
  const year = parseInt(parts[parts.length - 1]!, 10);
  if (Number.isNaN(year)) return null;
  const monthPart = parts.slice(0, -1).join(" ").toLowerCase();
  const m0 = MONTH_NAME_TO_INDEX[monthPart];
  if (m0 === undefined) return null;
  return { year, month1to12: m0 + 1 };
}

/** Entre os rótulos tipo "Maio 2026", retorna o de calendário mais recente. */
export function chronologicalLatestMonthLabel(
  labels: string[],
): string | null {
  if (!labels?.length) return null;
  let bestT = -Infinity;
  let best: string | null = null;
  for (const lab of labels) {
    const p = parseMonthYearLabel(lab);
    if (!p) continue;
    const t = new Date(p.year, p.month1to12 - 1, 1).getTime();
    if (t > bestT) {
      bestT = t;
      best = lab;
    }
  }
  return best;
}

export function maxNumericYear(years: string[]): number | null {
  if (!years?.length) return null;
  let best = -Infinity;
  for (const y of years) {
    const n = parseInt(y, 10);
    if (!Number.isNaN(n) && n > best) best = n;
  }
  return best === -Infinity ? null : best;
}

/** Maior data (dd/mm/yyyy) da lista. */
export function latestBRDateInList(days: string[]): Date | null {
  if (!days?.length) return null;
  let best: Date | null = null;
  for (const s of days) {
    const d = parseBRDate(s);
    if (!d) continue;
    if (!best || d.getTime() > best.getTime()) best = d;
  }
  return best;
}

export function stockSnapshotFromMonthLabel(
  label: string,
  refNow: Date = new Date(),
): Date | null {
  const p = parseMonthYearLabel(label);
  if (!p) return null;
  return stockSnapshotDateForCalendarMonth(p.year, p.month1to12, refNow);
}

export function stockSnapshotFromDayDate(
  d: Date,
  refNow: Date = new Date(),
): Date {
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  return stockSnapshotDateForCalendarMonth(y, m, refNow);
}

export function stockSnapshotFromYearString(
  yearStr: string,
  refNow: Date = new Date(),
): Date | null {
  const y = parseInt(yearStr, 10);
  if (Number.isNaN(y)) return null;
  return stockSnapshotDateForCalendarMonth(y, 12, refNow);
}

/** Contexto de período necessário para calcular o “dia de snapshot” do estoque (mock). */
export type StockSaltContext = {
  refNow?: Date;
  analysisMode: string;
  periodType: string;
  dateRange: { start: string; end: string };
  selectedMonths: string[];
  selectedYears: string[];
  selectedSpecificDays: string[];
  weeklyMode: string;
  weeklyComputedDays: Date[];
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
};

/** Salt para modo padrão (sem colunas por período) e valores base em pivot. */
export function computeStandardStockIndexSalt(
  input: StockSaltContext,
): number {
  const refNow = input.refNow ?? new Date();

  if (input.analysisMode === "comparativo") {
    const d = resolveComparativeStockAnchorDate(input, 1, refNow);
    return d ? snapshotDateToSalt(d) : 0;
  }

  if (input.periodType === "Mensal") {
    const lab = chronologicalLatestMonthLabel(input.selectedMonths);
    if (!lab) return 0;
    const snap = stockSnapshotFromMonthLabel(lab, refNow);
    return snap ? snapshotDateToSalt(snap) : 0;
  }

  if (input.periodType === "Anual") {
    const y = maxNumericYear(input.selectedYears);
    if (y === null) return 0;
    const snap = stockSnapshotDateForCalendarMonth(y, 12, refNow);
    return snapshotDateToSalt(snap);
  }

  if (input.periodType === "Semanal") {
    let latest: Date | null = null;
    if (input.weeklyMode === "specific") {
      latest = latestBRDateInList(input.selectedSpecificDays);
    } else {
      const arr = input.weeklyComputedDays;
      if (arr?.length) {
        latest = new Date(
          Math.max(...arr.map((d) => d.getTime())),
        );
      }
    }
    if (!latest) return 0;
    const snap = stockSnapshotFromDayDate(latest, refNow);
    return snapshotDateToSalt(snap);
  }

  const end = parseBRDate(input.dateRange.end);
  if (!end) return 0;
  const snap = stockSnapshotFromDayDate(end, refNow);
  return snapshotDateToSalt(snap);
}

function resolveComparativeStockAnchorDate(
  input: StockSaltContext,
  side: 1 | 2,
  refNow: Date,
): Date | null {
  const months =
    side === 1 ? input.compMonths1 : input.compMonths2;
  const years = side === 1 ? input.compYears1 : input.compYears2;
  const days =
    side === 1 ? input.compSpecificDays1 : input.compSpecificDays2;
  const weekly =
    side === 1
      ? input.compWeeklyComputedDays1
      : input.compWeeklyComputedDays2;
  const range =
    side === 1 ? input.compDateRange1 : input.compDateRange2;

  if (input.periodType === "Mensal") {
    const lab = chronologicalLatestMonthLabel(months);
    if (!lab) return null;
    return stockSnapshotFromMonthLabel(lab, refNow);
  }
  if (input.periodType === "Anual") {
    const y = maxNumericYear(years);
    if (y === null) return null;
    return stockSnapshotDateForCalendarMonth(y, 12, refNow);
  }
  if (input.periodType === "Semanal") {
    if (input.weeklyMode === "specific") {
      const latest = latestBRDateInList(days);
      return latest ? stockSnapshotFromDayDate(latest, refNow) : null;
    }
    if (weekly?.length) {
      const latest = new Date(Math.max(...weekly.map((d) => d.getTime())));
      return stockSnapshotFromDayDate(latest, refNow);
    }
    return null;
  }
  const end = parseBRDate(range.end);
  if (!end) return null;
  return stockSnapshotFromDayDate(end, refNow);
}

const BR_DAY_RE = /^\d{2}\/\d{2}\/\d{4}$/;

/**
 * Salt por coluna de período (evolução / comparativo / intraday).
 */
export function computePivotPeriodStockIndexSalt(
  period: string,
  input: StockSaltContext,
): number {
  const refNow = input.refNow ?? new Date();

  if (input.analysisMode === "horaahora") {
    const d =
      parseBRDate(input.dateRange.end) ||
      parseBRDate(input.dateRange.start);
    if (!d) return 0;
    return snapshotDateToSalt(stockSnapshotFromDayDate(d, refNow));
  }

  if (input.analysisMode === "comparativo") {
    const side: 1 | 2 = period === "Período 2" ? 2 : 1;
    const snap = resolveComparativeStockAnchorDate(input, side, refNow);
    return snap ? snapshotDateToSalt(snap) : 0;
  }

  if (MONTHS_OPTIONS.includes(period)) {
    const snap = stockSnapshotFromMonthLabel(period, refNow);
    return snap ? snapshotDateToSalt(snap) : 0;
  }

  if (BR_DAY_RE.test(period)) {
    const d = parseBRDate(period);
    if (!d) return 0;
    return snapshotDateToSalt(stockSnapshotFromDayDate(d, refNow));
  }

  if (/^\d{4}$/.test(period.trim())) {
    const snap = stockSnapshotFromYearString(period.trim(), refNow);
    return snap ? snapshotDateToSalt(snap) : 0;
  }

  return 0;
}
