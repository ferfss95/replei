/**
 * Calculation Utilities
 * Funções puras para cálculos matemáticos e conversões de data
 */

/**
 * Parse Brazilian date format (DD/MM/YYYY) to Date object
 */
export const parseBRDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  const parts = dateStr.split("/");
  if (parts.length !== 3) return null;
  return new Date(+parts[2], +parts[1] - 1, +parts[0]);
};

/**
 * Calculate days, months, and years in a date range
 */
export const calculatePeriodCounts = (
  startStr: string,
  endStr: string,
): { days: number; months: number; years: number } => {
  const start = parseBRDate(startStr);
  const end = parseBRDate(endStr);

  if (!start || !end || start > end) {
    return { days: 0, months: 0, years: 0 };
  }

  // Calculate days
  const diffTime = end.getTime() - start.getTime();
  const days =
    Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end

  // Calculate months
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months += end.getMonth() - start.getMonth() + 1; // +1 for inclusive count

  // Calculate years
  const years = end.getFullYear() - start.getFullYear() + 1; // +1 for inclusive count

  return { days, months, years };
};

/**
 * Calculate number of days in a specific month
 * @param monthYear format: "Janeiro 2024"
 */
export const calculateDaysInMonth = (monthYear: string): number => {
  const parts = monthYear.split(" ");
  if (parts.length !== 2) return 30; // fallback

  const monthMap: Record<string, number> = {
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

  const month = monthMap[parts[0].toLowerCase()];
  const year = parseInt(parts[1]);

  if (isNaN(month) || isNaN(year)) return 30; // fallback

  // Get last day of month
  const lastDay = new Date(year, month + 1, 0).getDate();
  return lastDay;
};

/**
 * Calculate number of days in a year (accounts for leap years)
 */
export const calculateDaysInYear = (year: string): number => {
  const y = parseInt(year);
  if (isNaN(y)) return 365;

  // Check if leap year
  const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  return isLeap ? 366 : 365;
};

/**
 * Simple string hash function (deterministic)
 */
export const hashString = (str: string, seed: number = 0): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
};
