import { Component, OnInit, Input } from 'angular2/core';
import { NgForm }    from 'angular2/common';

import { Todo }      from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: 'app/todoMatrix/todo-form.component.html'
})

export class TodoFormComponent {
  @Input()
  todo: Todo;
  
  default = { date: '',
              time: '',
              important: true,
              urgent: true };

  categories = ['work', 'household', 'meow', 'relax'];
  
  active = true;
  submitted = false;
  
  constructor( private _todoService: TodoService ) { }

  newTodo() {   
    this.todo = new Todo(0, '', this.default.date, this.default.time, this.default.important, this.default.urgent,
                         this.categories[0], false);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  quadChange() {
    if(this.todo.id != 0) {
      this.onSubmit();   
    }
    return;
  }

  onSubmit() {

    this.submitted = true;
    this.default = {
      date: this.todo.date,
      time: this.todo.time,
      important: this.todo.important,
      urgent: this.todo.urgent
    };

    if(this.todo.id == 0) {
      this._todoService.addTodo(this.todo);
      this.newTodo();
    }
    else {
      this._todoService.updateTodo(this.todo);
    }
    
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  ngOnInit() {
    let d1 = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
    this.default = {
      date: [d1.getMonth() + 1, d1.getDate(), d1.getFullYear()].join('/'),
      time: d1.getHours() + ':00',
      important: true,
      urgent: true
    };
    this.newTodo();
  }

}
