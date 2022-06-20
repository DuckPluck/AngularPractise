import { Injectable } from '@angular/core';

// Локальный сервис можно вызывать только в конкретном компоненте, доступ есть только у компонента

@Injectable()
export class LocalCounterService {

  counter = 0
  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }
}
