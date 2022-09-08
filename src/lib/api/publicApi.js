import { variables } from '$lib/variables';

export function publicApi(method, resource, data) {
	if (data) {
		return fetch(`${variables.publicPath}/${resource}`, {
			method,
			headers: {
				'content-type': 'application/json'
			},
			body: data && JSON.stringify(data)
		});
	} else {
		return fetch(`${variables.publicPath}/${resource}`, {
			method,
			headers: {
				'content-type': 'application/json'
			}
		});
	}
}
