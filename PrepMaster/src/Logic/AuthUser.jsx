import { apiURL } from "./ApiConfig";

export default function AuthUser({ email, password, usertype }) {
  return new Promise((resolve, reject) => {
    fetch(apiURL+usertype, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((users) => {
        const valid = users.some(
          (user) => user.email === email && user.password === password
        );
        resolve(valid); // Resolve the promise with the authentication result
      })
      .catch((err) => {
        console.error(err);
        reject(err); // Reject the promise if there's an error
      });
  });
}
