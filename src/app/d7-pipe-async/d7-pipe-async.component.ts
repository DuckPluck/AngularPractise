import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-d7-pipe-async',
  templateUrl: './d7-pipe-async.component.html'
})
export class D7MainComponent {
                                                        /* Нам нужна переменная, которая со временем принимает значение 'Promise Resolved': */
  p: Promise<string> = new Promise<string>(resolve => { /* Создадим переменную типа Promise. Будем передавать в нее строчку. Переменная будет равна новому промису, */
    setTimeout(() => {                                  /* в конструктор которого передадим callback с аргументом resolve, в callback создадим метод setTimeout() */
      resolve('Promise Resolved')                       /* Чтобы корректно вызвать промис используем пайп async в шаблоне */
    }, 2000)
  })
                                                        /* Теперь тоже самое с потоком (потоки называются с $ в конце названия) */
  date$: Observable<Date> = new Observable(obs => {      /* Создаем переменную типа observable (rxjs) типа <Date>. Переменная будет равна новому обсерваблу, */
    setInterval(() => {                                 /* который принимает в конструктор аргумент obs, в callback создадим метод setInterval */
      obs.next(new Date())
    }, 1000)
  })                                


}
