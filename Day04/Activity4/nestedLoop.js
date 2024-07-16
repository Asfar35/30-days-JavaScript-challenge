//Activity-4: Nested loop
//Task:7
let n = 5;
for (let i = 1; i <= n; i++) {
    let ans = "";
    for (let j = 0; j < i; j++) {
        ans += "* ";
    }
    console.log(ans);
}