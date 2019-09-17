function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    // console.log(i) works only if i is var
}
sayHello()

//var scoped to function 
//let scoped to block
//const is like let but its readonly

const person = {
    name: "siva",
    talk() {
        setTimeout(() => {
            console.log(this)
        }, 1000);
    },
    walk() {
        console.log(this)
    },

}
person.talk()
person.walk()
const target = person.walk.bind(person) //bind attaches person object to target object
target()

const square = function (number) {
    console.log(number * number)
    return number * number
};

const squares = (number) => number * number

square(5)
console.log(squares(10))