import { locale } from '$lib/translations/i18n.js';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { getCookie } from '$lib/functions/getCookie';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ url, status }) {
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
		const token = getCookie('esiToken');
		if (token) {
			throw redirect(307, '/overview/general');
		}else if(!token && url.pathname != '/auth/login' && url.pathname != '/auth/reset-password'){
			 throw redirect(307, '/auth/login');
		}
	}
}

 