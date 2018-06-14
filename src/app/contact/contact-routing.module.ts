import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {
    path     : '',
    component: ContactComponent,
    children : [
      {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'map'
      },
      {
        path     : 'map',
        component: ContactMapComponent
      },
      {
        path     : 'form',
        component: ContactFormComponent
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
