import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './d6-main/d6-main.component'

@Pipe({
  name: 'filter',
  pure: false /* Выключенное свойство pure оптимизирует пайпы и вызывает transform() чаще (чтобы при поиске добавленные пайпы высвечивались сразу, и не приходилось обновлять поиск) */
})
export class D6PipeListsFilterPipe implements PipeTransform {   /* Создаем логику пайпа - на вход получаем массив постов и строку, на выходе отдаем фильтрованный массив постов */

  transform(posts: Post[], search: string = '', area: string = 'title'): Post[] | undefined {
    if(!search.trim()) return posts                                     /* Когда строка пустая, возвращаем посты как есть */
    
    else return posts.filter(post => {
      console.log(area)
      return post[area as keyof Post].toLowerCase().includes(search)   /* Возвращаем посты только содержащие наш ввод. */
    })                                         
/* Для выбора области поиска (в названии или тексте) используем динамический ключ [area as keyof Post] (вызвали переменную area как строчку в массиве Post, для совместимости) */

  }

}
