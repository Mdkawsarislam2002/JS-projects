const quoteText = document.getElementById("quoteText");
const author = document.getElementById("author");
const url = "https://api.quotable.io/random";

//  buttons
const copy = document.getElementById("copy");
const newQuote = document.getElementById("newQuote");

const quotas = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => getRandomPoke(data));
};

const getRandomPoke = (data) => {
  quoteText.innerHTML = data.content;
  author.innerHTML = data.author;
};

newQuote.addEventListener("click", quotas);
copy.addEventListener("click", () => {
  let quote = quoteText.innerText;
  navigator.clipboard.writeText(quote);
});
