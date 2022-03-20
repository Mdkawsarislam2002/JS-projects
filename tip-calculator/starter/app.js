const totalBill = document.getElementById("totalBill");
const tipInput = document.getElementById("tipInput");
const results = document.getElementById("results");
const tipAmount = document.getElementById("tipAmount");
const totalBillWithTip = document.getElementById("totalBillWithTip");
const tipOutput = document.getElementById("tipOutput");
const tipForm = document.getElementById("tip-form");

tipForm.addEventListener("change", () => {
  results.style.display = "block";
  let totalBillInput = (tipOutput.innerText = tipInput.value);
  let totalTipAmount = (tipAmount.value =
    (totalBill.value * tipInput.value) / 100);
  totalBillWithTip.value = totalTipAmount + totalBillInput;
});

// totalBill.addEventListener("input", () => {
//   let totalBillInput = (tipOutput.innerText = tipInput.value);
//   let totalTipAmount = (tipAmount.value =
//     (totalBill.value * tipInput.value) / 100);
//   totalBillWithTip.value = totalTipAmount + totalBillInput;
// });
