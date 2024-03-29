import { Injectable } from '@angular/core'

// Этот сервис необходим для хранения постов и выдачи поста по id (getById() )

// Система роутинга angular нужна чтобы заводить н-ное кол-во страниц в клиентской части (не на сервере)
// Когда пользователь пользуется роутингом, при переходе он не меняет страницу, а дает команду js динамически отрисовать другую (без перезагрузки), внутри той же страницы
// Наша задача прописать логику динамической отрисовки клиентской части

export interface Post {
  title: string
  text: string
  id: number
}

@Injectable({providedIn: 'root'})

export class PostsService {
    
  posts: Post[] = [
    {title: 'Post 1', text: 'Sample text for post 1', id: 11},
    {title: 'Post 2', text: 'Sample text for post 2', id: 22},
    {title: 'Post 3', text: 'Sample text for post 3', id: 33},
    {title: 'Post 4', text: 'Sample text for post 4', id: 44},

  ]



  getById(id: number) {
    return this.posts?.find(p => p.id === id)
  }
}
