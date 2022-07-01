import { Injectable } from '@angular/core';

// Этот сервис будем подключать в другой сервис.


@Injectable({
  providedIn: 'root'                    // Этот сервис уже зарегистрирован в модуль глобально 
})
export class InjectableService {

  log(text: string) {
    console.log(`Log: ${text}`)         /* Суть его работы проста - он выводит в консоль аргумент */
  }
}
