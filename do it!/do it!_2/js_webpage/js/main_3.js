const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복하며 클릭 이벤트 연결
for(let i=0; i<btns.length; i++){

    // 각 버튼을 클릭할 때마다
    btns[i].addEventListener("click", e=>{
        // 각 인수로 순섯값과 버튼, 박스 그룹을 넣어서 activation 함수 호출
        activation(i, btns); // 현재 클릭한 버튼의 순번을 전달
        activation(i, boxs); // 활성화할 그룹을 전달
    })
}
// 1번째 인수로 순서값, 2번째 인수로 그룹을 전달받아
function activation(index, list){
    // 인수로 받은 요소의 그룹 개수만큼 반복하여 비활성화
    for(let el of list){
        el.classList.remove("on");
    }
    // 1번째 인수로 받은 순서에 해당하는 그룹의 요소만 찾아서 활성화
    list[index].classList.add("on")
}

// 사용자 브라우저 판별하기
// 모든 브라우저에는 navigator라는 객체가 있는데
// 이 객체 안의 userAgent에는 브라우저의 정보값이 문자 형태로 저장되어 있다.
// 따라서 현재 작업하는 파일이 웹 브라우저로 출력되면 콘솔 창에는 그 브라우저의 정보를 출력할 수 있다.
const ver = navigator.userAgent;
console.log(ver);

// 익스플로러 브라우저에는 trident라는 정보값이 있음
const isIE = /trident/i.test(ver);
console.log(isIE);

if(isIE){
    alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.");
};