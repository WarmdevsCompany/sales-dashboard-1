import { locale } from '$lib/translations/i18n.js';
import { browser } from '$app/environment';
/** @type {import('./$types').PageLoad} */
export async function load(event) {
    console.log(event)
	// language logic
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
	}
}

