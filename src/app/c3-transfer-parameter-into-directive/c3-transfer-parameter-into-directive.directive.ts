import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

/* По сути директива ниже повторяет функционал стиля гиперссылки */

@Directive({
  selector: '[appEventWithParam]'
})


export class C3TransferParameterIntoDirectiveDirective {

  @Input('appEventWithParam') newColor: string = 'blue'    /* получаем параметр "green" из c3-main и заносим его в переменную newColor
                                                              добавляем в @Input аргумент "из какого параметра забирать значение" */

  constructor(private elRef: ElementRef, private r: Renderer2) {}                    
  
  @HostListener('mouseenter') onmouseenter() {                    
    console.log(this.elRef.nativeElement)                                     /* !!! странно но выдает что-то без 'color' !!! */
    this.r.setStyle(this.elRef.nativeElement, 'color', 'this.newColor')      /* обращаемся к переменной newColor */
  }

  @HostListener('mouseleave') onmouseleave() {
    this.r.setStyle(this.elRef.nativeElement, 'color', 'null')
  }  
}
