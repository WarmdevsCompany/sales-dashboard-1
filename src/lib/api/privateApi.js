import { variables } from '$lib/variables';
import { goto } from '$app/navigation';

export function privateApi(resource, esiToken) {
	if (esiToken) {
		return fetch(`${variables.privatePath}/${resource}`, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				Authorization: esiToken
			}
		});
	} else {
		goto('/auth/login');
	}
}

export function privateApiWithBody(resource, data, esiToken) {
	if (esiToken) {
		return fetch(`${variables.privatePath}/${resource}`, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				Authorization: esiToken
			},
			body: data && JSON.stringify(data)
		});
	} else {
		goto('/auth/login');
	}
}
