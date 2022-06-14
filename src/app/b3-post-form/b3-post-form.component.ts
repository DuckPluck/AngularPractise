import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../b1-elements-transfer/b1-elements-transfer.component';

@Component({
  selector: 'app-b3-post-form',
  templateUrl: './b3-post-form.component.html'
})
export class B3PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()    

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {          
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)     
      console.log('New Post: ', post)

      this.title = this.text = ''                         
    }
  }

}
