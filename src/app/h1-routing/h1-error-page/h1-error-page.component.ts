import { Component, OnInit } from '@angular/core';

// Эта страница нужна для ссылки на нее при отсутсвии в адресе корректного роута (ссылки)

// Регистрируем страницу в роутинг модуле


@Component({
  selector: 'app-h1-error-page',
  templateUrl: './h1-error-page.component.html'
})
export class H1ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
