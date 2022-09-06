import * as cookie from 'cookie';
export const handle = async ({ event, resolve }) => {
	// get cookies
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	// set cookies in locals object
	event.locals.esiToken = cookies['esiToken'] || null;
	event.locals.isAuthUser = false;
	console.log(event.locals.esiToken)
	// resolve event
	const response = await resolve(event); 
	return response;
};
