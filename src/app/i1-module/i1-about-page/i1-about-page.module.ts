// Это модуль для страницы about

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../i1-shared/shared.module";
import { I1AboutExtraPageComponent } from "./i1-about-extra-page/i1-about-extra-page.component";
import { I1AboutPageComponent } from "./i1-about-page.component";



@NgModule({
    declarations: [               // Для начала вытаскиваем из основного модуля регистрации всех компонентов, относящихся к стр about 

        I1AboutPageComponent,                   // Компоненты стр. about
        I1AboutExtraPageComponent,
        
    ],
    imports: [
        SharedModule,                           // Импортируем модуль shared компонентов (там внутри пайп, директива, и базовый модуль)
                                                
        RouterModule.forChild([
                                                // Это дочерний роутинг (не основной модуль)                  
                                                // (можно создать отдельный дочерний роутинг модуль для about, но лучше прописать здесь)
            {
            path: '', component: I1AboutPageComponent, children: [       // Это адреса, относящиеся к этой странице (при использовании "ленивой загрузки" осн адрес пустой)
              {path: 'i1-extra', component: I1AboutExtraPageComponent}                                                               
              ]
            }
        ])
    ],

    exports: [                                   // Для отправки этих роутов в главный апп модуль роуты обязательно нужно экспортировать
        RouterModule
    ]

}) 

export class AboutPageModule {

}

// Для оптимизации можно использовать "Ленивую загрузку" - отложенную загрузку компонента (чтобы не подгружать сразу то, что не используется)
// Ленивая загрузка прописывается в главном роутинг модуле - loadChildren: 'путь-до-модуля'