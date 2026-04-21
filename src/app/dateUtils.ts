// Date utility functions for the analysis wizard

// Group months by year
export const groupMonthsByYear = (months: string[]): Record<string, string[]> => {
  const result: Record<string, string[]> = {};
  months.forEach(month => {
    const year = month.split(' ')[1];
    if (!result[year]) result[year] = [];
    result[year].push(month);
  });
  return result;
};

export const getToday = () => new Date();

export const formatDate = (date: Date) => {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
};

export const getFirstDayOfMonth = () => {
  const today = getToday();
  return formatDate(new Date(today.getFullYear(), today.getMonth(), 1));
};

// Gets the first day of the current month (for building ranges with "until yesterday")
export const getFirstDayOfMonthUntilYesterday = () => {
  return getFirstDayOfMonth();
};

export const getYesterday = () => {
  const today = getToday();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
};

export const getYesterdayFormatted = () => formatDate(getYesterday());

export const getTodayFormatted = () => formatDate(getToday());

export const getTodayWeekday = () => getToday().getDay();

// Returns weekdays up to (and including) yesterday
export const getCurrentWeekdaysUntilYesterday = (): number[] => {
  const yesterday = getYesterday();
  const currentDayOfWeek = yesterday.getDay(); // 0=Sunday ... 6=Saturday
  const result: number[] = [];
  for (let i = 0; i <= currentDayOfWeek; i++) {
    result.push(i);
  }
  return result;
};

// Returns weekdays up to (and including) today
export const getCurrentWeekdaysUntilToday = (): number[] => {
  const today = getToday();
  const currentDayOfWeek = today.getDay();
  const result: number[] = [];
  for (let i = 0; i <= currentDayOfWeek; i++) {
    result.push(i);
  }
  return result;
};

// Returns the start of the current week (Monday)
export const getStartOfCurrentWeek = (): string => {
  const today = getToday();
  const currentDayOfWeek = today.getDay(); // 0=Sunday, 6=Saturday
  const startOfWeek = new Date(today);
  // Adjust to Monday: if today is Sunday (0), go back 6 days; otherwise, go back (day - 1) days
  const daysToSubtract = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
  startOfWeek.setDate(today.getDate() - daysToSubtract);
  return formatDate(startOfWeek);
};

// Returns formatted dates from the start of the current week up to today
export const getCurrentWeekDatesFormatted = (): string[] => {
  const today = getToday();
  const startOfWeekStr = getStartOfCurrentWeek();
  
  // Parse start date
  const [dd, mm, yyyy] = startOfWeekStr.split('/');
  const startDate = new Date(+yyyy, +mm - 1, +dd);
  
  const result: string[] = [];
  const cursor = new Date(startDate);
  
  while (cursor <= today) {
    result.push(formatDate(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  
  return result;
};

// Returns formatted dates from the start of the current week up to yesterday
export const getCurrentWeekDatesUntilYesterday = (): string[] => {
  const yesterday = getYesterday();
  const startOfWeekStr = getStartOfCurrentWeek();
  
  // Parse start date
  const [dd, mm, yyyy] = startOfWeekStr.split('/');
  const startDate = new Date(+yyyy, +mm - 1, +dd);
  
  const result: string[] = [];
  const cursor = new Date(startDate);
  
  while (cursor <= yesterday) {
    result.push(formatDate(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  
  return result;
};

export const getCurrentMonthString = () => {
  const date = getToday();
  const month = date.toLocaleString('pt-BR', { month: 'long' });
  const year = date.getFullYear();
  return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};

export const getCurrentYearString = () => {
  return getToday().getFullYear().toString();
};

// Returns the previous month as a string (e.g. "Março 2026")
export const getLastMonthString = () => {
  const date = getToday();
  date.setMonth(date.getMonth() - 1);
  const month = date.toLocaleString('pt-BR', { month: 'long' });
  const year = date.getFullYear();
  return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};

// Returns the complete date range for the previous month
export const getLastMonthRange = (): { start: string; end: string } => {
  const today = getToday();
  const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  
  return {
    start: formatDate(firstDayOfLastMonth),
    end: formatDate(lastDayOfLastMonth)
  };
};

// Returns the complete previous week range (Monday to Sunday)
export const getLastCompleteWeekRange = (): { start: string; end: string } => {
  const yesterday = getYesterday();
  const yesterdayDayOfWeek = yesterday.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  
  // Go back to last Sunday
  const daysToSubtract = yesterdayDayOfWeek === 0 ? 0 : yesterdayDayOfWeek;
  const lastSunday = new Date(yesterday);
  lastSunday.setDate(yesterday.getDate() - daysToSubtract);
  
  // Monday of last week (7 days before Sunday)
  const lastMonday = new Date(lastSunday);
  lastMonday.setDate(lastSunday.getDate() - 6);
  
  return {
    start: formatDate(lastMonday),
    end: formatDate(lastSunday)
  };
};

// Returns the complete previous week as an array of dates
export const getLastCompleteWeekDates = (): string[] => {
  const { start, end } = getLastCompleteWeekRange();
  const [dd, mm, yyyy] = start.split('/');
  const startDate = new Date(+yyyy, +mm - 1, +dd);
  const [ddEnd, mmEnd, yyyyEnd] = end.split('/');
  const endDate = new Date(+yyyyEnd, +mmEnd - 1, +ddEnd);
  
  const result: string[] = [];
  const cursor = new Date(startDate);
  
  while (cursor <= endDate) {
    result.push(formatDate(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  
  return result;
};

// Returns weekdays for the complete previous week (Monday=1 to Sunday=0)
export const getLastCompleteWeekdays = (): number[] => {
  return [1, 2, 3, 4, 5, 6, 0]; // Monday to Sunday
};

// Detects month rollover and returns appropriate defaults
export const getDefaultsForPeriodType = (periodType: string) => {
  const today = getToday();
  const dayOfMonth = today.getDate();
  const dayOfWeek = today.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  
  // CASE: MENSAL - always complete previous month
  if (periodType === 'Mensal') {
    return {
      selectedMonths: [getLastMonthString()]
    };
  }
  
  // CASE: ANUAL - always current year
  if (periodType === 'Anual') {
    return {
      selectedYears: [getCurrentYearString()]
    };
  }
  
  // ─── DIÁRIO: Detect Month Rollover (for closed period and weekdays) ──────
  if (periodType === 'Diário') {
    // DAY 01 - Full Rollback (complete previous month)
    if (dayOfMonth === 1) {
      const lastMonth = getLastMonthRange();
      return {
        dateRange: lastMonth,
        selectedSpecificDays: [] // For weekdays: empty on full rollback
      };
    }
    
    // DAY 02 - Focus on Closing (yesterday = day 01)
    if (dayOfMonth === 2) {
      const yesterday = getYesterdayFormatted();
      return {
        dateRange: { start: yesterday, end: yesterday },
        selectedSpecificDays: [yesterday] // For weekdays: only yesterday
      };
    }
    
    // MONDAY (regardless of day of month) - Special behavior for weekdays
    if (dayOfWeek === 1) {
      return {
        dateRange: {
          start: getFirstDayOfMonthUntilYesterday(),
          end: getYesterdayFormatted()
        },
        selectedSpecificDays: getLastCompleteWeekDates() // For weekdays: complete previous week
      };
    }
    
    // TUESDAY (regardless of day of month) - Focus on weekly closing
    if (dayOfWeek === 2) {
      const yesterday = getYesterdayFormatted();
      return {
        dateRange: {
          start: getFirstDayOfMonthUntilYesterday(),
          end: getYesterdayFormatted()
        },
        selectedSpecificDays: [yesterday] // For weekdays: only Monday (yesterday)
      };
    }
    
    // DAY 03+ AND WEDNESDAY+ → Normal MTD (1st of month to yesterday)
    return {
      dateRange: {
        start: getFirstDayOfMonthUntilYesterday(),
        end: getYesterdayFormatted()
      },
      selectedSpecificDays: getCurrentWeekDatesUntilYesterday() // For weekdays: current week to yesterday
    };
  }
  
  return {};
};

// ─── MDSAA: Same Day of Week from Previous Year ────────────────────────────
// Calculates the date from the previous year that corresponds to the same day of the week
export const getMDSAA = (dateStr: string): string => {
  if (!dateStr) return '';
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  
  // Corresponding date in the previous year (same day and month)
  const lastYearDate = new Date(year - 1, month - 1, day);
  const lastYearDayOfWeek = lastYearDate.getDay();
  
  // Calculate day difference to adjust to the same day of the week
  let diff = dayOfWeek - lastYearDayOfWeek;
  if (diff < 0) diff += 7; // Adjust to later week if necessary
  
  lastYearDate.setDate(lastYearDate.getDate() + diff);
  
  const dd = String(lastYearDate.getDate()).padStart(2, '0');
  const mm = String(lastYearDate.getMonth() + 1).padStart(2, '0');
  const yyyy = lastYearDate.getFullYear();
  
  return `${dd}/${mm}/${yyyy}`;
};

// Calculates MDSAA range based on an input range
export const getMDSAARange = (start: string, end: string): { start: string; end: string } => {
  if (!start || !end) return { start: '', end: '' };
  return {
    start: getMDSAA(start),
    end: getMDSAA(end)
  };
};

// ─── MDSAA for Months ───────────────────────────────────────────────────────
// Converts "Janeiro 2025" → "Janeiro 2024"
export const getMDSAAMonth = (monthStr: string): string => {
  if (!monthStr) return '';
  const parts = monthStr.split(' ');
  if (parts.length !== 2) return '';
  const [monthName, yearStr] = parts;
  const year = parseInt(yearStr);
  if (isNaN(year)) return '';
  return `${monthName} ${year - 1}`;
};

// Applies MDSAA to array of months
export const getMDSAAMonths = (months: string[]): string[] => {
  return months.map(getMDSAAMonth).filter(m => m !== '');
};

// ─── MDSAA for Years ────────────────────────────────────────────────────────
// Converts "2025" → "2024"
export const getMDSAAYear = (yearStr: string): string => {
  if (!yearStr) return '';
  const year = parseInt(yearStr);
  if (isNaN(year)) return '';
  return `${year - 1}`;
};

// Applies MDSAA to array of years
export const getMDSAAYears = (years: string[]): string[] => {
  return years.map(getMDSAAYear).filter(y => y !== '');
};
