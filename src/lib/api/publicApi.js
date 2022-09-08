import { variables } from '$lib/variables';

export function publicApi(method, resource, data) {
	return fetch(`${variables.publicPath}/${resource}`, {
		method,
		headers: {
			accept: 'application/json',
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
