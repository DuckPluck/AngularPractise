import { Component, OnInit } from '@angular/core';
import { Post } from '../b1-elements-transfer/b1-elements-transfer.component';

@Component({
  selector: 'app-b3-lifecycle-hooks',
  templateUrl: './b3-lifecycle-hooks.component.html'
})
export class B3LifecycleHooksComponent implements OnInit {
  posts: Post[] = [               
    {title: 'Хочу выучить лайфцикл хуки', text: 'Я все еще учу компоненты', id: 2},
    {title: 'Добавить пост и удалить', text: 'для демонстрации хуков', id: 1}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)        
    console.log('Post ', post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }

  constructor(){
    console.log('3B. 2 вызвался constructor')                   /* Второе что сделает компонент - вызовет constructor (это js синтаксис, в ts опускается) */
  }

  ngOnInit(): void {
    console.log('3B. 3 вызвался ngOnInit')                       /* Третье что сделает компонент - вызовет ngOnInit */
  }

}


