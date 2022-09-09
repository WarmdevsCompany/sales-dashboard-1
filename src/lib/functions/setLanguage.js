import { updateGlobalData } from '$lib/globalStore';
import { getGeneralData } from '$lib/api/functions/getGeneralData';

export async function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    let langId = 0;
    switch (lang) {
        case 'DE':
          langId = 5238794;
          break;
        case 'FR':
          langId = 5238795;
          break;
        default:
          langId = 5238793;
      }

    const response = await setLanguagePost(langId);
    // if(response.status) {
    //     const newData = await getGeneralData();
    //     updateGlobalData(newData);
    //     // console.log(newData);
    // }
}

async function setLanguagePost(langId) {
    const responseRaw = await fetch('/api/changeLang', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({ langId: langId })
    });
    let response = await responseRaw.json();

    if (!response.status) {
        errorMessages = response.errorMessage;
        console.log(errorMessages)
    } 
    return response;
}
