import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Todo, TodosService } from './g1-todos-service/g1-todos.service';  // Импортируем интерфейс из сервиса g1-todos.service.ts в компонент

// Каждый объект на сервере в HTTP имеет свой уникальный URL-адрес.
// В REST API есть 4 основных метода HTTP, которые используют для действий с объектами на серверах: 
// GET (получение информации о данных или списка объектов), DELETE (удаление данных), POST (добавление или замена данных), PUT (регулярное обновление данных)

// Тестовые ответы на запросы можно найти на https://jsonplaceholder.typicode.com/

// Первое что нужно сделать для работы с angular http client - добавить HttpClientModule в modules 
// Второе - создать сервис с основной логикой запросов на сервер (g1-todos.service.ts)
// !*** тут (в компоненте) будет только логика отображения ***!


@Component({
  selector: 'app-g1-server-httpclient',
  templateUrl: './g1-server-httpclient.component.html'
})
export class G1ServerHttpclientComponent implements OnInit {

  todos: Todo[] = []    // Создаем переменную-массив[] для записи в нее api ответа

  todoTitle = ''    // Создаем переменную для принятия инпута названия, для создания новых карточек с помощью логики [(ngModel)]

  loading = false   // Создадим переменную для индикации загрузки данных с сервера в методе fetchTodos()

  error = ''        // Создаем переменную для вывода ошибки в шаблон html

  constructor(private todosService: TodosService) {} // Инжектируем сервис 

// http client полностью построен на rxjs - когда мы выполняем методы, angular оборачивает код в rxjs stream, но не подписывается на него. Чтобы видеть стрим, нужно добавить хотя бы 1 слушателя

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {                                                                     // Метод получает инпут и создает карточку с таким названием
    if (!this.todoTitle.trim()) {                                                 // Если инпут пустой, ничего не делаем
      return
    }

    this.todosService.addTodo({             // Для создания новой карточки на сервере, передадим инпут-имя и св-во по умолчанию completed: false в метод addTodo() в сервис.
      title: this.todoTitle,                // Id обычно приходит с сервера
      completed: false
    }).subscribe(todo => {                                         // Метод сервиса addTodo возвращает стрим. Подписываемся на стрим и получаем с сервера новый объект
      this.todos.push(todo)                                        // Методом push() втыкаем объект в конец массива с карточками на фронте
      this.todoTitle = ''                                          // Очищаем инпут
    })
  }




  fetchTodos() {     // Метод загрузит (обновит) данные с сервера (используем метод в ngOnInit)
    this.loading = true                                                           // Включаем переменную-индикатор загрузки с сервера
    this.todosService.fetchTodos()                                                // Обращаемся к методу fetchTodos() в сервисе
    .subscribe(response => {                                   // Тут мы получаем ответ сервера(api) (для наглядности меняют response на название возвращаемого типа - todos)
      this.todos = response                                                       // Записываем ответ api в переменную.
      this.loading = false                                                        // Выключаем переменную-индикатор загрузки с сервера
    }, error => {
      this.error = error.message
    })  
  }
  // Для обработки ошибок метод subscribe() принимает дополнительные аргументы - error и () пустой аргумент complete (логика как у промисов)
  // error это объект с разными флагами с инфой об ошибке, обращаясь к флагам можно вывести инфу в шаблоне html



  // созданные карточки не удастся завершить, тк тестовый api не поддерживает создание новых объектов на сервере

  completeTodo(id: number | undefined) {                                          // Метод перечеркивает(завершает) название карточки при нажатии на кнопку
    this.todosService.completeTodo(id)                                            // Обращаемся к методу completeTodo() в сервисе 
      .subscribe(todo => {                                                        // Подписываемся на стрим для получения ответа сервера
        let findedTodo = this.todos.find(t => t.id === todo.id)         // Ищем нужный эл-т todo в массиве todos с помощью find() по id и записываем в переменную findedTodo
                                                                   // (пришлось записать в findedTodo и сделать условие, тк ts ругается что значение может быть undefined)
        if (findedTodo != undefined) {
          findedTodo!.completed = true                                                     // меняем св-во переменной completed на true
        }
          if (!todo) return
                                                                  // (id прилетает с сервера) 
      })
  }

  removeTodo(id: number | undefined) {                                          
    this.todosService.removeTodos(id)
      .subscribe( () => {
        this.todos = this.todos.filter(t => t.id !== id)     // Для моментального удаления карточки на фронте без доп. обращения к серверу, отфильтровываем удаленный объект по id
      })
  }
}
