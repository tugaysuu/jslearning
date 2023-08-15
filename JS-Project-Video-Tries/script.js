const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "oWRlwQ+Ps5VSK0wjObNNnQ==bRaBFfSwNeR22z0O";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getJoke() {
  try {
    jokeEl.innerText = "Incoming";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "Error: " + error.message
  }
}

btnEl.addEventListener("click", getJoke);
