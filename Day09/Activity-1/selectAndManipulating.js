//Activity-1:select and manipulating Element
//Task-01
const a = document.getElementById("title");
a.innerHTML = "Sandi Bhai";
//Task-2
const t2 = document.getElementsByClassName("main");
for (let i = 0; i < t2.length; i++) {
    t2[i].style.backgroundColor = '#212121';
}