import { browser } from '$app/environment';
export function getCookie(name) {
	if (browser) {
		let matches = document.cookie.match(
			new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
		);
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
}
