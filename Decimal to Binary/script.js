let input = document.querySelector("#input");
let output = document.querySelector("#output");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let userInput = parseInt(input.value);
  output.value = userInput.toString(2);
});
