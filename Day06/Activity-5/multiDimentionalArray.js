//Activity-5: Multi-Dimensional Array
//Task-12
let row = 3, col = 3;
let matrix = [];
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
        matrix[i][j] = i + j;
    }
}
console.log("Matrix elements: ");
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        console.log(`${i+1}th row ${j+1}th column: ${matrix[i][j]}`);
    }
}
//Task-13
console.log("Value of 3rd row & 2nd columns:" + matrix[2][1]);