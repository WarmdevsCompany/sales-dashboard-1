import { clientSecretToken } from "../../stores/store";

function setClientSecret(data) {
  clientSecretToken.set(data);
}

export async function getClientSecret(userToken) {
  let status = false;

  const mainEndpoint =
    "https://be.esi.kdg.com.ua/esi_private2/esi_private/backend/addPaymentMethod";
  try {
    const rawResponse = await fetch(mainEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    });
    const content = await rawResponse.json();
    setClientSecret(content.data.clientSecret);
    status = content.status;
  } catch (e) {
    alert(e.message);
  }
  return status;
}
