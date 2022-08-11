const startButton = document.querySelector(".start_btn") // 클릭부분
const result = document.querySelector(".result") // 결과
const modal = document.querySelector("#modal") // 모달창
const openButton = document.querySelector(".modal_btn") // 결과-훈련하러가기버튼
const closeButton = document.querySelector(".close_btn") // 모달창-진짜훈련하러가기버튼
const shareButton = document.querySelector(".share_btn") // 결과-공유하기
const loading = document.querySelector(".result_loading") // 로딩(시계)

// 'click'했을 때의 함수

function calculator(){
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if(timeValue_int > 24){ // 하루는 24시간이기 때문
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function(){
        loading.style.display = 'none';
        result.style.display = 'flex';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10); // 소수점을 뺀 나눔값을 10진수로 나타냄
    }, 1800); // 1.8초 뒤에 실행됨
}
function openModal(){
    modal.style.display = 'flex';
}
function closeModal(){
    modal.style.display = 'none';
}
// 바깥을 클릭해도 모달창이 닫히게
window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}
function copyUrl(){
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}

shareButton.addEventListener('click',copyUrl);
openButton.addEventListener('click',openModal);
closeButton.addEventListener('click',closeModal);
startButton.addEventListener('click',calculator);