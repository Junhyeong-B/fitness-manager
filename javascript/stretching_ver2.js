// // 첫 번째 모달 창
const openModal1 = document.querySelector(".first__content")
const closeModal1 = document.querySelector(".close__modal1");

openModal1.addEventListener("click", () => {
    document.querySelector(".modal__first").classList.add("active");
});

closeModal1.addEventListener("click", () => {
    document.querySelector(".modal__first").classList.remove("active");
});

// // 두 번째 모달 창
const openModal2 = document.querySelector(".second__content")
const closeModal2 = document.querySelector(".close__modal2");

openModal2.addEventListener("click", () => {
    document.querySelector(".modal__second").classList.add("active");
});

closeModal2.addEventListener("click", () => {
    document.querySelector(".modal__second").classList.remove("active");
});


// // 세 번째 모달 창
const openModal3 = document.querySelector(".third__content")
const closeModal3 = document.querySelector(".close__modal3");

openModal3.addEventListener("click", () => {
    document.querySelector(".modal__third").classList.add("active");
});

closeModal3.addEventListener("click", () => {
    document.querySelector(".modal__third").classList.remove("active");
});

// Button Click 시 해당 버튼에 해당하는 이미지 표시
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const slides = document.querySelectorAll(".slides");
const SHOWING_CLASS = "showing";

btn1.addEventListener("click", () => {
    if (btn1.classList[1] !== SHOWING_CLASS) {
        for (let x of slides) {
            x.classList.remove("showing2");
            x.classList.remove("showing3");
            x.classList.add("showing1");
        };

        btn2.classList.remove(SHOWING_CLASS);
        btn3.classList.remove(SHOWING_CLASS);
        btn1.classList.add(SHOWING_CLASS);
    }
});

btn2.addEventListener("click", () => {
    if (btn2.classList[1] !== SHOWING_CLASS) {
        for (let x of slides) {
            x.classList.remove("showing1");
            x.classList.remove("showing3");
            x.classList.add("showing2");
        };

        btn1.classList.remove(SHOWING_CLASS);
        btn3.classList.remove(SHOWING_CLASS);
        btn2.classList.add(SHOWING_CLASS);
    }
});

btn3.addEventListener("click", () => {
    if (btn3.classList[1] !== SHOWING_CLASS) {
        for (let x of slides) {
            x.classList.remove("showing1");
            x.classList.remove("showing2");
            x.classList.add("showing3");
        };

        btn1.classList.remove(SHOWING_CLASS);
        btn2.classList.remove(SHOWING_CLASS);
        btn3.classList.add(SHOWING_CLASS);
    }
});