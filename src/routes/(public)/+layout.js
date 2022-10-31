import { redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { getCookie } from '$lib/functions/getCookie';
import { deleteCookie } from '$lib/functions/deleteCookie';
import { variables } from '$lib/variables';
import { locale } from '$lib/translations/i18n.js';

export async function load() {
	if (browser) {
		let lang = localStorage.getItem('lang');
		const token = getCookie('esiToken');
		if (!token || token == 'undefined') {
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
			if (response.errorMessage === 'USER_DOES_NOT_FINISH_REGISTRATION') {
				deleteCookie('esiToken');
				throw redirect(307, '/404');
			}
			if (lang && response.data.lang.code === lang) {
				locale.set(lang);
			} else {
				locale.set(response.data.lang.code);
				localStorage.setItem('lang', response.data.lang.code);
			}
			if (!response.status || response.data === null) {
				throw redirect(307, '/404');
			}
			if (response.errorMessage === 'FAILED_TO_FIND_USER') {
				deleteCookie('esiToken');
				throw redirect(307, '/auth/login');
			}

			if (
				response.data.currentSubscription.statusId === 5237003 ||
				response.data.currentSubscription.statusId === 5237004
			) {
				throw redirect(307, '/blocked');
			}

			if (rawResponse.status == 200) {
				return { general: response };
			} else if (rawResponse.status == 401) {
				deleteCookie('esiToken');
				throw redirect(307, '/auth/login');
			}
		}
	}
}
