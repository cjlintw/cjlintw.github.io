System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(id, task, date, time, important, urgent, category, completed, detail) {
                    this.id = id;
                    this.task = task;
                    this.date = date;
                    this.time = time;
                    this.important = important;
                    this.urgent = urgent;
                    this.category = category;
                    this.completed = completed;
                    this.detail = detail;
                }
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=Todo.js.map