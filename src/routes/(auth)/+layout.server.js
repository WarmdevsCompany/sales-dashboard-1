import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
    console.log(locals)
    if (locals.token) {
        throw redirect(307, '/overview/general');
    }
}