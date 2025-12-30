let taskContainer = document.getElementById("taskContainer");
taskContainer.style.display = "none";
function taskCreate(){
    let taskInput = document.getElementById("taskInput").value;
    taskContainer.style.display = "flex";
    if(taskInput.trim().length > 0) {


        var newField = document.createElement("fieldset");
        newField.classList.add("taskHolder");

        var newCheck = document.createElement("input");
        newCheck.type = "checkbox";
        newCheck.classList.add("taskCheck");


        var newTask = document.createElement("p");
        newTask.classList.add("taskValue");
        newTask.textContent = taskInput;

        var newRemove = document.createElement("i");
        newRemove.classList.add("fa-solid" , "fa-trash" , "taskRemove");


        newField.appendChild(newCheck);
        newField.appendChild(newTask);
        newField.appendChild(newRemove);

        taskContainer.appendChild(newField);
        document.getElementById("taskInput").value = "";
        allFunc();
    }


    


    
}


document.addEventListener("keydown", function(e) { if(e.key === "Enter") taskCreate(); });



function allFunc() {
    var taskHolder = document.getElementsByClassName("taskHolder");
    for (let i = 0; i < taskHolder.length; i++){
        taskHolder[i].onclick = function(){
            check[i].click();
        }
    }


    var check = document.getElementsByClassName("taskCheck");
    for (let i = 0; i < check.length; i++){
        var x = 0;
        check[i].onclick = function() {
            var div = this.parentElement;
            x = x + 1;
            div.classList.toggle("checkedTask");

        }
    }


    var taskRemove = document.getElementsByClassName("taskRemove");
    for (let i = 0 ; i < taskRemove.length; i++) {
        taskRemove[i].onclick = function(){
            var div = taskRemove[i].parentElement;
            div.style.display = "none";
        }
    }

}
