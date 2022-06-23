import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// По сути мы можем импортировать переменные и сделать такую же логику хардкодом, но этот вариант упростит конвеерную работу:

// Для создания своих собственных [(ngModel)] прописываем логику компонента и создаем VALUE_ACCESSOR: Provider

const VALUE_ACESSOR: Provider = {                         // Этот тип служит для проведения сервисов или других сущностей
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => F3NgModelsComponent),     // Тут мы регистрируем название компонента
  multi: true
}

// Далее нужно занести массив VALUE_ACESSOR в @Component({providers: []}), добавить методы модели и компонент станет моделью

@Component({
  selector: 'app-f3-ng-models',
  templateUrl: './f3-ng-models.component.html',
  styleUrls: ['./f3-ng-models.component.scss'],
  providers: [VALUE_ACESSOR]
})


export class F3NgModelsComponent implements ControlValueAccessor {     // Имплементируем ControlValueAccessor с автозаполнением (3 первых метода) 

  writeValue(state: string): void {                                    // позволяет принимать значения от ngModel (обратная связь)
    this.state = state
    /* строки трансформации данных */
  }
                  //(возможно можно оптимизировать типы)
  registerOnChange(fn: any): void {                      // registerOnChange() принимает функцию, которая следит за изменениями 
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {                              // Аналог предыдущего метода, только для мобильных уст-тв
  }

  state = 'off'

  setState(state: string) {
    this.state = state                          // Перезаписываем данные
    /* строки трансформации данных */
    this.onChange(this.state)                   // Сообщаем, что модель изменилась
  }

  private onChange = (value: any) => {}         // Имплементируем переменную onChange как пустую стрелочную функцию для посылки в registerOnChange()
                                                
  // Когда мы вызовем onChange() angular будет выводить все изменения в данном компоненте наверх - на этом завязана вся основная идея

  // Как это работает - мы вызываем метод setState() и трансформируем в нем данные, а в конце вызываем в нем onChange(), чтобы сообщить, что наша модель изменилась

}
