export function checkInputNumber(e) {
	var keyCode = e.keyCode ? e.keyCode : e.which;
	if (keyCode === 38 || keyCode === 40) {
		e.preventDefault();
	}
	// const regex = RegExp(/[0-9]+/g);
    // const test_result = regex.test(e.target.value);
	// // console.log(test_result)
	// // console.log('defaultValue', e.target.defaultValue)
	// // console.log(e.target.value)
	// // if(test_result){
	// // 	e.target.defaultValue = e.target.value;
	// //   }else{
	// // 	e.target.value = e.target.defaultValue;
	// //   }
}
