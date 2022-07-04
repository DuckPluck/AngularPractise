import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Этот компонент - домашняя страница, с помощью кнопки тут можно перейти на другую страницу

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class H1HomeComponent {      

  constructor(private router: Router) {}      // Для управления навигацией через ts(кнопку) необходимо инжектировать роутер, к которому мы обращаемся для смены страницы

 
  goToPostsPage() {
    this.router.navigate(['/posts'])          // У типа Router есть метод navigate(), который осуществляет смену страницы (кстати, метод возвращает промис)
  }
}
