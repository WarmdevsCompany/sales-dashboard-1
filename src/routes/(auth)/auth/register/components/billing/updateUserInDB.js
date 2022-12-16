export async function updateUserInDB(userData, userToken) {
	let status = false;

	const mainEndpoint = 'https://be.esi.kdg.com.ua/esi_private2/esi_private/backend/updateClient';
	try {
		const rawResponse = await fetch(mainEndpoint, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: userToken
			},
			body: JSON.stringify(userData)
		});
		const content = await rawResponse.json();
		return content;
	} catch (e) {
		alert(e.message);
	}
	return status;
}
