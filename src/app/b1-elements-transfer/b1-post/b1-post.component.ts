import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { Post } from '../b1-main/b1-main.component';            /* Импортируем тип данных Post */

@Component({
  selector: 'app-b1-post',
  templateUrl: './b1-post.component.html'
})
export class B1PostComponent implements OnInit {
                                                 /* *** 1 способ передачи параметров внутрь компонента (из html в ts) *** */
  @Input() post: Post | undefined                /* Указываем тип для post и создаем декоратор Input, чтобы Angular понял, что переменную получаем извне */

                                                 /* Ссылаемся на ссылку #info внутри шаблона(html) b1, чтобы получить доступ к ее DOM эл-ту */
            /* @ContentChild требует аргументы - 1. название ссылки из шаблона(html). 2. правило статики {static: false} (true ставится только если вызывается внутри ngOnInit()) */
  @ContentChild('info', {static: true}) infoRef?: ElementRef    
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef?.nativeElement)
  }

}
