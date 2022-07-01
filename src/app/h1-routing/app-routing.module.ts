import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { H1AboutComponent } from "./h1-about/about.component";
import { H1HomeComponent } from "./h1-home/home.component";
import { H1PostComponent } from "./h1-post/post.component";
                                                            // Для роутинга необходимо создать модуль


const routes: Routes = [    // Для создания логики роутинга обычно создается массив типа Routes, который мы регистрируем в imports с помощью метода .forRoor(routes)
                            // В массив записываются все роуты в виде {path: '/404', component: '404Component'} (пустой путь это основная страница)
    
    {path: '', component: H1HomeComponent},                  // http://localhost:4200/ -> H1HomeComponent
    {path: 'about', component: H1AboutComponent},            // http://localhost:4200/about -> H1AboutComponent
    {path: 'posts', component: H1PostComponent}             // http://localhost:4200/posts -> H1PostsComponent

]  


@NgModule({                                                 // Декоратор для регистрации модуля
    imports: [RouterModule.forRoot(routes)],                // Чтобы зарегистрировать модуль как роутинг регистрируем входящую величину RoutingModule с помощью imports: []
    exports: [RouterModule]                                 // exports: [] чтобы открыть публичный апи к данным RoutingModule
})
                                            // Чтобы завершить регистрацию роутинга, необходимо прописать его в imports в главном модуле app.module.ts




export class AppRoutingModule {

}