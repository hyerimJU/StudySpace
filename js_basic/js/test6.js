/*
    <클래스>
    - 클래스 -> 붕어빵 찍는 틀, 공장
    - 인스턴스 -> 붕어빵, 제품
*/

class Notice {
    constructor(title, contents, author){
        this.title = title
        this.contents = contents
        this.author = author
    }
    수정하기(title, contents, author){
        this.title = title
        this.contents = contents
        this.author = author
    }
}

class Human {
    attack(){
        console.log('공격!')
    }
    defense(){
        console.log('방어!')
    }
}
hyerim = new Human()
hyerim.attack()
hyerim.defense()

console.log('-----상속-----')
class special extends Human{
    마법(){
        console.log('명치찌르기!')
    }
}
꾸미 = new special()
꾸미.마법()
꾸미.attack()
꾸미.defense()