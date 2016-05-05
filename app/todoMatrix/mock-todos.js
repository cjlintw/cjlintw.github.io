System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var d1, d2, coolTask, TODOS;
    return {
        setters:[],
        execute: function() {
            d1 = new Date(), d2 = new Date(d1.getTime() + 1 * 60 * 60 * 1000);
            coolTask = { id: 1, task: 'do some cool things',
                date: [d1.getMonth() + 1, d1.getDate(), d1.getFullYear()].join('/'),
                time: d2.getHours() + ':00', important: true, urgent: true,
                category: 'relax', completed: false };
            if (localStorage.getItem('todos') == null) {
                localStorage.setItem('todos', JSON.stringify([coolTask]));
            }
            exports_1("TODOS", TODOS = JSON.parse(localStorage.getItem('todos')));
        }
    }
});
//# sourceMappingURL=mock-todos.js.map