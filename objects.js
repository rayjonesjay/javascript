
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

const john = new Person('John Doe', 30);
john.greet(); // Hello, John Doe


const person = { name: 'John Doe', age: 30 };
Object.seal(person);

person.age = 31; // This will not be applied
console.log(person.age); // 30
delete person.name
console.log(person.name)