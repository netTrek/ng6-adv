import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactFormComponent, ContactMapComponent, ContactComponent]
})
export class ContactModule { }
