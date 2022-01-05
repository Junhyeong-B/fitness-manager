const toggleBtn = document.querySelector('.main__toggleBtn');
const menu = document.querySelector('.toggle__links ul');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
