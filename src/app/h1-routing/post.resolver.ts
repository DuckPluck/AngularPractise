import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ResolvedPost, ResolvedPostsService } from "./resolved-posts.service";

// Ресолверы позволяют заранее подгружать элементы со страницы

// Этот ресолвер будет заранее подгружать компонент поста h1-resolved-post для страницы поста

@Injectable({providedIn: 'root'})                        // тк будем сюда импортировать, добавляем @Injectable({providedIn: 'root'})

export class PostResolver implements Resolve<ResolvedPost> {     // Для создания ресолвера имплементируемся от Resolve <типа данных, с которыми работаем>
    intId: number = 0
    resolvedPostId: ResolvedPost = null as unknown as ResolvedPost
    
    // В реcолвер можно импортировать любые сущности (в нашем случае сервис)
    constructor (private resolvedPostsService: ResolvedPostsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedPost> {

        this.intId = +route.params['id']
        this.resolvedPostId = this.resolvedPostsService.getById(this.intId) as ResolvedPost       
        
        return this.resolvedPostId as unknown as Observable<ResolvedPost>       
    }

}                                                       // Чтобы использовать ресолвер, нужно прописать его в роут в роутинг модуле