//Activity 4: Higher-Order Function
//Task:10
function valRes(val, res) {
    const value = val();
    return "Your result is " + res(value);
}
const getVal = () => 30;
const calRes = (val) => (val * 2);
console.log(valRes(getVal, calRes)); 