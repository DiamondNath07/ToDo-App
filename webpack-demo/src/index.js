import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['', ''], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

// my code

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryItem = document.querySelector('.grocery-item');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-list');

// edit option
// let editElement;
const editFlag = false;
// const editID = '';

// clearItems function
function clearItem() {}

function deleteItem() {}
function editItem() {}

// functions

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// set back to default
function setBacktoDefault() {
  groceryItem.value = '';
  // editFlag = false;
  // editID = '';
  // submitBtn.textContent = 'Submit';
}

// functions

function addItem(e) {
  e.preventDefault();
  const { value } = groceryItem;
  const id = new Date().getTime().toString();
  if (!value === '' && editFlag === false) {
    const element = document.createElement('article');
    element.classList.add('listed-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
                <p class="selected-item">${value}</p>

            <span class="list-btns">
              <button class="edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="close-btn">
                <i class="fa-solid fa-trash"></i>
              </button>
            </span>
    `;
    const deleteBtn = element.querySelector('.close-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    // appendchild
    list.appendChild(element);
    displayAlert('item added to the list', 'success');
    container.classList.add('show-container');
    // set back to default
    setBacktoDefault();

    // add toLocalStorage
    addToLocalStorage(id, value);
  } else if (value !== '' && editFlag) {
  } else {
    displayAlert('please enter value', 'danger');
  }
}

// add event listeners

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItem);
window.addEventListener('DOMContentLoaded', setupItems);
