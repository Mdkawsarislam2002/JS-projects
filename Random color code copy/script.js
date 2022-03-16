let clickBtn = document.querySelector(".clickBtn");

padPlus = () => {
  let redColor = Math.floor(Math.random() * 255);
  let BlueColor = Math.floor(Math.random() * 255);
  let greenColor = Math.floor(Math.random() * 255);
  let rgb = `rgb(${redColor},${BlueColor},${greenColor})`;

  parentsDiv = document.querySelector(".parents");
  const randomColor = (parentsDiv.style.background = rgb);
  let rgbColors = document.querySelector("#rgbColorsPlace");
  rgbColors.value = randomColor;
  clickBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(randomColor);
    clickBtn.innerHTML = "copied ";
    setTimeout(() => {
      clickBtn.innerHTML = "Copy";
    }, 1000);
  });
};
