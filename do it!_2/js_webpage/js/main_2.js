// html 요소의 스타일 제어하기
const box = document.querySelector("#box");

box.style.width = "10%";
box.style.height = "300px";
box.style.backgroundColor = "hotpink";
box.style.border = "none";
box.style.transform = "rotate(10deg)";

// html 요소에 클릭 이벤트 연결하기
const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("링크를 클릭했습니다.") // 이벤트가 발생할 때 응답해서 실행할 동작
})
// 요소명.addEventListener("이벤트명", (전달될 값)=>{실행할 구문})
// preventDefault() 문: 이벤트의 기본 기능을 실행하지 말라는 명령어
// "click" 이벤트명 다음의 빈 괄호에 e를 넣고 e.preventDefault() 문을 추가

// html 요소에 마우스 이벤트 연결하기
const box2 = document.querySelector(".box");

box2.addEventListener("mouseenter", ()=>{
    box2.style.backgroundColor = "hotpink";
});
box2.addEventListener("mouseleave", ()=>{
    box2.style.backgroundColor = "yellowgreen";
});

// 반복되는 요소에 이벤트 한꺼번에 연결하기
const list = document.querySelectorAll(".list li");

for(let el of list){
    el.addEventListener("click", e=>{ // e: 전달값이 하나면 괄호 생략 가능
        e.preventDefault();
        console.log(e.currentTarget.innerText); // innerText: 선택한 요소의 텍스트를 불러옴
    });
}

// 클릭 이벤트가 발생할 때 숫자를 증가, 감소하기
const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0; // 제어할 숫자값을 0으로 초기화

btnPlus.addEventListener("click", e=>{
    e.preventDefault();
    num++;
    console.log(num);
});
btnMinus.addEventListener("click", e=>{
    e.preventDefault();
    num--;
    console.log(num);
});

// 문자에 변수 삽입하기
// 문자를 백틱(`)으로 감싸주고, 문자 안에서 ${변수}로 묶어 주면 문자의 변숫값 유지 가능
const myName = "홍길동";
console.log(`내 이름은 ${myName}입니다.`);

// 클릭하면 좌,우로 회전하는 박스 만들기
const rotate = document.querySelector(".rotate");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const deg = 45;
let num2 = 0;

btnLeft.addEventListener("click", e=>{
    e.preventDefault();
    num2--;
    console.log(num2);
    rotate.style.transform = `rotate(${num2 * deg}deg)`;
})

btnRight.addEventListener("click", e=>{
    e.preventDefault();
    num2++;
    console.log(num2);
    rotate.style.transform = `rotate(${num2 * deg}deg)`;
})