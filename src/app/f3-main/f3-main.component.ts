import { Component } from '@angular/core';

@Component({
  selector: 'app-f3-main',
  templateUrl: './f3-main.component.html'
})
export class F3MainComponent {

  appState = 'on'

  handleChange() {            // Метод для демонстрации тригера моделей в шаблоне
    console.log('model changed - ' ,this.appState)
  }
}
