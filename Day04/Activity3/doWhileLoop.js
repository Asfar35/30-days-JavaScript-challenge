//Activity-3: Do... while loop
//Task:5
console.log("Print 1 to 5:");
let i = 1, n = 5;
do {
    console.log(i);
    i++
} while (i <= n);

//Task:6
let j = 1, fact = 1, n1 = 5;
do {
    fact *= j;
    j++;
} while (j <= n1);
console.log(`${n1} factorial = ${fact}`);