import { redirect } from '@sveltejs/kit';
import { privateApi } from '$lib/api/privateApi';
import { browser } from '$app/environment';

export async function load({ locals }) {
	// auth logic
	if (!locals.esiToken) {
		throw redirect(307, '/auth/login');
	} else {
		const rawResponse = await privateApi('/getGeneralInfo', locals.esiToken);
		const response = await rawResponse.json();
		if (rawResponse.status == 200) {
			return {
				general: response
			};
		} else if (rawResponse.status == 401) {
			return {
				status: 302,
				redirect: '/auth/login'
			};
		}
	}
}
