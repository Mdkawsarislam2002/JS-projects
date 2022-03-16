let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let counterResultWord = document.querySelector(".counterResultWord");
let counterResult = document.querySelector(".counterResult");
counterResultWord.textContent = 0;

input.addEventListener("input", () => {
  counterResult.textContent = input.value.length;
  if (input.value.length == 100) {
    alert("only 100 character is allowed");
  }
  let inputValue = input.value;
  let valueResult = inputValue.split(" ");
  counterResultWord.textContent = valueResult.length;
});
