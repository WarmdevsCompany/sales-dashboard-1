import { privateApi } from '$lib/api/privateApi';
import {userAuthToken} from '$lib/globalStore'

export async function load({locals}) {
	const rawResponse = await privateApi('/getGeneralInfo', locals.token);
	const response = await rawResponse.json();
	if (rawResponse.status == 200) {
		return{
			general: response,
		}
	} else if (rawResponse.status == 401){
		return {
			status: 302,
			redirect: '/auth/login'
		};
	}
}
