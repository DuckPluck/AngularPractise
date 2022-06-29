import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

// Interceptor отельная сущность в angular (хотя по сути это сервис), которая позволяет перехватывать http запросы и что-то с ними делать. 
// Чтобы зарегистрировать interceptor, нужно прописать его в app.module.ts в providers особым образом (см. в module)


export class AuthInterceptor implements HttpInterceptor{    // Чтобы превратить класс в interceptor, необходимо имплементироваться от HttpInterceptor

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   // intercept() это метод с аргументами 
        console.log('Intercept request: ', req)

        const cloned = req.clone({  // Для модификации запроса создаем переменную cloned, чтобы не трогать оригинальный реквест, а склонировать его с помощью req.clone()
            headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')    // В метод clone() можно передавать доп. данные, чтобы модифицировать склонированный реквест
                                                                        // Трансформируем данные, добавим новый хедер с помощью метода append()

        })    

        return next.handle(req).pipe(                                        // intercept() имеет обязательный метод .handle(), который возвращает модифицированный нами запрос - req
            tap(event => {                                                   // Данная конструкция является стримом, это значит можно вызывать методы стрима (например .pipe() )
                                                                             // pipe метод tap() позволяет перехватывать промежуточные данные               
                if (event.type === HttpEventType.Response) {                 // Если получили ответ, выводим 'Интерсептор получил ответ'
                    console.log('Interceptor response: ', event)           
                }                                                    // Таким образом мы сторонним образом перехватываем данные с сервера с помощью интерсептора
            })
    
        )

    }      

}