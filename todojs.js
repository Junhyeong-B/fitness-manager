// 당일 운동 계획 버튼
const workoutList = document.querySelector('.list__input');
const workoutBtn = document.querySelector('.list__btn');
const ulList = document.querySelector('.ul__list');

function createList() {

    const listDiv = document.createElement('div');
    listDiv.classList.add('doList');

    const newList = document.createElement('li');
    newList.innerText = workoutList.value;
    newList.classList.add('list__workout');
    listDiv.appendChild(newList);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed__btn");
    listDiv.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete__btn");
    listDiv.appendChild(deleteBtn);

    ulList.appendChild(listDiv);
}

workoutBtn.addEventListener('click', createList);

// 현재 시간 표시
const timeDisplay = document.querySelector(".time");
const dayArray = ["일", "월", "화", '수', '목', '금', '토'];

function getTime() {
    const date = new Date();
    const today = date.toLocaleDateString();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const day = date.getDay();
    timeDisplay.innerHTML = `${today} <span>(${dayArray[day]})</span> <br>
        ${hours < 13 ? `오전 ${hours}` : `오후 ${hours - 12}` } : ${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 10000);
}

init();

// Complete, Delete 기능
const completebtn = document.querySelector('.completed__btn');
const deletebtn = document.querySelector('.delete__btn');


ulList.addEventListener('click', checked);

function checked(e) {
    const item = e.target;

    if(item.classList[0] === 'delete__btn') {
        const list = item.parentElement;
        list.classList.add("fall");
        list.addEventListener('transitionend', function(){
            list.remove();
        });
    }

    if(item.classList[0] === 'completed__btn') {
        const list = item.parentElement;
        list.classList.toggle('completed');
    }
}