import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

/* Чтобы управлять фокусом нам нужен доступ к DOM-ноде */

@Component({
  selector: 'app-b2-focus-control',
  templateUrl: './b2-focus-control.component.html'
})
export class B2FocusControlComponent implements OnInit {

                        /* @ViewChild требует аргументы - 1. название ссылки из шаблона. 2. правило статики {static: false} (true ставится только если вызывается внутри ngOnInit()) */
  @ViewChild('titleInput', {static: false}) titleRef: ElementRef | undefined  /* @ViewChild возвращает специальный тип ElementRef */
  @ViewChild('textInput', {static: false}) textRef: ElementRef | undefined  /* Декоратор "декорирует" переменную, так что ее всегда нужно объявлять после него */

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  focusTitle() {
                                /* для начала создаем локальную ссылку в шаблоне (html), чтобы ее слушать нужно использовать декоратор @ViewChild() */
    console.log(this.titleRef)  /* позволяет взглянуть на DOM ноду */
    
    this.titleRef?.nativeElement.focus()  /* обращаемся к элементу и применяем метод focus() */
  }

  focusText() { 
    this.textRef?.nativeElement.focus()  
  }
  }
