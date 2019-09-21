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

const colors = ["red", "green", "blue"]
const item = colors.map((color) => {
    return "<li>" + color + "</li>"
})

console.log(item)

class Person {
    constructor(name) {
        this.name = name
    }
    walk() {
        console.log("walk")
    }
}

class Teacher extends Person {

    teach() {
        console.log("teach")
    }
}

const teached = new Teacher("siva")
console.log(teached)