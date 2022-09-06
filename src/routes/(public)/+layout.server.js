import { redirect } from '@sveltejs/kit';
import { privateApi } from '$lib/api/privateApi';
export async function load({ locals }) {
    if (!locals.esiToken && !locals.isAuthUser) {
        throw redirect(307, '/auth/login');
    } else {
        const rawResponse = await privateApi('/getGeneralInfo', locals.esiToken);
        const response = await rawResponse.json();
        if (rawResponse.status == 200) {
           locals.isAuthUser = true
            return{
                general: response,
            }
        } else if (rawResponse.status == 401){
            locals.isAuthUser = false
            return {
                status: 302,
                redirect: '/auth/login'
            };
        }
    }
  
}
