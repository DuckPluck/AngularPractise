// Валидаторы это проверка правил ввода в форму (email, сложность пароля и тд)
// Чтобы создать собственный валидатор необходимо создать статическую функцию внутри данного класса

// Чтобы добавить данный валидатор к форме обращаемся в ts компоненте к ngOnInit() или другим методам (Работа как и с другими валидаторами). Пример - myValidators.restrictedEmails

import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

// По умолчанию валидатор будет возвращать null, но в случае ошибки будет возвращать ошибку объектом {[key: string]: boolean}

export class MyValidators {

    // Как аргумент необходимо отправить control: FormControl, тип возврата - {[key: string]: boolean} или null

    static restrictedEmail(control: FormControl): {[key: string]: boolean} | null { 

        // В качестве условия пропишем запрещенные email'ы. - Если в массиве присутствует эл-т control.value, то выдает ошибку, тк это значение, которое мы вписали

        if (['test@mail.ru', 'test2@mail.ru'].includes(control.value)) {  
            return {restrictedEmail: true}         
        }                                           
        return null
    
    }
    

    // Валидатор уникальности email'а
    // тип возврата как в прошлом валидаторе, только внутри промисов и обсерваблов

    static uniqEmail(control: FormControl): Promise<{[key: string]: boolean} | null> | Observable<{[key: string]: boolean} | null> {
         return new Promise(resolve => {                            // Получать будем промис 
            setTimeout(() => {                              // Эмулируем запрос с помощью setTimeout()
                if (control.value === 'async@mail.ru') {    // Если введенный email совпадает с запросом из базы
                    resolve({uniqEmail: true})              // resolve - промис выполнен и возвращает код ошибки данного валидатора

                } else {resolve(null)}                      // а иначе ничего не возвращаем
                                                      
            }, 1000)  
         })                                      
    }
}

