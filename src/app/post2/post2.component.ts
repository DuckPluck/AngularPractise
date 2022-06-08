import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component {

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
