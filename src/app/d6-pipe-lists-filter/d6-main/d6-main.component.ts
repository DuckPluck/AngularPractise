import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-d6-main',
  templateUrl: './d6-main.component.html'
})
export class D6MainComponent {

  searchArea = 'title'
  search = ''

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучше пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'JavaScript', text: 'The best language in the world'}
  ]

}
