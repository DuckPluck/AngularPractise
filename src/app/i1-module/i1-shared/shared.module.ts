import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ColorDirective } from "./i1-color.directive";
import { PageNamePipe } from "./i1-page-name.pipe";


// Тк регистрировать один и тот же компонент в разных модулях нельзя, этот модуль содержит в себе все общие компоненты для импорта в разные модули

// Сюда нельзя добавить основной модуль BrowserModule (без него основной синтаксис angular в шаблоне не работает), тк он должен быть один на проекте
// Поэтому можно импортировать CommonModule (основные ф-ции BrowserModule) в imports на aboutPageModule или в sharedModule

@NgModule({
    declarations: [
        ColorDirective,                                 // Выдергиваем из основного модуля директиву и пайп (теперь регистрируем их тут)
        PageNamePipe
    ],

    exports: [
        ColorDirective,                                 // Обязательно делимся всеми эл-ми (это же shared)
        PageNamePipe,
        CommonModule   
    ],

    imports: [
        CommonModule
    ]

})

export class SharedModule {

} 