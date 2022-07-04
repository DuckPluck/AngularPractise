import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service'
import { ResolvedPostsService } from '../resolved-posts.service';

// Этот компонент необходим для отображения динамического списка постов с query параметром (параметром адреса строки), показывающим или нет id поста в названии,
// также рассмотрим особый вид query параметра - fragment (пишется после решетки) - используется для быстрого перехода к эл-ту по его id

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class H1PostsComponent implements OnInit {

  showIds = false                                                 // Этот параметр будет тумблером query параметра

  constructor(
    protected postsService: PostsService,               // Инжектируем сервис с постами, для ссылания на них в html шаблоне этого компонента
    protected resolvedPostsService: ResolvedPostsService, // Инжектируем отдельный сервис с постами (для наглядности) там лежит пост, который будем подгружать перед его открытием (resolve)
    private route: ActivatedRoute,    // Для обработки (в html) отображения query параметров(id поста) инжектируем сервис ActivatedRoute (чтобы получить доступ к параметрам текущей страницы)
    private router: Router                              // Для програмной обработки(в ts, а не в html) отображения query параметров (id поста) инжектируем сервис Router
  ) { }

  ngOnInit(): void {                                    // При открытии страницы(компонента) подписываемся на queryParams текущей страницы
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.showIds = !!queryParams['showIds']           // Теперь при открытии страницы(компонента) тумблер showIds принимает значение query параметра страницы
    })

    this.route.fragment.subscribe( fragment => {        // Точно также обрабатываем значение фрагмента (ссылаемся на него в параметрах роута)
      console.log('Обработка фрагмента из параметров роута (програмная(ts) или нет(html)):', fragment)
    })
  }

  showIdsProgram() {                                    // Метод программно(в ts, а не в html) переходит на страницу с query параметром
    this.router.navigate(['/posts'], {                   // 1. аргумент метода .navigate() роутера принмает ссылку, на которую переходим, 2. объект парамет ров
      queryParams: {
          showIds: true                                 // Указали query параметр в объекте параметров
      },
      fragment: 'exampleFragmentProgram' })            // Параметр fragment используется для задания id элементу (потом можно будет быстро к нему переходить на странице (похоже на якорь в верстке) )
  }

}
