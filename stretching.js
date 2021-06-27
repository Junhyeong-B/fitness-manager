const openModal = document.querySelector(".first__img")
const closeModal = document.getElementById("close__modal");

openModal.addEventListener("click", () => {
    document.querySelector(".modal__first").classList.add("active");
});

closeModal.addEventListener("click", () => {
    document.querySelector(".modal__first").classList.remove("active");
});
