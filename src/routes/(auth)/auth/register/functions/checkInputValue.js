// check only numbers (without "comma", "point" etc)
// check max value in amount field

export function checkInputValue() {
  this.value = this.value.replace(/[^0-9]/g, "");
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
}