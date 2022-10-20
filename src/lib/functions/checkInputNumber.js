export function checkInputNumber(e) {
	var keyCode = e.keyCode ? e.keyCode : e.which;
	if (keyCode === 38 || keyCode === 40) {
		e.preventDefault();
	}
}

function validate(s) {
	const rgx = /^[0-9]*\.?[0-9]*$/;
	return s.match(rgx);
}

function validateComma(s) {
	const rgx = /\,/;
	return s.match(rgx);
}

export function checkInputValue(e) {
	const commaRes = validateComma(this.value)
	if(commaRes!=null){
		this.value = this.value.replace(',', '.')
	}
	const res = validate(this.value);
	if (res === null) {
		this.value = this.value.replace(/[^\d.-]/g, '');
	}
	if (this.value.length > this.maxLength) {
		this.value = this.value.slice(0, this.maxLength);
	}
}
