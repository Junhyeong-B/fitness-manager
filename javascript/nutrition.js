// 체중 감량 창
const diet1 = document.querySelector(".diet1");
const lose = document.querySelector(".lose");

diet1.addEventListener("click", () => {
    lose.classList.toggle("active");
})

// 체중 증량 창
const diet2 = document.querySelector(".diet2");
const gain = document.querySelector(".gain");

diet2.addEventListener("click", () => {
    gain.classList.toggle("active");
})
