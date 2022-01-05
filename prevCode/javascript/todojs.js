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
    setInterval(getTime, 5000);
}

init();

// Complete, Delete 기능
const completebtn = document.querySelector('.completed__btn');
const deletebtn = document.querySelector('.delete__btn');
const buttonI = document.getElementsByTagName('i');

ulList.addEventListener('click', checked);

function checked(e) {
    const item = e.target;

    if(item.classList[1] === 'fa-trash') {
        const list = item.parentElement.parentElement;
        list.classList.add("fall");
        list.addEventListener('transitionend', function(){
            list.remove();
        });
    }
    if(item.classList[0] === 'delete__btn') {
        const list = item.parentElement;
        list.classList.add("fall");
        list.addEventListener('transitionend', function(){
            list.remove();
        });
    }

    if(item.classList[1] === 'fa-check') {
        const list = item.parentElement.parentElement;
        list.classList.toggle('completed');
    }
    if(item.classList[0] === 'completed__btn') {
        const list = item.parentElement;
        list.classList.toggle('completed');
    }
}

// 필터링 By Select
const filterOption = document.querySelector('.filter__list');

function filterList(e) {
    const lists = ulList.childNodes;
    lists.forEach(function(option){
        switch(e.target.value){
            case "all":
                option.style.display = "flex";
                break;
            case "completed":
                if(option.classList.contains('completed')){
                    option.style.display = 'flex';
                }
                else{
                    option.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(option.classList.contains('completed')){
                    option.style.display = 'none';
                }
                else{
                    option.style.display = 'flex';
                }
                break;
        }
    })
}

filterOption.addEventListener('click', filterList);

// Radio 및 Select 선택 시 해당 내용 input text에 추가
const checkRadio = document.getElementsByName('chestwork');
const setSelect = document.getElementsByName('set');
const weiSelect = document.getElementsByName('wei'); 


function getWorkSelect(event) {
    if (event.target.value !== "not") {
        workoutList.value += event.target.value;
    }
}
//Radio
for (let i = 0 ; i < checkRadio.length; i++) {
    checkRadio[i].addEventListener('change', getWorkSelect) ; 
}
//Set 선택 Select
for (let i = 0 ; i < setSelect.length; i++) {
    setSelect[i].addEventListener('change', getWorkSelect) ; 
}
//무게 선택 Select
for (let i = 0 ; i < weiSelect.length; i++) {
    weiSelect[i].addEventListener('change', getWorkSelect) ; 
}

//Select 선택 시 해당되는 부위 운동 나타나게
const chestradio = document.querySelector(".chestRadio");
const backradio = document.querySelector(".backRadio");
const legradio = document.querySelector(".legRadio");
const shoulderradio = document.querySelector(".shoulderRadio");
const armradio = document.querySelector(".armRadio");
const worksel = document.getElementsByName("work");

function getMuscle(event) {
    switch (event.target.value) {
        case "chest":
            chestradio.style.display = "block";
            backradio.style.display = "none";
            legradio.style.display = "none";
            shoulderradio.style.display = "none";
            armradio.style.display = "none";
            break;
        case "back":
            chestradio.style.display = "none";
            backradio.style.display = "block";
            legradio.style.display = "none";
            shoulderradio.style.display = "none";
            armradio.style.display = "none";
            break;
        case "leg":
            chestradio.style.display = "none";
            backradio.style.display = "none";
            legradio.style.display = "block";
            shoulderradio.style.display = "none";
            armradio.style.display = "none";
            break;
        case "shoulder":
            chestradio.style.display = "none";
            backradio.style.display = "none";
            legradio.style.display = "none";
            shoulderradio.style.display = "block";
            armradio.style.display = "none";
            break;
        case "arm":
            chestradio.style.display = "none";
            backradio.style.display = "none";
            legradio.style.display = "none";
            shoulderradio.style.display = "none";
            armradio.style.display = "block";
            break;
        default:
            chestradio.style.display = "none";
            backradio.style.display = "none";
            legradio.style.display = "none";
            shoulderradio.style.display = "none";
            armradio.style.display = "none";
            break;                                                               
    }
};

for (let i = 0 ; i < worksel.length; i++) {
    worksel[i].addEventListener('change', getMuscle) ; 
};
