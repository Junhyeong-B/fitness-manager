// 체중 감량 창
const diet1 = document.querySelector(".diet1");
const lose = document.querySelector(".lose");

diet1.addEventListener("click", () => {
    // display = none 일 때, 1ms 뒤에 active 활성화하여 transform 효과 추가
    if (lose.classList.contains("hidden")) {
        lose.classList.remove("hidden");
        setTimeout(() => {
            lose.classList.add("active");
        }, 1);
    }

    // display = flex 일 때, 400ms(transition 시간) 뒤에 hidden 활성화하여 transform 효과 추가
    else {
        lose.classList.remove("active");
        setTimeout(() => {
            lose.classList.add("hidden");
        }, 400);
    }
})


// 체중 증량 창
const diet2 = document.querySelector(".diet2");
const gain = document.querySelector(".gain");

diet2.addEventListener("click", () => {
    if (gain.classList.contains("hidden")) {
        gain.classList.remove("hidden");
        setTimeout(() => {
            gain.classList.add("active");
        }, 1);
    }

    else {
        gain.classList.remove("active");
        setTimeout(() => {
            gain.classList.add("hidden");
        }, 400);
    }
})

// Drag & Drop
const musclePng = document.querySelector(".musclePng");
const dietPng = document.querySelector(".dietPng");
const healthPng = document.querySelector(".healthPng");
const muscleIcon = document.querySelector(".muscleIcon");
const dietIcon = document.querySelector(".dietIcon");
const healthIcon = document.querySelector(".healthIcon");
const dragImg = document.querySelector(".dragImg");
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
        }
        else {
            healthIcon.className = "healthIcon"
            dragImg.append(healthIcon);
        }
        this.append(muscleIcon);
    }
    else if (cnt === 2) {
        dietIcon.classList.add("centerDiv");
        if (muscleIcon.classList.contains("centerDiv")) {
            muscleIcon.className = "muscleIcon"
            dragImg.append(muscleIcon);
        }
        else {
            healthIcon.className = "healthIcon"
            dragImg.append(healthIcon);
        }
        this.append(dietIcon);
    }
    else if (cnt === 3) {
        healthIcon.classList.add("centerDiv");
        if (muscleIcon.classList.contains("centerDiv")) {
            muscleIcon.className = "muscleIcon"
            dragImg.append(muscleIcon);
        }
        else {
            dietIcon.className = "dietIcon"
            dragImg.append(dietIcon);
        }
        this.append(healthIcon);
    }
}