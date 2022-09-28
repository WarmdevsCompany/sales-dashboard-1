export function roundNumber(number, decimals) {
    decimals = decimals || 0;
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}