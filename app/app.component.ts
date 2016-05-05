import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { TodoService } from './todoMatrix/todo.service';
import { TodosComponent } from './todoMatrix/todos.component';

import { UserService } from './users/user.service';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="page-header">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">{{title}}</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li><a [routerLink]="['Dashboard']">Dashboard</a></li>
                <li><a [routerLink]="['Todos']">Todos</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div><!--/.container-fluid -->
        </nav>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    TodoService,
    UserService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/user',
    name: 'User',
    component: UsersComponent
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosComponent
  }
])

export class AppComponent {
  title = 'Widgets built with Angular2';
}
