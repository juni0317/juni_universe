const textElement = document.getElementById('title');
const textElement2 = document.getElementById('support');
const textElement3 = document.getElementById('live');
const text = textElement.innerText;
textElement.innerHTML = ''; // 초기화
let isGreen = false;
let isBlue = false;

// 글자를 하나씩 추가하는 함수
function animateText() {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            textElement.innerHTML += text[i];
        }, i * 100); // 각 글자마다 1초 간격
    }

    // 모든 글자가 추가된 후 위아래로 움직이기 시작
    setTimeout(() => {
        moveText();
    }, text.length * 10); // 모든 글자가 추가된 후 호출
}

// 텍스트를 위아래로 움직이는 함수
function moveText() {
    setInterval(() => {
        textElement.style.transform = 'translateY(-10px)'; // 위로 올라가는 효과
        setTimeout(() => {
            textElement.style.transform = 'translateY(10px)'; // 아래로 내려가는 효과
        }, 500); // 0.5초 후
        setTimeout(() => {
            textElement.style.transform = 'translateY(0)'; // 원래 위치로 돌아오는 효과
        }, 1000); // 1초 후
    }, 2000); // 2초 간격으로 반복
}

function changeColor() {
    if (isGreen) {
        textElement2.style.color = 'white'; // 흰색
    } else {
        textElement2.style.color = 'lightgreen'; // 초록색
    }
    isGreen = !isGreen; // 상태 반전
}

function changeColor2() {
    if (isBlue) {
        textElement3.style.color = 'white'; // 흰색
    } else {
        textElement3.style.color = 'lightblue'; // 파란색
    }
    isBlue = !isBlue; // 상태 반전
}

function startColorAnimation() {
    setInterval(changeColor, 500); // 0.5초 간격으로 색상 변경
    setInterval(changeColor2, 1000); // 1초 간격으로 색상 변경
}

animateText(); // 애니메이션 시작
startColorAnimation();

