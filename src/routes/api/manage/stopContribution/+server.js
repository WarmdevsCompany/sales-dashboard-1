import { privateApiWithBody } from '$lib/api/privateApi';

/** @type {import('./$types').RequestHandler} */
export async function POST({locals}) {

	const rawResponse = await privateApiWithBody('stopContribution', locals.esiToken);
	const response = await rawResponse.json();
	if (!response.status) {
		return {
			status: 403,
			errors: {
			  message: response.errorMessage
			}
		  };
	}
	return new Response(JSON.stringify({ status: response.status}), { status: 200 }) 
}