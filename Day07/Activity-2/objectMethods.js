//Activity-1:Object Method
//Task-3
let obj = {
    "first name": "Sk ",
    last_name: "Asfar"
};
obj.greet = function () {
    console.log("Hello " + obj["first name"] + obj.last_name);
}
obj.greet();

//Task-4
let book = {
    title: "Steal like an artist",
    auther: "Austin Kelon",
    year: 2023,
    updateYear(year){
        this.year=year;
    }
};
book.updateYear(2024);
console.log("Updated year: "+book.year);