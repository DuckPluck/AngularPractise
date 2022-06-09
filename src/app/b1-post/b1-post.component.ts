import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../b1/b1.component';            /* Импортируем тип данных Post */

@Component({
  selector: 'app-b1-post',
  templateUrl: './b1-post.component.html',
  styleUrls: ['./b1-post.component.scss']
})
export class B1PostComponent implements OnInit {

  @Input() post: Post | undefined                /* Указываем тип для post и чтобы Angular понял, что переменную получаем извне, создаем декоратор Input */

  constructor() { }

  ngOnInit(): void {
  }

}
