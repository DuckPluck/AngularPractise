import { Component, OnInit } from '@angular/core';

// Этот компонент необходим для создания вложенной страницы внутри этой страницы

// Чтобы зарегистрировать роут-вложение, необходимо добавить его в routing.module


@Component({
  selector: 'app-h1-routing',
  templateUrl: './about.component.html'
})
export class H1AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
