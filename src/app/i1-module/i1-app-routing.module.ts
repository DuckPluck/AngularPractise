import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {HomePageComponent} from './i1-home-page/i1-home-page.component'
import {AboutPageComponent} from './i1-about-page/i1-about-page.component'
import {AboutExtraPageComponent} from './i1-about-page/i1-about-extra-page/i1-about-extra-page.component'

// Есть три роута - 'about' и в нем 'extra', 'home'

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'about', component: AboutPageComponent, children: [
      {path: 'extra', component: AboutExtraPageComponent}
    ]},
    {path: '', component: HomePageComponent, pathMatch: 'full'}     // pathMatch чтобы не было ошибки при пустом роуте
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {

}