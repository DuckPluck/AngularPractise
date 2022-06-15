import { Directive, ElementRef, Renderer2 } from "@angular/core";

/* Angular директивы используются для изменения внешнего вида или поведения DOM-элемента */

/* любые сущности в Angular это классы. Чтобы превратить класс в директиву нужно подключить декоратор @Directive с обязательным параметром selector (название директивы) */
/* Также команда ng g d directiveName --skip-tests создаст шаблон директивы */

@Directive({
    selector: '[appStyle]'              /* Чтобы селектор стал директивой, а не тегом, нужно использовать []. Добавляем app, чтобы отличать angular объекты от html */
})

// export class StyleDirective {                                    /* Также необходимо добавить в app.modules модуль StyleDirective */
//     constructor(private elRef: ElementRef) {                     /* Чтобы делать какие-либо инжектирования в ts используется constructor() */
//         console.log(elRef)                                       /* Сейчас у нас есть доступ ко всем тегам с директивой StyleDirective */
//         elRef.nativeElement.style.color = 'red'
//     }                    
// }
                                        /* но это не очень защищенная модель, подойдет для web, но более универсальный код через Renderer пишем ниже */

export class StyleDirective {           
    constructor(private elRef: ElementRef, private r: Renderer2) {           /* Дополнительно инжектируем в директиву еще один объект типа Renderer2*/
        this.r.setStyle(this.elRef.nativeElement, 'color', 'blue')           /* Далее обращаемся к объекту Renderer и применяем его методы, чтобы добавить класс, стили и тд главному эл-ту */
    }                    
}