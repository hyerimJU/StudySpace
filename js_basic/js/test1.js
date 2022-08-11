document.getElementById('one').innerHTML = 'hi world'

console.log('hello world')

let x = 3
let y = 10

console.log('-------산술,할당--------')

console.log(x + y)
console.log(x - y)
console.log(x / y)
console.log(x * y)
console.log(y ** x) // 제곱
console.log(y % x) // 나머지
console.log(y % x == 0)

console.log(x += 3)
console.log(x += 3)
console.log(x += 3)
console.log(x += 3)

console.log(x /= 3)
console.log(x /= 3)

console.log('-------논리--------')

// and 연산자
console.log(true && true)
console.log(true && false) // 1 곱하기 0은 0 -> false

// or 연산자
console.log(true || true)
console.log(true || false)
console.log(false || false)

for (let z = 0; z < 100; z++) {
    if(
        z % 3 == 0 && z % 5 == 0){
            console.log(z)
        }
}
for (let z = 0; z < 100; z++) {
    if(
        z % 3 == 0 || z % 5 == 0){
            console.log(z)
        }
}

console.log(!true)
console.log(!false)
console.log(!!true)
console.log(!!false)
console.log(!!1)
console.log(!!'hello')
console.log(!!0)
console.log(!!'')

/*
    9의 10진수 -> 1 0 0 1
    5의 10진수 -> 0 1 0 1
    &은 1일 때만 1

    --> 0 0 0 1 --> 1
*/
console.log(9 & 5)
/*
    9의 10진수 -> 1 0 0 1
    5의 10진수 -> 0 1 0 1
    |은 하나면 1이면 1

    --> 1 1 0 1 --> 13
*/
console.log(9 | 5)

console.log('-------비교--------')
/*
    == : 같다
    != : 다르다
    === : 타입까지 같다
    !== : 타입까지 다르다
*/
console.log(x > y)
console.log(x >= y)
console.log(x < y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
console.log(x === y)
console.log(x !== y)

console.log('-------비교--------')

let a = 3
let b = '3'
console.log(a == b)
console.log(a != b)
console.log(a === b)
console.log(a !== b)

console.log('-------비교--------')

let c = 3
let d = 3
console.log(c == d)
console.log(c != d)
console.log(c === d)
console.log(c !== d)

console.log('-------typeof--------')

console.log(typeof 10)
console.log(typeof '10')
console.log('10' + '10')
console.log(10 + 10)

console.log('-------프로퍼티--------')

let e = {'one':1, 'two':2}

console.log(e.one)
console.log(e['two'])

console.log('-------관계--------')

console.log(10 in [10, 20, 30]) // []에서 키는 인덱스를 말함 -> 1, 2, 3
console.log(1 in [10, 20, 30])
// console.log('h' in 'hello') // error
console.log('name' in {'name':'hyerim', 'age':10}) // name,age는 키, hyerim,10은 value
console.log('length' in [10, 20, 30])

let f = [10, 20, 30]

console.log(f)