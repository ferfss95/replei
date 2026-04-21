/**
 * Data Generation Utilities
 * Funções para geração de dados realistas e validações de métricas
 */

/**
 * Helper to determine if a metric is in the planning group
 */
export const isPlanningMetric = (
  mId: string,
  moduleConfig: any,
): boolean => {
  return (moduleConfig.planningMetrics || []).includes(mId);
};

/**
 * Background color helper for planning metrics
 */
export const getPlanningBg = (
  mId: string,
  moduleConfig: any,
  defaultColor: string = "#e2e8f0",
): string => {
  return isPlanningMetric(mId, moduleConfig)
    ? "#f8f9fb"
    : defaultColor;
};

/**
 * Hora a Hora — realistic hourly data generator
 * Simulates aggregated sales across multiple days with realistic patterns
 */
export const generateHourlyValue = (
  hour: string,
  storeName: string,
  metricId: string,
  seed: number,
  config: any,
): number => {
  const hourNum = parseInt(hour.replace("h", ""), 10);

  // Determine if this is a mall store (most start at 10h)
  const isMallStore = seed % 3 !== 0; // ~66% are mall stores

  // Base value from config data
  const baseIndex = Math.abs(seed) % config.data.length;
  let baseValue = config.data[baseIndex];

  // Hour-specific multiplier patterns
  let multiplier = 1.0;

  if (hourNum >= 8 && hourNum <= 9) {
    // 8h-9h: very low/zero for mall stores, moderate for others
    multiplier = isMallStore ? 0.05 : 0.3;
  } else if (hourNum >= 10 && hourNum <= 11) {
    // 10h-11h: opening hours, gradually increasing
    multiplier = 0.6;
  } else if (hourNum >= 12 && hourNum <= 13) {
    // 12h-13h: lunch time, moderate
    multiplier = 0.75;
  } else if (hourNum === 14) {
    // 14h: post-lunch dip
    multiplier = 0.8;
  } else if (hourNum === 15) {
    // 15h: PEAK HOUR (varies by store)
    const isPeak15 = seed % 5 < 3; // 60% have peak at 15h
    multiplier = isPeak15 ? 1.4 : 1.0;
  } else if (hourNum >= 16 && hourNum <= 17) {
    // 16h-17h: strong afternoon
    multiplier = 1.1;
  } else if (hourNum === 18) {
    // 18h: evening start
    multiplier = 1.2;
  } else if (hourNum === 19) {
    // 19h: PEAK HOUR (varies by store)
    const isPeak19 = seed % 5 >= 2; // 60% have peak at 19h
    multiplier = isPeak19 ? 1.5 : 1.15;
  } else if (hourNum >= 20 && hourNum <= 21) {
    // 20h-21h: late evening, still strong
    multiplier = 1.0;
  } else if (hourNum >= 22 && hourNum <= 23) {
    // 22h-23h: closing hours, lower
    multiplier = 0.4;
  }

  // Add store-specific variation (some stores perform better at different hours)
  const storeVariation = ((seed % 20) - 10) / 100; // ±10% variation
  multiplier *= 1 + storeVariation;

  // Simulate "sum of multiple days" by adding slight randomness
  const dayVariation = 1 + ((seed % 30) - 15) / 100; // ±15% to simulate day-to-day variance

  return baseValue * multiplier * dayVariation;
};
