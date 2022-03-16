let patientsItems = document.querySelector(".patients-items");
let menuDiv = document.querySelector(".menu");
let hamburgerIcon = document.querySelector(".menu-icon");
let container = document.querySelector(".container");
let logo = document.querySelector(".logo");

hamburgerIcon.addEventListener("click", () => {
  if (patientsItems.style.display == "none") {
    patientsItems.style.display = "block";
    logo.style.gridColumn = "1 / span 1";
  }

  // else if
  else if ((patientsItems.style.display = "block")) {
    patientsItems.style.display = "none";
    logo.style.gridColumn = "1 / span 1";
  }
});
