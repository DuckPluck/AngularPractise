import { Pipe, PipeTransform } from '@angular/core';

/* Async pipe позволяет очень удобно работать с стримами из rxjs и промисами */

@Pipe({
  name: 'd7PipeAsync'
})
export class D7PipeAsyncPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
