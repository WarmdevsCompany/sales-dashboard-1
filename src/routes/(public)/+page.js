import { error, redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { getCookie } from '$lib/functions/getCookie';

export async function load() {
	if (browser) {
		const token = getCookie('esiToken');
		if (token) {
			throw redirect(307, '/overview/general');
		} else {
			throw redirect(307, '/auth/login');
		}
	}
}
