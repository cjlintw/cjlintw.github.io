System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TodoMatrixPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoMatrixPipe = (function () {
                function TodoMatrixPipe() {
                }
                TodoMatrixPipe.prototype.transform = function (allTodos, important, urgent) {
                    if (allTodos == null) {
                        return null;
                    }
                    return allTodos.filter(function (todo) { return (todo.important == important) && (todo.urgent == urgent); })
                        .sort(function (a, b) {
                        if (a.completed > b.completed) {
                            return 1;
                        }
                        if (a.completed < b.completed) {
                            return -1;
                        }
                        if (a.date == null || a.time == null || b.date == null || b.time == null) {
                            return 1;
                        }
                        var foundDate1 = a.date.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/), foundTime1 = a.time.match(/([0-9]{1,2}):([0-9]{1,2})/), foundDate2 = b.date.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/), foundTime2 = b.time.match(/([0-9]{1,2}):([0-9]{1,2})/);
                        if (foundDate1 == null || foundTime1 == null || foundDate2 == null || foundTime2 == null) {
                            return 1;
                        }
                        var d1 = new Date(+foundDate1[3], +foundDate1[1], +foundDate1[2], +foundTime1[1], +foundTime1[2]), d2 = new Date(+foundDate2[3], +foundDate2[1], +foundDate2[2], +foundTime2[1], +foundTime2[2]);
                        if (d1.getTime() > d2.getTime()) {
                            return 1;
                        }
                        if (d1.getTime() < d2.getTime()) {
                            return -1;
                        }
                    });
                };
                TodoMatrixPipe = __decorate([
                    core_1.Pipe({
                        name: 'todoMatrix',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoMatrixPipe);
                return TodoMatrixPipe;
            }());
            exports_1("TodoMatrixPipe", TodoMatrixPipe);
        }
    }
});
//# sourceMappingURL=todo-matrix.pipe.js.map