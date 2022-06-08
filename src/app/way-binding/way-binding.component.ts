import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way-binding',
  templateUrl: './way-binding.component.html',
  styleUrls: ['./way-binding.component.scss']
})
export class WayBindingComponent {

title = 'Initial'

onInput(event: any) {               /* при вводе реализовали binding в другую сторону */
  this.title = event.target.value
}
}
