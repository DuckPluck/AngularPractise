import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss'],
})
export class Post3Component {
  inputValue = '';
  inputValue2 = '';
  inputValue3 = '';
  inputValue4 = '';

  onClick() {
    console.log('Click')
  }

  onInput(event: any) {
    console.log('Event ', event); //когда заполняем input на сайте, видим структуру атрибутов. в target находим нужный атрибут value, на него и будем ссылаться
    this.inputValue = event.target.value
  }

  onInputKeyboard(event: KeyboardEvent) {   //в этом event ts'у нужно уточнить, что event.target это htmlinputelement  
    this.inputValue2 = (<HTMLInputElement>event.target).value
  }

  onInputEnter(event: Event) {   //в этом event ts'у нужно уточнить, что event.target это htmlinputelement  
    this.inputValue3 = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue4 = str
  }
}
