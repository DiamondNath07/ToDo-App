export default class TodoList {
  constructor() {
    this.todo = [];
    this.storagePass = 'todoApp';
  }

  restoreDefault() {
    const addtext = document.querySelector('.add-text');
    addtext.value = '';
    this.text = '';
  }

  addActivity() {
    const addtext = document.querySelector('.add-text');
    const addList = {
      id: Date.now(),
      description: addtext.value,
      index: this.todo.length + 1,
      completed: false,
    };

    this.todo.push(addList);
  }

  displayActivity() {
    const labelContainer = document.querySelector('.label-container');
    const addtext = document.querySelector('.add-text');
    const { value } = addtext;
    const element = document.createElement('div');
    const attr = document.createAttribute('class');
    attr.value = 'label';
    element.setAttributeNode(attr);
    element.innerHTML = `
    <input type="checkbox" value="dishes" />
            <label>${value}</label>
            <span class="icon-more"
              ><i class="fa-solid fa-ellipsis-vertical"></i
            ></span>
            <span class="icon-trash"><i class="fa-solid fa-trash"></i></span>
            <br />
   `;
    this.text = '';
    labelContainer.appendChild(element);
  }

  // saveData() {
  //   localStorage.setItem(this.storagePass, JSON.stringify(this.todo));
  // }

  // LoadData() {
  //   this.todo = JSON.parse(localStorage.getItem(this.storagePass));
  // }
}
