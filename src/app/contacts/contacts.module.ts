import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [ContactsPageComponent],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: 'contacts'
  }],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    TranslocoModule
  ]
})
export class ContactsModule { }
