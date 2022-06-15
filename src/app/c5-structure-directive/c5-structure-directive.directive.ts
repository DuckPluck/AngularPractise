import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/* Создадим структурную директиву ifNot, которая будет делать противоположное ngIf'у */

@Directive({
  selector: '[appIfnot]'                      /* название */
})
export class C5StructureDirectiveDirective {
  @Input('appIfnot') set ifNot(condition: boolean) {    /* Добавляем свойство ifNot в качестве сеттера, куда будет передаваться аргумент директивы и указываем input'у откуда брать значение (из c5-main) */
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef)     /* Если условие выполняется, то показываем эл-ты с помощью метода createEmbeddedView. Арг - ссылка на шаблон*/
    } else {
      this.viewContainer.clear()                                  /* Если нет, то скрываем */
    }
  }         

  /* Чтобы сделать директиву структурной инжектируем в конструктор 2 сущности с типами - templateRef и viewContainer */
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
