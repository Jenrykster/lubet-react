export function formatCurrency(
  value: number | string,
  currency: string = 'BRL'
): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency,
  });
}
