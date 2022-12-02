import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, url }) {
	if (locals.esiToken) {
		throw redirect(307, '/overview/general');
	} else if (
		!locals.esiToken &&
		url.pathname != '/auth/login' &&
		url.pathname != '/auth/reset-password' &&
		url.pathname != '/auth/successful' &&
		url.pathname != '/auth/register'
	) {
		throw redirect(307, '/auth/login');
	}
}
