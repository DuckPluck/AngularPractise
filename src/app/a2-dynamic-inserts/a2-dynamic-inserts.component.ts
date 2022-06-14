import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a2-dynamic-inserts',
  templateUrl: './a2-dynamic-inserts.component.html'
})
export class A2DynamicInsertsComponent {

  title = 'Dynamic title'         //свойства класса для экспорта в template (интерполяция)
  number = 42
  arr = [1, 2, 3]
  obj = {a: 1, b: {c: 2}}
  img = 'https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png'

  constructor() {                  //позволяет запускать функции при появлении компонента класса
    setTimeout(() => {             //функция через 3сек подменит строчку в переменной img
      this.img = 'https://cdn.iconscout.com/icon/free/png-256/angular-2038881-1720094.png'
    }, 3000)
  }

}
