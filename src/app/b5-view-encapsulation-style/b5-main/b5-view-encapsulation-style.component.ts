import { Component, OnInit } from '@angular/core';
import { Post } from '../../b1-elements-transfer/b1-main/b1-main.component';

@Component({
  selector: 'app-b5-view-encapsulation-style',
  templateUrl: './b5-view-encapsulation-style.component.html'
})
export class B5ViewEncapsulationStyleComponent implements OnInit {
  posts: Post[] = [               
    {title: 'Хочу выучить инкапсуляцию', text: 'и понять почему стили', id: 2},
    {title: 'по умолчанию', text: 'не применяются глобально', id: 1}
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


