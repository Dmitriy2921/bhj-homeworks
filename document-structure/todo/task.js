const todoForm = document.querySelector('.tasks__control');
const tasksList = document.querySelector(".tasks__list");
const taskInput = document.querySelector(".tasks__input");
let todos = [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo(taskInput.value);
});

function addTodo(item) {
    if (item !== '') {
        const todo = {
            id: Date.now(),
            name: item
        }
        todos.push(todo);
        addToLocalStorage(todos);
        taskInput.value = '';
    }
}

function renderTodos(todos) {
    tasksList.innerHTML = '';
    todos.forEach(function(item) {
        const task = document.createElement('div');
        task.classList.add("task");
        task.dataset.key = item.id;
        task.innerHTML = `<div class="task__title">
    ${item.name}
  </div>
  <a href="#" class="task__remove">×</a>`;
        tasksList.append(task);
    });
}

function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

function deleteTodo(id) {
    todos = todos.filter(function(item) {
        return item.id != id;
    });

    addToLocalStorage(todos);
}

getFromLocalStorage();

tasksList.addEventListener('click', function(event) {
    if (event.target.classList.contains("task__remove")) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});