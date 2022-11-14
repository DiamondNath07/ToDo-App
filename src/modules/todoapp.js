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
            <span class="icon-trash" ><i class="fa-solid fa-trash"></i></span>
            <br />
   `;
    this.text = '';
    // console.log(element);
    labelContainer.appendChild(element);

    // console.log(labelContainer);
    const target = labelContainer.currentTarget;
    // console.log(target);

    const icon = (e) => {
      const value = e.currentTarget;
      console.log(value);
    };
    const opt = document.querySelector('.icon-more');
    //
    const trash = document.querySelector('.icon-trash');

    // for (let i = 0; i < opt.length; i++) {
    //   opt[i].addEventListener('click', () => {
    //     console.log(opt);

    //     trash.classList.toggle('show');
    //   });
    // }
    opt.addEventListener('click', () => {
      icon();
      
      trash.classList.toggle('show');
    });
    if (opt) {
      opt.map((icon, index) => {
        console.log(icon);
      });
    }
    // this.todo.forEach((list) => {

    // });

    // trash.addEventListener('click', () => {
    //   this.deleteData();
    // });
  }

  // deleteData(id) {
  //   this.todo = this.todo.filter((list) => {
  //     list.id !== id;
  //     list = document.getElementById(id);
  //     console.log(list);
  //     list.remove(id);
  //   });
  // }

  // saveData() {
  //   localStorage.setItem(this.storagePass, JSON.stringify(this.todo));
  // }

  // LoadData() {
  //   this.todo = JSON.parse(localStorage.getItem(this.storagePass));
  // }
}
