import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent, ContactMapComponent, ContactFormComponent]
})
export class ContactModule { }
