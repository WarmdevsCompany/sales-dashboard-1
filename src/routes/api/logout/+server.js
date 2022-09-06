import * as cookie from 'cookie';

/** @type {import('./$types').RequestHandler} */
export async function POST({ setHeaders}) {
	setHeaders({
		'set-cookie': cookie.serialize('esiToken', '', {
			secure: true,
			path: '/',
			'max-age': -1
		})
	});
	return new Response(JSON.stringify({ status: true}), { status: 200 })
}
