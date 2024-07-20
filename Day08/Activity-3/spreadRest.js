//Activity-3: Spread and Rest Operator
//Task-5
let arr = [4, 6, 10, 18, 19, 50, 100, 500, 700, 900, 1000];
let newArr = [...arr, 8, 3, 5];
console.log(newArr);

//Task-6
function sum(...elements) {
    return elements.reduce((acc, curr) => acc + curr, 0);
}
// console.log("Sum= "+ sum());
console.log("Sum1= " + sum(1));
console.log("Sum2= " + sum(1, 2, 3, 45));