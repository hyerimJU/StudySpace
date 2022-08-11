/*
    <조건문>
    => if, else if, else, switch
*/

console.log('-------if-------')
let x = 2
if(false){
    console.log('hello 1')
}
if(false){
    console.log('hello 2')
}
if(10 % x == 0){
    console.log('hello 3')
}
if(true){
    console.log('hello 4')
}

console.log('-------else if, else-------')
if(false) {
    console.log('hello 1')
}
else if(false) {
    console.log('hello 2')
}
else if(true) {
    console.log('hello 3')
}
else if(true) {
    console.log('hello 4')
}
else {
    console.log('!!')
}

let result = true ? 1 : 100; // true이면 1을 result에게 주겠다
console.log(result) 

console.log('-------switch-------')
let day
switch (new Date().getDay()) {
    case 0:
        day = "일";
        break;
    case 1:
        day = "월";
        break;
    case 2:
        day = "화";
        break;
    case 3:
        day = "수";
        break;
    case 4:
        day = "목";
        break;
    case 5:
        day = "금";
        break;
    case 6:
        day = "토";
        break;
}
console.log(day)