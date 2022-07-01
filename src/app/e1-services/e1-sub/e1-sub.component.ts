import { Component } from '@angular/core';
import { LocalCounterService } from '../../e1-services/e1-local-service.service';
import { AppCounterService } from '../../e1-services/e1-service.service';

/* Для наглядности работы сервисов создадим отдельный компонент, который добавим в основной компонент */

@Component({
  selector: 'app-e1-sub',
  templateUrl: './e1-sub.component.html',
  providers: [
    LocalCounterService
  ]
})
export class E1SubComponent {

  constructor(
    protected appCounterService: AppCounterService,
    protected localCounterService: LocalCounterService
  ) { }

  

}
