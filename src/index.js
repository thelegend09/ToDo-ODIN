let taskCheckboxes = document.querySelectorAll(".status > button")

// change the text of the <span> containing the Google icon
taskCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        let icon = checkbox.childNodes[1];

        if (icon.textContent === "radio_button_unchecked") {
            icon.textContent = "check_circle"
            isTaskDone(true)
        } else if (icon.textContent === "check_circle") {
            icon.textContent = "radio_button_unchecked"
            isTaskDone(false)
        }
    });
});


window.addEventListener("load", (event) => {
    console.log("Page is fully loaded.");
});

function isTaskDone(status) {
    if (status) {
        console.log("Task is done.")
    } else {
        console.log("Task is not done anymore.")
    }
}

const toDoList = []


let newTask = (task, project = "inbox", priority = 0) => {
    task: task;
    project: project;
    priority: priority;

    return {
        task, project, priority
    }
}


function createTaskObject(task) {
    // let task = prompt("Add a task")
    // let project = prompt("Which project is this a part of?", "inbox")
    // let priority = prompt("What priority is it? 1 or 0?", 0)
    

    // let project = prompt("Which project is this a part of?", "inbox")
    // let priority = prompt("What priority is it? 1 or 0?", 0)

    let newTaskObject = newTask(task)
    toDoList.push(newTaskObject)
}

