import {Pipe, PipeTransform} from '@angular/core'

// Пайп добавляет восклицательные знаки заголовку (зарегистрирован в главном модуле)

@Pipe({
  name: 'pageNamei1'
})
export class PageNamePipe implements PipeTransform {
  transform(value: string): string {
    return value + '!!!'
  }
}