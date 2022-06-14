import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../b1-elements-transfer/b1-elements-transfer.component';            /* Импортируем тип данных Post */

@Component({
  selector: 'app-b3-post',
  templateUrl: './b3-post.component.html'
})

export class B3PostComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  posts: Post[] = [               
    {title: 'Хочу выучить лайфцикл хуки', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Добавить пост и удалить', text: 'для демонстрации хуков', id: 2}
  ]

  @Input() post: Post | undefined                
  @Output() onRemove = new EventEmitter<number>()


  removePost() {
    this.onRemove.emit(this.post?.id)
  }


  updatePosts(post: Post) {
    this.posts.unshift(post)        
    console.log('Post ', post)
  }


  constructor(){
    console.log('3B. 2 вызвался constructor')                   /* Второе что сделает компонент - вызовет constructor (это js синтаксис, в ts опускается) */
  }

  ngOnInit(): void {
    console.log('3B. 3 вызвался ngOnInit')                       /* Третье что сделает компонент - вызовет ngOnInit */
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('3B. 1 вызвался ngOnChanges ', changes)
  }                                                               /* Первое что сделает компонент - при изменении данных в компоненте вызовет ngOnChanges (у меня не вызывает, тк нету изменений) */
                                                                  /* Удобно что дает доступ к ngOnChanges().previousValue и ngOnChanges().firstChange(true/false) */
  ngDoCheck(): void {
    console.log('3B. 4 вызвался ngDoCheck ')                      /* Четвертое что сделает компонент - при любом изменении в компоненте вызовет ngDoCheck  */
  }

  ngAfterContentInit(): void {                                    /* Реализуется когда инициализируется контент, который передаем в компонент */
  console.log('3B. 5 вызвался ngAfterContentInit ')
  }
  
  ngAfterContentChecked(): void {                                   /* Реализуется когда весь контент, который мы подаем готов для использования */
   console.log('3B. 6 вызвался ngAfterContentChecked ')
  }
  
  ngAfterViewInit(): void {                                         /* Вызывается, когда реализуется html (после content реализуется view) */
  console.log('3B. 7 вызвался ngAfterViewInit ')
  }

  ngAfterViewChecked(): void {                                      /* Вызывается, когда весь html который мы подаем готов для использования */
    console.log('3B. 8 вызвался ngAfterViewChecked ')
  }

  ngOnDestroy(): void {
    console.log('3B. 9 вызвался ngOnDestroy ')                      /* Вызывается при разрушении компонента/директивы */
  }
}