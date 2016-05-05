import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { User } from './../users/user';
import { UserService } from './../users/user.service';

import { Todo } from './../todoMatrix/Todo';
import { TodoService } from './../todoMatrix/todo.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos: Todo[] = [];
  
  TOOLS = ["Todos", "User"];
  tools = [ {"name": "Todos", "title": "Todos"}, 
            {"name": "User", "title": "Author"} ];
  
  constructor(
    private _router: Router,
    private _todoService: TodoService) { 
  }
  ngOnInit() {
    this._todoService.getUnfinishedTodos()
      .then(todos => {
        this.todos = todos;
        this.tools.some(function (el) {          
          if(el.name=="Todos") {
            el.value = this.todos.length;
          }
          console.log(el);
        }, this);
      });
  }
  gotoTool(tool: any) {
    let link = [ tool.name ];
    this._router.navigate(link);
  }
}
