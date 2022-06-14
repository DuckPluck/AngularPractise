import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../b1-elements-transfer/b1-elements-transfer.component';

@Component({
  selector: 'app-b1-post-form',
  templateUrl: './b1-post-form.component.html'
})
export class B1PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()    /* Передаем переменную post в основной компонент (b1 component) чтобы добавить там в массив */
/* onAdd = new EventEmitter()                          - Вот так строчка выглядит на js - generic типы <> указываются, чтобы компилятор понимал с каким типом работать */
                                                                     /* теперь переменная onAdd доступна в компоненте B1PostFormComponent, ниже воспользуемся ей*/

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {          /* Условие, чтобы только пробелы не проходили */
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)     /* Пользуемся переменной onAdd Метод emit() вызывается, когда нужно отправить данные наружу. Также нужно будет их принять (в b1.component.html) */
      
      console.log('New Post: ', post)

      this.title = this.text = ''                         /* Удаляем значения в конце */
    }
  }

}
/* Далее необходимо передать переменную post в основной компонент (b1 elements transfer) и добавить там в массив */