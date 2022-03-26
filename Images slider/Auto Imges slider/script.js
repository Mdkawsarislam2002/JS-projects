const allImages = [];
allImages[0] =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60";

allImages[1] =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60";

allImages[2] =
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";

allImages[3] =
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";

const imgBox = document.getElementById("imgBox");
const images = document.getElementById("images");

let i = 0;
function slider() {
  images.src = allImages[i];

  if (i < allImages.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("slider()", 2000);
}
window.onload = slider;
