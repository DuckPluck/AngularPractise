import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-h1-main',
  templateUrl: './main.component.html'
})
export class H1MainComponent implements OnInit {

  constructor(protected auth: AuthService) { }      // Регистрируем сервис аутентификации (кнопки логин, логаут, проверка аутентификации) для демонстрации гуардов

  ngOnInit(): void {
  }

}
