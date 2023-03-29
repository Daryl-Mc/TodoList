let textField = document.getElementById("txtField");
let addTodo = document.getElementById("addTodo");
const outputField = document.getElementById("output");

addTodo.addEventListener("click", function() {
    console.log("Function Ran")
    let p = document.createElement("p");
    p.innerHTML = textField.value;
    console.log("added ptag");
    outputField.appendChild(p);
    textField.value = "" ;
});
