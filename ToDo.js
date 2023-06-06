let textField = document.getElementById("txtField");
let addTodo = document.getElementById("addTodo");
const outputField = document.getElementById("output");

// Add Todo listener to "Add Todo" button
addTodo.addEventListener("click", function() {
    
    //Check if text field is empty
    if (textField.value == "") {
        return console.log("NO.")
    }   else {

        //Create new HTML Elements
        //console.log("Function Ran")
        let p = document.createElement("p"); //List Element
        let deleteBtn = document.createElement("button"); // Delete Button
        let timeStamp = document.createElement("span"); // Date Field

        // Get the system timestamp and convert it to readable text
        let sysTime = new Date();
        timeStamp.textContent = sysTime.toLocaleString();
        
        //Set the inner HTML of the ?ist Element to the text box content.
        p.innerHTML = textField.value;

        //Appended List element to the output div, and appended delete button and timestamp to the list element.
        outputField.appendChild(p);
        p.appendChild(deleteBtn);
        p.appendChild(timeStamp);

        // Configured delete button and reset the text field content after adding List Element.
        deleteBtn.innerHTML= "-";
        deleteBtn.ariaLabel = "Delete this item"
        textField.value = "" ;

        //Event Listener telling the delete button to do its job.
        deleteBtn.addEventListener("click", function(){
            outputField.removeChild(p);
            //console.log ("deleted!");
    })
    }
});
