import { Component, ContentChild, ElementRef, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { Post } from '../b1-elements-transfer/b1-elements-transfer.component';            /* Импортируем тип данных Post */

@Component({
  selector: 'app-b5-post',
  templateUrl: './b5-post.component.html',
  styleUrls: ['./b5-post.component.scss']
})
export class B5PostComponent implements OnInit {
                                                 
  @Input() post: Post | undefined                

  @Output() onRemove = new EventEmitter<number>()                                                 
  
  constructor() { }

  ngOnInit(): void {
   
  }

  removePost() {
    this.onRemove.emit(this.post?.id)
  }
}
