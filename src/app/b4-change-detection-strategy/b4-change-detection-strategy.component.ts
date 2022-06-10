import { Component, OnInit } from '@angular/core';
import { Post } from '../b1-elements-transfer/b1-elements-transfer.component';

@Component({
  selector: 'app-b4-change-detection-strategy',
  templateUrl: './b4-change-detection-strategy.component.html',
  styleUrls: ['./b4-change-detection-strategy.component.scss']
})
export class B4ChangeDetectionStrategyComponent implements OnInit {
  posts: Post[] = [               
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 2},
    {title: 'Следующий блок', text: 'Будет про директивы и про пайпы', id: 1}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)        
    console.log('Post ', post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }


  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0] = {title: 'Changed title!', text: 'Changed text!'}
    }, 2000)                       
  }

}


