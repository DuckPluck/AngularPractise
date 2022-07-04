import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { H1AboutExtraComponent } from "./h1-about-extra/about-extra.component";
import { H1AboutComponent } from "./h1-about/about.component";
import { H1ErrorPageComponent } from "./h1-error-page/h1-error-page.component";
import { H1HomeComponent } from "./h1-home/home.component";
import { H1PostComponent } from "./h1-post/post.component";
import { H1PostsComponent } from "./h1-posts/posts.component";
import { H1ResolvedPostComponent } from "./h1-resolved-post/resolved-post.component";
import { PostResolver } from "./post.resolver";
                                                            
// Этот сервис необходим для роутинга и настройки роутинга                                                            


                            // Для создания роутинга необходимо превратить модуль в роутинг

const routes: Routes = [    // Для создания логики роутинга обычно создается массив типа Routes, который мы регистрируем в @NgModule imports с помощью метода .forRoot(routes)
                            // В массив записываются все роуты в виде {path: '/404', component: '404Component'} (пустой путь это основная страница)
    
    {path: '', component: H1HomeComponent},                                            // http://localhost:4200/ -> H1HomeComponent
    {path: 'posts', component: H1PostsComponent, canActivate: [AuthGuard]},            // http://localhost:4200/posts -> H1PostsComponent.
                                                             // canActivate: [] - для подключения гуардов (защиты от незнакомцев)

    {path: 'posts/:id', component: H1PostComponent},         // Это динамическая ссылка, для динамических роутов (динамический эл-т '/:id' меняется в завис-ти от id компонента)
        
    
        {                                       
        path: 'resolved-posts/:id',            // Это роут на пост, подгружаемый заранее (Вот тут я допустил ошибку - Я указал id вручную цифрой. Важно указывать куда вставлять динамическую ссылку '/:id' из списка постов)
        component: H1ResolvedPostComponent,
        resolve: {                             // Прописываем сюда ресолвер из post.resolver.ts (для подгрузки поста заранее)
            resolvedPost: PostResolver         // Название-объекта-где-будут-храниться-данные: PostResolver. Теперь, когда мы будем заходить на 'posts', будет отрабатывать ресолвер 'resolvedPost'
        }                            
    },
    
    {path: 'about', component: H1AboutComponent, canActivateChild: [AuthGuard], children: [ // Это роут для создания вложенного эл-та на странице
        {path: 'extra', component: H1AboutExtraComponent}    // http://localhost:4200/about/extra -> H1AboutExtraComponent.   Зарегистрировали роут на вложенный эл-т
    ]},                                                      // canActivateChild: [] - для подключения гуардов дочерних эл-тов (применяется на материнский эл-т)

    {path: 'error', component: H1ErrorPageComponent},        // Это роут для редиректа с всех некорректных адресов
    {path: '**', redirectTo: '/error'}                       // Этот роут обязательно последним - он создает редирект с всех некорректных адресов
]  


@NgModule({                                                 // Декоратор для регистрации модуля
    imports: [RouterModule.forRoot(routes)],                // Чтобы зарегистрировать модуль как роутинг регистрируем входящую величину RoutingModule с помощью imports: []
    exports: [RouterModule]                                 // exports: [] чтобы открыть публичный апи к данным RoutingModule
})
                                            // Чтобы завершить регистрацию роутинга, необходимо прописать его в imports в главном модуле app.module.ts




export class AppRoutingModule {

}