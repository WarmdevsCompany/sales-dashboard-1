export function checkInputMaxLenght() {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length >  this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
}