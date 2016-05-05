import { Todo } from './todo';

var d1 = new Date(),
    d2 = new Date(d1.getTime() + 1 * 60 * 60 * 1000);
        
var coolTask = { id: 1, task: 'do some cool things', 
                  date: [d1.getMonth () + 1, d1.getDate(), d1.getFullYear()].join('/'), 
                  time: d2.getHours() + ':00', important: true, urgent: true, 
                  category: 'relax', completed: false}
if (localStorage.getItem('todos') == null) {
  localStorage.setItem('todos', JSON.stringify([coolTask]));
}

export var TODOS: Todo[] = JSON.parse(localStorage.getItem('todos'));

