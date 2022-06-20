import { Component } from '@angular/core';
import { LocalCounterService } from '../e1-services/e1-local-service.service';
import { AppCounterService } from '../e1-services/e1-service.service';

@Component({
  selector: 'app-e1-main',
  templateUrl: './e1-main.component.html',
  providers: [
    LocalCounterService                               /* Регистрируем LocalCounter сервис в компонент локально, чтобы использовать его только в этом шаблоне */
  ]
})
export class E1MainComponent {

  constructor(
    protected appCounterService: AppCounterService,   /* Инжектируем AppCounter сервис в компонент, чтобы использовать его в шаблоне (уже зарегестрирован глобально с помощью providedIn: 'root') */
    protected localCounterService: LocalCounterService  /* Инжектируем LocalCounter сервис */
  ) { }           



}
