import { Injectable } from '@angular/core';

// Сервисы это отдельные сущности в angular, которые позволяют работать с данными и связывать их с отображением.
// У них есть области видимости и они могут взаимодействовать друг с другом
// Сервисы могут быть глобальными (один для всех) или локальными (каждому свой)
 
// Для регистариции глобальных сервисов необходимо прописать сервис в модуль в providers[]
// Для регистрации локальных сервисов необходимо прописать сервис в нужный компонент (или модуль) в providers[]
// Для использования сервиса необходимо зарегистрировать(injection) его в компонент
// Также чтобы добавить сервис в сервис, его нужно зарегестрировать в сервисе (так же как в компоненте, @Injectable обязателен)

@Injectable({
  providedIn: 'root'                  /* Если добавлено свойство providedIn, регистрировать сервис в модуле не нужно, тк он регистрируется глобально автоматически */
})
export class AppCounterService {

  counter = 0
  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }
}
