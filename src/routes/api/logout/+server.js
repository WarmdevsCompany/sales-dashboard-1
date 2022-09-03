import * as cookie from 'cookie';
import { publicApi } from '$lib/api/publicApi.js';
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function POST({ setHeaders}) {
	setHeaders({
		'set-cookie': cookie.serialize('token', '', {
			secure: true,
			path: '/',
			'max-age': -1
		})
	});
	return new Response(JSON.stringify({ status: true}), { status: 200 }) 
}
