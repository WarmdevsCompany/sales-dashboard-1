import { redirect } from '@sveltejs/kit';
import { privateApi } from '$lib/api/privateApi';
import { browser } from '$app/environment';
export async function load({ data }) {
	// if (browser) {
	// 	if (sessionStorage.getItem('generalData')) {
	// 		console.info('General data exist')
	// 	} else {
	// 		window.sessionStorage.setItem('generalData', JSON.stringify(data));
	// 	}
	// }
}
