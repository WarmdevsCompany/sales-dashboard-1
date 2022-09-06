import { goto } from '$app/navigation';
export const logout = async () => {
    const responseRaw = await fetch('/api/logout', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
    });
    let response = await responseRaw.json();
    if (response.status) {
        goto('/auth/login');
    }
};