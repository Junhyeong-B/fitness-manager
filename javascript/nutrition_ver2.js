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
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}


function dragStart() {
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}

function dragEnd() {
    this.className = "fill"
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hoverd";
}

function dragLeave() {
    this.className = "empty"
}

function dragDrop() {
    this.className = "empty"
    this.append(fill);
}