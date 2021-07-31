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
let cnt = 0;

const empties = document.querySelectorAll(".empty");
const dropPT = document.querySelector(".dropPT");
const plus = document.querySelector(".plus");


musclePng.addEventListener("dragstart", dragMuscleStart);
musclePng.addEventListener("dragend", dragMuscleEnd);

dietPng.addEventListener("dragstart", dragDietStart);
dietPng.addEventListener("dragend", dragDietEnd);

healthPng.addEventListener("dragstart", dragHealthStart);
healthPng.addEventListener("dragend", dragHealthEnd);


dropPT.addEventListener("dragover", dragOver);
dropPT.addEventListener("dragenter", dragEnter);
dropPT.addEventListener("dragleave", dragLeave);
dropPT.addEventListener("drop", dragDrop);


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
        empties[0].classList.add("centerDiv");
        this.append(empties[0]);
    }
    else if (cnt === 2) {
        empties[1].classList.add("centerDiv");
        this.append(empties[1]); 
    }
    else if (cnt === 3) {
        empties[2].classList.add("centerDiv");
        this.append(empties[2]);
    }
}