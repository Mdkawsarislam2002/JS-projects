let productImg = document.querySelectorAll(".product-img");
let productImg2 = document.getElementsByClassName("product-img");
let clickImg = document.querySelector("#clickImg");
let iconSpan = document.querySelectorAll("#iconSpan");
let cross = document.querySelectorAll("#cross");
let clickDiv = document.querySelector(".clickDiv");

{
  console.log(cross);
  console.log(clickDiv);
  console.log(clickImg.src);
  console.log(productImg);
  console.log(productImg2);
}

//  events
function popUp(pic) {
  clickDiv.style.display = "flex";
  clickImg.src = pic;

  console.log("clicked");
  console.log(pic);
}
function removeCross() {
  clickDiv.style.display = "none";
  console.log("cross clicked ");
}
