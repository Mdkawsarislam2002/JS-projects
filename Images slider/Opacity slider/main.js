//  all images here
const FirstImages = document.getElementById("first-images");
const secondImages = document.getElementById("second-images");
const thirdImages = document.getElementById("third-images");
const fourthImages = document.getElementById("fourth-images");

//  pavilions buttons
const navigationBtn = document.querySelectorAll(".click-btn");

navigationBtn[0].addEventListener("click", () => {
  FirstImages.style.opacity = "1";
  secondImages.style.opacity = "0";
  thirdImages.style.opacity = "0";
  fourthImages.style.opacity = "0";
});

navigationBtn[1].addEventListener("click", () => {
  FirstImages.style.opacity = "0";
  secondImages.style.opacity = "1";
  thirdImages.style.opacity = "0";
  fourthImages.style.opacity = "0";
});

navigationBtn[2].addEventListener("click", () => {
  FirstImages.style.opacity = "0";
  secondImages.style.opacity = "0";
  thirdImages.style.opacity = "1";
  fourthImages.style.opacity = "0";
});

navigationBtn[3].addEventListener("click", () => {
  FirstImages.style.opacity = "0";
  secondImages.style.opacity = "0";
  thirdImages.style.opacity = "0";
  fourthImages.style.opacity = "1";
});
