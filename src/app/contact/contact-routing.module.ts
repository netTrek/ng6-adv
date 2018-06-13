import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMapComponent } from './contact-map/contact-map.component';

const routes: Routes = [
  {
    path     : '',
    component: ContactComponent,
    children : [
      {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'form'
      },
      {
        path     : 'form',
        component: ContactFormComponent
      },
      {
        path     : 'map',
        component: ContactMapComponent
      }
    ]
  }
];

@NgModule ( {
  imports: [ RouterModule.forChild ( routes ) ],
  exports: [ RouterModule ]
} )
export class ContactRoutingModule {
}
