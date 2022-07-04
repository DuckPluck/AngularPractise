
// Guard это логика, которая позволяет защищать страницы от пользователей без доступа (не забываем добавлять гуард на роут в модуле роутов)
// Этот гуард защищает от неавторизированных пользователей страницу h1-posts

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})   // гуард по сути является сервисом, но @Injectable({providedIn: 'root'}) необходим для инжектирования сюда других сервисов

export class AuthGuard implements CanActivate, CanActivateChild { // Для создания гуарда имплементируемся от интерфейса CanActivate.
                                                // Для возможности защиты дочерних эл-тов также имплементируемся от интерфейса CanActivateChild

    constructor(
        private authService: AuthService,    // Инжектируем в гуард сервис аутентификации
        private router: Router               // Инжектируем роутер для редиректа с страницы в случае провала проверки аутентификации
    ) {}
    
    canActivate(                            // canActivate() принимает несколько аргументов особых типов с особыми методами
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {                // Возвращаемый тип может быть либо Observable<boolean>, либо Promise<boolean>, либо boolean. Сервис-эмулятор-аутентификации построен на Promise

        return this.authService.isAuthentificated().then(isAuth => {     // Возвращаем промис с промежуточной логикой ( then() )
            if (isAuth) {                                                // Прописываем в then() простую проверку тумблера аутентификации - если нет логина - редиректит
                return true
            } else {
                this.router.navigate(['/'], {queryParams: {auth: false}})   // Редирект на главную с query параметром auth: false (для сообщения пользователю проблемы)
                return false                                             // эта строка чтобы исключить ошибку ts - undefined
            }
        })                                                               // Далее накидываем гуард на роут в модуле роутов
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {                              // Этот метод нужен для защиты дочерних эл-тов. Принимает/возвращает те же аргументы/значение, что и метод выше
        return this.canActivate(route, state)          // Возвращаем вызов метода выше с теми же параметрами
    }
}

// *** ВНИМАНИЕ этот гуард защищает список постов, но не защищает отдельные посты ***