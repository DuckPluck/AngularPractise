import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a5-two-way-binding',
  templateUrl: './a5-two-way-binding.component.html'
})
export class A5TwoWayBindingComponent {

  title = 'Initial'

  onInput(event: any) {               /* при вводе реализовали binding в другую сторону */
    this.title = event.target.value
  }

}

