// 첫 번째 모달 창
const openModal1 = document.querySelector(".first__content")
const closeModal1 = document.querySelector(".close__modal1");

openModal1.addEventListener("click", () => {
    document.querySelector(".modal__first").classList.add("active");
});

closeModal1.addEventListener("click", () => {
    document.querySelector(".modal__first").classList.remove("active");
});

// 두 번째 모달 창
const openModal2 = document.querySelector(".second__content")
const closeModal2 = document.querySelector(".close__modal2");

openModal2.addEventListener("click", () => {
    document.querySelector(".modal__second").classList.add("active");
});

closeModal2.addEventListener("click", () => {
    document.querySelector(".modal__second").classList.remove("active");
});


// 세 번째 모달 창
const openModal3 = document.querySelector(".third__content")
const closeModal3 = document.querySelector(".close__modal3");

openModal3.addEventListener("click", () => {
    document.querySelector(".modal__third").classList.add("active");
});

closeModal3.addEventListener("click", () => {
    document.querySelector(".modal__third").classList.remove("active");
});
