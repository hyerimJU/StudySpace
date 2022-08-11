/*
    <함수>
    - 파선아실 - 파라미터(매개변수)는 선언할때, 아규먼트(전달인자)는 실제 사용하는 값
    - 사용이유 -> 재사용성, 아키텍처 파악, 유지보수
    - 함수 표현식과 함수 선언식
    - 콜백함수
*/

console.log('함수 선언식')
// 호이스팅 O
console.log(add(7, 9))
function add(x, y){
    return x + y;
}
console.log(add(3, 5))

console.log('함수 표현식')
// 호이스팅 X (호이스팅은 일어나지만 일시적인 사각지대에 빠지기 때문에 에러가 난다)
// console.log(add2(7, 9)) // error
let add2 = function(x, y){
    return x + y
}
console.log(add2(3, 5))

function add3(a = 100, b = 200){
    console.log(a, b);
    return a + b;
}
console.log(add3(10, 20))
console.log(add3()) // defalut 값