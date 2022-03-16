let decrease = document.querySelector("#btn-decrease");
let reset = document.querySelector("#btn-reset");
let increase = document.querySelector("#btn-increase");
let result = document.querySelector("#result");
let count = 0;

// events and functions
reset.addEventListener("click", () => {
  result.innerHTML = 0;
  if (Number(result.innerHTML) == 0) {
    result.style.background = "#011627";
    result.style.color = "white";
  }
});

increase.addEventListener("click", () => {
  result.innerHTML++;
  if (Number(result.innerHTML) > 0) {
    result.style.background = "#004b23";
  }
});
decrease.addEventListener("click", () => {
  result.innerHTML--;
  if (Number(result.innerHTML) < 0) {
    result.style.background = "#c9184a";
  }
});
