
class Person {
    constructor(name,age){
        console.log(name);
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi i am ${this.name} and my age is ${this.age} !`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    getGreeting() {
        return `Hi i am ${this.name} and my age is ${this.age} and i am studying ${this.major} !`;
    }
}

const me = new Student('Aswin',18,'IT');
console.log(me.getGreeting());