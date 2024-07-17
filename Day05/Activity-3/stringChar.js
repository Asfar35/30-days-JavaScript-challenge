//Activity 3: Arrow Function
//Task:06
const check = (str, ch) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) return true;
    } return false;
}
let str = "Asfar";
let ch = 'a';
if (check(str, ch)) {
    console.log(`${ch} is present in ${str}`);
}
else {
    console.log(`${ch} is not present in ${str}`);
}