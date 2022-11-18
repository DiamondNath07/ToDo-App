import Storage from './localStorage.js';
import trashImg from '../assets/trash.svg';
import kebab from '../assets/kebab.svg';

document.getElementById('trashImg').src = trashImg;
class UiTodo {
  static displayToDo() {
    const todo = Storage.getToDo();

    todo.forEach((todo) => {
      UiTodo.addToDoList(todo);
    });
  }

  static addToDoList(todo) {
    const isCompleted = (todo) => {
      if (todo.completed) {
        return 'checked';
      }
      return '';
    };
    const ulContainer = document.getElementById('list-container');
    const inputrow = document.createElement('div');
    const attr = document.createAttribute('class');
    attr.value = 'single-list';
    inputrow.setAttributeNode(attr);

    inputrow.innerHTML = `
       <input class='check'  id='checkBox' type="checkbox" ${isCompleted(
    todo,
  )}/>
    <input type='text' class='paragragh' value= ${todo.description}>
    <span id='${todo.id} class='hide'></span>
    <img class='kebabImg' src="${kebab}" alt="" />
    <a href="#" class='delete'>🗑</a>
       `;

    ulContainer.appendChild(inputrow);
  }

  static trashTodo(list) {
    if (list.classList.contains('delete')) {
      list.parentElement.remove();
    }
    Storage.remove(list.parentElement.children[2].id);
  }

  static deleteData() {
    document.getElementById('input-text').value = '';
  }
}

export default UiTodo;
