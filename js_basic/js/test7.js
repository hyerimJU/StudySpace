/*
    <예외처리>

    <전개표현식>

    <정규표현식>

    <리터럴>

    <사용자와 상호작용>
    - prompt('hello')
    - confirm('hello')
    - slert('hello')

    <구조분해할당>

    <동기와 비동기>
    - Promise
        : pending(대기상태) - resolve(해결) - fulfilled(성공)
        : pending(대기상태) - reject(거부) - rejected(실패)

    <DOM>
    - 요소 접근
        // 해당하는 ID를 가진 요소에 접근하기
        document.getElementById() (많이 씀)
        // 해당하는 모든 요소에 접근하기
        document.getElementsByTagName();
        //해당하는 클래스를 가진 모든 요소에 접근하기
        document.getElementByClassName();
        // css 선택자로 단일 요소에 접근하기 (많이 씀)
        document.querySelector("selector");
        // css 선택자로 여러 요소에 접근하기
        document.querySelectorAll("selector");
        // target 요소 생성하기
        document.createElement(target);
        // target 텍스트 생성하기
        document.createTextNode(target);
        // target 요소를 element의 자식으로 위치하기
        element.appendChild(target);
        // element의 target 자식 요소 제거하기
        element.removeChild(target);
*/

const cont = document.querySelector(".cont");
// 첫번째 자식 찾기
console.log(cont.firstElementChild);
// 마지막 자식 찾기
console.log(cont.lastElementChild);
// 다음 형제 요소 찾기
console.log(cont.nextElementSibling);
// 이전 형제노드 찾기
console.log(cont.previousSibling);
// 모든 직계자식 찾기
console.log(cont.children);
// 부모요소 찾기
console.log(cont.parentElement);