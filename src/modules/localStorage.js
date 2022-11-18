class Storage {
  static getToDo() {
    let todoListItem;
    if (!localStorage.getItem('todoListItem')) {
      todoListItem = [];
    } else {
      todoListItem = JSON.parse(localStorage.getItem('todoListItem'));
    }
    return todoListItem;
  }

  static addTodo(todo) {
    const todoListItem = Storage.getToDo();

    todoListItem.push(todo);

    localStorage.setItem('todoListItem', JSON.stringify(todoListItem));
  }

  static remove(id) {
    const todoListItem = Storage.getToDo();
    id = Number(id);
    todoListItem.forEach((todo, i) => {
      if (todo.id === id) {
        todoListItem.splice(i, 1);
      }
    });
    localStorage.setItem('todoListItem', JSON.stringify(todoListItem));
    Storage.resetId();
  }

  static resetId() {
    const todoListItem = Storage.getToDo();
    const arr = [];

    todoListItem.forEach((item) => {
      const newId = { ...item, id: arr.length + 1 };
      arr.push(newId);
      localStorage.setItem('todoListItem', JSON.stringify(arr));
    });
  }

  static checkboxCompleted(id, status) {
    const todoListItem = Storage.getToDo();
    id = Number(id.textContent);

    todoListItem.forEach((x) => {
      if (x.id === id) {
        if (status) {
          x.completed = true;
        } else {
          x.completed = false;
        }
      }
      localStorage.setItem('todoListItem', JSON.stringify(todoListItem));
    });
    return todoListItem;
  }

  static removeCompleted() {
    const todoListItem = Storage.getToDo();

    const notCompleted = todoListItem.filter((x) => x.completed === false);
    localStorage.setItem('todoListItem', JSON.stringify(notCompleted));
    Storage.resetId();
    window.location.reload();
  }

  static deleteCompletedTask() {
    const todoListItem = Storage.getToDo();

    const notCompleted = todoListItem.filter((x) => x.completed === false);
    localStorage.setItem('todoListItem', JSON.stringify(notCompleted));
    Storage.resetId();
    // window.location.reload();
  }

  static delete(id) {
    const todoListItem = Storage.getToDo();
    const arr = [];

    todoListItem.forEach((item) => {
      if (item.id !== id) {
        arr.push(item);
        localStorage.setItem('todoListItem', JSON.stringify(arr));
      }
    });
  }

  static updateDescription(index, desc, tasks) {
    tasks.description = desc;
    return [tasks];
  }

  static editInput(id, e, tdHide, editPara) {
    if (e.children[0].classList.contains('kebabImg')) {
      const todoListItem = Storage.getToDo();
      id = Number(id);
      todoListItem.forEach((todo) => {
        if (id === todo.id) {
          const editItem = todo.description;

          const edit = document.getElementsByName('edit')[0];

          if (edit) {
            edit.remove();
          }

          const input = document.createElement('input');
          input.type = 'text';
          input.name = 'edit';
          input.value = editItem;
          input.classList.add('edit');

          input.addEventListener('keypress', () => {
            editPara.textContent = input.value;
            todo.description = input.value;
            localStorage.setItem('todoListItem', JSON.stringify(todoListItem));
          });

          tdHide.appendChild(input);
        }
      });
    }
  }
}

export default Storage;
