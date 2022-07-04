import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

// Этот компонент необходим для обработки id компонента и отображения его личной информации. Также тут есть кнопка выбора других постов ()

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})

export class H1PostComponent implements OnInit {

  post?: Post                           // Создаем переменную для хранения в ней информации о текущем посте. На нее будем ссылаться в html шаблоне. '?' - чтобы не задавать значение по умолчанию
  intId: number = 0                  // Создаем переменную для конвертации вытащенной из Params строки 'id' в цифру id

  constructor(
    private route: ActivatedRoute,       // Чтобы по id определить какие данные содержит компонент, необходимо инжектировать и воспользоваться сервисом ActivateRoute
    private router: Router,               // Чтобы сделать кнопку подгрузки поста, необходимо ссылаться на страницу поста, инжектируем сервис роута
    private postsService: PostsService,  // Чтобы получить доступ к списку постов, инжектируем сервис с списком
    ) { }  
  
    

  ngOnInit(): void {                                  // Как только эл-т инициализируется, записываем в переменную post текущий пост из сервиса-списка

    this.route.params.subscribe((params: Params) => { // this.route стримит текущий загруженный роут (открытый в адресной строке) .params - это его параметры. 
                                                      // Этот объект - стрим, поэтому нужно подписаться .subscribe(). Возвращаем с его помощью переменную типа Params (содержит id поста)
      this.intId = +params['id']                      // Конвертируем в число строку с id, используя parsInt или '+', и записываем в новую переменную 

      this.post = this.postsService.getById(this.intId)  // Вызываем в сервисе-списке-постов метод возврата поста по переменной (с id) и конвертируем его из строки в цифру используя parsInt или '+'
    })                 
                                                  
  }

  loadPost() {  // Метод смены поста - обращается к инжектированной из сервиса роута переменной и вызывает метод смены страницы по ссылке (id поста указано вручную - '44')
  
    this.router.navigate(['/posts', 44])    

  }
}
