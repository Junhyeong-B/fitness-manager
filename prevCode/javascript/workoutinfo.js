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
}

toggleBtn.addEventListener('click', toggle);

const angleDown = document.querySelector('.workout__angledown');
const angleUp = document.querySelector('.workout__angleup');

function angle() {
    angleDown.classList.toggle('active');
    angleUp.classList.toggle('active');
    toggleMenu.classList.toggle('active');
}

angleDown.addEventListener('click', angle);
angleUp.addEventListener('click', angle);

// 776 px 미만일 때 운동정보 사이즈 조절
const videoSize = document.querySelectorAll('iframe');
const modalSize = document.querySelectorAll('ol');
const benchSize = document.querySelector('.bench__Modal');
const deadSize = document.querySelector('.dead__Modal');
const squatSize = document.querySelector('.squat__Modal');

const mediaQuery = window.matchMedia("(max-width: 776px)");

function mediaHandle(media) {
    if (media.matches) {
        for (let i = 0 ; i < videoSize.length ; i++) {
            videoSize[i].style.width = "85%";
            modalSize[i].style.width = "85%";
        }
        benchSize.style.width = "90%";
        deadSize.style.width = "90%";
        squatSize.style.width = "90%";
    }
    else {
        for (let i = 0 ; i < videoSize.length ; i++) {
            videoSize[i].style.width = "600px";
            modalSize[i].style.width = "550px";
        }
        benchSize.style.width = "630px";
        deadSize.style.width = "630px";
        squatSize.style.width = "630px";
    }
}

mediaQuery.addListener(mediaHandle);
mediaHandle(mediaQuery);

// 해당 운동으로 들어가면 Title 변경
const titleCh = document.querySelector("title");
const thisPage = document.querySelector(".thisPage");

function titleChange() {
    titleCh.innerText = thisPage.innerText;
}

thisPage.addEventListener('click', titleChange);
