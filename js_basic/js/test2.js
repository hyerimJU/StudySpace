/*
    <변수의 형태>
    - 원시타입
        : number, string, boolean(true,false), null, undefined, symbol(변경 불가능한 유일한 값)
        : 하나의 값만 가짐
    - 참조타입 : object(object, array, map, set), function
    - Number(숫자)
        : 형태 -> 10, 10.123, -10
        : 호출 -> 변수명
        : 메서드
        : Number()
        : parselnt() -> Number()보다 권고
        : Math -> Math.max(), Math.min(), Math.floor(), Math.round(), Math.random(), Math.abs(), Math.sprt(), Math.max(), Math.max()
        : NaN
        : Infinity, -Infinity
    - String(문자열)
        : 형태 -> 'abcde', "abcde", `abcde`, `abcde$(변수명)`
        : 호출 -> 변수명, 변수명[0]
        : 메서드 -> str.length, str.idnexOf(), str.lastIndexOf(), str.includes(), str.slice(), str.splice(), str.split(), str.substring(), str.substr(), str.toLowerCase(), str.toUpeerCase(), str.trim(), str.replace(), str.concat(), str.repeat()
    - Boolean(논리값)
        : 형태 -> true, false
        : 호출 -> 변수명
        : 어떤 것이 true이고 어떤 것이 false인지 판단할 수 있어야 함
    - undefine (undefind)
        : 형태 -> let a, console.log(a)
    - null (object)
        : 형태 -> let a = null
    - Array(배열) (object)
        : 메서드 -> length, forEach, map, filter, push/ pop-mutable, slice - immutable, splice - mutable, reduce - immutable, join, indexOf, includes, find, concat, every, some, fill - mutable, shift - mutable, unshift - mutable, reverse - mutable, sort - mutable
    - Object(객체)
        : key와 value로 이루어짐
        : 메서드 -> Object.keys, Object.values, Object.entries
    - Map (object)
        : 메서드 -> set, get, has delete, size
        : object 메서드 보다 편함
    - Set (object)
        : 메서드 -> add, delete, has, size
        : 중복을 허락하지 않음
        : 합집합, 교집합, 차집합 가능

*/

console.log('------숫자------')
console.log(typeof NaN)
console.log(typeof Infinity)
console.log(typeof -Infinity)

console.log('------문자열------')
let x = 'abcde'
let y = "abcde"
let z = `abcde`
console.log(x)
console.log(y)
console.log(z)

let name = 'hyerim'
let age = 10
console.log('제 이름은 ' + name + '이고, 나이는 ' + age + '살입니다.')
console.log(`제 이름은 ${name}이고, 나이는 ${age}살입니다.`)

console.log(name)
console.log(name[0])

console.log(name.length)
console.log(name.slice(2,))
console.log('hello world'.slice(3,))
console.log('hello world'.replace('hello', 'hi'))
// 정규식 표현
console.log('hello world, hello'.replace('hello', 'hi'))
console.log('hello world, hello'.replace(/hello/g, 'hi'))

console.log('------논리값------')
// 0을 제외한 숫자는 모두 true
let a = true
console.log(a)
console.log(!![])
console.log(!!{})
console.log(!!'')
console.log(!!'hello')
console.log(!!0)
console.log(!!-10)

console.log('------배열------')
let b = ['하나', '둘', '셋']
let c = [{'one': 1, 'two': 2}, {'one': 10, 'two': 20}]
let d = [[[1, 2], [10, 20], [100, 200]], [[3, 4], [30, 40], [300, 400]]]
console.log(b[0])
console.log(c[0])
console.log(c[1]['two'])
console.log(d[0])
console.log(d[1])
console.log(d[1][1])
console.log(d[1][1][1])

let e = [10, 20, 30, 40]
console.log(e.length)
console.log(e.forEach(e => console.log(e ** 2)))

console.log([1, 2, 3, 4, 5, 6, 7].filter(x => x > 4))
console.log([1, 2, 3, 4, 5, 6, 7].find(x => x > 4)) // id 찾을 때 주로 사용

console.log('------객체------')
let f = 1, g = 2, h = 3
let object = {f, g, h}
console.log(object)
console.log(object.f)
console.log(object['g'])

console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.entries(object))

console.log('------Map------')
let map = new Map()
map.set('one', 100)
map.set('two', 200)
map.set('three', 300)
map.set('four', [10, 20])
console.log(map.get('one'))
console.log(map.get('four'))
console.log(map.keys())
console.log(map.values())

console.log('------Set------')
let set = new Set('111112222233333')
console.log(set) // 게시자의 이름 집합을 구할 때 사용