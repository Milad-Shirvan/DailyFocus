// Load tasks from LocalStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

// Add task when Enter key is pressed
document.getElementById('taskInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.value.trim()) {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const tasks = getTasks();
  tasks.push({ text: taskText, completed: false });
  saveTasks(tasks);
  taskInput.value = '';
  renderTasks();
}

function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

function toggleTask(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks();
}

function editTask(index) {
  const tasks = getTasks();
  const taskItem = document.getElementById(`task-${index}`);
  const taskText = tasks[index].text;

  taskItem.innerHTML = `
    <input type="checkbox" ${tasks[index].completed ? 'checked' : ''} onclick="toggleTask(${index})">
    <input type="text" class="edit-input" value="${taskText}">
    <button class="save-button" onclick="saveTask(${index})">Save</button>
    <button class="cancel-button" onclick="renderTasks()">Cancel</button>
  `;

  const editInput = taskItem.querySelector('.edit-input');
  editInput.focus();
  editInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      saveTask(index);
    }
  });
}

function saveTask(index) {
  const taskItem = document.getElementById(`task-${index}`);
  const editInput = taskItem.querySelector('.edit-input');
  const newText = editInput.value.trim();

  if (newText) {
    const tasks = getTasks();
    tasks[index].text = newText;
    saveTasks(tasks);
  }
  renderTasks();
}

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.id = `task-${index}`;
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
      <span>${task.text}</span>
      <button class="edit-button" onclick="editTask(${index})">Edit</button>
      <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}