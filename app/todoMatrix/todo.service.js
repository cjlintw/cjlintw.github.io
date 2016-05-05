System.register(['angular2/core', './mock-todos'], function(exports_1, context_1) {
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
    var core_1, mock_todos_1;
    var TodoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_todos_1_1) {
                mock_todos_1 = mock_todos_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                }
                TodoService.prototype.getTodos = function () {
                    return Promise.resolve(mock_todos_1.TODOS);
                };
                TodoService.prototype.getUnfinishedTodos = function () {
                    var needTodos = [];
                    for (var i = mock_todos_1.TODOS.length - 1; i >= 0; i--) {
                        if (!mock_todos_1.TODOS[i].completed) {
                            needTodos.push(mock_todos_1.TODOS[i]);
                        }
                    }
                    return Promise.resolve(needTodos);
                };
                // getTodosSlowly() {
                //   return new Promise<Todo[]>(resolve =>
                //     setTimeout(()=>resolve(TODOS), 2000) // 2 seconds
                //   );
                // }
                // getTodo(id: number) {
                //   return Promise.resolve(TODOS).then(
                //     todos => todos.filter(todo => todo.id === id)[0]
                //   );
                // }
                // have to look up the last id, and then give the new todo the correct id
                TodoService.prototype.addTodo = function (todo) {
                    if (mock_todos_1.TODOS.length > 0) {
                        todo.id = +mock_todos_1.TODOS[mock_todos_1.TODOS.length - 1].id + 1;
                    }
                    else {
                        todo.id = 1;
                    }
                    mock_todos_1.TODOS.push(todo);
                    localStorage.setItem("todos", JSON.stringify(mock_todos_1.TODOS));
                };
                TodoService.prototype.updateTodo = function (todo) {
                    mock_todos_1.TODOS.some(function (el) {
                        if (el.id == todo.id) {
                            el = todo;
                            return true;
                        }
                    });
                    localStorage.setItem("todos", JSON.stringify(mock_todos_1.TODOS));
                };
                TodoService.prototype.delTodo = function (todo) {
                    mock_todos_1.TODOS.some(function (el, ind) {
                        if (el.id == todo.id) {
                            mock_todos_1.TODOS.splice(ind, 1);
                            return true;
                        }
                    });
                    localStorage.setItem("todos", JSON.stringify(mock_todos_1.TODOS));
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map