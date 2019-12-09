async function makeRequest(url, term = "") {
  console.log("make request");
  const baseUrl = `${url}?term=${term}`;
  const response = await fetch(baseUrl, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: "application/json"
    }
  });
  return await response.json();
}
