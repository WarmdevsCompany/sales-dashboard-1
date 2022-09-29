export function roundNumber(number) {
    return Math.round(number * 100) / 100;
}
export function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}