const base = 'https://be.esi.kdg.com.ua/esi_public/esi_public/backend';


export function publicApi(method, resource, data) {
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}