const hamburger = document.getElementById("hamburger");
const cancel = document.getElementById("cancel");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  sidebar.style.left = "0";
});

cancel.addEventListener("click", () => {
  console.log("canceled");
  sidebar.style.left = "-100vw";
});
