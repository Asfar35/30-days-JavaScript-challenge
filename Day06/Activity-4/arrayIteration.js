//Activity-4:Array iteration
let nums = [1, 2, 3, 8, 7];

//Task-10
console.log("Access value by using for loop: ");
for (let num of nums) {
    console.log(num);
}

//Task-11
console.log("Access value by using forEach loop: ");
nums.forEach((val,idx)=>console.log(`index ${idx}: ${val}`));