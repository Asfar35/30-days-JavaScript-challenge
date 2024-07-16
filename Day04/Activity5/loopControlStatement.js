//Activity-5: Loop control statements
//Task:8
console.log("Print 1 to 10 && skip 5:");
for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

//Task:9
console.log("Print 1 to 10 && stop when the number is 7:");
for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
}