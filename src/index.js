import {showMenu, deleteTask, updateStatus} from './todoapp.js'

const taskInput = document.querySelector('.task-input input'),
  taskBox = document.querySelector('.task-box');

let todos = JSON.parse(localStorage.getItem('todo-list'));

function showTodo() {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      let iscompleted = todo.status == 'completed' ? 'checked' : '';

      li += `
    <li class="task">
          <label for="${id}">
            <input onclick='updateStatus(this)' type="checkbox" id="${id}"  ${iscompleted}/>
            <p class = '${iscompleted}'>${todo.name}</p>
          </label>
          <div class="settings">
            <i onclick = 'showMenu(this)' class="fa-solid fa-ellipsis-vertical"></i>
            <ul class="task-menu">
              <li><i class="fa-solid fa-edit"></i></li>
              <li><i onclick = 'deleteTask(${id})' class="fa-solid fa-trash"></i></li>
            </ul>
          </div>
        </li>  
    `;
    });
  }
  taskBox.innerHTML = li;
}

showTodo();


taskInput.addEventListener('keyup', (e) => {
  let userTask = taskInput.value.trim();
  if (e.key == 'Enter' && userTask) {
    if (!todos) {
      todos = [];
    }
    taskInput.value = '';
    let taskInfo = { name: userTask, status: 'pending' };
    todos.push(taskInfo);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();
  }
});

import './style.css';

