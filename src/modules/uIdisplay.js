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
    const ulContainer = document.getElementById('list-container');
    // const row = document.createElement('tr');
    const inputrow = document.createElement('div');
    const attr = document.createAttribute('class');
    attr.value = 'single-list';
    inputrow.setAttributeNode(attr);

    if (todo.completed) {
      inputrow.innerHTML = `
       <input class='check'  id='checkBox' type="checkbox" checked  />
    <input type='text' class='paragragh' value= ${todo.description}/>

    <span class='hide'>${todo.id}</span>
    <img class='kebabImg' src="${kebab}" alt="" />
    <a href="#" class='delete'>🗑</a>
       `;
    } else {
      inputrow.innerHTML = `
      <input class='check'  id='checkBox' type="checkbox"  />
        <input type='text' class='paragragh' value= ${todo.description}>

    <span class='hide'>${todo.id}</span>
    <img class='kebabImg' src="${kebab}" alt="" />
    <a href="#" class='delete'>🗑</a>
    `;
    }
    ulContainer.appendChild(inputrow);
  }

  static trashTodo(list) {
    if (list.classList.contains('delete')) {
      list.parentElement.remove();
    }
  }

  static deleteData() {
    document.getElementById('input-text').value = '';
  }
}

export default UiTodo;
