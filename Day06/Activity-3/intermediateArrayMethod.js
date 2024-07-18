//Activity-3:Array Methods(intermediate)
let nums = [1, 3, 5, 4, 2];
console.log("Original array: " + nums);
//Task-07
const newArr = nums.map((val) => (val * 2));
console.log("modified array: " + newArr);
//Task-08
const newArr1 = nums.filter((val) => (val % 2 == 0));
console.log("modified array: " + newArr1);
//Task-09
const sumArr = nums.reduce((res, val) => res + val);
console.log("Summation of the array nums: " + sumArr);

/*const initialVal=0;
const total=nums.reduce((accumulator,currVal)=>accumulator+currVal,initialVal);
console.log("Summation of the array nums: " + total);*/