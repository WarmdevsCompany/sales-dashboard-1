import { locale } from '$lib/translations/i18n.js';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { getCookie } from '$lib/functions/getCookie';

export function load() {
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
		const token = getCookie('esiToken');

		if (token) {
			throw redirect(307, '/overview/general');
		}
	}
}
