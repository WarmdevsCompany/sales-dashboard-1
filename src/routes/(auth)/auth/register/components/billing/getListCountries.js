export async function getCountriesFromDB() {
  const url = `https://be.esi.kdg.com.ua/esi_public2/esi_public/backend/getCountries`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    if (res.ok) {
      return json;
    } else {
      throw new Error(json);
    }
  } catch (error) {
    console.log(error.message);
  }
}
