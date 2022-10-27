import { locale } from '$lib/translations/i18n.js';
import { browser } from '$app/environment';

/** @type {import('./$types').PageLoad} */
export function load() {	
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
	}
}

 