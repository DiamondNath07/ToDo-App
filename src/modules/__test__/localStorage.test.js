import Storage from '../localStorage.js';

const localStorageMock = (function localStorageMock() {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
}());

global.localStorage = localStorageMock;

describe('Task one: add and delete', () => {
  test('data is added into local storage', () => {
    const mockTodo = {
      description: 'json data',
      id: 1,
      completed: false,
    };

    const mockTodo2 = {
      description: 'jso',
      id: 2,
      completed: false,
    };

    const expected = [
      {
        id: 1,
        description: 'json data',
        completed: false,
      },
      {
        description: 'jso',
        id: 2,
        completed: false,
      },
    ];
    Storage.addTodo(mockTodo);
    Storage.addTodo(mockTodo2);
    expect(Storage.getToDo()).toEqual(expected);
  });

  test('Data is removed from local storage', () => {
    const expected = [
      {
        description: 'json data',
        id: 1,
        completed: false,
      },
    ];
    Storage.remove(2);
    expect(Storage.getToDo()).toStrictEqual(expected);
  });
});


describe('task2', () => {
  // Remove all completed
  test('Remove all completed with the status of true', () => {
    const mockTodo2 = {
      description: 'remove completed',
      id: 2,
      completed: true,
    };

    const expected = [
      {
        description: 'json data',
        id: 1,
        completed: false,
      },
    ];

    Storage.addTodo(mockTodo2);
    Storage.deleteCompletedTask();

    expect(Storage.getToDo()).toStrictEqual(expected);
  });

  

  
});
