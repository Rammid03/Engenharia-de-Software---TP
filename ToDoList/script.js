const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Renderiza todas as tarefas
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.done) li.classList.add('completed');

    li.addEventListener('click', () => toggleTask(index));

    // Botão de editar
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      editTask(index);
    });

    // Botão de excluir
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(index);
    });

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });

  updateCounter();
}

// Adicionar nova tarefa
function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    taskInput.value = '';
    saveTasks();
    renderTasks();
  }
}

// Marcar/desmarcar tarefa concluída
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

// Editar tarefa existente
function editTask(index) {
  const newText = prompt('Editar tarefa:', tasks[index].text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

// Excluir tarefa
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Atualiza contador
function updateCounter() {
  const pending = tasks.filter(t => !t.done).length;
  counter.textContent = `Pendentes: ${pending} / Total: ${tasks.length}`;
}

// Salva no LocalStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Eventos
addBtn.addEventListener('click', addTask);
window.addEventListener('load', renderTasks);
