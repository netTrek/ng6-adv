import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';
import { FormsModule } from '@angular/forms';
import { DateFieldComponent } from './contact/form/date-field/date-field.component';
import { FormDirDirective } from './contact/form/form-dir.directive';
import { DateFieldDirective } from './contact/form/date-field/date-field.directive';

@NgModule({
  declarations: [ContactComponent, MapComponent, FormComponent, DateFieldComponent, FormDirDirective, DateFieldDirective],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule { }
