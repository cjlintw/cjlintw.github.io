import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { User } from './user';
import { UserService } from './user.service';

import { Todo } from './../todoMatrix/todo';
import { TodoService } from './../todoMatrix/todo.service';

@Component({
  selector: 'my-user',
  templateUrl: 'app/users/users.component.html'
})
export class UsersComponent implements OnInit {
  user: User;
  todos: Todo[];
  selectedTodo: Todo;

  constructor( private _todoService: TodoService,
               private _userService: UserService ) { }

  getUser() {
    this.user = this._userService.getUser();
  }

  ngOnInit() {
    this.getUser();
  }

  goBack() {
    window.history.back();
  }
}