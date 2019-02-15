import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './contact/form/form.component';

@NgModule({
  declarations: [ContactComponent, MapComponent, FormComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ContactComponent, MapComponent, FormComponent]
})
export class ContactModule { }
