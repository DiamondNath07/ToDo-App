import './styles/styles.css';
import UiTodo from './modules/uIdisplay.js';
import MyTodoApp from './modules/myTodoApp.js';
import Storage from './modules/localStorage.js';

document.addEventListener('DOMContentLoaded', UiTodo.displayToDo);
document.getElementById('completedBtn').addEventListener('click', () => {
  Storage.removeCompleted();
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todoListItem = Storage.getToDo();
  const toDoInput = document.getElementById('input-text').value;
  const id = todoListItem.length + 1;
  const completed = false;

  const todo = new MyTodoApp(toDoInput, id, completed);
  UiTodo.addToDoList(todo);
  Storage.addTodo(todo);
  UiTodo.deleteData();
});
document.getElementById('to-do-container').addEventListener('click', (e) => {
  Storage.editInput(
    e.target.parentElement.parentElement.children[4],
    e.target.parentElement,
    e.target.parentElement.parentElement,
    e.target.parentElement.parentElement.children[0].children[0],
  );
  UiTodo.trashTodo(e.target);
  if (e.target.classList.contains('check')) {
    Storage.checkboxCompleted(
      e.target.parentElement.parentElement.children[4],
      e.target.checked,
    );
    e.target.parentElement.parentElement.children[2].children[0].classList.toggle(
      'strike-through',
    );
  }
  Storage.remove(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent,
  );
});
