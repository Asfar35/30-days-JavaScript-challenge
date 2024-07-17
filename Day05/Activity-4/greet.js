//Activity 4: Function Parameters and Default values
//Task:08
const greet = (str, age = 20) => {
    return "Hello " + str + ".Your age is " + age;
}
let name1 = "Asfar";
console.log(greet(name1));