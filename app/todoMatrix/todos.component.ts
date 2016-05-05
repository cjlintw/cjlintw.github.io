import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Todo } from './todo';
import { TodoFormComponent } from './todo-form.component';
import { TodoService } from './todo.service';
import { TodoMatrixPipe } from './todo-matrix.pipe';

@Component({
  selector: 'my-todos',
  templateUrl: 'app/todoMatrix/todos.component.html',
  styleUrls: ['app/todoMatrix/todos.component.css'],
  directives: [ TodoFormComponent ],
  pipes: [TodoMatrixPipe]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;

  constructor( private _todoService: TodoService ){}

  getTodos() {
    return this._todoService.getTodos().then(todos => this.todos = todos);
  }

  delTodo(todo: Todo) {
    this._todoService.delTodo(todo);
  }

  ngOnInit() {
    this.getTodos()
        .then(function () {
        });
  }

  onSelect(todo: Todo) { this.selectedTodo = todo; }

  onChange(todo: Todo) { 
    todo.completed = !todo.completed; 
    this._todoService.updateTodo(todo);
  }

  goBack() {
    window.history.back();
  }

}