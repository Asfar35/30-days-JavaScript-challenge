//Activity:3
//Task:4
let day = 5;
if (day > 7 || day < 1) {
    console.log("Please enter a correct day number.Number should be greater than 1 and lesser equals to 7.")
}
else {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Sunday");
    }
}

//Task:5
let score=69;
if(score>100 || score<0 || typeof score !== 'number'){
    console.log("Please enter a valid score.");
}
else{
    switch (true) {
        case score>=90:
            console.log("Grade: A");
            break;
        case score>=80:
            console.log("Grade: B");
            break;
        case score>=70:
            console.log("Grade: C");
            break;
        case score>=60:
            console.log("Grade: D");
            break;
        default:
            console.log("Grade: F");
    }
}