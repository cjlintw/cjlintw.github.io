System.register(['angular2/core', 'angular2/router', './../todoMatrix/todo.service'], function(exports_1, context_1) {
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
    var core_1, router_1, todo_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _todoService) {
                    this._router = _router;
                    this._todoService = _todoService;
                    this.todos = [];
                    this.TOOLS = ["Todos", "User"];
                    this.tools = [{ "name": "Todos", "title": "Todos" },
                        { "name": "User", "title": "Author" }];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._todoService.getUnfinishedTodos()
                        .then(function (todos) {
                        _this.todos = todos;
                        _this.tools.some(function (el) {
                            if (el.name == "Todos") {
                                el.value = this.todos.length;
                            }
                            console.log(el);
                        }, _this);
                    });
                };
                DashboardComponent.prototype.gotoTool = function (tool) {
                    var link = [tool.name];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/dashboard/dashboard.component.html',
                        styleUrls: ['app/dashboard/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, todo_service_1.TodoService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map