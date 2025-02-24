export function moneySeparator(val: string) {
  const parts = val.replace(/\D/g, '').split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
