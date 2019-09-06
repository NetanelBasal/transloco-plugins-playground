import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [TodosPageComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    TranslocoModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: 'todos'
  }]
})
export class TodosModule {
}
