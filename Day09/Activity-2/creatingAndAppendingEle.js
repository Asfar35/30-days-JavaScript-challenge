//Activity-2: Creating and Appending Elements
//Task-03
const d1 = document.createElement("div");
document.body.appendChild(d1);
d1.innerText = "Hello jiii...";

//Task-04
const ul1 = document.querySelector("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
li1.textContent = "Gopal";
li2.textContent = "Das";
ul1.append(li1, li2);