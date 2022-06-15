import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

/* По сути директива ниже повторяет функционал стиля гиперссылки */

@Directive({
  selector: '[appEventWithParam]'
})


export class C3TransferParameterIntoDirectiveDirective {

  @Input('appEventWithParam') newColor?: string = 'blue'              /* получаем параметр "green" из c3-main и заносим его в переменную newColor
                                                                        добавляем в @Input аргумент "из какого параметра забирать значение" */

  @Input() newFontWeight = 'normal'

  @Input() newStyles: { newBorder?: string; newFontWeight?: string; newBorderRadius?: string; } | undefined

  constructor(private elRef: ElementRef, private r: Renderer2) {}                    
  
  @HostListener('mouseenter') onmouseenter() {                    
    this.r.setStyle(this.elRef.nativeElement, 'color', this.newColor)               /* обращаемся к переменной newColor */
    this.r.setStyle(this.elRef.nativeElement, 'fontWeight', this.newFontWeight)     /* обращаемся к переменной newFontWeight */
    this.r.setStyle(this.elRef.nativeElement, 'border', this.newStyles?.newBorder)
    this.r.setStyle(this.elRef.nativeElement, 'borderRadius', this.newStyles?.newBorderRadius)
  }

  @HostListener('mouseleave') onmouseleave() {
    this.r.setStyle(this.elRef.nativeElement, 'color', null)
    this.r.setStyle(this.elRef.nativeElement, 'fontWeight', null)
    this.r.setStyle(this.elRef.nativeElement, 'border', null)
    this.r.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }  
}

/* По сути все это можно сделать проще через декоратор @HostBinding (след блок)*/