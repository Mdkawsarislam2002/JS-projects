let AllImg = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
];

const LeftButtons = document.getElementById("Left");
const RightButtons = document.getElementById("Right");
const sliderImage = document.getElementById("sliderImage");
let count = 0;

RightButtons.addEventListener("click", () => {
  count++;
  if (count >= AllImg.length) {
    count = 0;
    sliderImage.src = AllImg[count];
  } else {
    sliderImage.src = AllImg[count];
  }
});

LeftButtons.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = AllImg.length - 1;
    sliderImage.src = AllImg[count];
  } else {
    sliderImage.src = AllImg[count];
  }
});
