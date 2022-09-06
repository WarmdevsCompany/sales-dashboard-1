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
