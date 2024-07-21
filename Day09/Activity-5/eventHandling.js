//Activity-1:Event Handling
//Task-09
const change = document.querySelector('#change');

change.addEventListener('click', function() {
    change.innerHTML = "I Love Javascript";
});


// Task 10
const magic = document.querySelector("#magic");

magic.addEventListener('mouseover', function() {
    magic.style.border = '1px solid red';
});