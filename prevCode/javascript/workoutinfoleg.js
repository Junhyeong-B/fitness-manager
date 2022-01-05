// 첫 번째 모달 창
const firstModal = document.querySelector('.first__Open');
const modal1Open = document.querySelector('.modal1');
const firstModal2 = document.querySelector('.close__first');
const firstAni = document.querySelector('.firstModal');
function openModal__first() {
    modal1Open.style.visibility = 'visible';
    firstAni.style.transform = 'scale(1)';
}

function closeModal__first() {
    modal1Open.style.visibility = 'hidden';
    firstAni.style.transform = 'scale(0)';
}

firstModal.addEventListener('click', openModal__first);
firstModal2.addEventListener('click', closeModal__first);

// 두 번째 모달 창
const secondModal = document.querySelector('.second__Open');
const modal2Open = document.querySelector('.modal2');
const secondModal2 = document.querySelector('.close__second');
const secondAni = document.querySelector('.secondModal');
function openModal__second() {
    modal2Open.style.visibility = 'visible';
    secondAni.style.transform = 'scale(1)';
}

function closeModal__second() {
    modal2Open.style.visibility = 'hidden';
    secondAni.style.transform = 'scale(0)';
}

secondModal.addEventListener('click', openModal__second);
secondModal2.addEventListener('click', closeModal__second);

// 세 번째 모달 창
const thirdModal = document.querySelector('.third__Open');
const modal3Open = document.querySelector('.modal3');
const thirdModal2 = document.querySelector('.close__third');
const thirdAni = document.querySelector('.thirdModal');
function openModal__third() {
    modal3Open.style.visibility = 'visible';
    thirdAni.style.transform = 'scale(1)';
}

function closeModal__third() {
    modal3Open.style.visibility = 'hidden';
    thirdAni.style.transform = 'scale(0)';
}

thirdModal.addEventListener('click', openModal__third);
thirdModal2.addEventListener('click', closeModal__third);

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
const benchSize = document.querySelector('.firstModal');
const deadSize = document.querySelector('.secondModal');
const squatSize = document.querySelector('.thirdModal');

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