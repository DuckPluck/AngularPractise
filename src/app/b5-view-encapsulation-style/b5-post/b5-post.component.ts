import { Component, ContentChild, ElementRef, Input, OnInit, EventEmitter, Output, ViewEncapsulation  } from '@angular/core';
import { Post } from '../../b1-elements-transfer/b1-main/b1-main.component';            

@Component({
  selector: 'app-b5-post',
  templateUrl: './b5-post.component.html',
  styleUrls: ['./b5-post.component.scss'],
  encapsulation: ViewEncapsulation.None
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
