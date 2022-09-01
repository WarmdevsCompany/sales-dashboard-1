export function numberWithCommas(value, count) {
  let string = Number.parseFloat(value).toFixed(count) ?? 0;
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
