
/** Format price in EUR for Slovak locale (e.g. 1 299 €) */
export function formatPrice(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    ...options,
  }).format(value);
}

/** Format plain numbers (e.g. ratings, quantities) */
export function formatNumber(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("sk-SK", {
    maximumFractionDigits: 0,
    ...options,
  }).format(value);
}
