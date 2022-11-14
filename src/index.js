import './style.css';
import TodoList from './modules/todoapp.js';

const todoApp = new TodoList();
const form = document.querySelector('.Todo-form');

// window.onload = () => {
//   todoApp.LoadData();
//   todoApp.displayActivity();
// };
form.addEventListener('submit', (e) => {
  e.preventDefault();
  todoApp.addActivity();
  todoApp.displayActivity();
  todoApp.restoreDefault();
  todoApp.saveData();
});
