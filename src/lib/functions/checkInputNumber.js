export function checkInputNumber(e) {
	var keyCode = e.keyCode ? e.keyCode : e.which;
	if (keyCode === 38 || keyCode === 40) {
		e.preventDefault();
	}
	return (((e.which > 47) && (e.which < 58)) || (e.which == 13));
}
