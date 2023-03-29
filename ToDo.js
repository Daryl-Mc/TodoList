let textField = document.getElementById("txtField");
let addTodo = document.getElementById("addTodo");
const outputField = document.getElementById("output");

addTodo.addEventListener("click", function() {
    console.log("Function Ran")
    let p = document.createElement("p");
    let t = textField.value;
    console.log("added ptag");
    outputField.appendChild(p);
    p.innerHTML = t
});
