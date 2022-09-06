import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	if (locals.esiToken) {
		throw redirect(307, '/overview/general');
	}
}
