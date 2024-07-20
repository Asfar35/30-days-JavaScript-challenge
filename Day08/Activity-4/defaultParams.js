//Activity-4: Deafult Parameters
//Task-7
const mul = (x, y = 1) => x * y;
console.log("Expected Multiplication= ", mul(3, 5));
console.log("Expected Multiplication= ", mul(3));