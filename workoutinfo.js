// 벤치프레스 모달 창
const benchModal = document.querySelector('.bench__Open');
const benchOpen = document.querySelector('.modal__Bench');
const benchModal2 = document.querySelector('.close__Bench');
const benchAni = document.querySelector('.bench__Modal');
function openModal__Bench() {
    benchOpen.style.visibility = 'visible';
    benchAni.style.transform = 'scale(1)';
}

function closeModal__Bench() {
    benchOpen.style.visibility = 'hidden';
    benchAni.style.transform = 'scale(0)';
}

benchModal.addEventListener('click', openModal__Bench);
benchModal2.addEventListener('click', closeModal__Bench);

// 데드리프트 모달 창
const deadModal = document.querySelector('.dead__Open');
const deadOpen = document.querySelector('.modal__Dead');
const deadModal2 = document.querySelector('.close__Dead');
const deadAni = document.querySelector('.dead__Modal');
function openModal__Dead() {
    deadOpen.style.visibility = 'visible';
    deadAni.style.transform = 'scale(1)';
}

function closeModal__Dead() {
    deadOpen.style.visibility = 'hidden';
    deadAni.style.transform = 'scale(0)';
}

deadModal.addEventListener('click', openModal__Dead);
deadModal2.addEventListener('click', closeModal__Dead);

// 스쿼트 모달 창
const squatModal = document.querySelector('.squat__Open');
const squatOpen = document.querySelector('.modal__Squat');
const squatModal2 = document.querySelector('.close__Squat');
const squatAni = document.querySelector('.squat__Modal');
function openModal__Squat() {
    squatOpen.style.visibility = 'visible';
    squatAni.style.transform = 'scale(1)';
}

function closeModal__Squat() {
    squatOpen.style.visibility = 'hidden';
    squatAni.style.transform = 'scale(0)';
}

squatModal.addEventListener('click', openModal__Squat);
squatModal2.addEventListener('click', closeModal__Squat);