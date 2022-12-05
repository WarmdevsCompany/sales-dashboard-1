import { userAuthToken } from "../stores/store";

function setAuthToken(data) {
  userAuthToken.set(data);
}

// create user in db
export async function createUserInDB(userData) {
  let status = false;

  const mainEndpoint =
    "https://be.esi.kdg.com.ua/esi_public2/esi_public/backend/createClient";
  try {
    const rawResponse = await fetch(mainEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const content = await rawResponse.json();

    status = content.status;
    setAuthToken(content.data.token);
  } catch (e) {
    console.error(e.message);
  }
  return status;
}
