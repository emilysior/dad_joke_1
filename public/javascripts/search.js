let currentPage = 1;

function initialize() {
  if (document.querySelector(".search-btn")) {
    document.querySelector(".search-btn").addEventListener("click", () => {
      const term = document.querySelector(".search-input").value;
      makeRequest("https://icanhazdadjoke.com/search", term, 1);
    });
  }
}

async function makeRequest(url, term = "", page = 1) {
  const baseUrl = `${url}?term=${term}&page=${page}`;
  const response = await fetch(baseUrl, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: "application/json"
    }
  });
  const result = await response.json();
  parseResults(result);
  currentPage = page;
}

function parseResults(result) {
  document.querySelector(".search-results").classList.remove("hidden");

  const jokesArray = result.results; //array
  if (jokesArray.length) {
    addJokesToDomSearch(jokesArray);
    setPageListeners();
  } else {
    document.querySelector(".results").textContent =
      "No jokes found! Please try again.";
  }
}

function addJokesToDomSearch(jokesArray) {
  const resultsDiv = document.querySelector(".results");
  resultsDiv.innerHTML = "";

  const div = document.createElement("div");
  jokesArray.forEach(joke => {
    const a = document.createElement("a");
    const li = document.createElement("li");
    li.appendChild(a);
    li.classList.add("joke-text");
    a.innerText = joke.joke;
    a.href = `/joke#${joke.joke}`;
    div.appendChild(li);
  });

  resultsDiv.appendChild(div);
}

function setPageListeners() {
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  nextBtn.addEventListener("click", () => {
    const term = document.querySelector(".search-input").value;
    makeRequest("https://icanhazdadjoke.com/search", term, currentPage + 1);
  });

  prevBtn.addEventListener("click", () => {
    const term = document.querySelector(".search-input").value;
    makeRequest("https://icanhazdadjoke.com/search", term, currentPage - 1);
  });
}

initialize();
