import { variables } from '$lib/variables';
/** @type {import('./$types').RequestHandler} */
export async function POST({ locals, request }) {
	const body = await request.json();
	const resource = 'changeContribution';
	try {
		const rawResponse = await fetch(`${variables.privatePath}/${resource}`, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				Authorization: locals.esiToken
			},
			body: body && JSON.stringify(body)
		});
		const response = await rawResponse.json();
		if (!response.status) {
			const res = {
				errors: {
					message: response.errorMessage
				}
			};
			return new Response(JSON.stringify(res));
		}
		return new Response(JSON.stringify(response));
	} catch (error) {
		return new Response(JSON.stringify(error));
	}
}
