import './style.css';
// import TodoList from './modules/todoapp.js';

const arrofObj = [
  {
    index: 1,
    description: 'Wash the plate',
    completed: false,
  },
  {
    index: 2,
    description: 'I want to finish my task',
    completed: false,
  },
];

arrofObj.forEach(({ index, description, completed }) => {
  const labelContainer = document.querySelector('.label-container');

  const element = document.createElement('div');
  const attr = document.createAttribute('class');
  attr.value = 'label';
  element.setAttributeNode(attr);
  element.innerHTML = `
    <input type="checkbox" value="dishes" />
            <label placeholder='${completed}'>${(index, description)}</label>
            <span class="icon-more"
              ><i class="fa-solid fa-ellipsis-vertical"></i
            ></span>
            <span class="icon-trash"><i class="fa-solid fa-trash"></i></span>
            <br />
   
   `;
  labelContainer.appendChild(element);
});

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
