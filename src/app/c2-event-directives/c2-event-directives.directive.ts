import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

/* По сути директива ниже повторяет функционал стиля гиперссылки */

@Directive({
  selector: '[appEvent]'
})


export class C2EventDirectivesDirective {

  constructor(private elRef: ElementRef, private r: Renderer2) {}                    


  @HostListener('click', ['$event']) onclick(event: Event) {      /* @HostListener принимает 2 аргумента: 1. название события 2. массив к чему обращаться*/
  this.r.setStyle(this.elRef.nativeElement, 'color', 'red')
  console.log(event)                                              /* $event обращает ко всем атрибутам события */
  console.log(event.target)                                       /* $event.target вернет блок, на который тукнули */
  }

  @HostListener('mouseenter') onmouseenter() {                    /* событие - мышь зашла на эл-т */
    this.r.setStyle(this.elRef.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') onmouseleave() {
    this.r.setStyle(this.elRef.nativeElement, 'color', 'null')
  }  
}
