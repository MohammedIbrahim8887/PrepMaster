import { apiURL } from "./ApiConfig";

export default function UpdateTeacher({
  id,
  firstName,
  lastName,
  email,
  password,
  gender,
  phoneNumber,
  departmentId,
  departmentHead,
}) {
  return new Promise((resolve, reject) => {
    fetch(apiURL+`/teachers/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
        password,
        departmentHead,
        departmentId,
      }),
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
        if (resp && resp.errors) {
          console.log(resp.errors);
          reject(resp.errors);
        } else {
          console.log(resp);
          resolve(resp);
        }
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}
