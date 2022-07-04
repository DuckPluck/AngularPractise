

// Сервис имитирует работу log-in входа и log-out выхода из аккаунта

import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})       // Регистрируем и создаем сервис    (также инжектируем в h1-main)

export class AuthService {

    private isAuth = false      // Тумблер статуса входа и методы-свитчеры

    login() {
        this.isAuth = true
        console.log('Logged-in!')
    }

    logout() {
        this.isAuth = false
        console.log('Logged-out!')
    }

    isAuthentificated(): Promise<boolean> {       // Асинхронный метод для проверки аутентификации (чтобы эмулировать запрос на сервер). Возвращает промис 
        return new Promise(resolve => {           // Через 1 секунду резолвим промис, который возвращает текущее значение аутентификации
            setTimeout(() => {
                resolve(this.isAuth)
            }, 1000)
        })
    }    
}