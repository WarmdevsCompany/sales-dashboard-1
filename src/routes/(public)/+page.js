import { error, redirect } from '@sveltejs/kit';

export async function load() {
    throw redirect(307, '/overview/general');
}
export const prerender = true;
