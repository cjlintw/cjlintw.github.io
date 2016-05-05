System.register(['angular2/core', './todo-form.component', './todo.service', './todo-matrix.pipe'], function(exports_1, context_1) {
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
    var core_1, todo_form_component_1, todo_service_1, todo_matrix_pipe_1;
    var TodosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_form_component_1_1) {
                todo_form_component_1 = todo_form_component_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_matrix_pipe_1_1) {
                todo_matrix_pipe_1 = todo_matrix_pipe_1_1;
            }],
        execute: function() {
            TodosComponent = (function () {
                function TodosComponent(_todoService) {
                    this._todoService = _todoService;
                }
                TodosComponent.prototype.getTodos = function () {
                    var _this = this;
                    return this._todoService.getTodos().then(function (todos) { return _this.todos = todos; });
                };
                TodosComponent.prototype.delTodo = function (todo) {
                    this._todoService.delTodo(todo);
                };
                TodosComponent.prototype.ngOnInit = function () {
                    this.getTodos()
                        .then(function () {
                    });
                };
                TodosComponent.prototype.onSelect = function (todo) { this.selectedTodo = todo; };
                TodosComponent.prototype.onChange = function (todo) {
                    todo.completed = !todo.completed;
                    this._todoService.updateTodo(todo);
                };
                TodosComponent.prototype.goBack = function () {
                    window.history.back();
                };
                TodosComponent = __decorate([
                    core_1.Component({
                        selector: 'my-todos',
                        templateUrl: 'app/todoMatrix/todos.component.html',
                        styleUrls: ['app/todoMatrix/todos.component.css'],
                        directives: [todo_form_component_1.TodoFormComponent],
                        pipes: [todo_matrix_pipe_1.TodoMatrixPipe]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodosComponent);
                return TodosComponent;
            }());
            exports_1("TodosComponent", TodosComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map