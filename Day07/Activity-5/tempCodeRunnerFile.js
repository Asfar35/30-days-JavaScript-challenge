const symbols = Object.getOwnPropertySymbols(obj);
symbols.forEach(sym=>{
    console.log(`${string(sym)} : ${obj[sym]}`);
});