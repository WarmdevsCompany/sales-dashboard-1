import { error } from '@sveltejs/kit';

const base = 'https://be.esi.kdg.com.ua/esi_private/esi_private/backend';

export function privateApi(resource, data, token) {
	if (token) {
		return fetch(`${base}/${resource}`, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				Authorization: token
			},
			body: data && JSON.stringify(data)
		});
	} 
}
