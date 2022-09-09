export function setLanguage(lang, langId) {
    localStorage.setItem('lang', lang);
    setLanguagePost(langId);
}

async function setLanguagePost(langId) {
    const responseRaw = await fetch('/api/changeLang', {
        method: 'POST',
        headers: {
            accept: 'application/json',
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
}
