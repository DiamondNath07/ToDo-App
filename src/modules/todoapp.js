export const taskInput = document.querySelector('.task-input input'),
  taskBox = document.querySelector('.task-box');

export let todos = JSON.parse(localStorage.getItem('todo-list'));

export function createTodo() {
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
            <i onclick = 'showMenu(this)' class="fa-solid fa-ellipsis-vertical option-icon"></i>
            <ul class="task-menu">
              <li><i class="fa-solid fa-edit"></i></li>
              <li><i onclick = 'deleteTask(${id})' class="fa-solid fa-trash"></i></li>
            </ul>
          </div>
        </li>  
    `;
    });
  }
}

createTodo();

function showMenu(selectedTask) {
  let taskMenu = selectedTask.parentElement.lastElementChild;
  taskMenu.classList.toggle('show');
  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'I' || e.target !== selectedTask) {
      taskMenu.classList.remove('show');
    }
  });
}

function deleteTask(deleteId) {
  todos.splice(deleteId, 1);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  createTodo();
}

function updateStatus(selectedTask) {
  let taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add('checked');
    todos[selectedTask.id].status = 'completed';
  } else {
    taskName.classList.remove('checked');
    todos[selectedTask.id].status = 'pending';
  }
  localStorage.setItem('todo-list', JSON.stringify(todos));
}
