System.register(['angular2/core', 'angular2/router', './dashboard/dashboard.component', './todoMatrix/todo.service', './todoMatrix/todos.component', './users/user.service', './users/users.component'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, todo_service_1, todos_component_1, user_service_1, users_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todos_component_1_1) {
                todos_component_1 = todos_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Widgets built with Angular2';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n      <div class=\"page-header\">\n        <nav class=\"navbar navbar-default\">\n          <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n            </div>\n            <div id=\"navbar\" class=\"navbar-collapse collapse\">\n              <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['Dashboard']\">Dashboard</a></li>\n                <li><a [routerLink]=\"['Todos']\">Todos</a></li>\n              </ul>\n            </div><!--/.nav-collapse -->\n          </div><!--/.container-fluid -->\n        </nav>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            todo_service_1.TodoService,
                            user_service_1.UserService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/user',
                            name: 'User',
                            component: users_component_1.UsersComponent
                        },
                        {
                            path: '/todos',
                            name: 'Todos',
                            component: todos_component_1.TodosComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map