// lib/price.ts

/**
 * Format a number as EUR for Slovak locale (e.g. 1 299 €).
 * You can override defaults via the optional options param.
 */
export function formatPrice(
  value: number,
  options?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    ...options,
  }).format(value);
}

/** Generic number formatter (useful for pieces/ratings, etc.) */
export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat("sk-SK", {
    maximumFractionDigits: 0,
    ...options,
  }).format(value);
}
