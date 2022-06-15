import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

/* По сути директива ниже повторяет функционал стиля гиперссылки */

@Directive({
  selector: '[appEventHostBinding]'
})


export class C4HostBindingInDirectiveDirective {
  @Input('appEventHostBinding') newColor?: string = 'blue'
  @HostBinding('style.color') elColor?: string = ''                       /* @HostBinding() аргумент: Название атрибута, который байндим -
                                                                                             теперь переменная elColor управляет атрибутом */

  constructor(private elRef: ElementRef, private r: Renderer2) {}                    
  
  @HostListener('mouseenter') onmouseenter() {                                                         
    this.elColor = this.newColor                                           /* Меняем значение переменной elColor */
  }

  @HostListener('mouseleave') onmouseleave() {
    this.elColor = ''
  }  
}