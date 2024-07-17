//Activity 1:Function Declaration
//Task:01
function isEven(num) {
    if ((num & 1) == 0) return 1;
    else {
        return 0;
    }
}
let n = 0;
if (isEven(n)) {
    console.log(`${n} is an Even number.`);
}
else {
    console.log(`${n} is an Odd number.`);
}

