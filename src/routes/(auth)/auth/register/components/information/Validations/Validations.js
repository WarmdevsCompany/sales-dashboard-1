export async function checkIfEmailExistInDB(email) {
  const url = `https://be.esi.kdg.com.ua/esi_public2/esi_public/backend/checkEmail`;
  let status;
  if (email)
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((parsedData) => {
          if (parsedData.status === true) {
            status = false;
          } else if (parsedData.status === false) {
            status = true;
          }
        });
    } catch (error) {
      console.log(error.message);
      status = true;
    }
  return status;
}

export async function checkIfUserNameExistInDB(userName) {
  const url = `https://be.esi.kdg.com.ua/esi_public2/esi_public/backend/checkUsername`;
  let status;
  if (userName)
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          userName,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status) {
            status = false;
          } else if (!data.status) {
            status = true;
          }
        });
    } catch (error) {
      console.log(error.message);
      status = true;
    }
  return status;
}

export async function checkIfPhoneExistInDB(phoneCode, phoneNumber) {
  const url = `https://be.esi.kdg.com.ua/esi_public2/esi_public/backend/checkPhone`;
  let status;
  if (phoneNumber.length >= 5)
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          phoneCode,
          phoneNumber,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((parsedData) => {
          // let parsedData = JSON.parse(data)
          if (parsedData.status === true) {
            status = false;
          } else if (parsedData.status === false) {
            status = true;
          }
        });
    } catch (error) {
      console.log(error.message);
      status = true;
    }
  return status;
}
