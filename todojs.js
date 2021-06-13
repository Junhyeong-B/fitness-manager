// 당일 운동 계획 버튼
const workoutList = document.querySelector('.list');
const workoutBtn = document.querySelector('.list__btn');
const ulList = document.querySelector('ul__list');

function createList() {

    const listDiv = document.createElement('div');
    listDiv.classList.add('doList');

    const newList = document.createElement('li');
    newList.innerText = '입력 예제입니다.';
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