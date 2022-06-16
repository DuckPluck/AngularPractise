import { Pipe, PipeTransform } from "@angular/core";

/* Пайп будет умножать данное число на аргумент */

@Pipe({                                 /* Чтобы angular понимал что это новый пайп, добавляем декоратор @Pipe() */
  name: 'mult'                          /* В декораторе как минимум должна быть строка name с названием, mult- от слова multiply */
})

/* Также пайп необходимо зарегестрировать в главном модуле */

export class MultByPipe implements PipeTransform {            /* Хорошей практикой считается указание интерфейса, от которого мы отталкиваемся, имплементируем PipeTransform */
  transform(num: number, pow: number = 1): number {
    return num*pow
  }               
}