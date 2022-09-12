import { locale } from '$lib/translations/i18n.js';
import { browser } from '$app/environment';
export async function load() {
	// language logic
	if (browser) {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'EN');
	}
}
