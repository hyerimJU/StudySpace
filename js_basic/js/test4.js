/*
    <반복문>
    => for, for in, for of, while, do while, forEach, break, continue
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('-----')
for (let i = 0; i < 10; i = i + 2) {
    console.log(i)
}
console.log('-----구구단-----')
// 중첩하는 경우가 많이 있음
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i*j}`)
    }
}

let a = [10, 20, 30, 40];
for (let i of a) {
    console.log(i)
}
let b = 'hello';
for (let i of b) {
    console.log(i);
}
let c = {'one': 1, 'two': 2};
for (let i in c) {
    console.log(i)
}
for (let i in c) {
    console.log(i)
    console.log(c[i])
}

// break은 반복문을 탈출함
// continue는 다음 루프로 넘어감
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i)
}
for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i)
}