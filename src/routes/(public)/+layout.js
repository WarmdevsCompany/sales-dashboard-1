import { locale } from '$lib/translations/i18n.js';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { privateApi } from '$lib/api/privateApi';
import { getCookie } from '$lib/functions/getCookie';
import { deleteCookie } from '../../lib/functions/deleteCookie';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
	// language logic
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
		const token = getCookie('esiToken');

		if (!token) {
			throw redirect(307, '/auth/login');
		} else {
			const rawResponse = await privateApi('/getGeneralInfo', token);
			const response = await rawResponse.json();
			if (rawResponse.status == 200) {
				return {
					general: response
				};
			} else if (rawResponse.status == 401) {
				deleteCookie('esiToken')
				throw redirect(307, '/auth/login');
			}
		}
	}
}
