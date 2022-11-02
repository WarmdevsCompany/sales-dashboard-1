export function convertDateToUTC(date) {
	let year, month, day, hours, minutes;
	const dateUTC = new Date(
		date * 1000
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
