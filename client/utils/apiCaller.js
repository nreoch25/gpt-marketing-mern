import fetch from "isomorphic-fetch";
const API_URL = "http://localhost:3000/api";

export default function callApi(endpoint, method) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: { "content-type": "application/json" },
    method: method
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error
  );
}
