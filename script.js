const landingPage = document.getElementById("landingPage");
const startBtn = document.getElementById("startBtn");
const todoApp = document.getElementById("todoApp");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Try Now Button Logic
startBtn.addEventListener("click", function () {
    landingPage.style.display = "none"; // Landing Page Hide
    todoApp.style.display = "block"; // Todo App Show
});

// Add Button CLick
addBtn.addEventListener("click", addTask);

// ENTER KEY SUPPORT
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Add Task Function
function addTask () {
    const taskText = taskInput.value.trim();
    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li"); // Create List
    const span = document.createElement("span"); // Task Text
    span.innerText = taskText;
    
    // Complete task click
    span.addEventListener("click", () => {
        span.classList.toggle("completed"); 
    });

    // Delete Button Functionality
    const deleteBtn = document.createElement("button"); 

    deleteBtn.innerText= "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Edit Button Functionality
    const editBtn = document.createElement("button"); 
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn")
    editBtn.style.marginRight = "10px";

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit your task:", span.innerText);
        if(newText !== null && newText.trim() !== "") {
            span.innerText = newText;
        }
    });

    const btnGroup = document.createElement("div"); // Button Wrapper
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    // Append
    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);

    // Clear Input
    taskInput.value = "";

}