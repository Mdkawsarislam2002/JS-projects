const wrapper = document.querySelectorAll(".wrapper");
const questions = document.querySelectorAll(".questions ");
const answer = document.querySelectorAll(".answer ");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    answer[i].classList.toggle("active");
  });
}
