import { Injectable } from 'angular2/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable()
export class TodoService {
  getTodos() {
    return Promise.resolve(TODOS);
  }

  getUnfinishedTodos() {
    var needTodos = []; 
    for (var i = TODOS.length - 1; i >= 0; i--) {
      if (!TODOS[i].completed) {
        needTodos.push(TODOS[i]);
      }
    }
    return Promise.resolve(needTodos);
  }

  addTodo(todo: Todo) {
    if(TODOS.length > 0) { todo.id = +TODOS[TODOS.length - 1].id + 1; }
    else { todo.id = 1; }

    TODOS.push(todo);
    localStorage.setItem("todos", JSON.stringify(TODOS));
  }

  updateTodo(todo: Todo) {
    TODOS.some(function (el) {
      if(el.id == todo.id) {
        el = todo;
        return true;
      }
    });
    localStorage.setItem("todos", JSON.stringify(TODOS));
  }

  delTodo(todo: Todo) {
    TODOS.some(function (el, ind) {
      if(el.id == todo.id) {
        TODOS.splice(ind, 1);
        return true;
      }
    });
    localStorage.setItem("todos", JSON.stringify(TODOS));  
  }
}