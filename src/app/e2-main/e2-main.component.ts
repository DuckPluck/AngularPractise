import { Component } from '@angular/core';
import { CounterService } from '../e2-services/e2-service.service';

@Component({
  selector: 'app-e2-main',
  templateUrl: './e2-main.component.html'
})
export class E2MainComponent {

  constructor(protected counterService: CounterService) { }           /* Инжектировали только один сервис */

}
