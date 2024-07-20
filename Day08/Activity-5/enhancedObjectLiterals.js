//Activity-5: Enhanced Object Literals
//Task-8
const name = "Jonny";
const age = 20;
const person={
    name,
    age,
    greet(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}...`);
    },
    incrementAge(){
        this.age++;
        console.log(`Happy birthday to me!!! My current age is ${this.age}...`);
    }
};
console.log(person);
person.greet();
person.incrementAge();
console.log(person);

//Task-9
let prop = "first name";
let prop1 = "second name";
let prop2 = "age";

const person1 = {
    [prop] : "Jonny",
    [prop1] : "Mondal",
    [prop2] : 20
};
console.log(person1);