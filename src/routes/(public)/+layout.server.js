import { redirect } from '@sveltejs/kit';
import { privateApi } from '$lib/api/privateApi';
import { browser } from '$app/environment';
import { locale } from '$lib/translations/i18n.js';
export async function load({ locals }) {
	// language logic
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
	}

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
