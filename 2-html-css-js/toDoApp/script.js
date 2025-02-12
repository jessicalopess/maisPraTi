document.addEventListener("DOMContentLoaded", loadTasks);

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
        span.classList.add("text-decoration-line-through");
    }
    li.appendChild(span);

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group", "btn-group-sm");

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-warning");
    editBtn.textContent = "Editar";
    editBtn.addEventListener("click", () => editTask(task.id, span));
    btnGroup.appendChild(editBtn);

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("btn", "btn-success");
    completeBtn.textContent = task.completed ? "Desmarcar" : "Concluir";
    completeBtn.addEventListener("click", () => toggleComplete(task.id, span, completeBtn));
    btnGroup.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.textContent = "Excluir";
    deleteBtn.addEventListener("click", () => deleteTask(task.id, li));
    btnGroup.appendChild(deleteBtn);

    li.appendChild(btnGroup);
    taskList.appendChild(li);
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = { id: Date.now(), text: taskText, completed: false };
        addTaskToStorage(task);
        addTaskToDOM(task);
        taskInput.value = "";
    }
});

function addTaskToStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(id, span) {
    const newText = prompt("Editar tarefa:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.text = newText;
            span.textContent = task.text;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
}

function toggleComplete(id, span, button) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        span.classList.toggle("text-decoration-line-through", task.completed);
        button.textContent = task.completed ? "Desmarcar" : "Concluir";
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function deleteTask(id, li) {
    if (confirm("Você tem certeza que deseja excluir esta tarefa?")) {
        li.remove();
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}