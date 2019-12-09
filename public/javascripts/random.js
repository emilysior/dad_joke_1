function initialize() {
  if (document.querySelector(".random-btn")) {
    document.querySelector(".random-btn").addEventListener("click", () => {
      makeRequest("https://icanhazdadjoke.com/").then(res => {
        showJoke(res.joke);
      });
    });
  }
}

function showJoke(joke) {
  const jokeText = document.querySelector(".joke-text");
  jokeText.textContent = joke;
  jokeText.addEventListener("click", () => {
    location.href = `/joke#${joke}`;
  });
}

async function makeRequest(url, term = "") {
  const baseUrl = `${url}?term=${term}`;
  const response = await fetch(baseUrl, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: "application/json"
    }
  });
  return await response.json();
}

initialize();
