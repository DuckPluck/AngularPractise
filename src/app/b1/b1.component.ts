import { Component, OnInit } from '@angular/core';

export interface Post {           /* Для начала создаем шаблон интерфейса (это хорошая практика ts) */
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss']
})
export class B1Component {
  posts: Post[] = [               /* Теперь удобно создаем объект с автозаполнением */
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директивы и про пайпы', id: 2}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)        /* Добавляем элемент в начало списка */
    console.log('Post ', post)
  }
}

/* Далее идем в компонент post.ts (b1-post.component.ts) */