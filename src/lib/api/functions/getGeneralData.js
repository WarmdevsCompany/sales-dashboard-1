export async function getGeneralData() {
    let rawResponse = await fetch('/api/general', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
    });
    return await rawResponse.json();
}