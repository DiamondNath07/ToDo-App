import './style.css';
import { createTodo, taskInput, todos } from './modules/todoapp';
console.log(taskInput);
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
    createTodo();
  }
});
