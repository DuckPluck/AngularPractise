import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class H1PostsComponent implements OnInit {

  constructor(protected postsService: PostsService) { }

  ngOnInit(): void {
  }

}
