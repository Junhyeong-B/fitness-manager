const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");

for (let i = 0; i < answer.length; i++) {
    question[i].addEventListener("click", () => {
        answer[i].classList.toggle("hidden");
    });
}