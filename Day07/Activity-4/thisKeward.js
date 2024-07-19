//Activity-4: The this Keyward
Task-7
let book = {
    title: "Steal like an artist",
    auther: "Austin Kelon",
    year: 2023,
    print(){
        return this.title+ " " + this.year;
    }
};
console.log(book.print());