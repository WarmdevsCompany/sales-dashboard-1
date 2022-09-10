import { updateGlobalData } from '$lib/globalStore';
import { getGeneralData } from '$lib/api/axios';
import { changeLang } from '../api/axios';

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
    const response = await changeLang(langId);
    // if(response.status) {
    //     const newData = await getGeneralData();
    //     updateGlobalData(newData);
    //     // console.log(newData);
    // }
}

