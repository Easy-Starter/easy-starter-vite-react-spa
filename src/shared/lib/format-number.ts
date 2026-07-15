const numberFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 1,
})

export function formatNumber(value: number) {
  return numberFormatter.format(value)
}
