// Drag & Drop
const musclePng = document.querySelector(".musclePng");
const dietPng = document.querySelector(".dietPng");
const healthPng = document.querySelector(".healthPng");
const muscleIcon = document.querySelector(".muscleIcon");
const dietIcon = document.querySelector(".dietIcon");
const healthIcon = document.querySelector(".healthIcon");
const dragImg = document.querySelector(".dragImg");
const cont1 = document.querySelector(".cont1");
const cont2 = document.querySelector(".cont2");
const cont3 = document.querySelector(".cont3");
let cnt = 0;

const dropPT = document.querySelector(".dropPT");
const plus = document.querySelector(".plus");

// Icon마다 Class 지정하여 구분
musclePng.addEventListener("dragstart", dragMuscleStart);
musclePng.addEventListener("dragend", dragMuscleEnd);

dietPng.addEventListener("dragstart", dragDietStart);
dietPng.addEventListener("dragend", dragDietEnd);

healthPng.addEventListener("dragstart", dragHealthStart);
healthPng.addEventListener("dragend", dragHealthEnd);

// 해당 위치에 Drop 시 이벤트 진행
dropPT.addEventListener("dragover", dragOver);
dropPT.addEventListener("dragenter", dragEnter);
dropPT.addEventListener("dragleave", dragLeave);
dropPT.addEventListener("drop", dragDrop);

// cnt 변수를 이용해 변수 구분
function dragMuscleStart() {
    cnt = 1;
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}
function dragDietStart() {
    cnt = 2;
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}
function dragHealthStart() {
    cnt = 3;
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}

function dragMuscleEnd() {
    this.className = "musclePng"
}
function dragDietEnd() {
    this.className = "dietPng"
}
function dragHealthEnd() {
    this.className = "healthPng"
}

// dropPT에 Drag & Drop 시 함수
function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    setTimeout(() => this.className += " hoverd", 0);
}

function dragLeave() {
    this.className = "dropPT"
}

function dragDrop() {
    this.className = "dropPt"
    plus.style.display="none";
    if (cnt === 1) {
        muscleIcon.classList.add("centerDiv");
        if (dietIcon.classList.contains("centerDiv")) {
            dietIcon.className = "dietIcon"
            dragImg.append(dietIcon);
            cont2.classList.add("invisible")
        }
        else if (healthIcon.classList.contains("centerDiv")) {
            healthIcon.className = "healthIcon"
            dragImg.append(healthIcon);
            cont3.classList.add("invisible")
        }
        this.append(muscleIcon);
        cont1.classList.remove("invisible");
        cont1.style.animation = `fadeInAnimation 500ms ease forwards`;
    }
    else if (cnt === 2) {
        dietIcon.classList.add("centerDiv");
        if (muscleIcon.classList.contains("centerDiv")) {
            muscleIcon.className = "muscleIcon"
            dragImg.append(muscleIcon);
            cont1.classList.add("invisible")
        }
        else if (healthIcon.classList.contains("centerDiv")) {
            healthIcon.className = "healthIcon"
            dragImg.append(healthIcon);
            cont3.classList.add("invisible")
        }
        this.append(dietIcon);
        cont2.classList.remove("invisible");
        cont2.style.animation = `fadeInAnimation 500ms ease forwards`;
    }
    else if (cnt === 3) {
        healthIcon.classList.add("centerDiv");
        if (muscleIcon.classList.contains("centerDiv")) {
            muscleIcon.className = "muscleIcon"
            dragImg.append(muscleIcon);
            cont1.classList.add("invisible");
        }
        else if (dietIcon.classList.contains("centerDiv")) {
            dietIcon.className = "dietIcon"
            dragImg.append(dietIcon);
            cont2.classList.add("invisible")
        }
        this.append(healthIcon);
        cont3.classList.remove("invisible");
        cont3.style.animation = `fadeInAnimation 500ms ease forwards`;
    }
}

// Icon Drag & Drop 했을 때 정보 나타나기

if (flag === 1) {
    cont1.classList.remove("invisible");
}