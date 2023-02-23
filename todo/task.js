// select DOM elements
const taskForm = document.querySelector("#tasks__form");
const taskInput = document.querySelector("#task__input");
const taskList = document.querySelector("#tasks__list");

// function to create a new task
function createTask(title) {
    // create new DOM elements
    const task = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskRemove = document.createElement("a");

    // set classes and content
    task.classList.add("task");
    taskTitle.classList.add("task__title");
    taskTitle.textContent = title;
    taskRemove.classList.add("task__remove");
    taskRemove.textContent = "×";

    // add event listener to remove task
    taskRemove.addEventListener("click", function () {
        task.remove();
    });

    // assemble task element
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);

    return task;
}

// function to add new task to the task list
function addTask(e) {
    e.preventDefault();
    const title = taskInput.value.trim();
    if (title) {
        const task = createTask(title);
        taskList.appendChild(task);
        taskInput.value = "";
    }
}

// event listener to add new task on form submit
taskForm.addEventListener("submit", addTask);
