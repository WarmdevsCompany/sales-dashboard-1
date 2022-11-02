export function convertDateToUTC(date) {
	let year, month, day, hours, minutes;
	const date_0 = new Date(date * 1000);
	const dateUTC = new Date(
		Date.UTC(
			date_0.getFullYear(),
			date_0.getMonth(),
			date_0.getDate(),
			date_0.getHours(),
			date_0.getMinutes(),
			0
		)
	);
	month = dateUTC.getMonth() +1;
   console.log('dateUTC : ',dateUTC)
	if (month < 10) {
		month = '0' + month;
	}
	day = dateUTC.getDate();
	year = dateUTC.getFullYear();
	hours = dateUTC.getHours();
	minutes = dateUTC.getMinutes();

	return {
		year,
		month,
		day,
		hours,
		minutes
	};
}
