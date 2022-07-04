import { Injectable } from '@angular/core'

// Этот сервис необходим для хранения подгружаемого заранее поста и выдачи поста по id (getById() )
// Выведен в отдельный элемент для наглядности

// Система роутинга angular нужна чтобы заводить н-ное кол-во страниц в клиентской части (не на сервере)
// Когда пользователь пользуется роутингом, при переходе он не меняет страницу, а дает команду js динамически отрисовать другую (без перезагрузки), внутри той же страницы
// Наша задача прописать логику динамической отрисовки клиентской части

export interface ResolvedPost {
  title: string
  text: string
  id: number
}

@Injectable({providedIn: 'root'})

export class ResolvedPostsService {
    
  resolvedPosts: ResolvedPost[] = [
    {title: 'Resolved post (подгружается до открытия страницы)', text: 'Sample text for resolved post', id: 100},



    
  ]



  getById(id: number) {
    return this.resolvedPosts?.find(p => p.id === id)
  }
}
