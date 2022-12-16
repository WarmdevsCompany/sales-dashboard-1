export async function getCountryStateList(countryId) {
	const mainEndpoint =
		'https://be.esi.kdg.com.ua/esi_public/esi_public/backend/getCountryStateList';
	try {
		const rawResponse = await fetch(mainEndpoint, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				countryId
			})
		});
		const content = await rawResponse.json();
		return content;
	} catch (e) {
		alert(e.message);
	}
}
