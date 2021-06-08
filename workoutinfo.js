// 벤치프레스 모달 창
const benchModal = document.querySelector('.bench__Open');
const benchOpen = document.querySelector('.modal__Bench');
const benchModal2 = document.querySelector('.close__Modal');
const benchAni = document.querySelector('.bench__Modal');
function openModal() {
    benchOpen.style.visibility = 'visible';
    benchAni.style.transform = 'scale(1)';
}

function closeModal() {
    benchOpen.style.visibility = 'hidden';
    benchAni.style.transform = 'scale(0)';
}

benchModal.addEventListener('click', openModal);
benchModal2.addEventListener('click', closeModal);