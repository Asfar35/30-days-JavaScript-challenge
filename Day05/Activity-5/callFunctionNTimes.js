//Activity 5: Higher-Order Function
//Task:09
function callFunctionNTimes(fun, n) {
    for (let i = 0; i < n; i++) {
        fun();
    }
}
const helloBolo = () => {
    console.log("Hello jiii!!!");
}
callFunctionNTimes(helloBolo, 3);
