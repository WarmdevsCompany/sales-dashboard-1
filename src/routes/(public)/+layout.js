import { locale } from '$lib/translations/i18n.js';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { getCookie } from '$lib/functions/getCookie';
import { deleteCookie } from '../../lib/functions/deleteCookie';
import { variables } from '$lib/variables';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// language logic
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
		const token = getCookie('esiToken');

		if (!token) {
			deleteCookie('esiToken');
			throw redirect(307, '/auth/login');
		} else {
			const url = `${variables.privatePath}/getGeneralInfo`;
			const rawResponse = await fetch(url, {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token
				}
			});
			const response = await rawResponse.json();
			if (rawResponse.status == 200) {
				return {
					general: response
				};
			} else if (rawResponse.status == 401) {
				deleteCookie('esiToken');
				throw redirect(307, '/auth/login');
			}
		}
	}
}
