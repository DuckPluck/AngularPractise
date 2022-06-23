import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../f2-validators/my.validators';

// Формы используются для ввода данных по корректной форме
// Первое что необходимо сделать для их работы - добавить модуль реактивных форм ReactiveFormsModule
// Реактивными формы называются из-за инициализации не в шаблоне, а в компоненте

export interface CityMap {
  [key: string]: string
}

@Component({
  selector: 'app-f1-forms',
  templateUrl: './f1-forms.component.html',
  styleUrls: ['./f1-forms.component.scss']
})
export class F1FormsComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {                                      // Для обработки форм обязательно инициализируем новый объект типа FormGroup с помощью ngOnInit
    this.form = new FormGroup({                           // Байндим в шаблоне форму на [formGroup]="form"

                                                          // Для обработки контролов (email/password) добавляем переменную типа FormControl
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmail], [MyValidators.uniqEmail as AsyncValidatorFn] ), // Последние 2 валидатора кастомные из f2
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]), // Аргументы FormControl: 1. начальное знач. 2. валидатор/[набор валидаторов] 3. асинхронные валидатор/[набор валидаторов]  

                                                                            // (типы, которые уже есть в angular методы вызываются без скобочек)
                                                                            // Validators.required не пускает пустую строку, Validators.minLength(6) - не пускает строки меньше 6 символов
                                                                            // Чтобы связать это с шаблоном нужно добавить там в <input> formControlName=""
      
      address: new FormGroup({                                              // Для обработки адреса нужна группа контролов - Страна и Город 
        country: new FormControl('by'),
        city: new FormControl('Минск', Validators.required)
      }),

      skills: new FormArray([])                            // Для обработки динамического добавления эл-тов создаем массив формы
      

    })
  }

    setCapital() {                                            /* По нажатию кнопки "Выбрать столицу" будет выбираться столица выбранной страны */
      const cityMap: CityMap = {
        ru: 'Москва',
        ua: 'Киев',
        by: 'Минск'
      } 

      const city =  cityMap[this.form.get('address')?.get('country')?.value as keyof CityMap]            /* Получаем доступ до нужного контрола */

      this.form.patchValue({     /* patchValue() - Метод для перезаписи контрола, аргументы - имена обновляемых полей в виде объекта и внутри переменная со значением */
        address: {city: city}                          /* тк ключ и значение совпадают можно упростить и написать 'address: {city}' */
      })
    }



    addSkill() {
       /*console.log(this.form.controls['skills']['controls']['value'].controls['skills']  )*/
      const control = new FormControl('', Validators.required); // Для обработки динамического добавления эл-тов создаем контрол как в форме, только в методе
      
      (this.form.get('skills') as FormArray).push(control) // Обращаемся к массиву формы и вызываем метод добавления в конец массива 'push()' с помощью (скобок)
    }                                // Чтобы тайпскрипт понял что можно вызывать push используем 'as FormArray'. Для работы тут необходима ';'

    getSkillControls() {                                                   // Реализую этот метод, потому что не могу обратиться по адресу в шаблоне
      return (this.form.get('skills') as FormArray).controls;
    }


    submit() {                                            // Метод вызывается при нажатии кнопки отправить

      if (this.form.valid) {                                // обращаясь по этим путям можно создавать условия выполнения или менять состояния кнопки в шаблоне
        console.log('Form submitted: ', this.form)          
        const formData = {...this.form.value}               // Записываем (обрабатываем) в переменную formData значение, полученное из контролов (email/password)
        console.log('Form Data: ', formData)                // "...values" - оператор spread - принимает неограниченное кол-во вргументов на входе в массив values[]

        this.form.reset()                                   // Метод для очистки формы после отправления
      }
     }
}



