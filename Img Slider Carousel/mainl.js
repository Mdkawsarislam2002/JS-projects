let sliderImages = document.getElementsByClassName("slider");
let leftIcon = document.querySelector("#left-icon");
let body = document.querySelector("body");
let rightIcon = document.querySelector("#right-icon");
let firstImg = document.querySelector("#firstImg");

// console.log(sliderImages[0]);
body.style.background = "red";

rightIcon.addEventListener("click", () => {
  let result = sliderImages[0];
  firstImg.style.transform = "translateX(60px);";
  console.log(firstImg);
});
