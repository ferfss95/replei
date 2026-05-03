/**
 * Projeção de venda (mês vigente) — módulo Loja.
 *
 * Regras (resumo):
 * - `realizedCurrentMonth`: vendas de monthStart → today (inclusive); **não** usa o período da UI.
 * - `dailyAverage` = realizedCurrentMonth / daysElapsedInMonth (mín. 1 no 1º dia do mês).
 * - `projectedRemainder` = dailyAverage * daysRemainingInMonth (0 no último dia do mês).
 * - Vlr projeção = realizedCurrentMonth + projectedRemainder.
 * - % projeção = (Vlr / monthlyGoal) como razão para `percent1` (1 = 100%); meta mensal, nunca proporcional ao período.
 *
 * Em produção: `realizedCurrentMonth` = ROB (ou faturamento) em query separada,
 * fixa entre `monthStart` e `today`, com os mesmos filtros de atributos; não usar o período da UI.
 */

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function inclusiveDaysBetween(start: Date, end: Date): number {
  const s = startOfDay(start);
  const e = startOfDay(end);
  if (e < s) return 0;
  return Math.round((e.getTime() - s.getTime()) / 86400000) + 1;
}

export type LojaProjectionMesVigenteInput = {
  today: Date;
  /** Vendas realizadas de `monthStart` até `today` (inclusive), mês de `today`. */
  realizedCurrentMonth: number;
  /** Meta de venda mensal da loja/agrupamento para o mês de `today`. */
  monthlyGoal: number;
};

export type LojaProjectionResult = {
  vlrProjecaoVenda: number;
  /** Razão para `format: 'percent1'` (ex.: 1 = 100% da meta). */
  pctProjecaoRatio: number | null;
};

/** Calendário do mês de `today` (pro-rata MTD, projeção, etc.). */
export type MesVigenteCalendar = {
  daysElapsedInMonth: number;
  daysRemainingInMonth: number;
  monthTotalDays: number;
};

export function getMesVigenteCalendar(today: Date): MesVigenteCalendar {
  const t = startOfDay(today);
  const monthStart = startOfMonth(t);
  const monthEnd = endOfMonth(t);
  const monthTotalDays = inclusiveDaysBetween(monthStart, monthEnd);
  const daysElapsedInMonth = Math.max(
    1,
    inclusiveDaysBetween(monthStart, t),
  );
  const daysRemainingInMonth = Math.max(
    0,
    monthTotalDays - daysElapsedInMonth,
  );
  return { daysElapsedInMonth, daysRemainingInMonth, monthTotalDays };
}

/**
 * Vlr projeção (mês vigente) = realizedCurrentMonth + projectedRemainder.
 * % projeção = Vlr / monthlyGoal (razão p/ `percent1`; ex.: 1,05 ≈ 105% da meta).
 */
export function computeLojaVendaProjectionMesVigente(
  input: LojaProjectionMesVigenteInput,
): LojaProjectionResult {
  const { daysElapsedInMonth, daysRemainingInMonth } =
    getMesVigenteCalendar(input.today);

  const realizedCurrentMonth = input.realizedCurrentMonth;
  const dailyAverage = realizedCurrentMonth / daysElapsedInMonth;
  const projectedRemainder = dailyAverage * daysRemainingInMonth;

  const vlrProjecaoVenda = realizedCurrentMonth + projectedRemainder;

  const g = input.monthlyGoal;
  const pctProjecaoRatio =
    g > 0 && Number.isFinite(g) ? vlrProjecaoVenda / g : null;

  return { vlrProjecaoVenda, pctProjecaoRatio };
}
