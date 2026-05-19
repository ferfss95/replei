/** Intervalo de atualização dos dados Intraday (minutos). */
export const INTRADAY_UPDATE_INTERVAL_MINUTES = 30;

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/** Formata Date como HH:MM (24h). */
export function formatTimeHHMM(date: Date): string {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

/**
 * Última e próxima janela de sincronização Intraday (slots de 30 em 30 minutos).
 * Ex.: às 17:45 → última 17:30, próxima 18:00.
 */
export function getIntradaySyncTimes(now: Date = new Date()): {
  lastUpdate: Date;
  nextUpdate: Date;
} {
  const totalMinutes = now.getHours() * 60 + now.getMinutes();
  const lastSlotMinutes =
    Math.floor(totalMinutes / INTRADAY_UPDATE_INTERVAL_MINUTES) *
    INTRADAY_UPDATE_INTERVAL_MINUTES;

  const lastUpdate = new Date(now);
  lastUpdate.setHours(
    Math.floor(lastSlotMinutes / 60),
    lastSlotMinutes % 60,
    0,
    0,
  );

  const nextUpdate = new Date(lastUpdate);
  nextUpdate.setMinutes(
    nextUpdate.getMinutes() + INTRADAY_UPDATE_INTERVAL_MINUTES,
  );

  return { lastUpdate, nextUpdate };
}
