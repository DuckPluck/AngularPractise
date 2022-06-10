import { Component } from '@angular/core';

export interface Post {           /* Для начала создаем шаблон интерфейса (это хорошая практика ts) */
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-b1-elements-transfer',
  templateUrl: './b1-elements-transfer.component.html',
  styleUrls: ['./b1-elements-transfer.component.scss']
})
export class B1ElementsTransferComponent {
  posts: Post[] = [               /* Теперь удобно создаем объект с автозаполнением */
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 2},
    {title: 'Следующий блок', text: 'Будет про директивы и про пайпы', id: 1}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)        /* Добавляем элемент в начало списка */
    console.log('Post ', post)
  }
}

/* Далее идем в компонент post.ts (b1-post.component.ts) */