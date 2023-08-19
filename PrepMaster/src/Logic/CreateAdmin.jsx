import { apiURL } from "./ApiConfig";

export default function CreateAdmin({ email, organization, password }) {
  return new Promise((resolve, reject) => {
    console.log(email, organization, password);
    fetch(apiURL+"/admins", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, organization, password }),
    })
      .then((response) => {
        if (response.headers.get("content-length") === "0") {
          // Handle empty response
          resolve();
        } else {
          return response.json();
        }
      })
      .then((resp) => {
        console.log(resp.errors);
        resolve(resp);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}
