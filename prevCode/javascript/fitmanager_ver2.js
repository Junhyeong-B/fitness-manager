// Scroll 했을 때 header Tag에 Sticky Class 추가
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Burger Div 클릭 시 자식 태그에 Class 추가하여 Animation 추가
const burger = document.querySelector(".burger");
const navigation = document.querySelectorAll(".navigation li");

burger.addEventListener("click", () => {
    // 메뉴 나타나는 Burger 클릭 시 Burger는 X 버튼으로 바뀌며 사이드에서 메뉴 등장
    const line = document.querySelectorAll(".line");
    for (let x of line) {
        x.classList.toggle("active");
    }
    document.querySelector(".navigation").classList.toggle("active");

    // 메뉴 나타나는 Burger 클릭 시 조금 더 능동적으로 보이도록 배경 색 시간차 변경
    burger.classList.add("active");
    setTimeout(() => {
        burger.classList.remove("active");
    }, 100);
    
    // 사이드에서 메뉴 등장하면 일정 시간 후 순서대로 메뉴가 나타나게 하고,
    // X 클릭 시 사이드로 들어가는 동안 메뉴가 계속 보이도록 시간차 변경
    navigation.forEach((link, index) => {
        if (link.style.animation) {
            setTimeout(() => {
                link.style.animation = "";
            }, 500);
        }
        else {
            link.style.animation = `navLinkFade 500ms ease forwards ${index / 5 + 0.4}s`;
        }
    })
})