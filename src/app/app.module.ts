import { NgModule } from '@angular/core';                       //импорт компонентов
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A2DynamicInsertsComponent } from './a2-dynamic-inserts/a2-dynamic-inserts.component';
import { FormsModule } from '@angular/forms';
import { A6StyleManipulateComponent } from './a6-style-manipulate/a6-style-manipulate.component';
import { A1PostComponent } from './a1-post/a1-post.component';
import { A3EventBindingComponent } from './a3-event-binding/a3-event-binding.component';
import { A4TsFileOnlyComponent } from './a4-ts-file-only/a4-ts-file-only.component';
import { A5TwoWayBindingComponent } from './a5-two-way-binding/a5-two-way-binding.component';
import { A7ClassManipulateComponent } from './a7-class-manipulate/a7-class-manipulate.component';
import { A8IfElseComponent } from './a8-if-else/a8-if-else.component';
import { A9SwitchComponent } from './a9-switch/a9-switch.component';
import { A10ForComponent } from './a10-for/a10-for.component';
import { A11PipesBasicsComponent } from './a11-pipes-basics/a11-pipes-basics.component';
import { B1PostFormComponent } from './b1-post-form/b1-post-form.component';
import { B1PostComponent } from './b1-post/b1-post.component';
import { B2FocusControlComponent } from './b2-focus-control/b2-focus-control.component';
import { B3LifecycleHooksComponent } from './b3-lifecycle-hooks/b3-lifecycle-hooks.component';
import { B1ElementsTransferComponent } from './b1-elements-transfer/b1-elements-transfer.component';
import { B3PostComponent } from './b3-post/b3-post.component';
import { B3PostFormComponent } from './b3-post-form/b3-post-form.component';
import { B4ChangeDetectionStrategyComponent } from './b4-change-detection-strategy/b4-change-detection-strategy.component';
import { B4PostComponent } from './b4-post/b4-post.component';
import { B5ViewEncapsulationStyleComponent } from './b5-view-encapsulation-style/b5-view-encapsulation-style.component';
import { B5PostComponent } from './b5-post/b5-post.component';

@NgModule({
  declarations: [
    AppComponent,                                   //все компоненты
    A2DynamicInsertsComponent,
    A6StyleManipulateComponent,
    A1PostComponent,
    A3EventBindingComponent,
    A4TsFileOnlyComponent,
    A5TwoWayBindingComponent,
    A7ClassManipulateComponent,
    A8IfElseComponent,
    A9SwitchComponent,
    A10ForComponent,
    A11PipesBasicsComponent,
    B1PostFormComponent,
    B1PostComponent,
    B2FocusControlComponent,
    B3LifecycleHooksComponent,
    B1ElementsTransferComponent,
    B3PostComponent,
    B3PostFormComponent,
    B4ChangeDetectionStrategyComponent,
    B4PostComponent,
    B5ViewEncapsulationStyleComponent,
    B5PostComponent,
  ],
  imports: [
    BrowserModule,                                  //стандартный модуль
    FormsModule                                     //реализовываем для way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
