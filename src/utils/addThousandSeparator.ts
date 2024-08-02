export function moneySeparator(val: number) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
