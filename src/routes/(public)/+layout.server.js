import { redirect } from '@sveltejs/kit';
import { privateApi } from '$lib/api/privateApi';
export async function load({ locals }) {
    let generalData ;
    if (!locals.token) {
        throw redirect(307, '/auth/login');
    } else {
        const rawResponse = await privateApi('/getGeneralInfo', locals.token);
        const response = await rawResponse.json();
        if (rawResponse.status == 200) {
            generalData = response;
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
  
}
