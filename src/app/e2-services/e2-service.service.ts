import { Injectable } from '@angular/core';
import { InjectableService } from './e2-injectable-service.service';


// Чтобы добавить сервис в сервис, его нужно зарегестрировать в сервисе (так же как в компоненте, глобальная или локальная регистрация обязательна)


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0

  constructor(protected injectableService: InjectableService){}         // Зарегистрируем в этот сервис сервис - InjectableService
  
  increase() {
    this.injectableService.log('increase counter...')
    this.counter++
  }

  decrease() {
    this.injectableService.log('decrease counter...')
    this.counter--
  }
}
