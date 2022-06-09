import { Component } from '@angular/core';

@Component({
  selector: 'app-a3-event-binding',
  templateUrl: './a3-event-binding.component.html',
  styleUrls: ['./a3-event-binding.component.scss']
})
export class A3EventBindingComponent {

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



