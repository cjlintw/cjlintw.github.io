import { Pipe, PipeTransform } from 'angular2/core';

import { Todo } from './todo';

@Pipe({
  name: 'todoMatrix',
  pure: false
})
export class TodoMatrixPipe implements PipeTransform {

  transform(allTodos: Todo[], important, urgent) {
    if (allTodos == null) {
      return null;
    }
    return allTodos.filter(todo => (todo.important == important) && (todo.urgent == urgent))
                    .sort(function (a, b) {
                      if (a.completed > b.completed) { return 1; }
                      if (a.completed < b.completed) { return -1; }

                      if (a.date == null || a.time == null || b.date == null || b.time == null) {
                        return 1;
                      }

                      let foundDate1 = a.date.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/),
                          foundTime1 = a.time.match(/([0-9]{1,2}):([0-9]{1,2})/),
                          foundDate2 = b.date.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/),
                          foundTime2 = b.time.match(/([0-9]{1,2}):([0-9]{1,2})/);
                      if (foundDate1 == null || foundTime1 == null || foundDate2 == null || foundTime2 == null) {
                        return 1;
                      }
                      let d1 = new Date(+foundDate1[3], +foundDate1[1], +foundDate1[2], +foundTime1[1], +foundTime1[2]),
                          d2 = new Date(+foundDate2[3], +foundDate2[1], +foundDate2[2], +foundTime2[1], +foundTime2[2]);
                      if (d1.getTime() > d2.getTime()) { return 1; }
                      if (d1.getTime() < d2.getTime()) { return -1; }

                    });
  }

}