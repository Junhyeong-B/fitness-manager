// 메뉴 클릭 시 해당 메뉴 표시
const main__content = document.querySelector(".main__content");
const content__first = document.querySelector(".content__first");
const content__second = document.querySelector(".content__second");
const content__third = document.querySelector(".content__third");

const main2 = document.querySelector(".main2");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

main2.addEventListener("click", () => {
    content__first.classList.add("hidden");
    content__second.classList.add("hidden");
    content__third.classList.add("hidden");
    main__content.classList.remove("hidden")
});

first.addEventListener("click", () => {
    main__content.classList.add("hidden");
    content__second.classList.add("hidden");
    content__third.classList.add("hidden");
    content__first.classList.remove("hidden")
});

second.addEventListener("click", () => {
    main__content.classList.add("hidden");
    content__first.classList.add("hidden");
    content__third.classList.add("hidden");
    content__second.classList.remove("hidden")
});

third.addEventListener("click", () => {
    main__content.classList.add("hidden");
    content__first.classList.add("hidden");
    content__second.classList.add("hidden");
    content__third.classList.remove("hidden")
});