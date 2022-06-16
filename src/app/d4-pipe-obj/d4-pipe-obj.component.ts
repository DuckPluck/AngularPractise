import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d4-pipe-obj',
  templateUrl: './d4-pipe-obj.component.html'
})
export class D4PipeObjComponent {

  obj = {                                   /* Создаем объект с разным уровнем вложенности для ссылания на него в шаблоне (html) */
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }  

}
