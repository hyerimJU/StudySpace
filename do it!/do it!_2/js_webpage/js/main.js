// const title = document.querySelector("#title");
// console.log(title);

// const frame = document.querySelector("#wrap"); // <body>에서 아이디가 wrap인 요소를 찾아 그 결과값을 frame이라는 변수에 저장한다.
// console.log(frame);
// const box1 = document.querySelector("#wrap .box1");
// console.log(box1);
// const items = document.querySelectorAll("#wrap article");
// console.log(items);
// for(let item of items) {
//     console.log(item);
// } // items에 담긴 article요소의 개수만큼 반복하면서 찾은 대상을 item에 저장하고, 코드 블록({}) 안의 구문을 반복하면서 item값을 출력한다.
// for(let i=0; i<items.length; i++) {
//     console.log(items[i]);
// }

const list = document.querySelector(".list");
const items2 = list.children;
console.log(items2);
console.log(items2[0]);
console.log(items2[1]);
console.log(items2[2]);
console.log(items2[3]);
const item2 = document.querySelector(".item2");
console.log(item2.parentElement);
const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);

// const li = document.querySelector("li");
// console.log(li.closest("main"));







// console 구문: 웹 브라우저의 개발자 도구에서 확인해야 한다.
// defer: 웹 브라우저의 js 해석기가 <body>를 해석하면서 동시에 외부 자바스크립트 파일을 가져온다.
// for of 문: for(let 반복하는 요소가 담긴 변수 of 반복시킬 그룹) {반복 실행할 구문}
// for 문: 반복되는 요소의 순서값을 코드 내부에서 활용하기에 효과적이다.
// for 문: for(let 반복하는 순서가 담길 변수; 반복할 횟수의 최댓값; 증감 연산자){반복 실행할 구문}
// parentElement 구문: 직계 부모만 선택할 수 있다.
