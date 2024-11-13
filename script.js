const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList')

function addTask() {
    let taskName = taskInput.value;

    if (taskName === "") {
        alert("Per favore, inserisci un task!");
        return;
    };

    let li = document.createElement('li');

    let taskText = document.createElement('p');
    taskText.textContent = taskName;
    li.appendChild(taskText);

    let removeBtn = document.createElement('button');
    removeBtn.textContent = "Rimuovi";
    removeBtn.classList.add('remove');
    removeBtn.onclick = () => li.remove();
    li.appendChild(removeBtn);

    li.onclick = () => li.classList.add('completed');
    taskList.appendChild(li);
};

addTaskBtn.addEventListener('click', addTask);