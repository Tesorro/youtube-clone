const MILLION = 1_000_000
const BILLION = 1_000_000_000

const abbreviateNumber = (num: number, divisor: number, suffix: string): string => {
  const result = (num / divisor).toFixed(1);
  return `${result.endsWith('.0') ? result.slice(0, -2) : result}${suffix} views`;
};

export const transformViewsCount = (views: number): string => {
  if (views >= BILLION) return abbreviateNumber(views, BILLION, 'B');
  if (views >= MILLION) return abbreviateNumber(views, MILLION, 'M');
  if (views >= 1000) return abbreviateNumber(views, 1000, 'K');
  return `${views} views`;
};
