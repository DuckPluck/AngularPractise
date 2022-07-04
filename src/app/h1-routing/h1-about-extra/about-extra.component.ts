import { Component, OnInit } from '@angular/core';

// Этот компонент является вложенным элементом на своей материнской странице about

@Component({
  selector: 'app-about-extra',
  templateUrl: './about-extra.component.html'
})
export class H1AboutExtraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
