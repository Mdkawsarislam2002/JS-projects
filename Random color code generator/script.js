padPlus = () => {
  let redColor = Math.floor(Math.random() * 255);
  let BlueColor = Math.floor(Math.random() * 255);
  let greenColor = Math.floor(Math.random() * 255);
  let rgb = `rgb(${redColor},${BlueColor},${greenColor})`;

  parentsDiv = document.querySelector(".parents");
  const bg = (parentsDiv.style.background = rgb);
  let inputArea = document.querySelector("#rgbColorsPlace");
  inputArea.style.placeholder = rgb;
  inputArea.innerHTML = rgb;
};

