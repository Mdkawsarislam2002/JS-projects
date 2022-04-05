// user input
const addInputBtn = document.getElementById("addInput");
const Username = document.getElementById("name");
const email = document.getElementById("email");
const contactNumber = document.getElementById("contactNumber");

// output area
const user = document.getElementById("user");
let increment = 1;

const userDataFunctions = () => {
  if (!Username.value || !email.value || !contactNumber.value) {
    alert("Enter your All Details Please ");
  } else {
    increment++;
    const newUser = document.createElement("div");
    newUser.classList.add("user-items");
    user.appendChild(newUser);

    newUser.innerHTML = `
          <ul class="data-table">
          <li>${increment}</li>
          <li>${Username.value}</li>
          <li>${email.value}</</li>
          <li>${contactNumber.value}</</li>
        </ul>`;
    Username.value = "";
    email.value = "";
    contactNumber.value = "";
  }
};
addInputBtn.addEventListener("click", userDataFunctions);
