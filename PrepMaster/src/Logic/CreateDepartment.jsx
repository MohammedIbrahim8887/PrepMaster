import { apiURL } from "./ApiConfig";

export default function CreateDepartment({
  name,
  departmentHeadId,
  description,
}) {
  return new Promise((resolve, reject) => {
    fetch(apiURL+"/departments", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminId: 2,
        departmentHeadId,
        department: {
          name,
          description,
        },
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
