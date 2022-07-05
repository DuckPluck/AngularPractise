import {Directive, HostBinding, OnInit} from '@angular/core'

// Директива просто красит в нужный цвет элемент, которому в html задаем эту директиву


@Directive({
  selector: '[i1AppColor]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.color')
    color!: string

  ngOnInit(): void {
    this.color = '#aaa'
  }
}
