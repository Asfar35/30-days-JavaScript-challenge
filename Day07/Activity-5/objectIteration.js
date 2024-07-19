//1ctivity-3:Object iteration
const mySym = Symbol();
const obj = {
    name: "Asfar",
    location: "Westbengal",
    [mySym]: "Symbol!"
}
//Task-8
//console.log(obj[mySym]);
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
const symbol1 = Object.getOwnPropertySymbols(obj);
for (let sym of symbol1) {
    // console.log(`${String(sym)}: ${obj[sym]}`);
    console.log("String(sym)" + ": " + obj[sym]);
}
//Task-9
/*const keys = Object.keys(obj);
const values = Object.values(obj);
keys.forEach((key,idx)=>{
    console.log(`${key}: ${values[idx]}`);
});*/

Object.keys(obj).forEach(key => {
    console.log(`${key}: ${obj[key]}`);
});
const symbols = Object.getOwnPropertySymbols(obj);
symbols.forEach(sym=>{
    console.log(`$String(sym)} : ${obj[sym]}`);
});

// Object.getOwnPropertySymbols(obj).forEach(sym => {
//     console.log(`${String(sym)}: ${obj[sym]}`);
// });