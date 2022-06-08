import { NgModule } from '@angular/core';                       //импорт компонентов
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post4Component } from './post4/post4.component';
import { Post3Component } from './post3/post3.component';
import { WayBindingComponent } from './way-binding/way-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,                                   //все компоненты
    PostComponent,
    Post2Component,
    Post4Component,
    Post3Component,
    WayBindingComponent
  ],
  imports: [
    BrowserModule,                                  //стандартный модуль
    FormsModule                                     //реализовываем для way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
