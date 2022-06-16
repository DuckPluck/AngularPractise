import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d1-pipe-number',
  templateUrl: './d1-pipe-number.component.html'
})
export class D1PipeNumberComponent {


  e: number = Math.E      /* Создадим переменные с числом, чтобы ссылаться на них в шаблоне */
  
  float = 0.42 

}
