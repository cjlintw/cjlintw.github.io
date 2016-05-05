System.register(['angular2/core', './todo', './todo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1, todo_service_1;
    var TodoFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoFormComponent = (function () {
                function TodoFormComponent(_todoService) {
                    this._todoService = _todoService;
                    this.default = { date: '',
                        time: '',
                        important: true,
                        urgent: true };
                    this.categories = ['work', 'household', 'meow', 'relax'];
                    this.active = true;
                    this.submitted = false;
                }
                TodoFormComponent.prototype.newTodo = function () {
                    var _this = this;
                    this.todo = new todo_1.Todo(0, '', this.default.date, this.default.time, this.default.important, this.default.urgent, this.categories[0], false);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                TodoFormComponent.prototype.quadChange = function () {
                    if (this.todo.id != 0) {
                        this.onSubmit();
                    }
                    return;
                };
                TodoFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this.default = {
                        date: this.todo.date,
                        time: this.todo.time,
                        important: this.todo.important,
                        urgent: this.todo.urgent
                    };
                    if (this.todo.id == 0) {
                        this._todoService.addTodo(this.todo);
                        this.newTodo();
                    }
                    else {
                        this._todoService.updateTodo(this.todo);
                    }
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                TodoFormComponent.prototype.ngOnInit = function () {
                    var d1 = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
                    this.default = {
                        date: [d1.getMonth() + 1, d1.getDate(), d1.getFullYear()].join('/'),
                        time: d1.getHours() + ':00',
                        important: true,
                        urgent: true
                    };
                    this.newTodo();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', todo_1.Todo)
                ], TodoFormComponent.prototype, "todo", void 0);
                TodoFormComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-form',
                        templateUrl: 'app/todoMatrix/todo-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoFormComponent);
                return TodoFormComponent;
            }());
            exports_1("TodoFormComponent", TodoFormComponent);
        }
    }
});
//# sourceMappingURL=todo-form.component.js.map