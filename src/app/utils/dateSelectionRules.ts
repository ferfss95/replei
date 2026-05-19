import type { AnalysisMode } from '../types/wizard';
import {
  formatDate,
  getCurrentMonthString,
  getCurrentYearString,
  getToday,
  getTodayFormatted,
  getYesterdayFormatted,
} from '../dateUtils';

export const INTRADAY_TODAY_TOOLTIP =
  'Para análises do dia de hoje, selecione o tipo de análise Intraday.';

export function isIntradayAnalysisMode(analysisMode: AnalysisMode): boolean {
  return analysisMode === 'horaahora';
}

export function isSameCalendarDay(date: Date, reference = getToday()): boolean {
  return (
    date.getFullYear() === reference.getFullYear() &&
    date.getMonth() === reference.getMonth() &&
    date.getDate() === reference.getDate()
  );
}

export function isFutureCalendarDay(date: Date, reference = getToday()): boolean {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const ref = new Date(reference.getFullYear(), reference.getMonth(), reference.getDate());
  return day.getTime() > ref.getTime();
}

/** Bloqueia datas futuras; bloqueia hoje (D0) exceto em Intraday. */
export function isCalendarDayBlocked(date: Date, analysisMode: AnalysisMode): boolean {
  if (isFutureCalendarDay(date)) return true;
  if (isIntradayAnalysisMode(analysisMode)) return false;
  return isSameCalendarDay(date);
}

export function isTodayBlockedForAnalysis(analysisMode: AnalysisMode): boolean {
  return !isIntradayAnalysisMode(analysisMode);
}

export function isMonthPeriodBlocked(month: string, analysisMode: AnalysisMode): boolean {
  if (isIntradayAnalysisMode(analysisMode)) return false;
  return month === getCurrentMonthString();
}

export function isYearPeriodBlocked(year: string, analysisMode: AnalysisMode): boolean {
  if (isIntradayAnalysisMode(analysisMode)) return false;
  return year === getCurrentYearString();
}

export function isDateStringToday(dateStr: string): boolean {
  return dateStr === getTodayFormatted();
}

function shiftDateStringFromToday(dateStr: string): string {
  if (!dateStr || !isDateStringToday(dateStr)) return dateStr;
  return getYesterdayFormatted();
}

export function sanitizeDateRangeForAnalysisMode(
  range: { start: string; end: string },
  analysisMode: AnalysisMode,
): { start: string; end: string } {
  if (isIntradayAnalysisMode(analysisMode)) return range;

  let { start, end } = range;
  if (isDateStringToday(start)) start = getYesterdayFormatted();
  if (isDateStringToday(end)) end = getYesterdayFormatted();

  if (start && end) {
    const [sd, sm, sy] = start.split('/').map(Number);
    const [ed, em, ey] = end.split('/').map(Number);
    const startDate = new Date(sy, sm - 1, sd);
    const endDate = new Date(ey, em - 1, ed);
    if (startDate.getTime() > endDate.getTime()) {
      end = start;
    }
  }

  return { start, end };
}

export function sanitizeSpecificDaysForAnalysisMode(
  days: string[],
  analysisMode: AnalysisMode,
): string[] {
  if (isIntradayAnalysisMode(analysisMode)) return days;
  return days.filter((day) => !isDateStringToday(day));
}

export function sanitizeMonthsForAnalysisMode(
  months: string[],
  analysisMode: AnalysisMode,
): string[] {
  if (isIntradayAnalysisMode(analysisMode)) return months;
  const current = getCurrentMonthString();
  return months.filter((month) => month !== current);
}

export function sanitizeYearsForAnalysisMode(
  years: string[],
  analysisMode: AnalysisMode,
): string[] {
  if (isIntradayAnalysisMode(analysisMode)) return years;
  const current = getCurrentYearString();
  return years.filter((year) => year !== current);
}

/** Meses selecionáveis de um ano (ex.: accordion Mensal). */
export function getSelectableMonthsForYear(
  yearMonths: string[],
  analysisMode: AnalysisMode,
): string[] {
  return yearMonths.filter((month) => !isMonthPeriodBlocked(month, analysisMode));
}

export function parseDateBRToDay(dateStr: string): Date | undefined {
  if (!dateStr) return undefined;
  const parts = dateStr.split('/');
  if (parts.length !== 3) return undefined;
  const d = new Date(+parts[2], +parts[1] - 1, +parts[0]);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

export function formatDateBRFromDay(date: Date): string {
  return formatDate(date);
}
