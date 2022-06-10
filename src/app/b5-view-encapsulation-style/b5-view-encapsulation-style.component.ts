import { Component, OnInit } from '@angular/core';
import { Post } from '../b1-elements-transfer/b1-elements-transfer.component';

@Component({
  selector: 'app-b5-view-encapsulation-style',
  templateUrl: './b5-view-encapsulation-style.component.html',
  styleUrls: ['./b5-view-encapsulation-style.component.scss']
})
export class B5ViewEncapsulationStyleComponent implements OnInit {
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


