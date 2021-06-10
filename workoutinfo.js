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

// 776 px 미만일 때 토글
const toggleBtn = document.querySelector('.main__toggleBtn');
const mainMenu = document.querySelector('.main__links');
const toggleMenu = document.querySelector('.sidebar');

function toggle() {
    mainMenu.classList.toggle('active');
    toggleMenu.classList.toggle('active');
}

toggleBtn.addEventListener('click', toggle)

// 776 px 미만일 때 운동정보 사이즈 조절
// const benchVideo = document.querySelector('.workout__Bench');
// const deadVideo = document.querySelector('.workout__Dead');
// const squatVideo = document.querySelector('.workout__Squat');

// const benchSize = document.querySelector('.bench__Modal');
// const deadSize = document.querySelector('.dead__Modal');
// const squatSize = document.querySelector('.squat__Modal');

// const olModal = document.getElementsByTagName('ol');

// if (window.matchMedia("(max-width: 776px)").matches) {
//     benchVideo.style.width = "70%";
//     deadVideo.style.width = "70%";
//     squatVideo.style.width = "70%";
//     benchSize.style.width = "95%";
//     deadSize.style.width = "95%";
//     squatSize.style.width = "95%";
//     olModal.style.width = "90%";
// }

const videoSize = document.querySelectorAll('iframe');
const modalSize = document.querySelectorAll('ol');
const benchSize = document.querySelector('.bench__Modal');
const deadSize = document.querySelector('.dead__Modal');
const squatSize = document.querySelector('.squat__Modal');


if (window.matchMedia("(max-width: 776px)").matches) {
        for (let i = 0 ; i < videoSize.length ; i++) {
            videoSize[i].style.width = "85%";
            modalSize[i].style.width = "85%"
        }

    benchSize.style.width = "90%";
    deadSize.style.width = "90%";
    squatSize.style.width = "90%";
    }