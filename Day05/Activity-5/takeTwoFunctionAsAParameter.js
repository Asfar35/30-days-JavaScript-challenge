//Activity 5: Higher-Order Function
//Task:10
function valRes(val, res, a) {
    const value = val(a);
    return "Your result is " + res(value);
}
const addVal = (val) => (val + 2);
const getRes = (val) => val;
console.log(valRes(addVal, getRes, 1)); 
