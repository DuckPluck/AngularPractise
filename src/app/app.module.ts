import { NgModule, Provider } from '@angular/core';                       //импорт компонентов
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A2DynamicInsertsComponent } from './a2-dynamic-inserts/a2-dynamic-inserts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { B1PostFormComponent } from './b1-elements-transfer/b1-post-form/b1-post-form.component';
import { B1PostComponent } from './b1-elements-transfer/b1-post/b1-post.component';
import { B2FocusControlComponent } from './b2-focus-control/b2-focus-control.component';
import { B3LifecycleHooksComponent } from './b3-lifecycle-hooks/b3-main/b3-lifecycle-hooks.component';
import { B1ElementsTransferComponent } from './b1-elements-transfer/b1-main/b1-main.component';
import { B3PostComponent } from './b3-lifecycle-hooks/b3-post/b3-post.component';
import { B3PostFormComponent } from './b3-lifecycle-hooks/b3-post-form/b3-post-form.component';
import { B4ChangeDetectionStrategyComponent } from './b4-change-detection-strategy/b4-main/b4-change-detection-strategy.component';
import { B4PostComponent } from './b4-change-detection-strategy/b4-post/b4-post.component';
import { B5ViewEncapsulationStyleComponent } from './b5-view-encapsulation-style/b5-main/b5-view-encapsulation-style.component';
import { B5PostComponent } from './b5-view-encapsulation-style/b5-post/b5-post.component';
import { StyleDirective } from './c1-directives/style.directive';
import { C1MainComponent } from './c1-directives/c1-main/c1-main.component';
import { C2MainComponent } from './c2-event-directives/c2-main/c2-main.component';
import { C2EventDirectivesDirective } from './c2-event-directives/c2-event-directives.directive';
import { C3TransferParameterIntoDirectiveDirective } from './c3-transfer-parameter-into-directive/c3-transfer-parameter-into-directive.directive';
import { C3MainComponent } from './c3-transfer-parameter-into-directive/c3-main/c3-main.component';
import { C4MainComponent } from './c4-host-binding-in-directive/c4-main/c4-main.component';
import { C4HostBindingInDirectiveDirective } from './c4-host-binding-in-directive/c4-host-binding-in-directive.directive';
import { C5MainComponent } from './c5-structure-directive/c5-main/c5-main.component';
import { C5StructureDirectiveDirective } from './c5-structure-directive/c5-structure-directive.directive';
import { D1PipeNumberComponent } from './d1-pipe-number/d1-pipe-number.component';
import { D2PipeStringComponent } from './d2-pipe-string/d2-pipe-string.component';
import { D3PipeDateComponent } from './d3-pipe-date/d3-pipe-date.component';
import { D4PipeObjComponent } from './d4-pipe-obj/d4-pipe-obj.component';
import { MultByPipe } from './d5-pipe-creation/d5-pipe-creation.component';
import { D5MainComponent } from './d5-pipe-creation/d5-main/d5-main.component';
import { ExMarksPipe } from './d5-pipe-creation/ex-marks.pipe';
import { D6MainComponent } from './d6-pipe-lists-filter/d6-main/d6-main.component';
import { D6PipeListsFilterPipe } from './d6-pipe-lists-filter/d6-pipe-lists-filter.pipe';
import { D7MainComponent } from './d7-pipe-async/d7-pipe-async.component';
import { E1MainComponent } from './e1-services/e1-main/e1-main.component';
import { E1SubComponent } from './e1-services/e1-sub/e1-sub.component';
import { E2MainComponent } from './e2-services-inside-service/e2-main/e2-main.component';
import { F1FormsComponent } from './f1-forms/f1-forms.component';
import { F3NgModelsComponent } from './f3-ng-models/f3-ng-models.component';
import { F3MainComponent } from './f3-ng-models/f3-main/f3-main.component';
import { G1ServerHttpclientComponent } from './g1-server-httpclient/g1-server-httpclient.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './g2-interceptor/auth.interceptor';
import { H1AboutComponent } from './h1-routing/h1-about/about.component';
import { H1AboutExtraComponent } from './h1-routing/h1-about-extra/about-extra.component';
import { H1HomeComponent } from './h1-routing/h1-home/home.component';
import { H1PostComponent } from './h1-routing/h1-post/post.component';
import { H1PostsComponent } from './h1-routing/h1-posts/posts.component';
import { H1MainComponent } from './h1-routing/h1-main/main.component';
import { AppRoutingModule } from './h1-routing/app-routing.module';
import { H1ErrorPageComponent } from './h1-routing/h1-error-page/h1-error-page.component';
import { H1ResolvedPostComponent } from './h1-routing/h1-resolved-post/resolved-post.component';
import { AboutExtraPageComponent } from './i1-module/i1-about-page/i1-about-extra-page/i1-about-extra-page.component';
import { AboutPageComponent } from './i1-module/i1-about-page/i1-about-page.component';
import { HomePageComponent } from './i1-module/i1-home-page/i1-home-page.component';
import { I1MainComponent } from './i1-module/i1-main/i1-main.component';
import { PageNamePipe } from './i1-module/i1-shared/i1-page-name.pipe';


const INTERCEPTOR_PROVIDER: Provider = {      // Создаем переменную с параметрами интерсептора для регистрации в providers (g2)
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true                                 // multi: true - чтобы несколько интерсепторов не перезаписывались, а выполнялись поочередно
}

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
    StyleDirective,
    C1MainComponent,
    C2MainComponent,
    C2EventDirectivesDirective,
    C3TransferParameterIntoDirectiveDirective,
    C3MainComponent,
    C4MainComponent,
    C4HostBindingInDirectiveDirective,
    C5MainComponent,
    C5StructureDirectiveDirective,
    D1PipeNumberComponent,
    D2PipeStringComponent,
    D3PipeDateComponent,
    D4PipeObjComponent,
    MultByPipe,
    D5MainComponent,
    ExMarksPipe,
    D6MainComponent,
    D6PipeListsFilterPipe,
    D7MainComponent,
    E1MainComponent,
    E1SubComponent,
    E2MainComponent,
    F1FormsComponent,
    F3NgModelsComponent,
    F3MainComponent,
    G1ServerHttpclientComponent,
    H1AboutComponent,
    H1AboutExtraComponent,
    H1HomeComponent,
    H1PostComponent,
    H1PostsComponent,
    H1MainComponent,
    H1ErrorPageComponent,
    H1ResolvedPostComponent,
    AboutExtraPageComponent,
    AboutPageComponent,
    HomePageComponent,
    I1MainComponent,
    PageNamePipe

  ],
  imports: [
    BrowserModule,                                  // стандартный модуль
    FormsModule,                                    // реализовываем для 2way binding  (a5)
    ReactiveFormsModule,                            // добавляем для работы с формами (f1)
    HttpClientModule,                               // для работы с http клиентом  (g1)
    AppRoutingModule                                // регистрируем роутинг модуль (h1)
  ],
  providers: [
    INTERCEPTOR_PROVIDER                            // регистрируем переменную INTERCEPTOR_PROVIDER, созданную выше с настройками для работы с интерсептором (g2)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
