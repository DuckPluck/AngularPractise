import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a10-for',
  templateUrl: './a10-for.component.html'
})
export class A10ForComponent {
  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'Post 1', author: 'Daniil', contains: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis unde enim ducimus facilis magni perferendis aliquam necessitatibus illo nemo, numquam iure laborum quis porro explicabo fuga adipisci quo deserunt beatae.',
    comments: [
      {name: 'Max', text: 'Comment 1'},
      {name: 'Max', text: 'Comment 2'},
      {name: 'Max', text: 'Comment 3'},
    ]},
    {title: 'Post 2', author: 'Alexandr', contains: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis unde enim ducimus facilis magni perferendis aliquam necessitatibus illo nemo, numquam iure laborum quis porro explicabo fuga adipisci quo deserunt beatae.',
    comments: [
      {name: 'Max', text: 'Comment 1'},
      {name: 'Max', text: 'Comment 2'},
      {name: 'Max', text: 'Comment 3'},
    ]}
  ]
}
